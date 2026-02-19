import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-role-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">{{ isEdit ? 'Edit Role' : 'Create Role' }}</h1>
      <a routerLink="/admin/manage/permission/role/all" class="btn-back">Back to Roles</a>
    </div>

    <div class="form-card">
      <div class="form-group">
        <label>Role Name *</label>
        <input type="text" [(ngModel)]="roleName" placeholder="e.g. Manager, Editor..." class="form-input">
      </div>

      <div class="permissions-section">
        <h3>Permissions</h3>
        <div class="select-all-row">
          <label class="checkbox-label">
            <input type="checkbox" [checked]="allSelected()" (change)="toggleAll($event)">
            <span>Select All</span>
          </label>
        </div>
        <div class="perm-groups">
          <div class="perm-group" *ngFor="let group of permissionGroups()">
            <h4 class="group-title">{{ group.menu }}</h4>
            <div class="perm-items">
              <label class="checkbox-label" *ngFor="let perm of group.permissions">
                <input type="checkbox" [checked]="selectedPermissions.has(perm.id)" (change)="togglePermission(perm.id)">
                <span>{{ perm.name }}</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div *ngIf="formError" class="error-msg">{{ formError }}</div>

      <div class="form-actions">
        <a routerLink="/admin/manage/permission/role/all" class="btn-cancel">Cancel</a>
        <button class="btn-primary" (click)="save()" [disabled]="saving()">
          {{ saving() ? 'Saving...' : (isEdit ? 'Update Role' : 'Create Role') }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .btn-back { color:#e31b23; text-decoration:none; font-weight:600; font-size:14px; }
    .btn-back:hover { text-decoration:underline; }
    .form-card { background:#fff; border-radius:12px; padding:32px; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .form-group { display:flex; flex-direction:column; gap:6px; margin-bottom:20px; }
    .form-group label { font-size:13px; font-weight:600; color:#374151; }
    .form-input { padding:10px 14px; border:1px solid #d1d5db; border-radius:8px; font-size:14px; }
    .form-input:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.1); }
    .permissions-section { margin-bottom:24px; }
    .permissions-section h3 { font-size:18px; font-weight:700; color:#1a1a2e; margin:0 0 16px; }
    .select-all-row { padding:10px 0; border-bottom:1px solid #e5e7eb; margin-bottom:16px; }
    .perm-groups { display:flex; flex-direction:column; gap:20px; }
    .perm-group { background:#f8f9fa; border-radius:10px; padding:16px; }
    .group-title { font-size:14px; font-weight:700; color:#374151; margin:0 0 12px; text-transform:capitalize; }
    .perm-items { display:flex; flex-wrap:wrap; gap:12px; }
    .checkbox-label { display:flex; align-items:center; gap:8px; cursor:pointer; font-size:13px; color:#475569; }
    .checkbox-label input[type="checkbox"] { width:16px; height:16px; accent-color:#e31b23; cursor:pointer; }
    .error-msg { color:#dc2626; background:#fee2e2; padding:10px 14px; border-radius:8px; margin-bottom:16px; font-size:13px; }
    .form-actions { display:flex; justify-content:flex-end; gap:12px; padding-top:16px; border-top:1px solid #e5e7eb; }
    .btn-cancel { padding:10px 24px; border:1px solid #d1d5db; border-radius:8px; background:#fff; color:#374151; font-weight:600; cursor:pointer; font-size:14px; text-decoration:none; display:inline-flex; align-items:center; }
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 24px; border-radius:8px; cursor:pointer; font-weight:600; font-size:14px; }
    .btn-primary:hover { background:#b11218; }
    .btn-primary:disabled { opacity:0.6; cursor:not-allowed; }
  `]
})
export class RoleFormComponent implements OnInit {
  isEdit = false;
  roleId: any = null;
  roleName = '';
  permissionGroups = signal<any[]>([]);
  selectedPermissions = new Set<number>();
  saving = signal(false);
  formError = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.roleId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.roleId;
    this.loadPermissions();
    if (this.isEdit) this.loadRole();
  }

  loadPermissions() {
    this.http.get<any>(`${environment.apiUrl}/admin/permissions`).subscribe({
      next: (res) => {
        const perms = res.data || [];
        const groups: any = {};
        perms.forEach((p: any) => {
          const menu = p.menu_name || 'General';
          if (!groups[menu]) groups[menu] = [];
          groups[menu].push(p);
        });
        this.permissionGroups.set(Object.entries(groups).map(([menu, permissions]) => ({ menu, permissions })));
      }
    });
  }

  loadRole() {
    this.http.get<any>(`${environment.apiUrl}/admin/roles/${this.roleId}`).subscribe({
      next: (res) => {
        this.roleName = res.data.name;
        (res.data.permissions || []).forEach((p: any) => this.selectedPermissions.add(p.id));
      }
    });
  }

  allSelected(): boolean {
    const all = this.permissionGroups().flatMap(g => g.permissions);
    return all.length > 0 && all.every((p: any) => this.selectedPermissions.has(p.id));
  }

  toggleAll(event: any) {
    const all = this.permissionGroups().flatMap(g => g.permissions);
    if (event.target.checked) {
      all.forEach((p: any) => this.selectedPermissions.add(p.id));
    } else {
      this.selectedPermissions.clear();
    }
  }

  togglePermission(id: number) {
    if (this.selectedPermissions.has(id)) {
      this.selectedPermissions.delete(id);
    } else {
      this.selectedPermissions.add(id);
    }
  }

  save() {
    if (!this.roleName.trim()) { this.formError = 'Role name is required'; return; }
    this.saving.set(true);
    this.formError = '';
    const data = { name: this.roleName, permission_ids: Array.from(this.selectedPermissions) };
    const req = this.isEdit
      ? this.http.put<any>(`${environment.apiUrl}/admin/roles/${this.roleId}`, data)
      : this.http.post<any>(`${environment.apiUrl}/admin/roles`, data);
    req.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? 'Role updated successfully' : 'Role created successfully');
        this.router.navigate(['/admin/manage/permission/role/all']);
      },
      error: (err) => {
        this.formError = err.error?.error || 'Something went wrong';
        this.toast.error(this.formError);
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
}
