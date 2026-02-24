# Palms Resort & Beach

Static marketing website for Palms Resort & Beach, built with Next.js 14 (App Router) and Tailwind CSS.

## Requirements met

- **Next.js 14+** with App Router only; **Tailwind CSS** for styling
- **Static export**: `output: 'export'` in `next.config.mjs` — no server runtime
- **Server Components**: All main pages are Server Components; full content is in the initial HTML
- **No auth gate**: No AuthProvider; no loading spinners hiding main content
- **No root index.html**: Only the build output in `out/` contains `index.html`
- **SEO**: `public/robots.txt` (Allow all + AI crawlers), `app/sitemap.ts` → `/sitemap.xml`
- **View Page Source**: Homepage and all main pages have full text in the initial HTML for crawlers

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export)

```bash
npm run build
```

Static files are in the **`out/`** directory.

## Test

```bash
npm run test
```

Runs unit tests (Jest + React Testing Library). Use `npm run test:watch` for watch mode and `npm run test:coverage` for coverage.

## Deploy

- **Build command**: `npm run build`
- **Publish directory**: `out` (the static export output)
- No server or rewrites required; use any static host (Render, Vercel, Netlify, GitHub Pages, S3, etc.).

Set `NEXT_PUBLIC_BASE_URL` to your production URL (e.g. `https://yoursite.com`) so the sitemap uses correct absolute URLs. Default is `https://palmsresortandbeach.com`.

## Project structure

- `app/layout.tsx` — Root layout, meta, Header/Footer
- `app/page.tsx` — Homepage (hero, value props, features, CTAs)
- `app/rooms/page.tsx` — Accommodations
- `app/BeachActivities/page.tsx` — Beach & Activities
- `app/Dining/page.tsx` — Dining & Nightlife
- `app/Gallery/page.tsx` — Gallery
- `app/contact/page.tsx` — Contact & booking
- `app/sitemap.ts` — Sitemap for `/sitemap.xml`
- `components/Header.tsx`, `components/Footer.tsx` — Shared layout (Server Components)
- `public/robots.txt` — Crawler rules
