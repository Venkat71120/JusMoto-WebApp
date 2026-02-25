import { Routes } from '@angular/router';
import { AuthGuard, GuestGuard, AdminGuard } from './core/guards/auth.guard';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const routes: Routes = [
  // Root redirects to login
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },

  // Auth routes (guest only)
  {
    path: 'auth',
    canActivate: [GuestGuard],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./features/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
      },
      {
        path: 'verify-email',
        loadComponent: () => import('./features/auth/verify-email/verify-email.component').then(m => m.VerifyEmailComponent)
      },
      {
        path: 'reset-password',
        loadComponent: () => import('./features/auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
      },
    ]
  },

  // Admin login (outside GuestGuard so it's always accessible)
  {
    path: 'auth/admin-login',
    loadComponent: () => import('./features/auth/admin-login/admin-login.component').then(m => m.AdminLoginComponent)
  },

  // Redirect legacy /dashboard to /client/dashboard
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: [],
    canMatch: [() => { inject(Router).navigate(['/client/dashboard']); return false; }]
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'cart',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/cart/cart.component').then(m => m.CartComponent)
  },
  {
    path: 'checkout',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/cart/checkout/checkout.component').then(m => m.CheckoutComponent)
  },
  {
    path: 'orders',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./features/orders/order-list/order-list.component').then(m => m.OrderListComponent)
      },
      {
        path: ':id',
        loadComponent: () => import('./features/orders/order-detail/order-detail.component').then(m => m.OrderDetailComponent)
      }
    ]
  },
  {
    path: 'challans',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./features/challans/challan-list/challan-list.component').then(m => m.ChallanListComponent)
      },
      {
        path: 'check',
        loadComponent: () => import('./features/challans/challan-check/challan-check.component').then(m => m.ChallanCheckComponent)
      },
      {
        path: ':id',
        loadComponent: () => import('./features/challans/challan-detail/challan-detail.component').then(m => m.ChallanDetailComponent)
      }
    ]
  },
  {
    path: 'wallet',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/wallet/wallet.component').then(m => m.WalletComponent)
  },
  {
    path: 'my-cars',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/profile/my-cars/my-cars.component').then(m => m.MyCarsComponent)
  },
  {
    path: 'addresses',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/profile/addresses/addresses.component').then(m => m.AddressesComponent)
  },
  {
    path: 'tickets',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./features/tickets/ticket-list/ticket-list.component').then(m => m.TicketListComponent)
      },
      {
        path: 'new',
        loadComponent: () => import('./features/tickets/create-ticket/create-ticket.component').then(m => m.CreateTicketComponent)
      },
      {
        path: ':id',
        loadComponent: () => import('./features/tickets/ticket-detail/ticket-detail.component').then(m => m.TicketDetailComponent)
      }
    ]
  },

  // Client dashboard routes (with sidebar layout)
  {
    path: 'client',
    loadChildren: () => import('./features/client/client.routes').then(m => m.clientRoutes)
  },

  // Admin routes
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./features/admin/admin.routes').then(m => m.adminRoutes)
  },

  // Franchise routes
  {
    path: 'franchise',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/franchise/franchise.routes').then(m => m.franchiseRoutes)
  },

  // 404
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
