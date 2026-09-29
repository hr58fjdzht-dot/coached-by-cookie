import { brand } from "@/data/site-content";
import { CookieMark } from "./CookieMark";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c2.7 0 3 .01 4.1.06 1.1.05 1.8.22 2.2.36.6.23 1 .5 1.4.9.4.4.68.85.9 1.4.15.45.32 1.15.36 2.2.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.1-.22 1.8-.36 2.2a3.9 3.9 0 0 1-.9 1.4c-.4.4-.85.68-1.4.9-.45.15-1.15.32-2.2.36-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.1-.05-1.8-.22-2.2-.36a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.15-.45-.32-1.15-.36-2.2C2.2 15 2.2 14.7 2.2 12s.01-3 .06-4.1c.05-1.1.22-1.8.36-2.2.23-.6.5-1 .9-1.4.4-.4.85-.68 1.4-.9.45-.15 1.15-.32 2.2-.36C8.1 2.2 8.4 2.2 12 2.2Zm0 1.8c-2.66 0-2.98.01-4.03.06-.9.04-1.4.19-1.72.32-.43.17-.74.36-1.07.69-.33.33-.52.64-.69 1.07-.13.32-.28.82-.32 1.72C4.11 9 4.1 9.32 4.1 12s.01 2.98.06 4.03c.04.9.19 1.4.32 1.72.17.43.36.74.69 1.07.33.33.64.52 1.07.69.32.13.82.28 1.72.32 1.05.05 1.37.06 4.03.06s2.98-.01 4.03-.06c.9-.04 1.4-.19 1.72-.32.43-.17.74-.36 1.07-.69.33-.33.52-.64.69-1.07.13-.32.28-.82.32-1.72.05-1.05.06-1.37.06-4.03s-.01-2.98-.06-4.03c-.04-.9-.19-1.4-.32-1.72a2.9 2.9 0 0 0-.69-1.07 2.9 2.9 0 0 0-1.07-.69c-.32-.13-.82-.28-1.72-.32C14.98 4.01 14.66 4 12 4Zm0 3.05A4.95 4.95 0 1 1 7.05 12 4.95 4.95 0 0 1 12 7.05Zm0 1.8A3.15 3.15 0 1 0 15.15 12 3.15 3.15 0 0 0 12 8.85Zm5.15-2.01a1.16 1.16 0 1 1-1.16-1.16 1.16 1.16 0 0 1 1.16 1.16Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M16.6 2h-3.2v13.6a2.8 2.8 0 1 1-2-2.68V9.62a6 6 0 1 0 5.2 5.95V8.4a7.6 7.6 0 0 0 4.4 1.4V6.6a4.4 4.4 0 0 1-4.4-4.4Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.35a9.85 9.85 0 0 0 4.62 1.16h.01c5.46 0 9.91-4.45 9.91-9.9C21.96 6.44 17.5 2 12.04 2Zm5.8 14.07c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.11.11-1.79-.11a15 15 0 0 1-1.62-.6 12.2 12.2 0 0 1-4.7-4.16c-.35-.47-1.18-1.57-1.18-3 0-1.41.74-2.1 1-2.39.25-.28.55-.35.74-.35h.53c.17 0 .4-.06.62.48.24.58.8 2 .87 2.15.07.14.11.31.02.5-.09.19-.14.3-.27.46-.14.17-.29.37-.41.5-.14.14-.28.3-.12.58.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.17-.19.7-.82.89-1.1.19-.28.38-.23.63-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.13.07.72-.17 1.4Z" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex justify-center px-4 pt-4">
      <div className="flex items-center gap-4 rounded-full border border-card-border bg-ink-soft/90 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-ink-soft/70 sm:gap-5 sm:px-5">
        <a href="#top" className="flex items-center gap-2">
          <CookieMark className="h-5 w-5" />
          <span className="font-display text-sm tracking-wide text-bone whitespace-nowrap">
            {brand.name}
          </span>
        </a>

        <span className="hidden h-4 w-px bg-card-border sm:block" />

        <div className="flex items-center gap-3 text-bone-muted">
          <a
            href={`https://instagram.com/${brand.instagram}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-gold"
          >
            <InstagramIcon />
          </a>
          <a
            href={`https://tiktok.com/@${brand.tiktok}`}
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="transition-colors hover:text-gold"
          >
            <TikTokIcon />
          </a>
          <a
            href={brand.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-bone-muted transition-colors hover:text-gold"
          >
            <WhatsAppIcon />
            <span className="hidden sm:inline">{brand.whatsapp}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
