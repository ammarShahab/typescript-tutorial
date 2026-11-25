# TypeScript Tutorial & Learning Repo

A personal TypeScript learning repository containing standalone lesson scripts and practice exercises.

## Overview

There is no single application entrypoint. Each script in `src/` (`app1.ts` through `app9.ts`, `practice.ts`, `exercise.ts`, `practiceExpress.ts`, etc.) is an independent lesson or practice module.

## Lesson Sequence

The numbered lessons run sequentially from `app1.ts` through `app9.ts`:

1. Primitives — `src/app1.ts`
2. Non Primitives — `src/app1.ts`
3. Special Types — `src/app1.ts`
4. Rest operator — `src/app2.ts`
5. Spread Operator — `src/app2.ts`
6. Destructuring — `src/app2.ts`
7. Object type and type alias — `src/app2.ts`
8. Literal types — `src/app3.ts`
9. Type Narrowing — `src/app3.ts`
10. Generics — `src/app4.ts`
11. Constraints — `src/app4.ts`
12. Enum Type — `src/app5.ts`
13. `as const` instead of enum — `src/app5.ts`
14. TypeScript OOP — `src/app6.ts`
15. Getter and Setter — `src/app7.ts`
16. Conditional Type — `src/app8.ts`
17. Implement keyword — `src/app9.ts`

Practice/exercise modules (`exercise.ts`, `calculator_exercise.ts`, `practice.ts`, `practiceExpress.ts`, `apiResponse.ts`, `user_profile.ts`) carry no sequence numbers and are referenced from within the numbered lessons.

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
