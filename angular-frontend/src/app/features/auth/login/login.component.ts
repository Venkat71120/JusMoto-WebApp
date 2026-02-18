import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
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
          <mat-card-title>Welcome Back</mat-card-title>
          <mat-card-subtitle>Login to your account</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Email or Username</mat-label>
              <input matInput formControlName="email" placeholder="Enter email or username">
              <mat-icon matSuffix>email</mat-icon>
              <mat-error *ngIf="loginForm.get('email')?.hasError('required')">
                Email is required
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Password</mat-label>
              <input matInput [type]="hidePassword ? 'password' : 'text'" formControlName="password">
              <button mat-icon-button matSuffix type="button" (click)="hidePassword = !hidePassword">
                <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>
              </button>
              <mat-error *ngIf="loginForm.get('password')?.hasError('required')">
                Password is required
              </mat-error>
            </mat-form-field>

            <div class="forgot-password">
              <a routerLink="/auth/forgot-password">Forgot Password?</a>
            </div>

            <div *ngIf="error" class="error-message">
              {{ error }}
            </div>

            <button mat-raised-button color="primary" type="submit" class="full-width" [disabled]="loading">
              <mat-spinner *ngIf="loading" diameter="20"></mat-spinner>
              <span *ngIf="!loading">Login</span>
            </button>
          </form>
        </mat-card-content>

        <mat-card-actions>
          <p class="text-center">
            Don't have an account? <a routerLink="/auth/register">Register</a>
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

    .forgot-password {
      text-align: right;
      margin-bottom: 16px;
    }

    .forgot-password a {
      color: #667eea;
      text-decoration: none;
    }

    .error-message {
      color: #f44336;
      margin-bottom: 16px;
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

    button mat-spinner {
      display: inline-block;
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  loading = false;
  error = '';
  returnUrl = '/dashboard';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/client/dashboard';
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.loading = true;
    this.error = '';

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (response) => {
        if (response.success) {
          this.router.navigateByUrl(this.returnUrl);
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error || 'Login failed. Please try again.';
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
