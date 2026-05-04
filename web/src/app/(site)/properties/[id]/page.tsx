import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { getProperty, getPropertyExtras } from "@/lib/properties";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const p = getProperty(id);
  return { title: p?.title ?? "Listing" };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params;
  const p = getProperty(id);
  if (!p) notFound();
  const x = getPropertyExtras(id, p.price);

  const scamLabel =
    p.scamRisk === "low" ? "Low risk" : p.scamRisk === "medium" ? "Review suggested" : "High risk";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Link href="/properties" className="text-sm font-medium text-rent-teal hover:underline">
        ← Back to listings
      </Link>
      <div className="mt-6 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:col-span-2 sm:aspect-[16/9]">
              <Image src={p.image} alt="" fill className="object-cover" priority sizes="(max-width:1024px) 100vw, 66vw" />
            </div>
            {[p.image, p.image].map((src, i) => (
              <div key={i} className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl sm:block">
                <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
          <section className="mt-8">
            <h1 className="text-2xl font-bold text-rent-navy sm:text-3xl">{p.title}</h1>
            <p className="mt-1 text-muted">{p.city}</p>
            <p className="mt-6 text-sm leading-relaxed text-rent-navy-muted">{x.description}</p>
            <h2 className="mt-8 text-lg font-semibold text-rent-navy">Amenities</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {x.amenities.map((a) => (
                <li key={a} className="rounded-full border border-border bg-card px-3 py-1 text-sm">
                  {a}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <p className="text-3xl font-bold text-rent-navy">
              ${p.price.toLocaleString()}
              <span className="text-base font-normal text-muted">/mo</span>
            </p>
            <p className="mt-1 text-sm text-muted">
              {p.beds} bd · {p.baths} ba · {p.sqft} sqft
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-muted">AI affordability</span>
                <span className="font-semibold text-rent-mint">{p.affordabilityScore} — {x.affordabilityVerdict}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-muted">Scam risk</span>
                <span className="font-semibold text-rent-navy">{scamLabel}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-muted">Landlord transparency</span>
                <span className="font-semibold text-rent-navy">{p.landlordRating.toFixed(1)} / 5</span>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <ButtonLink href="/lease" variant="primary" className="w-full">
                Apply
              </ButtonLink>
              <ButtonLink href="/roommates" variant="outline" className="w-full">
                Book viewing
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">Rent breakdown</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {x.rentBreakdown.map((row) => (
                <li key={row.label} className="flex justify-between">
                  <span className="text-muted">{row.label}</span>
                  <span className="font-medium">${row.amount.toLocaleString()}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">{x.incomeBand}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
