import {
  SocketService
} from "./chunk-7C4WS7N4.js";
import {
  AuthService
} from "./chunk-R5YFSE7W.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-6VP7BBRC.js";
import {
  environment
} from "./chunk-YVMT3HBM.js";
import {
  HttpClient
} from "./chunk-NM77QJY5.js";
import {
  CommonModule,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/client/client-layout.component.ts
var _c0 = () => ({ exact: true });
function ClientLayoutComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275listener("click", function ClientLayoutComponent_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
function ClientLayoutComponent_span_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cartCount());
  }
}
function ClientLayoutComponent_span_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.unreadCount() > 99 ? "99+" : ctx_r1.unreadCount());
  }
}
function ClientLayoutComponent_img_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 85);
    \u0275\u0275listener("error", function ClientLayoutComponent_img_122_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.imageError.set(true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.getImageUrl((tmp_1_0 = ctx_r1.currentUser()) == null ? null : tmp_1_0.image), \u0275\u0275sanitizeUrl);
  }
}
function ClientLayoutComponent_span_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getUserInitials());
  }
}
function ClientLayoutComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "a", 88);
    \u0275\u0275listener("click", function ClientLayoutComponent_div_128_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 89);
    \u0275\u0275element(3, "path", 90)(4, "circle", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Profile ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "a", 92);
    \u0275\u0275listener("click", function ClientLayoutComponent_div_128_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 89);
    \u0275\u0275element(8, "rect", 93)(9, "polygon", 94)(10, "circle", 95)(11, "circle", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " My Cars ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(13, "hr", 97);
    \u0275\u0275elementStart(14, "a", 98);
    \u0275\u0275listener("click", function ClientLayoutComponent_div_128_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 89);
    \u0275\u0275element(16, "path", 58)(17, "polyline", 59)(18, "line", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Logout ");
    \u0275\u0275elementEnd()();
  }
}
var ClientLayoutComponent = class _ClientLayoutComponent {
  authService;
  router;
  http;
  socketService;
  baseUrl = environment.apiUrl.replace("/api/v1", "");
  currentUser = signal(null);
  imageError = signal(false);
  cartCount = signal(0);
  unreadCount = signal(0);
  showDropdown = signal(false);
  sidebarOpen = signal(false);
  notifSub;
  constructor(authService, router, http, socketService) {
    this.authService = authService;
    this.router = router;
    this.http = http;
    this.socketService = socketService;
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser.set(user);
      this.imageError.set(false);
      if (user?.id) {
        this.http.get(`${environment.apiUrl}/notifications/unread-count`).subscribe({
          next: (res) => this.unreadCount.set(res.unread_count || 0),
          error: () => {
          }
        });
        this.socketService.joinNotifications("User", user.id);
        this.notifSub?.unsubscribe();
        this.notifSub = this.socketService.onNewNotification().subscribe(() => {
          this.unreadCount.update((c) => c + 1);
        });
      }
    });
  }
  ngOnDestroy() {
    this.notifSub?.unsubscribe();
  }
  getUserInitials() {
    const user = this.currentUser();
    if (!user)
      return "U";
    const f = (user.first_name || "").charAt(0);
    const l = (user.last_name || "").charAt(0);
    return (f + l).toUpperCase() || "U";
  }
  getImageUrl(image) {
    if (!image)
      return "";
    if (image.startsWith("http"))
      return image;
    return this.baseUrl + image;
  }
  toggleDropdown() {
    this.showDropdown.update((v) => !v);
  }
  closeDropdown() {
    this.showDropdown.set(false);
  }
  toggleSidebar() {
    this.sidebarOpen.update((v) => !v);
  }
  closeSidebar() {
    this.sidebarOpen.set(false);
  }
  logout() {
    this.authService.logout();
  }
  static \u0275fac = function ClientLayoutComponent_Factory(t) {
    return new (t || _ClientLayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(SocketService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientLayoutComponent, selectors: [["app-client-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 131, vars: 13, consts: [[1, "panel-container"], ["class", "sidebar-overlay", 3, "click", 4, "ngIf"], [1, "sidebar"], [1, "sidebar-header"], ["routerLink", "/", 1, "logo"], ["src", "assets/images/logo_redefening.png", "alt", "JusMoto", 1, "logo-img"], [1, "close-btn", 3, "click"], [1, "sidebar-nav"], [1, "nav-list"], ["routerLink", "/client/dashboard", "routerLinkActive", "active", 1, "nav-item", 3, "click", "routerLinkActiveOptions"], ["width", "19", "height", "18", "viewBox", "0 0 19 18", "fill", "none"], ["d", "M8.3 2.25H3.8C3.6 2.25 3.4 2.33 3.27 2.47C3.13 2.61 3.05 2.8 3.05 3V7.5C3.05 7.7 3.13 7.89 3.27 8.03C3.41 8.17 3.6 8.25 3.8 8.25H8.3C8.5 8.25 8.69 8.17 8.83 8.03C8.97 7.89 9.05 7.7 9.05 7.5V3C9.05 2.8 8.97 2.61 8.83 2.47C8.69 2.33 8.5 2.25 8.3 2.25Z", "fill", "currentColor"], ["d", "M15.8 2.25H11.3C11.1 2.25 10.9 2.33 10.77 2.47C10.63 2.61 10.55 2.8 10.55 3V7.5C10.55 7.7 10.63 7.89 10.77 8.03C10.91 8.17 11.1 8.25 11.3 8.25H15.8C16 8.25 16.19 8.17 16.33 8.03C16.47 7.89 16.55 7.7 16.55 7.5V3C16.55 2.8 16.47 2.61 16.33 2.47C16.19 2.33 16 2.25 15.8 2.25Z", "fill", "currentColor"], ["d", "M8.3 9.75H3.8C3.6 9.75 3.4 9.83 3.27 9.97C3.13 10.11 3.05 10.3 3.05 10.5V15C3.05 15.2 3.13 15.39 3.27 15.53C3.41 15.67 3.6 15.75 3.8 15.75H8.3C8.5 15.75 8.69 15.67 8.83 15.53C8.97 15.39 9.05 15.2 9.05 15V10.5C9.05 10.3 8.97 10.11 8.83 9.97C8.69 9.83 8.5 9.75 8.3 9.75Z", "fill", "currentColor"], ["d", "M13.55 9.75C14.14 9.75 14.72 9.92 15.21 10.24C15.7 10.57 16.08 11.03 16.31 11.57C16.54 12.11 16.61 12.7 16.51 13.28C16.4 13.86 16.13 14.39 15.73 14.82C15.32 15.24 14.8 15.54 14.23 15.67C13.66 15.8 13.06 15.77 12.51 15.56C11.96 15.36 11.48 15 11.14 14.52C10.79 14.05 10.59 13.49 10.56 12.9L10.55 12.75L10.56 12.6C10.6 11.83 10.93 11.11 11.49 10.58C12.04 10.05 12.79 9.75 13.55 9.75Z", "fill", "currentColor"], ["routerLink", "/client/my-cars", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["width", "20", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8"], ["d", "M5 17h2m10 0h2M5 17H3v-3.5l1.5-5A2 2 0 016.4 7h11.2a2 2 0 011.9 1.5l1.5 5V17h-2M5 17a2 2 0 01-2-2m18 2a2 2 0 002-2"], ["cx", "7.5", "cy", "17", "r", "1.5"], ["cx", "16.5", "cy", "17", "r", "1.5"], ["d", "M3 12h18"], ["routerLink", "/client/orders", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M7.55 4.5H15.8", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M7.55 9H15.8", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M7.55 13.5H15.8", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M4.55 4.5V4.51", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M4.55 9V9.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M4.55 13.5V13.51", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["routerLink", "/client/cart", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"], ["routerLink", "/client/favourites", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M21 8.25c0-2.485-2.014-4.5-4.5-4.5-1.74 0-3.222.993-4 2.475A4.502 4.502 0 008.5 3.75C6.014 3.75 4 5.765 4 8.25c0 6.42 8 10.5 8 10.5s8-4.08 8-10.5z"], ["routerLink", "/client/tickets", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M12.05 3.75V5.25", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M12.05 8.25V9.75", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M12.05 12.75V14.25", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M4.55 3.75H15.05C15.45 3.75 15.83 3.91 16.11 4.19C16.4 4.47 16.55 4.85 16.55 5.25V7.5C16.16 7.5 15.78 7.66 15.49 7.94C15.21 8.22 15.05 8.6 15.05 9C15.05 9.4 15.21 9.78 15.49 10.06C15.78 10.34 16.16 10.5 16.55 10.5V12.75C16.55 13.15 16.4 13.53 16.11 13.81C15.83 14.09 15.45 14.25 15.05 14.25H4.55C4.16 14.25 3.78 14.09 3.49 13.81C3.21 13.53 3.05 13.15 3.05 12.75V10.5C3.45 10.5 3.83 10.34 4.12 10.06C4.4 9.78 4.55 9.4 4.55 9C4.55 8.6 4.4 8.22 4.12 7.94C3.83 7.66 3.45 7.5 3.05 7.5V5.25C3.05 4.85 3.21 4.47 3.49 4.19C3.78 3.91 4.16 3.75 4.55 3.75Z", "stroke", "currentColor", "stroke-width", "1.5"], ["routerLink", "/client/refunds", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M15.8 8.25C15.62 6.93 15.01 5.71 14.06 4.77C13.12 3.83 11.89 3.23 10.56 3.06C9.24 2.89 7.9 3.16 6.75 3.83C5.59 4.49 4.69 5.52 4.18 6.75M3.8 3.75V6.75H6.8", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M3.8 9.75C3.99 11.07 4.6 12.29 5.55 13.23C6.49 14.17 7.72 14.77 9.04 14.94C10.37 15.11 11.71 14.84 12.86 14.17C14.01 13.51 14.92 12.48 15.43 11.25M15.8 14.25V11.25H12.8", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["routerLink", "/client/traffic-challan", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M4.55 3.75H14.3C14.7 3.75 15.08 3.91 15.37 4.19C15.65 4.47 15.8 4.85 15.8 5.25V14.25C15.8 14.65 15.65 15.03 15.37 15.31C15.08 15.59 14.7 15.75 14.3 15.75H4.55C4.16 15.75 3.78 15.59 3.49 15.31C3.21 15.03 3.05 14.65 3.05 14.25V5.25C3.05 4.85 3.21 4.47 3.49 4.19C3.78 3.91 4.16 3.75 4.55 3.75Z", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M6.05 7.5H12.8", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M6.05 10.5H12.8", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M3.05 2.25L15.8 2.25", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["routerLink", "/client/notifications", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M8.3 3.75C8.3 3.35 8.46 2.97 8.74 2.69C9.03 2.41 9.41 2.25 9.8 2.25C10.2 2.25 10.58 2.41 10.87 2.69C11.15 2.97 11.3 3.35 11.3 3.75C12.17 4.16 12.9 4.79 13.43 5.58C13.96 6.38 14.26 7.3 14.3 8.25V10.5C14.36 10.97 14.53 11.41 14.79 11.8C15.05 12.19 15.4 12.52 15.8 12.75H3.8C4.21 12.52 4.56 12.19 4.82 11.8C5.08 11.41 5.25 10.97 5.3 10.5V8.25C5.35 7.3 5.65 6.38 6.18 5.58C6.71 4.79 7.44 4.16 8.3 3.75Z", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M7.55 12.75V13.5C7.55 14.1 7.79 14.67 8.21 15.09C8.64 15.51 9.21 15.75 9.8 15.75C10.4 15.75 10.97 15.51 11.4 15.09C11.82 14.67 12.05 14.1 12.05 13.5V12.75", "stroke", "currentColor", "stroke-width", "1.5"], ["routerLink", "/client/settings", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none"], ["d", "M9.17 1.5H8.84C8.44 1.5 8.06 1.66 7.78 1.94C7.49 2.22 7.34 2.6 7.34 3V3.14C7.34 3.4 7.27 3.66 7.14 3.88C7 4.11 6.81 4.3 6.59 4.43L6.26 4.62C6.04 4.75 5.78 4.82 5.51 4.82C5.25 4.82 4.99 4.75 4.76 4.62L4.65 4.56C4.31 4.36 3.9 4.31 3.51 4.41C3.13 4.51 2.8 4.76 2.6 5.11L2.44 5.39C2.24 5.74 2.19 6.15 2.29 6.53C2.39 6.91 2.64 7.24 2.99 7.44L3.1 7.51C3.33 7.65 3.51 7.83 3.65 8.06C3.78 8.29 3.85 8.54 3.85 8.81V9.19C3.85 9.45 3.78 9.71 3.65 9.94C3.52 10.17 3.33 10.36 3.1 10.49L2.99 10.56C2.64 10.76 2.39 11.09 2.29 11.47C2.19 11.85 2.24 12.26 2.44 12.61L2.6 12.89C2.8 13.24 3.13 13.49 3.51 13.59C3.9 13.69 4.31 13.64 4.65 13.44L4.76 13.38C4.99 13.25 5.25 13.18 5.51 13.18C5.78 13.18 6.04 13.25 6.26 13.38L6.59 13.57C6.81 13.7 7 13.89 7.14 14.12C7.27 14.34 7.34 14.6 7.34 14.86V15C7.34 15.4 7.49 15.78 7.78 16.06C8.06 16.34 8.44 16.5 8.84 16.5H9.17C9.56 16.5 9.95 16.34 10.23 16.06C10.51 15.78 10.67 15.4 10.67 15V14.86C10.67 14.6 10.74 14.34 10.87 14.12C11 13.89 11.19 13.7 11.42 13.57L11.74 13.38C11.97 13.25 12.23 13.18 12.49 13.18C12.75 13.18 13.01 13.25 13.24 13.38L13.35 13.44C13.7 13.64 14.1 13.69 14.49 13.59C14.87 13.49 15.2 13.24 15.4 12.89L15.56 12.6C15.76 12.26 15.82 11.85 15.71 11.46C15.61 11.08 15.36 10.75 15.02 10.55L14.9 10.49C14.68 10.36 14.49 10.17 14.35 9.94C14.22 9.71 14.15 9.45 14.15 9.19V8.81C14.15 8.55 14.22 8.29 14.35 8.06C14.49 7.83 14.68 7.64 14.9 7.51L15.02 7.44C15.36 7.24 15.61 6.91 15.71 6.53C15.82 6.15 15.76 5.74 15.56 5.39L15.4 5.11C15.2 4.76 14.87 4.51 14.49 4.41C14.1 4.31 13.7 4.36 13.35 4.56L13.24 4.62C13.01 4.75 12.75 4.82 12.49 4.82C12.23 4.82 11.97 4.75 11.74 4.62L11.42 4.43C11.19 4.3 11 4.11 10.87 3.88C10.74 3.66 10.67 3.4 10.67 3.14V3C10.67 2.6 10.51 2.22 10.23 1.94C9.95 1.66 9.56 1.5 9.17 1.5Z", "stroke", "currentColor", "stroke-width", "1.6"], ["d", "M9 11.25C10.24 11.25 11.25 10.24 11.25 9C11.25 7.76 10.24 6.75 9 6.75C7.76 6.75 6.75 7.76 6.75 9C6.75 10.24 7.76 11.25 9 11.25Z", "stroke", "currentColor", "stroke-width", "1.6"], [1, "nav-list", "nav-bottom"], [1, "nav-item", "logout-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "main-content"], [1, "main-header"], [1, "header-left"], [1, "menu-toggle", 3, "click"], [1, "header-right"], ["routerLink", "/cart", 1, "header-icon", "cart-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["class", "badge", 4, "ngIf"], ["routerLink", "/client/notifications", 1, "header-icon", "notification-icon"], ["d", "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 01-3.46 0"], ["class", "notif-badge", 4, "ngIf"], [1, "user-dropdown"], [1, "user-btn", 3, "click"], ["alt", "User", "class", "user-avatar", 3, "src", "error", 4, "ngIf"], ["class", "user-initials", 4, "ngIf"], [1, "user-name"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M7 10l5 5 5-5z"], ["class", "dropdown-menu", 4, "ngIf"], [1, "page-content"], [1, "sidebar-overlay", 3, "click"], [1, "badge"], [1, "notif-badge"], ["alt", "User", 1, "user-avatar", 3, "error", "src"], [1, "user-initials"], [1, "dropdown-menu"], ["routerLink", "/client/settings", 1, "dropdown-item", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["routerLink", "/client/my-cars", 1, "dropdown-item", 3, "click"], ["x", "1", "y", "3", "width", "15", "height", "13"], ["points", "16 8 20 8 23 11 23 16 16 16 16 8"], ["cx", "5.5", "cy", "18.5", "r", "2.5"], ["cx", "18.5", "cy", "18.5", "r", "2.5"], [1, "dropdown-divider"], [1, "dropdown-item", "text-danger", 3, "click"]], template: function ClientLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ClientLayoutComponent_div_1_Template, 1, 0, "div", 1);
      \u0275\u0275elementStart(2, "aside", 2)(3, "div", 3)(4, "a", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 6);
      \u0275\u0275listener("click", function ClientLayoutComponent_Template_button_click_6_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275text(7, "\u2715");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "nav", 7)(9, "ul", 8)(10, "li")(11, "a", 9);
      \u0275\u0275listener("click", function ClientLayoutComponent_Template_a_click_11_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 10);
      \u0275\u0275element(13, "path", 11)(14, "path", 12)(15, "path", 13)(16, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18, "Dashboard");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "li")(20, "a", 15);
      \u0275\u0275listener("click", function ClientLayoutComponent_Template_a_click_20_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 16);
      \u0275\u0275element(22, "path", 17)(23, "circle", 18)(24, "circle", 19)(25, "path", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "My Cars");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "li")(29, "a", 21);
      \u0275\u0275listener("click", function ClientLayoutComponent_Template_a_click_29_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 10);
      \u0275\u0275element(31, "path", 22)(32, "path", 23)(33, "path", 24)(34, "path", 25)(35, "path", 26)(36, "path", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275text(38, "Order List");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "li")(40, "a", 28);
      \u0275\u0275listener("click", function ClientLayoutComponent_Template_a_click_40_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(41, "svg", 29);
      \u0275\u0275element(42, "circle", 30)(43, "circle", 31)(44, "path", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(45, "span");
      \u0275\u0275text(46, "Cart");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "li")(48, "a", 33);
      \u0275\u0275listener("click", function ClientLayoutComponent_Template_a_click_48_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(49, "svg", 29);
      \u0275\u0275element(50, "path", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(51, "span");
      \u0275\u0275text(52, "Favourite Items");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "li")(54, "a", 35);
      \u0275\u0275listener("click", function ClientLayoutComponent_Template_a_click_54_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(55, "svg", 10);
      \u0275\u0275element(56, "path", 36)(57, "path", 37)(58, "path", 38)(59, "path", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(60, "span");
      \u0275\u0275text(61, "Service Requests");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "li")(63, "a", 40);
      \u0275\u0275listener("click", function ClientLayoutComponent_Template_a_click_63_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(64, "svg", 10);
      \u0275\u0275element(65, "path", 41)(66, "path", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(67, "span");
      \u0275\u0275text(68, "Refunds");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "li")(70, "a", 43);
      \u0275\u0275listener("click", function ClientLayoutComponent_Template_a_click_70_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(71, "svg", 10);
      \u0275\u0275element(72, "path", 44)(73, "path", 45)(74, "path", 46)(75, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(76, "span");
      \u0275\u0275text(77, "Traffic Challans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "li")(79, "a", 48);
      \u0275\u0275listener("click", function ClientLayoutComponent_Template_a_click_79_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(80, "svg", 10);
      \u0275\u0275element(81, "path", 49)(82, "path", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(83, "span");
      \u0275\u0275text(84, "Notifications");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "li")(86, "a", 51);
      \u0275\u0275listener("click", function ClientLayoutComponent_Template_a_click_86_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(87, "svg", 52);
      \u0275\u0275element(88, "path", 53)(89, "path", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(90, "span");
      \u0275\u0275text(91, "Settings");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(92, "ul", 55)(93, "li")(94, "a", 56);
      \u0275\u0275listener("click", function ClientLayoutComponent_Template_a_click_94_listener() {
        return ctx.logout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(95, "svg", 57);
      \u0275\u0275element(96, "path", 58)(97, "polyline", 59)(98, "line", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(99, "span");
      \u0275\u0275text(100, "Log Out");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(101, "main", 61)(102, "header", 62)(103, "div", 63)(104, "button", 64);
      \u0275\u0275listener("click", function ClientLayoutComponent_Template_button_click_104_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(105, "span")(106, "span")(107, "span");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 65)(109, "a", 66);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(110, "svg", 67);
      \u0275\u0275element(111, "circle", 30)(112, "circle", 31)(113, "path", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(114, ClientLayoutComponent_span_114_Template, 2, 1, "span", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(115, "a", 69);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(116, "svg", 67);
      \u0275\u0275element(117, "path", 70)(118, "path", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275template(119, ClientLayoutComponent_span_119_Template, 2, 1, "span", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(120, "div", 73)(121, "button", 74);
      \u0275\u0275listener("click", function ClientLayoutComponent_Template_button_click_121_listener() {
        return ctx.toggleDropdown();
      });
      \u0275\u0275template(122, ClientLayoutComponent_img_122_Template, 1, 1, "img", 75)(123, ClientLayoutComponent_span_123_Template, 2, 1, "span", 76);
      \u0275\u0275elementStart(124, "span", 77);
      \u0275\u0275text(125);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(126, "svg", 78);
      \u0275\u0275element(127, "path", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(128, ClientLayoutComponent_div_128_Template, 20, 0, "div", 80);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(129, "div", 81);
      \u0275\u0275element(130, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      \u0275\u0275classProp("sidebar-open", ctx.sidebarOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sidebarOpen());
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.sidebarOpen());
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(12, _c0));
      \u0275\u0275advance(103);
      \u0275\u0275property("ngIf", ctx.cartCount() > 0);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.unreadCount() > 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.currentUser()) == null ? null : tmp_6_0.image) && !ctx.imageError());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !((tmp_7_0 = ctx.currentUser()) == null ? null : tmp_7_0.image) || ctx.imageError());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(((tmp_8_0 = ctx.currentUser()) == null ? null : tmp_8_0.first_name) || "User");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showDropdown());
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], styles: [`

*[_ngcontent-%COMP%] {
  box-sizing: border-box;
}
.panel-container[_ngcontent-%COMP%] {
  display: flex;
  min-height: 100vh;
  background: #f5f6fa;
}
.sidebar-overlay[_ngcontent-%COMP%] {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
}
.sidebar[_ngcontent-%COMP%] {
  width: 260px;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  z-index: 100;
  transition: transform 0.3s ease;
}
.sidebar-header[_ngcontent-%COMP%] {
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.close-btn[_ngcontent-%COMP%] {
  display: none;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
}
.logo[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.logo-img[_ngcontent-%COMP%] {
  height: 36px;
  width: auto;
  object-fit: contain;
}
.sidebar-nav[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
}
.nav-list[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0 10px;
  margin: 0;
}
.nav-bottom[_ngcontent-%COMP%] {
  margin-top: auto;
  border-top: 1px solid #e5e7eb;
  padding-top: 15px;
}
.nav-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 15px;
  color: #4a5568;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 4px;
  transition: all 0.2s;
  cursor: pointer;
}
.nav-item[_ngcontent-%COMP%]:hover {
  background: #fff5f5;
  color: #e31b23;
}
.nav-item.active[_ngcontent-%COMP%] {
  background: #e31b23;
  color: #fff;
}
.nav-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
.logout-btn[_ngcontent-%COMP%] {
  color: #dc3545 !important;
}
.logout-btn[_ngcontent-%COMP%]:hover {
  background: #fef2f2 !important;
}
.main-content[_ngcontent-%COMP%] {
  flex: 1;
  margin-left: 260px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-header[_ngcontent-%COMP%] {
  background: #fff;
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 50;
}
.header-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}
.menu-toggle[_ngcontent-%COMP%] {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}
.menu-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  width: 25px;
  height: 2px;
  background: #333;
  border-radius: 2px;
  transition: 0.3s;
}
.header-right[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 20px;
}
.header-icon[_ngcontent-%COMP%] {
  position: relative;
  color: #4a5568;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 24px;
  height: 24px;
}
.badge[_ngcontent-%COMP%] {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #e31b23;
  color: #fff;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
}
.notification-icon[_ngcontent-%COMP%] {
  position: relative;
}
.notif-badge[_ngcontent-%COMP%] {
  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 18px;
  height: 18px;
  background: #e31b23;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border: 2px solid #fff;
  line-height: 1;
}
.user-dropdown[_ngcontent-%COMP%] {
  position: relative;
}
.user-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}
.user-avatar[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  background: #e5e7eb;
}
.user-initials[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e31b23;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  flex-shrink: 0;
}
.user-name[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #333;
}
.dropdown-menu[_ngcontent-%COMP%] {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  min-width: 180px;
  padding: 8px 0;
  z-index: 100;
}
.dropdown-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s;
}
.dropdown-item[_ngcontent-%COMP%]:hover {
  background: #f5f5f5;
}
.dropdown-item.text-danger[_ngcontent-%COMP%] {
  color: #dc3545;
}
.dropdown-divider[_ngcontent-%COMP%] {
  margin: 8px 0;
  border: none;
  border-top: 1px solid #e5e7eb;
}
.page-content[_ngcontent-%COMP%] {
  padding: 25px;
  flex: 1;
}
[_nghost-%COMP%]     select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
  cursor: pointer;
}
[_nghost-%COMP%]     select:hover {
  border-color: #a1a1aa;
}
[_nghost-%COMP%]     select:focus {
  border-color: #e31b23;
  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);
  outline: none;
}
@media (max-width: 991px) {
  .sidebar[_ngcontent-%COMP%] {
    transform: translateX(-100%);
  }
  .sidebar.open[_ngcontent-%COMP%] {
    transform: translateX(0);
  }
  .sidebar-overlay[_ngcontent-%COMP%] {
    display: block;
  }
  .close-btn[_ngcontent-%COMP%] {
    display: block;
  }
  .main-content[_ngcontent-%COMP%] {
    margin-left: 0;
  }
  .menu-toggle[_ngcontent-%COMP%] {
    display: flex;
  }
  .user-name[_ngcontent-%COMP%] {
    display: none;
  }
}`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientLayoutComponent, { className: "ClientLayoutComponent", filePath: "src\\app\\features\\client\\client-layout.component.ts", lineNumber: 573 });
})();
export {
  ClientLayoutComponent
};
