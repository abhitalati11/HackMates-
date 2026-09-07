/* =========================================================
   TEAMFORGE MESSAGES
   Separate chat module
   ========================================================= */

/* =========================================================
   MOCK CONVERSATIONS
   ========================================================= */

const conversations = [
  /* ================= PRIVATE CHAT ================= */

  {
    id: "leader-1",

    type: "leader",

    teamId: 1,

    title: "AI Healthcare Assistant",

    person: "Team Leader",

    role: "Private Chat",

    avatar: "A",

    online: true,

    unread: 2,

    messages: [
      {
        sender: "Team Leader",
        mine: false,
        text: "Hi! Are you interested in joining our team?",
        time: "2:31 PM",
      },

      {
        sender: "You",
        mine: true,
        text: "Yes! I would love to contribute to the frontend.",
        time: "2:34 PM",
      },
    ],
  },

  /* ================= TEAM CHAT ================= */

  {
    id: "team-1",

    type: "team",

    teamId: 1,

    title: "AI Healthcare Assistant",

    person: "3 members",

    role: "Team Chat",

    avatar: "A",

    online: true,

    unread: 1,

    messages: [
      {
        sender: "Jay",
        mine: false,
        text: "I'll handle the API integration.",
        time: "2:32 PM",
      },

      {
        sender: "Ananya",
        mine: false,
        text: "I'll finish the ML endpoint today.",
        time: "2:33 PM",
      },

      {
        sender: "You",
        mine: true,
        text: "I'll handle the frontend dashboard.",
        time: "2:34 PM",
      },
    ],
  },

  /* ================= PRIVATE CHAT ================= */

  {
    id: "leader-2",

    type: "leader",

    teamId: 2,

    title: "Smart Campus",

    person: "Team Leader",

    role: "Private Chat",

    avatar: "S",

    online: true,

    unread: 0,

    messages: [
      {
        sender: "You",
        mine: true,
        text: "Is the team still looking for an ML Engineer?",
        time: "1:18 PM",
      },

      {
        sender: "Team Leader",
        mine: false,
        text: "Yes, we'd love to discuss the project with you.",
        time: "1:20 PM",
      },
    ],
  },

  /* ================= TEAM CHAT ================= */

  {
    id: "team-2",

    type: "team",

    teamId: 2,

    title: "Smart Campus",

    person: "4 members",

    role: "Team Chat",

    avatar: "S",

    online: true,

    unread: 0,

    messages: [
      {
        sender: "Priya",
        mine: false,
        text: "The frontend dashboard is almost ready.",
        time: "12:42 PM",
      },

      {
        sender: "Kunal",
        mine: false,
        text: "I'll push the Node.js API changes soon.",
        time: "12:46 PM",
      },

      {
        sender: "You",
        mine: true,
        text: "Great. I'll review everything once it's pushed.",
        time: "12:49 PM",
      },
    ],
  },
];

/* =========================================================
   STATE
   ========================================================= */

let activeConversationId = null;

/* =========================================================
   GET URL PARAMETERS
   ========================================================= */

function getChatParameters() {
  const params = new URLSearchParams(window.location.search);

  return {
    type: params.get("type"),
    teamId: params.get("teamId"),
  };
}

/* =========================================================
   RENDER CONVERSATION LIST
   ========================================================= */

function renderConversations() {
  const container = document.getElementById("conversation-list");

  if (!container) return;

  container.innerHTML = conversations
    .map((chat) => {
      const lastMessage =
        chat.messages[chat.messages.length - 1]?.text || "No messages yet";

      return `

        <button
          type="button"
          onclick="openConversation('${chat.id}')"
          class="w-full text-left p-4 border-b border-[var(--border)] hover:bg-white/[0.03] transition"
        >

          <div class="flex items-center gap-3">

            <!-- Avatar -->

            <div class="relative flex-shrink-0">

              <div
                class="avatar w-10 h-10 rounded-full text-sm"
              >
                ${chat.avatar}
              </div>

              ${
                chat.online
                  ? `
                    <span
                      class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[var(--brand)] border-2 border-[#09090b]"
                    ></span>
                  `
                  : ""
              }

            </div>


            <!-- Information -->

            <div class="flex-1 min-w-0">

              <div
                class="flex items-center justify-between gap-2"
              >

                <p
                  class="text-sm font-semibold truncate"
                >
                  ${chat.title}
                </p>


                ${
                  chat.unread > 0
                    ? `
                      <span
                        class="text-[10px] font-bold bg-[var(--brand)] text-black rounded-full min-w-5 h-5 px-1 flex items-center justify-center"
                      >
                        ${chat.unread}
                      </span>
                    `
                    : ""
                }

              </div>


              <p
                class="text-xs text-[var(--muted)] truncate"
              >

                ${
                  chat.type === "leader"
                    ? "Team Leader · Private Chat"
                    : `${chat.person} · Team Chat`
                }

              </p>


              <p
                class="text-xs text-[var(--muted2)] truncate mt-1"
              >
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
   MESSAGE BADGE
   ========================================================= */

function updateMessageBadge() {
  const badge = document.getElementById("message-badge");

  if (!badge) return;

  const unreadTotal = conversations.reduce(
    (total, chat) => total + chat.unread,
    0,
  );

  badge.textContent = unreadTotal;

  badge.style.display = unreadTotal > 0 ? "flex" : "none";
}

/* =========================================================
   OPEN CONVERSATION
   ========================================================= */

function openConversation(conversationId) {
  const chat = conversations.find(
    (conversation) => conversation.id === conversationId,
  );

  if (!chat) return;

  activeConversationId = conversationId;

  /* Mark unread messages as read */

  chat.unread = 0;

  /* Show active chat */

  const empty = document.getElementById("chat-empty");

  const active = document.getElementById("active-chat");

  if (empty) {
    empty.classList.add("hidden");
  }

  if (active) {
    active.classList.remove("hidden");
  }

  /* Header */

  const avatar = document.getElementById("chat-avatar");

  const title = document.getElementById("chat-title");

  const subtitle = document.getElementById("chat-subtitle");

  const status = document.getElementById("chat-status");

  const onlineDot = document.getElementById("chat-online-dot");

  if (avatar) {
    avatar.textContent = chat.avatar;
  }

  if (title) {
    title.textContent = chat.title;
  }

  if (subtitle) {
    subtitle.textContent =
      chat.type === "leader"
        ? "Team Leader · Private Chat"
        : `${chat.person} · Team Chat`;
  }

  if (status) {
    status.textContent = chat.online ? "● Online" : "○ Offline";

    status.className = chat.online
      ? "text-xs text-[var(--brand)]"
      : "text-xs text-[var(--muted)]";
  }

  if (onlineDot) {
    onlineDot.style.display = chat.online ? "block" : "none";
  }

  renderChatMessages();

  renderConversations();

  document.getElementById("chat-input")?.focus();
}

/* =========================================================
   RENDER MESSAGES
   ========================================================= */

function renderChatMessages() {
  const chat = conversations.find(
    (conversation) => conversation.id === activeConversationId,
  );

  const container = document.getElementById("chat-messages");

  if (!chat || !container) return;

  container.innerHTML = chat.messages
    .map(
      (message) => `

          <div
            class="flex ${message.mine ? "justify-end" : "justify-start"}"
          >

            <div class="max-w-[78%]">

              <div
                class="px-4 py-3 rounded-2xl text-sm ${
                  message.mine
                    ? "bg-[var(--brand)] text-black rounded-br-md"
                    : "bg-white/[0.05] border border-[var(--border)] text-white rounded-bl-md"
                }"
              >

                ${escapeHTML(message.text)}

              </div>


              <p
                class="text-[10px] text-[var(--muted2)] mt-1 ${
                  message.mine ? "text-right" : ""
                }"
              >

                ${message.mine ? "You" : escapeHTML(message.sender)}

                ·

                ${escapeHTML(message.time)}

              </p>

            </div>

          </div>

        `,
    )
    .join("");

  container.scrollTop = container.scrollHeight;
}

/* =========================================================
   SEND MESSAGE
   ========================================================= */

function sendMessage(event) {
  event.preventDefault();

  const input = document.getElementById("chat-input");

  if (!input) return;

  const text = input.value.trim();

  if (!text) return;

  if (!activeConversationId) {
    showToast("Select a conversation first.", "info");

    return;
  }

  const chat = conversations.find(
    (conversation) => conversation.id === activeConversationId,
  );

  if (!chat) return;

  const now = new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  chat.messages.push({
    sender: "You",

    mine: true,

    text: text,

    time: now,
  });

  input.value = "";

  renderChatMessages();

  renderConversations();
}

/* =========================================================
   SAFE HTML
   ========================================================= */

function escapeHTML(text) {
  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}

/* =========================================================
   BACK TO MAIN APP
   ========================================================= */

function goBackToApp() {
  window.location.href = "main.html";
}

/* =========================================================
   SIMPLE TOAST
   ========================================================= */

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");

  if (!container) {
    alert(message);

    return;
  }

  const icon = type === "success" ? "✅" : "💬";

  const element = document.createElement("div");

  element.className = "toast";

  element.innerHTML = `

    <span class="text-lg leading-none">
      ${icon}
    </span>

    <p class="text-sm text-[var(--text)] leading-snug">
      ${escapeHTML(message)}
    </p>

  `;

  container.appendChild(element);

  setTimeout(() => {
    element.classList.add("out");

    setTimeout(() => element.remove(), 300);
  }, 3200);
}

/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderConversations();

  /* Connect the form */

  const form = document.getElementById("chat-form");

  if (form) {
    form.addEventListener("submit", sendMessage);
  }

  /* -----------------------------------------
       Open requested conversation from URL
       ----------------------------------------- */

  const params = getChatParameters();

  if (params.type && params.teamId) {
    const conversation = conversations.find(
      (chat) =>
        chat.type === params.type &&
        String(chat.teamId) === String(params.teamId),
    );

    if (conversation) {
      openConversation(conversation.id);
    }
  }
});
