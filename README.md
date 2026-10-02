# Travel Journal

A React learning project based on the Scrimba travel-journal exercise, with a personal selection of destinations. It demonstrates reusable components, props and rendering structured data.

## Run locally

```bash
npm ci
npm run dev
```

Use the URL printed by Vite. `npm run build` creates the static site in `dist/`; `npm run preview` serves that build locally. Node.js 22 LTS is a suitable development environment.

## Structure

- `src/data.js`: destination text, external images and map links.
- `src/Entry.jsx`: reusable destination component.
- `src/Header.jsx`: page heading.
- `src/App.jsx`: maps the data into journal entries.

The Vite base path is `/travel-journal/` for GitHub Pages. Change it when deploying under a different path. `npm run deploy` publishes `dist/` through gh-pages and requires authorization to the repository; deployment has not been run for this patch.

## Scope and attribution

This is a static course project, with no account system, database or travel-booking functionality. Destination photographs are hosted by external providers; their availability and reuse terms belong to those providers. The starting exercise comes from [Scrimba](https://scrimba.com/).

## Checks

On 2 October 2026, the production build and ESLint passed, and the refreshed lockfile had zero findings in `npm audit`. This does not verify external image availability or every browser interaction.
