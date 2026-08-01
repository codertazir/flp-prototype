import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, ArrowUpRight } from "lucide-react";
import flpLogo from "@/assets/flp-logo.png";

const BRANCHES = [
  {
    city: "Dammam",
    address: "Al Shatea District — Dammam",
    map: "https://maps.app.goo.gl/M2h9YW48mR8QYVDZA",
  },
  {
    city: "Jubail",
    address: "Al Fayhaa District, Al Dafi — Jubail 35811",
    map: "https://maps.app.goo.gl/Fzw14kEaQugvMLWa8",
  },
  {
    city: "Al-Baha",
    address: "King Fahd Road — Al-Baha",
    map: "https://maps.app.goo.gl/vipgLJvHEU92eFhM9",
  },
];

const FLP_ONLINE = "https://flp.tryorder.net/en/menu";

const EXPLORE = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Full menu" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <img
            src={flpLogo}
            alt="FLP logo"
            width={48}
            height={48}
            loading="lazy"
            className="size-12 rounded-full"
          />
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
            {EXPLORE.map((n) => (
              <li key={n.href}>
                <Link to={n.href} className="transition-colors hover:text-primary">
                  {n.label}
                </Link>
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
            {BRANCHES.map((b) => (
              <li key={b.city}>
                <a
                  href={b.map}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-start gap-1.5 transition-colors hover:text-primary"
                >
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" />
                  <span>
                    {b.city} — {b.address.replace(` — ${b.city}`, "")}
                  </span>
                </a>
              </li>
            ))}
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
  );
}
