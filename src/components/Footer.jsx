import Brand from "./Brand";
import { LINKS, NAV } from "../content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 md:flex-row md:items-start md:justify-between">
        <Brand />
        <nav className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-600">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-navy">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-sm text-slate-600">
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={LINKS.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href={`mailto:${LINKS.email}`}>Email</a>
        </div>
      </div>
      <p className="border-t border-slate-100 py-4 text-center text-xs text-slate-400">
        © {year} Softenix Solution · Hampton, Virginia
      </p>
    </footer>
  );
}
