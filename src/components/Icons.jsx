const wrap = "h-6 w-6 text-white";

export function Icon({ name }) {
  const paths = {
    grid: (
      <path
        d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"
        fill="currentColor"
      />
    ),
    flow: (
      <path
        d="M5 7h6v3H5V7zm8 7h6v3h-6v-3zM8 10v4h8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    ),
    card: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
      </>
    ),
    chat: (
      <path
        d="M5 6h14a2 2 0 012 2v7a2 2 0 01-2 2H9l-4 3V8a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    ),
    cal: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8 3v4M16 3v4M4 10h16" stroke="currentColor" strokeWidth="2" />
      </>
    ),
    chart: (
      <path
        d="M5 19V9m7 10V5m7 14v-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ),
    menu: (
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    ),
    close: (
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    ),
  };

  return (
    <svg className={wrap} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
