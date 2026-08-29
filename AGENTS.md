# IP Sticker Studio Handoff

## Current status

Initial product scaffold created and pushed to GitHub: a mobile-friendly sticker workspace with photo/camera input, anchor setup, expression presets, and a Vercel serverless adapter for Volcengine Ark image generation.

## Project mode

- Primary: `software_app`
- Compatible: `data_automation`, `research_report`

## Current recommended version

- `index.html`, `styles.css`, `app.js`, and `api/generate.js` in this repository.

## Active tasks

- Completed: create local repository scaffold and core interaction flow.
- Completed: GitHub remote `https://github.com/Ali1995A/ip-sticker-studio.git`, branch `main`.
- Completed: Vercel production deployment, `sticker.idigits.app` binding, and ARK variables configured in production/preview/development.
- Pending: run a real image generation smoke test with a user-supplied reference photo and confirm the 1024×1024 sheet completes within the Vercel function time limit.

## Source and output

- Source Skill: `G:\soft\skill\ip-illustration-for-yourself` (read-only reference).
- App source: repository root.
- Generated assets are returned by the API and are not committed by default.

## Exact next steps

1. Upload a real reference photo at `https://sticker.idigits.app` and generate a test pack.
2. Confirm the 1024×1024 3×4 sheet completes within 60 seconds, then assess identity and expression quality against the Skill rules.

## Do not repeat

- Do not install a new runtime or duplicate image-generation tooling.
- Do not expose `ARK_API_KEY` in browser code.
- Do not copy the Skill package into this app; reference its route and fidelity rules.

## Update log

- 2026-08-29: Initial app scaffold created.
- 2026-08-29: Pushed `main` to GitHub; deployed Vercel production and bound `sticker.idigits.app` through Cloudflare DNS.
- 2026-08-29: Replaced ARK variables in all Vercel environments using the user-specified Agent Plan image-generation configuration and redeployed.
- 2026-08-29: Diagnosed a production Vercel function timeout during a 2k generation request; reduced the one-sheet API output request to 1024×1024 for the 60-second serverless limit.
