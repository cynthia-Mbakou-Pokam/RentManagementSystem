import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lease management",
};

export default function LeasePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-rent-navy">Lease management</h1>
      <p className="mt-2 text-sm text-muted">View terms, download contracts, renew, or submit move-out notice.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
          <h2 className="text-lg font-semibold text-rent-navy">Active lease</h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-muted">Property</dt>
              <dd className="font-medium text-rent-navy">Sunlit 2BR · Seattle</dd>
            </div>
            <div>
              <dt className="text-muted">Unit</dt>
              <dd className="font-medium text-rent-navy">4B</dd>
            </div>
            <div>
              <dt className="text-muted">Start</dt>
              <dd className="font-medium text-rent-navy">June 1, 2025</dd>
            </div>
            <div>
              <dt className="text-muted">End</dt>
              <dd className="font-medium text-rent-navy">May 31, 2026</dd>
            </div>
            <div>
              <dt className="text-muted">Monthly rent</dt>
              <dd className="font-medium text-rent-navy">$1,850</dd>
            </div>
            <div>
              <dt className="text-muted">Security deposit</dt>
              <dd className="font-medium text-rent-navy">$1,850 (held in trust)</dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-xl bg-rent-navy px-4 py-2 text-sm font-semibold text-white"
            >
              Download PDF
            </button>
            <button
              type="button"
              className="rounded-xl border border-border px-4 py-2 text-sm font-semibold text-rent-navy hover:bg-rent-surface"
            >
              Request renewal
            </button>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-rent-navy">Move-out notice</h2>
          <p className="mt-2 text-sm text-muted">
            Submit your intent to vacate; we notify your landlord and start the checklist.
          </p>
          <label className="mt-4 block text-sm">
            <span className="text-muted">Target move-out</span>
            <input type="date" className="mt-1 w-full rounded-xl border border-border bg-rent-surface px-3 py-2" />
          </label>
          <label className="mt-4 block text-sm">
            <span className="text-muted">Notes</span>
            <textarea
              rows={3}
              className="mt-1 w-full rounded-xl border border-border bg-rent-surface px-3 py-2 text-sm"
              placeholder="Forwarding address, keys, etc."
            />
          </label>
          <button
            type="button"
            className="mt-4 w-full rounded-xl border border-rent-navy px-4 py-2 text-sm font-semibold text-rent-navy hover:bg-rent-surface"
          >
            Submit notice
          </button>
        </div>
      </div>
    </div>
  );
}
