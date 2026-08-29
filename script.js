document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("appsGrid");

  // Chargement dynamique de votre fichier JSON
  fetch("apps.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur de chargement du fichier JSON");
      }
      return response.json();
    })
    .then(appsData => {
      if (grid && Array.isArray(appsData)) {
        // Affichage des applications dans la grille
        grid.innerHTML = appsData.map(app => `
          <div class="app-card">
            <img src="${app.icon || app.image || 'https://via.placeholder.com/72'}" alt="${app.name || app.title}">
            <h4>${app.name || app.title}</h4>
            <div class="app-meta">${app.category || 'Application'}</div>
            <div class="app-rating">★ ${app.rating || '4.5'}</div>
            <a href="${app.downloadUrl || app.link || '#'}" class="btn-download" style="width: 100%; font-size: 12px; padding: 6px 0;">Installer</a>
          </div>
        `).join("");
      }
    })
    .catch(error => {
      console.error("Impossible de charger les applications :", error);
    });
});
