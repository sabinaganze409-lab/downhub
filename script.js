// Remplacez l'ancienne FALLBACK_ICON par une icône store propre (ex: Flaticon 3D App Icon)
const FALLBACK_ICON = "https://cdn-icons-png.flaticon.com/512/2589/2589175.png";

// Dans la fonction createAppCard, assurez-vous que les images gèrent bien l'erreur de chargement
function createAppCard(app) {
  const safeTitle = app.name || app.title || "Application";
  const safeCategory = app.category || app.categorie || "App";
  const safeRating = app.rating || "4.5";
  const safeIcon = (app.icon && app.icon.startsWith('http')) ? app.icon : FALLBACK_ICON;
  const safeUrl = app.downloadUrl || app.link || "#";

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
