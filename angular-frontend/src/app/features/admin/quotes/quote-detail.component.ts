import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-quote-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="page-header">
      <div class="header-left">
        <a routerLink="/admin/quotes/all" class="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
        </a>
        <h1 class="page-title">Quote Request Details</h1>
      </div>
    </div>

    <div class="loading-wrap" *ngIf="loading()">
      <div class="spinner"></div>
    </div>

    <div class="detail-grid" *ngIf="!loading() && quote()">
      <!-- Quote Info Card -->
      <div class="card">
        <div class="card-header">Quote Information</div>
        <div class="card-body">
          <div class="info-row">
            <span class="info-label">ID</span>
            <span class="info-value">#{{ quote().id }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">User</span>
            <span class="info-value">{{ quote().user?.first_name }} {{ quote().user?.last_name || '' }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Email</span>
            <span class="info-value">{{ quote().user?.email || '-' }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Phone</span>
            <span class="info-value">{{ quote().user?.phone || '-' }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Type</span>
            <span class="info-value">
              <span class="badge" [class.badge-blue]="quote().type === 'service'" [class.badge-purple]="quote().type === 'product'">{{ quote().type }}</span>
            </span>
          </div>
          <div class="info-row">
            <span class="info-label">Title</span>
            <span class="info-value fw-600">{{ quote().title }}</span>
          </div>
          <div class="info-row full-width">
            <span class="info-label">Description</span>
            <p class="info-value description-text">{{ quote().description }}</p>
          </div>
          <div class="info-row">
            <span class="info-label">Created</span>
            <span class="info-value">{{ quote().created_at | date:'medium' }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Updated</span>
            <span class="info-value">{{ quote().updated_at | date:'medium' }}</span>
          </div>
        </div>
      </div>

      <!-- Admin Actions Card -->
      <div class="card">
        <div class="card-header">Admin Actions</div>
        <div class="card-body">
          <div class="form-group">
            <label class="form-label">Status</label>
            <select class="form-control" [(ngModel)]="formStatus">
              <option value="pending">Pending</option>
              <option value="reviewed">Reviewed</option>
              <option value="quoted">Quoted</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Quoted Price (₹)</label>
            <input type="number" class="form-control" [(ngModel)]="formQuotedPrice" placeholder="Enter price...">
          </div>
          <div class="form-group">
            <label class="form-label">Admin Note</label>
            <textarea class="form-control textarea" [(ngModel)]="formAdminNote" rows="5" placeholder="Add a note for the customer..."></textarea>
          </div>
          <button class="save-btn" [disabled]="saving()" (click)="save()">
            <span *ngIf="!saving()">Save Changes</span>
            <span *ngIf="saving()">Saving...</span>
          </button>
        </div>
      </div>
    </div>

    <div class="not-found" *ngIf="!loading() && !quote()">
      <p>Quote request not found.</p>
      <a routerLink="/admin/quotes/all" class="back-link">Back to list</a>
    </div>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; }
    .header-left { display:flex; align-items:center; gap:12px; }
    .back-btn { display:inline-flex; align-items:center; justify-content:center; width:36px; height:36px; border-radius:8px; background:#fff; border:1px solid #e5e7eb; color:#64748b; text-decoration:none; }
    .back-btn:hover { border-color:#e31b23; color:#e31b23; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .loading-wrap { display:flex; justify-content:center; padding:60px; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .detail-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px; }
    @media (max-width: 768px) { .detail-grid { grid-template-columns:1fr; } }
    .card { background:#fff; border-radius:12px; box-shadow:0 1px 3px rgba(0,0,0,0.08); overflow:hidden; }
    .card-header { padding:16px 20px; font-weight:600; font-size:16px; color:#1a1a2e; border-bottom:1px solid #f1f5f9; }
    .card-body { padding:20px; }
    .info-row { display:flex; justify-content:space-between; align-items:flex-start; padding:10px 0; border-bottom:1px solid #f8f9fa; }
    .info-row.full-width { flex-direction:column; gap:6px; }
    .info-label { font-size:13px; color:#64748b; font-weight:500; }
    .info-value { font-size:14px; color:#1e293b; }
    .fw-600 { font-weight:600; }
    .description-text { margin:0; white-space:pre-wrap; line-height:1.6; }
    .badge { padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; text-transform:capitalize; }
    .badge-blue { background:#dbeafe; color:#2563eb; }
    .badge-purple { background:#f3e8ff; color:#7c3aed; }
    .form-group { margin-bottom:18px; }
    .form-label { display:block; font-size:13px; font-weight:600; color:#334155; margin-bottom:6px; }
    .form-control { width:100%; padding:10px 14px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; color:#1e293b; background:#fff; }
    .form-control:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.1); }
    .textarea { resize:vertical; min-height:100px; font-family:inherit; }
    .save-btn { padding:10px 28px; background:#e31b23; color:#fff; border:none; border-radius:8px; font-size:14px; font-weight:600; cursor:pointer; transition:background 0.2s; }
    .save-btn:hover:not(:disabled) { background:#c8171f; }
    .save-btn:disabled { opacity:0.6; cursor:not-allowed; }
    .not-found { text-align:center; padding:60px; color:#94a3b8; }
    .back-link { color:#e31b23; text-decoration:none; font-weight:500; }
    .back-link:hover { text-decoration:underline; }
  `]
})
export class QuoteDetailComponent implements OnInit {
  quote = signal<any>(null);
  loading = signal(true);
  saving = signal(false);

  formStatus = '';
  formQuotedPrice: number | null = null;
  formAdminNote = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.loading.set(false);
      return;
    }
    this.http.get<any>(`${environment.apiUrl}/quotes/admin/${id}`).subscribe({
      next: (res) => {
        this.quote.set(res.data);
        this.formStatus = res.data.status;
        this.formQuotedPrice = res.data.quoted_price;
        this.formAdminNote = res.data.admin_note || '';
      },
      error: () => { this.quote.set(null); },
      complete: () => this.loading.set(false)
    });
  }

  save() {
    const q = this.quote();
    if (!q) return;
    this.saving.set(true);

    const body: any = {
      status: this.formStatus,
      admin_note: this.formAdminNote
    };
    if (this.formQuotedPrice !== null && this.formQuotedPrice !== undefined) {
      body.quoted_price = this.formQuotedPrice;
    }

    this.http.put<any>(`${environment.apiUrl}/quotes/admin/${q.id}`, body).subscribe({
      next: (res) => {
        this.quote.set(res.data);
        this.toast.success('Quote request updated');
      },
      error: () => {
        this.toast.error('Failed to update quote request');
      },
      complete: () => this.saving.set(false)
    });
  }
}
