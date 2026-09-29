import { brand, contact } from "@/data/site-content";
import { CookieMark } from "./CookieMark";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full opacity-15 blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <CookieMark className="mx-auto h-10 w-10" />
          <h2 className="font-display mt-6 text-3xl leading-tight text-bone sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 text-bone-muted">{contact.subhead}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={brand.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-8 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              {contact.closer}
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-bone-muted">
            <a
              href={`https://instagram.com/${brand.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-gold"
            >
              @{brand.instagram}
            </a>
            <span className="h-1 w-1 rounded-full bg-card-border" />
            <a
              href={`https://tiktok.com/@${brand.tiktok}`}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-gold"
            >
              TikTok
            </a>
            <span className="h-1 w-1 rounded-full bg-card-border" />
            <span>{brand.city}</span>
          </div>
        </Reveal>

        <p className="mt-16 text-xs text-bone-muted/50">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
