import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC_DIR = path.join(ROOT, "src", "assets");
const GEN_DIR = path.join(SRC_DIR, "generated");
const OUT_DIR = path.join(SRC_DIR, "optimized");

/**
 * Keep widths modest so below-fold assets stay light.
 * Home hero LCP stays on public/hero.webp (+ srcset) — not rebuilt here.
 */
const LEGACY_SLOTS = [
  { file: "theglamhouse_brand_pindown.io_1783032055.jpg", name: "facial-steam", width: 1200 },
  { file: "delphinedebeufbeautyskincare_pindown.io_1783032254.jpg", name: "dermaplaning", width: 1000 },
  { file: "qnastefanova19_pindown.io_1783032400.jpg", name: "gua-sha", width: 1000 },
  { file: "soleiltansnj_pindown.io_1783032384.jpg", name: "glowing-skin", width: 1200 },
  { file: "wsverhoef_pindown.io_1783032518.jpg", name: "dried-flowers", width: 1400 },
  { file: "charleswright1945_pindown.io_1783032324.jpg", name: "peony-face", width: 1000 },
  { file: "maelysmagnou_pindown.io_1783032532.jpg", name: "silk-fabric", width: 1200 },
  { file: "authorhaileyverkolf_pindown.io_1783032498.jpg", name: "silk-ribbon", width: 1400 },
];

const GENERATED_SLOTS = [
  { file: "services-hero.png", name: "services-hero", width: 1600, quality: 78 },
  { file: "booking-hero.png", name: "booking-hero", width: 1600, quality: 78 },
  { file: "contact-hero.png", name: "contact-hero", width: 1600, quality: 78 },
  { file: "book-cta.png", name: "book-cta", width: 1400, quality: 76 },
  { file: "spa-room.png", name: "spa-room", width: 1400, quality: 78 },
  { file: "products-flatlay.png", name: "products-flatlay", width: 1000, quality: 78 },
  { file: "about-accent.png", name: "about-accent", width: 900, quality: 78 },
  { file: "featured-facial.png", name: "featured-facial", width: 1000, quality: 78 },
  { file: "featured-nano.png", name: "featured-nano", width: 1000, quality: 78 },
  { file: "featured-led.png", name: "featured-led", width: 1000, quality: 78 },
  { file: "promo-glow.png", name: "promo-glow", width: 1200, quality: 78 },
  { file: "nav-services.png", name: "nav-services", width: 640, quality: 76 },
  { file: "nav-booking.png", name: "nav-booking", width: 640, quality: 76 },
  { file: "nav-studio.png", name: "nav-studio", width: 640, quality: 76 },
  { file: "nav-contact.png", name: "nav-contact", width: 640, quality: 76 },
];

await mkdir(OUT_DIR, { recursive: true });

async function optimizeSlot({ input, name, width, quality = 78, thumb = true }) {
  const output = path.join(OUT_DIR, `${name}.webp`);

  await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(output);

  if (thumb) {
    const thumbOutput = path.join(OUT_DIR, `${name}-thumb.webp`);
    await sharp(input)
      .rotate()
      .resize({ width: 560, withoutEnlargement: true })
      .webp({ quality: 74, effort: 6 })
      .toFile(thumbOutput);
  }

  console.log(`optimized ${name}`);
}

for (const slot of LEGACY_SLOTS) {
  await optimizeSlot({
    input: path.join(SRC_DIR, slot.file),
    name: slot.name,
    width: slot.width,
  });
}

for (const slot of GENERATED_SLOTS) {
  await optimizeSlot({
    input: path.join(GEN_DIR, slot.file),
    name: slot.name,
    width: slot.width,
    quality: slot.quality,
  });
}

// Keep optimized/hero.webp in sync for OG / imports, but do not touch public/hero* (LCP).
const heroPng = path.join(SRC_DIR, "hero.png");
await sharp(heroPng)
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 80, effort: 6 })
  .toFile(path.join(OUT_DIR, "hero.webp"));

console.log("done");
