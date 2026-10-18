import { STEPS } from "../content";

export default function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-center text-3xl font-extrabold text-navy md:text-4xl">
        Painter CRM for every step of the job
      </h2>
      <div className="mt-12 space-y-8">
        {STEPS.map((step) => (
          <article
            key={step.n}
            className="grid gap-6 rounded-[28px] bg-white p-6 shadow-sm md:grid-cols-[88px_1fr]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-sky text-2xl font-extrabold text-white">
              {step.n}
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy">{step.title}</h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                {step.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
