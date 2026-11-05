# My campus website

The public website for the My campus app: home page, Privacy Notice, Terms of Service and Refund Policy.
Built with Next.js (React) as a static export, so every page is plain HTML that shows without JavaScript or signing in.

## Work on it

```bash
npm install
npm run dev            # http://localhost:3000/
npm run build          # writes the finished site to out/
```

- **Text and prices:** home page in `app/page.js`; links (web app, Android APK) and prices in `lib/site.js`.
- **Legal text:** `lib/legal.js` is a copy of `../mobile/src/lib/legal.js`, which is the source of truth (the app shows the same pages). Edit it there, then run `npm run sync-legal`.
- **Business details:** fill in `OPERATOR` at the top of `mobile/src/lib/legal.js`, then `npm run sync-legal`.

## Publish on GitHub Pages

1. Push this folder to `https://github.com/chineduclinton543/mycampus` (branch `main`).
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` builds and publishes the site (see `.github/workflows/pages.yml`). It appears at
   `https://chineduclinton543.github.io/mycampus/`.

With your own domain later: add it under Settings → Pages → Custom domain; the workflow builds for the root automatically.

## Links for Google's sign-in screen

| Field | URL |
|---|---|
| Home page | `https://chineduclinton543.github.io/mycampus/` |
| Privacy policy | `https://chineduclinton543.github.io/mycampus/privacy/` |
| Terms of service | `https://chineduclinton543.github.io/mycampus/terms/` |
| Authorized domains | `chineduclinton543.github.io`, `vqedzwkhlzxmzvtgwket.supabase.co` |
