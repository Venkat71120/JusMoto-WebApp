import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ChallanService } from '../../../core/services/challan.service';

@Component({
  selector: 'app-challan-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="challan-detail-container">
      <div class="back-nav">
        <a routerLink="/challans">← Back to Challans</a>
      </div>

      @if (isLoading()) {
        <div class="loading-state">
          <div class="spinner"></div>
          <p>Loading challan details...</p>
        </div>
      } @else if (challan()) {
        <div class="challan-detail-card">
          <div class="card-header">
            <div class="challan-info">
              <span class="challan-number">{{ challan()!.challan_number }}</span>
              <span class="vehicle-number">{{ challan()!.vehicle_number }}</span>
            </div>
            <span class="status-badge" [class]="challan()!.payment_status">
              {{ challan()!.payment_status === 'paid' ? 'Paid' : 'Pending' }}
            </span>
          </div>

          <div class="card-body">
            <div class="detail-section">
              <h3>Offence Details</h3>
              <div class="detail-grid">
                <div class="detail-item">
                  <span class="label">Offence Type</span>
                  <span class="value">{{ challan()!.offence_type }}</span>
                </div>
                <div class="detail-item">
                  <span class="label">Description</span>
                  <span class="value">{{ challan()!.offence_description || 'N/A' }}</span>
                </div>
                <div class="detail-item">
                  <span class="label">Location</span>
                  <span class="value">{{ challan()!.offence_location }}</span>
                </div>
                <div class="detail-item">
                  <span class="label">Offence Date</span>
                  <span class="value">{{ challan()!.offence_date | date:'medium' }}</span>
                </div>
                <div class="detail-item">
                  <span class="label">Due Date</span>
                  <span class="value" [class.overdue]="isOverdue()">
                    {{ challan()!.due_date | date:'mediumDate' }}
                    @if (isOverdue()) {
                      <span class="overdue-tag">Overdue</span>
                    }
                  </span>
                </div>
                <div class="detail-item">
                  <span class="label">Issuing Authority</span>
                  <span class="value">{{ challan()!.issuing_authority || 'Traffic Police' }}</span>
                </div>
              </div>
            </div>

            @if (challan()!.payment_status === 'paid') {
              <div class="detail-section payment-info">
                <h3>Payment Information</h3>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="label">Amount Paid</span>
                    <span class="value">₹{{ challan()!.paid_amount }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">Payment Method</span>
                    <span class="value">{{ challan()!.payment_method | titlecase }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">Transaction ID</span>
                    <span class="value">{{ challan()!.payment_reference }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">Payment Date</span>
                    <span class="value">{{ challan()!.paid_at | date:'medium' }}</span>
                  </div>
                </div>
              </div>
            }
          </div>

          <div class="card-footer">
            <div class="amount-section">
              <span class="amount-label">Fine Amount</span>
              <span class="amount-value">₹{{ challan()!.fine_amount }}</span>
            </div>

            @if (challan()!.payment_status !== 'paid') {
              <div class="payment-actions">
                <h4>Select Payment Method</h4>
                <div class="payment-methods">
                  @for (method of paymentMethods; track method.id) {
                    <button
                      class="payment-method"
                      [class.selected]="selectedMethod() === method.id"
                      (click)="selectMethod(method.id)">
                      <span class="method-icon">{{ method.icon }}</span>
                      <span class="method-name">{{ method.name }}</span>
                    </button>
                  }
                </div>

                <button
                  class="btn-pay"
                  [disabled]="!selectedMethod() || isPaying()"
                  (click)="processPayment()">
                  @if (isPaying()) {
                    <span class="spinner"></span> Processing...
                  } @else {
                    Pay ₹{{ challan()!.fine_amount }}
                  }
                </button>
              </div>
            }
          </div>
        </div>
      } @else {
        <div class="error-state">
          <h3>Challan Not Found</h3>
          <p>The challan you're looking for doesn't exist or has been removed.</p>
          <a routerLink="/challans" class="btn-primary">Back to Challans</a>
        </div>
      }
    </div>
  `,
  styles: [`
    .challan-detail-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .back-nav {
      margin-bottom: 20px;
    }

    .back-nav a {
      color: #007bff;
      text-decoration: none;
      font-weight: 500;
    }

    .loading-state, .error-state {
      text-align: center;
      padding: 60px 20px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }

    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid #e0e0e0;
      border-top-color: #007bff;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 20px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .challan-detail-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 25px;
      background: linear-gradient(135deg, #1a237e 0%, #3949ab 100%);
      color: white;
    }

    .challan-number {
      display: block;
      font-size: 20px;
      font-weight: 600;
      font-family: monospace;
    }

    .vehicle-number {
      opacity: 0.8;
      font-size: 14px;
    }

    .status-badge {
      padding: 8px 16px;
      border-radius: 25px;
      font-size: 13px;
      font-weight: 600;
    }

    .status-badge.paid {
      background: #4caf50;
      color: white;
    }

    .status-badge.unpaid, .status-badge.pending {
      background: #ff9800;
      color: white;
    }

    .card-body {
      padding: 25px;
    }

    .detail-section {
      margin-bottom: 30px;
    }

    .detail-section h3 {
      font-size: 16px;
      color: #666;
      margin-bottom: 15px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .detail-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .detail-item {
      display: flex;
      flex-direction: column;
    }

    .detail-item .label {
      font-size: 12px;
      color: #999;
      margin-bottom: 5px;
    }

    .detail-item .value {
      font-size: 15px;
      font-weight: 500;
    }

    .detail-item .value.overdue {
      color: #dc3545;
    }

    .overdue-tag {
      display: inline-block;
      margin-left: 8px;
      padding: 2px 8px;
      background: #dc3545;
      color: white;
      border-radius: 10px;
      font-size: 10px;
    }

    .payment-info {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 10px;
    }

    .card-footer {
      padding: 25px;
      border-top: 1px solid #e0e0e0;
    }

    .amount-section {
      text-align: center;
      margin-bottom: 25px;
    }

    .amount-label {
      display: block;
      font-size: 14px;
      color: #666;
      margin-bottom: 5px;
    }

    .amount-value {
      font-size: 36px;
      font-weight: 700;
      color: #dc3545;
    }

    .payment-actions h4 {
      text-align: center;
      margin-bottom: 15px;
      color: #666;
    }

    .payment-methods {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-bottom: 20px;
    }

    .payment-method {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px;
      background: #f8f9fa;
      border: 2px solid transparent;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .payment-method:hover {
      border-color: #007bff;
    }

    .payment-method.selected {
      border-color: #007bff;
      background: #e3f2fd;
    }

    .method-icon {
      font-size: 24px;
      margin-bottom: 8px;
    }

    .method-name {
      font-size: 12px;
      font-weight: 500;
    }

    .btn-pay {
      width: 100%;
      padding: 16px;
      background: #28a745;
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .btn-pay:hover:not(:disabled) {
      background: #218838;
    }

    .btn-pay:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-pay .spinner {
      width: 20px;
      height: 20px;
      border-width: 2px;
      margin: 0;
    }

    .btn-primary {
      display: inline-block;
      padding: 12px 24px;
      background: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      margin-top: 15px;
    }

    @media (max-width: 600px) {
      .detail-grid {
        grid-template-columns: 1fr;
      }

      .payment-methods {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class ChallanDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private challanService = inject(ChallanService);

  challan = signal<any>(null);
  isLoading = signal(true);
  isPaying = signal(false);
  selectedMethod = signal<string>('');

  paymentMethods = [
    { id: 'stripe', name: 'Card', icon: '💳' },
    { id: 'razorpay', name: 'Razorpay', icon: '🏦' },
    { id: 'upi', name: 'UPI', icon: '📱' },
  ];

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    // Check if challan data was passed via router state
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state?.['challan']) {
      this.challan.set(state['challan']);
      this.isLoading.set(false);
    } else {
      this.loadChallan(id);
    }
  }

  loadChallan(id: string): void {
    this.challanService.getChallanDetails(id).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        if (response.success) {
          this.challan.set(response.data);
        }
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  isOverdue(): boolean {
    if (!this.challan()?.due_date) return false;
    return new Date(this.challan()!.due_date) < new Date();
  }

  selectMethod(methodId: string): void {
    this.selectedMethod.set(methodId);
  }

  processPayment(): void {
    if (!this.selectedMethod() || !this.challan()) return;

    this.isPaying.set(true);

    this.challanService.payChallan(this.challan()!.id, this.selectedMethod()).subscribe({
      next: (response) => {
        this.isPaying.set(false);
        if (response.success) {
          this.challan.set(response.data.challan);
          // Show success message
          alert('Payment successful!');
        }
      },
      error: (error) => {
        this.isPaying.set(false);
        alert(error.error?.message || 'Payment failed. Please try again.');
      }
    });
  }
}
