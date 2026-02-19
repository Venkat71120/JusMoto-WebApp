import {
  ToastService
} from "./chunk-JBYXSY66.js";
import {
  AuthService
} from "./chunk-42K6S4RX.js";
import "./chunk-GUDC7RY7.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-CMH3GDQY.js";
import "./chunk-7QXR32YF.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/shared/components/toast/toast.component.ts
function ToastComponent_div_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 5);
    \u0275\u0275element(1, "path", 6)(2, "polyline", 7);
    \u0275\u0275elementEnd();
  }
}
function ToastComponent_div_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 5);
    \u0275\u0275element(1, "circle", 8)(2, "line", 9)(3, "line", 10);
    \u0275\u0275elementEnd();
  }
}
function ToastComponent_div_1__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 5);
    \u0275\u0275element(1, "path", 11)(2, "line", 12)(3, "line", 13);
    \u0275\u0275elementEnd();
  }
}
function ToastComponent_div_1__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 5);
    \u0275\u0275element(1, "circle", 8)(2, "line", 14)(3, "line", 15);
    \u0275\u0275elementEnd();
  }
}
function ToastComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function ToastComponent_div_1_Template_div_click_0_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toastService.dismiss(toast_r2.id));
    });
    \u0275\u0275template(1, ToastComponent_div_1__svg_svg_1_Template, 3, 0, "svg", 3)(2, ToastComponent_div_1__svg_svg_2_Template, 4, 0, "svg", 3)(3, ToastComponent_div_1__svg_svg_3_Template, 4, 0, "svg", 3)(4, ToastComponent_div_1__svg_svg_4_Template, 4, 0, "svg", 3);
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", "toast-" + toast_r2.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", toast_r2.type === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", toast_r2.type === "error");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", toast_r2.type === "warning");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", toast_r2.type === "info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.message);
  }
}
var ToastComponent = class _ToastComponent {
  toastService;
  constructor(toastService) {
    this.toastService = toastService;
  }
  static \u0275fac = function ToastComponent_Factory(t) {
    return new (t || _ToastComponent)(\u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "toast-container"], ["class", "toast", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "toast", 3, "click", "ngClass"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "toast-msg"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 11.08V12a10 10 0 11-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], ["d", "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ToastComponent_div_1_Template, 7, 6, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toastService.toasts());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ["\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 10000;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 400px;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 20px;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.toast-success[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.toast-error[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.toast-warning[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.toast-info[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.toast-msg[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=toast.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "src\\app\\shared\\components\\toast\\toast.component.ts", lineNumber: 31 });
})();

// src/app/features/admin/admin-layout.component.ts
var _c0 = () => ({ exact: true });
function AdminLayoutComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275listener("click", function AdminLayoutComponent_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
var AdminLayoutComponent = class _AdminLayoutComponent {
  authService;
  router;
  adminName = signal("Admin");
  sidebarOpen = signal(false);
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    const admin = this.authService.currentAdmin;
    if (admin)
      this.adminName.set(admin.name);
  }
  toggleSidebar() {
    this.sidebarOpen.update((v) => !v);
  }
  closeSidebar() {
    this.sidebarOpen.set(false);
  }
  logout() {
    this.authService.adminLogout();
  }
  static \u0275fac = function AdminLayoutComponent_Factory(t) {
    return new (t || _AdminLayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 284, vars: 6, consts: [[1, "panel-container"], ["class", "sidebar-overlay", 3, "click", 4, "ngIf"], [1, "sidebar"], [1, "sidebar-header"], ["routerLink", "/admin/dashboard", 1, "logo"], [1, "logo-text"], [1, "close-btn", 3, "click"], [1, "sidebar-nav"], [1, "nav-list"], ["routerLink", "/admin/dashboard", "routerLinkActive", "active", 1, "nav-item", 3, "click", "routerLinkActiveOptions"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], [1, "nav-section"], ["routerLink", "/admin/orders/all-orders", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "1"], ["d", "M9 12h6M9 16h6"], ["routerLink", "/admin/orders/refunded-order-list", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["points", "1 4 1 10 7 10"], ["d", "M3.51 15a9 9 0 105.64-12.36L1 10"], ["routerLink", "/admin/user/all-users", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 00-3-3.87"], ["d", "M16 3.13a4 4 0 010 7.75"], ["routerLink", "/admin/staff/all-staff", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "8.5", "cy", "7", "r", "4"], ["x1", "20", "y1", "8", "x2", "20", "y2", "14"], ["x1", "23", "y1", "11", "x2", "17", "y2", "11"], ["routerLink", "/admin/manage/permission/role/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["routerLink", "/admin/services/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"], ["routerLink", "/admin/category/index", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"], ["routerLink", "/admin/subcategory/index", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7z"], ["d", "M3 14h7v7H3z", "stroke-dasharray", "2 2"], ["routerLink", "/admin/brand/list", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"], ["x1", "7", "y1", "7", "x2", "7.01", "y2", "7"], ["routerLink", "/admin/car/list", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M5 17h2m10 0h2M2 9l2-4h16l2 4M2 9h20M2 9v8a1 1 0 001 1h1m16 0h1a1 1 0 001-1V9"], ["cx", "7", "cy", "17", "r", "2"], ["cx", "17", "cy", "17", "r", "2"], ["routerLink", "/admin/variant/list", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"], ["routerLink", "/admin/engine/list", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["x", "4", "y", "4", "width", "16", "height", "16", "rx", "2"], ["d", "M9 9h6v6H9z"], ["d", "M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"], ["routerLink", "/admin/fual/list", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M3 22h12V6L9 2 3 6v16z"], ["d", "M15 22h3a2 2 0 002-2v-6l-3-3"], ["d", "M6 12h6M6 16h6"], ["routerLink", "/admin/franchise/list", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"], ["d", "M9 22V12h6v10"], ["routerLink", "/admin/coupons/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4"], ["d", "M4 6v12c0 1.1.9 2 2 2h14v-4"], ["d", "M18 12a2 2 0 00-2 2c0 1.1.9 2 2 2h4v-4h-4z"], ["routerLink", "/admin/offer/list", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["cx", "9", "cy", "9", "r", "2"], ["cx", "15", "cy", "15", "r", "2"], ["x1", "7", "y1", "17", "x2", "17", "y2", "7"], ["routerLink", "/admin/slider/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["x", "2", "y", "3", "width", "20", "height", "14", "rx", "2"], ["d", "M8 21h8M12 17v4"], ["routerLink", "/admin/support-ticket/tickets", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"], ["routerLink", "/admin/support-ticket/department", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["points", "9 22 9 12 15 12 15 22"], ["routerLink", "/admin/location/state/all-state", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"], ["cx", "12", "cy", "10", "r", "3"], ["routerLink", "/admin/location/city/all-city", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"], ["d", "M9 9h1M9 13h1M9 17h1"], ["routerLink", "/admin/location/area/all-area", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["points", "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "18"], ["x1", "16", "y1", "6", "x2", "16", "y2", "22"], ["routerLink", "/admin/outletAddress/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M12 21.7C17.3 17 20 13 20 10a8 8 0 10-16 0c0 3 2.7 7 8 11.7z"], ["routerLink", "/admin/reports/revenue", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["x1", "12", "y1", "20", "x2", "12", "y2", "10"], ["x1", "18", "y1", "20", "x2", "18", "y2", "4"], ["x1", "6", "y1", "20", "x2", "6", "y2", "16"], ["routerLink", "/admin/reports/orders", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M21.21 15.89A10 10 0 118 2.83"], ["d", "M22 12A10 10 0 0012 2v10z"], ["routerLink", "/admin/wallet/manage", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["x", "1", "y", "4", "width", "22", "height", "16", "rx", "2", "ry", "2"], ["x1", "1", "y1", "10", "x2", "23", "y2", "10"], ["routerLink", "/admin/review/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], ["routerLink", "/admin/notification/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 01-3.46 0"], ["routerLink", "/admin/media/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2"], ["cx", "8.5", "cy", "8.5", "r", "1.5"], ["points", "21 15 16 10 5 21"], ["routerLink", "/admin/settings/general", "routerLinkActive", "active", 1, "nav-item", 3, "click"], [1, "nav-list", "nav-bottom"], [1, "nav-item", "logout-btn", 3, "click"], ["d", "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "main-content"], [1, "main-header"], [1, "header-left"], [1, "menu-toggle", 3, "click"], [1, "header-right"], [1, "admin-name"], [1, "page-content"], [1, "sidebar-overlay", 3, "click"]], template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, AdminLayoutComponent_div_1_Template, 1, 0, "div", 1);
      \u0275\u0275elementStart(2, "aside", 2)(3, "div", 3)(4, "a", 4)(5, "span", 5);
      \u0275\u0275text(6, "Admin Panel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_7_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275text(8, "\u2715");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "nav", 7)(10, "ul", 8)(11, "li")(12, "a", 9);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_12_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 10);
      \u0275\u0275element(14, "rect", 11)(15, "rect", 12)(16, "rect", 13)(17, "rect", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "Dashboard");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "li", 15);
      \u0275\u0275text(21, "ORDERS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "li")(23, "a", 16);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_23_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 10);
      \u0275\u0275element(25, "path", 17)(26, "rect", 18)(27, "path", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "Orders");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "li")(31, "a", 20);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_31_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 10);
      \u0275\u0275element(33, "polyline", 21)(34, "path", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36, "Refunded Orders");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "li", 15);
      \u0275\u0275text(38, "USERS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "li")(40, "a", 23);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_40_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(41, "svg", 10);
      \u0275\u0275element(42, "path", 24)(43, "circle", 25)(44, "path", 26)(45, "path", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(46, "span");
      \u0275\u0275text(47, "Users");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "li")(49, "a", 28);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_49_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(50, "svg", 10);
      \u0275\u0275element(51, "path", 29)(52, "circle", 30)(53, "line", 31)(54, "line", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(55, "span");
      \u0275\u0275text(56, "Staff / Admins");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "li")(58, "a", 33);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_58_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(59, "svg", 10);
      \u0275\u0275element(60, "path", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(61, "span");
      \u0275\u0275text(62, "Roles");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "li", 15);
      \u0275\u0275text(64, "CATALOG");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "li")(66, "a", 35);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_66_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(67, "svg", 10);
      \u0275\u0275element(68, "path", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Services");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "li")(72, "a", 37);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_72_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(73, "svg", 10);
      \u0275\u0275element(74, "path", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "Categories");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "li")(78, "a", 39);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_78_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(79, "svg", 10);
      \u0275\u0275element(80, "path", 40)(81, "path", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(82, "span");
      \u0275\u0275text(83, "Sub-Categories");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "li")(85, "a", 42);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_85_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(86, "svg", 10);
      \u0275\u0275element(87, "path", 43)(88, "line", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(89, "span");
      \u0275\u0275text(90, "Brands");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "li")(92, "a", 45);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_92_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(93, "svg", 10);
      \u0275\u0275element(94, "path", 46)(95, "circle", 47)(96, "circle", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(97, "span");
      \u0275\u0275text(98, "Cars");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "li", 15);
      \u0275\u0275text(100, "VEHICLE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "li")(102, "a", 49);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_102_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(103, "svg", 10);
      \u0275\u0275element(104, "circle", 50)(105, "path", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(106, "span");
      \u0275\u0275text(107, "Variants");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "li")(109, "a", 52);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_109_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(110, "svg", 10);
      \u0275\u0275element(111, "rect", 53)(112, "path", 54)(113, "path", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(114, "span");
      \u0275\u0275text(115, "Engine Types");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(116, "li")(117, "a", 56);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_117_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(118, "svg", 10);
      \u0275\u0275element(119, "path", 57)(120, "path", 58)(121, "path", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(122, "span");
      \u0275\u0275text(123, "Fuel Types");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "li", 15);
      \u0275\u0275text(125, "FRANCHISE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "li")(127, "a", 60);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_127_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(128, "svg", 10);
      \u0275\u0275element(129, "path", 61)(130, "path", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(131, "span");
      \u0275\u0275text(132, "Franchises");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(133, "li", 15);
      \u0275\u0275text(134, "MARKETING");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "li")(136, "a", 63);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_136_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(137, "svg", 10);
      \u0275\u0275element(138, "path", 64)(139, "path", 65)(140, "path", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(141, "span");
      \u0275\u0275text(142, "Coupons");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(143, "li")(144, "a", 67);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_144_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(145, "svg", 10);
      \u0275\u0275element(146, "circle", 68)(147, "circle", 69)(148, "line", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(149, "span");
      \u0275\u0275text(150, "Offers");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(151, "li")(152, "a", 71);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_152_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(153, "svg", 10);
      \u0275\u0275element(154, "rect", 72)(155, "path", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(156, "span");
      \u0275\u0275text(157, "Sliders");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(158, "li", 15);
      \u0275\u0275text(159, "SUPPORT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "li")(161, "a", 74);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_161_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(162, "svg", 10);
      \u0275\u0275element(163, "path", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(164, "span");
      \u0275\u0275text(165, "Tickets");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(166, "li")(167, "a", 76);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_167_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(168, "svg", 10);
      \u0275\u0275element(169, "path", 61)(170, "polyline", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(171, "span");
      \u0275\u0275text(172, "Departments");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(173, "li", 15);
      \u0275\u0275text(174, "LOCATIONS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "li")(176, "a", 78);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_176_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(177, "svg", 10);
      \u0275\u0275element(178, "path", 79)(179, "circle", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(180, "span");
      \u0275\u0275text(181, "States");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(182, "li")(183, "a", 81);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_183_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(184, "svg", 10);
      \u0275\u0275element(185, "path", 82)(186, "path", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(187, "span");
      \u0275\u0275text(188, "Cities");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(189, "li")(190, "a", 84);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_190_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(191, "svg", 10);
      \u0275\u0275element(192, "polygon", 85)(193, "line", 86)(194, "line", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(195, "span");
      \u0275\u0275text(196, "Areas");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(197, "li")(198, "a", 88);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_198_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(199, "svg", 10);
      \u0275\u0275element(200, "circle", 80)(201, "path", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(202, "span");
      \u0275\u0275text(203, "Outlet Locations");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(204, "li", 15);
      \u0275\u0275text(205, "REPORTS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "li")(207, "a", 90);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_207_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(208, "svg", 10);
      \u0275\u0275element(209, "line", 91)(210, "line", 92)(211, "line", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(212, "span");
      \u0275\u0275text(213, "Revenue Report");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(214, "li")(215, "a", 94);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_215_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(216, "svg", 10);
      \u0275\u0275element(217, "path", 95)(218, "path", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(219, "span");
      \u0275\u0275text(220, "Order Report");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(221, "li", 15);
      \u0275\u0275text(222, "FINANCE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "li")(224, "a", 97);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_224_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(225, "svg", 10);
      \u0275\u0275element(226, "rect", 98)(227, "line", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(228, "span");
      \u0275\u0275text(229, "Wallet Management");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(230, "li", 15);
      \u0275\u0275text(231, "CONTENT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "li")(233, "a", 100);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_233_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(234, "svg", 10);
      \u0275\u0275element(235, "polygon", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(236, "span");
      \u0275\u0275text(237, "Reviews");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(238, "li")(239, "a", 102);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_239_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(240, "svg", 10);
      \u0275\u0275element(241, "path", 103)(242, "path", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(243, "span");
      \u0275\u0275text(244, "Notifications");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(245, "li")(246, "a", 105);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_246_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(247, "svg", 10);
      \u0275\u0275element(248, "rect", 106)(249, "circle", 107)(250, "polyline", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(251, "span");
      \u0275\u0275text(252, "Media Library");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(253, "li", 15);
      \u0275\u0275text(254, "SETTINGS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "li")(256, "a", 109);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_256_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(257, "svg", 10);
      \u0275\u0275element(258, "circle", 50)(259, "path", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(260, "span");
      \u0275\u0275text(261, "Settings");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(262, "ul", 110)(263, "li")(264, "a", 111);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_264_listener() {
        return ctx.logout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(265, "svg", 10);
      \u0275\u0275element(266, "path", 112)(267, "polyline", 113)(268, "line", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(269, "span");
      \u0275\u0275text(270, "Log Out");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(271, "main", 115)(272, "header", 116)(273, "div", 117)(274, "button", 118);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_274_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(275, "span")(276, "span")(277, "span");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(278, "div", 119)(279, "span", 120);
      \u0275\u0275text(280);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(281, "div", 121);
      \u0275\u0275element(282, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(283, "app-toast");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sidebarOpen());
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.sidebarOpen());
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(268);
      \u0275\u0275textInterpolate(ctx.adminName());
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterOutlet, RouterLink, RouterLinkActive, ToastComponent], styles: ["\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.panel-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: #fff5f5;\n}\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 99;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  background: #0a0c0d;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  height: 100vh;\n  z-index: 100;\n  transition: transform 0.3s ease;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.close-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  color: #94a3b8;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  color: #fff;\n  font-weight: 700;\n  font-size: 20px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 15px 0;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 4px;\n}\n.nav-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0 10px;\n  margin: 0;\n}\n.nav-bottom[_ngcontent-%COMP%] {\n  margin-top: auto;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding-top: 15px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 15px;\n  color: #94a3b8;\n  text-decoration: none;\n  border-radius: 8px;\n  margin-bottom: 2px;\n  transition: all 0.2s;\n  cursor: pointer;\n  font-size: 14px;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(227, 27, 35, 0.1);\n  color: #ff6b6b;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n}\n.nav-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.nav-section[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #64748b;\n  letter-spacing: 0.08em;\n  padding: 16px 15px 6px;\n  text-transform: uppercase;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  color: #f87171 !important;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.1) !important;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 260px;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.main-header[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 15px 25px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #e5e7eb;\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 5px;\n}\n.menu-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 2px;\n  background: #333;\n  border-radius: 2px;\n  transition: 0.3s;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.admin-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.page-content[_ngcontent-%COMP%] {\n  padding: 25px;\n  flex: 1;\n}\n@media (max-width: 991px) {\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .sidebar-overlay[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .close-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=admin-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src\\app\\features\\admin\\admin-layout.component.ts", lineNumber: 305 });
})();

// src/app/features/admin/admin.routes.ts
var adminRoutes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      // Dashboard
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-JJ2EVGWT.js").then((m) => m.AdminDashboardComponent)
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      // Users
      { path: "user/all-users", loadComponent: () => import("./chunk-T2XHPS5I.js").then((m) => m.UserListComponent) },
      { path: "user/details/:id", loadComponent: () => import("./chunk-EYLWI4K4.js").then((m) => m.UserDetailComponent) },
      // Orders
      { path: "orders/all-orders", loadComponent: () => import("./chunk-HELEHKXI.js").then((m) => m.OrderListComponent) },
      { path: "orders/details/:id", loadComponent: () => import("./chunk-77YGW5FC.js").then((m) => m.OrderDetailComponent) },
      { path: "orders/refunded-order-list", loadComponent: () => import("./chunk-FTEUZG7T.js").then((m) => m.RefundListComponent) },
      // Services
      { path: "services/all", loadComponent: () => import("./chunk-MDBW6XJJ.js").then((m) => m.ServiceListComponent) },
      { path: "services/add", loadComponent: () => import("./chunk-DAABYBL2.js").then((m) => m.ServiceFormComponent) },
      { path: "services/edit-service/:id", loadComponent: () => import("./chunk-DAABYBL2.js").then((m) => m.ServiceFormComponent) },
      // Categories
      { path: "category/index", loadComponent: () => import("./chunk-7AFXMUYO.js").then((m) => m.CategoryListComponent) },
      { path: "category/add-new-category", loadComponent: () => import("./chunk-ZN3OQB5U.js").then((m) => m.CategoryFormComponent) },
      { path: "category/edit-category/:id", loadComponent: () => import("./chunk-ZN3OQB5U.js").then((m) => m.CategoryFormComponent) },
      // Sub-Categories
      { path: "subcategory/index", loadComponent: () => import("./chunk-VL5T2R42.js").then((m) => m.SubCategoryListComponent) },
      { path: "subcategory/add-new-subcategory", loadComponent: () => import("./chunk-VXS5HOB5.js").then((m) => m.SubCategoryFormComponent) },
      { path: "subcategory/edit-subcategory/:id", loadComponent: () => import("./chunk-VXS5HOB5.js").then((m) => m.SubCategoryFormComponent) },
      // Brands
      { path: "brand/list", loadComponent: () => import("./chunk-TUGZSJFV.js").then((m) => m.BrandListComponent) },
      // Cars
      { path: "car/list", loadComponent: () => import("./chunk-JVTLBDZO.js").then((m) => m.CarListComponent) },
      { path: "car/add", loadComponent: () => import("./chunk-EV5TZXLT.js").then((m) => m.CarFormComponent) },
      { path: "car/edit-car/:id", loadComponent: () => import("./chunk-EV5TZXLT.js").then((m) => m.CarFormComponent) },
      // Variants
      { path: "variant/list", loadComponent: () => import("./chunk-ZESWZZDJ.js").then((m) => m.VariantListComponent) },
      { path: "variant/add", loadComponent: () => import("./chunk-DBQGGMRR.js").then((m) => m.VariantFormComponent) },
      { path: "variant/edit/:id", loadComponent: () => import("./chunk-DBQGGMRR.js").then((m) => m.VariantFormComponent) },
      // Engine Types
      { path: "engine/list", loadComponent: () => import("./chunk-WHYK2DJJ.js").then((m) => m.EngineTypeListComponent) },
      // Fuel Types
      { path: "fual/list", loadComponent: () => import("./chunk-FDCIYQCC.js").then((m) => m.FuelTypeListComponent) },
      // Coupons
      { path: "coupons/all", loadComponent: () => import("./chunk-JKK574BY.js").then((m) => m.CouponListComponent) },
      { path: "coupons/new", loadComponent: () => import("./chunk-45YGXM6W.js").then((m) => m.CouponFormComponent) },
      { path: "coupons/edit/:id", loadComponent: () => import("./chunk-45YGXM6W.js").then((m) => m.CouponFormComponent) },
      // Offers
      { path: "offer/list", loadComponent: () => import("./chunk-HSNH6ICH.js").then((m) => m.OfferListComponent) },
      { path: "offer/add", loadComponent: () => import("./chunk-5ZNWHQPM.js").then((m) => m.OfferFormComponent) },
      { path: "offer/edit-offer/:id", loadComponent: () => import("./chunk-5ZNWHQPM.js").then((m) => m.OfferFormComponent) },
      // Sliders
      { path: "slider/all", loadComponent: () => import("./chunk-JACD55Z3.js").then((m) => m.SliderListComponent) },
      { path: "slider/add", loadComponent: () => import("./chunk-RWNHSD5F.js").then((m) => m.SliderFormComponent) },
      { path: "slider/edit/:id", loadComponent: () => import("./chunk-RWNHSD5F.js").then((m) => m.SliderFormComponent) },
      // Support Tickets
      { path: "support-ticket/tickets", loadComponent: () => import("./chunk-XBI3UFVV.js").then((m) => m.TicketListComponent) },
      { path: "support-ticket/details/:id", loadComponent: () => import("./chunk-TA45LCD2.js").then((m) => m.TicketDetailComponent) },
      { path: "support-ticket/department", loadComponent: () => import("./chunk-U4JSCGRW.js").then((m) => m.DepartmentListComponent) },
      // Staff / Admins
      { path: "staff/all-staff", loadComponent: () => import("./chunk-2TBH4PR7.js").then((m) => m.StaffListComponent) },
      { path: "staff/add-staff", loadComponent: () => import("./chunk-H6PZQUAI.js").then((m) => m.StaffFormComponent) },
      { path: "staff/edit-user-info/:id", loadComponent: () => import("./chunk-H6PZQUAI.js").then((m) => m.StaffFormComponent) },
      // Roles & Permissions
      { path: "manage/permission/role/all", loadComponent: () => import("./chunk-6VNWDSQC.js").then((m) => m.RoleListComponent) },
      { path: "manage/permission/role/add", loadComponent: () => import("./chunk-AJT7NVUN.js").then((m) => m.RoleFormComponent) },
      { path: "manage/permission/role/edit/:id", loadComponent: () => import("./chunk-AJT7NVUN.js").then((m) => m.RoleFormComponent) },
      // Franchises
      { path: "franchise/list", loadComponent: () => import("./chunk-PYU2XSTJ.js").then((m) => m.FranchiseListComponent) },
      { path: "franchise/add", loadComponent: () => import("./chunk-43QBILRK.js").then((m) => m.FranchiseFormComponent) },
      // Reports
      { path: "reports/revenue", loadComponent: () => import("./chunk-FMLPBMQL.js").then((m) => m.RevenueReportComponent) },
      { path: "reports/orders", loadComponent: () => import("./chunk-OQMGELEY.js").then((m) => m.OrderReportComponent) },
      // Wallet Management
      { path: "wallet/manage", loadComponent: () => import("./chunk-ZWD4GNWH.js").then((m) => m.WalletManagementComponent) },
      // Settings
      { path: "settings/general", loadComponent: () => import("./chunk-VO7MUPLZ.js").then((m) => m.GeneralSettingsComponent) },
      // Locations
      { path: "location/state/all-state", loadComponent: () => import("./chunk-GYJ5KVBR.js").then((m) => m.StateListComponent) },
      { path: "location/city/all-city", loadComponent: () => import("./chunk-2B5RAIIN.js").then((m) => m.CityListComponent) },
      { path: "location/area/all-area", loadComponent: () => import("./chunk-NFM6IIUW.js").then((m) => m.AreaListComponent) },
      // Outlet Locations
      { path: "outletAddress/all", loadComponent: () => import("./chunk-6VCUVYDS.js").then((m) => m.OutletLocationListComponent) },
      { path: "outletAddress/add", loadComponent: () => import("./chunk-JTJ6TTTE.js").then((m) => m.OutletLocationFormComponent) },
      { path: "outletAddress/edit-outlet/:id", loadComponent: () => import("./chunk-JTJ6TTTE.js").then((m) => m.OutletLocationFormComponent) },
      // Reviews
      { path: "review/all", loadComponent: () => import("./chunk-3PVEBX3J.js").then((m) => m.ReviewListComponent) },
      // Notifications
      { path: "notification/all", loadComponent: () => import("./chunk-7JA5R44N.js").then((m) => m.NotificationListComponent) },
      // Media Library
      { path: "media/all", loadComponent: () => import("./chunk-MJASDXPY.js").then((m) => m.MediaLibraryComponent) }
    ]
  }
];
export {
  adminRoutes
};
//# sourceMappingURL=chunk-BV73FTUM.js.map
