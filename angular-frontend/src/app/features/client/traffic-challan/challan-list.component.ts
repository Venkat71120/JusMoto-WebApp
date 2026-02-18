import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChallanService } from '../../../core/services/challan.service';

@Component({
  selector: 'app-client-challan-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="challans-container">
      <div class="page-header">
        <div class="header-content">
          <h1>Traffic Challans</h1>
          <p>View and pay your pending traffic challans</p>
        </div>
        <a routerLink="/client/traffic-challan/check" class="btn-primary">
          Check Challans
        </a>
      </div>

      <div class="stats-grid" *ngIf="stats()">
        <div class="stat-card">
          <div class="stat-icon pending-icon">⏳</div>
          <div class="stat-info">
            <span class="stat-value">{{ stats().pending || 0 }}</span>
            <span class="stat-label">Pending</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon paid-icon">✓</div>
          <div class="stat-info">
            <span class="stat-value">{{ stats().paid || 0 }}</span>
            <span class="stat-label">Paid</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon amount-icon">₹</div>
          <div class="stat-info">
            <span class="stat-value">{{ stats().total_pending_amount | currency:'INR':'symbol':'1.0-0' }}</span>
            <span class="stat-label">Total Pending</span>
          </div>
        </div>
      </div>

      <div *ngIf="loading()" class="loading">
        <div class="spinner"></div>
        <p>Loading challans...</p>
      </div>

      <div *ngIf="!loading() && challans().length === 0" class="empty-state">
        <div class="empty-icon">🚗</div>
        <h3>No challans found</h3>
        <p>You haven't checked for any challans yet or you don't have any pending challans.</p>
        <a routerLink="/client/traffic-challan/check" class="btn-primary">Check for Challans</a>
      </div>

      <div class="challans-list" *ngIf="!loading() && challans().length > 0">
        <div class="challan-card" *ngFor="let challan of challans()">
          <div class="challan-header">
            <div class="challan-info">
              <span class="challan-number">{{ challan.challan_number }}</span>
              <span class="vehicle-number">{{ challan.vehicle_number }}</span>
            </div>
            <span class="status-badge" [class]="'status-' + challan.status">
              {{ challan.status | titlecase }}
            </span>
          </div>

          <div class="challan-body">
            <div class="violation-info">
              <h4>{{ challan.violation_type }}</h4>
              <p>{{ challan.violation_description }}</p>
            </div>

            <div class="challan-details">
              <div class="detail-item">
                <span class="label">Date</span>
                <span class="value">{{ challan.violation_date | date:'mediumDate' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Location</span>
                <span class="value">{{ challan.location }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Fine Amount</span>
                <span class="value amount">{{ challan.fine_amount | currency:'INR':'symbol':'1.0-0' }}</span>
              </div>
            </div>
          </div>

          <div class="challan-footer">
            <a [routerLink]="['/client/traffic-challan', challan.id]" class="btn-outline">View Details</a>
            <button *ngIf="challan.status === 'pending'" class="btn-primary" (click)="payChallan(challan)">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .challans-container {
      max-width: 900px;
      margin: 0 auto;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 24px;
    }

    .header-content h1 {
      font-size: 28px;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 8px;
    }

    .header-content p {
      color: #666;
      margin: 0;
    }

    .btn-primary {
      padding: 12px 24px;
      background: #0066cc;
      color: #fff;
      border: none;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      cursor: pointer;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-bottom: 24px;
    }

    @media (max-width: 640px) {
      .stats-grid {
        grid-template-columns: 1fr;
      }
    }

    .stat-card {
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      display: flex;
      align-items: center;
      gap: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .stat-icon {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }

    .pending-icon { background: #fef3c7; }
    .paid-icon { background: #d1fae5; }
    .amount-icon { background: #dbeafe; }

    .stat-info {
      display: flex;
      flex-direction: column;
    }

    .stat-value {
      font-size: 24px;
      font-weight: 700;
      color: #1a1a1a;
    }

    .stat-label {
      font-size: 13px;
      color: #666;
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

    .challans-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .challan-card {
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .challan-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      background: #f9fafb;
      border-bottom: 1px solid #e5e7eb;
    }

    .challan-info {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .challan-number {
      font-weight: 600;
      color: #1a1a1a;
    }

    .vehicle-number {
      font-size: 14px;
      color: #666;
      background: #e5e7eb;
      padding: 2px 8px;
      border-radius: 4px;
    }

    .status-badge {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
    }

    .status-pending { background: #fef3c7; color: #92400e; }
    .status-paid { background: #d1fae5; color: #065f46; }
    .status-disputed { background: #fee2e2; color: #991b1b; }

    .challan-body {
      padding: 20px;
    }

    .violation-info {
      margin-bottom: 16px;
    }

    .violation-info h4 {
      font-size: 16px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 4px;
    }

    .violation-info p {
      font-size: 14px;
      color: #666;
      margin: 0;
    }

    .challan-details {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    @media (max-width: 640px) {
      .challan-details {
        grid-template-columns: 1fr;
      }
    }

    .detail-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .detail-item .label {
      font-size: 12px;
      color: #888;
    }

    .detail-item .value {
      font-size: 14px;
      color: #1a1a1a;
    }

    .detail-item .amount {
      font-size: 18px;
      font-weight: 700;
      color: #dc3545;
    }

    .challan-footer {
      display: flex;
      gap: 12px;
      padding: 16px 20px;
      border-top: 1px solid #e5e7eb;
      background: #f9fafb;
    }

    .btn-outline {
      padding: 10px 20px;
      border: 1px solid #e5e7eb;
      background: #fff;
      color: #444;
      border-radius: 6px;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
    }
  `]
})
export class ClientChallanListComponent implements OnInit {
  challans = signal<any[]>([]);
  stats = signal<any>(null);
  loading = signal(true);

  constructor(private challanService: ChallanService) {}

  ngOnInit(): void {
    this.loadChallans();
    this.loadStats();
  }

  loadChallans(): void {
    this.loading.set(true);
    this.challanService.getChallans().subscribe({
      next: (response) => {
        this.challans.set(response.data || response.challans || []);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  loadStats(): void {
    this.challanService.getChallanStats().subscribe({
      next: (response) => {
        this.stats.set(response.data || response.stats || response);
      }
    });
  }

  payChallan(challan: any): void {
    // Implement payment flow
    alert('Payment flow coming soon!');
  }
}
