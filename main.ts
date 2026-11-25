// mf-dream-vacation-emoji-r2 — make.fun "One Emoji, One Dream Vacation" entry.
// My whole dream vacation, summed up in a single emoji. This script
// writes that emoji to entry.txt in the output directory the grader
// provides.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one emoji for my dream vacation.
const emoji = "🏝️";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
// entry.txt holds exactly one emoji plus a trailing newline —
// the whole entry is the island emoji, nothing else.
writeFileSync(target, emoji + "\n", "utf8");
console.log(`Wrote one emoji to ${target}`);
