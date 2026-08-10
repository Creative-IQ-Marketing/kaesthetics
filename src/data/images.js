import { navImages } from "./images/nav";
import { homeImages } from "./images/home";
import { pageHeroImages } from "./images/pages";

/**
 * Unique asset per visual slot — no cross-section repeats.
 * Home LCP hero stays on public/hero.webp (+ srcset); heroLocal is for OG/meta only.
 */
export const images = {
  ...pageHeroImages,
  ...homeImages,
  nav: navImages,
};
