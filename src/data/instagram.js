export const INSTAGRAM_HANDLE = "k_aestheticskin";
export const INSTAGRAM_URL = "https://www.instagram.com/k_aestheticskin/";

/**
 * Live auto-updating feed (optional).
 * Instagram blocks direct client-side fetching — use a free widget service instead:
 * SnapWidget, Elfsight, Behold, or LightWidget. Connect @k_aestheticskin, copy the
 * iframe embed URL, and paste it here. Leave null to use the highlight grid below.
 *
 * @example "https://snapwidget.com/embed/123456"
 */
export const INSTAGRAM_FEED_EMBED_SRC = null;

/** Individual post/reel URLs — each renders as an official Instagram embed card */
export const INSTAGRAM_POSTS = [];

export const INSTAGRAM_HIGHLIGHTS = [
  {
    id: "treatments",
    title: "Treatments",
    subtitle: "Facials, peels & more",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "tips",
    title: "Skincare Tips",
    subtitle: "Expert advice daily",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "results",
    title: "Client Results",
    subtitle: "Real transformations",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "offers",
    title: "Exclusive Offers",
    subtitle: "Follower-only deals",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
  },
];
