import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ServiceService } from '../../core/services/service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Premium Car Services at Your Doorstep</h1>
          <p>Book car maintenance, repairs, and more with India's trusted car service platform</p>
          <div class="hero-actions">
            <button mat-raised-button color="primary" routerLink="/services" class="hero-btn">
              Explore Services
            </button>
            <button mat-stroked-button routerLink="/challan" class="hero-btn-outline">
              Check Traffic Challan
            </button>
          </div>
        </div>
      </section>

      <!-- Categories Section -->
      <section class="section categories-section">
        <div class="container">
          <h2 class="section-title">Our Services</h2>
          <p class="section-subtitle">Choose from a wide range of car services</p>

          <div class="categories-grid" *ngIf="!loading; else loadingTemplate">
            <mat-card *ngFor="let category of categories" class="category-card" [routerLink]="['/services']" [queryParams]="{category: category.id}">
              <img [src]="category.image || 'assets/images/default-category.jpg'" [alt]="category.name" class="category-image">
              <mat-card-content>
                <h3>{{ category.name }}</h3>
                <p>{{ category.description || 'Explore our services' }}</p>
              </mat-card-content>
            </mat-card>
          </div>

          <ng-template #loadingTemplate>
            <div class="loading-container">
              <mat-spinner diameter="40"></mat-spinner>
            </div>
          </ng-template>
        </div>
      </section>

      <!-- Features Section -->
      <section class="section features-section">
        <div class="container">
          <h2 class="section-title">Why Choose Us?</h2>
          <div class="features-grid">
            <div class="feature-card">
              <mat-icon class="feature-icon">verified</mat-icon>
              <h3>Certified Technicians</h3>
              <p>All our technicians are certified and experienced professionals</p>
            </div>
            <div class="feature-card">
              <mat-icon class="feature-icon">location_on</mat-icon>
              <h3>Doorstep Service</h3>
              <p>We come to your location for convenient car servicing</p>
            </div>
            <div class="feature-card">
              <mat-icon class="feature-icon">security</mat-icon>
              <h3>Genuine Parts</h3>
              <p>We use only genuine OEM parts for all repairs</p>
            </div>
            <div class="feature-card">
              <mat-icon class="feature-icon">support_agent</mat-icon>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support for all your queries</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Popular Services Section -->
      <section class="section services-section" *ngIf="popularServices.length > 0">
        <div class="container">
          <h2 class="section-title">Popular Services</h2>
          <div class="services-grid">
            <mat-card *ngFor="let service of popularServices" class="service-card" [routerLink]="['/services', service.slug || service.id]">
              <img mat-card-image [src]="service.image || 'assets/images/default-service.jpg'" [alt]="service.title">
              <mat-card-content>
                <h3>{{ service.title }}</h3>
                <p class="service-description">{{ service.short_description }}</p>
                <div class="service-price">
                  <span class="price">₹{{ service.price }}</span>
                  <span class="original-price" *ngIf="service.original_price && service.original_price > service.price">
                    ₹{{ service.original_price }}
                  </span>
                </div>
              </mat-card-content>
              <mat-card-actions>
                <button mat-button color="primary">View Details</button>
              </mat-card-actions>
            </mat-card>
          </div>
          <div class="view-all-container">
            <button mat-raised-button color="primary" routerLink="/services">View All Services</button>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <h2>Ready to get started?</h2>
          <p>Book your car service today and experience the difference</p>
          <button mat-raised-button color="accent" routerLink="/services" class="cta-btn">
            Book Now
          </button>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 120px 24px 80px;
      text-align: center;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 16px;
    }

    .hero p {
      font-size: 1.25rem;
      opacity: 0.9;
      margin-bottom: 32px;
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .hero-btn {
      padding: 12px 32px;
      font-size: 1rem;
    }

    .hero-btn-outline {
      padding: 12px 32px;
      font-size: 1rem;
      color: white;
      border-color: white;
    }

    .section {
      padding: 64px 24px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 8px;
    }

    .section-subtitle {
      text-align: center;
      color: #666;
      margin-bottom: 40px;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 24px;
    }

    .category-card {
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .category-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .category-image {
      height: 160px;
      object-fit: cover;
    }

    .category-card h3 {
      font-size: 1.25rem;
      margin: 0 0 8px;
    }

    .category-card p {
      color: #666;
      margin: 0;
      font-size: 0.9rem;
    }

    .features-section {
      background: #f8f9fa;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 32px;
    }

    .feature-card {
      text-align: center;
      padding: 32px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .feature-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: #667eea;
      margin-bottom: 16px;
    }

    .feature-card h3 {
      margin: 0 0 8px;
    }

    .feature-card p {
      color: #666;
      margin: 0;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 24px;
    }

    .service-card {
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .service-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .service-card img {
      height: 180px;
      object-fit: cover;
    }

    .service-card h3 {
      font-size: 1.1rem;
      margin: 0 0 8px;
    }

    .service-description {
      color: #666;
      font-size: 0.9rem;
      margin: 0 0 12px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .service-price {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .price {
      font-size: 1.25rem;
      font-weight: 600;
      color: #667eea;
    }

    .original-price {
      text-decoration: line-through;
      color: #999;
      font-size: 0.9rem;
    }

    .view-all-container {
      text-align: center;
      margin-top: 32px;
    }

    .cta-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
      padding: 64px 24px;
    }

    .cta-section h2 {
      font-size: 2rem;
      margin-bottom: 8px;
    }

    .cta-section p {
      font-size: 1.1rem;
      opacity: 0.9;
      margin-bottom: 24px;
    }

    .cta-btn {
      padding: 12px 40px;
      font-size: 1rem;
    }

    .loading-container {
      display: flex;
      justify-content: center;
      padding: 40px;
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2rem;
      }

      .hero p {
        font-size: 1rem;
      }

      .section-title {
        font-size: 1.5rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  categories: any[] = [];
  popularServices: any[] = [];
  loading = true;

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.serviceService.getCategories().subscribe({
      next: (response) => {
        if (response.success) {
          this.categories = response.data.slice(0, 6);
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });

    this.serviceService.getServices({ limit: 8, featured: true }).subscribe({
      next: (response) => {
        if (response.success) {
          this.popularServices = response.data;
        }
      }
    });
  }
}
