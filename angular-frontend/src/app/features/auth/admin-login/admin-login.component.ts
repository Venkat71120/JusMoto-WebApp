import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="login-wrapper">
      <div class="login-left">
        <div class="brand-content">
          <div class="brand-logo">
            <div class="logo-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5">
                <path d="M7 17m-2 0a2 2 0 104 0 2 2 0 10-4 0"/><path d="M17 17m-2 0a2 2 0 104 0 2 2 0 10-4 0"/>
                <path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 012 2v4h-2"/><path d="M9 17h6"/><path d="M14 7l4 4"/>
              </svg>
            </div>
            <h1 class="brand-name">JusMoto</h1>
          </div>
          <p class="brand-tagline">Admin Control Panel</p>
          <div class="brand-features">
            <div class="feature-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
              <span>Manage orders & services</span>
            </div>
            <div class="feature-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
              <span>Track franchise operations</span>
            </div>
            <div class="feature-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
              <span>Revenue reports & analytics</span>
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
            <h2>Welcome Back</h2>
            <p>Sign in to your admin account</p>
          </div>

          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <div class="input-group">
              <label for="email">Email or Username</label>
              <div class="input-wrap" [class.input-error]="loginForm.get('email')?.touched && loginForm.get('email')?.hasError('required')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <input id="email" type="text" formControlName="email" placeholder="Enter your email" autocomplete="username">
              </div>
              <span class="field-error" *ngIf="loginForm.get('email')?.touched && loginForm.get('email')?.hasError('required')">Email is required</span>
            </div>

            <div class="input-group">
              <label for="password">Password</label>
              <div class="input-wrap" [class.input-error]="loginForm.get('password')?.touched && loginForm.get('password')?.hasError('required')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                <input id="password" [type]="hidePassword ? 'password' : 'text'" formControlName="password" placeholder="Enter your password" autocomplete="current-password">
                <button type="button" class="toggle-pw" (click)="hidePassword = !hidePassword" tabindex="-1">
                  <svg *ngIf="hidePassword" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  <svg *ngIf="!hidePassword" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                </button>
              </div>
              <span class="field-error" *ngIf="loginForm.get('password')?.touched && loginForm.get('password')?.hasError('required')">Password is required</span>
            </div>

            <div class="error-alert" *ngIf="error">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              {{ error }}
            </div>

            <button type="submit" class="btn-login" [disabled]="loading">
              <span *ngIf="!loading">Sign In</span>
              <span *ngIf="loading" class="btn-loading">
                <span class="spinner-btn"></span>
                Signing in...
              </span>
            </button>
          </form>
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
    .brand-logo { display:flex; align-items:center; gap:16px; margin-bottom:12px; }
    .logo-icon { width:64px; height:64px; border-radius:16px; background:rgba(227,27,35,0.9); display:flex; align-items:center; justify-content:center; box-shadow:0 8px 32px rgba(227,27,35,0.4); }
    .brand-name { font-size:36px; font-weight:800; color:#fff; margin:0; letter-spacing:-0.5px; }
    .brand-tagline { font-size:18px; color:rgba(255,255,255,0.6); margin:0 0 48px; padding-left:80px; }
    .brand-features { display:flex; flex-direction:column; gap:16px; padding-left:80px; }
    .feature-item { display:flex; align-items:center; gap:12px; color:rgba(255,255,255,0.7); font-size:15px; }
    .brand-footer { position:absolute; bottom:32px; left:60px; color:rgba(255,255,255,0.3); font-size:13px; }

    /* Right panel */
    .login-right {
      flex:1; display:flex; align-items:center; justify-content:center;
      background:#f8f9fa; padding:40px;
    }
    .login-card { width:100%; max-width:420px; }
    .login-header { margin-bottom:36px; }
    .login-header h2 { font-size:28px; font-weight:800; color:#1a1a2e; margin:0 0 8px; }
    .login-header p { color:#64748b; font-size:15px; margin:0; }

    .input-group { margin-bottom:24px; }
    .input-group label { display:block; margin-bottom:8px; font-weight:600; color:#334155; font-size:14px; }
    .input-wrap {
      display:flex; align-items:center; gap:10px;
      padding:12px 16px; border:2px solid #e5e7eb; border-radius:12px;
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
    .field-error { display:block; margin-top:6px; font-size:12px; color:#dc2626; }

    .error-alert {
      display:flex; align-items:center; gap:8px;
      padding:12px 16px; background:#fef2f2; border:1px solid #fecaca;
      border-radius:10px; color:#dc2626; font-size:14px; font-weight:500;
      margin-bottom:24px;
    }

    .btn-login {
      width:100%; padding:14px 24px; background:#e31b23; color:#fff;
      border:none; border-radius:12px; font-size:16px; font-weight:700;
      cursor:pointer; transition:all 0.2s; display:flex; align-items:center; justify-content:center;
    }
    .btn-login:hover:not(:disabled) { background:#c41219; transform:translateY(-1px); box-shadow:0 8px 24px rgba(227,27,35,0.3); }
    .btn-login:active:not(:disabled) { transform:translateY(0); }
    .btn-login:disabled { opacity:0.7; cursor:not-allowed; }
    .btn-loading { display:flex; align-items:center; gap:10px; }
    .spinner-btn { width:18px; height:18px; border:2px solid rgba(255,255,255,0.3); border-top-color:#fff; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }

    @media (max-width: 900px) {
      .login-wrapper { flex-direction:column; }
      .login-left { padding:40px 32px; min-height:auto; }
      .brand-tagline, .brand-features, .brand-footer { display:none; }
      .brand-logo { justify-content:center; }
      .login-right { padding:32px 24px; }
    }
  `]
})
export class AdminLoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = '';

    const { email, password } = this.loginForm.value;

    this.authService.adminLogin(email, password).subscribe({
      next: (response) => {
        if (response.success) {
          this.router.navigate(['/admin']);
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
