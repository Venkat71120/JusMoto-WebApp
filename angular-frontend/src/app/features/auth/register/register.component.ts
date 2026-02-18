import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
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
    MatCheckboxModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="auth-container">
      <mat-card class="auth-card">
        <mat-card-header>
          <mat-card-title>Create Account</mat-card-title>
          <mat-card-subtitle>Register to get started</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
            <div class="row">
              <mat-form-field appearance="outline" class="col-6">
                <mat-label>First Name</mat-label>
                <input matInput formControlName="first_name">
              </mat-form-field>

              <mat-form-field appearance="outline" class="col-6">
                <mat-label>Last Name</mat-label>
                <input matInput formControlName="last_name">
              </mat-form-field>
            </div>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Email</mat-label>
              <input matInput type="email" formControlName="email">
              <mat-icon matSuffix>email</mat-icon>
              <mat-error *ngIf="registerForm.get('email')?.hasError('required')">
                Email is required
              </mat-error>
              <mat-error *ngIf="registerForm.get('email')?.hasError('email')">
                Please enter a valid email
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Phone</mat-label>
              <input matInput formControlName="phone">
              <mat-icon matSuffix>phone</mat-icon>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Password</mat-label>
              <input matInput [type]="hidePassword ? 'password' : 'text'" formControlName="password">
              <button mat-icon-button matSuffix type="button" (click)="hidePassword = !hidePassword">
                <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>
              </button>
              <mat-error *ngIf="registerForm.get('password')?.hasError('required')">
                Password is required
              </mat-error>
              <mat-error *ngIf="registerForm.get('password')?.hasError('minlength')">
                Password must be at least 6 characters
              </mat-error>
            </mat-form-field>

            <mat-checkbox formControlName="terms_conditions" class="terms-checkbox">
              I agree to the <a href="/terms" target="_blank">Terms & Conditions</a>
            </mat-checkbox>
            <mat-error *ngIf="registerForm.get('terms_conditions')?.touched && registerForm.get('terms_conditions')?.hasError('requiredTrue')">
              You must accept the terms and conditions
            </mat-error>

            <div *ngIf="error" class="error-message">
              {{ error }}
            </div>

            <button mat-raised-button color="primary" type="submit" class="full-width mt-2" [disabled]="loading">
              <mat-spinner *ngIf="loading" diameter="20"></mat-spinner>
              <span *ngIf="!loading">Register</span>
            </button>
          </form>
        </mat-card-content>

        <mat-card-actions>
          <p class="text-center">
            Already have an account? <a routerLink="/auth/login">Login</a>
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
      max-width: 450px;
      width: 100%;
      padding: 24px;
    }

    mat-card-header {
      margin-bottom: 24px;
    }

    .row {
      display: flex;
      gap: 16px;
    }

    .col-6 {
      flex: 1;
    }

    .full-width {
      width: 100%;
    }

    .terms-checkbox {
      margin-bottom: 8px;
    }

    .terms-checkbox a {
      color: #667eea;
    }

    .error-message {
      color: #f44336;
      margin: 16px 0;
      padding: 8px;
      background: #ffebee;
      border-radius: 4px;
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
export class RegisterComponent {
  registerForm: FormGroup;
  hidePassword = true;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms_conditions: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = '';

    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
        if (response.success) {
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error || 'Registration failed. Please try again.';
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
