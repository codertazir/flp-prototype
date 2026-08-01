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
    desc: "120 grams of premium black angus beef with caramelized onions, yellow cheddar cheese, and our housemade smoky sauce.",
    price: 25,
    cal: 403,
    cat: "Beef Burger",
    img: menuClassic,
    tag: "Best seller",
  },
  {
    name: "Mushroom Burger",
    desc: "120 grams of premium black angus beef with crispy onion, white cheddar cheese, and our housemade white mushroom sauce.",
    price: 25,
    cal: 440,
    cat: "Beef Burger",
    img: heroTray,
  },
  {
    name: "Philly Steak",
    desc: "Brioche bun with meat, 2 slices of cheese, brown onions, and our housemade smoky sauce.",
    price: 27,
    cal: 610,
    cat: "Beef Burger",
    img: brandSando,
  },
  {
    name: "Smash Burger",
    desc: "Two smash black angus steaks with bacon jam, jalapeños, American cheese, pickles, lettuce, and our housemade special sauce.",
    price: 26,
    cal: 535,
    cat: "Beef Burger",
    img: menuClassic,
  },
  {
    name: "Chick N FLP",
    desc: "Crispy chicken dipped in our special housemade sauce with yellow cheddar cheese, lettuce, and slaw salad.",
    price: 26,
    cal: 592,
    cat: "Chicken Burger",
    img: menuChicken,
  },
  {
    name: "Classic Chicken",
    desc: "Crispy chicken dipped in our classic housemade sauce with white cheddar cheese and slaw salad.",
    price: 25,
    cal: 488,
    cat: "Chicken Burger",
    img: menuChicken,
  },
  {
    name: "FLP Fries",
    desc: "French fries with crust, our special sauce, flip special toppings, and jalapeño.",
    price: 14,
    cal: 377,
    cat: "Sides",
    img: menuFries,
  },
  {
    name: "Fries",
    desc: "Normal french fries.",
    price: 9,
    cal: 250,
    cat: "Sides",
    img: menuFries,
  },
  {
    name: "Crisper Fries",
    desc: "Light slice wedges.",
    price: 9,
    cal: 377,
    cat: "Sides",
    img: menuFries,
  },
  {
    name: "Chicken Bites",
    desc: "Chicken bites dipped in our housemade special sauce.",
    price: 15,
    cal: 199,
    cat: "Sides",
    img: menuChicken,
  },
  {
    name: "Chicken Wings",
    desc: "Marinated chicken wings fried in FLP's special way.",
    price: 18,
    cal: 335,
    cat: "Sides",
    img: menuChicken,
  },
  {
    name: "FLP Strips",
    desc: "Chicken strips with our housemade FLP special seasoning and our special FLP sauce.",
    price: 15,
    cal: 333,
    cat: "Sides",
    img: brandSando,
  },
  {
    name: "Mush Balls",
    desc: "Fresh mushrooms with parmesan and mozzarella cheese mixed with red bell peppers.",
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
    name: "Coca-Cola",
    desc: "320 ml can.",
    price: 5,
    cat: "Drinks",
    img: brandCup,
  },
  {
    name: "Coca-Cola Diet",
    desc: "320 ml can.",
    price: 5,
    cat: "Drinks",
    img: brandCup,
  },
  {
    name: "Sprite",
    desc: "320 ml can.",
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
