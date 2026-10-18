import { useState } from "react";
import { LINKS } from "../content";

const empty = { name: "", email: "", company: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Softenix inquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  function field(key) {
    return (e) => setForm({ ...form, [key]: e.target.value });
  }

  return (
    <section id="contact" className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
      <div>
        <h2 className="text-3xl font-extrabold text-navy">Get started</h2>
        <p className="mt-3 text-slate-600">
          Tell us about your painting company — interiors, exteriors, crew size, and how you
          quote today. We reply on email and can continue on LinkedIn or Facebook.
        </p>
        <div className="mt-6 space-y-3 text-sm">
          <a className="block font-semibold text-navy" href={`mailto:${LINKS.email}`}>
            {LINKS.email}
          </a>
          <a className="block text-sky" href={LINKS.linkedin} target="_blank" rel="noreferrer">
            LinkedIn · softenix-solution
          </a>
          <a className="block text-sky" href={LINKS.facebook} target="_blank" rel="noreferrer">
            Facebook · Softenix Solution
          </a>
          <p className="text-slate-500">Hampton, Virginia, United States</p>
        </div>
      </div>
      <form onSubmit={submit} className="rounded-[28px] bg-white p-6 shadow-sm">
        <label className="mb-4 block text-sm font-medium" htmlFor="name">
          Name
          <input
            id="name"
            required
            autoComplete="name"
            placeholder="Jordan Hale"
            value={form.name}
            onChange={field("name")}
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:border-teal"
          />
        </label>
        <label className="mb-4 block text-sm font-medium" htmlFor="email">
          Email
          <input
            id="email"
            required
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={field("email")}
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:border-teal"
          />
        </label>
        <label className="mb-4 block text-sm font-medium" htmlFor="company">
          Company
          <input
            id="company"
            autoComplete="organization"
            placeholder="Optional"
            value={form.company}
            onChange={field("company")}
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:border-teal"
          />
        </label>
        <label className="mb-4 block text-sm font-medium" htmlFor="message">
          How can we help?
          <textarea
            id="message"
            required
            rows={4}
            placeholder="Crew size, job types, and how you quote today"
            value={form.message}
            onChange={field("message")}
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:border-teal"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-full bg-gradient-to-r from-teal to-sky py-3 font-semibold text-white"
        >
          Send message
        </button>
        {sent && (
          <p className="mt-3 text-center text-sm text-teal-deep" role="status">
            Your email app should open with the message ready for {LINKS.email}.
          </p>
        )}
      </form>
    </section>
  );
}
