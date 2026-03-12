import { Component, OnInit, AfterViewInit, signal, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';

declare const L: any;

@Component({
  selector: 'app-outlet-location-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <a routerLink="/admin/outletAddress/all" class="back-link">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
      Back to Outlet Locations
    </a>
    <h1 class="page-title">{{ isEdit ? 'Edit Outlet Location' : 'Create Outlet Location' }}</h1>

    <div class="loading-center" *ngIf="loadingData()"><div class="spinner"></div></div>

    <div class="form-layout" *ngIf="!loadingData()">
      <!-- Left: Form -->
      <div class="form-card">
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
            <input type="text" class="form-control" [(ngModel)]="form.latitude" placeholder="e.g. 28.6139" (change)="onCoordsManualChange()">
          </div>
          <div class="form-group">
            <label>Longitude</label>
            <input type="text" class="form-control" [(ngModel)]="form.longitude" placeholder="e.g. 77.2090" (change)="onCoordsManualChange()">
          </div>
        </div>

        <!-- State / City / Area with API fetch -->
        <div class="form-row">
          <div class="form-group">
            <div class="label-row">
              <label>State</label>
              <button *ngIf="states().length === 0" class="fetch-link" (click)="fetchStatesFromApi()" [disabled]="fetchingStates()">
                {{ fetchingStates() ? 'Fetching...' : 'Fetch from API' }}
              </button>
            </div>
            <select class="form-control" [(ngModel)]="form.state_id" (change)="onStateChange()">
              <option value="">Select State</option>
              <option *ngFor="let s of states()" [value]="s.id">{{ s.state }}</option>
            </select>
          </div>
          <div class="form-group">
            <div class="label-row">
              <label>City</label>
              <button *ngIf="form.state_id && cities().length === 0 && !citiesLoading()" class="fetch-link" (click)="fetchCitiesFromApi()" [disabled]="fetchingCities()">
                {{ fetchingCities() ? 'Fetching...' : 'Fetch from API' }}
              </button>
            </div>
            <select class="form-control" [(ngModel)]="form.city_id" (change)="onCityChange()">
              <option value="">Select City</option>
              <option *ngFor="let c of cities()" [value]="c.id">{{ c.city }}</option>
            </select>
            <div class="fetch-hint" *ngIf="citiesLoading()">Loading cities...</div>
          </div>
          <div class="form-group">
            <label>Area</label>
            <select class="form-control" [(ngModel)]="form.area_id" *ngIf="areas().length > 0">
              <option value="">Select Area</option>
              <option *ngFor="let a of areas()" [value]="a.id">{{ a.area }}</option>
            </select>
            <input *ngIf="areas().length === 0" type="text" class="form-control" [(ngModel)]="form.area_name" placeholder="Type area name">
          </div>
        </div>

        <div class="form-group">
          <label class="toggle-label">
            <input type="checkbox" [(ngModel)]="form.status"> Active
          </label>
        </div>

        <div *ngIf="error()" class="error-msg">{{ error() }}</div>

        <div class="form-actions">
          <a routerLink="/admin/outletAddress/all" class="btn-cancel">Cancel</a>
          <button class="btn-save" (click)="onSubmit()" [disabled]="saving()">
            {{ saving() ? 'Saving...' : (isEdit ? 'Update' : 'Create') }}
          </button>
        </div>
      </div>

      <!-- Right: Map -->
      <div class="map-card">
        <div class="map-header">
          <h3>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Pick Location on Map
          </h3>
          <span class="map-hint">Click on the map to set coordinates &amp; address</span>
        </div>
        <div class="map-search-bar">
          <input type="text" class="form-control" [(ngModel)]="mapSearchQuery" placeholder="Search location..." (keydown.enter)="searchLocation()">
          <button class="map-search-btn" (click)="searchLocation()" [disabled]="mapSearching()">
            <svg *ngIf="!mapSearching()" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <span *ngIf="mapSearching()" class="spinner-xs"></span>
          </button>
        </div>
        <div id="outlet-map" #mapContainer class="map-container"></div>
        <div class="map-coords" *ngIf="form.latitude && form.longitude">
          <span>Lat: {{ form.latitude }}</span>
          <span>Lng: {{ form.longitude }}</span>
        </div>
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

    .form-layout { display:grid; grid-template-columns:1fr 1fr; gap:24px; align-items:start; }
    @media (max-width: 1024px) { .form-layout { grid-template-columns:1fr; } }

    .form-card { background:#fff; border-radius:12px; padding:32px; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .form-group { margin-bottom:20px; flex:1; }
    .form-group label { display:block; margin-bottom:6px; font-weight:600; color:#334155; font-size:14px; }
    .label-row { display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; }
    .label-row label { margin-bottom:0; }
    .fetch-link { background:none; border:none; color:#e31b23; font-size:12px; font-weight:600; cursor:pointer; padding:0; }
    .fetch-link:hover:not(:disabled) { text-decoration:underline; }
    .fetch-link:disabled { color:#94a3b8; cursor:not-allowed; }
    .fetch-hint { font-size:12px; color:#94a3b8; margin-top:4px; }
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

    /* Map card */
    .map-card { background:#fff; border-radius:12px; box-shadow:0 1px 3px rgba(0,0,0,0.08); overflow:hidden; position:sticky; top:20px; }
    .map-header { padding:20px 24px 0; }
    .map-header h3 { display:flex; align-items:center; gap:8px; font-size:16px; font-weight:700; color:#1a1a2e; margin:0 0 4px; }
    .map-hint { font-size:12px; color:#94a3b8; }
    .map-search-bar { display:flex; gap:8px; padding:12px 24px; }
    .map-search-bar .form-control { flex:1; }
    .map-search-btn { width:40px; height:40px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center; color:#64748b; flex-shrink:0; }
    .map-search-btn:hover { border-color:#e31b23; color:#e31b23; }
    .spinner-xs { width:16px; height:16px; border:2px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; display:inline-block; }
    .map-container { height:420px; width:100%; }
    .map-coords { display:flex; gap:16px; padding:10px 24px; background:#f8f9fa; font-size:13px; color:#64748b; font-family:monospace; }
  `]
})
export class OutletLocationFormComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer') mapContainer!: ElementRef;

  isEdit = false;
  locationId: string | null = null;
  states = signal<any[]>([]);
  cities = signal<any[]>([]);
  areas = signal<any[]>([]);
  citiesLoading = signal(false);
  loadingData = signal(false);
  saving = signal(false);
  fetchingStates = signal(false);
  fetchingCities = signal(false);
  mapSearching = signal(false);
  error = signal('');
  mapSearchQuery = '';
  form: any = { name: '', address: '', post_code: '', latitude: '', longitude: '', state_id: '', city_id: '', area_id: '', area_name: '', status: true };

  private map: any;
  private marker: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private toast: ToastService) {}

  ngOnInit() {
    this.locationId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.locationId;
    this.loadStates();
    if (this.isEdit) this.loadLocation();
  }

  ngAfterViewInit() {
    setTimeout(() => this.initMap(), 100);
  }

  initMap() {
    if (typeof L === 'undefined') return;
    const lat = parseFloat(this.form.latitude) || 20.5937;
    const lng = parseFloat(this.form.longitude) || 78.9629;
    const zoom = this.form.latitude ? 14 : 5;

    this.map = L.map('outlet-map').setView([lat, lng], zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    if (this.form.latitude && this.form.longitude) {
      this.marker = L.marker([lat, lng], { draggable: true }).addTo(this.map);
      this.marker.on('dragend', () => {
        const pos = this.marker.getLatLng();
        this.updateFromCoords(pos.lat, pos.lng);
      });
    }

    this.map.on('click', (e: any) => {
      this.updateFromCoords(e.latlng.lat, e.latlng.lng);
    });
  }

  updateFromCoords(lat: number, lng: number) {
    this.form.latitude = lat.toFixed(6);
    this.form.longitude = lng.toFixed(6);

    if (this.marker) {
      this.marker.setLatLng([lat, lng]);
    } else {
      this.marker = L.marker([lat, lng], { draggable: true }).addTo(this.map);
      this.marker.on('dragend', () => {
        const pos = this.marker.getLatLng();
        this.updateFromCoords(pos.lat, pos.lng);
      });
    }

    // Reverse geocode using Nominatim
    this.http.get<any>(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`).subscribe({
      next: (res) => {
        if (res?.display_name) {
          this.form.address = res.display_name;
        }
        if (res?.address) {
          if (res.address.postcode) this.form.post_code = res.address.postcode;
          if (!this.form.name && (res.address.neighbourhood || res.address.suburb || res.address.city)) {
            this.form.name = res.address.neighbourhood || res.address.suburb || res.address.city || '';
          }
        }
        this.marker.bindPopup(`<b>${this.form.name || 'Selected Location'}</b><br>${res.display_name || ''}`).openPopup();
      }
    });
  }

  onCoordsManualChange() {
    const lat = parseFloat(this.form.latitude);
    const lng = parseFloat(this.form.longitude);
    if (!isNaN(lat) && !isNaN(lng) && this.map) {
      this.map.setView([lat, lng], 14);
      if (this.marker) {
        this.marker.setLatLng([lat, lng]);
      } else {
        this.marker = L.marker([lat, lng], { draggable: true }).addTo(this.map);
        this.marker.on('dragend', () => {
          const pos = this.marker.getLatLng();
          this.updateFromCoords(pos.lat, pos.lng);
        });
      }
    }
  }

  searchLocation() {
    if (!this.mapSearchQuery.trim()) return;
    this.mapSearching.set(true);
    this.http.get<any[]>(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(this.mapSearchQuery)}&countrycodes=in&limit=1`).subscribe({
      next: (results) => {
        if (results?.length > 0) {
          const r = results[0];
          const lat = parseFloat(r.lat);
          const lng = parseFloat(r.lon);
          this.map.setView([lat, lng], 14);
          this.updateFromCoords(lat, lng);
        } else {
          this.toast.error('Location not found');
        }
      },
      error: () => this.toast.error('Search failed'),
      complete: () => this.mapSearching.set(false)
    });
  }

  loadStates() {
    this.http.get<any>(`${environment.apiUrl}/admin/states`).subscribe({
      next: (res) => this.states.set(res.data || [])
    });
  }

  loadCities(stateId: string) {
    if (!stateId) { this.cities.set([]); return; }
    this.citiesLoading.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/cities`, { params: { state_id: stateId } }).subscribe({
      next: (res) => {
        const cities = res.data || [];
        this.cities.set(cities);
        if (cities.length === 0 && stateId) {
          this.fetchCitiesFromApi();
        }
      },
      complete: () => this.citiesLoading.set(false)
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
    this.form.area_name = '';
    this.areas.set([]);
    this.loadCities(this.form.state_id);
  }

  onCityChange() {
    this.form.area_id = '';
    this.form.area_name = '';
    this.loadAreas(this.form.city_id);
  }

  fetchStatesFromApi() {
    this.fetchingStates.set(true);
    this.http.post<any>(`${environment.apiUrl}/admin/locations/import-states`, {}).subscribe({
      next: (res) => { this.toast.success(res.message || 'States imported!'); this.loadStates(); },
      error: (err) => this.toast.error(err.error?.error || 'Failed to fetch states'),
      complete: () => this.fetchingStates.set(false)
    });
  }

  fetchCitiesFromApi() {
    if (!this.form.state_id) return;
    this.fetchingCities.set(true);
    this.http.post<any>(`${environment.apiUrl}/admin/locations/import-cities`, { state_id: this.form.state_id }).subscribe({
      next: (res) => {
        this.toast.success(res.message || 'Cities imported!');
        this.loadCities(this.form.state_id);
      },
      error: (err) => this.toast.error(err.error?.error || 'Failed to fetch cities'),
      complete: () => this.fetchingCities.set(false)
    });
  }

  loadLocation() {
    this.loadingData.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/outlet-locations/${this.locationId}`).subscribe({
      next: (res) => {
        const l = res.data;
        this.form = {
          name: l.name || '', address: l.address || '', post_code: l.post_code || '',
          latitude: l.latitude || '', longitude: l.longitude || '',
          state_id: l.state_id ? String(l.state_id) : '', city_id: l.city_id ? String(l.city_id) : '', area_id: l.area_id ? String(l.area_id) : '',
          area_name: '', status: !!l.status
        };
        if (l.state_id) this.loadCities(String(l.state_id));
        if (l.city_id) this.loadAreas(String(l.city_id));
        // Update map to existing location
        setTimeout(() => {
          if (this.map && l.latitude && l.longitude) {
            const lat = parseFloat(l.latitude);
            const lng = parseFloat(l.longitude);
            this.map.setView([lat, lng], 14);
            this.marker = L.marker([lat, lng], { draggable: true }).addTo(this.map);
            this.marker.on('dragend', () => {
              const pos = this.marker.getLatLng();
              this.updateFromCoords(pos.lat, pos.lng);
            });
          }
        }, 200);
      },
      error: () => this.router.navigate(['/admin/outletAddress/all']),
      complete: () => this.loadingData.set(false)
    });
  }

  onSubmit() {
    if (!this.form.name.trim()) { this.error.set('Name is required'); return; }
    this.saving.set(true);
    this.error.set('');

    const submitData = () => {
      const data = {
        name: this.form.name, address: this.form.address, post_code: this.form.post_code,
        latitude: this.form.latitude, longitude: this.form.longitude,
        state_id: this.form.state_id || null, city_id: this.form.city_id || null,
        area_id: this.form.area_id || null, status: this.form.status ? 1 : 0
      };
      const req = this.isEdit
        ? this.http.put<any>(`${environment.apiUrl}/admin/outlet-locations/${this.locationId}`, data)
        : this.http.post<any>(`${environment.apiUrl}/admin/outlet-locations`, data);
      req.subscribe({
        next: () => { this.toast.success(this.isEdit ? 'Location updated' : 'Location created'); this.router.navigate(['/admin/outletAddress/all']); },
        error: (err) => { this.toast.error(err.error?.error || 'Something went wrong'); this.error.set(err.error?.error || 'Something went wrong'); this.saving.set(false); },
        complete: () => this.saving.set(false)
      });
    };

    if (this.form.area_name?.trim() && !this.form.area_id && this.form.city_id) {
      this.http.post<any>(`${environment.apiUrl}/admin/areas`, { area: this.form.area_name, city_id: this.form.city_id, status: 1 }).subscribe({
        next: (res) => { this.form.area_id = res.data?.id; submitData(); },
        error: () => submitData()
      });
    } else {
      submitData();
    }
  }
}
