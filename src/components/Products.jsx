import { PRODUCTS } from "../content";

export default function Products() {
  return (
    <>
      <section id="work" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold text-navy">What we ship</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {PRODUCTS.map((p) => (
            <article key={p.title} className="rounded-[28px] bg-navy p-7 text-white">
              <span className="rounded-full bg-teal/20 px-3 py-1 text-xs font-semibold text-teal">
                {p.tag}
              </span>
              <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
              <p className="mt-2 text-white/75">{p.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-gradient-to-r from-navy via-[#155a8a] to-teal p-8 text-white md:p-12">
          <h2 className="text-3xl font-extrabold md:text-4xl">Softenix CRM does it all</h2>
          <p className="mt-3 max-w-xl text-white/80">
            Lead acquisition, sales, marketing, customer service, and automation — all in one
            place. Headquartered in Hampton, Virginia, built for growing teams.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy"
          >
            Talk to Softenix
          </a>
        </div>
      </section>
    </>
  );
}
