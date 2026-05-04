"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/landlord", label: "Landlord" },
  { href: "/dashboard/tenant", label: "Tenant" },
  { href: "/properties", label: "Listings" },
  { href: "/payments", label: "Payments" },
  { href: "/lease", label: "Lease" },
  { href: "/maintenance", label: "Maintenance" },
  { href: "/roommates", label: "Roommates" },
  { href: "/reports", label: "Reports" },
  { href: "/admin", label: "Admin" },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-rent-surface">
      <div className="flex min-h-screen">
        <aside className="hidden w-56 shrink-0 border-r border-border bg-card lg:block">
          <div className="flex h-full flex-col gap-6 p-4">
            <Logo compact className="px-1" />
            <nav className="flex flex-1 flex-col gap-0.5">
              {links.map((l) => {
                const active =
                  l.href === "/dashboard"
                    ? pathname === "/dashboard"
                    : pathname === l.href || pathname.startsWith(l.href + "/");
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-rent-surface text-rent-navy"
                        : "text-muted hover:bg-rent-surface hover:text-rent-navy"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted hover:text-rent-navy"
            >
              ← Marketing site
            </Link>
          </div>
        </aside>
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="border-b border-border bg-card/90 px-4 py-3 lg:hidden">
            <div className="flex items-center justify-between gap-3">
              <Logo />
              <Link href="/" className="text-sm font-medium text-rent-teal">
                Home
              </Link>
            </div>
            <nav className="mt-3 flex flex-wrap gap-1">
              {links.slice(0, 6).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-md bg-rent-surface px-2 py-1 text-xs font-medium text-rent-navy"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <main className="flex-1 px-4 py-8 sm:px-6 lg:px-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
