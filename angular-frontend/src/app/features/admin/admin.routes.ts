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
      { path: 'users', loadComponent: () => import('./users/user-list.component').then(m => m.UserListComponent) },
      { path: 'users/:id', loadComponent: () => import('./users/user-detail.component').then(m => m.UserDetailComponent) },
      // Orders
      { path: 'orders', loadComponent: () => import('./orders/order-list.component').then(m => m.OrderListComponent) },
      { path: 'orders/:id', loadComponent: () => import('./orders/order-detail.component').then(m => m.OrderDetailComponent) },
      // Services
      { path: 'services', loadComponent: () => import('./services/service-list.component').then(m => m.ServiceListComponent) },
      { path: 'services/create', loadComponent: () => import('./services/service-form.component').then(m => m.ServiceFormComponent) },
      { path: 'services/:id/edit', loadComponent: () => import('./services/service-form.component').then(m => m.ServiceFormComponent) },
      // Categories
      { path: 'categories', loadComponent: () => import('./categories/category-list.component').then(m => m.CategoryListComponent) },
      { path: 'categories/create', loadComponent: () => import('./categories/category-form.component').then(m => m.CategoryFormComponent) },
      { path: 'categories/:id/edit', loadComponent: () => import('./categories/category-form.component').then(m => m.CategoryFormComponent) },
      // Sub-Categories
      { path: 'sub-categories', loadComponent: () => import('./sub-categories/sub-category-list.component').then(m => m.SubCategoryListComponent) },
      { path: 'sub-categories/create', loadComponent: () => import('./sub-categories/sub-category-form.component').then(m => m.SubCategoryFormComponent) },
      { path: 'sub-categories/:id/edit', loadComponent: () => import('./sub-categories/sub-category-form.component').then(m => m.SubCategoryFormComponent) },
      // Brands
      { path: 'brands', loadComponent: () => import('./brands/brand-list.component').then(m => m.BrandListComponent) },
      // Cars
      { path: 'cars', loadComponent: () => import('./cars/car-list.component').then(m => m.CarListComponent) },
      { path: 'cars/create', loadComponent: () => import('./cars/car-form.component').then(m => m.CarFormComponent) },
      { path: 'cars/:id/edit', loadComponent: () => import('./cars/car-form.component').then(m => m.CarFormComponent) },
      // Variants
      { path: 'variants', loadComponent: () => import('./variants/variant-list.component').then(m => m.VariantListComponent) },
      { path: 'variants/create', loadComponent: () => import('./variants/variant-form.component').then(m => m.VariantFormComponent) },
      { path: 'variants/:id/edit', loadComponent: () => import('./variants/variant-form.component').then(m => m.VariantFormComponent) },
      // Engine Types
      { path: 'engine-types', loadComponent: () => import('./engine-types/engine-type-list.component').then(m => m.EngineTypeListComponent) },
      // Fuel Types
      { path: 'fuel-types', loadComponent: () => import('./fuel-types/fuel-type-list.component').then(m => m.FuelTypeListComponent) },
      // Coupons
      { path: 'coupons', loadComponent: () => import('./coupons/coupon-list.component').then(m => m.CouponListComponent) },
      { path: 'coupons/create', loadComponent: () => import('./coupons/coupon-form.component').then(m => m.CouponFormComponent) },
      { path: 'coupons/:id/edit', loadComponent: () => import('./coupons/coupon-form.component').then(m => m.CouponFormComponent) },
      // Offers
      { path: 'offers', loadComponent: () => import('./offers/offer-list.component').then(m => m.OfferListComponent) },
      { path: 'offers/create', loadComponent: () => import('./offers/offer-form.component').then(m => m.OfferFormComponent) },
      { path: 'offers/:id/edit', loadComponent: () => import('./offers/offer-form.component').then(m => m.OfferFormComponent) },
      // Sliders
      { path: 'sliders', loadComponent: () => import('./sliders/slider-list.component').then(m => m.SliderListComponent) },
      { path: 'sliders/create', loadComponent: () => import('./sliders/slider-form.component').then(m => m.SliderFormComponent) },
      { path: 'sliders/:id/edit', loadComponent: () => import('./sliders/slider-form.component').then(m => m.SliderFormComponent) },
      // Tickets
      { path: 'tickets', loadComponent: () => import('./tickets/ticket-list.component').then(m => m.TicketListComponent) },
      { path: 'tickets/:id', loadComponent: () => import('./tickets/ticket-detail.component').then(m => m.TicketDetailComponent) },
      // Departments
      { path: 'departments', loadComponent: () => import('./departments/department-list.component').then(m => m.DepartmentListComponent) },
      // Staff
      { path: 'staff', loadComponent: () => import('./staff/staff-list.component').then(m => m.StaffListComponent) },
      { path: 'staff/create', loadComponent: () => import('./staff/staff-form.component').then(m => m.StaffFormComponent) },
      { path: 'staff/:id/edit', loadComponent: () => import('./staff/staff-form.component').then(m => m.StaffFormComponent) },
      // Roles
      { path: 'roles', loadComponent: () => import('./roles/role-list.component').then(m => m.RoleListComponent) },
      // Locations
      { path: 'states', loadComponent: () => import('./locations/state-list.component').then(m => m.StateListComponent) },
      { path: 'cities', loadComponent: () => import('./locations/city-list.component').then(m => m.CityListComponent) },
      { path: 'areas', loadComponent: () => import('./locations/area-list.component').then(m => m.AreaListComponent) },
      // Outlet Locations
      { path: 'outlet-locations', loadComponent: () => import('./outlet-locations/outlet-location-list.component').then(m => m.OutletLocationListComponent) },
      { path: 'outlet-locations/create', loadComponent: () => import('./outlet-locations/outlet-location-form.component').then(m => m.OutletLocationFormComponent) },
      { path: 'outlet-locations/:id/edit', loadComponent: () => import('./outlet-locations/outlet-location-form.component').then(m => m.OutletLocationFormComponent) },
      // Reviews
      { path: 'reviews', loadComponent: () => import('./reviews/review-list.component').then(m => m.ReviewListComponent) },
      // Notifications
      { path: 'notifications', loadComponent: () => import('./notifications/notification-list.component').then(m => m.NotificationListComponent) },
      // Refunded Orders
      { path: 'refunded-orders', loadComponent: () => import('./refunded-orders/refund-list.component').then(m => m.RefundListComponent) },
      // Media Library
      { path: 'media', loadComponent: () => import('./media/media-library.component').then(m => m.MediaLibraryComponent) }
    ]
  }
];
