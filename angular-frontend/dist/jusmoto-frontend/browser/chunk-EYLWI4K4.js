import {
  environment
} from "./chunk-GUDC7RY7.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-CMH3GDQY.js";
import {
  HttpClient
} from "./chunk-7QXR32YF.js";
import {
  CommonModule,
  DatePipe,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-37NMOBDC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// src/app/features/admin/users/user-detail.component.ts
var _c0 = (a0) => ["/admin/orders", a0];
function UserDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function UserDetailComponent_div_7_div_50_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, order_r3.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", order_r3.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", order_r3.total, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getOrderStatusClass(order_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getOrderStatusLabel(order_r3.status));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-active", order_r3.payment_status)("badge-warning", !order_r3.payment_status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r3.payment_status ? "Paid" : "Pending");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 11, order_r3.created_at, "mediumDate"));
  }
}
function UserDetailComponent_div_7_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "table", 24)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, UserDetailComponent_div_7_div_50_tr_17_Template, 15, 16, "tr", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Recent Orders (", ctx_r1.user().orders.length, ")");
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.user().orders.slice(0, 10));
  }
}
function UserDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 9)(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11)(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 13)(10, "span", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 15)(15, "button", 16);
    \u0275\u0275listener("click", function UserDetailComponent_div_7_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleStatus());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 17)(18, "div", 18)(19, "h3");
    \u0275\u0275text(20, "Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 19)(22, "span", 20);
    \u0275\u0275text(23, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 19)(27, "span", 20);
    \u0275\u0275text(28, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 19)(32, "span", 20);
    \u0275\u0275text(33, "Joined");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 19)(38, "span", 20);
    \u0275\u0275text(39, "Last Seen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 18)(44, "h3");
    \u0275\u0275text(45, "Wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 21);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 22);
    \u0275\u0275text(49, "Current Balance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(50, UserDetailComponent_div_7_div_50_Template, 18, 2, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_17_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.getAvatarColor(ctx_r1.user().id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(ctx_r1.user()), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.user().first_name || "", " ", ctx_r1.user().last_name || "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.user().email);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-active", ctx_r1.user().status)("badge-inactive", !ctx_r1.user().status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.user().status ? "Active" : "Inactive", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-active", ctx_r1.user().email_verified)("badge-warning", !ctx_r1.user().email_verified);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.user().email_verified ? "Verified" : "Unverified", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.user().status ? "Deactivate" : "Activate", " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.user().username || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.user().phone || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 23, ctx_r1.user().created_at, "medium"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.user().last_seen ? \u0275\u0275pipeBind2(42, 26, ctx_r1.user().last_seen, "medium") : "Never");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", ((tmp_16_0 = ctx_r1.user().wallet) == null ? null : tmp_16_0.available_balance) || "0.00", "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_17_0 = ctx_r1.user().orders) == null ? null : tmp_17_0.length);
  }
}
var UserDetailComponent = class _UserDetailComponent {
  http;
  route;
  router;
  user = signal(null);
  loading = signal(true);
  constructor(http, route, router) {
    this.http = http;
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.http.get(`${environment.apiUrl}/admin/users/${id}`).subscribe({
      next: (res) => this.user.set(res.data),
      error: () => this.router.navigate(["/admin/user/all-users"]),
      complete: () => this.loading.set(false)
    });
  }
  toggleStatus() {
    const u = this.user();
    const newStatus = u.status ? 0 : 1;
    this.http.put(`${environment.apiUrl}/admin/users/${u.id}/status`, { status: newStatus }).subscribe({
      next: () => this.user.set(__spreadProps(__spreadValues({}, u), { status: newStatus }))
    });
  }
  getInitials(user) {
    return ((user.first_name?.[0] || "") + (user.last_name?.[0] || "")).toUpperCase() || "?";
  }
  getAvatarColor(id) {
    const colors = ["#e31b23", "#3b82f6", "#8b5cf6", "#06b6d4", "#f59e0b", "#10b981"];
    return colors[id % colors.length];
  }
  getOrderStatusLabel(s) {
    return ["Pending", "Accepted", "In Progress", "Completed", "Cancelled", "Refunded"][s] || "Unknown";
  }
  getOrderStatusClass(s) {
    return ["badge-warning", "badge-info", "badge-purple", "badge-active", "badge-inactive", "badge-inactive"][s] || "";
  }
  static \u0275fac = function UserDetailComponent_Factory(t) {
    return new (t || _UserDetailComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserDetailComponent, selectors: [["app-user-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "page-header"], ["routerLink", "/admin/user/all-users", 1, "back-btn"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], ["class", "loading-center", 4, "ngIf"], [4, "ngIf"], [1, "loading-center"], [1, "spinner"], [1, "user-header-card"], [1, "user-avatar"], [1, "user-info"], [1, "user-email"], [1, "user-meta"], [1, "badge"], [1, "user-actions"], [1, "btn-toggle-status", 3, "click"], [1, "detail-grid"], [1, "detail-card"], [1, "detail-row"], [1, "label"], [1, "wallet-balance"], [1, "wallet-label"], ["class", "detail-card", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "link", 3, "routerLink"], [1, "badge", 3, "ngClass"]], template: function UserDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3)(4, "polyline", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " Back to Users ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, UserDetailComponent_div_6_Template, 2, 0, "div", 5)(7, UserDetailComponent_div_7_Template, 51, 29, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.user() && !ctx.loading());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, RouterModule, RouterLink], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: #64748b;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.user-header-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 22px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.user-email[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 8px;\n}\n.user-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.user-actions[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.btn-toggle-status[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border: 2px solid #e31b23;\n  border-radius: 8px;\n  background: transparent;\n  color: #e31b23;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-toggle-status[_ngcontent-%COMP%]:hover {\n  background: #e31b23;\n  color: #fff;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.detail-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.detail-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid #f8f9fa;\n}\n.detail-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n}\n.wallet-balance[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #e31b23;\n}\n.wallet-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge-info[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.badge-purple[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f8f9fa;\n}\n.link[_ngcontent-%COMP%] {\n  color: #e31b23;\n  text-decoration: none;\n  font-weight: 600;\n}\n.link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .user-header-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .user-actions[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=user-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserDetailComponent, { className: "UserDetailComponent", filePath: "src\\app\\features\\admin\\users\\user-detail.component.ts", lineNumber: 118 });
})();
export {
  UserDetailComponent
};
//# sourceMappingURL=chunk-EYLWI4K4.js.map
