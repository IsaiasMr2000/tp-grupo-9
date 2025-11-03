export interface Category {
  id: string;
  name: string;
  image?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  category: string;
  rating: number;
  deliveryTime: string;
  minOrder: number;
  deliveryCost: number;
  isFavorite: boolean;
}
