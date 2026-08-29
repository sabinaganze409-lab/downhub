document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("appsGrid");

  fetch("apps.json")
    .then(res => res.json())
    .then(appsData => {
      if (!grid || !Array.isArray(appsData)) return;

      grid.innerHTML = appsData.map(app => {
        // Détection automatique du nom
        const title = app.name || app.nom || app.title || app.appName || app.titre || "Application";

        // Détection automatique de l'icône / image
        const icon = app.icon || app.icone || app.image || app.iconUrl || app.img || app.logo || "";

        // Détection de la catégorie, note et lien
        const category = app.category || app.categorie || app.type || "App";
        const rating = app.rating || app.note || "4.5";
        const link = app.downloadUrl || app.link || app.url || "#";

        return `
          <div class="app-card">
            <img src="${icon}" alt="${title}" onerror="this.src='https://via.placeholder.com/72'">
            <h4>${title}</h4>
            <div class="app-meta">${category}</div>
            <div class="app-rating">★ ${rating}</div>
            <a href="${link}" class="btn-download" style="width: 100%; font-size: 12px; padding: 6px 0;">Installer</a>
          </div>
        `;
      }).join("");
    })
    .catch(err => console.error("Erreur JSON:", err));
});
