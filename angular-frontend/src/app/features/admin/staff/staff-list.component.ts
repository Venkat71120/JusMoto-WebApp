import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-staff-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ConfirmModalComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Staff Members</h1>
      <button class="btn-primary" (click)="openAddModal()">+ Add Staff</button>
    </div>

    <div class="filters-bar">
      <div class="search-box-wrap">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="text" class="search-box" placeholder="Search staff..." [(ngModel)]="search" (input)="onSearch()">
      </div>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let s of staff(); let i = index">
            <td>{{ i + 1 }}</td>
            <td class="fw-600">{{ s.name }}</td>
            <td>{{ s.email }}</td>
            <td><span class="role-badge">{{ s.role || '-' }}</span></td>
            <td>
              <button class="badge badge-clickable" [class.badge-green]="s.status" [class.badge-red]="!s.status" (click)="statusItem.set(s)">
                {{ s.status ? 'Active' : 'Inactive' }}
              </button>
            </td>
            <td>
              <div class="action-btns">
                <button class="action-btn" (click)="openEditModal(s)" title="Edit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button class="action-btn" (click)="deleteStaff(s)" title="Delete">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
            </td>
          </tr>
          <tr *ngIf="staff().length === 0 && !loading()">
            <td colspan="6" class="empty-state">No staff members found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Edit/Add Staff Modal -->
    <div class="modal-backdrop" *ngIf="showModal()" (click)="closeModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>{{ editingStaff() ? 'Edit Staff' : 'Add Staff' }}</h3>
          <button class="modal-close" (click)="closeModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Name <span class="required">*</span></label>
            <input type="text" [(ngModel)]="formData.name" placeholder="Full name" class="form-input">
          </div>
          <div class="form-group">
            <label>Email <span class="required">*</span></label>
            <input type="email" [(ngModel)]="formData.email" placeholder="Email address" class="form-input">
          </div>
          <div class="form-group">
            <label>Password {{ editingStaff() ? '(leave blank to keep)' : '' }} <span *ngIf="!editingStaff()" class="required">*</span></label>
            <input type="password" [(ngModel)]="formData.password" placeholder="{{ editingStaff() ? 'Leave blank to keep current' : 'Password' }}" class="form-input">
          </div>
          <div class="form-group">
            <label>Role <span class="required">*</span></label>
            <select [(ngModel)]="formData.role" class="form-input">
              <option value="">Select Role</option>
              <option *ngFor="let r of roles()" [value]="r.name">{{ r.name }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Status</label>
            <div class="status-toggle">
              <button class="toggle-btn" [class.active]="formData.status === 1" (click)="formData.status = 1">Active</button>
              <button class="toggle-btn" [class.active]="formData.status === 0" (click)="formData.status = 0">Inactive</button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-cancel" (click)="closeModal()">Cancel</button>
          <button class="btn-save" (click)="saveStaff()" [disabled]="saving()">
            {{ saving() ? 'Saving...' : (editingStaff() ? 'Update' : 'Create') }}
          </button>
        </div>
      </div>
    </div>

    <app-confirm-modal
      [open]="!!deletingItem()"
      title="Delete Staff Member"
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
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer; display:inline-flex; align-items:center; gap:8px; }
    .btn-primary:hover { background:#b11218; }
    .filters-bar { display:flex; gap:12px; margin-bottom:20px; flex-wrap:wrap; }
    .search-box-wrap { display:flex; align-items:center; gap:8px; background:#fff; border:1px solid #e5e7eb; border-radius:8px; padding:0 14px; flex:1; max-width:400px; }
    .search-box { padding:10px 0; border:none; outline:none; font-size:14px; width:100%; }
    .table-container { position:relative; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .loading-overlay { position:absolute; inset:0; background:rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:center; z-index:10; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .data-table { width:100%; border-collapse:collapse; }
    .data-table th { padding:12px 16px; text-align:left; font-weight:600; color:#64748b; font-size:12px; text-transform:uppercase; background:#f8f9fa; border-bottom:1px solid #e5e7eb; }
    .data-table td { padding:12px 16px; font-size:14px; color:#334155; border-bottom:1px solid #f1f5f9; }
    .data-table tr:hover { background:#fff5f5; }
    .fw-600 { font-weight:600; }
    .role-badge { background:#ede9fe; color:#7c3aed; padding:3px 10px; border-radius:6px; font-size:12px; font-weight:600; text-transform:capitalize; }
    .badge { padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; }
    .badge-clickable { cursor:pointer; transition:opacity 0.2s; border:none; }
    .badge-clickable:hover { opacity:0.8; }
    .badge-green { background:#dcfce7; color:#16a34a; }
    .badge-red { background:#fee2e2; color:#dc2626; }
    .action-btns { display:flex; gap:6px; }
    .action-btn { background:none; border:none; cursor:pointer; padding:6px; border-radius:6px; color:#64748b; display:inline-flex; }
    .action-btn:hover { background:#fee2e2; color:#e31b23; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }

    /* Modal */
    .modal-backdrop { position:fixed; inset:0; background:rgba(0,0,0,0.5); display:flex; align-items:center; justify-content:center; z-index:1000; animation:fadeIn 0.2s ease; }
    .modal-content { background:#fff; border-radius:14px; width:100%; max-width:480px; box-shadow:0 20px 60px rgba(0,0,0,0.15); animation:slideUp 0.25s ease; }
    .modal-header { display:flex; justify-content:space-between; align-items:center; padding:20px 24px; border-bottom:1px solid #f1f5f9; }
    .modal-header h3 { margin:0; font-size:18px; font-weight:700; color:#1a1a2e; }
    .modal-close { background:none; border:none; cursor:pointer; color:#94a3b8; padding:4px; border-radius:6px; display:flex; }
    .modal-close:hover { background:#f1f5f9; color:#334155; }
    .modal-body { padding:24px; display:flex; flex-direction:column; gap:18px; }
    .modal-footer { display:flex; justify-content:flex-end; gap:12px; padding:16px 24px; border-top:1px solid #f1f5f9; }
    .form-group { display:flex; flex-direction:column; gap:6px; }
    .form-group label { font-size:13px; font-weight:600; color:#475569; }
    .required { color:#e31b23; }
    .form-input { padding:10px 14px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; outline:none; transition:border 0.2s; }
    .form-input:focus { border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.08); }
    select.form-input { cursor:pointer; }
    .status-toggle { display:flex; gap:8px; }
    .toggle-btn { padding:8px 18px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; cursor:pointer; font-size:13px; font-weight:600; color:#64748b; transition:all 0.2s; }
    .toggle-btn.active { background:#e31b23; color:#fff; border-color:#e31b23; }
    .btn-cancel { padding:10px 20px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; cursor:pointer; font-weight:600; color:#64748b; font-size:14px; }
    .btn-cancel:hover { background:#f8f9fa; }
    .btn-save { padding:10px 24px; border:none; border-radius:8px; background:#e31b23; color:#fff; cursor:pointer; font-weight:600; font-size:14px; }
    .btn-save:hover { background:#b11218; }
    .btn-save:disabled { opacity:0.6; cursor:not-allowed; }

    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes slideUp { from { transform:translateY(20px); opacity:0; } to { transform:translateY(0); opacity:1; } }
  `]
})
export class StaffListComponent implements OnInit {
  staff = signal<any[]>([]);
  roles = signal<any[]>([]);
  loading = signal(false);
  saving = signal(false);
  showModal = signal(false);
  editingStaff = signal<any>(null);
  deletingItem = signal<any>(null);
  statusItem = signal<any>(null);
  search = '';
  private searchTimeout: any;

  formData = { name: '', email: '', password: '', role: '', status: 1 };

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() {
    this.loadStaff();
    this.loadRoles();
  }

  loadStaff() {
    this.loading.set(true);
    const params: any = {};
    if (this.search) params.search = this.search;
    this.http.get<any>(`${environment.apiUrl}/admin/staff`, { params }).subscribe({
      next: (res) => this.staff.set(res.data || []),
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  loadRoles() {
    this.http.get<any>(`${environment.apiUrl}/admin/roles`).subscribe({
      next: (res) => this.roles.set(res.data || []),
      error: () => {}
    });
  }

  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadStaff(), 400);
  }

  openAddModal() {
    this.editingStaff.set(null);
    this.formData = { name: '', email: '', password: '', role: '', status: 1 };
    this.showModal.set(true);
  }

  openEditModal(s: any) {
    this.editingStaff.set(s);
    this.formData = { name: s.name || '', email: s.email || '', password: '', role: s.role || '', status: s.status ? 1 : 0 };
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
    this.editingStaff.set(null);
  }

  saveStaff() {
    if (!this.formData.name || !this.formData.email || !this.formData.role) {
      this.toast.error('Name, email and role are required');
      return;
    }
    if (!this.editingStaff() && !this.formData.password) {
      this.toast.error('Password is required for new staff');
      return;
    }

    this.saving.set(true);
    const payload: any = {
      name: this.formData.name,
      email: this.formData.email,
      role: this.formData.role,
      status: this.formData.status
    };
    if (this.formData.password) payload.password = this.formData.password;

    const editing = this.editingStaff();
    const req = editing
      ? this.http.put<any>(`${environment.apiUrl}/admin/staff/${editing.id}`, payload)
      : this.http.post<any>(`${environment.apiUrl}/admin/staff`, payload);

    req.subscribe({
      next: (res) => {
        this.toast.success(editing ? 'Staff updated successfully' : 'Staff created successfully');
        this.closeModal();
        this.loadStaff();
        this.saving.set(false);
      },
      error: (err) => {
        this.toast.error(err.error?.error || 'Failed to save staff');
        this.saving.set(false);
      }
    });
  }

  deleteStaff(s: any) {
    this.deletingItem.set(s);
  }

  confirmDelete() {
    const s = this.deletingItem();
    if (!s) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/staff/${s.id}`).subscribe({
      next: () => { this.toast.success('Staff member deleted successfully'); this.deletingItem.set(null); this.loadStaff(); },
      error: () => { this.toast.error('Failed to delete staff member'); this.deletingItem.set(null); }
    });
  }

  confirmToggleStatus() {
    const s = this.statusItem();
    if (!s) return;
    const newStatus = s.status ? 0 : 1;
    this.http.put<any>(`${environment.apiUrl}/admin/staff/${s.id}`, { status: newStatus }).subscribe({
      next: () => { s.status = newStatus; this.toast.success('Staff status updated'); this.statusItem.set(null); },
      error: () => { this.toast.error('Failed to update status'); this.statusItem.set(null); }
    });
  }
}
