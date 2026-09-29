import { services } from "@/data/site-content";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="border-t border-card-border/60 bg-ink-soft/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">What&apos;s included</p>
          <h2 className="font-display mt-4 max-w-xl text-3xl leading-tight text-bone sm:text-4xl">
            Coaching, built around you
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-card-border bg-card-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60} className="bg-card p-7">
              <span className="font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-3 text-lg text-bone">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-muted">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
