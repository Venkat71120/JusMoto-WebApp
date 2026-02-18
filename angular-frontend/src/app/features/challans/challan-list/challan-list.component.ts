import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChallanService } from '../../../core/services/challan.service';

@Component({
  selector: 'app-challan-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="challan-list-container">
      <div class="page-header">
        <div class="header-content">
          <h1>Traffic Challans</h1>
          <p>View and manage your traffic violation challans</p>
        </div>
        <a routerLink="/challans/check" class="btn-primary">
          <span>+</span> Check New Challan
        </a>
      </div>

      <!-- Stats Cards -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon total">📋</div>
          <div class="stat-content">
            <span class="stat-value">{{ stats()?.total || 0 }}</span>
            <span class="stat-label">Total Challans</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon pending">⏳</div>
          <div class="stat-content">
            <span class="stat-value">{{ stats()?.pending || 0 }}</span>
            <span class="stat-label">Pending</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon paid">✓</div>
          <div class="stat-content">
            <span class="stat-value">{{ stats()?.paid || 0 }}</span>
            <span class="stat-label">Paid</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon amount">₹</div>
          <div class="stat-content">
            <span class="stat-value">₹{{ stats()?.pendingAmount || 0 }}</span>
            <span class="stat-label">Pending Amount</span>
          </div>
        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="filter-tabs">
        <button
          [class.active]="activeFilter() === 'all'"
          (click)="setFilter('all')">
          All
        </button>
        <button
          [class.active]="activeFilter() === 'pending'"
          (click)="setFilter('pending')">
          Pending
        </button>
        <button
          [class.active]="activeFilter() === 'paid'"
          (click)="setFilter('paid')">
          Paid
        </button>
      </div>

      <!-- Challan List -->
      @if (isLoading()) {
        <div class="loading-state">
          <div class="spinner"></div>
          <p>Loading challans...</p>
        </div>
      } @else if (filteredChallans().length === 0) {
        <div class="empty-state">
          <div class="empty-icon">📭</div>
          <h3>No Challans Found</h3>
          <p>You don't have any {{ activeFilter() === 'all' ? '' : activeFilter() }} challans.</p>
          <a routerLink="/challans/check" class="btn-primary">Check for Challans</a>
        </div>
      } @else {
        <div class="challan-table">
          <table>
            <thead>
              <tr>
                <th>Challan No.</th>
                <th>Vehicle</th>
                <th>Offence</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              @for (challan of filteredChallans(); track challan.id) {
                <tr>
                  <td class="challan-number">{{ challan.challan_number }}</td>
                  <td>{{ challan.vehicle_number }}</td>
                  <td>{{ challan.offence_type }}</td>
                  <td>{{ challan.offence_date | date:'mediumDate' }}</td>
                  <td class="amount">₹{{ challan.fine_amount }}</td>
                  <td>
                    <span class="status-badge" [class]="challan.payment_status">
                      {{ challan.payment_status === 'paid' ? 'Paid' : 'Pending' }}
                    </span>
                  </td>
                  <td>
                    <a [routerLink]="['/challans', challan.id]" class="btn-view">View</a>
                    @if (challan.payment_status !== 'paid') {
                      <button class="btn-pay" (click)="payNow(challan)">Pay</button>
                    }
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        @if (pagination().totalPages > 1) {
          <div class="pagination">
            <button
              [disabled]="pagination().page === 1"
              (click)="loadPage(pagination().page - 1)">
              Previous
            </button>
            <span>Page {{ pagination().page }} of {{ pagination().totalPages }}</span>
            <button
              [disabled]="pagination().page === pagination().totalPages"
              (click)="loadPage(pagination().page + 1)">
              Next
            </button>
          </div>
        }
      }
    </div>
  `,
  styles: [`
    .challan-list-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 30px;
    }

    .page-header h1 {
      font-size: 28px;
      margin-bottom: 5px;
    }

    .page-header p {
      color: #666;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;
    }

    .btn-primary:hover {
      background: #0056b3;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-bottom: 30px;
    }

    .stat-card {
      background: white;
      border-radius: 10px;
      padding: 20px;
      display: flex;
      align-items: center;
      gap: 15px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }

    .stat-icon {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }

    .stat-icon.total { background: #e3f2fd; }
    .stat-icon.pending { background: #fff3e0; }
    .stat-icon.paid { background: #e8f5e9; }
    .stat-icon.amount { background: #fce4ec; }

    .stat-content {
      display: flex;
      flex-direction: column;
    }

    .stat-value {
      font-size: 24px;
      font-weight: 700;
    }

    .stat-label {
      color: #666;
      font-size: 14px;
    }

    .filter-tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }

    .filter-tabs button {
      padding: 10px 20px;
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 20px;
      cursor: pointer;
      font-weight: 500;
    }

    .filter-tabs button.active {
      background: #007bff;
      color: white;
      border-color: #007bff;
    }

    .loading-state, .empty-state {
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

    .empty-icon {
      font-size: 60px;
      margin-bottom: 20px;
    }

    .challan-table {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }

    .challan-table table {
      width: 100%;
      border-collapse: collapse;
    }

    .challan-table th {
      background: #f8f9fa;
      padding: 15px;
      text-align: left;
      font-weight: 600;
      border-bottom: 1px solid #e0e0e0;
    }

    .challan-table td {
      padding: 15px;
      border-bottom: 1px solid #f0f0f0;
    }

    .challan-number {
      font-family: monospace;
      font-weight: 600;
    }

    .amount {
      font-weight: 600;
      color: #dc3545;
    }

    .status-badge {
      display: inline-block;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
    }

    .status-badge.paid {
      background: #d4edda;
      color: #155724;
    }

    .status-badge.unpaid, .status-badge.pending {
      background: #fff3cd;
      color: #856404;
    }

    .btn-view, .btn-pay {
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 13px;
      cursor: pointer;
      margin-right: 5px;
    }

    .btn-view {
      background: #e9ecef;
      color: #495057;
      text-decoration: none;
      border: none;
    }

    .btn-pay {
      background: #28a745;
      color: white;
      border: none;
    }

    .btn-pay:hover {
      background: #218838;
    }

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-top: 20px;
    }

    .pagination button {
      padding: 10px 20px;
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      cursor: pointer;
    }

    .pagination button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .page-header {
        flex-direction: column;
        gap: 15px;
      }

      .challan-table {
        overflow-x: auto;
      }
    }
  `]
})
export class ChallanListComponent implements OnInit {
  private challanService = inject(ChallanService);

  challans = signal<any[]>([]);
  stats = signal<any>(null);
  isLoading = signal(true);
  activeFilter = signal<'all' | 'pending' | 'paid'>('all');
  pagination = signal({ page: 1, totalPages: 1, total: 0 });

  ngOnInit(): void {
    this.loadChallans();
    this.loadStats();
  }

  loadChallans(page: number = 1): void {
    this.isLoading.set(true);
    this.challanService.getHistory(page).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        if (response.success) {
          this.challans.set(response.data || []);
          if (response.pagination) {
            this.pagination.set(response.pagination);
          }
        }
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  loadStats(): void {
    this.challanService.getStats().subscribe({
      next: (response) => {
        if (response.success) {
          this.stats.set(response.data);
        }
      }
    });
  }

  setFilter(filter: 'all' | 'pending' | 'paid'): void {
    this.activeFilter.set(filter);
  }

  filteredChallans(): any[] {
    const filter = this.activeFilter();
    if (filter === 'all') return this.challans();
    return this.challans().filter(c => c.payment_status === filter);
  }

  loadPage(page: number): void {
    this.loadChallans(page);
  }

  payNow(challan: any): void {
    // Navigate to payment or show payment modal
  }
}
