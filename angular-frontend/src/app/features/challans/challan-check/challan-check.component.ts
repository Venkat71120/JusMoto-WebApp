import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ChallanService } from '../../../core/services/challan.service';

@Component({
  selector: 'app-challan-check',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="challan-check-container">
      <div class="page-header">
        <h1>Check Traffic Challans</h1>
        <p>Enter your vehicle number to check for any pending challans</p>
      </div>

      <div class="search-card">
        <form [formGroup]="searchForm" (ngSubmit)="onSearch()">
          <div class="form-group">
            <label for="vehicleNumber">Vehicle Number</label>
            <input
              type="text"
              id="vehicleNumber"
              formControlName="vehicleNumber"
              placeholder="e.g., DL01AB1234"
              [class.error]="searchForm.get('vehicleNumber')?.invalid && searchForm.get('vehicleNumber')?.touched"
            >
            @if (searchForm.get('vehicleNumber')?.invalid && searchForm.get('vehicleNumber')?.touched) {
              <span class="error-message">Please enter a valid vehicle number</span>
            }
          </div>

          <button type="submit" class="btn-primary" [disabled]="searchForm.invalid || isLoading()">
            @if (isLoading()) {
              <span class="spinner"></span> Checking...
            } @else {
              Check Challans
            }
          </button>
        </form>
      </div>

      @if (errorMessage()) {
        <div class="error-alert">
          {{ errorMessage() }}
        </div>
      }

      @if (challans().length > 0) {
        <div class="results-section">
          <h2>Found {{ challans().length }} Challan(s)</h2>

          <div class="challan-list">
            @for (challan of challans(); track challan.id) {
              <div class="challan-card">
                <div class="challan-header">
                  <span class="challan-number">{{ challan.challan_number }}</span>
                  <span class="status" [class]="challan.payment_status">
                    {{ challan.payment_status === 'paid' ? 'Paid' : 'Pending' }}
                  </span>
                </div>

                <div class="challan-body">
                  <div class="info-row">
                    <span class="label">Offence:</span>
                    <span class="value">{{ challan.offence_type }}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Location:</span>
                    <span class="value">{{ challan.offence_location }}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Date:</span>
                    <span class="value">{{ challan.offence_date | date:'mediumDate' }}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Due Date:</span>
                    <span class="value" [class.overdue]="isOverdue(challan.due_date)">
                      {{ challan.due_date | date:'mediumDate' }}
                    </span>
                  </div>
                </div>

                <div class="challan-footer">
                  <span class="amount">₹{{ challan.fine_amount }}</span>
                  @if (challan.payment_status !== 'paid') {
                    <button class="btn-pay" (click)="payNow(challan)">Pay Now</button>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      }

      @if (searched() && challans().length === 0 && !isLoading() && !errorMessage()) {
        <div class="no-results">
          <div class="icon">✓</div>
          <h3>No Pending Challans</h3>
          <p>Great! No traffic challans found for this vehicle.</p>
        </div>
      }
    </div>
  `,
  styles: [`
    .challan-check-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .page-header {
      text-align: center;
      margin-bottom: 30px;
    }

    .page-header h1 {
      font-size: 28px;
      margin-bottom: 10px;
    }

    .page-header p {
      color: #666;
    }

    .search-card {
      background: white;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      margin-bottom: 30px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
    }

    .form-group input {
      width: 100%;
      padding: 12px 15px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 16px;
      text-transform: uppercase;
    }

    .form-group input:focus {
      outline: none;
      border-color: #007bff;
    }

    .form-group input.error {
      border-color: #dc3545;
    }

    .error-message {
      color: #dc3545;
      font-size: 14px;
      margin-top: 5px;
    }

    .btn-primary {
      width: 100%;
      padding: 14px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .btn-primary:hover:not(:disabled) {
      background: #0056b3;
    }

    .btn-primary:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid #ffffff50;
      border-top-color: white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .error-alert {
      background: #f8d7da;
      color: #721c24;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 20px;
    }

    .results-section h2 {
      margin-bottom: 20px;
    }

    .challan-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .challan-card {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .challan-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      background: #f8f9fa;
      border-bottom: 1px solid #e0e0e0;
    }

    .challan-number {
      font-weight: 600;
      font-family: monospace;
    }

    .status {
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
    }

    .status.paid {
      background: #d4edda;
      color: #155724;
    }

    .status.unpaid, .status.pending {
      background: #fff3cd;
      color: #856404;
    }

    .challan-body {
      padding: 20px;
    }

    .info-row {
      display: flex;
      margin-bottom: 10px;
    }

    .info-row .label {
      width: 120px;
      color: #666;
    }

    .info-row .value {
      flex: 1;
      font-weight: 500;
    }

    .info-row .value.overdue {
      color: #dc3545;
    }

    .challan-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      background: #f8f9fa;
      border-top: 1px solid #e0e0e0;
    }

    .amount {
      font-size: 24px;
      font-weight: 700;
      color: #dc3545;
    }

    .btn-pay {
      padding: 10px 25px;
      background: #28a745;
      color: white;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
    }

    .btn-pay:hover {
      background: #218838;
    }

    .no-results {
      text-align: center;
      padding: 60px 20px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .no-results .icon {
      width: 80px;
      height: 80px;
      background: #d4edda;
      color: #28a745;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      margin: 0 auto 20px;
    }

    .no-results h3 {
      margin-bottom: 10px;
      color: #28a745;
    }

    .no-results p {
      color: #666;
    }
  `]
})
export class ChallanCheckComponent {
  private fb = inject(FormBuilder);
  private challanService = inject(ChallanService);
  private router = inject(Router);

  searchForm: FormGroup;
  isLoading = signal(false);
  challans = signal<any[]>([]);
  errorMessage = signal('');
  searched = signal(false);

  constructor() {
    this.searchForm = this.fb.group({
      vehicleNumber: ['', [Validators.required, Validators.pattern(/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{1,4}$/i)]]
    });
  }

  onSearch(): void {
    if (this.searchForm.invalid) return;

    this.isLoading.set(true);
    this.errorMessage.set('');
    this.challans.set([]);

    const vehicleNumber = this.searchForm.get('vehicleNumber')?.value.toUpperCase();

    this.challanService.checkChallans(vehicleNumber).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        this.searched.set(true);
        if (response.success) {
          this.challans.set(response.data || []);
        }
      },
      error: (error) => {
        this.isLoading.set(false);
        this.searched.set(true);
        this.errorMessage.set(error.error?.message || 'Failed to fetch challans. Please try again.');
      }
    });
  }

  isOverdue(dueDate: string): boolean {
    return new Date(dueDate) < new Date();
  }

  payNow(challan: any): void {
    this.router.navigate(['/challans', challan.id], { state: { challan } });
  }
}
