import { Component, OnInit, signal, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../../core/services/ticket.service';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-client-ticket-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="chat-page">
      <!-- Header -->
      <div class="chat-header">
        <a routerLink="/client/tickets" class="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
        </a>
        <div class="header-info" *ngIf="ticket()">
          <h1>{{ ticket().subject }}</h1>
          <div class="header-meta">
            <span class="ticket-num">#{{ ticket().ticket_number || ticket().id }}</span>
            <span class="dot"></span>
            <span class="status-pill" [class]="'s-' + ticket().status">{{ ticket().status | titlecase }}</span>
            <span class="dot"></span>
            <span>{{ ticket().priority | titlecase }} Priority</span>
          </div>
        </div>
      </div>

      <!-- Loading -->
      <div *ngIf="loading()" class="loading-state">
        <div class="spinner"></div>
      </div>

      <!-- Chat Area -->
      <div class="chat-body" #chatBody *ngIf="!loading() && ticket()">
        <!-- Date divider -->
        <div class="date-divider">
          <span>{{ ticket().created_at | date:'MMMM d, yyyy' }}</span>
        </div>

        <!-- Original ticket message -->
        <div class="bubble-row mine">
          <div class="bubble mine-bubble">
            <p>{{ ticket().description }}</p>
            <a *ngIf="ticket().attachment" [href]="getAttachmentUrl(ticket().attachment)" target="_blank" class="attach-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
              Attachment
            </a>
            <span class="bubble-time">{{ ticket().created_at | date:'shortTime' }}</span>
          </div>
        </div>

        <!-- Messages -->
        <ng-container *ngFor="let msg of ticket().ticketMessages; let i = index">
          <!-- Date divider if different day -->
          <div class="date-divider" *ngIf="i > 0 && isDifferentDay(ticket().ticketMessages[i-1].created_at, msg.created_at)">
            <span>{{ msg.created_at | date:'MMMM d, yyyy' }}</span>
          </div>

          <div class="bubble-row" [class.mine]="!msg.admin_id" [class.theirs]="msg.admin_id">
            <!-- Admin avatar -->
            <div class="chat-avatar admin-av" *ngIf="msg.admin_id">
              {{ (msg.admin?.name || 'S').charAt(0) }}
            </div>

            <div class="bubble" [class.mine-bubble]="!msg.admin_id" [class.their-bubble]="msg.admin_id">
              <span class="sender-name" *ngIf="msg.admin_id">{{ msg.admin?.name || 'Support Team' }}</span>
              <p *ngIf="msg.message">{{ msg.message }}</p>
              <!-- Attachment display -->
              <div *ngIf="msg.attachment" class="msg-attachment">
                <img *ngIf="isImage(msg.attachment)" [src]="getAttachmentUrl(msg.attachment)" class="attachment-img" alt="Attachment" (click)="openAttachment(msg.attachment)">
                <a *ngIf="!isImage(msg.attachment)" [href]="getAttachmentUrl(msg.attachment)" target="_blank" class="attach-file-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  <span>{{ getFilename(msg.attachment) }}</span>
                </a>
              </div>
              <span class="bubble-time">{{ msg.created_at | date:'shortTime' }}</span>
            </div>

            <!-- User avatar -->
            <div class="chat-avatar user-av" *ngIf="!msg.admin_id">
              {{ getInitials(currentUser?.first_name) }}
            </div>
          </div>
        </ng-container>

        <!-- Closed notice -->
        <div class="system-msg" *ngIf="ticket().status === 'closed'">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          This service request has been closed.
          <a routerLink="/client/tickets/new">Create a new request</a>
        </div>
      </div>

      <!-- Input Bar -->
      <div class="chat-input-bar" *ngIf="!loading() && ticket() && ticket().status !== 'closed'">
        <!-- Attachment preview -->
        <div class="attachment-preview" *ngIf="attachmentFile">
          <div class="preview-content">
            <img *ngIf="attachmentPreviewUrl" [src]="attachmentPreviewUrl" class="preview-thumb" alt="Preview">
            <svg *ngIf="!attachmentPreviewUrl" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            <span class="preview-name">{{ attachmentFile.name }}</span>
            <span class="preview-size">{{ formatFileSize(attachmentFile.size) }}</span>
          </div>
          <button class="preview-remove" (click)="removeAttachment()">&times;</button>
        </div>
        <div class="input-wrap">
          <label class="attach-btn" title="Attach file">
            <input type="file" accept="image/*,.pdf,.doc,.docx" (change)="onFileSelect($event)" style="display:none" #fileInput>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
          </label>
          <textarea
            [(ngModel)]="replyText"
            placeholder="Type a message..."
            rows="1"
            (keydown.enter)="onEnter($event)"
            (input)="autoResize($event)"
            #msgInput></textarea>
          <button class="send-btn" (click)="submitReply()" [disabled]="submitting() || (!replyText.trim() && !attachmentFile)">
            <svg *ngIf="!submitting()" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            <div *ngIf="submitting()" class="send-spinner"></div>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: calc(100vh - 90px); }

    .chat-page {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: #f0f2f5;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    }

    /* Header */
    .chat-header {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 16px 20px;
      background: #fff;
      border-bottom: 1px solid #e5e7eb;
      flex-shrink: 0;
    }

    .back-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      color: #444;
      transition: background 0.2s;
    }

    .back-btn:hover { background: #f5f5f5; }

    .header-info h1 {
      font-size: 16px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 500px;
    }

    .header-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      color: #888;
    }

    .dot {
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: #ccc;
    }

    .ticket-num { font-weight: 500; color: #666; }

    .status-pill {
      padding: 2px 10px;
      border-radius: 10px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    .s-open { background: #dbeafe; color: #1e40af; }
    .s-pending { background: #fef3c7; color: #92400e; }
    .s-answered { background: #d1fae5; color: #065f46; }
    .s-closed { background: #f3f4f6; color: #6b7280; }

    /* Loading */
    .loading-state {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .spinner {
      width: 36px;
      height: 36px;
      border: 3px solid #e5e7eb;
      border-top-color: #e31b23;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    /* Chat body */
    .chat-body {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .chat-body::-webkit-scrollbar { width: 6px; }
    .chat-body::-webkit-scrollbar-thumb { background: #ccc; border-radius: 3px; }

    /* Date divider */
    .date-divider {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 16px 0;
    }

    .date-divider span {
      background: rgba(0,0,0,0.06);
      color: #666;
      font-size: 12px;
      font-weight: 500;
      padding: 4px 14px;
      border-radius: 10px;
    }

    /* Bubbles */
    .bubble-row {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      max-width: 75%;
    }

    .bubble-row.mine { align-self: flex-end; }
    .bubble-row.theirs { align-self: flex-start; }

    .chat-avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 600;
      flex-shrink: 0;
    }

    .admin-av { background: #e31b23; color: #fff; }
    .user-av { background: #e0e7ff; color: #4338ca; }

    .bubble {
      padding: 10px 14px;
      border-radius: 18px;
      position: relative;
      word-break: break-word;
    }

    .mine-bubble {
      background: #e31b23;
      color: #fff;
      border-bottom-right-radius: 4px;
    }

    .their-bubble {
      background: #fff;
      color: #1a1a1a;
      border-bottom-left-radius: 4px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.08);
    }

    .sender-name {
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: #e31b23;
      margin-bottom: 4px;
    }

    .bubble p {
      margin: 0;
      font-size: 14px;
      line-height: 1.5;
      white-space: pre-wrap;
    }

    .bubble-time {
      display: block;
      font-size: 11px;
      margin-top: 4px;
      text-align: right;
    }

    .mine-bubble .bubble-time { color: rgba(255,255,255,0.7); }
    .their-bubble .bubble-time { color: #aaa; }

    /* Attachment in message */
    .msg-attachment { margin-top: 8px; }

    .attachment-img {
      max-width: 260px;
      max-height: 200px;
      border-radius: 10px;
      object-fit: cover;
      cursor: pointer;
      display: block;
    }
    .mine-bubble .attachment-img { border: 1px solid rgba(255,255,255,0.2); }
    .their-bubble .attachment-img { border: 1px solid #e5e7eb; }

    .attach-file-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      padding: 6px 12px;
      border-radius: 8px;
      text-decoration: none;
    }
    .mine-bubble .attach-file-link { background: rgba(255,255,255,0.15); color: #fff; }
    .their-bubble .attach-file-link { background: #f1f5f9; color: #3b82f6; }

    .attach-link {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 13px;
      margin-top: 6px;
      text-decoration: none;
    }

    .mine-bubble .attach-link { color: rgba(255,255,255,0.85); }
    .their-bubble .attach-link { color: #e31b23; }

    /* System message */
    .system-msg {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      font-size: 13px;
      color: #888;
      margin: 20px 0;
    }

    .system-msg a {
      color: #e31b23;
      text-decoration: none;
      font-weight: 500;
    }

    /* Attachment preview bar */
    .attachment-preview {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 14px;
      background: #f1f5f9;
      border-top: 1px solid #e5e7eb;
      flex-shrink: 0;
    }

    .preview-content {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
    }

    .preview-thumb {
      width: 36px;
      height: 36px;
      border-radius: 6px;
      object-fit: cover;
      border: 1px solid #e5e7eb;
    }

    .preview-name {
      font-size: 13px;
      font-weight: 500;
      color: #334155;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 200px;
    }

    .preview-size {
      font-size: 11px;
      color: #94a3b8;
      white-space: nowrap;
    }

    .preview-remove {
      background: none;
      border: none;
      color: #dc2626;
      font-size: 22px;
      cursor: pointer;
      line-height: 1;
      padding: 4px 8px;
      border-radius: 6px;
    }
    .preview-remove:hover { background: #fee2e2; }

    /* Input bar */
    .chat-input-bar {
      background: #fff;
      border-top: 1px solid #e5e7eb;
      flex-shrink: 0;
    }

    .input-wrap {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      background: #f5f6fa;
      border-radius: 24px;
      padding: 6px 6px 6px 6px;
      margin: 12px 16px;
    }

    .attach-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      color: #64748b;
      flex-shrink: 0;
      transition: all 0.2s;
    }
    .attach-btn:hover { color: #e31b23; background: rgba(227,27,35,0.08); }

    .input-wrap textarea {
      flex: 1;
      border: none;
      background: transparent;
      font-size: 15px;
      line-height: 1.4;
      resize: none;
      outline: none;
      max-height: 120px;
      padding: 8px 0;
      font-family: inherit;
    }

    .send-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      background: #e31b23;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      flex-shrink: 0;
      transition: background 0.2s, transform 0.15s;
    }

    .send-btn:hover:not(:disabled) {
      background: #c8171e;
      transform: scale(1.05);
    }

    .send-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .send-spinner {
      width: 18px;
      height: 18px;
      border: 2px solid rgba(255,255,255,0.3);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }

    /* Responsive */
    @media (max-width: 640px) {
      .bubble-row { max-width: 88%; }
      .header-info h1 { max-width: 200px; }
    }
  `]
})
export class ClientTicketDetailComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatBody') chatBody!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef;
  ticket = signal<any>(null);
  loading = signal(true);
  submitting = signal(false);
  replyText = '';
  attachmentFile: File | null = null;
  attachmentPreviewUrl: string | null = null;
  currentUser: any;
  private shouldScroll = false;
  private uploadsBase = environment.apiUrl.replace('/api/v1', '') + '/uploads/';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketService,
    private authService: AuthService,
    private toast: ToastService
  ) {
    this.currentUser = this.authService.currentUser;
  }

  ngOnInit(): void {
    const ticketId = this.route.snapshot.paramMap.get('id');
    if (ticketId) {
      this.loadTicket(+ticketId);
    }
  }

  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }

  loadTicket(id: number): void {
    this.loading.set(true);
    this.ticketService.getTicket(id).subscribe({
      next: (response) => {
        this.ticket.set(response.data || response.ticket || response);
        this.loading.set(false);
        this.shouldScroll = true;
      },
      error: () => {
        this.loading.set(false);
        this.router.navigate(['/client/tickets']);
      }
    });
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

  openAttachment(attachment: string): void {
    window.open(this.getAttachmentUrl(attachment), '_blank');
  }

  getInitials(name: string | undefined): string {
    if (!name) return 'U';
    return name.charAt(0).toUpperCase();
  }

  isDifferentDay(a: string, b: string): boolean {
    return new Date(a).toDateString() !== new Date(b).toDateString();
  }

  onFileSelect(event: any): void {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      this.toast.error('File too large. Maximum size is 10MB.');
      return;
    }
    this.attachmentFile = file;
    // Generate preview for images
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => this.attachmentPreviewUrl = e.target?.result as string;
      reader.readAsDataURL(file);
    } else {
      this.attachmentPreviewUrl = null;
    }
  }

  removeAttachment(): void {
    this.attachmentFile = null;
    this.attachmentPreviewUrl = null;
    if (this.fileInput) this.fileInput.nativeElement.value = '';
  }

  formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  onEnter(event: Event): void {
    const e = event as KeyboardEvent;
    if (!e.shiftKey) {
      e.preventDefault();
      this.submitReply();
    }
  }

  autoResize(event: Event): void {
    const el = event.target as HTMLTextAreaElement;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  }

  submitReply(): void {
    if ((!this.replyText.trim() && !this.attachmentFile) || this.submitting()) return;

    this.submitting.set(true);

    const formData = new FormData();
    formData.append('message', this.replyText.trim());
    if (this.attachmentFile) {
      formData.append('attachment', this.attachmentFile);
    }

    this.ticketService.replyToTicket(this.ticket().id, formData).subscribe({
      next: () => {
        this.submitting.set(false);
        this.replyText = '';
        this.removeAttachment();
        this.loadTicket(this.ticket().id);
      },
      error: () => {
        this.submitting.set(false);
        this.toast.error('Failed to send message');
      }
    });
  }

  private scrollToBottom(): void {
    try {
      if (this.chatBody) {
        this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
      }
    } catch (_) {}
  }
}
