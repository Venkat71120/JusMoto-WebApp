import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="page-header">
      <div>
        <h1 class="page-title">Services Management</h1>
      </div>
      <a routerLink="/admin/services/create" class="btn-primary">+ Add Service</a>
    </div>

    <div class="filters-bar">
      <div class="search-box">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="text" placeholder="Search services..." [(ngModel)]="search" (input)="onSearch()">
      </div>
      <select [(ngModel)]="statusFilter" (change)="loadServices()">
        <option value="">All Status</option>
        <option value="1">Active</option>
        <option value="0">Inactive</option>
      </select>
      <select [(ngModel)]="featuredFilter" (change)="loadServices()">
        <option value="">All</option>
        <option value="1">Featured</option>
        <option value="0">Not Featured</option>
      </select>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Service</th>
            <th>Category</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Status</th>
            <th>Featured</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let svc of services(); let i = index">
            <td>{{ (pagination().page - 1) * pagination().limit + i + 1 }}</td>
            <td>
              <div class="service-cell">
                <img *ngIf="svc.image" [src]="svc.image" class="thumb" alt="">
                <div>
                  <strong>{{ svc.title }}</strong>
                  <small *ngIf="svc.duration">{{ svc.duration }}</small>
                </div>
              </div>
            </td>
            <td>{{ svc.category?.name || '-' }}</td>
            <td>&#8377;{{ svc.price | number:'1.0-0' }}</td>
            <td>
              <span *ngIf="svc.discount_price" class="text-green">&#8377;{{ svc.discount_price | number:'1.0-0' }}</span>
              <span *ngIf="!svc.discount_price" class="text-muted">-</span>
            </td>
            <td>
              <button class="badge badge-clickable" [class.badge-active]="svc.status" [class.badge-inactive]="!svc.status" (click)="toggleStatus(svc)">
                {{ svc.status ? 'Active' : 'Inactive' }}
              </button>
            </td>
            <td>
              <button class="badge badge-clickable" [class.badge-featured]="svc.is_featured" [class.badge-dim]="!svc.is_featured" (click)="toggleFeatured(svc)">
                {{ svc.is_featured ? 'Yes' : 'No' }}
              </button>
            </td>
            <td>
              <div class="action-btns">
                <a [routerLink]="['/admin/services', svc.id, 'edit']" class="btn-action btn-edit" title="Edit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </a>
                <button class="btn-action btn-delete" (click)="deleteService(svc)" title="Delete">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
            </td>
          </tr>
          <tr *ngIf="services().length === 0 && !loading()">
            <td colspan="8" class="empty-state">No services found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination" *ngIf="pagination().totalPages > 1">
      <button class="page-btn" [disabled]="!pagination().hasPrevPage" (click)="goToPage(pagination().page - 1)">&laquo; Prev</button>
      <span class="page-info">Page {{ pagination().page }} of {{ pagination().totalPages }}</span>
      <button class="page-btn" [disabled]="!pagination().hasNextPage" (click)="goToPage(pagination().page + 1)">Next &raquo;</button>
    </div>
  `,
  styles: [`
    .page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 12px; }
    .page-title { font-size: 24px; font-weight: 700; color: #1a1a2e; margin: 0; }
    .btn-primary { background: #e31b23; color: #fff; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; text-decoration: none; font-size: 14px; display: inline-flex; align-items: center; transition: background 0.2s; }
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
    .data-table th { background: #f8f9fa; padding: 12px 16px; text-align: left; font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; white-space: nowrap; }
    .data-table td { padding: 12px 16px; border-top: 1px solid #f1f5f9; font-size: 14px; color: #334155; }
    .data-table tbody tr:hover { background: #fff5f5; }
    .service-cell { display: flex; align-items: center; gap: 10px; }
    .service-cell small { display: block; color: #94a3b8; font-size: 12px; }
    .thumb { width: 40px; height: 40px; border-radius: 8px; object-fit: cover; }
    .text-green { color: #16a34a; font-weight: 600; }
    .text-muted { color: #94a3b8; }
    .badge { display: inline-flex; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; border: none; }
    .badge-clickable { cursor: pointer; transition: opacity 0.2s; }
    .badge-clickable:hover { opacity: 0.8; }
    .badge-active { background: #dcfce7; color: #16a34a; }
    .badge-inactive { background: #fee2e2; color: #dc2626; }
    .badge-featured { background: #fef3c7; color: #d97706; }
    .badge-dim { background: #f1f5f9; color: #94a3b8; }
    .action-btns { display: flex; gap: 6px; }
    .btn-action { padding: 6px; border: 1px solid #e5e7eb; border-radius: 6px; background: #fff; cursor: pointer; color: #64748b; transition: all 0.2s; display: inline-flex; align-items: center; justify-content: center; text-decoration: none; }
    .btn-edit:hover { color: #3b82f6; border-color: #3b82f6; }
    .btn-delete:hover { color: #ef4444; border-color: #ef4444; }
    .empty-state { text-align: center; padding: 40px !important; color: #94a3b8; }
    .pagination { display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 20px; }
    .page-btn { padding: 8px 16px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; cursor: pointer; font-weight: 500; color: #334155; transition: all 0.2s; }
    .page-btn:hover:not(:disabled) { border-color: #e31b23; color: #e31b23; }
    .page-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .page-info { font-size: 14px; color: #64748b; }
    @media (max-width: 768px) { .table-container { overflow-x: auto; } .data-table { min-width: 800px; } }
  `]
})
export class ServiceListComponent implements OnInit {
  services = signal<any[]>([]);
  loading = signal(false);
  search = '';
  statusFilter = '';
  featuredFilter = '';
  pagination = signal<any>({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  private searchTimeout: any;

  constructor(private http: HttpClient) {}

  ngOnInit() { this.loadServices(); }

  loadServices(page = 1) {
    this.loading.set(true);
    const params: any = { page, limit: 15 };
    if (this.search) params.search = this.search;
    if (this.statusFilter) params.status = this.statusFilter;
    if (this.featuredFilter) params.is_featured = this.featuredFilter;
    this.http.get<any>(`${environment.apiUrl}/admin/services`, { params }).subscribe({
      next: (res) => { this.services.set(res.data || []); this.pagination.set(res.pagination || {}); },
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadServices(), 400);
  }

  goToPage(page: number) { this.loadServices(page); }

  toggleStatus(svc: any) {
    this.http.put<any>(`${environment.apiUrl}/admin/services/${svc.id}/status`, {}).subscribe({
      next: (res) => { svc.status = svc.status ? 0 : 1; }
    });
  }

  toggleFeatured(svc: any) {
    this.http.put<any>(`${environment.apiUrl}/admin/services/${svc.id}/featured`, {}).subscribe({
      next: () => { svc.is_featured = svc.is_featured ? 0 : 1; }
    });
  }

  deleteService(svc: any) {
    if (!confirm(`Delete service "${svc.title}"?`)) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/services/${svc.id}`).subscribe({
      next: () => this.loadServices(this.pagination().page)
    });
  }
}
