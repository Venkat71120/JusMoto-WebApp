import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="page-header">
      <a routerLink="/admin/orders" class="back-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to Orders
      </a>
    </div>

    <div class="loading-center" *ngIf="loading()"><div class="spinner"></div></div>

    <div *ngIf="order() && !loading()">
      <div class="order-header">
        <div>
          <h1 class="order-title">Order {{ order().invoice_number || '#' + order().id }}</h1>
          <p class="order-date">{{ order().created_at | date:'medium' }}</p>
        </div>
        <div class="order-controls">
          <select class="status-select" [ngModel]="order().status" (ngModelChange)="changeStatus($event)">
            <option [value]="0">Pending</option>
            <option [value]="1">Accepted</option>
            <option [value]="2">In Progress</option>
            <option [value]="3">Completed</option>
            <option [value]="4">Cancelled</option>
          </select>
          <button class="btn-payment" [class.paid]="order().payment_status" (click)="togglePayment()">
            {{ order().payment_status ? 'Paid' : 'Mark as Paid' }}
          </button>
        </div>
      </div>

      <div class="detail-grid">
        <div class="detail-card">
          <h3>Customer Information</h3>
          <div class="customer-block" *ngIf="order().user">
            <div class="detail-row"><span class="label">Name</span><span>{{ order().user.first_name || '' }} {{ order().user.last_name || '' }}</span></div>
            <div class="detail-row"><span class="label">Email</span><span>{{ order().user.email }}</span></div>
            <div class="detail-row"><span class="label">Phone</span><span>{{ order().user.phone || '-' }}</span></div>
          </div>
        </div>

        <div class="detail-card">
          <h3>Order Summary</h3>
          <div class="detail-row"><span class="label">Subtotal</span><span>&#8377;{{ order().sub_total | number:'1.2-2' }}</span></div>
          <div class="detail-row"><span class="label">Tax</span><span>&#8377;{{ order().tax | number:'1.2-2' }}</span></div>
          <div class="detail-row" *ngIf="order().coupon_amount > 0"><span class="label">Coupon ({{ order().coupon_code }})</span><span class="text-green">-&#8377;{{ order().coupon_amount | number:'1.2-2' }}</span></div>
          <div class="detail-row" *ngIf="order().delivery_charge > 0"><span class="label">Delivery</span><span>&#8377;{{ order().delivery_charge | number:'1.2-2' }}</span></div>
          <div class="detail-row total-row"><span class="label">Total</span><span class="total-amount">&#8377;{{ order().total | number:'1.2-2' }}</span></div>
        </div>
      </div>

      <div class="detail-card" *ngIf="order().items?.length">
        <h3>Order Items</h3>
        <table class="data-table">
          <thead>
            <tr><th>Service</th><th>Price</th><th>Qty</th><th>Total</th></tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of order().items">
              <td>
                <div class="item-cell">
                  <span>{{ item.service?.title || 'Service #' + item.service_id }}</span>
                </div>
              </td>
              <td>&#8377;{{ item.price | number:'1.2-2' }}</td>
              <td>{{ item.qty }}</td>
              <td class="fw-600">&#8377;{{ (item.price * item.qty) | number:'1.2-2' }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="detail-card" *ngIf="order().location">
        <h3>Delivery Location</h3>
        <div class="detail-row"><span class="label">Title</span><span>{{ order().location.title || '-' }}</span></div>
        <div class="detail-row"><span class="label">Address</span><span>{{ order().location.address || '-' }}</span></div>
        <div class="detail-row"><span class="label">Post Code</span><span>{{ order().location.post_code || '-' }}</span></div>
        <div class="detail-row"><span class="label">Phone</span><span>{{ order().location.phone || '-' }}</span></div>
      </div>

      <div class="detail-card" *ngIf="order().order_note">
        <h3>Order Note</h3>
        <p class="note-text">{{ order().order_note }}</p>
      </div>
    </div>
  `,
  styles: [`
    .page-header { margin-bottom: 24px; }
    .back-btn { display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: #64748b; font-weight: 500; transition: color 0.2s; }
    .back-btn:hover { color: #e31b23; }
    .loading-center { display: flex; justify-content: center; padding: 60px; }
    .spinner { width: 36px; height: 36px; border: 3px solid #f3f4f6; border-top-color: #e31b23; border-radius: 50%; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .order-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; flex-wrap: wrap; gap: 16px; }
    .order-title { font-size: 24px; font-weight: 700; color: #1a1a2e; margin: 0; }
    .order-date { color: #64748b; margin: 4px 0 0; }
    .order-controls { display: flex; gap: 12px; align-items: center; }
    .status-select { padding: 8px 14px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; background: #fff; }
    .btn-payment { padding: 8px 20px; border: 2px solid #e31b23; border-radius: 8px; background: transparent; color: #e31b23; font-weight: 600; cursor: pointer; transition: all 0.2s; }
    .btn-payment.paid { background: #dcfce7; border-color: #16a34a; color: #16a34a; }
    .btn-payment:hover { opacity: 0.8; }
    .detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px; }
    .detail-card { background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); margin-bottom: 20px; }
    .detail-card h3 { font-size: 16px; font-weight: 700; color: #1a1a2e; margin: 0 0 16px; padding-bottom: 12px; border-bottom: 1px solid #f1f5f9; }
    .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f8f9fa; }
    .detail-row .label { color: #64748b; font-weight: 500; }
    .total-row { border-top: 2px solid #e5e7eb; margin-top: 8px; padding-top: 12px; }
    .total-amount { font-size: 18px; font-weight: 700; color: #e31b23; }
    .text-green { color: #16a34a; font-weight: 600; }
    .data-table { width: 100%; border-collapse: collapse; }
    .data-table th { padding: 10px 12px; text-align: left; font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; border-bottom: 1px solid #f1f5f9; }
    .data-table td { padding: 10px 12px; font-size: 14px; color: #334155; border-bottom: 1px solid #f8f9fa; }
    .item-cell { display: flex; align-items: center; gap: 10px; }
    .fw-600 { font-weight: 600; }
    .note-text { color: #334155; line-height: 1.6; margin: 0; }
    @media (max-width: 768px) { .detail-grid { grid-template-columns: 1fr; } }
  `]
})
export class OrderDetailComponent implements OnInit {
  order = signal<any>(null);
  loading = signal(true);

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`${environment.apiUrl}/admin/orders/${id}`).subscribe({
      next: (res) => this.order.set(res.data),
      error: () => this.router.navigate(['/admin/orders']),
      complete: () => this.loading.set(false)
    });
  }

  changeStatus(newStatus: string) {
    const o = this.order();
    this.http.put<any>(`${environment.apiUrl}/admin/orders/${o.id}/status`, { status: +newStatus }).subscribe({
      next: () => this.order.set({ ...o, status: +newStatus })
    });
  }

  togglePayment() {
    const o = this.order();
    const newStatus = o.payment_status ? 0 : 1;
    this.http.put<any>(`${environment.apiUrl}/admin/orders/${o.id}/payment-status`, { payment_status: newStatus }).subscribe({
      next: () => this.order.set({ ...o, payment_status: newStatus })
    });
  }
}
