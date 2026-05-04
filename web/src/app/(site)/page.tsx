import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { testimonials } from "@/lib/mock-data";

const features = [
  {
    title: "Roommate matching",
    body: "Lifestyle and budget signals power compatibility scores before you message.",
    icon: "👥",
  },
  {
    title: "Scam detection",
    body: "Duplicate imagery, price anomalies, and behavioral flags surface risky listings.",
    icon: "🛡️",
  },
  {
    title: "Affordability score",
    body: "Income, rent, and expenses synthesize into clear Safe / Risky / Unaffordable guidance.",
    icon: "📊",
  },
  {
    title: "AI budget planner",
    body: "Ideal rent targets, savings pacing, and monthly breakdowns keep goals realistic.",
    icon: "💡",
  },
];

const steps = [
  { n: "1", title: "Search", body: "Filter by location, price, roommates, and safety signals." },
  { n: "2", title: "Compare", body: "Stack listings with affordability, scam risk, and landlord transparency." },
  { n: "3", title: "Rent", body: "Apply, e-sign, pay, and request maintenance in one flow." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-card to-rent-surface">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-100/80 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-rent-teal">
              Property management system
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-rent-navy sm:text-5xl lg:text-6xl">
              Find Safe &amp; Affordable Housing{" "}
              <span className="text-gradient">Easily</span>
            </h1>
            <p className="mt-5 text-lg text-muted sm:text-xl">
              Tenants discover verified homes. Landlords run occupancy, rent, and maintenance with
              AI-backed market intelligence.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-border bg-card p-4 shadow-lg shadow-rent-navy/5 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-3">
              <label className="block sm:col-span-1">
                <span className="text-xs font-semibold uppercase text-muted">Location</span>
                <input
                  placeholder="City or neighborhood"
                  className="mt-1 w-full rounded-xl border border-border bg-rent-surface px-4 py-3 text-sm outline-none ring-rent-teal/30 focus:ring-2"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="text-xs font-semibold uppercase text-muted">Max rent</span>
                <input
                  type="number"
                  placeholder="$ / month"
                  className="mt-1 w-full rounded-xl border border-border bg-rent-surface px-4 py-3 text-sm outline-none ring-rent-teal/30 focus:ring-2"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="text-xs font-semibold uppercase text-muted">Roommates</span>
                <select className="mt-1 w-full rounded-xl border border-border bg-rent-surface px-4 py-3 text-sm outline-none ring-rent-teal/30 focus:ring-2">
                  <option>Any</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </label>
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <ButtonLink href="/properties" variant="primary" className="w-full sm:w-auto">
                Find a Home
              </ButtonLink>
              <ButtonLink href="/register" variant="secondary" className="w-full sm:w-auto">
                List Your Property
              </ButtonLink>
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { k: "Listings screened", v: "12k+" },
              { k: "Avg. response (landlords)", v: "2.4h" },
              { k: "Scam flags caught", v: "340+" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-border bg-card/80 px-5 py-4 text-center backdrop-blur"
              >
                <p className="text-2xl font-bold text-rent-navy">{s.v}</p>
                <p className="text-sm text-muted">{s.k}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-rent-navy sm:text-4xl">Built for trust &amp; clarity</h2>
          <p className="mt-3 text-muted">
            AI supports decisions — from affordability to fraud — without replacing human judgment.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <span className="text-3xl" aria-hidden>
                {f.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-rent-navy">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="border-y border-border bg-card py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-rent-navy sm:text-4xl">How it works</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="relative text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rent-navy text-lg font-bold text-white">
                  {s.n}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-rent-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-rent-navy sm:text-4xl">What people say</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-rent-navy-muted">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 border-t border-border pt-4 text-sm font-semibold text-rent-navy">
                {t.name}
                <span className="block text-xs font-normal text-muted">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-rent-navy py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to move with confidence?</h2>
          <p className="max-w-xl text-sm text-white/80">
            Explore listings with affordability and scam signals, or onboard your portfolio for
            modern rent operations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href="/properties" variant="secondary" className="min-w-[160px]">
              Browse homes
            </ButtonLink>
            <Link
              href="/dashboard"
              className="inline-flex min-w-[160px] items-center justify-center rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Open dashboard
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
