// Liste d'applications avec des icônes réelles et bannières HD
const appsData = [
  {
    name: "Free Fire",
    category: "Action",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    rating: "4.5",
    size: "350 MB",
    link: "#"
  },
  {
    name: "WhatsApp",
    category: "Communication",
    icon: "https://images.unsplash.com/photo-1614680376593-902f749f7fdc?w=150&auto=format&fit=crop&q=80",
    rating: "4.7",
    size: "45 MB",
    link: "#"
  },
  {
    name: "eFootball 2026",
    category: "Sport",
    icon: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=150&auto=format&fit=crop&q=80",
    rating: "4.2",
    size: "1.9 GB",
    link: "#"
  },
  {
    name: "CapCut",
    category: "Vidéo",
    icon: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=150&auto=format&fit=crop&q=80",
    rating: "4.8",
    size: "90 MB",
    link: "#"
  },
  {
    name: "GTA San Andreas",
    category: "Jeu de rôle",
    icon: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=150&auto=format&fit=crop&q=80",
    rating: "4.9",
    size: "2.1 GB",
    link: "#"
  },
  {
    name: "TikTok",
    category: "Social",
    icon: "https://images.unsplash.com/photo-1611605697805-88a54377886b?w=150&auto=format&fit=crop&q=80",
    rating: "4.4",
    size: "85 MB",
    link: "#"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("appsGrid");
  
  if (grid) {
    grid.innerHTML = appsData.map(app => `
      <div class="app-card">
        <img src="${app.icon}" alt="${app.name}">
        <h4>${app.name}</h4>
        <div class="app-meta">${app.category}</div>
        <div class="app-rating">★ ${app.rating}</div>
        <a href="${app.link}" class="btn-download" style="width: 100%; font-size: 12px; padding: 6px 0;">Installer</a>
      </div>
    `).join("");
  }
});
