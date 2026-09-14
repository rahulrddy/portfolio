# Rahul Origanti — Portfolio

Production portfolio for Rahul Origanti, built as a maintainable content and case-study platform rather than a single hard-coded landing page.

## Stack

- Next.js 15 / App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- MDX
- Vercel-ready deployment

## Structure

```text
app/                    routes, metadata, global styles
components/home/        home-page sections and motion layers
components/layout/      shared application shell/navigation
components/ui/          reusable UI primitives
lib/                    typed site content/configuration
public/images/          optimized static media
```

Future case studies will live in a dedicated content layer and use MDX for rich technical write-ups, architecture diagrams, and reusable React components.

## Local development

```bash
npm install
npm run dev
```

Before opening the site, add the production portrait as:

```text
public/images/rahul-origanti.png
```

Add the current resume as:

```text
public/resume.pdf
```

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Design principles

- content-first information architecture
- accessible interactions and reduced-motion support
- restrained animation rather than decorative noise
- responsive from mobile through large desktop
- centralized personal/site data instead of duplicated literals
- reusable components designed for the About and Work sections that follow
