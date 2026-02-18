import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ChallanService } from '../../../core/services/challan.service';

@Component({
  selector: 'app-client-challan-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="challan-detail-container">
      <div class="back-link">
        <a routerLink="/client/traffic-challan">&larr; Back to Challans</a>
      </div>

      <div *ngIf="loading()" class="loading">
        <div class="spinner"></div>
        <p>Loading challan details...</p>
      </div>

      <div *ngIf="!loading() && challan()" class="challan-content">
        <div class="challan-header-card">
          <div class="header-top">
            <div class="challan-title">
              <h1>{{ challan().challan_number }}</h1>
              <span class="status-badge" [class]="'status-' + challan().status">
                {{ challan().status | titlecase }}
              </span>
            </div>
            <div class="fine-amount">
              <span class="label">Fine Amount</span>
              <strong>{{ challan().fine_amount | currency:'INR':'symbol':'1.0-0' }}</strong>
            </div>
          </div>
        </div>

        <div class="content-grid">
          <div class="main-section">
            <div class="card">
              <h2>Violation Details</h2>
              <div class="violation-info">
                <h3>{{ challan().violation_type }}</h3>
                <p>{{ challan().violation_description }}</p>
              </div>

              <div class="details-grid">
                <div class="detail-item">
                  <span class="label">Violation Date</span>
                  <span class="value">{{ challan().violation_date | date:'fullDate' }}</span>
                </div>
                <div class="detail-item">
                  <span class="label">Violation Time</span>
                  <span class="value">{{ challan().violation_time }}</span>
                </div>
                <div class="detail-item full-width">
                  <span class="label">Location</span>
                  <span class="value">{{ challan().location }}</span>
                </div>
              </div>
            </div>

            <div class="card">
              <h2>Vehicle Information</h2>
              <div class="details-grid">
                <div class="detail-item">
                  <span class="label">Vehicle Number</span>
                  <span class="value">{{ challan().vehicle_number }}</span>
                </div>
                <div class="detail-item">
                  <span class="label">Vehicle Type</span>
                  <span class="value">{{ challan().vehicle_type | titlecase }}</span>
                </div>
                <div class="detail-item" *ngIf="challan().owner_name">
                  <span class="label">Owner Name</span>
                  <span class="value">{{ challan().owner_name }}</span>
                </div>
                <div class="detail-item" *ngIf="challan().chassis_number">
                  <span class="label">Chassis Number</span>
                  <span class="value">{{ challan().chassis_number }}</span>
                </div>
              </div>
            </div>

            <div class="card" *ngIf="challan().image">
              <h2>Evidence</h2>
              <div class="evidence-image">
                <img [src]="challan().image" alt="Violation Evidence">
              </div>
            </div>
          </div>

          <div class="sidebar-section">
            <div class="card payment-card" *ngIf="challan().status === 'pending'">
              <h3>Payment Summary</h3>
              <div class="payment-details">
                <div class="payment-row">
                  <span>Fine Amount</span>
                  <span>{{ challan().fine_amount | currency:'INR':'symbol':'1.0-0' }}</span>
                </div>
                <div class="payment-row" *ngIf="challan().late_fee > 0">
                  <span>Late Fee</span>
                  <span>{{ challan().late_fee | currency:'INR':'symbol':'1.0-0' }}</span>
                </div>
                <div class="payment-row total">
                  <span>Total Payable</span>
                  <strong>{{ (challan().fine_amount + (challan().late_fee || 0)) | currency:'INR':'symbol':'1.0-0' }}</strong>
                </div>
              </div>
              <button class="btn-primary full-width" (click)="payChallan()">Pay Now</button>
              <p class="due-date" *ngIf="challan().due_date">
                Due by {{ challan().due_date | date:'mediumDate' }}
              </p>
            </div>

            <div class="card" *ngIf="challan().status === 'paid'">
              <h3>Payment Receipt</h3>
              <div class="payment-details">
                <div class="payment-row">
                  <span>Amount Paid</span>
                  <span>{{ challan().amount_paid | currency:'INR':'symbol':'1.0-0' }}</span>
                </div>
                <div class="payment-row">
                  <span>Payment Date</span>
                  <span>{{ challan().payment_date | date:'mediumDate' }}</span>
                </div>
                <div class="payment-row">
                  <span>Transaction ID</span>
                  <span>{{ challan().transaction_id }}</span>
                </div>
              </div>
              <button class="btn-outline full-width" (click)="downloadReceipt()">
                Download Receipt
              </button>
            </div>

            <div class="card">
              <h3>Need Help?</h3>
              <p class="help-text">If you believe this challan is incorrect, you can raise a dispute.</p>
              <a routerLink="/client/tickets/new" [queryParams]="{category: 'challan', challan_id: challan().id}" class="btn-outline full-width">
                Raise Dispute
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .challan-detail-container {
      max-width: 1100px;
      margin: 0 auto;
    }

    .back-link {
      margin-bottom: 20px;
    }

    .back-link a {
      color: #0066cc;
      text-decoration: none;
      font-size: 14px;
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

    .challan-header-card {
      background: #fff;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .challan-title {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .challan-title h1 {
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
    .status-paid { background: #d1fae5; color: #065f46; }
    .status-disputed { background: #fee2e2; color: #991b1b; }

    .fine-amount {
      text-align: right;
    }

    .fine-amount .label {
      display: block;
      font-size: 13px;
      color: #666;
      margin-bottom: 4px;
    }

    .fine-amount strong {
      font-size: 28px;
      color: #dc3545;
    }

    .content-grid {
      display: grid;
      grid-template-columns: 1fr 350px;
      gap: 24px;
    }

    @media (max-width: 900px) {
      .content-grid {
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

    .violation-info {
      margin-bottom: 24px;
      padding-bottom: 20px;
      border-bottom: 1px solid #e5e7eb;
    }

    .violation-info h3 {
      font-size: 16px;
      color: #dc3545;
      margin-bottom: 8px;
    }

    .violation-info p {
      color: #666;
      margin: 0;
      line-height: 1.6;
    }

    .details-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .detail-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .detail-item.full-width {
      grid-column: 1 / -1;
    }

    .detail-item .label {
      font-size: 12px;
      color: #888;
      text-transform: uppercase;
    }

    .detail-item .value {
      font-size: 15px;
      color: #1a1a1a;
    }

    .evidence-image img {
      width: 100%;
      border-radius: 8px;
    }

    .payment-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
    }

    .payment-card h3 {
      color: #fff;
    }

    .payment-details {
      margin-bottom: 20px;
    }

    .payment-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid rgba(255,255,255,0.2);
    }

    .payment-row.total {
      border-bottom: none;
      padding-top: 16px;
      margin-top: 8px;
      border-top: 2px solid rgba(255,255,255,0.3);
    }

    .payment-row.total strong {
      font-size: 24px;
    }

    .btn-primary {
      padding: 14px 24px;
      background: #fff;
      color: #764ba2;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
    }

    .due-date {
      text-align: center;
      margin: 12px 0 0;
      font-size: 13px;
      opacity: 0.9;
    }

    .btn-outline {
      display: block;
      padding: 12px 24px;
      border: 1px solid #e5e7eb;
      background: #fff;
      color: #444;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      text-align: center;
      cursor: pointer;
    }

    .full-width {
      width: 100%;
    }

    .help-text {
      color: #666;
      font-size: 14px;
      margin: 0 0 16px;
    }
  `]
})
export class ClientChallanDetailComponent implements OnInit {
  challan = signal<any>(null);
  loading = signal(true);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private challanService: ChallanService
  ) {}

  ngOnInit(): void {
    const challanId = this.route.snapshot.paramMap.get('id');
    if (challanId) {
      this.loadChallan(+challanId);
    }
  }

  loadChallan(id: number): void {
    this.loading.set(true);
    this.challanService.getChallan(id).subscribe({
      next: (response) => {
        this.challan.set(response.data || response.challan || response);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.router.navigate(['/client/traffic-challan']);
      }
    });
  }

  payChallan(): void {
    alert('Payment flow coming soon!');
  }

  downloadReceipt(): void {
    alert('Download receipt - Coming soon!');
  }
}
