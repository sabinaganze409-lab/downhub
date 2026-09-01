import json
import urllib.request
import urllib.parse
import time

OUTPUT_FILE = "apps.json"

# Génération automatique d'une liste de recherche exhaustive (~100+ mots-clés)
BASE_TERMS = [
    # Top catégories
    "whatsapp", "facebook", "instagram", "tiktok", "telegram", "snapchat", "twitter",
    "vpn", "proxy", "cleaner", "vlc", "snaptube", "shareit", "opera", "brave", "tor",
    "gta", "free fire", "pubg", "efootball", "fifa", "roblox", "call of duty", "clash",
    "capcut", "kinemaster", "picsart", "lightroom", "canva", "netflix", "spotify", "duolingo"
]

# Ajout des lettres de l'alphabet pour balayer tout le catalogue
ALPHABET = [chr(i) for i in range(ord('a'), ord('z')+1)]
SEARCH_TERMS = BASE_TERMS + ALPHABET

def fetch_with_retry(url, retries=3):
    """Effectue une requête web en réessayant si la connexion coupe."""
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=8) as res:
                return json.loads(res.read().decode('utf-8'))
        except Exception:
            if attempt < retries - 1:
                time.sleep(2)
            else:
                return None

def fetch_massive():
    print(f"🚀 Génération massive d'applications via {len(SEARCH_TERMS)} requêtes...")
    all_apps = []
    seen = set()

    for idx, term in enumerate(SEARCH_TERMS):
        # Récupération de 50 résultats par mot-clé pour éviter d'alourdir la réponse
        url = f"https://itunes.apple.com/search?term={urllib.parse.quote(term)}&entity=software&limit=50"
        data = fetch_with_retry(url)
        
        if not data:
            continue

        results = data.get("results", [])
        added_in_this_term = 0

        for item in results:
            name = item.get("trackName")
            if not name or name in seen:
                continue
            seen.add(name)
            added_in_this_term += 1
            
            icon_raw = item.get("artworkUrl100", "")
            icon_hd = icon_raw.replace("100x100bb", "512x512bb")
            clean_filename = urllib.parse.quote(name.lower().replace(" ", "_"))
            
            all_apps.append({
                "name": name,
                "category": item.get("primaryGenreName", "Application"),
                "rating": str(round(item.get("averageUserRating", 4.5), 1)),
                "icon": icon_hd if icon_hd else icon_raw,
                "downloadUrl": f"https://f005.backblazeb2.com/file/downhub-apks/apks/{clean_filename}.apk",
                "size": f"{round(int(item.get('fileSizeBytes', 45000000)) / (1024 * 1024))} MB",
                "description": item.get("description", "")[:180].replace("\n", " ") + "..."
            })
            
        print(f"[{idx+1}/{len(SEARCH_TERMS)}] Terme '{term}' -> +{added_in_this_term} apps (Total: {len(all_apps)})")

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(all_apps, f, ensure_ascii=False, indent=2)

    print("\n--------------------------------------------------")
    print(f"✅ Terminé ! {len(all_apps)} applications sauvegardées dans '{OUTPUT_FILE}'.")
    print("--------------------------------------------------")

if __name__ == "__main__":
    fetch_massive()