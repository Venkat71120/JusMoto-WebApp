import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-revenue-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">Revenue Report</h1>
    </div>

    <div class="filters-card">
      <div class="filter-row">
        <div class="filter-group">
          <label>From</label>
          <input type="date" [(ngModel)]="fromDate" class="filter-input">
        </div>
        <div class="filter-group">
          <label>To</label>
          <input type="date" [(ngModel)]="toDate" class="filter-input">
        </div>
        <div class="filter-group">
          <label>Group By</label>
          <select [(ngModel)]="groupBy" class="filter-input">
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>
        <button class="btn-primary" (click)="loadReport()">Generate</button>
      </div>
    </div>

    <div class="summary-cards" *ngIf="report().length > 0">
      <div class="stat-card">
        <div class="stat-label">Total Orders</div>
        <div class="stat-value">{{ totalOrders() }}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Total Revenue</div>
        <div class="stat-value">₹{{ totalRevenue() | number:'1.0-0' }}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Paid Revenue</div>
        <div class="stat-value">₹{{ paidRevenue() | number:'1.0-0' }}</div>
      </div>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>Period</th>
            <th>Orders</th>
            <th>Total Revenue</th>
            <th>Paid Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of report()">
            <td class="fw-600">{{ row.period }}</td>
            <td>{{ row.order_count }}</td>
            <td>₹{{ row.total_revenue | number:'1.0-0' }}</td>
            <td>₹{{ row.paid_revenue | number:'1.0-0' }}</td>
          </tr>
          <tr *ngIf="report().length === 0 && !loading()">
            <td colspan="4" class="empty-state">No data. Select date range and click Generate.</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .filters-card { background:#fff; border-radius:12px; padding:20px; box-shadow:0 1px 3px rgba(0,0,0,0.08); margin-bottom:20px; }
    .filter-row { display:flex; gap:16px; align-items:flex-end; flex-wrap:wrap; }
    .filter-group { display:flex; flex-direction:column; gap:6px; }
    .filter-group label { font-size:12px; font-weight:600; color:#64748b; text-transform:uppercase; }
    .filter-input { padding:10px 14px; border:1px solid #d1d5db; border-radius:8px; font-size:14px; }
    .filter-input:focus { outline:none; border-color:#e31b23; }
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-weight:600; font-size:14px; height:fit-content; }
    .btn-primary:hover { background:#b11218; }
    .summary-cards { display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px; margin-bottom:20px; }
    .stat-card { background:#fff; border-radius:12px; padding:20px; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .stat-label { font-size:12px; font-weight:600; color:#64748b; text-transform:uppercase; margin-bottom:8px; }
    .stat-value { font-size:28px; font-weight:700; color:#1a1a2e; }
    .table-container { position:relative; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .loading-overlay { position:absolute; inset:0; background:rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:center; z-index:10; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .data-table { width:100%; border-collapse:collapse; }
    .data-table th { padding:12px 16px; text-align:left; font-weight:600; color:#64748b; font-size:12px; text-transform:uppercase; background:#f8f9fa; border-bottom:1px solid #e5e7eb; }
    .data-table td { padding:12px 16px; font-size:14px; color:#334155; border-bottom:1px solid #f1f5f9; }
    .data-table tbody tr:hover { background:#fff5f5; }
    .fw-600 { font-weight:600; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }
  `]
})
export class RevenueReportComponent implements OnInit {
  report = signal<any[]>([]);
  loading = signal(false);
  fromDate = '';
  toDate = '';
  groupBy = 'day';

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() {
    const now = new Date();
    this.toDate = now.toISOString().split('T')[0];
    const from = new Date(now.getFullYear(), now.getMonth(), 1);
    this.fromDate = from.toISOString().split('T')[0];
    this.loadReport();
  }

  totalOrders() { return this.report().reduce((s, r) => s + Number(r.order_count), 0); }
  totalRevenue() { return this.report().reduce((s, r) => s + Number(r.total_revenue), 0); }
  paidRevenue() { return this.report().reduce((s, r) => s + Number(r.paid_revenue), 0); }

  loadReport() {
    this.loading.set(true);
    const params: any = { group_by: this.groupBy };
    if (this.fromDate) params.from = this.fromDate;
    if (this.toDate) params.to = this.toDate;
    this.http.get<any>(`${environment.apiUrl}/admin/reports/revenue`, { params }).subscribe({
      next: (res) => this.report.set(res.data || []),
      error: () => this.toast.error('Failed to load report'),
      complete: () => this.loading.set(false)
    });
  }
}
