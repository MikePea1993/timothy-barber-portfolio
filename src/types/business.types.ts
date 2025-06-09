export interface BusinessInfo {
  name: string;
  title: string;
  description: string;
  experience: string;
  rating: number;
  reviewCount: number;
  startingPrice: string;
  contact: ContactInfo;
  hours: BusinessHours;
  socialMedia: SocialMedia;
}

export interface ContactInfo {
  phone: string;
  address: string;
  email: string;
}

export interface BusinessHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface SocialMedia {
  facebook?: string;
  instagram?: string;
  twitter?: string;
}
