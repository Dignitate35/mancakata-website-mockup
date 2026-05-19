# Mancakata — Website Design
**Desain web untuk PT MancaKata, agensi penerjemahan & lokalisasi profesional.**

Prototype interaktif HTML/React dengan arsitektur data-driven yang siap untuk implementasi Laravel. Tiga variasi hero untuk eksplorasi arah visual.

---

## 🎯 Apa ini?

Ini adalah **hi-fi prototype & specification** lengkap untuk website Mancakata, mencakup:

- ✅ **7 halaman public** — Home, Services list, Service detail, Blog list, Blog detail, About, Contact
- ✅ **CMS admin dashboard** — Pages builder dengan drag-drop section repeater, Posts/Services/Menus editor, Site settings
- ✅ **11 section components** — Hero (3 variasi), Logo Cloud, Service Grid, Stats Band, Process Steps, Feature Split, Industries, Testimonial, CTA Banner
- ✅ **Data-driven architecture** — Semua konten dari database, template HTML sebagai Blade components
- ✅ **3 brand accent directions** — Duo (hijau + terakota), Forest (hijau), Terracotta (oranye)

---

## 🚀 Demo Live

**Vercel:** https://mancakata-website-design.vercel.app

Atau buka salah satu variasi hero:
- [Enterprise Hero](https://mancakata-website-design.vercel.app/Mancakata%20-%20Enterprise.html)
- [Split Hero](https://mancakata-website-design.vercel.app/Mancakata%20-%20Split.html)
- [Editorial Hero](https://mancakata-website-design.vercel.app/Mancakata%20-%20Editorial.html)

---

## 📁 File Structure

```
├── Mancakata.html                 Main prototype (all tweaks)
├── Mancakata - Enterprise.html    Hero variant 1
├── Mancakata - Split.html         Hero variant 2
├── Mancakata - Editorial.html     Hero variant 3
├── styles.css                     Design system tokens + utility
├── chrome.jsx                     Navbar + Footer components
├── sections.jsx                   11 section components
├── pages.jsx                      7 page templates
├── cms.jsx                        CMS admin interface
├── tweaks-panel.jsx               Tweaks UI panel
├── assets/
│   └── logo-mancakata.jpeg       Brand logo
├── IMPLEMENTATION_PLAN.md         Laravel architecture specification
└── README.md                      This file
```

---

## 🎨 Visual System

**Typography**
- Display: Fraunces (serif, italic accents)
- Body: Inter Tight (clean sans)
- Mono: JetBrains Mono (code/labels)

**Colors** (from PT MancaKata brand)
- Primary accent: Forest green `#15663d` + Terracotta `#b8682a`
- Neutrals: Ink `#14110d` → Paper `#fbf9f3`
- Semantic: Accent variants for dark sections, tags, buttons

**Spacing**: 4px base → 8, 16, 24, 32, 48, 64, 80, 120px

**Components**: Buttons (primary, secondary, ghost), Tags, Cards, Hero bands, Stat counters

---

## 🛠️ Tech Stack (Prototype)

- **React 18** + **Babel Standalone** (for interactive demo)
- **Vanilla CSS** (no framework — pure custom design system)
- **SVG icons** (inline)

---

## 📋 Implementation (Production)

See `IMPLEMENTATION_PLAN.md` for complete Laravel architecture:

**Backend & Frontend:** Pure Laravel MVC
- **Modul:** `Modules/Web` (public), `Modules/Cms` (admin)
- **Database:** Pages + Page Sections (repeater), Posts, Services, Menus, Site Settings
- **Blade components:** Dynamic `<x-dynamic-component>` rendering per section
- **Cache:** Redis/file caching for menus, settings, pages
- **Frontend libs:** Alpine.js (interactivity), Tailwind CSS (styling)

---

## 🖥️ How to Use

**1. Open locally**
```bash
# Download all files, then open any .html in browser:
open "Mancakata.html"
```

**2. Explore features**
- Use **Tweaks panel** (bottom-right) to:
  - Switch between 7 pages + CMS admin
  - Change hero variant (Enterprise / Split / Editorial)
  - Cycle through 3 brand accents
- **CMS Admin** → Pages → Edit Beranda to see section repeater
- **Responsive** — works on mobile, tablet, desktop

**3. Deploy to Vercel**
```bash
# Push to GitHub first, then:
# 1. Visit vercel.com → Add New Project
# 2. Select this repo
# 3. Framework: "Other"
# 4. Deploy
```

---

## 📸 Screenshots

### Home — Enterprise Hero
![Hero Enterprise variant with 3-card visual band]

### Services List
Grid of 6 services (Penerjemahan Dokumen, Lokalisasi Software, Subtitle & Dubbing, Interpreter, Transcreation, Tersumpah)

### CMS Admin — Page Editor
Drag-drop section repeater with live Blade code preview, JSON content inspector, component library.

### Contact Form
Multi-step form (3 steps: project brief → contact info → success).

---

## 🎯 Brand Voice

**Enterprise + editorial** — professional, trustworthy, nuanced.
- Speaks to B2B (multinational corps, law firms, media companies)
- Emphasizes precision, team expertise, QA rigor
- Content-heavy, thought-leadership tone (blog, case studies)
- Visual: generous whitespace, sophisticated typography, muted palette

---

## 📝 Color Reference

| Role | Light | Dark |
|------|-------|------|
| Ink (text) | #14110d | #fbf9f3 |
| Accent primary | #15663d | #1d8050 |
| Accent secondary | #b8682a | #d07e3c |
| Paper (background) | #fbf9f3 | #14110d |
| Line (border) | rgba(20,17,13,0.12) | rgba(245,241,230,0.1) |

---

## 👤 Author

**Claude (AI Design Partner)**
Prototype & specification for PT MancaKata, May 2026.

---

## 📄 License

This design specification is provided as-is for PT MancaKata. All brand assets (logo, colors, typography) belong to PT MancaKata.

---

## 🔗 Next Steps

1. **Review prototype** with stakeholders
2. **Confirm hero direction** (Enterprise / Split / Editorial)
3. **Choose brand accent** (Forest green / Duo / Terracotta)
4. **Begin Laravel implementation** using `IMPLEMENTATION_PLAN.md`
5. **Migrate Blade components** from prototype HTML
6. **Set up database** (pages, sections, posts, services, menus, settings)
7. **Build CMS admin** with form repeaters, media uploads, caching

---

**Questions?** Reference the prototype interactively or check `IMPLEMENTATION_PLAN.md` for technical detail.
