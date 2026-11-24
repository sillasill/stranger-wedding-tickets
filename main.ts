// make.fun — "Ridiculous at First Glance, Real by the Second"
// Writes one startup pitch to /output/entry.txt.
// Deterministic: the text is a constant. No randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "We sell tickets to strangers' weddings, because couples already pay per head, so filling empty chairs with guests who pay $75 apiece for cake, dancing, and a story beats an empty chair.";

// The gate only accepts UTF-8 text of 1-200 characters, and not blank text.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`TEXT must be 1-200 characters, got ${TEXT.length}`);
}

// The brief requires one sentence: no newline may sneak in.
if (TEXT.includes("\n")) {
  throw new Error("TEXT must be a single line, no newline allowed");
}

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT, "utf8");
