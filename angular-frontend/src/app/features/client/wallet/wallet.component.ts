import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-client-wallet',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">My Wallet</h1>
    </div>

    <div class="wallet-top">
      <div class="balance-card">
        <div class="balance-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20"/><circle cx="18" cy="15" r="1"/></svg>
        </div>
        <div class="balance-info">
          <span class="balance-label">Available Balance</span>
          <h2 class="balance-amount">&#8377;{{ balance() | number:'1.2-2' }}</h2>
        </div>
      </div>
    </div>

    <div class="section-header">
      <h3>Transaction History</h3>
    </div>

    <div class="loading-center" *ngIf="loading()"><div class="spinner"></div></div>

    <div class="table-container" *ngIf="!loading()">
      <table class="data-table" *ngIf="transactions().length > 0">
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Balance After</th>
            <th>Reference</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let tx of transactions(); let i = index">
            <td>{{ (pagination().page - 1) * 15 + i + 1 }}</td>
            <td>
              <span class="badge" [class.badge-green]="tx.type === 'credit'" [class.badge-red]="tx.type === 'debit'">
                {{ tx.type === 'credit' ? '+ Credit' : '- Debit' }}
              </span>
            </td>
            <td class="fw-600" [class.text-green]="tx.type === 'credit'" [class.text-red]="tx.type === 'debit'">
              {{ tx.type === 'credit' ? '+' : '-' }}&#8377;{{ tx.amount | number:'1.2-2' }}
            </td>
            <td>&#8377;{{ tx.balance_after | number:'1.2-2' }}</td>
            <td>{{ tx.reference_type || '-' }}</td>
            <td>{{ tx.created_at | date:'dd MMM yyyy, hh:mm a' }}</td>
          </tr>
        </tbody>
      </table>

      <div class="empty-state" *ngIf="transactions().length === 0">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20"/></svg>
        <p>No transactions yet</p>
      </div>
    </div>

    <div class="pagination" *ngIf="pagination().totalPages > 1">
      <button class="page-btn" [disabled]="!pagination().hasPrevPage" (click)="loadTransactions(pagination().page - 1)">&laquo; Prev</button>
      <span class="page-info">Page {{ pagination().page }} of {{ pagination().totalPages }}</span>
      <button class="page-btn" [disabled]="!pagination().hasNextPage" (click)="loadTransactions(pagination().page + 1)">Next &raquo;</button>
    </div>
  `,
  styles: [`
    .page-header { margin-bottom:24px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .wallet-top { margin-bottom:28px; }
    .balance-card { display:flex; align-items:center; gap:20px; background:linear-gradient(135deg, #e31b23 0%, #b11218 100%); border-radius:16px; padding:28px 32px; color:#fff; box-shadow:0 8px 24px rgba(227,27,35,0.25); }
    .balance-icon { width:60px; height:60px; background:rgba(255,255,255,0.2); border-radius:14px; display:flex; align-items:center; justify-content:center; }
    .balance-label { font-size:14px; opacity:0.85; display:block; margin-bottom:4px; }
    .balance-amount { font-size:32px; font-weight:800; margin:0; }
    .section-header { margin-bottom:16px; }
    .section-header h3 { font-size:18px; font-weight:700; color:#1a1a2e; margin:0; }
    .loading-center { display:flex; justify-content:center; padding:60px; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .table-container { background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .data-table { width:100%; border-collapse:collapse; }
    .data-table th { padding:12px 16px; text-align:left; font-weight:600; color:#64748b; font-size:12px; text-transform:uppercase; background:#f8f9fa; border-bottom:1px solid #e5e7eb; }
    .data-table td { padding:12px 16px; font-size:14px; color:#334155; border-bottom:1px solid #f1f5f9; }
    .data-table tr:hover { background:#fff5f5; }
    .fw-600 { font-weight:600; }
    .text-green { color:#16a34a; }
    .text-red { color:#dc2626; }
    .badge { padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; }
    .badge-green { background:#dcfce7; color:#16a34a; }
    .badge-red { background:#fee2e2; color:#dc2626; }
    .empty-state { text-align:center; padding:60px 20px; color:#94a3b8; }
    .empty-state p { margin:12px 0 0; }
    .pagination { display:flex; gap:8px; justify-content:center; align-items:center; margin-top:24px; }
    .page-btn { padding:8px 14px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; cursor:pointer; font-weight:500; color:#334155; }
    .page-btn:hover:not(:disabled) { border-color:#e31b23; color:#e31b23; }
    .page-btn:disabled { opacity:0.5; cursor:not-allowed; }
    .page-info { font-size:14px; color:#64748b; }
  `]
})
export class ClientWalletComponent implements OnInit {
  balance = signal(0);
  transactions = signal<any[]>([]);
  loading = signal(true);
  pagination = signal<any>({ page: 1, totalPages: 0, hasNextPage: false, hasPrevPage: false });

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() {
    this.loadBalance();
    this.loadTransactions();
  }

  loadBalance() {
    this.http.get<any>(`${environment.apiUrl}/wallet`).subscribe({
      next: (res) => this.balance.set(parseFloat(res.data?.available_balance || res.data?.balance || 0)),
      error: () => {}
    });
  }

  loadTransactions(page = 1) {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/wallet/transactions`, { params: { page, limit: 15 } as any }).subscribe({
      next: (res) => {
        this.transactions.set(res.data || []);
        this.pagination.set(res.pagination || {});
      },
      error: () => this.toast.error('Failed to load transactions'),
      complete: () => this.loading.set(false)
    });
  }
}
