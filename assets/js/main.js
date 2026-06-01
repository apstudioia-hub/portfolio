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
