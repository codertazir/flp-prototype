import type { Item } from "@/data/menu";

export function Riyal({ className = "" }: { className?: string }) {
  return (
    <span aria-label="Saudi Riyal" className={className}>
      ﷼
    </span>
  );
}

export function MenuCard({ item }: { item: Item }) {
  return (
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

      <div className="shrink-0 px-1 text-right">
        <span className="inline-flex items-baseline gap-1 font-display text-lg text-primary">
          {item.price} <Riyal className="text-sm" />
        </span>
      </div>
    </article>
  );
}