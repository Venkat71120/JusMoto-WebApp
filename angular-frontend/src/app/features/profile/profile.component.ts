import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">My Profile</h1>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow p-6">
            <h2 class="text-xl font-bold mb-4">Personal Information</h2>
            <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" formControlName="name" class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" formControlName="email" class="w-full p-2 border rounded bg-gray-100" readonly>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" formControlName="phone" class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500">
                </div>
              </div>
              <button type="submit" class="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700" [disabled]="isSaving()">
                {{ isSaving() ? 'Saving...' : 'Save Changes' }}
              </button>
            </form>
          </div>
        </div>

        <div class="space-y-6">
          <div class="bg-white rounded-lg shadow p-6">
            <h2 class="text-xl font-bold mb-4">Quick Links</h2>
            <div class="space-y-2">
              <a routerLink="/profile/my-cars" class="flex items-center p-3 hover:bg-gray-50 rounded">
                <span class="mr-3">🚗</span> My Cars
              </a>
              <a routerLink="/profile/addresses" class="flex items-center p-3 hover:bg-gray-50 rounded">
                <span class="mr-3">📍</span> Addresses
              </a>
              <a routerLink="/orders" class="flex items-center p-3 hover:bg-gray-50 rounded">
                <span class="mr-3">📦</span> My Orders
              </a>
              <a routerLink="/wallet" class="flex items-center p-3 hover:bg-gray-50 rounded">
                <span class="mr-3">💰</span> Wallet
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  isSaving = signal(false);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['']
    });
  }

  ngOnInit(): void {
    const user = this.authService.currentUser;
    if (user) {
      this.profileForm.patchValue({
        name: `${user.first_name || ''} ${user.last_name || ''}`.trim(),
        email: user.email || '',
        phone: user.phone || ''
      });
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.isSaving.set(true);
      setTimeout(() => {
        this.isSaving.set(false);
        alert('Profile updated successfully!');
      }, 1000);
    }
  }
}
