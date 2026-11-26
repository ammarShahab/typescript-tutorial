# TypeScript Tutorial & Learning Repo

A personal TypeScript learning repository containing standalone lesson scripts and practice exercises.

## Overview

There is no single application entrypoint. Each script in `src/` (`app1.ts` through `app9.ts`, `practice.ts`, `exercise.ts`, `practiceExpress.ts`, etc.) is an independent lesson or practice module.

## Lesson Sequence

The numbered lessons run sequentially from `app1.ts` through `app9.ts`. Subsections are listed as nested bullets using `N.letter.` format:

1. Primitives — `src/app1.ts`
   - `1.a.` string
   - `1.b.` number
   - `1.c.` boolean
2. Non Primitives — `src/app1.ts`
   - `2.a.` Array
   - `2.b.` tuples
3. Special Types — `src/app1.ts`
   - `3.a.` any type
     - `3.a.i.` JSON.parse returns "any"
     - `3.a.ii.` variable without initialization
   - `3.b.` unknown type
   - `3.c.` void type
   - `3.d.` null and undefined types
   - `3.e.` Function type signature
   - `3.f.` never type
   - `3.g.` Nullish Coalescing and optional chaining
   - `3.h.` Arrow function
4. Rest operator — `src/app2.ts`
5. Spread Operator — `src/app2.ts`
6. Destructuring — `src/app2.ts`
7. Object type and type alias — `src/app2.ts`
   - `7.a.` Object structure typing
   - `7.b.` Type alias
   - `7.c.` type interface
8. Literal types — `src/app3.ts`
9. Type Narrowing — `src/app3.ts`
   - `9.a.` typeof operator type guard
   - `9.b.` in operator type guard
   - `9.c.` instanceof type guard
   - `9.d.` creating a custom type guard
10. Generics — `src/app4.ts`
11. Constraints — `src/app4.ts`
    - `11.a.` KeyOf constraint with generics
12. Enum Type — `src/app5.ts`
13. `as const` instead of enum — `src/app5.ts`
14. Conditional Type — `src/app6.ts`
    - `14.a.` Generic conditional type
    - `14.b.` Conditional type with Unions
    - `14.c.` Conditional type with infer
    - `14.d.` Constraints conditional type
15. TypeScript OOP — `src/app7.ts`
    - `15.a.` Constructor
    - `15.b.` Modifier (public, private, protected)
    - `15.c.` Private vs Protected Modifier Example
    - `15.d.` Inheritance
16. Getter and Setter — `src/app8.ts`
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
