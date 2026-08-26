// Base de données de 100 applications & jeux par plateforme
const appsDatabase = {
    android: [
        { name: "WhatsApp Messenger", category: "Communication", rating: 4.5, size: "35 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.whatsapp" },
        { name: "Instagram", category: "Réseaux Sociaux", rating: 4.3, size: "50 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.instagram.android" },
        { name: "TikTok", category: "Réseaux Sociaux", rating: 4.4, size: "85 MB", icon: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically" },
        { name: "Facebook", category: "Réseaux Sociaux", rating: 4.1, size: "65 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.facebook.katana" },
        { name: "Telegram", category: "Communication", rating: 4.5, size: "40 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg", downloadUrl: "https://play.google.com/store/apps/details?id=org.telegram.messenger" },
        { name: "CapCut", category: "Outillages", rating: 4.6, size: "92 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a0/CapCut_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.lemon.lvoverseas" },
        { name: "Truecaller", category: "Sécurité", rating: 4.4, size: "45 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/2/22/Truecaller_logo.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.truecaller" },
        { name: "X (Twitter)", category: "Réseaux Sociaux", rating: 4.0, size: "38 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.twitter.android" },
        { name: "Snapchat", category: "Réseaux Sociaux", rating: 4.1, size: "60 MB", icon: "https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.snapchat.android" },
        { name: "Spotify", category: "Musique", rating: 4.4, size: "32 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.spotify.music" },
        { name: "Messenger", category: "Communication", rating: 4.2, size: "48 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/be/be/Facebook_Messenger_logo_2020.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.facebook.orca" },
        { name: "Pinterest", category: "Photos", rating: 4.5, size: "55 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.org.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.pinterest" },
        { name: "Opera Mini", category: "Navigateur", rating: 4.4, size: "15 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/4/49/Opera_2015_icon.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.opera.mini.native" },
        { name: "Xender", category: "Utilitaire", rating: 4.3, size: "25 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Xender_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=cn.xender" },
        { name: "VLC for Android", category: "Lecteur Media", rating: 4.5, size: "30 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/VLC_icon.svg", downloadUrl: "https://play.google.com/store/apps/details?id=org.videolan.vlc" },
        { name: "Shazam", category: "Musique", rating: 4.7, size: "20 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Shazam_icon.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.shazam.android" },
        { name: "Duolingo", category: "Éducation", rating: 4.7, size: "45 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/1/15/Duolingo_logo_2019.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.duolingo" },
        { name: "LinkedIn", category: "Pro", rating: 4.3, size: "50 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.linkedin.android" },
        { name: "Waze", category: "Navigation", rating: 4.4, size: "80 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/6/66/Waze_icon.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.waze" },
        { name: "Canva", category: "Design", rating: 4.8, size: "40 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.canva.editor" },
        { name: "Google Drive", category: "Cloud", rating: 4.3, size: "30 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.google.android.apps.docs" },
        { name: "Zoom", category: "Réunion", rating: 4.1, size: "52 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_communications_logo.svg", downloadUrl: "https://play.google.com/store/apps/details?id=us.zoom.videomeetings" },
        { name: "Snapseed", category: "Photo", rating: 4.4, size: "28 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Snapseed_logo.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.niksoftware.snapseed" },
        { name: "Reddit", category: "Forum", rating: 4.2, size: "60 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/0/07/Reddit_icon.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.reddit.frontpage" },
        { name: "WPS Office", category: "Bureautique", rating: 4.5, size: "90 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/WPS_Office_logo.svg", downloadUrl: "https://play.google.com/store/apps/details?id=cn.wps.moffice_eng" }
    ],

    windows: [
        { name: "VLC Media Player", category: "Lecteur Vidéo", rating: 4.8, size: "40 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/VLC_icon.svg", downloadUrl: "https://www.videolan.org/vlc/" },
        { name: "Google Chrome", category: "Navigateur", rating: 4.6, size: "90 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg", downloadUrl: "https://www.google.com/chrome/" },
        { name: "WinRAR", category: "Compression", rating: 4.5, size: "3 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c8/WinRAR_icon.svg", downloadUrl: "https://www.win-rar.com" },
        { name: "Visual Studio Code", category: "Développement", rating: 4.9, size: "85 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", downloadUrl: "https://code.visualstudio.com/" },
        { name: "CCleaner", category: "Nettoyage", rating: 4.3, size: "55 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c1/CCleaner_logo.svg", downloadUrl: "https://www.ccleaner.com/" },
        { name: "Obs Studio", category: "Streaming", rating: 4.8, size: "120 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d3/OBS_Studio_Logo.svg", downloadUrl: "https://obsproject.com/" },
        { name: "7-Zip", category: "Archivage", rating: 4.7, size: "1.5 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/7/77/7-Zip_Icon.svg", downloadUrl: "https://www.7-zip.org/" },
        { name: "qBittorrent", category: "Téléchargement", rating: 4.6, size: "25 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/6/66/QBittorrent_artwork.svg", downloadUrl: "https://www.qbittorrent.org/" },
        { name: "Discord", category: "Chat Gamers", rating: 4.7, size: "80 MB", icon: "https://upload.wikimedia.org/wikipedia/fr/4/4f/Discord_Logo_sans_texte.svg", downloadUrl: "https://discord.com/" },
        { name: "IDM (Internet Download Manager)", category: "Utilitaire", rating: 4.5, size: "15 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Internet_Download_Manager_logo.png", downloadUrl: "https://www.internetdownloadmanager.com/" },
        { name: "Audacity", category: "Édition Audio", rating: 4.6, size: "35 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Audacity_Logo_2022.svg", downloadUrl: "https://www.audacityteam.org/" },
        { name: "GIMP", category: "Graphisme", rating: 4.4, size: "300 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/The_GIMP_icon_-_Icon_Theme.svg", downloadUrl: "https://www.gimp.org/" },
        { name: "Brave Browser", category: "Navigateur", rating: 4.7, size: "110 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Brave_icon_2021.svg", downloadUrl: "https://brave.com/" },
        { name: "LibreOffice", category: "Bureautique", rating: 4.5, size: "340 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a2/LibreOffice_7.1_main_logo_icon.svg", downloadUrl: "https://www.libreoffice.org/" },
        { name: "Notepad++", category: "Éditeur Texte", rating: 4.8, size: "5 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Notepad%2B%2B_Logo.svg", downloadUrl: "https://notepad-plus-plus.org/" },
        { name: "AnyDesk", category: "Bureau à distance", rating: 4.4, size: "9 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e5/AnyDesk_Logo.svg", downloadUrl: "https://anydesk.com/" },
        { name: "Malwarebytes", category: "Antivirus", rating: 4.6, size: "280 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Malwarebytes_logo.svg", downloadUrl: "https://www.malwarebytes.com/" },
        { name: "Steam", category: "Plateforme Jeux", rating: 4.8, size: "2 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg", downloadUrl: "https://store.steampowered.com/" },
        { name: "Epic Games Launcher", category: "Jeux", rating: 4.3, size: "150 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg", downloadUrl: "https://store.epicgames.com/" },
        { name: "CapCut Windows", category: "Montage Vidéo", rating: 4.7, size: "450 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a0/CapCut_logo.png", downloadUrl: "https://www.capcut.com/" },
        { name: "Blender", category: "3D & Animation", rating: 4.9, size: "310 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg", downloadUrl: "https://www.blender.org/" },
        { name: "Krita", category: "Dessin 2D", rating: 4.7, size: "160 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/7/73/Calligra_Krita_icon.svg", downloadUrl: "https://krita.org/" },
        { name: "Handbrake", category: "Convertisseur Vidéo", rating: 4.6, size: "20 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3e/HandBrake_Icon.png", downloadUrl: "https://handbrake.fr/" },
        { name: "Rufus", category: "Utilitaire USB", rating: 4.8, size: "1.4 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Rufus_logo.svg", downloadUrl: "https://rufus.ie/" },
        { name: "TeamViewer", category: "Assistance", rating: 4.2, size: "65 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9f/TeamViewer_Icon_2020.svg", downloadUrl: "https://www.teamviewer.com/" }
    ],

    mac: [
        { name: "Alfred 5", category: "Productivité", rating: 4.8, size: "15 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Alfred_App_Logo.png", downloadUrl: "https://www.alfredapp.com/" },
        { name: "CleanMyMac X", category: "Optimisation", rating: 4.6, size: "95 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/CleanMyMac_X_icon.png", downloadUrl: "https://macpaw.com/cleanmymac" },
        { name: "Magnet", category: "Fenêtres", rating: 4.7, size: "4 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Magnet_app_icon.png", downloadUrl: "https://magnet.crowdcafe.com/" },
        { name: "IINA Player", category: "Lecteur Vidéo", rating: 4.9, size: "60 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/IINA_icon.png", downloadUrl: "https://iina.io/" },
        { name: "Keka", category: "Archivage", rating: 4.7, size: "25 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Keka_icon.png", downloadUrl: "https://www.keka.io/" },
        { name: "Transmission", category: "Torrent", rating: 4.6, size: "18 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Transmission_Icon.png", downloadUrl: "https://transmissionbt.com/" },
        { name: "DaVinci Resolve", category: "Montage Pro", rating: 4.8, size: "2.1 GB", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio_18_icon.png", downloadUrl: "https://www.blackmagicdesign.com/products/davinciresolve" },
        { name: "Notion", category: "Organisation", rating: 4.8, size: "110 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", downloadUrl: "https://www.notion.so/" },
        { name: "Raycast", category: "Productivité", rating: 4.9, size: "45 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Raycast_logo.png", downloadUrl: "https://www.raycast.com/" },
        { name: "Rectangle", category: "Gestion Fenêtres", rating: 4.8, size: "10 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Rectangle_app_icon.png", downloadUrl: "https://rectangleapp.com/" },
        { name: "Bartender 5", category: "Barre de menu", rating: 4.6, size: "16 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/3/30/Bartender_mac_icon.png", downloadUrl: "https://www.macbartender.com/" },
        { name: "Spark Mail", category: "Email", rating: 4.7, size: "85 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Spark_mail_icon.png", downloadUrl: "https://sparkmailapp.com/" },
        { name: "1Password", category: "Sécurité", rating: 4.8, size: "70 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c5/1Password_icon.svg", downloadUrl: "https://1password.com/" },
        { name: "Figma", category: "Design UI", rating: 4.7, size: "90 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", downloadUrl: "https://www.figma.com/" },
        { name: "Docker Desktop", category: "Développement", rating: 4.6, size: "550 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png", downloadUrl: "https://www.docker.com/" },
        { name: "Arc Browser", category: "Navigateur", rating: 4.7, size: "120 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Arc_Browser_icon.png", downloadUrl: "https://arc.net/" },
        { name: "Obsidian", category: "Prise de notes", rating: 4.9, size: "80 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/1/10/Obsidian_icon.svg", downloadUrl: "https://obsidian.md/" },
        { name: "Logic Pro (Trial)", category: "Production Audio", rating: 4.9, size: "1.1 GB", icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Logic_Pro_icon.png", downloadUrl: "https://www.apple.com/logic-pro/" },
        { name: "Final Cut Pro (Trial)", category: "Montage Vidéo", rating: 4.8, size: "3.5 GB", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Final_Cut_Pro_icon.png", downloadUrl: "https://www.apple.com/final-cut-pro/" },
        { name: "MacCy", category: "Presse-papier", rating: 4.8, size: "8 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Maccy_icon.png", downloadUrl: "https://maccy.app/" },
        { name: "BetterTouchTool", category: "Personnalisation", rating: 4.7, size: "30 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a4/BTT_icon.png", downloadUrl: "https://folivora.ai/" },
        { name: "Amphetamine", category: "Utilitaire", rating: 4.9, size: "5 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Amphetamine_app_icon.png", downloadUrl: "https://apps.apple.com/" },
        { name: "Shottr", category: "Capture d'écran", rating: 4.8, size: "4 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/5/52/Shottr_icon.png", downloadUrl: "https://shottr.cc/" },
        { name: "Pixelmator Pro", category: "Édition Image", rating: 4.7, size: "400 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/8/83/Pixelmator_Pro_icon.png", downloadUrl: "https://www.pixelmator.com/pro/" },
        { name: "Sublime Text", category: "Éditeur Code", rating: 4.6, size: "22 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/7/79/Sublime_Text_icon.png", downloadUrl: "https://www.sublimetext.com/" }
    ],

    jeux: [
        { name: "PUBG Mobile", category: "Battle Royale", rating: 4.2, size: "1.2 GB", icon: "https://upload.wikimedia.org/wikipedia/en/3/3d/PUBG_Mobile_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.tencent.ig" },
        { name: "Subway Surfers", category: "Arcade", rating: 4.6, size: "140 MB", icon: "https://upload.wikimedia.org/wikipedia/en/b/b3/Subway_Surfers_App_Icon.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf" },
        { name: "Free Fire", category: "Action", rating: 4.3, size: "410 MB", icon: "https://upload.wikimedia.org/wikipedia/en/a/a2/Garena_Free_Fire_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.dts.freefireth" },
        { name: "Candy Crush Saga", category: "Puzzle", rating: 4.6, size: "95 MB", icon: "https://upload.wikimedia.org/wikipedia/en/b/b6/Candy_Crush_Saga_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.king.candycrushsaga" },
        { name: "Roblox", category: "Aventure", rating: 4.4, size: "160 MB", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Roblox_player_icon_2022.svg", downloadUrl: "https://play.google.com/store/apps/details?id=com.roblox.client" },
        { name: "Minecraft", category: "Sandbox", rating: 4.5, size: "550 MB", icon: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover_art.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe" },
        { name: "Asphalt 9: Legends", category: "Course", rating: 4.5, size: "2.5 GB", icon: "https://upload.wikimedia.org/wikipedia/en/f/f5/Asphalt_9_Legends_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM" },
        { name: "Call of Duty: Mobile", category: "FPS", rating: 4.4, size: "2.2 GB", icon: "https://upload.wikimedia.org/wikipedia/en/1/1a/Call_of_Duty_Mobile_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter" },
        { name: "Clash of Clans", category: "Stratégie", rating: 4.5, size: "300 MB", icon: "https://upload.wikimedia.org/wikipedia/en/5/58/Clash_of_Clans_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.supercell.clashofclans" },
        { name: "Clash Royale", category: "Cartes / Stratégie", rating: 4.3, size: "250 MB", icon: "https://upload.wikimedia.org/wikipedia/en/9/9f/Clash_Royale_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.supercell.clashroyale" },
        { name: "Genshin Impact", category: "RPG", rating: 4.4, size: "5.5 GB", icon: "https://upload.wikimedia.org/wikipedia/en/5/5d/Genshin_Impact_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact" },
        { name: "EA SPORTS FC Mobile", category: "Sport", rating: 4.1, size: "480 MB", icon: "https://upload.wikimedia.org/wikipedia/en/5/58/EA_Sports_FC_Mobile_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.ea.gp.fifamobile" },
        { name: "Among Us", category: "Multijoueur", rating: 4.2, size: "130 MB", icon: "https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg", downloadUrl: "https://play.google.com/store/apps/details?id=com.innersloth.spacemafia" },
        { name: "League of Legends: Wild Rift", category: "MOBA", rating: 4.3, size: "3.1 GB", icon: "https://upload.wikimedia.org/wikipedia/en/b/b8/League_of_Legends_Wild_Rift_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.riotgames.league.wildrift" },
        { name: "Brawl Stars", category: "Action", rating: 4.4, size: "350 MB", icon: "https://upload.wikimedia.org/wikipedia/en/d/d4/Brawl_Stars_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.supercell.brawlstars" },
        { name: "Temple Run 2", category: "Arcade", rating: 4.3, size: "120 MB", icon: "https://upload.wikimedia.org/wikipedia/en/4/4d/Temple_Run_2_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.imangi.templerun2" },
        { name: "8 Ball Pool", category: "Sport", rating: 4.4, size: "90 MB", icon: "https://upload.wikimedia.org/wikipedia/en/3/36/8_Ball_Pool_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.miniclip.eightballpool" },
        { name: "Hill Climb Racing", category: "Course", rating: 4.4, size: "85 MB", icon: "https://upload.wikimedia.org/wikipedia/en/c/c5/Hill_Climb_Racing_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.fingersoft.hcr" },
        { name: "Plants vs. Zombies", category: "Stratégie", rating: 4.4, size: "100 MB", icon: "https://upload.wikimedia.org/wikipedia/en/2/20/Plants_vs._Zombies_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.ea.game.pvzfree_row" },
        { name: "Need for Speed No Limits", category: "Course", rating: 4.3, size: "1.8 GB", icon: "https://upload.wikimedia.org/wikipedia/en/8/87/Need_for_Speed_No_Limits_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.ea.game.nfs14_row" },
        { name: "Ludo King", category: "Société", rating: 4.2, size: "75 MB", icon: "https://upload.wikimedia.org/wikipedia/en/8/8a/Ludo_King_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.ludo.king" },
        { name: "Shadow Fight 3", category: "Combat", rating: 4.4, size: "900 MB", icon: "https://upload.wikimedia.org/wikipedia/en/2/21/Shadow_Fight_3_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.nekki.shadowfight3" },
        { name: "Real Racing 3", category: "Simulation Course", rating: 4.4, size: "2.8 GB", icon: "https://upload.wikimedia.org/wikipedia/en/c/c7/Real_Racing_3_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.ea.games.r3_row" },
        { name: "Dead by Daylight Mobile", category: "Horreur", rating: 4.0, size: "3.4 GB", icon: "https://upload.wikimedia.org/wikipedia/en/1/1b/Dead_by_Daylight_Mobile_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.bhvr.dbdm" },
        { name: "Mobile Legends: Bang Bang", category: "MOBA", rating: 4.1, size: "1.5 GB", icon: "https://upload.wikimedia.org/wikipedia/en/6/69/Mobile_Legends_Bang_Bang_logo.png", downloadUrl: "https://play.google.com/store/apps/details?id=com.mobile.legends" }
    ]
};

// Fonction globale d'affichage
function renderCategory(categoryKey, containerId) {
    const container = document.getElementById(containerId) || document.querySelector(`.${categoryKey}-grid`);
    if (!container || !appsDatabase[categoryKey]) return;

    container.innerHTML = appsDatabase[categoryKey].map(app => `
        <div class="app-card" style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 15px;">
                <img src="${app.icon}" alt="${app.name}" style="width: 50px; height: 50px; border-radius: 10px; object-fit: cover;">
                <div>
                    <h4 style="margin: 0; color: #fff;">${app.name}</h4>
                    <span style="font-size: 0.8em; color: #aaa;">${app.category} • ⭐ ${app.rating} • ${app.size}</span>
                </div>
            </div>
            <a href="${app.downloadUrl}" target="_blank" style="background: #007bff; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: bold;">Télécharger</a>
        </div>
    `).join('');
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Si tu as un conteneur global
    const globalContainer = document.getElementById('apps-list') || document.querySelector('.apps-grid');
    if (globalContainer) {
        const allApps = [
            ...appsDatabase.android,
            ...appsDatabase.windows,
            ...appsDatabase.mac,
            ...appsDatabase.jeux
        ];
        
        globalContainer.innerHTML = allApps.map(app => `
            <div class="app-card" style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <img src="${app.icon}" alt="${app.name}" style="width: 50px; height: 50px; border-radius: 10px; object-fit: cover;">
                    <div>
                        <h4 style="margin: 0; color: #fff;">${app.name}</h4>
                        <span style="font-size: 0.8em; color: #aaa;">${app.category} • ⭐ ${app.rating} • ${app.size}</span>
                    </div>
                </div>
                <a href="${app.downloadUrl}" target="_blank" style="background: #007bff; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: bold;">Télécharger</a>
            </div>
        `).join('');
    }

    // Affichage par section si des conteneurs spécifiques existent (android-list, windows-list, etc.)
    renderCategory('android', 'android-list');
    renderCategory('windows', 'windows-list');
    renderCategory('mac', 'mac-list');
    renderCategory('jeux', 'jeux-list');
});
