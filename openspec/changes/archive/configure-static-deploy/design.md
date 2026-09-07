# Design: Configure Static Export and Deploy to Firebase

## Architecture & Data Flow
- Update `next.config.ts` to enable static export with `output: "export"`.
- Update `firebase.json` to set the `public` directory to `out`.
- Ensure images are unoptimized for static export compatibility.
