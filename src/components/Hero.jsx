import { useEffect, useState } from "react";
import DashboardPreview from "./DashboardPreview";
import { CAPABILITIES, STATS } from "../content";

export default function Hero() {
  const [preview, setPreview] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPreview((n) => (n + 1) % 3);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section id="overview" className="px-4 pb-8 pt-14 text-center md:pt-20">
        <p className="mb-4 text-sm font-semibold tracking-wide text-teal-deep">
          Hampton, Virginia · Sell smarter, faster, better with Softenix CRM
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-navy md:text-6xl">
          Softenix: one platform to sell smarter, faster, better
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
          From lead capture to payment and everything in between, Softenix Solution helps your
          team stay focused, connected, and in control.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#contact" className="rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white">
            Get started
          </a>
          <a
            href="#journey"
            className="rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-navy"
          >
            See how it works
          </a>
        </div>
        <div className="mt-12">
          <DashboardPreview variant={preview} />
          <div className="mt-5 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show dashboard ${i + 1}`}
                aria-pressed={preview === i}
                onClick={() => setPreview(i)}
                className={`h-2.5 rounded-full transition ${preview === i ? "w-8 bg-teal" : "w-2.5 bg-slate-300"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl grid-cols-2 gap-3 px-4 py-8 sm:grid-cols-4">
        {STATS.map((item) => (
          <div key={item.label} className="rounded-2xl border border-white bg-white/90 px-4 py-5 text-center shadow-sm">
            <p className="text-sm font-extrabold text-navy sm:text-base">{item.value}</p>
            <p className="mt-1 text-xs text-slate-500">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-5xl grid-cols-2 gap-3 px-4 pb-10 sm:grid-cols-4">
        {CAPABILITIES.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white bg-white/80 px-4 py-5 text-center text-sm font-semibold text-navy shadow-sm"
          >
            {item}
          </div>
        ))}
      </section>

      <section className="overflow-hidden py-6" aria-hidden="true">
        <p className="mb-4 text-center text-sm font-semibold text-slate-500">
          Built in Hampton, Virginia. Ready for teams nationwide.
        </p>
        <div className="relative">
          <div className="marquee flex w-[200%] gap-10 text-lg font-extrabold tracking-wide text-slate-300">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i}>SOFTENIX SOLUTION</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
