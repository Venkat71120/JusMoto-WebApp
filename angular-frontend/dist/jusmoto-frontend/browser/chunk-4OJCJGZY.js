import {
  ServiceService
} from "./chunk-HS3IF4H3.js";
import {
  ToastService
} from "./chunk-CUQ723YT.js";
import {
  CartService
} from "./chunk-PHE3SKXG.js";
import {
  OrderService
} from "./chunk-62HM5REM.js";
import "./chunk-GMJ7MHWM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5WG63XSG.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-6VP7BBRC.js";
import {
  environment
} from "./chunk-YVMT3HBM.js";
import "./chunk-NM77QJY5.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  NgForOf,
  NgIf,
  SlicePipe,
  UpperCasePipe,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/client/orders/order-list.component.ts
var _c0 = (a0) => ["/client/orders", a0];
function ClientOrderListComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "circle", 18)(3, "circle", 19)(4, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.cartCount());
  }
}
function ClientOrderListComponent_div_26_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_26_button_3_Template_button_click_0_listener() {
      const status_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.filterByStatus(status_r3.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.activeStatus() === status_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", status_r3.label, " ");
  }
}
function ClientOrderListComponent_div_26_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 31);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading orders...");
    \u0275\u0275elementEnd()();
  }
}
function ClientOrderListComponent_div_26_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "path", 6)(3, "polyline", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "No orders found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "You haven't placed any orders yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 34);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_26_div_5_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.switchTab("services"));
    });
    \u0275\u0275text(9, "Browse Services");
    \u0275\u0275elementEnd()();
  }
}
function ClientOrderListComponent_div_26_div_6_tr_19_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 58);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((item_r5.service == null ? null : item_r5.service.title) || item_r5.title || "Service");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("x", item_r5.quantity, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(7, 3, item_r5.total, "INR", "symbol", "1.0-0"));
  }
}
function ClientOrderListComponent_div_26_div_6_tr_19_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", order_r6.items.length - 3, " more");
  }
}
function ClientOrderListComponent_div_26_div_6_tr_19_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "uppercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, order_r6.payment_gateway));
  }
}
function ClientOrderListComponent_div_26_div_6_tr_19_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_26_div_6_tr_19_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const order_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openCancelModal(order_r6.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 62);
    \u0275\u0275element(2, "line", 63)(3, "line", 64);
    \u0275\u0275elementEnd()();
  }
}
function ClientOrderListComponent_div_26_div_6_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 38)(1, "td", 39)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 40);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 41)(8, "div", 42);
    \u0275\u0275template(9, ClientOrderListComponent_div_26_div_6_tr_19_div_9_Template, 8, 8, "div", 43)(10, ClientOrderListComponent_div_26_div_6_tr_19_span_10_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 45)(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 46)(16, "span", 47);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ClientOrderListComponent_div_26_div_6_tr_19_span_18_Template, 3, 3, "span", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 49)(20, "span", 47);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 50)(23, "a", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 5);
    \u0275\u0275element(25, "path", 52)(26, "circle", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, ClientOrderListComponent_div_26_div_6_tr_19_button_28_Template, 4, 0, "button", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", order_r6.invoice_number || order_r6.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 14, order_r6.created_at, "dd MMM yyyy"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", order_r6.items == null ? null : order_r6.items.slice(0, 3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (order_r6.items == null ? null : order_r6.items.length) > 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(14, 17, order_r6.total, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge-" + ctx_r0.getPaymentClass(order_r6.payment_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getPaymentLabel(order_r6.payment_status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r6.payment_gateway);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge-" + ctx_r0.getStatusClass(order_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(order_r6.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c0, order_r6.id));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", order_r6.status < 2);
  }
}
function ClientOrderListComponent_div_26_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "table", 36)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Order #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, ClientOrderListComponent_div_26_div_6_tr_19_Template, 29, 24, "tr", 37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r0.orders());
  }
}
function ClientOrderListComponent_div_26_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "button", 66);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_26_div_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage() - 1));
    });
    \u0275\u0275text(2, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 66);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_26_div_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage() + 1));
    });
    \u0275\u0275text(6, "Next");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r0.currentPage(), " of ", ctx_r0.totalPages(), "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage() === ctx_r0.totalPages());
  }
}
function ClientOrderListComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 22)(2, "div", 23);
    \u0275\u0275template(3, ClientOrderListComponent_div_26_button_3_Template, 2, 3, "button", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ClientOrderListComponent_div_26_div_4_Template, 4, 0, "div", 25)(5, ClientOrderListComponent_div_26_div_5_Template, 10, 0, "div", 26)(6, ClientOrderListComponent_div_26_div_6_Template, 20, 1, "div", 27)(7, ClientOrderListComponent_div_26_div_7_Template, 7, 4, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.statuses);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading() && ctx_r0.orders().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading() && ctx_r0.orders().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.totalPages() > 1);
  }
}
function ClientOrderListComponent_div_27_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 31);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading services...");
    \u0275\u0275elementEnd()();
  }
}
function ClientOrderListComponent_div_27_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No services found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No services available at the moment.");
    \u0275\u0275elementEnd()();
  }
}
function ClientOrderListComponent_div_27_div_8_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 92);
    \u0275\u0275listener("error", function ClientOrderListComponent_div_27_div_8_div_1_img_2_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onImgError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const svc_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.getServiceImageUrl(svc_r12.image), \u0275\u0275sanitizeUrl)("alt", svc_r12.title);
  }
}
function ClientOrderListComponent_div_27_div_8_div_1__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 93);
    \u0275\u0275element(1, "path", 10);
    \u0275\u0275elementEnd();
  }
}
function ClientOrderListComponent_div_27_div_8_div_1_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 94);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const svc_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(2, 2, svc_r12.description, 0, 80), "", (svc_r12.description == null ? null : svc_r12.description.length) > 80 ? "..." : "", "");
  }
}
function ClientOrderListComponent_div_27_div_8_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const svc_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(2, 1, svc_r12.price, "INR", "symbol", "1.0-0"));
  }
}
function ClientOrderListComponent_div_27_div_8_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96)(1, "button", 97);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_27_div_8_div_1_div_17_Template_button_click_1_listener() {
      const ci_r14 = \u0275\u0275restoreView(_r13).ngIf;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.decrementQty(ci_r14));
    });
    \u0275\u0275text(2, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 98);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 97);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_27_div_8_div_1_div_17_Template_button_click_5_listener() {
      const ci_r14 = \u0275\u0275restoreView(_r13).ngIf;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.incrementQty(ci_r14));
    });
    \u0275\u0275text(6, "+");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ci_r14 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.updatingCartItem() === ci_r14.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ci_r14.quantity);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.updatingCartItem() === ci_r14.id);
  }
}
function ClientOrderListComponent_div_27_div_8_div_1_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_27_div_8_div_1_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const svc_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addToCart(svc_r12.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 62);
    \u0275\u0275element(2, "line", 100)(3, "line", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const svc_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.addingToCart() === svc_r12.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.addingToCart() === svc_r12.id ? "Adding..." : "Add to Cart", " ");
  }
}
function ClientOrderListComponent_div_27_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77);
    \u0275\u0275template(2, ClientOrderListComponent_div_27_div_8_div_1_img_2_Template, 1, 2, "img", 78)(3, ClientOrderListComponent_div_27_div_8_div_1__svg_svg_3_Template, 2, 0, "svg", 79);
    \u0275\u0275elementStart(4, "button", 80);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_27_div_8_div_1_Template_button_click_4_listener() {
      const svc_r12 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleFavourite(svc_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 81);
    \u0275\u0275element(6, "path", 82);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 83)(8, "h3", 84);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ClientOrderListComponent_div_27_div_8_div_1_p_10_Template, 3, 6, "p", 85);
    \u0275\u0275elementStart(11, "div", 86)(12, "div", 87)(13, "span", 88);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ClientOrderListComponent_div_27_div_8_div_1_span_16_Template, 3, 6, "span", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ClientOrderListComponent_div_27_div_8_div_1_div_17_Template, 7, 3, "div", 90)(18, ClientOrderListComponent_div_27_div_8_div_1_button_18_Template, 5, 2, "button", 91);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const svc_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", svc_r12.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !svc_r12.image);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.isFav(svc_r12.id));
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", ctx_r0.isFav(svc_r12.id) ? "#e31b23" : "none");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(svc_r12.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", svc_r12.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(15, 11, svc_r12.discount_price || svc_r12.price, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", svc_r12.discount_price && svc_r12.discount_price < svc_r12.price);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getCartItem(svc_r12.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.getCartItem(svc_r12.id));
  }
}
function ClientOrderListComponent_div_27_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275template(1, ClientOrderListComponent_div_27_div_8_div_1_Template, 19, 16, "div", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.services());
  }
}
function ClientOrderListComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 68);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 69);
    \u0275\u0275element(3, "circle", 70)(4, "line", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ClientOrderListComponent_div_27_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.serviceSearch, $event) || (ctx_r0.serviceSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ClientOrderListComponent_div_27_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onServiceSearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ClientOrderListComponent_div_27_div_6_Template, 4, 0, "div", 25)(7, ClientOrderListComponent_div_27_div_7_Template, 7, 0, "div", 26)(8, ClientOrderListComponent_div_27_div_8_Template, 2, 1, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.serviceSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingServices());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingServices() && ctx_r0.services().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingServices() && ctx_r0.services().length > 0);
  }
}
function ClientOrderListComponent_div_28_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 31);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading products...");
    \u0275\u0275elementEnd()();
  }
}
function ClientOrderListComponent_div_28_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No products found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No products available at the moment.");
    \u0275\u0275elementEnd()();
  }
}
function ClientOrderListComponent_div_28_div_8_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 92);
    \u0275\u0275listener("error", function ClientOrderListComponent_div_28_div_8_div_1_img_2_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onImgError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prod_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.getServiceImageUrl(prod_r19.image), \u0275\u0275sanitizeUrl)("alt", prod_r19.title);
  }
}
function ClientOrderListComponent_div_28_div_8_div_1__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 93);
    \u0275\u0275element(1, "path", 11);
    \u0275\u0275elementEnd();
  }
}
function ClientOrderListComponent_div_28_div_8_div_1_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 94);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prod_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(2, 2, prod_r19.description, 0, 80), "", (prod_r19.description == null ? null : prod_r19.description.length) > 80 ? "..." : "", "");
  }
}
function ClientOrderListComponent_div_28_div_8_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prod_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(2, 1, prod_r19.price, "INR", "symbol", "1.0-0"));
  }
}
function ClientOrderListComponent_div_28_div_8_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96)(1, "button", 97);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_28_div_8_div_1_div_17_Template_button_click_1_listener() {
      const ci_r21 = \u0275\u0275restoreView(_r20).ngIf;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.decrementQty(ci_r21));
    });
    \u0275\u0275text(2, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 98);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 97);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_28_div_8_div_1_div_17_Template_button_click_5_listener() {
      const ci_r21 = \u0275\u0275restoreView(_r20).ngIf;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.incrementQty(ci_r21));
    });
    \u0275\u0275text(6, "+");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ci_r21 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.updatingCartItem() === ci_r21.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ci_r21.quantity);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.updatingCartItem() === ci_r21.id);
  }
}
function ClientOrderListComponent_div_28_div_8_div_1_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_28_div_8_div_1_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const prod_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addToCart(prod_r19.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 62);
    \u0275\u0275element(2, "line", 100)(3, "line", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prod_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.addingToCart() === prod_r19.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.addingToCart() === prod_r19.id ? "Adding..." : "Add to Cart", " ");
  }
}
function ClientOrderListComponent_div_28_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77);
    \u0275\u0275template(2, ClientOrderListComponent_div_28_div_8_div_1_img_2_Template, 1, 2, "img", 78)(3, ClientOrderListComponent_div_28_div_8_div_1__svg_svg_3_Template, 2, 0, "svg", 79);
    \u0275\u0275elementStart(4, "button", 80);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_28_div_8_div_1_Template_button_click_4_listener() {
      const prod_r19 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleFavourite(prod_r19));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 81);
    \u0275\u0275element(6, "path", 82);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 83)(8, "h3", 84);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ClientOrderListComponent_div_28_div_8_div_1_p_10_Template, 3, 6, "p", 85);
    \u0275\u0275elementStart(11, "div", 86)(12, "div", 87)(13, "span", 88);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ClientOrderListComponent_div_28_div_8_div_1_span_16_Template, 3, 6, "span", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ClientOrderListComponent_div_28_div_8_div_1_div_17_Template, 7, 3, "div", 90)(18, ClientOrderListComponent_div_28_div_8_div_1_button_18_Template, 5, 2, "button", 91);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const prod_r19 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", prod_r19.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !prod_r19.image);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.isFav(prod_r19.id));
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", ctx_r0.isFav(prod_r19.id) ? "#e31b23" : "none");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(prod_r19.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", prod_r19.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(15, 11, prod_r19.discount_price || prod_r19.price, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", prod_r19.discount_price && prod_r19.discount_price < prod_r19.price);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getCartItem(prod_r19.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.getCartItem(prod_r19.id));
  }
}
function ClientOrderListComponent_div_28_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275template(1, ClientOrderListComponent_div_28_div_8_div_1_Template, 19, 16, "div", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.products());
  }
}
function ClientOrderListComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 68);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 69);
    \u0275\u0275element(3, "circle", 70)(4, "line", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function ClientOrderListComponent_div_28_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.productSearch, $event) || (ctx_r0.productSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ClientOrderListComponent_div_28_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onProductSearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ClientOrderListComponent_div_28_div_6_Template, 4, 0, "div", 25)(7, ClientOrderListComponent_div_28_div_7_Template, 7, 0, "div", 26)(8, ClientOrderListComponent_div_28_div_8_Template, 2, 1, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.productSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingProducts());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingProducts() && ctx_r0.products().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingProducts() && ctx_r0.products().length > 0);
  }
}
function ClientOrderListComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_29_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCancelModal());
    });
    \u0275\u0275elementStart(1, "div", 104);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_29_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 105)(3, "h3");
    \u0275\u0275text(4, "Cancel Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 106);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_29_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCancelModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 107);
    \u0275\u0275element(7, "line", 63)(8, "line", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 108)(10, "p", 109);
    \u0275\u0275text(11, "Please provide a reason for cancelling this order. If payment was already made, a refund will be initiated automatically.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 110);
    \u0275\u0275twoWayListener("ngModelChange", function ClientOrderListComponent_div_29_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.cancelReason, $event) || (ctx_r0.cancelReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 111)(14, "button", 112);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_29_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCancelModal());
    });
    \u0275\u0275text(15, "Go Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 113);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_29_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.doCancelOrder());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.cancelReason);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.cancellingOrder() || !ctx_r0.cancelReason.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.cancellingOrder() ? "Cancelling..." : "Cancel Order", " ");
  }
}
var ClientOrderListComponent = class _ClientOrderListComponent {
  orderService;
  toast;
  serviceService;
  cartService;
  orders = signal([]);
  loading = signal(true);
  activeStatus = signal("all");
  currentPage = signal(1);
  totalPages = signal(1);
  activeTab = signal("orders");
  services = signal([]);
  products = signal([]);
  loadingServices = signal(false);
  loadingProducts = signal(false);
  addingToCart = signal(null);
  updatingCartItem = signal(null);
  cartCount = signal(0);
  cartItems = signal([]);
  favouriteMap = signal(/* @__PURE__ */ new Map());
  cancelModalOpen = signal(false);
  cancellingOrder = signal(false);
  cancelOrderId = signal(null);
  cancelReason = "";
  serviceSearch = "";
  productSearch = "";
  servicesLoaded = false;
  productsLoaded = false;
  baseUrl = environment.apiUrl.replace("/api/v1", "");
  searchTimeout;
  statuses = [
    { label: "All Orders", value: "all" },
    { label: "Pending", value: "0" },
    { label: "Processing", value: "2" },
    { label: "Completed", value: "3" },
    { label: "Cancelled", value: "4" }
  ];
  constructor(orderService, toast, serviceService, cartService) {
    this.orderService = orderService;
    this.toast = toast;
    this.serviceService = serviceService;
    this.cartService = cartService;
  }
  ngOnInit() {
    this.loadOrders();
    this.loadFavourites();
    this.cartService.cart$.subscribe((cart) => {
      this.cartCount.set(cart.item_count || 0);
      this.cartItems.set(cart.items || []);
    });
    this.cartService.loadCart().subscribe();
  }
  // --- Status helpers ---
  getStatusLabel(status) {
    const map = { "0": "Pending", "1": "Accepted", "2": "In Progress", "3": "Completed", "4": "Cancelled", "5": "Refunded" };
    return map[String(status)] || "Unknown";
  }
  getStatusClass(status) {
    const map = { "0": "pending", "1": "accepted", "2": "processing", "3": "completed", "4": "cancelled", "5": "refunded" };
    return map[String(status)] || "pending";
  }
  getPaymentLabel(status) {
    return String(status) === "1" ? "Paid" : "Unpaid";
  }
  getPaymentClass(status) {
    return String(status) === "1" ? "paid" : "unpaid";
  }
  // --- Cart helpers ---
  getCartItem(serviceId) {
    return this.cartItems().find((ci) => ci.item_id === serviceId) || null;
  }
  incrementQty(cartItem) {
    this.updatingCartItem.set(cartItem.id);
    this.cartService.updateItem(cartItem.id, { quantity: cartItem.quantity + 1 }).subscribe({
      next: () => this.updatingCartItem.set(null),
      error: () => {
        this.toast.error("Failed to update quantity");
        this.updatingCartItem.set(null);
      }
    });
  }
  decrementQty(cartItem) {
    if (cartItem.quantity <= 1) {
      this.updatingCartItem.set(cartItem.id);
      this.cartService.removeItem(cartItem.id).subscribe({
        next: () => {
          this.toast.success("Removed from cart");
          this.updatingCartItem.set(null);
        },
        error: () => {
          this.toast.error("Failed to remove item");
          this.updatingCartItem.set(null);
        }
      });
    } else {
      this.updatingCartItem.set(cartItem.id);
      this.cartService.updateItem(cartItem.id, { quantity: cartItem.quantity - 1 }).subscribe({
        next: () => this.updatingCartItem.set(null),
        error: () => {
          this.toast.error("Failed to update quantity");
          this.updatingCartItem.set(null);
        }
      });
    }
  }
  // --- Tab switching ---
  switchTab(tab) {
    this.activeTab.set(tab);
    if (tab === "services" && !this.servicesLoaded) {
      this.loadServices();
    } else if (tab === "products" && !this.productsLoaded) {
      this.loadProducts();
    }
  }
  getServiceImageUrl(image) {
    if (!image)
      return "";
    if (image.startsWith("http"))
      return image;
    const filename = image.replace("uploads/media/", "").replace("media/", "");
    return `${this.baseUrl}/uploads/media/${filename}`;
  }
  onImgError(event) {
    const img = event.target;
    img.removeAttribute("onerror");
    img.style.display = "none";
  }
  loadServices(search) {
    this.loadingServices.set(true);
    this.serviceService.getServices({ type: 0, search, limit: 50 }).subscribe({
      next: (res) => {
        this.services.set(res.data || []);
        this.servicesLoaded = true;
      },
      error: () => this.toast.error("Failed to load services"),
      complete: () => this.loadingServices.set(false)
    });
  }
  loadProducts(search) {
    this.loadingProducts.set(true);
    this.serviceService.getServices({ type: 1, search, limit: 50 }).subscribe({
      next: (res) => {
        this.products.set(res.data || []);
        this.productsLoaded = true;
      },
      error: () => this.toast.error("Failed to load products"),
      complete: () => this.loadingProducts.set(false)
    });
  }
  onServiceSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadServices(this.serviceSearch), 400);
  }
  onProductSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadProducts(this.productSearch), 400);
  }
  addToCart(serviceId) {
    this.addingToCart.set(serviceId);
    this.cartService.addItem({ service_id: serviceId }).subscribe({
      next: () => this.toast.success("Added to cart!"),
      error: (err) => this.toast.error(err.error?.error || "Failed to add to cart"),
      complete: () => this.addingToCart.set(null)
    });
  }
  // --- Orders ---
  loadOrders() {
    this.loading.set(true);
    const status = this.activeStatus();
    this.orderService.getOrders({
      status: status === "all" ? void 0 : Number(status),
      page: this.currentPage()
    }).subscribe({
      next: (response) => {
        this.orders.set(response.data || response.orders || []);
        this.totalPages.set(response.meta?.last_page || response.totalPages || 1);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  filterByStatus(status) {
    this.activeStatus.set(status);
    this.currentPage.set(1);
    this.loadOrders();
  }
  goToPage(page) {
    this.currentPage.set(page);
    this.loadOrders();
  }
  // --- Favourites ---
  loadFavourites() {
    this.serviceService.getFavourites().subscribe({
      next: (response) => {
        const map = /* @__PURE__ */ new Map();
        const items = response.data || response.favourites || [];
        items.forEach((item) => {
          map.set(item.service_id || item.service?.id, item.id);
        });
        this.favouriteMap.set(map);
      },
      error: () => {
      }
    });
  }
  isFav(serviceId) {
    return this.favouriteMap().has(serviceId);
  }
  toggleFavourite(item) {
    const favId = this.favouriteMap().get(item.id);
    if (favId) {
      this.serviceService.removeFromFavourites(favId).subscribe({
        next: () => {
          this.favouriteMap.update((map) => {
            const m = new Map(map);
            m.delete(item.id);
            return m;
          });
          this.toast.success("Removed from favourites");
        },
        error: () => this.toast.error("Failed to remove from favourites")
      });
    } else {
      this.serviceService.addToFavourites(item.id).subscribe({
        next: (res) => {
          this.favouriteMap.update((map) => {
            const m = new Map(map);
            m.set(item.id, res.data?.id || 0);
            return m;
          });
          this.toast.success("Added to favourites");
        },
        error: (err) => this.toast.error(err.error?.error || "Failed to add to favourites")
      });
    }
  }
  openCancelModal(orderId) {
    this.cancelOrderId.set(orderId);
    this.cancelReason = "";
    this.cancelModalOpen.set(true);
  }
  closeCancelModal() {
    this.cancelModalOpen.set(false);
    this.cancelOrderId.set(null);
    this.cancelReason = "";
  }
  doCancelOrder() {
    const orderId = this.cancelOrderId();
    if (!orderId || !this.cancelReason.trim())
      return;
    this.cancellingOrder.set(true);
    this.orderService.cancelOrder(orderId, this.cancelReason.trim()).subscribe({
      next: (res) => {
        const msg = res?.refund ? "Order cancelled. Refund has been initiated." : "Order cancelled successfully.";
        this.toast.success(msg);
        this.closeCancelModal();
        this.cancellingOrder.set(false);
        this.loadOrders();
      },
      error: () => {
        this.toast.error("Failed to cancel order. Please try again.");
        this.cancellingOrder.set(false);
      }
    });
  }
  static \u0275fac = function ClientOrderListComponent_Factory(t) {
    return new (t || _ClientOrderListComponent)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ServiceService), \u0275\u0275directiveInject(CartService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientOrderListComponent, selectors: [["app-client-order-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 11, consts: [[1, "orders-container"], [1, "page-header"], ["routerLink", "/client/cart", "class", "cart-badge", 4, "ngIf"], [1, "main-tabs"], [1, "main-tab", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["d", "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"], ["d", "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"], ["points", "3.27 6.96 12 12.01 20.73 6.96"], ["x1", "12", "y1", "22.08", "x2", "12", "y2", "12"], [4, "ngIf"], ["class", "cancel-overlay", 3, "click", 4, "ngIf"], ["routerLink", "/client/cart", 1, "cart-badge"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"], [1, "cart-count"], [1, "filters-bar"], [1, "filter-tabs"], ["class", "filter-tab", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "orders-table-wrap", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "filter-tab", 3, "click"], [1, "loading"], [1, "spinner"], [1, "empty-state"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#cbd5e1", "stroke-width", "1.2"], [1, "btn-primary", 3, "click"], [1, "orders-table-wrap"], [1, "orders-table"], ["class", "order-row", 4, "ngFor", "ngForOf"], [1, "order-row"], [1, "col-id"], [1, "col-date"], [1, "col-items"], [1, "items-list"], ["class", "item-row", 4, "ngFor", "ngForOf"], ["class", "more-items", 4, "ngIf"], [1, "col-total"], [1, "col-payment"], [1, "badge"], ["class", "payment-method", 4, "ngIf"], [1, "col-status"], [1, "col-actions"], ["title", "View Details", 1, "btn-view", 3, "routerLink"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["class", "btn-cancel-order", "title", "Cancel Order", 3, "click", 4, "ngIf"], [1, "item-row"], [1, "item-name"], [1, "item-qty"], [1, "item-price"], [1, "more-items"], [1, "payment-method"], ["title", "Cancel Order", 1, "btn-cancel-order", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"], [1, "search-bar"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#94a3b8", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "Search services...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], ["class", "service-grid", 4, "ngIf"], [1, "service-grid"], ["class", "service-card", 4, "ngFor", "ngForOf"], [1, "service-card"], [1, "service-img-wrap"], [3, "src", "alt", "error", 4, "ngIf"], ["class", "img-fallback", "width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 4, "ngIf"], ["title", "Add to favourites", 1, "heart-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "stroke", "#e31b23", "stroke-width", "2"], ["d", "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"], [1, "service-card-body"], [1, "service-title"], ["class", "service-desc", 4, "ngIf"], [1, "service-price-row"], [1, "service-price"], [1, "price-current"], ["class", "price-original", 4, "ngIf"], ["class", "cart-qty-control", 4, "ngIf"], ["class", "btn-add-cart", 3, "disabled", "click", 4, "ngIf"], [3, "error", "src", "alt"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "img-fallback"], [1, "service-desc"], [1, "price-original"], [1, "cart-qty-control"], [1, "qty-btn", 3, "click", "disabled"], [1, "qty-val"], [1, "btn-add-cart", 3, "click", "disabled"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["type", "text", "placeholder", "Search products...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "cancel-overlay", 3, "click"], [1, "cancel-modal", 3, "click"], [1, "cancel-modal-header"], [1, "cancel-close-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "cancel-modal-body"], [1, "cancel-note"], ["placeholder", "Enter reason for cancellation...", "rows", "4", 1, "cancel-textarea", 3, "ngModelChange", "ngModel"], [1, "cancel-modal-footer"], [1, "btn-cancel-dismiss", 3, "click"], [1, "btn-cancel-submit", 3, "click", "disabled"]], template: function ClientOrderListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4, "My Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "View orders, browse services & products");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, ClientOrderListComponent_a_7_Template, 7, 1, "a", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 3)(9, "button", 4);
      \u0275\u0275listener("click", function ClientOrderListComponent_Template_button_click_9_listener() {
        return ctx.switchTab("orders");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 5);
      \u0275\u0275element(11, "path", 6)(12, "polyline", 7)(13, "line", 8)(14, "line", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " My Orders ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "button", 4);
      \u0275\u0275listener("click", function ClientOrderListComponent_Template_button_click_16_listener() {
        return ctx.switchTab("services");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(17, "svg", 5);
      \u0275\u0275element(18, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " Services ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "button", 4);
      \u0275\u0275listener("click", function ClientOrderListComponent_Template_button_click_20_listener() {
        return ctx.switchTab("products");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 5);
      \u0275\u0275element(22, "path", 11)(23, "polyline", 12)(24, "line", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Products ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(26, ClientOrderListComponent_div_26_Template, 8, 5, "div", 14)(27, ClientOrderListComponent_div_27_Template, 9, 4, "div", 14)(28, ClientOrderListComponent_div_28_Template, 9, 4, "div", 14)(29, ClientOrderListComponent_div_29_Template, 18, 3, "div", 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.cartCount() > 0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "orders");
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.activeTab() === "services");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab() === "products");
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.activeTab() === "orders");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab() === "services");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab() === "products");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cancelModalOpen());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, UpperCasePipe, SlicePipe, CurrencyPipe, DatePipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.orders-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.cart-badge[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  color: #1a1a1a;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.cart-badge[_ngcontent-%COMP%]:hover {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.cart-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  background: #e31b23;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  margin-bottom: 24px;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.main-tab[_ngcontent-%COMP%] {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 14px 20px;\n  border: none;\n  background: #fff;\n  color: #64748b;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  border-right: 1px solid #e5e7eb;\n}\n.main-tab[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.main-tab.active[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n}\n.main-tab[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #fff5f5;\n  color: #e31b23;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.filter-tab[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  border-radius: 20px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n.filter-tab[_ngcontent-%COMP%]:hover {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.filter-tab.active[_ngcontent-%COMP%] {\n  background: #e31b23;\n  border-color: #e31b23;\n  color: #fff;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0 0 24px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  text-decoration: none;\n  font-weight: 500;\n  cursor: pointer;\n}\n.orders-table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.orders-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.orders-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8f9fb;\n}\n.orders-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.orders-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: top;\n}\n.orders-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.orders-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbfc;\n}\n.col-id[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a1a2e;\n  font-size: 14px;\n}\n.col-date[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 13px;\n  white-space: nowrap;\n}\n.col-items[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.items-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.item-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.item-name[_ngcontent-%COMP%] {\n  color: #374151;\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 180px;\n}\n.item-qty[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.item-price[_ngcontent-%COMP%] {\n  color: #1a1a2e;\n  font-weight: 600;\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.more-items[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e31b23;\n  font-weight: 500;\n}\n.col-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a1a2e;\n  font-size: 15px;\n  white-space: nowrap;\n}\n.col-payment[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.payment-method[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  text-transform: uppercase;\n}\n.col-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-accepted[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.badge-processing[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #3730a3;\n}\n.badge-completed[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge-cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-refunded[_ngcontent-%COMP%] {\n  background: #fae8ff;\n  color: #86198f;\n}\n.badge-paid[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge-unpaid[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.btn-view[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border: 1px solid #e31b23;\n  color: #e31b23;\n  background: #fff;\n  border-radius: 6px;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 600;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn-view[_ngcontent-%COMP%]:hover {\n  background: #e31b23;\n  color: #fff;\n}\n.btn-cancel-order[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: 1px solid #fee2e2;\n  border-radius: 6px;\n  background: #fff;\n  color: #dc2626;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel-order[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #dc2626;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  margin-top: 24px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 10px 16px;\n  margin-bottom: 24px;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  color: #1a1a1a;\n  background: transparent;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.service-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 20px;\n}\n.service-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n  transition: all 0.2s;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  border-color: #e31b23;\n  box-shadow: 0 4px 16px rgba(227, 27, 35, 0.1);\n}\n.service-img-wrap[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 160px;\n  position: relative;\n}\n.service-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 140px;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.service-img-wrap[_ngcontent-%COMP%]   .img-fallback[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.heart-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 34px;\n  height: 34px;\n  background: #fff;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n  z-index: 10;\n}\n.heart-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n}\n.heart-btn.active[_ngcontent-%COMP%] {\n  background: #fff5f5;\n}\n.service-card-body[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n}\n.service-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 6px;\n}\n.service-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0 0 12px;\n  line-height: 1.4;\n}\n.service-price-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.service-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.price-current[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #e31b23;\n}\n.price-original[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n.btn-add-cart[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn-add-cart[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-add-cart[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.cart-qty-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  border: 2px solid #e31b23;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.cart-qty-control[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: #fff;\n  color: #e31b23;\n  font-size: 18px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.cart-qty-control[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fee2e2;\n}\n.cart-qty-control[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.cart-qty-control[_ngcontent-%COMP%]   .qty-val[_ngcontent-%COMP%] {\n  width: 36px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 14px;\n  color: #e31b23;\n  background: #fff5f5;\n  line-height: 32px;\n}\n.cancel-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.cancel-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.cancel-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px 0;\n}\n.cancel-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a1a;\n}\n.cancel-close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  padding: 4px;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n.cancel-close-btn[_ngcontent-%COMP%]:hover {\n  color: #1a1a1a;\n  background: #f1f5f9;\n}\n.cancel-modal-body[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n}\n.cancel-note[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0 0 16px;\n}\n.cancel-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  font-size: 14px;\n  font-family: inherit;\n  resize: vertical;\n  min-height: 100px;\n  transition: border-color 0.2s;\n  box-sizing: border-box;\n}\n.cancel-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);\n}\n.cancel-modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 0 24px 20px;\n}\n.btn-cancel-dismiss[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #f1f5f9;\n  color: #475569;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel-dismiss[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.btn-cancel-submit[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  background: #dc2626;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-cancel-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .main-tabs[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .main-tab[_ngcontent-%COMP%] {\n    border-right: none;\n    border-bottom: 1px solid #e5e7eb;\n  }\n  .main-tab[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .service-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .orders-table-wrap[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .orders-table[_ngcontent-%COMP%] {\n    min-width: 700px;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientOrderListComponent, { className: "ClientOrderListComponent", filePath: "src\\app\\features\\client\\orders\\order-list.component.ts", lineNumber: 405 });
})();
export {
  ClientOrderListComponent
};
