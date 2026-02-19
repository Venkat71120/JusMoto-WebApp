import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-client-order-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="orders-container">
      <div class="page-header">
        <h1>My Orders</h1>
        <p>View and track all your orders</p>
      </div>

      <div class="filters-bar">
        <div class="filter-tabs">
          <button
            *ngFor="let status of statuses"
            [class.active]="activeStatus() === status.value"
            (click)="filterByStatus(status.value)"
            class="filter-tab">
            {{ status.label }}
          </button>
        </div>
      </div>

      <div *ngIf="loading()" class="loading">
        <div class="spinner"></div>
        <p>Loading orders...</p>
      </div>

      <div *ngIf="!loading() && orders().length === 0" class="empty-state">
        <div class="empty-icon">📦</div>
        <h3>No orders found</h3>
        <p>You haven't placed any orders yet.</p>
        <a routerLink="/services" class="btn-primary">Browse Services</a>
      </div>

      <div class="orders-list" *ngIf="!loading() && orders().length > 0">
        <div class="order-card" *ngFor="let order of orders()">
          <div class="order-header">
            <div class="order-info">
              <span class="order-id">#{{ order.order_number || order.id }}</span>
              <span class="order-date">{{ order.created_at | date:'mediumDate' }}</span>
            </div>
            <span class="status-badge" [class]="'status-' + order.status">
              {{ order.status | titlecase }}
            </span>
          </div>

          <div class="order-body">
            <div class="order-items">
              <div class="item" *ngFor="let item of order.items?.slice(0, 2)">
                <img [src]="item.service?.image || '/assets/images/service-placeholder.png'" [alt]="item.service?.name">
                <div class="item-details">
                  <h4>{{ item.service?.name || 'Service' }}</h4>
                  <p>Qty: {{ item.quantity }}</p>
                </div>
              </div>
              <div *ngIf="order.items?.length > 2" class="more-items">
                +{{ order.items.length - 2 }} more items
              </div>
            </div>

            <div class="order-summary">
              <div class="summary-row">
                <span>Total Amount</span>
                <strong>{{ order.total | currency:'INR':'symbol':'1.0-0' }}</strong>
              </div>
              <div class="summary-row">
                <span>Payment</span>
                <span [class]="'payment-' + order.payment_status">{{ order.payment_status | titlecase }}</span>
              </div>
            </div>
          </div>

          <div class="order-footer">
            <a [routerLink]="['/client/orders', order.id]" class="btn-outline">View Details</a>
            <button *ngIf="order.status === 'pending'" class="btn-danger" (click)="cancelOrder(order.id)">Cancel</button>
          </div>
        </div>
      </div>

      <div class="pagination" *ngIf="totalPages() > 1">
        <button
          [disabled]="currentPage() === 1"
          (click)="goToPage(currentPage() - 1)"
          class="page-btn">
          Previous
        </button>
        <span class="page-info">Page {{ currentPage() }} of {{ totalPages() }}</span>
        <button
          [disabled]="currentPage() === totalPages()"
          (click)="goToPage(currentPage() + 1)"
          class="page-btn">
          Next
        </button>
      </div>
    </div>
  `,
  styles: [`
    .orders-container {
      max-width: 900px;
      margin: 0 auto;
    }

    .page-header {
      margin-bottom: 24px;
    }

    .page-header h1 {
      font-size: 28px;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 8px;
    }

    .page-header p {
      color: #666;
      margin: 0;
    }

    .filters-bar {
      margin-bottom: 24px;
    }

    .filter-tabs {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .filter-tab {
      padding: 8px 16px;
      border: 1px solid #e5e7eb;
      background: #fff;
      border-radius: 20px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s;
    }

    .filter-tab:hover {
      border-color: #e31b23;
      color: #e31b23;
    }

    .filter-tab.active {
      background: #e31b23;
      border-color: #e31b23;
      color: #fff;
    }

    .loading {
      text-align: center;
      padding: 60px 20px;
    }

    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid #e5e7eb;
      border-top-color: #e31b23;
      border-radius: 50%;
      margin: 0 auto 16px;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .empty-state {
      text-align: center;
      padding: 60px 20px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .empty-icon {
      font-size: 64px;
      margin-bottom: 16px;
    }

    .empty-state h3 {
      font-size: 20px;
      color: #1a1a1a;
      margin: 0 0 8px;
    }

    .empty-state p {
      color: #666;
      margin: 0 0 24px;
    }

    .orders-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .order-card {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      overflow: hidden;
    }

    .order-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border-bottom: 1px solid #e5e7eb;
      background: #f9fafb;
    }

    .order-info {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .order-id {
      font-weight: 600;
      color: #1a1a1a;
    }

    .order-date {
      color: #666;
      font-size: 14px;
    }

    .status-badge {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
    }

    .status-pending { background: #fef3c7; color: #92400e; }
    .status-confirmed { background: #dbeafe; color: #1e40af; }
    .status-processing { background: #e0e7ff; color: #3730a3; }
    .status-completed { background: #d1fae5; color: #065f46; }
    .status-cancelled { background: #fee2e2; color: #991b1b; }

    .order-body {
      padding: 20px;
    }

    .order-items {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }

    .item {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    .item img {
      width: 60px;
      height: 60px;
      border-radius: 8px;
      object-fit: cover;
    }

    .item-details h4 {
      font-size: 14px;
      font-weight: 500;
      margin: 0 0 4px;
      color: #1a1a1a;
    }

    .item-details p {
      font-size: 12px;
      color: #666;
      margin: 0;
    }

    .more-items {
      display: flex;
      align-items: center;
      color: #666;
      font-size: 14px;
    }

    .order-summary {
      display: flex;
      gap: 24px;
      padding-top: 16px;
      border-top: 1px solid #e5e7eb;
    }

    .summary-row {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .summary-row span {
      font-size: 12px;
      color: #666;
    }

    .summary-row strong {
      font-size: 16px;
      color: #1a1a1a;
    }

    .payment-paid { color: #065f46; }
    .payment-pending { color: #92400e; }
    .payment-failed { color: #991b1b; }

    .order-footer {
      display: flex;
      gap: 12px;
      padding: 16px 20px;
      border-top: 1px solid #e5e7eb;
      background: #f9fafb;
    }

    .btn-outline {
      padding: 8px 20px;
      border: 1px solid #e31b23;
      color: #e31b23;
      background: #fff;
      border-radius: 6px;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s;
    }

    .btn-outline:hover {
      background: #e31b23;
      color: #fff;
    }

    .btn-primary {
      padding: 12px 24px;
      background: #e31b23;
      color: #fff;
      border: none;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      cursor: pointer;
    }

    .btn-danger {
      padding: 8px 20px;
      background: #dc3545;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      margin-top: 24px;
    }

    .page-btn {
      padding: 8px 16px;
      border: 1px solid #e5e7eb;
      background: #fff;
      border-radius: 6px;
      cursor: pointer;
    }

    .page-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .page-info {
      color: #666;
      font-size: 14px;
    }
  `]
})
export class ClientOrderListComponent implements OnInit {
  orders = signal<any[]>([]);
  loading = signal(true);
  activeStatus = signal('all');
  currentPage = signal(1);
  totalPages = signal(1);

  statuses = [
    { label: 'All Orders', value: 'all' },
    { label: 'Pending', value: 'pending' },
    { label: 'Processing', value: 'processing' },
    { label: 'Completed', value: 'completed' },
    { label: 'Cancelled', value: 'cancelled' }
  ];

  constructor(private orderService: OrderService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.loading.set(true);
    this.orderService.getOrders({
      status: this.activeStatus() === 'all' ? undefined : this.activeStatus(),
      page: this.currentPage()
    }).subscribe({
      next: (response) => {
        this.orders.set(response.data || response.orders || []);
        this.totalPages.set(response.meta?.last_page || response.totalPages || 1);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  filterByStatus(status: string): void {
    this.activeStatus.set(status);
    this.currentPage.set(1);
    this.loadOrders();
  }

  goToPage(page: number): void {
    this.currentPage.set(page);
    this.loadOrders();
  }

  cancelOrder(orderId: number): void {
    if (confirm('Are you sure you want to cancel this order?')) {
      this.orderService.cancelOrder(orderId).subscribe({
        next: () => {
          this.toast.success('Order cancelled successfully');
          this.loadOrders();
        },
        error: () => {
          this.toast.error('Failed to cancel order. Please try again.');
        }
      });
    }
  }
}
