import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-client-quote-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="quotes-container">
      <div class="page-header">
        <div class="header-content">
          <h1>My Quote Requests</h1>
          <p>View your submitted quotes and their responses</p>
        </div>
        <a routerLink="/client/quotes/new" class="btn-primary">+ New Quote</a>
      </div>

      <div class="filters-bar">
        <div class="filter-tabs">
          <button
            *ngFor="let s of statuses"
            [class.active]="activeStatus() === s.value"
            (click)="filterByStatus(s.value)"
            class="filter-tab">
            {{ s.label }}
          </button>
        </div>
      </div>

      <div *ngIf="loading()" class="loading">
        <div class="spinner"></div>
        <p>Loading quote requests...</p>
      </div>

      <div *ngIf="!loading() && quotes().length === 0" class="empty-state">
        <svg class="empty-icon-svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
        <h3>No quote requests yet</h3>
        <p>Request a quote for any service or product you need.</p>
        <a routerLink="/client/quotes/new" class="btn-primary">Request a Quote</a>
      </div>

      <div class="quotes-list" *ngIf="!loading() && quotes().length > 0">
        <a [routerLink]="['/client/quotes', quote.id]" class="quote-card" *ngFor="let quote of quotes()">
          <div class="quote-header">
            <span class="quote-id">#{{ quote.id }}</span>
            <span class="type-badge" [class]="'type-' + quote.type">{{ quote.type }}</span>
            <span class="status-badge" [class]="'status-' + quote.status">{{ quote.status }}</span>
          </div>
          <h3 class="quote-title">{{ quote.title }}</h3>
          <p class="quote-preview">{{ quote.description | slice:0:120 }}{{ quote.description?.length > 120 ? '...' : '' }}</p>
          <div class="quote-meta">
            <span class="date">{{ quote.created_at | date:'mediumDate' }}</span>
            <span class="price" *ngIf="quote.quoted_price">Quoted: ₹{{ quote.quoted_price }}</span>
          </div>
        </a>
      </div>

      <div class="pagination" *ngIf="totalPages() > 1">
        <button [disabled]="currentPage() === 1" (click)="goToPage(currentPage() - 1)" class="page-btn">Previous</button>
        <span class="page-info">Page {{ currentPage() }} of {{ totalPages() }}</span>
        <button [disabled]="currentPage() === totalPages()" (click)="goToPage(currentPage() + 1)" class="page-btn">Next</button>
      </div>
    </div>
  `,
  styles: [`
    .quotes-container { max-width: 900px; margin: 0 auto; }

    .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; }
    .header-content h1 { font-size: 28px; font-weight: 700; color: #1a1a1a; margin: 0 0 8px; }
    .header-content p { color: #666; margin: 0; }

    .btn-primary { padding: 12px 24px; background: #e31b23; color: #fff; border: none; border-radius: 6px; text-decoration: none; font-weight: 500; cursor: pointer; }

    .filters-bar { margin-bottom: 24px; }
    .filter-tabs { display: flex; gap: 8px; flex-wrap: wrap; }
    .filter-tab { padding: 8px 16px; border: 1px solid #e5e7eb; background: #fff; border-radius: 20px; cursor: pointer; font-size: 14px; transition: all 0.2s; }
    .filter-tab:hover { border-color: #e31b23; color: #e31b23; }
    .filter-tab.active { background: #e31b23; border-color: #e31b23; color: #fff; }

    .loading { text-align: center; padding: 60px 20px; }
    .spinner { width: 40px; height: 40px; border: 3px solid #e5e7eb; border-top-color: #e31b23; border-radius: 50%; margin: 0 auto 16px; animation: spin 1s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }

    .empty-state { text-align: center; padding: 60px 20px; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .empty-icon-svg { margin-bottom: 16px; }
    .empty-state h3 { font-size: 20px; color: #1a1a1a; margin: 0 0 8px; }
    .empty-state p { color: #666; margin: 0 0 24px; }

    .quotes-list { display: flex; flex-direction: column; gap: 16px; }

    .quote-card { display: block; background: #fff; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
    .quote-card:hover { transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,0,0,0.12); }

    .quote-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
    .quote-id { font-size: 13px; color: #888; font-weight: 500; }

    .type-badge, .status-badge { padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; text-transform: capitalize; }
    .type-service { background: #dbeafe; color: #1e40af; }
    .type-product { background: #f3e8ff; color: #7c3aed; }
    .status-pending { background: #fef9c3; color: #a16207; }
    .status-reviewed { background: #dbeafe; color: #2563eb; }
    .status-quoted { background: #dcfce7; color: #16a34a; }
    .status-closed { background: #f3f4f6; color: #4b5563; }

    .quote-title { font-size: 18px; font-weight: 600; color: #1a1a1a; margin: 0 0 8px; }
    .quote-preview { font-size: 14px; color: #666; margin: 0 0 16px; line-height: 1.5; }

    .quote-meta { display: flex; gap: 16px; font-size: 13px; color: #888; }
    .price { font-weight: 600; color: #16a34a; }

    .pagination { display: flex; justify-content: center; align-items: center; gap: 16px; margin-top: 24px; }
    .page-btn { padding: 8px 16px; border: 1px solid #e5e7eb; background: #fff; border-radius: 6px; cursor: pointer; }
    .page-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .page-info { color: #666; font-size: 14px; }
  `]
})
export class ClientQuoteListComponent implements OnInit {
  quotes = signal<any[]>([]);
  loading = signal(true);
  activeStatus = signal('all');
  currentPage = signal(1);
  totalPages = signal(1);

  statuses = [
    { label: 'All', value: 'all' },
    { label: 'Pending', value: 'pending' },
    { label: 'Reviewed', value: 'reviewed' },
    { label: 'Quoted', value: 'quoted' },
    { label: 'Closed', value: 'closed' }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void { this.loadQuotes(); }

  loadQuotes(): void {
    this.loading.set(true);
    const params: any = { page: this.currentPage(), limit: 15 };
    if (this.activeStatus() !== 'all') params.status = this.activeStatus();

    this.http.get<any>(`${environment.apiUrl}/quotes/my`, { params }).subscribe({
      next: (res) => {
        this.quotes.set(res.data || []);
        this.totalPages.set(res.pagination?.totalPages || 1);
        this.loading.set(false);
      },
      error: () => { this.loading.set(false); }
    });
  }

  filterByStatus(status: string): void {
    this.activeStatus.set(status);
    this.currentPage.set(1);
    this.loadQuotes();
  }

  goToPage(page: number): void {
    this.currentPage.set(page);
    this.loadQuotes();
  }
}
