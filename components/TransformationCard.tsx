import Image from "next/image";
import type { Transformation } from "@/data/site-content";

function Panel({ label, src }: { label: string; src?: string }) {
  if (src) {
    return (
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-ink-soft">
        <Image src={src} alt={label} fill className="object-cover" />
        <span className="absolute bottom-2 left-2 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] uppercase tracking-wider text-bone-muted">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-card-border bg-ink-soft/60">
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 text-bone-muted/50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 20c0-3.6 3.1-6.4 7-6.4s7 2.8 7 6.4" />
      </svg>
      <span className="text-[10px] uppercase tracking-wider text-bone-muted/60">
        {label} · photo pending
      </span>
    </div>
  );
}

export function TransformationCard({ item }: { item: Transformation }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-card-border bg-card p-4 transition-colors hover:border-gold-deep">
      <div className="grid grid-cols-2 gap-2">
        <Panel label={item.beforeLabel} src={item.beforeSrc} />
        <Panel label={item.afterLabel} src={item.afterSrc} />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-display text-base text-bone">{item.alias}</span>
        <span className="text-xs uppercase tracking-wider text-gold">{item.duration}</span>
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-bone-muted">{item.caption}</p>
    </div>
  );
}
