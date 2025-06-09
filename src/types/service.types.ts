export interface Service {
  id: number;
  name: string;
  price: number;
  duration: number;
  description: string;
  category: 'haircut' | 'combo' | 'child' | 'senior' | 'specialty';
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
  verified: boolean;
}
