import { Routes } from '@angular/router';

export const franchiseRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./franchise-dashboard.component').then(m => m.FranchiseDashboardComponent)
  }
];
