// src/data/services.ts

export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  popular?: boolean;
  includes: string[];
}

export const services: Service[] = [
  {
    id: 1,
    name: "Classic Cut",
    description:
      "Traditional barbering techniques with modern styling. Perfect for the professional gentleman.",
    price: "£25",
    duration: "30 mins",
    popular: true,
    includes: [
      "Consultation & styling advice",
      "Precision cut with clippers & scissors",
      "Hot towel finish",
      "Styling with premium products",
    ],
  },
  {
    id: 2,
    name: "Beard Trim & Shape",
    description:
      "Expert beard grooming to enhance your natural facial structure and maintain the perfect shape.",
    price: "£18",
    duration: "20 mins",
    includes: [
      "Beard consultation",
      "Precision trimming & shaping",
      "Hot towel treatment",
      "Beard oil application",
    ],
  },
  {
    id: 3,
    name: "Full Service",
    description:
      "The complete gentleman's experience combining our finest cut and beard services.",
    price: "£40",
    duration: "50 mins",
    popular: true,
    includes: [
      "Premium hair cut",
      "Beard trim & shape",
      "Hot towel treatment",
      "Scalp massage",
      "Premium styling products",
    ],
  },
  {
    id: 4,
    name: "Skin Fade",
    description:
      "Modern precision fading technique creating seamless transitions from skin to longer lengths.",
    price: "£28",
    duration: "35 mins",
    includes: [
      "Detailed consultation",
      "Precision fade cutting",
      "Texture styling",
      "Finishing touches",
    ],
  },
  {
    id: 5,
    name: "Hot Towel Shave",
    description:
      "Traditional wet shave experience using time-honored techniques for the smoothest finish.",
    price: "£22",
    duration: "25 mins",
    includes: [
      "Pre-shave hot towel",
      "Premium shaving cream",
      "Straight razor technique",
      "Post-shave balm",
    ],
  },
];

export const serviceExtras = {
  title: "Premium Add-Ons",
  items: [
    {
      name: "Scalp Massage",
      price: "£8",
      description: "Relaxing scalp treatment",
    },
    {
      name: "Eyebrow Trim",
      price: "£5",
      description: "Precision eyebrow grooming",
    },
    {
      name: "Nose/Ear Hair Trim",
      price: "£5",
      description: "Professional grooming service",
    },
    {
      name: "Premium Styling Products",
      price: "£6",
      description: "High-end finishing products",
    },
  ],
};

export const servicesInfo = {
  title: "Professional Services",
  subtitle: "Nineteen Years of Excellence",
  description:
    "Every service is crafted with precision and care, using traditional barbering techniques combined with modern styling approaches.",
  bookingNote:
    "All appointments include consultation and aftercare advice. Walk-ins welcome subject to availability.",
  policies: [
    "24-hour cancellation policy",
    "Punctuality appreciated - late arrivals may need rescheduling",
    "Cash and card payments accepted",
    "Children under 12 require adult supervision",
  ],
};
