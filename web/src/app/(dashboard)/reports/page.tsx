import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports & analytics",
};

const bars = [
  { label: "Jan", h: 40 },
  { label: "Feb", h: 55 },
  { label: "Mar", h: 48 },
  { label: "Apr", h: 62 },
  { label: "May", h: 70 },
];

export default function ReportsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-rent-navy sm:text-3xl">Reports &amp; analytics</h1>
        <p className="mt-1 text-sm text-muted">
          Income, occupancy, market rent trends, and AI-assisted forecasts (demo charts).
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-rent-navy">Income by month</h2>
          <div className="mt-6 flex h-48 items-end justify-between gap-2 border-b border-border pb-0">
            {bars.map((b) => (
              <div key={b.label} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full max-w-[48px] rounded-t-lg bg-gradient-to-t from-rent-navy to-rent-teal"
                  style={{ height: `${b.h}%` }}
                />
                <span className="text-xs text-muted">{b.label}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-rent-navy">Occupancy trend</h2>
          <p className="mt-4 text-4xl font-bold text-rent-mint">94%</p>
          <p className="text-sm text-muted">Rolling 90-day average across portfolio</p>
          <p className="mt-6 text-sm text-rent-navy-muted">
            Vacancy risk is concentrated in two units expiring in Q3 — renewal campaigns suggested.
          </p>
        </section>
      </div>
      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-rent-navy">Market price trends</h2>
        <p className="mt-2 text-sm text-muted">
          Micro-market comps show <strong className="text-rent-navy">+2.1%</strong> median rent YoY
          in your ZIP — AI suggests holding list price on 2BR units.
        </p>
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-rent-surface">
          <div className="h-full w-[62%] rounded-full gradient-accent" />
        </div>
        <p className="mt-2 text-xs text-muted">Inflation / deflation index vs. local baseline</p>
      </section>
      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-rent-navy">AI predictions</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-rent-navy-muted">
          <li>Projected collection rate next month: 97.5% (±1.2%)</li>
          <li>Maintenance spend likely +8% seasonally — budget heatmap updated</li>
          <li>Optimal list price for new 1BR: $1,780–$1,820 based on demand signals</li>
        </ul>
      </section>
    </div>
  );
}
