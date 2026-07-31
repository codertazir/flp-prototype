import type { Item } from "@/data/menu";

export function Riyal({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1124.14 1256.39"
      role="img"
      aria-label="Saudi Riyal"
      fill="currentColor"
      className={`inline-block h-[0.85em] w-auto align-baseline ${className}`}
    >
      <path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
      <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
    </svg>
  );
}

export function MenuCard({ item }: { item: Item }) {
  return (
    <article className="group flex items-center gap-4 rounded-2xl bg-card p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft">
      <div className="size-20 shrink-0 overflow-hidden rounded-xl sm:size-24">
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
        {item.cal != null && (
          <p className="mt-1 text-[0.65rem] font-bold tracking-wider text-muted-foreground/80 uppercase">
            {item.cal} Cal
          </p>
        )}
      </div>

      <div className="shrink-0 px-1 text-right">
        <span className="inline-flex items-baseline gap-1 font-display text-lg text-primary">
          {item.price.toFixed(2)} <Riyal className="text-sm" />
        </span>

      </div>
    </article>
  );
}