import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin panel",
};

const users = [
  { id: "u1", name: "Jordan M.", email: "jordan@example.com", role: "Tenant", flags: 0 },
  { id: "u2", name: "Eli R.", email: "eli@example.com", role: "Landlord", flags: 0 },
  { id: "u3", name: "Suspicious Listings Inc.", email: "cheap@temp.mail", role: "Landlord", flags: 3 },
];

const audit = [
  { ts: "2026-05-03 14:02", action: "Admin banned user u3 — scam pattern" },
  { ts: "2026-05-03 11:40", action: "Listing L-882 flagged by duplicate image model" },
  { ts: "2026-05-02 09:15", action: "Role changed u9 → property_manager" },
];

export default function AdminPanelPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-rent-navy sm:text-3xl">Admin panel</h1>
        <p className="mt-1 text-sm text-muted">Users, scam enforcement, audit trail, platform analytics.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Active users", value: "18.2k" },
          { label: "Banned (30d)", value: "42" },
          { label: "Open investigations", value: "7" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase text-muted">{s.label}</p>
            <p className="mt-2 text-2xl font-bold text-rent-navy">{s.value}</p>
          </div>
        ))}
      </div>
      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-rent-navy">Users</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted">
                <th className="pb-2 font-medium">Name</th>
                <th className="pb-2 font-medium">Email</th>
                <th className="pb-2 font-medium">Role</th>
                <th className="pb-2 font-medium">Flags</th>
                <th className="pb-2 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b border-border last:border-0">
                  <td className="py-3 font-medium text-rent-navy">{u.name}</td>
                  <td className="py-3 text-muted">{u.email}</td>
                  <td className="py-3">{u.role}</td>
                  <td className="py-3">{u.flags}</td>
                  <td className="py-3">
                    {u.flags > 0 ? (
                      <button
                        type="button"
                        className="rounded-lg bg-red-600 px-3 py-1 text-xs font-semibold text-white"
                      >
                        Ban scammer
                      </button>
                    ) : (
                      <span className="text-xs text-muted">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-rent-navy">Audit log</h2>
        <ul className="mt-4 space-y-2 font-mono text-xs text-rent-navy-muted">
          {audit.map((a) => (
            <li key={a.ts} className="rounded-lg bg-rent-surface px-3 py-2">
              <span className="text-muted">{a.ts}</span> — {a.action}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
