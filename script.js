
const appsDatabase = { android: [], windows: [], mac: [], jeux: [], vpn: [] };

// Vraies applications réelles par catégorie
const realApps = {
    android: [
        { id: "wa", name: "WhatsApp Messenger", category: "Communication", rating: 4.5, size: "35 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.whatsapp", description: "Application de messagerie rapide et sécurisée." },
        { id: "insta", name: "Instagram", category: "Réseaux Sociaux", rating: 4.3, size: "50 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.instagram.android", description: "Partage de photos et vidéos." },
        { id: "tiktok", name: "TikTok", category: "Réseaux Sociaux", rating: 4.4, size: "85 MB", icon: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically", description: "Vidéos courtes et divertissement." }
    ],
    windows: [
        { id: "vlc", name: "VLC Media Player", category: "Lecteur Vidéo", rating: 4.8, size: "40 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/VLC_icon.svg", downloadUrl: "https://www.videolan.org/vlc/", description: "Lecteur multimédia universel." },
        { id: "chrome", name: "Google Chrome", category: "Navigateur Web", rating: 4.6, size: "85 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg", downloadUrl: "https://www.google.com/chrome/", description: "Navigateur rapide et sécurisé." },
        { id: "vscode", name: "Visual Studio Code", category: "Développement", rating: 4.9, size: "95 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", downloadUrl: "https://code.visualstudio.com/", description: "Éditeur de code puissant." }
    ],
    mac: [
        { id: "finalcut", name: "Final Cut Pro", category: "Montage Vidéo", rating: 4.7, size: "3.2 GB", icon: "https://upload.wikimedia.org/wikipedia/commons/5/50/Final_Cut_Pro_X_icon.png", downloadUrl: "https://www.apple.com/final-cut-pro/", description: "Montage vidéo professionnel pour macOS." },
        { id: "logicpro", name: "Logic Pro", category: "Production Audio", rating: 4.8, size: "1.1 GB", icon: "https://upload.wikimedia.org/wikipedia/commons/2/23/Logic_Pro_X_Icon.png", downloadUrl: "https://www.apple.com/logic-pro/", description: "Studio de création musicale." }
    ],
    jeux: [
        { id: "gta-sa", name: "GTA San Andreas", category: "Action", rating: 4.7, size: "2.1 GB", icon: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=150&auto=format&fit=crop&q=80", downloadUrl: "https://google.com", description: "Jeu d'action et monde ouvert." },
        { id: "pubg", name: "PUBG Mobile", category: "Battle Royale", rating: 4.3, size: "1.8 GB", icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80", downloadUrl: "https://google.com", description: "Jeu de tir en ligne multijoueur." }
    ],
    vpn: [
        { id: "nordvpn", name: "NordVPN", category: "Sécurité", rating: 4.6, size: "45 MB", icon: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=150&auto=format&fit=crop&q=80", downloadUrl: "https://nordvpn.com", description: "Protection de la vie privée et VPN." },
        { id: "expressvpn", name: "ExpressVPN", category: "Sécurité", rating: 4.5, size: "52 MB", icon: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=150&auto=format&fit=crop&q=80", downloadUrl: "https://expressvpn.com", description: "VPN haut débit sécurisé." }
    ]
};

// Noms d'applications fictives pour enrichir le catalogue de façon réaliste
const sampleNames = {
    android: ["Messenger", "CapCut", "Telegram", "Spotify", "Snapchat", "X (Twitter)", "Pinterest", "Netflix", "Canva", "Subway Surfers"],
    windows: ["Photoshop", "OBS Studio", "Steam", "Discord", "WinRAR", "Audacity", "CCleaner", "Blender", "IDM Manager", "Notepad++"],
    mac: ["Alfred", "CleanMyMac", "Magnet", "Pixelmator", "IINA Player", "BetterTouchTool", "Bear Notes", "Transmit", "Spark Mail", "Raycast"],
    jeux: ["Asphalt 9", "Call of Duty Mobile", "Minecraft", "Roblox", "EA Sports FC", "Need for Speed", "Cyberpunk", "Among Us", "Clash Royale", "Brawl Stars"],
    vpn: ["ProtonVPN", "Surfshark", "CyberGhost", "Windscribe", "TunnelBear", "Hide.me", "Hotspot Shield", "Mullvad", "IPVanish", "Private Internet Access"]
};

function generateDatabase() {
    const categories = ['android', 'windows', 'mac', 'jeux', 'vpn'];
    
    categories.forEach(cat => {
        // Ajouter les vraies applications
        appsDatabase[cat] = [...(realApps[cat] || [])];
        
        // Ajouter des applications variées avec des icônes uniques générées dynamiquement
        const appList = sampleNames[cat] || [];
        appList.forEach((appName, index) => {
            // Icône avec les initiales de l'application sur fond de couleur dynamique
            const avatarBg = ['0D6EFD', '6610F2', '6F42C1', 'D63384', 'DC3545', 'FD7E14', 'FFC107', '198754', '20C997', '0DCAF0'][index % 10];
            const dynamicIcon = `https://ui-avatars.com/api/?name=${encodeURIComponent(appName)}&background=${avatarBg}&color=fff&size=128&bold=true`;

            appsDatabase[cat].push({
                id: `${cat}-gen-${index}`,
                name: appName,
                category: cat === 'jeux' ? 'Jeu Vidéo' : (cat === 'vpn' ? 'VPN & Sécurité' : 'Logiciel / App'),
                rating: (4.0 + Math.random() * 0.9).toFixed(1),
                size: cat === 'jeux' || cat === 'mac' ? `${(Math.random() * 2 + 0.5).toFixed(1)} GB` : `${Math.floor(Math.random() * 80) + 15} MB`,
                icon: dynamicIcon,
                downloadUrl: "https://google.com",
                description: `Téléchargez la dernière version officielle de ${appName} en toute sécurité.`
            });
        });
    });
}

let currentCategory = 'all';
let currentFilteredApps = [];
let currentPage = 1;
const appsPerPage = 24;
const fallbackIcon = "https://cdn-icons-png.flaticon.com/512/300/300221.png";

function createAppCard(app) {
    const appData = encodeURIComponent(JSON.stringify(app));
    return `
        <div class="app-card-grid" onclick="openDetails('${appData}')">
            <img src="${app.icon}" alt="${app.name}" onerror="this.onerror=null; this.src='${fallbackIcon}';">
            <h4>${app.name}</h4>
            <span>⭐ ${app.rating}</span>
        </div>
    `;
}

function filterApps() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase().trim();
    let baseList = currentCategory === 'all' 
        ? Object.values(appsDatabase).flat() 
        : appsDatabase[currentCategory] || [];

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
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #aaa;">Aucune application trouvée.</p>`;
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
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    filterApps();
}

function handleSearch() {
    filterApps();
}

function openDetails(appDataString) {
    const app = JSON.parse(decodeURIComponent(appDataString));

    document.getElementById('detail-icon').src = app.icon;
    document.getElementById('detail-icon').onerror = function() { this.src = fallbackIcon; };
    document.getElementById('detail-title').innerText = app.name;
    document.getElementById('detail-category').innerText = app.category;
    document.getElementById('detail-rating').innerText = `⭐ ${app.rating}`;
    document.getElementById('detail-size').innerText = app.size;
    document.getElementById('detail-text').innerText = app.description || "Aucune description disponible pour cette application.";
    
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

function shareApp(name, url) {
    if (navigator.share) {
        navigator.share({
            title: `Télécharger ${name}`,
            text: `Découvrez l'application ${name} sur DownHub !`,
            url: url
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(url).then(() => {
            alert(`Lien de ${name} copié dans le presse-papier !`);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    generateDatabase();
    filterApps();
});
