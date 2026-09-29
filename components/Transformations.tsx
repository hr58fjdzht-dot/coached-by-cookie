import { transformations } from "@/data/site-content";
import { Reveal } from "./Reveal";
import { TransformationCard } from "./TransformationCard";

export function Transformations() {
  return (
    <section id="results" className="border-t border-card-border/60 bg-ink-soft/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Results</p>
          <h2 className="font-display mt-4 max-w-xl text-3xl leading-tight text-bone sm:text-4xl">
            Real clients, real data
          </h2>
          <p className="mt-4 max-w-lg text-bone-muted">
            Every transformation is tracked with weekly weigh-ins, measurements, and photos —
            progress you can see, backed by numbers.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {transformations.map((item, i) => (
            <Reveal key={item.id} delay={i * 80} className="h-full">
              <TransformationCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
