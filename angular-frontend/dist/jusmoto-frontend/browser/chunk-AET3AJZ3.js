import {
  ApiService
} from "./chunk-XSC2IEYW.js";
import "./chunk-GUDC7RY7.js";
import {
  RouterModule
} from "./chunk-CMH3GDQY.js";
import "./chunk-TT3LTPCS.js";
import {
  CommonModule,
  DecimalPipe,
  NgIf,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/admin/admin-dashboard/admin-dashboard.component.ts
function AdminDashboardComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "p");
    \u0275\u0275text(2, "Loading dashboard data...");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 29);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_65_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadDashboardData());
    });
    \u0275\u0275text(4, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  api;
  stats = signal({
    total_users: 0,
    total_orders: 0,
    total_revenue: 0,
    active_services: 0,
    pending_orders: 0,
    today_orders: 0
  });
  loading = signal(false);
  error = signal("");
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    this.loading.set(true);
    this.error.set("");
    this.api.get("/admin/dashboard").subscribe({
      next: (response) => {
        if (response.success) {
          this.stats.set({
            total_users: response.data.total_users || 0,
            total_orders: response.data.total_orders || 0,
            total_revenue: response.data.total_revenue || 0,
            active_services: response.data.active_services || 0,
            pending_orders: response.data.pending_orders || 0,
            today_orders: response.data.today_orders || 0
          });
        }
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set("Failed to load dashboard data. Please try again.");
      }
    });
  }
  static \u0275fac = function AdminDashboardComponent_Factory(t) {
    return new (t || _AdminDashboardComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 66, vars: 11, consts: [[1, "dashboard-page"], [1, "page-header"], [1, "stats-wrapper"], [1, "stats-card"], [1, "card-content"], [1, "card-label"], [1, "card-value"], [1, "card-icon", "blue"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 00-3-3.87"], ["d", "M16 3.13a4 4 0 010 7.75"], [1, "card-icon", "green"], ["d", "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["d", "M16 10a4 4 0 01-8 0"], [1, "card-icon", "purple"], ["x1", "12", "y1", "1", "x2", "12", "y2", "23"], ["d", "M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"], [1, "card-icon", "yellow"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], [1, "secondary-stats"], [1, "stats-card", "small"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [1, "loading-state"], [1, "error-state"], [1, "btn-retry", 3, "click"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
      \u0275\u0275text(3, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Overview of your platform");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "span", 5);
      \u0275\u0275text(10, "Total Users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h6", 6);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 8);
      \u0275\u0275element(15, "path", 9)(16, "circle", 10)(17, "path", 11)(18, "path", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "div", 3)(20, "div", 4)(21, "span", 5);
      \u0275\u0275text(22, "Total Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "h6", 6);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(26, "svg", 8);
      \u0275\u0275element(27, "path", 14)(28, "line", 15)(29, "path", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(30, "div", 3)(31, "div", 4)(32, "span", 5);
      \u0275\u0275text(33, "Revenue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "h6", 6);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(38, "svg", 8);
      \u0275\u0275element(39, "line", 18)(40, "path", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(41, "div", 3)(42, "div", 4)(43, "span", 5);
      \u0275\u0275text(44, "Pending Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "h6", 6);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 8);
      \u0275\u0275element(49, "circle", 21)(50, "polyline", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(51, "div", 23)(52, "div", 24)(53, "div", 4)(54, "span", 5);
      \u0275\u0275text(55, "Active Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "h6", 6);
      \u0275\u0275text(57);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 24)(59, "div", 4)(60, "span", 5);
      \u0275\u0275text(61, "Today's Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "h6", 6);
      \u0275\u0275text(63);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(64, AdminDashboardComponent_div_64_Template, 3, 0, "div", 25)(65, AdminDashboardComponent_div_65_Template, 5, 1, "div", 26);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.stats().total_users);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.stats().total_orders);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(36, 8, ctx.stats().total_revenue, "1.0-0"), "");
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.stats().pending_orders);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.stats().active_services);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.stats().today_orders);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
    }
  }, dependencies: [CommonModule, NgIf, DecimalPipe, RouterModule], styles: ["\n\n.dashboard-page[_ngcontent-%COMP%] {\n  max-width: 1400px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0 0 8px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.stats-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.secondary-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stats-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  background: #fff;\n  border-radius: 8px;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.stats-card.small[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  min-width: 180px;\n}\n.card-label[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  display: block;\n  margin-bottom: 8px;\n}\n.card-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n  color: #1a1a1a;\n}\n.stats-card.small[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-icon.blue[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n.card-icon.green[_ngcontent-%COMP%] {\n  background: rgba(0, 178, 137, 0.1);\n  color: #00b289;\n}\n.card-icon.purple[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1);\n  color: #8b5cf6;\n}\n.card-icon.yellow[_ngcontent-%COMP%] {\n  background: rgba(255, 177, 0, 0.1);\n  color: #ffb100;\n}\n.loading-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 8px;\n  padding: 40px;\n  text-align: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0 0 16px;\n}\n.btn-retry[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.btn-retry[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n@media (max-width: 991px) {\n  .stats-card[_ngcontent-%COMP%] {\n    min-width: calc(50% - 8px);\n  }\n}\n@media (max-width: 576px) {\n  .stats-card[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src\\app\\features\\admin\\admin-dashboard\\admin-dashboard.component.ts", lineNumber: 241 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-AET3AJZ3.js.map
