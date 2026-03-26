import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MediaPickerComponent } from '../../../shared/components/media-picker/media-picker.component';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-slider-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MediaPickerComponent],
  template: `
    <a routerLink="/admin/slider/all" class="back-link">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
      Back to Sliders
    </a>
    <h1 class="page-title">{{ isEdit ? 'Edit Slider' : 'Create Slider' }}</h1>

    <div class="loading-center" *ngIf="loadingData()"><div class="spinner"></div></div>

    <div class="form-card" *ngIf="!loadingData()">
      <div class="form-group">
        <app-media-picker [value]="form.image" [label]="'Slider Image'" (valueChange)="form.image = $event"></app-media-picker>
      </div>
      <div class="form-group">
        <label>Type</label>
        <select class="form-control" [(ngModel)]="form.type">
          <option value="">Select Type</option>
          <option value="banner">Banner</option>
          <option value="hero">Hero</option>
          <option value="promo">Promo</option>
          <option value="general">General</option>
        </select>
      </div>
      <div class="form-group">
        <label>Identity</label>
        <input type="text" class="form-control" [(ngModel)]="form.identity" placeholder="Identifier or label">
      </div>
      <div class="form-group">
        <label class="toggle-label">
          <input type="checkbox" [(ngModel)]="form.status"> Active
        </label>
      </div>

      <div *ngIf="error()" class="error-msg">{{ error() }}</div>

      <div class="form-actions">
        <a routerLink="/admin/slider/all" class="btn-cancel">Cancel</a>
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
    .image-preview { margin-top:12px; }
    .image-preview img { max-width:100%; max-height:200px; border-radius:8px; border:1px solid #e5e7eb; }
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
export class SliderFormComponent implements OnInit {
  isEdit = false;
  sliderId: string | null = null;
  loadingData = signal(false);
  saving = signal(false);
  error = signal('');
  form: any = { image: '', type: '', identity: '', status: true };

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private toast: ToastService) {}

  ngOnInit() {
    this.sliderId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.sliderId;
    if (this.isEdit) this.loadSlider();
  }

  loadSlider() {
    this.loadingData.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/sliders/${this.sliderId}`).subscribe({
      next: (res) => {
        const s = res.data;
        this.form = { image: s.image ?? '', type: s.type || '', identity: s.identity || '', status: !!s.status };
      },
      error: () => this.router.navigate(['/admin/slider/all']),
      complete: () => this.loadingData.set(false)
    });
  }

  onSubmit() {
    if (!this.form.image && this.form.image !== 0) { this.error.set('Image is required'); return; }
    this.saving.set(true);
    this.error.set('');
    const data = { ...this.form, status: this.form.status ? 1 : 0 };
    const req = this.isEdit
      ? this.http.put<any>(`${environment.apiUrl}/admin/sliders/${this.sliderId}`, data)
      : this.http.post<any>(`${environment.apiUrl}/admin/sliders`, data);
    req.subscribe({
      next: () => { this.toast.success(this.isEdit ? 'Slider updated successfully' : 'Slider created successfully'); this.router.navigate(['/admin/slider/all']); },
      error: (err) => { this.toast.error(err.error?.error || 'Something went wrong'); this.error.set(err.error?.error || 'Something went wrong'); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }
}
