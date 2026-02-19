import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TicketService } from '../../../core/services/ticket.service';

@Component({
  selector: 'app-client-ticket-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="tickets-container">
      <div class="page-header">
        <div class="header-content">
          <h1>Service Requests</h1>
          <p>View and manage your support tickets</p>
        </div>
        <a routerLink="/client/tickets/new" class="btn-primary">
          + New Ticket
        </a>
      </div>

      <div class="filters-bar">
        <div class="filter-tabs">
          <button
            *ngFor="let status of statuses"
            [class.active]="activeStatus() === status.value"
            (click)="filterByStatus(status.value)"
            class="filter-tab">
            {{ status.label }}
          </button>
        </div>
      </div>

      <div *ngIf="loading()" class="loading">
        <div class="spinner"></div>
        <p>Loading tickets...</p>
      </div>

      <div *ngIf="!loading() && tickets().length === 0" class="empty-state">
        <div class="empty-icon">🎫</div>
        <h3>No tickets found</h3>
        <p>You haven't created any support tickets yet.</p>
        <a routerLink="/client/tickets/new" class="btn-primary">Create a Ticket</a>
      </div>

      <div class="tickets-list" *ngIf="!loading() && tickets().length > 0">
        <a [routerLink]="['/client/tickets', ticket.id]" class="ticket-card" *ngFor="let ticket of tickets()">
          <div class="ticket-header">
            <span class="ticket-id">#{{ ticket.ticket_number || ticket.id }}</span>
            <span class="status-badge" [class]="'status-' + ticket.status">
              {{ ticket.status | titlecase }}
            </span>
          </div>
          <h3 class="ticket-subject">{{ ticket.subject }}</h3>
          <p class="ticket-preview">{{ ticket.message | slice:0:100 }}...</p>
          <div class="ticket-meta">
            <span class="category" *ngIf="ticket.category">{{ ticket.category }}</span>
            <span class="date">{{ ticket.created_at | date:'mediumDate' }}</span>
            <span class="replies" *ngIf="ticket.replies_count">
              {{ ticket.replies_count }} {{ ticket.replies_count === 1 ? 'reply' : 'replies' }}
            </span>
          </div>
        </a>
      </div>

      <div class="pagination" *ngIf="totalPages() > 1">
        <button
          [disabled]="currentPage() === 1"
          (click)="goToPage(currentPage() - 1)"
          class="page-btn">
          Previous
        </button>
        <span class="page-info">Page {{ currentPage() }} of {{ totalPages() }}</span>
        <button
          [disabled]="currentPage() === totalPages()"
          (click)="goToPage(currentPage() + 1)"
          class="page-btn">
          Next
        </button>
      </div>
    </div>
  `,
  styles: [`
    .tickets-container {
      max-width: 900px;
      margin: 0 auto;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 24px;
    }

    .header-content h1 {
      font-size: 28px;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 8px;
    }

    .header-content p {
      color: #666;
      margin: 0;
    }

    .btn-primary {
      padding: 12px 24px;
      background: #e31b23;
      color: #fff;
      border: none;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      cursor: pointer;
    }

    .filters-bar {
      margin-bottom: 24px;
    }

    .filter-tabs {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .filter-tab {
      padding: 8px 16px;
      border: 1px solid #e5e7eb;
      background: #fff;
      border-radius: 20px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s;
    }

    .filter-tab:hover {
      border-color: #e31b23;
      color: #e31b23;
    }

    .filter-tab.active {
      background: #e31b23;
      border-color: #e31b23;
      color: #fff;
    }

    .loading {
      text-align: center;
      padding: 60px 20px;
    }

    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid #e5e7eb;
      border-top-color: #e31b23;
      border-radius: 50%;
      margin: 0 auto 16px;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .empty-state {
      text-align: center;
      padding: 60px 20px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .empty-icon {
      font-size: 64px;
      margin-bottom: 16px;
    }

    .empty-state h3 {
      font-size: 20px;
      color: #1a1a1a;
      margin: 0 0 8px;
    }

    .empty-state p {
      color: #666;
      margin: 0 0 24px;
    }

    .tickets-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .ticket-card {
      display: block;
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .ticket-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    }

    .ticket-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .ticket-id {
      font-size: 13px;
      color: #888;
      font-weight: 500;
    }

    .status-badge {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
    }

    .status-open { background: #dbeafe; color: #1e40af; }
    .status-pending { background: #fef3c7; color: #92400e; }
    .status-answered { background: #d1fae5; color: #065f46; }
    .status-closed { background: #f3f4f6; color: #4b5563; }

    .ticket-subject {
      font-size: 18px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 8px;
    }

    .ticket-preview {
      font-size: 14px;
      color: #666;
      margin: 0 0 16px;
      line-height: 1.5;
    }

    .ticket-meta {
      display: flex;
      gap: 16px;
      font-size: 13px;
      color: #888;
    }

    .category {
      background: #f5f5f5;
      padding: 2px 10px;
      border-radius: 12px;
    }

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      margin-top: 24px;
    }

    .page-btn {
      padding: 8px 16px;
      border: 1px solid #e5e7eb;
      background: #fff;
      border-radius: 6px;
      cursor: pointer;
    }

    .page-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .page-info {
      color: #666;
      font-size: 14px;
    }
  `]
})
export class ClientTicketListComponent implements OnInit {
  tickets = signal<any[]>([]);
  loading = signal(true);
  activeStatus = signal('all');
  currentPage = signal(1);
  totalPages = signal(1);

  statuses = [
    { label: 'All', value: 'all' },
    { label: 'Open', value: 'open' },
    { label: 'Pending', value: 'pending' },
    { label: 'Answered', value: 'answered' },
    { label: 'Closed', value: 'closed' }
  ];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.loading.set(true);
    this.ticketService.getTickets({
      status: this.activeStatus() === 'all' ? undefined : this.activeStatus(),
      page: this.currentPage()
    }).subscribe({
      next: (response) => {
        this.tickets.set(response.data || response.tickets || []);
        this.totalPages.set(response.meta?.last_page || response.totalPages || 1);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  filterByStatus(status: string): void {
    this.activeStatus.set(status);
    this.currentPage.set(1);
    this.loadTickets();
  }

  goToPage(page: number): void {
    this.currentPage.set(page);
    this.loadTickets();
  }
}
