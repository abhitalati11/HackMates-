/* ============================= MOCK DATA ============================= */
const students = [
  {
    id: 1,
    name: "Ananya Shah",
    role: "ML Engineer",
    match: 94,
    skills: ["Machine Learning", "Python", "Figma"],
    college: "IIT Bombay",
    branch: "Computer Science",
    year: "3rd Year",
    about:
      "Passionate ML engineer with hands-on experience building healthcare AI models, plus a strong eye for UI/UX design. Loves turning research into usable products.",
    skillLevels: {
      Python: 92,
      "Machine Learning": 88,
      TensorFlow: 80,
      Figma: 68,
    },
    projects: [
      "Diabetes Risk Prediction Model",
      "Campus Health Chatbot",
      "Crop Disease Classifier",
    ],
    hackathons: [
      "Smart India Hackathon 2024 — Finalist",
      "HealthTech Hack — Winner",
    ],
    interests: ["AI", "Healthcare", "Hackathons"],
    availability: "10–20 hrs/week",
    github: "github.com/ananyashah",
    linkedin: "linkedin.com/in/ananyashah",
    summary:
      "Strong ML experience and UI/UX knowledge. Ananya fills two of your team's biggest skill gaps.",
    why: "Ananya is recommended because she has advanced Python and Machine Learning skills, has worked on AI healthcare projects, is genuinely interested in healthcare products, and directly fills the Machine Learning skill gap in your current team.",
    breakdown: [
      ["Skill Match", 40, 40],
      ["Role Compatibility", 20, 18],
      ["Project Interest", 15, 14],
      ["Experience", 10, 9],
      ["Availability", 10, 8],
      ["Team Skill Gap", 5, 5],
    ],
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Backend Developer",
    match: 91,
    skills: ["React", "Node.js", "MongoDB"],
    college: "BITS Pilani",
    branch: "Computer Science",
    year: "4th Year",
    about:
      "Full-stack developer who specializes in scalable backend systems and API design. Enjoys pairing with frontend teams to ship fast.",
    skillLevels: { "Node.js": 90, MongoDB: 85, React: 70, AWS: 60 },
    projects: [
      "Campus Marketplace API",
      "Realtime Chat Platform",
      "E-commerce Backend",
    ],
    hackathons: ["HackNITR — 2nd Place", "DevJam 2023 — Participant"],
    interests: ["Web Dev", "Cloud", "Open Source"],
    availability: "15–25 hrs/week",
    github: "github.com/rahulpatel",
    linkedin: "linkedin.com/in/rahulpatel",
    summary:
      "Strong backend experience that complements your existing frontend team.",
    why: "Rahul is recommended because his Node.js and MongoDB backend expertise pairs naturally with your team's frontend and ML focus, and his prior hackathon experience shows he can ship features fast under time pressure.",
    breakdown: [
      ["Skill Match", 36, 40],
      ["Role Compatibility", 19, 20],
      ["Project Interest", 12, 15],
      ["Experience", 10, 10],
      ["Availability", 9, 10],
      ["Team Skill Gap", 5, 5],
    ],
  },
  {
    id: 3,
    name: "Meet Shah",
    role: "UI/UX Designer",
    match: 87,
    skills: ["UI/UX", "Figma", "Research"],
    college: "NID Ahmedabad",
    branch: "Design",
    year: "3rd Year",
    about:
      "Product designer focused on accessible, human-centered healthcare interfaces. Strong in user research and rapid prototyping.",
    skillLevels: {
      Figma: 94,
      "UI/UX": 90,
      "User Research": 82,
      Prototyping: 88,
    },
    projects: [
      "Hospital Appointment App Redesign",
      "Mental Health Companion App",
    ],
    hackathons: ["Design Sprint Gujarat — Winner"],
    interests: ["Design Systems", "Healthcare", "Accessibility"],
    availability: "10–15 hrs/week",
    github: "github.com/meetshah",
    linkedin: "linkedin.com/in/meetshah",
    summary:
      "Adds strong product-design expertise that your current team lacks.",
    why: "Meet is recommended because of deep UI/UX and user-research skills, prior healthcare-focused design work, and because it directly fills the UI/UX gap your team analysis identified.",
    breakdown: [
      ["Skill Match", 34, 40],
      ["Role Compatibility", 20, 20],
      ["Project Interest", 13, 15],
      ["Experience", 8, 10],
      ["Availability", 9, 10],
      ["Team Skill Gap", 5, 5],
    ],
  },
];

const teamsData = [
  {
    id: 1,
    name: "AI Healthcare Assistant",
    tags: ["AI/ML", "Healthcare"],
    stack: "AI • Healthcare • React",
    members: 3,
    size: 4,
    looking: ["ML Engineer", "UI/UX Designer"],
    desc: "AI-powered assistant for providing basic healthcare information to patients and doctors alike.",
    team: [
      { name: "Varshil", role: "Frontend Developer", init: "V" },
      { name: "Jay", role: "Backend Developer", init: "J" },
      { name: "Ananya", role: "ML Engineer", init: "A" },
    ],
    requiredSkills: ["Python", "Machine Learning", "React", "Figma"],
    skillHealth: [
      ["Frontend", 90],
      ["Backend", 82],
      ["ML / AI", 68],
      ["UI / UX", 30],
    ],
  },
  {
    id: 2,
    name: "Smart Campus",
    tags: ["IoT", "Web Development"],
    stack: "IoT • Web • Node.js",
    members: 4,
    size: 5,
    looking: ["ML Engineer"],
    desc: "An IoT-based platform to monitor and manage smart campus resources in real time.",
    team: [
      { name: "Priya", role: "Frontend Developer", init: "P" },
      { name: "Kunal", role: "Backend Developer", init: "K" },
      { name: "Sara", role: "IoT Engineer", init: "S" },
      { name: "Dev", role: "Product", init: "D" },
    ],
    requiredSkills: ["Node.js", "IoT", "React", "Python"],
    skillHealth: [
      ["Frontend", 78],
      ["Backend", 85],
      ["IoT", 80],
      ["ML / AI", 25],
    ],
  },
  {
    id: 3,
    name: "FinTrack",
    tags: ["FinTech", "Web Development"],
    stack: "FinTech • Analytics • React",
    members: 2,
    size: 4,
    looking: ["Backend Developer", "UI/UX Designer"],
    desc: "A personal finance tracker that gives students smart insights on spending habits.",
    team: [
      { name: "Om", role: "Frontend Developer", init: "O" },
      { name: "Riya", role: "Data Analyst", init: "R" },
    ],
    requiredSkills: ["React", "Node.js", "Figma", "Chart.js"],
    skillHealth: [
      ["Frontend", 75],
      ["Backend", 20],
      ["Design", 30],
      ["Analytics", 65],
    ],
  },
  {
    id: 4,
    name: "EcoSort",
    tags: ["AI/ML", "IoT"],
    stack: "AI • IoT • Sustainability",
    members: 3,
    size: 4,
    looking: ["Hardware Engineer"],
    desc: "Smart waste sorting system using computer vision and IoT sensors.",
    team: [
      { name: "Aarav", role: "ML Engineer", init: "A" },
      { name: "Nisha", role: "Embedded Dev", init: "N" },
      { name: "Yash", role: "Frontend", init: "Y" },
    ],
    requiredSkills: ["Python", "Computer Vision", "Arduino"],
    skillHealth: [
      ["ML / AI", 88],
      ["Hardware", 40],
      ["Frontend", 60],
    ],
  },
  {
    id: 5,
    name: "StudyBuddy",
    tags: ["UI/UX", "Web Development"],
    stack: "EdTech • Mobile • Design",
    members: 2,
    size: 4,
    looking: ["Frontend Developer", "UI/UX Designer"],
    desc: "A peer-matching study platform to help students find accountability partners.",
    team: [
      { name: "Ishaan", role: "Backend Developer", init: "I" },
      { name: "Tara", role: "Product", init: "T" },
    ],
    requiredSkills: ["React Native", "Figma", "Firebase"],
    skillHealth: [
      ["Backend", 70],
      ["Frontend", 25],
      ["Design", 20],
    ],
  },
];

const myTeamIds = [1, 2];
const filterTags = [
  "AI/ML",
  "Web Development",
  "FinTech",
  "Healthcare",
  "IoT",
  "UI/UX",
];

let incomingInvites = [
  {
    id: 1,
    name: "Meet Shah",
    project: "AI Healthcare Assistant",
    role: "UI/UX Designer",
    init: "M",
  },
];
let outgoingInvites = [
  {
    name: "Rahul Patel",
    project: "AI Healthcare Assistant",
    role: "Backend Developer",
  },
];

/* ============================= STATE ============================= */
const state = {
  invited: new Set(),
  requested: new Set(),
  activeTeamFilter: null,
  teamSize: 4,
};

/* ============================= PAGE / SCREEN NAV ============================= */
function showPage(id) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function showScreen(id) {
  showPage("app");
  document
    .querySelectorAll(".app-screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById("screen-" + id).classList.add("active");
  document
    .querySelectorAll(".nav-item")
    .forEach((n) => n.classList.remove("active"));
  const nav = document.querySelector(`.nav-item[data-nav="${id}"]`);
  if (nav) nav.classList.add("active");
  toggleSidebar(false);
  document.querySelector("main").scrollTo({ top: 0, behavior: "smooth" });
}
function toggleSidebar(open) {
  const sb = document.getElementById("sidebar");
  const ov = document.getElementById("sidebar-overlay");
  if (open) {
    sb.classList.remove("-translate-x-full");
    ov.classList.remove("hidden");
  } else {
    sb.classList.add("-translate-x-full");
    ov.classList.add("hidden");
  }
}

function startCreateTeamFlow() {
  showScreen("create-team");
  ctGoStep(1);
}
function startFindTeamFlow() {
  showScreen("discover-teams");
}
function finishOnboarding() {
  showToast("Welcome to TeamForge, your profile is ready!", "success");
  showScreen("dashboard");
}

/* ============================= TOASTS ============================= */
function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");

  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.style.position = "fixed";
    container.style.bottom = "24px";
    container.style.right = "24px";
    container.style.zIndex = "99999";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");

  toast.textContent = message;

  toast.style.padding = "12px 18px";
  toast.style.marginTop = "10px";
  toast.style.borderRadius = "10px";
  toast.style.background = "#1a1a1a";
  toast.style.color = "#fff";
  toast.style.border = "1px solid rgba(255,255,255,0.15)";
  toast.style.boxShadow = "0 8px 30px rgba(0,0,0,0.35)";
  toast.style.fontSize = "14px";

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();

    if (container.children.length === 0) {
      container.remove();
    }
  }, 3000);
}

/* ============================= MODALS ============================= */
function openModal(id) {
  document.getElementById(id).classList.add("active");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal("modal-match");
    closeModal("modal-why");
  }
});

/* ============================= CREATE TEAM WIZARD ============================= */
function ctGoStep(step) {
  document.getElementById("ct-step-1").classList.toggle("hidden", step !== 1);
  document.getElementById("ct-step-2").classList.toggle("hidden", step !== 2);
  const d1 = document.getElementById("stepdot-1"),
    d2 = document.getElementById("stepdot-2");
  if (step === 2) {
    d2.classList.add("bg-[var(--brand)]", "text-black");
    d2.classList.remove(
      "border",
      "border-[var(--border)]",
      "text-[var(--muted)]",
    );
  } else {
    d2.classList.remove("bg-[var(--brand)]", "text-black");
    d2.classList.add("border", "border-[var(--border)]", "text-[var(--muted)]");
  }
  document
    .getElementById("screen-create-team")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}
function ctChangeSize(delta) {
  state.teamSize = Math.max(2, Math.min(8, state.teamSize + delta));
  document.getElementById("ct-size").textContent = state.teamSize;
}

/* ============================= AI ANALYSIS ============================= */
async function startAnalysis() {
  const project = await createProjectFromForm();

  if (!project) {
    return;
  }

  showScreen("analysis");

  for (let i = 1; i <= 4; i++) {
    document.getElementById("an-check-" + i).classList.remove("done");
    document.getElementById("an-check-" + i).innerHTML = "";
    document.getElementById("an-step-" + i).classList.remove("active-step");
  }

  const steps = [1, 2, 3, 4];

  steps.forEach((s, idx) => {
    setTimeout(() => {
      document.getElementById("an-step-" + s).classList.add("active-step");

      setTimeout(() => {
        document.getElementById("an-check-" + s).classList.add("done");

        document.getElementById("an-check-" + s).innerHTML =
          '<svg class="icon" style="width:14px;height:14px;stroke:#000" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>';
      }, 550);
    }, idx * 900);
  });

  setTimeout(
    async () => {
      await renderSkillGap();
      showScreen("skill-gap");
    },
    steps.length * 900 + 700,
  );
}

/* ============================= CREATE PROJECT ============================= */

async function createProjectFromForm() {
  const name = document.getElementById("ct-name")?.value.trim();
  const description = document.getElementById("ct-desc")?.value.trim();
  const category = document.getElementById("ct-category")?.value || "Other";

  const skills = Array.from(
    document.querySelectorAll("#ct-skills .chip.selected"),
  ).map((chip) => chip.textContent.trim());

  const roles = Array.from(
    document.querySelectorAll("#ct-roles .chip.selected"),
  ).map((chip) => chip.textContent.trim());

  const teamSize = state.teamSize;

  if (!name) {
    showToast("Please give your project a name.", "info");
    return null;
  }

  if (skills.length === 0) {
    showToast("Select at least one required skill.", "info");
    return null;
  }

  const {
    data: { user },
    error: authError,
  } = await supabaseClient.auth.getUser();

  if (authError || !user) {
    console.error("Auth error:", authError);
    showToast("You must be logged in.", "info");
    return null;
  }

  console.log("Creating project for user:", user.id);

  /* ================================
     CREATE PROJECT
     ================================ */

  const { data: project, error: projectError } = await supabaseClient
    .from("projects")
    .insert({
      leader_id: user.id,
      name,
      description,
      category,
      team_size: teamSize,
    })
    .select()
    .single();

  if (projectError) {
    console.error("Project creation error:", projectError);
    showToast(`Project error: ${projectError.message}`, "info");
    return null;
  }

  console.log("Project created:", project);

  /* ================================
     SAVE REQUIRED SKILLS
     ================================ */

  const skillRows = skills.map((skill) => ({
    project_id: project.id,
    skill,
  }));

  const { error: skillsError } = await supabaseClient
    .from("project_skills")
    .insert(skillRows);

  if (skillsError) {
    console.error("Project skills error:", skillsError);
    showToast(`Skills error: ${skillsError.message}`, "info");
    return null;
  }

  /* ================================
     SAVE REQUIRED ROLES
     ================================ */

  if (roles.length > 0) {
    const roleRows = roles.map((role) => ({
      project_id: project.id,
      role,
    }));

    const { error: rolesError } = await supabaseClient
      .from("project_roles")
      .insert(roleRows);

    if (rolesError) {
      console.error("Project roles error:", rolesError);
      showToast(`Roles error: ${rolesError.message}`, "info");
      return null;
    }
  }

  /* ================================
     ADD LEADER AS TEAM MEMBER
     ================================ */

  const { error: memberError } = await supabaseClient
    .from("team_members")
    .insert({
      project_id: project.id,
      user_id: user.id,
    });

  if (memberError) {
    console.error("Team member error:", memberError);
    showToast(`Team member error: ${memberError.message}`, "info");
    return null;
  }

  console.log("Project setup complete:", project.id);

  showToast(`Project "${name}" created successfully!`, "success");

  return project;
}

/* ============================= SKILL GAP ============================= */
async function renderSkillGap() {
  try {
    const {
      data: { user },
      error: authError,
    } = await supabaseClient.auth.getUser();

    if (authError || !user) {
      console.error("Skill gap auth error:", authError);
      return;
    }

    // Get the latest project created by this user
    const { data: projects, error: projectError } = await supabaseClient
      .from("projects")
      .select(
        `
          id,
          name,
          project_skills (
            skill
          ),
          team_members (
            user_id
          )
        `,
      )
      .eq("leader_id", user.id)
      .order("created_at", { ascending: false })
      .limit(1);

    if (projectError) {
      console.error("Skill gap project error:", projectError);
      return;
    }

    if (!projects || projects.length === 0) {
      console.warn("No project found for skill gap.");
      return;
    }

    const project = projects[0];

    console.log("Skill gap project:", project);

    // Required skills from the project
    const requiredSkills = (project.project_skills || [])
      .map((item) => item.skill)
      .filter(Boolean);

    // Team member IDs
    const memberIds = (project.team_members || [])
      .map((member) => member.user_id)
      .filter(Boolean);

    console.log("Required skills:", requiredSkills);
    console.log("Team member IDs:", memberIds);

    // Get profiles of current team members
    let teamProfiles = [];

    if (memberIds.length > 0) {
      const { data, error: profileError } = await supabaseClient
        .from("profiles")
        .select("id, name, skills")
        .in("id", memberIds);

      if (profileError) {
        console.error("Team profiles error:", profileError);
        return;
      }

      teamProfiles = data || [];
    }

    console.log("Team profiles:", teamProfiles);

    // Combine all skills possessed by the current team
    const teamSkills = [
      ...new Set(teamProfiles.flatMap((member) => member.skills || [])),
    ];

    console.log("Combined team skills:", teamSkills);

    // Compare required skills against team skills
    const normalizedTeamSkills = teamSkills.map((skill) =>
      skill.trim().toLowerCase(),
    );

    const gapRows = requiredSkills.map((skill) => {
      const normalizedRequired = skill.trim().toLowerCase();

      const covered = normalizedTeamSkills.some(
        (teamSkill) =>
          teamSkill === normalizedRequired ||
          teamSkill.includes(normalizedRequired) ||
          normalizedRequired.includes(teamSkill),
      );

      return {
        label: skill,
        status: covered ? "strong" : "missing",
      };
    });

    const list = document.getElementById("skill-gap-list");

    if (!list) {
      console.error("skill-gap-list element not found.");
      return;
    }

    list.innerHTML = gapRows
      .map((row) => {
        let icon;
        let colorClass;
        let label;

        if (row.status === "strong") {
          icon = "✓";
          colorClass =
            "text-[var(--brand)] border-[rgba(181,255,0,0.35)] bg-[rgba(181,255,0,0.07)]";
          label = "Strong";
        } else {
          icon = "✕";
          colorClass =
            "text-[var(--red)] border-[rgba(248,113,113,0.4)] bg-[rgba(248,113,113,0.08)]";
          label = "Missing";
        }

        return `
          <div class="flex items-center justify-between px-4 py-3 rounded-xl border ${colorClass}">
            <span class="font-medium text-sm text-[var(--text)]">
              ${row.label}
            </span>

            <span class="text-sm font-semibold flex items-center gap-1.5">
              ${icon} ${label}
            </span>
          </div>
        `;
      })
      .join("");
  } catch (error) {
    console.error("Skill gap error:", error);
  }
}

function renderRecommendationsFromMatches(matches, animate = true) {
  const grid = document.getElementById("recs-grid");

  if (!grid) return;

  if (!matches || matches.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-16">
        <div class="text-4xl mb-4">👥</div>
        <h3 class="text-lg font-semibold text-[var(--text)]">
          No teammates found
        </h3>
        <p class="text-sm text-[var(--muted)] mt-2">
          Try adding more skills or roles to your project.
        </p>
      </div>
    `;
    return;
  }

  grid.innerHTML = matches
    .map((candidate, index) => {
      const initials = (candidate.name || "Student")
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase();

      const skills = candidate.skills || [];

      return `
        <div
          class="rounded-2xl border border-white/10 bg-white/[0.03] p-5
                 hover:border-[rgba(181,255,0,0.35)]
                 hover:bg-white/[0.045] transition-all duration-300"
          style="${animate ? `animation: fadeInUp 0.4s ease ${index * 0.08}s both;` : ""}"
        >

          <!-- HEADER -->
          <div class="flex items-center justify-between gap-4">

            <div class="flex items-center gap-3 min-w-0">

              <div
                class="w-11 h-11 rounded-xl flex items-center justify-center
                       bg-[var(--brand)] text-black font-bold text-sm shrink-0"
              >
                ${initials}
              </div>

              <div class="min-w-0">
                <h3 class="font-semibold text-[var(--text)] truncate">
                  ${candidate.name || "Student"}
                </h3>

                <p class="text-sm text-[var(--muted)] truncate">
                  ${candidate.role || "Team Member"}
                </p>
              </div>

            </div>

            <!-- SCORE -->
            <div class="text-right shrink-0">
              <div class="text-2xl font-bold text-[var(--brand)]">
                ${candidate.matchScore}%
              </div>

              <div class="text-[11px] text-[var(--muted)] uppercase tracking-wide">
                Match
              </div>
            </div>

          </div>


          <!-- SKILLS -->
          <div class="mt-5 flex flex-wrap gap-2">

            ${skills
              .slice(0, 5)
              .map(
                (skill) => `
                  <span
                    class="px-3 py-1 rounded-full text-xs
                           border border-white/10
                           bg-white/[0.04]
                           text-[var(--text)]"
                  >
                    ${skill}
                  </span>
                `,
              )
              .join("")}

          </div>


          <!-- MATCHED SKILLS -->
          ${
            candidate.matchedSkills && candidate.matchedSkills.length
              ? `
                <div class="mt-5">
                  <div class="text-xs text-[var(--muted)] mb-2">
                    Matched skills
                  </div>

                  <div class="flex flex-wrap gap-2">
                    ${candidate.matchedSkills
                      .map(
                        (skill) => `
                          <span
                            class="px-2.5 py-1 rounded-lg text-xs
                                   text-[var(--brand)]
                                   bg-[rgba(181,255,0,0.08)]
                                   border border-[rgba(181,255,0,0.2)]"
                          >
                            ✓ ${skill}
                          </span>
                        `,
                      )
                      .join("")}
                  </div>
                </div>
              `
              : `
                <div class="mt-5 text-xs text-[var(--muted)]">
                  Potential team fit
                </div>
              `
          }


          <!-- FOOTER -->
          <div
  class="mt-5 pt-4 border-t border-white/10
         flex items-center justify-between gap-3"
>

  <button
    type="button"
    onclick="openWhyModal('${candidate.id}')"
    class="text-xs font-semibold text-[var(--brand)]
           hover:underline"
  >
    Why this person →
  </button>

  <button
    type="button"
    onclick="addRecommendedTeammate('${candidate.id}', this)"
    class="px-4 py-2 rounded-xl text-xs font-bold
           bg-[var(--brand)] text-black
           hover:opacity-90 transition"
  >
    + Add Teammate
  </button>

</div>

        </div>
      `;
    })
    .join("");
}

async function addRecommendedTeammate(candidateId, button) {
  try {
    button.disabled = true;
    button.textContent = "Sending...";

    const project = await getCurrentProject();
    if (!project) {
      showToast("Create or select a project first.", "info");
      button.disabled = false;
      button.textContent = "+ Add Teammate";
      return;
    }

    const {
      data: { user },
      error: authError
    } = await supabaseClient.auth.getUser();

    if (authError || !user) throw authError;

    const { error } = await supabaseClient.from("team_requests").insert({
      project_id: project.id,
      sender_id: user.id,
      receiver_id: candidateId,
      status: "pending"
    });

    if (error) {
      if (error.code === "23505") {
        button.textContent = "Invite Sent ✓";
        return;
      }
      throw error;
    }

    button.textContent = "Invite Sent ✓";
    showToast("Invitation sent to candidate!", "success");
  } catch (err) {
    console.error("Error adding teammate:", err);
    button.disabled = false;
    button.textContent = "+ Add Teammate";
    showToast("Could not send invitation.", "info");
  }
}

async function loadAvailableTeams() {
  try {
    const {
      data: { user },
      error: authError
    } = await supabaseClient.auth.getUser();

    if (authError || !user) {
      console.error("Auth error:", authError);
      return;
    }

    const { data: projects, error } = await supabaseClient
      .from("projects")
      .select(`
        id,
        name,
        description,
        category,
        team_size,
        created_at,
        profiles:leader_id (
          name
        ),
        team_members (
          user_id
        )
      `)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Teams error:", error);
      showToast("Could not load teams.", "info");
      return;
    }

    const availableTeams = (projects || []).filter((project) => {
      const alreadyMember = (project.team_members || [])
        .some((member) => member.user_id === user.id);

      return !alreadyMember;
    });

    renderAvailableTeams(availableTeams);

  } catch (error) {
    console.error("Load teams error:", error);
  }
}

function renderAvailableTeams(teams) {
  const container = document.getElementById("teams-list");

  if (!container) {
    console.error("teams-list element not found.");
    return;
  }

  if (!teams.length) {
    container.innerHTML = `
      <div class="text-center py-12 text-[var(--muted)]">
        <div class="text-3xl mb-3">👥</div>
        <p>No teams available to join right now.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = teams.map((team) => {
    const members = team.team_members || [];
    const leaderName =
      team.profiles?.name || "Team Leader";

    return `
      <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        
        <div class="flex items-start justify-between gap-4">
          <div>
            <h3 class="text-lg font-semibold text-[var(--text)]">
              ${team.name}
            </h3>

            <p class="text-sm text-[var(--muted)] mt-1">
              Led by ${leaderName}
            </p>
          </div>

          <span class="px-3 py-1 rounded-full text-xs
                       border border-white/10
                       bg-white/[0.04]
                       text-[var(--muted)]">
            ${team.category || "Other"}
          </span>
        </div>

        <p class="text-sm text-[var(--muted)] mt-4">
          ${team.description || "No description provided."}
        </p>

        <div class="flex items-center justify-between mt-5 pt-4
                    border-t border-white/10">

          <span class="text-xs text-[var(--muted)]">
            👥 ${members.length}/${team.team_size || "—"} members
          </span>

          <button
            type="button"
            onclick="joinTeam('${team.id}', this)"
            class="px-4 py-2 rounded-xl text-xs font-bold
                   bg-[var(--brand)] text-black
                   hover:opacity-90 transition"
          >
            Join Team
          </button>

        </div>
      </div>
    `;
  }).join("");
}


// Helper to fetch the logged-in user's active/latest project
async function getCurrentProject() {
  const { data: { user }, error: authErr } = await supabaseClient.auth.getUser();
  if (authErr || !user) return null;

  const { data: projects, error } = await supabaseClient
    .from("projects")
    .select(`
      id,
      name,
      description,
      category,
      project_skills ( skill ),
      project_roles ( role )
    `)
    .eq("leader_id", user.id)
    .order("created_at", { ascending: false })
    .limit(1);

  if (error || !projects || projects.length === 0) return null;
  return projects[0];
}

// Helper to fetch candidates and score them against the project
async function getRecommendedTeammates(limit = 6) {
  const project = await getCurrentProject();
  if (!project) return [];

  const requiredSkills = (project.project_skills || []).map((s) => s.skill.toLowerCase());
  const requiredRoles = (project.project_roles || []).map((r) => r.role.toLowerCase());

  // Fetch candidate profiles (excluding current user)
  const { data: { user } } = await supabaseClient.auth.getUser();
  const { data: profiles, error } = await supabaseClient
    .from("profiles")
    .select("*")
    .neq("id", user.id);

  if (error || !profiles) return [];

  // Calculate match scores for each candidate
  const scoredCandidates = profiles.map((candidate) => {
    const candidateSkills = (candidate.skills || []).map((s) => s.toLowerCase());
    const candidateRole = (candidate.role || "").toLowerCase();

    // 1. Skill match calculation
    const matchedSkills = candidateSkills.filter((skill) =>
      requiredSkills.some((req) => req.includes(skill) || skill.includes(req))
    );

    let score = 0;
    if (requiredSkills.length > 0) {
      score += Math.round((matchedSkills.length / requiredSkills.length) * 60);
    } else {
      score += 30; // base score if no required skills set
    }

    // 2. Role compatibility calculation
    if (requiredRoles.some((role) => candidateRole.includes(role) || role.includes(candidateRole))) {
      score += 30;
    } else {
      score += 10;
    }

    // 3. Experience & Availability bonus
    if (candidate.availability) score += 10;

    const matchScore = Math.min(99, Math.max(45, score));

    return {
      id: candidate.id,
      name: candidate.name || "Student",
      role: candidate.role || "Team Member",
      branch: candidate.branch || "Computer Science",
      year: candidate.year || "3rd Year",
      matchScore: matchScore,
      skills: candidate.skills || [],
      matchedSkills: candidate.skills?.filter((s) =>
        requiredSkills.some((req) => req.includes(s.toLowerCase()) || s.toLowerCase().includes(req))
      ) || [],
      filledGaps: matchedSkills,
      availability: candidate.availability || "10–15 hrs/week",
      skill_level: candidate.skill_level || "Intermediate"
    };
  });

  // Sort candidates by matchScore descending
  return scoredCandidates
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, limit);
}

// Updated entry function triggered by "Find Teammates"
async function findTeammates() {
  showScreen("recommendations");

  const grid = document.getElementById("recs-grid");
  if (grid) {
    grid.innerHTML = `<div class="col-span-full text-center py-12 text-[var(--muted)]">🤖 Finding the best matching teammates for your project...</div>`;
  }

  try {
    const recommendations = await getRecommendedTeammates(6);
    renderRecommendationsFromMatches(recommendations, true);
  } catch (error) {
    console.error("Matching error:", error);
    showToast("Could not generate teammate recommendations.", "info");
  }
}

/* ============================= RECOMMENDATIONS ============================= */
async function renderRecommendations(animate = true) {
  const grid = document.getElementById("recs-grid");
  if (!grid) return;

  grid.innerHTML = `<div class="col-span-full text-center py-12 text-[var(--muted)]">🤖 Finding the best matching teammates for your project...</div>`;

  try {
    const recommendations = await getRecommendedTeammates(6);
    renderRecommendationsFromMatches(recommendations, animate);
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    grid.innerHTML = `<p class="col-span-full text-center text-[var(--muted)] py-10">Could not load recommendations.</p>`;
  }
}
function recCardHTML(s, i) {
  return `
  <div class="glass-strong rounded-3xl p-6 card-hover flex flex-col" style="animation:fadeUp .5s ease ${i * 0.08}s both;">
    <div class="flex items-start justify-between mb-4">
      <div class="flex items-center gap-3">
        <div class="avatar w-12 h-12 rounded-full text-lg">${s.name[0]}</div>
        <div>
          <p class="font-semibold">${s.name}</p>
          <p class="text-xs text-[var(--muted)]">${s.role}</p>
        </div>
      </div>
      <button onclick="openMatchModal(${s.id})" class="text-center group">
        <svg class="score-ring" width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.08)" stroke-width="5" fill="none"/>
          <circle id="ring-${s.id}" cx="24" cy="24" r="20" stroke="url(#grad)" stroke-width="5" fill="none" stroke-linecap="round" stroke-dasharray="125.6" stroke-dashoffset="125.6"/>
        </svg>
        <p id="ringval-${s.id}" class="text-xs font-bold -mt-8 mb-3 group-hover:text-[var(--brand)]">0%</p>
      </button>
    </div>
    <div class="flex flex-wrap gap-1.5 mb-3">
      ${s.skills.map((sk) => `<span class="chip-static">${sk}</span>`).join("")}
    </div>
    <p class="text-sm text-[var(--muted)] mb-5 leading-relaxed flex-1">${s.summary}</p>
    <button onclick="openWhyModal(${s.id})" class="text-xs font-medium text-[var(--brand)] hover:underline mb-4 text-left">🤖 Why ${s.name.split(" ")[0]}?</button>
    <div class="flex gap-2">
      <button onclick="viewProfile(${s.id})" class="btn-secondary flex-1 py-2.5 rounded-xl text-sm">View Profile</button>
      <button data-invite-btn="${s.id}" onclick="inviteStudent(${s.id})" class="btn-primary flex-1 py-2.5 rounded-xl text-sm">Invite</button>
    </div>
  </div>`;
}
// SVG gradient defs (invisible, reused by all rings)
document.addEventListener("DOMContentLoaded", () => {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");
  svg.style.position = "absolute";
  svg.innerHTML = `<defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#b5ff00"/><stop offset="100%" stop-color="#99d600"/></linearGradient></defs>`;
  document.body.appendChild(svg);
});
function animateScore(id, pct, instant) {
  const ring = document.getElementById("ring-" + id);
  const val = document.getElementById("ringval-" + id);
  if (!ring) return;
  const circumference = 125.6;
  const offset = circumference - (pct / 100) * circumference;
  if (instant) {
    ring.style.transition = "none";
  }
  requestAnimationFrame(() => {
    ring.style.strokeDashoffset = offset;
  });
  let cur = 0;
  const step = () => {
    cur += Math.ceil(pct / 30);
    if (cur >= pct) {
      cur = pct;
      val.textContent = cur + "%";
      return;
    }
    val.textContent = cur + "%";
    requestAnimationFrame(step);
  };
  step();
}

function openMatchModal(id) {
  const s = students.find((x) => x.id === id);
  document.getElementById("mm-title").textContent =
    s.match + "% Match — " + s.name;
  const bars = document.getElementById("mm-bars");
  bars.innerHTML = s.breakdown
    .map(
      ([label, val, max]) => `
    <div>
      <div class="flex justify-between text-sm mb-1.5"><span class="text-[var(--muted)]">${label}</span><span class="font-semibold">${val}%</span></div>
      <div class="bar-track"><div class="bar-fill" data-w="${(val / max) * 100}"></div></div>
    </div>`,
    )
    .join("");
  openModal("modal-match");
  setTimeout(() => {
    bars
      .querySelectorAll(".bar-fill")
      .forEach((b) => (b.style.width = b.dataset.w + "%"));
  }, 80);
}
async function openWhyModal(id) {
  const title = document.getElementById("why-title");
  const text = document.getElementById("why-text");

  try {
    // Get the latest project
    const project = await getCurrentProject();

    // Get the same recommendations shown on screen
    const recommendations = await getRecommendedTeammates(6);

    const candidate = recommendations.find(
      (person) => person.id === id
    );

    if (!candidate) {
      console.error("Candidate not found:", id);
      return;
    }

    const firstName =
      (candidate.name || "Student").split(" ")[0];

    title.textContent = `🤖 Why ${firstName}?`;

    // Open modal immediately
    text.innerHTML = `
      <div class="flex items-center gap-3">
        <span
          class="w-3 h-3 rounded-full bg-[var(--brand)] animate-pulse"
        ></span>
        <span>TeamForge AI is analyzing this recommendation...</span>
      </div>
    `;

    openModal("modal-why");

    // Build Gemini prompt
    const prompt = `
You are TeamForge's AI recommendation explainer.

Explain why this student is a good teammate recommendation
for the project.

IMPORTANT:
- Do NOT calculate a new score.
- Do NOT change the ranking.
- The match score was already calculated by TeamForge's
  weighted scoring algorithm.
- Use ONLY the information provided.
- Do not invent facts.
- Do not mention that you are an AI model.
- Give 3 concise bullet points.

PROJECT:
Name: ${project.name || "Unknown"}
Description: ${project.description || "No description"}
Category: ${project.category || "Other"}

REQUIRED SKILLS:
${project.project_skills?.map((x) => x.skill).join(", ") || "None"}

REQUIRED ROLES:
${project.project_roles?.map((x) => x.role).join(", ") || "None"}

TEAM SKILL GAPS:
${candidate.filledGaps?.join(", ") || "None"}

CANDIDATE:
Name: ${candidate.name || "Student"}
Role: ${candidate.role || "Not specified"}
Branch: ${candidate.branch || "Not specified"}
Year: ${candidate.year || "Not specified"}
Skill Level: ${candidate.skill_level || "Not specified"}
Availability: ${candidate.availability || "Not specified"}

CANDIDATE SKILLS:
${candidate.skills?.join(", ") || "None"}

MATCH SCORE:
${candidate.matchScore}%

MATCHED SKILLS:
${candidate.matchedSkills?.join(", ") || "None"}

Explain:
1. Relevant skills
2. How they help fill the team's gaps
3. Role / experience / availability fit
`;

    // Call Supabase Edge Function → Gemini
    const { data, error } =
      await supabaseClient.functions.invoke(
        "ai-recommend",
        {
          body: {
            prompt
          }
        }
      );

    if (error) {
      console.error("Gemini error:", error);

      text.innerHTML = `
        <div class="why-item">
          <span class="why-check">!</span>
          <span>
            AI explanation is temporarily unavailable.
          </span>
        </div>
      `;

      return;
    }

    const explanation =
      data?.response || "No explanation generated.";

    // Convert Gemini bullets into clean HTML
    const points = explanation
      .split("\n")
      .map((line) =>
        line
          .replace(/^[\s*-•]+/, "")
          .trim()
      )
      .filter(Boolean);

    text.innerHTML = points
      .map(
        (point) => `
          <div class="why-item mb-3">
            <span class="why-check">✓</span>
            <span>${point}</span>
          </div>
        `
      )
      .join("");

  } catch (error) {
    console.error("Why recommendation error:", error);

    if (text) {
      text.innerHTML = `
        <div class="why-item">
          <span class="why-check">!</span>
          <span>
            Unable to generate explanation.
          </span>
        </div>
      `;
    }
  }
}

function inviteStudent(id) {
  state.invited.add(id);
  const s = students.find((x) => x.id === id);
  if (!outgoingInvites.find((o) => o.name === s.name)) {
    outgoingInvites.unshift({
      name: s.name,
      project: "AI Healthcare Assistant",
      role: s.role,
    });
  }
  updateInviteButtons();
  renderInvitations();
  showToast(
    `Invitation sent to ${s.name}! They'll be notified instantly.`,
    "success",
  );
}
function updateInviteButtons() {
  document.querySelectorAll("[data-invite-btn]").forEach((btn) => {
    const id = parseInt(btn.dataset.inviteBtn);
    if (state.invited.has(id)) {
      btn.textContent = "Invitation Sent ✓";
      btn.disabled = true;
      btn.classList.add("opacity-70", "cursor-not-allowed");
    } else {
      btn.textContent = "Invite";
      btn.disabled = false;
      btn.classList.remove("opacity-70", "cursor-not-allowed");
    }
  });
}

/* ============================= STUDENT PROFILE ============================= */
function viewProfile(id) {
  const s = students.find((x) => x.id === id);
  const content = document.getElementById("profile-view-content");
  content.innerHTML = `
  <div class="glass-strong rounded-3xl p-8 mb-6">
    <div class="flex flex-col sm:flex-row items-start gap-6 mb-6">
      <div class="avatar w-24 h-24 rounded-2xl text-3xl">${s.name[0]}</div>
      <div class="flex-1">
        <div class="flex items-center gap-3 flex-wrap mb-1">
          <h2 class="font-display font-bold text-2xl">${s.name}</h2>
          <span class="chip-static" style="background:rgba(181,255,0,0.1); border-color:rgba(181,255,0,0.4); color:var(--brand);">${s.match}% Match</span>
        </div>
        <p class="text-[var(--muted)] mb-1">${s.role}</p>
        <p class="text-[var(--muted)] text-sm">${s.college} · ${s.branch} · ${s.year}</p>
      </div>
      <button data-invite-btn="${s.id}" onclick="inviteStudent(${s.id})" class="btn-primary px-6 py-3 rounded-xl text-sm whitespace-nowrap">Invite to Team</button>
    </div>
    <p class="text-sm text-[var(--text)] leading-relaxed mb-6">${s.about}</p>
    <div class="flex flex-wrap gap-2 mb-2">
      ${s.skills.map((sk) => `<span class="chip-static">${sk}</span>`).join("")}
    </div>
  </div>

  <div class="grid md:grid-cols-2 gap-6 mb-6">
    <div class="glass-strong rounded-2xl p-6">
      <h3 class="font-display font-bold mb-4">Skill Levels</h3>
      <div class="space-y-4">
        ${Object.entries(s.skillLevels)
          .map(
            ([k, v]) => `
          <div>
            <div class="flex justify-between text-xs mb-1.5"><span class="text-[var(--muted)]">${k}</span><span class="font-semibold">${v}%</span></div>
            <div class="bar-track"><div class="bar-fill" style="width:${v}%"></div></div>
          </div>`,
          )
          .join("")}
      </div>
    </div>
    <div class="glass-strong rounded-2xl p-6">
      <h3 class="font-display font-bold mb-4">Projects & Hackathons</h3>
      <p class="text-xs text-[var(--muted)] uppercase tracking-wide mb-2 font-semibold">Projects</p>
      <ul class="text-sm space-y-1.5 mb-4">${s.projects.map((p) => `<li class="flex gap-2"><span class="text-[var(--brand)]">•</span>${p}</li>`).join("")}</ul>
      <p class="text-xs text-[var(--muted)] uppercase tracking-wide mb-2 font-semibold">Hackathons</p>
      <ul class="text-sm space-y-1.5">${s.hackathons.map((p) => `<li class="flex gap-2"><span class="text-[var(--brand)]">🏆</span>${p}</li>`).join("")}</ul>
    </div>
  </div>

  <div class="rounded-2xl p-6 mb-6" style="background:rgba(181,255,0,0.05); border:1px solid rgba(181,255,0,0.2);">
    <h3 class="font-display font-bold mb-3">🤖 Why ${s.name.split(" ")[0]}?</h3>
    <p class="text-sm leading-relaxed">${s.why}</p>
  </div>

  <div class="glass-strong rounded-2xl p-6 flex flex-wrap gap-x-10 gap-y-4 text-sm">
    <div><p class="text-[var(--muted)] text-xs mb-1">Available</p><p class="font-medium">${s.availability}</p></div>
    <div><p class="text-[var(--muted)] text-xs mb-1">Interested in</p><p class="font-medium">${s.interests.join(" • ")}</p></div>
    <div><p class="text-[var(--muted)] text-xs mb-1">GitHub</p><p class="font-medium text-[var(--brand)]">${s.github}</p></div>
    <div><p class="text-[var(--muted)] text-xs mb-1">LinkedIn</p><p class="font-medium text-[var(--brand)]">${s.linkedin}</p></div>
  </div>
  `;
  showScreen("profile-view");
  updateInviteButtons();
}

/* ============================= DISCOVER TEAMS ============================= */
function renderFilters() {
  const box = document.getElementById("team-filters");
  box.innerHTML = filterTags
    .map(
      (t) =>
        `<span class="chip ${state.activeTeamFilter === t ? "selected" : ""}" onclick="toggleFilter('${t}')">${t}</span>`,
    )
    .join("");
}
function toggleFilter(tag) {
  state.activeTeamFilter = state.activeTeamFilter === tag ? null : tag;
  renderFilters();
  renderTeams();
}
async function renderTeams() {
  const q = (
    document.getElementById("team-search")?.value || ""
  ).toLowerCase().trim();

  const grid = document.getElementById("teams-grid");

  if (!grid) return;

  grid.innerHTML = `
    <p class="text-[var(--muted)] col-span-2 text-center py-10">
      Loading teams...
    </p>
  `;

  try {
    const {
      data: { user },
      error: authError
    } = await supabaseClient.auth.getUser();

    if (authError || !user) {
      throw new Error("User is not authenticated.");
    }

    const { data: projects, error } = await supabaseClient
      .from("projects")
      .select(`
        id,
        name,
        description,
        category,
        team_size,
        created_at,
        project_skills (
          skill
        ),
        project_roles (
          role
        ),
        team_members (
          user_id
        )
      `)
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

console.log("🔥 Raw Supabase projects count:", projects?.length);

    const availableTeams = (projects || []).filter((project) => {
      return !(project.team_members || []).some(
        (member) => member.user_id === user.id
      );
    });

    console.log("🔥 Available teams (not a member):", availableTeams.length);
    const filtered = availableTeams.filter((project) => {
      const skills = (project.project_skills || [])
        .map((x) => x.skill)
        .filter(Boolean);

      const roles = (project.project_roles || [])
        .map((x) => x.role)
        .filter(Boolean);

      const searchableText = [
        project.name,
        project.description,
        project.category,
        ...skills,
        ...roles
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesFilter =
        !state.activeTeamFilter ||
        project.category === state.activeTeamFilter;

      const matchesSearch =
        !q || searchableText.includes(q);

      return matchesFilter && matchesSearch;
    });

    if (!filtered.length) {
      grid.innerHTML = `
        <p class="text-[var(--muted)] col-span-2 text-center py-10">
          No teams match your search.
        </p>
      `;
      return;
    }

    grid.innerHTML = filtered.map((project) => {
      const skills = (project.project_skills || [])
        .map((x) => x.skill)
        .filter(Boolean);

      const roles = (project.project_roles || [])
        .map((x) => x.role)
        .filter(Boolean);

      const members = project.team_members || [];

      return `
        <div class="glass-strong rounded-2xl p-6 card-hover">

          <div class="flex items-start justify-between mb-2">
            <h3 class="font-display font-bold text-lg">
              ${project.name}
            </h3>

            <span class="chip-static">
              ${members.length} / ${project.team_size || "—"} Members
            </span>
          </div>

          <p class="text-xs text-[var(--muted)] mb-3">
            ${project.category || "Other"}
          </p>

          <p class="text-sm text-[var(--text)] mb-4 leading-relaxed">
            ${project.description || "No description provided."}
          </p>

          ${
            skills.length
              ? `
                <p class="text-xs font-semibold text-[var(--muted)]
                          uppercase tracking-wide mb-2">
                  Required Skills
                </p>

                <div class="flex flex-wrap gap-2 mb-4">
                  ${skills
                    .slice(0, 6)
                    .map(
                      (skill) => `
                        <span class="chip-static">
                          ${skill}
                        </span>
                      `
                    )
                    .join("")}
                </div>
              `
              : ""
          }

          ${
            roles.length
              ? `
                <p class="text-xs font-semibold text-[var(--muted)]
                          uppercase tracking-wide mb-2">
                  Looking for
                </p>

                <div class="flex flex-wrap gap-2 mb-5">
                  ${roles
                    .map(
                      (role) => `
                        <span
                          class="chip-static"
                          style="
                            border-color:rgba(251,191,36,0.35);
                            color:#fbd38a;
                          "
                        >
                          🔴 ${role}
                        </span>
                      `
                    )
                    .join("")}
                </div>
              `
              : `<div class="mb-5"></div>`
          }

          <button
            onclick="joinTeam('${project.id}', this)"
            class="btn-secondary w-full py-2.5 rounded-xl text-sm"
          >
            Join Team
          </button>

        </div>
      `;
    }).join("");

  } catch (error) {
    console.error("❌ Render teams error:", error);

    grid.innerHTML = `
      <p class="text-[var(--muted)] col-span-2 text-center py-10">
        Could not load teams.
      </p>
    `;
  }
}

async function joinTeam(projectId, button) {
  try {
    button.disabled = true;
    button.textContent = "Sending Request...";

    const {
      data: { user },
      error: authError
    } = await supabaseClient.auth.getUser();

    if (authError || !user) {
      throw new Error("User is not authenticated.");
    }

    // 1. Fetch project's leader ID
    const { data: project, error: projErr } = await supabaseClient
      .from("projects")
      .select("leader_id")
      .eq("id", projectId)
      .single();

    if (projErr || !project) {
      throw projErr || new Error("Project not found.");
    }

    // 2. Insert invitation request into team_requests
    const { error } = await supabaseClient
      .from("team_requests")
      .insert({
        project_id: projectId,
        sender_id: user.id,
        receiver_id: project.leader_id,
        status: "pending"
      });

    if (error) {
      if (error.code === "23505") {
        button.textContent = "Request Pending";
        return;
      }
      throw error;
    }

    button.textContent = "✓ Request Sent";
    showToast("Request sent to team leader!", "success");

  } catch (error) {
    console.error("Join team error:", error);

    button.disabled = false;
    button.textContent = "Join Team";

    showToast("Could not send request.", "info");
  }
}

function viewTeam(id) {
  const t = teamsData.find((x) => x.id === id);
  const content = document.getElementById("team-details-content");
  const alreadyRequested = state.requested.has(id);
  content.innerHTML = `
    <div class="glass-strong rounded-3xl p-8 mb-6">
      <div class="flex items-start justify-between flex-wrap gap-4 mb-3">
        <h1 class="font-display font-bold text-3xl">${t.name}</h1>
        <span class="chip-static">${t.members} / ${t.size} Members</span>
      </div>
      <p class="text-[var(--muted)] mb-2">${t.stack}</p>
      <p class="text-sm leading-relaxed mb-6">${t.desc}</p>

      <p class="text-xs font-semibold text-[var(--muted)] uppercase tracking-wide mb-3">Team</p>
      <div class="grid sm:grid-cols-3 gap-4 mb-6">
        ${t.team
          .map(
            (m) => `
          <div class="flex items-center gap-3">
            <div class="avatar w-10 h-10 rounded-full">${m.init}</div>
            <div><p class="text-sm font-medium">${m.name}</p><p class="text-xs text-[var(--muted)]">${m.role}</p></div>
          </div>`,
          )
          .join("")}
      </div>

      <p class="text-xs font-semibold text-[var(--muted)] uppercase tracking-wide mb-3">Looking For</p>
      <div class="flex flex-wrap gap-2 mb-6">
        ${t.looking.map((r) => `<span class="chip-static" style="border-color:rgba(248,113,113,0.35); color:#fca5a5;">🔴 ${r}</span>`).join("")}
      </div>

      <p class="text-xs font-semibold text-[var(--muted)] uppercase tracking-wide mb-3">Required Skills</p>
      <div class="flex flex-wrap gap-2">
        ${t.requiredSkills.map((s) => `<span class="chip-static">${s}</span>`).join("")}
      </div>
    </div>

    <div class="glass-strong rounded-3xl p-8 mb-6">
      <h3 class="font-display font-bold mb-4">Team Skill Health</h3>
      <div class="space-y-4">
        ${t.skillHealth
          .map(
            ([k, v]) => `
          <div>
            <div class="flex justify-between text-xs mb-1.5"><span class="text-[var(--muted)]">${k}</span><span class="font-semibold">${v}%</span></div>
            <div class="bar-track"><div class="bar-fill skillbar" style="width:0%" data-w="${v}"></div></div>
          </div>`,
          )
          .join("")}
      </div>
    </div>

    <div id="join-cta-area">
      ${
        alreadyRequested
          ? joinSuccessHTML()
          : `
      <div class="flex justify-center">
        <button onclick="requestJoin(${t.id})" class="btn-primary px-8 py-4 rounded-xl text-base">Request to Join</button>
      </div>`
      }
    </div>
  `;
  showScreen("team-details");
  setTimeout(() => {
    content
      .querySelectorAll(".skillbar")
      .forEach((b) => (b.style.width = b.dataset.w + "%"));
  }, 100);
}
function joinSuccessHTML() {
  return `<div class="glass-strong rounded-3xl p-8 text-center border border-[rgba(52,211,153,0.4)]">
    <div class="w-14 h-14 rounded-full bg-[rgba(52,211,153,0.15)] border border-[rgba(52,211,153,0.4)] flex items-center justify-center text-2xl mx-auto mb-4">✅</div>
    <h3 class="font-display font-bold text-xl mb-1">Request Sent</h3>
    <p class="text-[var(--muted)] text-sm">The team leader has been notified. You'll hear back soon.</p>
  </div>`;
}
function requestJoin(id) {
  state.requested.add(id);
  const area = document.getElementById("join-cta-area");
  area.innerHTML = joinSuccessHTML();
  const t = teamsData.find((x) => x.id === id);
  showToast(`Request sent to join ${t.name}!`, "success");
}

/* ============================= MY TEAMS ============================= */
async function renderMyTeams() {
  const grid = document.getElementById("my-teams-grid");
  if (!grid) return;

  grid.innerHTML = `<p class="text-[var(--muted)] col-span-full text-center py-10">Loading your teams...</p>`;

  try {
    const {
      data: { user },
      error: authError
    } = await supabaseClient.auth.getUser();

    if (authError || !user) {
      grid.innerHTML = `<p class="text-[var(--muted)] col-span-full text-center py-10">Please log in to view your teams.</p>`;
      return;
    }

    // 1. Fetch project IDs where user is a team member
    const { data: memberships, error: memErr } = await supabaseClient
      .from("team_members")
      .select("project_id")
      .eq("user_id", user.id);

    if (memErr || !memberships || memberships.length === 0) {
      grid.innerHTML = `<div class="col-span-full text-center py-10">
        <p class="text-[var(--muted)] mb-4">You haven't joined or created any teams yet.</p>
        <button onclick="startFindTeamFlow()" class="btn-primary px-6 py-2.5 rounded-xl text-sm">Discover Teams</button>
      </div>`;
      return;
    }

    const projectIds = memberships.map((m) => m.project_id);

    // 2. Fetch full project details for those teams
    const { data: projects, error: projErr } = await supabaseClient
      .from("projects")
      .select(`
        id,
        name,
        description,
        category,
        team_size,
        project_skills ( skill ),
        project_roles ( role ),
        team_members ( user_id )
      `)
      .in("id", projectIds)
      .order("created_at", { ascending: false });

    if (projErr || !projects) throw projErr;

    // 3. Render dynamic team cards
    grid.innerHTML = projects
      .map((t) => {
        const memberCount = t.team_members?.length || 1;
        const openRoles = (t.project_roles || []).map((r) => r.role);

        return `
        <div class="glass-strong rounded-2xl p-6 card-hover flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-display font-bold text-lg text-[var(--text)] truncate">${t.name}</h3>
              <span class="chip-static shrink-0">${memberCount} / ${t.team_size || "—"} members</span>
            </div>
            <p class="text-xs text-[var(--muted)] mb-3">${t.category || "General"}</p>
            <p class="text-sm text-[var(--text)] mb-4 line-clamp-2">${t.description || "No project description provided."}</p>

            ${
              openRoles.length > 0
                ? `<div class="flex flex-wrap gap-2 mb-5">
                    ${openRoles.map((r) => `<span class="chip-static" style="border-color:rgba(251,191,36,0.35); color:#fbd38a;">Looking for ${r}</span>`).join("")}
                   </div>`
                : `<div class="mb-5"></div>`
            }
          </div>

          <button onclick="viewTeam('${t.id}')" class="btn-secondary w-full py-2.5 rounded-xl text-sm">Open Team</button>
        </div>`;
      })
      .join("");
  } catch (err) {
    console.error("Error rendering my teams:", err);
    grid.innerHTML = `<p class="text-[var(--muted)] col-span-full text-center py-10">Could not load your teams.</p>`;
  }
}

async function viewTeam(projectId) {
  const content = document.getElementById("team-details-content");
  if (!content) return;

  content.innerHTML = `<div class="text-center py-16 text-[var(--muted)]">Loading team details...</div>`;
  showScreen("team-details");

  try {
    const {
      data: { user }
    } = await supabaseClient.auth.getUser();

    // 1. Fetch project details
    const { data: project, error } = await supabaseClient
      .from("projects")
      .select(`
        id,
        name,
        description,
        category,
        team_size,
        leader_id,
        project_skills ( skill ),
        project_roles ( role ),
        team_members ( user_id )
      `)
      .eq("id", projectId)
      .single();

    if (error || !project) {
      content.innerHTML = `<div class="text-center py-16 text-[var(--muted)]">Team details could not be found.</div>`;
      return;
    }

    const memberIds = (project.team_members || []).map((m) => m.user_id);

    // 2. Fetch member profiles
    let memberProfiles = [];
    if (memberIds.length > 0) {
      const { data: profiles } = await supabaseClient
        .from("profiles")
        .select("id, name, role")
        .in("id", memberIds);
      memberProfiles = profiles || [];
    }

    const isMember = memberIds.includes(user?.id);
    const requiredSkills = (project.project_skills || []).map((s) => s.skill);
    const lookingFor = (project.project_roles || []).map((r) => r.role);

    // 3. Render populated team view
    content.innerHTML = `
      <div class="glass-strong rounded-3xl p-8 mb-6">
        <div class="flex items-start justify-between flex-wrap gap-4 mb-3">
          <h1 class="font-display font-bold text-3xl text-[var(--text)]">${project.name}</h1>
          <span class="chip-static">${memberProfiles.length} / ${project.team_size || "—"} Members</span>
        </div>
        <p class="text-[var(--muted)] text-sm mb-2">${project.category || "General"}</p>
        <p class="text-sm leading-relaxed mb-6 text-[var(--text)]">${project.description || "No description available."}</p>

        <p class="text-xs font-semibold text-[var(--muted)] uppercase tracking-wide mb-3">Team Members</p>
        <div class="grid sm:grid-cols-3 gap-4 mb-6">
          ${
            memberProfiles.length > 0
              ? memberProfiles
                  .map(
                    (m) => `
                <div class="flex items-center gap-3 glass p-3 rounded-xl">
                  <div class="avatar w-10 h-10 rounded-full font-bold bg-[var(--brand)] text-black flex items-center justify-center">
                    ${(m.name || "S")[0].toUpperCase()}
                  </div>
                  <div class="min-w-0">
                    <p class="text-sm font-medium text-[var(--text)] truncate">${m.name || "Student"}</p>
                    <p class="text-xs text-[var(--muted)] truncate">${m.role || "Team Member"}${m.id === project.leader_id ? " (Leader)" : ""}</p>
                  </div>
                </div>`
                  )
                  .join("")
              : `<p class="text-xs text-[var(--muted)]">No members found.</p>`
          }
        </div>

        ${
          lookingFor.length > 0
            ? `<p class="text-xs font-semibold text-[var(--muted)] uppercase tracking-wide mb-3">Looking For</p>
               <div class="flex flex-wrap gap-2 mb-6">
                 ${lookingFor.map((r) => `<span class="chip-static" style="border-color:rgba(248,113,113,0.35); color:#fca5a5;">🔴 ${r}</span>`).join("")}
               </div>`
            : ""
        }

        ${
          requiredSkills.length > 0
            ? `<p class="text-xs font-semibold text-[var(--muted)] uppercase tracking-wide mb-3">Required Skills</p>
               <div class="flex flex-wrap gap-2">
                 ${requiredSkills.map((s) => `<span class="chip-static">${s}</span>`).join("")}
               </div>`
            : ""
        }
      </div>

      <div id="join-cta-area">
        ${
          isMember
            ? `<div class="glass-strong rounded-3xl p-6 text-center border border-[rgba(52,211,153,0.4)]">
                 <p class="text-[var(--brand)] font-semibold text-sm">✓ You are an active member of this team.</p>
               </div>`
            : `<div class="flex justify-center">
                 <button onclick="joinTeam('${project.id}', this)" class="btn-primary px-8 py-4 rounded-xl text-base">Request to Join</button>
               </div>`
        }
      </div>
    `;
  } catch (err) {
    console.error("Error viewing team details:", err);
    content.innerHTML = `<div class="text-center py-16 text-[var(--muted)]">Error loading project.</div>`;
  }
}

/* ============================= INVITATIONS ============================= */
async function loadInvitations() {
  try {
    const {
      data: { user },
      error: authError
    } = await supabaseClient.auth.getUser();

    if (authError || !user) return;

    // 1. Fetch raw incoming pending requests where current user is the receiver (leader)
    const { data: incomingData, error: incomingErr } = await supabaseClient
      .from("team_requests")
      .select("*")
      .eq("receiver_id", user.id)
      .eq("status", "pending");

    if (!incomingErr && incomingData) {
      incomingInvites = await Promise.all(
        incomingData.map(async (req) => {
          const { data: profile } = await supabaseClient
            .from("profiles")
            .select("name, role")
            .eq("id", req.sender_id)
            .single();

          const { data: project } = await supabaseClient
            .from("projects")
            .select("name")
            .eq("id", req.project_id)
            .single();

          const senderName = profile?.name || "Student";
          return {
            id: req.id,
            name: senderName,
            project: project?.name || "Project",
            role: profile?.role || "Team Member",
            init: senderName[0].toUpperCase()
          };
        })
      );
    }

    // 2. Fetch raw outgoing requests sent by the current user
    const { data: outgoingData, error: outgoingErr } = await supabaseClient
      .from("team_requests")
      .select("*")
      .eq("sender_id", user.id);

    if (!outgoingErr && outgoingData) {
      outgoingInvites = await Promise.all(
        outgoingData.map(async (req) => {
          const { data: profile } = await supabaseClient
            .from("profiles")
            .select("name, role")
            .eq("id", req.receiver_id)
            .single();

          const { data: project } = await supabaseClient
            .from("projects")
            .select("name")
            .eq("id", req.project_id)
            .single();

          return {
            id: req.id,
            name: profile?.name || "Student",
            project: project?.name || "Project",
            role: profile?.role || "Team Member",
            status: req.status
          };
        })
      );
    }

    renderInvitations();
  } catch (err) {
    console.error("Error loading invitations:", err);
  }
}

function renderInvitations() {
  const incomingBox = document.getElementById("incoming-invites");
  if (incomingBox) {
    incomingBox.innerHTML = incomingInvites.length
      ? incomingInvites
          .map(
            (inv) => `
      <div class="glass-strong rounded-2xl p-6 flex items-start gap-4" id="incoming-${inv.id}">
        <div class="avatar w-12 h-12 rounded-full text-lg">${inv.init}</div>
        <div class="flex-1">
          <p class="font-semibold mb-1">${inv.name} wants to join your team</p>
          <p class="text-sm text-[var(--muted)] mb-1">Project: <span class="text-[var(--text)] font-medium">${inv.project}</span></p>
          <p class="text-sm text-[var(--muted)] mb-4">Role: <span class="text-[var(--text)] font-medium">${inv.role}</span></p>
          <div class="flex gap-3">
            <button onclick="respondInvite('${inv.id}', true)" class="btn-primary px-5 py-2 rounded-lg text-sm">Accept</button>
            <button onclick="respondInvite('${inv.id}', false)" class="btn-secondary px-5 py-2 rounded-lg text-sm">Decline</button>
          </div>
        </div>
      </div>`
          )
          .join("")
      : `<p class="text-sm text-[var(--muted)]">No incoming requests right now.</p>`;
  }

  const outBox = document.getElementById("outgoing-invites");
  if (outBox) {
    outBox.innerHTML = outgoingInvites.length
      ? outgoingInvites
          .map(
            (o) => `
      <div class="glass rounded-xl p-4 flex items-center justify-between">
        <div>
          <p class="text-sm font-medium">${o.name} <span class="text-[var(--muted)] font-normal">— ${o.role}</span></p>
          <p class="text-xs text-[var(--muted)]">${o.project}</p>
        </div>
        <span class="chip-static" style="color:#fbd38a; border-color:rgba(251,191,36,0.35);">${o.status || "Pending"}</span>
      </div>`
          )
          .join("")
      : `<p class="text-sm text-[var(--muted)]">No outgoing invitations yet.</p>`;
  }

  const badge = document.getElementById("invite-badge");
  if (badge) {
    badge.textContent = incomingInvites.length;
    badge.style.display = incomingInvites.length ? "flex" : "none";
  }
}

async function respondInvite(requestId, accept) {
  try {
    const newStatus = accept ? "accepted" : "declined";

    // 1. Update request status in team_requests
    const { data: request, error: updateErr } = await supabaseClient
      .from("team_requests")
      .update({ status: newStatus })
      .eq("id", requestId)
      .select()
      .single();

    if (updateErr) throw updateErr;

    // 2. If accepted, insert sender into team_members
    if (accept && request) {
      const { error: memberErr } = await supabaseClient
        .from("team_members")
        .insert({
          project_id: request.project_id,
          user_id: request.sender_id
        });

      if (memberErr && memberErr.code !== "23505") {
        console.error("Error adding member to team:", memberErr);
      }
    }

    showToast(
      accept ? "Accepted request and added teammate!" : "Declined request.",
      accept ? "success" : "info"
    );

    // 3. Reload invitations & refresh UI
    await loadInvitations();
    if (typeof renderMyTeams === "function") renderMyTeams();
    if (typeof renderDashboard === "function") renderDashboard();
  } catch (err) {
    console.error("Error responding to invite:", err);
    showToast("Could not process invitation response.", "info");
  }
}

function setupRealtimeInvitations() {
  const channel = supabaseClient
    .channel("public:team_requests")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "team_requests" },
      (payload) => {
        console.log("⚡ REALTIME EVENT RECEIVED:", payload);
        showToast("Invitation list updated!", "info");
        loadInvitations();
      }
    )
    .subscribe((status, err) => {
      console.log("📡 Realtime Channel Status:", status);
      if (err) console.error("❌ Realtime Subscription Error:", err);
    });
}
/* ============================= DASHBOARD RENDER ============================= */
/* ============================= DASHBOARD RENDER ============================= */
async function renderDashboard() {
  try {
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser();
    if (authError || !user) return;

    // 1. Render Teammate Recommendations
    const recsBox = document.getElementById("dashboard-recs");
    if (recsBox) {
      recsBox.innerHTML = `<p class="text-[var(--muted)] text-xs col-span-full py-4 text-center">Loading recommendations...</p>`;
      
      const recommendations = await getRecommendedTeammates(4);
      if (recommendations.length > 0) {
        recsBox.innerHTML = recommendations
          .map(
            (s) => `
          <div class="glass rounded-xl p-4 card-hover">
            <div class="flex items-center gap-2.5 mb-2">
              <div class="avatar w-9 h-9 rounded-full text-sm font-bold bg-[var(--brand)] text-black flex items-center justify-center">
                ${(s.name || "S")[0].toUpperCase()}
              </div>
              <div class="min-w-0">
                <p class="text-sm font-semibold truncate text-[var(--text)]">${s.name}</p>
                <p class="text-xs text-[var(--muted)] truncate">${s.role}</p>
              </div>
            </div>
            <p class="text-xs font-bold text-[var(--brand)] mb-3">${s.matchScore}% Match</p>
            <button onclick="viewProfile('${s.id}')" class="btn-secondary w-full py-2 rounded-lg text-xs">View Profile</button>
          </div>`
          )
          .join("");
      } else {
        recsBox.innerHTML = `<p class="text-xs text-[var(--muted)] col-span-full text-center py-4">No recommendations available right now.</p>`;
      }
    }

    // 2. Render Leader's Active Projects
    const projectsBox = document.getElementById("dashboard-projects");
    if (projectsBox) {
      const { data: myProjects } = await supabaseClient
        .from("projects")
        .select("id, name, category, team_size, team_members(user_id)")
        .eq("leader_id", user.id)
        .order("created_at", { ascending: false })
        .limit(4);

      if (myProjects && myProjects.length > 0) {
        projectsBox.innerHTML = myProjects
          .map(
            (t) => `
          <div class="glass rounded-xl p-4 card-hover">
            <p class="font-semibold text-sm mb-1 text-[var(--text)] truncate">${t.name}</p>
            <p class="text-xs text-[var(--muted)] mb-3">${t.category || "General"} • ${t.team_members?.length || 1}/${t.team_size || "—"} Members</p>
            <button onclick="viewTeam('${t.id}')" class="btn-secondary w-full py-2 rounded-lg text-xs">View Team</button>
          </div>`
          )
          .join("");
      } else {
        projectsBox.innerHTML = `<p class="text-xs text-[var(--muted)] col-span-full text-center py-4">No projects created yet.</p>`;
      }
    }

    // 3. Render Teams User Has Joined
    const teamsBox = document.getElementById("dashboard-teams");
    if (teamsBox) {
      const { data: joinedMemberships } = await supabaseClient
        .from("team_members")
        .select("project_id, projects(id, name, team_size, team_members(user_id))")
        .eq("user_id", user.id);

      if (joinedMemberships && joinedMemberships.length > 0) {
        teamsBox.innerHTML = joinedMemberships
          .map((m) => {
            const proj = m.projects;
            if (!proj) return "";
            return `
            <button onclick="viewTeam('${proj.id}')" class="w-full text-left glass rounded-xl p-4 hover:border-[rgba(181,255,0,0.4)] border border-transparent transition mb-2">
              <p class="text-sm font-semibold mb-1 text-[var(--text)]">${proj.name}</p>
              <p class="text-xs text-[var(--muted)]">${proj.team_members?.length || 1}/${proj.team_size || "—"} members</p>
            </button>`;
          })
          .join("");
      } else {
        teamsBox.innerHTML = `<p class="text-xs text-[var(--muted)] text-center py-4">You haven't joined any teams yet.</p>`;
      }
    }

    // 4. Calculate Dynamic Skill Health for Latest Project
    const healthBox = document.getElementById("dashboard-skill-health");
    if (healthBox) {
      const currentProject = await getCurrentProject();
      if (currentProject && currentProject.project_skills) {
        const requiredSkills = currentProject.project_skills.map((s) => s.skill);
        
        // Fetch skills of all team members in this project
        const { data: members } = await supabaseClient
          .from("team_members")
          .select("user_id")
          .eq("project_id", currentProject.id);

        let teamSkills = [];
        if (members && members.length > 0) {
          const memberIds = members.map((m) => m.user_id);
          const { data: memberProfiles } = await supabaseClient
            .from("profiles")
            .select("skills")
            .in("id", memberIds);

          if (memberProfiles) {
            teamSkills = memberProfiles.flatMap((p) => (p.skills || []).map((s) => s.toLowerCase()));
          }
        }

        healthBox.innerHTML = requiredSkills
          .map((skill) => {
            const isCovered = teamSkills.some((ts) => ts.includes(skill.toLowerCase()) || skill.toLowerCase().includes(ts));
            const pct = isCovered ? 100 : 20;
            const color = isCovered ? "var(--brand)" : "var(--red)";

            return `
            <div>
              <div class="flex justify-between text-xs mb-1">
                <span class="text-[var(--muted)]">${skill}</span>
                <span class="font-semibold text-[var(--text)]">${pct}%</span>
              </div>
              <div class="bar-track"><div class="bar-fill" style="width:${pct}%; background:${color};"></div></div>
            </div>`;
          })
          .join("");
      } else {
        healthBox.innerHTML = `<p class="text-xs text-[var(--muted)] text-center py-4">Create a project to see team skill health.</p>`;
      }
    }
  } catch (err) {
    console.error("Error rendering dashboard:", err);
  }
}
/* ============================= INIT ============================= */
/* =========================================================
       EDIT PROFILE
       ========================================================= */

function openEditProfile() {
  const panel = document.getElementById("edit-profile-panel");

  if (!panel) return;

  panel.classList.remove("hidden");

  setTimeout(() => {
    panel.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 50);
}

function closeEditProfile() {
  const panel = document.getElementById("edit-profile-panel");

  if (!panel) return;

  panel.classList.add("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

async function saveProfile(event) {
  event.preventDefault();

  const name = document.getElementById("profile-name").value.trim();

  const college = document.getElementById("profile-college").value.trim();

  const branch = document.getElementById("profile-branch").value.trim();

  const year = document.getElementById("profile-year").value;

  const skills = document
    .getElementById("profile-skills")
    .value.split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  const role = document.getElementById("profile-role").value;

  const interests = document.getElementById("profile-interests").value.trim();

  const skillLevel =
    document.querySelector('input[name="skillLevel"]:checked')?.value ||
    "Intermediate";

  const availability =
    document.querySelector('input[name="availability"]:checked')?.value ||
    "10–15 hrs/week";

  /* ================================
     GET CURRENT USER
     ================================ */

  const {
    data: { user },
    error: userError,
  } = await supabaseClient.auth.getUser();

  if (userError || !user) {
    showToast("You must be logged in to update your profile.", "info");
    return;
  }

  /* ================================
     SAVE PROFILE TO SUPABASE
     ================================ */

  console.log("Current user:", user);
  console.log("User error:", userError);

  if (userError || !user) {
    console.error("No authenticated user:", userError);
    showToast("You are not logged in.", "info");
    return;
  }

  const profileData = {
    id: user.id,
    name,
    college,
    branch,
    year,
    skills,
    role,
    interests,
    skill_level: skillLevel,
    availability,
  };

  console.log("Sending profile:", profileData);

  const { data, error } = await supabaseClient
    .from("profiles")
    .upsert(profileData)
    .select();

  console.log("Supabase response:", data);
  console.log("Supabase error:", error);

  if (error) {
    showToast(`Profile error: ${error.message}`, "info");
    return;
  }
  /* ================================
     UPDATE PROFILE SUMMARY
     ================================ */

  document.getElementById("profile-display-name").textContent = name;

  document.getElementById("profile-display-academic").textContent =
    `${college} · ${branch} · ${year}`;

  document.getElementById("profile-display-role").textContent = role;

  document.getElementById("profile-display-availability").textContent =
    availability;

  document.getElementById("profile-display-interests").textContent =
    interests || "Not specified";

  /* ================================
     UPDATE SKILL CHIPS
     ================================ */

  const skillBox = document.getElementById("profile-display-skills");

  skillBox.innerHTML = skills.length
    ? skills
        .map((skill) => `<span class="chip-static">${skill}</span>`)
        .join("")
    : `<span class="text-xs text-[var(--muted)]">
         No skills added yet
       </span>`;

  /* ================================
     UPDATE AVATAR
     ================================ */

  const avatar = document.querySelector(".profile-avatar");

  let initials = "V";

  if (name) {
    initials = name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }

  if (avatar) {
    avatar.textContent = initials || "V";
  }

  /* ================================
     UPDATE SIDEBAR
     ================================ */

  const sidebarName = document.getElementById("sidebar-name");
  const sidebarRole = document.getElementById("sidebar-role");
  const sidebarAvatar = document.getElementById("sidebar-avatar");

  if (sidebarName) {
    sidebarName.textContent = name;
  }

  if (sidebarRole) {
    sidebarRole.textContent = role;
  }

  if (sidebarAvatar) {
    sidebarAvatar.textContent = initials || "V";
  }

  /* ================================
     CLOSE + SUCCESS
     ================================ */

  closeEditProfile();

  showToast(
    "Profile updated successfully! TeamForge will use your updated profile for matching.",
    "success",
  );
}

/* Load saved profile when the app opens */

async function loadProfileFromSupabase() {
  const {
    data: { user },
    error: userError,
  } = await supabaseClient.auth.getUser();

  if (userError || !user) {
    console.error("User error:", userError);
    return;
  }

  const { data: profile, error } = await supabaseClient
    .from("profiles")
    .select(
      `
      id,
      name,
      college,
      branch,
      year,
      skills,
      role,
      interests,
      skill_level,
      availability
    `,
    )
    .eq("id", user.id)
    .single();

  if (error) {
    console.error("Profile load error:", error);
    showToast("Could not load your profile.", "info");
    return;
  }

  if (!profile) return;

  console.log("Loaded profile from Supabase:", profile);

  // -----------------------------
  // Fill edit form
  // -----------------------------

  const nameInput = document.getElementById("profile-name");
  const collegeInput = document.getElementById("profile-college");
  const branchInput = document.getElementById("profile-branch");
  const yearInput = document.getElementById("profile-year");
  const skillsInput = document.getElementById("profile-skills");
  const roleInput = document.getElementById("profile-role");
  const interestsInput = document.getElementById("profile-interests");

  if (nameInput) nameInput.value = profile.name || "";
  if (collegeInput) collegeInput.value = profile.college || "";
  if (branchInput) branchInput.value = profile.branch || "";
  if (yearInput) yearInput.value = profile.year || "";

  if (skillsInput) {
    skillsInput.value = (profile.skills || []).join(", ");
  }

  if (roleInput) roleInput.value = profile.role || "";

  if (interestsInput) {
    interestsInput.value = profile.interests || "";
  }

  // Skill level
  if (profile.skill_level) {
    const skillRadio = document.querySelector(
      `input[name="skillLevel"][value="${profile.skill_level}"]`,
    );

    if (skillRadio) {
      skillRadio.checked = true;
    }
  }

  // Availability
  if (profile.availability) {
    const availabilityRadio = document.querySelector(
      `input[name="availability"][value="${profile.availability}"]`,
    );

    if (availabilityRadio) {
      availabilityRadio.checked = true;
    }
  }

  // -----------------------------
  // Update visible profile
  // -----------------------------

  const displayName = document.getElementById("profile-display-name");
  const displayAcademic = document.getElementById("profile-display-academic");
  const displayRole = document.getElementById("profile-display-role");
  const displayAvailability = document.getElementById(
    "profile-display-availability",
  );
  const displayInterests = document.getElementById("profile-display-interests");
  const displaySkills = document.getElementById("profile-display-skills");

  if (displayName) {
    displayName.textContent = profile.name || "User";
  }

  if (displayAcademic) {
    displayAcademic.textContent = `${profile.college || ""} · ${profile.branch || ""} · ${profile.year || ""}`;
  }

  if (displayRole) {
    displayRole.textContent = profile.role || "Team Member";
  }

  if (displayAvailability) {
    displayAvailability.textContent = profile.availability || "Not specified";
  }

  if (displayInterests) {
    displayInterests.textContent = profile.interests || "Not specified";
  }

  if (displaySkills) {
    const skills = profile.skills || [];

    displaySkills.innerHTML = skills.length
      ? skills
          .map((skill) => `<span class="chip-static">${skill}</span>`)
          .join("")
      : `<span class="text-xs text-[var(--muted)]">No skills added yet</span>`;
  }

  // -----------------------------
  // Update sidebar
  // -----------------------------

  const sidebarName = document.getElementById("sidebar-name");
  const sidebarRole = document.getElementById("sidebar-role");
  const sidebarAvatar = document.getElementById("sidebar-avatar");

  const name = profile.name || "User";

  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  if (sidebarName) {
    sidebarName.textContent = name;
  }

  if (sidebarRole) {
    sidebarRole.textContent = profile.role || "Team Member";
  }

  if (sidebarAvatar) {
    sidebarAvatar.textContent = initials || "U";
  }
}
document.addEventListener("DOMContentLoaded", async () => {
  renderFilters();
  renderTeams();
  renderMyTeams();
  renderDashboard();
  renderRecommendations(false);

  await loadProfileFromSupabase();
  await loadInvitations();
  setupRealtimeInvitations();

  const mode = new URLSearchParams(window.location.search).get("mode");
  if (mode === "find") showScreen("discover-teams");
  else if (mode === "build") {
    showScreen("create-team");
    ctGoStep(1);
  } else showScreen("dashboard");
});