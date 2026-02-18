import { Component, OnInit } from '@angular/core';
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
  selector: 'app-reset-password',
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
          <mat-card-title>Reset Password</mat-card-title>
          <mat-card-subtitle>Enter your new password</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="resetForm" (ngSubmit)="onSubmit()" *ngIf="!resetSuccess">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>New Password</mat-label>
              <input matInput [type]="hidePassword ? 'password' : 'text'" formControlName="password">
              <button mat-icon-button matSuffix type="button" (click)="hidePassword = !hidePassword">
                <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>
              </button>
              <mat-error *ngIf="resetForm.get('password')?.hasError('required')">
                Password is required
              </mat-error>
              <mat-error *ngIf="resetForm.get('password')?.hasError('minlength')">
                Password must be at least 6 characters
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Confirm Password</mat-label>
              <input matInput [type]="hideConfirmPassword ? 'password' : 'text'" formControlName="password_confirmation">
              <button mat-icon-button matSuffix type="button" (click)="hideConfirmPassword = !hideConfirmPassword">
                <mat-icon>{{hideConfirmPassword ? 'visibility_off' : 'visibility'}}</mat-icon>
              </button>
              <mat-error *ngIf="resetForm.get('password_confirmation')?.hasError('required')">
                Confirm password is required
              </mat-error>
            </mat-form-field>

            <div *ngIf="resetForm.errors?.['passwordMismatch']" class="error-message">
              Passwords do not match
            </div>

            <div *ngIf="error" class="error-message">
              {{ error }}
            </div>

            <button mat-raised-button color="primary" type="submit" class="full-width mt-2" [disabled]="loading">
              <mat-spinner *ngIf="loading" diameter="20"></mat-spinner>
              <span *ngIf="!loading">Reset Password</span>
            </button>
          </form>

          <div *ngIf="resetSuccess" class="success-message">
            <mat-icon class="success-icon">check_circle</mat-icon>
            <h3>Password Reset Successfully</h3>
            <p>Your password has been reset. You can now login with your new password.</p>
            <button mat-raised-button color="primary" routerLink="/auth/login" class="full-width mt-2">
              Go to Login
            </button>
          </div>
        </mat-card-content>
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

    .mt-2 {
      margin-top: 16px;
    }
  `]
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;
  loading = false;
  error = '';
  resetSuccess = false;
  token = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.resetForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token') || '';
    if (!this.token) {
      this.router.navigate(['/auth/login']);
    }
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('password_confirmation');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = '';

    const data = {
      token: this.token,
      password: this.resetForm.value.password,
      password_confirmation: this.resetForm.value.password_confirmation
    };

    this.authService.resetPassword(data).subscribe({
      next: (response) => {
        if (response.success) {
          this.resetSuccess = true;
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error || 'Failed to reset password. Please try again.';
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
