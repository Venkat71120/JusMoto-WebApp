import {
  OrderService
} from "./chunk-62HM5REM.js";
import "./chunk-GMJ7MHWM.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-6VP7BBRC.js";
import "./chunk-YVMT3HBM.js";
import "./chunk-NM77QJY5.js";
import {
  CommonModule,
  DatePipe,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/orders/order-list/order-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/orders", a0];
function OrderListComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementEnd();
  }
}
function OrderListComponent_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div")(3, "h3", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 10)(11, "div", 11)(12, "div")(13, "p", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "a", 14);
    \u0275\u0275text(18, " View Details ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Order #", order_r1.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, order_r1.created_at, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass(order_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r1.status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", (order_r1.items == null ? null : order_r1.items.length) || 0, " item(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", order_r1.total, "");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, order_r1.id));
  }
}
function OrderListComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, OrderListComponent_Conditional_4_For_2_Template, 19, 13, "div", 5, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.orders());
  }
}
function OrderListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p", 16);
    \u0275\u0275text(2, "No orders found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 17);
    \u0275\u0275text(4, " Browse Services ");
    \u0275\u0275elementEnd()();
  }
}
var OrderListComponent = class _OrderListComponent {
  orderService;
  orders = signal([]);
  isLoading = signal(true);
  constructor(orderService) {
    this.orderService = orderService;
  }
  ngOnInit() {
    this.loadOrders();
  }
  loadOrders() {
    this.orderService.getOrders().subscribe({
      next: (response) => {
        this.orders.set(response.data || []);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }
  getStatusClass(status) {
    const classes = {
      "pending": "bg-yellow-100 text-yellow-800",
      "processing": "bg-blue-100 text-blue-800",
      "completed": "bg-green-100 text-green-800",
      "cancelled": "bg-red-100 text-red-800"
    };
    return classes[status?.toLowerCase()] || "bg-gray-100 text-gray-800";
  }
  static \u0275fac = function OrderListComponent_Factory(t) {
    return new (t || _OrderListComponent)(\u0275\u0275directiveInject(OrderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderListComponent, selectors: [["app-order-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "text-3xl", "font-bold", "mb-6"], [1, "flex", "justify-center", "py-12"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-b-2", "border-blue-600"], [1, "space-y-4"], [1, "bg-white", "rounded-lg", "shadow", "p-6"], [1, "flex", "justify-between", "items-start", "mb-4"], [1, "font-bold", "text-lg"], [1, "text-gray-500"], [1, "px-3", "py-1", "rounded-full", "text-sm"], [1, "border-t", "pt-4"], [1, "flex", "justify-between", "items-center"], [1, "text-gray-600"], [1, "text-xl", "font-bold"], [1, "bg-blue-600", "text-white", "px-4", "py-2", "rounded", "hover:bg-blue-700", 3, "routerLink"], [1, "text-center", "py-12"], [1, "text-xl", "text-gray-500", "mb-4"], ["routerLink", "/services", 1, "bg-blue-600", "text-white", "px-6", "py-2", "rounded", "hover:bg-blue-700"]], template: function OrderListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "My Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, OrderListComponent_Conditional_3_Template, 2, 0, "div", 2)(4, OrderListComponent_Conditional_4_Template, 3, 0)(5, OrderListComponent_Conditional_5_Template, 5, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(3, ctx.isLoading() ? 3 : ctx.orders().length > 0 ? 4 : 5);
    }
  }, dependencies: [CommonModule, DatePipe, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderListComponent, { className: "OrderListComponent", filePath: "src\\app\\features\\orders\\order-list\\order-list.component.ts", lineNumber: 57 });
})();
export {
  OrderListComponent
};
