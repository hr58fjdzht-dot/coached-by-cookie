import { hero } from "@/data/site-content";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center"
    >
      {/* Off-center radial glow — deliberately asymmetric, not a centered gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-15%] left-[-8%] h-[380px] w-[380px] rounded-full opacity-10 blur-[100px]"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
      />

      <Reveal>
        <p className="text-xs uppercase tracking-[0.35em] text-gold">{hero.eyebrow}</p>
      </Reveal>

      <Reveal delay={100}>
        <h1 className="font-display mt-6 max-w-3xl text-4xl leading-[1.1] text-bone sm:text-6xl">
          {hero.headline}
        </h1>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-6 max-w-xl text-balance text-base text-bone-muted sm:text-lg">
          {hero.subhead}
        </p>
      </Reveal>

      <Reveal delay={300}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={hero.ctaPrimary.href}
            className="rounded-full bg-gold px-7 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 hover:bg-gold-soft"
          >
            {hero.ctaPrimary.label}
          </a>
          <a
            href={hero.ctaSecondary.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-card-border px-7 py-3 text-sm font-medium text-bone transition-colors hover:border-gold hover:text-gold"
          >
            {hero.ctaSecondary.label}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
