import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard-page">
      <!-- Page Header -->
      <div class="page-header">
        <h3 class="greeting" id="greeting">{{ greeting() }}</h3>
        <p>Manage your dashboard here</p>
      </div>

      <!-- Stats Cards -->
      <div class="stats-wrapper">
        <div class="stats-card">
          <div class="card-content">
            <span class="card-label">Total Orders</span>
            <h6 class="card-value">{{ stats().totalOrders }}</h6>
          </div>
          <div class="card-icon orange">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
              <rect x="9" y="3" width="6" height="4" rx="1"/>
              <path d="M9 12h6M9 16h6"/>
            </svg>
          </div>
        </div>

        <div class="stats-card">
          <div class="card-content">
            <span class="card-label">Order Cancelled</span>
            <h6 class="card-value">{{ stats().cancelledOrders }}</h6>
          </div>
          <div class="card-icon blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M15 9l-6 6M9 9l6 6"/>
            </svg>
          </div>
        </div>

        <div class="stats-card">
          <div class="card-content">
            <span class="card-label">Order Pending</span>
            <h6 class="card-value">{{ stats().pendingOrders }}</h6>
          </div>
          <div class="card-icon yellow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
        </div>

        <div class="stats-card">
          <div class="card-content">
            <span class="card-label">Order Completed</span>
            <h6 class="card-value">{{ stats().completedOrders }}</h6>
          </div>
          <div class="card-icon green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Two Column Layout -->
      <div class="row-layout">
        <!-- My Cars Section -->
        <div class="col-left">
          <div class="section-header">
            <h3 class="section-title">My Cars</h3>
            <button class="btn-add" routerLink="/client/my-cars">
              + Add Car
            </button>
          </div>

          <div class="table-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Car Name</th>
                  <th>Registration</th>
                  <th>Fuel Type</th>
                </tr>
              </thead>
              <tbody>
                @for (car of cars(); track car.id) {
                  <tr>
                    <td>
                      <img [src]="car.car?.image || '/assets/images/car-placeholder.png'" [alt]="car.car?.name" class="car-image">
                    </td>
                    <td>{{ car.car?.name || 'N/A' }}</td>
                    <td>{{ car.registration_number || 'N/A' }}</td>
                    <td>{{ car.fuelType?.name || '-' }}</td>
                  </tr>
                } @empty {
                  <tr>
                    <td colspan="4" class="empty-state">
                      No cars added yet
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>

        <!-- Right Column (can add more widgets) -->
        <div class="col-right">
          <!-- Quick Actions -->
          <div class="quick-actions">
            <h4>Quick Actions</h4>
            <div class="action-buttons">
              <a routerLink="/services" class="action-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
                </svg>
                Book Service
              </a>
              <a routerLink="/client/traffic-challan/check" class="action-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
                Check Challan
              </a>
              <a routerLink="/client/tickets/new" class="action-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
                Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Order List Section -->
      <div class="orders-section">
        <h4 class="section-title">Recent Orders</h4>
        <div class="table-wrapper">
          @if (orders().length > 0) {
            <table class="data-table orders-table">
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Address</th>
                  <th>Payment</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                @for (order of orders(); track order.id) {
                  <tr>
                    <td>ID: {{ order.id }}</td>
                    <td class="address-cell">
                      {{ order.orderLocations?.address || order.outletLocation?.address || 'N/A' }}
                    </td>
                    <td>
                      <span class="payment-badge" [class.complete]="order.payment_status === 1" [class.pending]="order.payment_status !== 1">
                        {{ order.payment_status === 1 ? 'Complete' : 'Pending' }}
                      </span>
                    </td>
                    <td>{{ order.date || order.created_at | date:'dd-MM-yyyy' }}</td>
                    <td>
                      <span class="status-badge" [ngClass]="getStatusClass(order.status)">
                        {{ getStatusText(order.status) }}
                      </span>
                    </td>
                    <td>
                      <a [routerLink]="['/client/orders', order.id]" class="view-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </a>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          } @else {
            <div class="empty-orders">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p>No orders found. Start ordering to see your order history!</p>
              <a routerLink="/services" class="btn-primary">Browse Services</a>
            </div>
          }
        </div>
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

    .greeting {
      font-size: 24px;
      font-weight: 600;
      margin: 0 0 8px;
    }

    .page-header p {
      color: #666;
      margin: 0;
    }

    /* Stats Cards */
    .stats-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      background: #f8f9fa;
      padding: 16px;
      border-radius: 12px;
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

    .card-icon {
      width: 52px;
      height: 52px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-icon.orange {
      background: rgba(255, 107, 44, 0.1);
      color: #FF6B2C;
    }

    .card-icon.blue {
      background: rgba(15, 100, 250, 0.1);
      color: #0F64FA;
    }

    .card-icon.yellow {
      background: rgba(255, 177, 0, 0.1);
      color: #FFB100;
    }

    .card-icon.green {
      background: rgba(0, 178, 137, 0.1);
      color: #00B289;
    }

    /* Two Column Layout */
    .row-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .section-title {
      font-size: 18px;
      font-weight: 600;
      margin: 0;
    }

    .btn-add {
      background: #1a1a1a;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
    }

    .btn-add:hover {
      background: #333;
    }

    /* Tables */
    .table-wrapper {
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    }

    .data-table {
      width: 100%;
      border-collapse: collapse;
    }

    .data-table th {
      background: #f8f9fa;
      padding: 14px 16px;
      text-align: left;
      font-weight: 600;
      font-size: 13px;
      color: #666;
      border-bottom: 1px solid #e5e7eb;
    }

    .data-table td {
      padding: 14px 16px;
      border-bottom: 1px solid #f0f0f0;
      font-size: 14px;
    }

    .data-table tr:last-child td {
      border-bottom: none;
    }

    .car-image {
      width: 50px;
      height: 35px;
      object-fit: cover;
      border-radius: 4px;
      background: #f5f5f5;
    }

    .empty-state {
      text-align: center;
      color: #999;
      padding: 30px !important;
    }

    /* Quick Actions */
    .quick-actions {
      background: #fff;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    }

    .quick-actions h4 {
      margin: 0 0 16px;
      font-size: 16px;
    }

    .action-buttons {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .action-btn {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 16px;
      background: #f8f9fa;
      border-radius: 8px;
      color: #333;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.2s;
    }

    .action-btn:hover {
      background: #e9ecef;
      transform: translateX(4px);
    }

    /* Orders Section */
    .orders-section {
      margin-top: 8px;
    }

    .orders-section .section-title {
      margin-bottom: 16px;
    }

    .address-cell {
      max-width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .payment-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
    }

    .payment-badge.complete {
      background: #d4edda;
      color: #155724;
    }

    .payment-badge.pending {
      background: #fff3cd;
      color: #856404;
    }

    .status-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
    }

    .status-badge.pending {
      background: #fff3cd;
      color: #856404;
    }

    .status-badge.active, .status-badge.in-progress {
      background: #cce5ff;
      color: #004085;
    }

    .status-badge.complete, .status-badge.delivered {
      background: #d4edda;
      color: #155724;
    }

    .status-badge.cancelled {
      background: #f8d7da;
      color: #721c24;
    }

    .view-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: #f0f0f0;
      border-radius: 6px;
      color: #333;
      transition: all 0.2s;
    }

    .view-btn:hover {
      background: #0066cc;
      color: #fff;
    }

    .empty-orders {
      text-align: center;
      padding: 60px 20px;
    }

    .empty-orders svg {
      color: #ccc;
      margin-bottom: 16px;
    }

    .empty-orders p {
      color: #666;
      margin-bottom: 20px;
    }

    .btn-primary {
      display: inline-block;
      background: #0066cc;
      color: #fff;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
    }

    .btn-primary:hover {
      background: #0052a3;
    }

    /* Responsive */
    @media (max-width: 991px) {
      .row-layout {
        grid-template-columns: 1fr;
      }

      .stats-card {
        min-width: calc(50% - 8px);
      }
    }

    @media (max-width: 576px) {
      .stats-card {
        min-width: 100%;
      }

      .data-table {
        font-size: 13px;
      }

      .data-table th, .data-table td {
        padding: 10px 12px;
      }
    }
  `]
})
export class ClientDashboardComponent implements OnInit {
  greeting = signal('');
  stats = signal({
    totalOrders: 0,
    cancelledOrders: 0,
    pendingOrders: 0,
    completedOrders: 0
  });
  cars = signal<any[]>([]);
  orders = signal<any[]>([]);

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.setGreeting();
    this.loadDashboardData();
  }

  setGreeting(): void {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greeting.set('Good Morning');
    } else if (hour < 18) {
      this.greeting.set('Good Afternoon');
    } else {
      this.greeting.set('Good Evening');
    }
  }

  loadDashboardData(): void {
    // Load dashboard stats
    this.api.get<any>('/user/dashboard').subscribe({
      next: (response) => {
        if (response.success) {
          this.stats.set({
            totalOrders: response.data.totalOrders || 0,
            cancelledOrders: response.data.cancelledOrders || 0,
            pendingOrders: response.data.pendingOrders || 0,
            completedOrders: response.data.completedOrders || 0
          });
          this.cars.set(response.data.cars || []);
          this.orders.set(response.data.orders || []);
        }
      },
      error: () => {
        // Use fallback/mock data for now
        this.stats.set({
          totalOrders: 0,
          cancelledOrders: 0,
          pendingOrders: 0,
          completedOrders: 0
        });
      }
    });
  }

  getStatusClass(status: number): string {
    const classes: Record<number, string> = {
      0: 'pending',
      1: 'active',
      2: 'complete',
      3: 'delivered',
      4: 'cancelled'
    };
    return classes[status] || 'pending';
  }

  getStatusText(status: number): string {
    const texts: Record<number, string> = {
      0: 'Pending',
      1: 'Active',
      2: 'Completed',
      3: 'Delivered',
      4: 'Cancelled'
    };
    return texts[status] || 'Unknown';
  }
}
