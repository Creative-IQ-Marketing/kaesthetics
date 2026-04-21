import { Leaf, Flower, Droplet } from "lucide-react";

export const serviceCategories = [
  {
    id: "skin-treatments",
    label: "Skin Treatments",
    icon: Leaf,
  },
  { id: "facials", label: "Facials", icon: Flower },
  { id: "waxing", label: "Waxing", icon: Droplet },
];

export const servicesData = {
  "skin-treatments": [
    {
      title: "Nano Infusion",
      price: "$180",
      description:
        "A non-invasive treatment that creates micro pathways infusing active ingredients to pass through the layer of dead epidermal cells enhancing the skin's capability for nutrient absorption. Skin is lighter, brighter, and tighter.",
    },
    {
      title: "Dermaplaning",
      price: "$85",
      description:
        "Gentle exfoliation technique that removes dead skin cells and peach fuzz to reveal a smoother, brighter complexion. Completed with a soothing finishing mask.",
    },
    {
      title: "Microneedling",
      price: "$530",
      sub: "(3 Sessions)",
      description:
        "Minimally invasive procedure that strengthens natural collagen and elastin production. Reduces scarring, smooths fine lines, and gives a healthier glow overall.",
    },
    {
      title: "Oil Planing",
      price: "$95",
      description:
        "Perfect for dry or sensitive skin. Uses a nourishing facial oil as a buffer while gently exfoliating with a sterile blade—removing dead skin cells and peach fuzz with added hydration.",
    },
  ],
  facials: [
    {
      title: "Customized Facial",
      price: "$125",
      description:
        "Tailored to your skin care needs and concerns. Addresses a variety of needs ranging from pre-mature aging to acne flare-ups, to dull lifeless complexion.",
    },
    {
      title: "Oxygen-Infused Facial",
      price: "$135",
      description:
        "Delivers a boost of hydration and nutrients using concentrated oxygen and targeted serums. Revitalizes dull, tired skin, leaving it plump, refreshed, and glowing.",
    },
    {
      title: "Astrodome Toning",
      price: "$185",
      description:
        "Utilizes pulsed light, near-infrared energy, and an oxygen mist to actively regenerate skin cells. Deeply cleanses pores while purifying and renewing the outer skin layer.",
    },
    {
      title: "Bearded Facial",
      price: "$130",
      description:
        "Concludes with high-frequency comb or steam therapy to kill bacteria deep within hair follicles. Includes lightweight moisturizer and protective beard balm.",
    },
    {
      title: "Nano Infusion Facial",
      price: "$180",
      description:
        "Uses a nano-needle device to create tiny channels for specialized serums to soak in deeper. gentle, needle-free way to get an immediate plump and glow.",
    },
    {
      title: "Hydroderm + Bohr",
      price: "$185",
      description:
        "Starts with Hydroderm deep-clean, then Bohr step uses bubbling reaction to 'wake up' skin with oxygen. Finishes with deep serum infusion.",
    },
  ],
  waxing: [
    { title: "Brow Shaping", price: "$25" },
    { title: "Full Face with Brows", price: "$80" },
    { title: "Underarms", price: "$40" },
    { title: "Neckline", price: "$40" },
    { title: "Half Legs", price: "$55" },
    { title: "Full Legs", price: "$75" },
    { title: "Half Arms", price: "$45" },
    { title: "Full Arms", price: "$60" },
    { title: "Lips", price: "$20" },
    { title: "Chin", price: "$25" },
    { title: "Side Burns", price: "$30" },
    { title: "Brow Maintenance", price: "$30" },
    { title: "Brazilian", price: "$80" },
    { title: "French Bikini", price: "$65" },
    { title: "Chest", price: "$60" },
    { title: "Stomach", price: "$30" },
    { title: "Abdomen", price: "$45" },
    { title: "Nostrils", price: "$20" },
    { title: "Nipple Wax", price: "$20" },
    { title: "Men's Back & Shoulder", price: "$75" },
  ],
};
