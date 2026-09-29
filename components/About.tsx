import { about, brand } from "@/data/site-content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="grid gap-12 sm:grid-cols-[0.9fr_1.1fr] sm:gap-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">{brand.city}</p>
          <h2 className="font-display mt-4 text-3xl leading-tight text-bone sm:text-4xl">
            {about.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-bone-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid gap-3 sm:grid-cols-2">
            {about.specialties.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-card-border bg-card p-5 transition-colors hover:border-gold-deep"
              >
                <h3 className="font-display text-lg text-gold-soft">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-muted">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
