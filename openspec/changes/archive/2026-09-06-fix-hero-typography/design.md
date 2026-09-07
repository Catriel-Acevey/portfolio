## Context

See `proposal.md` for motivation. In `src/components/sections/Hero.tsx`, the `h1` element wraps `userProfile.name` in `<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400">`. In addition to causing the letter 'y' to become overly dark and washed out, decorative gradient text violates the Impeccable design system guidelines outlined in `DESIGN.md` and the craft floor.

## Goals / Non-Goals

**Goals:**
- Replace the gradient text on `userProfile.name` with crisp, solid display typography (`text-zinc-100` / `text-white`).
- Ensure consistent contrast and visual weight across "Hi, I'm", "Catriel Acevey", and the trailing ".".
- Pass Impeccable detector checks with zero anti-pattern warnings.

**Non-Goals:**
- Altering the font family or overall Hero layout structure.
- Changing copy or other section typography.

## Decisions

### Decision: Remove gradient clipping in favor of solid high-contrast text
- **Rationale**: Impeccable craft rules explicitly state "Emphasis comes from weight or size, not gradient text". Solid white/zinc-100 ensures maximum contrast (WCAG AA/AAA compliant against `#09090b`), sharp character rendering, and zero clipping or color drop-off on descender glyphs like 'y'.
- **Alternatives considered**:
  - *Lightening the gradient stops (e.g., `from-white via-zinc-100 to-zinc-200`)*: Still prone to subtle clipping artifacts with `bg-clip-text` on certain browsers and violates the core design principle against gradient text slop.

## Risks / Trade-offs

- *[Risk]* Heading loses decorative color shift → *[Mitigation]* The ambient subtle mesh glow (`emerald-500/10` and `indigo-500/10`) and availability badge provide sufficient depth, while solid typography projects stronger technical authority.
