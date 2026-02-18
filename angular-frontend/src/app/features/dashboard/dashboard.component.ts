import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Dashboard</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-gray-500 text-sm font-medium">Total Orders</h3>
          <p class="text-3xl font-bold text-blue-600">{{ stats().totalOrders }}</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-gray-500 text-sm font-medium">Pending Orders</h3>
          <p class="text-3xl font-bold text-yellow-600">{{ stats().pendingOrders }}</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-gray-500 text-sm font-medium">Completed</h3>
          <p class="text-3xl font-bold text-green-600">{{ stats().completedOrders }}</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-gray-500 text-sm font-medium">Wallet Balance</h3>
          <p class="text-3xl font-bold text-purple-600">₹{{ stats().walletBalance }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-bold mb-4">Recent Orders</h2>
          <div class="space-y-4">
            @for (order of recentOrders(); track order.id) {
              <div class="flex justify-between items-center border-b pb-4">
                <div>
                  <p class="font-semibold">#{{ order.id }}</p>
                  <p class="text-sm text-gray-500">{{ order.date }}</p>
                </div>
                <span class="px-3 py-1 rounded-full text-sm" [class]="getStatusClass(order.status)">
                  {{ order.status }}
                </span>
              </div>
            } @empty {
              <p class="text-gray-500">No recent orders</p>
            }
          </div>
          <a routerLink="/orders" class="block text-center text-blue-600 mt-4 hover:underline">
            View All Orders
          </a>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-bold mb-4">Quick Actions</h2>
          <div class="grid grid-cols-2 gap-4">
            <a routerLink="/services" class="p-4 border rounded-lg text-center hover:bg-gray-50">
              <span class="text-2xl">🔧</span>
              <p class="mt-2 font-medium">Book Service</p>
            </a>
            <a routerLink="/challans" class="p-4 border rounded-lg text-center hover:bg-gray-50">
              <span class="text-2xl">🚗</span>
              <p class="mt-2 font-medium">Check Challans</p>
            </a>
            <a routerLink="/wallet" class="p-4 border rounded-lg text-center hover:bg-gray-50">
              <span class="text-2xl">💰</span>
              <p class="mt-2 font-medium">Wallet</p>
            </a>
            <a routerLink="/tickets" class="p-4 border rounded-lg text-center hover:bg-gray-50">
              <span class="text-2xl">🎫</span>
              <p class="mt-2 font-medium">Support</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  stats = signal({
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    walletBalance: 0
  });

  recentOrders = signal<any[]>([]);

  ngOnInit(): void {
    // Load dashboard data
    this.stats.set({
      totalOrders: 12,
      pendingOrders: 2,
      completedOrders: 10,
      walletBalance: 500
    });
  }

  getStatusClass(status: string): string {
    const classes: Record<string, string> = {
      'pending': 'bg-yellow-100 text-yellow-800',
      'completed': 'bg-green-100 text-green-800',
      'cancelled': 'bg-red-100 text-red-800'
    };
    return classes[status.toLowerCase()] || 'bg-gray-100 text-gray-800';
  }
}
