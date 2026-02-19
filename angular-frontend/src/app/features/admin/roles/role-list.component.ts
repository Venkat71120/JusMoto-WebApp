import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-role-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ConfirmModalComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Roles & Permissions</h1>
      <a routerLink="/admin/manage/permission/role/add" class="btn-primary">+ Add Role</a>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let role of roles(); let i = index">
            <td>{{ i + 1 }}</td>
            <td class="fw-600">{{ role.name }}</td>
            <td>
              <div class="perm-list">
                <span class="perm-badge" *ngFor="let p of (role.permissions || []).slice(0, 5)">{{ p.name || p }}</span>
                <span class="perm-badge perm-more" *ngIf="(role.permissions || []).length > 5">+{{ role.permissions.length - 5 }} more</span>
                <span *ngIf="!role.permissions || role.permissions.length === 0" class="text-muted">No permissions</span>
              </div>
            </td>
            <td>
              <div class="action-btns">
                <a [routerLink]="'/admin/manage/permission/role/edit/' + role.id" class="btn-action btn-edit" title="Edit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </a>
                <button class="btn-action btn-delete" (click)="deleteRole(role)" title="Delete">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
            </td>
          </tr>
          <tr *ngIf="roles().length === 0 && !loading()">
            <td colspan="4" class="empty-state">No roles found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <app-confirm-modal
      [open]="!!deletingRole()"
      title="Delete Role"
      [message]="'Delete role &quot;' + (deletingRole()?.name || '') + '&quot;? This will remove all permission assignments.'"
      confirmText="Delete"
      type="danger"
      (confirmed)="confirmDelete()"
      (cancelled)="deletingRole.set(null)">
    </app-confirm-modal>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-weight:600; font-size:14px; text-decoration:none; }
    .btn-primary:hover { background:#b11218; }
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
    .perm-list { display:flex; flex-wrap:wrap; gap:6px; }
    .perm-badge { background:#f1f5f9; color:#475569; padding:3px 10px; border-radius:6px; font-size:11px; font-weight:500; }
    .perm-more { background:#e0e7ff; color:#3730a3; }
    .action-btns { display:flex; gap:6px; }
    .btn-action { padding:6px; border:1px solid #e5e7eb; border-radius:6px; background:#fff; cursor:pointer; color:#64748b; transition:all 0.2s; display:inline-flex; text-decoration:none; }
    .btn-edit:hover { color:#3b82f6; border-color:#3b82f6; }
    .btn-delete:hover { color:#ef4444; border-color:#ef4444; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }
  `]
})
export class RoleListComponent implements OnInit {
  roles = signal<any[]>([]);
  loading = signal(false);
  deletingRole = signal<any>(null);

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() { this.loadRoles(); }

  loadRoles() {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/roles`).subscribe({
      next: (res) => this.roles.set(res.data || []),
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  deleteRole(role: any) { this.deletingRole.set(role); }

  confirmDelete() {
    const role = this.deletingRole();
    if (!role) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/roles/${role.id}`).subscribe({
      next: () => { this.toast.success('Role deleted'); this.deletingRole.set(null); this.loadRoles(); },
      error: () => { this.toast.error('Failed to delete role'); this.deletingRole.set(null); }
    });
  }
}
