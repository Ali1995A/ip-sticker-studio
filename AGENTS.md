# IP Sticker Studio Handoff

## Current status

Initial product scaffold created: a mobile-friendly sticker workspace with photo/camera input, anchor setup, expression presets, and a Vercel serverless adapter for Volcengine Ark image generation.

## Project mode

- Primary: `software_app`
- Compatible: `data_automation`, `research_report`

## Current recommended version

- `index.html`, `styles.css`, `app.js`, and `api/generate.js` in this repository.

## Active tasks

- Completed: create local repository scaffold and core interaction flow.
- Pending: configure Volcengine environment variables, connect GitHub remote, deploy to Vercel, and run a real image generation smoke test.

## Source and output

- Source Skill: `G:\soft\skill\ip-illustration-for-yourself` (read-only reference).
- App source: repository root.
- Generated assets are returned by the API and are not committed by default.

## Exact next steps

1. Set `ARK_API_KEY`, `ARK_MODEL`, and optional `ARK_BASE_URL` in Vercel.
2. Connect this folder to the intended GitHub repository.
3. Deploy with Vercel and test upload, camera permission, and generation.
4. Confirm generated output quality against the Skill's identity and expression-pack validation rules.

## Do not repeat

- Do not install a new runtime or duplicate image-generation tooling.
- Do not expose `ARK_API_KEY` in browser code.
- Do not copy the Skill package into this app; reference its route and fidelity rules.

## Update log

- 2026-08-29: Initial app scaffold created.
