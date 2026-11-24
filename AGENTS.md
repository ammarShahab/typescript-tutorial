# AGENTS.md

## What this repo is

Personal TypeScript learning repo (no app framework, no automated test suite). Each file in `src/` is a **standalone lesson script** (`app1.ts`–`app9.ts`, `practice.ts`, `exercise.ts`, `practiceExpress.ts`, etc.) meant to be run individually. There is no single entrypoint.

## Commands

- Run any lesson script directly (using ts-node): `npx ts-node src/app9.ts`
- Run a specific compiled file from `dist/` after building: `node dist/app9.js`
- Dev server (Express API on port 3000): `npm run dev` (runs `src/practiceExpress.ts` via nodemon + ts-node)
- Build all files: `npm run build` (`tsc` → outputs to `dist/`)
- Watch mode / compile continuously: `npx tsc --w`
- Verify types without emitting: `npx tsc --noEmit`

## Gotchas & Conventions

- `"type": "module"` + `module: nodenext`: **Relative imports must use the `.js` extension** even in `.ts` files (e.g., `import { x } from "./practice.js"`).
- Strict TypeScript configuration is enabled, including `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes` (array indexing returns `T | undefined`).
- Express app (`src/practiceExpress.ts`) endpoint testing: POST to `/exercise` with JSON body `{ "daily_exercises": [3, 0, 2, 4.5, 0, 3, 4], "target": 2 }` (expects exactly 7 numeric values).
