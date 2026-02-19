import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-role-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">Roles</h1>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let role of roles(); let i = index">
            <td>{{ i + 1 }}</td>
            <td class="fw-600">{{ role.name }}</td>
            <td>
              <div class="perm-list">
                <span class="perm-badge" *ngFor="let p of (role.permissions || [])">{{ p.name || p }}</span>
                <span *ngIf="!role.permissions || role.permissions.length === 0" class="text-muted">No permissions</span>
              </div>
            </td>
          </tr>
          <tr *ngIf="roles().length === 0 && !loading()">
            <td colspan="3" class="empty-state">No roles found</td>
          </tr>
        </tbody>
      </table>
    </div>
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
    .fw-600 { font-weight:600; }
    .text-muted { color:#94a3b8; }
    .perm-list { display:flex; flex-wrap:wrap; gap:6px; }
    .perm-badge { background:#f1f5f9; color:#475569; padding:3px 10px; border-radius:6px; font-size:11px; font-weight:500; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }
  `]
})
export class RoleListComponent implements OnInit {
  roles = signal<any[]>([]);
  loading = signal(false);

  constructor(private http: HttpClient) {}

  ngOnInit() { this.loadRoles(); }

  loadRoles() {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/roles`).subscribe({
      next: (res) => this.roles.set(res.data || []),
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }
}
