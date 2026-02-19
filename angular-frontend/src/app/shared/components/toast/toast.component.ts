import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container">
      <div *ngFor="let toast of toastService.toasts()" class="toast" [ngClass]="'toast-' + toast.type" (click)="toastService.dismiss(toast.id)">
        <svg *ngIf="toast.type === 'success'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <svg *ngIf="toast.type === 'error'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
        <svg *ngIf="toast.type === 'warning'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <svg *ngIf="toast.type === 'info'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        <span class="toast-msg">{{ toast.message }}</span>
      </div>
    </div>
  `,
  styles: [`
    .toast-container { position:fixed; top:20px; right:20px; z-index:10000; display:flex; flex-direction:column; gap:10px; max-width:400px; }
    .toast { display:flex; align-items:center; gap:10px; padding:14px 20px; border-radius:10px; color:#fff; font-weight:500; font-size:14px; cursor:pointer; animation:slideIn 0.3s ease; box-shadow:0 4px 12px rgba(0,0,0,0.15); }
    .toast-success { background:#16a34a; }
    .toast-error { background:#dc2626; }
    .toast-warning { background:#d97706; }
    .toast-info { background:#2563eb; }
    .toast-msg { flex:1; }
    @keyframes slideIn { from { transform:translateX(100%); opacity:0; } to { transform:translateX(0); opacity:1; } }
  `]
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
}
