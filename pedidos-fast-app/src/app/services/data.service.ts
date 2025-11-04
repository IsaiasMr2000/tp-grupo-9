import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Order, User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cartItems: CartItem[] = [];
  private orders: Order[] = [];
  private users: User[] = [
    {
      id: 1,
      name: 'Alejandro Miranda',
      role: 'Dueño del repositorio',
      email: 'alejandro.miranda@example.com'
    },
    {
      id: 2,
      name: 'Leonardo Candia',
      role: 'Developer',
      email: 'leonardo.candia@example.com'
    },
    {
      id: 3,
      name: 'Blanca Prieto',
      role: 'Developer',
      email: 'blanca.prieto@example.com'
    },
    {
      id: 4,
      name: 'Paz Martinez',
      role: 'Developer',
      email: 'paz.martinez@example.com'
    }
  ];

  private cartItemsSubject = new BehaviorSubject<CartItem[]>(this.cartItems);
  public cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  // User methods
  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  // Cart methods
  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(item: CartItem): void {
    const existingItem = this.cartItems.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.cartItemsSubject.next(this.cartItems);
  }

  updateQuantity(itemId: number, quantity: number): void {
    const item = this.cartItems.find(i => i.id === itemId);
    if (item) {
      item.quantity = quantity;
      this.cartItemsSubject.next(this.cartItems);
    }
  }

  getCartTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getCartItemsCount(): number {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }

  // Order methods
  addOrder(order: Order): void {
    this.orders.push(order);
  }

  getOrders(): Order[] {
    return this.orders;
  }
}
