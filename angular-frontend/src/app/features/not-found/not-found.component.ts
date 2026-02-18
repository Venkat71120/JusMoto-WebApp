import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="text-center">
        <h1 class="text-9xl font-bold text-gray-300">404</h1>
        <h2 class="text-3xl font-bold text-gray-800 mt-4">Page Not Found</h2>
        <p class="text-gray-600 mt-2">The page you're looking for doesn't exist or has been moved.</p>
        <a routerLink="/" class="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Go to Home
        </a>
      </div>
    </div>
  `
})
export class NotFoundComponent {}
