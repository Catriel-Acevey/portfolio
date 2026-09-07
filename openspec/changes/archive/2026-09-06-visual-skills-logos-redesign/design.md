## Context

See `proposal.md`. The user wants a much more visual skill section featuring real technology logos rather than simple text chips, matching the reference image they provided.

## Goals / Non-Goals

**Goals:**
- Implement precise vector logos for JavaScript, TypeScript, Python, FastAPI, React, Next.js, Redux, Node.js, Express, PostgreSQL, Docker, Tailwind CSS, Sass, HTML5, and CSS3.
- Build a gorgeous grid of individual technology cards with icons and labels, grouped by categories or presented in a unified high-craft showcase.
- Ensure 0 Impeccable detector warnings and successful build.

**Non-Goals:**
- Modifying other sections of the portfolio.

## Decisions

### Decision: Dedicated vector logo icons in `Icons.tsx` and card grid in `Skills.tsx`
- **Rationale**: Clean, self-contained SVG components guarantee crisp rendering at any resolution without external image loading dependencies or broken asset paths.

## Risks / Trade-offs

- *[Risk]* Visual clutter from too many different icon colors → *[Mitigation]* Place each logo inside a uniform rounded dark card (`bg-zinc-900/60 border border-zinc-800`) with consistent padding and subtle hover glow, anchoring the colorful logos harmoniously within the dark theme.
