import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-header">
      <a routerLink="/admin/user/all-users" class="back-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to Users
      </a>
    </div>

    <div class="loading-center" *ngIf="loading()">
      <div class="spinner"></div>
    </div>

    <div *ngIf="user() && !loading()">
      <div class="user-header-card">
        <div class="user-avatar" [style.background]="getAvatarColor(user().id)">
          {{ getInitials(user()) }}
        </div>
        <div class="user-info">
          <h2>{{ user().first_name || '' }} {{ user().last_name || '' }}</h2>
          <p class="user-email">{{ user().email }}</p>
          <div class="user-meta">
            <span class="badge" [class.badge-active]="user().status" [class.badge-inactive]="!user().status">
              {{ user().status ? 'Active' : 'Inactive' }}
            </span>
            <span class="badge" [class.badge-active]="user().email_verified" [class.badge-warning]="!user().email_verified">
              {{ user().email_verified ? 'Verified' : 'Unverified' }}
            </span>
          </div>
        </div>
        <div class="user-actions">
          <button class="btn-toggle-status" (click)="toggleStatus()">
            {{ user().status ? 'Deactivate' : 'Activate' }}
          </button>
        </div>
      </div>

      <div class="detail-grid">
        <div class="detail-card">
          <h3>Personal Information</h3>
          <div class="detail-row"><span class="label">Username</span><span>{{ user().username || '-' }}</span></div>
          <div class="detail-row"><span class="label">Phone</span><span>{{ user().phone || '-' }}</span></div>
          <div class="detail-row"><span class="label">Joined</span><span>{{ user().created_at | date:'medium' }}</span></div>
          <div class="detail-row"><span class="label">Last Seen</span><span>{{ user().last_seen ? (user().last_seen | date:'medium') : 'Never' }}</span></div>
        </div>

      </div>

      <div class="detail-card" *ngIf="user().orders?.length">
        <h3>Recent Orders ({{ user().orders.length }})</h3>
        <table class="data-table">
          <thead>
            <tr><th>ID</th><th>Total</th><th>Status</th><th>Payment</th><th>Date</th></tr>
          </thead>
          <tbody>
            <tr *ngFor="let order of user().orders.slice(0, 10)">
              <td><a [routerLink]="['/admin/orders', order.id]" class="link">#{{ order.id }}</a></td>
              <td>&#8377;{{ order.total }}</td>
              <td><span class="badge" [ngClass]="getOrderStatusClass(order.status)">{{ getOrderStatusLabel(order.status) }}</span></td>
              <td><span class="badge" [class.badge-active]="order.payment_status" [class.badge-warning]="!order.payment_status">{{ order.payment_status ? 'Paid' : 'Pending' }}</span></td>
              <td>{{ order.created_at | date:'mediumDate' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .page-header { margin-bottom: 24px; }
    .back-btn { display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: #64748b; font-weight: 500; transition: color 0.2s; }
    .back-btn:hover { color: #e31b23; }
    .loading-center { display: flex; justify-content: center; padding: 60px; }
    .spinner { width: 36px; height: 36px; border: 3px solid #f3f4f6; border-top-color: #e31b23; border-radius: 50%; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .user-header-card { background: #fff; border-radius: 12px; padding: 24px; display: flex; align-items: center; gap: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); margin-bottom: 24px; flex-wrap: wrap; }
    .user-avatar { width: 64px; height: 64px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 22px; font-weight: 700; flex-shrink: 0; }
    .user-info h2 { font-size: 20px; font-weight: 700; color: #1a1a2e; margin: 0 0 4px; }
    .user-email { color: #64748b; margin: 0 0 8px; }
    .user-meta { display: flex; gap: 8px; }
    .user-actions { margin-left: auto; }
    .btn-toggle-status { padding: 8px 20px; border: 2px solid #e31b23; border-radius: 8px; background: transparent; color: #e31b23; font-weight: 600; cursor: pointer; transition: all 0.2s; }
    .btn-toggle-status:hover { background: #e31b23; color: #fff; }
    .detail-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; margin-bottom: 24px; }
    .detail-card { background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
    .detail-card h3 { font-size: 16px; font-weight: 700; color: #1a1a2e; margin: 0 0 16px; padding-bottom: 12px; border-bottom: 1px solid #f1f5f9; }
    .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f8f9fa; }
    .detail-row .label { color: #64748b; font-weight: 500; }
    .badge { display: inline-flex; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; }
    .badge-active { background: #dcfce7; color: #16a34a; }
    .badge-inactive { background: #fee2e2; color: #dc2626; }
    .badge-warning { background: #fef3c7; color: #d97706; }
    .badge-info { background: #dbeafe; color: #2563eb; }
    .badge-purple { background: #f3e8ff; color: #7c3aed; }
    .data-table { width: 100%; border-collapse: collapse; }
    .data-table th { padding: 10px 12px; text-align: left; font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; border-bottom: 1px solid #f1f5f9; }
    .data-table td { padding: 10px 12px; font-size: 14px; color: #334155; border-bottom: 1px solid #f8f9fa; }
    .link { color: #e31b23; text-decoration: none; font-weight: 600; }
    .link:hover { text-decoration: underline; }
    @media (max-width: 768px) { .detail-grid { grid-template-columns: 1fr; } .user-header-card { flex-direction: column; text-align: center; } .user-actions { margin-left: 0; } }
  `]
})
export class UserDetailComponent implements OnInit {
  user = signal<any>(null);
  loading = signal(true);

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`${environment.apiUrl}/admin/users/${id}`).subscribe({
      next: (res) => this.user.set(res.data),
      error: () => this.router.navigate(['/admin/user/all-users']),
      complete: () => this.loading.set(false)
    });
  }

  toggleStatus() {
    const u = this.user();
    const newStatus = u.status ? 0 : 1;
    this.http.put<any>(`${environment.apiUrl}/admin/users/${u.id}/status`, { status: newStatus }).subscribe({
      next: () => this.user.set({ ...u, status: newStatus })
    });
  }

  getInitials(user: any): string {
    return ((user.first_name?.[0] || '') + (user.last_name?.[0] || '')).toUpperCase() || '?';
  }

  getAvatarColor(id: number): string {
    const colors = ['#e31b23', '#3b82f6', '#8b5cf6', '#06b6d4', '#f59e0b', '#10b981'];
    return colors[id % colors.length];
  }

  getOrderStatusLabel(s: number): string {
    return ['Pending', 'Accepted', 'In Progress', 'Completed', 'Cancelled', 'Refunded'][s] || 'Unknown';
  }

  getOrderStatusClass(s: number): string {
    return ['badge-warning', 'badge-info', 'badge-purple', 'badge-active', 'badge-inactive', 'badge-inactive'][s] || '';
  }
}
