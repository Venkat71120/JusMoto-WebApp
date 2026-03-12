import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MediaPickerComponent } from '../../../shared/components/media-picker/media-picker.component';
import { ToastService } from '../../../core/services/toast.service';

interface IconOption {
  name: string;
  label: string;
  svg: string;
}

const ICON_LIST: IconOption[] = [
  { name: 'wrench', label: 'Wrench', svg: '<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>' },
  { name: 'car', label: 'Car', svg: '<path d="M5 17h2m10 0h2M2 9l2-4h16l2 4M2 9h20M2 9v8a1 1 0 001 1h1m16 0h1a1 1 0 001-1V9"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>' },
  { name: 'settings', label: 'Settings', svg: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>' },
  { name: 'droplet', label: 'Oil / Fluid', svg: '<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>' },
  { name: 'disc', label: 'Brake Disc', svg: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>' },
  { name: 'battery', label: 'Battery', svg: '<rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="13" x2="23" y2="11"/>' },
  { name: 'wind', label: 'AC / Wind', svg: '<path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/>' },
  { name: 'sparkles', label: 'Detailing', svg: '<path d="M12 3l1.09 3.41L16.5 7.5l-3.41 1.09L12 12l-1.09-3.41L7.5 7.5l3.41-1.09L12 3z"/><path d="M19 10l.6 1.9 1.9.6-1.9.6-.6 1.9-.6-1.9-1.9-.6 1.9-.6.6-1.9z"/><path d="M6 16l.6 1.9 1.9.6-1.9.6-.6 1.9-.6-1.9L3.5 18.5l1.9-.6L6 16z"/>' },
  { name: 'circle-dot', label: 'Tire / Wheel', svg: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/>' },
  { name: 'fuel', label: 'Fuel', svg: '<path d="M3 22h12V6L9 2 3 6v16z"/><path d="M15 22h3a2 2 0 002-2v-6l-3-3"/><path d="M6 12h6M6 16h6"/>' },
  { name: 'shield', label: 'Shield / Safety', svg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
  { name: 'zap', label: 'Electrical', svg: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>' },
  { name: 'gauge', label: 'Gauge', svg: '<path d="M12 12m-10 0a10 10 0 1020 0 10 10 0 10-20 0"/><path d="M12 12l4-4"/><path d="M12 8v-2"/>' },
  { name: 'thermometer', label: 'Temperature', svg: '<path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/>' },
  { name: 'paintbrush', label: 'Paint / Body', svg: '<path d="M18.37 2.63L14 7l-1.59-1.59a2 2 0 00-2.82 0L8 7l9 9 1.59-1.59a2 2 0 000-2.82L17 10l4.37-4.37a2.12 2.12 0 10-3-3z"/><path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"/>' },
  { name: 'scan', label: 'Diagnostics', svg: '<path d="M3 7V5a2 2 0 012-2h2"/><path d="M17 3h2a2 2 0 012 2v2"/><path d="M21 17v2a2 2 0 01-2 2h-2"/><path d="M7 21H5a2 2 0 01-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/>' },
  { name: 'headphones', label: 'Sound / Audio', svg: '<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>' },
  { name: 'lamp', label: 'Lights', svg: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 00-3 13.33V18h6v-2.67A7 7 0 0012 2z"/>' },
  { name: 'key', label: 'Key / Lock', svg: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.78 7.78 5.5 5.5 0 017.78-7.78zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>' },
  { name: 'truck', label: 'Truck / Tow', svg: '<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>' },
  { name: 'clock', label: 'Scheduled', svg: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
  { name: 'tag', label: 'Tag / Label', svg: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>' },
  { name: 'check-circle', label: 'Verified', svg: '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' },
  { name: 'star', label: 'Premium', svg: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>' },
];

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, MediaPickerComponent],
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
          <label>Icon</label>
          <div class="icon-picker-trigger" (click)="iconPickerOpen.set(!iconPickerOpen())">
            @if (form.get('icon')?.value) {
              <span class="selected-icon" [innerHTML]="getIconSvg(form.get('icon')!.value)"></span>
              <span class="selected-label">{{ getIconLabel(form.get('icon')!.value) }}</span>
            } @else {
              <span class="placeholder-text">Select an icon</span>
            }
            <svg class="chevron" [class.open]="iconPickerOpen()" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          @if (iconPickerOpen()) {
            <div class="icon-dropdown">
              <input type="text" class="icon-search" placeholder="Search icons..." [(ngModel)]="iconSearch" [ngModelOptions]="{standalone: true}">
              <div class="icon-grid">
                @for (icon of filteredIcons(); track icon.name) {
                  <div class="icon-item" [class.active]="form.get('icon')?.value === icon.name" (click)="selectIcon(icon.name)" [title]="icon.label">
                    <span [innerHTML]="renderSvg(icon.svg)"></span>
                    <span class="icon-name">{{ icon.label }}</span>
                  </div>
                }
              </div>
              @if (form.get('icon')?.value) {
                <div class="icon-clear" (click)="selectIcon('')">Clear selection</div>
              }
            </div>
          }
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
    .form-group { display: flex; flex-direction: column; gap: 6px; position: relative; }
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

    .icon-picker-trigger { display:flex; align-items:center; gap:10px; padding:10px 14px; border:1px solid #d1d5db; border-radius:8px; cursor:pointer; background:#fff; transition:border-color 0.2s; }
    .icon-picker-trigger:hover { border-color:#e31b23; }
    .selected-icon { display:flex; align-items:center; }
    .selected-label { font-size:14px; color:#334155; flex:1; }
    .placeholder-text { font-size:14px; color:#9ca3af; flex:1; }
    .chevron { margin-left:auto; color:#9ca3af; transition:transform 0.2s; }
    .chevron.open { transform:rotate(180deg); }
    .icon-dropdown { position:absolute; top:100%; left:0; right:0; z-index:50; background:#fff; border:1px solid #e5e7eb; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.12); margin-top:4px; overflow:hidden; }
    .icon-search { width:100%; padding:12px 14px; border:none; border-bottom:1px solid #e5e7eb; font-size:14px; outline:none; box-sizing:border-box; }
    .icon-search:focus { border-bottom-color:#e31b23; }
    .icon-grid { display:grid; grid-template-columns:repeat(4, 1fr); gap:4px; padding:8px; max-height:240px; overflow-y:auto; }
    .icon-item { display:flex; flex-direction:column; align-items:center; gap:4px; padding:10px 4px; border-radius:8px; cursor:pointer; transition:all 0.15s; border:2px solid transparent; }
    .icon-item:hover { background:#fff5f5; border-color:#fca5a5; }
    .icon-item.active { background:#fee2e2; border-color:#e31b23; }
    .icon-item span:first-child { display:flex; align-items:center; justify-content:center; }
    .icon-name { font-size:10px; color:#64748b; text-align:center; line-height:1.2; }
    .icon-item.active .icon-name { color:#e31b23; font-weight:600; }
    .icon-clear { padding:10px; text-align:center; font-size:13px; color:#dc2626; cursor:pointer; border-top:1px solid #e5e7eb; font-weight:500; }
    .icon-clear:hover { background:#fee2e2; }

    @media (max-width: 768px) { .form-grid { grid-template-columns: 1fr; } .icon-grid { grid-template-columns: repeat(3, 1fr); } }
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
  iconPickerOpen = signal(false);
  iconSearch = '';
  allIcons = ICON_LIST;

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

  filteredIcons = () => {
    if (!this.iconSearch) return this.allIcons;
    const q = this.iconSearch.toLowerCase();
    return this.allIcons.filter(i => i.label.toLowerCase().includes(q) || i.name.toLowerCase().includes(q));
  };

  selectIcon(name: string) {
    this.form.get('icon')?.setValue(name);
    this.iconPickerOpen.set(false);
    this.iconSearch = '';
  }

  renderSvg(svgContent: string): string {
    return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svgContent}</svg>`;
  }

  getIconSvg(name: string): string {
    const icon = this.allIcons.find(i => i.name === name);
    if (!icon) return '';
    return this.renderSvg(icon.svg);
  }

  getIconLabel(name: string): string {
    const icon = this.allIcons.find(i => i.name === name);
    return icon?.label || name;
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
