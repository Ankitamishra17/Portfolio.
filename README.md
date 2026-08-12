# Ankita Mishra — Portfolio (Next.js + JavaScript)

A premium, animated developer portfolio built with **Next.js 14 (App Router)**
in plain **JavaScript** (no TypeScript) and **Tailwind CSS**, featuring a
Three.js hero animation, custom cursor, light/dark theme toggle, and 3D tilt
project cards.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy — things to update

1. **Resume** — add your real resume PDF at `public/resume.pdf`
   (referenced by the Download Resume button and the side-rail Resume icon).
2. **Social links** — update the LinkedIn URL in:
   - `components/SideRail.jsx`
   - `components/Contact.jsx`
3. **Contact details** — update email/phone in `components/Contact.jsx`.
4. **Project images** — cards currently use placeholder images from
   `picsum.photos`. Swap the `src={...picsum.photos/seed/...}` line in
   `components/Projects.jsx` for your real screenshots (drop them in
   `public/projects/` and reference them, e.g. `/projects/hrms.png`).
5. **Project & experience data** — edit `data/projects.js` and
   `data/experience.js` directly; the page re-renders automatically.

## Project structure

```
app/
  layout.jsx         — fonts (next/font), metadata, mounts <CustomCursor/>
  page.jsx            — assembles all sections
  globals.css         — all custom styling (CSS variables drive theming)
components/
  Header.jsx          — nav, active-link highlighting, theme toggle, mobile menu
  SideRail.jsx        — fixed LinkedIn / GitHub / Resume / Email rail
  Hero.jsx / Hero3D.jsx — hero content + Three.js wireframe scene
  CustomCursor.jsx    — custom dot + trailing ring cursor (desktop only)
  About.jsx, Skills.jsx, Experience.jsx, Freelance.jsx, Contact.jsx, Footer.jsx
  Projects.jsx        — project grid, show-more, 3D tilt, GitHub CTA
  RevealObserver.jsx  — scroll-reveal animations for `.reveal` elements
data/
  projects.js, experience.js
```

## No TypeScript, no `.ts`/`.tsx` files

Everything here is plain JavaScript (`.js` / `.jsx`). Path aliases (`@/...`)
are configured in `jsconfig.json` — same idea as `tsconfig.json`, just for
plain JS projects, so `import X from "@/components/X"` works without long
relative paths.

## Notes

- **Theme toggle** does not persist across page reloads by default (no
  `localStorage` is used). To persist it, store the value in `localStorage`
  inside `Header.jsx`'s `toggleTheme` function and read it back in a
  `useEffect` on mount.
- The Three.js hero scene and custom cursor automatically disable themselves
  on touch devices and when the browser's "reduce motion" preference is on.
- Deploy easily to **Vercel**, **Render**, or **Railway** — all three are
  already referenced in the Skills section.
