import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gray-100">
      <div class="flex">
        <!-- Sidebar -->
        <div class="w-64 bg-gray-800 min-h-screen p-4">
          <h2 class="text-white text-xl font-bold mb-6">Admin Panel</h2>
          <nav class="space-y-2">
            <a routerLink="/admin" class="block text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded">
              Dashboard
            </a>
            <a routerLink="/admin/users" class="block text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded">
              Users
            </a>
            <a routerLink="/admin/orders" class="block text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded">
              Orders
            </a>
            <a routerLink="/admin/services" class="block text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded">
              Services
            </a>
          </nav>
        </div>

        <!-- Main Content -->
        <div class="flex-1 p-8">
          <h1 class="text-3xl font-bold mb-6">Admin Dashboard</h1>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-lg shadow p-6">
              <h3 class="text-gray-500 text-sm">Total Users</h3>
              <p class="text-3xl font-bold text-blue-600">1,234</p>
            </div>
            <div class="bg-white rounded-lg shadow p-6">
              <h3 class="text-gray-500 text-sm">Total Orders</h3>
              <p class="text-3xl font-bold text-green-600">567</p>
            </div>
            <div class="bg-white rounded-lg shadow p-6">
              <h3 class="text-gray-500 text-sm">Revenue</h3>
              <p class="text-3xl font-bold text-purple-600">₹89,456</p>
            </div>
            <div class="bg-white rounded-lg shadow p-6">
              <h3 class="text-gray-500 text-sm">Pending Orders</h3>
              <p class="text-3xl font-bold text-yellow-600">23</p>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h2 class="text-xl font-bold mb-4">Recent Activity</h2>
            <p class="text-gray-500">Admin panel is under development...</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AdminDashboardComponent {}
