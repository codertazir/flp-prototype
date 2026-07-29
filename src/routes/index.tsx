import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Clock, Star } from "lucide-react";

import heroBurger from "@/assets/hero-burger.jpg";
import menuClassic from "@/assets/menu-classic.jpg";
import menuChicken from "@/assets/menu-chicken.jpg";
import menuFries from "@/assets/menu-fries.jpg";
import menuShake from "@/assets/menu-shake.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FLP فلب — Smash Burgers in Al Jubail, Open till 3 AM" },
      {
        name: "description",
        content:
          "FLP فلب is a burger joint in Al Jubail, Saudi Arabia. Smash burgers, crispy chicken, loaded fries and thick shakes. Open daily 11 AM to 3 AM.",
      },
      { property: "og:title", content: "FLP فلب — Smash Burgers in Al Jubail" },
      {
        property: "og:description",
        content: "Smash burgers, crispy chicken and loaded fries in Al Jubail. Open daily 11 AM – 3 AM.",
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
          sameAs: ["https://instagram.com/flp.burger"],
        }),
      },
    ],
  }),
});

const MENU = [
  {
    name: "FLP Double Smash",
    ar: "دبل سماش",
    desc: "Two seared beef patties, double cheddar, pickles, onion, FLP sauce.",
    price: "28",
    img: menuClassic,
  },
  {
    name: "Fire Chicken",
    ar: "دجاج حار",
    desc: "Buttermilk crispy chicken, jalapeño, hot honey, slaw.",
    price: "26",
    img: menuChicken,
  },
  {
    name: "Loaded Cheese Fries",
    ar: "بطاطس بالجبن",
    desc: "Golden fries drowned in molten cheese sauce and smoked spice.",
    price: "16",
    img: menuFries,
  },
  {
    name: "Thick Shake",
    ar: "ميلك شيك",
    desc: "Chocolate, vanilla or Lotus. Spoon-thick, always cold.",
    price: "18",
    img: menuShake,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-3xl leading-none tracking-widest text-ember">FLP</span>
            <span className="arabic text-lg font-bold text-muted-foreground">فلب</span>
          </a>
          <nav className="hidden gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:flex">
            <a href="#menu" className="transition-colors hover:text-foreground">
              Menu
            </a>
            <a href="#story" className="transition-colors hover:text-foreground">
              Story
            </a>
            <a href="#visit" className="transition-colors hover:text-foreground">
              Visit
            </a>
          </nav>
          <a
            href="tel:+966597115868"
            className="rounded-sm bg-ember px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-ember transition-transform hover:scale-[1.03]"
          >
            Order
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden pt-16">
          <div className="hairline-grid absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                <Star className="h-3.5 w-3.5 fill-current" /> 4.4 · Al Jubail
              </p>
              <h1 className="mt-5 font-display text-[clamp(3.5rem,12vw,8rem)] leading-[0.85] tracking-wide">
                SMASHED
                <br />
                <span className="text-ember">CHARRED</span>
                <br />
                STACKED
              </h1>
              <p className="arabic mt-4 text-2xl font-bold text-muted-foreground">برجر على أصوله</p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                FLP presses fresh beef onto a screaming flat-top until the edges go lace-crisp. Nothing sits, nothing
                waits. Served until 3 in the morning.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#menu"
                  className="rounded-sm bg-ember px-7 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-ember transition-transform hover:scale-[1.03]"
                >
                  See the menu
                </a>
                <a
                  href="https://instagram.com/flp.burger"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Instagram className="h-4 w-4" /> @flp.burger
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
              <img
                src={heroBurger}
                alt="FLP double smash burger with melted cheddar and charred beef patties"
                width={1408}
                height={1408}
                className="relative w-full rounded-sm object-cover"
              />
            </div>
          </div>
          <div className="relative overflow-hidden border-y border-border bg-card py-3">
            <div className="flex whitespace-nowrap font-display text-xl tracking-[0.35em] text-muted-foreground">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="px-6">
                  FRESH BEEF DAILY <span className="text-primary">◆</span> OPEN TILL 3 AM{" "}
                  <span className="text-primary">◆</span> AL JUBAIL <span className="text-primary">◆</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-end justify-between gap-6 border-b border-border pb-6">
            <h2 className="font-display text-6xl tracking-wide md:text-7xl">
              THE <span className="text-ember">MENU</span>
            </h2>
            <span className="arabic pb-2 text-xl font-bold text-muted-foreground">القائمة</span>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {MENU.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-primary/60"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-3xl tracking-wide">{item.name}</h3>
                    <span className="font-display text-2xl text-primary">{item.price} SR</span>
                  </div>
                  <p className="arabic mt-1 text-sm font-bold text-muted-foreground">{item.ar}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Story */}
        <section id="story" className="border-y border-border bg-card">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <h2 className="font-display text-5xl tracking-wide md:text-6xl">
              BUILT FOR THE <span className="text-ember">LATE SHIFT</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              FLP started as a small counter in Al Fayha, Al Dafi — one flat-top, one sauce recipe, and a queue that
              kept growing after midnight. We still grind fresh, still press to order, and still hand the bag over
              hot.
            </p>
            <div className="mt-10 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
              {[
                { k: "4.4", v: "Google rating" },
                { k: "3 AM", v: "Closing time" },
                { k: "100%", v: "Fresh beef" },
              ].map((s) => (
                <div key={s.v}>
                  <p className="font-display text-5xl text-ember">{s.k}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visit */}
        <section id="visit" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-6xl tracking-wide md:text-7xl">
            COME <span className="text-ember">THROUGH</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: "Location",
                lines: ["الفيحاء، الدفي", "Al Jubail 35811, Saudi Arabia"],
                href: "https://maps.app.goo.gl/y6gakeGN2dEkSUhH8",
                cta: "Open in Maps",
              },
              {
                icon: Clock,
                title: "Hours",
                lines: ["Every day", "11:00 AM – 3:00 AM"],
              },
              {
                icon: Phone,
                title: "Call us",
                lines: ["+966 59 711 5868"],
                href: "tel:+966597115868",
                cta: "Call now",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-sm border border-border bg-card p-7">
                <c.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-3xl tracking-wide">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="mt-1 text-sm text-muted-foreground">
                    {l}
                  </p>
                ))}
                {c.href && (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary hover:underline"
                  >
                    {c.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl tracking-widest text-ember">FLP</span>
            <span className="arabic text-lg font-bold text-muted-foreground">فلب</span>
          </div>
          <a
            href="https://instagram.com/flp.burger"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Instagram className="h-4 w-4" /> @flp.burger
          </a>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} FLP Burger, Al Jubail</p>
        </div>
      </footer>
    </div>
  );
}
