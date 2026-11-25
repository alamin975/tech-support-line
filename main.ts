// Have You Tried Turning It Off? — one funny line from a hopeless tech
// support agent to a desperate customer. Writes the entry to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY = "Have you tried turning it off and on again? No? Then have you tried blaming the Wi-Fi like the rest of us?";

// writeEntry: writes the entry line exactly, UTF-8, no trailing newline.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

writeEntry();
