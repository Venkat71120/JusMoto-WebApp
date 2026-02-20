import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ConfirmModalComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Cars</h1>
      <a routerLink="/admin/car/add" class="btn-primary">+ Add Car</a>
    </div>

    <div class="filters-bar">
      <div class="search-box">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="text" placeholder="Search cars..." [(ngModel)]="search" (input)="onSearch()">
      </div>
      <select [(ngModel)]="brandFilter" (change)="loadCars()">
        <option value="">All Brands</option>
        <option *ngFor="let b of brands()" [value]="b.id">{{ b.name }}</option>
      </select>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Brand</th>
            <th>Car Name</th>
            <th>Year</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let car of cars(); let i = index">
            <td>{{ (pagination().page - 1) * pagination().limit + i + 1 }}</td>
            <td><img *ngIf="car.image" [src]="getImageUrl(car.image)" class="thumb" alt=""><span *ngIf="!car.image" class="no-img">-</span></td>
            <td>{{ car.brand?.name || '-' }}</td>
            <td class="fw-600">{{ car.name }}</td>
            <td>{{ car.Year || '-' }}</td>
            <td>
              <button class="badge badge-clickable" [class.badge-active]="car.status" [class.badge-inactive]="!car.status" (click)="openStatusModal(car)">
                {{ car.status ? 'Active' : 'Inactive' }}
              </button>
            </td>
            <td>
              <div class="action-btns">
                <button class="btn-action btn-view" (click)="openViewModal(car)" title="View">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
                <a [routerLink]="['/admin/car/edit-car', car.id]" class="btn-action btn-edit" title="Edit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </a>
                <button class="btn-action btn-delete" (click)="openDeleteModal(car)" title="Delete">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
            </td>
          </tr>
          <tr *ngIf="cars().length === 0 && !loading()">
            <td colspan="7" class="empty-state">No cars found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination" *ngIf="pagination().totalPages > 1">
      <button class="page-btn" [disabled]="!pagination().hasPrevPage" (click)="goToPage(pagination().page - 1)">&laquo; Prev</button>
      <span class="page-info">Page {{ pagination().page }} of {{ pagination().totalPages }}</span>
      <button class="page-btn" [disabled]="!pagination().hasNextPage" (click)="goToPage(pagination().page + 1)">Next &raquo;</button>
    </div>

    <!-- View Car Modal -->
    <div class="modal-overlay" *ngIf="viewCar()" (click)="viewCar.set(null)">
      <div class="view-modal" (click)="$event.stopPropagation()">
        <div class="view-header">
          <h3>Car Details</h3>
          <button class="modal-close" (click)="viewCar.set(null)">&times;</button>
        </div>
        <div class="view-body">
          <div class="view-image" *ngIf="viewCar()?.image">
            <img [src]="getImageUrl(viewCar()?.image)" alt="Car image">
          </div>
          <div class="view-grid">
            <div class="view-item"><label>ID</label><span>{{ viewCar()?.id }}</span></div>
            <div class="view-item"><label>Brand</label><span>{{ viewCar()?.brand?.name || '-' }}</span></div>
            <div class="view-item"><label>Car Name</label><span class="fw-600">{{ viewCar()?.name }}</span></div>
            <div class="view-item"><label>Year</label><span>{{ viewCar()?.Year || '-' }}</span></div>
            <div class="view-item"><label>Slug</label><span>{{ viewCar()?.slug || '-' }}</span></div>
            <div class="view-item"><label>Status</label>
              <span class="badge" [class.badge-active]="viewCar()?.status" [class.badge-inactive]="!viewCar()?.status">
                {{ viewCar()?.status ? 'Active' : 'Inactive' }}
              </span>
            </div>
            <div class="view-item"><label>Created</label><span>{{ viewCar()?.created_at | date:'medium' }}</span></div>
            <div class="view-item"><label>Updated</label><span>{{ viewCar()?.updated_at | date:'medium' }}</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Status Change Modal -->
    <app-confirm-modal
      [open]="!!statusCar()"
      [title]="statusCar()?.status ? 'Deactivate Car' : 'Activate Car'"
      [message]="'Are you sure you want to ' + (statusCar()?.status ? 'deactivate' : 'activate') + ' &quot;' + (statusCar()?.name || '') + '&quot;?'"
      [confirmText]="statusCar()?.status ? 'Deactivate' : 'Activate'"
      [type]="statusCar()?.status ? 'warning' : 'info'"
      (confirmed)="confirmStatusChange()"
      (cancelled)="statusCar.set(null)">
    </app-confirm-modal>

    <!-- Delete Modal -->
    <app-confirm-modal
      [open]="!!deletingCar()"
      title="Delete Car"
      [message]="'Are you sure you want to delete &quot;' + (deletingCar()?.name || '') + '&quot;? This action cannot be undone.'"
      confirmText="Delete"
      type="danger"
      (confirmed)="confirmDelete()"
      (cancelled)="deletingCar.set(null)">
    </app-confirm-modal>
  `,
  styles: [`
    .page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .page-title { font-size: 24px; font-weight: 700; color: #1a1a2e; }
    .btn-primary { background: #e31b23; color: #fff; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; text-decoration: none; font-size: 14px; }
    .btn-primary:hover { background: #b11218; }
    .filters-bar { display: flex; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
    .search-box { display: flex; align-items: center; gap: 8px; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 0 14px; flex: 1; min-width: 200px; }
    .search-box input { border: none; outline: none; padding: 10px 0; width: 100%; font-size: 14px; }
    .filters-bar select { padding: 10px 14px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; font-size: 14px; cursor: pointer; }
    .table-container { position: relative; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
    .loading-overlay { position: absolute; inset: 0; background: rgba(255,255,255,0.7); display: flex; align-items: center; justify-content: center; z-index: 10; }
    .spinner { width: 36px; height: 36px; border: 3px solid #f3f4f6; border-top-color: #e31b23; border-radius: 50%; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .data-table { width: 100%; border-collapse: collapse; }
    .data-table th { background: #f8f9fa; padding: 12px 16px; text-align: left; font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
    .data-table td { padding: 12px 16px; border-top: 1px solid #f1f5f9; font-size: 14px; color: #334155; }
    .data-table tbody tr:hover { background: #fff5f5; }
    .thumb { width: 48px; height: 36px; border-radius: 8px; object-fit: contain; background: #f8f9fa; padding: 2px; }
    .no-img { color: #94a3b8; }
    .fw-600 { font-weight: 600; }
    .badge { display: inline-flex; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; border: none; }
    .badge-clickable { cursor: pointer; transition: opacity 0.2s; }
    .badge-clickable:hover { opacity: 0.8; }
    .badge-active { background: #dcfce7; color: #16a34a; }
    .badge-inactive { background: #fee2e2; color: #dc2626; }
    .action-btns { display: flex; gap: 6px; }
    .btn-action { padding: 6px; border: 1px solid #e5e7eb; border-radius: 6px; background: #fff; cursor: pointer; color: #64748b; transition: all 0.2s; display: inline-flex; align-items: center; justify-content: center; text-decoration: none; }
    .btn-view:hover { color: #8b5cf6; border-color: #8b5cf6; }
    .btn-edit:hover { color: #3b82f6; border-color: #3b82f6; }
    .btn-delete:hover { color: #ef4444; border-color: #ef4444; }
    .empty-state { text-align: center; padding: 40px !important; color: #94a3b8; }
    .pagination { display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 20px; }
    .page-btn { padding: 8px 16px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; cursor: pointer; font-weight: 500; color: #334155; }
    .page-btn:hover:not(:disabled) { border-color: #e31b23; color: #e31b23; }
    .page-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .page-info { font-size: 14px; color: #64748b; }

    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 9998; display: flex; align-items: center; justify-content: center; }
    .view-modal { background: #fff; border-radius: 16px; width: 90vw; max-width: 560px; max-height: 85vh; overflow-y: auto; box-shadow: 0 20px 60px rgba(0,0,0,0.2); }
    .view-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; border-bottom: 1px solid #e5e7eb; }
    .view-header h3 { margin: 0; font-size: 18px; font-weight: 700; color: #1a1a2e; }
    .modal-close { background: none; border: none; font-size: 28px; cursor: pointer; color: #64748b; line-height: 1; }
    .view-body { padding: 24px; }
    .view-image { margin-bottom: 20px; text-align: center; }
    .view-image img { max-width: 100%; max-height: 220px; border-radius: 12px; object-fit: contain; background: #f8f9fa; }
    .view-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .view-item { display: flex; flex-direction: column; gap: 4px; }
    .view-item label { font-size: 12px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; }
    .view-item span { font-size: 14px; color: #334155; }

    @media (max-width: 768px) { .table-container { overflow-x: auto; } .view-grid { grid-template-columns: 1fr; } }
  `]
})
export class CarListComponent implements OnInit {
  cars = signal<any[]>([]);
  brands = signal<any[]>([]);
  loading = signal(false);
  search = '';
  brandFilter = '';
  pagination = signal<any>({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  viewCar = signal<any>(null);
  statusCar = signal<any>(null);
  deletingCar = signal<any>(null);
  private searchTimeout: any;

  private baseUrl = environment.apiUrl.replace('/api/v1', '');

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() { this.loadBrands(); this.loadCars(); }

  getImageUrl(image: string): string {
    if (!image) return '';
    if (image.startsWith('http')) return image;
    const filename = image.replace('uploads/media/', '').replace('media/', '');
    return `${this.baseUrl}/uploads/media/${filename}`;
  }

  loadBrands() {
    this.http.get<any>(`${environment.apiUrl}/admin/brands`).subscribe({
      next: (res) => this.brands.set(res.data || [])
    });
  }

  loadCars(page = 1) {
    this.loading.set(true);
    const params: any = { page, limit: 15 };
    if (this.search) params.search = this.search;
    if (this.brandFilter) params.brand_id = this.brandFilter;
    this.http.get<any>(`${environment.apiUrl}/admin/cars`, { params }).subscribe({
      next: (res) => { this.cars.set(res.data || []); this.pagination.set(res.pagination || {}); },
      error: () => this.toast.error('Failed to load cars'),
      complete: () => this.loading.set(false)
    });
  }

  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadCars(), 400);
  }

  goToPage(page: number) { this.loadCars(page); }

  openViewModal(car: any) { this.viewCar.set(car); }

  openStatusModal(car: any) { this.statusCar.set(car); }

  confirmStatusChange() {
    const car = this.statusCar();
    if (!car) return;
    const newStatus = car.status ? 0 : 1;
    this.http.put<any>(`${environment.apiUrl}/admin/cars/${car.id}`, { status: newStatus }).subscribe({
      next: () => {
        car.status = newStatus;
        this.toast.success(`Car ${newStatus ? 'activated' : 'deactivated'} successfully`);
        this.statusCar.set(null);
      },
      error: () => { this.toast.error('Failed to update status'); this.statusCar.set(null); }
    });
  }

  openDeleteModal(car: any) { this.deletingCar.set(car); }

  confirmDelete() {
    const car = this.deletingCar();
    if (!car) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/cars/${car.id}`).subscribe({
      next: () => {
        this.toast.success('Car deleted successfully');
        this.deletingCar.set(null);
        this.loadCars(this.pagination().page);
      },
      error: () => { this.toast.error('Failed to delete car'); this.deletingCar.set(null); }
    });
  }
}
