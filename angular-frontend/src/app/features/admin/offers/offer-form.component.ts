import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MediaPickerComponent } from '../../../shared/components/media-picker/media-picker.component';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-offer-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MediaPickerComponent],
  template: `
    <a routerLink="/admin/offer/list" class="back-link">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
      Back to Offers
    </a>
    <h1 class="page-title">{{ isEdit ? 'Edit Offer' : 'Create Offer' }}</h1>

    <div class="loading-center" *ngIf="loadingData()"><div class="spinner"></div></div>

    <div class="form-card" *ngIf="!loadingData()">
      <div class="form-group">
        <label>Title *</label>
        <input type="text" class="form-control" [(ngModel)]="form.title" placeholder="Offer title">
      </div>
      <div class="form-group">
        <label>Subtitle</label>
        <textarea class="form-control" [(ngModel)]="form.subTitle" rows="2" placeholder="Short description"></textarea>
      </div>
      <div class="form-group">
        <app-media-picker [value]="form.image" [label]="'Offer Image'" (valueChange)="form.image = $event"></app-media-picker>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Offer Percentage *</label>
          <input type="number" class="form-control" [(ngModel)]="form.offerPercentage" placeholder="e.g. 15" min="0" max="100">
        </div>
        <div class="form-group">
          <label>Expires At</label>
          <input type="date" class="form-control" [(ngModel)]="form.expires_at">
        </div>
      </div>
      <div class="form-group">
        <label class="toggle-label">
          <input type="checkbox" [(ngModel)]="form.is_primary"> Primary Offer
        </label>
      </div>
      <div class="form-group">
        <label>Services</label>
        <div class="multi-select">
          <div class="ms-option" *ngFor="let s of services()">
            <label class="ms-label">
              <input type="checkbox" [checked]="isServiceSelected(s.id)" (change)="toggleService(s.id)">
              {{ s.name }}
            </label>
          </div>
          <div *ngIf="services().length === 0" class="text-muted">No services available</div>
        </div>
      </div>
      <div class="form-group">
        <label class="toggle-label">
          <input type="checkbox" [(ngModel)]="form.status"> Active
        </label>
      </div>

      <div *ngIf="error()" class="error-msg">{{ error() }}</div>

      <div class="form-actions">
        <a routerLink="/admin/offer/list" class="btn-cancel">Cancel</a>
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
    .form-group { margin-bottom:20px; flex:1; }
    .form-group label { display:block; margin-bottom:6px; font-weight:600; color:#334155; font-size:14px; }
    .form-control { width:100%; padding:10px 14px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; box-sizing:border-box; }
    .form-control:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.1); }
    .form-row { display:flex; gap:16px; flex-wrap:wrap; }
    .image-preview { margin-top:12px; }
    .image-preview img { max-width:100%; max-height:200px; border-radius:8px; border:1px solid #e5e7eb; }
    .toggle-label { display:flex; align-items:center; gap:8px; cursor:pointer; }
    .toggle-label input { accent-color:#e31b23; width:16px; height:16px; }
    .multi-select { max-height:200px; overflow-y:auto; border:1px solid #e5e7eb; border-radius:8px; padding:8px; }
    .ms-option { padding:4px 0; }
    .ms-label { display:flex; align-items:center; gap:8px; cursor:pointer; font-size:14px; color:#334155; }
    .ms-label input { accent-color:#e31b23; width:16px; height:16px; }
    .text-muted { color:#94a3b8; font-size:13px; padding:8px; }
    .error-msg { color:#dc2626; background:#fee2e2; padding:10px 16px; border-radius:8px; margin-bottom:16px; }
    .form-actions { display:flex; justify-content:flex-end; gap:12px; margin-top:24px; padding-top:20px; border-top:1px solid #f1f5f9; }
    .btn-cancel { padding:10px 24px; border:1px solid #d1d5db; border-radius:8px; background:#fff; color:#374151; font-weight:600; text-decoration:none; font-size:14px; display:inline-flex; align-items:center; }
    .btn-save { background:#e31b23; color:#fff; border:none; padding:12px 32px; border-radius:8px; font-weight:600; cursor:pointer; font-size:15px; }
    .btn-save:hover { background:#b11218; }
    .btn-save:disabled { opacity:0.6; cursor:not-allowed; }
  `]
})
export class OfferFormComponent implements OnInit {
  isEdit = false;
  offerId: string | null = null;
  services = signal<any[]>([]);
  loadingData = signal(false);
  saving = signal(false);
  error = signal('');
  form: any = { title: '', subTitle: '', image: '', offerPercentage: '', expires_at: '', is_primary: false, status: true };
  selectedServiceIds: Set<any> = new Set();

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private toast: ToastService) {}

  ngOnInit() {
    this.offerId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.offerId;
    this.loadServices();
    if (this.isEdit) this.loadOffer();
  }

  loadServices() {
    this.http.get<any>(`${environment.apiUrl}/admin/services`).subscribe({
      next: (res) => this.services.set(res.data || [])
    });
  }

  loadOffer() {
    this.loadingData.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/offers/${this.offerId}`).subscribe({
      next: (res) => {
        const o = res.data;
        this.form = {
          title: o.title || '', subTitle: o.subTitle || o.sub_title || '',
          image: o.image || '', offerPercentage: o.offerPercentage || o.offer_percentage || '',
          expires_at: o.expires_at ? o.expires_at.substring(0, 10) : '',
          is_primary: !!o.is_primary, status: !!o.status
        };
        const sIds = o.service_ids || (o.services || []).map((s: any) => s.id);
        this.selectedServiceIds = new Set(sIds);
      },
      error: () => this.router.navigate(['/admin/offer/list']),
      complete: () => this.loadingData.set(false)
    });
  }

  isServiceSelected(id: any): boolean {
    return this.selectedServiceIds.has(id);
  }

  toggleService(id: any) {
    if (this.selectedServiceIds.has(id)) {
      this.selectedServiceIds.delete(id);
    } else {
      this.selectedServiceIds.add(id);
    }
  }

  onSubmit() {
    if (!this.form.title.trim()) { this.error.set('Title is required'); return; }
    if (!this.form.offerPercentage) { this.error.set('Offer percentage is required'); return; }
    this.saving.set(true);
    this.error.set('');
    const data = {
      ...this.form,
      offerPercentage: Number(this.form.offerPercentage),
      is_primary: this.form.is_primary ? 1 : 0,
      status: this.form.status ? 1 : 0,
      service_ids: Array.from(this.selectedServiceIds)
    };
    const req = this.isEdit
      ? this.http.put<any>(`${environment.apiUrl}/admin/offers/${this.offerId}`, data)
      : this.http.post<any>(`${environment.apiUrl}/admin/offers`, data);
    req.subscribe({
      next: () => { this.toast.success(this.isEdit ? 'Offer updated successfully' : 'Offer created successfully'); this.router.navigate(['/admin/offer/list']); },
      error: (err) => { this.toast.error(err.error?.error || 'Something went wrong'); this.error.set(err.error?.error || 'Something went wrong'); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }
}
