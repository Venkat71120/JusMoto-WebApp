import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard-page">
      <!-- Page Header -->
      <div class="page-header">
        <h3 class="greeting">{{ greeting() }}, {{ userName() }}</h3>
        <p>Welcome back! Here's what's happening with your account.</p>
      </div>

      <!-- Stats Cards -->
      <div class="stats-wrapper">
        <div class="stats-card">
          <div class="card-content">
            <span class="card-label">Total Orders</span>
            <h6 class="card-value">{{ stats().totalOrders }}</h6>
          </div>
          <div class="card-icon red">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
              <rect x="9" y="3" width="6" height="4" rx="1"/>
              <path d="M9 12h6M9 16h6"/>
            </svg>
          </div>
        </div>

        <div class="stats-card">
          <div class="card-content">
            <span class="card-label">Pending</span>
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
            <span class="card-label">In Progress</span>
            <h6 class="card-value">{{ stats().inProgressOrders }}</h6>
          </div>
          <div class="card-icon blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
          </div>
        </div>

        <div class="stats-card">
          <div class="card-content">
            <span class="card-label">Completed</span>
            <h6 class="card-value">{{ stats().completedOrders }}</h6>
          </div>
          <div class="card-icon green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
        </div>

        <div class="stats-card">
          <div class="card-content">
            <span class="card-label">Cancelled</span>
            <h6 class="card-value">{{ stats().cancelledOrders }}</h6>
          </div>
          <div class="card-icon gray">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M15 9l-6 6M9 9l6 6"/>
            </svg>
          </div>
        </div>

        <div class="stats-card">
          <div class="card-content">
            <span class="card-label">Wallet Balance</span>
            <h6 class="card-value wallet-value">{{ stats().walletBalance | currency:'INR':'symbol':'1.2-2' }}</h6>
          </div>
          <div class="card-icon purple">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
              <line x1="1" y1="10" x2="23" y2="10"/>
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
            <a class="btn-manage" routerLink="/client/my-cars">
              Manage Cars
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </a>
          </div>

          <div class="table-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Car</th>
                  <th>Variant</th>
                  <th>Reg. Number</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                @for (car of cars(); track car.id) {
                  <tr>
                    <td>{{ car.brand?.name || 'N/A' }}</td>
                    <td>{{ car.car?.name || 'N/A' }}</td>
                    <td>{{ car.variant?.name || '-' }}</td>
                    <td class="reg-number">{{ car.registration_number || 'N/A' }}</td>
                    <td>
                      @if (car.is_default === 1) {
                        <span class="default-badge">Default</span>
                      }
                    </td>
                  </tr>
                } @empty {
                  <tr>
                    <td colspan="5" class="empty-state">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M7 17m-2 0a2 2 0 104 0 2 2 0 10-4 0"/>
                        <path d="M17 17m-2 0a2 2 0 104 0 2 2 0 10-4 0"/>
                        <path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 012 2v4h-2"/>
                        <path d="M9 17h6"/>
                      </svg>
                      <p>No cars added yet. Add your first car to get started!</p>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>

        <!-- Right Column - Quick Actions -->
        <div class="col-right">
          <div class="quick-actions">
            <h4 class="section-title">Quick Actions</h4>
            <div class="action-buttons">
              <a routerLink="/services" class="action-btn">
                <div class="action-icon red-bg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
                  </svg>
                </div>
                <div class="action-text">
                  <span class="action-title">Book Service</span>
                  <span class="action-desc">Schedule a car service</span>
                </div>
                <svg class="action-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </a>

              <a routerLink="/client/traffic-challan/check" class="action-btn">
                <div class="action-icon yellow-bg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <div class="action-text">
                  <span class="action-title">Check Challan</span>
                  <span class="action-desc">View traffic challans</span>
                </div>
                <svg class="action-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </a>

              <a routerLink="/client/tickets/new" class="action-btn">
                <div class="action-icon blue-bg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
                </div>
                <div class="action-text">
                  <span class="action-title">Create Ticket</span>
                  <span class="action-desc">Get support help</span>
                </div>
                <svg class="action-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </a>

              <a routerLink="/client/wallet" class="action-btn">
                <div class="action-icon purple-bg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                </div>
                <div class="action-text">
                  <span class="action-title">My Wallet</span>
                  <span class="action-desc">Manage your balance</span>
                </div>
                <svg class="action-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Orders Section -->
      <div class="orders-section">
        <h4 class="section-title">Recent Orders</h4>
        <div class="table-wrapper">
          @if (orders().length > 0) {
            <table class="data-table orders-table">
              <thead>
                <tr>
                  <th>Invoice #</th>
                  <th>Service</th>
                  <th>Amount</th>
                  <th>Payment</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                @for (order of orders(); track order.id) {
                  <tr>
                    <td class="invoice-cell">{{ order.invoice_number || ('ORD-' + order.id) }}</td>
                    <td class="service-cell">
                      @if (order.items && order.items.length > 0) {
                        {{ order.items[0].service?.name || order.items[0].name || 'Service' }}
                        @if (order.items.length > 1) {
                          <span class="more-badge">+{{ order.items.length - 1 }} more</span>
                        }
                      } @else {
                        N/A
                      }
                    </td>
                    <td class="amount-cell">{{ order.total | currency:'INR':'symbol':'1.2-2' }}</td>
                    <td>
                      <span class="payment-badge" [class.complete]="order.payment_status === 1" [class.pending]="order.payment_status !== 1">
                        {{ order.payment_status === 1 ? 'Paid' : 'Unpaid' }}
                      </span>
                    </td>
                    <td>{{ order.created_at | date:'dd MMM yyyy' }}</td>
                    <td>
                      <span class="status-badge" [ngClass]="getStatusClass(order.status)">
                        {{ getStatusText(order.status) }}
                      </span>
                    </td>
                    <td>
                      <a [routerLink]="['/client/orders', order.id]" class="view-btn" title="View Order">
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
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
                <rect x="9" y="3" width="6" height="4" rx="1"/>
              </svg>
              <p>No orders yet. Book a service to get started!</p>
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

    /* Page Header */
    .page-header {
      margin-bottom: 28px;
    }

    .greeting {
      font-size: 24px;
      font-weight: 700;
      margin: 0 0 6px;
      color: #1a1a1a;
    }

    .page-header p {
      color: #666;
      margin: 0;
      font-size: 14px;
    }

    /* Stats Cards */
    .stats-wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 16px;
      margin-bottom: 28px;
    }

    .stats-card {
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .stats-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .card-label {
      color: #888;
      font-size: 13px;
      font-weight: 500;
      display: block;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    .card-value {
      font-size: 26px;
      font-weight: 700;
      margin: 0;
      color: #1a1a1a;
    }

    .card-value.wallet-value {
      font-size: 22px;
    }

    .card-icon {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .card-icon.red {
      background: rgba(227, 27, 35, 0.1);
      color: #e31b23;
    }

    .card-icon.yellow {
      background: rgba(255, 177, 0, 0.1);
      color: #FFB100;
    }

    .card-icon.blue {
      background: rgba(15, 100, 250, 0.1);
      color: #0F64FA;
    }

    .card-icon.green {
      background: rgba(0, 178, 137, 0.1);
      color: #00B289;
    }

    .card-icon.gray {
      background: rgba(108, 117, 125, 0.1);
      color: #6c757d;
    }

    .card-icon.purple {
      background: rgba(111, 66, 193, 0.1);
      color: #6f42c1;
    }

    /* Two Column Layout */
    .row-layout {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 24px;
      margin-bottom: 28px;
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
      color: #1a1a1a;
    }

    .btn-manage {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      color: #e31b23;
      text-decoration: none;
      font-weight: 500;
      font-size: 14px;
      transition: gap 0.2s;
    }

    .btn-manage:hover {
      gap: 8px;
    }

    /* Tables */
    .table-wrapper {
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    }

    .data-table {
      width: 100%;
      border-collapse: collapse;
    }

    .data-table th {
      background: #f8f9fa;
      padding: 12px 16px;
      text-align: left;
      font-weight: 600;
      font-size: 12px;
      color: #888;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid #e5e7eb;
    }

    .data-table td {
      padding: 14px 16px;
      border-bottom: 1px solid #f0f0f0;
      font-size: 14px;
      color: #333;
    }

    .data-table tr:last-child td {
      border-bottom: none;
    }

    .data-table tbody tr:hover {
      background: #fafafa;
    }

    .reg-number {
      font-family: 'Courier New', monospace;
      font-weight: 600;
      color: #1a1a1a;
      letter-spacing: 0.5px;
    }

    .default-badge {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      background: rgba(227, 27, 35, 0.1);
      color: #e31b23;
    }

    .empty-state {
      text-align: center;
      color: #999;
      padding: 40px 20px !important;
    }

    .empty-state svg {
      color: #ccc;
      margin-bottom: 8px;
    }

    .empty-state p {
      margin: 0;
      font-size: 13px;
    }

    /* Quick Actions */
    .quick-actions {
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      height: 100%;
    }

    .quick-actions .section-title {
      margin-bottom: 16px;
    }

    .action-buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .action-btn {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 16px;
      background: #f8f9fa;
      border-radius: 10px;
      color: #333;
      text-decoration: none;
      transition: all 0.2s;
    }

    .action-btn:hover {
      background: #f0f1f3;
      transform: translateX(4px);
    }

    .action-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .action-icon.red-bg {
      background: rgba(227, 27, 35, 0.1);
      color: #e31b23;
    }

    .action-icon.yellow-bg {
      background: rgba(255, 177, 0, 0.1);
      color: #FFB100;
    }

    .action-icon.blue-bg {
      background: rgba(15, 100, 250, 0.1);
      color: #0F64FA;
    }

    .action-icon.purple-bg {
      background: rgba(111, 66, 193, 0.1);
      color: #6f42c1;
    }

    .action-text {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .action-title {
      font-weight: 600;
      font-size: 14px;
      color: #1a1a1a;
    }

    .action-desc {
      font-size: 12px;
      color: #888;
      margin-top: 2px;
    }

    .action-arrow {
      color: #ccc;
      flex-shrink: 0;
    }

    /* Orders Section */
    .orders-section {
      margin-top: 4px;
    }

    .orders-section .section-title {
      margin-bottom: 16px;
    }

    .invoice-cell {
      font-weight: 600;
      color: #1a1a1a;
    }

    .service-cell {
      max-width: 200px;
    }

    .more-badge {
      display: inline-block;
      margin-left: 6px;
      padding: 2px 8px;
      background: #f0f0f0;
      border-radius: 10px;
      font-size: 11px;
      color: #666;
      font-weight: 500;
    }

    .amount-cell {
      font-weight: 600;
      color: #1a1a1a;
    }

    .payment-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
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
      white-space: nowrap;
    }

    .status-badge.status-pending {
      background: #fff3cd;
      color: #856404;
    }

    .status-badge.status-accepted {
      background: #d1ecf1;
      color: #0c5460;
    }

    .status-badge.status-in-progress {
      background: #cce5ff;
      color: #004085;
    }

    .status-badge.status-completed {
      background: #d4edda;
      color: #155724;
    }

    .status-badge.status-cancelled {
      background: #f8d7da;
      color: #721c24;
    }

    .view-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      background: #f0f0f0;
      border-radius: 8px;
      color: #555;
      transition: all 0.2s;
    }

    .view-btn:hover {
      background: #e31b23;
      color: #fff;
    }

    .empty-orders {
      text-align: center;
      padding: 60px 20px;
    }

    .empty-orders svg {
      color: #ddd;
      margin-bottom: 16px;
    }

    .empty-orders p {
      color: #666;
      margin-bottom: 20px;
      font-size: 15px;
    }

    .btn-primary {
      display: inline-block;
      background: #e31b23;
      color: #fff;
      padding: 12px 28px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
      transition: background 0.2s;
    }

    .btn-primary:hover {
      background: #c8151c;
    }

    /* Loading state */
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    /* Responsive */
    @media (max-width: 1200px) {
      .stats-wrapper {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 991px) {
      .row-layout {
        grid-template-columns: 1fr;
      }

      .stats-wrapper {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .orders-table {
        display: block;
        overflow-x: auto;
        white-space: nowrap;
      }
    }

    @media (max-width: 576px) {
      .stats-wrapper {
        grid-template-columns: 1fr;
      }

      .data-table {
        font-size: 13px;
      }

      .data-table th, .data-table td {
        padding: 10px 12px;
      }

      .greeting {
        font-size: 20px;
      }
    }
  `]
})
export class ClientDashboardComponent implements OnInit {
  private http = inject(HttpClient);
  private authService = inject(AuthService);

  greeting = signal('');
  userName = signal('');
  stats = signal({
    totalOrders: 0,
    pendingOrders: 0,
    inProgressOrders: 0,
    completedOrders: 0,
    cancelledOrders: 0,
    walletBalance: 0
  });
  cars = signal<any[]>([]);
  orders = signal<any[]>([]);

  ngOnInit(): void {
    this.setGreeting();
    this.setUserName();
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

  setUserName(): void {
    const user = this.authService.currentUser;
    this.userName.set(user?.first_name || 'there');
  }

  loadDashboardData(): void {
    this.http.get<any>(`${environment.apiUrl}/user/dashboard`).subscribe({
      next: (response) => {
        if (response.success) {
          const data = response.data;
          this.stats.set({
            totalOrders: data.totalOrders || 0,
            pendingOrders: data.pendingOrders || 0,
            inProgressOrders: data.inProgressOrders || 0,
            completedOrders: data.completedOrders || 0,
            cancelledOrders: data.cancelledOrders || 0,
            walletBalance: data.walletBalance || 0
          });
          this.cars.set(data.cars || []);
          this.orders.set(data.orders || []);
        }
      },
      error: () => {
        this.stats.set({
          totalOrders: 0,
          pendingOrders: 0,
          inProgressOrders: 0,
          completedOrders: 0,
          cancelledOrders: 0,
          walletBalance: 0
        });
      }
    });
  }

  getStatusClass(status: number): string {
    const classes: Record<number, string> = {
      0: 'status-pending',
      1: 'status-accepted',
      2: 'status-in-progress',
      3: 'status-completed',
      4: 'status-cancelled'
    };
    return classes[status] || 'status-pending';
  }

  getStatusText(status: number): string {
    const texts: Record<number, string> = {
      0: 'Pending',
      1: 'Accepted',
      2: 'In Progress',
      3: 'Completed',
      4: 'Cancelled'
    };
    return texts[status] || 'Unknown';
  }
}
