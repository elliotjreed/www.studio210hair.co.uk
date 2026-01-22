# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SvelteKit project using Svelte 5 with TypeScript, configured with Tailwind CSS v4, Vitest for testing, ESLint, and Prettier.

## Development Commands

### Running the Development Server

```sh
bun run dev              # Start dev server
bun run dev -- --open    # Start dev server and open in browser
```

### Building

```sh
bun run build    # Create production build
bun run preview  # Preview production build locally
```

### Testing

```sh
bun run test         # Run all tests once
bun run test:unit    # Run tests in watch mode
```

The project uses Vitest with two test configurations:

- **Client tests**: Files matching `src/**/*.svelte.{test,spec}.{js,ts}` run in browser mode using Playwright (Chromium headless)
- **Server tests**: Files matching `src/**/*.{test,spec}.{js,ts}` (excluding `.svelte.*` files) run in Node environment

### Code Quality

```sh
bun run check           # Type-check with svelte-check
bun run check:watch     # Type-check in watch mode
bun run lint            # Run Prettier and ESLint checks
bun run format          # Format code with Prettier
```

### Preparation

```sh
bun run prepare    # Sync SvelteKit types (runs automatically on install)
```

## Project Structure

```
src/
├── lib/           # Reusable components and utilities (aliased as $lib)
│   ├── assets/    # Static assets
│   └── index.ts   # Library exports
├── routes/        # SvelteKit file-based routing
│   ├── +layout.svelte   # Root layout
│   ├── +page.svelte     # Home page
│   └── layout.css       # Global styles
├── app.d.ts       # TypeScript declarations
└── app.html       # HTML template
```

## Technology Stack

- **Framework**: SvelteKit 2 with Svelte 5
- **Styling**: Tailwind CSS v4 (via Vite plugin) with forms and typography plugins
- **Testing**: Vitest with Playwright browser provider and vitest-browser-svelte
- **Type Checking**: TypeScript with strict mode
- **Linting**: ESLint 9 (flat config) with typescript-eslint and eslint-plugin-svelte
- **Formatting**: Prettier with svelte and tailwindcss plugins
- **Build Tool**: Vite 7
- **Adapter**: adapter-auto (auto-detects deployment platform)

## Configuration Notes

### TypeScript

- Extends `.svelte-kit/tsconfig.json` (auto-generated)
- Strict mode enabled
- Module resolution: bundler
- `$lib` alias points to `src/lib` (configured via SvelteKit)

### ESLint

- Uses flat config format (eslint.config.js)
- Respects .gitignore patterns
- `no-undef` rule disabled for TypeScript files (as recommended by typescript-eslint)
- Svelte-specific parser configuration for `.svelte` files

### Vitest

- Requires assertions (`requireAssertions: true`)
- Browser tests use `render()` from `vitest-browser-svelte`
- Use `page.getByRole()` and similar selectors from `vitest/browser`

### Tailwind CSS

- Using Tailwind v4 via `@tailwindcss/vite` plugin
- Forms and typography plugins available
- Configured in vite.config.ts (no separate tailwind.config file needed for v4)

## Adapter Configuration

Currently using `@sveltejs/adapter-auto` which auto-detects the deployment environment. If deploying to a specific platform, switch to the appropriate adapter (Vercel, Netlify, Node, static, etc.).
