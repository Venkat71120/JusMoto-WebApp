import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ConfirmModalComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Offers</h1>
      <a routerLink="/admin/offer/add" class="btn-primary">+ Add Offer</a>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Offer %</th>
            <th>Expires</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let offer of offers(); let i = index">
            <td>{{ i + 1 }}</td>
            <td class="fw-600">{{ offer.title }}</td>
            <td><span class="pct-badge">{{ offer.offerPercentage || offer.offer_percentage }}%</span></td>
            <td>{{ offer.expires_at | date:'mediumDate' }}</td>
            <td>
              <button class="badge badge-clickable" [class.badge-green]="offer.status" [class.badge-red]="!offer.status" (click)="statusItem.set(offer)">
                {{ offer.status ? 'Active' : 'Inactive' }}
              </button>
            </td>
            <td>
              <div class="action-btns">
                <a [routerLink]="['/admin/offer/edit-offer', offer.id]" class="action-btn" title="Edit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </a>
                <button class="action-btn" (click)="deleteOffer(offer)" title="Delete">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
            </td>
          </tr>
          <tr *ngIf="offers().length === 0 && !loading()">
            <td colspan="6" class="empty-state">No offers found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <app-confirm-modal
      [open]="!!deletingItem()"
      title="Delete Offer"
      [message]="'Delete &quot;' + (deletingItem()?.title || '') + '&quot;? This cannot be undone.'"
      confirmText="Delete"
      type="danger"
      (confirmed)="confirmDelete()"
      (cancelled)="deletingItem.set(null)">
    </app-confirm-modal>

    <app-confirm-modal
      [open]="!!statusItem()"
      title="Change Status"
      [message]="'Change status of &quot;' + (statusItem()?.title || '') + '&quot; to ' + (statusItem()?.status ? 'Inactive' : 'Active') + '?'"
      confirmText="Change Status"
      type="warning"
      (confirmed)="confirmToggleStatus()"
      (cancelled)="statusItem.set(null)">
    </app-confirm-modal>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px; }
    .btn-primary:hover { background:#b11218; }
    .table-container { position:relative; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .loading-overlay { position:absolute; inset:0; background:rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:center; z-index:10; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .data-table { width:100%; border-collapse:collapse; }
    .data-table th { padding:12px 16px; text-align:left; font-weight:600; color:#64748b; font-size:12px; text-transform:uppercase; background:#f8f9fa; border-bottom:1px solid #e5e7eb; }
    .data-table td { padding:12px 16px; font-size:14px; color:#334155; border-bottom:1px solid #f1f5f9; }
    .data-table tr:hover { background:#fff5f5; }
    .fw-600 { font-weight:600; }
    .pct-badge { background:#fef3c7; color:#92400e; padding:3px 10px; border-radius:6px; font-size:13px; font-weight:700; }
    .badge { padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; }
    .badge-clickable { cursor:pointer; transition:opacity 0.2s; border:none; }
    .badge-clickable:hover { opacity:0.8; }
    .badge-green { background:#dcfce7; color:#16a34a; }
    .badge-red { background:#fee2e2; color:#dc2626; }
    .action-btns { display:flex; gap:6px; }
    .action-btn { background:none; border:none; cursor:pointer; padding:6px; border-radius:6px; color:#64748b; display:inline-flex; text-decoration:none; }
    .action-btn:hover { background:#fee2e2; color:#e31b23; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }
  `]
})
export class OfferListComponent implements OnInit {
  offers = signal<any[]>([]);
  loading = signal(false);
  deletingItem = signal<any>(null);
  statusItem = signal<any>(null);

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() { this.loadOffers(); }

  loadOffers() {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/offers`).subscribe({
      next: (res) => this.offers.set(res.data || []),
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  deleteOffer(offer: any) {
    this.deletingItem.set(offer);
  }

  confirmDelete() {
    const offer = this.deletingItem();
    if (!offer) return;
    this.http.delete<any>(`${environment.apiUrl}/admin/offers/${offer.id}`).subscribe({
      next: () => { this.toast.success('Offer deleted successfully'); this.deletingItem.set(null); this.loadOffers(); },
      error: () => { this.toast.error('Failed to delete offer'); this.deletingItem.set(null); }
    });
  }

  confirmToggleStatus() {
    const offer = this.statusItem();
    if (!offer) return;
    const newStatus = offer.status ? 0 : 1;
    this.http.put<any>(`${environment.apiUrl}/admin/offers/${offer.id}`, { status: newStatus }).subscribe({
      next: () => { offer.status = newStatus; this.toast.success('Offer status updated'); this.statusItem.set(null); },
      error: () => { this.toast.error('Failed to update status'); this.statusItem.set(null); }
    });
  }
}
