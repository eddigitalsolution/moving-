# Cloudflare Setup & Deployment Guide

## Build Parameters
- **Node Version**: `NODE_VERSION=20`
- **Output Directory**: `dist/`
- **CSP Constraints**: Zero `unsafe-eval` execution.

## Deployment Checklist
1. Build artifact targeting `dist/`.
2. Verify `public/_headers` and `public/_redirects` are copied into `dist/`.
3. Check SPA route handling with fallback rules (`200.html` / `_redirects`).
