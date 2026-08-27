const appsDatabase = { android: [], windows: [], mac: [], jeux: [], vpn: [] };

// Base de données d'applications avec métriques complètes
const realApps = {
    android: [
        { id: "wa", name: "WhatsApp Messenger", category: "Communication", rating: 4.5, size: "35 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.whatsapp", description: "WhatsApp par Meta est une application de messagerie et d'appels vidéo gratuite, simple, sûre et fiable.", offline: false, noAds: true, likes: 142 },
        { id: "insta", name: "Instagram", category: "Réseaux Sociaux", rating: 4.3, size: "50 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.instagram.android", description: "Partagez vos photos, vidéos et moments forts avec vos amis.", offline: false, noAds: false, likes: 98 },
        { id: "tiktok", name: "TikTok", category: "Réseaux Sociaux", rating: 4.4, size: "85 MB", icon: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically", description: "Découvrez et créez de courtes vidéos captivantes du monde entier.", offline: false, noAds: false, likes: 210 }
    ],
    windows: [
        { id: "vlc", name: "VLC Media Player", category: "Lecteur Vidéo", rating: 4.8, size: "40 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/VLC_icon.svg", downloadUrl: "https://www.videolan.org/vlc/", description: "Lecteur multimédia gratuit et open-source capable de lire la plupart des formats vidéo.", offline: true, noAds: true, likes: 320 },
        { id: "chrome", name: "Google Chrome", category: "Navigateur Web", rating: 4.6, size: "85 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg", downloadUrl: "https://www.google.com/chrome/", description: "Navigateur rapide, sécurisé et personnalisable.", offline: false, noAds: true, likes: 180 },
        { id: "vscode", name: "Visual Studio Code", category: "Développement", rating: 4.9, size: "95 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", downloadUrl: "https://code.visualstudio.com/", description: "Éditeur de code puissant développé par Microsoft.", offline: true, noAds: true, likes: 410 }
    ],
    mac: [
        { id: "finalcut", name: "Final Cut Pro", category: "Montage Vidéo", rating: 4.7, size: "3.2 GB", icon: "https://upload.wikimedia.org/wikipedia/commons/5/50/Final_Cut_Pro_X_icon.png", downloadUrl: "https://www.apple.com/final-cut-pro/", description: "Montage vidéo professionnel optimisé pour le matériel Apple.", offline: true, noAds: true, likes: 88 }
    ],
    jeux: [
        { id: "gta-sa", name: "GTA San Andreas", category: "Action", rating: 4.7, size: "2.1 GB", icon: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=150&auto=format&fit=crop&q=80", downloadUrl: "https://google.com", description: "Jeu d'action légendaire en monde ouvert.", offline: true, noAds: true, likes: 530 }
    ],
    vpn: [
        { id: "nordvpn", name: "NordVPN", category: "Sécurité", rating: 4.6, size: "45 MB", icon: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=150&auto=format&fit=crop&q=80", downloadUrl: "https://nordvpn.com", description: "Protection de la vie privée et chiffrement de vos connexions.", offline: false, noAds: true, likes: 275 }
    ]
};

// Catalogue généré dynamique avec attributs riches
const sampleNames = {
    android: ["CapCut", "Telegram", "Spotify", "Subway Surfers", "Snapchat", "Canva", "Pinterest"],
    windows: ["Photoshop", "OBS Studio", "Steam", "Discord", "WinRAR", "Audacity", "CCleaner"],
    mac: ["Alfred", "CleanMyMac", "Magnet", "Pixelmator", "IINA Player"],
    jeux: ["Asphalt 9", "Call of Duty Mobile", "Minecraft", "Roblox", "Among Us"],
    vpn: ["ProtonVPN", "Surfshark", "CyberGhost", "Windscribe", "TunnelBear"]
};

function generateDatabase() {
    const categories = ['android', 'windows', 'mac', 'jeux', 'vpn'];
    
    categories.forEach(cat => {
        appsDatabase[cat] = [...(realApps[cat] || [])];
        
        const appList = sampleNames[cat] || [];
        appList.forEach((appName, index) => {
            const avatarBg = ['0D6EFD', '6610F2', '6F42C1', 'D63384', 'DC3545', 'FD7E14', '198754'][index % 7];
            const sizeValue = Math.floor(Math.random() * 80) + 10;
            
            appsDatabase[cat].push({
                id: `${cat}-gen-${index}`,
                name: appName,
                category: cat === 'jeux' ? 'Jeu Vidéo' : (cat === 'vpn' ? 'VPN & Sécurité' : 'Logiciel / App'),
                rating: (4.0 + Math.random() * 0.9).toFixed(1),
                size: cat === 'jeux' || cat === 'mac' ? `${(Math.random() * 1.8 + 0.5).toFixed(1)} GB` : `${sizeValue} MB`,
                sizeMB: sizeValue,
                icon: `https://ui-avatars.com/api/?name=${encodeURIComponent(appName)}&background=${avatarBg}&color=fff&size=128&bold=true`,
                downloadUrl: "https://google.com",
                description: `Téléchargez la version officielle de ${appName}. Fichier garanti scanné sans aucun programme malveillant.`,
                offline: Math.random() > 0.5,
                noAds: Math.random() > 0.4,
                likes: Math.floor(Math.random() * 150) + 10
            });
        });
    });
}

let currentCategory = 'all';
let currentSmartFilter = 'all';
let currentFilteredApps = [];
let currentPage = 1;
const appsPerPage = 24;
let activeApp = null;

const fallbackIcon = "https://cdn-icons-png.flaticon.com/512/300/300221.png";

function createAppCard(app) {
    const appData = encodeURIComponent(JSON.stringify(app));
    return `
        <div class="app-card-grid" onclick="openDetails('${appData}')">
            <span class="card-badge-sec" title="Scanné sans virus">🛡️</span>
            <img src="${app.icon}" alt="${app.name}" onerror="this.onerror=null; this.src='${fallbackIcon}';">
            <h4>${app.name}</h4>
            <div class="app-card-info">
                <span>⭐ ${app.rating}</span> • <span>${app.size}</span>
            </div>
        </div>
    `;
}

function filterApps() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase().trim();
    let baseList = currentCategory === 'all' 
        ? Object.values(appsDatabase).flat() 
        : appsDatabase[currentCategory] || [];

    // Application du Smart Filter (#1)
    if (currentSmartFilter === 'low-data') {
        baseList = baseList.filter(app => {
            const isMB = app.size.includes('MB');
            const sizeVal = parseFloat(app.size);
            return isMB && sizeVal < 15;
        });
    } else if (currentSmartFilter === 'offline') {
        baseList = baseList.filter(app => app.offline);
    } else if (currentSmartFilter === 'no-ads') {
        baseList = baseList.filter(app => app.noAds);
    }

    // Application de la recherche textuelle
    if (searchQuery !== '') {
        currentFilteredApps = baseList.filter(app => 
            app.name.toLowerCase().includes(searchQuery) || 
            app.category.toLowerCase().includes(searchQuery)
        );
    } else {
        currentFilteredApps = baseList;
    }

    currentPage = 1;
    renderApps();
}

function renderApps() {
    const container = document.getElementById('apps-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const maxIndex = currentPage * appsPerPage;
    const appsToDisplay = currentFilteredApps.slice(0, maxIndex);

    if (appsToDisplay.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px 0;">Aucune application ne correspond à vos critères.</p>`;
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        return;
    }

    container.innerHTML = appsToDisplay.map(app => createAppCard(app)).join('');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = maxIndex < currentFilteredApps.length ? 'inline-block' : 'none';
    }
}

function loadMoreApps() {
    currentPage++;
    renderApps();
}

function switchCategory(categoryKey, btnElement) {
    currentCategory = categoryKey;
    document.querySelectorAll('.tabs-container .tab-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    filterApps();
}

function setFilter(filterKey, btnElement) {
    currentSmartFilter = filterKey;
    document.querySelectorAll('.smart-filters .filter-chip').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    filterApps();
}

function handleSearch() {
    filterApps();
}

/* Thème (#3) */
function setTheme(themeClass) {
    document.body.className = themeClass;
    localStorage.setItem('downhub_theme', themeClass);
}

/* Vue Détails */
function openDetails(appDataString) {
    const app = JSON.parse(decodeURIComponent(appDataString));
    activeApp = app;

    document.getElementById('detail-icon').src = app.icon;
    document.getElementById('detail-icon').onerror = function() { this.src = fallbackIcon; };
    document.getElementById('detail-title').innerText = app.name;
    document.getElementById('detail-category').innerText = app.category;
    document.getElementById('detail-rating').innerText = `⭐ ${app.rating}`;
    document.getElementById('detail-size').innerText = app.size;
    document.getElementById('detail-text').innerText = app.description || "Aucune description disponible.";
    document.getElementById('like-count').innerText = app.likes || 0;

    // Mise à jour des Badges
    document.getElementById('badge-offline-status').innerText = app.offline ? "📶 Hors ligne" : "🌐 En ligne requis";
    document.getElementById('badge-ads-status').innerText = app.noAds ? "🚫 Sans Pub" : "📢 Contient des pubs";

    const downloadBtn = document.getElementById('detail-download-btn');
    downloadBtn.href = app.downloadUrl;

    const shareBtn = document.getElementById('detail-share-btn');
    shareBtn.onclick = () => shareApp(app.name, app.downloadUrl);

    document.getElementById('home-view').style.display = 'none';
    document.getElementById('details-view').style.display = 'block';
    window.scrollTo(0, 0);
}

function closeDetails() {
    document.getElementById('details-view').style.display = 'none';
    document.getElementById('home-view').style.display = 'block';
}

/* Fonction Like (#4) */
function likeApp() {
    if (activeApp) {
        activeApp.likes = (activeApp.likes || 0) + 1;
        document.getElementById('like-count').innerText = activeApp.likes;
        const likeBtn = document.getElementById('detail-like-btn');
        likeBtn.style.borderColor = 'var(--accent-color)';
        likeBtn.disabled = true;
    }
}

/* Partage */
function shareApp(name, url) {
    if (navigator.share) {
        navigator.share({
            title: `Télécharger ${name}`,
            text: `Téléchargez ${name} en toute sécurité sur DownHub !`,
            url: url
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(url).then(() => {
            alert(`Lien de ${name} copié dans le presse-papier !`);
        });
    }
}

/* Modal Demande (#4) */
function openRequestModal() { toggleRequestModal(true); }
function closeRequestModal(e) { if (e.target.id === 'request-modal') toggleRequestModal(false); }
function toggleRequestModal(show) {
    document.getElementById('request-modal').style.display = show ? 'flex' : 'none';
}

function handleRequestSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('req-name').value;
    alert(`Merci ! Votre demande pour "${name}" a été enregistrée.`);
    toggleRequestModal(false);
    e.target.reset();
}

/* Initialisation */
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('downhub_theme');
    if (savedTheme) document.body.className = savedTheme;

    generateDatabase();
    filterApps();
});
