// Bureaucratic incident report: the toaster files a formal case about bread jammed in its slot.
import { mkdirSync, writeFileSync } from "node:fs";

const sentence = "ERROR E-104: Bread jammed in Slot 2. Case opened. The accused slice awaits its written verdict.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
