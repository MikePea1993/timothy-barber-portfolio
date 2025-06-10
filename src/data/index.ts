export interface BusinessInfo {
  name: string;
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
  experience: number;
  startingPrice: string;
  contact: {
    address: string;
    phone: string;
    email: string;
  };
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}

// Re-export services data
export * from "./services";

export const businessInfo: BusinessInfo = {
  name: "Timothy David",
  title: "Master Barber",
  description:
    "Crafting excellence for nineteen years. Timothy David has been dedicated to the barber industry, staying up to date with modern looks while honoring traditional barbering techniques.",
  rating: 5.0,
  reviewCount: 276,
  experience: 19,
  startingPrice: "£12",
  contact: {
    address: "Newport, Wales, UK",
    phone: "+44 1234 567890",
    email: "timothy@davidbarber.co.uk (placeholder)",
  },
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "James Mitchell",
    rating: 5.0,
    comment:
      "Timothy is absolutely brilliant! Best haircut I've ever had. Professional service and great conversation.",
    service: "Classic Cut",
    date: "2024-01-15",
  },
  {
    id: 2,
    name: "Sarah Williams",
    rating: 5.0,
    comment:
      "Booked Timothy for my husband and he came back looking amazing. Will definitely be returning!",
    service: "Beard Trim",
    date: "2024-01-12",
  },
  {
    id: 3,
    name: "Ben Parker",
    rating: 5.0,
    comment: "Always a 5 star service from Tim. Wouldn't go anywhere else!",
    service: "Hair Cut",
    date: "2024-01-10",
  },
  {
    id: 4,
    name: "Michael Roberts",
    rating: 5.0,
    comment:
      "Exceptional attention to detail. Timothy knows exactly what he's doing.",
    service: "Full Service",
    date: "2024-01-08",
  },
  {
    id: 5,
    name: "David Thompson",
    rating: 5.0,
    comment: "19 years of experience really shows. Fantastic work every time.",
    service: "Classic Cut",
    date: "2024-01-05",
  },
];
