export default function DashboardPreview({ variant = 0 }) {
  const views = [
    {
      title: "Job pipeline",
      kpis: [
        ["New jobs", "48"],
        ["Won this week", "12"],
        ["Invoice due", "$18.4k"],
      ],
      columns: [
        ["Lead", ["Harbor House interior", "Oak St exterior"]],
        ["Quoted", ["Riverside cabinets", "City Hall commercial"]],
        ["Scheduled", ["Pine Lane repaint"]],
      ],
    },
    {
      title: "Color & crew",
      kpis: [
        ["Open quotes", "9"],
        ["Crews out", "4"],
        ["Walkthroughs", "6"],
      ],
      columns: [
        ["Colors", ["SW 7005 interior", "BM Hale Navy"]],
        ["Prep", ["Patch + caulk"]],
        ["Crew", ["Team A — Oak St"]],
      ],
    },
    {
      title: "Invoices",
      kpis: [
        ["Paid", "$42.1k"],
        ["Pending", "$9.8k"],
        ["Overdue", "2"],
      ],
      columns: [
        ["Draft", ["INV-104"]],
        ["Sent", ["INV-101", "INV-102"]],
        ["Paid", ["INV-098"]],
      ],
    },
  ];
  const view = views[variant % views.length];

  return (
    <div className="float mx-auto w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-[0_30px_80px_-28px_rgba(15,45,77,0.35)]">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#06d6a0]" />
        </div>
        <p className="text-xs font-semibold text-slate-500">{view.title} · Painter CRM</p>
        <span className="text-xs text-teal">Live</span>
      </div>
      <div className="grid gap-4 bg-gradient-to-br from-[#f7fbff] to-white p-5 md:grid-cols-[200px_1fr]">
        <aside className="hidden space-y-2 rounded-2xl bg-navy p-4 text-white md:block">
          {["Overview", "Jobs", "Quotes", "Invoices", "Crews", "Colors"].map((item, i) => (
            <div
              key={item}
              className={`rounded-xl px-3 py-2 text-sm ${i === variant ? "bg-teal" : "text-white/70"}`}
            >
              {item}
            </div>
          ))}
        </aside>
        <div>
          <div className="mb-4 grid grid-cols-3 gap-3">
            {view.kpis.map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-slate-100 bg-white p-3">
                <p className="text-[11px] text-slate-500">{label}</p>
                <p className="text-lg font-bold text-navy">{value}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {view.columns.map(([name, cards]) => (
              <div key={name} className="rounded-2xl bg-slate-50 p-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {name}
                </p>
                {cards.map((card) => (
                  <div
                    key={card}
                    className="mb-2 rounded-xl bg-white p-3 text-sm font-medium text-navy shadow-sm"
                  >
                    {card}
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-teal to-sky" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
