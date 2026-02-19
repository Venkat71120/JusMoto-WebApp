import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../../../core/services/ticket.service';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-client-ticket-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="ticket-detail-container">
      <div class="back-link">
        <a routerLink="/client/tickets">&larr; Back to Tickets</a>
      </div>

      <div *ngIf="loading()" class="loading">
        <div class="spinner"></div>
        <p>Loading ticket...</p>
      </div>

      <div *ngIf="!loading() && ticket()" class="ticket-content">
        <div class="ticket-header-card">
          <div class="ticket-title">
            <h1>{{ ticket().subject }}</h1>
            <span class="status-badge" [class]="'status-' + ticket().status">
              {{ ticket().status | titlecase }}
            </span>
          </div>
          <div class="ticket-meta">
            <span class="ticket-id">#{{ ticket().ticket_number || ticket().id }}</span>
            <span class="separator">|</span>
            <span class="category">{{ ticket().category | titlecase }}</span>
            <span class="separator">|</span>
            <span class="date">Created {{ ticket().created_at | date:'mediumDate' }}</span>
          </div>
        </div>

        <div class="messages-section">
          <div class="message-card original">
            <div class="message-header">
              <div class="user-info">
                <div class="avatar">{{ getInitials(currentUser?.first_name) }}</div>
                <div>
                  <span class="user-name">{{ currentUser?.first_name }} {{ currentUser?.last_name }}</span>
                  <span class="message-time">{{ ticket().created_at | date:'medium' }}</span>
                </div>
              </div>
            </div>
            <div class="message-body">
              <p>{{ ticket().message }}</p>
              <div class="attachment" *ngIf="ticket().attachment">
                <a [href]="ticket().attachment" target="_blank" class="attachment-link">
                  📎 View Attachment
                </a>
              </div>
            </div>
          </div>

          <div *ngFor="let reply of ticket().replies"
               class="message-card"
               [class.admin-reply]="reply.is_admin">
            <div class="message-header">
              <div class="user-info">
                <div class="avatar" [class.admin-avatar]="reply.is_admin">
                  {{ reply.is_admin ? 'S' : getInitials(reply.user?.first_name) }}
                </div>
                <div>
                  <span class="user-name">
                    {{ reply.is_admin ? 'Support Team' : (reply.user?.first_name + ' ' + reply.user?.last_name) }}
                  </span>
                  <span class="message-time">{{ reply.created_at | date:'medium' }}</span>
                </div>
              </div>
            </div>
            <div class="message-body">
              <p>{{ reply.message }}</p>
              <div class="attachment" *ngIf="reply.attachment">
                <a [href]="reply.attachment" target="_blank" class="attachment-link">
                  📎 View Attachment
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="reply-section" *ngIf="ticket().status !== 'closed'">
          <h3>Add Reply</h3>
          <form [formGroup]="replyForm" (ngSubmit)="submitReply()">
            <textarea
              formControlName="message"
              class="form-control"
              rows="4"
              placeholder="Type your reply here..."></textarea>
            <div class="reply-actions">
              <input
                type="file"
                (change)="onFileSelect($event)"
                accept="image/*,.pdf,.doc,.docx"
                class="file-input">
              <button type="submit" class="btn-primary" [disabled]="submitting() || replyForm.invalid">
                {{ submitting() ? 'Sending...' : 'Send Reply' }}
              </button>
            </div>
          </form>
        </div>

        <div class="closed-notice" *ngIf="ticket().status === 'closed'">
          <p>This ticket has been closed. If you need further assistance, please create a new ticket.</p>
          <a routerLink="/client/tickets/new" class="btn-primary">Create New Ticket</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .ticket-detail-container {
      max-width: 800px;
      margin: 0 auto;
    }

    .back-link {
      margin-bottom: 20px;
    }

    .back-link a {
      color: #e31b23;
      text-decoration: none;
      font-size: 14px;
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

    .ticket-header-card {
      background: #fff;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .ticket-title {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
    }

    .ticket-title h1 {
      font-size: 22px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0;
      flex: 1;
    }

    .status-badge {
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 500;
      margin-left: 16px;
    }

    .status-open { background: #dbeafe; color: #1e40af; }
    .status-pending { background: #fef3c7; color: #92400e; }
    .status-answered { background: #d1fae5; color: #065f46; }
    .status-closed { background: #f3f4f6; color: #4b5563; }

    .ticket-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      color: #666;
    }

    .separator {
      color: #ddd;
    }

    .messages-section {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 24px;
    }

    .message-card {
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .message-card.admin-reply {
      background: #fff5f5;
      border-left: 4px solid #e31b23;
    }

    .message-header {
      margin-bottom: 16px;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #e5e7eb;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: #666;
    }

    .admin-avatar {
      background: #e31b23;
      color: #fff;
    }

    .user-name {
      display: block;
      font-weight: 500;
      color: #1a1a1a;
    }

    .message-time {
      font-size: 13px;
      color: #888;
    }

    .message-body p {
      margin: 0;
      line-height: 1.6;
      color: #444;
      white-space: pre-wrap;
    }

    .attachment {
      margin-top: 16px;
    }

    .attachment-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #e31b23;
      text-decoration: none;
      font-size: 14px;
    }

    .attachment-link:hover {
      text-decoration: underline;
    }

    .reply-section {
      background: #fff;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .reply-section h3 {
      font-size: 18px;
      font-weight: 600;
      margin: 0 0 16px;
      color: #1a1a1a;
    }

    .form-control {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      font-size: 15px;
      resize: vertical;
    }

    .form-control:focus {
      outline: none;
      border-color: #e31b23;
      box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);
    }

    .reply-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;
    }

    .file-input {
      font-size: 14px;
    }

    .btn-primary {
      padding: 12px 24px;
      background: #e31b23;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
    }

    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .closed-notice {
      background: #f3f4f6;
      border-radius: 12px;
      padding: 24px;
      text-align: center;
    }

    .closed-notice p {
      color: #666;
      margin: 0 0 16px;
    }
  `]
})
export class ClientTicketDetailComponent implements OnInit {
  ticket = signal<any>(null);
  loading = signal(true);
  submitting = signal(false);
  replyForm: FormGroup;
  selectedFile: File | null = null;
  currentUser: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private ticketService: TicketService,
    private authService: AuthService,
    private toast: ToastService
  ) {
    this.replyForm = this.fb.group({
      message: ['', Validators.required]
    });
    this.currentUser = this.authService.currentUser;
  }

  ngOnInit(): void {
    const ticketId = this.route.snapshot.paramMap.get('id');
    if (ticketId) {
      this.loadTicket(+ticketId);
    }
  }

  loadTicket(id: number): void {
    this.loading.set(true);
    this.ticketService.getTicket(id).subscribe({
      next: (response) => {
        this.ticket.set(response.data || response.ticket || response);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.router.navigate(['/client/tickets']);
      }
    });
  }

  getInitials(name: string | undefined): string {
    if (!name) return 'U';
    return name.charAt(0).toUpperCase();
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  submitReply(): void {
    if (this.replyForm.invalid) return;

    this.submitting.set(true);

    const formData = new FormData();
    formData.append('message', this.replyForm.value.message);
    if (this.selectedFile) {
      formData.append('attachment', this.selectedFile);
    }

    this.ticketService.replyToTicket(this.ticket().id, formData).subscribe({
      next: () => {
        this.submitting.set(false);
        this.replyForm.reset();
        this.selectedFile = null;
        this.toast.success('Reply sent successfully');
        this.loadTicket(this.ticket().id);
      },
      error: () => {
        this.submitting.set(false);
        this.toast.error('Failed to send reply. Please try again.');
      }
    });
  }
}
