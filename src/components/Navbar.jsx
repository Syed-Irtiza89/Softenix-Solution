import { useState } from "react";
import Brand from "./Brand";
import { NAV } from "../content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Brand compact />
        <nav className="hidden items-center gap-4 text-sm font-medium text-navy xl:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-teal-deep">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-teal to-sky px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal/20 sm:px-5"
          >
            Get started
          </a>
          <button
            type="button"
            className="rounded-xl border border-slate-200 bg-white p-2 text-navy xl:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-3 xl:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2 text-sm font-medium text-navy hover:bg-slate-50"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
