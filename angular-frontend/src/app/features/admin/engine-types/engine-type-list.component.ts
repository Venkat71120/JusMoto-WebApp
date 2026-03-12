import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-engine-type-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ConfirmModalComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Engine Types</h1>
    </div>

    <div class="toolbar">
      <div class="search-box">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" placeholder="Search engine types..." [(ngModel)]="searchTerm" (input)="filterItems()" class="search-input" />
      </div>
      <div class="add-inline">
        <input type="text" [(ngModel)]="newName" placeholder="New engine type name" class="inline-input" (keyup.enter)="addItem()" />
        <button class="btn-primary" (click)="addItem()" [disabled]="saving() || !newName.trim()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add
        </button>
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
            <td>
              <span *ngIf="editId !== item.id">{{ item.name }}</span>
              <input *ngIf="editId === item.id" type="text" [(ngModel)]="editName" class="inline-input">
            </td>
            <td>
              <div class="action-btns" *ngIf="editId !== item.id">
                <button class="action-btn" (click)="startEdit(item)" title="Edit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button class="action-btn" (click)="deleteItem(item)" title="Delete">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
              <div class="action-btns" *ngIf="editId === item.id">
                <button class="btn-primary btn-sm" (click)="saveEdit()" [disabled]="saving()">Save</button>
                <button class="btn-cancel btn-sm" (click)="editId = null">Cancel</button>
              </div>
            </td>
          </tr>
          <tr *ngIf="items().length === 0 && !loading()">
            <td colspan="3" class="empty-state">No engine types found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <app-confirm-modal
      [open]="!!deletingItem()"
      title="Delete Engine Type"
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
    .toolbar { display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:12px; }
    .search-box { display:flex; align-items:center; gap:8px; padding:10px 14px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; min-width:240px; }
    .search-box svg { color:#94a3b8; flex-shrink:0; }
    .search-input { border:none; outline:none; font-size:14px; color:#334155; width:100%; background:transparent; }
    .search-input::placeholder { color:#94a3b8; }
    .add-inline { display:flex; align-items:center; gap:10px; }
    .inline-input { padding:10px 14px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; width:220px; }
    .inline-input:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.1); }
    .table-container { position:relative; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .loading-overlay { position:absolute; inset:0; background:rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:center; z-index:10; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .data-table { width:100%; border-collapse:collapse; }
    .data-table th { padding:12px 16px; text-align:left; font-weight:600; color:#64748b; font-size:12px; text-transform:uppercase; background:#f8f9fa; border-bottom:1px solid #e5e7eb; }
    .data-table td { padding:12px 16px; font-size:14px; color:#334155; border-bottom:1px solid #f1f5f9; }
    .data-table tr:hover { background:#fff5f5; }
    .action-btns { display:flex; gap:6px; }
    .action-btn { background:none; border:none; cursor:pointer; padding:6px; border-radius:6px; color:#64748b; display:inline-flex; }
    .action-btn:hover { background:#fee2e2; color:#e31b23; }
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer; display:inline-flex; align-items:center; gap:6px; }
    .btn-primary:hover { background:#b11218; }
    .btn-primary:disabled { opacity:0.6; cursor:not-allowed; }
    .btn-sm { padding:6px 14px; font-size:13px; }
    .btn-cancel { padding:6px 14px; border:1px solid #d1d5db; border-radius:8px; background:#fff; color:#374151; font-weight:600; cursor:pointer; font-size:13px; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }
  `]
})
export class EngineTypeListComponent implements OnInit {
  items = signal<any[]>([]);
  filteredItems = signal<any[]>([]);
  loading = signal(false);
  saving = signal(false);
  deletingItem = signal<any>(null);
  newName = '';
  searchTerm = '';
  editId: any = null;
  editName = '';

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() { this.loadItems(); }

  loadItems() {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/engine-types`).subscribe({
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

  addItem() {
    if (!this.newName.trim()) return;
    this.saving.set(true);
    this.http.post<any>(`${environment.apiUrl}/admin/engine-types`, { name: this.newName }).subscribe({
      next: () => { this.newName = ''; this.toast.success('Engine type added successfully'); this.loadItems(); },
      error: () => { this.toast.error('Failed to add engine type'); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }

  startEdit(item: any) {
    this.editId = item.id;
    this.editName = item.name;
  }

  saveEdit() {
    if (!this.editName.trim()) return;
    this.saving.set(true);
    this.http.put<any>(`${environment.apiUrl}/admin/engine-types/${this.editId}`, { name: this.editName }).subscribe({
      next: () => { this.editId = null; this.toast.success('Engine type updated successfully'); this.loadItems(); },
      error: () => { this.toast.error('Failed to update engine type'); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }

  deleteItem(item: any) {
    this.deletingItem.set(item);
  }

  confirmDelete() {
    const item = this.deletingItem();
    if (!item) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/engine-types/${item.id}`).subscribe({
      next: () => { this.toast.success('Engine type deleted successfully'); this.deletingItem.set(null); this.loadItems(); },
      error: () => { this.toast.error('Failed to delete engine type'); this.deletingItem.set(null); }
    });
  }
}
