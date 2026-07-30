import heroTray from "@/assets/hero-tray.jpg";
import brandCup from "@/assets/brand-cup.jpg";
import brandSando from "@/assets/brand-sando.jpg";
import brandSoftserve from "@/assets/brand-softserve.jpg";
import menuClassic from "@/assets/menu-classic.jpg";
import menuChicken from "@/assets/menu-chicken.jpg";
import menuFries from "@/assets/menu-fries.jpg";

export type Item = {
  name: string;
  desc: string;
  price: number;
  cat: "Burgers" | "Sandos" | "Sides" | "Drinks" | "Sweet";
  img: string;
  tag?: string;
};

export const MENU: Item[] = [
  {
    name: "FLP Burger",
    desc: "Sesame bun, seared beef patty, cheddar, pickles and the FLP sauce.",
    price: 28,
    cat: "Burgers",
    img: menuClassic,
    tag: "Best seller",
  },
  {
    name: "Double Flip",
    desc: "Two smashed patties, double cheese, caramelised onion.",
    price: 38,
    cat: "Burgers",
    img: heroTray,
  },
  {
    name: "Crispy Chicken",
    desc: "Buttermilk-crisp chicken thigh, lettuce and creamy garlic sauce.",
    price: 26,
    cat: "Burgers",
    img: menuChicken,
  },
  {
    name: "Crispy Sando",
    desc: "Long sesame roll packed with crunchy chicken and spicy mayo.",
    price: 26,
    cat: "Sandos",
    img: brandSando,
  },
  {
    name: "Beef Sando",
    desc: "Thin sliced beef, melted cheese and pickled jalapeño.",
    price: 29,
    cat: "Sandos",
    img: brandSando,
  },
  {
    name: "FLP Fries",
    desc: "Golden fries in the orange carton, dusted with FLP seasoning.",
    price: 12,
    cat: "Sides",
    img: menuFries,
  },
  {
    name: "Cheesy Fries",
    desc: "Fries loaded with molten cheese sauce and crispy onion.",
    price: 18,
    cat: "Sides",
    img: menuFries,
  },
  {
    name: "FLP Cooler",
    desc: "Ice-cold citrus cooler served in the orange cup you already know.",
    price: 12,
    cat: "Drinks",
    img: brandCup,
  },
  {
    name: "Soft Serve",
    desc: "Swirled mango-orange soft serve, straight from the machine.",
    price: 14,
    cat: "Sweet",
    img: brandSoftserve,
    tag: "New",
  },
  {
    name: "Shake",
    desc: "Thick vanilla or chocolate shake, blended to order.",
    price: 19,
    cat: "Sweet",
    img: brandCup,
  },
];

export const CATS = ["Burgers", "Sandos", "Sides", "Drinks", "Sweet"] as const;
