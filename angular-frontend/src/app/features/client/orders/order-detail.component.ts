import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-client-order-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="order-detail-container">
      <div class="back-link">
        <a routerLink="/client/orders">&larr; Back to Orders</a>
      </div>

      <div *ngIf="loading()" class="loading">
        <div class="spinner"></div>
        <p>Loading order details...</p>
      </div>

      <div *ngIf="!loading() && order()" class="order-content">
        <div class="order-header-card">
          <div class="order-title">
            <h1>Order #{{ order().order_number || order().id }}</h1>
            <span class="status-badge" [class]="'status-' + order().status">
              {{ order().status | titlecase }}
            </span>
          </div>
          <p class="order-date">Placed on {{ order().created_at | date:'fullDate' }}</p>
        </div>

        <div class="order-grid">
          <div class="main-section">
            <div class="card">
              <h2>Order Items</h2>
              <div class="items-list">
                <div class="item-row" *ngFor="let item of order().items">
                  <div class="item-image">
                    <img [src]="item.service?.image || '/assets/images/service-placeholder.png'" [alt]="item.service?.name">
                  </div>
                  <div class="item-details">
                    <h4>{{ item.service?.name || 'Service' }}</h4>
                    <p class="item-desc">{{ item.service?.description }}</p>
                    <div class="item-meta">
                      <span>Qty: {{ item.quantity }}</span>
                      <span>{{ item.price | currency:'INR':'symbol':'1.0-0' }} each</span>
                    </div>
                  </div>
                  <div class="item-total">
                    {{ item.quantity * item.price | currency:'INR':'symbol':'1.0-0' }}
                  </div>
                </div>
              </div>

              <div class="order-totals">
                <div class="total-row">
                  <span>Subtotal</span>
                  <span>{{ order().subtotal | currency:'INR':'symbol':'1.0-0' }}</span>
                </div>
                <div class="total-row" *ngIf="order().discount > 0">
                  <span>Discount</span>
                  <span class="text-success">-{{ order().discount | currency:'INR':'symbol':'1.0-0' }}</span>
                </div>
                <div class="total-row" *ngIf="order().tax > 0">
                  <span>Tax</span>
                  <span>{{ order().tax | currency:'INR':'symbol':'1.0-0' }}</span>
                </div>
                <div class="total-row total-final">
                  <span>Total</span>
                  <strong>{{ order().total | currency:'INR':'symbol':'1.0-0' }}</strong>
                </div>
              </div>
            </div>

            <div class="card" *ngIf="order().timeline?.length > 0">
              <h2>Order Timeline</h2>
              <div class="timeline">
                <div class="timeline-item" *ngFor="let event of order().timeline; let last = last" [class.active]="!last">
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <h4>{{ event.status | titlecase }}</h4>
                    <p>{{ event.description }}</p>
                    <span class="timeline-date">{{ event.created_at | date:'medium' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sidebar-section">
            <div class="card">
              <h3>Payment Details</h3>
              <div class="info-row">
                <span>Method</span>
                <span>{{ order().payment_method | titlecase }}</span>
              </div>
              <div class="info-row">
                <span>Status</span>
                <span [class]="'payment-' + order().payment_status">{{ order().payment_status | titlecase }}</span>
              </div>
              <div class="info-row" *ngIf="order().transaction_id">
                <span>Transaction ID</span>
                <span>{{ order().transaction_id }}</span>
              </div>
            </div>

            <div class="card" *ngIf="order().address">
              <h3>Service Address</h3>
              <p class="address-text">
                {{ order().address.address_line1 }}<br>
                <span *ngIf="order().address.address_line2">{{ order().address.address_line2 }}<br></span>
                {{ order().address.city }}, {{ order().address.state }} {{ order().address.pincode }}
              </p>
            </div>

            <div class="card" *ngIf="order().car">
              <h3>Vehicle Details</h3>
              <div class="car-info">
                <strong>{{ order().car.make }} {{ order().car.model }}</strong>
                <p>{{ order().car.registration_number }}</p>
                <p>{{ order().car.year }} - {{ order().car.color }}</p>
              </div>
            </div>

            <div class="card actions-card">
              <button *ngIf="order().status === 'pending'" class="btn-danger full-width" (click)="cancelOrder()">
                Cancel Order
              </button>
              <button *ngIf="order().status === 'completed'" class="btn-primary full-width" (click)="reorder()">
                Reorder
              </button>
              <a *ngIf="isServiceOrder()" routerLink="/client/tickets/new" [queryParams]="{order_id: order().id}" class="btn-outline full-width">
                Need Help?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .order-detail-container {
      max-width: 1100px;
      margin: 0 auto;
    }

    .back-link {
      margin-bottom: 20px;
    }

    .back-link a {
      color: #e31b23;
      text-decoration: none;
      font-size: 14px;
    }

    .back-link a:hover {
      text-decoration: underline;
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

    .order-header-card {
      background: #fff;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .order-title {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 8px;
    }

    .order-title h1 {
      font-size: 24px;
      font-weight: 700;
      margin: 0;
      color: #1a1a1a;
    }

    .status-badge {
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 500;
    }

    .status-pending { background: #fef3c7; color: #92400e; }
    .status-confirmed { background: #dbeafe; color: #1e40af; }
    .status-processing { background: #e0e7ff; color: #3730a3; }
    .status-completed { background: #d1fae5; color: #065f46; }
    .status-cancelled { background: #fee2e2; color: #991b1b; }

    .order-date {
      color: #666;
      margin: 0;
    }

    .order-grid {
      display: grid;
      grid-template-columns: 1fr 350px;
      gap: 24px;
    }

    @media (max-width: 900px) {
      .order-grid {
        grid-template-columns: 1fr;
      }
    }

    .card {
      background: #fff;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      margin-bottom: 24px;
    }

    .card h2, .card h3 {
      font-size: 18px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 20px;
    }

    .items-list {
      border-bottom: 1px solid #e5e7eb;
      margin-bottom: 20px;
    }

    .item-row {
      display: flex;
      gap: 16px;
      padding: 16px 0;
      border-top: 1px solid #e5e7eb;
    }

    .item-image img {
      width: 80px;
      height: 80px;
      border-radius: 8px;
      object-fit: cover;
    }

    .item-details {
      flex: 1;
    }

    .item-details h4 {
      font-size: 16px;
      font-weight: 500;
      margin: 0 0 4px;
      color: #1a1a1a;
    }

    .item-desc {
      font-size: 14px;
      color: #666;
      margin: 0 0 8px;
    }

    .item-meta {
      display: flex;
      gap: 16px;
      font-size: 13px;
      color: #888;
    }

    .item-total {
      font-size: 16px;
      font-weight: 600;
      color: #1a1a1a;
    }

    .order-totals {
      padding-top: 16px;
    }

    .total-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      font-size: 14px;
      color: #666;
    }

    .total-row.total-final {
      border-top: 2px solid #e5e7eb;
      margin-top: 8px;
      padding-top: 16px;
      font-size: 18px;
      color: #1a1a1a;
    }

    .text-success { color: #065f46; }

    .timeline {
      position: relative;
      padding-left: 30px;
    }

    .timeline-item {
      position: relative;
      padding-bottom: 24px;
    }

    .timeline-item:last-child {
      padding-bottom: 0;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -24px;
      top: 8px;
      bottom: -16px;
      width: 2px;
      background: #e5e7eb;
    }

    .timeline-item:last-child::before {
      display: none;
    }

    .timeline-dot {
      position: absolute;
      left: -30px;
      top: 4px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #e5e7eb;
      border: 3px solid #fff;
    }

    .timeline-item.active .timeline-dot {
      background: #e31b23;
    }

    .timeline-content h4 {
      font-size: 15px;
      font-weight: 600;
      margin: 0 0 4px;
      color: #1a1a1a;
    }

    .timeline-content p {
      font-size: 14px;
      color: #666;
      margin: 0 0 4px;
    }

    .timeline-date {
      font-size: 12px;
      color: #888;
    }

    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #f0f0f0;
      font-size: 14px;
    }

    .info-row:last-child {
      border-bottom: none;
    }

    .info-row span:first-child {
      color: #666;
    }

    .payment-paid { color: #065f46; font-weight: 500; }
    .payment-pending { color: #92400e; font-weight: 500; }
    .payment-failed { color: #991b1b; font-weight: 500; }

    .address-text {
      color: #444;
      line-height: 1.6;
      margin: 0;
    }

    .car-info strong {
      display: block;
      margin-bottom: 4px;
      color: #1a1a1a;
    }

    .car-info p {
      margin: 0;
      color: #666;
      font-size: 14px;
    }

    .actions-card {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .btn-primary {
      padding: 12px 24px;
      background: #e31b23;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
    }

    .btn-danger {
      padding: 12px 24px;
      background: #dc3545;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
    }

    .btn-outline {
      padding: 12px 24px;
      border: 1px solid #e5e7eb;
      color: #444;
      background: #fff;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      text-align: center;
    }

    .full-width {
      width: 100%;
    }
  `]
})
export class ClientOrderDetailComponent implements OnInit {
  order = signal<any>(null);
  loading = signal(true);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    if (orderId) {
      this.loadOrder(+orderId);
    }
  }

  loadOrder(id: number): void {
    this.loading.set(true);
    this.orderService.getOrder(id).subscribe({
      next: (response) => {
        this.order.set(response.data || response.order || response);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.router.navigate(['/client/orders']);
      }
    });
  }

  cancelOrder(): void {
    if (confirm('Are you sure you want to cancel this order?')) {
      this.orderService.cancelOrder(this.order().id).subscribe({
        next: () => {
          this.toast.success('Order cancelled successfully');
          this.loadOrder(this.order().id);
        },
        error: () => {
          this.toast.error('Failed to cancel order. Please try again.');
        }
      });
    }
  }

  isServiceOrder(): boolean {
    const items = this.order()?.items || [];
    return items.every((i: any) => !i.service?.type || i.service?.type === 0);
  }

  reorder(): void {
    // Implement reorder logic
    this.toast.info('Reorder functionality coming soon!');
  }
}
