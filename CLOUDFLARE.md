# Cloudflare Pages & Workers Deployment Standard & Audit

This document provides the standard checklist, coding frame, audit summary, and deployment guidelines for deploying Vite / React Single Page Applications (SPAs) to Cloudflare Pages & Workers without CSP issues, SPA 404 routing errors, or Wrangler redirect loops.

---

## 📋 Pre-Deployment Checklist

- [x] **1. Security Headers (`public/_headers`)**
  - Verify `public/_headers` exists and specifies strict CSP (`default-src 'self' https: data: blob: 'unsafe-inline'`), `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, and `Referrer-Policy: strict-origin-when-cross-origin`.
- [x] **2. Synchronized CSP in HTML (`index.html`)**
  - Ensure the `<meta http-equiv="Content-Security-Policy">` in `index.html` matches the edge security headers in `public/_headers`.
- [x] **3. SPA Routing & Loop Prevention**
  - Configure native `"pages_build_output_dir": "./dist"` and project name in `wrangler.jsonc`.
  - Use `postbuild` script to generate `dist/200.html` and clean up `_redirects` to avoid Wrangler infinite redirect loops (`code 100324`).
- [x] **4. Form Input Accessibility & Security**
  - Verify all `<input>` elements contain explicit `autoComplete` attributes (e.g. `name`, `tel`, `email`, `off`).
- [x] **5. Build & Lint Verification**
  - Execute `npm run build` (`tsc && vite build`) to confirm clean compilation and asset bundling in `./dist`.
- [x] **6. Cloudflare Project Environment**
  - Set `NODE_VERSION=20` in Cloudflare build settings or environment variables.

---

## 🔍 Codebase Audit Summary (`moving`)

| Component / Layer | Audit Finding | Verified File Link | Status |
|---|---|---|---|
| **Framework & Build** | Vite 6 + React 19 + TypeScript compiling cleanly to `./dist`. | [`package.json`](file:///c:/Users/User/Desktop/Progamming/antigravity/moving/package.json) | **PASS** |
| **Edge Header Security** | `public/_headers` active and synchronized with `<meta>` tag in `index.html` (zero `unsafe-eval`). | [`public/_headers`](file:///c:/Users/User/Desktop/Progamming/antigravity/moving/public/_headers) & [`index.html`](file:///c:/Users/User/Desktop/Progamming/antigravity/moving/index.html#L8-L10) | **PASS** |
| **Edge Routing & Assets** | `wrangler.jsonc` configured with `"pages_build_output_dir": "./dist"` and project name `"moving"`. | [`wrangler.jsonc`](file:///c:/Users/User/Desktop/Progamming/antigravity/moving/wrangler.jsonc) | **PASS** |
| **Postbuild Pipeline** | `postbuild` hook auto-creates `dist/200.html` and removes conflicting `_redirects` files. | [`package.json`](file:///c:/Users/User/Desktop/Progamming/antigravity/moving/package.json#L9) | **PASS** |
| **Form Accessibility** | All form input elements feature explicit `autoComplete` attributes. | [`InstantQuoteCalculator.tsx`](file:///c:/Users/User/Desktop/Progamming/antigravity/moving/src/components/InstantQuoteCalculator.tsx) | **PASS** |

---

## 🚨 Dashboard Setting Safeguards

When configuring Cloudflare Pages Git Integration in the Cloudflare Dashboard:

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Deploy command**: *(Leave BLANK - Cloudflare Pages handles deployment automatically)*
- **Version command**: *(Leave BLANK)*

---

## 🏗️ Cloudflare Coding Frame

### 1. `wrangler.jsonc` (Asset & Router Config)
```jsonc
{
  "name": "moving",
  "compatibility_date": "2026-09-07",
  "pages_build_output_dir": "./dist"
}
```

### 2. `public/_headers` (Edge Security Policy)
```http
/* Cloudflare Pages Security Headers */
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https: ws: wss:; worker-src 'self' blob:; object-src 'none'; frame-ancestors 'none';
```

### 3. `index.html` (Local & Fallback CSP Meta Tag)
```html
<meta 
  http-equiv="Content-Security-Policy" 
  content="default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https: ws: wss:; worker-src 'self' blob:; object-src 'none';" 
/>
```

### 4. `package.json` (Deployment Scripts Frame)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "postbuild": "node -e \"const fs = require('fs'); fs.copyFileSync('dist/index.html', 'dist/200.html'); ['dist/_redirects','dist/.assetsignore','dist/wrangler.json'].forEach(f => { try { fs.unlinkSync(f); } catch(_) {} });\"",
    "deploy": "npm run build",
    "lint": "tsc",
    "preview": "vite preview"
  }
}
```

---

## 🚀 Execution & Deployment Commands

1. **Test Production Build Locally**:
   ```bash
   npm run build
   npm run preview
   ```

2. **Deploy via Git Push**:
   ```bash
   git push origin main
   ```
