import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <a routerLink="/admin/support-ticket/tickets" class="back-link">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
      Back to Tickets
    </a>

    <div class="loading-center" *ngIf="loading()"><div class="spinner"></div></div>

    <div *ngIf="!loading() && ticket()">
      <div class="ticket-header">
        <div>
          <h1 class="page-title">{{ ticket().title || ticket().subject }}</h1>
          <div class="ticket-meta">
            <span><strong>Customer:</strong> {{ ticket().user?.name || '-' }}</span>
            <span><strong>Department:</strong> {{ ticket().department?.name || '-' }}</span>
            <span><strong>Priority:</strong>
              <span class="badge"
                [class.badge-red]="ticket().priority === 'high' || ticket().priority === 'urgent'"
                [class.badge-yellow]="ticket().priority === 'medium'"
                [class.badge-green]="ticket().priority === 'low'">
                {{ ticket().priority }}
              </span>
            </span>
          </div>
        </div>
        <div class="status-control">
          <label>Status:</label>
          <select [(ngModel)]="selectedStatus" (change)="changeStatus()">
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      <div class="chat-container">
        <div class="messages-area">
          <div *ngFor="let msg of messages()"
               class="message-bubble"
               [class.admin-msg]="msg.sender_type === 'admin' || msg.is_admin"
               [class.user-msg]="msg.sender_type !== 'admin' && !msg.is_admin">
            <div class="msg-sender">{{ msg.sender_name || (msg.is_admin ? 'Admin' : ticket().user?.name || 'Customer') }}</div>
            <div class="msg-text">{{ msg.message || msg.content || msg.body }}</div>
            <div class="msg-time">{{ msg.created_at | date:'short' }}</div>
          </div>
          <div *ngIf="messages().length === 0" class="no-messages">No messages yet</div>
        </div>

        <div class="reply-box">
          <textarea [(ngModel)]="replyText" placeholder="Type your reply..." rows="3"></textarea>
          <button class="btn-primary" (click)="sendReply()" [disabled]="sending() || !replyText.trim()">
            {{ sending() ? 'Sending...' : 'Send Reply' }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .back-link { color:#64748b; text-decoration:none; font-weight:500; display:inline-flex; align-items:center; gap:6px; margin-bottom:20px; }
    .back-link:hover { color:#e31b23; }
    .loading-center { display:flex; justify-content:center; padding:60px; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0 0 8px; }
    .ticket-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:24px; flex-wrap:wrap; gap:16px; background:#fff; padding:24px; border-radius:12px; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .ticket-meta { display:flex; gap:20px; flex-wrap:wrap; font-size:14px; color:#64748b; }
    .ticket-meta span { display:inline-flex; align-items:center; gap:6px; }
    .status-control { display:flex; align-items:center; gap:8px; }
    .status-control label { font-weight:600; color:#334155; font-size:14px; }
    .status-control select { padding:8px 14px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; }
    .status-control select:focus { outline:none; border-color:#e31b23; }
    .badge { padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; text-transform:capitalize; }
    .badge-green { background:#dcfce7; color:#16a34a; }
    .badge-red { background:#fee2e2; color:#dc2626; }
    .badge-yellow { background:#fef9c3; color:#a16207; }
    .chat-container { background:#fff; border-radius:12px; box-shadow:0 1px 3px rgba(0,0,0,0.08); overflow:hidden; }
    .messages-area { padding:24px; max-height:500px; overflow-y:auto; display:flex; flex-direction:column; gap:12px; background:#f8f9fa; }
    .message-bubble { max-width:70%; padding:12px 16px; border-radius:12px; }
    .user-msg { align-self:flex-start; background:#e5e7eb; color:#334155; border-bottom-left-radius:4px; }
    .admin-msg { align-self:flex-end; background:#fde8e9; color:#1a1a2e; border-bottom-right-radius:4px; }
    .msg-sender { font-size:12px; font-weight:700; margin-bottom:4px; color:#64748b; }
    .admin-msg .msg-sender { color:#e31b23; }
    .msg-text { font-size:14px; line-height:1.5; }
    .msg-time { font-size:11px; color:#94a3b8; margin-top:6px; text-align:right; }
    .no-messages { text-align:center; padding:40px; color:#94a3b8; }
    .reply-box { padding:20px 24px; border-top:1px solid #e5e7eb; display:flex; gap:12px; align-items:flex-end; }
    .reply-box textarea { flex:1; padding:10px 14px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; resize:vertical; font-family:inherit; }
    .reply-box textarea:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.1); }
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer; white-space:nowrap; }
    .btn-primary:hover { background:#b11218; }
    .btn-primary:disabled { opacity:0.6; cursor:not-allowed; }
  `]
})
export class TicketDetailComponent implements OnInit {
  ticket = signal<any>(null);
  messages = signal<any[]>([]);
  loading = signal(false);
  sending = signal(false);
  selectedStatus = '';
  replyText = '';
  private ticketId = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.ticketId = this.route.snapshot.paramMap.get('id') || '';
    this.loadTicket();
  }

  loadTicket() {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/tickets/${this.ticketId}`).subscribe({
      next: (res) => {
        const t = res.data;
        this.ticket.set(t);
        this.selectedStatus = t.status || 'open';
        this.messages.set(t.chat_messages || t.messages || []);
      },
      error: () => this.router.navigate(['/admin/support-ticket/tickets']),
      complete: () => this.loading.set(false)
    });
  }

  changeStatus() {
    this.http.put<any>(`${environment.apiUrl}/admin/tickets/${this.ticketId}`, { status: this.selectedStatus }).subscribe({
      next: () => {},
      error: () => {}
    });
  }

  sendReply() {
    if (!this.replyText.trim()) return;
    this.sending.set(true);
    this.http.post<any>(`${environment.apiUrl}/admin/tickets/${this.ticketId}/reply`, { message: this.replyText }).subscribe({
      next: () => { this.replyText = ''; this.loadTicket(); },
      error: () => {},
      complete: () => this.sending.set(false)
    });
  }
}
