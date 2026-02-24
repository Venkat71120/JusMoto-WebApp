import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-client-order-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ConfirmModalComponent],
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
            <h1>Order #{{ order().invoice_number || order().id }}</h1>
            <span class="status-badge" [class]="'status-' + getStatusKey(order().status)">
              {{ getStatusLabel(order().status) }}
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
                    <img [src]="getServiceImage(item.service)" [alt]="item.service?.title" (error)="onImgError($event)">
                  </div>
                  <div class="item-details">
                    <h4>{{ item.service?.title || 'Service' }}</h4>
                    <p class="item-desc" *ngIf="item.service?.description">{{ item.service?.description | slice:0:100 }}</p>
                    <div class="item-meta">
                      <span>Qty: {{ item.qty || item.quantity || 1 }}</span>
                      <span>{{ item.price | currency:'INR':'symbol':'1.0-0' }} each</span>
                    </div>
                  </div>
                  <div class="item-total">
                    {{ (item.qty || item.quantity || 1) * item.price | currency:'INR':'symbol':'1.0-0' }}
                  </div>
                </div>
              </div>

              <div class="order-totals">
                <div class="total-row">
                  <span>Subtotal</span>
                  <span>{{ order().sub_total | currency:'INR':'symbol':'1.0-0' }}</span>
                </div>
                <div class="total-row" *ngIf="order().coupon_amount > 0">
                  <span>Discount <span *ngIf="order().coupon_code">({{ order().coupon_code }})</span></span>
                  <span class="text-success">-{{ order().coupon_amount | currency:'INR':'symbol':'1.0-0' }}</span>
                </div>
                <div class="total-row" *ngIf="order().delivery_charge > 0">
                  <span>Delivery</span>
                  <span>{{ order().delivery_charge | currency:'INR':'symbol':'1.0-0' }}</span>
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

            <!-- Order Info -->
            <div class="card" *ngIf="order().order_note || order().date || order().schedule">
              <h2>Order Info</h2>
              <div class="info-row" *ngIf="order().date">
                <span>Scheduled Date</span>
                <span>{{ order().date | date:'dd MMM yyyy' }}</span>
              </div>
              <div class="info-row" *ngIf="order().schedule">
                <span>Time Slot</span>
                <span>{{ order().schedule }}</span>
              </div>
              <div class="info-row" *ngIf="order().delivery_mode">
                <span>Delivery Mode</span>
                <span>{{ order().delivery_mode }}</span>
              </div>
              <div class="info-row" *ngIf="order().order_note">
                <span>Note</span>
                <span>{{ order().order_note }}</span>
              </div>
            </div>
          </div>

          <div class="sidebar-section">
            <div class="card">
              <h3>Payment Details</h3>
              <div class="info-row">
                <span>Method</span>
                <span class="payment-method">{{ getPaymentMethodLabel(order().payment_gateway) }}</span>
              </div>
              <div class="info-row">
                <span>Status</span>
                <span [class]="order().payment_status == 1 ? 'payment-paid' : 'payment-pending'">
                  {{ order().payment_status == 1 ? 'Paid' : 'Unpaid' }}
                </span>
              </div>
              <div class="info-row" *ngIf="order().transaction_id">
                <span>Transaction ID</span>
                <span class="txn-id">{{ order().transaction_id }}</span>
              </div>
              <div class="info-row">
                <span>Amount</span>
                <strong>{{ order().total | currency:'INR':'symbol':'1.0-0' }}</strong>
              </div>
            </div>

            <div class="card" *ngIf="order().location">
              <h3>Service Address</h3>
              <p class="address-text">
                <span *ngIf="order().location.title"><strong>{{ order().location.title }}</strong><br></span>
                {{ order().location.address }}
                <span *ngIf="order().location.post_code"><br>PIN: {{ order().location.post_code }}</span>
                <span *ngIf="order().location.phone"><br>Phone: {{ order().location.phone }}</span>
              </p>
            </div>

            <div class="card actions-card">
              <button *ngIf="order().status == 0" class="btn-danger full-width" (click)="cancelOrder()">
                Cancel Order
              </button>
              <button *ngIf="order().status == 3" class="btn-primary full-width" (click)="reorder()">
                Reorder
              </button>
              <a routerLink="/client/orders" class="btn-outline full-width">
                Back to Orders
              </a>
            </div>
          </div>
        </div>
      </div>

      <div *ngIf="!loading() && !order()" class="empty-state">
        <p>Order not found.</p>
        <a routerLink="/client/orders" class="btn-primary">Back to Orders</a>
      </div>

      <app-confirm-modal
        [open]="cancelModalOpen()"
        title="Cancel Order"
        message="Are you sure you want to cancel this order? This action cannot be undone."
        confirmText="Yes, Cancel"
        type="danger"
        (confirmed)="doCancel()"
        (cancelled)="cancelModalOpen.set(false)">
      </app-confirm-modal>
    </div>
  `,
  styles: [`
    .order-detail-container { max-width:1100px; margin:0 auto; }
    .back-link { margin-bottom:20px; }
    .back-link a { color:#e31b23; text-decoration:none; font-size:14px; }
    .back-link a:hover { text-decoration:underline; }

    .loading { text-align:center; padding:60px 20px; }
    .spinner { width:40px; height:40px; border:3px solid #e5e7eb; border-top-color:#e31b23; border-radius:50%; margin:0 auto 16px; animation:spin 1s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }

    .order-header-card { background:#fff; border-radius:12px; padding:24px; margin-bottom:24px; box-shadow:0 2px 8px rgba(0,0,0,0.08); }
    .order-title { display:flex; align-items:center; gap:16px; margin-bottom:8px; flex-wrap:wrap; }
    .order-title h1 { font-size:24px; font-weight:700; margin:0; color:#1a1a1a; }
    .status-badge { padding:6px 14px; border-radius:20px; font-size:13px; font-weight:600; }
    .status-pending { background:#fef3c7; color:#92400e; }
    .status-accepted { background:#dbeafe; color:#1e40af; }
    .status-in_progress { background:#e0e7ff; color:#3730a3; }
    .status-completed { background:#d1fae5; color:#065f46; }
    .status-cancelled { background:#fee2e2; color:#991b1b; }
    .status-refunded { background:#f3e8ff; color:#6b21a8; }
    .order-date { color:#666; margin:0; font-size:14px; }

    .order-grid { display:grid; grid-template-columns:1fr 350px; gap:24px; }
    @media (max-width:900px) { .order-grid { grid-template-columns:1fr; } }

    .card { background:#fff; border-radius:12px; padding:24px; box-shadow:0 2px 8px rgba(0,0,0,0.08); margin-bottom:24px; }
    .card h2, .card h3 { font-size:18px; font-weight:600; color:#1a1a1a; margin:0 0 20px; }
    .items-list { border-bottom:1px solid #e5e7eb; margin-bottom:20px; }
    .item-row { display:flex; gap:16px; padding:16px 0; border-top:1px solid #e5e7eb; align-items:flex-start; }
    .item-image { flex-shrink:0; }
    .item-image img { width:80px; height:80px; border-radius:8px; object-fit:cover; background:#f8f9fa; }
    .item-details { flex:1; min-width:0; }
    .item-details h4 { font-size:16px; font-weight:600; margin:0 0 4px; color:#1a1a1a; }
    .item-desc { font-size:13px; color:#666; margin:0 0 8px; }
    .item-meta { display:flex; gap:16px; font-size:13px; color:#888; }
    .item-total { font-size:16px; font-weight:600; color:#1a1a1a; white-space:nowrap; }

    .order-totals { padding-top:16px; }
    .total-row { display:flex; justify-content:space-between; padding:8px 0; font-size:14px; color:#666; }
    .total-row.total-final { border-top:2px solid #e5e7eb; margin-top:8px; padding-top:16px; font-size:18px; color:#1a1a1a; }
    .text-success { color:#065f46; }

    .info-row { display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #f0f0f0; font-size:14px; gap:12px; }
    .info-row:last-child { border-bottom:none; }
    .info-row span:first-child { color:#666; white-space:nowrap; }
    .payment-method { font-weight:500; text-transform:capitalize; }
    .payment-paid { color:#065f46; font-weight:600; }
    .payment-pending { color:#92400e; font-weight:600; }
    .txn-id { font-size:12px; word-break:break-all; font-family:monospace; }

    .address-text { color:#444; line-height:1.6; margin:0; font-size:14px; }
    .empty-state { text-align:center; padding:60px 20px; color:#666; }
    .empty-state .btn-primary { display:inline-block; margin-top:16px; text-decoration:none; }

    .actions-card { display:flex; flex-direction:column; gap:12px; }
    .btn-primary { padding:12px 24px; background:#e31b23; color:#fff; border:none; border-radius:8px; font-weight:600; cursor:pointer; text-align:center; text-decoration:none; font-size:14px; }
    .btn-primary:hover { background:#b91620; }
    .btn-danger { padding:12px 24px; background:#dc3545; color:#fff; border:none; border-radius:8px; font-weight:600; cursor:pointer; font-size:14px; }
    .btn-danger:hover { background:#b02a37; }
    .btn-outline { padding:12px 24px; border:1px solid #e5e7eb; color:#444; background:#fff; border-radius:8px; text-decoration:none; font-weight:500; text-align:center; font-size:14px; }
    .btn-outline:hover { background:#f8f9fa; }
    .full-width { width:100%; box-sizing:border-box; }
  `]
})
export class ClientOrderDetailComponent implements OnInit {
  order = signal<any>(null);
  loading = signal(true);
  cancelModalOpen = signal(false);
  private baseUrl = environment.apiUrl.replace('/api/v1', '');

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
      }
    });
  }

  getServiceImage(service: any): string {
    if (!service?.image) return '/assets/images/placeholder.png';
    const img = String(service.image);
    if (img.startsWith('http')) return img;
    if (img.startsWith('media/') || img.startsWith('uploads/')) {
      const filename = img.replace('uploads/media/', '').replace('media/', '');
      return `${this.baseUrl}/uploads/media/${filename}`;
    }
    return `${this.baseUrl}/uploads/media/${img}`;
  }

  onImgError(event: any) {
    event.target.src = '/assets/images/placeholder.png';
  }

  getStatusLabel(status: number | string): string {
    const map: any = { 0: 'Pending', 1: 'Accepted', 2: 'In Progress', 3: 'Completed', 4: 'Cancelled', 5: 'Refunded' };
    return map[status] || 'Unknown';
  }

  getStatusKey(status: number | string): string {
    const map: any = { 0: 'pending', 1: 'accepted', 2: 'in_progress', 3: 'completed', 4: 'cancelled', 5: 'refunded' };
    return map[status] || 'pending';
  }

  getPaymentMethodLabel(gateway: string): string {
    if (!gateway) return 'Not set';
    const map: any = { cod: 'Cash on Delivery', wallet: 'Wallet', stripe: 'Credit/Debit Card', razorpay: 'Razorpay', cashfree: 'Cashfree' };
    return map[gateway] || gateway;
  }

  cancelOrder(): void {
    this.cancelModalOpen.set(true);
  }

  doCancel(): void {
    this.cancelModalOpen.set(false);
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

  isServiceOrder(): boolean {
    const items = this.order()?.items || [];
    return items.every((i: any) => !i.service?.type || i.service?.type === 0);
  }

  reorder(): void {
    this.toast.info('Reorder functionality coming soon!');
  }
}
