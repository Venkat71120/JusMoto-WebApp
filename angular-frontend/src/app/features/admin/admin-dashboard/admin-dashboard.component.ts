import { Component, OnInit, signal } from '@angular/core';
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

      <!-- Stats Grid -->
      <div class="stats-grid">
        @for (card of statCards(); track card.title) {
          <div class="stat-card">
            <div class="stat-header">
              <span class="stat-label">{{ card.title }}</span>
              @if (card.route) {
                <a [routerLink]="card.route" class="stat-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              }
            </div>
            <div class="stat-value">{{ card.value }}</div>
            <div class="stat-bar"></div>
          </div>
        }
      </div>

      <!-- Recent Activity Section -->
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
                        <div class="user-name">{{ order.first_name }} {{ order.last_name }}</div>
                        <div class="user-email">{{ order.email }}</div>
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
      --gray-900: #17191a;
      --gray-700: #404546;
      --gray-400: #a0a6a8;
      --gray-100: #f3f5f6;
      --white: #ffffff;
      --shadow-sm: 0 4px 12px rgba(227, 27, 35, 0.04);
      --shadow-md: 0 8px 24px rgba(227, 27, 35, 0.08);
      --radius-md: 16px;
      --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .dashboard {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      max-width: 1400px;
      position: relative;
    }

    /* Greeting */
    .greeting-section {
      margin-bottom: 28px;
    }

    .greeting-text {
      font-size: 24px;
      font-weight: 600;
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

    /* Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-bottom: 28px;
    }

    .stat-card {
      background: var(--white);
      border-radius: var(--radius-md);
      padding: 20px 22px 0;
      box-shadow: var(--shadow-sm);
      transition: var(--transition);
      overflow: hidden;
      position: relative;
    }

    .stat-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
    }

    .stat-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .stat-label {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--gray-400);
    }

    .stat-link {
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: var(--gray-400);
      transition: var(--transition);
    }

    .stat-link:hover {
      background: var(--red-soft);
      color: var(--red-primary);
    }

    .stat-value {
      font-size: 26px;
      font-weight: 700;
      color: var(--gray-900);
      margin-bottom: 16px;
      line-height: 1.2;
    }

    .stat-bar {
      height: 3px;
      background: linear-gradient(90deg, #e31b23, #ff6b6b);
      margin: 0 -22px;
    }

    /* Activity Grid */
    .activity-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
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

    .status-pill.active {
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

    /* Responsive */
    @media (max-width: 1200px) {
      .stats-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 991px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .activity-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 576px) {
      .stats-grid {
        grid-template-columns: 1fr;
      }

      .greeting-text {
        font-size: 20px;
      }

      .stat-value {
        font-size: 22px;
      }
    }
  `]
})
export class AdminDashboardComponent implements OnInit {
  greeting = signal('');
  adminName = signal('Admin');
  loading = signal(false);
  statCards = signal<{ title: string; value: string; route?: string }[]>([]);
  recentUsers = signal<any[]>([]);
  recentOrders = signal<any[]>([]);

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
          this.statCards.set([
            { title: 'Total Admins', value: this.fmt(d.total_admins), route: '/admin/users' },
            { title: 'Total Users', value: this.fmt(d.total_users), route: '/admin/users' },
            { title: 'Total Services', value: this.fmt(d.total_services), route: '/admin/services' },
            { title: 'Total Products', value: this.fmt(d.total_products) },
            { title: 'Total Cars', value: this.fmt(d.total_cars) },
            { title: 'Total Coupons', value: this.fmt(d.total_coupons) },
            { title: 'Total Orders', value: this.fmt(d.total_orders), route: '/admin/orders' },
            { title: 'Total Tax', value: '\u20B9' + this.fmtCurrency(d.total_tax) },
            { title: 'Total Earnings', value: '\u20B9' + this.fmtCurrency(d.total_earnings) },
          ]);
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

  fmt(val: any): string {
    const n = Number(val) || 0;
    return n.toLocaleString('en-IN');
  }

  fmtCurrency(val: any): string {
    const n = Number(val) || 0;
    return n.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }

  getInitials(first: string, last: string): string {
    return ((first?.[0] || '') + (last?.[0] || '')).toUpperCase() || '?';
  }

  getStatusClass(status: number): string {
    const map: Record<number, string> = { 0: 'pending', 1: 'active', 2: 'completed', 3: 'delivered', 4: 'cancelled' };
    return map[status] || 'pending';
  }

  getStatusText(status: number): string {
    const map: Record<number, string> = { 0: 'Pending', 1: 'Active', 2: 'Completed', 3: 'Delivered', 4: 'Cancelled' };
    return map[status] || 'Unknown';
  }
}
