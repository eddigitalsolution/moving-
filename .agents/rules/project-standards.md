# Project Standards & Architectural Rules

## 1. Cloudflare & Edge Security
- **Headers (`public/_headers`)**: Set strict CSP without `unsafe-eval`. Include standard security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`).
- **Meta CSP (`index.html`)**: Ensure `<meta http-equiv="Content-Security-Policy">` is synchronized with `public/_headers`.
- **SPA Fallback (`public/_redirects`)**: Map `/* /index.html 200`.

## 2. Form Accessibility & Standards
- All input fields must contain unique `id` attributes and appropriate `autoComplete` tags (e.g. `autoComplete="name"`, `autoComplete="tel"`).

## 3. UI Layout & Typography
- **Compact UI Grid**: Follow 4px/8px modular rhythm. Keep layout dynamic and uncluttered.
- **Monospaced Tags**: Format status markers and identifiers in monospace font (e.g. `[STATUS: ACCEPTING PICKUPS]`).
- **Single-Line Navbar**: Ensure navbar text does not wrap awkwardly across viewports.

## 4. Anti-AI Slop Icon Policy
- Use clean 1.5px/2.0px stroke vector iconography (e.g., Lucide React).
- Avoid glossy 3D renders, over-saturated gradient clutter, or non-functional visual noise.
