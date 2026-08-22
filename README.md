# honey.sh

Personal site built with Remix 3 and deployed to Netlify with `@pitlane/dev`.

## App Shape

-   `app/routes.ts` defines the URL contract.
-   `app/actions/controller.tsx` owns top-level route actions.
-   `app/actions/posts/controller.tsx` owns nested post routes.
-   `app/entry.server.ts` wires controllers and middleware and exports the server fetch handler.
-   `app/entry.browser.ts` progressively enhances browser navigation.
-   `app/middleware/render.tsx` installs the request-scoped Remix UI renderer.
-   `app/ui/` holds shared document, layout, and page UI.
-   `posts/` contains Markdown source files with frontmatter.
-   `npm run build` renders posts into `app/data/posts.generated.ts` for runtime imports.
-   `vite.config.ts` builds the client assets and server fetch handler with Pitlane.
-   `public/` contains static files copied into `dist/client` for Netlify's CDN.
-   `netlify/functions/server.mjs` forwards dynamic requests to the built server handler.

## Commands

```sh
npm install
npm run dev
npm run dev:netlify
npm run build
npm run preview
npm test
npm run typecheck
```

`npm run dev` uses Pitlane's development server directly. Use `npm run dev:netlify` when you need
Netlify's local emulation for platform features such as Functions, Blobs, or environment variables.

## Deploy

Netlify serves `dist/client` from its CDN and routes everything else through the Node function in
`netlify/functions/server.mjs`. The production build runs in GitHub Actions rather than Netlify's
build system.

Create or link the site once:

```sh
npx netlify login
npx netlify init
```

Add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` as GitHub Actions repository secrets. Every push to
`main` then typechecks, tests, builds, and deploys the site to production.

To deploy the current checkout manually:

```sh
npm run build
npx netlify deploy --no-build          # draft URL
npx netlify deploy --no-build --prod   # production
```
