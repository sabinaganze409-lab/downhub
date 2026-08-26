// Base de données générée dynamiquement (5 000+ applications)
const appsDatabase = {
    android: [],
    windows: [],
    mac: [],
    jeux: [],
    vpn: []
};

// Liste d'applications phares pour remplir le catalogue
const realApps = {
    android: [
        { name: "WhatsApp Messenger", category: "Communication", rating: 4.5, size: "35 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.whatsapp" },
        { name: "Instagram", category: "Social Networks", rating: 4.3, size: "50 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.instagram.android" },
        { name: "TikTok", category: "Social Networks", rating: 4.4, size: "85 MB", icon: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically" },
        { name: "Facebook", category: "Social Networks", rating: 4.1, size: "65 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.facebook.katana" },
        { name: "Telegram", category: "Communication", rating: 4.5, size: "40 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg", downloadUrl: "https://play.google.com/store/apps/details?id=org.telegram.messenger" },
        { name: "CapCut", category: "Tools", rating: 4.6, size: "92 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a0/CapCut_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.lemon.lvoverseas" }
    ],
    windows: [
        { name: "VLC Media Player", category: "Video Player", rating: 4.8, size: "40 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/VLC_icon.svg", downloadUrl: "https://www.videolan.org/vlc/" },
        { name: "Google Chrome", category: "Browser", rating: 4.6, size: "90 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg", downloadUrl: "https://www.google.com/chrome/" },
        { name: "WinRAR", category: "Compression", rating: 4.5, size: "3 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c8/WinRAR_icon.svg", downloadUrl: "https://www.win-rar.com" },
        { name: "Visual Studio Code", category: "Development", rating: 4.9, size: "85 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", downloadUrl: "https://code.visualstudio.com/" }
    ],
    mac: [
        { name: "Alfred 5", category: "Productivity", rating: 4.8, size: "15 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Alfred_App_Logo.png", downloadUrl: "https://www.alfredapp.com/" },
        { name: "CleanMyMac X", category: "Optimization", rating: 4.6, size: "95 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/CleanMyMac_X_icon.png", downloadUrl: "https://macpaw.com/cleanmymac" },
        { name: "Magnet", category: "Window Manager", rating: 4.7, size: "4 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Magnet_app_icon.png", downloadUrl: "https://magnet.crowdcafe.com/" }
    ],
    jeux: [
        { name: "PUBG Mobile", category: "Battle Royale", rating: 4.2, size: "1.2 GB", icon: "https://upload.wikimedia.org/wikipedia/en/3/3d/PUBG_Mobile_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.tencent.ig" },
        { name: "Subway Surfers", category: "Arcade", rating: 4.6, size: "140 MB", icon: "https://upload.wikimedia.org/wikipedia/en/b/b3/Subway_Surfers_App_Icon.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf" },
        { name: "Free Fire", category: "Action", rating: 4.3, size: "410 MB", icon: "https://upload.wikimedia.org/wikipedia/en/a/a2/Garena_Free_Fire_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.dts.freefireth" }
    ],
    vpn: [
        { name: "ExpressVPN", category: "VPN & Sécurité", rating: 4.6, size: "45 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0e/ExpressVPN_logo.png", downloadUrl: "https://www.expressvpn.com/" },
        { name: "NordVPN", category: "VPN & Sécurité", rating: 4.7, size: "52 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/5/52/NordVPN_logo.svg", downloadUrl: "https://nordvpn.com/" },
        { name: "Proton VPN", category: "VPN Gratuit", rating: 4.5, size: "38 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/7/74/Proton_VPN_logo.svg", downloadUrl: "https://protonvpn.com/" }
    ]
};

// Fonction pour générer 1 000 applications par catégorie (Total = 5 000)
function generateDatabase() {
    const categories = ['android', 'windows', 'mac', 'jeux', 'vpn'];
    
    categories.forEach(cat => {
        // Ajouter d'abord les vraies applications
        appsDatabase[cat] = [...realApps[cat]];
        
        // Compléter jusqu'à 1 000 applications par catégorie
        const baseCount = appsDatabase[cat].length;
        for (let i = baseCount + 1; i <= 1000; i++) {
            appsDatabase[cat].push({
                name: `${cat.toUpperCase()} App Pro ${i}`,
                category: cat === 'jeux' ? 'Jeu Vidéo' : (cat === 'vpn' ? 'VPN & Sécurité' : 'Utilitaire'),
                rating: (3.5 + Math.random() * 1.5).toFixed(1),
                size: `${Math.floor(Math.random() * 90) + 10} MB`,
                icon: appsDatabase[cat][i % baseCount].icon,
                downloadUrl: "https://google.com"
            });
        }
    });
}

// Variables de gestion de l'affichage
let currentCategory = 'all';
let currentFilteredApps = [];
let currentPage = 1;
const appsPerPage = 20;

// Génération de la carte HTML
function createAppCard(app) {
    const safeName = encodeURIComponent(app.name);
    const safeUrl = encodeURIComponent(app.downloadUrl);

    return `
        <div class="app-card" style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 15px;">
                <img src="${app.icon}" alt="${app.name}" style="width: 50px; height: 50px; border-radius: 10px; object-fit: cover;">
                <div>
                    <h4 style="margin: 0; color: #fff;">${app.name}</h4>
                    <span style="font-size: 0.8em; color: #aaa;">${app.category} • ⭐ ${app.rating} • ${app.size}</span>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
                <button onclick="shareApp('${safeName}', '${safeUrl}')" title="Partager" style="background: rgba(255, 255, 255, 0.15); color: white; border: none; padding: 8px 12px; border-radius: 8px; cursor: pointer; font-size: 0.9em;">
                    <i class="fa-solid fa-share-nodes"></i>
                </button>
                <a href="${app.downloadUrl}" target="_blank" style="background: #007bff; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 0.9em;">Télécharger</a>
            </div>
        </div>
    `;
}

// Fonction de filtrage et recherche
function filterApps() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase().trim();
    
    let baseList = [];
    if (currentCategory === 'all') {
        baseList = [
            ...appsDatabase.android,
            ...appsDatabase.windows,
            ...appsDatabase.mac,
            ...appsDatabase.jeux,
            ...appsDatabase.vpn
        ];
    } else {
        baseList = appsDatabase[currentCategory] || [];
    }

    // Filtrer par mot-clé si une recherche est saisie
    if (searchQuery !== '') {
        currentFilteredApps = baseList.filter(app => 
            app.name.toLowerCase().includes(searchQuery) || 
            app.category.toLowerCase().includes(searchQuery)
        );
    } else {
        currentFilteredApps = baseList;
    }

    // Réinitialiser à la première page
    currentPage = 1;
    renderApps();
}

// Affichage des applications paginées
function renderApps() {
    const container = document.getElementById('apps-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    const maxIndex = currentPage * appsPerPage;
    const appsToDisplay = currentFilteredApps.slice(0, maxIndex);

    if (appsToDisplay.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: #aaa; grid-column: 1/-1;">Aucune application trouvée.</p>`;
        loadMoreBtn.style.display = 'none';
        return;
    }

    container.innerHTML = appsToDisplay.map(app => createAppCard(app)).join('');

    // Afficher ou cacher le bouton "Charger plus"
    if (maxIndex < currentFilteredApps.length) {
        loadMoreBtn.style.display = 'inline-block';
    } else {
        loadMoreBtn.style.display = 'none';
    }
}

// Charger plus d'applications
function loadMoreApps() {
    currentPage++;
    renderApps();
}

// Changer de catégorie
function switchCategory(categoryKey, btnElement) {
    currentCategory = categoryKey;

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) {
        btnElement.classList.add('active');
    }

    filterApps();
}

// Gestion de la recherche en temps réel
function handleSearch() {
    filterApps();
}

// Fonction de partage
function shareApp(appName, downloadUrl) {
    const decodedName = decodeURIComponent(appName);
    const decodedUrl = decodeURIComponent(downloadUrl);

    if (navigator.share) {
        navigator.share({
            title: `Télécharger ${decodedName}`,
            text: `Découvrez et téléchargez ${decodedName} !`,
            url: decodedUrl
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(decodedUrl).then(() => {
            alert(`Lien de ${decodedName} copié dans le presse-papier !`);
        }).catch(() => {
            alert(`Lien de téléchargement : ${decodedUrl}`);
        });
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    generateDatabase();
    filterApps();
});
