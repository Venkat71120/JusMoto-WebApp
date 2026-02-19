import {
  OrderService
} from "./chunk-CHBVXSG5.js";
import "./chunk-RU4JQJ5O.js";
import "./chunk-OW254BTU.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-DYL6AOBP.js";
import "./chunk-L2KTGN5G.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  NgForOf,
  NgIf,
  TitleCasePipe,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/client/orders/order-detail.component.ts
var _c0 = (a0) => ({ order_id: a0 });
function ClientOrderDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading order details...");
    \u0275\u0275elementEnd()();
  }
}
function ClientOrderDetailComponent_div_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275element(2, "img", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 34)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 35);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (item_r1.service == null ? null : item_r1.service.image) || "/assets/images/service-placeholder.png", \u0275\u0275sanitizeUrl)("alt", item_r1.service == null ? null : item_r1.service.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((item_r1.service == null ? null : item_r1.service.name) || "Service");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.service == null ? null : item_r1.service.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Qty: ", item_r1.quantity, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind4(13, 7, item_r1.price, "INR", "symbol", "1.0-0"), " each");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(16, 12, item_r1.quantity * item_r1.price, "INR", "symbol", "1.0-0"), " ");
  }
}
function ClientOrderDetailComponent_div_5_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span");
    \u0275\u0275text(2, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind4(5, 1, ctx_r1.order().discount, "INR", "symbol", "1.0-0"), "");
  }
}
function ClientOrderDetailComponent_div_5_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span");
    \u0275\u0275text(2, "Tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 1, ctx_r1.order().tax, "INR", "symbol", "1.0-0"));
  }
}
function ClientOrderDetailComponent_div_5_div_33_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "div", 40);
    \u0275\u0275elementStart(2, "div", 41)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 42);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r3 = ctx.$implicit;
    const last_r4 = ctx.last;
    \u0275\u0275classProp("active", !last_r4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, event_r3.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 7, event_r3.created_at, "medium"));
  }
}
function ClientOrderDetailComponent_div_5_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h2");
    \u0275\u0275text(2, "Order Timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275template(4, ClientOrderDetailComponent_div_5_div_33_div_4_Template, 11, 10, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.order().timeline);
  }
}
function ClientOrderDetailComponent_div_5_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span");
    \u0275\u0275text(2, "Transaction ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.order().transaction_id);
  }
}
function ClientOrderDetailComponent_div_5_div_51_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.order().address.address_line2);
  }
}
function ClientOrderDetailComponent_div_5_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h3");
    \u0275\u0275text(2, "Service Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 43);
    \u0275\u0275text(4);
    \u0275\u0275element(5, "br");
    \u0275\u0275template(6, ClientOrderDetailComponent_div_5_div_51_span_6_Template, 3, 1, "span", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.order().address.address_line1, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order().address.address_line2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", ctx_r1.order().address.city, ", ", ctx_r1.order().address.state, " ", ctx_r1.order().address.pincode, " ");
  }
}
function ClientOrderDetailComponent_div_5_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h3");
    \u0275\u0275text(2, "Vehicle Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 45)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.order().car.make, " ", ctx_r1.order().car.model, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.order().car.registration_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.order().car.year, " - ", ctx_r1.order().car.color, "");
  }
}
function ClientOrderDetailComponent_div_5_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ClientOrderDetailComponent_div_5_button_54_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelOrder());
    });
    \u0275\u0275text(1, " Cancel Order ");
    \u0275\u0275elementEnd();
  }
}
function ClientOrderDetailComponent_div_5_button_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function ClientOrderDetailComponent_div_5_button_55_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reorder());
    });
    \u0275\u0275text(1, " Reorder ");
    \u0275\u0275elementEnd();
  }
}
function ClientOrderDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 11);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 12)(12, "div", 13)(13, "div", 14)(14, "h2");
    \u0275\u0275text(15, "Order Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275template(17, ClientOrderDetailComponent_div_5_div_17_Template, 17, 17, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 17)(19, "div", 18)(20, "span");
    \u0275\u0275text(21, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, ClientOrderDetailComponent_div_5_div_25_Template, 6, 6, "div", 19)(26, ClientOrderDetailComponent_div_5_div_26_Template, 6, 6, "div", 19);
    \u0275\u0275elementStart(27, "div", 20)(28, "span");
    \u0275\u0275text(29, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "currency");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(33, ClientOrderDetailComponent_div_5_div_33_Template, 5, 1, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 22)(35, "div", 14)(36, "h3");
    \u0275\u0275text(37, "Payment Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 23)(39, "span");
    \u0275\u0275text(40, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 23)(45, "span");
    \u0275\u0275text(46, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(50, ClientOrderDetailComponent_div_5_div_50_Template, 5, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, ClientOrderDetailComponent_div_5_div_51_Template, 8, 5, "div", 21)(52, ClientOrderDetailComponent_div_5_div_52_Template, 10, 5, "div", 21);
    \u0275\u0275elementStart(53, "div", 25);
    \u0275\u0275template(54, ClientOrderDetailComponent_div_5_button_54_Template, 2, 0, "button", 26)(55, ClientOrderDetailComponent_div_5_button_55_Template, 2, 0, "button", 27);
    \u0275\u0275elementStart(56, "a", 28);
    \u0275\u0275text(57, " Need Help? ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Order #", ctx_r1.order().order_number || ctx_r1.order().id, "");
    \u0275\u0275advance();
    \u0275\u0275classMap("status-" + ctx_r1.order().status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 21, ctx_r1.order().status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Placed on ", \u0275\u0275pipeBind2(10, 23, ctx_r1.order().created_at, "fullDate"), "");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.order().items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(24, 26, ctx_r1.order().subtotal, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order().discount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().tax > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(32, 31, ctx_r1.order().total, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_10_0 = ctx_r1.order().timeline) == null ? null : tmp_10_0.length) > 0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 36, ctx_r1.order().payment_method));
    \u0275\u0275advance(5);
    \u0275\u0275classMap("payment-" + ctx_r1.order().payment_status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 38, ctx_r1.order().payment_status));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order().transaction_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().car);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order().status === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().status === "completed");
    \u0275\u0275advance();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(40, _c0, ctx_r1.order().id));
  }
}
var ClientOrderDetailComponent = class _ClientOrderDetailComponent {
  route;
  router;
  orderService;
  order = signal(null);
  loading = signal(true);
  constructor(route, router, orderService) {
    this.route = route;
    this.router = router;
    this.orderService = orderService;
  }
  ngOnInit() {
    const orderId = this.route.snapshot.paramMap.get("id");
    if (orderId) {
      this.loadOrder(+orderId);
    }
  }
  loadOrder(id) {
    this.loading.set(true);
    this.orderService.getOrder(id).subscribe({
      next: (response) => {
        this.order.set(response.data || response.order || response);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.router.navigate(["/client/orders"]);
      }
    });
  }
  cancelOrder() {
    if (confirm("Are you sure you want to cancel this order?")) {
      this.orderService.cancelOrder(this.order().id).subscribe({
        next: () => {
          this.loadOrder(this.order().id);
        }
      });
    }
  }
  reorder() {
    alert("Reorder functionality coming soon!");
  }
  static \u0275fac = function ClientOrderDetailComponent_Factory(t) {
    return new (t || _ClientOrderDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(OrderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientOrderDetailComponent, selectors: [["app-client-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 2, consts: [[1, "order-detail-container"], [1, "back-link"], ["routerLink", "/client/orders"], ["class", "loading", 4, "ngIf"], ["class", "order-content", 4, "ngIf"], [1, "loading"], [1, "spinner"], [1, "order-content"], [1, "order-header-card"], [1, "order-title"], [1, "status-badge"], [1, "order-date"], [1, "order-grid"], [1, "main-section"], [1, "card"], [1, "items-list"], ["class", "item-row", 4, "ngFor", "ngForOf"], [1, "order-totals"], [1, "total-row"], ["class", "total-row", 4, "ngIf"], [1, "total-row", "total-final"], ["class", "card", 4, "ngIf"], [1, "sidebar-section"], [1, "info-row"], ["class", "info-row", 4, "ngIf"], [1, "card", "actions-card"], ["class", "btn-danger full-width", 3, "click", 4, "ngIf"], ["class", "btn-primary full-width", 3, "click", 4, "ngIf"], ["routerLink", "/client/tickets/new", 1, "btn-outline", "full-width", 3, "queryParams"], [1, "item-row"], [1, "item-image"], [3, "src", "alt"], [1, "item-details"], [1, "item-desc"], [1, "item-meta"], [1, "item-total"], [1, "text-success"], [1, "timeline"], ["class", "timeline-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "timeline-dot"], [1, "timeline-content"], [1, "timeline-date"], [1, "address-text"], [4, "ngIf"], [1, "car-info"], [1, "btn-danger", "full-width", 3, "click"], [1, "btn-primary", "full-width", 3, "click"]], template: function ClientOrderDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275text(3, "\u2190 Back to Orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, ClientOrderDetailComponent_div_4_Template, 4, 0, "div", 3)(5, ClientOrderDetailComponent_div_5_Template, 58, 42, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.order());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe, CurrencyPipe, DatePipe, RouterModule, RouterLink], styles: ['\n\n.order-detail-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.back-link[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0066cc;\n  text-decoration: none;\n  font-size: 14px;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #0066cc;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.order-header-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.order-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 8px;\n}\n.order-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0;\n  color: #1a1a1a;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-confirmed[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.status-processing[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #3730a3;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.order-date[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.order-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 350px;\n  gap: 24px;\n}\n@media (max-width: 900px) {\n  .order-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 24px;\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 20px;\n}\n.items-list[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 20px;\n}\n.item-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 16px 0;\n  border-top: 1px solid #e5e7eb;\n}\n.item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  object-fit: cover;\n}\n.item-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.item-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 0 4px;\n  color: #1a1a1a;\n}\n.item-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0 0 8px;\n}\n.item-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 13px;\n  color: #888;\n}\n.item-total[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.order-totals[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  font-size: 14px;\n  color: #666;\n}\n.total-row.total-final[_ngcontent-%COMP%] {\n  border-top: 2px solid #e5e7eb;\n  margin-top: 8px;\n  padding-top: 16px;\n  font-size: 18px;\n  color: #1a1a1a;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #065f46;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 24px;\n}\n.timeline-item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n.timeline-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -24px;\n  top: 8px;\n  bottom: -16px;\n  width: 2px;\n  background: #e5e7eb;\n}\n.timeline-item[_ngcontent-%COMP%]:last-child::before {\n  display: none;\n}\n.timeline-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -30px;\n  top: 4px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #e5e7eb;\n  border: 3px solid #fff;\n}\n.timeline-item.active[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%] {\n  background: #0066cc;\n}\n.timeline-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin: 0 0 4px;\n  color: #1a1a1a;\n}\n.timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0 0 4px;\n}\n.timeline-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #f0f0f0;\n  font-size: 14px;\n}\n.info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #666;\n}\n.payment-paid[_ngcontent-%COMP%] {\n  color: #065f46;\n  font-weight: 500;\n}\n.payment-pending[_ngcontent-%COMP%] {\n  color: #92400e;\n  font-weight: 500;\n}\n.payment-failed[_ngcontent-%COMP%] {\n  color: #991b1b;\n  font-weight: 500;\n}\n.address-text[_ngcontent-%COMP%] {\n  color: #444;\n  line-height: 1.6;\n  margin: 0;\n}\n.car-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: #1a1a1a;\n}\n.car-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 14px;\n}\n.actions-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #0066cc;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-weight: 500;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #dc3545;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: 1px solid #e5e7eb;\n  color: #444;\n  background: #fff;\n  border-radius: 6px;\n  text-decoration: none;\n  font-weight: 500;\n  text-align: center;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientOrderDetailComponent, { className: "ClientOrderDetailComponent", filePath: "src\\app\\features\\client\\orders\\order-detail.component.ts", lineNumber: 461 });
})();
export {
  ClientOrderDetailComponent
};
