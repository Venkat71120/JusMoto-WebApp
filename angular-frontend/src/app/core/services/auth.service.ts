import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  username: string;
  email_verified: number;
  image?: string;
}

export interface AuthResponse {
  success: boolean;
  data: {
    user: User;
    token: string;
    verify_enabled: boolean;
  };
  message: string;
}

export interface Admin {
  id: number;
  name: string;
  email: string;
  username: string;
  role: string;
  image?: string;
}

export interface AdminAuthResponse {
  success: boolean;
  data: {
    admin: Admin;
    token: string;
  };
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private tokenSubject = new BehaviorSubject<string | null>(null);
  private currentAdminSubject = new BehaviorSubject<Admin | null>(null);
  private adminTokenSubject = new BehaviorSubject<string | null>(null);

  currentUser$ = this.currentUserSubject.asObservable();
  token$ = this.tokenSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.loadStoredAuth();
  }

  private loadStoredAuth(): void {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      this.tokenSubject.next(token);
      this.currentUserSubject.next(JSON.parse(user));
    }

    const adminToken = localStorage.getItem('adminToken');
    const admin = localStorage.getItem('admin');
    if (adminToken && admin) {
      this.adminTokenSubject.next(adminToken);
      this.currentAdminSubject.next(JSON.parse(admin));
    }
  }

  get isAuthenticated(): boolean {
    return !!this.tokenSubject.value;
  }

  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }

  updateCurrentUser(updates: Partial<User>): void {
    const user = this.currentUserSubject.value;
    if (user) {
      const updated = { ...user, ...updates };
      this.currentUserSubject.next(updated);
      localStorage.setItem('user', JSON.stringify(updated));
    }
  }

  get token(): string | null {
    return this.tokenSubject.value;
  }

  get isAdminAuthenticated(): boolean {
    return !!this.adminTokenSubject.value;
  }

  get currentAdmin(): Admin | null {
    return this.currentAdminSubject.value;
  }

  get adminToken(): string | null {
    return this.adminTokenSubject.value;
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap(response => {
          if (response.success) {
            this.setAuth(response.data.token, response.data.user);
          }
        })
      );
  }

  register(data: {
    email: string;
    password: string;
    terms_conditions: boolean;
    first_name?: string;
    last_name?: string;
    phone?: string;
  }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/register`, data)
      .pipe(
        tap(response => {
          if (response.success) {
            this.setAuth(response.data.token, response.data.user);
          }
        })
      );
  }

  verifyEmail(email: string, otp: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/verify-email`, { email, otp });
  }

  resendOtp(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/resend-otp`, { email });
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/forgot-password`, { email });
  }

  resetPassword(token: string, password: string, password_confirmation: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/reset-password`, { token, password, password_confirmation });
  }

  refreshToken(): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/refresh-token`, {})
      .pipe(
        tap((response: any) => {
          if (response.success && response.data.token) {
            localStorage.setItem('token', response.data.token);
            this.tokenSubject.next(response.data.token);
          }
        })
      );
  }

  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth/me`)
      .pipe(
        tap((response: any) => {
          if (response.success) {
            this.currentUserSubject.next(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data.user));
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.tokenSubject.next(null);
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  private setAuth(token: string, user: User): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.tokenSubject.next(token);
    this.currentUserSubject.next(user);
  }

  socialLogin(data: { provider: string; email: string; firstName?: string; lastName?: string; socialId?: string; image?: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/social/login`, data)
      .pipe(
        tap(response => {
          if (response.success) {
            this.setAuth(response.data.token, response.data.user);
          }
        })
      );
  }

  adminLogin(email: string, password: string): Observable<AdminAuthResponse> {
    return this.http.post<AdminAuthResponse>(`${this.apiUrl}/auth/admin/login`, { email, password })
      .pipe(
        tap(response => {
          if (response.success) {
            localStorage.setItem('adminToken', response.data.token);
            localStorage.setItem('admin', JSON.stringify(response.data.admin));
            this.adminTokenSubject.next(response.data.token);
            this.currentAdminSubject.next(response.data.admin);
          }
        })
      );
  }

  adminLogout(): void {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('admin');
    this.adminTokenSubject.next(null);
    this.currentAdminSubject.next(null);
    this.router.navigate(['/auth/admin-login']);
  }

  updateFirebaseToken(firebase_token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/firebase-token`, { firebase_token });
  }
}
