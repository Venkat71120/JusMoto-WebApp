import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-coupon-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">Coupons</h1>
      <a routerLink="/admin/coupons/create" class="btn-primary">+ Add Coupon</a>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Code</th>
            <th>Type</th>
            <th>Discount</th>
            <th>Expiry</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let c of coupons(); let i = index">
            <td>{{ i + 1 }}</td>
            <td>{{ c.title || '-' }}</td>
            <td><span class="coupon-code">{{ c.code }}</span></td>
            <td><span class="badge" [class.badge-info]="c.discount_type === 'percentage'" [class.badge-purple]="c.discount_type !== 'percentage'">{{ c.discount_type || 'percentage' }}</span></td>
            <td class="fw-600">{{ c.discount_type === 'percentage' ? c.discount + '%' : '&#8377;' + c.discount }}</td>
            <td>
              <span *ngIf="c.expire_date" [class.text-red]="isExpired(c.expire_date)">{{ c.expire_date | date:'mediumDate' }}</span>
              <span *ngIf="!c.expire_date" class="text-muted">No expiry</span>
            </td>
            <td>
              <span class="badge" [class.badge-active]="c.status" [class.badge-inactive]="!c.status">
                {{ c.status ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td>
              <div class="action-btns">
                <a [routerLink]="['/admin/coupons', c.id, 'edit']" class="btn-action btn-edit" title="Edit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </a>
                <button class="btn-action btn-delete" (click)="deleteCoupon(c)" title="Delete">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
            </td>
          </tr>
          <tr *ngIf="coupons().length === 0 && !loading()">
            <td colspan="8" class="empty-state">No coupons found</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .page-title { font-size: 24px; font-weight: 700; color: #1a1a2e; }
    .btn-primary { background: #e31b23; color: #fff; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; text-decoration: none; font-size: 14px; }
    .btn-primary:hover { background: #b11218; }
    .table-container { position: relative; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
    .loading-overlay { position: absolute; inset: 0; background: rgba(255,255,255,0.7); display: flex; align-items: center; justify-content: center; z-index: 10; }
    .spinner { width: 36px; height: 36px; border: 3px solid #f3f4f6; border-top-color: #e31b23; border-radius: 50%; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .data-table { width: 100%; border-collapse: collapse; }
    .data-table th { background: #f8f9fa; padding: 12px 16px; text-align: left; font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; white-space: nowrap; }
    .data-table td { padding: 12px 16px; border-top: 1px solid #f1f5f9; font-size: 14px; color: #334155; }
    .data-table tbody tr:hover { background: #fff5f5; }
    .coupon-code { background: #f1f5f9; padding: 4px 10px; border-radius: 4px; font-family: monospace; font-weight: 600; font-size: 13px; letter-spacing: 0.05em; }
    .fw-600 { font-weight: 600; }
    .text-muted { color: #94a3b8; }
    .text-red { color: #dc2626; }
    .badge { display: inline-flex; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; }
    .badge-active { background: #dcfce7; color: #16a34a; }
    .badge-inactive { background: #fee2e2; color: #dc2626; }
    .badge-info { background: #dbeafe; color: #2563eb; }
    .badge-purple { background: #f3e8ff; color: #7c3aed; }
    .action-btns { display: flex; gap: 6px; }
    .btn-action { padding: 6px; border: 1px solid #e5e7eb; border-radius: 6px; background: #fff; cursor: pointer; color: #64748b; transition: all 0.2s; display: inline-flex; align-items: center; justify-content: center; text-decoration: none; }
    .btn-edit:hover { color: #3b82f6; border-color: #3b82f6; }
    .btn-delete:hover { color: #ef4444; border-color: #ef4444; }
    .empty-state { text-align: center; padding: 40px !important; color: #94a3b8; }
    @media (max-width: 768px) { .table-container { overflow-x: auto; } .data-table { min-width: 700px; } }
  `]
})
export class CouponListComponent implements OnInit {
  coupons = signal<any[]>([]);
  loading = signal(false);

  constructor(private http: HttpClient) {}

  ngOnInit() { this.loadCoupons(); }

  loadCoupons() {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/coupons`).subscribe({
      next: (res) => this.coupons.set(res.data || []),
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  isExpired(date: string): boolean {
    return new Date(date) < new Date();
  }

  deleteCoupon(c: any) {
    if (!confirm(`Delete coupon "${c.code}"?`)) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/coupons/${c.id}`).subscribe({
      next: () => this.loadCoupons()
    });
  }
}
