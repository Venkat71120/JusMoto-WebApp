import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      @if (isLoading()) {
        <div class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      } @else if (order()) {
        <div class="mb-6">
          <a routerLink="/orders" class="text-blue-600 hover:underline">&larr; Back to Orders</a>
        </div>

        <div class="bg-white rounded-lg shadow p-6 mb-6">
          <div class="flex justify-between items-start mb-6">
            <div>
              <h1 class="text-3xl font-bold">Order #{{ order().id }}</h1>
              <p class="text-gray-500">{{ order().created_at | date:'full' }}</p>
            </div>
            <span class="px-4 py-2 rounded-full text-lg" [class]="getStatusClass(order().status)">
              {{ order().status }}
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 class="font-bold mb-2">Delivery Address</h3>
              <p class="text-gray-600">{{ order().address }}</p>
              <p class="text-gray-600">{{ order().city }} - {{ order().pincode }}</p>
            </div>
            <div>
              <h3 class="font-bold mb-2">Payment Details</h3>
              <p class="text-gray-600">Method: {{ order().payment_method }}</p>
              <p class="text-gray-600">Status: {{ order().payment_status ? 'Paid' : 'Pending' }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6 mb-6">
          <h2 class="text-xl font-bold mb-4">Order Items</h2>
          <div class="space-y-4">
            @for (item of order().items; track item.id) {
              <div class="flex items-center gap-4 border-b pb-4">
                <img [src]="item.image || '/assets/placeholder.jpg'" [alt]="item.name" class="w-20 h-20 object-cover rounded">
                <div class="flex-1">
                  <h3 class="font-semibold">{{ item.name }}</h3>
                  <p class="text-gray-500">Qty: {{ item.quantity }}</p>
                </div>
                <p class="font-bold">₹{{ item.price * item.quantity }}</p>
              </div>
            }
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-bold mb-4">Order Summary</h2>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>₹{{ order().subtotal }}</span>
            </div>
            <div class="flex justify-between">
              <span>Tax</span>
              <span>₹{{ order().tax }}</span>
            </div>
            <div class="flex justify-between">
              <span>Discount</span>
              <span class="text-green-600">-₹{{ order().discount || 0 }}</span>
            </div>
            <hr>
            <div class="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>₹{{ order().total }}</span>
            </div>
          </div>
        </div>
      } @else {
        <div class="text-center py-12">
          <p class="text-xl text-gray-500">Order not found</p>
        </div>
      }
    </div>
  `
})
export class OrderDetailComponent implements OnInit {
  order = signal<any>(null);
  isLoading = signal(true);

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadOrder(id);
    }
  }

  loadOrder(id: string): void {
    this.orderService.getOrder(+id).subscribe({
      next: (response) => {
        this.order.set(response.data);
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
