# Ayon Paul — Portfolio Website

> A premium cinematic futuristic 3D portfolio experience built with React + Vite + Three.js

## ✦ Live Preview

A world-class developer portfolio that feels like a $100K creative studio product — immersive, cinematic, and interactive.

---

## 🚀 Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | React 18 + Vite 5 |
| **Styling** | Tailwind CSS 3 |
| **Animation** | Framer Motion 11 + GSAP 3 |
| **3D Engine** | Three.js + @react-three/fiber + @react-three/drei |
| **Smooth Scroll** | Lenis |
| **Typography** | Bebas Neue · Syne · DM Sans · JetBrains Mono |

---

## 🗂 Project Structure

```
ayon-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── CustomCursor.jsx      # Premium magnetic cursor
│   │   │   └── Navbar.jsx            # Floating glass navbar
│   │   ├── ui/
│   │   │   ├── Loader.jsx            # Cinematic counter loader
│   │   │   ├── MagneticButton.jsx    # Magnetic hover button
│   │   │   ├── MarqueeBar.jsx        # GSAP infinite ticker
│   │   │   ├── ScrollProgress.jsx    # Top progress bar
│   │   │   ├── SectionLabel.jsx      # Section numbering
│   │   │   └── AmbientParticles.jsx  # Canvas particle system
│   │   ├── three/
│   │   │   └── HeroScene.jsx         # Three.js 3D hero scene
│   │   └── sections/
│   │       ├── Hero.jsx              # Wow-factor hero
│   │       ├── About.jsx             # Bio + animated counters
│   │       ├── Skills.jsx            # Interactive skill cards
│   │       ├── Experience.jsx        # Animated timeline
│   │       ├── Journey.jsx           # Origin story milestones
│   │       ├── Projects.jsx          # 3D tilt project cards
│   │       ├── Certifications.jsx    # Floating cert cards
│   │       ├── OpenToWork.jsx        # Pulsing CTA section
│   │       └── Contact.jsx           # Animated contact form
│   ├── data/
│   │   └── portfolio.js              # All content in one place
│   ├── hooks/
│   │   ├── useMousePosition.js       # Mouse tracking + parallax
│   │   └── useLenis.js               # Smooth scroll init
│   ├── styles/
│   │   └── globals.css               # Design tokens + animations
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## ⚡ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Dev Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 3. Production Build

```bash
npm run build
npm run preview
```

---

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--void` | `#020205` | Main background |
| `--abyss` | `#0A0A12` | Section backgrounds |
| `--cyan` | `#00F0FF` | Primary accent |
| `--violet` | `#9B4DCA` | Secondary accent |
| `--gold` | `#F2A900` | Tertiary / special |
| `--lumen` | `#F0EEF5` | Primary text |
| `--fog` | `#5A5A72` | Muted text |

### Typography
- **Bebas Neue** — Display / hero text
- **Syne** — Headings
- **DM Sans** — Body copy
- **JetBrains Mono** — Code / labels

---

## ✏️ Customization

All content lives in **`src/data/portfolio.js`**. Update:
- `personal` — your bio, stats, email, social links
- `skills` — tech categories and items
- `experience` — work history
- `journey` — life milestones
- `projects` — featured projects with tech stack
- `certifications` — credentials

---

## 🌟 Features

- **Cinematic Loader** — Animated counter (000→100) with brand reveal
- **Custom Cursor** — Magnetic ring with dot follower, context-aware labels
- **3D Hero Scene** — Icosahedron + orbit rings + particle cloud with mouse parallax
- **Ambient Particles** — Canvas-based particle field with connections
- **GSAP Marquee** — Infinite scrolling tech ticker bars
- **Scroll Progress** — Gradient top bar tracking scroll position
- **3D Tilt Cards** — GPU-accelerated perspective tilt on project cards
- **Animated Counters** — Scroll-triggered counting numbers
- **Word-by-word Reveals** — Staggered text animations on scroll
- **Magnetic Buttons** — Physics-based cursor attraction
- **Noise Grain Overlay** — Animated film grain texture
- **Lenis Smooth Scroll** — Buttery 60fps scrolling

---

## 📦 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ to Netlify
```

---

## 📄 License

MIT — Free to use and customize for your own portfolio.

---

*Built with precision by Claude — an Awwwards-level cinematic experience.*
