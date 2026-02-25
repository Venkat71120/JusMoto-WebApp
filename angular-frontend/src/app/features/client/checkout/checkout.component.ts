import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CartService, Cart } from '../../../core/services/cart.service';
import { OrderService } from '../../../core/services/order.service';
import { ToastService } from '../../../core/services/toast.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="checkout-page">
      <div class="page-header">
        <div>
          <h1>Checkout</h1>
          <p>Review your order and complete payment</p>
        </div>
        <a routerLink="/client/cart" class="btn-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Cart
        </a>
      </div>

      <div *ngIf="loading()" class="loading">
        <div class="spinner"></div>
        <p>Loading...</p>
      </div>

      <div *ngIf="!loading() && cart().items.length === 0" class="empty-state">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
        <h3>Your cart is empty</h3>
        <p>Add items to your cart before checkout</p>
        <a routerLink="/client/orders" class="btn-primary">Browse Services</a>
      </div>

      <div class="checkout-layout" *ngIf="!loading() && cart().items.length > 0">
        <div class="checkout-form">
          <!-- Delivery Address -->
          <div class="section-card">
            <h3 class="section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Delivery Address
            </h3>

            <!-- Saved addresses -->
            <div *ngIf="addresses().length > 0" class="address-list">
              <div class="address-option" *ngFor="let addr of addresses()"
                   [class.selected]="selectedAddressId === addr.id"
                   (click)="selectAddress(addr)">
                <div class="radio-dot" [class.checked]="selectedAddressId === addr.id"></div>
                <div class="address-info">
                  <strong>{{ addr.name }}</strong>
                  <span>{{ addr.address || addr.address_line1 }}, {{ addr.city }}, {{ addr.state }} - {{ addr.zip_code || addr.pincode }}</span>
                  <span class="addr-phone" *ngIf="addr.phone">{{ addr.phone }}</span>
                </div>
              </div>
            </div>

            <div class="divider-text" *ngIf="addresses().length > 0">or enter a new address</div>

            <!-- New address form -->
            <div class="address-form" [class.collapsed]="selectedAddressId && addresses().length > 0">
              <div class="form-row">
                <div class="form-group">
                  <label>Full Name *</label>
                  <input type="text" [(ngModel)]="addressForm.name" placeholder="John Doe">
                </div>
                <div class="form-group">
                  <label>Phone *</label>
                  <input type="text" [(ngModel)]="addressForm.phone" placeholder="9876543210">
                </div>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" [(ngModel)]="addressForm.email" placeholder="john@example.com">
              </div>
              <div class="form-group">
                <label>Address *</label>
                <input type="text" [(ngModel)]="addressForm.address" placeholder="House/Flat No., Street, Area">
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>City *</label>
                  <input type="text" [(ngModel)]="addressForm.city" placeholder="City">
                </div>
                <div class="form-group">
                  <label>State *</label>
                  <input type="text" [(ngModel)]="addressForm.state" placeholder="State">
                </div>
                <div class="form-group">
                  <label>PIN Code *</label>
                  <input type="text" [(ngModel)]="addressForm.zip_code" placeholder="110001">
                </div>
              </div>
            </div>
          </div>

          <!-- Payment Method -->
          <div class="section-card">
            <h3 class="section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              Payment Method
            </h3>
            <div class="payment-methods">
              <!-- PayZapp -->
              <div class="payment-option selected">
                <div class="radio-dot checked"></div>
                <div class="pm-icon payzapp-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 5H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2z"/><path d="M3 10h18"/><path d="M7 15h2"/><path d="M12 15h5"/></svg>
                </div>
                <div class="pm-details">
                  <strong>PayZapp</strong>
                  <span>UPI, Cards, Net Banking & Wallets</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Schedule -->
          <div class="section-card">
            <h3 class="section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Schedule
            </h3>
            <div class="form-row">
              <div class="form-group">
                <label>Preferred Date</label>
                <input type="date" [(ngModel)]="scheduleDate" [min]="todayDate">
              </div>
              <div class="form-group">
                <label>Time Slot</label>
                <select [(ngModel)]="scheduleTime">
                  <option value="">Select time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (4 PM - 8 PM)</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Order Note -->
          <div class="section-card">
            <h3 class="section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              Order Note (Optional)
            </h3>
            <textarea [(ngModel)]="orderNote" rows="3" placeholder="Any special instructions..."></textarea>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="order-summary">
          <h3>Order Summary</h3>
          <div class="summary-items">
            <div class="summary-item" *ngFor="let item of cart().items">
              <div class="si-name">
                <span>{{ item.service?.title || 'Service' }}</span>
                <span class="si-qty">x{{ item.quantity }}</span>
              </div>
              <span class="si-price">{{ (item.item_total || (item.price + item.addon_total) * item.quantity) | currency:'INR':'symbol':'1.0-0' }}</span>
            </div>
          </div>

          <!-- Coupon -->
          <div class="coupon-section">
            <div class="coupon-input-row">
              <input type="text" [(ngModel)]="couponCode" placeholder="Coupon code" [disabled]="couponApplied()">
              <button *ngIf="!couponApplied()" class="btn-apply" (click)="applyCoupon()" [disabled]="!couponCode.trim() || applyingCoupon()">
                {{ applyingCoupon() ? '...' : 'Apply' }}
              </button>
              <button *ngIf="couponApplied()" class="btn-remove-coupon" (click)="removeCoupon()">Remove</button>
            </div>
            <p class="coupon-msg success" *ngIf="couponApplied()">Coupon applied! You save {{ couponDiscount() | currency:'INR':'symbol':'1.0-0' }}</p>
            <p class="coupon-msg error" *ngIf="couponError()">{{ couponError() }}</p>
          </div>

          <div class="summary-totals">
            <div class="summary-line">
              <span>Subtotal</span>
              <span>{{ cart().sub_total | currency:'INR':'symbol':'1.0-0' }}</span>
            </div>
            <div class="summary-line" *ngIf="couponApplied()">
              <span>Discount</span>
              <span class="discount">-{{ couponDiscount() | currency:'INR':'symbol':'1.0-0' }}</span>
            </div>
            <div class="summary-line total">
              <span>Total</span>
              <strong>{{ finalTotal() | currency:'INR':'symbol':'1.0-0' }}</strong>
            </div>
          </div>

          <!-- Selected payment info -->
          <div class="selected-payment-info" *ngIf="selectedPayment">
            <span class="spi-label">Paying via:</span>
            <strong>{{ getPaymentLabel(selectedPayment) }}</strong>
          </div>

          <button class="btn-place-order" (click)="placeOrder()" [disabled]="placingOrder() || !isFormValid()">
            <svg *ngIf="!placingOrder()" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            {{ placingOrder() ? 'Placing Order...' : 'Place Order & Pay' }}
          </button>
          <p class="secure-note">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            Secure checkout
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .checkout-page { max-width:1100px; margin:0 auto; }
    .page-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:28px; flex-wrap:wrap; gap:16px; }
    .page-header h1 { font-size:24px; font-weight:700; color:#1a1a2e; margin:0 0 4px; }
    .page-header p { color:#64748b; margin:0; font-size:14px; }
    .btn-back { display:inline-flex; align-items:center; gap:6px; padding:10px 18px; border:1px solid #e5e7eb; border-radius:8px; color:#475569; font-size:14px; font-weight:600; text-decoration:none; transition:all 0.2s; background:#fff; }
    .btn-back:hover { border-color:#e31b23; color:#e31b23; }
    .btn-primary { display:inline-flex; padding:12px 24px; background:#e31b23; color:#fff; border:none; border-radius:10px; font-weight:600; font-size:14px; cursor:pointer; text-decoration:none; }

    .loading { text-align:center; padding:60px 20px; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; margin:0 auto 16px; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }

    .empty-state { text-align:center; padding:60px 24px; background:#fff; border-radius:16px; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .empty-state svg { margin-bottom:16px; }
    .empty-state h3 { font-size:20px; color:#1a1a2e; margin:0 0 8px; }
    .empty-state p { color:#64748b; margin:0 0 24px; }

    /* Layout */
    .checkout-layout { display:grid; grid-template-columns:1fr 380px; gap:24px; align-items:flex-start; }
    @media (max-width:768px) { .checkout-layout { grid-template-columns:1fr; } }

    /* Section cards */
    .section-card { background:#fff; border-radius:14px; border:1px solid #e5e7eb; padding:24px; margin-bottom:20px; }
    .section-title { display:flex; align-items:center; gap:10px; font-size:17px; font-weight:700; color:#1a1a2e; margin:0 0 20px; }

    /* Form */
    .form-group { display:flex; flex-direction:column; gap:6px; margin-bottom:14px; flex:1; }
    .form-group label { font-size:13px; font-weight:600; color:#374151; }
    .form-group input, .form-group select, textarea { width:100%; padding:10px 14px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; box-sizing:border-box; font-family:inherit; }
    .form-group input:focus, .form-group select:focus, textarea:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.1); }
    .form-group select { appearance:none; -webkit-appearance:none; -moz-appearance:none; background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e"); background-position:right 12px center; background-repeat:no-repeat; background-size:20px; padding-right:40px; cursor:pointer; background-color:#fff; }
    textarea { resize:vertical; border:1px solid #e5e7eb; border-radius:8px; padding:10px 14px; font-size:14px; width:100%; box-sizing:border-box; }
    .form-row { display:flex; gap:14px; }
    @media (max-width:480px) { .form-row { flex-direction:column; } }

    /* Address selection */
    .address-list { display:flex; flex-direction:column; gap:10px; margin-bottom:16px; }
    .address-option { display:flex; align-items:flex-start; gap:12px; padding:14px 16px; border:2px solid #e5e7eb; border-radius:10px; cursor:pointer; transition:all 0.2s; }
    .address-option:hover { border-color:#fca5a5; }
    .address-option.selected { border-color:#e31b23; background:#fff5f5; }
    .radio-dot { width:18px; height:18px; border:2px solid #d1d5db; border-radius:50%; flex-shrink:0; margin-top:2px; transition:all 0.2s; position:relative; }
    .radio-dot.checked { border-color:#e31b23; }
    .radio-dot.checked::after { content:''; position:absolute; inset:3px; background:#e31b23; border-radius:50%; }
    .address-info { display:flex; flex-direction:column; gap:2px; }
    .address-info strong { font-size:14px; color:#1a1a2e; }
    .address-info span { font-size:13px; color:#64748b; }
    .addr-phone { font-size:12px; color:#94a3b8; }
    .divider-text { text-align:center; color:#94a3b8; font-size:12px; margin:16px 0; position:relative; }
    .divider-text::before, .divider-text::after { content:''; position:absolute; top:50%; width:calc(50% - 60px); height:1px; background:#e5e7eb; }
    .divider-text::before { left:0; }
    .divider-text::after { right:0; }
    .address-form.collapsed { display:none; }

    /* Payment Methods */
    .payment-methods { display:flex; flex-direction:column; gap:10px; }
    .payment-option { display:flex; align-items:center; gap:12px; padding:14px 16px; border:2px solid #e5e7eb; border-radius:10px; cursor:pointer; transition:all 0.2s; }
    .payment-option:hover:not(.disabled) { border-color:#fca5a5; }
    .payment-option.selected { border-color:#e31b23; background:#fff5f5; }
    .payment-option.disabled { opacity:0.55; cursor:not-allowed; background:#f9fafb; }
    .pm-icon { width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
    .payzapp-icon { background:#fff1f2; color:#e31b23; }
    .payzapp-icon svg { stroke:#e31b23; }
    .pm-details { display:flex; flex-direction:column; gap:1px; }
    .pm-details strong { font-size:14px; color:#1a1a2e; }
    .pm-details span { font-size:12px; color:#64748b; }

    /* Summary */
    .order-summary { background:#fff; border-radius:14px; border:1px solid #e5e7eb; padding:24px; position:sticky; top:20px; }
    .order-summary h3 { font-size:18px; font-weight:700; color:#1a1a2e; margin:0 0 16px; }
    .summary-items { max-height:240px; overflow-y:auto; margin-bottom:16px; }
    .summary-item { display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid #f8f9fa; }
    .si-name { display:flex; align-items:center; gap:8px; font-size:14px; color:#374151; flex:1; min-width:0; }
    .si-name span:first-child { white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .si-qty { font-size:12px; color:#94a3b8; flex-shrink:0; }
    .si-price { font-size:14px; font-weight:600; color:#1a1a2e; flex-shrink:0; margin-left:12px; }

    /* Coupon */
    .coupon-section { padding:12px 0; border-top:1px solid #f1f5f9; }
    .coupon-input-row { display:flex; gap:8px; }
    .coupon-input-row input { flex:1; padding:8px 12px; border:1px solid #e5e7eb; border-radius:8px; font-size:13px; }
    .coupon-input-row input:focus { outline:none; border-color:#e31b23; }
    .btn-apply { padding:8px 16px; background:#1a1a2e; color:#fff; border:none; border-radius:8px; font-size:13px; font-weight:600; cursor:pointer; white-space:nowrap; }
    .btn-apply:disabled { opacity:0.5; cursor:not-allowed; }
    .btn-remove-coupon { padding:8px 12px; background:none; border:1px solid #ef4444; color:#ef4444; border-radius:8px; font-size:13px; font-weight:600; cursor:pointer; white-space:nowrap; }
    .coupon-msg { font-size:12px; margin:6px 0 0; }
    .coupon-msg.success { color:#059669; }
    .coupon-msg.error { color:#ef4444; }

    /* Totals */
    .summary-totals { border-top:1px solid #f1f5f9; padding-top:12px; }
    .summary-line { display:flex; justify-content:space-between; align-items:center; padding:6px 0; font-size:14px; color:#64748b; }
    .summary-line .discount { color:#059669; }
    .summary-line.total { padding-top:12px; margin-top:4px; border-top:2px solid #e5e7eb; }
    .summary-line.total span { font-size:16px; color:#1a1a2e; font-weight:600; }
    .summary-line.total strong { font-size:22px; color:#e31b23; }

    .selected-payment-info { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; margin-top:12px; }
    .spi-label { font-size:13px; color:#64748b; }
    .selected-payment-info strong { font-size:14px; color:#059669; }

    .btn-place-order { display:flex; align-items:center; justify-content:center; gap:10px; width:100%; padding:16px 24px; background:#e31b23; color:#fff; border:none; border-radius:10px; font-weight:700; font-size:16px; cursor:pointer; margin-top:20px; transition:all 0.2s; }
    .btn-place-order:hover:not(:disabled) { background:#b11218; }
    .btn-place-order:disabled { opacity:0.6; cursor:not-allowed; }
    .secure-note { display:flex; align-items:center; justify-content:center; gap:6px; color:#94a3b8; font-size:12px; margin:12px 0 0; }
  `]
})
export class CheckoutComponent implements OnInit {
  cart = signal<Cart>({ items: [], sub_total: 0, item_count: 0 });
  addresses = signal<any[]>([]);
  loading = signal(true);
  placingOrder = signal(false);
  applyingCoupon = signal(false);
  couponApplied = signal(false);
  couponDiscount = signal(0);
  couponError = signal('');
  finalTotal = signal(0);
  selectedAddressId: number | null = null;
  selectedPayment = 'payzapp';
  couponCode = '';
  scheduleDate = '';
  scheduleTime = '';
  orderNote = '';
  todayDate = '';

  addressForm = {
    name: '', phone: '', email: '', address: '', city: '', state: '', zip_code: ''
  };

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private toast: ToastService,
    private http: HttpClient,
    private router: Router
  ) {
    const d = new Date();
    this.todayDate = d.toISOString().split('T')[0];
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading.set(true);

    // Load cart
    this.cartService.loadCart().subscribe({
      next: (res) => {
        const cartData = res.data || { items: [], sub_total: 0, item_count: 0 };
        this.cart.set(cartData);
        this.finalTotal.set(cartData.sub_total || 0);
      }
    });

    // Load user profile to auto-fill info
    this.http.get<any>(`${environment.apiUrl}/user/profile`).subscribe({
      next: (res) => {
        const user = res.data || res.user || res;
        // Auto-fill address form with user's info
        if (user) {
          const fullName = [user.first_name, user.last_name].filter(Boolean).join(' ');
          this.addressForm.name = fullName || this.addressForm.name;
          this.addressForm.phone = user.phone || this.addressForm.phone;
          this.addressForm.email = user.email || this.addressForm.email;
        }
      }
    });

    // Load saved addresses
    this.http.get<any>(`${environment.apiUrl}/user/addresses`).subscribe({
      next: (res) => {
        this.addresses.set(res.data || []);
        // Auto-select default address
        const defaultAddr = (res.data || []).find((a: any) => a.is_default);
        if (defaultAddr) {
          this.selectAddress(defaultAddr);
        }
      },
      complete: () => this.loading.set(false),
      error: () => this.loading.set(false)
    });
  }

  selectAddress(addr: any) {
    this.selectedAddressId = addr.id;
    this.addressForm = {
      name: addr.name || '',
      phone: addr.phone || '',
      email: addr.email || '',
      address: addr.address || addr.address_line1 || '',
      city: addr.city || '',
      state: addr.state || '',
      zip_code: addr.zip_code || addr.pincode || ''
    };
  }

  selectPayment(method: string) {
    this.selectedPayment = method;
  }

  getPaymentLabel(method: string): string {
    const labels: Record<string, string> = {
      payzapp: 'PayZapp'
    };
    return labels[method] || method;
  }

  applyCoupon() {
    if (!this.couponCode.trim()) return;
    this.applyingCoupon.set(true);
    this.couponError.set('');
    this.orderService.validateCoupon(this.couponCode, this.cart().sub_total).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.couponApplied.set(true);
          this.couponDiscount.set(res.data.discount || 0);
          this.finalTotal.set(this.cart().sub_total - (res.data.discount || 0));
        } else {
          this.couponError.set(res.error || 'Invalid coupon');
        }
      },
      error: (err) => this.couponError.set(err.error?.error || 'Invalid coupon code'),
      complete: () => this.applyingCoupon.set(false)
    });
  }

  removeCoupon() {
    this.couponApplied.set(false);
    this.couponDiscount.set(0);
    this.couponCode = '';
    this.couponError.set('');
    this.finalTotal.set(this.cart().sub_total);
  }

  isFormValid(): boolean {
    const f = this.addressForm;
    return !!(f.name?.trim() && f.phone?.trim() && f.address?.trim() && f.city?.trim() && f.state?.trim() && f.zip_code?.trim() && this.selectedPayment);
  }

  placeOrder() {
    if (!this.isFormValid()) {
      this.toast.error('Please fill in all required fields and select a payment method');
      return;
    }

    this.placingOrder.set(true);

    const orderData: any = {
      items: this.cart().items.map(item => ({
        service_id: item.item_id || item.service?.id,
        car_id: item.car_id || undefined,
        variant_id: item.variant_id || undefined,
        quantity: item.quantity,
        addons: item.addons || []
      })),
      address: {
        name: this.addressForm.name,
        phone: this.addressForm.phone,
        email: this.addressForm.email,
        address: this.addressForm.address,
        city: this.addressForm.city,
        state: this.addressForm.state,
        zip_code: this.addressForm.zip_code,
        country: 'India'
      },
      delivery_mode: 'home'
    };

    if (this.couponApplied() && this.couponCode) {
      orderData.coupon_code = this.couponCode;
    }
    if (this.scheduleDate) orderData.date = this.scheduleDate;
    if (this.scheduleTime) orderData.schedule = this.scheduleTime;
    if (this.orderNote.trim()) orderData.order_note = this.orderNote.trim();

    this.orderService.createOrder(orderData).subscribe({
      next: (res) => {
        const orderId = res.data?.id;
        // Initiate payment after order creation
        this.http.post<any>(`${environment.apiUrl}/payments/initiate`, {
          order_id: orderId,
          payment_method: this.selectedPayment
        }).subscribe({
          next: (payRes) => {
            this.cartService.loadCart().subscribe();
            this.toast.success('Order placed successfully via PayZapp!');
            this.router.navigate(['/client/orders', orderId]);
          },
          error: (payErr) => {
            // Order was created but payment failed
            this.toast.error(payErr.error?.error || 'Payment failed. Your order has been saved.');
            this.cartService.loadCart().subscribe();
            this.router.navigate(['/client/orders', orderId]);
          }
        });
      },
      error: (err) => {
        this.toast.error(err.error?.error || 'Failed to place order');
        this.placingOrder.set(false);
      }
    });
  }
}
