import {
  RouterLink,
  RouterModule
} from "./chunk-DYL6AOBP.js";
import "./chunk-L2KTGN5G.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DashboardComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div")(2, "p", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", order_r1.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r1.date);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(order_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r1.status, " ");
  }
}
function DashboardComponent_ForEmpty_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "No recent orders");
    \u0275\u0275elementEnd();
  }
}
var DashboardComponent = class _DashboardComponent {
  stats = signal({
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    walletBalance: 0
  });
  recentOrders = signal([]);
  ngOnInit() {
    this.stats.set({
      totalOrders: 12,
      pendingOrders: 2,
      completedOrders: 10,
      walletBalance: 500
    });
  }
  getStatusClass(status) {
    const classes = {
      "pending": "bg-yellow-100 text-yellow-800",
      "completed": "bg-green-100 text-green-800",
      "cancelled": "bg-red-100 text-red-800"
    };
    return classes[status.toLowerCase()] || "bg-gray-100 text-gray-800";
  }
  static \u0275fac = function DashboardComponent_Factory(t) {
    return new (t || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 58, vars: 5, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "text-3xl", "font-bold", "mb-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6", "mb-8"], [1, "bg-white", "rounded-lg", "shadow", "p-6"], [1, "text-gray-500", "text-sm", "font-medium"], [1, "text-3xl", "font-bold", "text-blue-600"], [1, "text-3xl", "font-bold", "text-yellow-600"], [1, "text-3xl", "font-bold", "text-green-600"], [1, "text-3xl", "font-bold", "text-purple-600"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "text-xl", "font-bold", "mb-4"], [1, "space-y-4"], [1, "flex", "justify-between", "items-center", "border-b", "pb-4"], [1, "text-gray-500"], ["routerLink", "/orders", 1, "block", "text-center", "text-blue-600", "mt-4", "hover:underline"], [1, "grid", "grid-cols-2", "gap-4"], ["routerLink", "/services", 1, "p-4", "border", "rounded-lg", "text-center", "hover:bg-gray-50"], [1, "text-2xl"], [1, "mt-2", "font-medium"], ["routerLink", "/challans", 1, "p-4", "border", "rounded-lg", "text-center", "hover:bg-gray-50"], ["routerLink", "/wallet", 1, "p-4", "border", "rounded-lg", "text-center", "hover:bg-gray-50"], ["routerLink", "/tickets", 1, "p-4", "border", "rounded-lg", "text-center", "hover:bg-gray-50"], [1, "font-semibold"], [1, "text-sm", "text-gray-500"], [1, "px-3", "py-1", "rounded-full", "text-sm"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "h3", 4);
      \u0275\u0275text(6, "Total Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 3)(10, "h3", 4);
      \u0275\u0275text(11, "Pending Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 6);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 3)(15, "h3", 4);
      \u0275\u0275text(16, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 7);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 3)(20, "h3", 4);
      \u0275\u0275text(21, "Wallet Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p", 8);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 9)(25, "div", 3)(26, "h2", 10);
      \u0275\u0275text(27, "Recent Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 11);
      \u0275\u0275repeaterCreate(29, DashboardComponent_For_30_Template, 8, 5, "div", 12, _forTrack0, false, DashboardComponent_ForEmpty_31_Template, 2, 0, "p", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "a", 14);
      \u0275\u0275text(33, " View All Orders ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 3)(35, "h2", 10);
      \u0275\u0275text(36, "Quick Actions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 15)(38, "a", 16)(39, "span", 17);
      \u0275\u0275text(40, "\u{1F527}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p", 18);
      \u0275\u0275text(42, "Book Service");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "a", 19)(44, "span", 17);
      \u0275\u0275text(45, "\u{1F697}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p", 18);
      \u0275\u0275text(47, "Check Challans");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "a", 20)(49, "span", 17);
      \u0275\u0275text(50, "\u{1F4B0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p", 18);
      \u0275\u0275text(52, "Wallet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "a", 21)(54, "span", 17);
      \u0275\u0275text(55, "\u{1F3AB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "p", 18);
      \u0275\u0275text(57, "Support");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.stats().totalOrders);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.stats().pendingOrders);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.stats().completedOrders);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("\u20B9", ctx.stats().walletBalance, "");
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.recentOrders());
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\dashboard\\dashboard.component.ts", lineNumber: 80 });
})();
export {
  DashboardComponent
};
