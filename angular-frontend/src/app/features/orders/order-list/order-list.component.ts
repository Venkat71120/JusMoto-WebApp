import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">My Orders</h1>

      @if (isLoading()) {
        <div class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      } @else if (orders().length > 0) {
        <div class="space-y-4">
          @for (order of orders(); track order.id) {
            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="font-bold text-lg">Order #{{ order.id }}</h3>
                  <p class="text-gray-500">{{ order.created_at | date:'medium' }}</p>
                </div>
                <span class="px-3 py-1 rounded-full text-sm" [class]="getStatusClass(order.status)">
                  {{ order.status }}
                </span>
              </div>

              <div class="border-t pt-4">
                <div class="flex justify-between items-center">
                  <div>
                    <p class="text-gray-600">{{ order.items?.length || 0 }} item(s)</p>
                    <p class="text-xl font-bold">₹{{ order.total }}</p>
                  </div>
                  <a [routerLink]="['/orders', order.id]" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
      } @else {
        <div class="text-center py-12">
          <p class="text-xl text-gray-500 mb-4">No orders found</p>
          <a routerLink="/services" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Browse Services
          </a>
        </div>
      }
    </div>
  `
})
export class OrderListComponent implements OnInit {
  orders = signal<any[]>([]);
  isLoading = signal(true);

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe({
      next: (response) => {
        this.orders.set(response.data || []);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  getStatusClass(status: string): string {
    const classes: Record<string, string> = {
      'pending': 'bg-yellow-100 text-yellow-800',
      'processing': 'bg-blue-100 text-blue-800',
      'completed': 'bg-green-100 text-green-800',
      'cancelled': 'bg-red-100 text-red-800'
    };
    return classes[status?.toLowerCase()] || 'bg-gray-100 text-gray-800';
  }
}
