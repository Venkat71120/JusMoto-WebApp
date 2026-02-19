import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">Users Management</h1>
      <span class="total-badge">{{ pagination().total }} total</span>
    </div>

    <div class="filters-bar">
      <div class="search-box">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="text" placeholder="Search users..." [(ngModel)]="search" (input)="onSearch()">
      </div>
      <div class="filter-group">
        <select [(ngModel)]="statusFilter" (change)="loadUsers()">
          <option value="">All Status</option>
          <option value="1">Active</option>
          <option value="0">Inactive</option>
        </select>
      </div>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()">
        <div class="spinner"></div>
      </div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Verified</th>
            <th>Joined</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of users(); let i = index">
            <td>{{ (pagination().page - 1) * pagination().limit + i + 1 }}</td>
            <td>
              <div class="user-cell">
                <div class="avatar" [style.background]="getAvatarColor(user.id)">
                  {{ getInitials(user) }}
                </div>
                <span>{{ user.first_name || '' }} {{ user.last_name || '' }}</span>
              </div>
            </td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone || '-' }}</td>
            <td>
              <span class="badge" [class.badge-active]="user.status" [class.badge-inactive]="!user.status">
                {{ user.status ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td>
              <span class="badge" [class.badge-active]="user.email_verified" [class.badge-warning]="!user.email_verified">
                {{ user.email_verified ? 'Yes' : 'No' }}
              </span>
            </td>
            <td>{{ user.created_at | date:'mediumDate' }}</td>
            <td>
              <div class="action-btns">
                <a [routerLink]="['/admin/users', user.id]" class="btn-action btn-view" title="View">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </a>
                <button class="btn-action btn-toggle" (click)="toggleStatus(user)" title="Toggle Status">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                </button>
                <button class="btn-action btn-delete" (click)="deleteUser(user)" title="Delete">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
            </td>
          </tr>
          <tr *ngIf="users().length === 0 && !loading()">
            <td colspan="8" class="empty-state">No users found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination" *ngIf="pagination().totalPages > 1">
      <button class="page-btn" [disabled]="!pagination().hasPrevPage" (click)="goToPage(pagination().page - 1)">&laquo; Prev</button>
      <span class="page-info">Page {{ pagination().page }} of {{ pagination().totalPages }}</span>
      <button class="page-btn" [disabled]="!pagination().hasNextPage" (click)="goToPage(pagination().page + 1)">Next &raquo;</button>
    </div>
  `,
  styles: [`
    .page-header { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
    .page-title { font-size: 24px; font-weight: 700; color: #1a1a2e; }
    .total-badge { background: #fee2e2; color: #e31b23; padding: 4px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; }
    .filters-bar { display: flex; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
    .search-box { display: flex; align-items: center; gap: 8px; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 0 14px; flex: 1; min-width: 200px; }
    .search-box input { border: none; outline: none; padding: 10px 0; width: 100%; font-size: 14px; }
    .filter-group select { padding: 10px 14px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; font-size: 14px; cursor: pointer; }
    .table-container { position: relative; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
    .loading-overlay { position: absolute; inset: 0; background: rgba(255,255,255,0.7); display: flex; align-items: center; justify-content: center; z-index: 10; }
    .spinner { width: 36px; height: 36px; border: 3px solid #f3f4f6; border-top-color: #e31b23; border-radius: 50%; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .data-table { width: 100%; border-collapse: collapse; }
    .data-table th { background: #f8f9fa; padding: 12px 16px; text-align: left; font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; white-space: nowrap; }
    .data-table td { padding: 12px 16px; border-top: 1px solid #f1f5f9; font-size: 14px; color: #334155; }
    .data-table tbody tr:hover { background: #fff5f5; }
    .user-cell { display: flex; align-items: center; gap: 10px; }
    .avatar { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 12px; font-weight: 600; flex-shrink: 0; }
    .badge { display: inline-flex; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; }
    .badge-active { background: #dcfce7; color: #16a34a; }
    .badge-inactive { background: #fee2e2; color: #dc2626; }
    .badge-warning { background: #fef3c7; color: #d97706; }
    .action-btns { display: flex; gap: 6px; }
    .btn-action { padding: 6px; border: 1px solid #e5e7eb; border-radius: 6px; background: #fff; cursor: pointer; color: #64748b; transition: all 0.2s; display: flex; align-items: center; justify-content: center; text-decoration: none; }
    .btn-view:hover { color: #3b82f6; border-color: #3b82f6; }
    .btn-toggle:hover { color: #f59e0b; border-color: #f59e0b; }
    .btn-delete:hover { color: #ef4444; border-color: #ef4444; }
    .empty-state { text-align: center; padding: 40px !important; color: #94a3b8; }
    .pagination { display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 20px; }
    .page-btn { padding: 8px 16px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; cursor: pointer; font-weight: 500; color: #334155; transition: all 0.2s; }
    .page-btn:hover:not(:disabled) { border-color: #e31b23; color: #e31b23; }
    .page-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .page-info { font-size: 14px; color: #64748b; }
    @media (max-width: 768px) { .table-container { overflow-x: auto; } .data-table { min-width: 700px; } }
  `]
})
export class UserListComponent implements OnInit {
  users = signal<any[]>([]);
  loading = signal(false);
  search = '';
  statusFilter = '';
  pagination = signal<any>({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  private searchTimeout: any;

  constructor(private http: HttpClient) {}

  ngOnInit() { this.loadUsers(); }

  loadUsers(page = 1) {
    this.loading.set(true);
    const params: any = { page, limit: 15 };
    if (this.search) params.search = this.search;
    if (this.statusFilter) params.status = this.statusFilter;
    this.http.get<any>(`${environment.apiUrl}/admin/users`, { params }).subscribe({
      next: (res) => { this.users.set(res.data || []); this.pagination.set(res.pagination || {}); },
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadUsers(), 400);
  }

  goToPage(page: number) { this.loadUsers(page); }

  toggleStatus(user: any) {
    const newStatus = user.status ? 0 : 1;
    this.http.put<any>(`${environment.apiUrl}/admin/users/${user.id}/status`, { status: newStatus }).subscribe({
      next: () => { user.status = newStatus; }
    });
  }

  deleteUser(user: any) {
    if (!confirm(`Delete user "${user.first_name || user.email}"? This cannot be undone.`)) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/users/${user.id}`).subscribe({
      next: () => this.loadUsers(this.pagination().page)
    });
  }

  getInitials(user: any): string {
    const f = (user.first_name || '')[0] || '';
    const l = (user.last_name || '')[0] || '';
    return (f + l).toUpperCase() || user.email?.[0]?.toUpperCase() || '?';
  }

  getAvatarColor(id: number): string {
    const colors = ['#e31b23', '#3b82f6', '#8b5cf6', '#06b6d4', '#f59e0b', '#10b981'];
    return colors[id % colors.length];
  }
}
