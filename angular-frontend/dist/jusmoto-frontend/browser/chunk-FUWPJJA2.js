import {
  AuthService
} from "./chunk-R5YFSE7W.js";
import {
  Router
} from "./chunk-6VP7BBRC.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RLLOV7VK.js";

// src/app/core/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.authService.isAuthenticated) {
      return true;
    }
    this.router.navigate(["/auth/login"], {
      queryParams: { returnUrl: state.url }
    });
    return false;
  }
  static \u0275fac = function AuthGuard_Factory(t) {
    return new (t || _AuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
};
var GuestGuard = class _GuestGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (!this.authService.isAuthenticated) {
      return true;
    }
    this.router.navigate(["/client/dashboard"]);
    return false;
  }
  static \u0275fac = function GuestGuard_Factory(t) {
    return new (t || _GuestGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GuestGuard, factory: _GuestGuard.\u0275fac, providedIn: "root" });
};
var AdminGuard = class _AdminGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.isAdminAuthenticated) {
      return true;
    }
    this.router.navigate(["/auth/admin-login"]);
    return false;
  }
  static \u0275fac = function AdminGuard_Factory(t) {
    return new (t || _AdminGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminGuard, factory: _AdminGuard.\u0275fac, providedIn: "root" });
};

export {
  AuthGuard,
  GuestGuard,
  AdminGuard
};
