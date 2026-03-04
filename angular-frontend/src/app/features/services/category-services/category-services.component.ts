import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../core/services/service.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-category-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="services-container">
      <h1 class="page-title">{{ categoryName() }} Services</h1>

      @if (isLoading()) {
        <div class="loading">
          <div class="spinner"></div>
          <p>Loading services...</p>
        </div>
      } @else {
        <div class="services-grid">
          @for (service of services(); track service.id) {
            <div class="service-card">
              <div class="card-image">
                <img [src]="service.image || '/assets/images/service-placeholder.png'" [alt]="service.name || service.title">
                <button class="heart-btn" [class.active]="isFav(service.id)" (click)="toggleFavourite(service); $event.stopPropagation()" title="Add to favourites">
                  <svg width="20" height="20" viewBox="0 0 24 24" [attr.fill]="isFav(service.id) ? '#e31b23' : 'none'" stroke="#e31b23" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                </button>
              </div>
              <div class="card-body">
                <h3>{{ service.name || service.title }}</h3>
                <p class="description">{{ service.description }}</p>
                <div class="card-footer">
                  <span class="price">{{ service.price | currency:'INR':'symbol':'1.0-0' }}</span>
                  <a [routerLink]="['/services', service.slug || service.id]" class="btn-view">View Details</a>
                </div>
              </div>
            </div>
          } @empty {
            <div class="empty-state">No services found in this category.</div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .services-container { max-width:1200px; margin:0 auto; padding:32px 16px; }
    .page-title { font-size:28px; font-weight:700; color:#1a1a1a; margin:0 0 24px; }
    .loading { text-align:center; padding:60px 20px; }
    .spinner { width:40px; height:40px; border:3px solid #e5e7eb; border-top-color:#e31b23; border-radius:50%; margin:0 auto 16px; animation:spin 1s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }

    .services-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:24px; }

    .service-card { background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.08); transition:transform 0.2s, box-shadow 0.2s; }
    .service-card:hover { transform:translateY(-4px); box-shadow:0 8px 24px rgba(0,0,0,0.12); }

    .card-image { position:relative; height:200px; overflow:hidden; }
    .card-image img { width:100%; height:100%; object-fit:cover; }

    .heart-btn { position:absolute; top:12px; right:12px; width:36px; height:36px; background:#fff; border:none; border-radius:50%; cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.15); display:flex; align-items:center; justify-content:center; transition:all 0.2s; z-index:10; }
    .heart-btn:hover { transform:scale(1.15); }
    .heart-btn.active { background:#fff5f5; }

    .card-body { padding:16px; }
    .card-body h3 { font-size:18px; font-weight:600; color:#1a1a1a; margin:0 0 8px; }
    .description { font-size:14px; color:#666; margin:0 0 16px; line-height:1.5; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
    .card-footer { display:flex; justify-content:space-between; align-items:center; }
    .price { font-size:20px; font-weight:700; color:#e31b23; }
    .btn-view { padding:8px 20px; background:#e31b23; color:#fff; border-radius:6px; text-decoration:none; font-size:14px; font-weight:500; transition:background 0.2s; }
    .btn-view:hover { background:#b11218; }
    .empty-state { grid-column:1/-1; text-align:center; padding:60px 20px; color:#666; }
  `]
})
export class CategoryServicesComponent implements OnInit {
  services = signal<any[]>([]);
  categoryName = signal('');
  isLoading = signal(true);
  favouriteMap = signal<Map<number, number>>(new Map());

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.loadCategoryServices(slug);
    }
    this.loadFavourites();
  }

  loadCategoryServices(slug: string): void {
    this.serviceService.getCategoryServices(slug).subscribe({
      next: (response) => {
        this.services.set(response.data || []);
        this.categoryName.set(slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  loadFavourites(): void {
    this.serviceService.getFavourites().subscribe({
      next: (response) => {
        const map = new Map<number, number>();
        const items = response.data || response.favourites || [];
        items.forEach((item: any) => {
          map.set(item.service_id || item.service?.id, item.id);
        });
        this.favouriteMap.set(map);
      },
      error: () => {}
    });
  }

  isFav(serviceId: number): boolean {
    return this.favouriteMap().has(serviceId);
  }

  toggleFavourite(service: any): void {
    const favId = this.favouriteMap().get(service.id);
    if (favId) {
      this.serviceService.removeFromFavourites(favId).subscribe({
        next: () => {
          this.favouriteMap.update(map => { const m = new Map(map); m.delete(service.id); return m; });
          this.toast.success('Removed from favourites');
        },
        error: () => this.toast.error('Failed to remove from favourites')
      });
    } else {
      this.serviceService.addToFavourites(service.id).subscribe({
        next: (res) => {
          this.favouriteMap.update(map => { const m = new Map(map); m.set(service.id, res.data?.id || 0); return m; });
          this.toast.success('Added to favourites');
        },
        error: (err) => this.toast.error(err.error?.error || 'Failed to add to favourites')
      });
    }
  }
}
