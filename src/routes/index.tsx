import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Clock, Truck, Store, Smartphone, Beef, Users, UtensilsCrossed } from "lucide-react";

import flpLogo from "@/assets/flp-logo.png";
import heroTray from "@/assets/hero-tray.jpg";
import brandCup from "@/assets/brand-cup.jpg";
import brandSando from "@/assets/brand-sando.jpg";
import brandSoftserve from "@/assets/brand-softserve.jpg";
import menuClassic from "@/assets/menu-classic.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FLP فلب — Flip Your Mood | Burgers in Jubail, Dammam & Al-Baha" },
      {
        name: "description",
        content:
          "FLP فلب — flip your mood. Smash burgers, crispy chicken, loaded fries and soft serve. Branches in Jubail, Dammam and Al-Baha. Open till 3 AM.",
      },
      { property: "og:title", content: "FLP فلب — Flip Your Mood" },
      {
        property: "og:description",
        content: "Burgers, fries and soft serve in Jubail, Dammam and Al-Baha. Open daily till 3 AM.",
      },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
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

const HIGHLIGHTS = [
  { icon: Store, label: "Branches" },
  { icon: Clock, label: "Working hours" },
  { icon: Truck, label: "Delivery" },
  { icon: Smartphone, label: "Our app" },
  { icon: Beef, label: "Meat sourcing" },
  { icon: Users, label: "Friends" },
  { icon: UtensilsCrossed, label: "Menu" },
];

const MENU = [
  {
    name: "FLP Burger",
    ar: "برجر فلب",
    desc: "Sesame bun, seared beef, cheese, pickles and the FLP sauce.",
    price: "28",
    img: menuClassic,
    tone: "bg-primary",
  },
  {
    name: "Crispy Sando",
    ar: "ساندو مقرمش",
    desc: "Long sesame roll packed with buttermilk-crisp chicken.",
    price: "26",
    img: brandSando,
    tone: "bg-[oklch(0.86_0.16_92)]",
  },
  {
    name: "FLP Cooler",
    ar: "مشروب فلب",
    desc: "Ice-cold citrus cooler in the orange cup you already know.",
    price: "12",
    img: brandCup,
    tone: "bg-[oklch(0.75_0.14_225)]",
  },
  {
    name: "Soft Serve",
    ar: "آيس كريم",
    desc: "Swirled mango-orange soft serve, served straight from the machine.",
    price: "14",
    img: brandSoftserve,
    tone: "bg-[oklch(0.9_0.09_85)]",
  },
];

const BRANCHES = [
  { city: "Jubail", ar: "الجبيل", note: "الفيحاء، الدفي · 35811", map: "https://maps.app.goo.gl/y6gakeGN2dEkSUhH8" },
  { city: "Dammam", ar: "الدمام", note: "Now serving" },
  { city: "Al-Baha", ar: "الباحة", note: "Now serving" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-3">
            <img src={flpLogo} alt="FLP logo" width={816} height={816} className="h-11 w-11" />
            <span className="arabic text-lg font-bold text-muted-foreground">فلب</span>
          </a>
          <nav className="hidden gap-8 text-sm font-semibold text-muted-foreground md:flex">
            <a href="#menu" className="transition-colors hover:text-primary">
              Menu
            </a>
            <a href="#branches" className="transition-colors hover:text-primary">
              Branches
            </a>
            <a href="#visit" className="transition-colors hover:text-primary">
              Contact
            </a>
          </nav>
          <a
            href="https://linktr.ee/flp.burger"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            Order now
          </a>
        </div>
      </header>

      <main id="top" className="pt-18">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pt-10 pb-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div className="p-8 md:p-14">
                <span className="inline-block rounded-full bg-background/20 px-4 py-1.5 text-xs font-bold tracking-wide text-primary-foreground">
                  JUBAIL · DAMMAM · AL-BAHA
                </span>
                <h1 className="mt-5 font-display text-[clamp(2.75rem,8vw,4.75rem)] font-semibold leading-[0.95] text-primary-foreground">
                  Flip your
                  <br />
                  mood ❤️
                </h1>
                <p className="arabic mt-3 text-2xl font-bold text-primary-foreground/90">اقلب مزاجك</p>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-primary-foreground/90">
                  Fresh beef, crispy chicken and thick soft serve — served hot and fast until 3 in the morning.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#menu"
                    className="rounded-full bg-background px-7 py-3.5 text-sm font-bold text-foreground transition-transform hover:scale-105"
                  >
                    See the menu
                  </a>
                  <a
                    href="https://instagram.com/flp.burger"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/60 px-6 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-background/15"
                  >
                    <Instagram className="h-4 w-4" /> @flp.burger
                  </a>
                </div>
              </div>
              <img
                src={heroTray}
                alt="Three FLP burgers on a tray with two cartons of fries"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Highlight circles, Instagram-style */}
        <section className="border-y border-border">
          <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-8">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="flex w-20 shrink-0 flex-col items-center gap-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <h.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <span className="text-[11px] font-semibold text-muted-foreground">{h.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden bg-primary py-3">
          <div className="marquee-track flex w-max whitespace-nowrap font-display text-lg font-semibold text-primary-foreground">
            {Array.from({ length: 2 }).map((_, block) => (
              <span key={block} className="flex">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="px-6">
                    FLIP YOUR MOOD <span className="opacity-70">●</span> OPEN TILL 3 AM{" "}
                    <span className="opacity-70">●</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* Menu */}
        <section id="menu" className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-5xl font-semibold md:text-6xl">
              The <span className="text-primary">menu</span>
            </h2>
            <span className="arabic text-xl font-bold text-muted-foreground">القائمة</span>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MENU.map((item) => (
              <article key={item.name} className="overflow-hidden rounded-4xl bg-card">
                <div className={`${item.tone} p-4`}>
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="aspect-square w-full rounded-3xl object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl font-semibold">{item.name}</h3>
                    <span className="font-display text-xl font-semibold text-primary">{item.price} SR</span>
                  </div>
                  <p className="arabic mt-1 text-sm font-bold text-muted-foreground">{item.ar}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Branches */}
        <section id="branches" className="mx-auto max-w-6xl px-5 pb-16">
          <div className="rounded-[2.5rem] bg-card p-8 md:p-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-4xl font-semibold md:text-5xl">
                Three <span className="text-primary">branches</span>
              </h2>
              <span className="arabic text-xl font-bold text-muted-foreground">فروعنا</span>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {BRANCHES.map((b) => (
                <div key={b.city} className="rounded-3xl bg-background p-6">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 font-display text-2xl font-semibold">{b.city}</h3>
                  <p className="arabic text-sm font-bold text-muted-foreground">{b.ar}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{b.note}</p>
                  {b.map && (
                    <a
                      href={b.map}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block text-xs font-bold text-primary hover:underline"
                    >
                      Open in Maps
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="visit" className="mx-auto max-w-6xl px-5 pb-20">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-4xl bg-primary p-8">
              <Clock className="h-6 w-6 text-primary-foreground" />
              <h3 className="mt-4 font-display text-2xl font-semibold text-primary-foreground">Every day</h3>
              <p className="mt-1 text-primary-foreground/90">11:00 AM – 3:00 AM</p>
            </div>
            <a href="tel:+966597115868" className="rounded-4xl bg-card p-8 transition-colors hover:bg-secondary">
              <Phone className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-2xl font-semibold">Call us</h3>
              <p className="mt-1 text-muted-foreground">+966 59 711 5868</p>
            </a>
            <a
              href="https://instagram.com/flp.burger"
              target="_blank"
              rel="noreferrer"
              className="rounded-4xl bg-card p-8 transition-colors hover:bg-secondary"
            >
              <Instagram className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-2xl font-semibold">Follow</h3>
              <p className="mt-1 text-muted-foreground">@flp.burger · 6.3k followers</p>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <img src={flpLogo} alt="FLP logo" loading="lazy" width={816} height={816} className="h-10 w-10" />
            <span className="arabic text-base font-bold text-muted-foreground">فلب</span>
          </div>
          <p className="text-sm font-semibold text-primary">Flip your mood ❤️</p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} FLP Burger</p>
        </div>
      </footer>
    </div>
  );
}
