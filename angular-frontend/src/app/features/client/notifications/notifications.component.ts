import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="notifications-container">
      <div class="page-header">
        <div class="header-content">
          <h1>Notifications</h1>
          <p>Stay updated with your orders and account activity</p>
        </div>
        <button *ngIf="notifications().length > 0" class="btn-outline" (click)="markAllAsRead()">
          Mark All as Read
        </button>
      </div>

      <div *ngIf="loading()" class="loading">
        <div class="spinner"></div>
        <p>Loading notifications...</p>
      </div>

      <div *ngIf="!loading() && notifications().length === 0" class="empty-state">
        <div class="empty-icon">🔔</div>
        <h3>No notifications</h3>
        <p>You're all caught up! Check back later for updates.</p>
      </div>

      <div class="notifications-list" *ngIf="!loading() && notifications().length > 0">
        <div
          *ngFor="let notification of notifications()"
          class="notification-card"
          [class.unread]="!notification.read_at"
          (click)="handleNotificationClick(notification)">
          <div class="notification-icon" [class]="'type-' + notification.type">
            <span>{{ getIcon(notification.type) }}</span>
          </div>
          <div class="notification-content">
            <h4>{{ notification.title }}</h4>
            <p>{{ notification.message }}</p>
            <span class="notification-time">{{ notification.created_at | date:'medium' }}</span>
          </div>
          <button class="delete-btn" (click)="deleteNotification($event, notification.id)" title="Delete">
            &times;
          </button>
        </div>
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
    .notifications-container {
      max-width: 800px;
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

    .btn-outline {
      padding: 10px 20px;
      border: 1px solid #e5e7eb;
      background: #fff;
      color: #444;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-outline:hover {
      border-color: #e31b23;
      color: #e31b23;
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
      margin: 0;
    }

    .notifications-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .notification-card {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 20px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      cursor: pointer;
      transition: all 0.2s;
      position: relative;
    }

    .notification-card:hover {
      box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    }

    .notification-card.unread {
      background: #f0f9ff;
      border-left: 4px solid #e31b23;
    }

    .notification-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      flex-shrink: 0;
    }

    .type-order { background: #dbeafe; }
    .type-payment { background: #d1fae5; }
    .type-challan { background: #fef3c7; }
    .type-ticket { background: #e0e7ff; }
    .type-promo { background: #fce7f3; }
    .type-system { background: #f3f4f6; }

    .notification-content {
      flex: 1;
      min-width: 0;
    }

    .notification-content h4 {
      font-size: 16px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 6px;
    }

    .notification-content p {
      font-size: 14px;
      color: #666;
      margin: 0 0 8px;
      line-height: 1.5;
    }

    .notification-time {
      font-size: 12px;
      color: #888;
    }

    .delete-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: none;
      background: transparent;
      color: #888;
      font-size: 20px;
      cursor: pointer;
      opacity: 0;
      transition: all 0.2s;
    }

    .notification-card:hover .delete-btn {
      opacity: 1;
    }

    .delete-btn:hover {
      background: #fee2e2;
      color: #dc3545;
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
export class NotificationsComponent implements OnInit {
  notifications = signal<any[]>([]);
  loading = signal(true);
  currentPage = signal(1);
  totalPages = signal(1);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/notifications`, {
      params: { page: this.currentPage().toString() }
    }).subscribe({
      next: (response) => {
        this.notifications.set(response.data || response.notifications || []);
        this.totalPages.set(response.meta?.last_page || response.totalPages || 1);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  getIcon(type: string): string {
    const icons: { [key: string]: string } = {
      order: '📦',
      payment: '💳',
      challan: '🚗',
      ticket: '🎫',
      promo: '🎉',
      system: '⚙️'
    };
    return icons[type] || '🔔';
  }

  handleNotificationClick(notification: any): void {
    if (!notification.read_at) {
      this.markAsRead(notification.id);
    }

    // Navigate based on notification type and data
    if (notification.data?.url) {
      window.location.href = notification.data.url;
    }
  }

  markAsRead(id: number): void {
    this.http.put(`${environment.apiUrl}/notifications/${id}/read`, {}).subscribe({
      next: () => {
        this.notifications.update(items =>
          items.map(n => n.id === id ? { ...n, read_at: new Date().toISOString() } : n)
        );
      }
    });
  }

  markAllAsRead(): void {
    this.http.put(`${environment.apiUrl}/notifications/read-all`, {}).subscribe({
      next: () => {
        this.notifications.update(items =>
          items.map(n => ({ ...n, read_at: new Date().toISOString() }))
        );
      }
    });
  }

  deleteNotification(event: Event, id: number): void {
    event.stopPropagation();
    this.http.delete(`${environment.apiUrl}/notifications/${id}`).subscribe({
      next: () => {
        this.notifications.update(items => items.filter(n => n.id !== id));
      }
    });
  }

  goToPage(page: number): void {
    this.currentPage.set(page);
    this.loadNotifications();
  }
}
