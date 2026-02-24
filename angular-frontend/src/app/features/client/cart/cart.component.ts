import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService, Cart, CartItem } from '../../../core/services/cart.service';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, ConfirmModalComponent],
  template: `
    <div class="cart-page">
      <div class="page-header">
        <div>
          <h1>Shopping Cart</h1>
          <p>{{ cart().items.length }} item{{ cart().items.length !== 1 ? 's' : '' }} in your cart</p>
        </div>
        <a routerLink="/client/orders" class="btn-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Orders
        </a>
      </div>

      <div *ngIf="loading()" class="loading">
        <div class="spinner"></div>
        <p>Loading cart...</p>
      </div>

      <div *ngIf="!loading() && cart().items.length === 0" class="empty-state">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
        <h3>Your cart is empty</h3>
        <p>Browse services and products to add items</p>
        <a routerLink="/client/orders" class="btn-primary" (click)="$event.preventDefault(); goToServices()">Browse Services</a>
      </div>

      <div class="cart-layout" *ngIf="!loading() && cart().items.length > 0">
        <!-- Cart Items -->
        <div class="cart-items">
          <div class="cart-item" *ngFor="let item of cart().items">
            <div class="item-img-wrap">
              <img *ngIf="item.service?.image" [src]="getImageUrl(item.service.image)" [alt]="item.service?.title" (error)="onImgError($event)">
              <svg *ngIf="!item.service?.image" class="img-fallback" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <div class="item-details">
              <h3>{{ item.service?.title || 'Service' }}</h3>
              <p class="item-price">{{ item.price | currency:'INR':'symbol':'1.0-0' }}</p>
              <p class="item-addon-total" *ngIf="item.addon_total > 0">+ Add-ons: {{ item.addon_total | currency:'INR':'symbol':'1.0-0' }}</p>
            </div>
            <div class="item-qty">
              <button class="qty-btn" (click)="updateQty(item, -1)" [disabled]="item.quantity <= 1">-</button>
              <span class="qty-value">{{ item.quantity }}</span>
              <button class="qty-btn" (click)="updateQty(item, 1)">+</button>
            </div>
            <div class="item-total">
              {{ (item.item_total || (item.price + item.addon_total) * item.quantity) | currency:'INR':'symbol':'1.0-0' }}
            </div>
            <button class="btn-remove" (click)="removeItem(item)" title="Remove">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
            </button>
          </div>
        </div>

        <!-- Cart Summary -->
        <div class="cart-summary">
          <h3>Order Summary</h3>
          <div class="summary-line">
            <span>Subtotal</span>
            <span>{{ cart().sub_total | currency:'INR':'symbol':'1.0-0' }}</span>
          </div>
          <div class="summary-line total">
            <span>Total</span>
            <strong>{{ cart().sub_total | currency:'INR':'symbol':'1.0-0' }}</strong>
          </div>
          <a routerLink="/client/checkout" class="btn-checkout">
            Proceed to Checkout
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <button class="btn-clear" (click)="confirmClear()">Clear Cart</button>
        </div>
      </div>

      <app-confirm-modal
        [open]="showClearConfirm()"
        title="Clear Cart"
        message="Remove all items from your cart?"
        confirmText="Clear All"
        type="danger"
        (confirmed)="doClear()"
        (cancelled)="showClearConfirm.set(false)">
      </app-confirm-modal>
    </div>
  `,
  styles: [`
    .cart-page { max-width:1100px; margin:0 auto; }
    .page-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:28px; flex-wrap:wrap; gap:16px; }
    .page-header h1 { font-size:24px; font-weight:700; color:#1a1a2e; margin:0 0 4px; }
    .page-header p { color:#64748b; margin:0; font-size:14px; }
    .btn-back { display:inline-flex; align-items:center; gap:6px; padding:10px 18px; border:1px solid #e5e7eb; border-radius:8px; color:#475569; font-size:14px; font-weight:600; text-decoration:none; transition:all 0.2s; background:#fff; }
    .btn-back:hover { border-color:#e31b23; color:#e31b23; }

    .loading { text-align:center; padding:60px 20px; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; margin:0 auto 16px; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }

    .empty-state { text-align:center; padding:60px 24px; background:#fff; border-radius:16px; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .empty-state svg { margin-bottom:16px; }
    .empty-state h3 { font-size:20px; color:#1a1a2e; margin:0 0 8px; }
    .empty-state p { color:#64748b; margin:0 0 24px; }
    .btn-primary { display:inline-flex; padding:12px 24px; background:#e31b23; color:#fff; border:none; border-radius:10px; font-weight:600; font-size:14px; cursor:pointer; text-decoration:none; }

    /* Cart layout */
    .cart-layout { display:grid; grid-template-columns:1fr 340px; gap:24px; align-items:flex-start; }
    @media (max-width:768px) { .cart-layout { grid-template-columns:1fr; } }

    /* Cart items */
    .cart-items { display:flex; flex-direction:column; gap:12px; }
    .cart-item { display:flex; align-items:center; gap:16px; background:#fff; border-radius:12px; padding:16px 20px; border:1px solid #e5e7eb; transition:all 0.2s; }
    .cart-item:hover { border-color:#fca5a5; }
    .item-img-wrap { width:72px; height:72px; background:#f8f9fa; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; overflow:hidden; }
    .item-img-wrap img { width:100%; height:100%; object-fit:contain; padding:4px; }
    .img-fallback { color:#cbd5e1; }
    .item-details { flex:1; min-width:0; }
    .item-details h3 { font-size:15px; font-weight:600; color:#1a1a2e; margin:0 0 4px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .item-price { font-size:14px; color:#e31b23; font-weight:600; margin:0; }
    .item-addon-total { font-size:12px; color:#64748b; margin:2px 0 0; }
    .item-qty { display:flex; align-items:center; gap:0; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden; }
    .qty-btn { width:32px; height:32px; border:none; background:#f8f9fa; color:#1a1a2e; font-size:16px; font-weight:700; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.15s; }
    .qty-btn:hover:not(:disabled) { background:#fee2e2; color:#e31b23; }
    .qty-btn:disabled { opacity:0.4; cursor:not-allowed; }
    .qty-value { width:36px; text-align:center; font-weight:600; font-size:14px; background:#fff; }
    .item-total { font-size:16px; font-weight:700; color:#1a1a2e; min-width:80px; text-align:right; }
    .btn-remove { padding:8px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; color:#94a3b8; cursor:pointer; transition:all 0.15s; display:flex; }
    .btn-remove:hover { border-color:#ef4444; color:#ef4444; background:#fef2f2; }

    /* Summary */
    .cart-summary { background:#fff; border-radius:14px; border:1px solid #e5e7eb; padding:24px; position:sticky; top:20px; }
    .cart-summary h3 { font-size:18px; font-weight:700; color:#1a1a2e; margin:0 0 20px; }
    .summary-line { display:flex; justify-content:space-between; align-items:center; padding:10px 0; font-size:14px; color:#64748b; border-bottom:1px solid #f1f5f9; }
    .summary-line.total { border-bottom:none; padding-top:16px; margin-top:4px; border-top:2px solid #e5e7eb; }
    .summary-line.total span { font-size:16px; color:#1a1a2e; font-weight:600; }
    .summary-line.total strong { font-size:20px; color:#e31b23; }
    .btn-checkout { display:flex; align-items:center; justify-content:center; gap:8px; width:100%; padding:14px 24px; background:#e31b23; color:#fff; border:none; border-radius:10px; font-weight:700; font-size:15px; cursor:pointer; text-decoration:none; margin-top:20px; transition:all 0.2s; }
    .btn-checkout:hover { background:#b11218; }
    .btn-clear { display:block; width:100%; padding:10px; background:none; border:1px solid #e5e7eb; border-radius:8px; color:#64748b; font-size:13px; font-weight:600; cursor:pointer; margin-top:10px; transition:all 0.2s; }
    .btn-clear:hover { border-color:#ef4444; color:#ef4444; }
  `]
})
export class CartComponent implements OnInit {
  cart = signal<Cart>({ items: [], sub_total: 0, item_count: 0 });
  loading = signal(true);
  showClearConfirm = signal(false);

  private baseUrl = environment.apiUrl.replace('/api/v1', '');

  constructor(private cartService: CartService, private toast: ToastService) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.loading.set(true);
    this.cartService.loadCart().subscribe({
      next: (res) => {
        this.cart.set(res.data || { items: [], sub_total: 0, item_count: 0 });
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  getImageUrl(image: string): string {
    if (!image) return '';
    if (image.startsWith('http')) return image;
    const filename = image.replace('uploads/media/', '').replace('media/', '');
    return `${this.baseUrl}/uploads/media/${filename}`;
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  updateQty(item: CartItem, delta: number) {
    const newQty = item.quantity + delta;
    if (newQty < 1) return;
    this.cartService.updateItem(item.id, { quantity: newQty }).subscribe({
      next: () => this.loadCart(),
      error: () => this.toast.error('Failed to update quantity')
    });
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item.id).subscribe({
      next: () => {
        this.toast.success('Item removed');
        this.loadCart();
      },
      error: () => this.toast.error('Failed to remove item')
    });
  }

  confirmClear() {
    this.showClearConfirm.set(true);
  }

  doClear() {
    this.cartService.clearCart().subscribe({
      next: () => {
        this.toast.success('Cart cleared');
        this.cart.set({ items: [], sub_total: 0, item_count: 0 });
        this.showClearConfirm.set(false);
      },
      error: () => this.toast.error('Failed to clear cart')
    });
  }

  goToServices() {
    // Navigate to orders page with services tab
    window.location.href = '/client/orders';
  }
}
