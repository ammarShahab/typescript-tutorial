# TypeScript Tutorial & Learning Repo

A personal TypeScript learning repository containing standalone lesson scripts and practice exercises.

## Overview

There is no single application entrypoint. Each script in `src/` (`app1.ts` through `app9.ts`, `practice.ts`, `exercise.ts`, `practiceExpress.ts`, etc.) is an independent lesson or practice module.

## Commands

- **Run a lesson directly:**
  ```bash
  npx ts-node src/app9.ts
  ```
- **Build all files (outputs to `dist/`):**
  ```bash
  npm run build
  ```
- **Run a specific compiled file:**
  ```bash
  node dist/app9.js
  ```
- **Continuous watch mode (auto-compile on change):**
  ```bash
  npx tsc --w
  ```
- **Run Express dev server (port 3000):**
  ```bash
  npm run dev
  ```
- **Type-check without emitting:**
  ```bash
  npx tsc --noEmit
  ```

## Gotchas

- **Module Resolution (`nodenext`):** Because `"type": "module"` is set in `package.json`, relative imports in `.ts` source files must use the `.js` extension (e.g., `import { x } from "./practice.js"`).
- **Strict Mode:** Strict TypeScript compiler options are enabled (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`), meaning array lookups return `T | undefined`.
