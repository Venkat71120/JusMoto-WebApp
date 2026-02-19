import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">Tickets</h1>
    </div>

    <div class="filters-bar">
      <div class="search-box-wrap">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="text" class="search-box" placeholder="Search tickets..." [(ngModel)]="search" (input)="onSearch()">
      </div>
      <select class="filter-select" [(ngModel)]="statusFilter" (change)="loadTickets()">
        <option value="">All Statuses</option>
        <option value="open">Open</option>
        <option value="in_progress">In Progress</option>
        <option value="resolved">Resolved</option>
        <option value="closed">Closed</option>
      </select>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title / Subject</th>
            <th>Customer</th>
            <th>Department</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let ticket of tickets(); let i = index">
            <td>{{ (pagination().page - 1) * pagination().limit + i + 1 }}</td>
            <td class="fw-600">{{ ticket.title || ticket.subject }}</td>
            <td>{{ ticket.user?.name || ticket.customer_name || '-' }}</td>
            <td>{{ ticket.department?.name || ticket.department_name || '-' }}</td>
            <td>
              <span class="badge"
                [class.badge-red]="ticket.priority === 'high' || ticket.priority === 'urgent'"
                [class.badge-yellow]="ticket.priority === 'medium'"
                [class.badge-green]="ticket.priority === 'low'">
                {{ ticket.priority }}
              </span>
            </td>
            <td>
              <span class="badge"
                [class.badge-blue]="ticket.status === 'open'"
                [class.badge-yellow]="ticket.status === 'in_progress'"
                [class.badge-green]="ticket.status === 'resolved'"
                [class.badge-gray]="ticket.status === 'closed'">
                {{ ticket.status?.replace('_', ' ') }}
              </span>
            </td>
            <td>{{ ticket.created_at | date:'mediumDate' }}</td>
            <td>
              <a [routerLink]="['/admin/tickets', ticket.id]" class="action-btn" title="View">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </a>
            </td>
          </tr>
          <tr *ngIf="tickets().length === 0 && !loading()">
            <td colspan="8" class="empty-state">No tickets found</td>
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
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .filters-bar { display:flex; gap:12px; margin-bottom:20px; flex-wrap:wrap; }
    .search-box-wrap { display:flex; align-items:center; gap:8px; background:#fff; border:1px solid #e5e7eb; border-radius:8px; padding:0 14px; flex:1; max-width:400px; }
    .search-box { padding:10px 0; border:none; outline:none; font-size:14px; width:100%; }
    .filter-select { padding:10px 16px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; background:#fff; }
    .table-container { position:relative; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .loading-overlay { position:absolute; inset:0; background:rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:center; z-index:10; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .data-table { width:100%; border-collapse:collapse; }
    .data-table th { padding:12px 16px; text-align:left; font-weight:600; color:#64748b; font-size:12px; text-transform:uppercase; background:#f8f9fa; border-bottom:1px solid #e5e7eb; }
    .data-table td { padding:12px 16px; font-size:14px; color:#334155; border-bottom:1px solid #f1f5f9; }
    .data-table tr:hover { background:#fff5f5; }
    .fw-600 { font-weight:600; }
    .badge { padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; text-transform:capitalize; }
    .badge-green { background:#dcfce7; color:#16a34a; }
    .badge-red { background:#fee2e2; color:#dc2626; }
    .badge-yellow { background:#fef9c3; color:#a16207; }
    .badge-blue { background:#dbeafe; color:#2563eb; }
    .badge-gray { background:#f3f4f6; color:#6b7280; }
    .action-btn { background:none; border:none; cursor:pointer; padding:6px; border-radius:6px; color:#64748b; display:inline-flex; text-decoration:none; }
    .action-btn:hover { background:#fee2e2; color:#e31b23; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }
    .pagination { display:flex; gap:8px; justify-content:center; align-items:center; margin-top:24px; }
    .page-btn { padding:8px 14px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; cursor:pointer; font-weight:500; color:#334155; }
    .page-btn:hover:not(:disabled) { border-color:#e31b23; color:#e31b23; }
    .page-btn:disabled { opacity:0.5; cursor:not-allowed; }
    .page-info { font-size:14px; color:#64748b; }
  `]
})
export class TicketListComponent implements OnInit {
  tickets = signal<any[]>([]);
  loading = signal(false);
  search = '';
  statusFilter = '';
  pagination = signal<any>({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  private searchTimeout: any;

  constructor(private http: HttpClient) {}

  ngOnInit() { this.loadTickets(); }

  loadTickets(page = 1) {
    this.loading.set(true);
    const params: any = { page, limit: 15 };
    if (this.search) params.search = this.search;
    if (this.statusFilter) params.status = this.statusFilter;
    this.http.get<any>(`${environment.apiUrl}/admin/tickets`, { params }).subscribe({
      next: (res) => { this.tickets.set(res.data || []); this.pagination.set(res.pagination || {}); },
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }

  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadTickets(), 400);
  }

  goToPage(page: number) { this.loadTickets(page); }
}
