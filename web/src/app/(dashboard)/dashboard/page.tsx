import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
};

const cards = [
  {
    title: "Landlord dashboard",
    body: "Properties, occupancy, income, pending payments, and notifications.",
    href: "/dashboard/landlord",
    tone: "from-rent-navy to-rent-navy-muted",
  },
  {
    title: "Tenant dashboard",
    body: "Rent status, lease summary, maintenance, and budget insights.",
    href: "/dashboard/tenant",
    tone: "from-rent-teal to-rent-blue",
  },
  {
    title: "Admin panel",
    body: "Users, scam bans, audit logs, and platform analytics.",
    href: "/admin",
    tone: "from-slate-700 to-slate-900",
  },
];

export default function DashboardHomePage() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-2xl font-bold text-rent-navy sm:text-3xl">Dashboard overview</h1>
      <p className="mt-2 text-sm text-muted">
        Role-based workspaces — pick a persona to explore the UI (demo, no auth).
      </p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className={`flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br ${c.tone} p-6 text-white shadow-lg transition hover:opacity-95`}
            >
              <h2 className="text-lg font-semibold">{c.title}</h2>
              <p className="mt-2 flex-1 text-sm text-white/85">{c.body}</p>
              <span className="mt-4 text-sm font-semibold text-white">Open →</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
