import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-service-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-header">
      <a [routerLink]="isProduct ? '/admin/products/all' : '/admin/services/all'" class="back-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to {{ isProduct ? 'Products' : 'Services' }}
      </a>
    </div>

    <div class="loading-center" *ngIf="loading()"><div class="spinner"></div></div>

    <div *ngIf="service() && !loading()">
      <!-- Header -->
      <div class="view-header">
        <div class="header-left">
          <h1 class="view-title">{{ service().title }}</h1>
          <div class="meta-row">
            <span class="type-badge" [class.type-service]="!isProduct" [class.type-product]="isProduct">
              {{ isProduct ? 'Product' : 'Service' }}
            </span>
            <span class="badge" [class.badge-active]="service().status" [class.badge-inactive]="!service().status">
              {{ service().status ? 'Active' : 'Inactive' }}
            </span>
            <span class="badge badge-featured" *ngIf="service().is_featured">Featured</span>
            <span class="slug-text" *ngIf="service().slug">/ {{ service().slug }}</span>
          </div>
        </div>
        <a [routerLink]="isProduct ? ['/admin/products/edit', service().id] : ['/admin/services/edit-service', service().id]" class="btn-edit-main">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          Edit
        </a>
      </div>

      <!-- Image & Basic Info Grid -->
      <div class="detail-grid">
        <!-- Image Card -->
        <div class="detail-card image-card">
          <img *ngIf="service().image" [src]="service().image" class="main-image" alt="">
          <div class="no-image" *ngIf="!service().image">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
            <span>No image</span>
          </div>
          <!-- Gallery -->
          <div class="gallery-row" *ngIf="gallery().length">
            <img *ngFor="let img of gallery()" [src]="img" class="gallery-thumb" alt="">
          </div>
        </div>

        <!-- Info Card -->
        <div class="detail-card">
          <h3>{{ isProduct ? 'Product' : 'Service' }} Information</h3>
          <div class="detail-row"><span class="label">ID</span><span>#{{ service().id }}</span></div>
          <div class="detail-row"><span class="label">Category</span><span>{{ service().category?.name || '-' }}</span></div>
          <div class="detail-row"><span class="label">Price</span><span class="price-value">&#8377;{{ service().price | number:'1.0-0' }}</span></div>
          <div class="detail-row" *ngIf="service().discount_price">
            <span class="label">Discount Price</span>
            <span class="text-green">&#8377;{{ service().discount_price | number:'1.0-0' }}</span>
          </div>
          <div class="detail-row" *ngIf="service().duration"><span class="label">Duration</span><span>{{ service().duration }}</span></div>
          <div class="detail-row" *ngIf="service().max_qty"><span class="label">Max Quantity</span><span>{{ service().max_qty }}</span></div>
          <div class="detail-row" *ngIf="service().sold_count"><span class="label">Sold Count</span><span>{{ service().sold_count }}</span></div>
          <div class="detail-row"><span class="label">Created</span><span>{{ service().created_at | date:'medium' }}</span></div>
          <div class="detail-row" *ngIf="service().updated_at"><span class="label">Updated</span><span>{{ service().updated_at | date:'medium' }}</span></div>
        </div>
      </div>

      <!-- Description -->
      <div class="detail-card" *ngIf="service().description">
        <h3>Description</h3>
        <p class="description-text">{{ service().description }}</p>
      </div>

      <!-- Video URL -->
      <div class="detail-card" *ngIf="service().video_url">
        <h3>Video</h3>
        <a [href]="service().video_url" target="_blank" class="video-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          {{ service().video_url }}
        </a>
      </div>

      <!-- Includes -->
      <div class="detail-card" *ngIf="service().includes?.length">
        <h3>Includes</h3>
        <div class="attr-list">
          <div class="attr-item" *ngFor="let item of service().includes">
            <svg class="attr-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>

      <!-- Specifications -->
      <div class="detail-card" *ngIf="service().specifications?.length">
        <h3>Specifications</h3>
        <div class="spec-table">
          <div class="spec-row" *ngFor="let spec of service().specifications">
            <span class="spec-title">{{ spec.title }}</span>
            <span class="spec-value">{{ spec.value }}</span>
          </div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="detail-card" *ngIf="service().additional_info?.length">
        <h3>Additional Information</h3>
        <div class="info-list">
          <div class="info-item" *ngFor="let info of service().additional_info">
            <strong>{{ info.title }}</strong>
            <p>{{ info.description }}</p>
          </div>
        </div>
      </div>

      <!-- FAQs -->
      <div class="detail-card" *ngIf="service().faqs?.length">
        <h3>FAQs</h3>
        <div class="faq-list">
          <div class="faq-item" *ngFor="let faq of service().faqs; let i = index">
            <div class="faq-q">
              <span class="faq-num">Q{{ i + 1 }}.</span>
              {{ faq.question }}
            </div>
            <div class="faq-a">{{ faq.answer }}</div>
          </div>
        </div>
      </div>

      <!-- Service Cars -->
      <div class="detail-card" *ngIf="service().serviceCars?.length">
        <h3>Car-Specific Pricing</h3>
        <table class="data-table">
          <thead>
            <tr><th>Car</th><th>Variant</th><th>Price</th><th>Discount</th></tr>
          </thead>
          <tbody>
            <tr *ngFor="let sc of service().serviceCars">
              <td>{{ sc.car?.name || sc.car?.title || '-' }}</td>
              <td>{{ sc.variant?.name || sc.variant?.title || '-' }}</td>
              <td>&#8377;{{ sc.price | number:'1.0-0' }}</td>
              <td>
                <span *ngIf="sc.discount_price" class="text-green">&#8377;{{ sc.discount_price | number:'1.0-0' }}</span>
                <span *ngIf="!sc.discount_price" class="text-muted">-</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Reviews -->
      <div class="detail-card" *ngIf="service().reviews?.length">
        <h3>Reviews ({{ service().review_count || service().reviews.length }})</h3>
        <div class="avg-rating" *ngIf="service().average_rating">
          <span class="rating-num">{{ service().average_rating | number:'1.1-1' }}</span>
          <span class="rating-stars">
            <svg *ngFor="let s of [1,2,3,4,5]" width="16" height="16" viewBox="0 0 24 24"
              [attr.fill]="s <= service().average_rating ? '#f59e0b' : 'none'"
              [attr.stroke]="'#f59e0b'" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </span>
          <span class="rating-count">({{ service().review_count || service().reviews.length }} reviews)</span>
        </div>
        <div class="review-list">
          <div class="review-item" *ngFor="let review of service().reviews">
            <div class="review-header">
              <strong>{{ review.reviewer?.first_name || review.reviewer?.name || 'User' }}</strong>
              <span class="review-date">{{ review.created_at | date:'mediumDate' }}</span>
            </div>
            <div class="review-stars">
              <svg *ngFor="let s of [1,2,3,4,5]" width="14" height="14" viewBox="0 0 24 24"
                [attr.fill]="s <= review.rating ? '#f59e0b' : 'none'"
                [attr.stroke]="'#f59e0b'" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <p class="review-text" *ngIf="review.comment">{{ review.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-header { margin-bottom: 24px; }
    .back-btn { display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: #64748b; font-weight: 500; transition: color 0.2s; }
    .back-btn:hover { color: #e31b23; }
    .loading-center { display: flex; justify-content: center; padding: 60px; }
    .spinner { width: 36px; height: 36px; border: 3px solid #f3f4f6; border-top-color: #e31b23; border-radius: 50%; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }

    .view-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; flex-wrap: wrap; gap: 16px; }
    .header-left { flex: 1; }
    .view-title { font-size: 24px; font-weight: 700; color: #1a1a2e; margin: 0 0 8px; }
    .meta-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .type-badge { display: inline-flex; padding: 3px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
    .type-service { background: #dbeafe; color: #2563eb; }
    .type-product { background: #f3e8ff; color: #7c3aed; }
    .badge { display: inline-flex; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; }
    .badge-active { background: #dcfce7; color: #16a34a; }
    .badge-inactive { background: #fee2e2; color: #dc2626; }
    .badge-featured { background: #fef3c7; color: #d97706; }
    .slug-text { color: #94a3b8; font-size: 13px; }
    .btn-edit-main { display: inline-flex; align-items: center; gap: 6px; padding: 10px 20px; border: 1px solid #e31b23; border-radius: 8px; background: #fff; color: #e31b23; font-weight: 600; font-size: 14px; text-decoration: none; transition: all 0.2s; }
    .btn-edit-main:hover { background: #e31b23; color: #fff; }

    .detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
    .detail-card { background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); margin-bottom: 20px; }
    .detail-card h3 { font-size: 16px; font-weight: 700; color: #1a1a2e; margin: 0 0 16px; padding-bottom: 12px; border-bottom: 1px solid #f1f5f9; }
    .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f8f9fa; font-size: 14px; }
    .detail-row .label { color: #64748b; font-weight: 500; }
    .price-value { font-weight: 700; color: #1a1a2e; font-size: 16px; }
    .text-green { color: #16a34a; font-weight: 600; }
    .text-muted { color: #94a3b8; }

    .image-card { display: flex; flex-direction: column; align-items: center; gap: 16px; }
    .main-image { width: 100%; max-height: 320px; object-fit: cover; border-radius: 10px; }
    .no-image { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 40px; color: #cbd5e1; font-size: 14px; }
    .gallery-row { display: flex; gap: 8px; flex-wrap: wrap; width: 100%; }
    .gallery-thumb { width: 72px; height: 72px; object-fit: cover; border-radius: 8px; border: 2px solid #f1f5f9; cursor: pointer; transition: border-color 0.2s; }
    .gallery-thumb:hover { border-color: #e31b23; }

    .description-text { color: #334155; line-height: 1.7; margin: 0; white-space: pre-wrap; font-size: 14px; }
    .video-link { display: inline-flex; align-items: center; gap: 8px; color: #2563eb; text-decoration: none; font-size: 14px; word-break: break-all; }
    .video-link:hover { text-decoration: underline; }

    .attr-list { display: flex; flex-wrap: wrap; gap: 10px; }
    .attr-item { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; font-size: 14px; color: #166534; }
    .attr-icon { font-size: 16px; }
    .attr-check { flex-shrink: 0; }

    .spec-table { border: 1px solid #f1f5f9; border-radius: 8px; overflow: hidden; }
    .spec-row { display: flex; border-bottom: 1px solid #f1f5f9; }
    .spec-row:last-child { border-bottom: none; }
    .spec-title { flex: 1; padding: 10px 14px; background: #f8f9fa; font-weight: 600; color: #374151; font-size: 14px; }
    .spec-value { flex: 1; padding: 10px 14px; color: #334155; font-size: 14px; }

    .info-list { display: flex; flex-direction: column; gap: 12px; }
    .info-item { padding: 14px; background: #f8f9fb; border-radius: 8px; border: 1px solid #f1f5f9; }
    .info-item strong { display: block; color: #1a1a2e; margin-bottom: 4px; font-size: 14px; }
    .info-item p { margin: 0; color: #64748b; font-size: 14px; line-height: 1.5; }

    .faq-list { display: flex; flex-direction: column; gap: 16px; }
    .faq-item { padding: 16px; background: #f8f9fb; border-radius: 10px; border: 1px solid #f1f5f9; }
    .faq-q { font-weight: 600; color: #1a1a2e; font-size: 14px; margin-bottom: 8px; }
    .faq-num { color: #e31b23; margin-right: 4px; }
    .faq-a { color: #64748b; font-size: 14px; line-height: 1.6; }

    .data-table { width: 100%; border-collapse: collapse; }
    .data-table th { padding: 10px 12px; text-align: left; font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; border-bottom: 1px solid #f1f5f9; }
    .data-table td { padding: 10px 12px; font-size: 14px; color: #334155; border-bottom: 1px solid #f8f9fa; }

    .avg-rating { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #f1f5f9; }
    .rating-num { font-size: 24px; font-weight: 700; color: #1a1a2e; }
    .rating-stars { display: inline-flex; gap: 2px; }
    .rating-count { color: #94a3b8; font-size: 13px; }
    .review-list { display: flex; flex-direction: column; gap: 12px; }
    .review-item { padding: 14px; background: #f8f9fb; border-radius: 8px; border: 1px solid #f1f5f9; }
    .review-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
    .review-header strong { color: #1a1a2e; font-size: 14px; }
    .review-date { color: #94a3b8; font-size: 12px; }
    .review-stars { display: flex; gap: 2px; margin-bottom: 6px; }
    .review-text { margin: 0; color: #64748b; font-size: 14px; line-height: 1.5; }

    @media (max-width: 768px) {
      .detail-grid { grid-template-columns: 1fr; }
      .view-header { flex-direction: column; }
    }
  `]
})
export class ServiceViewComponent implements OnInit {
  service = signal<any>(null);
  loading = signal(true);
  gallery = signal<string[]>([]);
  isProduct = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit() {
    const routeType = this.route.snapshot.data['type'] ?? 0;
    this.isProduct = routeType === 1;
    const id = this.route.snapshot.paramMap.get('id');

    this.http.get<any>(`${environment.apiUrl}/admin/services/${id}`).subscribe({
      next: (res) => {
        const s = res.data;
        this.service.set(s);

        // Parse gallery images
        const imgs = s.gallery_images || s.gallery || [];
        if (Array.isArray(imgs)) {
          this.gallery.set(imgs.filter((i: any) => !!i));
        }
      },
      error: () => {
        this.toast.error('Failed to load details');
        this.router.navigate([this.isProduct ? '/admin/products/all' : '/admin/services/all']);
      },
      complete: () => this.loading.set(false)
    });
  }
}
