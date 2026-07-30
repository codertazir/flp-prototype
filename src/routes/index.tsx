import { useEffect, useState, type MouseEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Instagram,
  Phone,
  MapPin,
  Clock,
  Truck,
  Flame,
  ArrowRight,
  ChevronDown,
  Menu as MenuIcon,
  X,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
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
      { title: "FLP — Flip Your Mood | Smash Burgers in Jubail" },
      {
        name: "description",
        content:
          "FLP serves smash burgers, crispy chicken sandos, loaded fries and soft serve in Jubail, Dammam and Al-Baha. Open daily until 3 AM.",
      },
      { property: "og:title", content: "FLP — Flip Your Mood" },
      {
        property: "og:description",
        content: "Smash burgers, crispy sandos and soft serve. Open daily until 3 AM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "FLP",
          slogan: "Flip your mood!",
          servesCuisine: "Burgers",
          priceRange: "SAR 12–40",
          telephone: "+966597115868",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Al Fayhaa, Al Dafi",
            addressLocality: "Al Jubail",
            postalCode: "35811",
            addressCountry: "SA",
          },
          openingHours: "Mo-Su 11:00-03:00",
          sameAs: ["https://instagram.com/flp.burger", "https://linktr.ee/flp.burger"],
        }),
      },
    ],
  }),
});

const NAV = [
  { href: "#menu", label: "Menu" },
  { href: "#why", label: "Why FLP" },
  { href: "#story", label: "Our Story" },
  { href: "#visit", label: "Visit Us" },
];

type Item = {
  name: string;
  desc: string;
  price: number;
  cat: "Burgers" | "Sandos" | "Sides" | "Drinks" | "Sweet";
  img: string;
  tag?: string;
};

const MENU: Item[] = [
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

const CATS = ["All", "Burgers", "Sandos", "Sides", "Drinks", "Sweet"] as const;

const HERO_IMAGES = [
  { src: heroTray, alt: "Tray of FLP smash burgers and fries" },
  { src: menuClassic, alt: "FLP classic smash burger" },
  { src: brandSando, alt: "FLP crispy chicken sando" },
  { src: menuFries, alt: "FLP loaded fries" },
];

const WHY = [
  {
    icon: Flame,
    title: "Fresh, never frozen",
    desc: "Beef ground daily and smashed to order on a screaming hot flat top.",
  },
  {
    icon: Clock,
    title: "Open till 3 AM",
    desc: "Every day from 11 in the morning until 3 after midnight. Late nights sorted.",
  },
  {
    icon: Truck,
    title: "Delivered hot",
    desc: "Order through your favourite app or pick it up straight from the window.",
  },
];

const BRANCHES = [
  {
    city: "Jubail",
    address: "Al Fayhaa District, Al Dafi — Jubail 35811",
    phone: "+966 59 711 5868",
    tel: "+966597115868",
    map: "https://maps.app.goo.gl/Fzw14kEaQugvMLWa8",
  },
  {
    city: "Dammam",
    address: "Al Shatea District — Dammam",
    phone: "+966 59 711 5868",
    tel: "+966597115868",
    map: "https://maps.app.goo.gl/M2h9YW48mR8QYVDZA",
  },
  {
    city: "Al-Baha",
    address: "King Fahd Road — Al-Baha",
    phone: "+966 59 711 5868",
    tel: "+966597115868",
    map: "https://maps.app.goo.gl/vipgLJvHEU92eFhM9",
  },
];

function Riyal({ className = "" }: { className?: string }) {
  return (
    <span aria-label="Saudi Riyal" className={className}>
      ﷼
    </span>
  );
}

function Index() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const [active, setActive] = useState("");
  const items = cat === "All" ? MENU : MENU.filter((i) => i.cat === cat);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setHeroIdx((v) => (v + 1) % HERO_IMAGES.length), 5000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const goTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    setOpen(false);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating navbar */}
      <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-5">
        <div
          className={`mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border px-3 py-2 backdrop-blur-xl transition-all duration-500 sm:px-4 ${
            scrolled
              ? "border-border bg-background/80 shadow-soft"
              : "border-transparent bg-background/40"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <img
              src={flpLogo}
              alt="FLP logo"
              width={40}
              height={40}
              className="size-9 rounded-full transition-transform duration-500 hover:rotate-6 sm:size-10"
            />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={(e) => goTo(e, n.href)}
                className={`rounded-full px-4 py-2 font-display text-xs tracking-wide uppercase transition-all duration-300 hover:text-primary ${
                  active === n.href ? "text-primary" : "text-ink"
                }`}
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
              className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:shadow-pop hover:brightness-105 sm:inline-flex"
            >
              Order now
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/70 transition-colors hover:bg-accent md:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 rounded-full bg-ink transition-all duration-300 ease-out ${
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5"
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-0 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-ink transition-all duration-200 ${
                    open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 rounded-full bg-ink transition-all duration-300 ease-out ${
                    open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <nav className="mx-auto mt-2 max-w-5xl animate-fade-in rounded-3xl border border-border bg-background/95 p-3 shadow-soft backdrop-blur-xl md:hidden">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={(e) => goTo(e, n.href)}
                className={`block rounded-2xl px-4 py-3 font-display text-sm tracking-wide uppercase transition-colors hover:bg-accent hover:text-primary ${
                  active === n.href ? "text-primary" : "text-ink"
                }`}
              >
                {n.label}
              </a>
            ))}
            <a
              href="https://linktr.ee/flp.burger"
              target="_blank"
              rel="noreferrer"
              className="mt-1 block rounded-2xl bg-primary px-4 py-3 text-center text-base font-bold text-primary-foreground"
            >
              Order now
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero — full screen */}
        <section className="relative flex h-svh min-h-[600px] items-center justify-center overflow-hidden">
          <img
            src={heroTray}
            alt="Tray of FLP smash burgers and fries"
            className="absolute inset-0 size-full scale-105 object-cover"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="absolute -right-24 top-1/4 hidden w-64 overflow-hidden rounded-4xl border-4 border-background/20 float-slow lg:block">
            <img src={brandSoftserve} alt="FLP soft serve" className="size-full object-cover" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
            <Reveal delay={80}>
              <span className="inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/10 px-4 py-1.5 text-[0.7rem] font-bold tracking-[0.25em] text-background uppercase backdrop-blur-md">
                Jubail · Dammam · Al-Baha
              </span>
            </Reveal>
            <Reveal delay={200}>
              <h1 className="mt-6 font-display text-6xl leading-[0.92] text-background sm:text-7xl lg:text-8xl">
                Flip your <span className="text-primary">mood</span>
              </h1>
            </Reveal>
            <Reveal delay={340}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-background/75 sm:text-lg">
                Smash burgers, crispy sandos, loaded fries and soft serve — made fresh to order and served hot.
              </p>
            </Reveal>
            <Reveal delay={460}>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href="#menu"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-all duration-300 hover:shadow-pop hover:brightness-105"
                >
                  See the menu
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="https://instagram.com/flp.burger"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-background/40 px-7 py-3.5 text-base font-bold text-background transition-all duration-300 hover:bg-background hover:text-ink"
                >
                  <Instagram className="size-4" /> @flp.burger
                </a>
              </div>
            </Reveal>
          </div>

          {/* Subtle scroll cue */}
          <a
            href="#menu"
            className="absolute inset-x-0 bottom-7 z-10 mx-auto flex w-fit flex-col items-center gap-1.5 text-background/70 transition-colors hover:text-background"
          >
            <span className="text-[0.65rem] font-semibold tracking-[0.35em] uppercase">Scroll</span>
            <ChevronDown className="size-4 scroll-hint" />
          </a>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-border bg-primary py-2.5 text-primary-foreground">
          <div className="marquee-track flex w-max gap-8 whitespace-nowrap font-display text-sm tracking-[0.2em] uppercase">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                Flip your mood <span className="opacity-50">●</span> Fresh beef daily{" "}
                <span className="opacity-50">●</span> Open till 3 AM <span className="opacity-50">●</span>
              </span>
            ))}
          </div>
        </div>

        {/* Menu */}
        <section id="menu" className="scroll-mt-28 bg-cream">
          <div className="mx-auto max-w-5xl px-5 py-20 lg:py-28">
            <Reveal>
              <p className="text-[0.7rem] font-bold tracking-[0.3em] text-primary uppercase">Our menu</p>
              <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
                Built to <span className="text-primary">flip</span> your day
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 flex flex-wrap gap-2">
                {CATS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCat(c)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      cat === c
                        ? "bg-primary text-primary-foreground shadow-pop"
                        : "bg-background text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </Reveal>

            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {items.map((item, i) => (
                <Reveal key={item.name} delay={Math.min(i, 6) * 60}>
                  <article className="group flex items-center gap-4 rounded-2xl bg-card p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft">
                    <div className="size-16 shrink-0 overflow-hidden rounded-xl sm:size-[4.5rem]">
                      <img
                        src={item.img}
                        alt={item.name}
                        width={200}
                        height={200}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="truncate font-display text-base text-ink">{item.name}</h3>
                        {item.tag && (
                          <span className="shrink-0 rounded-full bg-accent px-2 py-0.5 text-[0.6rem] font-bold tracking-wider text-accent-foreground uppercase">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>

                    <div className="shrink-0 pl-1 pr-1 text-right">
                      <span className="inline-flex items-baseline gap-1 font-display text-lg text-primary">
                        {item.price} <Riyal className="text-sm" />
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why FLP */}
        <section id="why" className="scroll-mt-28">
          <div className="mx-auto max-w-5xl px-5 py-20 lg:py-28">
            <Reveal>
              <p className="text-[0.7rem] font-bold tracking-[0.3em] text-primary uppercase">Why FLP</p>
              <h2 className="mt-3 max-w-xl font-display text-4xl text-ink sm:text-5xl">
                Simple food, done properly
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={i * 120}>
                  <div className="group h-full rounded-3xl border border-border p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                      <w.icon className="size-6" />
                    </div>
                    <h3 className="mt-5 font-display text-xl text-ink">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section id="story" className="scroll-mt-28 bg-cream">
          <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
            <Reveal>
              <p className="text-[0.7rem] font-bold tracking-[0.3em] text-primary uppercase">Our story</p>
              <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
                It started with one flat top
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  FLP began in Jubail with a small kitchen, a hot flat top and one stubborn idea — that a burger
                  should be smashed thin, seared hard and handed over while it is still too hot to hold.
                </p>
                <p>
                  We grind beef daily, bake nothing we would not eat ourselves, and mix the FLP sauce in-house. Word
                  spread down the corniche, then to Dammam, then to Al-Baha.
                </p>
                <p className="font-semibold text-ink">
                  Same flat top energy, three cities later. Flip your mood.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="grid grid-cols-2 gap-3">
                {[menuClassic, brandSando, brandCup, brandSoftserve].map((src, i) => (
                  <div
                    key={i}
                    className={`overflow-hidden rounded-3xl ${i % 2 === 1 ? "mt-6" : ""}`}
                  >
                    <img
                      src={src}
                      alt="FLP food"
                      width={500}
                      height={500}
                      loading="lazy"
                      className="aspect-square size-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Visit Us */}
        <section id="visit" className="scroll-mt-28">
          <div className="mx-auto max-w-5xl px-5 py-20 lg:py-28">
            <Reveal>
              <p className="text-[0.7rem] font-bold tracking-[0.3em] text-primary uppercase">Visit us</p>
              <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Three branches, one flat top</h2>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="size-4 text-primary" /> Open daily 11:00 AM — 3:00 AM
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {BRANCHES.map((b, i) => (
                <Reveal key={b.city} delay={i * 120}>
                  <div className="group flex h-full flex-col rounded-3xl border border-border p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                    <h3 className="font-display text-2xl text-ink">{b.city}</h3>
                    <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-primary" /> {b.address}
                    </p>
                    <a
                      href={`tel:${b.tel}`}
                      className="mt-2 flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-primary"
                    >
                      <Phone className="size-4 shrink-0 text-primary" /> {b.phone}
                    </a>
                    <a
                      href={b.map}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      Get directions <ArrowRight className="size-4" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-14 overflow-hidden rounded-4xl bg-primary px-8 py-14 text-center text-primary-foreground">
                <h2 className="font-display text-4xl sm:text-5xl">Hungry right now?</h2>
                <p className="mx-auto mt-4 max-w-lg text-base opacity-90">
                  Order for delivery or pick-up, or call the nearest branch and we'll have it ready.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href="https://linktr.ee/flp.burger"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-background px-7 py-3.5 text-base font-bold text-primary transition-transform duration-300 hover:scale-105"
                  >
                    Order online
                  </a>
                  <a
                    href="tel:+966597115868"
                    className="rounded-full border border-primary-foreground/60 px-7 py-3.5 text-base font-bold transition-colors duration-300 hover:bg-primary-foreground hover:text-primary"
                  >
                    Call us
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-cream">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 md:grid-cols-3">
          <div>
            <img src={flpLogo} alt="FLP logo" width={48} height={48} loading="lazy" className="size-12 rounded-full" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              FLP — flip your mood. Fresh smash burgers, crispy chicken and soft serve, made to order in Jubail,
              Dammam and Al-Baha.
            </p>
            <a
              href="https://instagram.com/flp.burger"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:scale-105"
            >
              <Instagram className="size-4" /> @flp.burger
            </a>
          </div>

          <div>
            <h3 className="font-display text-lg text-ink">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-primary">
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
                <a href="tel:+966597115868" className="transition-colors hover:text-primary">
                  +966 59 711 5868
                </a>
              </li>
              <li>Al Fayhaa, Al Dafi — Jubail 35811</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} FLP. All rights reserved.</p>
            <p>Jubail · Dammam · Al-Baha</p>
          </div>
        </div>
      </footer>
    </div>
  );
}