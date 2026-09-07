# MOVE. — Industrial Brutalist Relocation & Moving Platform

A high-performance, responsive web application for commercial and residential relocation services built with **React 19**, **TypeScript**, **Tailwind CSS**, and **GSAP**. 

Designed using an **Industrial Brutalist UI/UX System**, high-contrast typography, physics-based interactive box composition engine, and instant volumetric dispatch calculator.

---

## 🎨 Design Prompt & Vision

### Design Aesthetic Prompt:
> *"Design a modern, ultra-high-contrast Industrial Brutalist moving & relocation web interface for high-end residential and corporate migrations. Use deep monochrome bases (`#0A0A0A`, `#141414`), sharp high-vis amber (`#FF5500`) and industrial yellow (`#FFE600`) accents, razor-sharp 2px/4px border grids, monospace tactical specifications, and brutalist card shadows. Remove generic AI slop icons, soft rounded corners, and pastel colors. Features include interactive GSAP-powered cargo composition engines, instant volumetric move cost calculators, and real-time WhatsApp pre-configured dispatch links."*

### Key Visual & UX Design Principles:
- **Brutalist Grids & Sharp Aesthetics**: 2px/4px solid borders, zero border-radius pills, high-visibility hazard accents, and industrial monospace metrics.
- **Physics-Based Canvas**: GSAP cargo box physics engine with dynamic `Stack`, `Wall`, and `Pyramid` container formation animations.
- **Anti-AI-Slop Icon Policy**: Only crisp vector stroke iconography (`lucide-react`) with strict stroke weight limits (1.5px - 2.5px), zero glossy 3D clipart or sparkle bloat.
- **Mobile First & Cross-Platform Ergonomics**: Tested and optimized across iOS and Android viewports with zero text truncation or horizontal overflow.

---

## 🛠️ Global Skills & Architecture Enforced

This repository adheres to active Antigravity engineering standards and skills:

1. **`global-setup`**:
   - Enforces Cloudflare Pages edge security headers ([`public/_headers`](file:///c:/Users/User/Desktop/Progamming/antigravity/moving/public/_headers)), synchronized Content Security Policy (CSP) meta tags ([`index.html`](file:///c:/Users/User/Desktop/Progamming/antigravity/moving/index.html)), SPA fallback routing ([`public/_redirects`](file:///c:/Users/User/Desktop/Progamming/antigravity/moving/public/_redirects)), and form field accessibility standards.
2. **`cloudflare-setup`**:
   - Configures Cloudflare static hosting parameters (`NODE_VERSION=20`, `dist/` production bundle output, zero `unsafe-eval` CSP policy).
3. **`compact-ui-design`**:
   - Enforces 4px/8px modular grid rhythm, restrained typography hierarchy, tactical data tags (`[SPEC: 1-5 BEDROOM HOUSES]`), and single-line navbar text standards.
4. **`design-director` / `ui-ux-pro-max`**:
   - Enforces unique industrial brand aesthetic, GSAP-powered motion presets, accessible canvas layouts, and high-conversion pre-configured WhatsApp booking flows.

---

## 🚀 Key Features & Operational Modules

1. **Sticky High-Visibility Header Navbar** ([`Navbar.tsx`](file:///c:/Users/User/Desktop/Progamming/antigravity/moving/src/components/Navbar.tsx)):
   - Smooth top-scroll on logo click, unified hash navigation, and mobile menu drawer.
2. **Hero Tactical Command Panel** ([`HeroSection.tsx`](file:///c:/Users/User/Desktop/Progamming/antigravity/moving/src/components/HeroSection.tsx)):
   - Instant dispatch metric ticker, operational status badges, and quick estimate triggers.
3. **Interactive Operational Modules** ([`ServicesSection.tsx`](file:///c:/Users/User/Desktop/Progamming/antigravity/moving/src/components/ServicesSection.tsx)):
   - **01 Home Moving**: Residential precision relocation & furniture assembly.
   - **02 Office Moving**: Zero downtime commercial migration & IT rack crating.
   - **03 Packing & Crating**: Military-grade ISPM-15 timber crate protection.
   - **04 Secured Storage**: Climate-controlled 24/7 CCTV storage vaults.
4. **Signature Box Physics Engine** ([`SignatureBoxComposer.tsx`](file:///c:/Users/User/Desktop/Progamming/antigravity/moving/src/components/SignatureBoxComposer.tsx)):
   - Real-time GSAP spatial transformations, dynamic container load-balancing simulations (`Stack`, `Wall`, `Pyramid`), and scatter interactive physics.
5. **Instant Volumetric Quote Calculator** ([`InstantQuoteCalculator.tsx`](file:///c:/Users/User/Desktop/Progamming/antigravity/moving/src/components/InstantQuoteCalculator.tsx)):
   - Interactive room and distance sliders, property type modifiers, heavy item options, auto-fleet recommendation (`1-Ton Van`, `3-Ton Truck`, `5-Ton Hydraulic`), and automated WhatsApp dispatch payload generation.

---

## 💻 Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS (Custom Industrial Palette & Brutalist Tokens)
- **Animation**: GSAP (GreenSock Animation Platform) + Canvas Confetti
- **Icons**: Lucide React
- **Build Tool**: Vite 6
- **Hosting Target**: Cloudflare Pages / Workers Static

---

---

## ⚡ Local Development & Cloudflare Deployment

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Production build & TypeScript check
npm run build

# Deploy to Cloudflare Pages via Wrangler
npm run deploy
```

---

## 📋 Cloudflare Deployment Checklist

- [x] **1. Security Headers (`public/_headers`)**
  - Verify `public/_headers` specifies strict CSP, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, and `Referrer-Policy: strict-origin-when-cross-origin`.
- [x] **2. Synchronized CSP Meta Tag (`index.html`)**
  - Ensure `<meta http-equiv="Content-Security-Policy">` in `index.html` matches `public/_headers`.
- [x] **3. SPA Routing & Loop Prevention (`wrangler.jsonc`)**
  - Configure `"not_found_handling": "single-page-application"` in `wrangler.jsonc`.
  - Use `postbuild` script (`package.json`) to auto-generate `dist/200.html` and clean conflicting `_redirects` to avoid Wrangler infinite redirect loops (`code 100324`).
- [x] **4. Form Input Accessibility & Security**
  - Verify all `<input>` elements contain explicit `autoComplete` attributes.
- [x] **5. Build & Deployment Scripts (`package.json`)**
  - `"build"`: `tsc && vite build`
  - `"postbuild"`: `node -e "const fs = require('fs'); fs.copyFileSync('dist/index.html', 'dist/200.html'); ['dist/_redirects','dist/.assetsignore','dist/wrangler.json'].forEach(f => { try { fs.unlinkSync(f); } catch(_) {} });"`
  - `"deploy"`: `npm run build && wrangler pages deploy dist`

---

## 📜 Documentation Manifest

- **[`GEMINI.md`](file:///c:/Users/User/Desktop/Progamming/antigravity/moving/GEMINI.md)**: Main manifest linking project architecture standards.
- **[`.agents/rules/project-standards.md`](file:///.agents/rules/project-standards.md)**: UI/UX standards, TypeScript guidelines, CSP rules, and accessibility.
- **[`.agents/rules/cloudflare-setup.md`](file:///.agents/rules/cloudflare-setup.md)**: Cloudflare build requirements & security headers setup.
- **[`.agents/rules/contact-details.md`](file:///.agents/rules/contact-details.md)**: Contact detail standards (`+60 11-3071 9502`).
- **[`CLOUDFLARE.md`](file:///c:/Users/User/Desktop/Progamming/antigravity/moving/CLOUDFLARE.md)**: Cloudflare Pages deployment reference.

