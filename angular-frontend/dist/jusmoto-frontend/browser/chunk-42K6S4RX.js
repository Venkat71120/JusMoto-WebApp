import {
  environment
} from "./chunk-GUDC7RY7.js";
import {
  Router
} from "./chunk-CMH3GDQY.js";
import {
  HttpClient
} from "./chunk-7QXR32YF.js";
import {
  BehaviorSubject,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-37NMOBDC.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  router;
  apiUrl = environment.apiUrl;
  currentUserSubject = new BehaviorSubject(null);
  tokenSubject = new BehaviorSubject(null);
  currentAdminSubject = new BehaviorSubject(null);
  adminTokenSubject = new BehaviorSubject(null);
  currentUser$ = this.currentUserSubject.asObservable();
  token$ = this.tokenSubject.asObservable();
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.loadStoredAuth();
  }
  loadStoredAuth() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      this.tokenSubject.next(token);
      this.currentUserSubject.next(JSON.parse(user));
    }
    const adminToken = localStorage.getItem("adminToken");
    const admin = localStorage.getItem("admin");
    if (adminToken && admin) {
      this.adminTokenSubject.next(adminToken);
      this.currentAdminSubject.next(JSON.parse(admin));
    }
  }
  get isAuthenticated() {
    return !!this.tokenSubject.value;
  }
  get currentUser() {
    return this.currentUserSubject.value;
  }
  get token() {
    return this.tokenSubject.value;
  }
  get isAdminAuthenticated() {
    return !!this.adminTokenSubject.value;
  }
  get currentAdmin() {
    return this.currentAdminSubject.value;
  }
  get adminToken() {
    return this.adminTokenSubject.value;
  }
  login(email, password) {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }).pipe(tap((response) => {
      if (response.success) {
        this.setAuth(response.data.token, response.data.user);
      }
    }));
  }
  register(data) {
    return this.http.post(`${this.apiUrl}/auth/register`, data).pipe(tap((response) => {
      if (response.success) {
        this.setAuth(response.data.token, response.data.user);
      }
    }));
  }
  verifyEmail(email, otp) {
    return this.http.post(`${this.apiUrl}/auth/verify-email`, { email, otp });
  }
  resendOtp(email) {
    return this.http.post(`${this.apiUrl}/auth/resend-otp`, { email });
  }
  forgotPassword(email) {
    return this.http.post(`${this.apiUrl}/auth/forgot-password`, { email });
  }
  resetPassword(token, password, password_confirmation) {
    return this.http.post(`${this.apiUrl}/auth/reset-password`, { token, password, password_confirmation });
  }
  refreshToken() {
    return this.http.post(`${this.apiUrl}/auth/refresh-token`, {}).pipe(tap((response) => {
      if (response.success && response.data.token) {
        localStorage.setItem("token", response.data.token);
        this.tokenSubject.next(response.data.token);
      }
    }));
  }
  getProfile() {
    return this.http.get(`${this.apiUrl}/auth/me`).pipe(tap((response) => {
      if (response.success) {
        this.currentUserSubject.next(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    }));
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.tokenSubject.next(null);
    this.currentUserSubject.next(null);
    this.router.navigate(["/auth/login"]);
  }
  setAuth(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.tokenSubject.next(token);
    this.currentUserSubject.next(user);
  }
  adminLogin(email, password) {
    return this.http.post(`${this.apiUrl}/auth/admin/login`, { email, password }).pipe(tap((response) => {
      if (response.success) {
        localStorage.setItem("adminToken", response.data.token);
        localStorage.setItem("admin", JSON.stringify(response.data.admin));
        this.adminTokenSubject.next(response.data.token);
        this.currentAdminSubject.next(response.data.admin);
      }
    }));
  }
  adminLogout() {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");
    this.adminTokenSubject.next(null);
    this.currentAdminSubject.next(null);
    this.router.navigate(["/auth/admin-login"]);
  }
  updateFirebaseToken(firebase_token) {
    return this.http.post(`${this.apiUrl}/auth/firebase-token`, { firebase_token });
  }
  static \u0275fac = function AuthService_Factory(t) {
    return new (t || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-42K6S4RX.js.map
