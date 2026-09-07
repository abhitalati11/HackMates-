/* =========================================================
   TEAMFORGE MATCHING ENGINE
   Weighted scoring:
   Skills 40%
   Role 20%
   Interest 15%
   Experience 10%
   Availability 10%
   Team Gap 5%
========================================================= */

async function getCurrentProject() {
  const {
    data: { user },
    error: authError
  } = await supabaseClient.auth.getUser();

  if (authError || !user) {
    throw new Error("User is not authenticated.");
  }

  const { data, error } = await supabaseClient
    .from("projects")
    .select(`
      id,
      name,
      description,
      category,
      team_size,
      project_skills (skill),
      project_roles (role),
      team_members (user_id)
    `)
    .eq("leader_id", user.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (error) {
    throw error;
  }

  return data;
}


function normalize(value) {
  return String(value || "").trim().toLowerCase();
}


function overlappingSkills(a = [], b = []) {
  return a.filter((skill) => {
    const x = normalize(skill);

    return b.some((candidate) => {
      const y = normalize(candidate);

      return (
        x === y ||
        x.includes(y) ||
        y.includes(x)
      );
    });
  });
}


function parseAvailability(value) {
  const numbers = String(value || "")
    .match(/\d+/g)
    ?.map(Number) || [];

  return numbers.length ? Math.max(...numbers) : 5;
}


function experienceScore(level) {
  const value = normalize(level);

  if (value === "advanced") return 10;
  if (value === "intermediate") return 8;

  return 5;
}


function calculateMatch(candidate, project, missingSkills) {

  const requiredSkills = project.requiredSkills;
  const requiredRoles = project.requiredRoles;

  /* =========================
     1. SKILL MATCH — 40%
  ========================= */

  const matchedSkills = overlappingSkills(
    requiredSkills,
    candidate.skills
  );

  const skillPoints = Math.round(
    (matchedSkills.length /
      Math.max(requiredSkills.length, 1)) * 40
  );


  /* =========================
     2. ROLE — 20%
  ========================= */

  let rolePoints = 5;

  if (
    requiredRoles.some(
      (role) => normalize(role) === normalize(candidate.role)
    )
  ) {
    rolePoints = 20;
  }


  /* =========================
     3. PROJECT INTEREST — 15%
  ========================= */

  const projectWords = [
    project.name,
    project.description,
    project.category
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  const interests = Array.isArray(candidate.interests)
    ? candidate.interests
    : String(candidate.interests || "")
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean);

  const matchedInterests = interests.filter((interest) =>
    projectWords.includes(normalize(interest))
  );

  const interestPoints = Math.min(
    15,
    matchedInterests.length * 5
  );


  /* =========================
     4. EXPERIENCE — 10%
  ========================= */

  const experiencePoints =
    experienceScore(candidate.skill_level);


  /* =========================
     5. AVAILABILITY — 10%
  ========================= */

  const hours = parseAvailability(candidate.availability);

  let availabilityPoints = 5;

  if (hours >= 15) {
    availabilityPoints = 10;
  } else if (hours >= 10) {
    availabilityPoints = 7;
  }


  /* =========================
     6. TEAM SKILL GAP — 5%
  ========================= */

  const filledGaps = overlappingSkills(
    missingSkills,
    candidate.skills
  );

  const gapPoints = missingSkills.length
    ? Math.round(
        (filledGaps.length / missingSkills.length) * 5
      )
    : 0;


  const total = Math.min(
    100,
    skillPoints +
      rolePoints +
      interestPoints +
      experiencePoints +
      availabilityPoints +
      gapPoints
  );


  return {
    total,
    breakdown: [
      ["Skill Match", skillPoints, 40],
      ["Role Compatibility", rolePoints, 20],
      ["Project Interest", interestPoints, 15],
      ["Experience", experiencePoints, 10],
      ["Availability", availabilityPoints, 10],
      ["Team Skill Gap", gapPoints, 5]
    ],
    matchedSkills,
    filledGaps,
    matchedInterests
  };
}


/* =========================================================
   MAIN MATCHING FUNCTION
========================================================= */

async function getRecommendedTeammates(limit = 6) {

  const projectData = await getCurrentProject();

  const project = {
    ...projectData,

    requiredSkills:
      (projectData.project_skills || [])
        .map((x) => x.skill)
        .filter(Boolean),

    requiredRoles:
      (projectData.project_roles || [])
        .map((x) => x.role)
        .filter(Boolean)
  };


  /* =========================
     CURRENT TEAM SKILLS
  ========================= */

  const memberIds =
    (projectData.team_members || [])
      .map((member) => member.user_id)
      .filter(Boolean);


  let teamProfiles = [];

  if (memberIds.length) {

    const { data, error } = await supabaseClient
      .from("profiles")
      .select(`
        id,
        name,
        skills,
        role,
        interests,
        skill_level,
        availability,
        college,
        branch,
        year
      `)
      .in("id", memberIds);

    if (error) {
      throw error;
    }

    teamProfiles = data || [];
  }


  /* =========================
     TEAM SKILLS
  ========================= */

  const teamSkills = [
    ...new Set(
      teamProfiles.flatMap(
        (member) => member.skills || []
      )
    )
  ];


  /* =========================
     MISSING SKILLS
  ========================= */

  const missingSkills =
    project.requiredSkills.filter(
      (requiredSkill) =>
        !overlappingSkills(
          [requiredSkill],
          teamSkills
        ).length
    );


  /* =========================
     GET ALL OTHER PROFILES
  ========================= */

  const { data: allProfiles, error: candidateError } =
  await supabaseClient
    .from("profiles")
    .select(`
      id,
      name,
      skills,
      role,
      interests,
      skill_level,
      availability,
      college,
      branch,
      year
    `);

if (candidateError) {
  throw candidateError;
}

const candidates = (allProfiles || []).filter(
  (profile) => !memberIds.includes(profile.id)
);

console.log("ALL PROFILES:", allProfiles);
console.log("TEAM MEMBERS:", memberIds);
console.log("CANDIDATES:", candidates);


  /* =========================
     SCORE EVERY CANDIDATE
  ========================= */

  const results = (candidates || [])
    .map((candidate) => {

      const match = calculateMatch(
        candidate,
        project,
        missingSkills
      );

      return {
        ...candidate,
        match: match.total,
        matchScore: match.total,
        breakdown: match.breakdown,
        matchedSkills: match.matchedSkills,
        filledGaps: match.filledGaps,
        matchedInterests: match.matchedInterests
      };
    })
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, limit);


  console.log("TeamForge project:", project);
  console.log("Team skills:", teamSkills);
  console.log("Missing skills:", missingSkills);
  console.log("Recommended teammates:", results);

  return results;
}

async function addRecommendedTeammate(userId, button) {
  try {
    button.disabled = true;
    button.textContent = "Adding...";

    const project = await getCurrentProject();

    const { error } = await supabaseClient
      .from("team_members")
      .insert({
        project_id: project.id,
        user_id: userId
      });

    if (error) {
      // Already a member
      if (error.code === "23505") {
        button.textContent = "Already Added";
        return;
      }

      throw error;
    }

    button.textContent = "✓ Added";
    button.classList.remove("bg-[var(--brand)]", "text-black");
    button.classList.add(
      "bg-[rgba(181,255,0,0.1)]",
      "text-[var(--brand)]"
    );

    showToast("Teammate added successfully!", "success");

  } catch (error) {
    console.error("Add teammate error:", error);

    button.disabled = false;
    button.textContent = "Add Teammate";

    showToast("Could not add teammate.", "info");
  }
}