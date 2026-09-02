import json
import urllib.parse

INPUT_FILE = "apps.json"
# Remplace par ton pseudo GitHub et le nom exact de ton dépôt
GITHUB_USER = "sabinaganze409-lab"
REPO_NAME = "downhub"
RELEASE_TAG = "v1.0"

def update_links_for_github():
    try:
        with open(INPUT_FILE, "r", encoding="utf-8") as f:
            apps = json.load(f)
    except Exception as e:
        print(f"❌ Erreur lors de la lecture de {INPUT_FILE}: {e}")
        return

    base_url = f"https://github.com/{GITHUB_USER}/{REPO_NAME}/releases/download/{RELEASE_TAG}/"

    for app in apps:
        name = app.get("name", "")
        clean_filename = urllib.parse.quote(name.lower().replace(" ", "_"))
        app["downloadUrl"] = f"{base_url}{clean_filename}.apk"

    with open(INPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(apps, f, ensure_ascii=False, indent=2)

    print(f"✅ Liens mis à jour pour GitHub Releases dans {INPUT_FILE} !")

if __name__ == "__main__":
    update_links_for_github()