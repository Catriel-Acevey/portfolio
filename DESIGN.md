---
name: Catriel Acevey Portfolio
description: Modern, high-craft developer portfolio designed for recruiters and engineering leaders
colors:
  bg-base: "#09090b"
  bg-surface: "#121215"
  bg-surface-elevated: "#18181b"
  border-subtle: "#27272a"
  border-highlight: "#3f3f46"
  text-primary: "#fafafa"
  text-secondary: "#a1a1aa"
  text-muted: "#71717a"
  accent-emerald: "#10b981"
  accent-emerald-subtle: "rgba(16, 185, 129, 0.12)"
  accent-sky: "#38bdf8"
  accent-indigo: "#6366f1"
typography:
  display:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  h2:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  h3:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.05em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.text-primary}"
    textColor: "{colors.bg-base}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "{colors.bg-surface-elevated}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  card:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System & Visual Direction

## Overview
A high-craft, precision-engineered dark aesthetic tailored for showcasing technical engineering skills to recruiters, engineering managers, and technical leads. The interface emphasizes typography hierarchy, crisp micro-borders, functional accents, and zero visual clutter.

## Colors
- **Neutral Palette:**
  - Base Background: `#09090b` (Deep Zinc)
  - Surface Background: `#121215` (Elevated dark plane)
  - Card/Container Surface: `#18181b` (Interactive item backgrounds)
  - Subtle Borders: `#27272a` (Crisp separation strokes)
  - Highlight Borders: `#3f3f46` (Hover/focus states)
- **Text & Foreground:**
  - Primary Text: `#fafafa` (High readability, main headings & active links)
  - Secondary Text: `#a1a1aa` (Body text and descriptions)
  - Muted Text: `#71717a` (Metadata, dates, tags)
- **Functional Accents:**
  - Emerald (`#10b981`): Status badges ("Available for hire"), verified badges, key highlights.
  - Sky/Indigo (`#38bdf8` / `#6366f1`): Subtle gradient glows, skill categorizations.

## Typography
- **Display & Headings:** System UI sans-serif stack with tight negative tracking (`-0.02em` to `-0.03em`) for punchy titles.
- **Body:** Neutral sans-serif with comfortable line-height (`1.6`) for rapid scanning.
- **Monospace:** Monospace labels for section index tags, dates, and code snippets.

## Layout
- **Max Width:** `max-w-5xl` centered container with fluid lateral padding (`px-6 sm:px-8`).
- **Vertical Rhythm:** Generous section spacing (`py-16 md:py-24`) establishing clear cognitive boundaries between sections.
- **Grid Systems:** Single column on mobile viewports seamlessly scaling to 2-column and 3-column responsive grids on tablets and desktops.

## Elevation & Depth
- **Tonal Layering:** Depth is primarily established through surface luminescence steps (`#09090b` → `#121215` → `#18181b`) and 1px border outlines rather than heavy drop shadows.
- **Subtle Ambient Glow:** Subtle radial gradient backdrops highlighting hero cards and project showcases.

## Shapes
- **Corner Radii:** Consistent radius scale: `rounded-lg` (10px) for buttons/badges, `rounded-2xl` (16px) for feature cards.
- **Pills:** Full rounded pills (`rounded-full`) for status indicators and technology tags.

## Components
- **Navbar:** Sticky top bar with glassmorphism blur (`backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80`).
- **Hero:** Asymmetric badge, high-contrast headline, concise bio, and primary CTA buttons.
- **Project Cards:** Card structure featuring project preview, technology badges, description, and hover-elevated links.
- **Experience Timeline:** Vertical node-and-line timeline highlighting roles, durations, and impactful bullet points.
- **Skills Matrix:** Categorized grid of interactive chips with category icons.
- **Footer:** Minimalist closing with copyright and social links.

## Do's and Don'ts
- **DO:**
  - Maintain WCAG AA contrast on all text and actionable elements.
  - Provide visible focus rings for keyboard navigation (`focus-visible:ring-2 focus-visible:ring-emerald-500`).
  - Use real data from `src/data/portfolioData.ts`.
- **DON'T:**
  - Don't use overly aggressive flashing animations; prioritize fast, smooth transitions (150-200ms ease-out).
  - Don't hardcode text inside components when data belongs in `portfolioData.ts`.
  - Don't introduce horizontal scroll on mobile devices.
