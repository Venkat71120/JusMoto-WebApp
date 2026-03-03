import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { AuthService } from '../../../core/services/auth.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ConfirmModalComponent],
  template: `
    <div class="page-header">
      <a routerLink="/admin/orders/all-orders" class="back-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to Orders
      </a>
    </div>

    <div class="loading-center" *ngIf="loading()"><div class="spinner"></div></div>

    <div *ngIf="order() && !loading()">
      <div class="order-header">
        <div>
          <h1 class="order-title">Order {{ order().invoice_number || '#' + order().id }}</h1>
          <div class="order-meta-row">
            <span class="type-badge" [class.type-service]="getOrderType() === 'service'" [class.type-product]="getOrderType() === 'product'">
              {{ getOrderType() === 'service' ? 'Service Order' : 'Product Order' }}
            </span>
            <span class="order-date">{{ order().created_at | date:'medium' }}</span>
          </div>
        </div>
        <div class="order-controls">
          <button class="btn-status" (click)="openStatusModal()">
            <span class="status-badge" [ngClass]="'status-' + order().status">{{ statusLabel(order().status) }}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <button class="btn-payment" [class.paid]="order().payment_status" (click)="openPaymentModal()">
            {{ order().payment_status ? 'Paid' : 'Mark as Paid' }}
          </button>
          <button class="btn-franchise" *ngIf="isSuperAdmin" (click)="openFranchiseModal()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            {{ order().franchise_admin_id ? 'Reassign Franchise' : 'Assign Franchise' }}
          </button>
          <button class="btn-invoice" (click)="downloadInvoice()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Invoice
          </button>
        </div>
      </div>

      <!-- Franchise Info -->
      <div class="franchise-info" *ngIf="order().franchise_admin_id">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/></svg>
        <span>Assigned to: <strong>{{ order().franchiseAdmin?.name || 'Franchise #' + order().franchise_admin_id }}</strong></span>
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

      <!-- Refund Section -->
      <div class="refund-card" *ngIf="order().refund">
        <div class="refund-header">
          <div class="refund-title-row">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 10h10a8 8 0 018 8v2M3 10l6 6M3 10l6-6"/></svg>
            <h3>Refund Request</h3>
            <span class="refund-status-badge" [ngClass]="'refund-' + refundStatusLabel(order().refund.status)">{{ refundStatusLabel(order().refund.status) }}</span>
          </div>
          <span class="refund-date">{{ order().refund.created_at | date:'medium' }}</span>
        </div>
        <div class="refund-body">
          <div class="detail-row" *ngIf="order().refund.cancel_reason">
            <span class="label">Reason</span>
            <span>{{ order().refund.cancel_reason }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Order Total</span>
            <span class="fw-600">&#8377;{{ order().total | number:'1.2-2' }}</span>
          </div>
        </div>
        <div class="refund-actions" *ngIf="order().refund.status === 0">
          <button class="btn-refund-approve" (click)="updateRefundStatus(1)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            Approve Refund
          </button>
          <button class="btn-refund-reject" (click)="updateRefundStatus(2)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            Reject Refund
          </button>
        </div>
      </div>
    </div>

    <!-- Status Change Modal -->
    <div class="modal-overlay" *ngIf="statusModalOpen()" (click)="statusModalOpen.set(false)">
      <div class="status-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Change Order Status</h3>
          <button class="modal-close" (click)="statusModalOpen.set(false)">&times;</button>
        </div>
        <div class="modal-body">
          <p>Select new status for this order:</p>
          <div class="status-options">
            <button *ngFor="let s of statuses" class="status-option" [class.active]="pendingStatus() === s.value" [class.current]="order()?.status === s.value" (click)="pendingStatus.set(s.value)">
              <span class="status-dot" [ngClass]="'dot-' + s.value"></span>
              {{ s.label }}
              <span class="current-label" *ngIf="order()?.status === s.value">(Current)</span>
            </button>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-cancel" (click)="statusModalOpen.set(false)">Cancel</button>
          <button class="btn-save" [disabled]="pendingStatus() === order()?.status" (click)="showStatusConfirm()">Update Status</button>
        </div>
      </div>
    </div>

    <!-- Status Confirm Modal -->
    <app-confirm-modal
      [open]="statusConfirmOpen()"
      title="Confirm Status Change"
      [message]="'Change order status from &quot;' + statusLabel(order()?.status) + '&quot; to &quot;' + statusLabel(pendingStatus()) + '&quot;?'"
      confirmText="Yes, Update"
      type="warning"
      [loading]="statusUpdating()"
      (confirmed)="confirmStatusChange()"
      (cancelled)="statusConfirmOpen.set(false)">
    </app-confirm-modal>

    <!-- Payment Confirmation Modal -->
    <app-confirm-modal
      [open]="paymentModalOpen()"
      [title]="order()?.payment_status ? 'Mark as Unpaid' : 'Mark as Paid'"
      [message]="order()?.payment_status ? 'Mark this order as unpaid?' : 'Confirm payment received for this order?'"
      [confirmText]="order()?.payment_status ? 'Mark Unpaid' : 'Confirm Payment'"
      [type]="order()?.payment_status ? 'warning' : 'info'"
      (confirmed)="confirmPaymentChange()"
      (cancelled)="paymentModalOpen.set(false)">
    </app-confirm-modal>

    <!-- Franchise Assignment Modal -->
    <div class="modal-overlay" *ngIf="franchiseModalOpen()" (click)="franchiseModalOpen.set(false)">
      <div class="franchise-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Assign to Franchise Admin</h3>
          <button class="modal-close" (click)="franchiseModalOpen.set(false)">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Select Franchise Admin</label>
            <div class="custom-select-wrap">
              <select class="custom-select" [(ngModel)]="selectedFranchiseId">
                <option value="">-- Select Franchise Admin --</option>
                <option *ngFor="let f of franchiseAdmins()" [value]="f.id">{{ f.name }} ({{ f.email }})</option>
              </select>
              <svg class="select-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
          <div class="franchise-empty" *ngIf="franchiseAdmins().length === 0 && !franchiseLoading()">
            <p>No franchise admins found.</p>
          </div>
          <div class="loading-small" *ngIf="franchiseLoading()"><div class="spinner-sm"></div> Loading...</div>
        </div>
        <div class="modal-footer">
          <button class="btn-cancel" (click)="franchiseModalOpen.set(false)">Cancel</button>
          <button class="btn-save" [disabled]="!selectedFranchiseId" (click)="showAssignConfirm()">Assign</button>
        </div>
      </div>
    </div>

    <!-- Assign Confirm Modal -->
    <app-confirm-modal
      [open]="assignConfirmOpen()"
      title="Confirm Assignment"
      [message]="'Assign this order to &quot;' + getSelectedFranchiseName() + '&quot;?' + (getOrderType() === 'service' ? ' A service request will be created automatically.' : '')"
      confirmText="Yes, Assign"
      type="info"
      [loading]="assignUpdating()"
      (confirmed)="confirmAssignFranchise()"
      (cancelled)="assignConfirmOpen.set(false)">
    </app-confirm-modal>
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
    .order-meta-row { display: flex; align-items: center; gap: 12px; margin-top: 6px; }
    .order-date { color: #64748b; }
    .type-badge { display: inline-flex; padding: 3px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
    .type-service { background: #dbeafe; color: #2563eb; }
    .type-product { background: #f3e8ff; color: #7c3aed; }
    .order-controls { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
    .btn-status { display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; cursor: pointer; font-weight: 600; font-size: 14px; }
    .btn-status:hover { border-color: #e31b23; }
    .status-badge { display: inline-flex; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600; }
    .status-0 { background: #fef3c7; color: #d97706; }
    .status-1 { background: #dbeafe; color: #2563eb; }
    .status-2 { background: #e0e7ff; color: #4f46e5; }
    .status-3 { background: #dcfce7; color: #16a34a; }
    .status-4 { background: #fee2e2; color: #dc2626; }
    .btn-payment { padding: 8px 20px; border: 2px solid #e31b23; border-radius: 8px; background: transparent; color: #e31b23; font-weight: 600; cursor: pointer; transition: all 0.2s; font-size: 13px; }
    .btn-payment.paid { background: #dcfce7; border-color: #16a34a; color: #16a34a; }
    .btn-payment:hover { opacity: 0.8; }
    .btn-franchise { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; border: 1px solid #8b5cf6; border-radius: 8px; background: #f5f3ff; color: #7c3aed; font-weight: 600; cursor: pointer; font-size: 13px; transition: all 0.2s; }
    .btn-franchise:hover { background: #ede9fe; }
    .btn-invoice { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; border: 1px solid #e31b23; border-radius: 8px; background: #fff; color: #e31b23; font-weight: 600; cursor: pointer; font-size: 13px; transition: all 0.2s; }
    .btn-invoice:hover { background: #fee2e2; }
    .franchise-info { display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 10px; margin-bottom: 20px; color: #7c3aed; font-size: 14px; }
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

    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 9998; display: flex; align-items: center; justify-content: center; }
    .status-modal, .franchise-modal { background: #fff; border-radius: 16px; width: 90vw; max-width: 480px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.2); }
    .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; border-bottom: 1px solid #e5e7eb; }
    .modal-header h3 { margin: 0; font-size: 18px; font-weight: 700; color: #1a1a2e; }
    .modal-close { background: none; border: none; font-size: 28px; cursor: pointer; color: #64748b; line-height: 1; }
    .modal-body { padding: 20px 24px; }
    .modal-body p { margin: 0 0 16px; color: #64748b; font-size: 14px; }
    .modal-footer { display: flex; justify-content: flex-end; gap: 12px; padding: 16px 24px; border-top: 1px solid #e5e7eb; }
    .btn-cancel { padding: 10px 20px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; color: #374151; font-weight: 600; cursor: pointer; font-size: 14px; }
    .btn-save { padding: 10px 20px; border: none; border-radius: 8px; background: #e31b23; color: #fff; font-weight: 600; cursor: pointer; font-size: 14px; }
    .btn-save:hover { background: #b11218; }
    .btn-save:disabled { opacity: 0.5; cursor: not-allowed; }

    .status-options { display: flex; flex-direction: column; gap: 8px; }
    .status-option { display: flex; align-items: center; gap: 10px; padding: 12px 16px; border: 1px solid #e5e7eb; border-radius: 10px; background: #fff; cursor: pointer; font-size: 14px; font-weight: 500; color: #334155; transition: all 0.2s; text-align: left; }
    .status-option:hover { border-color: #e31b23; background: #fff5f5; }
    .status-option.active { border-color: #e31b23; background: #fff5f5; box-shadow: 0 0 0 2px rgba(227,27,35,0.15); }
    .status-option.current { opacity: 0.6; }
    .current-label { font-size: 11px; color: #94a3b8; margin-left: auto; }
    .status-dot { width: 10px; height: 10px; border-radius: 50%; }
    .dot-0 { background: #d97706; }
    .dot-1 { background: #2563eb; }
    .dot-2 { background: #4f46e5; }
    .dot-3 { background: #16a34a; }
    .dot-4 { background: #dc2626; }

    .form-group { margin-bottom: 16px; }
    .form-group label { display: block; margin-bottom: 6px; font-weight: 600; color: #334155; font-size: 14px; }
    .form-control { width: 100%; padding: 10px 14px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 14px; box-sizing: border-box; }
    .form-control:focus { outline: none; border-color: #e31b23; }
    .custom-select-wrap { position: relative; }
    .custom-select { width: 100%; padding: 10px 40px 10px 14px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 14px; color: #334155; background: #fff; appearance: none; -webkit-appearance: none; -moz-appearance: none; cursor: pointer; box-sizing: border-box; transition: border-color 0.2s; }
    .custom-select:focus { outline: none; border-color: #e31b23; box-shadow: 0 0 0 3px rgba(227,27,35,0.1); }
    .select-arrow { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); pointer-events: none; }
    .franchise-empty { text-align: center; padding: 16px; color: #94a3b8; }
    .loading-small { display: flex; align-items: center; gap: 8px; padding: 12px; color: #64748b; font-size: 14px; }
    .spinner-sm { width: 20px; height: 20px; border: 2px solid #f3f4f6; border-top-color: #e31b23; border-radius: 50%; animation: spin 0.8s linear infinite; }

    .refund-card { background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); margin-bottom: 20px; border-left: 4px solid #f59e0b; }
    .refund-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #f1f5f9; }
    .refund-title-row { display: flex; align-items: center; gap: 10px; }
    .refund-title-row h3 { font-size: 16px; font-weight: 700; color: #1a1a2e; margin: 0; }
    .refund-date { color: #94a3b8; font-size: 13px; }
    .refund-status-badge { padding: 3px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
    .refund-pending { background: #fef3c7; color: #d97706; }
    .refund-approved { background: #dcfce7; color: #16a34a; }
    .refund-rejected { background: #fee2e2; color: #dc2626; }
    .refund-body { margin-bottom: 16px; }
    .refund-actions { display: flex; gap: 12px; padding-top: 16px; border-top: 1px solid #f1f5f9; }
    .btn-refund-approve { display: inline-flex; align-items: center; gap: 6px; padding: 10px 20px; border: none; border-radius: 8px; background: #16a34a; color: #fff; font-weight: 600; cursor: pointer; font-size: 14px; transition: background 0.2s; }
    .btn-refund-approve:hover { background: #15803d; }
    .btn-refund-reject { display: inline-flex; align-items: center; gap: 6px; padding: 10px 20px; border: none; border-radius: 8px; background: #dc2626; color: #fff; font-weight: 600; cursor: pointer; font-size: 14px; transition: background 0.2s; }
    .btn-refund-reject:hover { background: #b91c1c; }

    @media (max-width: 768px) { .detail-grid { grid-template-columns: 1fr; } .order-controls { flex-direction: column; align-items: stretch; } }
  `]
})
export class OrderDetailComponent implements OnInit {
  order = signal<any>(null);
  loading = signal(true);
  statusModalOpen = signal(false);
  statusConfirmOpen = signal(false);
  statusUpdating = signal(false);
  paymentModalOpen = signal(false);
  franchiseModalOpen = signal(false);
  assignConfirmOpen = signal(false);
  assignUpdating = signal(false);
  pendingStatus = signal(0);
  franchiseAdmins = signal<any[]>([]);
  franchiseLoading = signal(false);
  selectedFranchiseId = '';

  statuses = [
    { value: 0, label: 'Pending' },
    { value: 1, label: 'Accepted' },
    { value: 2, label: 'In Progress' },
    { value: 3, label: 'Completed' },
    { value: 4, label: 'Cancelled' }
  ];

  isSuperAdmin = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private toast: ToastService, private authService: AuthService) {
    const admin = this.authService.currentAdmin;
    this.isSuperAdmin = admin ? !admin.is_franchise : false;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`${environment.apiUrl}/admin/orders/${id}`).subscribe({
      next: (res) => this.order.set(res.data),
      error: () => { this.toast.error('Failed to load order'); this.router.navigate(['/admin/orders/all-orders']); },
      complete: () => this.loading.set(false)
    });
  }

  statusLabel(status: number): string {
    return this.statuses.find(s => s.value === status)?.label || 'Unknown';
  }

  openStatusModal() {
    this.pendingStatus.set(this.order()?.status || 0);
    this.statusModalOpen.set(true);
  }

  showStatusConfirm() {
    this.statusModalOpen.set(false);
    this.statusConfirmOpen.set(true);
  }

  confirmStatusChange() {
    const o = this.order();
    const newStatus = this.pendingStatus();
    this.statusUpdating.set(true);
    this.http.put<any>(`${environment.apiUrl}/admin/orders/${o.id}/status`, { status: newStatus }).subscribe({
      next: () => {
        this.order.set({ ...o, status: newStatus });
        this.toast.success(`Order status changed to ${this.statusLabel(newStatus)}`);
        this.statusConfirmOpen.set(false);
        this.statusUpdating.set(false);
      },
      error: () => { this.toast.error('Failed to update order status'); this.statusUpdating.set(false); }
    });
  }

  openPaymentModal() {
    this.paymentModalOpen.set(true);
  }

  confirmPaymentChange() {
    const o = this.order();
    const newStatus = o.payment_status ? 0 : 1;
    this.http.put<any>(`${environment.apiUrl}/admin/orders/${o.id}/payment-status`, { payment_status: newStatus }).subscribe({
      next: () => {
        this.order.set({ ...o, payment_status: newStatus });
        this.toast.success(newStatus ? 'Payment marked as paid' : 'Payment marked as unpaid');
        this.paymentModalOpen.set(false);
      },
      error: () => { this.toast.error('Failed to update payment status'); this.paymentModalOpen.set(false); }
    });
  }

  openFranchiseModal() {
    this.franchiseModalOpen.set(true);
    this.selectedFranchiseId = this.order()?.franchise_admin_id?.toString() || '';
    this.loadFranchiseAdmins();
  }

  loadFranchiseAdmins() {
    this.franchiseLoading.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/franchises`).subscribe({
      next: (res) => this.franchiseAdmins.set(res.data || []),
      error: () => this.franchiseAdmins.set([]),
      complete: () => this.franchiseLoading.set(false)
    });
  }

  showAssignConfirm() {
    this.franchiseModalOpen.set(false);
    this.assignConfirmOpen.set(true);
  }

  getSelectedFranchiseName(): string {
    const admin = this.franchiseAdmins().find(f => f.id == this.selectedFranchiseId);
    return admin?.name || 'Selected Admin';
  }

  confirmAssignFranchise() {
    if (!this.selectedFranchiseId) return;
    const o = this.order();
    this.assignUpdating.set(true);
    this.http.put<any>(`${environment.apiUrl}/admin/orders/${o.id}`, { franchise_admin_id: +this.selectedFranchiseId }).subscribe({
      next: () => {
        const admin = this.franchiseAdmins().find(f => f.id == this.selectedFranchiseId);
        this.order.set({ ...o, franchise_admin_id: +this.selectedFranchiseId, franchiseAdmin: admin });
        const msg = this.getOrderType() === 'service' ? 'Franchise admin assigned & service request created' : 'Franchise admin assigned';
        this.toast.success(msg);
        this.assignConfirmOpen.set(false);
        this.assignUpdating.set(false);
      },
      error: () => { this.toast.error('Failed to assign franchise admin'); this.assignUpdating.set(false); }
    });
  }

  getOrderType(): string {
    const items = this.order()?.items || [];
    const hasProduct = items.some((i: any) => i.service?.type === 1);
    return hasProduct ? 'product' : 'service';
  }

  refundStatusLabel(status: number): string {
    const map: Record<number, string> = { 0: 'pending', 1: 'approved', 2: 'rejected' };
    return map[status] || 'pending';
  }

  updateRefundStatus(status: number) {
    const o = this.order();
    if (!o?.refund) return;
    const label = status === 1 ? 'approve' : 'reject';
    if (!confirm(`Are you sure you want to ${label} this refund request?`)) return;
    this.http.put<any>(`${environment.apiUrl}/admin/refunded-orders/${o.refund.id}/status`, { status }).subscribe({
      next: () => {
        this.order.set({ ...o, refund: { ...o.refund, status } });
        this.toast.success(`Refund ${label === 'approve' ? 'approved' : 'rejected'} successfully`);
      },
      error: () => this.toast.error(`Failed to ${label} refund`)
    });
  }

  downloadInvoice() {
    const o = this.order();
    if (!o) return;
    this.http.get(`${environment.apiUrl}/admin/orders/${o.id}/invoice`, { responseType: 'text' }).subscribe({
      next: (html) => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) { this.toast.error('Pop-up blocked. Please allow pop-ups.'); return; }
        const printHtml = html.replace('</body>', `
          <script>
            window.onload = function() {
              setTimeout(function() { window.print(); }, 300);
              window.onafterprint = function() { window.close(); };
            };
          </script></body>`);
        printWindow.document.write(printHtml);
        printWindow.document.close();
      },
      error: () => this.toast.error('Failed to generate invoice')
    });
  }
}
