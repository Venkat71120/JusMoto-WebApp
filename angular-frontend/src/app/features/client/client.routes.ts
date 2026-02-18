import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';

export const clientRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () => import('./client-layout.component').then(m => m.ClientLayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.ClientDashboardComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('./orders/order-list.component').then(m => m.ClientOrderListComponent)
      },
      {
        path: 'orders/:id',
        loadComponent: () => import('./orders/order-detail.component').then(m => m.ClientOrderDetailComponent)
      },
      {
        path: 'favourites',
        loadComponent: () => import('./favourites/favourites.component').then(m => m.FavouritesComponent)
      },
      {
        path: 'tickets',
        loadComponent: () => import('./tickets/ticket-list.component').then(m => m.ClientTicketListComponent)
      },
      {
        path: 'tickets/new',
        loadComponent: () => import('./tickets/ticket-create.component').then(m => m.TicketCreateComponent)
      },
      {
        path: 'tickets/:id',
        loadComponent: () => import('./tickets/ticket-detail.component').then(m => m.ClientTicketDetailComponent)
      },
      {
        path: 'refunds',
        loadComponent: () => import('./refunds/refund-list.component').then(m => m.RefundListComponent)
      },
      {
        path: 'traffic-challan',
        loadComponent: () => import('./traffic-challan/challan-list.component').then(m => m.ClientChallanListComponent)
      },
      {
        path: 'traffic-challan/check',
        loadComponent: () => import('./traffic-challan/challan-check.component').then(m => m.ClientChallanCheckComponent)
      },
      {
        path: 'traffic-challan/:id',
        loadComponent: () => import('./traffic-challan/challan-detail.component').then(m => m.ClientChallanDetailComponent)
      },
      {
        path: 'notifications',
        loadComponent: () => import('./notifications/notifications.component').then(m => m.NotificationsComponent)
      },
      {
        path: 'address',
        loadComponent: () => import('./address/address-list.component').then(m => m.AddressListComponent)
      },
      {
        path: 'address/create',
        loadComponent: () => import('./address/address-form.component').then(m => m.AddressFormComponent)
      },
      {
        path: 'address/edit/:id',
        loadComponent: () => import('./address/address-form.component').then(m => m.AddressFormComponent)
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent)
      },
      {
        path: 'my-cars',
        loadComponent: () => import('./my-cars/my-cars.component').then(m => m.MyCarsComponent)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];
