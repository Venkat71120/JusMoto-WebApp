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

    <div class="status-tabs">
      <button class="tab-btn" [class.active]="statusFilter === ''" (click)="statusFilter = ''; loadRefunds()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
        All
      </button>
      <button class="tab-btn tab-pending" [class.active]="statusFilter === '0'" (click)="statusFilter = '0'; loadRefunds()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Pending
      </button>
      <button class="tab-btn tab-approved" [class.active]="statusFilter === '1'" (click)="statusFilter = '1'; loadRefunds()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        Approved
      </button>
      <button class="tab-btn tab-rejected" [class.active]="statusFilter === '2'" (click)="statusFilter = '2'; loadRefunds()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
        Rejected
      </button>
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
              <button class="action-btn" title="Change Status" (click)="openModal(r)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </button>
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

    <!-- Status Change Modal -->
    @if (modalOpen()) {
      <div class="modal-overlay" (click)="closeModal()">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h3>Update Refund Status</h3>
            <button class="modal-close" (click)="closeModal()">&times;</button>
          </div>
          <div class="modal-body">
            <div class="modal-info">
              <div class="info-row"><span class="info-label">Order</span><span class="info-value">{{ selectedRefund()?.order?.invoice_number || '#' + selectedRefund()?.order_id }}</span></div>
              <div class="info-row"><span class="info-label">Customer</span><span class="info-value">{{ (selectedRefund()?.user?.first_name || '') + ' ' + (selectedRefund()?.user?.last_name || '') }}</span></div>
              <div class="info-row"><span class="info-label">Amount</span><span class="info-value fw-600">{{ selectedRefund()?.amount | currency:'INR':'symbol':'1.0-2' }}</span></div>
              <div class="info-row"><span class="info-label">Current Status</span><span class="info-value"><span class="badge" [class.badge-yellow]="selectedRefund()?.status === 0" [class.badge-green]="selectedRefund()?.status === 1" [class.badge-red]="selectedRefund()?.status === 2">{{ getStatusLabel(selectedRefund()?.status) }}</span></span></div>
            </div>
            <div class="form-group">
              <label>New Status</label>
              <div class="status-options">
                <label class="status-option" [class.selected]="modalStatus() === 0" [class.option-pending]="modalStatus() === 0">
                  <input type="radio" name="status" [value]="0" [checked]="modalStatus() === 0" (change)="modalStatus.set(0)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Pending
                </label>
                <label class="status-option" [class.selected]="modalStatus() === 1" [class.option-approved]="modalStatus() === 1">
                  <input type="radio" name="status" [value]="1" [checked]="modalStatus() === 1" (change)="modalStatus.set(1)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  Approved
                </label>
                <label class="status-option" [class.selected]="modalStatus() === 2" [class.option-rejected]="modalStatus() === 2">
                  <input type="radio" name="status" [value]="2" [checked]="modalStatus() === 2" (change)="modalStatus.set(2)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  Rejected
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn-cancel" (click)="closeModal()">Cancel</button>
            <button class="btn-save" (click)="confirmStatusChange()" [disabled]="saving()">
              {{ saving() ? 'Updating...' : 'Update Status' }}
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .status-tabs { display:flex; gap:8px; margin-bottom:20px; flex-wrap:wrap; }
    .tab-btn { display:inline-flex; align-items:center; gap:6px; padding:8px 16px; border:1px solid #e5e7eb; border-radius:20px; background:#fff; cursor:pointer; font-size:13px; font-weight:500; color:#64748b; transition:all 0.2s; }
    .tab-btn:hover:not(.active) { border-color:#e31b23; color:#e31b23; }
    .tab-btn.active { background:#e31b23; color:#fff; border-color:#e31b23; }
    .tab-btn.active svg { stroke:#fff; }
    .tab-pending.active { background:#a16207; border-color:#a16207; }
    .tab-approved.active { background:#16a34a; border-color:#16a34a; }
    .tab-rejected.active { background:#dc2626; border-color:#dc2626; }
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
    .action-btn { background:none; border:1px solid #e5e7eb; border-radius:8px; padding:7px 9px; cursor:pointer; color:#64748b; transition:all 0.2s; display:inline-flex; align-items:center; }
    .action-btn:hover { border-color:#e31b23; color:#e31b23; background:#fff5f5; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }
    .pagination { display:flex; gap:8px; justify-content:center; align-items:center; margin-top:24px; }
    .page-btn { padding:8px 14px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; cursor:pointer; font-weight:500; color:#334155; }
    .page-btn:hover:not(:disabled) { border-color:#e31b23; color:#e31b23; }
    .page-btn:disabled { opacity:0.5; cursor:not-allowed; }
    .page-info { font-size:14px; color:#64748b; }

    .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:9999; display:flex; align-items:center; justify-content:center; }
    .modal { background:#fff; border-radius:16px; width:90vw; max-width:480px; overflow:hidden; }
    .modal-header { display:flex; justify-content:space-between; align-items:center; padding:20px 24px; border-bottom:1px solid #e5e7eb; }
    .modal-header h3 { margin:0; font-size:18px; font-weight:700; color:#1a1a2e; }
    .modal-close { background:none; border:none; font-size:28px; cursor:pointer; color:#64748b; line-height:1; }
    .modal-body { padding:24px; }
    .modal-info { margin-bottom:20px; }
    .info-row { display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid #f1f5f9; }
    .info-row:last-child { border-bottom:none; }
    .info-label { font-size:13px; font-weight:600; color:#64748b; }
    .info-value { font-size:13px; color:#1a1a2e; font-weight:500; }
    .form-group { margin-top:8px; }
    .form-group label { display:block; font-weight:600; color:#334155; font-size:14px; margin-bottom:10px; }
    .status-options { display:flex; gap:10px; }
    .status-option { display:flex; align-items:center; gap:6px; padding:10px 16px; border:2px solid #e5e7eb; border-radius:10px; cursor:pointer; font-size:14px; font-weight:500; color:#64748b; transition:all 0.2s; flex:1; justify-content:center; }
    .status-option input { display:none; }
    .status-option:hover { border-color:#cbd5e1; }
    .status-option.selected { border-width:2px; }
    .status-option.option-pending { border-color:#a16207; background:#fef9c3; color:#a16207; }
    .status-option.option-pending svg { stroke:#a16207; }
    .status-option.option-approved { border-color:#16a34a; background:#dcfce7; color:#16a34a; }
    .status-option.option-approved svg { stroke:#16a34a; }
    .status-option.option-rejected { border-color:#dc2626; background:#fee2e2; color:#dc2626; }
    .status-option.option-rejected svg { stroke:#dc2626; }
    .modal-footer { display:flex; justify-content:flex-end; gap:12px; padding:16px 24px; border-top:1px solid #e5e7eb; }
    .btn-cancel { padding:10px 20px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; cursor:pointer; font-weight:500; font-size:14px; }
    .btn-save { background:#e31b23; color:#fff; border:none; padding:10px 24px; border-radius:8px; font-weight:600; cursor:pointer; font-size:14px; }
    .btn-save:hover { background:#b11218; }
    .btn-save:disabled { opacity:0.6; cursor:not-allowed; }
  `]
})
export class RefundListComponent implements OnInit {
  refunds = signal<any[]>([]);
  loading = signal(false);
  statusFilter = '';
  pagination = signal<any>({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });

  modalOpen = signal(false);
  selectedRefund = signal<any>(null);
  modalStatus = signal(0);
  saving = signal(false);

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

  openModal(refund: any) {
    this.selectedRefund.set(refund);
    this.modalStatus.set(Number(refund.status));
    this.modalOpen.set(true);
  }

  closeModal() {
    this.modalOpen.set(false);
    this.selectedRefund.set(null);
  }

  confirmStatusChange() {
    const refund = this.selectedRefund();
    if (!refund) return;
    this.saving.set(true);
    this.http.put<any>(`${environment.apiUrl}/admin/refunded-orders/${refund.id}/status`, { status: this.modalStatus() }).subscribe({
      next: () => {
        this.toast.success('Refund status updated');
        this.closeModal();
        this.loadRefunds(this.pagination().page);
      },
      error: () => this.toast.error('Failed to update refund status'),
      complete: () => this.saving.set(false)
    });
  }
}
