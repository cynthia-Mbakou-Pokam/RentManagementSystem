import Link from "next/link";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm space-y-3">
            <Logo />
            <p className="text-sm leading-relaxed text-muted">
              A smart housing platform for tenants and landlords — affordability insights, scam
              detection, and transparent renting.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Product</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/properties" className="text-rent-navy-muted hover:text-rent-navy">
                    Listings
                  </Link>
                </li>
                <li>
                  <Link href="/roommates" className="text-rent-navy-muted hover:text-rent-navy">
                    Roommates
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-rent-navy-muted hover:text-rent-navy">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Company</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/#how" className="text-rent-navy-muted hover:text-rent-navy">
                    About
                  </Link>
                </li>
                <li>
                  <span className="text-rent-navy-muted">Contact</span>
                </li>
                <li>
                  <span className="text-rent-navy-muted">Privacy</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Tenants</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/payments" className="text-rent-navy-muted hover:text-rent-navy">
                    Payments
                  </Link>
                </li>
                <li>
                  <Link href="/lease" className="text-rent-navy-muted hover:text-rent-navy">
                    Lease
                  </Link>
                </li>
                <li>
                  <Link href="/maintenance" className="text-rent-navy-muted hover:text-rent-navy">
                    Maintenance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-border pt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} Rent Management System. Demo UI — not financial or legal
          advice.
        </p>
      </div>
    </footer>
  );
}
