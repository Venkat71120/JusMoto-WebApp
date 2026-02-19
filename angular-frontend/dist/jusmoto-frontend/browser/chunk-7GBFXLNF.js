import {
  AuthService
} from "./chunk-BZ2LTEHJ.js";
import "./chunk-GUDC7RY7.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-CMH3GDQY.js";
import "./chunk-TT3LTPCS.js";
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/admin/admin-layout.component.ts
var _c0 = () => ({ exact: true });
function AdminLayoutComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
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
    if (admin) {
      this.adminName.set(admin.name);
    }
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 65, vars: 6, consts: [[1, "panel-container"], ["class", "sidebar-overlay", 3, "click", 4, "ngIf"], [1, "sidebar"], [1, "sidebar-header"], ["routerLink", "/admin", 1, "logo"], [1, "logo-text"], [1, "close-btn", 3, "click"], [1, "sidebar-nav"], [1, "nav-list"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-item", 3, "click", "routerLinkActiveOptions"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], ["routerLink", "/admin/users", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 00-3-3.87"], ["d", "M16 3.13a4 4 0 010 7.75"], ["routerLink", "/admin/orders", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["d", "M16 10a4 4 0 01-8 0"], ["routerLink", "/admin/services", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"], [1, "nav-list", "nav-bottom"], [1, "nav-item", "logout-btn", 3, "click"], ["d", "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "main-content"], [1, "main-header"], [1, "header-left"], [1, "menu-toggle", 3, "click"], [1, "header-right"], [1, "admin-name"], [1, "page-content"], [1, "sidebar-overlay", 3, "click"]], template: function AdminLayoutComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(20, "li")(21, "a", 15);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_21_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 10);
      \u0275\u0275element(23, "path", 16)(24, "circle", 17)(25, "path", 18)(26, "path", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Users");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "li")(30, "a", 20);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_30_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(31, "svg", 10);
      \u0275\u0275element(32, "path", 21)(33, "line", 22)(34, "path", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36, "Orders");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "li")(38, "a", 24);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_38_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(39, "svg", 10);
      \u0275\u0275element(40, "circle", 25)(41, "path", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275text(43, "Services");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "ul", 27)(45, "li")(46, "a", 28);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_46_listener() {
        return ctx.logout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(47, "svg", 10);
      \u0275\u0275element(48, "path", 29)(49, "polyline", 30)(50, "line", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(51, "span");
      \u0275\u0275text(52, "Log Out");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(53, "main", 32)(54, "header", 33)(55, "div", 34)(56, "button", 35);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_56_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(57, "span")(58, "span")(59, "span");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 36)(61, "span", 37);
      \u0275\u0275text(62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 38);
      \u0275\u0275element(64, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sidebarOpen());
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.sidebarOpen());
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(50);
      \u0275\u0275textInterpolate(ctx.adminName());
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.panel-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: #f5f6fa;\n}\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 99;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  background: #1e293b;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  height: 100vh;\n  z-index: 100;\n  transition: transform 0.3s ease;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid #334155;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.close-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  color: #94a3b8;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  color: #fff;\n  font-weight: 700;\n  font-size: 20px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 15px 0;\n  display: flex;\n  flex-direction: column;\n}\n.nav-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0 10px;\n  margin: 0;\n}\n.nav-bottom[_ngcontent-%COMP%] {\n  margin-top: auto;\n  border-top: 1px solid #334155;\n  padding-top: 15px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 15px;\n  color: #94a3b8;\n  text-decoration: none;\n  border-radius: 8px;\n  margin-bottom: 4px;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #334155;\n  color: #e2e8f0;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: #fff;\n}\n.nav-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  color: #f87171 !important;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.1) !important;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 260px;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.main-header[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 15px 25px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #e5e7eb;\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 5px;\n}\n.menu-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 2px;\n  background: #333;\n  border-radius: 2px;\n  transition: 0.3s;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.admin-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.page-content[_ngcontent-%COMP%] {\n  padding: 25px;\n  flex: 1;\n}\n@media (max-width: 991px) {\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .sidebar-overlay[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .close-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=admin-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src\\app\\features\\admin\\admin-layout.component.ts", lineNumber: 303 });
})();

// src/app/features/admin/admin.routes.ts
var adminRoutes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-AET3AJZ3.js").then((m) => m.AdminDashboardComponent)
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-AET3AJZ3.js").then((m) => m.AdminDashboardComponent)
      },
      {
        path: "orders",
        loadComponent: () => import("./chunk-AET3AJZ3.js").then((m) => m.AdminDashboardComponent)
      },
      {
        path: "services",
        loadComponent: () => import("./chunk-AET3AJZ3.js").then((m) => m.AdminDashboardComponent)
      }
    ]
  }
];
export {
  adminRoutes
};
//# sourceMappingURL=chunk-7GBFXLNF.js.map
