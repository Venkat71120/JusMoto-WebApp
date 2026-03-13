import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  const isAdminRequest = request.url.includes('/admin/') || request.url.includes('/cars/import-csv');
  let token = isAdminRequest ? this.authService.adminToken : this.authService.token;
  // Fallback: if no user token but admin is logged in, use admin token
  if (!token && this.authService.adminToken) {
    token = this.authService.adminToken;
  }

  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }


    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          if (isAdminRequest) {
            this.authService.adminLogout();
          } else {
            this.authService.logout();
          }
        }
        return throwError(() => error);
      })
    );
  }
}
