// --- CONFIGURATION & VARIABLES GLOBALES ---
let allApps = [];
let filteredApps = [];
let currentPage = 1;
let isLoading = false;
const APPS_PER_PAGE = 24;
const FALLBACK_ICON = "https://cdn-icons-png.flaticon.com/512/2589/2589175.png";

// --- INITIALISATION ---
document.addEventListener("DOMContentLoaded", () => {
  fetchAppsData();
  setupInfiniteScroll();
});

// 1. Chargement des données JSON avec gestion d'erreur
function fetchAppsData() {
  fetch("apps.json")
    .then(res => {
      if (!res.ok) throw new Error("Fichier apps.json introuvable");
      return res.json();
    })
    .then(data => {
      console.log(`DownHub: ${data.length} applications chargées avec succès.`);
      allApps = data;
      filteredApps = data;
      renderAppsGrid(true);
    })
    .catch(err => {
      console.error("Erreur DownHub :", err);
      const container = document.getElementById("apps-container") || document.getElementById("appsGrid");
      if (container) {
        container.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; color: #ef4444; padding: 40px;">
            <p>Impossible de charger les applications.</p>
            <small>Vérifiez la présence du fichier apps.json à la racine.</small>
          </div>
        `;
      }
    });
}

// 2. Génération HTML d'une carte d'application (Style APKPure)
function createAppCard(app) {
  const safeTitle = app.name || app.title || "Application";
  const safeCategory = app.category || app.categorie || "App";
  const safeRating = app.rating || "4.5";
  const safeIcon = (app.icon && app.icon.startsWith("http")) ? app.icon : FALLBACK_ICON;
  const safeUrl = app.downloadUrl || app.link || "#";

  // Encodage des données pour la vue détaillée
  const appDataString = encodeURIComponent(JSON.stringify(app));

  return `
    <div class="app-card">
      <div onclick="openDetails('${appDataString}')" style="cursor: pointer; width: 100%; display: flex; flex-direction: column; align-items: center;">
        <img src="${safeIcon}" alt="${safeTitle}" onerror="this.onerror=null; this.src='${FALLBACK_ICON}';">
        <h4>${safeTitle}</h4>
        <div class="app-meta">${safeCategory}</div>
        <div class="app-rating">★ ${safeRating}</div>
      </div>
      <a href="${safeUrl}" download="${safeTitle}.apk" class="btn-download">
        Télécharger
      </a>
    </div>
  `;
}

// 3. Rendu paginé dans la grille (Optimisation Mobile)
function renderAppsGrid(reset = false) {
  const container = document.getElementById("apps-container") || document.getElementById("appsGrid");
  if (!container) return;

  if (reset) {
    currentPage = 1;
    container.innerHTML = "";
  }

  const startIndex = (currentPage - 1) * APPS_PER_PAGE;
  const endIndex = currentPage * APPS_PER_PAGE;
  const pageItems = filteredApps.slice(startIndex, endIndex);

  if (pageItems.length === 0 && reset) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: #94a3b8; padding: 40px;">
        Aucune application trouvée.
      </div>
    `;
    return;
  }

  const cardsHtml = pageItems.map(app => createAppCard(app)).join("");
  container.insertAdjacentHTML("beforeend", cardsHtml);
  isLoading = false;
}

// 4. Défilement Infini (Infinite Scroll)
function setupInfiniteScroll() {
  window.addEventListener("scroll", () => {
    if (isLoading) return;

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
      const maxPages = Math.ceil(filteredApps.length / APPS_PER_PAGE);
      if (currentPage < maxPages) {
        isLoading = true;
        currentPage++;
        renderAppsGrid(false);
      }
    }
  });
}

// 5. Recherche adaptative en temps réel
function handleSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  const query = searchInput.value.toLowerCase().trim();
  filteredApps = allApps.filter(app => {
    const title = (app.name || app.title || "").toLowerCase();
    const cat = (app.category || app.categorie || "").toLowerCase();
    return title.includes(query) || cat.includes(query);
  });
  renderAppsGrid(true);
}

// 6. Filtrage par Catégorie
function switchCategory(categoryKey, btnElement) {
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  if (categoryKey === "all" || categoryKey === "Tous") {
    filteredApps = allApps;
  } else {
    filteredApps = allApps.filter(app => {
      const cat = (app.category || app.categorie || "").toLowerCase();
      return cat.includes(categoryKey.toLowerCase());
    });
  }
  renderAppsGrid(true);
}

// 7. Vue Détaillée & Téléchargement Direct
function openDetails(appDataString) {
  const app = JSON.parse(decodeURIComponent(appDataString));
  const safeTitle = app.name || app.title || "Application";
  const safeUrl = app.downloadUrl || app.link || "#";

  const detailIcon = document.getElementById("detail-icon");
  if (detailIcon) {
    detailIcon.src = app.icon || FALLBACK_ICON;
    detailIcon.onerror = function() { this.src = FALLBACK_ICON; };
  }

  if (document.getElementById("detail-title")) document.getElementById("detail-title").innerText = safeTitle;
  if (document.getElementById("detail-category")) document.getElementById("detail-category").innerText = app.category || "App";
  if (document.getElementById("detail-rating")) document.getElementById("detail-rating").innerText = `★ ${app.rating || '4.5'}`;
  if (document.getElementById("detail-size")) document.getElementById("detail-size").innerText = app.size || "-- MB";
  if (document.getElementById("detail-text")) document.getElementById("detail-text").innerText = app.description || "Aucune description disponible pour cette application.";

  const downloadBtn = document.getElementById("detail-download-btn");
  if (downloadBtn) {
    downloadBtn.href = safeUrl;
    downloadBtn.setAttribute("download", `${safeTitle}.apk`);
  }

  const homeView = document.getElementById("home-view");
  const detailsView = document.getElementById("details-view");

  if (homeView && detailsView) {
    homeView.style.display = "none";
    detailsView.style.display = "block";
    window.scrollTo(0, 0);
  }
}

function closeDetails() {
  const homeView = document.getElementById("home-view");
  const detailsView = document.getElementById("details-view");

  if (homeView && detailsView) {
    detailsView.style.display = "none";
    homeView.style.display = "block";
  }
}
