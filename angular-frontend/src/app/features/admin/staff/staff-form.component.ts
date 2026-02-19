import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-staff-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <a routerLink="/admin/staff" class="back-link">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
      Back to Staff
    </a>
    <h1 class="page-title">{{ isEdit ? 'Edit Staff' : 'Add Staff' }}</h1>

    <div class="loading-center" *ngIf="loadingData()"><div class="spinner"></div></div>

    <div class="form-card" *ngIf="!loadingData()">
      <div class="form-group">
        <label>Name *</label>
        <input type="text" class="form-control" [(ngModel)]="form.name" placeholder="Full name">
      </div>
      <div class="form-group">
        <label>Email *</label>
        <input type="email" class="form-control" [(ngModel)]="form.email" placeholder="email@example.com">
      </div>
      <div class="form-group">
        <label>Password {{ isEdit ? '(leave blank to keep current)' : '*' }}</label>
        <input type="password" class="form-control" [(ngModel)]="form.password" placeholder="Password">
      </div>
      <div class="form-group">
        <label>Role *</label>
        <select class="form-control" [(ngModel)]="form.role_id">
          <option value="">Select Role</option>
          <option *ngFor="let r of roles()" [value]="r.id">{{ r.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label class="toggle-label">
          <input type="checkbox" [(ngModel)]="form.status"> Active
        </label>
      </div>

      <div *ngIf="error()" class="error-msg">{{ error() }}</div>

      <div class="form-actions">
        <a routerLink="/admin/staff" class="btn-cancel">Cancel</a>
        <button class="btn-save" (click)="onSubmit()" [disabled]="saving()">
          {{ saving() ? 'Saving...' : (isEdit ? 'Update' : 'Create') }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .back-link { color:#64748b; text-decoration:none; font-weight:500; display:inline-flex; align-items:center; gap:6px; margin-bottom:20px; }
    .back-link:hover { color:#e31b23; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0 0 24px; }
    .loading-center { display:flex; justify-content:center; padding:60px; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .form-card { background:#fff; border-radius:12px; padding:32px; box-shadow:0 1px 3px rgba(0,0,0,0.08); max-width:700px; }
    .form-group { margin-bottom:20px; }
    .form-group label { display:block; margin-bottom:6px; font-weight:600; color:#334155; font-size:14px; }
    .form-control { width:100%; padding:10px 14px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; box-sizing:border-box; }
    .form-control:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.1); }
    .toggle-label { display:flex; align-items:center; gap:8px; cursor:pointer; }
    .toggle-label input { accent-color:#e31b23; width:16px; height:16px; }
    .error-msg { color:#dc2626; background:#fee2e2; padding:10px 16px; border-radius:8px; margin-bottom:16px; }
    .form-actions { display:flex; justify-content:flex-end; gap:12px; margin-top:24px; padding-top:20px; border-top:1px solid #f1f5f9; }
    .btn-cancel { padding:10px 24px; border:1px solid #d1d5db; border-radius:8px; background:#fff; color:#374151; font-weight:600; text-decoration:none; font-size:14px; display:inline-flex; align-items:center; }
    .btn-save { background:#e31b23; color:#fff; border:none; padding:12px 32px; border-radius:8px; font-weight:600; cursor:pointer; font-size:15px; }
    .btn-save:hover { background:#b11218; }
    .btn-save:disabled { opacity:0.6; cursor:not-allowed; }
  `]
})
export class StaffFormComponent implements OnInit {
  isEdit = false;
  staffId: string | null = null;
  roles = signal<any[]>([]);
  loadingData = signal(false);
  saving = signal(false);
  error = signal('');
  form: any = { name: '', email: '', password: '', role_id: '', status: true };

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.staffId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.staffId;
    this.loadRoles();
    if (this.isEdit) this.loadStaff();
  }

  loadRoles() {
    this.http.get<any>(`${environment.apiUrl}/admin/roles`).subscribe({
      next: (res) => this.roles.set(res.data || [])
    });
  }

  loadStaff() {
    this.loadingData.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/staff/${this.staffId}`).subscribe({
      next: (res) => {
        const s = res.data;
        this.form = { name: s.name || '', email: s.email || '', password: '', role_id: s.role_id || '', status: !!s.status };
      },
      error: () => this.router.navigate(['/admin/staff']),
      complete: () => this.loadingData.set(false)
    });
  }

  onSubmit() {
    if (!this.form.name.trim() || !this.form.email.trim()) { this.error.set('Name and Email are required'); return; }
    if (!this.isEdit && !this.form.password) { this.error.set('Password is required'); return; }
    if (!this.form.role_id) { this.error.set('Role is required'); return; }
    this.saving.set(true);
    this.error.set('');
    const data: any = { name: this.form.name, email: this.form.email, role_id: this.form.role_id, status: this.form.status ? 1 : 0 };
    if (this.form.password) data.password = this.form.password;
    const req = this.isEdit
      ? this.http.put<any>(`${environment.apiUrl}/admin/staff/${this.staffId}`, data)
      : this.http.post<any>(`${environment.apiUrl}/admin/staff`, data);
    req.subscribe({
      next: () => this.router.navigate(['/admin/staff']),
      error: (err) => { this.error.set(err.error?.error || 'Something went wrong'); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }
}
