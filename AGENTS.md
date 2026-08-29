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
- Pending: configure Volcengine environment variables, authenticate Vercel, deploy, bind `sticker.idigits.app`, and run a real image generation smoke test.

## Source and output

- Source Skill: `G:\soft\skill\ip-illustration-for-yourself` (read-only reference).
- App source: repository root.
- Generated assets are returned by the API and are not committed by default.

## Exact next steps

1. Set `ARK_API_KEY`, `ARK_MODEL`, and optional `ARK_BASE_URL` in Vercel.
2. Authenticate Vercel and import the GitHub repository.
3. Add custom domain `sticker.idigits.app` to the Vercel project, then create the required Cloudflare DNS record.
4. Deploy with Vercel and test upload, camera permission, and generation.
5. Confirm generated output quality against the Skill's identity and expression-pack validation rules.

## Do not repeat

- Do not install a new runtime or duplicate image-generation tooling.
- Do not expose `ARK_API_KEY` in browser code.
- Do not copy the Skill package into this app; reference its route and fidelity rules.

## Update log

- 2026-08-29: Initial app scaffold created.
- 2026-08-29: Pushed `main` to GitHub; Vercel authentication and `sticker.idigits.app` binding remain pending.
