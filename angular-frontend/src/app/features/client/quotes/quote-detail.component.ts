import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-client-quote-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="detail-container">
      <div class="back-link">
        <a routerLink="/client/quotes">&larr; Back to Quote Requests</a>
      </div>

      <div *ngIf="loading()" class="loading">
        <div class="spinner"></div>
        <p>Loading quote details...</p>
      </div>

      <div *ngIf="!loading() && !quote()" class="empty-state">
        <h3>Quote request not found</h3>
        <a routerLink="/client/quotes" class="btn-primary">Back to list</a>
      </div>

      <div *ngIf="!loading() && quote()" class="quote-detail">
        <div class="detail-header">
          <div>
            <h1>{{ quote().title }}</h1>
            <div class="badges">
              <span class="badge" [class]="'type-' + quote().type">{{ quote().type }}</span>
              <span class="badge" [class]="'status-' + quote().status">{{ quote().status }}</span>
              <span class="meta-text">Submitted {{ quote().created_at | date:'mediumDate' }}</span>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Your Request</div>
          <div class="card-body">
            <p class="description">{{ quote().description }}</p>
          </div>
        </div>

        <div class="card" *ngIf="quote().status === 'quoted' || quote().status === 'reviewed' || quote().admin_note || quote().quoted_price">
          <div class="card-header">Admin Response</div>
          <div class="card-body">
            <div class="response-row" *ngIf="quote().quoted_price">
              <span class="response-label">Quoted Price</span>
              <span class="response-value price-value">₹{{ quote().quoted_price }}</span>
            </div>
            <div class="response-row" *ngIf="quote().admin_note">
              <span class="response-label">Note</span>
              <p class="response-value note-text">{{ quote().admin_note }}</p>
            </div>
            <div class="response-row" *ngIf="!quote().admin_note && !quote().quoted_price">
              <p class="pending-text">Your quote is being reviewed. We'll get back to you soon.</p>
            </div>
          </div>
        </div>

        <div class="card" *ngIf="quote().status === 'pending'">
          <div class="card-body pending-info">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a16207" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <p>Your quote request is pending review. We'll notify you once it has been reviewed.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .detail-container { max-width: 800px; margin: 0 auto; }

    .back-link { margin-bottom: 20px; }
    .back-link a { color: #e31b23; text-decoration: none; font-size: 14px; }
    .back-link a:hover { text-decoration: underline; }

    .loading { text-align: center; padding: 60px 20px; }
    .spinner { width: 40px; height: 40px; border: 3px solid #e5e7eb; border-top-color: #e31b23; border-radius: 50%; margin: 0 auto 16px; animation: spin 1s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }

    .empty-state { text-align: center; padding: 60px 20px; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .empty-state h3 { font-size: 20px; color: #1a1a1a; margin: 0 0 16px; }
    .btn-primary { padding: 12px 24px; background: #e31b23; color: #fff; border: none; border-radius: 6px; text-decoration: none; font-weight: 500; }

    .detail-header { margin-bottom: 24px; }
    .detail-header h1 { font-size: 26px; font-weight: 700; color: #1a1a1a; margin: 0 0 12px; }
    .badges { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }

    .badge { padding: 4px 14px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: capitalize; }
    .type-service { background: #dbeafe; color: #1e40af; }
    .type-product { background: #f3e8ff; color: #7c3aed; }
    .status-pending { background: #fef9c3; color: #a16207; }
    .status-reviewed { background: #dbeafe; color: #2563eb; }
    .status-quoted { background: #dcfce7; color: #16a34a; }
    .status-closed { background: #f3f4f6; color: #4b5563; }
    .meta-text { font-size: 13px; color: #888; }

    .card { background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); margin-bottom: 20px; overflow: hidden; }
    .card-header { padding: 16px 24px; font-weight: 600; font-size: 16px; color: #1a1a1a; border-bottom: 1px solid #f1f5f9; }
    .card-body { padding: 24px; }

    .description { margin: 0; font-size: 15px; line-height: 1.7; color: #333; white-space: pre-wrap; }

    .response-row { margin-bottom: 20px; }
    .response-row:last-child { margin-bottom: 0; }
    .response-label { display: block; font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.03em; }
    .response-value { font-size: 15px; color: #1e293b; }
    .price-value { font-size: 28px; font-weight: 700; color: #16a34a; }
    .note-text { margin: 0; line-height: 1.7; white-space: pre-wrap; }

    .pending-text { margin: 0; color: #666; }

    .pending-info { display: flex; align-items: flex-start; gap: 14px; background: #fffbeb; border-radius: 8px; padding: 20px; }
    .pending-info p { margin: 0; color: #92400e; font-size: 14px; line-height: 1.6; }
  `]
})
export class ClientQuoteDetailComponent implements OnInit {
  quote = signal<any>(null);
  loading = signal(true);

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) { this.loading.set(false); return; }

    this.http.get<any>(`${environment.apiUrl}/quotes/my/${id}`).subscribe({
      next: (res) => { this.quote.set(res.data); },
      error: () => { this.quote.set(null); },
      complete: () => this.loading.set(false)
    });
  }
}
