import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: `
    <div class="verify-wrapper">
      <div class="verify-card">
        @if (isVerified()) {
          <div class="status-icon success">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2">
              <path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/>
            </svg>
          </div>
          <h2>Email Verified!</h2>
          <p class="subtitle">Your email has been successfully verified.</p>
          <a routerLink="/auth/login" class="btn-primary">Go to Login</a>
        } @else {
          <div class="logo-wrap">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e31b23" stroke-width="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/>
            </svg>
          </div>
          <h2>Verify Your Email</h2>
          <p class="subtitle">We've sent a 6-digit verification code to <strong>{{ email }}</strong></p>

          <form [formGroup]="otpForm" (ngSubmit)="onSubmit()">
            <div class="otp-inputs">
              @for (i of otpIndexes; track i) {
                <input
                  type="text"
                  maxlength="1"
                  [attr.data-index]="i"
                  (input)="onOtpInput($event, i)"
                  (keydown)="onOtpKeydown($event, i)"
                  (paste)="onOtpPaste($event)"
                  class="otp-box"
                  [class.filled]="otpValues[i]"
                  inputmode="numeric"
                  pattern="[0-9]"
                  autocomplete="one-time-code"
                >
              }
            </div>

            <div class="error-alert" *ngIf="errorMessage()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
              {{ errorMessage() }}
            </div>

            <button type="submit" class="btn-primary" [disabled]="loading()">
              <span *ngIf="!loading()">Verify Email</span>
              <span *ngIf="loading()" class="btn-loading">
                <span class="spinner"></span>
                Verifying...
              </span>
            </button>
          </form>

          <div class="resend-section">
            <p>Didn't receive the code?</p>
            <button
              type="button"
              class="btn-link"
              (click)="resendOtp()"
              [disabled]="resendLoading() || resendCooldown() > 0"
            >
              @if (resendLoading()) {
                Sending...
              } @else if (resendCooldown() > 0) {
                Resend in {{ resendCooldown() }}s
              } @else {
                Resend Code
              }
            </button>
          </div>

          <div class="back-link">
            <a routerLink="/auth/login">Back to Login</a>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .verify-wrapper {
      min-height: 100vh; display: flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, #0a0c0d 0%, #1a1a2e 50%, #e31b23 150%);
      padding: 24px;
    }
    .verify-card {
      background: #fff; border-radius: 16px; padding: 48px 40px;
      max-width: 440px; width: 100%; text-align: center;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .logo-wrap { margin-bottom: 20px; }
    .status-icon { margin-bottom: 20px; }
    h2 { font-size: 24px; font-weight: 800; color: #1a1a2e; margin: 0 0 8px; }
    .subtitle { color: #64748b; font-size: 14px; margin: 0 0 28px; line-height: 1.5; }
    .subtitle strong { color: #1a1a2e; }

    .otp-inputs {
      display: flex; gap: 10px; justify-content: center; margin-bottom: 24px;
    }
    .otp-box {
      width: 48px; height: 56px; text-align: center; font-size: 22px; font-weight: 700;
      border: 2px solid #e5e7eb; border-radius: 12px; outline: none;
      color: #1a1a2e; transition: all 0.2s; background: #f8f9fa;
    }
    .otp-box:focus { border-color: #e31b23; box-shadow: 0 0 0 4px rgba(227,27,35,0.1); background: #fff; }
    .otp-box.filled { border-color: #e31b23; background: #fff; }

    .error-alert {
      display: flex; align-items: center; gap: 8px; justify-content: center;
      padding: 10px 16px; background: #fef2f2; border: 1px solid #fecaca;
      border-radius: 10px; color: #dc2626; font-size: 13px; font-weight: 500;
      margin-bottom: 20px;
    }

    .btn-primary {
      width: 100%; padding: 14px 24px; background: #e31b23; color: #fff;
      border: none; border-radius: 12px; font-size: 16px; font-weight: 700;
      cursor: pointer; transition: all 0.2s; display: flex; align-items: center;
      justify-content: center; text-decoration: none;
    }
    .btn-primary:hover:not(:disabled) { background: #c41219; }
    .btn-primary:disabled { opacity: 0.7; cursor: not-allowed; }
    .btn-loading { display: flex; align-items: center; gap: 10px; }
    .spinner {
      width: 18px; height: 18px; border: 2px solid rgba(255,255,255,0.3);
      border-top-color: #fff; border-radius: 50%; animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .resend-section { margin-top: 24px; }
    .resend-section p { color: #94a3b8; font-size: 13px; margin: 0 0 6px; }
    .btn-link {
      background: none; border: none; color: #e31b23; font-weight: 600;
      font-size: 14px; cursor: pointer; padding: 0;
    }
    .btn-link:hover:not(:disabled) { text-decoration: underline; }
    .btn-link:disabled { color: #94a3b8; cursor: not-allowed; }

    .back-link { margin-top: 20px; }
    .back-link a { color: #64748b; font-size: 13px; text-decoration: none; }
    .back-link a:hover { color: #e31b23; }

    @media (max-width: 480px) {
      .verify-card { padding: 32px 24px; }
      .otp-box { width: 42px; height: 50px; font-size: 20px; }
    }
  `]
})
export class VerifyEmailComponent implements OnInit {
  isVerified = signal(false);
  errorMessage = signal('');
  loading = signal(false);
  resendLoading = signal(false);
  resendCooldown = signal(0);

  email = '';
  otpForm: FormGroup;
  otpIndexes = [0, 1, 2, 3, 4, 5];
  otpValues: string[] = ['', '', '', '', '', ''];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.email = this.route.snapshot.queryParamMap.get('email') || '';
    if (!this.email) {
      const user = this.authService.currentUser;
      if (user?.email) {
        this.email = user.email;
      } else {
        this.router.navigate(['/auth/login']);
      }
    }
    // Start resend cooldown on initial load
    this.startCooldown();
  }

  onOtpInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/[^0-9]/g, '');
    input.value = value;
    this.otpValues[index] = value;

    if (value && index < 5) {
      const next = document.querySelector(`input[data-index="${index + 1}"]`) as HTMLInputElement;
      next?.focus();
    }

    this.updateOtpFormValue();
  }

  onOtpKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Backspace' && !this.otpValues[index] && index > 0) {
      const prev = document.querySelector(`input[data-index="${index - 1}"]`) as HTMLInputElement;
      if (prev) {
        prev.focus();
        prev.value = '';
        this.otpValues[index - 1] = '';
        this.updateOtpFormValue();
      }
    }
  }

  onOtpPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const pasted = (event.clipboardData?.getData('text') || '').replace(/[^0-9]/g, '').slice(0, 6);
    for (let i = 0; i < 6; i++) {
      this.otpValues[i] = pasted[i] || '';
      const input = document.querySelector(`input[data-index="${i}"]`) as HTMLInputElement;
      if (input) input.value = this.otpValues[i];
    }
    this.updateOtpFormValue();
    const lastFilled = Math.min(pasted.length, 5);
    const focusInput = document.querySelector(`input[data-index="${lastFilled}"]`) as HTMLInputElement;
    focusInput?.focus();
  }

  private updateOtpFormValue(): void {
    const otp = this.otpValues.join('');
    this.otpForm.patchValue({ otp });
  }

  onSubmit(): void {
    const otp = this.otpValues.join('');
    if (otp.length !== 6) {
      this.errorMessage.set('Please enter the complete 6-digit code');
      return;
    }

    this.loading.set(true);
    this.errorMessage.set('');

    this.authService.verifyEmail(this.email, otp).subscribe({
      next: (response) => {
        if (response.success) {
          this.isVerified.set(true);
          // Update stored user's email_verified status
          this.authService.updateCurrentUser({ email_verified: 1 });
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(err.error?.error || 'Invalid OTP. Please try again.');
      },
      complete: () => {
        this.loading.set(false);
      }
    });
  }

  resendOtp(): void {
    this.resendLoading.set(true);
    this.errorMessage.set('');

    this.authService.resendOtp(this.email).subscribe({
      next: () => {
        this.resendLoading.set(false);
        this.startCooldown();
      },
      error: (err) => {
        this.resendLoading.set(false);
        this.errorMessage.set(err.error?.error || 'Failed to resend OTP.');
      }
    });
  }

  private startCooldown(): void {
    this.resendCooldown.set(60);
    const interval = setInterval(() => {
      const current = this.resendCooldown();
      if (current <= 1) {
        this.resendCooldown.set(0);
        clearInterval(interval);
      } else {
        this.resendCooldown.set(current - 1);
      }
    }, 1000);
  }
}
