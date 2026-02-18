import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-franchise-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Franchise Dashboard</h1>
      <div class="bg-white rounded-lg shadow p-6">
        <p class="text-gray-600">Welcome to the franchise management dashboard.</p>
      </div>
    </div>
  `
})
export class FranchiseDashboardComponent {}
