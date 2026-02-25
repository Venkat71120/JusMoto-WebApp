import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-wallet-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">Wallet Management</h1>
    </div>

    <div class="form-card">
      <h3>Add / Deduct Wallet Balance</h3>
      <div class="form-row">
        <div class="form-group">
          <label>User</label>
          <select [(ngModel)]="selectedUserId" class="form-input">
            <option value="">Select user...</option>
            <option *ngFor="let user of users()" [value]="user.id">{{ user.first_name }} {{ user.last_name }} ({{ user.email }})</option>
          </select>
        </div>
        <div class="form-group">
          <label>Amount (₹)</label>
          <input type="number" [(ngModel)]="amount" placeholder="Enter amount" class="form-input" min="1">
        </div>
      </div>
      <div class="form-group" style="margin-bottom:20px">
        <label>Reason</label>
        <input type="text" [(ngModel)]="reason" placeholder="Reason for transaction" class="form-input">
      </div>
      <div *ngIf="formError" class="error-msg">{{ formError }}</div>
      <div class="btn-row">
        <button class="btn-primary btn-add" (click)="addBalance()" [disabled]="processing()">
          {{ processing() ? 'Processing...' : '+ Add Balance' }}
        </button>
        <button class="btn-primary btn-deduct" (click)="deductBalance()" [disabled]="processing()">
          {{ processing() ? 'Processing...' : '- Deduct Balance' }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .form-card { background:#fff; border-radius:12px; padding:32px; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .form-card h3 { font-size:18px; font-weight:700; color:#1a1a2e; margin:0 0 20px; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px; }
    .form-group { display:flex; flex-direction:column; gap:6px; }
    .form-group label { font-size:13px; font-weight:600; color:#374151; }
    .form-input { padding:10px 14px; border:1px solid #d1d5db; border-radius:8px; font-size:14px; }
    .form-input:focus { outline:none; border-color:#e31b23; }
    .error-msg { color:#dc2626; background:#fee2e2; padding:10px 14px; border-radius:8px; margin-bottom:16px; font-size:13px; }
    .btn-row { display:flex; gap:12px; }
    .btn-primary { color:#fff; border:none; padding:10px 24px; border-radius:8px; cursor:pointer; font-weight:600; font-size:14px; }
    .btn-primary:disabled { opacity:0.6; cursor:not-allowed; }
    .btn-add { background:#16a34a; }
    .btn-add:hover { background:#15803d; }
    .btn-deduct { background:#dc2626; }
    .btn-deduct:hover { background:#b91c1c; }
    @media (max-width:768px) { .form-row { grid-template-columns:1fr; } }
  `]
})
export class WalletManagementComponent implements OnInit {
  users = signal<any[]>([]);
  selectedUserId = '';
  amount: number | null = null;
  reason = '';
  processing = signal(false);
  formError = '';

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() { this.loadUsers(); }

  loadUsers() {
    this.http.get<any>(`${environment.apiUrl}/admin/users?limit=500`).subscribe({
      next: (res) => this.users.set(res.data || [])
    });
  }

  validate(): boolean {
    if (!this.selectedUserId) { this.formError = 'Please select a user'; return false; }
    if (!this.amount || this.amount <= 0) { this.formError = 'Please enter a valid amount'; return false; }
    this.formError = '';
    return true;
  }

  addBalance() {
    if (!this.validate()) return;
    this.processing.set(true);
    this.http.post<any>(`${environment.apiUrl}/wallet/admin/add`, {
      user_id: this.selectedUserId, amount: this.amount, description: this.reason
    }).subscribe({
      next: () => { this.toast.success('Balance added successfully'); this.resetForm(); },
      error: (err) => { this.toast.error(err.error?.error || 'Failed to add balance'); this.processing.set(false); },
      complete: () => this.processing.set(false)
    });
  }

  deductBalance() {
    if (!this.validate()) return;
    this.processing.set(true);
    this.http.post<any>(`${environment.apiUrl}/wallet/admin/deduct`, {
      user_id: this.selectedUserId, amount: this.amount, description: this.reason
    }).subscribe({
      next: () => { this.toast.success('Balance deducted successfully'); this.resetForm(); },
      error: (err) => { this.toast.error(err.error?.error || 'Failed to deduct balance'); this.processing.set(false); },
      complete: () => this.processing.set(false)
    });
  }

  resetForm() { this.selectedUserId = ''; this.amount = null; this.reason = ''; }
}
