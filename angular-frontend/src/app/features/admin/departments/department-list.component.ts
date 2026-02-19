import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ConfirmModalComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Departments</h1>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- Add New Row -->
          <tr class="add-row">
            <td></td>
            <td><input type="text" [(ngModel)]="newName" placeholder="Department name" class="inline-input"></td>
            <td>
              <label class="toggle-label"><input type="checkbox" [(ngModel)]="newStatus"> Active</label>
            </td>
            <td>
              <button class="btn-primary btn-sm" (click)="addDepartment()" [disabled]="saving()">Add</button>
            </td>
          </tr>
          <tr *ngFor="let dept of departments(); let i = index">
            <td>{{ i + 1 }}</td>
            <td>
              <span *ngIf="editId !== dept.id">{{ dept.name }}</span>
              <input *ngIf="editId === dept.id" type="text" [(ngModel)]="editName" class="inline-input">
            </td>
            <td>
              <span *ngIf="editId !== dept.id" class="badge" [class.badge-green]="dept.status" [class.badge-red]="!dept.status">
                {{ dept.status ? 'Active' : 'Inactive' }}
              </span>
              <label *ngIf="editId === dept.id" class="toggle-label"><input type="checkbox" [(ngModel)]="editStatus"> Active</label>
            </td>
            <td>
              <div class="action-btns" *ngIf="editId !== dept.id">
                <button class="action-btn" (click)="startEdit(dept)" title="Edit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button class="action-btn" (click)="deleteDepartment(dept)" title="Delete">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
              <div class="action-btns" *ngIf="editId === dept.id">
                <button class="btn-primary btn-sm" (click)="saveEdit()" [disabled]="saving()">Save</button>
                <button class="btn-cancel btn-sm" (click)="editId = null">Cancel</button>
              </div>
            </td>
          </tr>
          <tr *ngIf="departments().length === 0 && !loading()">
            <td colspan="4" class="empty-state">No departments found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <app-confirm-modal
      [open]="!!deletingItem()"
      title="Delete Department"
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
export class DepartmentListComponent implements OnInit {
  departments = signal<any[]>([]);
  loading = signal(false);
  saving = signal(false);
  deletingItem = signal<any>(null);
  newName = '';
  newStatus = true;
  editId: any = null;
  editName = '';
  editStatus = true;

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() { this.loadDepartments(); }

  loadDepartments() {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/departments`).subscribe({
      next: (res) => this.departments.set(res.data || []),
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  addDepartment() {
    if (!this.newName.trim()) return;
    this.saving.set(true);
    this.http.post<any>(`${environment.apiUrl}/admin/departments`, { name: this.newName, status: this.newStatus ? 1 : 0 }).subscribe({
      next: () => { this.newName = ''; this.newStatus = true; this.toast.success('Department added successfully'); this.loadDepartments(); },
      error: () => { this.toast.error('Failed to add department'); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }

  startEdit(dept: any) {
    this.editId = dept.id;
    this.editName = dept.name;
    this.editStatus = !!dept.status;
  }

  saveEdit() {
    if (!this.editName.trim()) return;
    this.saving.set(true);
    this.http.put<any>(`${environment.apiUrl}/admin/departments/${this.editId}`, { name: this.editName, status: this.editStatus ? 1 : 0 }).subscribe({
      next: () => { this.editId = null; this.toast.success('Department updated successfully'); this.loadDepartments(); },
      error: () => { this.toast.error('Failed to update department'); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }

  deleteDepartment(dept: any) {
    this.deletingItem.set(dept);
  }

  confirmDelete() {
    const dept = this.deletingItem();
    if (!dept) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/departments/${dept.id}`).subscribe({
      next: () => { this.toast.success('Department deleted successfully'); this.deletingItem.set(null); this.loadDepartments(); },
      error: () => { this.toast.error('Failed to delete department'); this.deletingItem.set(null); }
    });
  }
}
