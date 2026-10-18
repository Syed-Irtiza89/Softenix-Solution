import { REASONS } from "../content";
import { Icon } from "./Icons";

export default function Why() {
  return (
    <section id="why" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-extrabold text-navy md:text-4xl">
          Why businesses choose Softenix
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          We architect software, not just pages — CRM, portals, enterprise backends, and Web3
          products that are built to scale.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {REASONS.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-100 bg-[#f7fbff] p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-sky">
                <Icon name={item.icon} />
              </div>
              <h3 className="text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
