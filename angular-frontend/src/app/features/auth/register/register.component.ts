import { Component, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="login-wrapper">
      <div class="login-left">
        <div class="brand-content">
          <div class="brand-logo">
            <img src="assets/images/logo_redefening.png" alt="JusMoto - Redefining Vehicle Care" class="brand-logo-img">
          </div>
          <div class="brand-features">
            <div class="feature-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
              <span>Book car services online</span>
            </div>
            <div class="feature-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
              <span>Track traffic challans</span>
            </div>
            <div class="feature-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
        <div class="brand-footer">
          <span>&copy; 2026 JusMoto. All rights reserved.</span>
        </div>
      </div>

      <div class="login-right">
        <div class="login-card">
          <div class="login-header">
            <h2>Create Account</h2>
            <p>Register to get started with JusMoto</p>
          </div>

          <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
            <div class="name-row">
              <div class="input-group">
                <label for="first_name">First Name</label>
                <div class="input-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <input id="first_name" type="text" formControlName="first_name" placeholder="First name">
                </div>
              </div>
              <div class="input-group">
                <label for="last_name">Last Name</label>
                <div class="input-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <input id="last_name" type="text" formControlName="last_name" placeholder="Last name">
                </div>
              </div>
            </div>

            <div class="input-group">
              <label for="email">Email</label>
              <div class="input-wrap" [class.input-error]="registerForm.get('email')?.touched && registerForm.get('email')?.invalid">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>
                <input id="email" type="email" formControlName="email" placeholder="Enter your email" autocomplete="email">
              </div>
              <span class="field-error" *ngIf="registerForm.get('email')?.touched && registerForm.get('email')?.hasError('required')">Email is required</span>
              <span class="field-error" *ngIf="registerForm.get('email')?.touched && registerForm.get('email')?.hasError('email')">Please enter a valid email</span>
            </div>

            <div class="input-group">
              <label for="phone">Phone</label>
              <div class="input-wrap" [class.input-error]="registerForm.get('phone')?.touched && registerForm.get('phone')?.invalid">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                <input id="phone" type="tel" formControlName="phone" placeholder="Enter 10-digit phone number" maxlength="10">
              </div>
              <span class="field-error" *ngIf="registerForm.get('phone')?.touched && registerForm.get('phone')?.hasError('pattern')">Phone number must be exactly 10 digits</span>
            </div>

            <div class="input-group">
              <label for="password">Password</label>
              <div class="input-wrap" [class.input-error]="registerForm.get('password')?.touched && registerForm.get('password')?.invalid">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                <input id="password" [type]="hidePassword ? 'password' : 'text'" formControlName="password" placeholder="Create a password" autocomplete="new-password">
                <button type="button" class="toggle-pw" (click)="hidePassword = !hidePassword" tabindex="-1">
                  <svg *ngIf="hidePassword" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  <svg *ngIf="!hidePassword" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                </button>
              </div>
              <span class="field-error" *ngIf="registerForm.get('password')?.touched && registerForm.get('password')?.hasError('required')">Password is required</span>
              <span class="field-error" *ngIf="registerForm.get('password')?.touched && registerForm.get('password')?.hasError('minlength')">Password must be at least 6 characters</span>
            </div>

            <label class="terms-check">
              <input type="checkbox" formControlName="terms_conditions">
              <span>I agree to the <a href="/terms" target="_blank">Terms & Conditions</a></span>
            </label>
            <span class="field-error" *ngIf="registerForm.get('terms_conditions')?.touched && registerForm.get('terms_conditions')?.hasError('requiredTrue')">You must accept the terms and conditions</span>

            <div class="error-alert" *ngIf="error">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              {{ error }}
            </div>

            <button type="submit" class="btn-login" [disabled]="loading">
              <span *ngIf="!loading">Create Account</span>
              <span *ngIf="loading" class="btn-loading">
                <span class="spinner-btn"></span>
                Creating account...
              </span>
            </button>
          </form>

          <div class="divider"><span>or</span></div>

          <div class="google-btn-wrap">
            <div #googleBtn></div>
          </div>

          <div class="login-link">
            <p>Already have an account? <a routerLink="/auth/login">Sign In</a></p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-wrapper { display:flex; min-height:100vh; }

    /* Left panel */
    .login-left {
      flex:1; display:flex; flex-direction:column; justify-content:center;
      background: linear-gradient(135deg, #0a0c0d 0%, #1a1a2e 50%, #e31b23 150%);
      padding:60px; position:relative; overflow:hidden;
    }
    .login-left::before {
      content:''; position:absolute; top:-50%; right:-50%; width:100%; height:200%;
      background:radial-gradient(circle, rgba(227,27,35,0.15) 0%, transparent 60%);
    }
    .brand-content { position:relative; z-index:1; }
    .brand-logo { display:flex; align-items:center; margin-bottom:48px; }
    .brand-logo-img { max-width:280px; height:auto; filter:brightness(0) invert(1); }
    .brand-features { display:flex; flex-direction:column; gap:16px; }
    .feature-item { display:flex; align-items:center; gap:12px; color:rgba(255,255,255,0.7); font-size:15px; }
    .brand-footer { position:absolute; bottom:32px; left:60px; color:rgba(255,255,255,0.3); font-size:13px; }

    /* Right panel */
    .login-right {
      flex:1; display:flex; align-items:center; justify-content:center;
      background:#f8f9fa; padding:40px; overflow-y:auto;
    }
    .login-card { width:100%; max-width:440px; }
    .login-header { margin-bottom:28px; }
    .login-header h2 { font-size:28px; font-weight:800; color:#1a1a2e; margin:0 0 8px; }
    .login-header p { color:#64748b; font-size:15px; margin:0; }

    .name-row { display:flex; gap:12px; }
    .name-row .input-group { flex:1; }

    .input-group { margin-bottom:18px; }
    .input-group label { display:block; margin-bottom:6px; font-weight:600; color:#334155; font-size:14px; }
    .input-wrap {
      display:flex; align-items:center; gap:10px;
      padding:11px 14px; border:2px solid #e5e7eb; border-radius:12px;
      background:#fff; transition:all 0.2s;
    }
    .input-wrap:focus-within { border-color:#e31b23; box-shadow:0 0 0 4px rgba(227,27,35,0.08); }
    .input-wrap.input-error { border-color:#fca5a5; }
    .input-wrap input {
      flex:1; border:none; outline:none; font-size:15px; color:#1a1a2e;
      background:transparent; padding:0;
    }
    .input-wrap input::placeholder { color:#cbd5e1; }
    .toggle-pw { background:none; border:none; cursor:pointer; padding:2px; display:flex; }
    .field-error { display:block; margin-top:5px; font-size:12px; color:#dc2626; }

    .terms-check {
      display:flex; align-items:center; gap:10px; cursor:pointer;
      font-size:14px; color:#64748b; margin-bottom:6px;
    }
    .terms-check input[type="checkbox"] {
      width:18px; height:18px; accent-color:#e31b23; cursor:pointer;
    }
    .terms-check a { color:#e31b23; text-decoration:none; font-weight:500; }
    .terms-check a:hover { text-decoration:underline; }

    .error-alert {
      display:flex; align-items:center; gap:8px;
      padding:12px 16px; background:#fef2f2; border:1px solid #fecaca;
      border-radius:10px; color:#dc2626; font-size:14px; font-weight:500;
      margin:16px 0;
    }

    .btn-login {
      width:100%; padding:14px 24px; background:#e31b23; color:#fff;
      border:none; border-radius:12px; font-size:16px; font-weight:700;
      cursor:pointer; transition:all 0.2s; display:flex; align-items:center; justify-content:center;
      margin-top:20px;
    }
    .btn-login:hover:not(:disabled) { background:#c41219; transform:translateY(-1px); box-shadow:0 8px 24px rgba(227,27,35,0.3); }
    .btn-login:active:not(:disabled) { transform:translateY(0); }
    .btn-login:disabled { opacity:0.7; cursor:not-allowed; }
    .btn-loading { display:flex; align-items:center; gap:10px; }
    .spinner-btn {
      width:18px; height:18px; border:2px solid rgba(255,255,255,0.3);
      border-top-color:#fff; border-radius:50%; animation:spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform:rotate(360deg); } }

    .divider {
      display:flex; align-items:center; margin:24px 0;
    }
    .divider::before, .divider::after {
      content:''; flex:1; height:1px; background:#e5e7eb;
    }
    .divider span {
      padding:0 14px; color:#94a3b8; font-size:13px; font-weight:500; text-transform:uppercase;
    }
    .google-btn-wrap { display:flex; justify-content:center; }

    .login-link { text-align:center; margin-top:24px; }
    .login-link p { color:#64748b; font-size:14px; margin:0; }
    .login-link a { color:#e31b23; text-decoration:none; font-weight:600; transition:color 0.2s; }
    .login-link a:hover { color:#c41219; text-decoration:underline; }

    @media (max-width: 900px) {
      .login-wrapper { flex-direction:column; }
      .login-left { padding:40px 32px; min-height:auto; }
      .brand-tagline, .brand-features, .brand-footer { display:none; }
      .brand-logo { justify-content:center; }
      .login-right { padding:32px 24px; }
      .name-row { flex-direction:column; gap:0; }
    }
  `]
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild('googleBtn') googleBtn!: ElementRef;

  registerForm: FormGroup;
  hidePassword = true;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.registerForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms_conditions: [false, Validators.requiredTrue]
    });
  }

  ngAfterViewInit(): void {
    this.renderGoogleButton();
  }

  private renderGoogleButton(): void {
    const clientId = environment.googleClientId;
    if (!clientId) return;

    const google = (window as any).google;
    if (!google?.accounts?.id) {
      setTimeout(() => this.renderGoogleButton(), 300);
      return;
    }

    google.accounts.id.initialize({
      client_id: clientId,
      callback: (response: any) => this.ngZone.run(() => this.handleGoogleCredential(response))
    });

    google.accounts.id.renderButton(this.googleBtn.nativeElement, {
      type: 'standard',
      theme: 'outline',
      size: 'large',
      text: 'continue_with',
      width: 380
    });
  }

  private handleGoogleCredential(response: any): void {
    const token = response.credential;
    const payload = JSON.parse(atob(token.split('.')[1]));
    this.loading = true;
    this.error = '';
    this.authService.socialLogin({
      provider: 'google',
      email: payload.email,
      firstName: payload.given_name,
      lastName: payload.family_name,
      socialId: payload.sub,
      image: payload.picture
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.router.navigate(['/client/dashboard']);
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error || 'Google sign-up failed. Please try again.';
      },
      complete: () => { this.loading = false; }
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
          this.router.navigate(['/client/dashboard']);
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
