export type PropertyCard = {
  id: string;
  title: string;
  city: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  affordabilityScore: number;
  landlordRating: number;
  safetyRating: number;
  roommatesOk: boolean;
  scamRisk: "low" | "medium" | "high";
};

export const properties: PropertyCard[] = [
  {
    id: "1",
    title: "Sunlit 2BR near transit",
    city: "Seattle, WA",
    price: 1850,
    beds: 2,
    baths: 1,
    sqft: 880,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    affordabilityScore: 82,
    landlordRating: 4.8,
    safetyRating: 4.6,
    roommatesOk: true,
    scamRisk: "low",
  },
  {
    id: "2",
    title: "Quiet garden-level studio",
    city: "Portland, OR",
    price: 1295,
    beds: 0,
    baths: 1,
    sqft: 520,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    affordabilityScore: 91,
    landlordRating: 4.6,
    safetyRating: 4.4,
    roommatesOk: false,
    scamRisk: "low",
  },
  {
    id: "3",
    title: "Modern loft with workspace",
    city: "Austin, TX",
    price: 2100,
    beds: 1,
    baths: 1,
    sqft: 780,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    affordabilityScore: 68,
    landlordRating: 4.9,
    safetyRating: 4.7,
    roommatesOk: true,
    scamRisk: "low",
  },
  {
    id: "4",
    title: "Family-friendly 3BR duplex",
    city: "Denver, CO",
    price: 2450,
    beds: 3,
    baths: 2,
    sqft: 1250,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    affordabilityScore: 74,
    landlordRating: 4.5,
    safetyRating: 4.5,
    roommatesOk: true,
    scamRisk: "medium",
  },
  {
    id: "5",
    title: "Waterfront 1BR with deck",
    city: "Miami, FL",
    price: 1950,
    beds: 1,
    baths: 1,
    sqft: 720,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    affordabilityScore: 71,
    landlordRating: 4.7,
    safetyRating: 4.3,
    roommatesOk: false,
    scamRisk: "low",
  },
  {
    id: "6",
    title: "Walkable neighborhood 2BR",
    city: "Chicago, IL",
    price: 1650,
    beds: 2,
    baths: 1,
    sqft: 900,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    affordabilityScore: 88,
    landlordRating: 4.4,
    safetyRating: 4.2,
    roommatesOk: true,
    scamRisk: "low",
  },
];

export const testimonials = [
  {
    quote:
      "The affordability score helped me avoid stretching my budget. I found a place I could actually sustain.",
    name: "Jordan M.",
    role: "Tenant",
  },
  {
    quote:
      "Scam flags caught a suspicious duplicate listing before I wired a deposit. This platform paid for itself.",
    name: "Samira K.",
    role: "Tenant",
  },
  {
    quote:
      "Occupancy and rent trends in one dashboard. I price units confidently without guesswork.",
    name: "Eli R.",
    role: "Landlord",
  },
];

export const roommateProfiles = [
  {
    id: "r1",
    name: "Alex",
    match: 94,
    budget: 900,
    lifestyle: "Quiet, early riser",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "r2",
    name: "Priya",
    match: 89,
    budget: 850,
    lifestyle: "Social, loves cooking",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: "r3",
    name: "Marcus",
    match: 86,
    budget: 950,
    lifestyle: "Remote worker, tidy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
];
