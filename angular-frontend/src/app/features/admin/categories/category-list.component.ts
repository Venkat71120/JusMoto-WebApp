import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ConfirmModalComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Categories</h1>
      <a routerLink="/admin/category/add-new-category" class="btn-primary">+ Add Category</a>
    </div>

    <div class="filters-bar">
      <div class="search-box">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="text" placeholder="Search categories..." [(ngModel)]="search" (input)="onSearch()">
      </div>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let cat of categories(); let i = index">
            <td>{{ (pagination().page - 1) * pagination().limit + i + 1 }}</td>
            <td><img *ngIf="cat.image" [src]="cat.image" class="thumb" alt=""><span *ngIf="!cat.image" class="no-img">-</span></td>
            <td class="fw-600">{{ cat.name }}</td>
            <td>
              <button class="badge badge-clickable" [class.badge-active]="cat.status" [class.badge-inactive]="!cat.status" (click)="statusCategory.set(cat)">
                {{ cat.status ? 'Active' : 'Inactive' }}
              </button>
            </td>
            <td>
              <div class="action-btns">
                <a [routerLink]="['/admin/category/edit-category', cat.id]" class="btn-action btn-edit" title="Edit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </a>
                <button class="btn-action btn-delete" (click)="deleteCategory(cat)" title="Delete">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
            </td>
          </tr>
          <tr *ngIf="categories().length === 0 && !loading()">
            <td colspan="5" class="empty-state">No categories found</td>
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
      [open]="!!deletingCategory()"
      title="Delete Category"
      [message]="'Delete &quot;' + (deletingCategory()?.name || '') + '&quot;? This cannot be undone.'"
      confirmText="Delete"
      type="danger"
      (confirmed)="confirmDelete()"
      (cancelled)="deletingCategory.set(null)">
    </app-confirm-modal>

    <app-confirm-modal
      [open]="!!statusCategory()"
      title="Change Status"
      [message]="'Change status of &quot;' + (statusCategory()?.name || '') + '&quot; to ' + (statusCategory()?.status ? 'Inactive' : 'Active') + '?'"
      confirmText="Change Status"
      type="warning"
      (confirmed)="confirmToggleStatus()"
      (cancelled)="statusCategory.set(null)">
    </app-confirm-modal>
  `,
  styles: [`
    .page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .page-title { font-size: 24px; font-weight: 700; color: #1a1a2e; }
    .btn-primary { background: #e31b23; color: #fff; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; text-decoration: none; font-size: 14px; transition: background 0.2s; }
    .btn-primary:hover { background: #b11218; }
    .filters-bar { display: flex; gap: 12px; margin-bottom: 20px; }
    .search-box { display: flex; align-items: center; gap: 8px; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 0 14px; flex: 1; max-width: 400px; }
    .search-box input { border: none; outline: none; padding: 10px 0; width: 100%; font-size: 14px; }
    .table-container { position: relative; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
    .loading-overlay { position: absolute; inset: 0; background: rgba(255,255,255,0.7); display: flex; align-items: center; justify-content: center; z-index: 10; }
    .spinner { width: 36px; height: 36px; border: 3px solid #f3f4f6; border-top-color: #e31b23; border-radius: 50%; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .data-table { width: 100%; border-collapse: collapse; }
    .data-table th { background: #f8f9fa; padding: 12px 16px; text-align: left; font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
    .data-table td { padding: 12px 16px; border-top: 1px solid #f1f5f9; font-size: 14px; color: #334155; }
    .data-table tbody tr:hover { background: #fff5f5; }
    .thumb { width: 40px; height: 40px; border-radius: 8px; object-fit: cover; }
    .no-img { color: #94a3b8; }
    .fw-600 { font-weight: 600; }
    .text-muted { color: #94a3b8; }
    .badge { display: inline-flex; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; border: none; }
    .badge-clickable { cursor: pointer; transition: opacity 0.2s; border: none; }
    .badge-clickable:hover { opacity: 0.8; }
    .badge-active { background: #dcfce7; color: #16a34a; }
    .badge-inactive { background: #fee2e2; color: #dc2626; }
    .action-btns { display: flex; gap: 6px; }
    .btn-action { padding: 6px; border: 1px solid #e5e7eb; border-radius: 6px; background: #fff; cursor: pointer; color: #64748b; transition: all 0.2s; display: inline-flex; align-items: center; justify-content: center; text-decoration: none; }
    .btn-edit:hover { color: #3b82f6; border-color: #3b82f6; }
    .btn-delete:hover { color: #ef4444; border-color: #ef4444; }
    .empty-state { text-align: center; padding: 40px !important; color: #94a3b8; }
    .pagination { display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 20px; }
    .page-btn { padding: 8px 16px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; cursor: pointer; font-weight: 500; color: #334155; }
    .page-btn:hover:not(:disabled) { border-color: #e31b23; color: #e31b23; }
    .page-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .page-info { font-size: 14px; color: #64748b; }
  `]
})
export class CategoryListComponent implements OnInit {
  categories = signal<any[]>([]);
  loading = signal(false);
  search = '';
  pagination = signal<any>({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  deletingCategory = signal<any>(null);
  statusCategory = signal<any>(null);
  private searchTimeout: any;

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() { this.loadCategories(); }

  loadCategories(page = 1) {
    this.loading.set(true);
    const params: any = { page, limit: 15 };
    if (this.search) params.search = this.search;
    this.http.get<any>(`${environment.apiUrl}/admin/categories`, { params }).subscribe({
      next: (res) => { this.categories.set(res.data || []); this.pagination.set(res.pagination || {}); },
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadCategories(), 400);
  }

  goToPage(page: number) { this.loadCategories(page); }

  deleteCategory(cat: any) {
    this.deletingCategory.set(cat);
  }

  confirmDelete() {
    const cat = this.deletingCategory();
    if (!cat) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/categories/${cat.id}`).subscribe({
      next: () => { this.toast.success('Category deleted successfully'); this.deletingCategory.set(null); this.loadCategories(this.pagination().page); },
      error: () => { this.toast.error('Failed to delete category'); this.deletingCategory.set(null); }
    });
  }

  confirmToggleStatus() {
    const cat = this.statusCategory();
    if (!cat) return;
    const newStatus = cat.status ? 0 : 1;
    this.http.put<any>(`${environment.apiUrl}/admin/categories/${cat.id}`, { status: newStatus }).subscribe({
      next: () => { cat.status = newStatus; this.toast.success('Category status updated'); this.statusCategory.set(null); },
      error: () => { this.toast.error('Failed to update status'); this.statusCategory.set(null); }
    });
  }
}
