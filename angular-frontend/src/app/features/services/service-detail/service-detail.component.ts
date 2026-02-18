import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../core/services/service.service';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      @if (isLoading()) {
        <div class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      } @else if (service()) {
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img [src]="service().image || '/assets/placeholder-service.jpg'" [alt]="service().name" class="w-full h-64 object-cover">
          <div class="p-6">
            <h1 class="text-3xl font-bold mb-4">{{ service().name }}</h1>
            <p class="text-gray-600 mb-6">{{ service().description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-3xl font-bold text-blue-600">₹{{ service().price }}</span>
              <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      } @else {
        <div class="text-center py-12 text-gray-500">
          Service not found.
        </div>
      }
    </div>
  `
})
export class ServiceDetailComponent implements OnInit {
  service = signal<any>(null);
  isLoading = signal(true);

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService
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
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }
}
