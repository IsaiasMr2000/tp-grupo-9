import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Restaurant, Category } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private categories: Category[] = [
    { id: '1', name: 'Todos' },
    { id: '2', name: 'Hamburguesas' },
    { id: '3', name: 'Pizzas' },
    { id: '4', name: 'Sushi' },
    { id: '5', name: 'Postres' },
  ];

  private restaurantsData: Restaurant[] = [
    {
      id: '1',
      name: 'Burger House',
      image: 'assets/restaurants/burger.jpg',
      category: 'Hamburguesas',
      rating: 4.5,
      deliveryTime: '30-45',
      minOrder: 25000,
      deliveryCost: 5000,
      isFavorite: false,
    },
    {
      id: '2',
      name: 'Pizza Express',
      image: 'assets/restaurants/pizza.jpg',
      category: 'Pizzas',
      rating: 4.2,
      deliveryTime: '40-55',
      minOrder: 35000,
      deliveryCost: 7000,
      isFavorite: false,
    },
  ];

  private restaurantsSubject = new BehaviorSubject<Restaurant[]>(
    this.restaurantsData
  );
  restaurants$ = this.restaurantsSubject.asObservable();

  constructor() {}

  getCategories(): Category[] {
    return this.categories;
  }

  getRestaurants(): Restaurant[] {
    return this.restaurantsData;
  }

  getRestaurantsByCategory(category: string): Restaurant[] {
    if (category === 'Todos') {
      return this.restaurantsData;
    }
    return this.restaurantsData.filter(
      (restaurant) => restaurant.category === category
    );
  }

  searchRestaurants(query: string): Restaurant[] {
    const searchTerm = query.toLowerCase();
    return this.restaurantsData.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm)
    );
  }

  toggleFavorite(restaurantId: string) {
    const restaurant = this.restaurantsData.find((r) => r.id === restaurantId);
    if (restaurant) {
      restaurant.isFavorite = !restaurant.isFavorite;
      this.restaurantsSubject.next(this.restaurantsData);
    }
  }
}
