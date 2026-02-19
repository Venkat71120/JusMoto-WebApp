import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-my-cars',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ConfirmModalComponent],
  template: `
    <div class="my-cars-page">
      <div class="page-header">
        <div>
          <h1 class="page-title">My Cars</h1>
          <p class="page-subtitle">Manage your registered vehicles</p>
        </div>
        <button class="btn-primary" (click)="openAddModal()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add New Car
        </button>
      </div>

      <!-- Loading -->
      <div class="loading-center" *ngIf="loading()"><div class="spinner"></div></div>

      <!-- Empty State -->
      <div class="empty-state" *ngIf="!loading() && cars().length === 0 && !showModal()">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.2">
          <path d="M7 17m-2 0a2 2 0 104 0 2 2 0 10-4 0"/><path d="M17 17m-2 0a2 2 0 104 0 2 2 0 10-4 0"/>
          <path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 012 2v4h-2"/><path d="M9 17h6"/>
        </svg>
        <h3>No cars added yet</h3>
        <p>Add your vehicle to quickly select it during checkout</p>
        <button class="btn-primary" (click)="openAddModal()">Add Your First Car</button>
      </div>

      <!-- Cars Grid -->
      <div class="cars-grid" *ngIf="!loading() && cars().length > 0">
        <div class="car-card" *ngFor="let car of cars()" [class.is-default]="car.is_default">
          <div class="car-card-top">
            <div class="car-img-wrap">
              <img *ngIf="car.car?.image" [src]="car.car.image" [alt]="car.car?.name" class="car-img" (error)="$any($event.target).style.display='none'">
              <svg *ngIf="!car.car?.image" class="car-placeholder" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.5">
                <path d="M7 17m-2 0a2 2 0 104 0 2 2 0 10-4 0"/><path d="M17 17m-2 0a2 2 0 104 0 2 2 0 10-4 0"/>
                <path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 012 2v4h-2"/><path d="M9 17h6"/>
              </svg>
            </div>
            <span *ngIf="car.is_default" class="default-badge">Default</span>
          </div>
          <div class="car-card-body">
            <h3 class="car-name">{{ car.brand?.name || '' }} {{ car.car?.name || '' }}</h3>
            <p class="car-variant" *ngIf="car.variant?.name">{{ car.variant.name }}</p>
            <div class="car-reg">{{ car.registration_number || '-' }}</div>
          </div>
          <div class="car-card-actions">
            <button class="act-btn" (click)="openEditModal(car)" title="Edit">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
              Edit
            </button>
            <button *ngIf="!car.is_default" class="act-btn" (click)="setDefault(car.id)" title="Set Default">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Default
            </button>
            <button class="act-btn danger" (click)="confirmDelete(car)" title="Delete">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
              Delete
            </button>
          </div>
        </div>
      </div>

      <!-- Add / Edit Modal -->
      <div class="modal-overlay" *ngIf="showModal()" (click)="closeModal()">
        <div class="modal-box" (click)="$event.stopPropagation()">
          <div class="modal-head">
            <h2>{{ editingId ? 'Edit Car' : 'Add New Car' }}</h2>
            <button class="close-btn" (click)="closeModal()">&times;</button>
          </div>

          <div class="modal-body">
            <!-- Brand -->
            <div class="form-group">
              <div class="label-row">
                <label>Brand *</label>
                <button *ngIf="brands().length === 0" class="fetch-link" (click)="fetchBrandsFromApi()" [disabled]="fetchingBrands()">
                  {{ fetchingBrands() ? 'Fetching...' : 'Fetch All Brands' }}
                </button>
              </div>
              <div class="search-select">
                <input type="text" class="form-control" [(ngModel)]="brandSearch" (input)="filterBrands()" (focus)="showBrandDropdown.set(true)" placeholder="Search brand...">
                <div class="dropdown-list" *ngIf="showBrandDropdown() && filteredBrands().length > 0">
                  <div class="dropdown-item" *ngFor="let b of filteredBrands()" (click)="selectBrand(b)">
                    {{ b.name }}
                  </div>
                </div>
              </div>
              <div class="selected-tag" *ngIf="form.brand_id && form.brand_name">
                <span>{{ form.brand_name }}</span>
                <button (click)="clearBrand()">&times;</button>
              </div>
            </div>

            <!-- Car Model -->
            <div class="form-group">
              <div class="label-row">
                <label>Car Model *</label>
                <button *ngIf="form.brand_id && models().length === 0 && !loadingModels()" class="fetch-link" (click)="fetchModelsFromApi()" [disabled]="fetchingModels()">
                  {{ fetchingModels() ? 'Fetching...' : 'Fetch Models' }}
                </button>
              </div>
              <div class="search-select">
                <input type="text" class="form-control" [(ngModel)]="modelSearch" (input)="filterModels()" (focus)="showModelDropdown.set(true)" [disabled]="!form.brand_id" placeholder="{{ form.brand_id ? 'Search model...' : 'Select brand first' }}">
                <div class="dropdown-list" *ngIf="showModelDropdown() && filteredModels().length > 0">
                  <div class="dropdown-item" *ngFor="let m of filteredModels()" (click)="selectModel(m)">
                    {{ m.name }}
                  </div>
                </div>
              </div>
              <div class="selected-tag" *ngIf="form.car_id && form.car_name">
                <span>{{ form.car_name }}</span>
                <button (click)="clearModel()">&times;</button>
              </div>
              <div class="fetch-hint" *ngIf="loadingModels()">Loading models...</div>
            </div>

            <!-- Variant -->
            <div class="form-group">
              <label>Variant / Trim</label>
              <div *ngIf="variants().length > 0">
                <select class="form-control" [(ngModel)]="form.variant_id">
                  <option value="">Select variant (optional)</option>
                  <option *ngFor="let v of variants()" [value]="v.id">{{ v.name }}</option>
                </select>
                <div class="or-divider">or type a new one</div>
              </div>
              <input type="text" class="form-control" [(ngModel)]="form.variant_name" placeholder="e.g. VXI, ZXI+, LXI" [disabled]="!!form.variant_id">
            </div>

            <!-- Registration Number -->
            <div class="form-group">
              <label>Registration Number *</label>
              <input type="text" class="form-control reg-input" [(ngModel)]="form.registration_number" placeholder="e.g. MH12AB1234" (input)="onRegInput($event)">
            </div>

            <!-- Default -->
            <div class="form-group">
              <label class="toggle-label">
                <input type="checkbox" [(ngModel)]="form.is_default"> Set as default vehicle
              </label>
            </div>
          </div>

          <div class="modal-foot">
            <button class="btn-cancel" (click)="closeModal()">Cancel</button>
            <button class="btn-primary" (click)="saveCar()" [disabled]="saving() || !isFormValid()">
              {{ saving() ? 'Saving...' : (editingId ? 'Update Car' : 'Add Car') }}
            </button>
          </div>
        </div>
      </div>

      <!-- Delete Confirmation -->
      <app-confirm-modal
        [open]="deleteModalOpen()"
        title="Delete Car"
        [message]="'Remove ' + (deletingCar()?.brand?.name || '') + ' ' + (deletingCar()?.car?.name || '') + '?'"
        confirmText="Delete"
        type="danger"
        (confirmed)="doDelete()"
        (cancelled)="deleteModalOpen.set(false)">
      </app-confirm-modal>
    </div>
  `,
  styles: [`
    .my-cars-page { max-width:1100px; }
    .page-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:28px; flex-wrap:wrap; gap:16px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0 0 4px; }
    .page-subtitle { color:#64748b; margin:0; font-size:14px; }
    .btn-primary { display:inline-flex; align-items:center; gap:8px; padding:12px 24px; background:#e31b23; color:#fff; border:none; border-radius:10px; font-weight:600; font-size:14px; cursor:pointer; transition:all 0.2s; }
    .btn-primary:hover { background:#b11218; }
    .btn-primary:disabled { opacity:0.6; cursor:not-allowed; }
    .loading-center { display:flex; justify-content:center; padding:60px; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }

    .empty-state { text-align:center; padding:60px 24px; background:#fff; border-radius:16px; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .empty-state h3 { font-size:20px; color:#1a1a2e; margin:16px 0 8px; }
    .empty-state p { color:#64748b; margin:0 0 24px; }

    /* Grid */
    .cars-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:20px; }
    .car-card { background:#fff; border-radius:14px; border:2px solid #e5e7eb; overflow:hidden; transition:all 0.2s; }
    .car-card:hover { border-color:#e31b23; box-shadow:0 4px 16px rgba(227,27,35,0.1); }
    .car-card.is-default { border-color:#e31b23; box-shadow:0 4px 16px rgba(227,27,35,0.12); }
    .car-card-top { position:relative; background:#f8f9fa; padding:20px; display:flex; align-items:center; justify-content:center; min-height:100px; }
    .car-img { max-width:140px; max-height:80px; object-fit:contain; }
    .car-placeholder { opacity:0.5; }
    .default-badge { position:absolute; top:12px; right:12px; background:#e31b23; color:#fff; font-size:11px; font-weight:700; padding:3px 10px; border-radius:20px; }
    .car-card-body { padding:16px 20px; }
    .car-name { font-size:18px; font-weight:700; color:#1a1a2e; margin:0 0 4px; }
    .car-variant { font-size:14px; color:#64748b; margin:0 0 8px; }
    .car-reg { display:inline-block; background:#fff5f5; color:#e31b23; font-weight:700; font-size:14px; padding:4px 12px; border-radius:6px; letter-spacing:1px; border:1px solid #fecaca; }
    .car-card-actions { display:flex; gap:6px; padding:12px 16px; border-top:1px solid #f1f5f9; background:#fafafa; }
    .act-btn { display:inline-flex; align-items:center; gap:5px; padding:6px 12px; font-size:12px; font-weight:600; background:#fff; border:1px solid #e5e7eb; border-radius:6px; color:#475569; cursor:pointer; transition:all 0.15s; }
    .act-btn:hover { border-color:#e31b23; color:#e31b23; }
    .act-btn.danger:hover { border-color:#dc2626; color:#dc2626; }

    /* Modal */
    .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:9999; display:flex; align-items:center; justify-content:center; padding:20px; }
    .modal-box { background:#fff; border-radius:16px; width:100%; max-width:520px; max-height:90vh; overflow-y:auto; }
    .modal-head { display:flex; justify-content:space-between; align-items:center; padding:20px 24px; border-bottom:1px solid #e5e7eb; }
    .modal-head h2 { font-size:20px; font-weight:700; color:#1a1a2e; margin:0; }
    .close-btn { background:#f1f5f9; border:none; width:32px; height:32px; border-radius:50%; font-size:22px; cursor:pointer; color:#64748b; line-height:1; }
    .modal-body { padding:24px; }
    .modal-foot { display:flex; justify-content:flex-end; gap:12px; padding:16px 24px; border-top:1px solid #e5e7eb; }
    .btn-cancel { padding:10px 20px; border:1px solid #d1d5db; border-radius:8px; background:#fff; color:#374151; font-weight:600; cursor:pointer; font-size:14px; }

    .form-group { margin-bottom:20px; }
    .form-group label { display:block; margin-bottom:6px; font-weight:600; color:#334155; font-size:14px; }
    .label-row { display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; }
    .label-row label { margin-bottom:0; }
    .fetch-link { background:none; border:none; color:#e31b23; font-size:12px; font-weight:600; cursor:pointer; padding:0; }
    .fetch-link:hover:not(:disabled) { text-decoration:underline; }
    .fetch-link:disabled { color:#94a3b8; cursor:not-allowed; }
    .fetch-hint { font-size:12px; color:#94a3b8; margin-top:4px; }
    .form-control { width:100%; padding:10px 14px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; box-sizing:border-box; }
    .form-control:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.1); }
    .form-control:disabled { background:#f8f9fa; color:#94a3b8; }
    .reg-input { text-transform:uppercase; letter-spacing:1px; font-weight:600; }
    .toggle-label { display:flex; align-items:center; gap:8px; cursor:pointer; font-weight:500; }
    .toggle-label input { accent-color:#e31b23; width:16px; height:16px; }
    .or-divider { text-align:center; color:#94a3b8; font-size:12px; margin:8px 0; }

    /* Searchable dropdown */
    .search-select { position:relative; }
    .dropdown-list { position:absolute; top:100%; left:0; right:0; background:#fff; border:1px solid #e5e7eb; border-radius:8px; max-height:200px; overflow-y:auto; z-index:100; box-shadow:0 8px 24px rgba(0,0,0,0.12); margin-top:4px; }
    .dropdown-item { padding:10px 14px; font-size:14px; cursor:pointer; border-bottom:1px solid #f8f9fa; }
    .dropdown-item:hover { background:#fff5f5; color:#e31b23; }
    .dropdown-item:last-child { border-bottom:none; }
    .selected-tag { display:inline-flex; align-items:center; gap:6px; margin-top:8px; padding:4px 12px; background:#fee2e2; color:#e31b23; border-radius:20px; font-size:13px; font-weight:600; }
    .selected-tag button { background:none; border:none; cursor:pointer; font-size:16px; color:#e31b23; line-height:1; padding:0 2px; }
  `]
})
export class MyCarsComponent implements OnInit {
  cars = signal<any[]>([]);
  brands = signal<any[]>([]);
  models = signal<any[]>([]);
  variants = signal<any[]>([]);
  filteredBrands = signal<any[]>([]);
  filteredModels = signal<any[]>([]);
  loading = signal(true);
  loadingModels = signal(false);
  showModal = signal(false);
  saving = signal(false);
  fetchingBrands = signal(false);
  fetchingModels = signal(false);
  deleteModalOpen = signal(false);
  deletingCar = signal<any>(null);
  showBrandDropdown = signal(false);
  showModelDropdown = signal(false);

  editingId: number | null = null;
  brandSearch = '';
  modelSearch = '';
  form: any = { brand_id: null, brand_name: '', car_id: null, car_name: '', variant_id: '', variant_name: '', registration_number: '', is_default: false };

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() {
    this.loadCars();
    this.loadBrands();

    // Close dropdowns on outside click
    document.addEventListener('click', () => {
      this.showBrandDropdown.set(false);
      this.showModelDropdown.set(false);
    });
  }

  loadCars() {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/user/cars`).subscribe({
      next: (res) => this.cars.set(res.data || []),
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  loadBrands() {
    this.http.get<any>(`${environment.apiUrl}/brands`).subscribe({
      next: (res) => {
        this.brands.set(res.data || []);
        this.filteredBrands.set(res.data || []);
      }
    });
  }

  filterBrands() {
    const q = this.brandSearch.toLowerCase();
    this.filteredBrands.set(
      this.brands().filter(b => b.name.toLowerCase().includes(q)).slice(0, 50)
    );
    this.showBrandDropdown.set(true);
  }

  selectBrand(brand: any) {
    this.form.brand_id = brand.id;
    this.form.brand_name = brand.name;
    this.brandSearch = '';
    this.showBrandDropdown.set(false);
    this.clearModel();
    this.loadModelsForBrand(brand.id);
  }

  clearBrand() {
    this.form.brand_id = null;
    this.form.brand_name = '';
    this.brandSearch = '';
    this.clearModel();
    this.models.set([]);
    this.filteredModels.set([]);
  }

  loadModelsForBrand(brandId: number) {
    this.loadingModels.set(true);
    this.http.get<any>(`${environment.apiUrl}/brands/${brandId}/cars`).subscribe({
      next: (res) => {
        const carsList = res.data || [];
        this.models.set(carsList);
        this.filteredModels.set(carsList);
        // Auto-fetch from API if no models exist
        if (carsList.length === 0) {
          this.fetchModelsFromApi();
        }
      },
      error: () => {},
      complete: () => this.loadingModels.set(false)
    });
  }

  filterModels() {
    const q = this.modelSearch.toLowerCase();
    this.filteredModels.set(
      this.models().filter(m => m.name.toLowerCase().includes(q)).slice(0, 50)
    );
    this.showModelDropdown.set(true);
  }

  selectModel(model: any) {
    this.form.car_id = model.id;
    this.form.car_name = model.name;
    this.modelSearch = '';
    this.showModelDropdown.set(false);
    this.form.variant_id = '';
    this.form.variant_name = '';
    // Load variants for this car
    this.http.get<any>(`${environment.apiUrl}/cars/${model.id}/variants`).subscribe({
      next: (res) => this.variants.set(res.data || [])
    });
  }

  clearModel() {
    this.form.car_id = null;
    this.form.car_name = '';
    this.form.variant_id = '';
    this.form.variant_name = '';
    this.modelSearch = '';
    this.variants.set([]);
  }

  fetchBrandsFromApi() {
    this.fetchingBrands.set(true);
    this.http.post<any>(`${environment.apiUrl}/cars/fetch-brands`, {}).subscribe({
      next: (res) => {
        this.toast.success(res.message || 'Brands imported!');
        this.loadBrands();
      },
      error: (err) => this.toast.error(err.error?.error || 'Failed to fetch brands'),
      complete: () => this.fetchingBrands.set(false)
    });
  }

  fetchModelsFromApi() {
    if (!this.form.brand_id) return;
    this.fetchingModels.set(true);
    this.http.post<any>(`${environment.apiUrl}/cars/fetch-models`, { brand_id: this.form.brand_id }).subscribe({
      next: (res) => {
        this.toast.success(res.message || 'Models imported!');
        this.loadModelsForBrand(this.form.brand_id);
      },
      error: (err) => this.toast.error(err.error?.error || 'Failed to fetch models'),
      complete: () => this.fetchingModels.set(false)
    });
  }

  onRegInput(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    this.form.registration_number = input.value;
  }

  isFormValid(): boolean {
    return this.form.brand_id && this.form.car_id && this.form.registration_number?.trim();
  }

  openAddModal() {
    this.editingId = null;
    this.form = { brand_id: null, brand_name: '', car_id: null, car_name: '', variant_id: '', variant_name: '', registration_number: '', is_default: false };
    this.brandSearch = '';
    this.modelSearch = '';
    this.models.set([]);
    this.filteredModels.set([]);
    this.variants.set([]);
    this.showModal.set(true);
  }

  openEditModal(car: any) {
    this.editingId = car.id;
    this.form = {
      brand_id: car.brand_id, brand_name: car.brand?.name || '',
      car_id: car.car_id, car_name: car.car?.name || '',
      variant_id: car.variant_id || '', variant_name: '',
      registration_number: car.registration_number || '',
      is_default: !!car.is_default
    };
    this.brandSearch = '';
    this.modelSearch = '';
    // Load models and variants for the existing car
    if (car.brand_id) this.loadModelsForBrand(car.brand_id);
    if (car.car_id) {
      this.http.get<any>(`${environment.apiUrl}/cars/${car.car_id}/variants`).subscribe({
        next: (res) => this.variants.set(res.data || [])
      });
    }
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
    this.editingId = null;
  }

  saveCar() {
    if (!this.isFormValid()) return;
    this.saving.set(true);

    const body: any = {
      brand_id: this.form.brand_id,
      car_id: this.form.car_id,
      registration_number: this.form.registration_number,
      is_default: this.form.is_default
    };

    if (this.form.variant_id) {
      body.variant_id = this.form.variant_id;
    } else if (this.form.variant_name?.trim()) {
      body.variant_name = this.form.variant_name.trim();
    }

    const req = this.editingId
      ? this.http.put<any>(`${environment.apiUrl}/user/cars/${this.editingId}`, body)
      : this.http.post<any>(`${environment.apiUrl}/user/cars`, body);

    req.subscribe({
      next: (res) => {
        this.toast.success(res.message || (this.editingId ? 'Car updated' : 'Car added'));
        this.closeModal();
        this.loadCars();
      },
      error: (err) => this.toast.error(err.error?.error || 'Failed to save car'),
      complete: () => this.saving.set(false)
    });
  }

  setDefault(id: number) {
    this.http.put<any>(`${environment.apiUrl}/user/cars/${id}/default`, {}).subscribe({
      next: () => {
        this.toast.success('Default car updated');
        this.cars.update(items => items.map(c => ({ ...c, is_default: c.id === id ? 1 : 0 })));
      },
      error: () => this.toast.error('Failed to update default')
    });
  }

  confirmDelete(car: any) {
    this.deletingCar.set(car);
    this.deleteModalOpen.set(true);
  }

  doDelete() {
    const car = this.deletingCar();
    if (!car) return;
    this.http.delete<any>(`${environment.apiUrl}/user/cars/${car.id}`).subscribe({
      next: () => {
        this.toast.success('Car deleted');
        this.cars.update(items => items.filter(c => c.id !== car.id));
        this.deleteModalOpen.set(false);
      },
      error: () => this.toast.error('Failed to delete car')
    });
  }
}
