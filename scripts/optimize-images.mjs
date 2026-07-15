import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC_DIR = path.join(ROOT, "src", "assets");
const OUT_DIR = path.join(SRC_DIR, "optimized");

const SLOTS = [
  { file: "theglamhouse_brand_pindown.io_1783032055.jpg", name: "facial-steam", width: 1600 },
  { file: "delphinedebeufbeautyskincare_pindown.io_1783032254.jpg", name: "dermaplaning", width: 1000 },
  { file: "qnastefanova19_pindown.io_1783032400.jpg", name: "gua-sha", width: 1000 },
  { file: "soleiltansnj_pindown.io_1783032384.jpg", name: "glowing-skin", width: 1200 },
  { file: "wsverhoef_pindown.io_1783032518.jpg", name: "dried-flowers", width: 1600 },
  { file: "charleswright1945_pindown.io_1783032324.jpg", name: "peony-face", width: 1000 },
  { file: "maelysmagnou_pindown.io_1783032532.jpg", name: "silk-fabric", width: 1400 },
  { file: "Nataliechabanphotography_pindown.io_1783032214.jpg", name: "facial-mist", width: 1400 },
  { file: "authorhaileyverkolf_pindown.io_1783032498.jpg", name: "silk-ribbon", width: 1600 },
];

await mkdir(OUT_DIR, { recursive: true });

for (const slot of SLOTS) {
  const input = path.join(SRC_DIR, slot.file);
  const output = path.join(OUT_DIR, `${slot.name}.webp`);

  await sharp(input)
    .rotate()
    .resize({ width: slot.width, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(output);

  const thumbOutput = path.join(OUT_DIR, `${slot.name}-thumb.webp`);
  await sharp(input)
    .rotate()
    .resize({ width: 600, withoutEnlargement: true })
    .webp({ quality: 76, effort: 6 })
    .toFile(thumbOutput);

  console.log(`optimized ${slot.name}`);
}

const heroPng = path.join(SRC_DIR, "hero.png");
const heroOut = path.join(OUT_DIR, "hero.webp");
await sharp(heroPng)
  .resize({ width: 1920, withoutEnlargement: true })
  .webp({ quality: 82, effort: 6 })
  .toFile(heroOut);

console.log("done");
