import heroTray from "@/assets/hero-tray.jpg";
import brandCup from "@/assets/brand-cup.jpg";
import brandSando from "@/assets/brand-sando.jpg";
import brandSoftserve from "@/assets/brand-softserve.jpg";
import menuClassic from "@/assets/menu-classic.jpg";
import menuChicken from "@/assets/menu-chicken.jpg";
import menuFries from "@/assets/menu-fries.jpg";

export const CATS = ["Beef Burger", "Chicken Burger", "Sides", "Sauce", "Drinks"] as const;

export type Cat = (typeof CATS)[number];

export type Item = {
  name: string;
  desc: string;
  price: number;
  cat: Cat;
  img: string;
  cal?: number;
  tag?: string;
};

export const MENU: Item[] = [
  {
    name: "FLP Burger",
    desc: "120 grams of premium black angus beef, caramelized onions, yellow cheddar cheese, smoked flip sauce.",
    price: 25,
    cal: 403,
    cat: "Beef Burger",
    img: menuClassic,
    tag: "Best seller",
  },
  {
    name: "Mush Burger",
    desc: "120 grams of premium black angus beef, crispy onion, white cheddar cheese, white mushroom sauce.",
    price: 25,
    cal: 440,
    cat: "Beef Burger",
    img: heroTray,
  },
  {
    name: "Philly Steak",
    desc: "Brioche bun, meat, 2 slices of cheese, brown onions and smoked sauce.",
    price: 27,
    cat: "Beef Burger",
    img: brandSando,
  },
  {
    name: "FLP Smash",
    desc: "Two smash black angus steaks with jalapeño bacon jam, American cheese, pickles, and special sauce.",
    price: 26,
    cat: "Beef Burger",
    img: menuClassic,
  },
  {
    name: "Check N FLP",
    desc: "Crispy chicken, dipped in special sauce, yellow cheddar cheese, lettuce, slaw salad.",
    price: 26,
    cal: 592,
    cat: "Chicken Burger",
    img: menuChicken,
  },
  {
    name: "Classic Chicken",
    desc: "Crispy chicken, classic sauce, white cheddar cheese, slaw salad.",
    price: 25,
    cal: 488,
    cat: "Chicken Burger",
    img: menuChicken,
  },
  {
    name: "FLP Fries",
    desc: "Flip fries with crust, our special sauce, flip special toppings, jalapeño.",
    price: 14,
    cal: 377,
    cat: "Sides",
    img: menuFries,
  },
  {
    name: "Fries",
    desc: "Fries with crust.",
    price: 9,
    cat: "Sides",
    img: menuFries,
  },
  {
    name: "Crisper",
    desc: "Light slice wedges.",
    price: 9,
    cat: "Sides",
    img: menuFries,
  },
  {
    name: "Chicken Bites",
    desc: "Chicken bites dipped special sauce.",
    price: 15,
    cat: "Sides",
    img: menuChicken,
  },
  {
    name: "Chicken Wings",
    desc: "Marinated chicken wings fried in flip's special way.",
    price: 18,
    cal: 335,
    cat: "Sides",
    img: menuChicken,
  },
  {
    name: "FLP Strips",
    desc: "Chicken strips with flip special seasoning with flip special sauce.",
    price: 15,
    cal: 333,
    cat: "Sides",
    img: brandSando,
  },
  {
    name: "Mush Balls",
    desc: "Fresh mushrooms, parmesan and mozzarella cheese mix with red bell peppers.",
    price: 15,
    cal: 180,
    cat: "Sides",
    img: menuFries,
  },
  {
    name: "Smoky Sauce",
    desc: "Smoky sauce.",
    price: 3,
    cat: "Sauce",
    img: brandSoftserve,
  },
  {
    name: "FLP Sauce",
    desc: "FLP sauce.",
    price: 3,
    cat: "Sauce",
    img: brandSoftserve,
  },
  {
    name: "White Sauce",
    desc: "White sauce.",
    price: 3,
    cat: "Sauce",
    img: brandSoftserve,
  },
  {
    name: "Fanta Can",
    desc: "Fanta can.",
    price: 5,
    cat: "Drinks",
    img: brandCup,
  },
  {
    name: "Cola 320 ml",
    desc: "Cola 320 ml.",
    price: 5,
    cat: "Drinks",
    img: brandCup,
  },
  {
    name: "Cola Diet 320 ml",
    desc: "Cola diet 320 ml.",
    price: 5,
    cat: "Drinks",
    img: brandCup,
  },
  {
    name: "Sprite 320 ml",
    desc: "Sprite 320 ml.",
    price: 5,
    cat: "Drinks",
    img: brandCup,
  },
  {
    name: "Water",
    desc: "Arwa water.",
    price: 1,
    cat: "Drinks",
    img: brandCup,
  },
];
