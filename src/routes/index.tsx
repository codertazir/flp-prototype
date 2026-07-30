import { useEffect, useState, type MouseEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Instagram,
  Phone,
  MapPin,
  Clock,
  Truck,
  Flame,
  ArrowRight,
  ChevronDown,
  ArrowUpRight,
  Download,
  X,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { MenuCard } from "@/components/MenuCard";
import { MENU } from "@/data/menu";
import hungerLogo from "@/assets/hungerstation.png.asset.json";
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
    city: "Dammam",
    address: "Al Shatea District — Dammam",
    hours: ["Sat – Thu: 11:00 AM — 3:00 PM", "Friday: 1:00 PM — 3:00 PM"],
    map: "https://maps.app.goo.gl/M2h9YW48mR8QYVDZA",
    hunger:
      "https://hungerstation.com/sa-ar/restaurants/regions/%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D9%85/%D8%A7%D9%84%D8%B4%D8%B9%D9%84%D8%A9-%D9%81%D8%A7%D8%AE%D8%B1%D9%8A%D9%87/%d9%81%d9%84%d8%a8-158201",
  },
  {
    city: "Jubail",
    address: "Al Fayhaa District, Al Dafi — Jubail 35811",
    phone: "+966 59 711 5868",
    tel: "+966597115868",
    hours: ["Sat – Thu: 11:00 AM — 3:00 PM", "Friday: 1:00 PM — 3:00 PM"],
    map: "https://maps.app.goo.gl/Fzw14kEaQugvMLWa8",
    hunger:
      "https://hungerstation.com/sa-ar/restaurants/regions/%D8%A7%D9%84%D8%AC%D8%A8%D9%8A%D9%84/%D8%A7%D9%84%D9%81%D9%8A%D8%AD%D8%A7%D8%A1/%d9%81%d9%84%d8%a8-82114",
  },
  {
    city: "Al-Baha",
    address: "King Fahd Road — Al-Baha",
    hours: ["Every day: 2:00 PM — 2:00 AM"],
    map: "https://maps.app.goo.gl/vipgLJvHEU92eFhM9",
    hunger:
      "https://hungerstation.com/sa-ar/restaurants/regions/%D8%A7%D9%84%D8%A8%D8%A7%D8%AD%D8%A9/%D8%A7%D9%84%D8%A8%D8%A7%D8%AD%D8%A9/%d9%81%d9%84%d8%a8-187559",
  },
];

const APP_LINKS = {
  ios: "https://apps.apple.com/us/app/%D9%81%D9%84%D8%A8-flp/id6753766219#information",
  android: "https://play.google.com/store/apps/details?id=com.foodtech.flp",
};

const FLP_ONLINE = "https://flp.tryorder.net/en/menu";

const PREVIEW = MENU.slice(0, 6);

function Index() {
  const [open, setOpen] = useState(false);
  const [appOpen, setAppOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const [active, setActive] = useState("");

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
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current = "";
      for (const n of NAV) {
        const el = document.querySelector(n.href);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= line && rect.bottom > line) current = n.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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
            <button
              type="button"
              onClick={() => setAppOpen(true)}
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:shadow-pop hover:brightness-105 sm:inline-flex"
            >
              <Download className="size-4" /> Install FLP app
            </button>
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

        <div
          className={`mx-auto max-w-5xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
            open ? "mt-2 max-h-96 opacity-100" : "pointer-events-none mt-0 max-h-0 opacity-0"
          }`}
        >
          <nav
            className={`rounded-3xl border border-border bg-background/95 p-3 shadow-soft backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? "translate-y-0" : "-translate-y-3"
            }`}
          >
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
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setAppOpen(true);
              }}
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-base font-bold text-primary-foreground sm:hidden"
            >
              <Download className="size-4" /> Install FLP app
            </button>
          </nav>
        </div>
      </header>

      {/* Install app modal */}
      <div
        className={`fixed inset-0 z-[60] flex items-end justify-center p-4 transition-opacity duration-300 sm:items-center ${
          appOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Install the FLP app"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setAppOpen(false)}
          className="absolute inset-0 size-full cursor-default bg-ink/60 backdrop-blur-sm"
        />
        <div
          className={`relative w-full max-w-sm rounded-4xl border border-border bg-background p-7 text-center shadow-pop transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            appOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-95 opacity-0"
          }`}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setAppOpen(false)}
            className="absolute top-4 right-4 inline-flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
          >
            <X className="size-4" />
          </button>
          <img src={flpLogo} alt="FLP logo" width={56} height={56} className="mx-auto size-14 rounded-2xl" />
          <h2 className="mt-4 font-display text-2xl text-ink">Install the FLP app</h2>
          <p className="mt-2 text-sm text-muted-foreground">Choose your store to continue.</p>
          <div className="mt-6 grid gap-2">
            <a
              href={APP_LINKS.ios}
              target="_blank"
              rel="noreferrer"
              onClick={() => setAppOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all duration-300 hover:shadow-pop hover:brightness-105"
            >
              App Store <ArrowUpRight className="size-4" />
            </a>
            <a
              href={APP_LINKS.android}
              target="_blank"
              rel="noreferrer"
              onClick={() => setAppOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold text-ink transition-all duration-300 hover:border-primary/40 hover:text-primary"
            >
              Google Play <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <main id="top">
        {/* Hero — full screen */}
        <section className="relative flex h-svh min-h-[600px] items-center justify-center overflow-hidden">
          {HERO_IMAGES.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              aria-hidden={i !== heroIdx}
              className={`hero-fade absolute inset-0 size-full scale-105 object-cover ${
                i === heroIdx ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-ink/70" />

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
                  onClick={(e) => goTo(e, "#menu")}
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
                <a
                  href="#visit"
                  onClick={(e) => goTo(e, "#visit")}
                  className="inline-flex items-center gap-2 rounded-full border border-background/40 px-7 py-3.5 text-base font-bold text-background transition-all duration-300 hover:bg-background hover:text-ink"
                >
                  Order now
                </a>
              </div>
            </Reveal>
          </div>

          {/* Subtle scroll cue */}
          <a
            href="#menu"
            onClick={(e) => goTo(e, "#menu")}
            className="absolute inset-x-0 bottom-7 z-10 mx-auto flex w-fit flex-col items-center gap-1.5 text-background/70 transition-colors hover:text-background"
          >
            <span className="text-[0.65rem] font-semibold tracking-[0.35em] uppercase">Scroll</span>
            <ChevronDown className="size-4 scroll-hint" />
          </a>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-border bg-primary py-2.5 text-primary-foreground">
          <div className="marquee-track flex w-max gap-20 whitespace-nowrap font-display text-sm tracking-[0.2em] uppercase">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-20">
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

            <div className="relative mt-10">
              <div className="grid gap-3 md:grid-cols-2">
                {PREVIEW.map((item, i) => (
                  <Reveal
                    key={item.name}
                    delay={Math.min(i, 6) * 60}
                    className={i > 2 ? "max-md:hidden" : ""}
                  >
                    <MenuCard item={item} />
                  </Reveal>
                ))}
              </div>

              {/* Gradual blur + view full menu */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40">
                <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_bottom,transparent,black_65%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/70 to-cream" />
                <div className="absolute inset-x-0 bottom-3 flex justify-center">
                  <Link
                    to="/menu"
                    className="group pointer-events-auto inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-all duration-300 hover:shadow-pop hover:brightness-105"
                  >
                    View full menu
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why FLP */}
        <section id="why" className="scroll-mt-28">
          <div className="mx-auto max-w-5xl px-5 py-20 lg:py-28">
            <Reveal>
              <p className="text-[0.7rem] font-bold tracking-[0.3em] text-primary uppercase">Why FLP</p>
              <h2 className="mt-3 font-display text-3xl whitespace-nowrap text-ink sm:text-4xl lg:text-5xl">
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
              <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
                Hungry right <span className="text-primary">now?</span>
              </h2>
            </Reveal>

            <div className="mt-12 grid items-start gap-5 md:grid-cols-3">
              {BRANCHES.map((b, i) => (
                <Reveal key={b.city} delay={i * 120}>
                  <div className="group flex flex-col rounded-3xl border border-border p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                    <h3 className="font-display text-2xl text-ink">{b.city}</h3>
                    <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-primary" /> {b.address}
                    </p>
                    <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                      <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>
                        {b.hours.map((h) => (
                          <span key={h} className="block">
                            {h}
                          </span>
                        ))}
                      </span>
                    </div>
                    {b.phone ? (
                      <a
                        href={`tel:${b.tel}`}
                        className="mt-3 flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-primary"
                      >
                        <Phone className="size-4 shrink-0 text-primary" /> {b.phone}
                      </a>
                    ) : null}
                    <div className="mt-4">
                      <span className="text-sm font-semibold text-ink">Order online:</span>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <a
                          href={b.hunger}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-2xl border border-border bg-background py-1 pr-2.5 pl-1 text-xs font-bold text-ink transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-soft"
                        >
                          <img
                            src={hungerLogo.url}
                            alt="HungerStation"
                            width={40}
                            height={40}
                            loading="lazy"
                            className="size-5 rounded-lg"
                          />
                          HungerStation
                          <ArrowUpRight className="size-3.5 opacity-70" />
                        </a>
                        <a
                          href={FLP_ONLINE}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-2xl border border-primary/30 bg-accent px-2.5 py-1.5 text-xs font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                        >
                          FLP online
                          <ArrowUpRight className="size-3.5 opacity-70" />
                        </a>
                      </div>
                    </div>
                    <a
                      href={b.map}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      Get directions <ArrowRight className="size-4" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
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
                  <a href={n.href} onClick={(e) => goTo(e, n.href)} className="transition-colors hover:text-primary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-ink">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="tel:+966597115868" className="font-semibold text-ink transition-colors hover:text-primary">
                  +966 59 711 5868
                </a>
                <span className="block text-xs">Jubail branch</span>
              </li>
              <li>Jubail — Al Fayhaa, Al Dafi 35811</li>
              <li>Dammam — Al Shatea District</li>
              <li>Al-Baha — King Fahd Road</li>
              <li>
                <a
                  href={FLP_ONLINE}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-primary"
                >
                  Order on FLP online <ArrowUpRight className="size-3.5" />
                </a>
              </li>
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