import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Instagram,
  Phone,
  MapPin,
  Clock,
  Truck,
  Flame,
  Star,
  ArrowRight,
  Menu as MenuIcon,
  X,
} from "lucide-react";

import flpLogo from "@/assets/flp-logo.png";
import heroTray from "@/assets/hero-tray.jpg";
import brandCup from "@/assets/brand-cup.jpg";
import brandSando from "@/assets/brand-sando.jpg";
import brandSoftserve from "@/assets/brand-softserve.jpg";
import menuClassic from "@/assets/menu-classic.jpg";
import menuChicken from "@/assets/menu-chicken.jpg";
import menuFries from "@/assets/menu-fries.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FLP فلب — Flip Your Mood | Burgers in Jubail, Dammam & Al-Baha" },
      {
        name: "description",
        content:
          "FLP فلب — flip your mood. Smash burgers, crispy chicken sandos, loaded fries and soft serve. Branches in Jubail, Dammam and Al-Baha. Open daily till 3 AM.",
      },
      { property: "og:title", content: "FLP فلب — Flip Your Mood" },
      {
        property: "og:description",
        content:
          "Burgers, fries and soft serve in Jubail, Dammam and Al-Baha. Dine in, take away or delivery. Open daily till 3 AM.",
      },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "FLP فلب",
          slogan: "Flip your mood!",
          servesCuisine: "Burgers",
          priceRange: "SAR 12–40",
          telephone: "+966597115868",
          address: {
            "@type": "PostalAddress",
            streetAddress: "الفيحاء، الدفي",
            addressLocality: "Al Jubail",
            postalCode: "35811",
            addressCountry: "SA",
          },
          openingHours: "Mo-Su 11:00-03:00",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.4", bestRating: "5" },
          sameAs: ["https://instagram.com/flp.burger", "https://linktr.ee/flp.burger"],
        }),
      },
    ],
  }),
});

const NAV = [
  { href: "#menu", label: "Menu" },
  { href: "#why", label: "Why FLP" },
  { href: "#branches", label: "Branches" },
  { href: "#delivery", label: "Delivery" },
  { href: "#contact", label: "Contact" },
];

type Item = {
  name: string;
  ar: string;
  desc: string;
  price: number;
  cat: "Burgers" | "Sandos" | "Sides" | "Drinks" | "Sweet";
  img?: string;
  tag?: string;
};

const MENU: Item[] = [
  {
    name: "FLP Burger",
    ar: "برجر فلب",
    desc: "Sesame bun, seared beef patty, cheddar, pickles and the FLP sauce.",
    price: 28,
    cat: "Burgers",
    img: menuClassic,
    tag: "Best seller",
  },
  {
    name: "Double Flip",
    ar: "دبل فلب",
    desc: "Two smashed patties, double cheese, caramelised onion.",
    price: 38,
    cat: "Burgers",
    tag: "Big appetite",
  },
  {
    name: "Crispy Chicken",
    ar: "دجاج مقرمش",
    desc: "Buttermilk-crisp chicken thigh, lettuce and creamy garlic sauce.",
    price: 26,
    cat: "Burgers",
    img: menuChicken,
  },
  {
    name: "Crispy Sando",
    ar: "ساندو مقرمش",
    desc: "Long sesame roll packed with crunchy chicken and spicy mayo.",
    price: 26,
    cat: "Sandos",
    img: brandSando,
  },
  {
    name: "Beef Sando",
    ar: "ساندو لحم",
    desc: "Thin sliced beef, melted cheese and pickled jalapeño.",
    price: 29,
    cat: "Sandos",
  },
  {
    name: "FLP Fries",
    ar: "بطاطس فلب",
    desc: "Golden fries in the orange carton, dusted with FLP seasoning.",
    price: 12,
    cat: "Sides",
    img: menuFries,
  },
  {
    name: "Cheesy Fries",
    ar: "بطاطس بالجبن",
    desc: "Fries loaded with molten cheese sauce and crispy onion.",
    price: 18,
    cat: "Sides",
  },
  {
    name: "FLP Cooler",
    ar: "مشروب فلب",
    desc: "Ice-cold citrus cooler served in the orange cup you already know.",
    price: 12,
    cat: "Drinks",
    img: brandCup,
  },
  {
    name: "Soft Serve",
    ar: "آيس كريم",
    desc: "Swirled mango-orange soft serve, straight from the machine.",
    price: 14,
    cat: "Sweet",
    img: brandSoftserve,
    tag: "New",
  },
  {
    name: "Shake",
    ar: "ميلك شيك",
    desc: "Thick vanilla or chocolate shake, blended to order.",
    price: 19,
    cat: "Sweet",
  },
];

const CATS = ["All", "Burgers", "Sandos", "Sides", "Drinks", "Sweet"] as const;

const BRANCHES = [
  {
    city: "Jubail",
    ar: "الجبيل",
    address: "Al Fayhaa, Al Dafi — Jubail 35811",
    phone: "+966 59 711 5868",
    map: "https://maps.app.goo.gl/y6gakeGN2dEkSUhH8",
  },
  {
    city: "Dammam",
    ar: "الدمام",
    address: "Now serving — see Instagram for directions",
    phone: "+966 59 711 5868",
    map: "https://www.google.com/maps/search/FLP+burger+Dammam",
  },
  {
    city: "Al-Baha",
    ar: "الباحة",
    address: "Now serving — see Instagram for directions",
    phone: "+966 59 711 5868",
    map: "https://www.google.com/maps/search/FLP+burger+Al+Baha",
  },
];

const WHY = [
  {
    icon: Flame,
    title: "Fresh, never frozen",
    ar: "طازج دائماً",
    desc: "Beef ground daily and smashed to order on a screaming hot flat top.",
  },
  {
    icon: Clock,
    title: "Open till 3 AM",
    ar: "مفتوح حتى ٣ ص",
    desc: "Every day from 11 in the morning until 3 after midnight. Late nights sorted.",
  },
  {
    icon: Truck,
    title: "Delivered hot",
    ar: "توصيل سريع",
    desc: "Order through your favourite app or come pick it up from the window.",
  },
];

const REVIEWS = [
  { name: "Abdullah M.", text: "Best burger in Jubail, the sauce is unreal. Fast service too." },
  { name: "Sara K.", text: "The crispy sando and soft serve combo is my weekly order now." },
  { name: "Faisal A.", text: "Open late, always hot, always consistent. FLP never misses." },
];

function Index() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [open, setOpen] = useState(false);
  const items = cat === "All" ? MENU : MENU.filter((i) => i.cat === cat);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <p className="font-medium">Open daily 11:00 AM — 3:00 AM</p>
          <a href="tel:+966597115868" className="inline-flex items-center gap-1.5 font-semibold hover:underline">
            <Phone className="size-3.5" /> +966 59 711 5868
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={flpLogo} alt="FLP burger logo" width={44} height={44} className="size-11 rounded-full" />
            <span className="arabic font-display text-xl text-ink">فلب</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://linktr.ee/flp.burger"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-pop transition-transform hover:scale-105 sm:inline-flex"
            >
              Order now
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border md:hidden"
            >
              {open ? <X className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-4 py-3 md:hidden">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-base font-semibold text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold tracking-widest text-accent-foreground uppercase">
                Jubail · Dammam · Al-Baha
              </span>
              <h1 className="mt-5 font-display text-5xl leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
                Flip your <span className="text-primary">mood</span>
              </h1>
              <p className="arabic mt-3 font-display text-2xl text-primary">اقلب مزاجك</p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                Smash burgers, crispy sandos, loaded fries and soft serve — made fresh to order and served hot until
                3 in the morning.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-pop transition-transform hover:scale-105"
                >
                  See the menu <ArrowRight className="size-4" />
                </a>
                <a
                  href="https://instagram.com/flp.burger"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-background"
                >
                  <Instagram className="size-4" /> @flp.burger
                </a>
              </div>

              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
                <div>
                  <dt className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Rating</dt>
                  <dd className="mt-1 flex items-center gap-1 font-display text-2xl text-ink">
                    4.4 <Star className="size-4 fill-primary text-primary" />
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Branches</dt>
                  <dd className="mt-1 font-display text-2xl text-ink">3</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Open till</dt>
                  <dd className="mt-1 font-display text-2xl text-ink">3 AM</dd>
                </div>
              </dl>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-4xl bg-primary shadow-pop">
                <img
                  src={heroTray}
                  alt="Tray of FLP burgers and fries"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden w-44 rotate-[-6deg] overflow-hidden rounded-3xl border-4 border-background shadow-soft sm:block">
                <img
                  src={brandSoftserve}
                  alt="FLP soft serve"
                  width={400}
                  height={400}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden bg-primary py-3 text-primary-foreground">
          <div className="marquee-track flex w-max gap-8 whitespace-nowrap font-display text-lg tracking-wide">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                FLIP YOUR MOOD <span className="opacity-60">●</span> FRESH BEEF DAILY{" "}
                <span className="opacity-60">●</span> OPEN TILL 3 AM <span className="opacity-60">●</span>
              </span>
            ))}
          </div>
        </div>

        {/* Menu */}
        <section id="menu" className="scroll-mt-24 bg-cream">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Our menu</p>
                <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
                  Built to <span className="text-primary">flip</span> your day
                </h2>
              </div>
              <p className="arabic font-display text-2xl text-muted-foreground">القائمة</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {CATS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
                    cat === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-muted-foreground hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <article
                  key={item.name}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition-transform hover:-translate-y-1"
                >
                  {item.img ? (
                    <div className="aspect-4/3 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.name}
                        width={800}
                        height={600}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-4/3 items-center justify-center bg-accent">
                      <span className="arabic font-display text-3xl text-accent-foreground">{item.ar}</span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl text-ink">{item.name}</h3>
                        <p className="arabic text-sm text-muted-foreground">{item.ar}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-primary px-3 py-1 font-display text-sm text-primary-foreground">
                        {item.price} SR
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    {item.tag && (
                      <span className="mt-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold tracking-wide text-accent-foreground uppercase">
                        {item.tag}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why */}
        <section id="why" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-3">
              {WHY.map((w) => (
                <div key={w.title} className="rounded-3xl border border-border p-8">
                  <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <w.icon className="size-7" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-ink">{w.title}</h3>
                  <p className="arabic text-sm text-primary">{w.ar}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Straight from <span className="text-primary">@flp.burger</span>
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[heroTray, brandCup, brandSando, brandSoftserve].map((src, i) => (
                <a
                  key={i}
                  href="https://instagram.com/flp.burger"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-3xl"
                >
                  <img
                    src={src}
                    alt="FLP food"
                    width={600}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-primary/0 text-primary-foreground opacity-0 transition-all group-hover:bg-primary/60 group-hover:opacity-100">
                    <Instagram className="size-8" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Branches */}
        <section id="branches" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Find us</p>
                <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">Three branches</h2>
              </div>
              <p className="arabic font-display text-2xl text-muted-foreground">فروعنا</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {BRANCHES.map((b) => (
                <div key={b.city} className="flex flex-col rounded-3xl border border-border p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl text-ink">{b.city}</h3>
                    <span className="arabic text-lg text-primary">{b.ar}</span>
                  </div>
                  <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" /> {b.address}
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="size-4 shrink-0 text-primary" /> Daily 11:00 AM — 3:00 AM
                  </p>
                  <a
                    href={`tel:${b.phone.replace(/\s/g, "")}`}
                    className="mt-2 flex items-center gap-2 text-sm font-semibold text-ink hover:text-primary"
                  >
                    <Phone className="size-4 shrink-0 text-primary" /> {b.phone}
                  </a>
                  <a
                    href={b.map}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                  >
                    Get directions <ArrowRight className="size-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display text-xl text-ink">4.4 on Google</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {REVIEWS.map((r) => (
                <blockquote key={r.name} className="rounded-3xl bg-card p-7 shadow-soft">
                  <p className="text-base leading-relaxed text-foreground">“{r.text}”</p>
                  <footer className="mt-4 text-sm font-bold text-primary">{r.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery CTA */}
        <section id="delivery" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
            <div className="overflow-hidden rounded-4xl bg-primary px-8 py-14 text-center text-primary-foreground shadow-pop">
              <h2 className="font-display text-4xl sm:text-5xl">Hungry right now?</h2>
              <p className="arabic mt-2 font-display text-2xl opacity-90">جوعان الحين؟</p>
              <p className="mx-auto mt-4 max-w-xl text-base opacity-90">
                Order for delivery or pick-up through our links, or call the nearest branch and we'll have it ready.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="https://linktr.ee/flp.burger"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-background px-7 py-3.5 text-base font-bold text-primary transition-transform hover:scale-105"
                >
                  Order online
                </a>
                <a
                  href="tel:+966597115868"
                  className="rounded-full border-2 border-primary-foreground px-7 py-3.5 text-base font-bold transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  Call us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="scroll-mt-24 border-t border-border bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={flpLogo} alt="FLP logo" width={48} height={48} loading="lazy" className="size-12 rounded-full" />
              <span className="arabic font-display text-2xl text-ink">فلب</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              FLP — flip your mood. Fresh smash burgers, crispy chicken and soft serve, made to order in Jubail,
              Dammam and Al-Baha.
            </p>
            <a
              href="https://instagram.com/flp.burger"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
            >
              <Instagram className="size-4" /> @flp.burger
            </a>
          </div>

          <div>
            <h3 className="font-display text-lg text-ink">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-primary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-ink">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Daily 11:00 AM — 3:00 AM</li>
              <li>
                <a href="tel:+966597115868" className="hover:text-primary">
                  +966 59 711 5868
                </a>
              </li>
              <li>Al Fayhaa, Al Dafi — Jubail 35811</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} FLP فلب. All rights reserved.</p>
            <p>Jubail · Dammam · Al-Baha</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
