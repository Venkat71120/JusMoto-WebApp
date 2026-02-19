import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-sub-category-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ConfirmModalComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Sub Categories</h1>
      <a routerLink="/admin/subcategory/add-new-subcategory" class="btn-primary">+ Add Sub Category</a>
    </div>

    <div class="filters-bar">
      <div class="search-box-wrap">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="text" class="search-box" placeholder="Search sub categories..." [(ngModel)]="search" (input)="onSearch()">
      </div>
      <select class="filter-select" [(ngModel)]="categoryFilter" (change)="loadSubCategories()">
        <option value="">All Categories</option>
        <option *ngFor="let cat of categories()" [value]="cat.id">{{ cat.name }}</option>
      </select>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Parent Category</th>
            <th>Slug</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let sub of subCategories(); let i = index">
            <td>{{ (pagination().page - 1) * pagination().limit + i + 1 }}</td>
            <td class="fw-600">{{ sub.name }}</td>
            <td>{{ sub.category?.name || '-' }}</td>
            <td class="text-muted">{{ sub.slug }}</td>
            <td>
              <button class="badge badge-clickable" [class.badge-green]="sub.status" [class.badge-red]="!sub.status" (click)="statusItem.set(sub)">
                {{ sub.status ? 'Active' : 'Inactive' }}
              </button>
            </td>
            <td>
              <div class="action-btns">
                <a [routerLink]="['/admin/subcategory/edit-subcategory', sub.id]" class="action-btn" title="Edit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </a>
                <button class="action-btn" (click)="toggleStatus(sub)" title="Toggle Status">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.49 8.49l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.49-8.49l2.83-2.83"/></svg>
                </button>
                <button class="action-btn" (click)="deleteSubCategory(sub)" title="Delete">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
            </td>
          </tr>
          <tr *ngIf="subCategories().length === 0 && !loading()">
            <td colspan="6" class="empty-state">No sub categories found</td>
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
      [open]="!!deletingItem()"
      title="Delete Sub Category"
      [message]="'Delete &quot;' + (deletingItem()?.name || '') + '&quot;? This cannot be undone.'"
      confirmText="Delete"
      type="danger"
      (confirmed)="confirmDelete()"
      (cancelled)="deletingItem.set(null)">
    </app-confirm-modal>

    <app-confirm-modal
      [open]="!!statusItem()"
      title="Change Status"
      [message]="'Change status of &quot;' + (statusItem()?.name || '') + '&quot; to ' + (statusItem()?.status ? 'Inactive' : 'Active') + '?'"
      confirmText="Change Status"
      type="warning"
      (confirmed)="confirmToggleStatus()"
      (cancelled)="statusItem.set(null)">
    </app-confirm-modal>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px; }
    .btn-primary:hover { background:#b11218; }
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
    .text-muted { color:#94a3b8; }
    .badge { padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; }
    .badge-clickable { cursor:pointer; transition:opacity 0.2s; border:none; }
    .badge-clickable:hover { opacity:0.8; }
    .badge-green { background:#dcfce7; color:#16a34a; }
    .badge-red { background:#fee2e2; color:#dc2626; }
    .action-btns { display:flex; gap:6px; }
    .action-btn { background:none; border:none; cursor:pointer; padding:6px; border-radius:6px; color:#64748b; display:inline-flex; text-decoration:none; }
    .action-btn:hover { background:#fee2e2; color:#e31b23; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }
    .pagination { display:flex; gap:8px; justify-content:center; align-items:center; margin-top:24px; }
    .page-btn { padding:8px 14px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; cursor:pointer; font-weight:500; color:#334155; }
    .page-btn:hover:not(:disabled) { border-color:#e31b23; color:#e31b23; }
    .page-btn:disabled { opacity:0.5; cursor:not-allowed; }
    .page-info { font-size:14px; color:#64748b; }
  `]
})
export class SubCategoryListComponent implements OnInit {
  subCategories = signal<any[]>([]);
  categories = signal<any[]>([]);
  loading = signal(false);
  search = '';
  categoryFilter = '';
  pagination = signal<any>({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  deletingItem = signal<any>(null);
  statusItem = signal<any>(null);
  private searchTimeout: any;

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() {
    this.loadCategories();
    this.loadSubCategories();
  }

  loadCategories() {
    this.http.get<any>(`${environment.apiUrl}/admin/categories`).subscribe({
      next: (res) => this.categories.set(res.data || [])
    });
  }

  loadSubCategories(page = 1) {
    this.loading.set(true);
    const params: any = { page, limit: 15 };
    if (this.search) params.search = this.search;
    if (this.categoryFilter) params.category_id = this.categoryFilter;
    this.http.get<any>(`${environment.apiUrl}/admin/sub-categories`, { params }).subscribe({
      next: (res) => { this.subCategories.set(res.data || []); this.pagination.set(res.pagination || {}); },
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadSubCategories(), 400);
  }

  goToPage(page: number) { this.loadSubCategories(page); }

  toggleStatus(sub: any) {
    this.statusItem.set(sub);
  }

  confirmToggleStatus() {
    const sub = this.statusItem();
    if (!sub) return;
    this.http.put<any>(`${environment.apiUrl}/admin/sub-categories/${sub.id}`, { status: sub.status ? 0 : 1 }).subscribe({
      next: () => { this.toast.success('Status updated successfully'); this.statusItem.set(null); this.loadSubCategories(this.pagination().page); },
      error: () => { this.toast.error('Failed to update status'); this.statusItem.set(null); }
    });
  }

  deleteSubCategory(sub: any) {
    this.deletingItem.set(sub);
  }

  confirmDelete() {
    const sub = this.deletingItem();
    if (!sub) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/sub-categories/${sub.id}`).subscribe({
      next: () => { this.toast.success('Sub category deleted successfully'); this.deletingItem.set(null); this.loadSubCategories(this.pagination().page); },
      error: () => { this.toast.error('Failed to delete sub category'); this.deletingItem.set(null); }
    });
  }
}
