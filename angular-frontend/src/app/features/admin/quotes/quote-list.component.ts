import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ConfirmModalComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Quote Requests</h1>
    </div>

    <div class="filters-bar">
      <div class="search-box-wrap">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="text" class="search-box" placeholder="Search quotes..." [(ngModel)]="search" (input)="onSearch()">
      </div>
      <select class="filter-select" [(ngModel)]="statusFilter" (change)="loadQuotes()">
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="reviewed">Reviewed</option>
        <option value="quoted">Quoted</option>
        <option value="closed">Closed</option>
      </select>
      <select class="filter-select" [(ngModel)]="typeFilter" (change)="loadQuotes()">
        <option value="">All Types</option>
        <option value="service">Service</option>
        <option value="product">Product</option>
      </select>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Type</th>
            <th>Title</th>
            <th>Status</th>
            <th>Quoted Price</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let quote of quotes(); let i = index">
            <td>{{ (pagination().page - 1) * pagination().limit + i + 1 }}</td>
            <td>{{ quote.user?.first_name ? (quote.user.first_name + ' ' + (quote.user.last_name || '')) : '-' }}</td>
            <td>
              <span class="badge"
                [class.badge-blue]="quote.type === 'service'"
                [class.badge-purple]="quote.type === 'product'">
                {{ quote.type }}
              </span>
            </td>
            <td class="fw-600">{{ quote.title }}</td>
            <td>
              <span class="badge"
                [class.badge-yellow]="quote.status === 'pending'"
                [class.badge-blue]="quote.status === 'reviewed'"
                [class.badge-green]="quote.status === 'quoted'"
                [class.badge-gray]="quote.status === 'closed'">
                {{ quote.status }}
              </span>
            </td>
            <td>{{ quote.quoted_price ? ('₹' + quote.quoted_price) : '-' }}</td>
            <td>{{ quote.created_at | date:'mediumDate' }}</td>
            <td class="actions-cell">
              <a [routerLink]="['/admin/quotes/details', quote.id]" class="action-btn" title="View / Edit">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </a>
              <button class="action-btn action-btn-danger" title="Delete" (click)="confirmDelete(quote)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
              </button>
            </td>
          </tr>
          <tr *ngIf="quotes().length === 0 && !loading()">
            <td colspan="8" class="empty-state">No quote requests found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination" *ngIf="pagination().totalPages > 1">
      <button class="page-btn" [disabled]="!pagination().hasPrevPage" (click)="goToPage(pagination().page - 1)">&laquo; Prev</button>
      <span class="page-info">Page {{ pagination().page }} of {{ pagination().totalPages }}</span>
      <button class="page-btn" [disabled]="!pagination().hasNextPage" (click)="goToPage(pagination().page + 1)">Next &raquo;</button>
    </div>

    <app-confirm-modal
      *ngIf="showDeleteModal()"
      type="danger"
      title="Delete Quote Request"
      [message]="'Are you sure you want to delete the quote request: \\'' + deleteTarget()?.title + '\\'?'"
      confirmText="Delete"
      (confirmed)="deleteQuote()"
      (cancelled)="showDeleteModal.set(false)">
    </app-confirm-modal>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .filters-bar { display:flex; gap:12px; margin-bottom:20px; flex-wrap:wrap; }
    .search-box-wrap { display:flex; align-items:center; gap:8px; background:#fff; border:1px solid #e5e7eb; border-radius:8px; padding:0 14px; flex:1; max-width:400px; }
    .search-box { padding:10px 0; border:none; outline:none; font-size:14px; width:100%; }
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
    .badge { padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; text-transform:capitalize; }
    .badge-green { background:#dcfce7; color:#16a34a; }
    .badge-red { background:#fee2e2; color:#dc2626; }
    .badge-yellow { background:#fef9c3; color:#a16207; }
    .badge-blue { background:#dbeafe; color:#2563eb; }
    .badge-gray { background:#f3f4f6; color:#6b7280; }
    .badge-purple { background:#f3e8ff; color:#7c3aed; }
    .actions-cell { display:flex; gap:4px; }
    .action-btn { background:none; border:none; cursor:pointer; padding:6px; border-radius:6px; color:#64748b; display:inline-flex; text-decoration:none; }
    .action-btn:hover { background:#fee2e2; color:#e31b23; }
    .action-btn-danger:hover { background:#fee2e2; color:#dc2626; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }
    .pagination { display:flex; gap:8px; justify-content:center; align-items:center; margin-top:24px; }
    .page-btn { padding:8px 14px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; cursor:pointer; font-weight:500; color:#334155; }
    .page-btn:hover:not(:disabled) { border-color:#e31b23; color:#e31b23; }
    .page-btn:disabled { opacity:0.5; cursor:not-allowed; }
    .page-info { font-size:14px; color:#64748b; }
  `]
})
export class QuoteListComponent implements OnInit {
  quotes = signal<any[]>([]);
  loading = signal(false);
  search = '';
  statusFilter = '';
  typeFilter = '';
  pagination = signal<any>({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  showDeleteModal = signal(false);
  deleteTarget = signal<any>(null);
  private searchTimeout: any;

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() { this.loadQuotes(); }

  loadQuotes(page = 1) {
    this.loading.set(true);
    const params: any = { page, limit: 15 };
    if (this.search) params.search = this.search;
    if (this.statusFilter) params.status = this.statusFilter;
    if (this.typeFilter) params.type = this.typeFilter;
    this.http.get<any>(`${environment.apiUrl}/quotes/admin/all`, { params }).subscribe({
      next: (res) => { this.quotes.set(res.data || []); this.pagination.set(res.pagination || {}); },
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadQuotes(), 400);
  }

  goToPage(page: number) { this.loadQuotes(page); }

  confirmDelete(quote: any) {
    this.deleteTarget.set(quote);
    this.showDeleteModal.set(true);
  }

  deleteQuote() {
    const target = this.deleteTarget();
    if (!target) return;
    this.http.delete<any>(`${environment.apiUrl}/quotes/admin/${target.id}`).subscribe({
      next: () => {
        this.toast.success('Quote request deleted');
        this.showDeleteModal.set(false);
        this.loadQuotes(this.pagination().page);
      },
      error: () => {
        this.toast.error('Failed to delete quote request');
        this.showDeleteModal.set(false);
      }
    });
  }
}
