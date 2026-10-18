import { ABOUT, LINKS } from "../content";

export default function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-sm font-semibold tracking-wide text-teal-deep">From our LinkedIn</p>
        <h2 className="mt-2 text-center text-3xl font-extrabold text-navy md:text-4xl">Who we are</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg font-medium text-navy">{ABOUT.tagline}</p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">{ABOUT.who}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {ABOUT.facts.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-100 bg-[#f7fbff] p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
              <p className="mt-2 font-bold text-navy">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-navy">What we do</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              {ABOUT.what.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy">Why Softenix?</h3>
            <p className="mt-4 text-slate-600">{ABOUT.why}</p>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-sm font-semibold text-sky"
            >
              See Softenix Solution on LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
