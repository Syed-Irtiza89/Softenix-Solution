import { useState } from "react";
import { FAQS } from "../content";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="text-center text-3xl font-extrabold text-navy">Frequently asked questions</h2>
      <div className="mt-8 space-y-3">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="rounded-2xl border border-slate-100 bg-white">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="font-semibold text-navy">{item.q}</span>
                <span className="text-teal" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && <p className="px-5 pb-4 text-sm leading-6 text-slate-600">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
