import {
  OrderService
} from "./chunk-CHBVXSG5.js";
import "./chunk-RU4JQJ5O.js";
import "./chunk-OW254BTU.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-DYL6AOBP.js";
import "./chunk-L2KTGN5G.js";
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/orders/order-detail/order-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OrderDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_Conditional_2_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275elementStart(2, "div", 22)(3, "h3", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r1.image || "/assets/placeholder.jpg", \u0275\u0275sanitizeUrl)("alt", item_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Qty: ", item_r1.quantity, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", item_r1.price * item_r1.quantity, "");
  }
}
function OrderDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "a", 4);
    \u0275\u0275text(2, "\u2190 Back to Orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "div")(6, "h1", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 8);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10)(14, "div")(15, "h3", 11);
    \u0275\u0275text(16, "Delivery Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 12);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 12);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "h3", 11);
    \u0275\u0275text(23, "Payment Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 12);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 12);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 5)(29, "h2", 13);
    \u0275\u0275text(30, "Order Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 14);
    \u0275\u0275repeaterCreate(32, OrderDetailComponent_Conditional_2_For_33_Template, 9, 5, "div", 15, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 16)(35, "h2", 13);
    \u0275\u0275text(36, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 17)(38, "div", 18)(39, "span");
    \u0275\u0275text(40, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 18)(44, "span");
    \u0275\u0275text(45, "Tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 18)(49, "span");
    \u0275\u0275text(50, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 19);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(53, "hr");
    \u0275\u0275elementStart(54, "div", 20)(55, "span");
    \u0275\u0275text(56, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Order #", ctx_r1.order().id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 14, ctx_r1.order().created_at, "full"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass(ctx_r1.order().status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.order().status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.order().address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.order().city, " - ", ctx_r1.order().pincode, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Method: ", ctx_r1.order().payment_method, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Status: ", ctx_r1.order().payment_status ? "Paid" : "Pending", "");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.order().items);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r1.order().subtotal, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r1.order().tax, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("-\u20B9", ctx_r1.order().discount || 0, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r1.order().total, "");
  }
}
function OrderDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "p", 26);
    \u0275\u0275text(2, "Order not found");
    \u0275\u0275elementEnd()();
  }
}
var OrderDetailComponent = class _OrderDetailComponent {
  route;
  orderService;
  order = signal(null);
  isLoading = signal(true);
  constructor(route, orderService) {
    this.route = route;
    this.orderService = orderService;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.loadOrder(id);
    }
  }
  loadOrder(id) {
    this.orderService.getOrder(+id).subscribe({
      next: (response) => {
        this.order.set(response.data);
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
  static \u0275fac = function OrderDetailComponent_Factory(t) {
    return new (t || _OrderDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(OrderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailComponent, selectors: [["app-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "flex", "justify-center", "py-12"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-b-2", "border-blue-600"], [1, "mb-6"], ["routerLink", "/orders", 1, "text-blue-600", "hover:underline"], [1, "bg-white", "rounded-lg", "shadow", "p-6", "mb-6"], [1, "flex", "justify-between", "items-start", "mb-6"], [1, "text-3xl", "font-bold"], [1, "text-gray-500"], [1, "px-4", "py-2", "rounded-full", "text-lg"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "mb-6"], [1, "font-bold", "mb-2"], [1, "text-gray-600"], [1, "text-xl", "font-bold", "mb-4"], [1, "space-y-4"], [1, "flex", "items-center", "gap-4", "border-b", "pb-4"], [1, "bg-white", "rounded-lg", "shadow", "p-6"], [1, "space-y-2"], [1, "flex", "justify-between"], [1, "text-green-600"], [1, "flex", "justify-between", "font-bold", "text-xl"], [1, "w-20", "h-20", "object-cover", "rounded", 3, "src", "alt"], [1, "flex-1"], [1, "font-semibold"], [1, "font-bold"], [1, "text-center", "py-12"], [1, "text-xl", "text-gray-500"]], template: function OrderDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, OrderDetailComponent_Conditional_1_Template, 2, 0, "div", 1)(2, OrderDetailComponent_Conditional_2_Template, 59, 17)(3, OrderDetailComponent_Conditional_3_Template, 3, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(1, ctx.isLoading() ? 1 : ctx.order() ? 2 : 3);
    }
  }, dependencies: [CommonModule, DatePipe, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailComponent, { className: "OrderDetailComponent", filePath: "src\\app\\features\\orders\\order-detail\\order-detail.component.ts", lineNumber: 92 });
})();
export {
  OrderDetailComponent
};
