# Santanu — 3D Portfolio

> A dark, hacker-aesthetic portfolio for a Cloud Engineer & Full-Stack Developer.
> Built with pure HTML, CSS, and Vanilla JS — zero frameworks, zero build tools.

---

## ⚡ Live Preview

Open `index.html` directly in any modern browser. No server or build process required.

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#050a0e` | Page background |
| `--panel` | `#0c1820` | Cards & panels |
| `--cyan` | `#00c8ff` | Primary accent, links |
| `--green` | `#00ff9d` | Success states, tags |
| `--purple` | `#b36dff` | Tech stack badges |
| `--orange` | `#ff6e3c` | Terminal values |

**Fonts:**
- `JetBrains Mono` — code blocks, labels, nav links
- `Syne` — headings and display text

---

## 📁 Project Structure

```
portfolio/
├── index.html       # Complete single-file portfolio
├── README.md        # This file
└── assets/          # Create this folder for your files
    ├── profile-placeholder.jpg
    ├── Santanu-Resume.pdf
    └── Santanu-Resume.docx
```

---

## 🚀 Getting Started

### 1. Clone or Download
```bash
git clone https://github.com/Santa-09/portfolio.git
cd portfolio
```

### 2. Open in Browser
```bash
# Just open directly — no install needed
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### 3. Customize Your Info

All content is in `index.html`. Key areas to update:

---

## ✏️ Customization Guide

### Personal Info (Hero Section)

Find the hero section and update:

```html
<!-- Name -->
<h1 class="hero-name">Hi, I'm<br><span class="highlight">YourName</span></h1>

<!-- Stats -->
<div class="stat-num">2<span>+</span></div>   <!-- years experience -->
<div class="stat-num">15<span>+</span></div>  <!-- projects -->
<div class="stat-num">5<span>+</span></div>   <!-- certifications -->
```

### Typing Effect Phrases

```javascript
// In <script> at the bottom of index.html
const phrases = [
  'Cloud Engineer',
  'Full-Stack Dev',
  'DevOps Enthusiast',
  'AWS Architect',
  'Your Custom Role'   // ← Add your own
];
```

### Terminal Card (Hero Visual)

```html
<!-- Edit the JSON in the terminal window -->
<div class="t-line t-indent">
  <span class="t-key">"name"</span>: <span class="t-str">"YourName"</span>,
</div>
<div class="t-line t-indent">
  <span class="t-key">"role"</span>: <span class="t-str">"Your Role"</span>,
</div>
```

### Skills

Each skill card follows this pattern:

```html
<div class="skill-card-3d reveal">
  <div class="skill-cat">// category</div>
  <div class="skill-name">Skill Name</div>
  <div class="skill-bar">
    <div class="skill-fill" data-w="85"></div>  <!-- 0–100 -->
  </div>
  <div class="skill-pct">85%</div>
  <div class="skill-tags">
    <span class="stag">Tag1</span>
    <span class="stag">Tag2</span>
  </div>
</div>
```

### Experience Timeline

```html
<div class="timeline-item reveal">
  <div class="timeline-dot"></div>
  <div class="tl-date">// 2023 — 2024</div>
  <div class="tl-card">
    <div class="tl-role">Your Job Title</div>
    <div class="tl-org">@ Company Name</div>
    <div class="tl-desc">What you did here...</div>
    <div class="tl-tags">
      <span class="tl-tag">Skill</span>
    </div>
  </div>
</div>
```

### Projects

```html
<div class="project-card reveal">
  <div class="proj-num">// project_05</div>
  <div class="proj-title">Your Project Title</div>
  <div class="proj-desc">Project description here.</div>
  <div class="proj-stack">
    <span class="stack-tag">React</span>
    <span class="stack-tag">AWS</span>
  </div>
  <div class="proj-links">
    <a href="https://github.com/..." class="proj-link">→ view_code</a>
    <a href="https://..." class="proj-link">→ live_demo</a>
  </div>
</div>

<!-- Featured (spans 2 columns) — add class "featured" -->
<div class="project-card featured reveal">
  ...
</div>
```

### Certifications

```html
<div class="cert-card reveal">
  <div class="cert-badge aws">☁️</div>   <!-- aws | azure | gcp or custom -->
  <div class="cert-name">Cert Name</div>
  <div class="cert-org">Issuer</div>
  <span class="cert-chip">✓ verified</span>
</div>
```

### Contact Info

```html
<div class="info-val">your@email.com</div>
<div class="info-val">Your City, Country</div>
```

Update social links:
```html
<a href="https://github.com/YOUR_USERNAME" ...>
<a href="https://linkedin.com/in/YOUR_PROFILE" ...>
```

---

## 🎯 Color Customization

Change the entire color scheme by editing CSS variables at the top of the `<style>` block:

```css
:root {
  --bg: #050a0e;        /* Page background */
  --panel: #0c1820;     /* Card backgrounds */
  --cyan: #00c8ff;      /* Primary accent → try #00ff88 for green */
  --green: #00ff9d;     /* Tags / success */
  --purple: #b36dff;    /* Stack badges */
  --orange: #ff6e3c;    /* Terminal values */
}
```

---

## 📧 Contact Form Setup

The form currently shows a success message on submit. To make it functional:

### Option A: EmailJS (Recommended — Free)

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add to `<head>`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>emailjs.init("YOUR_PUBLIC_KEY");</script>
```
3. Replace the form submit handler in `<script>`:
```javascript
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'sending...';
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target)
    .then(() => { btn.textContent = '✓ message_sent!'; })
    .catch(() => { btn.textContent = 'error — try again'; });
});
```

### Option B: Formspree (Zero-code)

```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## 📥 Resume Download

Add your resume files to the `assets/` folder and update the About section link:

```html
<a href="assets/Santanu-Resume.pdf" download class="btn-primary">
  Download Resume
</a>
```

---

## 🚀 Deployment

### GitHub Pages
```bash
git init
git add .
git commit -m "initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
# → Settings → Pages → Branch: main → / (root) → Save
# Live at: https://YOUR_USERNAME.github.io/portfolio
```

### Netlify (Drag & Drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag your project folder onto the deploy zone
3. Done — live in seconds with HTTPS

### Vercel
```bash
npm i -g vercel
vercel
```

---

## ✅ Launch Checklist

- [ ] Update name, role, bio, and location
- [ ] Replace placeholder stats (years, projects, certs)
- [ ] Add real project titles, descriptions, and links
- [ ] Update GitHub and LinkedIn URLs
- [ ] Add your resume PDF to `assets/`
- [ ] Set up contact form (EmailJS or Formspree)
- [ ] Update certifications with real ones
- [ ] Add experience timeline entries
- [ ] Test on mobile (responsive at 768px)
- [ ] Test all external links
- [ ] Deploy and share

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 semantic |
| Styling | CSS3 — Variables, Grid, Flexbox, 3D Transforms |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (JetBrains Mono + Syne) |
| Icons | Inline SVG |
| Animations | CSS Keyframes + IntersectionObserver API |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 900px` | Full 2-column layout, terminal visual shown |
| `≤ 900px` | Single column, terminal hidden, nav links hidden |
| `≤ 600px` | Single column skill & cert grids |

---

## 🌐 Browser Support

Chrome ✅ · Firefox ✅ · Safari ✅ · Edge ✅ · Mobile ✅

---

## 📞 Contact

- **GitHub**: [Santa-09](https://github.com/Santa-09)
- **LinkedIn**: [santanu08](https://www.linkedin.com/in/santanu08)

---

*Built with ☁️ and passion for cloud computing*
