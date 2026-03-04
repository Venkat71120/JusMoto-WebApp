import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../../core/services/order.service';
import { ToastService } from '../../../core/services/toast.service';
import { ServiceService } from '../../../core/services/service.service';
import { CartService, CartItem } from '../../../core/services/cart.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-client-order-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="orders-container">
      <div class="page-header">
        <div>
          <h1>My Orders</h1>
          <p>View orders, browse services & products</p>
        </div>
        <a routerLink="/client/cart" class="cart-badge" *ngIf="cartCount() > 0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
          <span class="cart-count">{{ cartCount() }}</span>
        </a>
      </div>

      <!-- Main Tabs -->
      <div class="main-tabs">
        <button class="main-tab" [class.active]="activeTab() === 'orders'" (click)="switchTab('orders')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          My Orders
        </button>
        <button class="main-tab" [class.active]="activeTab() === 'services'" (click)="switchTab('services')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
          Services
        </button>
        <button class="main-tab" [class.active]="activeTab() === 'products'" (click)="switchTab('products')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
          Products
        </button>
      </div>

      <!-- ORDERS TAB -->
      <div *ngIf="activeTab() === 'orders'">
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
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          <h3>No orders found</h3>
          <p>You haven't placed any orders yet.</p>
          <button class="btn-primary" (click)="switchTab('services')">Browse Services</button>
        </div>

        <!-- Orders Table -->
        <div class="orders-table-wrap" *ngIf="!loading() && orders().length > 0">
          <table class="orders-table">
            <thead>
              <tr>
                <th>Order #</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let order of orders()" class="order-row">
                <td class="col-id">
                  <strong>#{{ order.invoice_number || order.id }}</strong>
                </td>
                <td class="col-date">
                  {{ order.created_at | date:'dd MMM yyyy' }}
                </td>
                <td class="col-items">
                  <div class="items-list">
                    <div class="item-row" *ngFor="let item of order.items?.slice(0, 3)">
                      <span class="item-name">{{ item.service?.title || item.title || 'Service' }}</span>
                      <span class="item-qty">x{{ item.quantity }}</span>
                      <span class="item-price">{{ item.total | currency:'INR':'symbol':'1.0-0' }}</span>
                    </div>
                    <span *ngIf="order.items?.length > 3" class="more-items">+{{ order.items.length - 3 }} more</span>
                  </div>
                </td>
                <td class="col-total">
                  <strong>{{ order.total | currency:'INR':'symbol':'1.0-0' }}</strong>
                </td>
                <td class="col-payment">
                  <span class="badge" [class]="'badge-' + getPaymentClass(order.payment_status)">
                    {{ getPaymentLabel(order.payment_status) }}
                  </span>
                  <span class="payment-method" *ngIf="order.payment_gateway">{{ order.payment_gateway | uppercase }}</span>
                </td>
                <td class="col-status">
                  <span class="badge" [class]="'badge-' + getStatusClass(order.status)">
                    {{ getStatusLabel(order.status) }}
                  </span>
                </td>
                <td class="col-actions">
                  <a [routerLink]="['/client/orders', order.id]" class="btn-view" title="View Details">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    View
                  </a>
                  <button *ngIf="order.status < 2" class="btn-cancel-order" (click)="openCancelModal(order.id)" title="Cancel Order">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="pagination" *ngIf="totalPages() > 1">
          <button [disabled]="currentPage() === 1" (click)="goToPage(currentPage() - 1)" class="page-btn">Previous</button>
          <span class="page-info">Page {{ currentPage() }} of {{ totalPages() }}</span>
          <button [disabled]="currentPage() === totalPages()" (click)="goToPage(currentPage() + 1)" class="page-btn">Next</button>
        </div>
      </div>

      <!-- SERVICES TAB -->
      <div *ngIf="activeTab() === 'services'">
        <div class="search-bar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" class="search-input" [(ngModel)]="serviceSearch" (input)="onServiceSearch()" placeholder="Search services...">
        </div>

        <div *ngIf="loadingServices()" class="loading">
          <div class="spinner"></div>
          <p>Loading services...</p>
        </div>

        <div *ngIf="!loadingServices() && services().length === 0" class="empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
          <h3>No services found</h3>
          <p>No services available at the moment.</p>
        </div>

        <div class="service-grid" *ngIf="!loadingServices() && services().length > 0">
          <div class="service-card" *ngFor="let svc of services()">
            <div class="service-img-wrap">
              <img *ngIf="svc.image" [src]="getServiceImageUrl(svc.image)" [alt]="svc.title" (error)="onImgError($event)">
              <svg *ngIf="!svc.image" class="img-fallback" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
              <button class="heart-btn" [class.active]="isFav(svc.id)" (click)="toggleFavourite(svc)" title="Add to favourites">
                <svg width="18" height="18" viewBox="0 0 24 24" [attr.fill]="isFav(svc.id) ? '#e31b23' : 'none'" stroke="#e31b23" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              </button>
            </div>
            <div class="service-card-body">
              <h3 class="service-title">{{ svc.title }}</h3>
              <p class="service-desc" *ngIf="svc.description">{{ svc.description | slice:0:80 }}{{ svc.description?.length > 80 ? '...' : '' }}</p>
              <div class="service-price-row">
                <div class="service-price">
                  <span class="price-current">{{ (svc.discount_price || svc.price) | currency:'INR':'symbol':'1.0-0' }}</span>
                  <span class="price-original" *ngIf="svc.discount_price && svc.discount_price < svc.price">{{ svc.price | currency:'INR':'symbol':'1.0-0' }}</span>
                </div>
                <!-- Qty control if in cart -->
                <div class="cart-qty-control" *ngIf="getCartItem(svc.id) as ci">
                  <button class="qty-btn" (click)="decrementQty(ci)" [disabled]="updatingCartItem() === ci.id">-</button>
                  <span class="qty-val">{{ ci.quantity }}</span>
                  <button class="qty-btn" (click)="incrementQty(ci)" [disabled]="updatingCartItem() === ci.id">+</button>
                </div>
                <!-- Add to cart if not in cart -->
                <button class="btn-add-cart" *ngIf="!getCartItem(svc.id)" (click)="addToCart(svc.id)" [disabled]="addingToCart() === svc.id">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  {{ addingToCart() === svc.id ? 'Adding...' : 'Add to Cart' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PRODUCTS TAB -->
      <div *ngIf="activeTab() === 'products'">
        <div class="search-bar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" class="search-input" [(ngModel)]="productSearch" (input)="onProductSearch()" placeholder="Search products...">
        </div>

        <div *ngIf="loadingProducts()" class="loading">
          <div class="spinner"></div>
          <p>Loading products...</p>
        </div>

        <div *ngIf="!loadingProducts() && products().length === 0" class="empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
          <h3>No products found</h3>
          <p>No products available at the moment.</p>
        </div>

        <div class="service-grid" *ngIf="!loadingProducts() && products().length > 0">
          <div class="service-card" *ngFor="let prod of products()">
            <div class="service-img-wrap">
              <img *ngIf="prod.image" [src]="getServiceImageUrl(prod.image)" [alt]="prod.title" (error)="onImgError($event)">
              <svg *ngIf="!prod.image" class="img-fallback" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
              <button class="heart-btn" [class.active]="isFav(prod.id)" (click)="toggleFavourite(prod)" title="Add to favourites">
                <svg width="18" height="18" viewBox="0 0 24 24" [attr.fill]="isFav(prod.id) ? '#e31b23' : 'none'" stroke="#e31b23" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              </button>
            </div>
            <div class="service-card-body">
              <h3 class="service-title">{{ prod.title }}</h3>
              <p class="service-desc" *ngIf="prod.description">{{ prod.description | slice:0:80 }}{{ prod.description?.length > 80 ? '...' : '' }}</p>
              <div class="service-price-row">
                <div class="service-price">
                  <span class="price-current">{{ (prod.discount_price || prod.price) | currency:'INR':'symbol':'1.0-0' }}</span>
                  <span class="price-original" *ngIf="prod.discount_price && prod.discount_price < prod.price">{{ prod.price | currency:'INR':'symbol':'1.0-0' }}</span>
                </div>
                <!-- Qty control if in cart -->
                <div class="cart-qty-control" *ngIf="getCartItem(prod.id) as ci">
                  <button class="qty-btn" (click)="decrementQty(ci)" [disabled]="updatingCartItem() === ci.id">-</button>
                  <span class="qty-val">{{ ci.quantity }}</span>
                  <button class="qty-btn" (click)="incrementQty(ci)" [disabled]="updatingCartItem() === ci.id">+</button>
                </div>
                <!-- Add to cart if not in cart -->
                <button class="btn-add-cart" *ngIf="!getCartItem(prod.id)" (click)="addToCart(prod.id)" [disabled]="addingToCart() === prod.id">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  {{ addingToCart() === prod.id ? 'Adding...' : 'Add to Cart' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cancel Order Modal -->
      <div class="cancel-overlay" *ngIf="cancelModalOpen()" (click)="closeCancelModal()">
        <div class="cancel-modal" (click)="$event.stopPropagation()">
          <div class="cancel-modal-header">
            <h3>Cancel Order</h3>
            <button class="cancel-close-btn" (click)="closeCancelModal()">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div class="cancel-modal-body">
            <p class="cancel-note">Please provide a reason for cancelling this order. If payment was already made, a refund will be initiated automatically.</p>
            <textarea class="cancel-textarea" [(ngModel)]="cancelReason" placeholder="Enter reason for cancellation..." rows="4"></textarea>
          </div>
          <div class="cancel-modal-footer">
            <button class="btn-cancel-dismiss" (click)="closeCancelModal()">Go Back</button>
            <button class="btn-cancel-submit" (click)="doCancelOrder()" [disabled]="cancellingOrder() || !cancelReason.trim()">
              {{ cancellingOrder() ? 'Cancelling...' : 'Cancel Order' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .orders-container { max-width:1100px; margin:0 auto; }
    .page-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:24px; }
    .page-header h1 { font-size:28px; font-weight:700; color:#1a1a1a; margin:0 0 8px; }
    .page-header p { color:#666; margin:0; }

    /* Cart badge */
    .cart-badge { position:relative; display:flex; align-items:center; justify-content:center; width:44px; height:44px; background:#fff; border:1px solid #e5e7eb; border-radius:10px; color:#1a1a1a; text-decoration:none; transition:all 0.2s; }
    .cart-badge:hover { border-color:#e31b23; color:#e31b23; }
    .cart-count { position:absolute; top:-6px; right:-6px; background:#e31b23; color:#fff; font-size:11px; font-weight:700; width:20px; height:20px; border-radius:50%; display:flex; align-items:center; justify-content:center; }

    /* Main tabs */
    .main-tabs { display:flex; gap:0; margin-bottom:24px; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden; background:#fff; }
    .main-tab { flex:1; display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:14px 20px; border:none; background:#fff; color:#64748b; font-size:14px; font-weight:600; cursor:pointer; transition:all 0.2s; border-right:1px solid #e5e7eb; }
    .main-tab:last-child { border-right:none; }
    .main-tab.active { background:#e31b23; color:#fff; }
    .main-tab:hover:not(.active) { background:#fff5f5; color:#e31b23; }

    /* Filters */
    .filters-bar { margin-bottom:24px; }
    .filter-tabs { display:flex; gap:8px; flex-wrap:wrap; }
    .filter-tab { padding:8px 16px; border:1px solid #e5e7eb; background:#fff; border-radius:20px; cursor:pointer; font-size:14px; transition:all 0.2s; }
    .filter-tab:hover { border-color:#e31b23; color:#e31b23; }
    .filter-tab.active { background:#e31b23; border-color:#e31b23; color:#fff; }

    .loading { text-align:center; padding:60px 20px; }
    .spinner { width:40px; height:40px; border:3px solid #e5e7eb; border-top-color:#e31b23; border-radius:50%; margin:0 auto 16px; animation:spin 1s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }

    .empty-state { text-align:center; padding:60px 20px; background:#fff; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.08); }
    .empty-state svg { margin-bottom:16px; }
    .empty-state h3 { font-size:20px; color:#1a1a1a; margin:0 0 8px; }
    .empty-state p { color:#666; margin:0 0 24px; }
    .btn-primary { padding:12px 24px; background:#e31b23; color:#fff; border:none; border-radius:6px; text-decoration:none; font-weight:500; cursor:pointer; }

    /* Orders Table */
    .orders-table-wrap { background:#fff; border-radius:12px; border:1px solid #e5e7eb; overflow:hidden; }
    .orders-table { width:100%; border-collapse:collapse; font-size:14px; }
    .orders-table thead { background:#f8f9fb; }
    .orders-table th { padding:14px 16px; text-align:left; font-size:12px; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:0.5px; border-bottom:1px solid #e5e7eb; white-space:nowrap; }
    .orders-table td { padding:14px 16px; border-bottom:1px solid #f1f5f9; vertical-align:top; }
    .orders-table tbody tr:last-child td { border-bottom:none; }
    .orders-table tbody tr:hover { background:#fafbfc; }

    .col-id strong { color:#1a1a2e; font-size:14px; }
    .col-date { color:#64748b; font-size:13px; white-space:nowrap; }
    .col-items { min-width:200px; }
    .items-list { display:flex; flex-direction:column; gap:4px; }
    .item-row { display:flex; align-items:center; gap:8px; font-size:13px; }
    .item-name { color:#374151; flex:1; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:180px; }
    .item-qty { color:#94a3b8; font-size:12px; flex-shrink:0; }
    .item-price { color:#1a1a2e; font-weight:600; font-size:12px; flex-shrink:0; }
    .more-items { font-size:12px; color:#e31b23; font-weight:500; }
    .col-total strong { color:#1a1a2e; font-size:15px; white-space:nowrap; }
    .col-payment { display:flex; flex-direction:column; gap:4px; }
    .payment-method { font-size:11px; color:#94a3b8; text-transform:uppercase; }
    .col-actions { display:flex; gap:8px; align-items:center; }

    /* Badges */
    .badge { display:inline-block; padding:4px 10px; border-radius:20px; font-size:11px; font-weight:600; white-space:nowrap; }
    .badge-pending { background:#fef3c7; color:#92400e; }
    .badge-accepted { background:#dbeafe; color:#1e40af; }
    .badge-processing { background:#e0e7ff; color:#3730a3; }
    .badge-completed { background:#d1fae5; color:#065f46; }
    .badge-cancelled { background:#fee2e2; color:#991b1b; }
    .badge-refunded { background:#fae8ff; color:#86198f; }
    .badge-paid { background:#d1fae5; color:#065f46; }
    .badge-unpaid { background:#fef3c7; color:#92400e; }

    .btn-view { display:inline-flex; align-items:center; gap:4px; padding:6px 12px; border:1px solid #e31b23; color:#e31b23; background:#fff; border-radius:6px; text-decoration:none; font-size:12px; font-weight:600; transition:all 0.2s; white-space:nowrap; }
    .btn-view:hover { background:#e31b23; color:#fff; }
    .btn-cancel-order { display:inline-flex; align-items:center; justify-content:center; width:32px; height:32px; border:1px solid #fee2e2; border-radius:6px; background:#fff; color:#dc2626; cursor:pointer; transition:all 0.2s; }
    .btn-cancel-order:hover { background:#fee2e2; border-color:#dc2626; }

    .pagination { display:flex; justify-content:center; align-items:center; gap:16px; margin-top:24px; }
    .page-btn { padding:8px 16px; border:1px solid #e5e7eb; background:#fff; border-radius:6px; cursor:pointer; }
    .page-btn:disabled { opacity:0.5; cursor:not-allowed; }
    .page-info { color:#666; font-size:14px; }

    /* Search bar */
    .search-bar { display:flex; align-items:center; gap:10px; background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:10px 16px; margin-bottom:24px; }
    .search-input { flex:1; border:none; outline:none; font-size:14px; color:#1a1a1a; background:transparent; }
    .search-input::placeholder { color:#94a3b8; }

    /* Service/Product grid */
    .service-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:20px; }
    .service-card { background:#fff; border-radius:14px; border:1px solid #e5e7eb; overflow:hidden; transition:all 0.2s; }
    .service-card:hover { border-color:#e31b23; box-shadow:0 4px 16px rgba(227,27,35,0.1); }
    .service-img-wrap { background:#f8f9fa; padding:16px; display:flex; align-items:center; justify-content:center; min-height:160px; position:relative; }
    .service-img-wrap img { max-width:100%; max-height:140px; object-fit:contain; border-radius:8px; }
    .service-img-wrap .img-fallback { color:#cbd5e1; }
    .heart-btn { position:absolute; top:10px; right:10px; width:34px; height:34px; background:#fff; border:none; border-radius:50%; cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.15); display:flex; align-items:center; justify-content:center; transition:all 0.2s; z-index:10; }
    .heart-btn:hover { transform:scale(1.15); }
    .heart-btn.active { background:#fff5f5; }
    .service-card-body { padding:16px 20px; }
    .service-title { font-size:16px; font-weight:700; color:#1a1a2e; margin:0 0 6px; }
    .service-desc { font-size:13px; color:#64748b; margin:0 0 12px; line-height:1.4; }
    .service-price-row { display:flex; justify-content:space-between; align-items:center; gap:12px; }
    .service-price { display:flex; align-items:baseline; gap:8px; }
    .price-current { font-size:18px; font-weight:700; color:#e31b23; }
    .price-original { font-size:14px; color:#94a3b8; text-decoration:line-through; }
    .btn-add-cart { display:inline-flex; align-items:center; gap:6px; padding:8px 14px; background:#e31b23; color:#fff; border:none; border-radius:8px; font-size:13px; font-weight:600; cursor:pointer; transition:all 0.2s; white-space:nowrap; }
    .btn-add-cart:hover { background:#b11218; }
    .btn-add-cart:disabled { opacity:0.6; cursor:not-allowed; }

    /* Cart quantity control */
    .cart-qty-control { display:flex; align-items:center; gap:0; border:2px solid #e31b23; border-radius:8px; overflow:hidden; }
    .cart-qty-control .qty-btn { width:32px; height:32px; border:none; background:#fff; color:#e31b23; font-size:18px; font-weight:700; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.15s; }
    .cart-qty-control .qty-btn:hover:not(:disabled) { background:#fee2e2; }
    .cart-qty-control .qty-btn:disabled { opacity:0.4; cursor:not-allowed; }
    .cart-qty-control .qty-val { width:36px; text-align:center; font-weight:700; font-size:14px; color:#e31b23; background:#fff5f5; line-height:32px; }

    /* Cancel Modal */
    .cancel-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:1000; display:flex; align-items:center; justify-content:center; padding:16px; }
    .cancel-modal { background:#fff; border-radius:16px; width:100%; max-width:480px; box-shadow:0 20px 60px rgba(0,0,0,0.2); animation:slideUp 0.25s ease-out; }
    @keyframes slideUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
    .cancel-modal-header { display:flex; justify-content:space-between; align-items:center; padding:20px 24px 0; }
    .cancel-modal-header h3 { margin:0; font-size:20px; font-weight:700; color:#1a1a1a; }
    .cancel-close-btn { background:none; border:none; cursor:pointer; color:#94a3b8; padding:4px; border-radius:6px; transition:all 0.2s; }
    .cancel-close-btn:hover { color:#1a1a1a; background:#f1f5f9; }
    .cancel-modal-body { padding:16px 24px; }
    .cancel-note { font-size:14px; color:#64748b; line-height:1.5; margin:0 0 16px; }
    .cancel-textarea { width:100%; padding:12px 14px; border:1px solid #e5e7eb; border-radius:10px; font-size:14px; font-family:inherit; resize:vertical; min-height:100px; transition:border-color 0.2s; box-sizing:border-box; }
    .cancel-textarea:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.1); }
    .cancel-modal-footer { display:flex; justify-content:flex-end; gap:12px; padding:0 24px 20px; }
    .btn-cancel-dismiss { padding:10px 20px; background:#f1f5f9; color:#475569; border:none; border-radius:8px; font-size:14px; font-weight:600; cursor:pointer; transition:all 0.2s; }
    .btn-cancel-dismiss:hover { background:#e2e8f0; }
    .btn-cancel-submit { padding:10px 24px; background:#dc2626; color:#fff; border:none; border-radius:8px; font-size:14px; font-weight:600; cursor:pointer; transition:all 0.2s; }
    .btn-cancel-submit:hover:not(:disabled) { background:#b91c1c; }
    .btn-cancel-submit:disabled { opacity:0.5; cursor:not-allowed; }

    @media (max-width:768px) {
      .main-tabs { flex-direction:column; }
      .main-tab { border-right:none; border-bottom:1px solid #e5e7eb; }
      .main-tab:last-child { border-bottom:none; }
      .service-grid { grid-template-columns:1fr; }
      .orders-table-wrap { overflow-x:auto; }
      .orders-table { min-width:700px; }
    }
  `]
})
export class ClientOrderListComponent implements OnInit {
  orders = signal<any[]>([]);
  loading = signal(true);
  activeStatus = signal('all');
  currentPage = signal(1);
  totalPages = signal(1);

  activeTab = signal('orders');
  services = signal<any[]>([]);
  products = signal<any[]>([]);
  loadingServices = signal(false);
  loadingProducts = signal(false);
  addingToCart = signal<number | null>(null);
  updatingCartItem = signal<number | null>(null);
  cartCount = signal(0);
  cartItems = signal<CartItem[]>([]);
  favouriteMap = signal<Map<number, number>>(new Map());
  cancelModalOpen = signal(false);
  cancellingOrder = signal(false);
  cancelOrderId = signal<number | null>(null);
  cancelReason = '';
  serviceSearch = '';
  productSearch = '';

  private servicesLoaded = false;
  private productsLoaded = false;
  private baseUrl = environment.apiUrl.replace('/api/v1', '');
  private searchTimeout: any;

  statuses = [
    { label: 'All Orders', value: 'all' },
    { label: 'Pending', value: '0' },
    { label: 'Processing', value: '2' },
    { label: 'Completed', value: '3' },
    { label: 'Cancelled', value: '4' }
  ];

  constructor(
    private orderService: OrderService,
    private toast: ToastService,
    private serviceService: ServiceService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadOrders();
    this.loadFavourites();
    this.cartService.cart$.subscribe(cart => {
      this.cartCount.set(cart.item_count || 0);
      this.cartItems.set(cart.items || []);
    });
    this.cartService.loadCart().subscribe();
  }

  // --- Status helpers ---
  getStatusLabel(status: number | string): string {
    const map: Record<string, string> = { '0': 'Pending', '1': 'Accepted', '2': 'In Progress', '3': 'Completed', '4': 'Cancelled', '5': 'Refunded' };
    return map[String(status)] || 'Unknown';
  }

  getStatusClass(status: number | string): string {
    const map: Record<string, string> = { '0': 'pending', '1': 'accepted', '2': 'processing', '3': 'completed', '4': 'cancelled', '5': 'refunded' };
    return map[String(status)] || 'pending';
  }

  getPaymentLabel(status: number | string): string {
    return String(status) === '1' ? 'Paid' : 'Unpaid';
  }

  getPaymentClass(status: number | string): string {
    return String(status) === '1' ? 'paid' : 'unpaid';
  }

  // --- Cart helpers ---
  getCartItem(serviceId: number): CartItem | null {
    return this.cartItems().find(ci => ci.item_id === serviceId) || null;
  }

  incrementQty(cartItem: CartItem) {
    this.updatingCartItem.set(cartItem.id);
    this.cartService.updateItem(cartItem.id, { quantity: cartItem.quantity + 1 }).subscribe({
      next: () => this.updatingCartItem.set(null),
      error: () => { this.toast.error('Failed to update quantity'); this.updatingCartItem.set(null); }
    });
  }

  decrementQty(cartItem: CartItem) {
    if (cartItem.quantity <= 1) {
      this.updatingCartItem.set(cartItem.id);
      this.cartService.removeItem(cartItem.id).subscribe({
        next: () => { this.toast.success('Removed from cart'); this.updatingCartItem.set(null); },
        error: () => { this.toast.error('Failed to remove item'); this.updatingCartItem.set(null); }
      });
    } else {
      this.updatingCartItem.set(cartItem.id);
      this.cartService.updateItem(cartItem.id, { quantity: cartItem.quantity - 1 }).subscribe({
        next: () => this.updatingCartItem.set(null),
        error: () => { this.toast.error('Failed to update quantity'); this.updatingCartItem.set(null); }
      });
    }
  }

  // --- Tab switching ---
  switchTab(tab: string) {
    this.activeTab.set(tab);
    if (tab === 'services' && !this.servicesLoaded) {
      this.loadServices();
    } else if (tab === 'products' && !this.productsLoaded) {
      this.loadProducts();
    }
  }

  getServiceImageUrl(image: string): string {
    if (!image) return '';
    if (image.startsWith('http')) return image;
    const filename = image.replace('uploads/media/', '').replace('media/', '');
    return `${this.baseUrl}/uploads/media/${filename}`;
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.removeAttribute('onerror');
    img.style.display = 'none';
  }

  loadServices(search?: string) {
    this.loadingServices.set(true);
    this.serviceService.getServices({ type: 0, search, limit: 50 }).subscribe({
      next: (res) => {
        this.services.set(res.data || []);
        this.servicesLoaded = true;
      },
      error: () => this.toast.error('Failed to load services'),
      complete: () => this.loadingServices.set(false)
    });
  }

  loadProducts(search?: string) {
    this.loadingProducts.set(true);
    this.serviceService.getServices({ type: 1, search, limit: 50 }).subscribe({
      next: (res) => {
        this.products.set(res.data || []);
        this.productsLoaded = true;
      },
      error: () => this.toast.error('Failed to load products'),
      complete: () => this.loadingProducts.set(false)
    });
  }

  onServiceSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadServices(this.serviceSearch), 400);
  }

  onProductSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadProducts(this.productSearch), 400);
  }

  addToCart(serviceId: number) {
    this.addingToCart.set(serviceId);
    this.cartService.addItem({ service_id: serviceId }).subscribe({
      next: () => this.toast.success('Added to cart!'),
      error: (err) => this.toast.error(err.error?.error || 'Failed to add to cart'),
      complete: () => this.addingToCart.set(null)
    });
  }

  // --- Orders ---
  loadOrders(): void {
    this.loading.set(true);
    const status = this.activeStatus();
    this.orderService.getOrders({
      status: status === 'all' ? undefined : Number(status),
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

  // --- Favourites ---
  loadFavourites(): void {
    this.serviceService.getFavourites().subscribe({
      next: (response) => {
        const map = new Map<number, number>();
        const items = response.data || response.favourites || [];
        items.forEach((item: any) => {
          map.set(item.service_id || item.service?.id, item.id);
        });
        this.favouriteMap.set(map);
      },
      error: () => {}
    });
  }

  isFav(serviceId: number): boolean {
    return this.favouriteMap().has(serviceId);
  }

  toggleFavourite(item: any): void {
    const favId = this.favouriteMap().get(item.id);
    if (favId) {
      this.serviceService.removeFromFavourites(favId).subscribe({
        next: () => {
          this.favouriteMap.update(map => { const m = new Map(map); m.delete(item.id); return m; });
          this.toast.success('Removed from favourites');
        },
        error: () => this.toast.error('Failed to remove from favourites')
      });
    } else {
      this.serviceService.addToFavourites(item.id).subscribe({
        next: (res) => {
          this.favouriteMap.update(map => { const m = new Map(map); m.set(item.id, res.data?.id || 0); return m; });
          this.toast.success('Added to favourites');
        },
        error: (err) => this.toast.error(err.error?.error || 'Failed to add to favourites')
      });
    }
  }

  openCancelModal(orderId: number): void {
    this.cancelOrderId.set(orderId);
    this.cancelReason = '';
    this.cancelModalOpen.set(true);
  }

  closeCancelModal(): void {
    this.cancelModalOpen.set(false);
    this.cancelOrderId.set(null);
    this.cancelReason = '';
  }

  doCancelOrder(): void {
    const orderId = this.cancelOrderId();
    if (!orderId || !this.cancelReason.trim()) return;
    this.cancellingOrder.set(true);
    this.orderService.cancelOrder(orderId, this.cancelReason.trim()).subscribe({
      next: (res: any) => {
        const msg = res?.refund ? 'Order cancelled. Refund has been initiated.' : 'Order cancelled successfully.';
        this.toast.success(msg);
        this.closeCancelModal();
        this.cancellingOrder.set(false);
        this.loadOrders();
      },
      error: () => {
        this.toast.error('Failed to cancel order. Please try again.');
        this.cancellingOrder.set(false);
      }
    });
  }
}
