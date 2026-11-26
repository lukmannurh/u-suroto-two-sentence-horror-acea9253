// Two-Sentence Horror — u-suroto-two-sentence-horror-acea9253
// Writes one horror story of exactly two sentences to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Node 22+ runs this TypeScript directly.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Exactly two sentences, 182 characters (+1 trailing newline = 183 bytes).
const TEXT =
  "I keep a spare key under the doormat and have never once used it. " +
  "This morning the mat was folded back, the key was gone, and the deadbolt that only locks from the inside was thrown.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
