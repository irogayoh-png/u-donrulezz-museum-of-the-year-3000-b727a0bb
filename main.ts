// Museum of the Year 3000 — museum label from the year 3000.
// Writes a single line (103 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL =
  "Group chat, c. 2025. Sacred scroll, unrolled daily, on which forty-seven people argued and nobody left.";

// Gate: the entry must be 1-200 characters, a single line.
if (LABEL.length < 1 || LABEL.length > 200 || LABEL.includes("\n")) {
  throw new Error(`label must be 1-200 chars on one line, got ${LABEL.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LABEL);
