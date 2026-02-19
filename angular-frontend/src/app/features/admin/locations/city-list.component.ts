import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ConfirmModalComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Cities</h1>
      <button class="btn-fetch" (click)="showImport = true" [disabled]="fetching()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9"/></svg>
        Fetch Cities from API
      </button>
    </div>

    <div class="filters-bar">
      <select class="filter-select" [(ngModel)]="stateFilter" (change)="loadItems()">
        <option value="">All States</option>
        <option *ngFor="let s of states()" [value]="s.id">{{ s.state }}</option>
      </select>
    </div>

    <!-- Import Cities Modal -->
    <div class="modal-overlay" *ngIf="showImport" (click)="showImport = false">
      <div class="modal-card" (click)="$event.stopPropagation()">
        <h3>Import Cities from API</h3>
        <p class="modal-desc">Select a state to fetch all its cities from the CountriesNow API.</p>
        <div class="form-group">
          <label>State *</label>
          <select [(ngModel)]="importStateId" class="form-control">
            <option value="">Select State</option>
            <option *ngFor="let s of states()" [value]="s.id">{{ s.state }}</option>
          </select>
        </div>
        <div class="modal-actions">
          <button class="btn-cancel" (click)="showImport = false">Cancel</button>
          <button class="btn-primary" (click)="fetchCitiesFromApi()" [disabled]="!importStateId || fetching()">
            {{ fetching() ? 'Importing...' : 'Import Cities' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Add/Edit Modal -->
    <div class="modal-overlay" *ngIf="showForm" (click)="showForm = false">
      <div class="modal-card" (click)="$event.stopPropagation()">
        <h3>{{ editItem ? 'Edit City' : 'Add City' }}</h3>
        <div class="form-group">
          <label>City Name *</label>
          <input type="text" [(ngModel)]="formName" class="form-control" placeholder="City name">
        </div>
        <div class="form-group">
          <label>State *</label>
          <select [(ngModel)]="formStateId" class="form-control">
            <option value="">Select State</option>
            <option *ngFor="let s of states()" [value]="s.id">{{ s.state }}</option>
          </select>
        </div>
        <div class="form-group">
          <label>Timezone</label>
          <input type="text" [(ngModel)]="formTimezone" class="form-control" placeholder="e.g. Asia/Kolkata">
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
        <button class="btn-primary btn-sm" (click)="openAdd()">+ Add City</button>
      </div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>City Name</th>
            <th>State</th>
            <th>Timezone</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of items(); let i = index">
            <td>{{ i + 1 }}</td>
            <td class="fw-600">{{ item.city }}</td>
            <td>{{ item.state?.state || '-' }}</td>
            <td class="text-muted">{{ item.timezone || '-' }}</td>
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
            <td colspan="6" class="empty-state">No cities found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <app-confirm-modal
      [open]="!!deletingItem()"
      title="Delete City"
      [message]="'Delete &quot;' + (deletingItem()?.city || '') + '&quot;? This cannot be undone.'"
      confirmText="Delete"
      type="danger"
      (confirmed)="confirmDelete()"
      (cancelled)="deletingItem.set(null)">
    </app-confirm-modal>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .btn-fetch { display:flex; align-items:center; gap:8px; padding:10px 20px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; cursor:pointer; font-weight:600; color:#334155; font-size:14px; }
    .btn-fetch:hover:not(:disabled) { border-color:#e31b23; color:#e31b23; }
    .btn-fetch:disabled { opacity:0.6; cursor:not-allowed; }
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
    .text-muted { color:#94a3b8; }
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
    .modal-desc { color:#64748b; font-size:14px; margin:0 0 20px; }
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
export class CityListComponent implements OnInit {
  items = signal<any[]>([]);
  states = signal<any[]>([]);
  loading = signal(false);
  saving = signal(false);
  fetching = signal(false);
  deletingItem = signal<any>(null);
  stateFilter = '';
  showForm = false;
  showImport = false;
  importStateId = '';
  editItem: any = null;
  formName = '';
  formStateId = '';
  formTimezone = '';
  formStatus = true;
  formError = '';

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() {
    this.loadStates();
    this.loadItems();
  }

  loadStates() {
    this.http.get<any>(`${environment.apiUrl}/admin/states`).subscribe({
      next: (res) => this.states.set(res.data || [])
    });
  }

  loadItems() {
    this.loading.set(true);
    const params: any = {};
    if (this.stateFilter) params.state_id = this.stateFilter;
    this.http.get<any>(`${environment.apiUrl}/admin/cities`, { params }).subscribe({
      next: (res) => this.items.set(res.data || []),
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  openAdd() {
    this.editItem = null;
    this.formName = '';
    this.formStateId = '';
    this.formTimezone = '';
    this.formStatus = true;
    this.formError = '';
    this.showForm = true;
  }

  startEdit(item: any) {
    this.editItem = item;
    this.formName = item.city;
    this.formStateId = item.state_id || '';
    this.formTimezone = item.timezone || '';
    this.formStatus = !!item.status;
    this.formError = '';
    this.showForm = true;
  }

  saveItem() {
    if (!this.formName.trim() || !this.formStateId) { this.formError = 'Name and State are required'; return; }
    this.saving.set(true);
    this.formError = '';
    const data = { city: this.formName, state_id: this.formStateId, timezone: this.formTimezone, status: this.formStatus ? 1 : 0 };
    const req = this.editItem
      ? this.http.put<any>(`${environment.apiUrl}/admin/cities/${this.editItem.id}`, data)
      : this.http.post<any>(`${environment.apiUrl}/admin/cities`, data);
    req.subscribe({
      next: () => { this.showForm = false; this.toast.success(this.editItem ? 'City updated successfully' : 'City added successfully'); this.loadItems(); },
      error: (err) => { this.formError = err.error?.error || 'Something went wrong'; this.toast.error(this.formError); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }

  fetchCitiesFromApi() {
    if (!this.importStateId) return;
    this.fetching.set(true);
    this.http.post<any>(`${environment.apiUrl}/admin/locations/import-cities`, { state_id: this.importStateId }).subscribe({
      next: (res) => { this.toast.success(res.message || 'Cities imported!'); this.showImport = false; this.loadItems(); },
      error: (err) => { this.toast.error(err.error?.error || 'Failed to fetch cities'); },
      complete: () => this.fetching.set(false)
    });
  }

  deleteItem(item: any) {
    this.deletingItem.set(item);
  }

  confirmDelete() {
    const item = this.deletingItem();
    if (!item) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/cities/${item.id}`).subscribe({
      next: () => { this.toast.success('City deleted successfully'); this.deletingItem.set(null); this.loadItems(); },
      error: () => { this.toast.error('Failed to delete city'); this.deletingItem.set(null); }
    });
  }
}
