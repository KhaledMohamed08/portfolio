# khaled.dev — Portfolio

Terminal-themed portfolio site built with [Astro](https://astro.build) and Tailwind CSS.

## Features

- Terminal-inspired UI with matrix rain canvas, boot sequence, and command palette
- Typewriter animations, keyboard navigation (`j`/`k`/`gg`/`G`), and scroll reveal
- Dark/light theme toggle with system preference detection
- Interactive contact terminal with form validation and async submission
- Auto-generated sitemap, Open Graph tags, Twitter Cards, and JSON-LD structured data
- Fully responsive

## Project Structure

```
src/
├── components/      # Astro components (Hero, Navbar, Projects, Contact, Icon, etc.)
├── config/          # Central config with env variable fallbacks
├── data/            # Typed data exports (social, skills, services, projects, site)
├── layouts/         # Base layout with SEO meta, fonts, theme, command palette
├── pages/           # Route pages (index.astro)
└── styles/          # Global CSS
```

## Configuration

All site content is driven by `src/config/config.ts`. Social links, services, skills, and projects are defined there with environment variable overrides.

### Adding a Social Platform

1. Add an entry to `social` array in `src/config/config.ts`
2. Add the matching SVG icon case in `src/components/Icon.astro`
3. Add env variable overrides in `.env` if desired

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build |
