# Portfolio — Aurélien POTOLA

Portfolio personnel d'Aurélien POTOLA — Assistant Visual Merchandising & Créateur Visuel IA.
Étudiant Bachelor Techniques de Commercialisation à l'Université de la Réunion, en recherche d'alternance Master Marketing.

## 🌐 Site en ligne

[À renseigner après déploiement Netlify]

## 🏗️ Stack

- **HTML5** statique (9 pages)
- **CSS3** custom (Fraunces + Inter Tight)
- **JavaScript** vanilla (i18n FR/EN, theme toggle, animations)
- **Three.js** pour le fond 3D (particules)
- **Aucune dépendance npm** — site 100% statique

## 📁 Structure

```
.
├── index.html              # Accueil avec hero éditorial
├── about.html              # À propos + photo + valeurs
├── projects.html           # Grille de 15 projets visuels
├── project-detail.html     # Étude de cas dynamique (?p=slug)
├── university.html         # Parcours académique & projets
├── experience.html         # Timeline expérience pro
├── skills.html             # Hard skills, logiciels, langues
├── cv.html                 # CV web + téléchargement PDF + vidéo
├── contact.html            # Formulaire sécurisé + infos
├── assets/
│   ├── css/style.css       # Design system unique
│   └── js/
│       ├── main.js         # i18n, theme, animations, form
│       └── bg-3d.js        # Particules Three.js
├── Visuel par page/        # Tous les médias (images, vidéos, PDF)
├── CV_Aurelien_POTOLA.pdf
├── Portfolio_Aurelien_POTOLA.pdf
├── Heritage_Presentation_Aurelien_POTOLA.pdf
├── netlify.toml            # Configuration Netlify (headers + redirects)
├── _headers                # Backup pour autres hosts
├── .htaccess               # Backup pour hébergement Apache
├── robots.txt              # SEO + anti-scraping IA
├── sitemap.xml             # Map pour Google
└── .well-known/security.txt
```

## 🚀 Déploiement Netlify

1. **Connecter le repo** à Netlify : https://app.netlify.com/start
2. Sélectionner ce repository
3. **Build settings** :
   - Build command : *(vide)*
   - Publish directory : `.`
4. Netlify lira automatiquement `netlify.toml`
5. **Domaine custom** : configurer dans Netlify > Domain settings

## 🔒 Sécurité

- ✅ **CSP** (Content Security Policy) stricte
- ✅ **HSTS** (HTTP Strict Transport Security)
- ✅ **SRI** (Subresource Integrity) sur Three.js CDN
- ✅ **Anti-clickjacking** (X-Frame-Options: DENY)
- ✅ **Permissions-Policy** (toutes APIs bloquées)
- ✅ **Honeypot** anti-bot + rate-limit sur le formulaire
- ✅ **Sanitization HTML** côté client
- ✅ **Anti-scraping IA** (robots.txt bloque GPTBot, Claude, etc.)

## 📧 Contact

**Aurélien POTOLA**
- Email : potola.aurelien974@gmail.com
- LinkedIn : [in/aurélien-potola](https://www.linkedin.com/in/aurélien-potola-5750232b1)
- Instagram : [@ap.studio.974](https://www.instagram.com/ap.studio.974)
- TikTok : [@ap.studio974](https://www.tiktok.com/@ap.studio974)
- Localisation : Île de la Réunion 🇷🇪

## © Copyright

© 2026 Aurélien POTOLA — Tous droits réservés.
Les visuels et contenus de ce portfolio sont la propriété exclusive de leur auteur.
