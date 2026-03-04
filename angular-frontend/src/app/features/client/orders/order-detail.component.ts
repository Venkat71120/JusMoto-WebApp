import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../../core/services/order.service';
import { ToastService } from '../../../core/services/toast.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-client-order-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
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

        <!-- Refund Status Banner -->
        <div class="refund-banner" *ngIf="order().refund">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
          <div>
            <strong>Refund {{ getRefundStatusLabel(order().refund.status) }}</strong>
            <span> &mdash; {{ order().refund.amount | currency:'INR':'symbol':'1.0-0' }}</span>
            <span *ngIf="order().refund.cancel_reason" class="refund-reason"> &bull; {{ order().refund.cancel_reason }}</span>
          </div>
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
              <button class="btn-invoice full-width" (click)="downloadInvoice()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Invoice
              </button>
              <button *ngIf="order().status < 2" class="btn-danger full-width" (click)="cancelOrder()">
                Cancel Order
              </button>
              <button *ngIf="canRequestRefund()" class="btn-refund full-width" (click)="refundModalOpen.set(true)">
                Request Refund
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

      <!-- Cancel Order Modal -->
      <div class="modal-overlay" *ngIf="cancelModalOpen()" (click)="cancelModalOpen.set(false)">
        <div class="refund-modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h3>Cancel Order</h3>
            <button class="modal-close" (click)="cancelModalOpen.set(false)">&times;</button>
          </div>
          <div class="modal-body">
            <p>Please provide a reason for cancelling this order. This action cannot be undone.</p>
            <textarea class="refund-textarea cancel-textarea" [(ngModel)]="cancelReason" placeholder="Why are you cancelling this order?" rows="4"></textarea>
          </div>
          <div class="modal-footer">
            <button class="btn-cancel-modal" (click)="cancelModalOpen.set(false)">Go Back</button>
            <button class="btn-submit-cancel" [disabled]="!cancelReason.trim() || cancellingOrder()" (click)="doCancel()">
              {{ cancellingOrder() ? 'Cancelling...' : 'Yes, Cancel Order' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Refund Modal -->
      <div class="modal-overlay" *ngIf="refundModalOpen()" (click)="refundModalOpen.set(false)">
        <div class="refund-modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h3>Request Refund</h3>
            <button class="modal-close" (click)="refundModalOpen.set(false)">&times;</button>
          </div>
          <div class="modal-body">
            <p>Please provide a reason for requesting a refund for this order.</p>
            <textarea class="refund-textarea" [(ngModel)]="refundReason" placeholder="Describe why you are requesting a refund..." rows="4"></textarea>
          </div>
          <div class="modal-footer">
            <button class="btn-cancel-modal" (click)="refundModalOpen.set(false)">Cancel</button>
            <button class="btn-submit-refund" [disabled]="!refundReason.trim() || submittingRefund()" (click)="submitRefund()">
              {{ submittingRefund() ? 'Submitting...' : 'Submit Refund Request' }}
            </button>
          </div>
        </div>
      </div>
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

    .refund-banner { display:flex; align-items:flex-start; gap:10px; padding:14px 18px; border-radius:10px; margin-bottom:20px; font-size:14px; color:#7c3aed; background:#f5f3ff; border:1px solid #ddd6fe; }
    .refund-banner strong { font-weight:700; }
    .refund-reason { color:#9333ea; font-style:italic; }

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
    .btn-refund { padding:12px 24px; background:#7c3aed; color:#fff; border:none; border-radius:8px; font-weight:600; cursor:pointer; font-size:14px; }
    .btn-refund:hover { background:#6d28d9; }
    .btn-invoice { display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:12px 24px; border:1px solid #e31b23; color:#e31b23; background:#fff; border-radius:8px; font-weight:600; cursor:pointer; font-size:14px; }
    .btn-invoice:hover { background:#fff5f5; }
    .btn-outline { padding:12px 24px; border:1px solid #e5e7eb; color:#444; background:#fff; border-radius:8px; text-decoration:none; font-weight:500; text-align:center; font-size:14px; }
    .btn-outline:hover { background:#f8f9fa; }
    .full-width { width:100%; box-sizing:border-box; }

    /* Refund Modal */
    .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:9998; display:flex; align-items:center; justify-content:center; }
    .refund-modal { background:#fff; border-radius:16px; width:90vw; max-width:480px; overflow:hidden; box-shadow:0 20px 60px rgba(0,0,0,0.2); }
    .modal-header { display:flex; justify-content:space-between; align-items:center; padding:20px 24px; border-bottom:1px solid #e5e7eb; }
    .modal-header h3 { margin:0; font-size:18px; font-weight:700; color:#1a1a2e; }
    .modal-close { background:none; border:none; font-size:28px; cursor:pointer; color:#64748b; line-height:1; }
    .modal-body { padding:20px 24px; }
    .modal-body p { margin:0 0 12px; color:#64748b; font-size:14px; }
    .refund-textarea { width:100%; padding:12px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; resize:vertical; box-sizing:border-box; font-family:inherit; }
    .refund-textarea:focus { outline:none; border-color:#7c3aed; }
    .modal-footer { display:flex; justify-content:flex-end; gap:12px; padding:16px 24px; border-top:1px solid #e5e7eb; }
    .btn-cancel-modal { padding:10px 20px; border:1px solid #d1d5db; border-radius:8px; background:#fff; color:#374151; font-weight:600; cursor:pointer; font-size:14px; }
    .btn-submit-refund { padding:10px 20px; border:none; border-radius:8px; background:#7c3aed; color:#fff; font-weight:600; cursor:pointer; font-size:14px; }
    .btn-submit-refund:hover { background:#6d28d9; }
    .btn-submit-refund:disabled { opacity:0.5; cursor:not-allowed; }

    .btn-submit-cancel { padding:10px 20px; border:none; border-radius:8px; background:#dc3545; color:#fff; font-weight:600; cursor:pointer; font-size:14px; }
    .btn-submit-cancel:hover { background:#b02a37; }
    .btn-submit-cancel:disabled { opacity:0.5; cursor:not-allowed; }
    .cancel-textarea:focus { outline:none; border-color:#dc3545; }
  `]
})
export class ClientOrderDetailComponent implements OnInit {
  order = signal<any>(null);
  loading = signal(true);
  cancelModalOpen = signal(false);
  refundModalOpen = signal(false);
  submittingRefund = signal(false);
  cancellingOrder = signal(false);
  refundReason = '';
  cancelReason = '';
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
    const map: any = { cod: 'Cash on Delivery', wallet: 'Wallet', stripe: 'Credit/Debit Card', razorpay: 'Razorpay', cashfree: 'Cashfree', payzapp: 'PayZapp' };
    return map[gateway] || gateway;
  }

  getRefundStatusLabel(status: number): string {
    const map: any = { 0: 'Requested', 1: 'Approved', 2: 'Rejected' };
    return map[status] || 'Pending';
  }

  canRequestRefund(): boolean {
    const o = this.order();
    if (!o) return false;
    if (o.refund) return false;
    if (o.payment_status != 1) return false;
    return o.status == 3 || o.status == 4;
  }

  cancelOrder(): void {
    this.cancelModalOpen.set(true);
  }

  doCancel(): void {
    if (!this.cancelReason.trim()) return;
    this.cancellingOrder.set(true);
    this.orderService.cancelOrder(this.order().id, this.cancelReason).subscribe({
      next: (res) => {
        if (res.data?.refund) {
          this.toast.success('Order cancelled. Refund request has been automatically created.');
        } else {
          this.toast.success('Order cancelled successfully');
        }
        this.cancelModalOpen.set(false);
        this.cancelReason = '';
        this.cancellingOrder.set(false);
        this.loadOrder(this.order().id);
      },
      error: (err) => {
        this.toast.error(err.error?.error || 'Failed to cancel order. Please try again.');
        this.cancellingOrder.set(false);
      }
    });
  }

  submitRefund(): void {
    if (!this.refundReason.trim()) return;
    this.submittingRefund.set(true);
    this.orderService.requestRefund(this.order().id, this.refundReason).subscribe({
      next: () => {
        this.toast.success('Refund request submitted successfully');
        this.refundModalOpen.set(false);
        this.refundReason = '';
        this.submittingRefund.set(false);
        this.loadOrder(this.order().id);
      },
      error: (err) => {
        this.toast.error(err.error?.error || 'Failed to submit refund request');
        this.submittingRefund.set(false);
      }
    });
  }

  downloadInvoice(): void {
    const o = this.order();
    if (!o) return;
    this.orderService.getInvoice(o.id).subscribe({
      next: (html: string) => {
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
      },
      error: () => this.toast.error('Failed to generate invoice')
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
