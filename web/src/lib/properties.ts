import { properties, type PropertyCard } from "@/lib/mock-data";

export function getProperty(id: string): PropertyCard | undefined {
  return properties.find((p) => p.id === id);
}

type Extras = {
  description: string;
  amenities: string[];
  rentBreakdown: { label: string; amount: number }[];
  incomeBand: string;
  affordabilityVerdict: "Safe" | "Risky" | "Unaffordable";
};

const preset: Record<string, Omit<Extras, "rentBreakdown"> & { rentBreakdown?: Extras["rentBreakdown"] }> = {
  "1": {
    description:
      "Corner unit with oversized windows, in-unit laundry, and secure bike storage. Walking distance to light rail and grocery.",
    amenities: ["In-unit laundry", "Bike storage", "Pet-friendly", "High-speed internet ready"],
    rentBreakdown: [
      { label: "Base rent", amount: 1750 },
      { label: "Parking", amount: 75 },
      { label: "Utilities estimate", amount: 25 },
    ],
    incomeBand: "Recommended monthly income: $5,500+",
    affordabilityVerdict: "Safe",
  },
};

const fallback: Omit<Extras, "rentBreakdown"> = {
  description:
    "Thoughtfully maintained home with responsive landlord communication and verified listing photos.",
  amenities: ["Climate control", "Modern appliances", "Secure entry", "Package lockers"],
  incomeBand: "Set your income in the AI budget planner for a tailored verdict.",
  affordabilityVerdict: "Safe",
};

export function getPropertyExtras(id: string, monthlyRent: number): Extras {
  const p = preset[id];
  if (p && p.rentBreakdown) {
    return p as Extras;
  }
  if (p) {
    return {
      ...p,
      rentBreakdown: [
        { label: "Base rent", amount: monthlyRent },
        { label: "Fees (est.)", amount: Math.round(monthlyRent * 0.03) },
      ],
    };
  }
  return {
    ...fallback,
    rentBreakdown: [
      { label: "Base rent", amount: monthlyRent },
      { label: "Fees (est.)", amount: Math.round(monthlyRent * 0.03) },
    ],
  };
}
