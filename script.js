let allApps = [];
let filteredApps = [];
let currentPage = 1;
const APPS_PER_PAGE = 24;
const FALLBACK_ICON = "https://cdn-icons-png.flaticon.com/512/300/300221.png";

document.addEventListener("DOMContentLoaded", () => {
  fetchAppsData();
});

// 1. Chargement du fichier JSON
function fetchAppsData() {
  fetch("apps.json")
    .then(res => {
      if (!res.ok) throw new Error("Erreur de chargement du fichier JSON");
      return res.json();
    })
    .then(data => {
      allApps = data;
      filteredApps = data;
      renderAppsGrid(true); // Premier affichage
    })
    .catch(err => console.error("Erreur DownHub :", err));
}

// 2. Génération HTML d'une carte d'application (Téléchargement direct + Vue détail)
function createAppCard(app) {
  const safeTitle = app.name || app.title || "Application";
  const safeCategory = app.category || app.categorie || "App";
  const safeRating = app.rating || "4.5";
  const safeIcon = app.icon || app.image || FALLBACK_ICON;
  const safeUrl = app.downloadUrl || app.link || "#";

  // Encoder les données pour la vue détail
  const appDataString = encodeURIComponent(JSON.stringify(app));

  return `
    <div class="app-card-grid">
      <div onclick="openDetails('${appDataString}')" style="cursor: pointer; width: 100%; display: flex; flex-direction: column; align-items: center;">
        <img src="${safeIcon}" alt="${safeTitle}" onerror="this.src='${FALLBACK_ICON}'">
        <h4>${safeTitle}</h4>
        <span>${safeCategory} • ★ ${safeRating}</span>
      </div>
      <a href="${safeUrl}" download="${safeTitle}.apk" class="btn-download" style="width: 100%; margin-top: 8px; font-size: 12px; padding: 6px 0; text-align: center; display: block;">
        Télécharger
      </a>
    </div>
  `;
}

// 3. Rendu fluide et paginé pour ne pas surcharger le mobile
function renderAppsGrid(reset = false) {
  const container = document.getElementById("apps-container") || document.getElementById("appsGrid");
  const loadMoreBtn = document.getElementById("load-more-btn");

  if (!container) return;

  if (reset) {
    currentPage = 1;
    container.innerHTML = "";
  }

  const startIndex = (currentPage - 1) * APPS_PER_PAGE;
  const endIndex = currentPage * APPS_PER_PAGE;
  const pageItems = filteredApps.slice(startIndex, endIndex);

  // Ajout progressif des cartes au lieu de tout remplacer
  const cardsHtml = pageItems.map(app => createAppCard(app)).join("");
  container.insertAdjacentHTML("beforeend", cardsHtml);

  // Gestion de l'affichage du bouton "Charger plus"
  if (loadMoreBtn) {
    loadMoreBtn.style.display = endIndex < filteredApps.length ? "block" : "none";
  }
}

// 4. Fonction pour charger la page suivante
function loadMoreApps() {
  currentPage++;
  renderAppsGrid(false);
}

// 5. Recherche adaptative
function handleSearch() {
  const query = document.getElementById("search-input").value.toLowerCase().trim();
  filteredApps = allApps.filter(app => {
    const title = (app.name || app.title || "").toLowerCase();
    const cat = (app.category || app.categorie || "").toLowerCase();
    return title.includes(query) || cat.includes(query);
  });
  renderAppsGrid(true);
}

// 6. Changement de catégorie
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

// 7. Vue Détail avec Téléchargement Direct
function openDetails(appDataString) {
  const app = JSON.parse(decodeURIComponent(appDataString));
  const safeTitle = app.name || app.title || "Application";
  const safeUrl = app.downloadUrl || app.link || "#";

  document.getElementById("detail-icon").src = app.icon || FALLBACK_ICON;
  document.getElementById("detail-icon").onerror = function() { this.src = FALLBACK_ICON; };
  document.getElementById("detail-title").innerText = safeTitle;
  document.getElementById("detail-category").innerText = app.category || "App";
  document.getElementById("detail-rating").innerText = `★ ${app.rating || '4.5'}`;
  document.getElementById("detail-size").innerText = app.size || "-- MB";
  document.getElementById("detail-text").innerText = app.description || "Aucune description disponible pour cette application.";
  
  // Configuration du bouton de téléchargement direct dans la vue détail
  const downloadBtn = document.getElementById("detail-download-btn");
  downloadBtn.href = safeUrl;
  downloadBtn.setAttribute("download", `${safeTitle}.apk`);

  document.getElementById("home-view").style.display = "none";
  document.getElementById("details-view").style.display = "block";
  window.scrollTo(0, 0);
}

function closeDetails() {
  document.getElementById("details-view").style.display = "none";
  document.getElementById("home-view").style.display = "block";
}
