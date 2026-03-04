import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ConfirmModalComponent],
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
            <th>Type</th>
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
            <td>
              <span class="badge" [class.badge-service]="getOrderType(order) === 'service'" [class.badge-product]="getOrderType(order) === 'product'">
                {{ getOrderType(order) === 'service' ? 'Service' : 'Product' }}
              </span>
            </td>
            <td class="amount-cell">&#8377;{{ order.total | number:'1.2-2' }}</td>
            <td>
              <button class="badge badge-clickable" [class.badge-active]="order.payment_status" [class.badge-warning]="!order.payment_status" (click)="paymentOrder.set(order)">
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
              <a [routerLink]="['/admin/orders/details', order.id]" class="btn-action btn-view" title="View Detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </a>
            </td>
          </tr>
          <tr *ngIf="orders().length === 0 && !loading()">
            <td colspan="9" class="empty-state">No orders found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination" *ngIf="pagination().totalPages > 1">
      <button class="page-btn" [disabled]="!pagination().hasPrevPage" (click)="goToPage(pagination().page - 1)">&laquo; Prev</button>
      <span class="page-info">Page {{ pagination().page }} of {{ pagination().totalPages }}</span>
      <button class="page-btn" [disabled]="!pagination().hasNextPage" (click)="goToPage(pagination().page + 1)">Next &raquo;</button>
    </div>

    <app-confirm-modal
      [open]="!!paymentOrder()"
      title="Change Payment Status"
      [message]="'Mark order ' + (paymentOrder()?.invoice_number || '#' + (paymentOrder()?.id || '')) + ' as ' + (paymentOrder()?.payment_status ? 'Pending' : 'Paid') + '?'"
      confirmText="Confirm"
      type="warning"
      (confirmed)="confirmTogglePayment()"
      (cancelled)="paymentOrder.set(null)">
    </app-confirm-modal>
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
    .data-table th { background: #f8f9fa; padding: 14px 16px; text-align: left; font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; white-space: nowrap; border-bottom: 2px solid #e5e7eb; }
    .data-table td { padding: 14px 16px; border-top: 1px solid #f1f5f9; font-size: 14px; color: #334155; vertical-align: middle; }
    .data-table tbody tr { transition: background 0.15s; }
    .data-table tbody tr:hover { background: #fff5f5; }
    .invoice-cell { font-weight: 600; color: #1a1a2e; }
    .customer-cell { display: flex; flex-direction: column; }
    .customer-cell small { color: #94a3b8; font-size: 12px; }
    .amount-cell { font-weight: 600; color: #1a1a2e; }
    .text-muted { color: #94a3b8; }
    .badge { display: inline-flex; align-items: center; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; border: none; gap: 4px; }
    .badge-clickable { cursor: pointer; transition: all 0.2s; }
    .badge-clickable:hover { transform: scale(1.05); box-shadow: 0 2px 8px rgba(0,0,0,0.12); }
    .badge-active { background: #dcfce7; color: #16a34a; border: 1px solid #86efac; }
    .badge-warning { background: #fef3c7; color: #d97706; border: 1px solid #fcd34d; }
    .badge-service { background: #dbeafe; color: #2563eb; }
    .badge-product { background: #f3e8ff; color: #7c3aed; }
    .status-select { padding: 6px 12px; border: 1px solid #e5e7eb; border-radius: 20px; font-size: 12px; font-weight: 600; cursor: pointer; background: #fff; appearance: none; -webkit-appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 8px center; padding-right: 28px; transition: all 0.2s; }
    .status-select:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .status-select.status-0 { color: #92400e; background: #fef3c7; border-color: #fcd34d; }
    .status-select.status-1 { color: #1e40af; background: #dbeafe; border-color: #93c5fd; }
    .status-select.status-2 { color: #5b21b6; background: #ede9fe; border-color: #c4b5fd; }
    .status-select.status-3 { color: #065f46; background: #d1fae5; border-color: #6ee7b7; }
    .status-select.status-4 { color: #991b1b; background: #fee2e2; border-color: #fca5a5; }
    .btn-action { padding: 8px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; cursor: pointer; color: #64748b; transition: all 0.2s; display: inline-flex; align-items: center; justify-content: center; text-decoration: none; }
    .btn-view:hover { color: #e31b23; border-color: #e31b23; background: #fff5f5; }
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
  paymentOrder = signal<any>(null);
  private searchTimeout: any;

  statusTabs = [
    { label: 'All', value: '' },
    { label: 'Pending', value: '0' },
    { label: 'Accepted', value: '1' },
    { label: 'In Progress', value: '2' },
    { label: 'Completed', value: '3' },
    { label: 'Cancelled', value: '4' }
  ];

  constructor(private http: HttpClient, private toast: ToastService) {}

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
      next: () => { order.status = +newStatus; this.toast.success('Order status updated'); },
      error: () => this.toast.error('Something went wrong')
    });
  }

  confirmTogglePayment() {
    const order = this.paymentOrder();
    if (!order) return;
    const newStatus = order.payment_status ? 0 : 1;
    this.http.put<any>(`${environment.apiUrl}/admin/orders/${order.id}/payment-status`, { payment_status: newStatus }).subscribe({
      next: () => { order.payment_status = newStatus; this.toast.success('Payment status updated'); this.paymentOrder.set(null); },
      error: () => { this.toast.error('Failed to update payment status'); this.paymentOrder.set(null); }
    });
  }

  getStatusClass(status: number): string {
    return 'status-' + status;
  }

  getOrderType(order: any): string {
    const items = order.items || [];
    const hasProduct = items.some((i: any) => i.service?.type === 1);
    return hasProduct ? 'product' : 'service';
  }
}
