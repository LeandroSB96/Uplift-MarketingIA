# Uplift

An AI marketing intelligence landing-page template built with Next.js, React, TypeScript, and Tailwind CSS.

## Getting started

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Open the local URL printed by Next.js. To validate types and create a production build:

```bash
npm run typecheck
npm run build
```

## Project notes

- Edit branding, contact details, and navigation in `src/config/site.ts`.
- The homepage sections are composed in `src/app/page.tsx`; styles and responsive rules live in `src/styles/global.css`.
- Update metadata in `src/app/layout.tsx`, the favicon files in `public/`, and the 1200x630 social preview `public/og-image.png` before publishing.
- Sample product metrics, pricing, integrations, and testimonials are illustrative. Review and replace them with verified details before launch.
- See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for the full customization guide.

## License

Released under the [MIT License](./LICENSE).
