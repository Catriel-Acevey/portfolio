## Context

See `proposal.md` and `PRODUCT.md` for background and product principles. The portfolio uses Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Data is centralized in `src/data/portfolioData.ts` and typed in `src/types/index.ts`.

## Goals / Non-Goals

**Goals:**
- Create a cohesive, high-craft, dark-themed developer portfolio UI following Impeccable principles.
- Implement modular, single-responsibility React components in `src/components/`.
- Ensure mobile-first responsive layout, smooth navigation, and WCAG AA accessibility.
- Maintain zero layout shift and fast static generation compatibility.

**Non-Goals:**
- Modifying backend endpoints or database schemas (static portfolio).
- Complex multi-page routing (single-page landing structure with clear sections).
- Third-party heavy animation libraries (use clean CSS transitions and Tailwind utilities).

## Decisions

1. **Component Modularization Structure:**
   - `src/components/layout/Navbar.tsx`: Fixed top bar with blur backdrop, section links, and quick CV trigger.
   - `src/components/sections/Hero.tsx`: High-impact intro, status badge, headline, bio, and main CTA buttons.
   - `src/components/sections/Projects.tsx` & `ProjectCard.tsx`: Grid of featured projects with image preview, tags, and action buttons.
   - `src/components/sections/Experience.tsx`: Timeline list of roles, periods, and accomplishments.
   - `src/components/sections/Skills.tsx`: Categorized badges with iconography/category grouping.
   - `src/components/sections/Contact.tsx`: Direct email trigger and social connectivity.
   - `src/components/layout/Footer.tsx`: Subtle copyright and social links.
   *Rationale*: Clean separation of concerns, easy maintenance, and simple testing.

2. **Styling & Visual Design Tokens (Tailwind CSS):**
   - Palette: Zinc/neutral dark tones (`bg-zinc-950`, `border-zinc-800`, `text-zinc-100`, `text-zinc-400`) with high-contrast accent highlights (emerald/teal for status and active states).
   - Typography: Clean sans-serif hierarchy with tracking and font-weight modulation for crisp readability.
   - Micro-interactions: Subtle hover states on cards (`hover:border-zinc-700`, `hover:-translate-y-0.5`, smooth transitions).

3. **Data Binding:**
   - Components receive structured props or directly consume `@/data/portfolioData` ensuring type safety from `@/types`.

## Risks / Trade-offs

- *[Risk]* Missing project screenshots or broken image URLs → *Mitigation*: Fallback styling/gradient placeholder in `ProjectCard` if image fails to load or is not yet provided.
- *[Risk]* Content overflow on small mobile screens → *Mitigation*: Flex-wrap and responsive grid configurations (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
