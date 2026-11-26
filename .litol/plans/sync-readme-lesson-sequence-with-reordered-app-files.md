# Sync README lesson sequence with reordered app files

_Written 2026-11-26_

# Sync README "Lesson Sequence" with the reordered `src/app*.ts` files

## Goal

`README.md` currently lists lessons 14–16 against the wrong files because `src/app6.ts`, `src/app7.ts`, and `src/app8.ts` were reordered. Re-derive the sequence from the authoritative `//! N.` headers inside every lesson file and rewrite the **Lesson Sequence** section so topic ↔ file mapping is correct again.

No source/spec files need to change — only `README.md`.

## Ground truth (extracted from the files)

| # | Topic (from `//! N.` header) | File |
|---|---|---|
| 1 | Primitives | `src/app1.ts` |
| 2 | Non Primitives | `src/app1.ts` |
| 3 | Special Types | `src/app1.ts` |
| 4 | Rest operator | `src/app2.ts` |
| 5 | Spread Operator | `src/app2.ts` |
| 6 | Destructuring | `src/app2.ts` |
| 7 | Object type and type alias | `src/app2.ts` |
| 8 | Literal types | `src/app3.ts` |
| 9 | Type Narrowing | `src/app3.ts` |
| 10 | Generics | `src/app4.ts` |
| 11 | Constraints (+ 11.a `keyof` constraints) | `src/app4.ts` |
| 12 | Enum Type | `src/app5.ts` |
| 13 | `as const` instead of enum | `src/app5.ts` |
| 14 | **Conditional Type** | **`src/app6.ts`** |
| 15 | **TypeScript OOP** | **`src/app7.ts`** |
| 16 | **Getter and Setter** | **`src/app8.ts`** |
| 17 | Implement keyword | `src/app9.ts` |

### Drift found in the current README

| README says | Actually is |
|---|---|
| 14. Conditional Type — `src/app8.ts` | 14. Conditional Type — `src/app6.ts` |
| 15. TypeScript OOP — `src/app6.ts` | 15. TypeScript OOP — `src/app7.ts` |
| 16. Getter and Setter — `src/app7.ts` | 16. Getter and Setter — `src/app8.ts` |

Rows 1–13 and 17 are correct; the Conditional Type / OOP / Getter-Setter trio simply rotated one file each.

## Files it would touch

- `README.md` — replace only the `## Lesson Sequence` block (everything from the `## Lesson Sequence` heading up to, but excluding, the `## Commands` heading). No other section changes.

## Ordered steps

1. **Re-confirm the headers** — grep the `//!` markers across `src/*.ts` to make sure nothing changed since this plan was written:

   ```bash
   npx --yes grep-cli "//!" src/app*.ts    # or: search_files query "//!"
   ```

   Verified by: the printed topic list matching the table above, in order.

2. **Rewrite the Lesson Sequence section in `README.md`** with this content:

   ```markdown
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
   14. Conditional Type — `src/app6.ts`
   15. TypeScript OOP — `src/app7.ts`
   16. Getter and Setter — `src/app8.ts`
   17. Implement keyword — `src/app9.ts`

   Practice/exercise modules (`exercise.ts`, `calculator_exercise.ts`, `practice.ts`, `practiceExpress.ts`, `apiResponse.ts`, `user_profile.ts`) carry no sequence numbers and are referenced from within the numbered lessons:

   - `src/exercise.ts` — student profile exercise (from lesson 3)
   - `src/calculator_exercise.ts` — calculator exercise (from lesson 3)
   - `src/user_profile.ts` — type alias / interface exercise (from lesson 7)
   - `src/apiResponse.ts` — generics + constraints exercise (from lesson 11)
   - `src/practice.ts` — exercise-period calculator, exported and reused by `practiceExpress.ts`
   - `src/practiceExpress.ts` — Express wrapper over `practice.ts` (`POST /exercise`)
   ```

   Verified by: `README.md` renders the same ordered list as the ground-truth table, and the file paths exist.

3. **Cross-check every mapping mechanically** — for each of the 17 rows, confirm the topic text appears as a `//! N.` header inside the listed file:

   ```bash
   npx ts-node -e "console.log('sanity')"   # not needed; use search instead
   ```

   Practical check: `search_files` for `Literal types` should hit `src/app3.ts`, `Conditional Type` → `src/app6.ts`, `typescript OOP` → `src/app7.ts`, `Getter and Setter` → `src/app8.ts`, `Implement keyword` → `src/app9.ts`.

   Verified by: all 17 lookups resolve to exactly the file the README names.

4. **Confirm nothing else in the README references the old order** — `search_files` for `app6`, `app7`, `app8`, `app9` and re-read the `## Commands` section (its `npx ts-node src/app9.ts` and `node dist/app9.js` examples stay valid because `app9.ts` is still the final lesson).

   Verified by: the only `app6`–`app8` mentions left are the corrected Lesson Sequence rows.

5. **Type/consistency gate** — run `npx tsc --noEmit` to confirm the repo is still clean (doc-only edit, so this is a regression guard) and visually diff the README section.

   Verified by: `tsc --noEmit` exits 0 with no output.

## Notes / open questions

- The files use their own inline numbering (`//! 14.` in `app6.ts`, `//! 15.` in `app7.ts`, `//! 16.` in `app8.ts`), so the README should follow the in-file numbers — which is what step 2 does. If you instead want the README to lead the files, the `//!` headers would need renumbering too (currently they already agree, so no change is needed).
- `src/app6.ts` also contains two stray `// ? 16.a` / `// ? 16.c` style labels left over from the old numbering; they are cosmetic and out of scope for this README-only task.

## Next action

This plan was produced in **Plan mode** (read-only), so `README.md` has not been modified. Switch to **Agent mode** to apply step 2.
