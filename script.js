const appsDatabase = { android: [], windows: [], mac: [], jeux: [], vpn: [] };

// Collection d'icônes par défaut fonctionnelles (logos d'applications neutres)
const defaultIcons = [
    "https://cdn-icons-png.flaticon.com/512/300/300221.png", // Google / App
    "https://cdn-icons-png.flaticon.com/512/732/732208.png", // Game / Controler
    "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", // Settings / Tool
    "https://cdn-icons-png.flaticon.com/512/2885/2885417.png", // Shield / VPN
    "https://cdn-icons-png.flaticon.com/512/1042/1042339.png"  // Media Player
];

const realApps = {
    android: [
        { id: "wa", name: "WhatsApp Messenger", category: "Communication", rating: 4.5, size: "35 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.whatsapp", description: "WhatsApp par Meta est une application de messagerie et d'appels vidéo gratuite." },
        { id: "insta", name: "Instagram", category: "Réseaux Sociaux", rating: 4.3, size: "50 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.instagram.android", description: "Partagez vos photos, vidéos et moments forts avec vos amis sur Instagram." },
        { id: "tiktok", name: "TikTok", category: "Réseaux Sociaux", rating: 4.4, size: "85 MB", icon: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically", description: "Découvrez et créez de courtes vidéos captivantes du monde entier." }
    ],
    windows: [
        { id: "vlc", name: "VLC Media Player", category: "Lecteur Vidéo", rating: 4.8, size: "40 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/VLC_icon.svg", downloadUrl: "https://www.videolan.org/vlc/", description: "Lecteur multimédia gratuit et open-source capable de lire la plupart des formats vidéo." }
    ],
    mac: [],
    jeux: [],
    vpn: []
};

function generateDatabase() {
    const categories = ['android', 'windows', 'mac', 'jeux', 'vpn'];
    categories.forEach(cat => {
        appsDatabase[cat] = [...(realApps[cat] || [])];
        const baseCount = appsDatabase[cat].length;
        
        for (let i = baseCount + 1; i <= 1000; i++) {
            // Sélection d'une icône : priorité aux vraies apps, sinon rotation dans la liste par défaut
            let chosenIcon = baseCount > 0 
                ? appsDatabase[cat][i % baseCount].icon 
                : defaultIcons[i % defaultIcons.length];

            appsDatabase[cat].push({
                id: `${cat}-${i}`,
                name: `${cat.toUpperCase()} App ${i}`,
                category: cat === 'jeux' ? 'Jeu Vidéo' : (cat === 'vpn' ? 'VPN & Sécurité' : 'Utilitaire'),
                rating: (3.5 + Math.random() * 1.5).toFixed(1),
                size: `${Math.floor(Math.random() * 90) + 10} MB`,
                icon: chosenIcon,
                downloadUrl: "https://google.com",
                description: `Ceci est une description détaillée pour l'application ${cat.toUpperCase()} App ${i}. Vous pouvez la télécharger directement.`
            });
        }
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
        loadMoreBtn.style.display = 'none';
        return;
    }

    container.innerHTML = appsToDisplay.map(app => createAppCard(app)).join('');
    loadMoreBtn.style.display = maxIndex < currentFilteredApps.length ? 'inline-block' : 'none';
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
