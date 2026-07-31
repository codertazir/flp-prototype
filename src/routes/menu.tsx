import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { MenuCard } from "@/components/MenuCard";
import { MENU, CATS } from "@/data/menu";
import flpLogo from "@/assets/flp-logo.png";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Full Menu — FLP Smash Burgers, Sandos & Soft Serve" },
      {
        name: "description",
        content:
          "Browse the full FLP menu: smash burgers, crispy chicken sandos, loaded fries, coolers and soft serve, with prices in SAR.",
      },
      { property: "og:title", content: "Full Menu — FLP" },
      {
        property: "og:description",
        content: "Every FLP burger, sando, side, drink and dessert with prices.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function slug(c: string) {
  return c.toLowerCase();
}

function MenuPage() {
  const [active, setActive] = useState<(typeof CATS)[number]>(CATS[0]);
  const [stuck, setStuck] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const line = 220;
      let current: (typeof CATS)[number] = CATS[0];
      for (const c of CATS) {
        const el = document.getElementById(slug(c));
        if (el && el.getBoundingClientRect().top <= line) current = c;
      }
      setActive(current);

      const el = tabsRef.current;
      if (el) {
        const top = el.getBoundingClientRect().top;
        const sticky = window.innerWidth >= 640 ? 88 : 76;
        setStuck(top <= sticky + 1);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goTo = (c: (typeof CATS)[number]) => {
    document.getElementById(slug(c))?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-cream text-foreground">
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-x-0 top-0 z-40 backdrop-blur-lg transition-[height] duration-500 ease-out [mask-image:linear-gradient(to_bottom,black_55%,transparent)] ${
          stuck ? "h-40 sm:h-44" : "h-24 sm:h-28"
        }`}
      />


      <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-border bg-background/80 px-3 py-2 shadow-soft backdrop-blur-xl sm:px-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={flpLogo}
              alt="FLP logo"
              width={40}
              height={40}
              className="size-9 rounded-full transition-transform duration-500 hover:rotate-6 sm:size-10"
            />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-display text-xs tracking-wide text-ink uppercase transition-colors duration-300 hover:text-primary"
          >
            <ArrowLeft className="size-4" /> Back home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-32 pb-24">
        <Reveal>
          <p className="text-[0.7rem] font-bold tracking-[0.3em] text-primary uppercase">Full menu</p>
          <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
            Everything we <span className="text-primary">flip</span>
          </h1>
        </Reveal>

        <div ref={tabsRef} className="sticky top-[4.75rem] z-40 -mx-5 mt-8 px-5 py-3 sm:top-[5.5rem]">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CATS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => goTo(c)}
                className={`shrink-0 rounded-full px-6 py-3 font-display text-base tracking-wide transition-all duration-300 ${
                  active === c
                    ? "bg-primary text-primary-foreground shadow-pop"
                    : "bg-background/70 text-muted-foreground backdrop-blur-sm hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>


        <div className="mt-6 space-y-12">
          {CATS.map((c) => {
            const items = MENU.filter((i) => i.cat === c);
            if (!items.length) return null;
            return (
              <section key={c} id={slug(c)} className="scroll-mt-40">
                <h2 className="font-display text-2xl text-ink sm:text-3xl">{c}</h2>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {items.map((item, i) => (
                    <Reveal key={item.name} delay={Math.min(i, 6) * 60}>
                      <MenuCard item={item} />
                    </Reveal>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}