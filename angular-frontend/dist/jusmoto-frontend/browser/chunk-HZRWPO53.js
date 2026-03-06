import {
  ApiService
} from "./chunk-GMJ7MHWM.js";
import {
  AuthService
} from "./chunk-R5YFSE7W.js";
import {
  RouterModule
} from "./chunk-6VP7BBRC.js";
import "./chunk-YVMT3HBM.js";
import "./chunk-NM77QJY5.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/admin/admin-dashboard/admin-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.status;
var _forTrack2 = ($index, $item) => $item.id;
function AdminDashboardComponent_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 26)(1, "path", 27);
  }
}
function AdminDashboardComponent_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 28)(1, "line", 29)(2, "path", 30);
  }
}
function AdminDashboardComponent_For_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 31)(1, "line", 32)(2, "line", 33)(3, "line", 34);
  }
}
function AdminDashboardComponent_For_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 35)(1, "polyline", 36);
  }
}
function AdminDashboardComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 22);
    \u0275\u0275template(3, AdminDashboardComponent_For_10_Conditional_3_Template, 2, 0)(4, AdminDashboardComponent_For_10_Conditional_4_Template, 3, 0)(5, AdminDashboardComponent_For_10_Conditional_5_Template, 4, 0)(6, AdminDashboardComponent_For_10_Conditional_6_Template, 2, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 23)(8, "div", 24);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 25);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", card_r1.iconBg);
    \u0275\u0275advance();
    \u0275\u0275attribute("stroke", card_r1.iconColor);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, card_r1.icon === "revenue" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, card_r1.icon === "orders" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, card_r1.icon === "today" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, card_r1.icon === "pending" ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.label);
  }
}
function AdminDashboardComponent_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 40);
    \u0275\u0275element(2, "span", 41);
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 43);
    \u0275\u0275element(6, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.getStatusColor(item_r2.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getStatusText(item_r2.status));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.getStatusBarWidth(item_r2.count), "%")("background", ctx_r2.getStatusColor(item_r2.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.count);
  }
}
function AdminDashboardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275repeaterCreate(1, AdminDashboardComponent_Conditional_19_For_2_Template, 9, 8, "div", 38, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39)(4, "span");
    \u0275\u0275text(5, "Total Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.ordersByStatus());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.totalStatusOrders());
  }
}
function AdminDashboardComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 47);
    \u0275\u0275element(2, "path", 48)(3, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No order data available");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_For_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 55)(1, "circle", 56)(2, "path", 57)(3, "path", 58);
  }
}
function AdminDashboardComponent_For_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 52);
  }
}
function AdminDashboardComponent_For_23_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 59)(1, "path", 60)(2, "path", 61);
  }
}
function AdminDashboardComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 51);
    \u0275\u0275template(3, AdminDashboardComponent_For_23_Conditional_3_Template, 4, 0)(4, AdminDashboardComponent_For_23_Conditional_4_Template, 1, 0, ":svg:path", 52)(5, AdminDashboardComponent_For_23_Conditional_5_Template, 3, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", card_r4.iconBg);
    \u0275\u0275advance();
    \u0275\u0275attribute("stroke", card_r4.iconColor);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, card_r4.icon === "users" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, card_r4.icon === "services" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, card_r4.icon === "cars" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r4.label);
  }
}
function AdminDashboardComponent_Conditional_32_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 63)(5, "div", 64);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "div", 65);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 66);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td")(13, "span", 67);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const i_r6 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getInitials(user_r5.first_name, user_r5.last_name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r5.first_name, " ", user_r5.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 6, user_r5.created_at, "dd MMM"));
  }
}
function AdminDashboardComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 19)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Joined");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, AdminDashboardComponent_Conditional_32_For_11_Template, 16, 9, "tr", null, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r2.recentUsers());
  }
}
function AdminDashboardComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 47);
    \u0275\u0275element(2, "path", 55)(3, "circle", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No recent users found");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_41_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 63)(5, "div", 68);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "div", 65);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 66);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td", 69);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 70);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r7 = ctx.$implicit;
    const i_r8 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getInitials(order_r7.first_name, order_r7.last_name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", order_r7.first_name, " ", order_r7.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r7.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(14, 8, order_r7.total, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.getStatusClass(order_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusText(order_r7.status), " ");
  }
}
function AdminDashboardComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 19)(1, "thead")(2, "tr")(3, "th");
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
    \u0275\u0275repeaterCreate(12, AdminDashboardComponent_Conditional_41_For_13_Template, 18, 11, "tr", null, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r2.recentOrders());
  }
}
function AdminDashboardComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 47);
    \u0275\u0275element(2, "path", 28)(3, "line", 29)(4, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No recent orders found");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 71);
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
  keyMetrics = signal([]);
  secondaryStats = signal([]);
  ordersByStatus = signal([]);
  recentUsers = signal([]);
  recentOrders = signal([]);
  totalStatusOrders = signal(0);
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
          this.keyMetrics.set([
            {
              label: "Total Revenue",
              value: "\u20B9" + this.fmtCurrency(d.total_revenue),
              icon: "revenue",
              iconBg: "#d1fae5",
              iconColor: "#059669"
            },
            {
              label: "Total Orders",
              value: this.fmt(d.total_orders),
              icon: "orders",
              iconBg: "#e0f2fe",
              iconColor: "#0284c7"
            },
            {
              label: "Today's Orders",
              value: this.fmt(d.today_orders),
              icon: "today",
              iconBg: "#fff8e1",
              iconColor: "#f59e0b"
            },
            {
              label: "Pending Orders",
              value: this.fmt(d.pending_orders),
              icon: "pending",
              iconBg: "#ffe3e3",
              iconColor: "#e31b23"
            }
          ]);
          this.secondaryStats.set([
            {
              label: "Total Users",
              value: this.fmt(d.total_users),
              icon: "users",
              iconBg: "#ede9fe",
              iconColor: "#7c3aed"
            },
            {
              label: "Total Services",
              value: this.fmt(d.total_services),
              icon: "services",
              iconBg: "#fef3c7",
              iconColor: "#d97706"
            },
            {
              label: "Total Cars",
              value: this.fmt(d.total_cars),
              icon: "cars",
              iconBg: "#e0f2fe",
              iconColor: "#0284c7"
            }
          ]);
          const statusData = d.orders_by_status || [];
          this.ordersByStatus.set(statusData);
          const totalOrders = statusData.reduce((sum, item) => sum + (Number(item.count) || 0), 0);
          this.totalStatusOrders.set(totalOrders);
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
  // --- Helpers ---
  fmt(val) {
    const n = Number(val) || 0;
    return n.toLocaleString("en-IN");
  }
  fmtCurrency(val) {
    const n = Number(val) || 0;
    return n.toLocaleString("en-IN", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }
  getStatusBarWidth(count) {
    const total = this.totalStatusOrders();
    if (total === 0)
      return 0;
    return Math.max(2, count / total * 100);
  }
  getStatusColor(status) {
    const map = {
      0: "#f59e0b",
      1: "#0284c7",
      2: "#059669",
      3: "#10b981",
      4: "#e31b23"
    };
    return map[status] || "#a0a6a8";
  }
  getInitials(first, last) {
    return ((first?.[0] || "") + (last?.[0] || "")).toUpperCase() || "?";
  }
  getStatusClass(status) {
    const map = {
      0: "pending",
      1: "confirmed",
      2: "completed",
      3: "delivered",
      4: "cancelled"
    };
    return map[status] || "pending";
  }
  getStatusText(status) {
    const map = {
      0: "Pending",
      1: "Confirmed",
      2: "Completed",
      3: "Delivered",
      4: "Cancelled"
    };
    return map[status] || "Unknown";
  }
  static \u0275fac = function AdminDashboardComponent_Factory(t) {
    return new (t || _AdminDashboardComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 44, vars: 8, consts: [[1, "dashboard"], [1, "greeting-section"], [1, "greeting-text"], [1, "admin-name"], [1, "greeting-sub"], [1, "key-metrics-grid"], [1, "key-metric-card"], [1, "charts-grid"], [1, "chart-card"], [1, "chart-header"], [1, "chart-badge"], [1, "chart-body"], [1, "secondary-stats-grid"], [1, "secondary-stat-card"], [1, "activity-grid"], [1, "activity-card"], [1, "activity-header"], [1, "badge"], [1, "activity-body"], [1, "activity-table"], [1, "loading-overlay"], [1, "metric-icon-wrap"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "metric-info"], [1, "metric-value"], [1, "metric-label"], ["x1", "12", "y1", "1", "x2", "12", "y2", "23"], ["d", "M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"], ["d", "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["d", "M16 10a4 4 0 01-8 0"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], [1, "status-bars-list"], [1, "status-bar-row"], [1, "status-total"], [1, "status-bar-label"], [1, "status-dot"], [1, "status-name"], [1, "status-bar-track"], [1, "status-bar-fill"], [1, "status-bar-count"], [1, "empty-state"], ["width", "40", "height", "40", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#a0a6a8", "stroke-width", "1.5"], ["d", "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["d", "M9 12l2 2 4-4"], [1, "secondary-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"], [1, "secondary-value"], [1, "secondary-label"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 00-3-3.87"], ["d", "M16 3.13a4 4 0 010 7.75"], ["x", "1", "y", "3", "width", "15", "height", "13", "rx", "2"], ["d", "M16 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2"], ["d", "M6 21V3"], [1, "row-num"], [1, "user-cell"], [1, "avatar"], [1, "user-name"], [1, "user-email"], [1, "date-badge"], [1, "avatar", "avatar-sm"], [1, "order-amount"], [1, "status-pill", 3, "ngClass"], [1, "spinner"]], template: function AdminDashboardComponent_Template(rf, ctx) {
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
      \u0275\u0275repeaterCreate(9, AdminDashboardComponent_For_10_Template, 12, 9, "div", 6, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h3");
      \u0275\u0275text(15, "Order Distribution");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 10);
      \u0275\u0275text(17, "By Status");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 11);
      \u0275\u0275template(19, AdminDashboardComponent_Conditional_19_Template, 8, 1)(20, AdminDashboardComponent_Conditional_20_Template, 6, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12);
      \u0275\u0275repeaterCreate(22, AdminDashboardComponent_For_23_Template, 10, 8, "div", 13, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 14)(25, "div", 15)(26, "div", 16)(27, "h3");
      \u0275\u0275text(28, "Recent Users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 17);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 18);
      \u0275\u0275template(32, AdminDashboardComponent_Conditional_32_Template, 12, 0, "table", 19)(33, AdminDashboardComponent_Conditional_33_Template, 6, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 15)(35, "div", 16)(36, "h3");
      \u0275\u0275text(37, "Recent Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 17);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 18);
      \u0275\u0275template(41, AdminDashboardComponent_Conditional_41_Template, 14, 0, "table", 19)(42, AdminDashboardComponent_Conditional_42_Template, 7, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(43, AdminDashboardComponent_Conditional_43_Template, 4, 0, "div", 20);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.greeting(), ", ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.adminName());
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.keyMetrics());
      \u0275\u0275advance(10);
      \u0275\u0275conditional(19, ctx.ordersByStatus().length > 0 ? 19 : 20);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.secondaryStats());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.recentUsers().length, " new");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(32, ctx.recentUsers().length > 0 ? 32 : 33);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.recentOrders().length, " new");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(41, ctx.recentOrders().length > 0 ? 41 : 42);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(43, ctx.loading() ? 43 : -1);
    }
  }, dependencies: [CommonModule, NgClass, DecimalPipe, DatePipe, RouterModule], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  --red-primary: #e31b23;\n  --red-deep: #b11218;\n  --red-light: #fff5f5;\n  --red-soft: #ffe3e3;\n  --green-primary: #059669;\n  --green-bg: #d1fae5;\n  --blue-primary: #0284c7;\n  --blue-bg: #e0f2fe;\n  --orange-primary: #f59e0b;\n  --orange-bg: #fff8e1;\n  --gray-900: #17191a;\n  --gray-700: #404546;\n  --gray-400: #a0a6a8;\n  --gray-200: #e5e7e8;\n  --gray-100: #f3f5f6;\n  --white: #ffffff;\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);\n  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);\n  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.1);\n  --radius-md: 14px;\n  --radius-sm: 10px;\n  --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dashboard[_ngcontent-%COMP%] {\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  max-width: 1400px;\n  position: relative;\n}\n.greeting-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.greeting-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin: 0 0 6px;\n}\n.admin-name[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e31b23,\n      #c41e24);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.greeting-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gray-400);\n  margin: 0;\n}\n.key-metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 18px;\n  margin-bottom: 24px;\n}\n.key-metric-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-md);\n  padding: 22px;\n  box-shadow: var(--shadow-sm);\n  transition: var(--transition);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  cursor: default;\n  border: 1px solid transparent;\n}\n.key-metric-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-lg);\n  border-color: var(--gray-200);\n}\n.metric-icon-wrap[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.metric-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--gray-900);\n  line-height: 1.2;\n}\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--gray-400);\n  margin-top: 2px;\n}\n.charts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px;\n  margin-bottom: 24px;\n  max-width: 600px;\n}\n.chart-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n}\n.chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 22px;\n  border-bottom: 1px solid var(--gray-100);\n}\n.chart-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--gray-900);\n  margin: 0;\n}\n.chart-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 40px;\n  background: var(--gray-100);\n  color: var(--gray-400);\n}\n.chart-body[_ngcontent-%COMP%] {\n  padding: 20px 22px;\n}\n.status-bars-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.status-bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.status-bar-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 100px;\n  flex-shrink: 0;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.status-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--gray-700);\n}\n.status-bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 10px;\n  background: var(--gray-100);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.status-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 10px;\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  min-width: 4px;\n}\n.status-bar-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--gray-900);\n  min-width: 36px;\n  text-align: right;\n}\n.status-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 18px;\n  padding-top: 14px;\n  border-top: 1px solid var(--gray-100);\n  font-size: 13px;\n  color: var(--gray-400);\n}\n.status-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--gray-900);\n}\n.secondary-stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n  margin-bottom: 24px;\n}\n.secondary-stat-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-md);\n  padding: 22px;\n  box-shadow: var(--shadow-sm);\n  transition: var(--transition);\n  text-align: center;\n  cursor: default;\n}\n.secondary-stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n.secondary-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n}\n.secondary-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--gray-900);\n  line-height: 1.2;\n}\n.secondary-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--gray-400);\n  margin-top: 4px;\n}\n.activity-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px;\n  margin-bottom: 24px;\n}\n.activity-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n}\n.activity-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 22px;\n  border-bottom: 1px solid var(--gray-100);\n}\n.activity-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--gray-900);\n  margin: 0;\n}\n.badge[_ngcontent-%COMP%] {\n  background: var(--red-soft);\n  color: var(--red-primary);\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 40px;\n}\n.activity-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.activity-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.activity-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--gray-400);\n  background: var(--gray-100);\n}\n.activity-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 22px;\n  font-size: 13px;\n  color: var(--gray-700);\n  border-bottom: 1px solid var(--gray-100);\n}\n.activity-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.15s ease;\n}\n.activity-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbfb;\n}\n.activity-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.row-num[_ngcontent-%COMP%] {\n  color: var(--gray-400);\n  font-weight: 500;\n  width: 30px;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #e31b23,\n      #ff6b6b);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.avatar.avatar-sm[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  font-size: 11px;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--gray-900);\n}\n.user-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--gray-400);\n}\n.date-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 40px;\n  background: var(--gray-100);\n  color: var(--gray-700);\n}\n.order-amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--gray-900);\n}\n.status-pill[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 40px;\n  display: inline-block;\n}\n.status-pill.pending[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f59e0b;\n}\n.status-pill.confirmed[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.status-pill.completed[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.status-pill.delivered[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.status-pill.cancelled[_ngcontent-%COMP%] {\n  background: var(--red-soft);\n  color: var(--red-primary);\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray-400);\n  font-size: 13px;\n  margin: 0;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.85);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--radius-md);\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid var(--gray-100);\n  border-top-color: var(--red-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--gray-400);\n  margin: 0;\n}\n@media (max-width: 1200px) {\n  .key-metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 991px) {\n  .secondary-stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .activity-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .secondary-stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 576px) {\n  .key-metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .secondary-stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .greeting-text[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .metric-value[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .status-bar-label[_ngcontent-%COMP%] {\n    min-width: 80px;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src\\app\\features\\admin\\admin-dashboard\\admin-dashboard.component.ts", lineNumber: 770 });
})();
export {
  AdminDashboardComponent
};
