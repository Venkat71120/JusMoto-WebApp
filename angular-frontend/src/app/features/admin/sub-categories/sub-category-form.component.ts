import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-sub-category-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <a routerLink="/admin/sub-categories" class="back-link">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
      Back to Sub Categories
    </a>
    <h1 class="page-title">{{ isEdit ? 'Edit Sub Category' : 'Create Sub Category' }}</h1>

    <div class="loading-center" *ngIf="loadingData()"><div class="spinner"></div></div>

    <div class="form-card" *ngIf="!loadingData()">
      <div class="form-group">
        <label>Name *</label>
        <input type="text" class="form-control" [(ngModel)]="form.name" (input)="generateSlug()" placeholder="Sub category name">
      </div>
      <div class="form-group">
        <label>Slug</label>
        <input type="text" class="form-control" [(ngModel)]="form.slug" placeholder="auto-generated-slug">
      </div>
      <div class="form-group">
        <label>Parent Category *</label>
        <select class="form-control" [(ngModel)]="form.category_id">
          <option value="">Select Category</option>
          <option *ngFor="let cat of categories()" [value]="cat.id">{{ cat.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea class="form-control" [(ngModel)]="form.description" rows="3" placeholder="Description"></textarea>
      </div>
      <div class="form-group">
        <label>Image URL</label>
        <input type="text" class="form-control" [(ngModel)]="form.image" placeholder="https://...">
      </div>
      <div class="form-group">
        <label class="toggle-label">
          <input type="checkbox" [(ngModel)]="form.status"> Active
        </label>
      </div>

      <div *ngIf="error()" class="error-msg">{{ error() }}</div>

      <div class="form-actions">
        <a routerLink="/admin/sub-categories" class="btn-cancel">Cancel</a>
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
export class SubCategoryFormComponent implements OnInit {
  isEdit = false;
  subCategoryId: string | null = null;
  categories = signal<any[]>([]);
  loadingData = signal(false);
  saving = signal(false);
  error = signal('');
  form: any = { name: '', slug: '', category_id: '', description: '', image: '', status: true };

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.subCategoryId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.subCategoryId;
    this.loadCategories();
    if (this.isEdit) this.loadSubCategory();
  }

  loadCategories() {
    this.http.get<any>(`${environment.apiUrl}/admin/categories`).subscribe({
      next: (res) => this.categories.set(res.data || [])
    });
  }

  loadSubCategory() {
    this.loadingData.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/sub-categories/${this.subCategoryId}`).subscribe({
      next: (res) => {
        const s = res.data;
        this.form = { name: s.name, slug: s.slug, category_id: s.category_id || '', description: s.description || '', image: s.image || '', status: !!s.status };
      },
      error: () => this.router.navigate(['/admin/sub-categories']),
      complete: () => this.loadingData.set(false)
    });
  }

  generateSlug() {
    this.form.slug = this.form.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  onSubmit() {
    if (!this.form.name.trim() || !this.form.category_id) { this.error.set('Name and Category are required'); return; }
    this.saving.set(true);
    this.error.set('');
    const data = { ...this.form, status: this.form.status ? 1 : 0 };
    const req = this.isEdit
      ? this.http.put<any>(`${environment.apiUrl}/admin/sub-categories/${this.subCategoryId}`, data)
      : this.http.post<any>(`${environment.apiUrl}/admin/sub-categories`, data);
    req.subscribe({
      next: () => this.router.navigate(['/admin/sub-categories']),
      error: (err) => { this.error.set(err.error?.error || 'Something went wrong'); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }
}
