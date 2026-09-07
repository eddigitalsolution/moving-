# Cloudflare Deployment Checklist & Coding Frame

This document provides the standard checklist and coding frame for deploying Vite / React Single Page Applications (SPAs) to Cloudflare Pages & Workers without CSP issues, SPA 404 routing errors, or Wrangler code 100324 redirect loops.

---

## 📋 Pre-Deployment Checklist

- [ ] **1. Security Headers (`public/_headers`)**
  - Verify `public/_headers` exists and specifies strict CSP (`default-src 'self' https: data: blob: 'unsafe-inline'`), `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, and `Referrer-Policy: strict-origin-when-cross-origin`.
- [ ] **2. Synchronized CSP in HTML (`index.html`)**
  - Ensure the `<meta http-equiv="Content-Security-Policy">` in `index.html` matches the edge security headers in `public/_headers`.
- [ ] **3. SPA Routing & Loop Prevention**
  - Configure native `"not_found_handling": "single-page-application"` in `wrangler.jsonc`.
  - Use `postbuild` script to generate `dist/200.html` and clean up `_redirects` to avoid Wrangler infinite redirect loops (`code 100324`).
- [ ] **4. Form Input Accessibility & Security**
  - Verify all `<input>` elements contain explicit `autoComplete` attributes (e.g. `name`, `tel`, `email`, `off`).
- [ ] **5. Build & Lint Verification**
  - Execute linter/type check (`npm run lint` or `tsc`).
  - Execute `npm run build` (`tsc && vite build`) to confirm clean compilation and asset bundling in `./dist`.
- [ ] **6. Cloudflare Project Environment**
  - Set `NODE_VERSION=20` in Cloudflare build settings or environment variables.

---

## 🏗️ Cloudflare Coding Frame

### 1. `wrangler.jsonc` (Asset & Router Config)
```jsonc
{
  "name": "project-name",
  "compatibility_date": "2026-09-07",
  "pages_build_output_dir": "./dist",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

### 2. `public/_headers` (Edge Security Policy)
```http
/*
  Content-Security-Policy: default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
```

### 3. `index.html` (Local & Fallback CSP Meta Tag)
```html
<meta 
  http-equiv="Content-Security-Policy" 
  content="default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;" 
/>
```

### 4. `package.json` (Deployment Scripts Frame)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "postbuild": "node -e \"const fs = require('fs'); fs.copyFileSync('dist/index.html', 'dist/200.html'); ['dist/_redirects','dist/.assetsignore','dist/wrangler.json'].forEach(f => { try { fs.unlinkSync(f); } catch(_) {} });\"",
    "deploy": "npm run build && wrangler pages deploy dist",
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

2. **Deploy to Cloudflare via Wrangler CLI**:
   ```bash
   npm run deploy
   ```
