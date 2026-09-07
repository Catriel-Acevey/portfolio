## Why

The name headline in the Hero section (`Hi, I'm Catriel Acevey.`) currently applies a text gradient (`text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400`), which causes the letter 'y' at the end of the name to fade into dark zinc-400 (`#a1a1aa`) right next to a solid bright white period (`.`). This creates a noticeable visual defect where the 'y' appears dimmed, clipped, and inconsistent in contrast. Furthermore, Impeccable design standards flag decorative gradient text as an anti-pattern that compromises legibility.

## What Changes

- Remove decorative `bg-clip-text` gradient from the developer name in `Hero.tsx`.
- Standardize the name and headline typography to crisp, solid high-contrast text (`text-zinc-100` / `text-white`) in alignment with `DESIGN.md` and Impeccable craft standards.
- Ensure the name, surrounding greeting text, and punctuation render cleanly across all device widths without color dropoff or glyph clipping.

## Capabilities

### New Capabilities
- `hero-typography`: Crisp, high-contrast headline typography in the Hero section adhering to Impeccable craft standards without clipping or contrast degradation.

### Modified Capabilities

## Impact

- Affected component: `src/components/sections/Hero.tsx`.
- Visual impact: Eliminates the dimmed 'y' visual bug, improves WCAG contrast compliance, and enforces solid typography hierarchy.
