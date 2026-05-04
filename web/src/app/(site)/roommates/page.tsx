import Image from "next/image";
import type { Metadata } from "next";
import { roommateProfiles } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Roommate matching",
};

export default function RoommatesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-rent-navy">Roommate matching</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Profile-based compatibility on budget and lifestyle. Chat connects after mutual interest
        (demo UI).
      </p>
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <section className="rounded-2xl border border-border bg-card p-5 lg:col-span-1">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Your preferences</h2>
          <label className="mt-4 block text-sm">
            <span className="text-muted">Monthly budget</span>
            <input
              type="number"
              defaultValue={900}
              className="mt-1 w-full rounded-xl border border-border bg-rent-surface px-3 py-2 outline-none ring-rent-teal/30 focus:ring-2"
            />
          </label>
          <label className="mt-4 block text-sm">
            <span className="text-muted">Lifestyle</span>
            <select className="mt-1 w-full rounded-xl border border-border bg-rent-surface px-3 py-2 outline-none ring-rent-teal/30 focus:ring-2">
              <option>Quiet, early schedule</option>
              <option>Social evenings</option>
              <option>Remote work friendly</option>
            </select>
          </label>
          <button
            type="button"
            className="mt-6 w-full rounded-xl bg-rent-navy py-2.5 text-sm font-semibold text-white"
          >
            Refresh matches
          </button>
        </section>
        <section className="space-y-4 lg:col-span-2">
          <h2 className="text-lg font-semibold text-rent-navy">Suggested matches</h2>
          <ul className="space-y-4">
            {roommateProfiles.map((r) => (
              <li
                key={r.id}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <Image src={r.avatar} alt="" fill className="object-cover" sizes="64px" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-rent-navy">{r.name}</p>
                  <p className="text-sm text-muted">
                    Budget ~${r.budget}/mo · {r.lifestyle}
                  </p>
                  <p className="mt-1 text-xs font-medium text-rent-mint">Match score {r.match}%</p>
                </div>
                <button
                  type="button"
                  className="rounded-xl border border-border px-4 py-2 text-sm font-semibold text-rent-navy hover:bg-rent-surface"
                >
                  Open chat
                </button>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-dashed border-border bg-rent-surface/50 p-6 text-center text-sm text-muted">
            Chat transcripts sync to your account; optional SMS and email digests in production.
          </div>
        </section>
      </div>
    </div>
  );
}
