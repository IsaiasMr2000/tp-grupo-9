export interface User {
  id: number;
  name: string;
  role: string;
  email?: string;
  avatar?: string;
}

export interface CartItem {
  id: number;
  productName: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: number;
  date: Date;
  restaurant: string;
  items: string;
  total: number;
  status: 'pendiente' | 'en proceso' | 'completado' | 'cancelado';
}
