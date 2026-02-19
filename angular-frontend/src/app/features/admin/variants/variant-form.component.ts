import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-variant-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <a routerLink="/admin/variant/list" class="back-link">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
      Back to Variants
    </a>
    <h1 class="page-title">{{ isEdit ? 'Edit Variant' : 'Create Variant' }}</h1>

    <div class="loading-center" *ngIf="loadingData()"><div class="spinner"></div></div>

    <div class="form-card" *ngIf="!loadingData()">
      <div class="form-group">
        <label>Brand *</label>
        <select class="form-control" [(ngModel)]="selectedBrandId" (change)="onBrandChange()">
          <option value="">Select Brand</option>
          <option *ngFor="let b of brands()" [value]="b.id">{{ b.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Car *</label>
        <select class="form-control" [(ngModel)]="form.car_id">
          <option value="">Select Car</option>
          <option *ngFor="let c of filteredCars()" [value]="c.id">{{ c.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Engine Type *</label>
        <select class="form-control" [(ngModel)]="form.engine_type_id">
          <option value="">Select Engine Type</option>
          <option *ngFor="let e of engineTypes()" [value]="e.id">{{ e.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Fuel Type *</label>
        <select class="form-control" [(ngModel)]="form.fuel_type_id">
          <option value="">Select Fuel Type</option>
          <option *ngFor="let f of fuelTypes()" [value]="f.id">{{ f.name }}</option>
        </select>
      </div>

      <div *ngIf="error()" class="error-msg">{{ error() }}</div>

      <div class="form-actions">
        <a routerLink="/admin/variant/list" class="btn-cancel">Cancel</a>
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
    .error-msg { color:#dc2626; background:#fee2e2; padding:10px 16px; border-radius:8px; margin-bottom:16px; }
    .form-actions { display:flex; justify-content:flex-end; gap:12px; margin-top:24px; padding-top:20px; border-top:1px solid #f1f5f9; }
    .btn-cancel { padding:10px 24px; border:1px solid #d1d5db; border-radius:8px; background:#fff; color:#374151; font-weight:600; text-decoration:none; font-size:14px; display:inline-flex; align-items:center; }
    .btn-save { background:#e31b23; color:#fff; border:none; padding:12px 32px; border-radius:8px; font-weight:600; cursor:pointer; font-size:15px; }
    .btn-save:hover { background:#b11218; }
    .btn-save:disabled { opacity:0.6; cursor:not-allowed; }
  `]
})
export class VariantFormComponent implements OnInit {
  isEdit = false;
  variantId: string | null = null;
  brands = signal<any[]>([]);
  allCars = signal<any[]>([]);
  filteredCars = signal<any[]>([]);
  engineTypes = signal<any[]>([]);
  fuelTypes = signal<any[]>([]);
  loadingData = signal(false);
  saving = signal(false);
  error = signal('');
  selectedBrandId = '';
  form: any = { car_id: '', engine_type_id: '', fuel_type_id: '' };

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private toast: ToastService) {}

  ngOnInit() {
    this.variantId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.variantId;
    this.loadDropdowns();
    if (this.isEdit) this.loadVariant();
  }

  loadDropdowns() {
    this.http.get<any>(`${environment.apiUrl}/admin/brands`).subscribe({
      next: (res) => this.brands.set(res.data || [])
    });
    this.http.get<any>(`${environment.apiUrl}/admin/cars`).subscribe({
      next: (res) => { this.allCars.set(res.data || []); this.filterCars(); }
    });
    this.http.get<any>(`${environment.apiUrl}/admin/engine-types`).subscribe({
      next: (res) => this.engineTypes.set(res.data || [])
    });
    this.http.get<any>(`${environment.apiUrl}/admin/fuel-types`).subscribe({
      next: (res) => this.fuelTypes.set(res.data || [])
    });
  }

  loadVariant() {
    this.loadingData.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/variants/${this.variantId}`).subscribe({
      next: (res) => {
        const v = res.data;
        this.form = { car_id: v.car_id || '', engine_type_id: v.engine_type_id || '', fuel_type_id: v.fuel_type_id || '' };
        this.selectedBrandId = v.car?.brand_id || '';
        this.filterCars();
      },
      error: () => this.router.navigate(['/admin/variant/list']),
      complete: () => this.loadingData.set(false)
    });
  }

  onBrandChange() {
    this.form.car_id = '';
    this.filterCars();
  }

  filterCars() {
    if (this.selectedBrandId) {
      this.filteredCars.set(this.allCars().filter(c => String(c.brand_id) === String(this.selectedBrandId)));
    } else {
      this.filteredCars.set(this.allCars());
    }
  }

  onSubmit() {
    if (!this.form.car_id || !this.form.engine_type_id || !this.form.fuel_type_id) {
      this.error.set('All fields are required');
      return;
    }
    this.saving.set(true);
    this.error.set('');
    const req = this.isEdit
      ? this.http.put<any>(`${environment.apiUrl}/admin/variants/${this.variantId}`, this.form)
      : this.http.post<any>(`${environment.apiUrl}/admin/variants`, this.form);
    req.subscribe({
      next: () => { this.toast.success(this.isEdit ? 'Variant updated successfully' : 'Variant created successfully'); this.router.navigate(['/admin/variant/list']); },
      error: (err) => { this.toast.error(err.error?.error || 'Something went wrong'); this.error.set(err.error?.error || 'Something went wrong'); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }
}
