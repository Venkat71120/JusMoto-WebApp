import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-coupon-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: `
    <div class="page-header">
      <a routerLink="/admin/coupons" class="back-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to Coupons
      </a>
      <h1 class="page-title">{{ isEdit ? 'Edit Coupon' : 'Create Coupon' }}</h1>
    </div>

    <div class="loading-center" *ngIf="loadingData()"><div class="spinner"></div></div>

    <form *ngIf="!loadingData()" [formGroup]="form" (ngSubmit)="onSubmit()" class="form-card">
      <div class="form-grid">
        <div class="form-group">
          <label>Title</label>
          <input type="text" formControlName="title" placeholder="Coupon title">
        </div>
        <div class="form-group">
          <label>Coupon Code *</label>
          <input type="text" formControlName="code" placeholder="e.g. SUMMER20" style="text-transform: uppercase;">
        </div>
        <div class="form-group">
          <label>Discount Type *</label>
          <select formControlName="discount_type">
            <option value="percentage">Percentage (%)</option>
            <option value="fixed">Fixed Amount</option>
          </select>
        </div>
        <div class="form-group">
          <label>Discount *</label>
          <input type="number" formControlName="discount" placeholder="0">
        </div>
        <div class="form-group">
          <label>Expiry Date</label>
          <input type="date" formControlName="expire_date">
        </div>
        <div class="form-group">
          <label>Status</label>
          <select formControlName="status">
            <option [value]="1">Active</option>
            <option [value]="0">Inactive</option>
          </select>
        </div>
      </div>
      <div *ngIf="error()" class="error-msg">{{ error() }}</div>
      <div class="form-actions">
        <a routerLink="/admin/coupons" class="btn-cancel">Cancel</a>
        <button type="submit" class="btn-primary" [disabled]="saving()">
          {{ saving() ? 'Saving...' : (isEdit ? 'Update' : 'Create') }}
        </button>
      </div>
    </form>
  `,
  styles: [`
    .page-header { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
    .back-btn { display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: #64748b; font-weight: 500; }
    .back-btn:hover { color: #e31b23; }
    .page-title { font-size: 24px; font-weight: 700; color: #1a1a2e; margin: 0; }
    .loading-center { display: flex; justify-content: center; padding: 60px; }
    .spinner { width: 36px; height: 36px; border: 3px solid #f3f4f6; border-top-color: #e31b23; border-radius: 50%; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .form-card { background: #fff; border-radius: 12px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 13px; font-weight: 600; color: #374151; }
    .form-group input, .form-group select { padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; }
    .form-group input:focus, .form-group select:focus { outline: none; border-color: #e31b23; }
    .error-msg { color: #dc2626; background: #fee2e2; padding: 10px 16px; border-radius: 8px; margin-top: 16px; }
    .form-actions { display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px; padding-top: 20px; border-top: 1px solid #f1f5f9; }
    .btn-cancel { padding: 10px 24px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; color: #374151; font-weight: 600; text-decoration: none; font-size: 14px; display: inline-flex; }
    .btn-primary { background: #e31b23; color: #fff; border: none; padding: 10px 24px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; }
    .btn-primary:hover { background: #b11218; }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
    @media (max-width: 768px) { .form-grid { grid-template-columns: 1fr; } }
  `]
})
export class CouponFormComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  couponId: string | null = null;
  loadingData = signal(false);
  saving = signal(false);
  error = signal('');

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.couponId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.couponId;

    this.form = this.fb.group({
      title: [''],
      code: ['', Validators.required],
      discount_type: ['percentage', Validators.required],
      discount: [0, Validators.required],
      expire_date: [null],
      status: [1]
    });

    if (this.isEdit) this.loadCoupon();
  }

  loadCoupon() {
    this.loadingData.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/coupons/${this.couponId}`).subscribe({
      next: (res) => {
        const c = res.data;
        this.form.patchValue({
          title: c.title,
          code: c.code,
          discount_type: c.discount_type || 'percentage',
          discount: c.discount,
          expire_date: c.expire_date ? c.expire_date.substring(0, 10) : null,
          status: c.status
        });
      },
      error: () => this.router.navigate(['/admin/coupons']),
      complete: () => this.loadingData.set(false)
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.saving.set(true);
    this.error.set('');
    const data = { ...this.form.value, code: this.form.value.code.toUpperCase() };
    const req = this.isEdit
      ? this.http.put<any>(`${environment.apiUrl}/admin/coupons/${this.couponId}`, data)
      : this.http.post<any>(`${environment.apiUrl}/admin/coupons`, data);
    req.subscribe({
      next: () => this.router.navigate(['/admin/coupons']),
      error: (err) => { this.error.set(err.error?.error || 'Something went wrong'); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }
}
