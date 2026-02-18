import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        @if (isVerifying()) {
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 class="text-xl font-semibold">Verifying your email...</h2>
        } @else if (isVerified()) {
          <div class="text-green-500 mb-4">
            <svg class="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h2 class="text-2xl font-bold mb-2">Email Verified!</h2>
          <p class="text-gray-600 mb-6">Your email has been successfully verified.</p>
          <a routerLink="/login" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Go to Login
          </a>
        } @else {
          <div class="text-red-500 mb-4">
            <svg class="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h2 class="text-2xl font-bold mb-2">Verification Failed</h2>
          <p class="text-gray-600 mb-6">{{ errorMessage() }}</p>
          <a routerLink="/login" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Go to Login
          </a>
        }
      </div>
    </div>
  `
})
export class VerifyEmailComponent implements OnInit {
  isVerifying = signal(true);
  isVerified = signal(false);
  errorMessage = signal('The verification link is invalid or has expired.');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (token) {
      this.verifyEmail(token);
    } else {
      this.isVerifying.set(false);
    }
  }

  verifyEmail(token: string): void {
    // Simulated verification - implement actual API call
    setTimeout(() => {
      this.isVerifying.set(false);
      this.isVerified.set(true);
    }, 1500);
  }
}
