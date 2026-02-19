import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceService } from '../../../core/services/service.service';
import { CartService } from '../../../core/services/cart.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="favourites-container">
      <div class="page-header">
        <h1>My Favourites</h1>
        <p>Services you've saved for later</p>
      </div>

      <div *ngIf="loading()" class="loading">
        <div class="spinner"></div>
        <p>Loading favourites...</p>
      </div>

      <div *ngIf="!loading() && favourites().length === 0" class="empty-state">
        <div class="empty-icon">❤️</div>
        <h3>No favourites yet</h3>
        <p>Browse our services and save your favorites for quick access.</p>
        <a routerLink="/services" class="btn-primary">Browse Services</a>
      </div>

      <div class="favourites-grid" *ngIf="!loading() && favourites().length > 0">
        <div class="favourite-card" *ngFor="let item of favourites()">
          <button class="remove-btn" (click)="removeFromFavourites(item.id)" title="Remove from favourites">
            &times;
          </button>
          <div class="card-image">
            <img [src]="item.service?.image || '/assets/images/service-placeholder.png'" [alt]="item.service?.name">
          </div>
          <div class="card-body">
            <h3>{{ item.service?.name }}</h3>
            <p class="description">{{ item.service?.short_description }}</p>
            <div class="card-meta">
              <span class="price">{{ item.service?.price | currency:'INR':'symbol':'1.0-0' }}</span>
              <span class="duration" *ngIf="item.service?.duration">{{ item.service?.duration }} mins</span>
            </div>
          </div>
          <div class="card-footer">
            <a [routerLink]="['/services', item.service?.slug]" class="btn-outline">View Details</a>
            <button class="btn-primary" (click)="addToCart(item.service)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .favourites-container {
      max-width: 1100px;
      margin: 0 auto;
    }

    .page-header {
      margin-bottom: 24px;
    }

    .page-header h1 {
      font-size: 28px;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 8px;
    }

    .page-header p {
      color: #666;
      margin: 0;
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

    .favourites-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 24px;
    }

    .favourite-card {
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      position: relative;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .favourite-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    }

    .remove-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 32px;
      height: 32px;
      background: #fff;
      border: none;
      border-radius: 50%;
      font-size: 20px;
      line-height: 1;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      z-index: 10;
      color: #666;
      transition: all 0.2s;
    }

    .remove-btn:hover {
      background: #dc3545;
      color: #fff;
    }

    .card-image {
      height: 180px;
      overflow: hidden;
    }

    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .card-body {
      padding: 16px;
    }

    .card-body h3 {
      font-size: 18px;
      font-weight: 600;
      margin: 0 0 8px;
      color: #1a1a1a;
    }

    .description {
      font-size: 14px;
      color: #666;
      margin: 0 0 12px;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .card-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .price {
      font-size: 18px;
      font-weight: 700;
      color: #e31b23;
    }

    .duration {
      font-size: 13px;
      color: #888;
      background: #f5f5f5;
      padding: 4px 10px;
      border-radius: 12px;
    }

    .card-footer {
      padding: 16px;
      border-top: 1px solid #e5e7eb;
      display: flex;
      gap: 12px;
    }

    .btn-outline {
      flex: 1;
      padding: 10px 16px;
      border: 1px solid #e5e7eb;
      background: #fff;
      color: #444;
      border-radius: 6px;
      text-decoration: none;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s;
    }

    .btn-outline:hover {
      border-color: #e31b23;
      color: #e31b23;
    }

    .btn-primary {
      flex: 1;
      padding: 10px 16px;
      background: #e31b23;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
    }

    .btn-primary:hover {
      background: #b11218;
    }
  `]
})
export class FavouritesComponent implements OnInit {
  favourites = signal<any[]>([]);
  loading = signal(true);

  constructor(
    private serviceService: ServiceService,
    private cartService: CartService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadFavourites();
  }

  loadFavourites(): void {
    this.loading.set(true);
    this.serviceService.getFavourites().subscribe({
      next: (response) => {
        this.favourites.set(response.data || response.favourites || []);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  removeFromFavourites(id: number): void {
    this.serviceService.removeFromFavourites(id).subscribe({
      next: () => {
        this.favourites.update(items => items.filter(item => item.id !== id));
        this.toast.success('Removed from favourites');
      }
    });
  }

  addToCart(service: any): void {
    if (service) {
      this.cartService.addItem({ service_id: service.id, quantity: 1 }).subscribe({
        next: () => {
          this.toast.success('Added to cart!');
        }
      });
    }
  }
}
