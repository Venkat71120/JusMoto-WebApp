import {
  ApiService
} from "./chunk-RU4JQJ5O.js";
import {
  AuthService
} from "./chunk-5AKWGKTS.js";
import "./chunk-OW254BTU.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-DYL6AOBP.js";
import "./chunk-L2KTGN5G.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/admin/admin-dashboard/admin-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.id;
function AdminDashboardComponent_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", card_r1.route);
  }
}
function AdminDashboardComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 14)(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminDashboardComponent_For_10_Conditional_4_Template, 3, 1, "a", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r1.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, card_r1.route ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.value);
  }
}
function AdminDashboardComponent_Conditional_19_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 22)(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "div", 24);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 25);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td")(13, "span", 26);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const i_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r3 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.getInitials(user_r2.first_name, user_r2.last_name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r2.first_name, " ", user_r2.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 6, user_r2.created_at, "dd MMM"));
  }
}
function AdminDashboardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 12)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Joined");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, AdminDashboardComponent_Conditional_19_For_11_Template, 16, 9, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r3.recentUsers());
  }
}
function AdminDashboardComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 28);
    \u0275\u0275element(2, "path", 29)(3, "circle", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No recent users found");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_28_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 31);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 32);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    const i_r6 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", order_r5.first_name, " ", order_r5.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(10, 7, order_r5.total, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r3.getStatusClass(order_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getStatusText(order_r5.status), " ");
  }
}
function AdminDashboardComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 12)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, AdminDashboardComponent_Conditional_28_For_13_Template, 14, 10, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r3.recentOrders());
  }
}
function AdminDashboardComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 28);
    \u0275\u0275element(2, "path", 33)(3, "line", 34)(4, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No recent orders found");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading dashboard...");
    \u0275\u0275elementEnd()();
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  api;
  authService;
  greeting = signal("");
  adminName = signal("Admin");
  loading = signal(false);
  statCards = signal([]);
  recentUsers = signal([]);
  recentOrders = signal([]);
  constructor(api, authService) {
    this.api = api;
    this.authService = authService;
  }
  ngOnInit() {
    this.setGreeting();
    const admin = this.authService.currentAdmin;
    if (admin) {
      this.adminName.set(admin.name);
    }
    this.loadDashboard();
  }
  setGreeting() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    if (hour < 12)
      this.greeting.set("Good Morning");
    else if (hour < 18)
      this.greeting.set("Good Afternoon");
    else
      this.greeting.set("Good Evening");
  }
  loadDashboard() {
    this.loading.set(true);
    this.api.get("/admin/dashboard").subscribe({
      next: (res) => {
        if (res.success) {
          const d = res.data;
          this.statCards.set([
            { title: "Total Admins", value: this.fmt(d.total_admins), route: "/admin/users" },
            { title: "Total Users", value: this.fmt(d.total_users), route: "/admin/users" },
            { title: "Total Services", value: this.fmt(d.total_services), route: "/admin/services" },
            { title: "Total Products", value: this.fmt(d.total_products) },
            { title: "Total Cars", value: this.fmt(d.total_cars) },
            { title: "Total Coupons", value: this.fmt(d.total_coupons) },
            { title: "Total Orders", value: this.fmt(d.total_orders), route: "/admin/orders" },
            { title: "Total Tax", value: "\u20B9" + this.fmtCurrency(d.total_tax) },
            { title: "Total Earnings", value: "\u20B9" + this.fmtCurrency(d.total_earnings) }
          ]);
          this.recentUsers.set(d.recent_users || []);
          this.recentOrders.set(d.recent_orders || []);
        }
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  fmt(val) {
    const n = Number(val) || 0;
    return n.toLocaleString("en-IN");
  }
  fmtCurrency(val) {
    const n = Number(val) || 0;
    return n.toLocaleString("en-IN", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }
  getInitials(first, last) {
    return ((first?.[0] || "") + (last?.[0] || "")).toUpperCase() || "?";
  }
  getStatusClass(status) {
    const map = { 0: "pending", 1: "active", 2: "completed", 3: "delivered", 4: "cancelled" };
    return map[status] || "pending";
  }
  getStatusText(status) {
    const map = { 0: "Pending", 1: "Active", 2: "Completed", 3: "Delivered", 4: "Cancelled" };
    return map[status] || "Unknown";
  }
  static \u0275fac = function AdminDashboardComponent_Factory(t) {
    return new (t || _AdminDashboardComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 7, consts: [[1, "dashboard"], [1, "greeting-section"], [1, "greeting-text"], [1, "admin-name"], [1, "greeting-sub"], [1, "stats-grid"], [1, "stat-card"], [1, "activity-grid"], [1, "activity-card"], [1, "activity-header"], [1, "badge"], [1, "activity-body"], [1, "activity-table"], [1, "loading-overlay"], [1, "stat-header"], [1, "stat-label"], [1, "stat-link", 3, "routerLink"], [1, "stat-value"], [1, "stat-bar"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "row-num"], [1, "user-cell"], [1, "avatar"], [1, "user-name"], [1, "user-email"], [1, "date-badge"], [1, "empty-state"], ["width", "40", "height", "40", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#a0a6a8", "stroke-width", "1.5"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], [1, "order-amount"], [1, "status-pill", 3, "ngClass"], ["d", "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["d", "M16 10a4 4 0 01-8 0"], [1, "spinner"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Here's your performance overview for today");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275repeaterCreate(9, AdminDashboardComponent_For_10_Template, 8, 3, "div", 6, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h3");
      \u0275\u0275text(15, "Recent Users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 10);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 11);
      \u0275\u0275template(19, AdminDashboardComponent_Conditional_19_Template, 12, 0, "table", 12)(20, AdminDashboardComponent_Conditional_20_Template, 6, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 8)(22, "div", 9)(23, "h3");
      \u0275\u0275text(24, "Recent Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 10);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 11);
      \u0275\u0275template(28, AdminDashboardComponent_Conditional_28_Template, 14, 0, "table", 12)(29, AdminDashboardComponent_Conditional_29_Template, 7, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(30, AdminDashboardComponent_Conditional_30_Template, 4, 0, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.greeting(), ", ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.adminName());
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.statCards());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.recentUsers().length, " new");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(19, ctx.recentUsers().length > 0 ? 19 : 20);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.recentOrders().length, " new");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(28, ctx.recentOrders().length > 0 ? 28 : 29);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(30, ctx.loading() ? 30 : -1);
    }
  }, dependencies: [CommonModule, NgClass, DecimalPipe, DatePipe, RouterModule, RouterLink], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  --red-primary: #e31b23;\n  --red-deep: #b11218;\n  --red-light: #fff5f5;\n  --red-soft: #ffe3e3;\n  --gray-900: #17191a;\n  --gray-700: #404546;\n  --gray-400: #a0a6a8;\n  --gray-100: #f3f5f6;\n  --white: #ffffff;\n  --shadow-sm: 0 4px 12px rgba(227, 27, 35, 0.04);\n  --shadow-md: 0 8px 24px rgba(227, 27, 35, 0.08);\n  --radius-md: 16px;\n  --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dashboard[_ngcontent-%COMP%] {\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  max-width: 1400px;\n  position: relative;\n}\n.greeting-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.greeting-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--gray-900);\n  margin: 0 0 6px;\n}\n.admin-name[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e31b23,\n      #c41e24);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.greeting-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-400);\n  margin: 0;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-md);\n  padding: 20px 22px 0;\n  box-shadow: var(--shadow-sm);\n  transition: var(--transition);\n  overflow: hidden;\n  position: relative;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-md);\n}\n.stat-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--gray-400);\n}\n.stat-link[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: var(--gray-400);\n  transition: var(--transition);\n}\n.stat-link[_ngcontent-%COMP%]:hover {\n  background: var(--red-soft);\n  color: var(--red-primary);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: 16px;\n  line-height: 1.2;\n}\n.stat-bar[_ngcontent-%COMP%] {\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #e31b23,\n      #ff6b6b);\n  margin: 0 -22px;\n}\n.activity-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.activity-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n}\n.activity-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 22px;\n  border-bottom: 1px solid var(--gray-100);\n}\n.activity-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--gray-900);\n  margin: 0;\n}\n.badge[_ngcontent-%COMP%] {\n  background: var(--red-soft);\n  color: var(--red-primary);\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 40px;\n}\n.activity-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.activity-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.activity-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--gray-400);\n  background: var(--gray-100);\n}\n.activity-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 22px;\n  font-size: 13px;\n  color: var(--gray-700);\n  border-bottom: 1px solid var(--gray-100);\n}\n.activity-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.row-num[_ngcontent-%COMP%] {\n  color: var(--gray-400);\n  font-weight: 500;\n  width: 30px;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #e31b23,\n      #ff6b6b);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--gray-900);\n}\n.user-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--gray-400);\n}\n.date-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 40px;\n  background: var(--gray-100);\n  color: var(--gray-700);\n}\n.order-amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--gray-900);\n}\n.status-pill[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 40px;\n  display: inline-block;\n}\n.status-pill.pending[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f59e0b;\n}\n.status-pill.active[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.status-pill.completed[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.status-pill.delivered[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.status-pill.cancelled[_ngcontent-%COMP%] {\n  background: var(--red-soft);\n  color: var(--red-primary);\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray-400);\n  font-size: 13px;\n  margin: 0;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.85);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--radius-md);\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid var(--gray-100);\n  border-top-color: var(--red-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--gray-400);\n  margin: 0;\n}\n@media (max-width: 1200px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 991px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .activity-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 576px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .greeting-text[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src\\app\\features\\admin\\admin-dashboard\\admin-dashboard.component.ts", lineNumber: 499 });
})();
export {
  AdminDashboardComponent
};
