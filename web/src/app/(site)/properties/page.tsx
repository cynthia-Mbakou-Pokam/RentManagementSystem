"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { properties } from "@/lib/mock-data";

export default function PropertiesPage() {
  const [maxPrice, setMaxPrice] = useState(3000);
  const [roommates, setRoommates] = useState<"any" | "yes" | "no">("any");
  const [view, setView] = useState<"grid" | "map">("grid");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (p.price > maxPrice) return false;
      if (roommates === "yes" && !p.roommatesOk) return false;
      if (roommates === "no" && p.roommatesOk) return false;
      return true;
    });
  }, [maxPrice, roommates]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-rent-navy">Find housing</h1>
          <p className="mt-1 text-sm text-muted">
            Filters for price, roommates, safety, and AI affordability signals.
          </p>
        </div>
        <div className="flex gap-2 rounded-xl border border-border bg-card p-1">
          <button
            type="button"
            onClick={() => setView("grid")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${
              view === "grid" ? "bg-rent-navy text-white" : "text-muted"
            }`}
          >
            Grid
          </button>
          <button
            type="button"
            onClick={() => setView("map")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${
              view === "map" ? "bg-rent-navy text-white" : "text-muted"
            }`}
          >
            Map
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 rounded-2xl border border-border bg-card p-4 sm:grid-cols-2 lg:grid-cols-4">
        <label className="block">
          <span className="text-xs font-semibold uppercase text-muted">Price range (max)</span>
          <input
            type="range"
            min={800}
            max={4000}
            step={50}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="mt-2 w-full accent-rent-teal"
          />
          <p className="text-sm font-medium text-rent-navy">Up to ${maxPrice.toLocaleString()}/mo</p>
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase text-muted">Location</span>
          <input
            placeholder="City"
            className="mt-2 w-full rounded-xl border border-border bg-rent-surface px-3 py-2 text-sm outline-none ring-rent-teal/30 focus:ring-2"
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase text-muted">Roommates allowed</span>
          <select
            value={roommates}
            onChange={(e) => setRoommates(e.target.value as typeof roommates)}
            className="mt-2 w-full rounded-xl border border-border bg-rent-surface px-3 py-2 text-sm outline-none ring-rent-teal/30 focus:ring-2"
          >
            <option value="any">Any</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase text-muted">Safety rating (min)</span>
          <select className="mt-2 w-full rounded-xl border border-border bg-rent-surface px-3 py-2 text-sm outline-none ring-rent-teal/30 focus:ring-2">
            <option>4.0+</option>
            <option>4.5+</option>
          </select>
        </label>
      </div>

      {view === "map" ? (
        <div className="mt-8 flex h-[420px] items-center justify-center rounded-2xl border border-dashed border-border bg-card text-center text-muted">
          <div>
            <p className="font-semibold text-rent-navy">Map view</p>
            <p className="mt-1 max-w-sm text-sm">
              Google Maps integration placeholder — pins would reflect filtered listings and safety
              layers.
            </p>
          </div>
        </div>
      ) : (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <li key={p.id}>
              <Link
                href={`/properties/${p.id}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={p.image} alt="" fill className="object-cover transition group-hover:scale-[1.02]" sizes="(max-width:1024px) 100vw, 33vw" />
                  <span className="absolute left-3 top-3 rounded-full bg-card/95 px-2 py-1 text-xs font-semibold text-rent-mint shadow">
                    Affordability {p.affordabilityScore}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-lg font-semibold text-rent-navy group-hover:text-rent-teal">
                    ${p.price.toLocaleString()}
                    <span className="text-sm font-normal text-muted">/mo</span>
                  </p>
                  <p className="mt-1 font-medium text-rent-navy">{p.title}</p>
                  <p className="text-sm text-muted">{p.city}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-rent-surface px-2 py-1 font-medium text-rent-navy">
                      Landlord {p.landlordRating.toFixed(1)}★
                    </span>
                    <span className="rounded-full bg-rent-surface px-2 py-1 font-medium text-rent-navy">
                      Safety {p.safetyRating.toFixed(1)}
                    </span>
                    {p.roommatesOk ? (
                      <span className="rounded-full bg-teal-50 px-2 py-1 font-medium text-teal-800">
                        Roommates OK
                      </span>
                    ) : null}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
