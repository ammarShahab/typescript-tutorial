# AGENTS.md

## What this repo is

Personal TypeScript learning repo (no app framework, no tests, no lint/format config). Each file in `src/` is a **standalone lesson script** (`app1.ts`–`app8.ts`, `practice.ts`, `exercise.ts`, etc.) meant to be run individually — there is no single entrypoint.

## Commands

- Run one lesson directly: `npx ts-node src/app8.ts`
- Dev server (Express on port 3000): `npm run dev` — runs **only** `src/practiceExpress.ts` via nodemon + ts-node
- Build all: `npm run build` (= `tsc`) → outputs to `dist/`
- Verify types without emitting: `npx tsc --noEmit`

## Gotchas

- `"type": "module"` + `module: nodenext`: **relative imports must use the `.js` extension** even in `.ts` files (e.g. `import { x } from "./practice.js"`).
- Strict mode is on, including `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes` — array indexing returns `T | undefined`.
- After editing logic imported by `practiceExpress.ts`, rebuild (`npm run build`) before running `node dist/practiceExpress.js`, or just use `npm run dev` for auto-reload.
- Test the Express endpoint with POST to `/exercise` with JSON body `{ "daily_exercises": [3,0,2,4.5,0,3,4], "target": 2 }` (requires exactly 7 numeric values).
