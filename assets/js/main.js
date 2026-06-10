// =====================================
// PORTFOLIO M1 — INTERACTIONS
// =====================================

// --- Navigation mobile ---
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    document.body.classList.toggle('nav-open', open);
    toggle.textContent = open ? '✕' : '☰';
  });
  // Fermer au clic sur un lien (mobile)
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    document.body.classList.remove('nav-open');
    toggle.textContent = '☰';
  }));
}

// --- Nav auto-hide on scroll down + scrolled state ---
const navEl = document.querySelector('.nav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (navEl) {
    navEl.classList.toggle('scrolled', y > 30);
    if (y > lastScroll && y > 200) navEl.classList.add('hidden');
    else navEl.classList.remove('hidden');
  }
  lastScroll = y;
}, { passive: true });

// --- Theme toggle (jour / nuit) ---
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
}
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);
document.querySelectorAll('.theme-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const next = (document.documentElement.dataset.theme === 'dark') ? 'light' : 'dark';
    applyTheme(next);
  });
});

// --- Active link based on URL ---
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === path) a.classList.add('active');
});

// =====================================
// I18N — Français / English
// =====================================
const I18N = {
  'pd.back': { fr: '← Retour aux projets', en: '← Back to projects' },
  // ===== Détail projet (statique, auto) =====
  'pd.brand': { fr: 'Marque', en: 'Brand' },
  'pd.cat': { fr: 'Catégorie', en: 'Category' },
  'pd.year': { fr: 'Année', en: 'Year' },
  'pd.context': { fr: 'Le contexte', en: 'The context' },
  'pd.artdir': { fr: 'Direction artistique', en: 'Art direction' },
  'pd.series': { fr: 'La série complète', en: 'The full series' },
  'pd.figures': { fr: 'En chiffres', en: 'In numbers' },
  'pd.discuss': { fr: 'Discuter d\'un projet →', en: 'Let\'s discuss a project →' },
  'pd.prev': { fr: '← Projet précédent', en: '← Previous project' },
  'pd.next': { fr: 'Projet suivant →', en: 'Next project →' },

  // ===== Compléments (auto) =====
  'un.bachH': { fr: 'Bachelor Techniques de Commercialisation', en: 'Bachelor in Sales Techniques' },
  'un.ent2': { fr: 'Modèle économique et finances', en: 'Business model and finances' },
  'un.ent3': { fr: 'Logo, charte, supports de pub', en: 'Logo, brand guide, ad assets' },
  'un.ent4': { fr: 'Présentation orale devant jury', en: 'Oral presentation to a jury' },
  'un.coffH': { fr: 'Lancer un commerce en conditions réelles', en: 'Launching a real-world business' },
  'un.cof1': { fr: 'Positionnement et offre produits', en: 'Positioning and product offer' },
  'un.cof2': { fr: 'Aménagement, vitrines, ambiance', en: 'Layout, windows, atmosphere' },
  'un.cof3': { fr: 'Réseaux sociaux et affichage', en: 'Social media and signage' },
  'un.cof4': { fr: 'Caisse, stocks, encadrement', en: 'Checkout, stock, supervision' },
  'un.skill1': { fr: 'Gestion de projet', en: 'Project management' },
  'un.skill1p': { fr: 'Cadrage, planification, coordination d\'équipe, suivi des deadlines et reporting. Des compétences transposables dans n\'importe quel contexte professionnel.', en: 'Scoping, planning, team coordination, deadline tracking and reporting. Skills transferable to any professional context.' },
  'un.skill2p': { fr: 'Pitch, présentations orales, supports visuels, prise de parole devant un jury. Articuler une idée et la défendre face à un public exigeant.', en: 'Pitch, oral presentations, visual supports, public speaking to a jury. Articulating an idea and defending it before a demanding audience.' },
  'un.skill3': { fr: 'Esprit commercial', en: 'Business mindset' },
  'un.skill3p': { fr: 'Étude de marché, positionnement, proposition de valeur. Penser comme un entrepreneur. comprendre une cible et lui parler juste.', en: 'Market research, positioning, value proposition. Thinking like an entrepreneur — understanding a target and speaking to it right.' },
  'un.nowH': { fr: 'Et maintenant ?', en: 'What\'s next?' },
  'cv.portfolioH': { fr: 'Portfolio Pro', en: 'Pro Portfolio' },
  'sk.canvaH': { fr: 'Canva certifié', en: 'Canva certified' },

  // ===== Pages statiques (auto) =====
  'ab.role': { fr: 'Visual Merchandising · Création IA', en: 'Visual Merchandising · AI Creation' },
  'ab.philo': { fr: 'Ma philosophie', en: 'My philosophy' },
  'ab.v1h': { fr: 'Créativité', en: 'Creativity' },
  'ab.v1p': { fr: 'Chaque projet est une opportunité de raconter une histoire. Je cherche l\'angle, la lumière, l\'émotion.', en: 'Every project is an opportunity to tell a story. I look for the angle, the light, the emotion.' },
  'ab.v2h': { fr: 'Rigueur', en: 'Rigor' },
  'ab.v2p': { fr: 'Le luxe se construit dans le détail. Une charte graphique précise, une vitrine équilibrée, un visuel impeccable.', en: 'Luxury is built in the details. A precise brand guide, a balanced window, a flawless visual.' },
  'ab.v3h': { fr: 'Curiosité', en: 'Curiosity' },
  'ab.v3p': { fr: 'Veille permanente sur les outils IA, les tendances marketing et le retail premium pour rester en avant-garde.', en: 'Constant watch on AI tools, marketing trends and premium retail to stay ahead.' },
  'ix.disc': { fr: 'Création visuelle · Marketing', en: 'Visual creation · Marketing' },
  'ix.status': { fr: 'Alternance Master Marketing', en: 'Marketing Master apprenticeship' },
  'ix.featured': { fr: 'Projets en vedette', en: 'Featured projects' },
  'ix.tag1': { fr: 'Editorial · Luxe', en: 'Editorial · Luxury' },
  'ix.tag2': { fr: 'Crossover · Mode', en: 'Crossover · Fashion' },
  'sk.tools': { fr: 'Logiciels & Outils', en: 'Software & Tools' },
  'sk.s1': { fr: 'Communication visuelle', en: 'Visual communication' },
  'sk.s2': { fr: 'Montage vidéo & photo', en: 'Video & photo editing' },
  'sk.s3': { fr: 'Direction artistique IA', en: 'AI art direction' },
  'sk.s5': { fr: 'Techniques de vente', en: 'Sales techniques' },
  'sk.s6': { fr: 'Conseil & gestion clientèle', en: 'Client advice & management' },
  'sk.s7': { fr: 'Négociation', en: 'Negotiation' },
  'sk.s8': { fr: 'Gestion de projet audiovisuel', en: 'Audiovisual project management' },
  'sk.t2': { fr: 'Canva (certifié)', en: 'Canva (certified)' },
  'sk.t6': { fr: 'Excel / Word', en: 'Excel / Word' },
  'sk.sf3': { fr: 'Esprit d\'équipe', en: 'Teamwork' },
  'sk.sf4': { fr: 'Adaptabilité', en: 'Adaptability' },
  'sk.sf1': { fr: 'Créativité', en: 'Creativity' },
  'sk.sf5': { fr: 'Curiosité', en: 'Curiosity' },
  'sk.sf6': { fr: 'Rigueur', en: 'Rigor' },
  'sk.sf7': { fr: 'Sens du détail', en: 'Attention to detail' },
  'sk.sf8': { fr: 'Autonomie', en: 'Autonomy' },
  'tag.artdir': { fr: 'Direction Artistique', en: 'Art Direction' },
  'tag.aicreation': { fr: 'Création IA', en: 'AI Creation' },
  'tag.digcom': { fr: 'Communication Digitale', en: 'Digital Communication' },
  'cv.vidEye': { fr: 'Format vidéo', en: 'Video format' },
  'cv.vidDesc': { fr: 'Une présentation courte au format Reels — qui je suis, mon parcours et ce que je peux apporter à votre équipe en moins de 60 secondes.', en: 'A short Reels-style presentation — who I am, my background and what I can bring to your team in under 60 seconds.' },
  'cv.subtitle': { fr: 'Assistant Visual Merchandising & Graphiste · Étudiant Bachelor TC', en: 'Visual Merchandising Assistant & Graphic Designer · Bachelor TC Student' },
  'cv.profile': { fr: 'Étudiant dynamique et motivé en Bachelor Techniques de Commercialisation, je recherche une alternance en Master Marketing. Créatif et passionné par le commerce et la communication visuelle, je souhaite développer mes compétences tout en contribuant efficacement aux projets de votre entreprise.', en: 'Dynamic and motivated student in a Bachelor of Sales Techniques, looking for a Marketing Master apprenticeship. Creative and passionate about commerce and visual communication, I want to grow my skills while contributing effectively to your company\'s projects.' },
  'cv.edu1': { fr: 'Parcours Marketing et Management du Point de Vente', en: 'Marketing and Point-of-Sale Management track' },
  'cv.edu2h': { fr: 'Baccalauréat STMG Mercatique — Mention Bien', en: 'STMG Marketing Baccalaureate — Honours' },
  'cv.edu2p': { fr: 'Bénévolat pour l\'association Akamasoa du Père Pedro (Madagascar)', en: 'Volunteering for Father Pedro\'s Akamasoa charity (Madagascar)' },
  'cv.exp1h': { fr: 'Créateur Visuel IA & Graphiste — AP.StudioIA', en: 'AI Visual Creator & Graphic Designer — AP.StudioIA' },
  'cv.exp1place': { fr: 'Projet personnel', en: 'Personal project' },
  'cv.exp1p': { fr: 'Concepts visuels luxe & automobile · Direction artistique · Storytelling', en: 'Luxury & automotive visual concepts · Art direction · Storytelling' },
  'cv.exp2h': { fr: 'Assistant Visual Merchandising — ZAPA Paris', en: 'Visual Merchandising Assistant — ZAPA Paris' },
  'cv.exp2place': { fr: 'Paris · Stage 3 mois', en: 'Paris · 3-month internship' },
  'cv.exp2p': { fr: 'Guidelines vitrines & merchandising · Supports vidéo IA · Showroom', en: 'Window & merchandising guidelines · AI video assets · Showroom' },
  'cv.exp3h': { fr: 'Chargé de communication & vendeur — LE KORNER', en: 'Communication Officer & Salesperson — LE KORNER' },
  'cv.exp3place': { fr: 'Saint-Paul · Lacoste, EdenPark, Pierre Cardin · Stage 8 sem. + 2 mois', en: 'Saint-Paul · Lacoste, EdenPark, Pierre Cardin · 8-week + 2-month internship' },
  'cv.exp3p': { fr: 'Communication digitale · Charte graphique · Vitrines · Vente prêt-à-porter haut de gamme', en: 'Digital communication · Brand guidelines · Windows · High-end ready-to-wear sales' },
  'cv.langs': { fr: 'Français (natif) · Anglais (TOEIC certifié) · Espagnol (bonnes notions)', en: 'French (native) · English (TOEIC certified) · Spanish (good basics)' },
  'tag.sport': { fr: 'Sport', en: 'Sport' },
  'tag.content': { fr: 'Création de contenu', en: 'Content creation' },
  'tag.videos': { fr: 'Vidéos & visuels', en: 'Videos & visuals' },
  'cv.atsH': { fr: 'CV — Format ATS', en: 'Resume — ATS format' },
  'un.featEye': { fr: 'Projet vedette', en: 'Featured project' },
  'un.featH': { fr: 'Journée de cohésion sportive', en: 'Sports cohesion day' },
  'un.featP': { fr: 'Organisation complète d\'un événement sportif inter-promotions. gestion de projet, coordination, communication & logistique.', en: 'Complete organization of an inter-class sports event. Project management, coordination, communication & logistics.' },
  'un.synerH': { fr: 'Contribuer au financement de la première structure étudiante au service des entreprises et collectivités de La Réunion', en: 'Helping fund the first student structure serving Réunion\'s businesses and communities' },
  'un.syn1': { fr: 'Projet sélectionné et subventionné', en: 'Selected and funded project' },
  'un.syn2': { fr: 'Réalisation du film de promotion', en: 'Promotional film production' },
  'un.syn3': { fr: 'Structure inédite à La Réunion', en: 'First-of-its-kind structure in Réunion' },
  'un.syn4': { fr: 'Problématiques stratégiques réelles', en: 'Real strategic challenges' },
  'un.cohH': { fr: 'Organiser un événement de A à Z', en: 'Organizing an event from A to Z' },
  'un.cohP': { fr: 'Pilotage complet d\'un événement sportif inter-promotions au sein de l\'IUT. De la définition du concept à l\'animation sur le terrain. un exercice grandeur nature de gestion de projet.', en: 'Full management of an inter-class sports event at the IUT — from concept definition to on-field hosting. A real-scale project management exercise.' },
  'un.coh1': { fr: 'Gestion d\'une équipe pluridisciplinaire', en: 'Managing a multidisciplinary team' },
  'un.coh2': { fr: 'Affiches, réseaux sociaux, événementiel', en: 'Posters, social media, events' },
  'un.coh3': { fr: 'Matériel, planning, partenaires', en: 'Equipment, scheduling, partners' },
  'un.coh4': { fr: 'Encadrement et gestion sur le terrain', en: 'On-field supervision and management' },
  'un.imgH': { fr: 'L\'événement en images', en: 'The event in pictures' },
  'un.entH': { fr: 'Imaginer et pitcher un projet entrepreneurial', en: 'Imagining and pitching an entrepreneurial project' },
  'un.ent1': { fr: 'Analyse concurrentielle et cible', en: 'Competitive and target analysis' },

  // ---------- NAV (commun) ----------
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.about': { fr: 'À propos', en: 'About' },
  'nav.projects': { fr: 'Projets', en: 'Projects' },
  'nav.university': { fr: 'Université', en: 'University' },
  'nav.experience': { fr: 'Expérience', en: 'Experience' },
  'nav.skills': { fr: 'Compétences', en: 'Skills' },
  'nav.cv': { fr: 'CV', en: 'Resume' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },

  // ---------- FOOTER ----------
  'footer.rights': { fr: '© 2026 Aurélien POTOLA — Tous droits réservés.', en: '© 2026 Aurélien — All rights reserved.' },
  'footer.short': { fr: '© 2026 Aurélien', en: '© 2026 Aurélien' },
  'footer.thanks': { fr: '© 2026 Aurélien — Merci de votre visite.', en: '© 2026 Aurélien — Thanks for visiting.' },

  // ---------- COMMON CTAs ----------
  'cta.contact': { fr: 'Me contacter', en: 'Contact me' },
  'cta.contactArrow': { fr: 'Me contacter →', en: 'Contact me →' },
  'cta.discussProject': { fr: 'Discuter d\'un projet →', en: 'Let\'s discuss →' },
  'cta.allProjects': { fr: '← Tous les projets', en: '← All projects' },
  'cta.viewProjects': { fr: 'Voir mes projets →', en: 'View my projects →' },
  'cta.downloadCV': { fr: 'Télécharger mon CV →', en: 'Download my resume →' },

  // ---------- HOME ----------
  'home.eyebrow': { fr: 'Portfolio · 2026', en: 'Portfolio · 2026' },
  'home.heroTitle': {
    fr: 'Aurélien <em class="em">POTOLA</em><br>créateur visuel<br><em class="em contrast">& automobile</em>.',
    en: 'Aurélien <em class="em">POTOLA</em><br>visual creator<br><em class="em contrast">& automotive</em>.'
  },
  'home.heroLead': {
    fr: 'Étudiant en Bachelor Techniques de Commercialisation, créatif passionné par le commerce et la communication visuelle. Je conçois des concepts visuels premium dans l\'univers du luxe et de l\'automobile.',
    en: 'Bachelor student in Sales Techniques, creative passionate about commerce and visual communication. I craft premium visual concepts in luxury and automotive worlds.'
  },
  'home.previewEyebrow': { fr: 'Aperçu', en: 'Overview' },
  'home.previewTitle': { fr: 'Trois facettes,<br>un parcours.', en: 'Three sides,<br>one path.' },
  'home.card1Title': { fr: 'Projets visuels', en: 'Visual projects' },
  'home.card1Desc': { fr: 'Concepts visuels luxe & automobile, direction artistique et storytelling.', en: 'Luxury & automotive concepts, art direction and storytelling.' },
  'home.card2Title': { fr: 'Engagements universitaires', en: 'University engagement' },
  'home.card2Desc': { fr: 'Bachelor TC, Projet Tutoré, création d\'entreprise et coffee shop éphémère.', en: 'Bachelor TC, tutored project, business creation and pop-up coffee shop.' },
  'home.card3Title': { fr: 'Expérience pro', en: 'Work experience' },
  'home.card3Desc': { fr: 'ZAPA Paris, LE KORNER (Lacoste, EdenPark, Pierre Cardin) et AP.StudioIA.', en: 'ZAPA Paris, LE KORNER (Lacoste, EdenPark, Pierre Cardin) and AP.StudioIA.' },

  // ---------- ABOUT ----------
  'about.eyebrow': { fr: 'À propos', en: 'About' },
  'about.title': { fr: 'L\'humain derrière <span class="gradient-text">le portfolio</span>.', en: 'The human behind <span class="gradient-text">the portfolio</span>.' },
  'about.hello': { fr: 'Bonjour, je suis Aurélien 👋', en: 'Hi, I\'m Aurélien 👋' },
  'about.p1': { fr: 'Étudiant dynamique et motivé en Bachelor Techniques de Commercialisation, je recherche une alternance en Master Marketing.', en: 'Dynamic and motivated Bachelor student in Sales Techniques, currently looking for a Master Marketing apprenticeship.' },
  'about.p2': { fr: 'Créatif et passionné par le commerce et la communication visuelle, je souhaite développer mes compétences tout en contribuant efficacement aux projets de votre entreprise.', en: 'Creative and passionate about commerce and visual communication, I want to develop my skills while contributing effectively to your company\'s projects.' },
  'about.p3': { fr: 'Au-delà des études, je crée des contenus visuels premium dans l\'univers du luxe et de l\'automobile via mon studio AP.StudioIA.', en: 'Beyond studies, I create premium visual content in luxury and automotive through my own studio AP.StudioIA.' },
  'about.location': { fr: 'Localisation', en: 'Location' },
  'about.locationVal': { fr: 'Île de la Réunion 🇷🇪', en: 'Reunion Island 🇷🇪' },
  'about.availability': { fr: 'Disponibilité', en: 'Availability' },
  'about.availabilityVal': { fr: 'Alternance Master Marketing', en: 'Master Marketing apprenticeship' },
  'about.languages': { fr: 'Langues', en: 'Languages' },
  'about.languagesVal': { fr: 'Français, Anglais, Espagnol', en: 'French, English, Spanish' },
  'about.interests': { fr: 'Centres d\'intérêt', en: 'Interests' },
  'about.interestsVal': { fr: 'Automobile, Sport, Création', en: 'Automotive, Sport, Creation' },
  'about.cta': { fr: 'Discutons →', en: 'Let\'s talk →' },

  // ---------- PROJECTS ----------
  'projects.eyebrow': { fr: 'AP.StudioIA · Direction artistique', en: 'AP.StudioIA · Art direction' },
  'projects.title': { fr: 'Univers <span class="gradient-text">luxe & automobile</span>.', en: '<span class="gradient-text">Luxury & automotive</span> universe.' },
  'projects.lead': { fr: 'Une sélection de concepts visuels créés via AP.StudioIA — direction artistique IA, storytelling et identité visuelle pour les univers premium.', en: 'A selection of visual concepts crafted through AP.StudioIA — AI art direction, storytelling and visual identity for premium worlds.' },
  'projects.cta': { fr: 'Une collaboration en tête ? Parlons-en →', en: 'A collaboration in mind? Let\'s talk →' },

  // ---------- UNIVERSITY ----------
  'uni.eyebrow': { fr: 'Bachelor Techniques de Commercialisation', en: 'Bachelor in Sales Techniques' },
  'uni.title': { fr: 'À l\'IUT, <span class="gradient-text">je m\'investis</span>.', en: 'At the IUT, <span class="gradient-text">I commit</span>.' },
  'uni.lead': { fr: 'Au-delà des cours, je crois aux apprentissages collectifs. Voici les projets pédagogiques et tutorés qui ont marqué mon parcours à l\'Université de la Réunion.', en: 'Beyond classes, I believe in collective learning. Here are the academic and tutored projects that shaped my path at Reunion University.' },
  'uni.endingTitle': { fr: 'L\'engagement, ça forme.', en: 'Engagement teaches you.' },
  'uni.endingP': { fr: 'Ces projets m\'ont appris autant que mes cours : gestion, communication, esprit d\'équipe et créativité — des compétences essentielles pour le marketing.', en: 'These projects taught me as much as my classes: management, communication, teamwork, and creativity — essential skills for marketing.' },
  'uni.endingCta': { fr: 'Voir mon expérience pro →', en: 'See my work experience →' },

  // ---------- EXPERIENCE ----------
  'exp.eyebrow': { fr: 'Parcours pro', en: 'Career path' },
  'exp.title': { fr: 'Mon expérience <span class="gradient-text">en entreprise</span>.', en: 'My <span class="gradient-text">work experience</span>.' },
  'exp.lead': { fr: 'Étudiant en Bachelor TC en recherche d\'alternance Master Marketing. Créatif et passionné par le commerce et la communication visuelle, voici les expériences qui ont façonné mon parcours.', en: 'Bachelor TC student looking for a Master Marketing apprenticeship. Creative and passionate about commerce and visual communication, here are the experiences that shaped my path.' },

  // ---------- SKILLS ----------
  'skills.eyebrow': { fr: 'Stack & expertise', en: 'Stack & expertise' },
  'skills.title': { fr: 'Mes <span class="gradient-text">compétences</span>.', en: 'My <span class="gradient-text">skills</span>.' },
  'skills.lead': { fr: 'Un mélange de design, de code et de soft skills. La maîtrise vient avec les projets — voici où j\'en suis.', en: 'A blend of design, code, and soft skills. Mastery comes with practice — here\'s where I stand.' },
  'skills.dev': { fr: '💻 Développement', en: '💻 Development' },
  'skills.design': { fr: '🎨 Design & Outils', en: '🎨 Design & Tools' },
  'skills.soft': { fr: '🚀 Soft Skills', en: '🚀 Soft Skills' },
  'skills.lang': { fr: '🌐 Langues', en: '🌐 Languages' },
  'skills.frTitle': { fr: '🇫🇷 Français', en: '🇫🇷 French' },
  'skills.frDesc': { fr: 'Langue maternelle', en: 'Native language' },
  'skills.enTitle': { fr: '🇬🇧 Anglais', en: '🇬🇧 English' },
  'skills.enDesc': { fr: 'TOEIC certifié', en: 'TOEIC certified' },
  'skills.esTitle': { fr: '🇪🇸 Espagnol', en: '🇪🇸 Spanish' },
  'skills.esDesc': { fr: 'Bonnes notions', en: 'Good notions' },

  // ---------- CV ----------
  'cv.eyebrow': { fr: 'Curriculum Vitae', en: 'Resume' },
  'cv.title': { fr: 'Mon <span class="gradient-text">CV</span> en un coup d\'œil.', en: 'My <span class="gradient-text">resume</span> at a glance.' },
  'cv.lead': { fr: 'Téléchargeable en PDF, ou consultable directement ci-dessous.', en: 'Downloadable as PDF, or readable below.' },
  'cv.download': { fr: '📄 Télécharger en PDF', en: '📄 Download PDF' },
  'cv.formation': { fr: '🎓 Formation', en: '🎓 Education' },
  'cv.work': { fr: '💼 Expérience professionnelle', en: '💼 Work experience' },
  'cv.engagements': { fr: '🚀 Engagements', en: '🚀 Engagement' },
  'cv.skills': { fr: '⚙️ Compétences clés', en: '⚙️ Key skills' },
  'cv.languages': { fr: '🌐 Langues', en: '🌐 Languages' },
  'cv.interests': { fr: '🎯 Centres d\'intérêt', en: '🎯 Interests' },

  // ---------- CONTACT ----------
  'contact.eyebrow': { fr: 'On discute ?', en: 'Let\'s talk?' },
  'contact.title': { fr: 'Prenons <span class="gradient-text">contact</span>.', en: 'Let\'s get <span class="gradient-text">in touch</span>.' },
  'contact.lead': { fr: 'Une opportunité, une collaboration, ou simplement envie d\'échanger ? Je réponds en moins de 48h.', en: 'An opportunity, a collaboration, or just want to chat? I reply within 48h.' },
  'contact.fName': { fr: 'Votre nom', en: 'Your name' },
  'contact.fEmail': { fr: 'Votre email', en: 'Your email' },
  'contact.fSubject': { fr: 'Sujet', en: 'Subject' },
  'contact.fMessage': { fr: 'Votre message', en: 'Your message' },
  'contact.send': { fr: 'Envoyer le message →', en: 'Send the message →' },
  'contact.email': { fr: 'Email', en: 'Email' },
  'contact.phone': { fr: 'Téléphone', en: 'Phone' },
  'contact.locTitle': { fr: 'Localisation', en: 'Location' },
  'contact.locVal': { fr: 'Île de la Réunion 🇷🇪 — Mobile France', en: 'Reunion Island 🇷🇪 — Mobile to mainland France' },
  'contact.networks': { fr: 'Réseaux', en: 'Networks' },

  // ---------- PROJECT DETAIL ----------
  'pd.back': { fr: '← Retour aux projets', en: '← Back to projects' },
  'pd.eyebrow': { fr: 'UI / UX Design', en: 'UI / UX Design' },
  'pd.title': { fr: 'Refonte plateforme <span class="gradient-text">SaaS</span>', en: '<span class="gradient-text">SaaS</span> platform redesign' },
  'pd.lead': { fr: 'Audit complet, refonte du design system et redesign des écrans clés pour une plateforme B2B utilisée par 10 000+ utilisateurs quotidiens.', en: 'Full audit, design system rework, and key screens redesign for a B2B platform used by 10,000+ daily users.' },
  'pd.role': { fr: 'Rôle', en: 'Role' },
  'pd.roleVal': { fr: 'UX/UI Designer', en: 'UX/UI Designer' },
  'pd.duration': { fr: 'Durée', en: 'Duration' },
  'pd.durationVal': { fr: '3 mois', en: '3 months' },
  'pd.tools': { fr: 'Outils', en: 'Tools' },
  'pd.context': { fr: 'Le contexte', en: 'Context' },
  'pd.contextDesc': { fr: 'Le client, une scale-up B2B, faisait face à un taux d\'abandon élevé sur les écrans de paramétrage. L\'objectif : réduire la friction et moderniser l\'identité visuelle.', en: 'The client, a B2B scale-up, faced high drop-off on setup screens. The goal: reduce friction and modernize the brand.' },
  'pd.process': { fr: 'Ma démarche', en: 'My approach' },
  'pd.results': { fr: 'Résultats', en: 'Results' },
  'pd.r1': { fr: 'Abandon onboarding', en: 'Onboarding drop-off' },
  'pd.r2': { fr: 'Conversion essai', en: 'Trial conversion' },
  'pd.r3': { fr: 'Satisfaction users', en: 'User satisfaction' },
  // ===== Page Projets (auto) =====
  'pj.conceptH': { fr: 'Concept <em style="font-style:italic; color:var(--accent);">Pub</em>', en: 'Ad <em style="font-style:italic; color:var(--accent);">Concept</em>' },
  'pj.conceptDesc': { fr: 'Films publicitaires expérimentaux — direction artistique et motion design pour des univers de marque.', en: 'Experimental advertising films — art direction and motion design for brand worlds.' },
  'pj.socialH': { fr: 'Pour les réseaux sociaux', en: 'For social media' },
  'pj.socialDesc': { fr: 'Optimisés pour Instagram Reels et TikTok, ces formats verticaux mettent en valeur les produits avec une narration courte et captivante.', en: 'Optimized for Instagram Reels and TikTok, these vertical formats showcase products with short, captivating storytelling.' },
  'pj.tapSound': { fr: 'Cliquez sur la vidéo pour activer le son', en: 'Tap the video to enable sound' },
  'pj.apH': { fr: 'AP.STUDIO — <em style="font-style:italic;">Résultats réels</em>', en: 'AP.STUDIO — <em style="font-style:italic;">Real results</em>' },
  'pj.apLead': { fr: 'Studio de création visuelle 100% IA spécialisé dans la photographie automobile cinématique premium. Actif depuis le 27 février 2026.', en: 'Fully AI visual creation studio specialized in premium cinematic automotive photography. Active since February 27, 2026.' },
  'pj.activeSince': { fr: 'Actif depuis le 27 fév. 2026', en: 'Active since Feb 27, 2026' },
  'pj.sTotalViews': { fr: 'Vues totales', en: 'Total views' },
  'pj.sProfileViews': { fr: 'Vues profil', en: 'Profile views' },
  'pj.sFyp': { fr: 'Trafic "Pour Toi"', en: 'For You traffic' },
  'pj.perfH': { fr: 'Performances <em style="font-style:italic; color:var(--accent);">par publication</em>', en: 'Performance <em style="font-style:italic; color:var(--accent);">by post</em>' },
  'pj.perfDesc': { fr: 'Données TikTok réelles — 365 jours. Classées par ordre chronologique de publication.', en: 'Real TikTok data — 365 days. Sorted chronologically by publication.' },
  'pj.kViews': { fr: 'Vues', en: 'Views' },
  'pj.kLikes': { fr: 'J\'aime', en: 'Likes' },
  'pj.kShares': { fr: 'Partages', en: 'Shares' },
  'pj.kSaves': { fr: 'Sauvegardes', en: 'Saves' },
  'pj.kFollowers': { fr: 'Nouveaux followers', en: 'New followers' },
  'pj.kAvg': { fr: 'Visionnage moy.', en: 'Avg. watch' },
  'pj.kComments': { fr: 'Commentaires', en: 'Comments' },
  'pj.stSeries': { fr: 'Séries visuelles', en: 'Visual series' },
  'pj.stVisuals': { fr: 'Visuels produits', en: 'Visuals produced' },
  'pj.stBrands': { fr: 'Marques explorées', en: 'Brands explored' },
  'pj.stYear': { fr: 'Année de production', en: 'Production year' },
  'pj.relPerf': { fr: 'PERFORMANCE RELATIVE', en: 'RELATIVE PERFORMANCE' },
  'pj.badgeVid': { fr: '▶ Vidéo · 14.54s', en: '▶ Video · 14.54s' },
  'pj.date1': { fr: 'Publié le 5 juin 2026', en: 'Published on June 5, 2026' },
  'pj.date2': { fr: 'Publié le 29 avril 2026', en: 'Published on April 29, 2026' },
  'pj.date3': { fr: 'Publié le 2 mai 2026', en: 'Published on May 2, 2026' },
  'pj.date4': { fr: 'Publié le 5 mai 2026', en: 'Published on May 5, 2026' },
  'pj.date5': { fr: 'Publié le 6 mai 2026', en: 'Published on May 6, 2026' },
  'pj.bl1': { fr: '15.4% ont regardé toute la vidéo · 389 commentaires', en: '15.4% watched the full video · 389 comments' },
  'pj.bl2': { fr: '930h 34m de lecture totale · 223 commentaires', en: '930h 34m total watch time · 223 comments' },
  'pj.bl3': { fr: '763h 24m de lecture totale · 253 commentaires', en: '763h 24m total watch time · 253 comments' },
  'pj.bl4': { fr: '353h 50m de lecture totale · 124 commentaires', en: '353h 50m total watch time · 124 comments' },
  'pj.bl5': { fr: '319h 33m de lecture totale · 72 commentaires', en: '319h 33m total watch time · 72 comments' },
  'pj.rv1': { fr: '555 046 vues', en: '555,046 views' },
  'pj.rv2': { fr: '403 079 vues', en: '403,079 views' },
  'pj.rv3': { fr: '369 131 vues', en: '369,131 views' },
  'pj.rv4': { fr: '181 741 vues', en: '181,741 views' },
  'pj.rv5': { fr: '163 989 vues', en: '163,989 views' },
  'pj.apSource': { fr: 'Source · Analytics TikTok · 365 jours', en: 'Source · TikTok Analytics · 365 days' },
  'pj.apOrganic': { fr: '1.8M de vues organiques — 88.1% via "Pour toi"', en: '1.8M organic views — 88.1% via "For You"' },
  'pj.apBtn': { fr: 'Voir le profil TikTok →', en: 'View TikTok profile →' },
  'pj.tag9': { fr: '9 PROJETS', en: '9 PROJECTS' },
  'pj.grilleH': { fr: 'L\'ensemble des <em style="font-style:italic; color:var(--accent);">créations</em>.', en: 'All <em style="font-style:italic; color:var(--accent);">creations</em>.' },
  'pj.focusDesc': { fr: 'Trois concepts explorant l\'identité sportive et l\'héritage du losange — de la citadine au break premium.', en: 'Three concepts exploring the sporty identity and heritage of the brand — from city car to premium estate.' },
  'pj.parfH': { fr: 'Concept Pub · <em style="font-style:italic; color:var(--accent);">Parfumerie</em>', en: 'Ad Concept · <em style="font-style:italic; color:var(--accent);">Perfumery</em>' },
  'pj.parfDesc': { fr: 'Campagnes visuelles publicitaires pour univers parfumerie haut de gamme — lumière, matière et émotion.', en: 'Advertising visual campaigns for high-end perfumery — light, material and emotion.' },
  'pj.parfEye': { fr: 'Exemple de produit · Parfumerie &amp; Lifestyle', en: 'Product example · Perfumery &amp; Lifestyle' },
  'pj.textH': { fr: 'Concept Pub · <em style="font-style:italic; color:var(--accent);">Textile &amp; Mode</em>', en: 'Ad Concept · <em style="font-style:italic; color:var(--accent);">Textile &amp; Fashion</em>' },
  'pj.textEye': { fr: 'Exemple de produit · Textile &amp; Mode', en: 'Product example · Textile &amp; Fashion' },
  'pj.procH': { fr: 'Comment je <em style="font-style:italic; color:var(--accent);">crée</em>.', en: 'How I <em style="font-style:italic; color:var(--accent);">create</em>.' },
  'pj.proc1H': { fr: 'Recherche & moodboard', en: 'Research & moodboard' },
  'pj.proc1D': { fr: 'Analyse de l\'ADN de la marque, sources d\'inspiration et cadrage narratif. Chaque projet démarre par une vision claire.', en: 'Brand DNA analysis, inspiration sources and narrative framing. Every project starts with a clear vision.' },
  'pj.proc2H': { fr: 'Génération itérative', en: 'Iterative generation' },
  'pj.proc2D': { fr: 'Travail via Higgfields, Kling AI et ChatGPT. Itérations multiples pour explorer angles, ambiances et finitions.', en: 'Work via Higgsfield, Kling AI and ChatGPT. Multiple iterations to explore angles, moods and finishes.' },
  'pj.proc3H': { fr: 'Post-production', en: 'Post-production' },
  'pj.proc3D': { fr: 'Retouche Photoshop, harmonisation chromatique et mise en scène éditoriale pour produire une série cohérente.', en: 'Photoshop retouching, color harmonization and editorial staging to deliver a coherent series.' },
  'pj.ctaEye': { fr: 'Une collaboration ?', en: 'A collaboration?' },
  'pj.ctaH': { fr: 'Travaillons <em style="font-style:italic; color:var(--accent);">ensemble</em>.', en: 'Let\'s work <em style="font-style:italic; color:var(--accent);">together</em>.' },
  'pj.ctaDesc': { fr: 'Marque automobile, maison de luxe ou agence créative — j\'aime relever les défis visuels les plus ambitieux.', en: 'Automotive brand, luxury house or creative agency — I love taking on the most ambitious visual challenges.' },
  'pj.ctaPdf': { fr: '📁 Portfolio Pro PDF', en: '📁 Pro Portfolio PDF' },
  'pj.focusH': { fr: 'Univers <em style="font-style:italic; color:var(--accent);">Renault Alpine</em>', en: '<em style="font-style:italic; color:var(--accent);">Renault Alpine</em> universe' },
  'pj.tagProdEx': { fr: 'EXEMPLE PRODUIT', en: 'PRODUCT EXAMPLE' },
  'pj.quote': { fr: 'L\'IA est un pinceau — la direction artistique reste humaine.', en: 'AI is a brush — art direction stays human.' },
  'pj.cTag1': { fr: 'Tiffany · Editorial', en: 'Tiffany · Editorial' },
  'pj.cTag2': { fr: 'Crossover · Mode', en: 'Crossover · Fashion' },
  'pj.cTag3': { fr: 'Renault · Sport', en: 'Renault · Sport' },
  'pj.cTag4': { fr: 'Alpina · Mode', en: 'Alpina · Fashion' },
  'pj.cTag5': { fr: 'Peugeot · Sport', en: 'Peugeot · Sport' },
  'pj.cTag6': { fr: 'Renault · Hot hatch', en: 'Renault · Hot hatch' },
  'pj.cTag7': { fr: 'Crossover · Food', en: 'Crossover · Food' },
  'pj.cTag8': { fr: 'Renault · Berline', en: 'Renault · Sedan' },
  'pj.cTag9': { fr: '▶ Vidéo', en: '▶ Video' },
  'pj.cD1': { fr: 'Campagne joaillerie — diamants, lumière et silhouette haute couture. Vidéo + 5 visuels.', en: 'Jewelry campaign — diamonds, light and haute couture silhouette. Video + 5 visuals.' },
  'pj.cD2': { fr: 'Collaboration fictive hypercar britannique & maison de mode italienne — 4 visuels.', en: 'Fictional collaboration: British hypercar & Italian fashion house — 4 visuals.' },
  'pj.cD3': { fr: 'SUV coupé à l\'esprit Alpine — 4 visuels direction artistique IA.', en: 'Alpine-spirited coupé SUV — 4 AI art direction visuals.' },
  'pj.cD4': { fr: 'Collaboration fictive Alpina × ZAPA — 5 visuels alliant automobile premium et mode parisienne.', en: 'Fictional Alpina × ZAPA collaboration — 5 visuals blending premium automotive and Parisian fashion.' },
  'pj.cD5': { fr: 'Berline sport haut de gamme — 4 visuels en mise en scène dynamique et nocturne.', en: 'High-end sport sedan — 4 visuals in dynamic nighttime staging.' },
  'pj.cD6': { fr: 'Hot hatch nouvelle génération — 3 visuels revisitant l\'ADN sportif de la Clio.', en: 'New-generation hot hatch — 3 visuals revisiting the Clio\'s sporty DNA.' },
  'pj.cD7': { fr: 'Collaboration fictive fast-food & muscle car américaine — 4 visuels publicitaires.', en: 'Fictional fast-food & American muscle car collaboration — 4 advertising visuals.' },
  'pj.cD8': { fr: 'Berline premium aux lignes sportives — 3 visuels à la signature Alpine élégante.', en: 'Premium sedan with sporty lines — 3 visuals with elegant Alpine signature.' },
  'pj.cD9': { fr: 'Films publicitaires verticaux — Premium, optimisés Reels et TikTok.', en: 'Vertical advertising films — Premium, optimized for Reels and TikTok.' },
};

function getLang() {
  return localStorage.getItem('lang') || 'fr';
}

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const entry = I18N[key];
    if (!entry || !entry[lang]) return;
    if (entry[lang].includes('<')) el.innerHTML = entry[lang];
    else el.textContent = entry[lang];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const entry = I18N[key];
    if (entry && entry[lang]) el.placeholder = entry[lang];
  });
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-toggle').forEach(b => {
    b.querySelector('.lang-label').textContent = lang === 'fr' ? 'EN' : 'FR';
  });
}

document.querySelectorAll('.lang-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const next = getLang() === 'fr' ? 'en' : 'fr';
    applyLang(next);
  });
});

// Apply on load
applyLang(getLang());

// --- Parallax hero (0.5px / px de scroll) ---
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        heroContent.style.transform = `translateY(${y * 0.5}px)`;
        heroContent.style.opacity = Math.max(0, 1 - y / 600);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// --- 3D tilt sur les cards ---
document.querySelectorAll('.card, .project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const rx = (-dy * 4).toFixed(2);
    const ry = (dx * 4).toFixed(2);
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// --- Stagger skill bars ---
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      const bars = e.target.querySelectorAll('.skill-bar');
      bars.forEach((bar, i) => {
        setTimeout(() => {
          bar.classList.add('in');
          const fill = bar.querySelector('.skill-bar-fill');
          if (fill) fill.style.width = fill.dataset.value + '%';
        }, i * 150);
      });
      skillObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.grid-2, .grid-3, section').forEach(s => {
  if (s.querySelector('.skill-bar')) skillObserver.observe(s);
});

// --- Form (sécurisé : honeypot + rate-limit + validation) ---
const form = document.querySelector('#contact-form');
if (form) {
  // Compteur caractères du message
  const msgEl = form.querySelector('#message');
  const charCountEl = form.querySelector('#char-count');
  if (msgEl && charCountEl) {
    const updateCount = () => { charCountEl.textContent = msgEl.value.length; };
    msgEl.addEventListener('input', updateCount);
    updateCount();
  }

  // Sanitization simple côté client (HTML entities)
  const escapeHTML = (str) => String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  // Détection liens/spam dans le message
  const looksLikeSpam = (text) => {
    const lower = text.toLowerCase();
    const urlCount = (text.match(/https?:\/\//gi) || []).length;
    if (urlCount > 2) return true;
    const spamWords = ['viagra', 'casino', 'crypto bonus', 'free money', 'click here now', 'seo backlink', 'buy followers'];
    return spamWords.some(w => lower.includes(w));
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const lang = getLang();

    // 1. Honeypot — si rempli, c'est un bot, on bloque silencieusement
    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value.trim() !== '') {
      console.warn('[security] Honeypot triggered — silent block');
      return;
    }

    // 2. Rate-limit — max 1 envoi / 30s par session
    const lastSent = parseInt(sessionStorage.getItem('lastFormSubmit') || '0', 10);
    if (Date.now() - lastSent < 30000) {
      alert(lang === 'fr'
        ? 'Veuillez patienter quelques secondes avant un nouvel envoi.'
        : 'Please wait a few seconds before sending again.');
      return;
    }

    // 3. Validation native HTML5
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // 4. Récup et sanitization
    const data = {
      name: escapeHTML(form.name.value.trim()),
      email: form.email.value.trim(),
      subject: escapeHTML(form.subject.value.trim()),
      message: escapeHTML(form.message.value.trim()),
    };

    // 5. Validations supplémentaires
    if (data.name.length < 2 || data.message.length < 10) {
      alert(lang === 'fr' ? 'Merci de compléter correctement le formulaire.' : 'Please fill in the form properly.');
      return;
    }
    if (looksLikeSpam(data.message + ' ' + data.subject)) {
      alert(lang === 'fr' ? 'Votre message semble contenir du spam.' : 'Your message appears to contain spam.');
      return;
    }

    // 6. OK — on enregistre et on envoie via Formspree
    sessionStorage.setItem('lastFormSubmit', String(Date.now()));

    const submitBtn = form.querySelector('[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = lang === 'fr' ? 'Envoi en cours…' : 'Sending…';

    fetch('https://formspree.io/f/xykvqbrn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        _replyto: data.email,
        subject: data.subject,
        message: data.message,
      })
    })
    .then(res => res.json())
    .then(result => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
      if (result.ok) {
        // Succès — afficher le message de confirmation
        form.innerHTML = `
          <div style="text-align:center; padding: var(--s-6) var(--s-4);">
            <p style="font-size:2.5rem; margin-bottom: var(--s-3);">✅</p>
            <h3 style="font-family:var(--f-display); font-style:italic; margin-bottom: var(--s-2);">
              ${lang === 'fr' ? 'Message envoyé !' : 'Message sent!'}
            </h3>
            <p style="color:var(--ink-soft); font-size:0.95rem;">
              ${lang === 'fr'
                ? 'Merci pour votre message. Je vous réponds dans les 48h.'
                : 'Thank you for your message. I\'ll reply within 48h.'}
            </p>
          </div>`;
      } else {
        // Erreur Formspree
        alert(lang === 'fr'
          ? 'Une erreur est survenue. Merci de réessayer ou d\'envoyer un email directement.'
          : 'An error occurred. Please try again or send an email directly.');
      }
    })
    .catch(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
      alert(lang === 'fr'
        ? 'Impossible d\'envoyer le message. Vérifiez votre connexion ou contactez-moi par email.'
        : 'Could not send message. Check your connection or contact me by email.');
    });
  });
}

// =====================================
// PREMIUM UX INTERACTIONS
// =====================================

// (custom cursor retiré sur demande)

// --- Scroll progress ---
const progress = document.querySelector('.scroll-progress');
if (progress) {
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    progress.style.width = pct + '%';
  }, { passive: true });
}

// --- Page curtain dismiss (avec failsafe) ---
const curtain = document.querySelector('.curtain');
if (curtain) {
  setTimeout(() => curtain.classList.add('gone'), 1100);
  // Failsafe : si quelque chose bloque, on retire de force après 2.5s
  setTimeout(() => {
    if (!curtain.classList.contains('gone')) curtain.classList.add('gone');
    setTimeout(() => curtain.remove(), 1000);
  }, 2500);
}

// --- Reveal on scroll (uniquement éléments tagués .reveal / .reveal-stagger) ---
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
  revealObserver.observe(el);
});

// Failsafe : si jamais l'observer ne trigger pas (cas edge), on force la visibilité après 2s
setTimeout(() => {
  document.querySelectorAll('.reveal:not(.in), .reveal-stagger:not(.in)').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in');
  });
}, 2000);

// --- Magnetic buttons ---
document.querySelectorAll('.btn, .lang-toggle').forEach(btn => {
  btn.classList.add('magnetic');
  btn.addEventListener('mousemove', (e) => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

// --- Count-up for [data-count] ---
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseFloat(el.dataset.count);
    const decimals = (el.dataset.count.split('.')[1] || '').length;
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const dur = parseInt(el.dataset.duration || '1500', 10);
    const start = performance.now();
    function step(now) {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = (target * eased).toFixed(decimals);
      el.textContent = prefix + v + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    countObserver.unobserve(el);
  });
}, { threshold: 0.4 });
document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));
