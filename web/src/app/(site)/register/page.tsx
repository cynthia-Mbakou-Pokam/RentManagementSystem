import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Create account",
};

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 sm:px-6">
      <h1 className="text-center text-2xl font-bold text-rent-navy">Join RentMS</h1>
      <p className="mt-2 text-center text-sm text-muted">
        Basic info, ID upload for verification, and your role.
      </p>
      <form className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block sm:col-span-1">
            <span className="text-xs font-semibold uppercase text-muted">Full name</span>
            <input className="mt-1 w-full rounded-xl border border-border bg-rent-surface px-4 py-3 text-sm outline-none ring-rent-teal/30 focus:ring-2" />
          </label>
          <label className="block sm:col-span-1">
            <span className="text-xs font-semibold uppercase text-muted">Phone</span>
            <input className="mt-1 w-full rounded-xl border border-border bg-rent-surface px-4 py-3 text-sm outline-none ring-rent-teal/30 focus:ring-2" />
          </label>
        </div>
        <label className="block">
          <span className="text-xs font-semibold uppercase text-muted">Email</span>
          <input
            type="email"
            className="mt-1 w-full rounded-xl border border-border bg-rent-surface px-4 py-3 text-sm outline-none ring-rent-teal/30 focus:ring-2"
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase text-muted">Password</span>
          <input
            type="password"
            className="mt-1 w-full rounded-xl border border-border bg-rent-surface px-4 py-3 text-sm outline-none ring-rent-teal/30 focus:ring-2"
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase text-muted">Government ID (upload)</span>
          <input
            type="file"
            className="mt-1 w-full text-sm text-muted file:mr-3 file:rounded-lg file:border-0 file:bg-rent-surface file:px-4 file:py-2 file:font-medium file:text-rent-navy"
          />
        </label>
        <fieldset>
          <legend className="text-xs font-semibold uppercase text-muted">Choose role</legend>
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
        <label className="flex items-start gap-2 text-sm text-muted">
          <input type="checkbox" className="mt-1 rounded border-border" />I agree to the terms and
          privacy policy.
        </label>
        <ButtonLink href="/dashboard" variant="primary" className="w-full">
          Create account
        </ButtonLink>
      </form>
      <p className="mt-6 text-center text-sm text-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-rent-teal hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
