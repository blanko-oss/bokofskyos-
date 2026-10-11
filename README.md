# BOKOFSKY OS Official Website

A responsive Next.js website for BOKOFSKY OS, the C# WinForms / .NET 8 Windows gaming toolbox. This website is separate from the Windows application and does not make system changes.

## Architecture

- **Next.js App Router + React + TypeScript** for a component-based website.
- **CSS design system** with black/red cyberpunk styling, responsive layouts, subtle motion, scanline-like grain, and reduced-motion support.
- **`lib/site.ts`** is the single place for public release links, product feature copy, and FAQ entries.
- **Release hosting** is external (for example, a verified GitHub Release or HTTPS download host). No installer, checksum, repository, contact address, or release URL is invented.
- **No database required** for the initial public site.

## Requirements

- Node.js 20.9 or later
- npm
- A Vercel account for hosted deployment

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

The build has not been run in this delivery environment. Run it locally or in Vercel before treating the deployment as production-verified.

## Configure public links

Copy `.env.example` to `.env.local` and configure only real, public URLs:

```env
NEXT_PUBLIC_GITHUB_URL=https://github.com/REAL-OWNER/REAL-REPOSITORY
NEXT_PUBLIC_SOURCE_URL=https://github.com/REAL-OWNER/REAL-REPOSITORY
NEXT_PUBLIC_RELEASE_URL=https://github.com/REAL-OWNER/REAL-REPOSITORY/releases/download/vX.Y.Z/REAL-INSTALLER.exe
NEXT_PUBLIC_CONTACT_EMAIL=real-public-support@example.com
NEXT_PUBLIC_SITE_URL=https://your-real-domain.example
```

These are examples of the shape only. Replace every placeholder with a real URL before enabling any link. If the release URL is blank, the download button remains disabled. The `/download` route validates that a configured target is HTTPS and falls back to the download center if it is missing or malformed. Do not put private keys, tokens, or credentials in `NEXT_PUBLIC_*` variables; those values are public in the browser.

You may also configure the values directly in `lib/site.ts` if you prefer a static-only deployment. `NEXT_PUBLIC_RELEASE_URL` must point to the actual published installer, not a guessed path.

## Release checklist

1. Build and test the Windows application from the existing C# WinForms .NET 8 source project.
2. Verify the installer on a clean supported Windows machine.
3. Publish release notes with the exact version and system requirements.
4. Calculate SHA-256 from the final installer, for example with PowerShell:

   ```powershell
   Get-FileHash .\BOKOFSKY-OS-Setup.exe -Algorithm SHA256
   ```

5. Upload the installer and checksum to a stable HTTPS release location.
6. Configure the public URLs and update the version/release details in `app/page.tsx` and `lib/site.ts`.
7. Replace the screenshot placeholders with authentic screenshots from the shipped application.
8. Confirm the privacy and password-storage statements against the actual source and dependencies.
9. Run `npm run build`, test all links and responsive breakpoints, then deploy.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Framework preset: **Next.js**. Build command: `npm run build`; output directory: leave the default.
4. Add only the real public URL environment variables described above.
5. Deploy, test the generated preview URL, and then attach the production domain.

No `vercel.json` is required for this standard Next.js App Router project.

## Routes and accessibility

- `/` main product site
- `not-found.tsx` custom 404 page
- Semantic landmarks, labeled navigation, keyboard-operable FAQ accordion, responsive navigation, visible disabled-download state, and `prefers-reduced-motion` support.

## Important truth-in-advertising notes

- The app version is intentionally not presented as released.
- The download remains unavailable until a real release URL is supplied.
- Screenshot panels are explicitly marked as placeholders.
- No benchmark figures, testimonials, certifications, or verified security claims are fabricated.
- The application is intended to preserve Windows Update, Defender, drivers, recovery, and visual effects. Confirm behavior against the actual shipped C# source before making stronger public guarantees.
- Password handling and data collection are described as intentions pending verification of the final source and dependencies.

## Existing application integration

Keep the website in a separate directory/repository from the C# Windows application. Treat the WinForms .NET 8 project as the product source of truth. When its source and authentic screenshots are available, align the feature copy and release metadata to the tested build; do not infer capabilities from the marketing page.
