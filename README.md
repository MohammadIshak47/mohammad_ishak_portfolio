# Mohammad Ishak — Portfolio

A recruiter-focused developer portfolio built with **React 18, TypeScript, and Tailwind CSS**.
Fully responsive, fast to scan, and built around 8 real shipped projects with live demo
and GitHub links.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- lucide-react (icons)

## Getting started

This project needs internet access to install its dependencies, so run it on your own
machine (not inside this sandbox).

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
```

## Build for production

```bash
npm run build     # type-checks and outputs to /dist
npm run preview   # preview the production build locally
```

## Add your resume PDF

The Contact section has a "Download Resume" button that links to `/Mohammad_Ishak_Resume.pdf`.
Drop your resume PDF into the `public/` folder with that exact filename and the button will
work automatically. A placeholder note in `public/` explains the same thing — delete it once
your resume is added.

## Deploy

Any static host works. Two of the easiest:

**Netlify**
1. Push this project to a GitHub repo.
2. In Netlify: "Add new site" → "Import an existing project" → pick the repo.
3. Build command: `npm run build`, publish directory: `dist`.

**Vercel**
1. Push this project to a GitHub repo.
2. In Vercel: "Add New Project" → import the repo. Vercel auto-detects Vite.

## Project structure

```
src/
  components/     Navbar, Hero, About, Skills, Projects, ProjectCard, Experience, Contact, Footer
  data/
    projects.ts   All 8 project entries (title, description, tech, links)
    skills.ts     Skills grouped by category
  App.tsx
  main.tsx
  index.css       Tailwind + custom design tokens (colors, chips, buttons, animations)
```

## Customizing content

- **Projects**: edit `src/data/projects.ts`. Each entry has `path` (shown as a file path
  eyebrow), `summary`, `highlights` (bullet points), `tech`, and `links` (Code / Live Demo).
  A project with no live deployment simply omits the "Live Demo" link — see `mindtrack` and
  `corporate-asset-tracker` for examples.
- **Skills**: edit `src/data/skills.ts`.
- **Experience**: edit `src/components/Experience.tsx`.
- **Colors/fonts**: edit the token list in `tailwind.config.js` (`ink`, `paper`, `signal`,
  `teal` colors) and the Google Fonts `<link>` in `index.html` (Inter + JetBrains Mono).

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (see `index.css`).
- Keyboard-focusable nav and links use default browser focus rings — don't remove them if
  you customize further.
- No large images or animation libraries, so it stays fast on mobile connections.
