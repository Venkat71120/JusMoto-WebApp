import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-franchise-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">Add Franchise Partner</h1>
      <a routerLink="/admin/franchise/list" class="btn-back">Back to Franchises</a>
    </div>

    <div class="form-card">
      <div class="form-row">
        <div class="form-group">
          <label>Name *</label>
          <input type="text" [(ngModel)]="form.name" placeholder="Franchise name" class="form-input">
        </div>
        <div class="form-group">
          <label>Email *</label>
          <input type="email" [(ngModel)]="form.email" placeholder="Email address" class="form-input">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Password *</label>
          <input type="password" [(ngModel)]="form.password" placeholder="Password" class="form-input">
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input type="tel" [(ngModel)]="form.phone" placeholder="10-digit phone number" class="form-input" maxlength="10" pattern="\\d{10}" #phoneInput="ngModel">
          <span class="field-error" *ngIf="phoneInput.touched && phoneInput.invalid">Phone number must be exactly 10 digits</span>
        </div>
      </div>

      <div *ngIf="formError" class="error-msg">{{ formError }}</div>

      <div class="form-actions">
        <a routerLink="/admin/franchise/list" class="btn-cancel">Cancel</a>
        <button class="btn-primary" (click)="save()" [disabled]="saving()">
          {{ saving() ? 'Saving...' : 'Create Franchise' }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .btn-back { color:#e31b23; text-decoration:none; font-weight:600; font-size:14px; }
    .form-card { background:#fff; border-radius:12px; padding:32px; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px; }
    .form-group { display:flex; flex-direction:column; gap:6px; }
    .form-group label { font-size:13px; font-weight:600; color:#374151; }
    .form-input { padding:10px 14px; border:1px solid #d1d5db; border-radius:8px; font-size:14px; }
    .form-input:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.1); }
    .error-msg { color:#dc2626; background:#fee2e2; padding:10px 14px; border-radius:8px; margin-bottom:16px; font-size:13px; }
    .form-actions { display:flex; justify-content:flex-end; gap:12px; padding-top:16px; border-top:1px solid #e5e7eb; }
    .btn-cancel { padding:10px 24px; border:1px solid #d1d5db; border-radius:8px; background:#fff; color:#374151; font-weight:600; cursor:pointer; font-size:14px; text-decoration:none; display:inline-flex; align-items:center; }
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 24px; border-radius:8px; cursor:pointer; font-weight:600; font-size:14px; }
    .btn-primary:hover { background:#b11218; }
    .btn-primary:disabled { opacity:0.6; cursor:not-allowed; }
    .field-error { display:block; margin-top:4px; color:#dc2626; font-size:12px; font-weight:500; }
    .form-input.ng-invalid.ng-touched { border-color:#dc2626; }
    @media (max-width:768px) { .form-row { grid-template-columns:1fr; } }
  `]
})
export class FranchiseFormComponent {
  form: any = { name: '', email: '', password: '', phone: '' };
  saving = signal(false);
  formError = '';

  constructor(private http: HttpClient, private router: Router, private toast: ToastService) {}

  save() {
    if (!this.form.name.trim() || !this.form.email.trim() || !this.form.password.trim()) {
      this.formError = 'Name, email and password are required';
      return;
    }
    if (this.form.phone && !/^\d{10}$/.test(this.form.phone)) {
      this.formError = 'Phone number must be exactly 10 digits';
      return;
    }
    this.saving.set(true);
    this.formError = '';
    this.http.post<any>(`${environment.apiUrl}/admin/franchises`, this.form).subscribe({
      next: () => {
        this.toast.success('Franchise partner created');
        this.router.navigate(['/admin/franchise/list']);
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
