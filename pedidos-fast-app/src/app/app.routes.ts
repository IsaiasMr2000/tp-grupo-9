import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart.page').then( m => m.CartPage)
  },

];
