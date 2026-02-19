import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChallanService } from '../../../core/services/challan.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-client-challan-check',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="check-challan-container">
      <div class="back-link">
        <a routerLink="/client/traffic-challan">&larr; Back to Challans</a>
      </div>

      <div class="check-card">
        <h1>Check Traffic Challans</h1>
        <p class="subtitle">Enter your vehicle number or driving license to check for pending challans.</p>

        <div class="search-tabs">
          <button
            [class.active]="searchType() === 'vehicle'"
            (click)="searchType.set('vehicle')"
            class="tab-btn">
            By Vehicle Number
          </button>
          <button
            [class.active]="searchType() === 'license'"
            (click)="searchType.set('license')"
            class="tab-btn">
            By Driving License
          </button>
        </div>

        <form [formGroup]="searchForm" (ngSubmit)="onSearch()">
          <div class="form-group" *ngIf="searchType() === 'vehicle'">
            <label for="vehicle_number">Vehicle Registration Number</label>
            <input
              type="text"
              id="vehicle_number"
              formControlName="vehicle_number"
              class="form-control"
              placeholder="e.g., MH12AB1234"
              (input)="formatVehicleNumber($event)">
            <div class="error" *ngIf="searchForm.get('vehicle_number')?.touched && searchForm.get('vehicle_number')?.errors?.['required']">
              Vehicle number is required
            </div>
          </div>

          <div class="form-group" *ngIf="searchType() === 'license'">
            <label for="license_number">Driving License Number</label>
            <input
              type="text"
              id="license_number"
              formControlName="license_number"
              class="form-control"
              placeholder="e.g., MH1234567890123">
            <div class="error" *ngIf="searchForm.get('license_number')?.touched && searchForm.get('license_number')?.errors?.['required']">
              License number is required
            </div>
          </div>

          <button type="submit" class="btn-primary full-width" [disabled]="searching()">
            {{ searching() ? 'Searching...' : 'Check Challans' }}
          </button>
        </form>

        <div *ngIf="error()" class="error-message">
          {{ error() }}
        </div>

        <div *ngIf="searched() && results().length === 0 && !error()" class="no-results">
          <div class="success-icon">✓</div>
          <h3>No Challans Found!</h3>
          <p>Great news! There are no pending challans for this {{ searchType() === 'vehicle' ? 'vehicle' : 'license' }}.</p>
        </div>

        <div *ngIf="results().length > 0" class="results-section">
          <h2>Found {{ results().length }} Challan(s)</h2>

          <div class="result-card" *ngFor="let challan of results()">
            <div class="result-header">
              <span class="challan-number">{{ challan.challan_number }}</span>
              <span class="fine-amount">{{ challan.fine_amount | currency:'INR':'symbol':'1.0-0' }}</span>
            </div>

            <div class="result-body">
              <div class="detail-row">
                <span>Violation</span>
                <span>{{ challan.violation_type }}</span>
              </div>
              <div class="detail-row">
                <span>Date</span>
                <span>{{ challan.violation_date | date:'mediumDate' }}</span>
              </div>
              <div class="detail-row">
                <span>Location</span>
                <span>{{ challan.location }}</span>
              </div>
            </div>

            <div class="result-footer">
              <button class="btn-primary" (click)="payChallan(challan)">Pay Now</button>
            </div>
          </div>

          <div class="total-section">
            <span>Total Amount to Pay</span>
            <strong>{{ getTotalAmount() | currency:'INR':'symbol':'1.0-0' }}</strong>
          </div>

          <button class="btn-primary full-width" (click)="payAll()">Pay All Challans</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .check-challan-container {
      max-width: 600px;
      margin: 0 auto;
    }

    .back-link {
      margin-bottom: 20px;
    }

    .back-link a {
      color: #e31b23;
      text-decoration: none;
      font-size: 14px;
    }

    .check-card {
      background: #fff;
      border-radius: 12px;
      padding: 32px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .check-card h1 {
      font-size: 24px;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 8px;
    }

    .subtitle {
      color: #666;
      margin: 0 0 24px;
    }

    .search-tabs {
      display: flex;
      gap: 8px;
      margin-bottom: 24px;
    }

    .tab-btn {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid #e5e7eb;
      background: #fff;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .tab-btn:hover {
      border-color: #e31b23;
    }

    .tab-btn.active {
      background: #e31b23;
      border-color: #e31b23;
      color: #fff;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: #333;
      margin-bottom: 8px;
    }

    .form-control {
      width: 100%;
      padding: 14px 16px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      font-size: 16px;
      text-transform: uppercase;
    }

    .form-control:focus {
      outline: none;
      border-color: #e31b23;
      box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);
    }

    .error {
      color: #dc3545;
      font-size: 13px;
      margin-top: 6px;
    }

    .btn-primary {
      padding: 14px 24px;
      background: #e31b23;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
    }

    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .full-width {
      width: 100%;
    }

    .error-message {
      margin-top: 20px;
      padding: 16px;
      background: #fee2e2;
      border-radius: 8px;
      color: #991b1b;
      text-align: center;
    }

    .no-results {
      margin-top: 32px;
      text-align: center;
      padding: 32px 20px;
      background: #d1fae5;
      border-radius: 12px;
    }

    .success-icon {
      width: 60px;
      height: 60px;
      background: #065f46;
      color: #fff;
      border-radius: 50%;
      font-size: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px;
    }

    .no-results h3 {
      font-size: 20px;
      color: #065f46;
      margin: 0 0 8px;
    }

    .no-results p {
      color: #047857;
      margin: 0;
    }

    .results-section {
      margin-top: 32px;
    }

    .results-section h2 {
      font-size: 18px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 16px;
    }

    .result-card {
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      margin-bottom: 12px;
      overflow: hidden;
    }

    .result-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      background: #f9fafb;
      border-bottom: 1px solid #e5e7eb;
    }

    .challan-number {
      font-weight: 600;
      color: #1a1a1a;
    }

    .fine-amount {
      font-weight: 700;
      color: #dc3545;
    }

    .result-body {
      padding: 16px;
    }

    .detail-row {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      padding: 6px 0;
    }

    .detail-row span:first-child {
      color: #666;
    }

    .detail-row span:last-child {
      color: #1a1a1a;
    }

    .result-footer {
      padding: 12px 16px;
      border-top: 1px solid #e5e7eb;
      text-align: right;
    }

    .result-footer .btn-primary {
      padding: 8px 20px;
      font-size: 14px;
    }

    .total-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background: #f9fafb;
      border-radius: 10px;
      margin: 20px 0;
    }

    .total-section span {
      font-size: 16px;
      color: #666;
    }

    .total-section strong {
      font-size: 24px;
      color: #1a1a1a;
    }
  `]
})
export class ClientChallanCheckComponent {
  searchForm: FormGroup;
  searchType = signal<'vehicle' | 'license'>('vehicle');
  searching = signal(false);
  searched = signal(false);
  results = signal<any[]>([]);
  error = signal('');

  constructor(
    private fb: FormBuilder,
    private challanService: ChallanService,
    private router: Router,
    private toast: ToastService
  ) {
    this.searchForm = this.fb.group({
      vehicle_number: [''],
      license_number: ['']
    });
  }

  formatVehicleNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
  }

  onSearch(): void {
    const searchValue = this.searchType() === 'vehicle'
      ? this.searchForm.value.vehicle_number
      : this.searchForm.value.license_number;

    if (!searchValue) {
      return;
    }

    this.searching.set(true);
    this.error.set('');
    this.results.set([]);

    const params = this.searchType() === 'vehicle'
      ? { vehicle_number: searchValue }
      : { license_number: searchValue };

    this.challanService.checkChallans(params).subscribe({
      next: (response) => {
        this.searching.set(false);
        this.searched.set(true);
        this.results.set(response.data || response.challans || []);
      },
      error: (err) => {
        this.searching.set(false);
        this.searched.set(true);
        this.error.set(err.error?.message || 'Failed to check challans. Please try again.');
      }
    });
  }

  getTotalAmount(): number {
    return this.results().reduce((sum, challan) => sum + (challan.fine_amount || 0), 0);
  }

  payChallan(challan: any): void {
    this.toast.info('Payment flow coming soon!');
  }

  payAll(): void {
    this.toast.info('Pay all challans - Coming soon!');
  }
}
