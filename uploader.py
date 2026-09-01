import os
import json
import urllib.request
import urllib.parse
from b2sdk.v2 import B2Api, InMemoryAccountInfo

# --- IDENTIFIANTS BACKBLAZE B2 ---
B2_KEY_ID = "4a3d2d018449"
B2_APPLICATION_KEY = "005f6994a99d8f562f0238f0650c23204a3e39f134"
BUCKET_NAME = "downhub-apks"  # Assurez-vous que le nom correspond exactement à votre Bucket Backblaze

def init_b2():
    """Initialise la connexion sécurisée à Backblaze B2."""
    info = InMemoryAccountInfo()
    b2_api = B2Api(info)
    b2_api.authorize_account("production", B2_KEY_ID, B2_APPLICATION_KEY)
    return b2_api.get_bucket_by_name(BUCKET_NAME)

def process_and_upload():
    print("🚀 Connexion au serveur Backblaze B2...")
    try:
        bucket = init_b2()
        print("✅ Connexion réussie !")
    except Exception as e:
        print(f"❌ Erreur de connexion Backblaze : {e}")
        return

    # Chargement du fichier apps.json existant
    json_path = "apps.json"
    if not os.path.exists(json_path):
        print("❌ Le fichier apps.json n'a pas été trouvé. Lancez d'abord scraper.py !")
        return

    with open(json_path, "r", encoding="utf-8") as f:
        apps = json.load(f)

    print(f"📦 Traitement de {len(apps)} applications...")

    for index, app in enumerate(apps):
        app_name = app.get("name", f"app_{index}")
        clean_filename = f"{urllib.parse.quote(app_name.lower().replace(' ', '_'))}.apk"
        b2_file_path = f"apks/{clean_filename}"
        
        # URL publique générée pour Backblaze
        public_b2_url = f"https://f005.backblazeb2.com/file/{BUCKET_NAME}/{b2_file_path}"
        
        # Mise à jour du lien de téléchargement direct dans le JSON
        app["downloadUrl"] = public_b2_url
        print(f"[{index + 1}/{len(apps)}] Lien mis à jour pour {app_name} -> {public_b2_url}")

    # Sauvegarde du fichier apps.json mis à jour
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(apps, f, ensure_ascii=False, indent=2)

    print("🎉 Mises à jour terminées ! Fichier apps.json prêt pour le déploiement.")

if __name__ == "__main__":
    process_and_upload()