import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataService } from '../../services/data.service';

interface Category {
  name: string;
  id?: number | string;
  icon?: string;
}

interface Restaurant {
  id: number;
  name?: string;
  category?: string;
  price?: number;
  isFavorite?: boolean;
  rating?: number;
  image?: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class InicioPage implements OnInit {
  categories: Category[] = [];
  restaurants: Restaurant[] = [];
  filteredRestaurants: Restaurant[] = [];
  selectedCategory: string = 'Todos';
  searchQuery: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.categories = this.dataService.getCategories();
    this.restaurants = this.dataService.getRestaurants();
    this.filteredRestaurants = this.restaurants;

    // Suscribirse a cambios en restaurantes (para favoritos)
    this.dataService.restaurants$.subscribe(restaurants => {
      this.restaurants = restaurants;
      this.filterRestaurants();
    });
  }

  onCategoryChange(categoryName: string) {
    this.selectedCategory = categoryName;
    this.searchQuery = '';
    this.filterRestaurants();
  }

  onSearch(event: any) {
    this.searchQuery = event.target.value || '';
    this.filterRestaurants();
  }

  filterRestaurants() {
    if (this.searchQuery.trim()) {
      this.filteredRestaurants = this.dataService.searchRestaurants(this.searchQuery);
    } else {
      this.filteredRestaurants = this.dataService.getRestaurantsByCategory(this.selectedCategory);
    }
  }

  toggleFavorite(restaurant: Restaurant) {
    this.dataService.toggleFavorite(restaurant.id.toString());
  }

  formatPrice(price: number): string {
    return '₲' + price.toLocaleString('es-PY');
  }
}
