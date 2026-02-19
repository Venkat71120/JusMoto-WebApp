import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MediaPickerComponent } from '../../../shared/components/media-picker/media-picker.component';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MediaPickerComponent, ConfirmModalComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Brands</h1>
      <button class="btn-primary" (click)="showForm = true; editBrand = null; formName = ''; formImage = ''">+ Add Brand</button>
    </div>

    <!-- Inline Form Modal -->
    <div class="modal-overlay" *ngIf="showForm" (click)="showForm = false">
      <div class="modal-card" (click)="$event.stopPropagation()">
        <h3>{{ editBrand ? 'Edit Brand' : 'Add Brand' }}</h3>
        <div class="form-group">
          <label>Name *</label>
          <input type="text" [(ngModel)]="formName" placeholder="Brand name">
        </div>
        <div class="form-group">
          <app-media-picker [value]="formImage" [label]="'Brand Logo'" (valueChange)="formImage = $event"></app-media-picker>
        </div>
        <div *ngIf="formError" class="error-msg">{{ formError }}</div>
        <div class="modal-actions">
          <button class="btn-cancel" (click)="showForm = false">Cancel</button>
          <button class="btn-primary" (click)="saveBrand()" [disabled]="saving()">
            {{ saving() ? 'Saving...' : (editBrand ? 'Update' : 'Create') }}
          </button>
        </div>
      </div>
    </div>

    <div class="filters-bar">
      <div class="search-box">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="text" placeholder="Search brands..." [(ngModel)]="search" (input)="onSearch()">
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let brand of brands(); let i = index">
            <td>{{ i + 1 }}</td>
            <td><img *ngIf="brand.image" [src]="brand.image" class="thumb" alt=""><span *ngIf="!brand.image" class="no-img">-</span></td>
            <td class="fw-600">{{ brand.name }}</td>
            <td>
              <div class="action-btns">
                <button class="btn-action btn-edit" (click)="startEdit(brand)" title="Edit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button class="btn-action btn-delete" (click)="deleteBrand(brand)" title="Delete">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
            </td>
          </tr>
          <tr *ngIf="brands().length === 0 && !loading()">
            <td colspan="4" class="empty-state">No brands found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <app-confirm-modal
      [open]="!!deletingBrand()"
      title="Delete Brand"
      [message]="'Delete &quot;' + (deletingBrand()?.name || '') + '&quot;? This cannot be undone.'"
      confirmText="Delete"
      type="danger"
      (confirmed)="confirmDelete()"
      (cancelled)="deletingBrand.set(null)">
    </app-confirm-modal>
  `,
  styles: [`
    .page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .page-title { font-size: 24px; font-weight: 700; color: #1a1a2e; }
    .btn-primary { background: #e31b23; color: #fff; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; }
    .btn-primary:hover { background: #b11218; }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 200; display: flex; align-items: center; justify-content: center; }
    .modal-card { background: #fff; border-radius: 12px; padding: 32px; width: 100%; max-width: 440px; box-shadow: 0 20px 60px rgba(0,0,0,0.2); }
    .modal-card h3 { font-size: 20px; font-weight: 700; color: #1a1a2e; margin: 0 0 20px; }
    .form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
    .form-group label { font-size: 13px; font-weight: 600; color: #374151; }
    .form-group input { padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; }
    .form-group input:focus { outline: none; border-color: #e31b23; }
    .error-msg { color: #dc2626; background: #fee2e2; padding: 8px 12px; border-radius: 8px; margin-bottom: 16px; font-size: 13px; }
    .modal-actions { display: flex; justify-content: flex-end; gap: 12px; }
    .btn-cancel { padding: 10px 24px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; color: #374151; font-weight: 600; cursor: pointer; font-size: 14px; }
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
    .action-btns { display: flex; gap: 6px; }
    .btn-action { padding: 6px; border: 1px solid #e5e7eb; border-radius: 6px; background: #fff; cursor: pointer; color: #64748b; transition: all 0.2s; display: inline-flex; }
    .btn-edit:hover { color: #3b82f6; border-color: #3b82f6; }
    .btn-delete:hover { color: #ef4444; border-color: #ef4444; }
    .empty-state { text-align: center; padding: 40px !important; color: #94a3b8; }
  `]
})
export class BrandListComponent implements OnInit {
  brands = signal<any[]>([]);
  loading = signal(false);
  saving = signal(false);
  deletingBrand = signal<any>(null);
  search = '';
  showForm = false;
  editBrand: any = null;
  formName = '';
  formImage = '';
  formError = '';
  private searchTimeout: any;

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() { this.loadBrands(); }

  loadBrands() {
    this.loading.set(true);
    const params: any = {};
    if (this.search) params.search = this.search;
    this.http.get<any>(`${environment.apiUrl}/admin/brands`, { params }).subscribe({
      next: (res) => this.brands.set(res.data || []),
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadBrands(), 400);
  }

  startEdit(brand: any) {
    this.editBrand = brand;
    this.formName = brand.name;
    this.formImage = brand.image || '';
    this.formError = '';
    this.showForm = true;
  }

  saveBrand() {
    if (!this.formName.trim()) { this.formError = 'Name is required'; return; }
    this.saving.set(true);
    this.formError = '';
    const data = { name: this.formName, image: this.formImage || null };
    const req = this.editBrand
      ? this.http.put<any>(`${environment.apiUrl}/admin/brands/${this.editBrand.id}`, data)
      : this.http.post<any>(`${environment.apiUrl}/admin/brands`, data);
    req.subscribe({
      next: () => { this.toast.success('Brand saved successfully'); this.showForm = false; this.loadBrands(); },
      error: (err) => { this.toast.error(err.error?.error || 'Something went wrong'); this.formError = err.error?.error || 'Something went wrong'; this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }

  deleteBrand(brand: any) {
    this.deletingBrand.set(brand);
  }

  confirmDelete() {
    const brand = this.deletingBrand();
    if (!brand) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/brands/${brand.id}`).subscribe({
      next: () => { this.toast.success('Brand deleted successfully'); this.deletingBrand.set(null); this.loadBrands(); },
      error: () => { this.toast.error('Failed to delete brand'); this.deletingBrand.set(null); }
    });
  }
}
