import {
  AuthService
} from "./chunk-R5YFSE7W.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-6VP7BBRC.js";
import {
  environment
} from "./chunk-YVMT3HBM.js";
import {
  HttpClient
} from "./chunk-NM77QJY5.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  NgClass,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/client/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/client/orders", a0];
function ClientDashboardComponent_For_82_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function ClientDashboardComponent_For_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, ClientDashboardComponent_For_82_Conditional_10_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const car_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((car_r1.brand == null ? null : car_r1.brand.name) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((car_r1.car == null ? null : car_r1.car.name) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((car_r1.variant == null ? null : car_r1.variant.name) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(car_r1.registration_number || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(10, car_r1.is_default === 1 ? 10 : -1);
  }
}
function ClientDashboardComponent_ForEmpty_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 58);
    \u0275\u0275element(3, "path", 59)(4, "path", 60)(5, "path", 61)(6, "path", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "No cars added yet. Add your first car to get started!");
    \u0275\u0275elementEnd()()();
  }
}
function ClientDashboardComponent_Conditional_130_For_19_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", order_r2.items.length - 1, " more");
  }
}
function ClientDashboardComponent_Conditional_130_For_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275template(1, ClientDashboardComponent_Conditional_130_For_19_Conditional_4_Conditional_1_Template, 2, 1, "span", 71);
  }
  if (rf & 2) {
    const order_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", (order_r2.items[0].service == null ? null : order_r2.items[0].service.name) || order_r2.items[0].name || "Service", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(1, order_r2.items.length > 1 ? 1 : -1);
  }
}
function ClientDashboardComponent_Conditional_130_For_19_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " N/A ");
  }
}
function ClientDashboardComponent_Conditional_130_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 64);
    \u0275\u0275template(4, ClientDashboardComponent_Conditional_130_For_19_Conditional_4_Template, 2, 2)(5, ClientDashboardComponent_Conditional_130_For_19_Conditional_5_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 65);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 66);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 67);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "a", 68);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 69);
    \u0275\u0275element(21, "path", 70)(22, "circle", 38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r2.invoice_number || "ORD-" + order_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, order_r2.items && order_r2.items.length > 0 ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(8, 12, order_r2.total, "INR", "symbol", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("complete", order_r2.payment_status === 1)("pending", order_r2.payment_status !== 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r2.payment_status === 1 ? "Paid" : "Unpaid", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 17, order_r2.created_at, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.getStatusClass(order_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusText(order_r2.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c0, order_r2.id));
  }
}
function ClientDashboardComponent_Conditional_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 54)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Invoice #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, ClientDashboardComponent_Conditional_130_For_19_Template, 23, 22, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r2.orders());
  }
}
function ClientDashboardComponent_Conditional_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 73);
    \u0275\u0275element(2, "path", 10)(3, "rect", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No orders yet. Book a service to get started!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 74);
    \u0275\u0275text(7, "Browse Services");
    \u0275\u0275elementEnd()();
  }
}
var ClientDashboardComponent = class _ClientDashboardComponent {
  http = inject(HttpClient);
  authService = inject(AuthService);
  greeting = signal("");
  userName = signal("");
  stats = signal({
    totalOrders: 0,
    pendingOrders: 0,
    inProgressOrders: 0,
    completedOrders: 0,
    cancelledOrders: 0
  });
  cars = signal([]);
  orders = signal([]);
  ngOnInit() {
    this.setGreeting();
    this.setUserName();
    this.loadDashboardData();
  }
  setGreeting() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    if (hour < 12) {
      this.greeting.set("Good Morning");
    } else if (hour < 18) {
      this.greeting.set("Good Afternoon");
    } else {
      this.greeting.set("Good Evening");
    }
  }
  setUserName() {
    const user = this.authService.currentUser;
    this.userName.set(user?.first_name || "there");
  }
  loadDashboardData() {
    this.http.get(`${environment.apiUrl}/user/dashboard`).subscribe({
      next: (response) => {
        if (response.success) {
          const data = response.data;
          this.stats.set({
            totalOrders: data.totalOrders || 0,
            pendingOrders: data.pendingOrders || 0,
            inProgressOrders: data.inProgressOrders || 0,
            completedOrders: data.completedOrders || 0,
            cancelledOrders: data.cancelledOrders || 0
          });
          this.cars.set(data.cars || []);
          this.orders.set(data.orders || []);
        }
      },
      error: () => {
        this.stats.set({
          totalOrders: 0,
          pendingOrders: 0,
          inProgressOrders: 0,
          completedOrders: 0,
          cancelledOrders: 0
        });
      }
    });
  }
  getStatusClass(status) {
    const classes = {
      0: "status-pending",
      1: "status-accepted",
      2: "status-in-progress",
      3: "status-completed",
      4: "status-cancelled"
    };
    return classes[status] || "status-pending";
  }
  getStatusText(status) {
    const texts = {
      0: "Pending",
      1: "Accepted",
      2: "In Progress",
      3: "Completed",
      4: "Cancelled"
    };
    return texts[status] || "Unknown";
  }
  static \u0275fac = function ClientDashboardComponent_Factory(t) {
    return new (t || _ClientDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientDashboardComponent, selectors: [["app-client-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 132, vars: 9, consts: [[1, "dashboard-page"], [1, "page-header"], [1, "greeting"], [1, "stats-wrapper"], [1, "stats-card"], [1, "card-content"], [1, "card-label"], [1, "card-value"], [1, "card-icon", "red"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "1"], ["d", "M9 12h6M9 16h6"], [1, "card-icon", "yellow"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], [1, "card-icon", "blue"], ["d", "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"], [1, "card-icon", "green"], ["d", "M22 11.08V12a10 10 0 11-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "card-icon", "gray"], ["d", "M15 9l-6 6M9 9l6 6"], [1, "row-layout"], [1, "col-left"], [1, "section-header"], [1, "section-title"], ["routerLink", "/client/my-cars", 1, "btn-manage"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "9 18 15 12 9 6"], [1, "table-wrapper"], [1, "data-table"], [1, "col-right"], [1, "quick-actions"], [1, "action-buttons"], ["routerLink", "/services", 1, "action-btn"], [1, "action-icon", "red-bg"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"], [1, "action-text"], [1, "action-title"], [1, "action-desc"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "action-arrow"], ["routerLink", "/client/traffic-challan/check", 1, "action-btn"], [1, "action-icon", "yellow-bg"], ["d", "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["routerLink", "/client/tickets/new", 1, "action-btn"], [1, "action-icon", "blue-bg"], ["d", "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"], [1, "orders-section"], [1, "data-table", "orders-table"], [1, "reg-number"], [1, "default-badge"], ["colspan", "5", 1, "empty-state"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M7 17m-2 0a2 2 0 104 0 2 2 0 10-4 0"], ["d", "M17 17m-2 0a2 2 0 104 0 2 2 0 10-4 0"], ["d", "M5 17H3v-6l2-5h9l4 5h1a2 2 0 012 2v4h-2"], ["d", "M9 17h6"], [1, "invoice-cell"], [1, "service-cell"], [1, "amount-cell"], [1, "payment-badge"], [1, "status-badge", 3, "ngClass"], ["title", "View Order", 1, "view-btn", 3, "routerLink"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], [1, "more-badge"], [1, "empty-orders"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["routerLink", "/services", 1, "btn-primary"]], template: function ClientDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Welcome back! Here's what's happening with your account.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "span", 6);
      \u0275\u0275text(10, "Total Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h6", 7);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 9);
      \u0275\u0275element(15, "path", 10)(16, "rect", 11)(17, "path", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "div", 4)(19, "div", 5)(20, "span", 6);
      \u0275\u0275text(21, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "h6", 7);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 9);
      \u0275\u0275element(26, "circle", 14)(27, "polyline", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(28, "div", 4)(29, "div", 5)(30, "span", 6);
      \u0275\u0275text(31, "In Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "h6", 7);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 9);
      \u0275\u0275element(36, "path", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "div", 4)(38, "div", 5)(39, "span", 6);
      \u0275\u0275text(40, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "h6", 7);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(44, "svg", 9);
      \u0275\u0275element(45, "path", 19)(46, "polyline", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(47, "div", 4)(48, "div", 5)(49, "span", 6);
      \u0275\u0275text(50, "Cancelled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "h6", 7);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 21);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(54, "svg", 9);
      \u0275\u0275element(55, "circle", 14)(56, "path", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(57, "div", 23)(58, "div", 24)(59, "div", 25)(60, "h3", 26);
      \u0275\u0275text(61, "My Cars");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "a", 27);
      \u0275\u0275text(63, " Manage Cars ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(64, "svg", 28);
      \u0275\u0275element(65, "polyline", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(66, "div", 30)(67, "table", 31)(68, "thead")(69, "tr")(70, "th");
      \u0275\u0275text(71, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th");
      \u0275\u0275text(73, "Car");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th");
      \u0275\u0275text(75, "Variant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th");
      \u0275\u0275text(77, "Reg. Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th");
      \u0275\u0275text(79, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "tbody");
      \u0275\u0275repeaterCreate(81, ClientDashboardComponent_For_82_Template, 11, 5, "tr", null, _forTrack0, false, ClientDashboardComponent_ForEmpty_83_Template, 9, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(84, "div", 32)(85, "div", 33)(86, "h4", 26);
      \u0275\u0275text(87, "Quick Actions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 34)(89, "a", 35)(90, "div", 36);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(91, "svg", 37);
      \u0275\u0275element(92, "circle", 38)(93, "path", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(94, "div", 40)(95, "span", 41);
      \u0275\u0275text(96, "Book Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "span", 42);
      \u0275\u0275text(98, "Schedule a car service");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(99, "svg", 43);
      \u0275\u0275element(100, "polyline", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(101, "a", 44)(102, "div", 45);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(103, "svg", 37);
      \u0275\u0275element(104, "path", 46)(105, "polyline", 47)(106, "line", 48)(107, "line", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(108, "div", 40)(109, "span", 41);
      \u0275\u0275text(110, "Check Challan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "span", 42);
      \u0275\u0275text(112, "View traffic challans");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(113, "svg", 43);
      \u0275\u0275element(114, "polyline", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(115, "a", 50)(116, "div", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(117, "svg", 37);
      \u0275\u0275element(118, "path", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(119, "div", 40)(120, "span", 41);
      \u0275\u0275text(121, "Service Request");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "span", 42);
      \u0275\u0275text(123, "Get support help");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(124, "svg", 43);
      \u0275\u0275element(125, "polyline", 29);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(126, "div", 53)(127, "h4", 26);
      \u0275\u0275text(128, "Recent Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "div", 30);
      \u0275\u0275template(130, ClientDashboardComponent_Conditional_130_Template, 20, 0, "table", 54)(131, ClientDashboardComponent_Conditional_131_Template, 8, 0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.greeting(), ", ", ctx.userName(), "");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.stats().totalOrders);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.stats().pendingOrders);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.stats().inProgressOrders);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.stats().completedOrders);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.stats().cancelledOrders);
      \u0275\u0275advance(29);
      \u0275\u0275repeater(ctx.cars());
      \u0275\u0275advance(49);
      \u0275\u0275conditional(130, ctx.orders().length > 0 ? 130 : 131);
    }
  }, dependencies: [CommonModule, NgClass, CurrencyPipe, DatePipe, RouterModule, RouterLink], styles: ['\n\n.dashboard-page[_ngcontent-%COMP%] {\n  max-width: 1400px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.greeting[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: #1a1a1a;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n  font-size: 14px;\n}\n.stats-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.stats-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.stats-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.card-label[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 13px;\n  font-weight: 500;\n  display: block;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.card-value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  margin: 0;\n  color: #1a1a1a;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.card-icon.red[_ngcontent-%COMP%] {\n  background: rgba(227, 27, 35, 0.1);\n  color: #e31b23;\n}\n.card-icon.yellow[_ngcontent-%COMP%] {\n  background: rgba(255, 177, 0, 0.1);\n  color: #FFB100;\n}\n.card-icon.blue[_ngcontent-%COMP%] {\n  background: rgba(15, 100, 250, 0.1);\n  color: #0F64FA;\n}\n.card-icon.green[_ngcontent-%COMP%] {\n  background: rgba(0, 178, 137, 0.1);\n  color: #00B289;\n}\n.card-icon.gray[_ngcontent-%COMP%] {\n  background: rgba(108, 117, 125, 0.1);\n  color: #6c757d;\n}\n.card-icon.purple[_ngcontent-%COMP%] {\n  background: rgba(111, 66, 193, 0.1);\n  color: #6f42c1;\n}\n.row-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 24px;\n  margin-bottom: 28px;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n  color: #1a1a1a;\n}\n.btn-manage[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: #e31b23;\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 14px;\n  transition: gap 0.2s;\n}\n.btn-manage[_ngcontent-%COMP%]:hover {\n  gap: 8px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 12px;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid #f0f0f0;\n  font-size: 14px;\n  color: #333;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.reg-number[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-weight: 600;\n  color: #1a1a1a;\n  letter-spacing: 0.5px;\n}\n.default-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  background: rgba(227, 27, 35, 0.1);\n  color: #e31b23;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #999;\n  padding: 40px 20px !important;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #ccc;\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  height: 100%;\n}\n.quick-actions[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  background: #f8f9fa;\n  border-radius: 10px;\n  color: #333;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f1f3;\n  transform: translateX(4px);\n}\n.action-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.action-icon.red-bg[_ngcontent-%COMP%] {\n  background: rgba(227, 27, 35, 0.1);\n  color: #e31b23;\n}\n.action-icon.yellow-bg[_ngcontent-%COMP%] {\n  background: rgba(255, 177, 0, 0.1);\n  color: #FFB100;\n}\n.action-icon.blue-bg[_ngcontent-%COMP%] {\n  background: rgba(15, 100, 250, 0.1);\n  color: #0F64FA;\n}\n.action-icon.purple-bg[_ngcontent-%COMP%] {\n  background: rgba(111, 66, 193, 0.1);\n  color: #6f42c1;\n}\n.action-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.action-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: #1a1a1a;\n}\n.action-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  margin-top: 2px;\n}\n.action-arrow[_ngcontent-%COMP%] {\n  color: #ccc;\n  flex-shrink: 0;\n}\n.orders-section[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.orders-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.invoice-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.service-cell[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.more-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 2px 8px;\n  background: #f0f0f0;\n  border-radius: 10px;\n  font-size: 11px;\n  color: #666;\n  font-weight: 500;\n}\n.amount-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.payment-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.payment-badge.complete[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.payment-badge.pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.status-badge.status-pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-accepted[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.status-badge.status-in-progress[_ngcontent-%COMP%] {\n  background: #cce5ff;\n  color: #004085;\n}\n.status-badge.status-completed[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-cancelled[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.view-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: #f0f0f0;\n  border-radius: 8px;\n  color: #555;\n  transition: all 0.2s;\n}\n.view-btn[_ngcontent-%COMP%]:hover {\n  background: #e31b23;\n  color: #fff;\n}\n.empty-orders[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.empty-orders[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #ddd;\n  margin-bottom: 16px;\n}\n.empty-orders[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 20px;\n  font-size: 15px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #e31b23;\n  color: #fff;\n  padding: 12px 28px;\n  border-radius: 8px;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 14px;\n  transition: background 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #c8151c;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@media (max-width: 1200px) {\n  .stats-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 991px) {\n  .row-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stats-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .orders-table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n    white-space: nowrap;\n  }\n}\n@media (max-width: 576px) {\n  .stats-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .data-table[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n  .greeting[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDashboardComponent, { className: "ClientDashboardComponent", filePath: "src\\app\\features\\client\\dashboard\\dashboard.component.ts", lineNumber: 763 });
})();
export {
  ClientDashboardComponent
};
