export function CookieMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Bitten cookie silhouette */}
      <path
        d="M24 4c11 0 20 9 20 20 0 10.5-8.2 19.2-18.6 19.9C24.9 42 24 40.3 24 38.4c0-2.2 1.8-4 4-4a4 4 0 0 0 0-8 6 6 0 0 1-6-6 5 5 0 0 0-5-5 6.5 6.5 0 0 1-6.4-5.4C13.7 6.6 18.5 4 24 4Z"
        fill="var(--gold)"
      />
      <circle cx="18.5" cy="16.5" r="2.1" fill="var(--ink)" />
      <circle cx="27.5" cy="12.5" r="1.7" fill="var(--ink)" />
      <circle cx="31.5" cy="21.5" r="2.3" fill="var(--ink)" />
      <circle cx="22.5" cy="26.5" r="1.6" fill="var(--ink)" />
      <circle cx="14.5" cy="24.5" r="1.4" fill="var(--ink)" />
    </svg>
  );
}
