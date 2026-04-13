# FMAI Workshop Website

Website for **Failure Modes in Agentic AI (FMAI)**, an ICML 2026 workshop focused on reproducible triggers, trace diagnostics, and verified fixes for agentic systems.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` after the dev server starts.

## GitHub Pages

This project is configured for GitHub Pages static deployment.

1. Push the repository to GitHub.
2. In GitHub, open `Settings -> Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main` or `master` and the workflow will publish the `out/` build automatically.

If the repository is named `fmai-workshop.github.io`, the site will publish at the root domain. If the repository uses another name, the workflow passes the GitHub Pages base path into the build so internal routes and local speaker images still resolve correctly.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run check
```

## Project Structure

```text
src/
  app/                  Next.js app routes
  components/           Reusable page components
  lib/workshop-data.ts  Central workshop content and metadata
public/
  people/               Local speaker and organizer headshots
```

## Updating Content

Most workshop content lives in `src/lib/workshop-data.ts`. Page-level layout and presentation live under `src/app/` and `src/components/`.

## License

MIT
