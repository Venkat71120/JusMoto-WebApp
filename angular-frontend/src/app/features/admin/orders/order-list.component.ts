import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">Orders Management</h1>
      <span class="total-badge">{{ pagination().total }} total</span>
    </div>

    <div class="status-tabs">
      <button *ngFor="let tab of statusTabs" class="tab-btn" [class.active]="statusFilter === tab.value" (click)="statusFilter = tab.value; loadOrders()">
        {{ tab.label }}
      </button>
    </div>

    <div class="filters-bar">
      <div class="search-box">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="text" placeholder="Search by invoice, customer..." [(ngModel)]="search" (input)="onSearch()">
      </div>
      <select [(ngModel)]="paymentFilter" (change)="loadOrders()">
        <option value="">All Payments</option>
        <option value="1">Paid</option>
        <option value="0">Pending</option>
      </select>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()">
        <div class="spinner"></div>
      </div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Invoice</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let order of orders(); let i = index">
            <td>{{ (pagination().page - 1) * pagination().limit + i + 1 }}</td>
            <td class="invoice-cell">{{ order.invoice_number || ('#' + order.id) }}</td>
            <td>
              <div class="customer-cell" *ngIf="order.user">
                <strong>{{ order.user.first_name || '' }} {{ order.user.last_name || '' }}</strong>
                <small>{{ order.user.email }}</small>
              </div>
              <span *ngIf="!order.user" class="text-muted">N/A</span>
            </td>
            <td class="amount-cell">&#8377;{{ order.total | number:'1.2-2' }}</td>
            <td>
              <button class="badge badge-clickable" [class.badge-active]="order.payment_status" [class.badge-warning]="!order.payment_status" (click)="togglePayment(order)">
                {{ order.payment_status ? 'Paid' : 'Pending' }}
              </button>
            </td>
            <td>
              <select class="status-select" [ngClass]="getStatusClass(order.status)" [ngModel]="order.status" (ngModelChange)="changeStatus(order, $event)">
                <option [value]="0">Pending</option>
                <option [value]="1">Accepted</option>
                <option [value]="2">In Progress</option>
                <option [value]="3">Completed</option>
                <option [value]="4">Cancelled</option>
              </select>
            </td>
            <td>{{ order.created_at | date:'mediumDate' }}</td>
            <td>
              <a [routerLink]="['/admin/orders', order.id]" class="btn-action btn-view" title="View Detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </a>
            </td>
          </tr>
          <tr *ngIf="orders().length === 0 && !loading()">
            <td colspan="8" class="empty-state">No orders found</td>
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
    .page-header { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
    .page-title { font-size: 24px; font-weight: 700; color: #1a1a2e; }
    .total-badge { background: #fee2e2; color: #e31b23; padding: 4px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; }
    .status-tabs { display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; }
    .tab-btn { padding: 8px 16px; border: 1px solid #e5e7eb; border-radius: 20px; background: #fff; cursor: pointer; font-size: 13px; font-weight: 500; color: #64748b; transition: all 0.2s; }
    .tab-btn.active { background: #e31b23; color: #fff; border-color: #e31b23; }
    .tab-btn:hover:not(.active) { border-color: #e31b23; color: #e31b23; }
    .filters-bar { display: flex; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
    .search-box { display: flex; align-items: center; gap: 8px; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 0 14px; flex: 1; min-width: 200px; }
    .search-box input { border: none; outline: none; padding: 10px 0; width: 100%; font-size: 14px; }
    .filters-bar select { padding: 10px 14px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; font-size: 14px; cursor: pointer; }
    .table-container { position: relative; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
    .loading-overlay { position: absolute; inset: 0; background: rgba(255,255,255,0.7); display: flex; align-items: center; justify-content: center; z-index: 10; }
    .spinner { width: 36px; height: 36px; border: 3px solid #f3f4f6; border-top-color: #e31b23; border-radius: 50%; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .data-table { width: 100%; border-collapse: collapse; }
    .data-table th { background: #f8f9fa; padding: 12px 16px; text-align: left; font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; white-space: nowrap; }
    .data-table td { padding: 12px 16px; border-top: 1px solid #f1f5f9; font-size: 14px; color: #334155; }
    .data-table tbody tr:hover { background: #fff5f5; }
    .invoice-cell { font-weight: 600; color: #1a1a2e; }
    .customer-cell { display: flex; flex-direction: column; }
    .customer-cell small { color: #94a3b8; font-size: 12px; }
    .amount-cell { font-weight: 600; color: #1a1a2e; }
    .text-muted { color: #94a3b8; }
    .badge { display: inline-flex; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; border: none; }
    .badge-clickable { cursor: pointer; transition: opacity 0.2s; }
    .badge-clickable:hover { opacity: 0.8; }
    .badge-active { background: #dcfce7; color: #16a34a; }
    .badge-warning { background: #fef3c7; color: #d97706; }
    .status-select { padding: 4px 8px; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer; background: #fff; }
    .status-select.status-0 { color: #d97706; }
    .status-select.status-1 { color: #2563eb; }
    .status-select.status-2 { color: #7c3aed; }
    .status-select.status-3 { color: #16a34a; }
    .status-select.status-4 { color: #dc2626; }
    .btn-action { padding: 6px; border: 1px solid #e5e7eb; border-radius: 6px; background: #fff; cursor: pointer; color: #64748b; transition: all 0.2s; display: inline-flex; align-items: center; justify-content: center; text-decoration: none; }
    .btn-view:hover { color: #3b82f6; border-color: #3b82f6; }
    .empty-state { text-align: center; padding: 40px !important; color: #94a3b8; }
    .pagination { display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 20px; }
    .page-btn { padding: 8px 16px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; cursor: pointer; font-weight: 500; color: #334155; transition: all 0.2s; }
    .page-btn:hover:not(:disabled) { border-color: #e31b23; color: #e31b23; }
    .page-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .page-info { font-size: 14px; color: #64748b; }
    @media (max-width: 768px) { .table-container { overflow-x: auto; } .data-table { min-width: 800px; } }
  `]
})
export class OrderListComponent implements OnInit {
  orders = signal<any[]>([]);
  loading = signal(false);
  search = '';
  statusFilter = '';
  paymentFilter = '';
  pagination = signal<any>({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  private searchTimeout: any;

  statusTabs = [
    { label: 'All', value: '' },
    { label: 'Pending', value: '0' },
    { label: 'Accepted', value: '1' },
    { label: 'In Progress', value: '2' },
    { label: 'Completed', value: '3' },
    { label: 'Cancelled', value: '4' }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() { this.loadOrders(); }

  loadOrders(page = 1) {
    this.loading.set(true);
    const params: any = { page, limit: 15 };
    if (this.search) params.search = this.search;
    if (this.statusFilter) params.status = this.statusFilter;
    if (this.paymentFilter) params.payment_status = this.paymentFilter;
    this.http.get<any>(`${environment.apiUrl}/admin/orders`, { params }).subscribe({
      next: (res) => { this.orders.set(res.data || []); this.pagination.set(res.pagination || {}); },
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadOrders(), 400);
  }

  goToPage(page: number) { this.loadOrders(page); }

  changeStatus(order: any, newStatus: string) {
    this.http.put<any>(`${environment.apiUrl}/admin/orders/${order.id}/status`, { status: +newStatus }).subscribe({
      next: () => { order.status = +newStatus; }
    });
  }

  togglePayment(order: any) {
    const newStatus = order.payment_status ? 0 : 1;
    this.http.put<any>(`${environment.apiUrl}/admin/orders/${order.id}/payment-status`, { payment_status: newStatus }).subscribe({
      next: () => { order.payment_status = newStatus; }
    });
  }

  getStatusClass(status: number): string {
    return 'status-' + status;
  }
}
