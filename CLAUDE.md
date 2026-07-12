@AGENTS.md

# Portfolio Project

A Next.js (App Router) portfolio site. Framework version has breaking changes — always read `node_modules/next/dist/docs/` before writing framework code (see AGENTS.md).

## Project Layout

- `app/` — Next.js App Router routes, layout, and global styles (`globals.css`).
- `public/` — Static assets served at the site root, organized as:
  - `images/` — `logo.png`, service icons (`icons/`), site media (`media/`: hero-bg, me, bg, ask), and project resources (`projects/<slug>/`).
  - `fonts/` — icon webfonts (woff2) referenced by `app/icons.css`.
  - `files/` — downloadable files (`Resume.pdf`).
- `components/` — shared React components. `Button.tsx` is the single button primitive; use it for every button/CTA (`variant`: border | dark | hero | ghost).
- `app/data/projects.ts` — single source of truth for all project content and image paths.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Tooling Rules (IMPORTANT)

- **Do NOT use PowerShell.** Use the Bash tool (POSIX `sh`) for all shell work. Do not invoke `powershell`, `pwsh`, or PowerShell-only cmdlets.
- **Do NOT use `curl`** (or `wget`). For fetching web content or APIs, use the dedicated fetch tooling (e.g. WebFetch) instead of shelling out.

## Design System

Typography and tokens mirror the official PixelDrive site (`D:\Pixeldrive\PixelDriveOffical`):
- **Fonts** (via `next/font`): **Space Grotesk** for headings/display (`--font-display`), **Inter** for body (`--font-body`). All `h1–h6` use the display font automatically (base layer in `app/globals.css`).
- **Palette**: background `#f5f4f0`, foreground/ink `#0d0d0d`, accent `#f95f19`, card `#eae9e4` — exposed as Tailwind tokens (`bg-background`, `text-foreground`, `text-accent`, `bg-card`, …).
- **Type scale / spacing / easing**: clamp-based CSS vars (`--text-display`, `--text-h1`…, `--section-py`, `--ease-out-flow`, …) in `:root`.
- **Animations**: `LineReveal` component reproduces the official line reveal (105%→0, 0.85s, `cubic-bezier(0.22,1,0.36,1)`, 0.12s stagger); marquee keyframe + `svg-underline` also available.

## Conventions

- Prefer the dedicated file tools (Read/Edit/Write/Glob/Grep) over shell commands for reading, searching, and editing files.
- Keep static portfolio assets under `public/`; keep application code under `app/`.
