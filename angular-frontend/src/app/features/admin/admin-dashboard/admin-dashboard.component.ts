import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard-page">
      <div class="page-header">
        <h3>Dashboard</h3>
        <p>Overview of your platform</p>
      </div>

      <!-- Stats Cards -->
      <div class="stats-wrapper">
        <div class="stats-card">
          <div class="card-content">
            <span class="card-label">Total Users</span>
            <h6 class="card-value">{{ stats().total_users }}</h6>
          </div>
          <div class="card-icon blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87"/>
              <path d="M16 3.13a4 4 0 010 7.75"/>
            </svg>
          </div>
        </div>

        <div class="stats-card">
          <div class="card-content">
            <span class="card-label">Total Orders</span>
            <h6 class="card-value">{{ stats().total_orders }}</h6>
          </div>
          <div class="card-icon green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </div>
        </div>

        <div class="stats-card">
          <div class="card-content">
            <span class="card-label">Revenue</span>
            <h6 class="card-value">&#8377;{{ stats().total_revenue | number:'1.0-0' }}</h6>
          </div>
          <div class="card-icon purple">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
            </svg>
          </div>
        </div>

        <div class="stats-card">
          <div class="card-content">
            <span class="card-label">Pending Orders</span>
            <h6 class="card-value">{{ stats().pending_orders }}</h6>
          </div>
          <div class="card-icon yellow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Secondary Stats -->
      <div class="secondary-stats">
        <div class="stats-card small">
          <div class="card-content">
            <span class="card-label">Active Services</span>
            <h6 class="card-value">{{ stats().active_services }}</h6>
          </div>
        </div>
        <div class="stats-card small">
          <div class="card-content">
            <span class="card-label">Today's Orders</span>
            <h6 class="card-value">{{ stats().today_orders }}</h6>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div *ngIf="loading()" class="loading-state">
        <p>Loading dashboard data...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="error()" class="error-state">
        <p>{{ error() }}</p>
        <button (click)="loadDashboardData()" class="btn-retry">Retry</button>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-page {
      max-width: 1400px;
    }

    .page-header {
      margin-bottom: 24px;
    }

    .page-header h3 {
      font-size: 24px;
      font-weight: 600;
      margin: 0 0 8px;
    }

    .page-header p {
      color: #666;
      margin: 0;
    }

    .stats-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 16px;
    }

    .secondary-stats {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 24px;
    }

    .stats-card {
      flex: 1;
      min-width: 200px;
      background: #fff;
      border-radius: 8px;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    }

    .stats-card.small {
      flex: 0 1 auto;
      min-width: 180px;
    }

    .card-label {
      color: #666;
      font-size: 14px;
      display: block;
      margin-bottom: 8px;
    }

    .card-value {
      font-size: 28px;
      font-weight: 700;
      margin: 0;
      color: #1a1a1a;
    }

    .stats-card.small .card-value {
      font-size: 22px;
    }

    .card-icon {
      width: 52px;
      height: 52px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-icon.blue {
      background: rgba(59, 130, 246, 0.1);
      color: #3b82f6;
    }

    .card-icon.green {
      background: rgba(0, 178, 137, 0.1);
      color: #00b289;
    }

    .card-icon.purple {
      background: rgba(139, 92, 246, 0.1);
      color: #8b5cf6;
    }

    .card-icon.yellow {
      background: rgba(255, 177, 0, 0.1);
      color: #ffb100;
    }

    .loading-state, .error-state {
      background: #fff;
      border-radius: 8px;
      padding: 40px;
      text-align: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    }

    .loading-state p, .error-state p {
      color: #666;
      margin: 0 0 16px;
    }

    .btn-retry {
      background: #3b82f6;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
    }

    .btn-retry:hover {
      background: #2563eb;
    }

    @media (max-width: 991px) {
      .stats-card {
        min-width: calc(50% - 8px);
      }
    }

    @media (max-width: 576px) {
      .stats-card {
        min-width: 100%;
      }
    }
  `]
})
export class AdminDashboardComponent implements OnInit {
  stats = signal({
    total_users: 0,
    total_orders: 0,
    total_revenue: 0,
    active_services: 0,
    pending_orders: 0,
    today_orders: 0
  });
  loading = signal(false);
  error = signal('');

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.loading.set(true);
    this.error.set('');

    this.api.get<any>('/admin/dashboard').subscribe({
      next: (response) => {
        if (response.success) {
          this.stats.set({
            total_users: response.data.total_users || 0,
            total_orders: response.data.total_orders || 0,
            total_revenue: response.data.total_revenue || 0,
            active_services: response.data.active_services || 0,
            pending_orders: response.data.pending_orders || 0,
            today_orders: response.data.today_orders || 0
          });
        }
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Failed to load dashboard data. Please try again.');
      }
    });
  }
}
