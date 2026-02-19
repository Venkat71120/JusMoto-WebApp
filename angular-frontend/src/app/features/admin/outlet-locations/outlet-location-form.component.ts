import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-outlet-location-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <a routerLink="/admin/outlet-locations" class="back-link">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
      Back to Outlet Locations
    </a>
    <h1 class="page-title">{{ isEdit ? 'Edit Outlet Location' : 'Create Outlet Location' }}</h1>

    <div class="loading-center" *ngIf="loadingData()"><div class="spinner"></div></div>

    <div class="form-card" *ngIf="!loadingData()">
      <div class="form-group">
        <label>Name *</label>
        <input type="text" class="form-control" [(ngModel)]="form.name" placeholder="Location name">
      </div>
      <div class="form-group">
        <label>Address *</label>
        <input type="text" class="form-control" [(ngModel)]="form.address" placeholder="Full address">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Post Code</label>
          <input type="text" class="form-control" [(ngModel)]="form.post_code" placeholder="Post code">
        </div>
        <div class="form-group">
          <label>Latitude</label>
          <input type="text" class="form-control" [(ngModel)]="form.latitude" placeholder="e.g. 28.6139">
        </div>
        <div class="form-group">
          <label>Longitude</label>
          <input type="text" class="form-control" [(ngModel)]="form.longitude" placeholder="e.g. 77.2090">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>State</label>
          <select class="form-control" [(ngModel)]="form.state_id" (change)="onStateChange()">
            <option value="">Select State</option>
            <option *ngFor="let s of states()" [value]="s.id">{{ s.name }}</option>
          </select>
        </div>
        <div class="form-group">
          <label>City</label>
          <select class="form-control" [(ngModel)]="form.city_id" (change)="onCityChange()">
            <option value="">Select City</option>
            <option *ngFor="let c of cities()" [value]="c.id">{{ c.name }}</option>
          </select>
        </div>
        <div class="form-group">
          <label>Area</label>
          <select class="form-control" [(ngModel)]="form.area_id">
            <option value="">Select Area</option>
            <option *ngFor="let a of areas()" [value]="a.id">{{ a.name }}</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="toggle-label">
          <input type="checkbox" [(ngModel)]="form.status"> Active
        </label>
      </div>

      <div *ngIf="error()" class="error-msg">{{ error() }}</div>

      <div class="form-actions">
        <a routerLink="/admin/outlet-locations" class="btn-cancel">Cancel</a>
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
export class OutletLocationFormComponent implements OnInit {
  isEdit = false;
  locationId: string | null = null;
  states = signal<any[]>([]);
  cities = signal<any[]>([]);
  areas = signal<any[]>([]);
  loadingData = signal(false);
  saving = signal(false);
  error = signal('');
  form: any = { name: '', address: '', post_code: '', latitude: '', longitude: '', state_id: '', city_id: '', area_id: '', status: true };

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.locationId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.locationId;
    this.loadStates();
    if (this.isEdit) this.loadLocation();
  }

  loadStates() {
    this.http.get<any>(`${environment.apiUrl}/admin/states`).subscribe({
      next: (res) => this.states.set(res.data || [])
    });
  }

  loadCities(stateId: string) {
    if (!stateId) { this.cities.set([]); return; }
    this.http.get<any>(`${environment.apiUrl}/admin/cities`, { params: { state_id: stateId } }).subscribe({
      next: (res) => this.cities.set(res.data || [])
    });
  }

  loadAreas(cityId: string) {
    if (!cityId) { this.areas.set([]); return; }
    this.http.get<any>(`${environment.apiUrl}/admin/areas`, { params: { city_id: cityId } }).subscribe({
      next: (res) => this.areas.set(res.data || [])
    });
  }

  onStateChange() {
    this.form.city_id = '';
    this.form.area_id = '';
    this.areas.set([]);
    this.loadCities(this.form.state_id);
  }

  onCityChange() {
    this.form.area_id = '';
    this.loadAreas(this.form.city_id);
  }

  loadLocation() {
    this.loadingData.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/outlet-locations/${this.locationId}`).subscribe({
      next: (res) => {
        const l = res.data;
        this.form = {
          name: l.name || '', address: l.address || '', post_code: l.post_code || '',
          latitude: l.latitude || '', longitude: l.longitude || '',
          state_id: l.state_id || '', city_id: l.city_id || '', area_id: l.area_id || '',
          status: !!l.status
        };
        if (l.state_id) this.loadCities(String(l.state_id));
        if (l.city_id) this.loadAreas(String(l.city_id));
      },
      error: () => this.router.navigate(['/admin/outlet-locations']),
      complete: () => this.loadingData.set(false)
    });
  }

  onSubmit() {
    if (!this.form.name.trim()) { this.error.set('Name is required'); return; }
    this.saving.set(true);
    this.error.set('');
    const data = { ...this.form, status: this.form.status ? 1 : 0 };
    const req = this.isEdit
      ? this.http.put<any>(`${environment.apiUrl}/admin/outlet-locations/${this.locationId}`, data)
      : this.http.post<any>(`${environment.apiUrl}/admin/outlet-locations`, data);
    req.subscribe({
      next: () => this.router.navigate(['/admin/outlet-locations']),
      error: (err) => { this.error.set(err.error?.error || 'Something went wrong'); this.saving.set(false); },
      complete: () => this.saving.set(false)
    });
  }
}
