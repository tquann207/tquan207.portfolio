# Quan Tran — Mechanical Engineering Portfolio

Next.js/React portfolio with a static GitHub Pages export. Public content is centralized in `content/site.ts`; case-study requirements and evidence notes are in `content/case-studies.ts`.

## Development and verification

- `npm ci` — install the existing locked dependencies.
- `npm run dev` — Vite/Vinext development preview; a Sites manifest is optional for this standalone checkout.
- `npm run build:github` — export all pages to `out/` with `/tquan207.portfolio` as the base path.
- `npm run build` — chooses that same static export when no Sites manifest exists.
- `npm test` — builds and checks exported page headings, local files, links, and fragment targets. The existing Worker check is retained for a Sites checkout.

The existing GitHub workflow deploys on pushes to `main`. Review feature branches before merging. Do not commit build output, dependencies, or temporary QA fixtures.

## Content updates

Read `CONTENT_AUDIT.md` before changing claims. Add only real, shareable project evidence using `public/projects/README.md`. Keep counts, units, test conditions, reported results, and individual/team ownership distinct. Retain public route slugs and project numbers when reordering cards.
