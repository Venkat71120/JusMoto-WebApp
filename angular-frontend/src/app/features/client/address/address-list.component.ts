import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-address-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="address-container">
      <div class="page-header">
        <div class="header-content">
          <h1>My Addresses</h1>
          <p>Manage your saved addresses for quick checkout</p>
        </div>
        <a routerLink="/client/address/create" class="btn-primary">
          + Add New Address
        </a>
      </div>

      <div *ngIf="loading()" class="loading">
        <div class="spinner"></div>
        <p>Loading addresses...</p>
      </div>

      <div *ngIf="!loading() && addresses().length === 0" class="empty-state">
        <div class="empty-icon">📍</div>
        <h3>No addresses saved</h3>
        <p>Add your first address for a faster checkout experience.</p>
        <a routerLink="/client/address/create" class="btn-primary">Add Address</a>
      </div>

      <div class="address-grid" *ngIf="!loading() && addresses().length > 0">
        <div class="address-card" *ngFor="let address of addresses()" [class.default]="address.is_default">
          <div class="card-header">
            <span class="address-type" [class]="'type-' + address.type">{{ address.type | titlecase }}</span>
            <span *ngIf="address.is_default" class="default-badge">Default</span>
          </div>

          <div class="card-body">
            <h3>{{ address.name }}</h3>
            <p class="address-text">
              {{ address.address_line1 }}<br>
              <span *ngIf="address.address_line2">{{ address.address_line2 }}<br></span>
              {{ address.city }}, {{ address.state }} - {{ address.pincode }}
            </p>
            <p class="phone" *ngIf="address.phone">
              <strong>Phone:</strong> {{ address.phone }}
            </p>
          </div>

          <div class="card-actions">
            <a [routerLink]="['/client/address/edit', address.id]" class="action-btn">Edit</a>
            <button *ngIf="!address.is_default" class="action-btn" (click)="setDefault(address.id)">Set as Default</button>
            <button class="action-btn danger" (click)="deleteAddress(address.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .address-container {
      max-width: 1000px;
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

    .btn-primary {
      padding: 12px 24px;
      background: #0066cc;
      color: #fff;
      border: none;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
    }

    .loading {
      text-align: center;
      padding: 60px 20px;
    }

    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid #e5e7eb;
      border-top-color: #0066cc;
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
      margin: 0 0 24px;
    }

    .address-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 20px;
    }

    .address-card {
      background: #fff;
      border-radius: 12px;
      border: 2px solid #e5e7eb;
      overflow: hidden;
      transition: all 0.2s;
    }

    .address-card:hover {
      border-color: #0066cc;
    }

    .address-card.default {
      border-color: #0066cc;
      box-shadow: 0 4px 12px rgba(0, 102, 204, 0.15);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      background: #f9fafb;
      border-bottom: 1px solid #e5e7eb;
    }

    .address-type {
      font-size: 12px;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 12px;
      text-transform: uppercase;
    }

    .type-home { background: #dbeafe; color: #1e40af; }
    .type-work { background: #fef3c7; color: #92400e; }
    .type-other { background: #e5e7eb; color: #4b5563; }

    .default-badge {
      font-size: 11px;
      background: #0066cc;
      color: #fff;
      padding: 3px 8px;
      border-radius: 10px;
    }

    .card-body {
      padding: 20px;
    }

    .card-body h3 {
      font-size: 18px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 12px;
    }

    .address-text {
      color: #444;
      line-height: 1.6;
      margin: 0 0 12px;
    }

    .phone {
      font-size: 14px;
      color: #666;
      margin: 0;
    }

    .card-actions {
      display: flex;
      gap: 8px;
      padding: 12px 16px;
      border-top: 1px solid #e5e7eb;
      background: #f9fafb;
    }

    .action-btn {
      padding: 6px 14px;
      font-size: 13px;
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      color: #444;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s;
    }

    .action-btn:hover {
      border-color: #0066cc;
      color: #0066cc;
    }

    .action-btn.danger:hover {
      border-color: #dc3545;
      color: #dc3545;
    }
  `]
})
export class AddressListComponent implements OnInit {
  addresses = signal<any[]>([]);
  loading = signal(true);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAddresses();
  }

  loadAddresses(): void {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/addresses`).subscribe({
      next: (response) => {
        this.addresses.set(response.data || response.addresses || []);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  setDefault(id: number): void {
    this.http.put(`${environment.apiUrl}/addresses/${id}/default`, {}).subscribe({
      next: () => {
        this.addresses.update(items =>
          items.map(addr => ({ ...addr, is_default: addr.id === id }))
        );
      }
    });
  }

  deleteAddress(id: number): void {
    if (confirm('Are you sure you want to delete this address?')) {
      this.http.delete(`${environment.apiUrl}/addresses/${id}`).subscribe({
        next: () => {
          this.addresses.update(items => items.filter(addr => addr.id !== id));
        }
      });
    }
  }
}
