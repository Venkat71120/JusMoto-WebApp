import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      // Dashboard
      {
        path: 'dashboard',
        loadComponent: () => import('./admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      // Users
      { path: 'user/all-users', loadComponent: () => import('./users/user-list.component').then(m => m.UserListComponent) },
      { path: 'user/details/:id', loadComponent: () => import('./users/user-detail.component').then(m => m.UserDetailComponent) },

      // Orders
      { path: 'orders/all-orders', loadComponent: () => import('./orders/order-list.component').then(m => m.OrderListComponent) },
      { path: 'orders/details/:id', loadComponent: () => import('./orders/order-detail.component').then(m => m.OrderDetailComponent) },
      { path: 'orders/refunded-order-list', loadComponent: () => import('./refunded-orders/refund-list.component').then(m => m.RefundListComponent) },

      // Services (type=0)
      { path: 'services/all', loadComponent: () => import('./services/service-list.component').then(m => m.ServiceListComponent), data: { type: 0 } },
      { path: 'services/add', loadComponent: () => import('./services/service-form.component').then(m => m.ServiceFormComponent), data: { type: 0 } },
      { path: 'services/edit-service/:id', loadComponent: () => import('./services/service-form.component').then(m => m.ServiceFormComponent), data: { type: 0 } },

      // Products (type=1)
      { path: 'products/all', loadComponent: () => import('./services/service-list.component').then(m => m.ServiceListComponent), data: { type: 1 } },
      { path: 'products/add', loadComponent: () => import('./services/service-form.component').then(m => m.ServiceFormComponent), data: { type: 1 } },
      { path: 'products/edit/:id', loadComponent: () => import('./services/service-form.component').then(m => m.ServiceFormComponent), data: { type: 1 } },

      // Categories
      { path: 'category/index', loadComponent: () => import('./categories/category-list.component').then(m => m.CategoryListComponent) },
      { path: 'category/add-new-category', loadComponent: () => import('./categories/category-form.component').then(m => m.CategoryFormComponent) },
      { path: 'category/edit-category/:id', loadComponent: () => import('./categories/category-form.component').then(m => m.CategoryFormComponent) },

      // Brands
      { path: 'brand/list', loadComponent: () => import('./brands/brand-list.component').then(m => m.BrandListComponent) },

      // Cars
      { path: 'car/list', loadComponent: () => import('./cars/car-list.component').then(m => m.CarListComponent) },
      { path: 'car/add', loadComponent: () => import('./cars/car-form.component').then(m => m.CarFormComponent) },
      { path: 'car/edit-car/:id', loadComponent: () => import('./cars/car-form.component').then(m => m.CarFormComponent) },

      // Variants
      { path: 'variant/list', loadComponent: () => import('./variants/variant-list.component').then(m => m.VariantListComponent) },
      { path: 'variant/add', loadComponent: () => import('./variants/variant-form.component').then(m => m.VariantFormComponent) },
      { path: 'variant/edit/:id', loadComponent: () => import('./variants/variant-form.component').then(m => m.VariantFormComponent) },

      // Engine Types
      { path: 'engine/list', loadComponent: () => import('./engine-types/engine-type-list.component').then(m => m.EngineTypeListComponent) },

      // Fuel Types
      { path: 'fual/list', loadComponent: () => import('./fuel-types/fuel-type-list.component').then(m => m.FuelTypeListComponent) },

      // Coupons
      { path: 'coupons/all', loadComponent: () => import('./coupons/coupon-list.component').then(m => m.CouponListComponent) },
      { path: 'coupons/new', loadComponent: () => import('./coupons/coupon-form.component').then(m => m.CouponFormComponent) },
      { path: 'coupons/edit/:id', loadComponent: () => import('./coupons/coupon-form.component').then(m => m.CouponFormComponent) },

      // Offers
      { path: 'offer/list', loadComponent: () => import('./offers/offer-list.component').then(m => m.OfferListComponent) },
      { path: 'offer/add', loadComponent: () => import('./offers/offer-form.component').then(m => m.OfferFormComponent) },
      { path: 'offer/edit-offer/:id', loadComponent: () => import('./offers/offer-form.component').then(m => m.OfferFormComponent) },

      // Sliders
      { path: 'slider/all', loadComponent: () => import('./sliders/slider-list.component').then(m => m.SliderListComponent) },
      { path: 'slider/add', loadComponent: () => import('./sliders/slider-form.component').then(m => m.SliderFormComponent) },
      { path: 'slider/edit/:id', loadComponent: () => import('./sliders/slider-form.component').then(m => m.SliderFormComponent) },

      // Support Tickets
      { path: 'support-ticket/tickets', loadComponent: () => import('./tickets/ticket-list.component').then(m => m.TicketListComponent) },
      { path: 'support-ticket/details/:id', loadComponent: () => import('./tickets/ticket-detail.component').then(m => m.TicketDetailComponent) },
      { path: 'support-ticket/department', loadComponent: () => import('./departments/department-list.component').then(m => m.DepartmentListComponent) },

      // Staff / Admins
      { path: 'staff/all-staff', loadComponent: () => import('./staff/staff-list.component').then(m => m.StaffListComponent) },
      { path: 'staff/add-staff', loadComponent: () => import('./staff/staff-form.component').then(m => m.StaffFormComponent) },
      { path: 'staff/edit-user-info/:id', loadComponent: () => import('./staff/staff-form.component').then(m => m.StaffFormComponent) },

      // Roles & Permissions
      { path: 'manage/permission/role/all', loadComponent: () => import('./roles/role-list.component').then(m => m.RoleListComponent) },
      { path: 'manage/permission/role/add', loadComponent: () => import('./roles/role-form.component').then(m => m.RoleFormComponent) },
      { path: 'manage/permission/role/edit/:id', loadComponent: () => import('./roles/role-form.component').then(m => m.RoleFormComponent) },

      // Reports
      { path: 'reports/revenue', loadComponent: () => import('./reports/revenue-report.component').then(m => m.RevenueReportComponent) },
      { path: 'reports/orders', loadComponent: () => import('./reports/order-report.component').then(m => m.OrderReportComponent) },

      // Wallet Management
      { path: 'wallet/manage', loadComponent: () => import('./wallet/wallet-management.component').then(m => m.WalletManagementComponent) },

      // Profile (redirect to settings)
      { path: 'profile', redirectTo: 'settings/general', pathMatch: 'full' },

      // Settings
      { path: 'settings/general', loadComponent: () => import('./settings/general-settings.component').then(m => m.GeneralSettingsComponent) },

      // Outlet Locations
      { path: 'outletAddress/all', loadComponent: () => import('./outlet-locations/outlet-location-list.component').then(m => m.OutletLocationListComponent) },
      { path: 'outletAddress/add', loadComponent: () => import('./outlet-locations/outlet-location-form.component').then(m => m.OutletLocationFormComponent) },
      { path: 'outletAddress/edit-outlet/:id', loadComponent: () => import('./outlet-locations/outlet-location-form.component').then(m => m.OutletLocationFormComponent) },

      // Reviews
      { path: 'review/all', loadComponent: () => import('./reviews/review-list.component').then(m => m.ReviewListComponent) },

      // Notifications
      { path: 'notification/all', loadComponent: () => import('./notifications/notification-list.component').then(m => m.NotificationListComponent) },

      // Media Library
      { path: 'media/all', loadComponent: () => import('./media/media-library.component').then(m => m.MediaLibraryComponent) }
    ]
  }
];
