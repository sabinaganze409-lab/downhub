let allApps = [];
let filteredApps = [];
let currentPage = 1;
let isLoading = false;
const APPS_PER_PAGE = 24;
const FALLBACK_ICON = "https://cdn-icons-png.flaticon.com/512/2589/2589175.png";

document.addEventListener("DOMContentLoaded", () => {
  fetchAppsData();
  setupInfiniteScroll();
});

function fetchAppsData() {
  fetch("apps.json")
    .then(res => {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(data => {
      allApps = data;
      filteredApps = data;
      renderAppsGrid(true);
    })
    .catch(err => {
      console.error("DownHub fetch error:", err);
      const container = document.getElementById("apps-container");
      if (container) {
        container.innerHTML = `<p style="color:#ef4444; grid-column:1/-1;">Erreur de chargement de apps.json</p>`;
      }
    });
}

function createAppCard(app) {
  const safeTitle = app.name || app.title || "Application";
  const safeCategory = app.category || app.categorie || "App";
  const safeRating = app.rating || "4.5";
  const safeIcon = (app.icon && app.icon.startsWith("http")) ? app.icon : FALLBACK_ICON;
  const safeUrl = app.downloadUrl || app.link || "#";

  const appDataString = encodeURIComponent(JSON.stringify(app));

  return `
    <div class="app-card">
      <div onclick="openDetails('${appDataString}')" style="cursor: pointer; width: 100%;">
        <img src="${safeIcon}" alt="${safeTitle}" onerror="this.onerror=null; this.src='${FALLBACK_ICON}';">
        <h4>${safeTitle}</h4>
        <div class="app-meta">${safeCategory}</div>
        <div class="app-rating">★ ${safeRating}</div>
      </div>
      <a href="${safeUrl}" download="${safeTitle}.apk" class="btn-download">Télécharger</a>
    </div>
  `;
}

function renderAppsGrid(reset = false) {
  const container = document.getElementById("apps-container");
  if (!container) return;

  if (reset) {
    currentPage = 1;
    container.innerHTML = "";
  }

  const startIndex = (currentPage - 1) * APPS_PER_PAGE;
  const endIndex = currentPage * APPS_PER_PAGE;
  const pageItems = filteredApps.slice(startIndex, endIndex);

  if (pageItems.length === 0 && reset) {
    container.innerHTML = `<p style="color:#94a3b8; grid-column:1/-1;">Aucune application trouvée.</p>`;
    return;
  }

  const cardsHtml = pageItems.map(app => createAppCard(app)).join("");
  container.insertAdjacentHTML("beforeend", cardsHtml);
  isLoading = false;
}

function setupInfiniteScroll() {
  window.addEventListener("scroll", () => {
    if (isLoading) return;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      const maxPages = Math.ceil(filteredApps.length / APPS_PER_PAGE);
      if (currentPage < maxPages) {
        isLoading = true;
        currentPage++;
        renderAppsGrid(false);
      }
    }
  });
}

function handleSearch() {
  const query = document.getElementById("search-input").value.toLowerCase().trim();
  filteredApps = allApps.filter(app => {
    const title = (app.name || app.title || "").toLowerCase();
    const cat = (app.category || app.categorie || "").toLowerCase();
    return title.includes(query) || cat.includes(query);
  });
  renderAppsGrid(true);
}

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

function openDetails(appDataString) {
  const app = JSON.parse(decodeURIComponent(appDataString));
  document.getElementById("detail-icon").src = app.icon || FALLBACK_ICON;
  document.getElementById("detail-title").innerText = app.name || "App";
  document.getElementById("detail-category").innerText = app.category || "App";
  document.getElementById("detail-rating").innerText = `★ ${app.rating || '4.5'}`;
  document.getElementById("detail-text").innerText = app.description || "Aucune description.";
  document.getElementById("detail-download-btn").href = app.downloadUrl || "#";

  document.getElementById("home-view").style.display = "none";
  document.getElementById("details-view").style.display = "block";
  window.scrollTo(0, 0);
}

function closeDetails() {
  document.getElementById("details-view").style.display = "none";
  document.getElementById("home-view").style.display = "grid";
}
