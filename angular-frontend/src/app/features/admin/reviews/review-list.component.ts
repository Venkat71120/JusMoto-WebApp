import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">Reviews</h1>
    </div>

    <div class="filters-bar">
      <select class="filter-select" [(ngModel)]="statusFilter" (change)="loadReviews()">
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Reviewer</th>
            <th>Service</th>
            <th>Rating</th>
            <th>Message</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let review of reviews(); let i = index">
            <td>{{ (pagination().page - 1) * pagination().limit + i + 1 }}</td>
            <td class="fw-600">{{ review.user?.name || review.reviewer_name || '-' }}</td>
            <td>{{ review.service?.name || review.service_name || '-' }}</td>
            <td>
              <span class="stars">
                <span *ngFor="let s of [1,2,3,4,5]" [class.star-filled]="s <= review.rating" [class.star-empty]="s > review.rating">&#9733;</span>
              </span>
            </td>
            <td class="msg-cell">{{ review.message?.length > 60 ? (review.message | slice:0:60) + '...' : review.message }}</td>
            <td>
              <span class="badge"
                [class.badge-yellow]="review.status === 'pending'"
                [class.badge-green]="review.status === 'approved'"
                [class.badge-red]="review.status === 'rejected'">
                {{ review.status }}
              </span>
            </td>
            <td>{{ review.created_at | date:'mediumDate' }}</td>
            <td>
              <div class="action-btns">
                <button *ngIf="review.status !== 'approved'" class="action-btn btn-approve" (click)="changeStatus(review, 'approved')" title="Approve">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                </button>
                <button *ngIf="review.status !== 'rejected'" class="action-btn btn-reject" (click)="changeStatus(review, 'rejected')" title="Reject">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
                <button class="action-btn" (click)="deleteReview(review)" title="Delete">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
            </td>
          </tr>
          <tr *ngIf="reviews().length === 0 && !loading()">
            <td colspan="8" class="empty-state">No reviews found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination" *ngIf="pagination().totalPages > 1">
      <button class="page-btn" [disabled]="!pagination().hasPrevPage" (click)="goToPage(pagination().page - 1)">&laquo; Prev</button>
      <span class="page-info">Page {{ pagination().page }} of {{ pagination().totalPages }}</span>
      <button class="page-btn" [disabled]="!pagination().hasNextPage" (click)="goToPage(pagination().page + 1)">Next &raquo;</button>
    </div>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .filters-bar { display:flex; gap:12px; margin-bottom:20px; flex-wrap:wrap; }
    .filter-select { padding:10px 16px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; background:#fff; }
    .table-container { position:relative; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .loading-overlay { position:absolute; inset:0; background:rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:center; z-index:10; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .data-table { width:100%; border-collapse:collapse; }
    .data-table th { padding:12px 16px; text-align:left; font-weight:600; color:#64748b; font-size:12px; text-transform:uppercase; background:#f8f9fa; border-bottom:1px solid #e5e7eb; }
    .data-table td { padding:12px 16px; font-size:14px; color:#334155; border-bottom:1px solid #f1f5f9; }
    .data-table tr:hover { background:#fff5f5; }
    .fw-600 { font-weight:600; }
    .msg-cell { max-width:200px; }
    .stars { font-size:16px; }
    .star-filled { color:#f59e0b; }
    .star-empty { color:#d1d5db; }
    .badge { padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; text-transform:capitalize; }
    .badge-green { background:#dcfce7; color:#16a34a; }
    .badge-red { background:#fee2e2; color:#dc2626; }
    .badge-yellow { background:#fef9c3; color:#a16207; }
    .action-btns { display:flex; gap:6px; }
    .action-btn { background:none; border:none; cursor:pointer; padding:6px; border-radius:6px; color:#64748b; display:inline-flex; }
    .action-btn:hover { background:#fee2e2; color:#e31b23; }
    .btn-approve:hover { background:#dcfce7; color:#16a34a; }
    .btn-reject:hover { background:#fee2e2; color:#dc2626; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }
    .pagination { display:flex; gap:8px; justify-content:center; align-items:center; margin-top:24px; }
    .page-btn { padding:8px 14px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; cursor:pointer; font-weight:500; color:#334155; }
    .page-btn:hover:not(:disabled) { border-color:#e31b23; color:#e31b23; }
    .page-btn:disabled { opacity:0.5; cursor:not-allowed; }
    .page-info { font-size:14px; color:#64748b; }
  `]
})
export class ReviewListComponent implements OnInit {
  reviews = signal<any[]>([]);
  loading = signal(false);
  statusFilter = '';
  pagination = signal<any>({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });

  constructor(private http: HttpClient) {}

  ngOnInit() { this.loadReviews(); }

  loadReviews(page = 1) {
    this.loading.set(true);
    const params: any = { page, limit: 15 };
    if (this.statusFilter) params.status = this.statusFilter;
    this.http.get<any>(`${environment.apiUrl}/admin/reviews`, { params }).subscribe({
      next: (res) => { this.reviews.set(res.data || []); this.pagination.set(res.pagination || {}); },
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  goToPage(page: number) { this.loadReviews(page); }

  changeStatus(review: any, status: string) {
    this.http.put<any>(`${environment.apiUrl}/admin/reviews/${review.id}`, { status }).subscribe({
      next: () => this.loadReviews(this.pagination().page)
    });
  }

  deleteReview(review: any) {
    if (!confirm('Are you sure?')) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/reviews/${review.id}`).subscribe({
      next: () => this.loadReviews(this.pagination().page)
    });
  }
}
