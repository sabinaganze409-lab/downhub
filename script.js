// Données d'exemple des applications (à remplacer par vos données JSON ou API)
const appsData = [
  { name: "Free Fire", category: "Action", icon: "https://via.placeholder.com/72", rating: "4.5", size: "350 MB", link: "#" },
  { name: "WhatsApp", category: "Communication", icon: "https://via.placeholder.com/72", rating: "4.7", size: "45 MB", link: "#" },
  { name: "eFootball 2026", category: "Sport", icon: "https://via.placeholder.com/72", rating: "4.2", size: "1.9 GB", link: "#" },
  { name: "CapCut", category: "Vidéo", icon: "https://via.placeholder.com/72", rating: "4.8", size: "90 MB", link: "#" },
  { name: "GTA San Andreas", category: "Jeu de rôle", icon: "https://via.placeholder.com/72", rating: "4.9", size: "2.1 GB", link: "#" },
  { name: "TikTok", category: "Social", icon: "https://via.placeholder.com/72", rating: "4.4", size: "85 MB", link: "#" }
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("appsGrid");
  
  if (grid) {
    grid.innerHTML = appsData.map(app => `
      <div class="app-card">
        <img src="${app.icon}" alt="${app.name}">
        <h4>${app.name}</h4>
        <div class="app-meta">${app.category}</div>
        <div class="app-meta" style="color: #f59e0b; font-weight: bold; margin-top: 4px;">★ ${app.rating}</div>
        <a href="${app.link}" class="btn-download" style="display: inline-block; margin-top: 8px; font-size: 12px; padding: 6px 12px; width: 100%; box-sizing: border-box;">Installer</a>
      </div>
    `).join("");
  }
});
