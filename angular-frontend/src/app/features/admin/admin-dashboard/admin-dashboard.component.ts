import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard">
      <!-- Greeting Header -->
      <div class="greeting-section">
        <h2 class="greeting-text">{{ greeting() }}, <span class="admin-name">{{ adminName() }}</span></h2>
        <p class="greeting-sub">Here's your performance overview for today</p>
      </div>

      <!-- Row 1: Key Metric Cards -->
      <div class="key-metrics-grid">
        @for (card of keyMetrics(); track card.label) {
          <div class="key-metric-card">
            <div class="metric-icon-wrap" [style.background]="card.iconBg">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" [attr.stroke]="card.iconColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                @if (card.icon === 'revenue') {
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                }
                @if (card.icon === 'orders') {
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                }
                @if (card.icon === 'today') {
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                }
                @if (card.icon === 'pending') {
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                }
              </svg>
            </div>
            <div class="metric-info">
              <div class="metric-value">{{ card.value }}</div>
              <div class="metric-label">{{ card.label }}</div>
            </div>
          </div>
        }
      </div>

      <!-- Row 2: Order Distribution -->
      <div class="charts-grid">
        <div class="chart-card">
          <div class="chart-header">
            <h3>Order Distribution</h3>
            <span class="chart-badge">By Status</span>
          </div>
          <div class="chart-body">
            @if (ordersByStatus().length > 0) {
              <div class="status-bars-list">
                @for (item of ordersByStatus(); track item.status) {
                  <div class="status-bar-row">
                    <div class="status-bar-label">
                      <span class="status-dot" [style.background]="getStatusColor(item.status)"></span>
                      <span class="status-name">{{ getStatusText(item.status) }}</span>
                    </div>
                    <div class="status-bar-track">
                      <div class="status-bar-fill"
                        [style.width.%]="getStatusBarWidth(item.count)"
                        [style.background]="getStatusColor(item.status)">
                      </div>
                    </div>
                    <span class="status-bar-count">{{ item.count }}</span>
                  </div>
                }
              </div>
              <div class="status-total">
                <span>Total Orders</span>
                <strong>{{ totalStatusOrders() }}</strong>
              </div>
            } @else {
              <div class="empty-state">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a0a6a8" stroke-width="1.5">
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M9 12l2 2 4-4"/>
                </svg>
                <p>No order data available</p>
              </div>
            }
          </div>
        </div>
      </div>

      <!-- Row 3: Secondary Stats -->
      <div class="secondary-stats-grid">
        @for (card of secondaryStats(); track card.label) {
          <div class="secondary-stat-card">
            <div class="secondary-icon" [style.background]="card.iconBg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" [attr.stroke]="card.iconColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                @if (card.icon === 'users') {
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                }
                @if (card.icon === 'services') {
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                }
                @if (card.icon === 'cars') {
                  <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2"/><path d="M6 21V3"/>
                }
              </svg>
            </div>
            <div class="secondary-value">{{ card.value }}</div>
            <div class="secondary-label">{{ card.label }}</div>
          </div>
        }
      </div>

      <!-- Row 4: Recent Activity -->
      <div class="activity-grid">
        <!-- Recent Users -->
        <div class="activity-card">
          <div class="activity-header">
            <h3>Recent Users</h3>
            <span class="badge">{{ recentUsers().length }} new</span>
          </div>
          <div class="activity-body">
            @if (recentUsers().length > 0) {
              <table class="activity-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Joined</th>
                  </tr>
                </thead>
                <tbody>
                  @for (user of recentUsers(); track user.id; let i = $index) {
                    <tr>
                      <td class="row-num">{{ i + 1 }}</td>
                      <td>
                        <div class="user-cell">
                          <div class="avatar">{{ getInitials(user.first_name, user.last_name) }}</div>
                          <div>
                            <div class="user-name">{{ user.first_name }} {{ user.last_name }}</div>
                            <div class="user-email">{{ user.email }}</div>
                          </div>
                        </div>
                      </td>
                      <td><span class="date-badge">{{ user.created_at | date:'dd MMM' }}</span></td>
                    </tr>
                  }
                </tbody>
              </table>
            } @else {
              <div class="empty-state">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a0a6a8" stroke-width="1.5">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                </svg>
                <p>No recent users found</p>
              </div>
            }
          </div>
        </div>

        <!-- Recent Orders -->
        <div class="activity-card">
          <div class="activity-header">
            <h3>Recent Orders</h3>
            <span class="badge">{{ recentOrders().length }} new</span>
          </div>
          <div class="activity-body">
            @if (recentOrders().length > 0) {
              <table class="activity-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  @for (order of recentOrders(); track order.id; let i = $index) {
                    <tr>
                      <td class="row-num">{{ i + 1 }}</td>
                      <td>
                        <div class="user-cell">
                          <div class="avatar avatar-sm">{{ getInitials(order.first_name, order.last_name) }}</div>
                          <div>
                            <div class="user-name">{{ order.first_name }} {{ order.last_name }}</div>
                            <div class="user-email">{{ order.email }}</div>
                          </div>
                        </div>
                      </td>
                      <td class="order-amount">&#8377;{{ order.total | number:'1.0-0' }}</td>
                      <td>
                        <span class="status-pill" [ngClass]="getStatusClass(order.status)">
                          {{ getStatusText(order.status) }}
                        </span>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            } @else {
              <div class="empty-state">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a0a6a8" stroke-width="1.5">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                <p>No recent orders found</p>
              </div>
            }
          </div>
        </div>
      </div>

      <!-- Loading Overlay -->
      @if (loading()) {
        <div class="loading-overlay">
          <div class="spinner"></div>
          <p>Loading dashboard...</p>
        </div>
      }
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    :host {
      --red-primary: #e31b23;
      --red-deep: #b11218;
      --red-light: #fff5f5;
      --red-soft: #ffe3e3;
      --green-primary: #059669;
      --green-bg: #d1fae5;
      --blue-primary: #0284c7;
      --blue-bg: #e0f2fe;
      --orange-primary: #f59e0b;
      --orange-bg: #fff8e1;
      --gray-900: #17191a;
      --gray-700: #404546;
      --gray-400: #a0a6a8;
      --gray-200: #e5e7e8;
      --gray-100: #f3f5f6;
      --white: #ffffff;
      --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
      --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
      --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.1);
      --radius-md: 14px;
      --radius-sm: 10px;
      --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .dashboard {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      max-width: 1400px;
      position: relative;
    }

    /* ========== GREETING ========== */
    .greeting-section {
      margin-bottom: 28px;
    }

    .greeting-text {
      font-size: 24px;
      font-weight: 700;
      color: var(--gray-900);
      margin: 0 0 6px;
    }

    .admin-name {
      background: linear-gradient(135deg, #e31b23, #c41e24);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .greeting-sub {
      font-size: 14px;
      color: var(--gray-400);
      margin: 0;
    }

    /* ========== ROW 1: KEY METRICS ========== */
    .key-metrics-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      margin-bottom: 24px;
    }

    .key-metric-card {
      background: var(--white);
      border-radius: var(--radius-md);
      padding: 22px;
      box-shadow: var(--shadow-sm);
      transition: var(--transition);
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: default;
      border: 1px solid transparent;
    }

    .key-metric-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
      border-color: var(--gray-200);
    }

    .metric-icon-wrap {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .metric-info {
      flex: 1;
      min-width: 0;
    }

    .metric-value {
      font-size: 26px;
      font-weight: 700;
      color: var(--gray-900);
      line-height: 1.2;
    }

    .metric-label {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--gray-400);
      margin-top: 2px;
    }

    /* ========== ROW 2: CHARTS ========== */
    .charts-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 18px;
      margin-bottom: 24px;
      max-width: 600px;
    }

    .chart-card {
      background: var(--white);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-sm);
      overflow: hidden;
    }

    .chart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 22px;
      border-bottom: 1px solid var(--gray-100);
    }

    .chart-header h3 {
      font-size: 16px;
      font-weight: 600;
      color: var(--gray-900);
      margin: 0;
    }

    .chart-badge {
      font-size: 11px;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 40px;
      background: var(--gray-100);
      color: var(--gray-400);
    }

    .chart-body {
      padding: 20px 22px;
    }

    /* Orders by Status Horizontal Bars */
    .status-bars-list {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .status-bar-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .status-bar-label {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 100px;
      flex-shrink: 0;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .status-name {
      font-size: 13px;
      font-weight: 500;
      color: var(--gray-700);
    }

    .status-bar-track {
      flex: 1;
      height: 10px;
      background: var(--gray-100);
      border-radius: 10px;
      overflow: hidden;
    }

    .status-bar-fill {
      height: 100%;
      border-radius: 10px;
      transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      min-width: 4px;
    }

    .status-bar-count {
      font-size: 13px;
      font-weight: 700;
      color: var(--gray-900);
      min-width: 36px;
      text-align: right;
    }

    .status-total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 18px;
      padding-top: 14px;
      border-top: 1px solid var(--gray-100);
      font-size: 13px;
      color: var(--gray-400);
    }

    .status-total strong {
      font-size: 16px;
      color: var(--gray-900);
    }

    /* ========== ROW 3: SECONDARY STATS ========== */
    .secondary-stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-bottom: 24px;
    }

    .secondary-stat-card {
      background: var(--white);
      border-radius: var(--radius-md);
      padding: 22px;
      box-shadow: var(--shadow-sm);
      transition: var(--transition);
      text-align: center;
      cursor: default;
    }

    .secondary-stat-card:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
    }

    .secondary-icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 14px;
    }

    .secondary-value {
      font-size: 28px;
      font-weight: 700;
      color: var(--gray-900);
      line-height: 1.2;
    }

    .secondary-label {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--gray-400);
      margin-top: 4px;
    }

    /* ========== ROW 4: ACTIVITY TABLES ========== */
    .activity-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-bottom: 24px;
    }

    .activity-card {
      background: var(--white);
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
    }

    .activity-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 22px;
      border-bottom: 1px solid var(--gray-100);
    }

    .activity-header h3 {
      font-size: 16px;
      font-weight: 600;
      color: var(--gray-900);
      margin: 0;
    }

    .badge {
      background: var(--red-soft);
      color: var(--red-primary);
      font-size: 12px;
      font-weight: 600;
      padding: 4px 12px;
      border-radius: 40px;
    }

    .activity-body {
      padding: 0;
    }

    /* Activity Table */
    .activity-table {
      width: 100%;
      border-collapse: collapse;
    }

    .activity-table th {
      padding: 10px 22px;
      text-align: left;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--gray-400);
      background: var(--gray-100);
    }

    .activity-table td {
      padding: 12px 22px;
      font-size: 13px;
      color: var(--gray-700);
      border-bottom: 1px solid var(--gray-100);
    }

    .activity-table tbody tr {
      transition: background 0.15s ease;
    }

    .activity-table tbody tr:hover {
      background: #fafbfb;
    }

    .activity-table tr:last-child td {
      border-bottom: none;
    }

    .row-num {
      color: var(--gray-400);
      font-weight: 500;
      width: 30px;
    }

    .user-cell {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .avatar {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: linear-gradient(135deg, #e31b23, #ff6b6b);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
      flex-shrink: 0;
    }

    .avatar.avatar-sm {
      width: 30px;
      height: 30px;
      font-size: 11px;
    }

    .user-name {
      font-size: 13px;
      font-weight: 600;
      color: var(--gray-900);
    }

    .user-email {
      font-size: 12px;
      color: var(--gray-400);
    }

    .date-badge {
      font-size: 12px;
      font-weight: 500;
      padding: 3px 10px;
      border-radius: 40px;
      background: var(--gray-100);
      color: var(--gray-700);
    }

    .order-amount {
      font-weight: 600;
      color: var(--gray-900);
    }

    .status-pill {
      font-size: 11px;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: 40px;
      display: inline-block;
    }

    .status-pill.pending {
      background: #fff8e1;
      color: #f59e0b;
    }

    .status-pill.confirmed {
      background: #e0f2fe;
      color: #0284c7;
    }

    .status-pill.completed {
      background: #d1fae5;
      color: #059669;
    }

    .status-pill.delivered {
      background: #d1fae5;
      color: #059669;
    }

    .status-pill.cancelled {
      background: var(--red-soft);
      color: var(--red-primary);
    }

    /* Empty State */
    .empty-state {
      padding: 40px 20px;
      text-align: center;
    }

    .empty-state svg {
      margin-bottom: 12px;
    }

    .empty-state p {
      color: var(--gray-400);
      font-size: 13px;
      margin: 0;
    }

    /* Loading */
    .loading-overlay {
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.85);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-md);
      z-index: 10;
    }

    .spinner {
      width: 36px;
      height: 36px;
      border: 3px solid var(--gray-100);
      border-top-color: var(--red-primary);
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
      margin-bottom: 12px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .loading-overlay p {
      font-size: 13px;
      color: var(--gray-400);
      margin: 0;
    }

    /* ========== RESPONSIVE ========== */
    @media (max-width: 1200px) {
      .key-metrics-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 991px) {
      .secondary-stats-grid {
        grid-template-columns: repeat(3, 1fr);
      }

      .activity-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .secondary-stats-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 576px) {
      .key-metrics-grid {
        grid-template-columns: 1fr;
      }

      .secondary-stats-grid {
        grid-template-columns: 1fr;
      }

      .greeting-text {
        font-size: 20px;
      }

      .metric-value {
        font-size: 22px;
      }

      .status-bar-label {
        min-width: 80px;
      }
    }
  `]
})
export class AdminDashboardComponent implements OnInit {
  greeting = signal('');
  adminName = signal('Admin');
  loading = signal(false);

  keyMetrics = signal<{ label: string; value: string; icon: string; iconBg: string; iconColor: string }[]>([]);
  secondaryStats = signal<{ label: string; value: string; icon: string; iconBg: string; iconColor: string }[]>([]);
  ordersByStatus = signal<{ status: number; count: number }[]>([]);
  recentUsers = signal<any[]>([]);
  recentOrders = signal<any[]>([]);

  totalStatusOrders = signal(0);

  constructor(
    private api: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.setGreeting();
    const admin = this.authService.currentAdmin;
    if (admin) {
      this.adminName.set(admin.name);
    }
    this.loadDashboard();
  }

  setGreeting(): void {
    const hour = new Date().getHours();
    if (hour < 12) this.greeting.set('Good Morning');
    else if (hour < 18) this.greeting.set('Good Afternoon');
    else this.greeting.set('Good Evening');
  }

  loadDashboard(): void {
    this.loading.set(true);

    this.api.get<any>('/admin/dashboard').subscribe({
      next: (res) => {
        if (res.success) {
          const d = res.data;

          // Row 1: Key metric cards
          this.keyMetrics.set([
            {
              label: 'Total Revenue',
              value: '\u20B9' + this.fmtCurrency(d.total_revenue),
              icon: 'revenue',
              iconBg: '#d1fae5',
              iconColor: '#059669'
            },
            {
              label: 'Total Orders',
              value: this.fmt(d.total_orders),
              icon: 'orders',
              iconBg: '#e0f2fe',
              iconColor: '#0284c7'
            },
            {
              label: "Today's Orders",
              value: this.fmt(d.today_orders),
              icon: 'today',
              iconBg: '#fff8e1',
              iconColor: '#f59e0b'
            },
            {
              label: 'Pending Orders',
              value: this.fmt(d.pending_orders),
              icon: 'pending',
              iconBg: '#ffe3e3',
              iconColor: '#e31b23'
            }
          ]);

          // Row 3: Secondary stat cards
          this.secondaryStats.set([
            {
              label: 'Total Users',
              value: this.fmt(d.total_users),
              icon: 'users',
              iconBg: '#ede9fe',
              iconColor: '#7c3aed'
            },
            {
              label: 'Total Services',
              value: this.fmt(d.total_services),
              icon: 'services',
              iconBg: '#fef3c7',
              iconColor: '#d97706'
            },
            {
              label: 'Total Cars',
              value: this.fmt(d.total_cars),
              icon: 'cars',
              iconBg: '#e0f2fe',
              iconColor: '#0284c7'
            }
          ]);

          // Chart data
          const statusData = d.orders_by_status || [];
          this.ordersByStatus.set(statusData);
          const totalOrders = statusData.reduce((sum: number, item: any) => sum + (Number(item.count) || 0), 0);
          this.totalStatusOrders.set(totalOrders);

          // Recent activity
          this.recentUsers.set(d.recent_users || []);
          this.recentOrders.set(d.recent_orders || []);
        }
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  // --- Helpers ---

  fmt(val: any): string {
    const n = Number(val) || 0;
    return n.toLocaleString('en-IN');
  }

  fmtCurrency(val: any): string {
    const n = Number(val) || 0;
    return n.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }

  getStatusBarWidth(count: number): number {
    const total = this.totalStatusOrders();
    if (total === 0) return 0;
    return Math.max(2, (count / total) * 100);
  }

  getStatusColor(status: number): string {
    const map: Record<number, string> = {
      0: '#f59e0b',
      1: '#0284c7',
      2: '#059669',
      3: '#10b981',
      4: '#e31b23'
    };
    return map[status] || '#a0a6a8';
  }

  getInitials(first: string, last: string): string {
    return ((first?.[0] || '') + (last?.[0] || '')).toUpperCase() || '?';
  }

  getStatusClass(status: number): string {
    const map: Record<number, string> = {
      0: 'pending',
      1: 'confirmed',
      2: 'completed',
      3: 'delivered',
      4: 'cancelled'
    };
    return map[status] || 'pending';
  }

  getStatusText(status: number): string {
    const map: Record<number, string> = {
      0: 'Pending',
      1: 'Confirmed',
      2: 'Completed',
      3: 'Delivered',
      4: 'Cancelled'
    };
    return map[status] || 'Unknown';
  }
}
