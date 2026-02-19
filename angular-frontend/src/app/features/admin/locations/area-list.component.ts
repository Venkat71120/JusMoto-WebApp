import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-area-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ConfirmModalComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Areas</h1>
    </div>

    <div class="filters-bar">
      <select class="filter-select" [(ngModel)]="cityFilter" (change)="loadItems()">
        <option value="">All Cities</option>
        <option *ngFor="let c of cities()" [value]="c.id">{{ c.name }}</option>
      </select>
    </div>

    <!-- Add/Edit Modal -->
    <div class="modal-overlay" *ngIf="showForm" (click)="showForm = false">
      <div class="modal-card" (click)="$event.stopPropagation()">
        <h3>{{ editItem ? 'Edit Area' : 'Add Area' }}</h3>
        <div class="form-group">
          <label>Area Name *</label>
          <input type="text" [(ngModel)]="formName" class="form-control" placeholder="Area name">
        </div>
        <div class="form-group">
          <label>City *</label>
          <select [(ngModel)]="formCityId" class="form-control">
            <option value="">Select City</option>
            <option *ngFor="let c of cities()" [value]="c.id">{{ c.name }}</option>
          </select>
        </div>
        <div class="form-group">
          <label class="toggle-label"><input type="checkbox" [(ngModel)]="formStatus"> Active</label>
        </div>
        <div *ngIf="formError" class="error-msg">{{ formError }}</div>
        <div class="modal-actions">
          <button class="btn-cancel" (click)="showForm = false">Cancel</button>
          <button class="btn-primary" (click)="saveItem()" [disabled]="saving()">
            {{ saving() ? 'Saving...' : (editItem ? 'Update' : 'Create') }}
          </button>
        </div>
      </div>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <div class="table-toolbar">
        <button class="btn-primary btn-sm" (click)="openAdd()">+ Add Area</button>
      </div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Area Name</th>
            <th>City</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of items(); let i = index">
            <td>{{ i + 1 }}</td>
            <td class="fw-600">{{ item.name }}</td>
            <td>{{ item.city?.name || '-' }}</td>
            <td>
              <span class="badge" [class.badge-green]="item.status" [class.badge-red]="!item.status">
                {{ item.status ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td>
              <div class="action-btns">
                <button class="action-btn" (click)="startEdit(item)" title="Edit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button class="action-btn" (click)="deleteItem(item)" title="Delete">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
            </td>
          </tr>
          <tr *ngIf="items().length === 0 && !loading()">
            <td colspan="5" class="empty-state">No areas found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <app-confirm-modal
      [open]="!!deletingItem()"
      title="Delete Area"
      [message]="'Delete &quot;' + (deletingItem()?.name || '') + '&quot;? This cannot be undone.'"
      confirmText="Delete"
      type="danger"
      (confirmed)="confirmDelete()"
      (cancelled)="deletingItem.set(null)">
    </app-confirm-modal>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .filters-bar { display:flex; gap:12px; margin-bottom:20px; flex-wrap:wrap; }
    .filter-select { padding:10px 16px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; background:#fff; }
    .table-container { position:relative; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .table-toolbar { padding:12px 16px; border-bottom:1px solid #f1f5f9; }
    .loading-overlay { position:absolute; inset:0; background:rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:center; z-index:10; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .data-table { width:100%; border-collapse:collapse; }
    .data-table th { padding:12px 16px; text-align:left; font-weight:600; color:#64748b; font-size:12px; text-transform:uppercase; background:#f8f9fa; border-bottom:1px solid #e5e7eb; }
    .data-table td { padding:12px 16px; font-size:14px; color:#334155; border-bottom:1px solid #f1f5f9; }
    .data-table tr:hover { background:#fff5f5; }
    .fw-600 { font-weight:600; }
    .badge { padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; }
    .badge-green { background:#dcfce7; color:#16a34a; }
    .badge-red { background:#fee2e2; color:#dc2626; }
    .action-btns { display:flex; gap:6px; }
    .action-btn { background:none; border:none; cursor:pointer; padding:6px; border-radius:6px; color:#64748b; display:inline-flex; }
    .action-btn:hover { background:#fee2e2; color:#e31b23; }
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer; }
    .btn-primary:hover { background:#b11218; }
    .btn-primary:disabled { opacity:0.6; cursor:not-allowed; }
    .btn-sm { padding:6px 14px; font-size:13px; }
    .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.4); z-index:200; display:flex; align-items:center; justify-content:center; }
    .modal-card { background:#fff; border-radius:12px; padding:32px; width:100%; max-width:440px; box-shadow:0 20px 60px rgba(0,0,0,0.2); }
    .modal-card h3 { font-size:20px; font-weight:700; color:#1a1a2e; margin:0 0 20px; }
    .form-group { margin-bottom:16px; }
    .form-group label { display:block; margin-bottom:6px; font-weight:600; color:#334155; font-size:14px; }
    .form-control { width:100%; padding:10px 14px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; box-sizing:border-box; }
    .form-control:focus { outline:none; border-color:#e31b23; }
    .toggle-label { display:flex; align-items:center; gap:6px; font-size:14px; cursor:pointer; }
    .toggle-label input { accent-color:#e31b23; width:16px; height:16px; }
    .error-msg { color:#dc2626; background:#fee2e2; padding:8px 12px; border-radius:8px; margin-bottom:16px; font-size:13px; }
    .modal-actions { display:flex; justify-content:flex-end; gap:12px; }
    .btn-cancel { padding:10px 24px; border:1px solid #d1d5db; border-radius:8px; background:#fff; color:#374151; font-weight:600; cursor:pointer; font-size:14px; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }
  `]
})
export class AreaListComponent implements OnInit {
  items = signal<any[]>([]);
  cities = signal<any[]>([]);
  loading = signal(false);
  saving = signal(false);
  deletingItem = signal<any>(null);
  cityFilter = '';
  showForm = false;
  editItem: any = null;
  formName = '';
  formCityId = '';
  formStatus = true;
  formError = '';

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() {
    this.loadCities();
    this.loadItems();
  }

  loadCities() {
    this.http.get<any>(`${environment.apiUrl}/admin/cities`).subscribe({
      next: (res) => this.cities.set(res.data || [])
    });
  }

  loadItems() {
    this.loading.set(true);
    const params: any = {};
    if (this.cityFilter) params.city_id = this.cityFilter;
    this.http.get<any>(`${environment.apiUrl}/admin/areas`, { params }).subscribe({
      next: (res) => this.items.set(res.data || []),
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  openAdd() {
    this.editItem = null;
    this.formName = '';
    this.formCityId = '';
    this.formStatus = true;
    this.formError = '';
    this.showForm = true;
  }

  startEdit(item: any) {
    this.editItem = item;
    this.formName = item.name;
    this.formCityId = item.city_id || '';
    this.formStatus = !!item.status;
    this.formError = '';
    this.showForm = true;
  }

  saveItem() {
    if (!this.formName.trim() || !this.formCityId) { this.formError = 'Name and City are required'; return; }
    this.saving.set(true);
    this.formError = '';
    const data = { name: this.formName, city_id: this.formCityId, status: this.formStatus ? 1 : 0 };
    const req = this.editItem
      ? this.http.put<any>(`${environment.apiUrl}/admin/areas/${this.editItem.id}`, data)
      : this.http.post<any>(`${environment.apiUrl}/admin/areas`, data);
    req.subscribe({
      next: () => { this.showForm = false; this.toast.success(this.editItem ? 'Area updated successfully' : 'Area added successfully'); this.loadItems(); },
      error: (err) => { this.formError = err.error?.error || 'Something went wrong'; this.toast.error(this.formError); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }

  deleteItem(item: any) {
    this.deletingItem.set(item);
  }

  confirmDelete() {
    const item = this.deletingItem();
    if (!item) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/areas/${item.id}`).subscribe({
      next: () => { this.toast.success('Area deleted successfully'); this.deletingItem.set(null); this.loadItems(); },
      error: () => { this.toast.error('Failed to delete area'); this.deletingItem.set(null); }
    });
  }
}
