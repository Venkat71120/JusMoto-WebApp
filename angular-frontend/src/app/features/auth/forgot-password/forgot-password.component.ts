import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="auth-container">
      <mat-card class="auth-card">
        <mat-card-header>
          <mat-card-title>Forgot Password</mat-card-title>
          <mat-card-subtitle>Enter your email to reset your password</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="forgotForm" (ngSubmit)="onSubmit()" *ngIf="!emailSent">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Email</mat-label>
              <input matInput type="email" formControlName="email">
              <mat-icon matSuffix>email</mat-icon>
              <mat-error *ngIf="forgotForm.get('email')?.hasError('required')">
                Email is required
              </mat-error>
              <mat-error *ngIf="forgotForm.get('email')?.hasError('email')">
                Please enter a valid email
              </mat-error>
            </mat-form-field>

            <div *ngIf="error" class="error-message">
              {{ error }}
            </div>

            <button mat-raised-button color="primary" type="submit" class="full-width mt-2" [disabled]="loading">
              <mat-spinner *ngIf="loading" diameter="20"></mat-spinner>
              <span *ngIf="!loading">Send Reset Link</span>
            </button>
          </form>

          <div *ngIf="emailSent" class="success-message">
            <mat-icon class="success-icon">check_circle</mat-icon>
            <h3>Check your email</h3>
            <p>We've sent a password reset link to your email address. Please check your inbox and follow the instructions.</p>
            <button mat-raised-button color="primary" routerLink="/auth/login" class="full-width mt-2">
              Back to Login
            </button>
          </div>
        </mat-card-content>

        <mat-card-actions *ngIf="!emailSent">
          <p class="text-center">
            Remember your password? <a routerLink="/auth/login">Login</a>
          </p>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 24px;
    }

    .auth-card {
      max-width: 400px;
      width: 100%;
      padding: 24px;
    }

    mat-card-header {
      margin-bottom: 24px;
    }

    .full-width {
      width: 100%;
    }

    .error-message {
      color: #f44336;
      margin: 16px 0;
      padding: 8px;
      background: #ffebee;
      border-radius: 4px;
    }

    .success-message {
      text-align: center;
      padding: 24px 0;
    }

    .success-icon {
      font-size: 64px;
      width: 64px;
      height: 64px;
      color: #4caf50;
    }

    .success-message h3 {
      margin: 16px 0 8px;
    }

    .success-message p {
      color: #666;
    }

    mat-card-actions {
      padding: 16px 0 0;
    }

    mat-card-actions p {
      margin: 0;
    }

    mat-card-actions a {
      color: #667eea;
      text-decoration: none;
      font-weight: 500;
    }

    .mt-2 {
      margin-top: 16px;
    }
  `]
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup;
  loading = false;
  error = '';
  emailSent = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = '';

    this.authService.forgotPassword(this.forgotForm.value.email).subscribe({
      next: (response) => {
        if (response.success) {
          this.emailSent = true;
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error || 'Failed to send reset link. Please try again.';
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
