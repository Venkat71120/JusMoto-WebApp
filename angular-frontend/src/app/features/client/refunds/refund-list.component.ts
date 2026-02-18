import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';

@Component({
  selector: 'app-refund-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="refunds-container">
      <div class="page-header">
        <h1>My Refunds</h1>
        <p>Track the status of your refund requests</p>
      </div>

      <div *ngIf="loading()" class="loading">
        <div class="spinner"></div>
        <p>Loading refunds...</p>
      </div>

      <div *ngIf="!loading() && refunds().length === 0" class="empty-state">
        <div class="empty-icon">💰</div>
        <h3>No refunds found</h3>
        <p>You don't have any refund requests yet.</p>
        <a routerLink="/client/orders" class="btn-primary">View Orders</a>
      </div>

      <div class="refunds-list" *ngIf="!loading() && refunds().length > 0">
        <div class="refund-card" *ngFor="let refund of refunds()">
          <div class="refund-header">
            <div class="refund-info">
              <span class="refund-id">#{{ refund.refund_number || refund.id }}</span>
              <span class="order-link" *ngIf="refund.order">
                Order: <a [routerLink]="['/client/orders', refund.order.id]">#{{ refund.order.order_number }}</a>
              </span>
            </div>
            <span class="status-badge" [class]="'status-' + refund.status">
              {{ refund.status | titlecase }}
            </span>
          </div>

          <div class="refund-body">
            <div class="refund-amount">
              <span class="label">Refund Amount</span>
              <strong>{{ refund.amount | currency:'INR':'symbol':'1.0-0' }}</strong>
            </div>

            <div class="refund-details">
              <div class="detail-row">
                <span>Reason</span>
                <span>{{ refund.reason }}</span>
              </div>
              <div class="detail-row">
                <span>Requested On</span>
                <span>{{ refund.created_at | date:'mediumDate' }}</span>
              </div>
              <div class="detail-row" *ngIf="refund.processed_at">
                <span>Processed On</span>
                <span>{{ refund.processed_at | date:'mediumDate' }}</span>
              </div>
              <div class="detail-row" *ngIf="refund.refund_method">
                <span>Refund Method</span>
                <span>{{ refund.refund_method | titlecase }}</span>
              </div>
            </div>

            <div class="admin-remarks" *ngIf="refund.admin_remarks">
              <strong>Admin Remarks:</strong>
              <p>{{ refund.admin_remarks }}</p>
            </div>
          </div>

          <div class="refund-timeline" *ngIf="refund.status === 'approved' || refund.status === 'processing'">
            <div class="timeline-step" [class.completed]="true">
              <div class="step-dot"></div>
              <span>Request Submitted</span>
            </div>
            <div class="timeline-step" [class.completed]="refund.status !== 'pending'">
              <div class="step-dot"></div>
              <span>Under Review</span>
            </div>
            <div class="timeline-step" [class.completed]="refund.status === 'approved' || refund.status === 'completed'">
              <div class="step-dot"></div>
              <span>Approved</span>
            </div>
            <div class="timeline-step" [class.completed]="refund.status === 'completed'">
              <div class="step-dot"></div>
              <span>Refund Processed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .refunds-container {
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

    .loading {
      text-align: center;
      padding: 60px 20px;
    }

    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid #e5e7eb;
      border-top-color: #0066cc;
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

    .btn-primary {
      padding: 12px 24px;
      background: #0066cc;
      color: #fff;
      border: none;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
    }

    .refunds-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .refund-card {
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .refund-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      background: #f9fafb;
      border-bottom: 1px solid #e5e7eb;
    }

    .refund-info {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .refund-id {
      font-weight: 600;
      color: #1a1a1a;
    }

    .order-link {
      font-size: 14px;
      color: #666;
    }

    .order-link a {
      color: #0066cc;
      text-decoration: none;
    }

    .status-badge {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
    }

    .status-pending { background: #fef3c7; color: #92400e; }
    .status-processing { background: #dbeafe; color: #1e40af; }
    .status-approved { background: #d1fae5; color: #065f46; }
    .status-completed { background: #d1fae5; color: #065f46; }
    .status-rejected { background: #fee2e2; color: #991b1b; }

    .refund-body {
      padding: 20px;
    }

    .refund-amount {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-bottom: 20px;
      padding-bottom: 16px;
      border-bottom: 1px solid #e5e7eb;
    }

    .refund-amount .label {
      font-size: 13px;
      color: #666;
    }

    .refund-amount strong {
      font-size: 24px;
      color: #065f46;
    }

    .refund-details {
      display: grid;
      gap: 12px;
    }

    .detail-row {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }

    .detail-row span:first-child {
      color: #666;
    }

    .detail-row span:last-child {
      color: #1a1a1a;
    }

    .admin-remarks {
      margin-top: 16px;
      padding: 12px;
      background: #f9fafb;
      border-radius: 8px;
    }

    .admin-remarks strong {
      font-size: 13px;
      color: #444;
    }

    .admin-remarks p {
      margin: 8px 0 0;
      font-size: 14px;
      color: #666;
    }

    .refund-timeline {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      border-top: 1px solid #e5e7eb;
      background: #f9fafb;
    }

    .timeline-step {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      flex: 1;
      position: relative;
    }

    .timeline-step::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 50%;
      width: 100%;
      height: 2px;
      background: #e5e7eb;
    }

    .timeline-step:last-child::before {
      display: none;
    }

    .timeline-step.completed::before {
      background: #0066cc;
    }

    .step-dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #e5e7eb;
      position: relative;
      z-index: 1;
    }

    .timeline-step.completed .step-dot {
      background: #0066cc;
    }

    .timeline-step span {
      font-size: 12px;
      color: #888;
      text-align: center;
    }

    .timeline-step.completed span {
      color: #0066cc;
    }
  `]
})
export class RefundListComponent implements OnInit {
  refunds = signal<any[]>([]);
  loading = signal(true);

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadRefunds();
  }

  loadRefunds(): void {
    this.loading.set(true);
    this.orderService.getRefunds().subscribe({
      next: (response) => {
        this.refunds.set(response.data || response.refunds || []);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
}
