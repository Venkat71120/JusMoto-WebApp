import {
  Router
} from "./chunk-6VP7BBRC.js";
import {
  environment
} from "./chunk-YVMT3HBM.js";
import {
  HttpClient
} from "./chunk-NM77QJY5.js";
import {
  BehaviorSubject,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RLLOV7VK.js";
import {
  __spreadValues
} from "./chunk-LRITERKE.js";

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
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    let token = params.get("token");
    let user = params.get("user");
    if (token && user) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    } else {
      token = sessionStorage.getItem("token") || localStorage.getItem("token");
      user = sessionStorage.getItem("user") || localStorage.getItem("user");
    }
    if (token && user) {
      this.tokenSubject.next(token);
      this.currentUserSubject.next(JSON.parse(user));
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", typeof user === "string" ? user : JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("user", typeof user === "string" ? user : JSON.stringify(user));
    }
    const adminToken = sessionStorage.getItem("adminToken") || localStorage.getItem("adminToken");
    const admin = sessionStorage.getItem("admin") || localStorage.getItem("admin");
    if (adminToken && admin) {
      this.adminTokenSubject.next(adminToken);
      this.currentAdminSubject.next(JSON.parse(admin));
      if (!sessionStorage.getItem("adminToken")) {
        sessionStorage.setItem("adminToken", adminToken);
        sessionStorage.setItem("admin", admin);
      }
    }
  }
  get isAuthenticated() {
    return !!this.tokenSubject.value;
  }
  get currentUser() {
    return this.currentUserSubject.value;
  }
  updateCurrentUser(updates) {
    const user = this.currentUserSubject.value;
    if (user) {
      const updated = __spreadValues(__spreadValues({}, user), updates);
      this.currentUserSubject.next(updated);
      sessionStorage.setItem("user", JSON.stringify(updated));
    }
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
  resetPassword(data) {
    return this.http.post(`${this.apiUrl}/auth/reset-password`, data);
  }
  refreshToken() {
    return this.http.post(`${this.apiUrl}/auth/refresh-token`, {}).pipe(tap((response) => {
      if (response.success && response.data.token) {
        sessionStorage.setItem("token", response.data.token);
        this.tokenSubject.next(response.data.token);
      }
    }));
  }
  getProfile() {
    return this.http.get(`${this.apiUrl}/auth/me`).pipe(tap((response) => {
      if (response.success) {
        this.currentUserSubject.next(response.data.user);
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
      }
    }));
  }
  logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    this.tokenSubject.next(null);
    this.currentUserSubject.next(null);
    this.router.navigate(["/auth/login"]);
  }
  setAuth(token, user) {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
    this.tokenSubject.next(token);
    this.currentUserSubject.next(user);
  }
  socialLogin(data) {
    return this.http.post(`${this.apiUrl}/auth/social/login`, data).pipe(tap((response) => {
      if (response.success) {
        this.setAuth(response.data.token, response.data.user);
      }
    }));
  }
  adminLogin(email, password) {
    return this.http.post(`${this.apiUrl}/auth/admin/login`, { email, password }).pipe(tap((response) => {
      if (response.success) {
        sessionStorage.setItem("adminToken", response.data.token);
        sessionStorage.setItem("admin", JSON.stringify(response.data.admin));
        this.adminTokenSubject.next(response.data.token);
        this.currentAdminSubject.next(response.data.admin);
      }
    }));
  }
  adminLogout() {
    sessionStorage.removeItem("adminToken");
    sessionStorage.removeItem("admin");
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
