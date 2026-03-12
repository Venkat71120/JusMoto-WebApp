import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { MediaPickerComponent } from '../../../shared/components/media-picker/media-picker.component';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-fuel-type-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MediaPickerComponent, ConfirmModalComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Fuel Types</h1>
      <button class="btn-primary" (click)="openAddModal()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Add Fuel Type
      </button>
    </div>

    <!-- Add/Edit Modal -->
    <div class="modal-overlay" *ngIf="showModal" (click)="showModal = false">
      <div class="modal-card" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>{{ editId ? 'Edit Fuel Type' : 'Add Fuel Type' }}</h3>
          <button class="modal-close" (click)="showModal = false">&times;</button>
        </div>
        <div class="form-group">
          <label>Name *</label>
          <input type="text" [(ngModel)]="formName" placeholder="Fuel type name" class="form-control" (keyup.enter)="saveItem()" />
        </div>
        <div class="form-group">
          <app-media-picker [value]="formImage" [label]="'Fuel Type Image'" (valueChange)="formImage = $event"></app-media-picker>
        </div>
        <div class="modal-actions">
          <button class="btn-cancel" (click)="showModal = false">Cancel</button>
          <button class="btn-primary" (click)="saveItem()" [disabled]="saving()">
            {{ saving() ? 'Saving...' : (editId ? 'Update' : 'Create') }}
          </button>
        </div>
      </div>
    </div>

    <div class="toolbar">
      <div class="search-box">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" placeholder="Search fuel types..." [(ngModel)]="searchTerm" (input)="filterItems()" class="search-input" />
      </div>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of filteredItems(); let i = index">
            <td>{{ i + 1 }}</td>
            <td class="fw-600">{{ item.name }}</td>
            <td>
              <div class="action-btns">
                <button class="action-btn" (click)="openEditModal(item)" title="Edit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button class="action-btn" (click)="deleteItem(item)" title="Delete">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
            </td>
          </tr>
          <tr *ngIf="filteredItems().length === 0 && !loading()">
            <td colspan="3" class="empty-state">No fuel types found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <app-confirm-modal
      [open]="!!deletingItem()"
      title="Delete Fuel Type"
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
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer; display:inline-flex; align-items:center; gap:6px; }
    .btn-primary:hover { background:#b11218; }
    .btn-primary:disabled { opacity:0.6; cursor:not-allowed; }
    .toolbar { display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:12px; }
    .search-box { display:flex; align-items:center; gap:8px; padding:10px 14px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; min-width:240px; }
    .search-box svg { color:#94a3b8; flex-shrink:0; }
    .search-input { border:none; outline:none; font-size:14px; color:#334155; width:100%; background:transparent; }
    .search-input::placeholder { color:#94a3b8; }
    .table-container { position:relative; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .loading-overlay { position:absolute; inset:0; background:rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:center; z-index:10; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .data-table { width:100%; border-collapse:collapse; }
    .data-table th { padding:12px 16px; text-align:left; font-weight:600; color:#64748b; font-size:12px; text-transform:uppercase; background:#f8f9fa; border-bottom:1px solid #e5e7eb; }
    .data-table td { padding:12px 16px; font-size:14px; color:#334155; border-bottom:1px solid #f1f5f9; }
    .data-table tr:hover { background:#fff5f5; }
    .fw-600 { font-weight:600; }
    .thumb { width:40px; height:40px; border-radius:8px; object-fit:cover; }
    .no-image { display:inline-flex; align-items:center; justify-content:center; width:40px; height:40px; border-radius:8px; background:#f1f5f9; color:#94a3b8; }
    .action-btns { display:flex; gap:6px; }
    .action-btn { background:none; border:none; cursor:pointer; padding:6px; border-radius:6px; color:#64748b; display:inline-flex; }
    .action-btn:hover { background:#fee2e2; color:#e31b23; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }

    /* Modal */
    .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.4); display:flex; align-items:center; justify-content:center; z-index:1000; }
    .modal-card { background:#fff; border-radius:12px; padding:28px; width:100%; max-width:480px; box-shadow:0 20px 60px rgba(0,0,0,0.15); }
    .modal-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; }
    .modal-header h3 { margin:0; font-size:18px; font-weight:700; color:#1a1a2e; }
    .modal-close { background:none; border:none; font-size:24px; color:#94a3b8; cursor:pointer; padding:0 4px; }
    .modal-close:hover { color:#e31b23; }
    .form-group { margin-bottom:18px; }
    .form-group label { display:block; margin-bottom:6px; font-weight:600; color:#334155; font-size:14px; }
    .form-control { width:100%; padding:10px 14px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; box-sizing:border-box; }
    .form-control:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.1); }
    .modal-actions { display:flex; justify-content:flex-end; gap:12px; margin-top:24px; padding-top:18px; border-top:1px solid #f1f5f9; }
    .btn-cancel { padding:10px 24px; border:1px solid #d1d5db; border-radius:8px; background:#fff; color:#374151; font-weight:600; cursor:pointer; font-size:14px; }
  `]
})
export class FuelTypeListComponent implements OnInit {
  items = signal<any[]>([]);
  filteredItems = signal<any[]>([]);
  loading = signal(false);
  saving = signal(false);
  deletingItem = signal<any>(null);

  searchTerm = '';
  showModal = false;
  editId: any = null;
  formName = '';
  formImage: any = '';

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() { this.loadItems(); }

  loadItems() {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/fuel-types`).subscribe({
      next: (res) => { this.items.set(res.data || []); this.filterItems(); },
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  filterItems() {
    const q = this.searchTerm.toLowerCase().trim();
    if (!q) {
      this.filteredItems.set(this.items());
    } else {
      this.filteredItems.set(this.items().filter(item => item.name?.toLowerCase().includes(q)));
    }
  }

  openAddModal() {
    this.editId = null;
    this.formName = '';
    this.formImage = '';
    this.showModal = true;
  }

  openEditModal(item: any) {
    this.editId = item.id;
    this.formName = item.name;
    this.formImage = item.image || '';
    this.showModal = true;
  }

  saveItem() {
    if (!this.formName.trim()) return;
    this.saving.set(true);
    const body = { name: this.formName, image: this.formImage || null };

    const req = this.editId
      ? this.http.put<any>(`${environment.apiUrl}/admin/fuel-types/${this.editId}`, body)
      : this.http.post<any>(`${environment.apiUrl}/admin/fuel-types`, body);

    req.subscribe({
      next: () => {
        this.toast.success(this.editId ? 'Fuel type updated' : 'Fuel type added');
        this.showModal = false;
        this.loadItems();
      },
      error: () => { this.toast.error('Something went wrong'); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }

  deleteItem(item: any) {
    this.deletingItem.set(item);
  }

  confirmDelete() {
    const item = this.deletingItem();
    if (!item) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/fuel-types/${item.id}`).subscribe({
      next: () => { this.toast.success('Fuel type deleted'); this.deletingItem.set(null); this.loadItems(); },
      error: () => { this.toast.error('Failed to delete fuel type'); this.deletingItem.set(null); }
    });
  }
}
