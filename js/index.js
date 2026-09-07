//supabse config
const SUPABASE_URL = "https://fjstotyuybduzzlqvzfb.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_m1UotYup4KNsAlA-cv6l7A_vld7MvRT";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
);

function openLogin() {
  closeSignup(false);

  const overlay = document.getElementById("login-overlay");
  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const message = document.getElementById("login-message");
  message.className = "login-message";
  message.textContent = "";

  const savedProfile = JSON.parse(
    localStorage.getItem("teamforgeProfile") || "null",
  );
  if (savedProfile?.email) {
    document.getElementById("login-email").value = savedProfile.email;
  }

  setTimeout(() => document.getElementById("login-email")?.focus(), 100);
}

function closeLogin() {
  const overlay = document.getElementById("login-overlay");
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function showLoginMessage(text, success = false) {
  const message = document.getElementById("login-message");
  message.textContent = text;
  message.className =
    "login-message" + (success ? " login-success show" : " show");
}

async function completeLogin(event) {
  event.preventDefault();

  const email = document
    .getElementById("login-email")
    .value.trim()
    .toLowerCase();

  const password = document.getElementById("login-password").value;

  showLoginMessage("Signing you in...");

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    showLoginMessage(error.message);
    return;
  }

  if (!data.session) {
    showLoginMessage("Login failed. Please try again.");
    return;
  }

  showLoginMessage("Login successful!", true);

  closeLogin();

  window.location.href = "main.html";
}

function showLoginHelp() {
  showLoginMessage(
    "For this demo, password recovery is not connected to a backend. Create a new account or use the password you registered with.",
  );
}

function switchToSignup() {
  closeLogin();
  openSignup();
}

function openSignup() {
  const overlay = document.getElementById("signup-overlay");
  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setTimeout(() => document.getElementById("signup-email")?.focus(), 100);
}

function closeSignup(resetScroll = true) {
  const overlay = document.getElementById("signup-overlay");
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden", "true");
  if (resetScroll) document.body.style.overflow = "";
}

async function completeSignup(event) {
  event.preventDefault();

  const email = document.getElementById("signup-email").value.trim().toLowerCase();
  const password = document.getElementById("signup-password").value;
  const name = document.getElementById("signup-name").value.trim();
  const college = document.getElementById("signup-college").value.trim();
  const branch = document.getElementById("signup-branch").value.trim();
  const year = document.getElementById("signup-year").value;
  const role = document.getElementById("signup-role").value;
  const skillLevel = document.getElementById("signup-level").value;
  const availability = document.getElementById("signup-availability").value;

  // Get selected skills
  const skills = Array.from(
    document.querySelectorAll("#signup-skills .signup-chip.selected")
  ).map((chip) => chip.dataset.value);

  // Get selected interests
  const interests = Array.from(
    document.querySelectorAll("#signup-interests .signup-chip.selected")
  ).map((chip) => chip.dataset.value);

  if (
    !email ||
    !password ||
    !name ||
    !college ||
    !branch ||
    !year ||
    !role
  ) {
    alert("Please fill all required fields.");
    return;
  }

  if (skills.length === 0) {
    alert("Please select at least one skill.");
    return;
  }

  const {
    data: { user },
    error: signupError
  } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        college,
        branch,
        year,
        skills,
        role,
        interests: interests.join(", "),
        skill_level: skillLevel,
        availability
      }
    }
  });

  if (signupError) {
    console.error("Signup error:", signupError);
    alert(signupError.message);
    return;
  }

  if (!user) {
    alert("Signup failed.");
    return;
  }

  // Save profile directly
  const { error: profileError } = await supabaseClient
    .from("profiles")
    .upsert({
      id: user.id,
      name,
      college,
      branch,
      year,
      skills,
      role,
      interests: interests.join(", "),
      skill_level: skillLevel,
      availability
    });

  if (profileError) {
    console.error("Profile save error:", profileError);
    alert("Account created, but profile could not be saved.");
    return;
  }

  alert("Account created successfully!");

  closeSignup();

  // Go to main application
  window.location.href = "main.html";
}

function showSignupMessage(text, success = false) {
  const message = document.getElementById("signup-message");

  if (!message) {
    alert(text);
    return;
  }

  message.textContent = text;

  message.className =
    "login-message" + (success ? " login-success show" : " show");
}

document.querySelectorAll(".signup-chip").forEach((chip) => {
  chip.addEventListener("click", () => chip.classList.toggle("selected"));
});

document
  .getElementById("login-overlay")
  ?.addEventListener("click", function (event) {
    if (event.target === this) closeLogin();
  });

document
  .getElementById("signup-overlay")
  ?.addEventListener("click", function (event) {
    if (event.target === this) closeSignup();
  });

document.addEventListener("keydown", function (event) {
  if (event.key !== "Escape") return;

  if (document.getElementById("login-overlay")?.classList.contains("show")) {
    closeLogin();
    return;
  }

  if (document.getElementById("signup-overlay")?.classList.contains("show")) {
    closeSignup();
  }
});
