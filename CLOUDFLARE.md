# Cloudflare Quick Reference Deployment Guide

## Configuration Files
- `wrangler.jsonc`: Cloudflare Pages / Workers project setup.
- `public/_headers`: Security headers & CSP policies.
- `public/_redirects`: Native SPA fallback (`/* /index.html 200`).
- `200.html`: Fallback for static SPA routing engines.
