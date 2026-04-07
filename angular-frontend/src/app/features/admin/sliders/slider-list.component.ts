import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-slider-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ConfirmModalComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Sliders</h1>
      <a routerLink="/admin/slider/add" class="btn-primary">+ Add Slider</a>
    </div>

    <div class="loading-center" *ngIf="loading()"><div class="spinner"></div></div>

    <div class="grid" *ngIf="!loading()">
      <div class="card" *ngFor="let slider of sliders()">
        <div class="card-img">
          <img *ngIf="slider.image_url" [src]="slider.image_url" alt="Slider">
          <div *ngIf="!slider.image_url" class="no-image">No Image</div>
          <span class="card-badge" [class.badge-green]="slider.status" [class.badge-red]="!slider.status">
            {{ slider.status ? 'Active' : 'Inactive' }}
          </span>
        </div>
        <div class="card-body">
          <div class="card-type">{{ slider.type || 'General' }}</div>
          <div class="card-identity" *ngIf="slider.identity">{{ slider.identity }}</div>
          <div class="card-link" *ngIf="slider.link">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
            <a [href]="slider.link" target="_blank" rel="noopener">{{ slider.link }}</a>
          </div>
          <div class="card-actions">
            <a [routerLink]="['/admin/slider/edit', slider.id]" class="action-btn" title="Edit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </a>
            <button class="action-btn" (click)="deleteSlider(slider)" title="Delete">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div *ngIf="sliders().length === 0" class="empty-state">No sliders found</div>
    </div>

    <app-confirm-modal
      [open]="!!deletingItem()"
      title="Delete Slider"
      [message]="'Delete this slider? This cannot be undone.'"
      confirmText="Delete"
      type="danger"
      (confirmed)="confirmDelete()"
      (cancelled)="deletingItem.set(null)">
    </app-confirm-modal>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px; }
    .btn-primary:hover { background:#b11218; }
    .loading-center { display:flex; justify-content:center; padding:60px; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:20px; }
    .card { background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08); transition:box-shadow 0.2s; }
    .card:hover { box-shadow:0 4px 12px rgba(0,0,0,0.12); }
    .card-img { position:relative; height:180px; background:#f1f5f9; }
    .card-img img { width:100%; height:100%; object-fit:cover; }
    .no-image { display:flex; align-items:center; justify-content:center; height:100%; color:#94a3b8; font-size:14px; }
    .card-badge { position:absolute; top:10px; right:10px; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; }
    .badge-green { background:#dcfce7; color:#16a34a; }
    .badge-red { background:#fee2e2; color:#dc2626; }
    .card-body { padding:16px; }
    .card-type { font-weight:600; color:#334155; font-size:14px; text-transform:capitalize; margin-bottom:4px; }
    .card-identity { color:#94a3b8; font-size:13px; margin-bottom:4px; }
    .card-link { display:flex; align-items:center; gap:4px; font-size:12px; color:#64748b; margin-bottom:12px; overflow:hidden; }
    .card-link a { color:#e31b23; text-decoration:none; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .card-link a:hover { text-decoration:underline; }
    .card-actions { display:flex; gap:8px; }
    .action-btn { background:none; border:1px solid #e5e7eb; cursor:pointer; padding:6px; border-radius:6px; color:#64748b; display:inline-flex; text-decoration:none; }
    .action-btn:hover { background:#fee2e2; color:#e31b23; border-color:#fca5a5; }
    .empty-state { text-align:center; padding:60px; color:#94a3b8; grid-column:1/-1; }
  `]
})
export class SliderListComponent implements OnInit {
  sliders = signal<any[]>([]);
  loading = signal(false);
  deletingItem = signal<any>(null);

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() { this.loadSliders(); }

  loadSliders() {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/sliders`).subscribe({
      next: (res) => this.sliders.set(res.data || []),
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  deleteSlider(slider: any) {
    this.deletingItem.set(slider);
  }

  confirmDelete() {
    const slider = this.deletingItem();
    if (!slider) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/sliders/${slider.id}`).subscribe({
      next: () => { this.toast.success('Slider deleted successfully'); this.deletingItem.set(null); this.loadSliders(); },
      error: () => { this.toast.error('Failed to delete slider'); this.deletingItem.set(null); }
    });
  }
}
