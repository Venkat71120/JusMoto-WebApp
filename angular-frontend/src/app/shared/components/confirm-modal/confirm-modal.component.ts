import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" *ngIf="open" (click)="onCancel()">
      <div class="modal-card" (click)="$event.stopPropagation()">
        <div class="modal-icon" [ngClass]="type">
          <svg *ngIf="type === 'danger'" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          <svg *ngIf="type === 'warning'" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <svg *ngIf="type === 'info'" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </div>
        <h3 class="modal-title">{{ title }}</h3>
        <p class="modal-message">{{ message }}</p>
        <div class="modal-actions">
          <button class="btn-cancel" (click)="onCancel()">Cancel</button>
          <button class="btn-confirm" [ngClass]="type" (click)="onConfirm()" [disabled]="loading">
            {{ loading ? 'Processing...' : confirmText }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:9999; display:flex; align-items:center; justify-content:center; animation:fadeIn 0.2s ease; }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    .modal-card { background:#fff; border-radius:16px; padding:32px; width:90vw; max-width:420px; text-align:center; box-shadow:0 20px 60px rgba(0,0,0,0.2); animation:slideUp 0.2s ease; }
    @keyframes slideUp { from { transform:translateY(20px); opacity:0; } to { transform:translateY(0); opacity:1; } }
    .modal-icon { width:56px; height:56px; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px; }
    .modal-icon.danger { background:#fee2e2; color:#dc2626; }
    .modal-icon.warning { background:#fef3c7; color:#d97706; }
    .modal-icon.info { background:#dbeafe; color:#2563eb; }
    .modal-title { font-size:18px; font-weight:700; color:#1a1a2e; margin:0 0 8px; }
    .modal-message { font-size:14px; color:#64748b; margin:0 0 24px; line-height:1.5; }
    .modal-actions { display:flex; gap:12px; justify-content:center; }
    .btn-cancel { padding:10px 24px; border:1px solid #d1d5db; border-radius:8px; background:#fff; color:#374151; font-weight:600; cursor:pointer; font-size:14px; }
    .btn-cancel:hover { background:#f9fafb; }
    .btn-confirm { padding:10px 24px; border:none; border-radius:8px; color:#fff; font-weight:600; cursor:pointer; font-size:14px; transition:background 0.2s; }
    .btn-confirm.danger { background:#dc2626; }
    .btn-confirm.danger:hover { background:#b91c1c; }
    .btn-confirm.warning { background:#d97706; }
    .btn-confirm.warning:hover { background:#b45309; }
    .btn-confirm.info { background:#2563eb; }
    .btn-confirm.info:hover { background:#1d4ed8; }
    .btn-confirm:disabled { opacity:0.6; cursor:not-allowed; }
  `]
})
export class ConfirmModalComponent {
  @Input() open = false;
  @Input() title = 'Confirm Action';
  @Input() message = 'Are you sure you want to proceed?';
  @Input() confirmText = 'Confirm';
  @Input() type: 'danger' | 'warning' | 'info' = 'danger';
  @Input() loading = false;
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  onConfirm() { this.confirmed.emit(); }
  onCancel() { this.cancelled.emit(); }
}
