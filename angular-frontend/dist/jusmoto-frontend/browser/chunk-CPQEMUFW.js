import {
  ApiService
} from "./chunk-XSC2IEYW.js";
import "./chunk-GUDC7RY7.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-CMH3GDQY.js";
import "./chunk-TT3LTPCS.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/client/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/client/orders", a0];
function ClientDashboardComponent_For_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "img", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const car_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (car_r1.car == null ? null : car_r1.car.image) || "/assets/images/car-placeholder.png", \u0275\u0275sanitizeUrl)("alt", car_r1.car == null ? null : car_r1.car.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((car_r1.car == null ? null : car_r1.car.name) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(car_r1.registration_number || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((car_r1.fuelType == null ? null : car_r1.fuelType.name) || "-");
  }
}
function ClientDashboardComponent_ForEmpty_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2, " No cars added yet ");
    \u0275\u0275elementEnd()();
  }
}
function ClientDashboardComponent_Conditional_96_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 48);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "a", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 50);
    \u0275\u0275element(17, "path", 51)(18, "circle", 33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ID: ", order_r2.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (order_r2.orderLocations == null ? null : order_r2.orderLocations.address) || (order_r2.outletLocation == null ? null : order_r2.outletLocation.address) || "N/A", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("complete", order_r2.payment_status === 1)("pending", order_r2.payment_status !== 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r2.payment_status === 1 ? "Complete" : "Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 11, order_r2.date || order_r2.created_at, "dd-MM-yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.getStatusClass(order_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusText(order_r2.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, order_r2.id));
  }
}
function ClientDashboardComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 43)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Order Id");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, ClientDashboardComponent_Conditional_96_For_17_Template, 19, 16, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.orders());
  }
}
function ClientDashboardComponent_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 53);
    \u0275\u0275element(2, "circle", 14)(3, "line", 54)(4, "line", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No orders found. Start ordering to see your order history!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 56);
    \u0275\u0275text(8, "Browse Services");
    \u0275\u0275elementEnd()();
  }
}
var ClientDashboardComponent = class _ClientDashboardComponent {
  api;
  greeting = signal("");
  stats = signal({
    totalOrders: 0,
    cancelledOrders: 0,
    pendingOrders: 0,
    completedOrders: 0
  });
  cars = signal([]);
  orders = signal([]);
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.setGreeting();
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
  loadDashboardData() {
    this.api.get("/user/dashboard").subscribe({
      next: (response) => {
        if (response.success) {
          this.stats.set({
            totalOrders: response.data.totalOrders || 0,
            cancelledOrders: response.data.cancelledOrders || 0,
            pendingOrders: response.data.pendingOrders || 0,
            completedOrders: response.data.completedOrders || 0
          });
          this.cars.set(response.data.cars || []);
          this.orders.set(response.data.orders || []);
        }
      },
      error: () => {
        this.stats.set({
          totalOrders: 0,
          cancelledOrders: 0,
          pendingOrders: 0,
          completedOrders: 0
        });
      }
    });
  }
  getStatusClass(status) {
    const classes = {
      0: "pending",
      1: "active",
      2: "complete",
      3: "delivered",
      4: "cancelled"
    };
    return classes[status] || "pending";
  }
  getStatusText(status) {
    const texts = {
      0: "Pending",
      1: "Active",
      2: "Completed",
      3: "Delivered",
      4: "Cancelled"
    };
    return texts[status] || "Unknown";
  }
  static \u0275fac = function ClientDashboardComponent_Factory(t) {
    return new (t || _ClientDashboardComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientDashboardComponent, selectors: [["app-client-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 98, vars: 7, consts: [[1, "dashboard-page"], [1, "page-header"], ["id", "greeting", 1, "greeting"], [1, "stats-wrapper"], [1, "stats-card"], [1, "card-content"], [1, "card-label"], [1, "card-value"], [1, "card-icon", "orange"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "1"], ["d", "M9 12h6M9 16h6"], [1, "card-icon", "blue"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M15 9l-6 6M9 9l6 6"], [1, "card-icon", "yellow"], ["points", "12 6 12 12 16 14"], [1, "card-icon", "green"], ["d", "M22 11.08V12a10 10 0 11-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "row-layout"], [1, "col-left"], [1, "section-header"], [1, "section-title"], ["routerLink", "/client/my-cars", 1, "btn-add"], [1, "table-wrapper"], [1, "data-table"], [1, "col-right"], [1, "quick-actions"], [1, "action-buttons"], ["routerLink", "/services", 1, "action-btn"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"], ["routerLink", "/client/traffic-challan/check", 1, "action-btn"], ["d", "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["routerLink", "/client/tickets/new", 1, "action-btn"], ["d", "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"], [1, "orders-section"], [1, "data-table", "orders-table"], [1, "car-image", 3, "src", "alt"], ["colspan", "4", 1, "empty-state"], [1, "address-cell"], [1, "payment-badge"], [1, "status-badge", 3, "ngClass"], [1, "view-btn", 3, "routerLink"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], [1, "empty-orders"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], ["routerLink", "/services", 1, "btn-primary"]], template: function ClientDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Manage your dashboard here");
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
      \u0275\u0275text(21, "Order Cancelled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "h6", 7);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 9);
      \u0275\u0275element(26, "circle", 14)(27, "path", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(28, "div", 4)(29, "div", 5)(30, "span", 6);
      \u0275\u0275text(31, "Order Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "h6", 7);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 9);
      \u0275\u0275element(36, "circle", 14)(37, "polyline", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(38, "div", 4)(39, "div", 5)(40, "span", 6);
      \u0275\u0275text(41, "Order Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "h6", 7);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(45, "svg", 9);
      \u0275\u0275element(46, "path", 19)(47, "polyline", 20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(48, "div", 21)(49, "div", 22)(50, "div", 23)(51, "h3", 24);
      \u0275\u0275text(52, "My Cars");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 25);
      \u0275\u0275text(54, " + Add Car ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 26)(56, "table", 27)(57, "thead")(58, "tr")(59, "th");
      \u0275\u0275text(60, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th");
      \u0275\u0275text(62, "Car Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th");
      \u0275\u0275text(64, "Registration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th");
      \u0275\u0275text(66, "Fuel Type");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "tbody");
      \u0275\u0275repeaterCreate(68, ClientDashboardComponent_For_69_Template, 9, 5, "tr", null, _forTrack0, false, ClientDashboardComponent_ForEmpty_70_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "div", 28)(72, "div", 29)(73, "h4");
      \u0275\u0275text(74, "Quick Actions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 30)(76, "a", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(77, "svg", 32);
      \u0275\u0275element(78, "circle", 33)(79, "path", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(80, " Book Service ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(81, "a", 35);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(82, "svg", 32);
      \u0275\u0275element(83, "path", 36)(84, "polyline", 37)(85, "line", 38)(86, "line", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275text(87, " Check Challan ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(88, "a", 40);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(89, "svg", 32);
      \u0275\u0275element(90, "path", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275text(91, " Support ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(92, "div", 42)(93, "h4", 24);
      \u0275\u0275text(94, "Recent Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 26);
      \u0275\u0275template(96, ClientDashboardComponent_Conditional_96_Template, 18, 0, "table", 43)(97, ClientDashboardComponent_Conditional_97_Template, 9, 0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.greeting());
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.stats().totalOrders);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.stats().cancelledOrders);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.stats().pendingOrders);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.stats().completedOrders);
      \u0275\u0275advance(25);
      \u0275\u0275repeater(ctx.cars());
      \u0275\u0275advance(28);
      \u0275\u0275conditional(96, ctx.orders().length > 0 ? 96 : 97);
    }
  }, dependencies: [CommonModule, NgClass, DatePipe, RouterModule, RouterLink], styles: ["\n\n.dashboard-page[_ngcontent-%COMP%] {\n  max-width: 1400px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.greeting[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0 0 8px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.stats-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  background: #f8f9fa;\n  padding: 16px;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.stats-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  background: #fff;\n  border-radius: 8px;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-label[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  display: block;\n  margin-bottom: 8px;\n}\n.card-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n  color: #1a1a1a;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-icon.orange[_ngcontent-%COMP%] {\n  background: rgba(255, 107, 44, 0.1);\n  color: #FF6B2C;\n}\n.card-icon.blue[_ngcontent-%COMP%] {\n  background: rgba(15, 100, 250, 0.1);\n  color: #0F64FA;\n}\n.card-icon.yellow[_ngcontent-%COMP%] {\n  background: rgba(255, 177, 0, 0.1);\n  color: #FFB100;\n}\n.card-icon.green[_ngcontent-%COMP%] {\n  background: rgba(0, 178, 137, 0.1);\n  color: #00B289;\n}\n.row-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  margin-bottom: 24px;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n}\n.btn-add[_ngcontent-%COMP%] {\n  background: #1a1a1a;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  background: #333;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 14px 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 13px;\n  color: #666;\n  border-bottom: 1px solid #e5e7eb;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid #f0f0f0;\n  font-size: 14px;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.car-image[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 35px;\n  object-fit: cover;\n  border-radius: 4px;\n  background: #f5f5f5;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #999;\n  padding: 30px !important;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.quick-actions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 16px;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  color: #333;\n  text-decoration: none;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateX(4px);\n}\n.orders-section[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.orders-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.address-cell[_ngcontent-%COMP%] {\n  max-width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.payment-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.payment-badge.complete[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.payment-badge.pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.status-badge.pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.active[_ngcontent-%COMP%], .status-badge.in-progress[_ngcontent-%COMP%] {\n  background: #cce5ff;\n  color: #004085;\n}\n.status-badge.complete[_ngcontent-%COMP%], .status-badge.delivered[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.cancelled[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.view-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: #f0f0f0;\n  border-radius: 6px;\n  color: #333;\n  transition: all 0.2s;\n}\n.view-btn[_ngcontent-%COMP%]:hover {\n  background: #0066cc;\n  color: #fff;\n}\n.empty-orders[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.empty-orders[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #ccc;\n  margin-bottom: 16px;\n}\n.empty-orders[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 20px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #0066cc;\n  color: #fff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  text-decoration: none;\n  font-weight: 500;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0052a3;\n}\n@media (max-width: 991px) {\n  .row-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stats-card[_ngcontent-%COMP%] {\n    min-width: calc(50% - 8px);\n  }\n}\n@media (max-width: 576px) {\n  .stats-card[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n  .data-table[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDashboardComponent, { className: "ClientDashboardComponent", filePath: "src\\app\\features\\client\\dashboard\\dashboard.component.ts", lineNumber: 550 });
})();
export {
  ClientDashboardComponent
};
//# sourceMappingURL=chunk-CPQEMUFW.js.map
