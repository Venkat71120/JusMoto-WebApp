import { Component, OnInit, OnDestroy, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';
import { AuthService } from '../../../core/services/auth.service';
import { SocketService } from '../../../core/services/socket.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ConfirmModalComponent],
  template: `
    <a routerLink="/admin/support-ticket/tickets" class="back-link">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
      Back to Service Requests
    </a>

    <div class="loading-center" *ngIf="loading()"><div class="spinner"></div></div>

    <div *ngIf="!loading() && ticket()">
      <!-- Ticket Header -->
      <div class="ticket-header">
        <div class="header-left">
          <h1 class="page-title">{{ ticket().title || ticket().subject }}</h1>
          <div class="ticket-meta">
            <span><strong>Customer:</strong> {{ ticket().user?.first_name }} {{ ticket().user?.last_name || '' }}</span>
            <span *ngIf="ticket().user?.email"><strong>Email:</strong> {{ ticket().user.email }}</span>
            <span *ngIf="ticket().department"><strong>Dept:</strong> {{ ticket().department.name }}</span>
            <span><strong>Priority:</strong>
              <span class="badge"
                [class.badge-red]="ticket().priority === 'high' || ticket().priority === 'urgent'"
                [class.badge-yellow]="ticket().priority === 'medium' || ticket().priority === 'normal'"
                [class.badge-green]="ticket().priority === 'low'">
                {{ ticket().priority }}
              </span>
            </span>
          </div>
        </div>
        <div class="header-controls">
          <div class="control-group">
            <label>Status:</label>
            <div class="custom-select-wrap">
              <select class="custom-select" [(ngModel)]="pendingStatus">
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
              <svg class="select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
            <button class="btn-action" [disabled]="pendingStatus === selectedStatus" (click)="statusConfirmOpen.set(true)">Update</button>
          </div>
          <div class="control-group" *ngIf="isSuperAdmin">
            <label>Assign to:</label>
            <div class="custom-select-wrap wide">
              <select class="custom-select" [(ngModel)]="pendingAdminId">
                <option value="">Unassigned</option>
                <option *ngFor="let f of franchiseAdmins()" [value]="f.id">{{ f.name }} ({{ f.email }})</option>
              </select>
              <svg class="select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
            <button class="btn-action" [disabled]="pendingAdminId === selectedAdminId" (click)="assignConfirmOpen.set(true)">Assign</button>
          </div>
        </div>
      </div>

      <!-- Order Info Card (if linked) -->
      <div class="order-card" *ngIf="ticket().order">
        <div class="order-card-header">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e31b23" stroke-width="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
          <span>Linked Order: <strong>#{{ ticket().order.invoice_number || ticket().order.id }}</strong></span>
        </div>
        <div class="order-details">
          <span>Total: <strong>₹{{ ticket().order.total }}</strong></span>
          <span>Status: <span class="badge badge-blue">{{ getOrderStatus(ticket().order.status) }}</span></span>
          <span>Payment: <span class="badge" [class.badge-green]="ticket().order.payment_status == 1" [class.badge-yellow]="ticket().order.payment_status != 1">{{ ticket().order.payment_status == 1 ? 'Paid' : 'Unpaid' }}</span></span>
        </div>
      </div>

      <!-- Payment Button (visible only when ticket is closed) -->
      <div class="payment-section" *ngIf="ticket().status === 'closed'">
        <div class="payment-card">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
          <div class="payment-info">
            <h4>Service Request Closed - Payment Required</h4>
            <p>This service request has been closed. Click to process payment for the service.</p>
          </div>
          <button class="btn-payment" (click)="processPayment()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            Process Payment
          </button>
        </div>
      </div>

      <!-- Chat Container -->
      <div class="chat-container">
        <div class="messages-area" #messagesArea>
          <div *ngFor="let msg of messages()"
               class="message-bubble"
               [class.admin-msg]="msg.admin_id"
               [class.user-msg]="!msg.admin_id">
            <div class="msg-sender">{{ msg.admin_id ? (msg.admin?.name || 'Admin') : (msg.user?.first_name || ticket().user?.first_name || 'Customer') }}</div>
            <div class="msg-text" *ngIf="msg.message">{{ msg.message }}</div>
            <div class="msg-attachment" *ngIf="msg.attachment">
              <a [href]="getAttachmentUrl(msg.attachment)" target="_blank" class="attachment-link">
                <img *ngIf="isImage(msg.attachment)" [src]="getAttachmentUrl(msg.attachment)" class="attachment-img" alt="Attachment">
                <div *ngIf="!isImage(msg.attachment)" class="attachment-file">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  <span>{{ getFilename(msg.attachment) }}</span>
                </div>
              </a>
            </div>
            <div class="msg-time">{{ msg.created_at | date:'short' }}</div>
          </div>
          <div *ngIf="messages().length === 0" class="no-messages">No messages yet. Start the conversation.</div>
        </div>

        <!-- Reply Box with Attachment -->
        <div class="reply-box" *ngIf="ticket().status !== 'closed'">
          <div class="reply-input-area">
            <textarea [(ngModel)]="replyText" placeholder="Type your reply..." rows="3"></textarea>
            <div class="attachment-preview" *ngIf="attachmentFile">
              <span>{{ attachmentFile.name }}</span>
              <button class="remove-attachment" (click)="removeAttachment()">&times;</button>
            </div>
          </div>
          <div class="reply-actions">
            <label class="btn-attach" title="Attach file">
              <input type="file" accept="image/*,.pdf,.doc,.docx" (change)="onFileSelect($event)" style="display:none" #fileInput>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            </label>
            <button class="btn-primary" (click)="sendReply()" [disabled]="sending() || (!replyText.trim() && !attachmentFile)">
              {{ sending() ? 'Sending...' : 'Send' }}
            </button>
          </div>
        </div>

        <div class="closed-notice" *ngIf="ticket().status === 'closed'">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
          <span>This service request is closed. Reopen to reply.</span>
        </div>
      </div>
    </div>

    <!-- Status Change Confirm -->
    <app-confirm-modal
      [open]="statusConfirmOpen()"
      title="Confirm Status Change"
      [message]="'Are you sure you want to change status to &quot;' + (pendingStatus === 'closed' ? 'Closed' : 'Open') + '&quot;?'"
      confirmText="Yes, Change"
      type="warning"
      [loading]="statusUpdating()"
      (confirmed)="confirmStatusChange()"
      (cancelled)="statusConfirmOpen.set(false)">
    </app-confirm-modal>

    <!-- Assign Confirm -->
    <app-confirm-modal
      [open]="assignConfirmOpen()"
      title="Confirm Assignment"
      [message]="'Are you sure you want to assign this service request to &quot;' + getPendingAdminName() + '&quot;?'"
      confirmText="Yes, Assign"
      type="info"
      [loading]="assignUpdating()"
      (confirmed)="confirmAssign()"
      (cancelled)="assignConfirmOpen.set(false)">
    </app-confirm-modal>
  `,
  styles: [`
    .back-link { color:#64748b; text-decoration:none; font-weight:500; display:inline-flex; align-items:center; gap:6px; margin-bottom:20px; }
    .back-link:hover { color:#e31b23; }
    .loading-center { display:flex; justify-content:center; padding:60px; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .page-title { font-size:22px; font-weight:700; color:#1a1a2e; margin:0 0 8px; }
    .ticket-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px; flex-wrap:wrap; gap:16px; background:#fff; padding:24px; border-radius:12px; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .ticket-meta { display:flex; gap:16px; flex-wrap:wrap; font-size:13px; color:#64748b; }
    .ticket-meta span { display:inline-flex; align-items:center; gap:4px; }
    .header-controls { display:flex; flex-direction:column; gap:10px; }
    .control-group { display:flex; align-items:center; gap:8px; }
    .control-group label { font-weight:600; color:#334155; font-size:13px; white-space:nowrap; }
    .custom-select-wrap { position:relative; min-width:150px; }
    .custom-select-wrap.wide { min-width:240px; }
    .custom-select { width:100%; padding:9px 36px 9px 14px; border:1.5px solid #d1d5db; border-radius:10px; font-size:13px; font-weight:500; color:#1e293b; background:linear-gradient(to bottom, #fff 0%, #f9fafb 100%); appearance:none; -webkit-appearance:none; -moz-appearance:none; cursor:pointer; transition:all 0.2s ease; box-shadow:0 1px 2px rgba(0,0,0,0.05); }
    .custom-select:hover { border-color:#a1a1aa; box-shadow:0 1px 4px rgba(0,0,0,0.08); }
    .custom-select:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.12); }
    .select-arrow { position:absolute; right:11px; top:50%; transform:translateY(-50%); pointer-events:none; opacity:0.5; transition:opacity 0.2s; }
    .custom-select-wrap:hover .select-arrow { opacity:0.8; }
    .btn-action { padding:9px 18px; border:none; border-radius:10px; background:#e31b23; color:#fff; font-weight:600; font-size:13px; cursor:pointer; white-space:nowrap; transition:all 0.2s; box-shadow:0 1px 3px rgba(227,27,35,0.3); }
    .btn-action:hover { background:#c8151c; box-shadow:0 2px 6px rgba(227,27,35,0.35); transform:translateY(-1px); }
    .btn-action:disabled { opacity:0.4; cursor:not-allowed; background:#94a3b8; box-shadow:none; transform:none; }
    .badge { padding:3px 10px; border-radius:20px; font-size:11px; font-weight:600; text-transform:capitalize; }
    .badge-green { background:#dcfce7; color:#16a34a; }
    .badge-red { background:#fee2e2; color:#dc2626; }
    .badge-yellow { background:#fef9c3; color:#a16207; }
    .badge-blue { background:#dbeafe; color:#2563eb; }

    .order-card { background:#fff; border-radius:12px; padding:16px 24px; margin-bottom:16px; box-shadow:0 1px 3px rgba(0,0,0,0.08); border-left:4px solid #e31b23; }
    .order-card-header { display:flex; align-items:center; gap:8px; font-size:14px; color:#334155; margin-bottom:8px; }
    .order-details { display:flex; gap:20px; flex-wrap:wrap; font-size:13px; color:#64748b; }
    .order-details span { display:inline-flex; align-items:center; gap:6px; }

    .payment-section { margin-bottom:16px; }
    .payment-card { display:flex; align-items:center; gap:16px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px; padding:20px 24px; }
    .payment-info { flex:1; }
    .payment-info h4 { margin:0 0 4px; font-size:15px; color:#166534; font-weight:700; }
    .payment-info p { margin:0; font-size:13px; color:#16a34a; }
    .btn-payment { display:inline-flex; align-items:center; gap:8px; background:#16a34a; color:#fff; border:none; padding:10px 20px; border-radius:8px; font-weight:600; font-size:14px; cursor:pointer; white-space:nowrap; }
    .btn-payment:hover { background:#15803d; }

    .chat-container { background:#fff; border-radius:12px; box-shadow:0 1px 3px rgba(0,0,0,0.08); overflow:hidden; }
    .messages-area { padding:24px; max-height:500px; overflow-y:auto; display:flex; flex-direction:column; gap:12px; background:#f8f9fa; }
    .message-bubble { max-width:70%; padding:12px 16px; border-radius:12px; }
    .user-msg { align-self:flex-start; background:#e5e7eb; color:#334155; border-bottom-left-radius:4px; }
    .admin-msg { align-self:flex-end; background:#fde8e9; color:#1a1a2e; border-bottom-right-radius:4px; }
    .msg-sender { font-size:11px; font-weight:700; margin-bottom:4px; color:#64748b; }
    .admin-msg .msg-sender { color:#e31b23; }
    .msg-text { font-size:14px; line-height:1.5; white-space:pre-wrap; }
    .msg-attachment { margin-top:8px; }
    .attachment-link { text-decoration:none; }
    .attachment-img { max-width:280px; max-height:200px; border-radius:8px; object-fit:cover; border:1px solid #e5e7eb; display:block; }
    .attachment-file { display:inline-flex; align-items:center; gap:8px; background:#f1f5f9; padding:8px 14px; border-radius:8px; color:#3b82f6; font-size:13px; font-weight:500; }
    .msg-time { font-size:10px; color:#94a3b8; margin-top:6px; text-align:right; }
    .no-messages { text-align:center; padding:40px; color:#94a3b8; }

    .reply-box { padding:16px 24px; border-top:1px solid #e5e7eb; display:flex; gap:12px; align-items:flex-end; }
    .reply-input-area { flex:1; }
    .reply-input-area textarea { width:100%; padding:10px 14px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; resize:vertical; font-family:inherit; box-sizing:border-box; }
    .reply-input-area textarea:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.1); }
    .attachment-preview { display:flex; align-items:center; gap:8px; background:#f1f5f9; padding:6px 12px; border-radius:6px; margin-top:8px; font-size:13px; color:#334155; }
    .remove-attachment { background:none; border:none; color:#dc2626; font-size:18px; cursor:pointer; line-height:1; }
    .reply-actions { display:flex; flex-direction:column; gap:8px; }
    .btn-attach { display:inline-flex; align-items:center; justify-content:center; width:40px; height:40px; border:1px solid #e5e7eb; border-radius:8px; cursor:pointer; color:#64748b; transition:all 0.2s; }
    .btn-attach:hover { color:#e31b23; border-color:#e31b23; background:#fff5f5; }
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer; white-space:nowrap; font-size:14px; }
    .btn-primary:hover { background:#b11218; }
    .btn-primary:disabled { opacity:0.6; cursor:not-allowed; }
    .closed-notice { display:flex; align-items:center; justify-content:center; gap:8px; padding:16px; border-top:1px solid #e5e7eb; color:#64748b; font-size:14px; }
  `]
})
export class TicketDetailComponent implements OnInit, OnDestroy {
  @ViewChild('messagesArea') messagesArea!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef;

  ticket = signal<any>(null);
  messages = signal<any[]>([]);
  franchiseAdmins = signal<any[]>([]);
  loading = signal(false);
  sending = signal(false);
  statusConfirmOpen = signal(false);
  statusUpdating = signal(false);
  assignConfirmOpen = signal(false);
  assignUpdating = signal(false);
  selectedStatus = '';
  selectedAdminId = '';
  pendingStatus = '';
  pendingAdminId = '';
  replyText = '';
  attachmentFile: File | null = null;
  private ticketId = '';
  private uploadsBase = environment.apiUrl.replace('/api/v1', '') + '/uploads/';
  private socketSubs: Subscription[] = [];

  isSuperAdmin = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService,
    private authService: AuthService,
    private socketService: SocketService
  ) {
    const admin = this.authService.currentAdmin;
    this.isSuperAdmin = admin ? !admin.is_franchise : false;
  }

  ngOnInit() {
    this.ticketId = this.route.snapshot.paramMap.get('id') || '';
    this.loadTicket();
    this.loadFranchiseAdmins();
    this.setupSocket();
  }

  ngOnDestroy() {
    this.socketService.leaveTicket(this.ticketId);
    this.socketSubs.forEach(s => s.unsubscribe());
  }

  private setupSocket() {
    this.socketService.joinTicket(this.ticketId);

    this.socketSubs.push(
      this.socketService.onNewMessage().subscribe(msg => {
        // Avoid duplicate if this admin sent it
        const existing = this.messages();
        if (!existing.find((m: any) => m.id === msg.id)) {
          this.messages.set([...existing, msg]);
          setTimeout(() => this.scrollToBottom(), 50);
        }
      })
    );

    this.socketSubs.push(
      this.socketService.onTicketStatusChanged().subscribe(data => {
        const t = this.ticket();
        if (t) {
          this.ticket.set({ ...t, status: data.status });
          this.selectedStatus = data.status;
          this.pendingStatus = data.status;
        }
      })
    );
  }

  loadTicket() {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/tickets/${this.ticketId}`).subscribe({
      next: (res) => {
        const t = res.data;
        this.ticket.set(t);
        this.selectedStatus = t.status || 'open';
        this.pendingStatus = t.status || 'open';
        this.selectedAdminId = t.admin_id ? String(t.admin_id) : '';
        this.pendingAdminId = t.admin_id ? String(t.admin_id) : '';
        this.messages.set(t.ticketMessages || t.messages || []);
        setTimeout(() => this.scrollToBottom(), 100);
      },
      error: () => this.router.navigate(['/admin/support-ticket/tickets']),
      complete: () => this.loading.set(false)
    });
  }

  loadFranchiseAdmins() {
    this.http.get<any>(`${environment.apiUrl}/admin/franchises`).subscribe({
      next: (res) => this.franchiseAdmins.set(res.data || [])
    });
    // Also load all staff (non-franchise admins can be assigned too)
    this.http.get<any>(`${environment.apiUrl}/admin/staff?limit=100`).subscribe({
      next: (res) => {
        const staff = res.data || [];
        const existing = this.franchiseAdmins();
        const existingIds = new Set(existing.map((f: any) => f.id));
        const merged = [...existing, ...staff.filter((s: any) => !existingIds.has(s.id))];
        this.franchiseAdmins.set(merged);
      }
    });
  }

  confirmStatusChange() {
    this.statusUpdating.set(true);
    this.http.put<any>(`${environment.apiUrl}/admin/tickets/${this.ticketId}/status`, { status: this.pendingStatus }).subscribe({
      next: () => {
        this.selectedStatus = this.pendingStatus;
        this.toast.success('Status updated to ' + (this.pendingStatus === 'closed' ? 'Closed' : 'Open'));
        this.statusConfirmOpen.set(false);
        this.statusUpdating.set(false);
        this.loadTicket();
      },
      error: () => { this.toast.error('Failed to update status'); this.statusUpdating.set(false); }
    });
  }

  getPendingAdminName(): string {
    if (!this.pendingAdminId) return 'Unassigned';
    const admin = this.franchiseAdmins().find(f => f.id == this.pendingAdminId);
    return admin?.name || 'Selected Admin';
  }

  confirmAssign() {
    this.assignUpdating.set(true);
    this.http.put<any>(`${environment.apiUrl}/admin/tickets/${this.ticketId}/assign`, {
      admin_id: this.pendingAdminId ? Number(this.pendingAdminId) : null
    }).subscribe({
      next: () => {
        this.selectedAdminId = this.pendingAdminId;
        this.toast.success('Service request assigned to ' + this.getPendingAdminName());
        this.assignConfirmOpen.set(false);
        this.assignUpdating.set(false);
      },
      error: () => { this.toast.error('Failed to assign service request'); this.assignUpdating.set(false); }
    });
  }

  onFileSelect(event: any) {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        this.toast.error('File too large. Max 10MB.');
        return;
      }
      this.attachmentFile = file;
    }
  }

  removeAttachment() {
    this.attachmentFile = null;
    if (this.fileInput) this.fileInput.nativeElement.value = '';
  }

  sendReply() {
    if (!this.replyText.trim() && !this.attachmentFile) return;
    this.sending.set(true);
    const formData = new FormData();
    formData.append('message', this.replyText);
    if (this.attachmentFile) formData.append('attachment', this.attachmentFile);
    this.http.post<any>(`${environment.apiUrl}/admin/tickets/${this.ticketId}/reply`, formData).subscribe({
      next: () => {
        this.replyText = '';
        this.attachmentFile = null;
        if (this.fileInput) this.fileInput.nativeElement.value = '';
        this.loadTicket();
      },
      error: () => { this.toast.error('Failed to send reply'); this.sending.set(false); },
      complete: () => this.sending.set(false)
    });
  }

  processPayment() {
    if (this.ticket()?.order) {
      this.router.navigate(['/admin/orders/details', this.ticket().order.id]);
    } else {
      this.toast.info('No order linked to this service request. Link an order first.');
    }
  }

  getAttachmentUrl(attachment: string): string {
    if (!attachment) return '';
    if (attachment.startsWith('http')) return attachment;
    return this.uploadsBase + attachment;
  }

  isImage(attachment: string): boolean {
    if (!attachment) return false;
    const ext = attachment.toLowerCase().split('.').pop() || '';
    return ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext);
  }

  getFilename(attachment: string): string {
    return attachment.split('/').pop() || attachment;
  }

  getOrderStatus(status: number): string {
    const labels: any = { 0: 'Pending', 1: 'Confirmed', 2: 'In Progress', 3: 'Completed', 4: 'Cancelled' };
    return labels[status] || 'Unknown';
  }

  private scrollToBottom() {
    if (this.messagesArea?.nativeElement) {
      this.messagesArea.nativeElement.scrollTop = this.messagesArea.nativeElement.scrollHeight;
    }
  }
}
