document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("appsGrid");

  fetch("apps.json")
    .then(res => res.json())
    .then(appsData => {
      if (!grid || !Array.isArray(appsData)) return;

      grid.innerHTML = appsData.map(app => {
        // Fallback si l'icône est un SVG identicon
        const isIdenticon = app.icon && app.icon.includes("dicebear");
        const displayIcon = isIdenticon 
          ? `https://api.dicebear.com/7.x/bottts/svg?seed=${app.id}` // Robot icon au lieu des blocs
          : app.icon;

        return `
          <div class="app-card">
            <img src="${displayIcon}" alt="${app.name}">
            <h4>${app.name}</h4>
            <div class="app-meta">${app.category}</div>
            <div class="app-rating">★ ${app.rating}</div>
            <a href="${app.downloadUrl}" class="btn-download" style="width: 100%; font-size: 12px; padding: 6px 0;">Installer</a>
          </div>
        `;
      }).join("");
    });
});
