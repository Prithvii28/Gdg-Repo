# GDG RBU: Frontend Task

Responsive Next.js 14 + TypeScript conversion of the GDG RBU Figma design.

## Features
- Responsive (mobile, tablet, desktop), semantic HTML, accessible FAQ accordion
- Dark / light mode (saved in localStorage, respects system preference)
- Animations: hero entrance, floating shapes, hover and accordion transitions (honors `prefers-reduced-motion`)
- AI assistant ("Ask GDG AI"): `/api/chat` uses Claude when `ANTHROPIC_API_KEY` is set, otherwise falls back to FAQ matching

## Setup
```bash
npm install
cp .env.example .env.local   # optional: add ANTHROPIC_API_KEY
npm run dev                  # http://localhost:3000
```

## Structure
`app/` routes + API, `components/` UI sections, `lib/faqs.ts` shared FAQ data. Put the team photo at `public/team.jpg`.

## Deploy
Import the repo in Vercel (optionally add `ANTHROPIC_API_KEY` in Environment Variables) and deploy.
