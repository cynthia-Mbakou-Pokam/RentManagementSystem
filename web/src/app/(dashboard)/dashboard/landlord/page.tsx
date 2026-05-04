import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landlord dashboard",
};

const notifications = [
  "Tenant paid rent for Unit 4B — $1,850",
  "Maintenance assigned: M-441 (Kitchen faucet)",
  "Lease renewal requested — Unit 2A",
];

export default function LandlordDashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-rent-navy sm:text-3xl">Landlord dashboard</h1>
        <p className="mt-1 text-sm text-muted">Portfolio snapshot and operational signals.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total properties", value: "12" },
          { label: "Occupancy rate", value: "94%" },
          { label: "Monthly income", value: "$28.4k" },
          { label: "Pending payments", value: "3" },
        ].map((k) => (
          <div key={k.label} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">{k.label}</p>
            <p className="mt-2 text-2xl font-bold text-rent-navy">{k.value}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-rent-navy">Notifications</h2>
          <ul className="mt-4 space-y-3 text-sm text-rent-navy-muted">
            {notifications.map((n) => (
              <li key={n} className="rounded-xl bg-rent-surface px-4 py-3">
                {n}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-rent-navy">Quick actions</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Add property", "Post vacancy", "Run income report", "Message tenants"].map((a) => (
              <button
                key={a}
                type="button"
                className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-rent-navy hover:bg-rent-surface"
              >
                {a}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
