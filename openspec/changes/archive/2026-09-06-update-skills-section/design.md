## Context

See `proposal.md`. The previous skills section used basic text chips and generic placeholder categorization. The user provided reference visuals showing a modern, iconic tech stack grid.

## Goals / Non-Goals

**Goals:**
- Update `src/data/portfolioData.ts` with accurate tech stack items.
- Redesign `src/components/sections/Skills.tsx` with a high-craft visual layout (grid cards, icons or stylized monogram badges, subtle glow, clear categorization).
- Maintain WCAG contrast and responsive grid layout across mobile and desktop.

**Non-Goals:**
- Changing other portfolio sections or global layout structure.

## Decisions

### Decision: Categorized visual cards with rich badge styling
- **Rationale**: Grouping skills into logical categories (Frontend & Languages, Backend & Databases, DevOps & Tools) with polished individual skill badges provides immediate scannability and professional polish.
- **Alternatives considered**:
  - *Flat icon wall*: Hard to parse by expertise area.
  - *Plain text lists*: Lacks visual engagement.

## Risks / Trade-offs

- *[Risk]* Too much visual noise → *[Mitigation]* Use subdued dark backgrounds (`zinc-900/40`), crisp borders (`zinc-800`), and subtle hover accents aligned with `DESIGN.md`.
