import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin (role)",
};

export default function AdminRoleDashboardPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-2xl font-bold text-rent-navy">Admin role dashboard</h1>
      <p className="text-sm text-muted">
        Day-to-day operator view. For full platform controls, open the{" "}
        <Link href="/admin" className="font-semibold text-rent-teal hover:underline">
          Admin panel
        </Link>
        .
      </p>
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <p className="text-sm text-rent-navy-muted">
          Queue depth, verification backlog, and escalation routing would appear here in production.
        </p>
      </div>
    </div>
  );
}
