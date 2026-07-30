import { useState } from "react";
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

function MenuPage() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const items = cat === "All" ? MENU : MENU.filter((i) => i.cat === cat);

  return (
    <div className="min-h-screen bg-cream text-foreground">
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
              <MenuCard item={item} />
            </Reveal>
          ))}
        </div>
      </main>
    </div>
  );
}