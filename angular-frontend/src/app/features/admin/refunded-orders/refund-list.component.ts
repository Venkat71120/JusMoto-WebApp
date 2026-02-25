import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-refund-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">Refunded Orders</h1>
    </div>

    <div class="filters-bar">
      <select class="filter-select" [(ngModel)]="statusFilter" (change)="loadRefunds()">
        <option value="">All Statuses</option>
        <option value="0">Pending</option>
        <option value="1">Approved</option>
        <option value="2">Rejected</option>
      </select>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Order #</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let r of refunds(); let i = index">
            <td>{{ (pagination().page - 1) * pagination().limit + i + 1 }}</td>
            <td class="fw-600">{{ r.order?.invoice_number || '#' + r.order_id || '-' }}</td>
            <td>{{ (r.user?.first_name || '') + ' ' + (r.user?.last_name || '') }}</td>
            <td class="fw-600">{{ r.amount | currency:'INR':'symbol':'1.0-2' }}</td>
            <td class="reason-cell">{{ r.cancel_reason?.length > 50 ? (r.cancel_reason | slice:0:50) + '...' : (r.cancel_reason || '-') }}</td>
            <td>
              <span class="badge"
                [class.badge-yellow]="r.status === 0 || r.status === 'pending'"
                [class.badge-green]="r.status === 1 || r.status === 'approved'"
                [class.badge-red]="r.status === 2 || r.status === 'rejected'">
                {{ getStatusLabel(r.status) }}
              </span>
            </td>
            <td>{{ r.created_at | date:'mediumDate' }}</td>
            <td>
              <select class="status-select" [ngModel]="r.status" (ngModelChange)="changeStatus(r, $event)">
                <option [value]="0">Pending</option>
                <option [value]="1">Approved</option>
                <option [value]="2">Rejected</option>
              </select>
            </td>
          </tr>
          <tr *ngIf="refunds().length === 0 && !loading()">
            <td colspan="8" class="empty-state">No refunded orders found</td>
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
    .filters-bar { display:flex; gap:12px; margin-bottom:20px; flex-wrap:wrap; }
    .filter-select { padding:10px 16px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; background:#fff; }
    .table-container { position:relative; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .loading-overlay { position:absolute; inset:0; background:rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:center; z-index:10; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .data-table { width:100%; border-collapse:collapse; }
    .data-table th { padding:12px 16px; text-align:left; font-weight:600; color:#64748b; font-size:12px; text-transform:uppercase; background:#f8f9fa; border-bottom:1px solid #e5e7eb; }
    .data-table td { padding:12px 16px; font-size:14px; color:#334155; border-bottom:1px solid #f1f5f9; }
    .data-table tr:hover { background:#fff5f5; }
    .fw-600 { font-weight:600; }
    .reason-cell { max-width:200px; }
    .badge { padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; text-transform:capitalize; }
    .badge-green { background:#dcfce7; color:#16a34a; }
    .badge-red { background:#fee2e2; color:#dc2626; }
    .badge-yellow { background:#fef9c3; color:#a16207; }
    .status-select { padding:6px 10px; border:1px solid #e5e7eb; border-radius:6px; font-size:13px; background:#fff; cursor:pointer; }
    .status-select:focus { outline:none; border-color:#e31b23; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }
    .pagination { display:flex; gap:8px; justify-content:center; align-items:center; margin-top:24px; }
    .page-btn { padding:8px 14px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; cursor:pointer; font-weight:500; color:#334155; }
    .page-btn:hover:not(:disabled) { border-color:#e31b23; color:#e31b23; }
    .page-btn:disabled { opacity:0.5; cursor:not-allowed; }
    .page-info { font-size:14px; color:#64748b; }
  `]
})
export class RefundListComponent implements OnInit {
  refunds = signal<any[]>([]);
  loading = signal(false);
  statusFilter = '';
  pagination = signal<any>({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() { this.loadRefunds(); }

  loadRefunds(page = 1) {
    this.loading.set(true);
    const params: any = { page, limit: 15 };
    if (this.statusFilter !== '') params.status = this.statusFilter;
    this.http.get<any>(`${environment.apiUrl}/admin/refunded-orders`, { params }).subscribe({
      next: (res) => { this.refunds.set(res.data || []); this.pagination.set(res.pagination || {}); },
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  goToPage(page: number) { this.loadRefunds(page); }

  getStatusLabel(status: any): string {
    const map: any = { 0: 'Pending', 1: 'Approved', 2: 'Rejected', pending: 'Pending', approved: 'Approved', rejected: 'Rejected' };
    return map[status] || 'Unknown';
  }

  changeStatus(refund: any, newStatus: any) {
    this.http.put<any>(`${environment.apiUrl}/admin/refunded-orders/${refund.id}/status`, { status: Number(newStatus) }).subscribe({
      next: () => { this.toast.success('Refund status updated'); this.loadRefunds(this.pagination().page); },
      error: () => this.toast.error('Failed to update refund status')
    });
  }
}
