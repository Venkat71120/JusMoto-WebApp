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

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private tokenSubject = new BehaviorSubject<string | null>(null);

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
  }

  get isAuthenticated(): boolean {
    return !!this.tokenSubject.value;
  }

  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }

  get token(): string | null {
    return this.tokenSubject.value;
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

  updateFirebaseToken(firebase_token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/firebase-token`, { firebase_token });
  }
}
