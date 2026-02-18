import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../core/services/service.service';

@Component({
  selector: 'app-category-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">{{ categoryName() }} Services</h1>

      @if (isLoading()) {
        <div class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      } @else {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (service of services(); track service.id) {
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img [src]="service.image || '/assets/placeholder-service.jpg'" [alt]="service.name" class="w-full h-48 object-cover">
              <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">{{ service.name }}</h3>
                <p class="text-gray-600 mb-4 line-clamp-2">{{ service.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-2xl font-bold text-blue-600">₹{{ service.price }}</span>
                  <a [routerLink]="['/services', service.id]" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          } @empty {
            <div class="col-span-full text-center py-12 text-gray-500">
              No services found in this category.
            </div>
          }
        </div>
      }
    </div>
  `
})
export class CategoryServicesComponent implements OnInit {
  services = signal<any[]>([]);
  categoryName = signal('');
  isLoading = signal(true);

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.loadCategoryServices(slug);
    }
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
}
