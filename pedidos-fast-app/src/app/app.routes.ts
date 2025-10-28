import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule) },
  { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule) },
  { path: 'order-history', loadChildren: () => import('./pages/order-history/order-history.module').then(m => m.OrderHistoryPageModule) },  {
    path: 'order-history',
    loadComponent: () => import('./pages/order-history/order-history.page').then( m => m.OrderHistoryPage)
  },

];
