import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance",
};

const requests = [
  { id: "M-441", title: "Leaking kitchen faucet", status: "In progress" as const, date: "Apr 28" },
  { id: "M-402", title: "Heat not reaching bedroom", status: "Pending" as const, date: "Apr 20" },
  { id: "M-388", title: "Hall light flicker", status: "Completed" as const, date: "Mar 2" },
];

const statusColor: Record<string, string> = {
  Pending: "bg-amber-100 text-amber-900",
  "In progress": "bg-sky-100 text-sky-900",
  Completed: "bg-emerald-100 text-emerald-900",
};

export default function MaintenancePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-rent-navy">Maintenance</h1>
      <p className="mt-2 text-sm text-muted">Submit requests, upload photos, and track status.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <form className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-rent-navy">New request</h2>
          <label className="mt-4 block text-sm">
            <span className="text-muted">Issue summary</span>
            <input className="mt-1 w-full rounded-xl border border-border bg-rent-surface px-3 py-2 outline-none ring-rent-teal/30 focus:ring-2" />
          </label>
          <label className="mt-4 block text-sm">
            <span className="text-muted">Details</span>
            <textarea rows={4} className="mt-1 w-full rounded-xl border border-border bg-rent-surface px-3 py-2 text-sm outline-none ring-rent-teal/30 focus:ring-2" />
          </label>
          <label className="mt-4 block text-sm">
            <span className="text-muted">Photos</span>
            <input
              type="file"
              multiple
              accept="image/*"
              className="mt-1 w-full text-sm text-muted file:mr-3 file:rounded-lg file:border-0 file:bg-rent-surface file:px-4 file:py-2 file:font-medium file:text-rent-navy"
            />
          </label>
          <button
            type="button"
            className="mt-6 w-full rounded-xl bg-rent-navy py-2.5 text-sm font-semibold text-white"
          >
            Submit request
          </button>
        </form>

        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-rent-navy">Your requests</h2>
          <ul className="mt-4 space-y-3">
            {requests.map((r) => (
              <li
                key={r.id}
                className="flex items-start justify-between gap-3 rounded-xl border border-border bg-rent-surface/50 px-4 py-3"
              >
                <div>
                  <p className="font-medium text-rent-navy">{r.title}</p>
                  <p className="text-xs text-muted">
                    {r.id} · {r.date}
                  </p>
                </div>
                <span className={`shrink-0 rounded-full px-2 py-1 text-xs font-semibold ${statusColor[r.status]}`}>
                  {r.status}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
