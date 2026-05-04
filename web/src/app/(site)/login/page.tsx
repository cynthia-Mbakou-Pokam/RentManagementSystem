import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
      <h1 className="text-center text-2xl font-bold text-rent-navy">Welcome back</h1>
      <p className="mt-2 text-center text-sm text-muted">Sign in to manage leases, rent, and maintenance.</p>
      <form className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <label className="block">
          <span className="text-xs font-semibold uppercase text-muted">Email</span>
          <input
            type="email"
            autoComplete="email"
            className="mt-1 w-full rounded-xl border border-border bg-rent-surface px-4 py-3 text-sm outline-none ring-rent-teal/30 focus:ring-2"
            placeholder="you@example.com"
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase text-muted">Password</span>
          <input
            type="password"
            autoComplete="current-password"
            className="mt-1 w-full rounded-xl border border-border bg-rent-surface px-4 py-3 text-sm outline-none ring-rent-teal/30 focus:ring-2"
          />
        </label>
        <div className="flex items-center justify-between gap-2">
          <label className="flex items-center gap-2 text-sm text-muted">
            <input type="checkbox" className="rounded border-border" />
            Remember me
          </label>
          <Link href="/login" className="text-sm font-medium text-rent-teal hover:underline">
            Forgot password
          </Link>
        </div>
        <fieldset>
          <legend className="text-xs font-semibold uppercase text-muted">Role</legend>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {(["Tenant", "Landlord", "Admin"] as const).map((r) => (
              <label
                key={r}
                className="flex cursor-pointer items-center justify-center rounded-xl border border-border bg-rent-surface px-2 py-2 text-center text-xs font-medium has-[:checked]:border-rent-teal has-[:checked]:bg-teal-50"
              >
                <input type="radio" name="role" className="sr-only" defaultChecked={r === "Tenant"} />
                {r}
              </label>
            ))}
          </div>
        </fieldset>
        <ButtonLink href="/dashboard/tenant" variant="primary" className="w-full">
          Continue
        </ButtonLink>
      </form>
      <p className="mt-6 text-center text-sm text-muted">
        New here?{" "}
        <Link href="/register" className="font-semibold text-rent-teal hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}
