// --- VARIABLES GLOBALES ---
let allApps = [];
let filteredApps = [];
let displayedCount = 0;
const APPS_PER_PAGE = 24;

// --- INITIALISATION AU CHARGEMENT ---
document.addEventListener("DOMContentLoaded", () => {
  fetchAppsData();
  setupEventListeners();
});

// --- CHARGEMENT DES DONNÉES JSON ---
async function fetchAppsData() {
  try {
    const response = await fetch("apps.json");
    if (!response.ok) throw new Error("Erreur de chargement des applications");
    
    allApps = await response.json();
    filteredApps = [...allApps];
    
    renderAppsGrid(true);
  } catch (error) {
    console.error("❌ Erreur :", error);
    const container = document.getElementById("apps-grid");
    if (container) {
      container.innerHTML = `<p class="error-msg">Impossible de charger le catalogue d'applications.</p>`;
    }
  }
}

// --- ÉCOUTEURS D'ÉVÉNEMENTS ---
function setupEventListeners() {
  // Recherche en temps réel
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      filterAppsBySearch(query);
    });
  }

  // Défilement infini (Infinite Scroll)
  window.addEventListener("scroll", () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
      renderAppsGrid(false);
    }
  });
}

// --- FILTRAGE PAR CATEGORIE ---
function switchCategory(categoryKey, btnElement) {
  // Mise à jour visuelle des boutons
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  const key = categoryKey.toLowerCase();

  if (key === "all" || key === "tous") {
    filteredApps = [...allApps];
  } else if (key === "jeux" || key === "games") {
    filteredApps = allApps.filter(app => {
      const cat = (app.category || "").toLowerCase();
      return cat.includes("game") || cat.includes("jeu") || cat.includes("action") || cat.includes("arcade");
    });
  } else if (key === "vpn") {
    filteredApps = allApps.filter(app => {
      const cat = (app.category || "").toLowerCase();
      const name = (app.name || "").toLowerCase();
      const desc = (app.description || "").toLowerCase();
      return cat.includes("vpn") || name.includes("vpn") || desc.includes("vpn") || cat.includes("utilit");
    });
  } else if (key === "outils" || key === "tools") {
    filteredApps = allApps.filter(app => {
      const cat = (app.category || "").toLowerCase();
      return cat.includes("utilit") || cat.includes("productiv") || cat.includes("tool");
    });
  } else if (key === "social") {
    filteredApps = allApps.filter(app => {
      const cat = (app.category || "").toLowerCase();
      return cat.includes("social") || cat.includes("messag") || cat.includes("réseau");
    });
  } else {
    // Filtrage générique par mot-clé
    filteredApps = allApps.filter(app => {
      const cat = (app.category || "").toLowerCase();
      return cat.includes(key);
    });
  }

  renderAppsGrid(true);
}

// --- FILTRAGE PAR RECHERCHE ---
function filterAppsBySearch(query) {
  if (!query) {
    filteredApps = [...allApps];
  } else {
    filteredApps = allApps.filter(app => {
      const name = (app.name || "").toLowerCase();
      const cat = (app.category || "").toLowerCase();
      return name.includes(query) || cat.includes(query);
    });
  }
  renderAppsGrid(true);
}

// --- AFFICHAGE ET RENDU DANS LA GRILLE ---
function renderAppsGrid(reset = false) {
  const container = document.getElementById("apps-grid");
  if (!container) return;

  if (reset) {
    container.innerHTML = "";
    displayedCount = 0;
  }

  if (filteredApps.length === 0) {
    container.innerHTML = `<p class="no-results">Aucune application trouvée.</p>`;
    return;
  }

  const nextBatch = filteredApps.slice(displayedCount, displayedCount + APPS_PER_PAGE);

  nextBatch.forEach(app => {
    const card = document.createElement("div");
    card.className = "app-card";
    
    card.innerHTML = `
      <div class="app-icon-wrapper">
        <img src="${app.icon}" alt="${app.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/100?text=APK'">
      </div>
      <div class="app-info">
        <h3 class="app-title" title="${app.name}">${app.name}</h3>
        <p class="app-category">${app.category}</p>
        <div class="app-meta">
          <span class="app-rating">⭐ ${app.rating}</span>
          <span class="app-size">💾 ${app.size}</span>
        </div>
        <a href="${app.downloadUrl}" class="download-btn" target="_blank" rel="noopener noreferrer">
          Télécharger
        </a>
      </div>
    `;

    container.appendChild(card);
  });

  displayedCount += nextBatch.length;
}
