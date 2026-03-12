import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-notification-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">Notifications</h1>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Message</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let notif of notifications(); let i = index" [class.unread-row]="notif.is_read !== 'read'">
            <td>{{ (pagination().page - 1) * pagination().limit + i + 1 }}</td>
            <td><span class="type-badge">{{ notif.type || '-' }}</span></td>
            <td class="msg-cell">{{ notif.message || '-' }}</td>
            <td>
              <span class="badge" [class.badge-blue]="notif.is_read !== 'read'" [class.badge-gray]="notif.is_read === 'read'">
                {{ notif.is_read === 'read' ? 'Read' : 'Unread' }}
              </span>
            </td>
            <td>{{ notif.created_at | date:'medium' }}</td>
            <td>
              <button class="btn-mark" *ngIf="notif.is_read !== 'read'" (click)="markAsRead(notif)">
                Mark as Read
              </button>
              <span *ngIf="notif.is_read === 'read'" class="text-muted">--</span>
            </td>
          </tr>
          <tr *ngIf="notifications().length === 0 && !loading()">
            <td colspan="6" class="empty-state">No notifications found</td>
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
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .table-container { position:relative; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .loading-overlay { position:absolute; inset:0; background:rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:center; z-index:10; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .data-table { width:100%; border-collapse:collapse; }
    .data-table th { padding:12px 16px; text-align:left; font-weight:600; color:#64748b; font-size:12px; text-transform:uppercase; background:#f8f9fa; border-bottom:1px solid #e5e7eb; }
    .data-table td { padding:12px 16px; font-size:14px; color:#334155; border-bottom:1px solid #f1f5f9; }
    .data-table tr:hover { background:#fff5f5; }
    .unread-row { background:#fef5f5; }
    .type-badge { background:#f1f5f9; color:#475569; padding:3px 10px; border-radius:6px; font-size:12px; font-weight:600; text-transform:capitalize; }
    .msg-cell { max-width:300px; }
    .badge { padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; }
    .badge-blue { background:#dbeafe; color:#2563eb; }
    .badge-gray { background:#f3f4f6; color:#6b7280; }
    .text-muted { color:#94a3b8; }
    .btn-mark { background:none; border:1px solid #e31b23; color:#e31b23; padding:5px 12px; border-radius:6px; font-size:12px; font-weight:600; cursor:pointer; }
    .btn-mark:hover { background:#e31b23; color:#fff; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }
    .pagination { display:flex; gap:8px; justify-content:center; align-items:center; margin-top:24px; }
    .page-btn { padding:8px 14px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; cursor:pointer; font-weight:500; color:#334155; }
    .page-btn:hover:not(:disabled) { border-color:#e31b23; color:#e31b23; }
    .page-btn:disabled { opacity:0.5; cursor:not-allowed; }
    .page-info { font-size:14px; color:#64748b; }
  `]
})
export class NotificationListComponent implements OnInit {
  notifications = signal<any[]>([]);
  loading = signal(false);
  pagination = signal<any>({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });

  constructor(private http: HttpClient) {}

  ngOnInit() { this.loadNotifications(); }

  loadNotifications(page = 1) {
    this.loading.set(true);
    const params: any = { page, limit: 15 };
    this.http.get<any>(`${environment.apiUrl}/admin/notifications`, { params }).subscribe({
      next: (res) => { this.notifications.set(res.data || []); this.pagination.set(res.pagination || {}); },
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  goToPage(page: number) { this.loadNotifications(page); }

  markAsRead(notif: any) {
    this.http.put<any>(`${environment.apiUrl}/admin/notifications/${notif.id}/read`, {}).subscribe({
      next: () => this.loadNotifications(this.pagination().page)
    });
  }
}
