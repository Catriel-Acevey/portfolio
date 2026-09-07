# Design: Open CV in New Tab

## Architecture & Data Flow
- Remove `download` attribute from CV links in `src/components/sections/Hero.tsx` and `src/components/layout/Navbar.tsx`.
- Add `target="_blank"` and `rel="noopener noreferrer"` to open in a new tab.
- Update button text from "Download CV" to "View CV".
