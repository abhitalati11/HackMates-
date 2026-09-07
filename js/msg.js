/* =========================================================
   TEAMFORGE REAL-TIME MESSAGES (SUPABASE INTEGRATED)
   ========================================================= */

// 1. Supabase Initialization
const SUPABASE_URL = "https://fjstotyuybduzzlqvzfb.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_m1UotYup4KNsAlA-cv6l7A_vld7MvRT";

const supabaseClient = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

/* =========================================================
   STATE MANAGEMENT
   ========================================================= */

let currentUser = null;
let currentProfile = null;
let conversations = [];
let activeConversationId = null;
let realtimeSubscription = null;

/* =========================================================
   URL PARAMETERS HELPERS
   ========================================================= */

function getChatParameters() {
  const params = new URLSearchParams(window.location.search);
  return {
    type: params.get("type"),
    teamId: params.get("teamId"),
  };
}

/* =========================================================
   TIME FORMATTER (WITH MILLISECONDS)
   ========================================================= */

function formatTimeWithMs(dateInput) {
  const d = dateInput ? new Date(dateInput) : new Date();
  const timeStr = d.toLocaleTimeString([], { 
    hour: "numeric", 
    minute: "2-digit", 
    second: "2-digit" 
  });
  const ms = d.getMilliseconds().toString().padStart(3, '0');
  
  // Format as "3:45:12.123 PM"
  // toLocaleTimeString might return "3:45:12 PM", we need to insert the ms before the AM/PM
  const parts = timeStr.split(' ');
  if (parts.length === 2) {
    return `${parts[0]}.${ms} ${parts[1]}`;
  }
  return `${timeStr}.${ms}`;
}


/* =========================================================
   INITIALIZATION & DATA FETCHING
   ========================================================= */

document.addEventListener("DOMContentLoaded", async () => {
  if (!supabaseClient) {
    console.error("Supabase client failed to load.");
    showToast("Supabase library not loaded. Check internet connection.", "info");
    return;
  }

  // 1. Authenticate User
  const { data: authData, error: authError } = await supabaseClient.auth.getUser();

  if (authError || !authData?.user) {
    console.warn("User not authenticated. Redirecting to login...");
    showToast("Please log in to access messages.", "info");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
    return;
  }

  currentUser = authData.user;

  // 2. Fetch User Profile
  const { data: profile } = await supabaseClient
    .from("profiles")
    .select("*")
    .eq("id", currentUser.id)
    .single();

  currentProfile = profile || { id: currentUser.id, name: currentUser.email.split("@")[0] };

  // Update Sidebar Profile Info
  const sidebarName = document.getElementById("sidebar-name");
  const sidebarRole = document.getElementById("sidebar-role");
  const sidebarAvatar = document.getElementById("sidebar-avatar");

  if (sidebarName) sidebarName.textContent = currentProfile.name || "User";
  if (sidebarRole) sidebarRole.textContent = currentProfile.role || "Member";
  if (sidebarAvatar) sidebarAvatar.textContent = (currentProfile.name || "U")[0].toUpperCase();

  // 3. Load Joined Teams & Build Conversations
  await loadUserTeamsAndConversations();

  // 4. Setup Real-time Listener for Messages
  setupRealtimeMessages();

  // 5. Connect Chat Form Submit Event
  const form = document.getElementById("chat-form");
  if (form) {
    form.addEventListener("submit", sendMessage);
  }

  // 6. Open requested conversation from URL parameters if present
  const params = getChatParameters();
  if (params.type && params.teamId) {
    const conversation = conversations.find(
      (chat) =>
        chat.type === params.type &&
        String(chat.teamId) === String(params.teamId)
    );
    if (conversation) {
      openConversation(conversation.id);
    }
  }
});

/* =========================================================
   LOAD JOINED TEAMS AND CONSTRUCT CONVERSATIONS
   ========================================================= */

async function loadUserTeamsAndConversations() {
  conversations = [];

  try {
    // 1. Fetch URL parameters to check if user clicked "Chat with Leader" on a team
    const params = getChatParameters();

    // 2. Fetch teams where user is a member
    const { data: memberships, error: memError } = await supabaseClient
      .from("team_members")
      .select("project_id")
      .eq("user_id", currentUser.id);

    if (memError) console.error("Error fetching memberships:", memError);

    // 3. Fetch teams created by user (where user is leader)
    const { data: ledProjects, error: ledError } = await supabaseClient
      .from("projects")
      .select("id")
      .eq("leader_id", currentUser.id);

    if (ledError) console.error("Error fetching led projects:", ledError);

    const joinedProjectIds = new Set([
      ...(memberships || []).map((m) => m.project_id),
      ...(ledProjects || []).map((p) => p.id),
    ]);

    // 4. Also fetch distinct project_ids from existing leader messages involving currentUser
    const { data: pastLeaderMsgs } = await supabaseClient
      .from("messages")
      .select("project_id")
      .eq("type", "leader")
      .or(`sender_id.eq.${currentUser.id},receiver_id.eq.${currentUser.id}`);

    const pastLeaderProjectIds = (pastLeaderMsgs || []).map((m) => m.project_id);

    // 5. Combine non-joined project IDs (from URL param or past leader messages)
    const nonJoinedProjectIds = new Set();
    if (params.type === "leader" && params.teamId && !joinedProjectIds.has(params.teamId)) {
      nonJoinedProjectIds.add(params.teamId);
    }
    pastLeaderProjectIds.forEach((pid) => {
      if (pid && !joinedProjectIds.has(pid)) {
        nonJoinedProjectIds.add(pid);
      }
    });

    // --- A. PROCESS JOINED / CREATED TEAMS ---
    for (const projId of joinedProjectIds) {
      const { data: project } = await supabaseClient
        .from("projects")
        .select("*")
        .eq("id", projId)
        .single();

      if (!project) continue;

      // Fetch Leader Profile
      const { data: leaderProfile } = await supabaseClient
        .from("profiles")
        .select("*")
        .eq("id", project.leader_id)
        .single();

      const leaderName = leaderProfile?.name || "Team Leader";

      // Fetch All Members of this team
      const { data: teamMembers } = await supabaseClient
        .from("team_members")
        .select("user_id")
        .eq("project_id", projId);

      const memberUserIds = (teamMembers || []).map((m) => m.user_id);
      
      let memberProfiles = [];
      if (memberUserIds.length > 0) {
        const { data: mProfiles } = await supabaseClient
          .from("profiles")
          .select("*")
          .in("id", memberUserIds);
        memberProfiles = mProfiles || [];
      }

      const isLeader = project.leader_id === currentUser.id;

      // 1. TEAM GROUP CHAT (Available ONLY for team members / leader)
      const teamChat = {
        id: `team-${project.id}`,
        type: "team",
        teamId: project.id,
        title: project.name || "Team Project",
        person: `${memberUserIds.length} members`,
        role: "Team Group Chat",
        avatar: (project.name || "T")[0].toUpperCase(),
        online: true,
        unread: 0,
        messages: [],
      };
      conversations.push(teamChat);

      // 2. PRIVATE CHATS (Leader <-> Member / Inquirer)
      if (!isLeader) {
        // Current user is a member -> Chat directly with Team Leader
        const leaderChat = {
          id: `leader-${project.id}`,
          type: "leader",
          teamId: project.id,
          targetUserId: project.leader_id,
          title: project.name || "Team Project",
          person: leaderName,
          role: "Private Chat (Leader)",
          avatar: leaderName[0].toUpperCase(),
          online: true,
          unread: 0,
          messages: [],
        };
        conversations.push(leaderChat);
      } else {
        // Current user is Leader -> Chat with each member individually
        for (const member of memberProfiles) {
          if (member.id === currentUser.id) continue;

          const memberChat = {
            id: `leader-${project.id}-${member.id}`,
            type: "leader",
            teamId: project.id,
            targetUserId: member.id,
            title: `${project.name} · ${member.name}`,
            person: member.name,
            role: "Member Private Chat",
            avatar: member.name[0].toUpperCase(),
            online: true,
            unread: 0,
            messages: [],
          };
          conversations.push(memberChat);
        }

        // Also check if any non-members have sent leader messages to this Leader
        const { data: nonMemberMsgs } = await supabaseClient
          .from("messages")
          .select("sender_id, receiver_id")
          .eq("project_id", projId)
          .eq("type", "leader")
          .or(`sender_id.eq.${currentUser.id},receiver_id.eq.${currentUser.id}`);

        const nonMemberIds = new Set();
        (nonMemberMsgs || []).forEach((m) => {
          const otherId = m.sender_id === currentUser.id ? m.receiver_id : m.sender_id;
          if (otherId && !memberUserIds.includes(otherId) && otherId !== currentUser.id) {
            nonMemberIds.add(otherId);
          }
        });

        for (const nmId of nonMemberIds) {
          const { data: nmProfile } = await supabaseClient
            .from("profiles")
            .select("*")
            .eq("id", nmId)
            .single();

          const nmName = nmProfile?.name || "Applicant";
          const nmChat = {
            id: `leader-${project.id}-${nmId}`,
            type: "leader",
            teamId: project.id,
            targetUserId: nmId,
            title: `${project.name} · ${nmName}`,
            person: nmName,
            role: "Inquirer (Non-member)",
            avatar: nmName[0].toUpperCase(),
            online: true,
            unread: 0,
            messages: [],
          };
          conversations.push(nmChat);
        }
      }
    }

    // --- B. PROCESS NON-JOINED TEAMS (USER TALKS ONLY TO TEAM LEADER) ---
    for (const projId of nonJoinedProjectIds) {
      const { data: project } = await supabaseClient
        .from("projects")
        .select("*")
        .eq("id", projId)
        .single();

      if (!project) continue;

      // If user is not the leader of this project
      if (project.leader_id !== currentUser.id) {
        // Fetch Leader Profile
        const { data: leaderProfile } = await supabaseClient
          .from("profiles")
          .select("*")
          .eq("id", project.leader_id)
          .single();

        const leaderName = leaderProfile?.name || "Team Leader";

        // Create Leader Private Chat ONLY (NO Team Group Chat!)
        const leaderChat = {
          id: `leader-${project.id}`,
          type: "leader",
          teamId: project.id,
          targetUserId: project.leader_id,
          title: `${project.name} (Leader Chat)`,
          person: leaderName,
          role: "Team Leader",
          avatar: (leaderName || "L")[0].toUpperCase(),
          online: true,
          unread: 0,
          messages: [],
        };
        conversations.push(leaderChat);
      }
    }

    renderConversations();
  } catch (err) {
    console.error("Failed to load conversations:", err);
  }
}

function renderEmptyConversations() {
  const container = document.getElementById("conversation-list");
  if (container) {
    container.innerHTML = `
      <div class="p-6 text-center text-sm text-[var(--muted)]">
        You haven't joined any teams yet.<br>Join or create a team to start chatting!
      </div>
    `;
  }
}

/* =========================================================
   RENDER CONVERSATIONS LIST
   ========================================================= */

function renderConversations() {
  const container = document.getElementById("conversation-list");
  if (!container) return;

  if (conversations.length === 0) {
    renderEmptyConversations();
    return;
  }

  container.innerHTML = conversations
    .map((chat) => {
      const lastMessage =
        chat.messages.length > 0
          ? chat.messages[chat.messages.length - 1].text
          : "Click to start chatting";

      const isActive = chat.id === activeConversationId;

      return `
        <button
          type="button"
          onclick="openConversation('${chat.id}')"
          class="w-full text-left p-4 border-b border-[var(--border)] transition ${
            isActive ? "bg-white/[0.08]" : "hover:bg-white/[0.03]"
          }"
        >
          <div class="flex items-center gap-3">
            <!-- Avatar -->
            <div class="relative flex-shrink-0">
              <div class="avatar w-10 h-10 rounded-full text-sm flex items-center justify-center font-bold bg-[var(--brand)] text-black">
                ${chat.avatar}
              </div>
              ${
                chat.online
                  ? `<span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[var(--brand)] border-2 border-[#09090b]"></span>`
                  : ""
              }
            </div>

            <!-- Information -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between gap-2">
                <p class="text-sm font-semibold truncate text-white">
                  ${escapeHTML(chat.title)}
                </p>
                ${
                  chat.unread > 0
                    ? `<span class="text-[10px] font-bold bg-[var(--brand)] text-black rounded-full min-w-5 h-5 px-1 flex items-center justify-center">${chat.unread}</span>`
                    : ""
                }
              </div>

              <p class="text-xs text-[var(--muted)] truncate">
                ${
                  chat.type === "leader"
                    ? `👤 ${escapeHTML(chat.person)} (${chat.role})`
                    : `👥 ${escapeHTML(chat.person)}`
                }
              </p>

              <p class="text-xs text-[var(--muted2)] truncate mt-1">
                ${escapeHTML(lastMessage)}
              </p>
            </div>
          </div>
        </button>
      `;
    })
    .join("");

  updateMessageBadge();
}

/* =========================================================
   UPDATE BADGE
   ========================================================= */

function updateMessageBadge() {
  const badge = document.getElementById("message-badge");
  if (!badge) return;

  const unreadTotal = conversations.reduce(
    (total, chat) => total + chat.unread,
    0
  );

  badge.textContent = unreadTotal;
  badge.style.display = unreadTotal > 0 ? "flex" : "none";
}

/* =========================================================
   OPEN CONVERSATION & FETCH MESSAGES FROM SUPABASE
   ========================================================= */

async function openConversation(conversationId) {
  const chat = conversations.find((c) => c.id === conversationId);
  if (!chat) return;

  activeConversationId = conversationId;
  chat.unread = 0;

  // Show active chat container
  const empty = document.getElementById("chat-empty");
  const active = document.getElementById("active-chat");

  if (empty) empty.classList.add("hidden");
  if (active) active.classList.remove("hidden");

  // Update Header UI
  const avatar = document.getElementById("chat-avatar");
  const title = document.getElementById("chat-title");
  const subtitle = document.getElementById("chat-subtitle");
  const status = document.getElementById("chat-status");
  const onlineDot = document.getElementById("chat-online-dot");

  if (avatar) avatar.textContent = chat.avatar;
  if (title) title.textContent = chat.title;
  if (subtitle) {
    subtitle.textContent =
      chat.type === "leader"
        ? `Private Chat with ${chat.person}`
        : `${chat.person} · Team Chat`;
  }

  if (status) {
    status.textContent = chat.online ? "● Online" : "○ Offline";
    status.className = chat.online
      ? "text-xs text-[var(--brand)]"
      : "text-xs text-[var(--muted)]";
  }

  if (onlineDot) onlineDot.style.display = chat.online ? "block" : "none";

  renderConversations();

  // Fetch messages from database for this conversation
  await fetchMessagesForConversation(chat);

  document.getElementById("chat-input")?.focus();
}

/* =========================================================
   FETCH MESSAGES FROM SUPABASE DATABASE
   ========================================================= */

async function fetchMessagesForConversation(chat) {
  const container = document.getElementById("chat-messages");
  if (container) {
    container.innerHTML = `<div class="text-center text-xs text-[var(--muted)] py-4">Loading messages...</div>`;
  }

  try {
    let query = supabaseClient
      .from("messages")
      .select(`
        id,
        project_id,
        sender_id,
        receiver_id,
        type,
        content,
        created_at,
        profiles:sender_id(name)
      `)
      .eq("project_id", chat.teamId)
      .eq("type", chat.type)
      .order("created_at", { ascending: true });

    if (chat.type === "leader") {
      // Private chat between currentUser and targetUserId
      query = query.or(
        `and(sender_id.eq.${currentUser.id},receiver_id.eq.${chat.targetUserId}),and(sender_id.eq.${chat.targetUserId},receiver_id.eq.${currentUser.id})`
      );
    }

    const { data: msgRows, error } = await query;

    if (error) {
      console.error("Error fetching messages:", error);
      // Fall back gracefully if table doesn't exist yet
      if (chat.messages.length === 0) chat.messages = [];
    } else if (msgRows) {
      chat.messages = msgRows.map((msg) => ({
        id: msg.id,
        sender: msg.sender_id === currentUser.id ? "You" : (msg.profiles?.name || "Member"),
        senderId: msg.sender_id,
        mine: msg.sender_id === currentUser.id,
        text: msg.content,
        time: formatTimeWithMs(msg.created_at) // Milliseconds included here
      }));
    }
  } catch (err) {
    console.error("Error in fetchMessagesForConversation:", err);
  }

  renderChatMessages();
}

/* =========================================================
   RENDER MESSAGES UI
   ========================================================= */

function renderChatMessages() {
  const chat = conversations.find((c) => c.id === activeConversationId);
  const container = document.getElementById("chat-messages");

  if (!chat || !container) return;

  if (chat.messages.length === 0) {
    container.innerHTML = `
      <div class="text-center text-xs text-[var(--muted)] py-10">
        No messages yet. Send a message to start the conversation!
      </div>
    `;
    return;
  }

  container.innerHTML = chat.messages
    .map(
      (message) => `
        <div class="flex ${message.mine ? "justify-end" : "justify-start"} mb-3">
          <div class="max-w-[78%]">
            <div
              class="px-4 py-3 rounded-2xl text-sm ${
                message.mine
                  ? "bg-[var(--brand)] text-black rounded-br-md font-medium"
                  : "bg-white/[0.07] border border-[var(--border)] text-white rounded-bl-md"
              }"
            >
              ${escapeHTML(message.text)}
            </div>

            <p class="text-[10px] text-[var(--muted2)] mt-1 ${
              message.mine ? "text-right" : ""
            }">
              ${message.mine ? "You" : escapeHTML(message.sender)} · ${escapeHTML(message.time)}
            </p>
          </div>
        </div>
      `
    )
    .join("");

  container.scrollTop = container.scrollHeight;
}

/* =========================================================
   SEND MESSAGE TO SUPABASE
   ========================================================= */

async function sendMessage(event) {
  event.preventDefault();

  const input = document.getElementById("chat-input");
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  if (!activeConversationId) {
    showToast("Select a conversation first.", "info");
    return;
  }

  const chat = conversations.find((c) => c.id === activeConversationId);
  if (!chat) return;

  input.value = "";

  // Optimistic UI update with milliseconds
  const newMessageObj = {
    sender: "You",
    senderId: currentUser.id,
    mine: true,
    text: text,
    time: formatTimeWithMs() // Current time with milliseconds
  };

  chat.messages.push(newMessageObj);
  renderChatMessages();
  renderConversations();

  // Insert into Supabase `messages` table
  try {
    const payload = {
      project_id: chat.teamId,
      sender_id: currentUser.id,
      receiver_id: chat.type === "leader" ? chat.targetUserId : null,
      type: chat.type,
      content: text,
    };

    const { data, error } = await supabaseClient
      .from("messages")
      .insert(payload)
      .select()
      .single();

    if (error) {
      console.error("Failed to store message in Supabase:", error);
      showToast("Could not send message. Please ensure 'messages' table exists in Supabase.", "info");
    } else if (data) {
      newMessageObj.id = data.id;
      // Update with exact server time including ms
      newMessageObj.time = formatTimeWithMs(data.created_at);
      renderChatMessages(); 
    }
  } catch (err) {
    console.error("Error inserting message:", err);
  }
}

/* =========================================================
   SUPABASE REALTIME SUBSCRIPTION
   ========================================================= */

function setupRealtimeMessages() {
  if (!supabaseClient) return;

  if (realtimeSubscription) {
    supabaseClient.removeChannel(realtimeSubscription);
  }

  realtimeSubscription = supabaseClient
    .channel("public:messages")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "messages" },
      async (payload) => {
        const newMsg = payload.new;

        // Skip messages sent by current user (already handled optimistically)
        if (newMsg.sender_id === currentUser.id) return;

        // Find relevant conversation
        const targetChat = conversations.find((chat) => {
          if (chat.type !== newMsg.type) return false;
          if (String(chat.teamId) !== String(newMsg.project_id)) return false;

          if (newMsg.type === "leader") {
            // Must match sender/receiver
            return (
              (newMsg.sender_id === chat.targetUserId && newMsg.receiver_id === currentUser.id) ||
              (newMsg.sender_id === currentUser.id && newMsg.receiver_id === chat.targetUserId)
            );
          }

          return true; // Team chat matches project_id & type='team'
        });

        if (!targetChat) {
          if (newMsg.type === "leader" && (newMsg.receiver_id === currentUser.id || newMsg.sender_id === currentUser.id)) {
            await loadUserTeamsAndConversations();
          }
          return;
        }

        // Fetch sender name
        const { data: senderProf } = await supabaseClient
          .from("profiles")
          .select("name")
          .eq("id", newMsg.sender_id)
          .single();

        const senderName = senderProf?.name || "Teammate";

        const formattedMsg = {
          id: newMsg.id,
          sender: senderName,
          senderId: newMsg.sender_id,
          mine: false,
          text: newMsg.content,
          time: formatTimeWithMs(newMsg.created_at) // Using millisecond formatter here
        };

        targetChat.messages.push(formattedMsg);

        if (activeConversationId === targetChat.id) {
          renderChatMessages();
        } else {
          targetChat.unread += 1;
        }

        renderConversations();
      }
    )
    .subscribe((status) => {
      console.log("Supabase Realtime status:", status);
    });
}

/* =========================================================
   UTILITIES
   ========================================================= */

function escapeHTML(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function goBackToApp() {
  window.location.href = "main.html";
}

function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");

  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "fixed bottom-5 right-5 z-50 flex flex-col gap-2";
    document.body.appendChild(container);
  }

  const icon = type === "success" ? "✅" : "💬";
  const element = document.createElement("div");
  element.className =
    "flex items-center gap-3 bg-[#18181b] border border-[var(--border)] text-white px-4 py-3 rounded-xl shadow-lg text-sm animate-fade-in";
  element.innerHTML = `
    <span class="text-base">${icon}</span>
    <span>${escapeHTML(message)}</span>
  `;

  container.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 3500);
}
