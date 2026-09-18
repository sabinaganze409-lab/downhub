// Base de données locale des projets (à remplacer plus tard par les appels API)
let appsData = [
  {
    id: "downhub-vpn",
    title: "DownHub VPN",
    category: "Sécurité & Réseau",
    icon: "fa-shield-halved",
    status: "EN COURS",
    progress: 75,
    votes: 42,
    desc: "Chiffrement élevé et protection de la vie privée via WireGuard."
  },
  {
    id: "file-explorer",
    title: "File Explorer",
    category: "Utilitaire Système",
    icon: "fa-folder-open",
    status: "EN COURS",
    progress: 40,
    votes: 28,
    desc: "Gestionnaire rapide, nettoyage mémoire et extraction d'archives."
  },
  {
    id: "shield-antivirus",
    title: "Shield Antivirus",
    category: "Sécurité Android",
    icon: "fa-shield-cat",
    status: "PLANIFIÉ",
    progress: 10,
    votes: 56,
    desc: "Analyse en temps réel des APKs et protection contre les malwares."
  },
  {
    id: "media-player",
    title: "Media Player",
    category: "Multimédia",
    icon: "fa-music",
    status: "EN COURS",
    progress: 60,
    votes: 19,
    desc: "Lecteur vidéo 4K et audio HD avec égaliseur et mode arrière-plan."
  },
  {
    id: "afrilex-dict",
    title: "AfriLex Dict",
    category: "Éducation & Langues",
    icon: "fa-language",
    status: "EN COURS",
    progress: 85,
    votes: 95,
    desc: "Dictionnaire Français - Langues Africaines fonctionnant hors-ligne."
  },
  {
    id: "speed-booster",
    title: "Speed Booster",
    category: "Optimisation",
    icon: "fa-rocket",
    status: "CONCEPT",
    progress: 0,
    votes: 14,
    desc: "Nettoyage des fichiers caches et libération de RAM en un clic."
  }
];

let currentFilter = "ALL";

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  renderApps();
});

// Affichage dynamique des cartes
function renderApps() {
  const grid = document.getElementById("appsGrid");
  const searchVal = document.getElementById("searchInput").value.toLowerCase();
  grid.innerHTML = "";

  const filtered = appsData.filter(app => {
    const matchSearch = app.title.toLowerCase().includes(searchVal) || app.desc.toLowerCase().includes(searchVal);
    const matchStatus = currentFilter === "ALL" || app.status === currentFilter;
    return matchSearch && matchStatus;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Aucune application trouvée.</p>`;
    return;
  }

  filtered.forEach(app => {
    const card = document.createElement("div");
    card.className = "app-card";
    card.innerHTML = `
      <div>
        <div class="card-header">
          <i class="fa-solid ${app.icon} app-icon"></i>
          <span class="badge badge-${app.status}">${app.status.replace("_", " ")}</span>
        </div>
        <h3 class="app-title">${app.title}</h3>
        <span class="app-category">${app.category}</span>
        <p class="app-desc">${app.desc}</p>
      </div>

      <div>
        <!-- Barre de progression -->
        <div class="progress-section">
          <div class="progress-label">
            <span>Avancement</span>
            <span>${app.progress}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${app.progress}%"></div>
          </div>
        </div>

        <!-- Boutons d'interaction -->
        <div class="card-actions">
          <button class="btn btn-vote" onclick="voteApp('${app.id}')">
            <i class="fa-solid fa-thumbs-up"></i> <span id="vote-count-${app.id}">${app.votes}</span>
          </button>
          <button class="btn btn-primary" onclick="openBeta('${app.id}', '${app.title}')">
            Bêta
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Fonction de vote local
function voteApp(id) {
  const app = appsData.find(a => a.id === id);
  if (app) {
    app.votes++;
    document.getElementById(`vote-count-${id}`).innerText = app.votes;
  }
}

// Filtrage
function setFilter(status, btnElement) {
  currentFilter = status;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btnElement.classList.add("active");
  renderApps();
}

function filterApps() {
  renderApps();
}

// Modals
function openModal(modalId) {
  document.getElementById(modalId).classList.add("active");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("active");
}

function openBeta(appId, appTitle) {
  document.getElementById("betaAppId").value = appId;
  document.getElementById("betaAppTitle").innerText = "Application : " + appTitle;
  openModal("betaModal");
}

// Soumissions des formulaires
function handleBetaSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("betaEmail").value;
  alert(`Merci ! L'email ${email} a été inscrit à la bêta.`);
  closeModal("betaModal");
  e.target.reset();
}

function handleSuggestSubmit(e) {
  e.preventDefault();
  const title = document.getElementById("suggestTitle").value;
  alert(`Merci ! Votre idée "${title}" a été soumise au développeur.`);
  closeModal("suggestModal");
  e.target.reset();
}
