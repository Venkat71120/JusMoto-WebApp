import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-franchise-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">Franchise Partners</h1>
      <a routerLink="/admin/franchise/add" class="btn-primary">+ Add Franchise</a>
    </div>

    <div class="table-container">
      <div class="loading-overlay" *ngIf="loading()"><div class="spinner"></div></div>
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of items(); let i = index">
            <td>{{ i + 1 }}</td>
            <td class="fw-600">{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td><span class="badge" [class.badge-active]="item.status == 1" [class.badge-inactive]="item.status != 1">{{ item.status == 1 ? 'Active' : 'Inactive' }}</span></td>
            <td class="text-muted">{{ item.created_at | date:'mediumDate' }}</td>
          </tr>
          <tr *ngIf="items().length === 0 && !loading()">
            <td colspan="5" class="empty-state">No franchise partners found</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-weight:600; font-size:14px; text-decoration:none; }
    .btn-primary:hover { background:#b11218; }
    .table-container { position:relative; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .loading-overlay { position:absolute; inset:0; background:rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:center; z-index:10; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .data-table { width:100%; border-collapse:collapse; }
    .data-table th { padding:12px 16px; text-align:left; font-weight:600; color:#64748b; font-size:12px; text-transform:uppercase; background:#f8f9fa; border-bottom:1px solid #e5e7eb; }
    .data-table td { padding:12px 16px; font-size:14px; color:#334155; border-bottom:1px solid #f1f5f9; }
    .data-table tbody tr:hover { background:#fff5f5; }
    .fw-600 { font-weight:600; }
    .text-muted { color:#94a3b8; }
    .badge { padding:4px 10px; border-radius:20px; font-size:12px; font-weight:600; }
    .badge-active { background:#dcfce7; color:#166534; }
    .badge-inactive { background:#fee2e2; color:#991b1b; }
    .empty-state { text-align:center; padding:40px !important; color:#94a3b8; }
  `]
})
export class FranchiseListComponent implements OnInit {
  items = signal<any[]>([]);
  loading = signal(false);

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() { this.loadItems(); }

  loadItems() {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/franchises`).subscribe({
      next: (res) => this.items.set(res.data || []),
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }
}
