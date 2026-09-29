import { testimonials } from "@/data/site-content";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.35em] text-gold">In their words</p>
        <h2 className="font-display mt-4 max-w-xl text-3xl leading-tight text-bone sm:text-4xl">
          What clients say mid-program
        </h2>
      </Reveal>

      <div className="mt-14 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={(i % 3) * 90} className="h-full">
            <figure className="flex h-full flex-col rounded-2xl border border-card-border bg-card p-6">
              <span className="font-display text-3xl leading-none text-gold">&ldquo;</span>
              <blockquote className="mt-1 flex-1 text-[15px] leading-relaxed text-bone">
                {t.quote}
              </blockquote>
              {t.name && (
                <figcaption className="mt-4 text-xs uppercase tracking-wider text-bone-muted">
                  — {t.name}
                </figcaption>
              )}
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
