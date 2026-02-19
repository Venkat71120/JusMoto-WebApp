import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
      },
      // Users
      {
        path: 'users',
        loadComponent: () => import('./users/user-list.component').then(m => m.UserListComponent)
      },
      {
        path: 'users/:id',
        loadComponent: () => import('./users/user-detail.component').then(m => m.UserDetailComponent)
      },
      // Orders
      {
        path: 'orders',
        loadComponent: () => import('./orders/order-list.component').then(m => m.OrderListComponent)
      },
      {
        path: 'orders/:id',
        loadComponent: () => import('./orders/order-detail.component').then(m => m.OrderDetailComponent)
      },
      // Services
      {
        path: 'services',
        loadComponent: () => import('./services/service-list.component').then(m => m.ServiceListComponent)
      },
      {
        path: 'services/create',
        loadComponent: () => import('./services/service-form.component').then(m => m.ServiceFormComponent)
      },
      {
        path: 'services/:id/edit',
        loadComponent: () => import('./services/service-form.component').then(m => m.ServiceFormComponent)
      },
      // Categories
      {
        path: 'categories',
        loadComponent: () => import('./categories/category-list.component').then(m => m.CategoryListComponent)
      },
      {
        path: 'categories/create',
        loadComponent: () => import('./categories/category-form.component').then(m => m.CategoryFormComponent)
      },
      {
        path: 'categories/:id/edit',
        loadComponent: () => import('./categories/category-form.component').then(m => m.CategoryFormComponent)
      },
      // Brands
      {
        path: 'brands',
        loadComponent: () => import('./brands/brand-list.component').then(m => m.BrandListComponent)
      },
      // Cars
      {
        path: 'cars',
        loadComponent: () => import('./cars/car-list.component').then(m => m.CarListComponent)
      },
      {
        path: 'cars/create',
        loadComponent: () => import('./cars/car-form.component').then(m => m.CarFormComponent)
      },
      {
        path: 'cars/:id/edit',
        loadComponent: () => import('./cars/car-form.component').then(m => m.CarFormComponent)
      },
      // Coupons
      {
        path: 'coupons',
        loadComponent: () => import('./coupons/coupon-list.component').then(m => m.CouponListComponent)
      },
      {
        path: 'coupons/create',
        loadComponent: () => import('./coupons/coupon-form.component').then(m => m.CouponFormComponent)
      },
      {
        path: 'coupons/:id/edit',
        loadComponent: () => import('./coupons/coupon-form.component').then(m => m.CouponFormComponent)
      }
    ]
  }
];
