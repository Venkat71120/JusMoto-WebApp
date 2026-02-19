import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MediaPickerComponent } from '../../../shared/components/media-picker/media-picker.component';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MediaPickerComponent],
  template: `
    <div class="page-header">
      <a routerLink="/admin/category/index" class="back-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to Categories
      </a>
      <h1 class="page-title">{{ isEdit ? 'Edit Category' : 'Create Category' }}</h1>
    </div>

    <div class="loading-center" *ngIf="loadingData()"><div class="spinner"></div></div>

    <form *ngIf="!loadingData()" [formGroup]="form" (ngSubmit)="onSubmit()" class="form-card">
      <div class="form-grid">
        <div class="form-group">
          <label>Name *</label>
          <input type="text" formControlName="name" placeholder="Category name">
        </div>
        <div class="form-group">
          <label>Icon (CSS class or URL)</label>
          <input type="text" formControlName="icon" placeholder="e.g. fa-car">
        </div>
        <div class="form-group full-width">
          <label>Description</label>
          <textarea formControlName="description" rows="3" placeholder="Category description"></textarea>
        </div>
        <div class="form-group full-width">
          <app-media-picker [value]="imageValue" [label]="'Category Image'" (valueChange)="imageValue = $event; form.get('image')?.setValue($event)"></app-media-picker>
        </div>
        <div class="form-group">
          <label class="checkbox-label">
            <input type="checkbox" formControlName="status"> Active
          </label>
        </div>
      </div>
      <div *ngIf="error()" class="error-msg">{{ error() }}</div>
      <div class="form-actions">
        <a routerLink="/admin/category/index" class="btn-cancel">Cancel</a>
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
    .full-width { grid-column: 1 / -1; }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 13px; font-weight: 600; color: #374151; }
    .form-group input, .form-group textarea { padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; }
    .form-group input:focus, .form-group textarea:focus { outline: none; border-color: #e31b23; }
    .checkbox-label { display: flex; align-items: center; gap: 8px; cursor: pointer; padding-top: 20px; }
    .checkbox-label input { width: 18px; height: 18px; accent-color: #e31b23; }
    .error-msg { color: #dc2626; background: #fee2e2; padding: 10px 16px; border-radius: 8px; margin-top: 16px; }
    .form-actions { display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px; padding-top: 20px; border-top: 1px solid #f1f5f9; }
    .btn-cancel { padding: 10px 24px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; color: #374151; font-weight: 600; text-decoration: none; font-size: 14px; display: inline-flex; align-items: center; }
    .btn-primary { background: #e31b23; color: #fff; border: none; padding: 10px 24px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; }
    .btn-primary:hover { background: #b11218; }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
    @media (max-width: 768px) { .form-grid { grid-template-columns: 1fr; } }
  `]
})
export class CategoryFormComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  categoryId: string | null = null;
  loadingData = signal(false);
  saving = signal(false);
  error = signal('');
  imageValue: any = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router, private toast: ToastService) {}

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.categoryId;

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      image: [''],
      icon: [''],
      status: [true]
    });

    if (this.isEdit) this.loadCategory();
  }

  loadCategory() {
    this.loadingData.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/categories/${this.categoryId}`).subscribe({
      next: (res) => {
        const c = res.data;
        this.form.patchValue({ name: c.name, description: c.description, image: c.image, icon: c.icon, status: !!c.status });
        this.imageValue = c.image || '';
      },
      error: () => this.router.navigate(['/admin/category/index']),
      complete: () => this.loadingData.set(false)
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.saving.set(true);
    this.error.set('');
    const data = { ...this.form.value, status: this.form.value.status ? 1 : 0 };
    const req = this.isEdit
      ? this.http.put<any>(`${environment.apiUrl}/admin/categories/${this.categoryId}`, data)
      : this.http.post<any>(`${environment.apiUrl}/admin/categories`, data);
    req.subscribe({
      next: () => { this.toast.success(this.isEdit ? 'Category updated successfully' : 'Category created successfully'); this.router.navigate(['/admin/category/index']); },
      error: (err) => { this.toast.error(err.error?.error || 'Something went wrong'); this.error.set(err.error?.error || 'Something went wrong'); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }
}
