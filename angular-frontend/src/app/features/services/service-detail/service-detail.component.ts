import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../core/services/service.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="detail-container">
      @if (isLoading()) {
        <div class="loading">
          <div class="spinner"></div>
          <p>Loading service...</p>
        </div>
      } @else if (service()) {
        <div class="service-card">
          <div class="card-image">
            <img [src]="service().image || '/assets/images/service-placeholder.png'" [alt]="service().name || service().title">
            <button class="heart-btn" [class.active]="isFavourited()" (click)="toggleFavourite()" title="Add to favourites">
              <svg width="22" height="22" viewBox="0 0 24 24" [attr.fill]="isFavourited() ? '#e31b23' : 'none'" stroke="#e31b23" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
            </button>
          </div>
          <div class="card-body">
            <h1>{{ service().name || service().title }}</h1>
            <p class="description">{{ service().description }}</p>
            <div class="price-row">
              @if (service().discount_price && service().discount_price < service().price) {
                <span class="price-original">{{ service().price | currency:'INR':'symbol':'1.0-0' }}</span>
                <span class="price">{{ service().discount_price | currency:'INR':'symbol':'1.0-0' }}</span>
              } @else {
                <span class="price">{{ service().price | currency:'INR':'symbol':'1.0-0' }}</span>
              }
              <button class="btn-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      } @else {
        <div class="empty-state">
          <p>Service not found.</p>
          <a routerLink="/services" class="btn-back">Browse Services</a>
        </div>
      }
    </div>
  `,
  styles: [`
    .detail-container { max-width:800px; margin:0 auto; padding:32px 16px; }
    .loading { text-align:center; padding:60px 20px; }
    .spinner { width:40px; height:40px; border:3px solid #e5e7eb; border-top-color:#e31b23; border-radius:50%; margin:0 auto 16px; animation:spin 1s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }

    .service-card { background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,0.1); }
    .card-image { position:relative; height:320px; overflow:hidden; }
    .card-image img { width:100%; height:100%; object-fit:cover; }

    .heart-btn { position:absolute; top:16px; right:16px; width:44px; height:44px; background:#fff; border:none; border-radius:50%; cursor:pointer; box-shadow:0 2px 10px rgba(0,0,0,0.15); display:flex; align-items:center; justify-content:center; transition:all 0.2s; z-index:10; }
    .heart-btn:hover { transform:scale(1.15); }
    .heart-btn.active { background:#fff5f5; }

    .card-body { padding:24px; }
    .card-body h1 { font-size:28px; font-weight:700; color:#1a1a1a; margin:0 0 16px; }
    .description { font-size:15px; color:#555; line-height:1.7; margin:0 0 24px; }

    .price-row { display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
    .price { font-size:28px; font-weight:700; color:#e31b23; }
    .price-original { font-size:20px; color:#999; text-decoration:line-through; }
    .btn-cart { margin-left:auto; padding:12px 32px; background:#e31b23; color:#fff; border:none; border-radius:8px; font-size:16px; font-weight:600; cursor:pointer; transition:background 0.2s; }
    .btn-cart:hover { background:#b11218; }

    .empty-state { text-align:center; padding:60px 20px; color:#666; }
    .btn-back { display:inline-block; margin-top:16px; padding:10px 24px; background:#e31b23; color:#fff; border-radius:6px; text-decoration:none; font-weight:500; }
  `]
})
export class ServiceDetailComponent implements OnInit {
  service = signal<any>(null);
  isLoading = signal(true);
  isFavourited = signal(false);
  favouriteId = signal<number | null>(null);

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadService(id);
    }
  }

  loadService(id: string): void {
    this.serviceService.getService(id).subscribe({
      next: (response) => {
        this.service.set(response.data);
        this.isLoading.set(false);
        if (response.data?.id) {
          this.checkFavourite(response.data.id);
        }
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  checkFavourite(serviceId: number): void {
    this.serviceService.isFavourite(serviceId).subscribe({
      next: (res) => {
        this.isFavourited.set(res.is_favourite || false);
        this.favouriteId.set(res.favourite_id || null);
      },
      error: () => {}
    });
  }

  toggleFavourite(): void {
    const s = this.service();
    if (!s) return;

    if (this.isFavourited()) {
      const fId = this.favouriteId();
      if (fId) {
        this.serviceService.removeFromFavourites(fId).subscribe({
          next: () => {
            this.isFavourited.set(false);
            this.favouriteId.set(null);
            this.toast.success('Removed from favourites');
          },
          error: () => this.toast.error('Failed to remove from favourites')
        });
      }
    } else {
      this.serviceService.addToFavourites(s.id).subscribe({
        next: (res) => {
          this.isFavourited.set(true);
          this.favouriteId.set(res.data?.id || null);
          this.toast.success('Added to favourites');
        },
        error: (err) => this.toast.error(err.error?.error || 'Failed to add to favourites')
      });
    }
  }
}
