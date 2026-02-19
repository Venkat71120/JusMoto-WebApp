import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-order-report',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">Order Status Report</h1>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Count</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of report()">
            <td><span class="status-badge" [ngClass]="'status-' + row.status">{{ getStatusLabel(row.status) }}</span></td>
            <td class="fw-600">{{ row.count }}</td>
            <td>₹{{ row.total_amount | number:'1.0-0' }}</td>
          </tr>
          <tr *ngIf="report().length === 0 && !loading()">
            <td colspan="3" class="empty-state">No data available</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="summary-cards" *ngIf="report().length > 0">
      <div class="stat-card">
        <div class="stat-label">Total Orders</div>
        <div class="stat-value">{{ totalCount() }}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Total Amount</div>
        <div class="stat-value">₹{{ totalAmount() | number:'1.0-0' }}</div>
      </div>
    </div>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .table-container { position:relative; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08); margin-bottom:20px; }
    .loading-overlay { position:absolute; inset:0; background:rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:center; z-index:10; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .data-table { width:100%; border-collapse:collapse; }
    .data-table th { padding:12px 16px; text-align:left; font-weight:600; color:#64748b; font-size:12px; text-transform:uppercase; background:#f8f9fa; border-bottom:1px solid #e5e7eb; }
    .data-table td { padding:12px 16px; font-size:14px; color:#334155; border-bottom:1px solid #f1f5f9; }
    .data-table tbody tr:hover { background:#fff5f5; }
    .fw-600 { font-weight:600; }
    .status-badge { padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; }
    .status-0 { background:#fef3c7; color:#92400e; }
    .status-1 { background:#dbeafe; color:#1e40af; }
    .status-2 { background:#d1fae5; color:#065f46; }
    .status-3 { background:#dcfce7; color:#166534; }
    .status-4 { background:#fee2e2; color:#991b1b; }
    .summary-cards { display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px; }
    .stat-card { background:#fff; border-radius:12px; padding:20px; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .stat-label { font-size:12px; font-weight:600; color:#64748b; text-transform:uppercase; margin-bottom:8px; }
    .stat-value { font-size:28px; font-weight:700; color:#1a1a2e; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }
  `]
})
export class OrderReportComponent implements OnInit {
  report = signal<any[]>([]);
  loading = signal(false);

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() { this.loadReport(); }

  totalCount() { return this.report().reduce((s, r) => s + Number(r.count), 0); }
  totalAmount() { return this.report().reduce((s, r) => s + Number(r.total_amount), 0); }

  getStatusLabel(status: number): string {
    const labels: any = { 0: 'Pending', 1: 'Confirmed', 2: 'In Progress', 3: 'Completed', 4: 'Cancelled' };
    return labels[status] || 'Unknown';
  }

  loadReport() {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/reports/orders`).subscribe({
      next: (res) => this.report.set(res.data || []),
      error: () => this.toast.error('Failed to load report'),
      complete: () => this.loading.set(false)
    });
  }
}
