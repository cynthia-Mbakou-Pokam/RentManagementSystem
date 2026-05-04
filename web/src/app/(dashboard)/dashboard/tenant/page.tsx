import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tenant dashboard",
};

export default function TenantDashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-rent-navy sm:text-3xl">Tenant dashboard</h1>
        <p className="mt-1 text-sm text-muted">Rent, lease, maintenance, and AI budget insights.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
          <h2 className="text-lg font-semibold text-rent-navy">Current rent status</h2>
          <p className="mt-2 text-3xl font-bold text-rent-navy">$1,850</p>
          <p className="text-sm text-muted">Due May 1 · ACH autopay on</p>
          <p className="mt-4 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
            On track
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-rent-navy">Upcoming</h2>
          <p className="mt-3 text-sm text-muted">Next due date</p>
          <p className="text-xl font-bold text-rent-navy">May 1</p>
          <p className="mt-4 text-sm text-muted">Lease ends</p>
          <p className="font-semibold text-rent-navy">May 31, 2026</p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-rent-navy">Lease summary</h2>
          <ul className="mt-4 space-y-2 text-sm text-rent-navy-muted">
            <li>Sunlit 2BR · Unit 4B</li>
            <li>Monthly rent $1,850 · Deposit held in trust</li>
            <li>Renewal window opens in 45 days</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-rent-navy">AI budget insights</h2>
          <p className="mt-3 text-sm text-muted">
            At your stated income, rent is <strong className="text-rent-mint">28%</strong> of gross
            — within the recommended 30% guardrail.
          </p>
          <p className="mt-3 text-sm text-muted">
            Suggested savings: <strong className="text-rent-navy">$200/mo</strong> toward emergency
            fund based on your expense profile.
          </p>
        </section>
      </div>
      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-rent-navy">Maintenance</h2>
        <p className="mt-2 text-sm text-muted">1 request in progress · 1 awaiting scheduling</p>
      </section>
    </div>
  );
}
