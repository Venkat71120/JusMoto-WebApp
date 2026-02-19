import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-state-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ConfirmModalComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">States</h1>
      <button class="btn-fetch" (click)="fetchFromApi()" [disabled]="fetching()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9"/></svg>
        {{ fetching() ? 'Importing...' : 'Fetch Indian States from API' }}
      </button>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>State Name</th>
            <th>State Code</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="add-row">
            <td></td>
            <td><input type="text" [(ngModel)]="newName" placeholder="State name" class="inline-input"></td>
            <td><input type="text" [(ngModel)]="newCode" placeholder="Code" class="inline-input inline-sm"></td>
            <td>
              <label class="toggle-label"><input type="checkbox" [(ngModel)]="newStatus"> Active</label>
            </td>
            <td>
              <button class="btn-primary btn-sm" (click)="addItem()" [disabled]="saving()">Add</button>
            </td>
          </tr>
          <tr *ngFor="let item of items(); let i = index">
            <td>{{ i + 1 }}</td>
            <td>
              <span *ngIf="editId !== item.id">{{ item.state }}</span>
              <input *ngIf="editId === item.id" type="text" [(ngModel)]="editName" class="inline-input">
            </td>
            <td>
              <span *ngIf="editId !== item.id">{{ item.state_code || '-' }}</span>
              <input *ngIf="editId === item.id" type="text" [(ngModel)]="editCode" class="inline-input inline-sm">
            </td>
            <td>
              <span *ngIf="editId !== item.id" class="badge" [class.badge-green]="item.status" [class.badge-red]="!item.status">
                {{ item.status ? 'Active' : 'Inactive' }}
              </span>
              <label *ngIf="editId === item.id" class="toggle-label"><input type="checkbox" [(ngModel)]="editStatus"> Active</label>
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
            <td colspan="5" class="empty-state">No states found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <app-confirm-modal
      [open]="!!deletingItem()"
      title="Delete State"
      [message]="'Delete &quot;' + (deletingItem()?.state || '') + '&quot;? This cannot be undone.'"
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
    .table-container { position:relative; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .loading-overlay { position:absolute; inset:0; background:rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:center; z-index:10; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .data-table { width:100%; border-collapse:collapse; }
    .data-table th { padding:12px 16px; text-align:left; font-weight:600; color:#64748b; font-size:12px; text-transform:uppercase; background:#f8f9fa; border-bottom:1px solid #e5e7eb; }
    .data-table td { padding:12px 16px; font-size:14px; color:#334155; border-bottom:1px solid #f1f5f9; }
    .data-table tr:hover { background:#fff5f5; }
    .add-row { background:#fafbfc; }
    .inline-input { padding:8px 12px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; width:100%; max-width:260px; }
    .inline-input:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.1); }
    .inline-sm { max-width:100px; }
    .badge { padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; }
    .badge-green { background:#dcfce7; color:#16a34a; }
    .badge-red { background:#fee2e2; color:#dc2626; }
    .toggle-label { display:flex; align-items:center; gap:6px; font-size:14px; cursor:pointer; }
    .toggle-label input { accent-color:#e31b23; width:16px; height:16px; }
    .action-btns { display:flex; gap:6px; }
    .action-btn { background:none; border:none; cursor:pointer; padding:6px; border-radius:6px; color:#64748b; display:inline-flex; }
    .action-btn:hover { background:#fee2e2; color:#e31b23; }
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer; }
    .btn-primary:hover { background:#b11218; }
    .btn-primary:disabled { opacity:0.6; cursor:not-allowed; }
    .btn-sm { padding:6px 14px; font-size:13px; }
    .btn-cancel { padding:6px 14px; border:1px solid #d1d5db; border-radius:8px; background:#fff; color:#374151; font-weight:600; cursor:pointer; font-size:13px; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }
  `]
})
export class StateListComponent implements OnInit {
  items = signal<any[]>([]);
  loading = signal(false);
  saving = signal(false);
  fetching = signal(false);
  deletingItem = signal<any>(null);
  newName = '';
  newCode = '';
  newStatus = true;
  editId: any = null;
  editName = '';
  editCode = '';
  editStatus = true;

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() { this.loadItems(); }

  loadItems() {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/states`).subscribe({
      next: (res) => this.items.set(res.data || []),
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  addItem() {
    if (!this.newName.trim()) return;
    this.saving.set(true);
    this.http.post<any>(`${environment.apiUrl}/admin/states`, { state: this.newName, state_code: this.newCode, status: this.newStatus ? 1 : 0 }).subscribe({
      next: () => { this.newName = ''; this.newCode = ''; this.newStatus = true; this.toast.success('State added successfully'); this.loadItems(); },
      error: () => { this.toast.error('Failed to add state'); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }

  startEdit(item: any) {
    this.editId = item.id;
    this.editName = item.state;
    this.editCode = item.state_code || '';
    this.editStatus = !!item.status;
  }

  saveEdit() {
    if (!this.editName.trim()) return;
    this.saving.set(true);
    this.http.put<any>(`${environment.apiUrl}/admin/states/${this.editId}`, { state: this.editName, state_code: this.editCode, status: this.editStatus ? 1 : 0 }).subscribe({
      next: () => { this.editId = null; this.toast.success('State updated successfully'); this.loadItems(); },
      error: () => { this.toast.error('Failed to update state'); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }

  fetchFromApi() {
    this.fetching.set(true);
    this.http.post<any>(`${environment.apiUrl}/admin/locations/import-states`, {}).subscribe({
      next: (res) => { this.toast.success(res.message || 'States imported!'); this.loadItems(); },
      error: (err) => { this.toast.error(err.error?.error || 'Failed to fetch states'); },
      complete: () => this.fetching.set(false)
    });
  }

  deleteItem(item: any) {
    this.deletingItem.set(item);
  }

  confirmDelete() {
    const item = this.deletingItem();
    if (!item) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/states/${item.id}`).subscribe({
      next: () => { this.toast.success('State deleted successfully'); this.deletingItem.set(null); this.loadItems(); },
      error: () => { this.toast.error('Failed to delete state'); this.deletingItem.set(null); }
    });
  }
}
