import {
  ConfirmModalComponent
} from "./chunk-GESQI7FA.js";
import {
  ToastService
} from "./chunk-W5W6PSRW.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBAOAUH3.js";
import {
  environment
} from "./chunk-OW254BTU.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-DYL6AOBP.js";
import {
  HttpClient
} from "./chunk-L2KTGN5G.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5RHIFAVQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MEBOPP65.js";

// src/app/features/admin/orders/order-detail.component.ts
function OrderDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_7_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 37);
    \u0275\u0275element(2, "path", 22)(3, "circle", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Assigned to: ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(((tmp_2_0 = ctx_r1.order().franchiseAdmin) == null ? null : tmp_2_0.name) || "Franchise #" + ctx_r1.order().franchise_admin_id);
  }
}
function OrderDetailComponent_div_7_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 30)(2, "span", 31);
    \u0275\u0275text(3, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30)(7, "span", 31);
    \u0275\u0275text(8, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 30)(12, "span", 31);
    \u0275\u0275text(13, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.order().user.first_name || "", " ", ctx_r1.order().user.last_name || "", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order().user.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order().user.phone || "-");
  }
}
function OrderDetailComponent_div_7_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Coupon (", ctx_r1.order().coupon_code, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("-\u20B9", \u0275\u0275pipeBind2(5, 2, ctx_r1.order().coupon_amount, "1.2-2"), "");
  }
}
function OrderDetailComponent_div_7_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 31);
    \u0275\u0275text(2, "Delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(5, 1, ctx_r1.order().delivery_charge, "1.2-2"), "");
  }
}
function OrderDetailComponent_div_7_div_52_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 42)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 43);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((item_r3.service == null ? null : item_r3.service.title) || "Service #" + item_r3.service_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(7, 4, item_r3.price, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(12, 7, item_r3.price * item_r3.qty, "1.2-2"), "");
  }
}
function OrderDetailComponent_div_7_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "h3");
    \u0275\u0275text(2, "Order Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "table", 40)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, OrderDetailComponent_div_7_div_52_tr_15_Template, 13, 10, "tr", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.order().items);
  }
}
function OrderDetailComponent_div_7_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "h3");
    \u0275\u0275text(2, "Delivery Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "span", 31);
    \u0275\u0275text(5, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 30)(9, "span", 31);
    \u0275\u0275text(10, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 30)(14, "span", 31);
    \u0275\u0275text(15, "Post Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 30)(19, "span", 31);
    \u0275\u0275text(20, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.order().location.title || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order().location.address || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order().location.post_code || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order().location.phone || "-");
  }
}
function OrderDetailComponent_div_7_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "h3");
    \u0275\u0275text(2, "Order Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.order().order_note);
  }
}
function OrderDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 11)(2, "div")(3, "h1", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 13);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "button", 15);
    \u0275\u0275listener("click", function OrderDetailComponent_div_7_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openStatusModal());
    });
    \u0275\u0275elementStart(10, "span", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 17);
    \u0275\u0275element(13, "polyline", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "button", 19);
    \u0275\u0275listener("click", function OrderDetailComponent_div_7_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPaymentModal());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 20);
    \u0275\u0275listener("click", function OrderDetailComponent_div_7_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openFranchiseModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 21);
    \u0275\u0275element(18, "path", 22)(19, "circle", 23)(20, "path", 24)(21, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, OrderDetailComponent_div_7_div_23_Template, 8, 1, "div", 26);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 27)(25, "div", 28)(26, "h3");
    \u0275\u0275text(27, "Customer Information");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, OrderDetailComponent_div_7_div_28_Template, 16, 4, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 28)(30, "h3");
    \u0275\u0275text(31, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 30)(33, "span", 31);
    \u0275\u0275text(34, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 30)(39, "span", 31);
    \u0275\u0275text(40, "Tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, OrderDetailComponent_div_7_div_44_Template, 6, 5, "div", 32)(45, OrderDetailComponent_div_7_div_45_Template, 6, 4, "div", 32);
    \u0275\u0275elementStart(46, "div", 33)(47, "span", 31);
    \u0275\u0275text(48, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 34);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(52, OrderDetailComponent_div_7_div_52_Template, 16, 1, "div", 35)(53, OrderDetailComponent_div_7_div_53_Template, 23, 4, "div", 35)(54, OrderDetailComponent_div_7_div_54_Template, 5, 1, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Order ", ctx_r1.order().invoice_number || "#" + ctx_r1.order().id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 18, ctx_r1.order().created_at, "medium"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", "status-" + ctx_r1.order().status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(ctx_r1.order().status));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("paid", ctx_r1.order().payment_status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.order().payment_status ? "Paid" : "Mark as Paid", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.order().franchise_admin_id ? "Reassign Franchise" : "Assign Franchise", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().franchise_admin_id);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.order().user);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(37, 21, ctx_r1.order().sub_total, "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(43, 24, ctx_r1.order().tax, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order().coupon_amount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().delivery_charge > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(51, 27, ctx_r1.order().total, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_15_0 = ctx_r1.order().items) == null ? null : tmp_15_0.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().order_note);
  }
}
function OrderDetailComponent_div_8_button_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "(Current)");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_8_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function OrderDetailComponent_div_8_button_11_Template_button_click_0_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pendingStatus.set(s_r6.value));
    });
    \u0275\u0275element(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275template(3, OrderDetailComponent_div_8_button_11_span_3_Template, 2, 0, "span", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_7_0;
    const s_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.pendingStatus() === s_r6.value)("current", ((tmp_4_0 = ctx_r1.order()) == null ? null : tmp_4_0.status) === s_r6.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "dot-" + s_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r6.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.order()) == null ? null : tmp_7_0.status) === s_r6.value);
  }
}
function OrderDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function OrderDetailComponent_div_8_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.statusModalOpen.set(false));
    });
    \u0275\u0275elementStart(1, "div", 46);
    \u0275\u0275listener("click", function OrderDetailComponent_div_8_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 47)(3, "h3");
    \u0275\u0275text(4, "Change Order Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 48);
    \u0275\u0275listener("click", function OrderDetailComponent_div_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.statusModalOpen.set(false));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 49)(8, "p");
    \u0275\u0275text(9, "Select new status for this order:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 50);
    \u0275\u0275template(11, OrderDetailComponent_div_8_button_11_Template, 4, 7, "button", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 52)(13, "button", 53);
    \u0275\u0275listener("click", function OrderDetailComponent_div_8_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.statusModalOpen.set(false));
    });
    \u0275\u0275text(14, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 54);
    \u0275\u0275listener("click", function OrderDetailComponent_div_8_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmStatusChange());
    });
    \u0275\u0275text(16, "Update Status");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r1.statuses);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.pendingStatus() === ((tmp_2_0 = ctx_r1.order()) == null ? null : tmp_2_0.status));
  }
}
function OrderDetailComponent_div_10_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r8 = ctx.$implicit;
    \u0275\u0275property("value", f_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", f_r8.name, " (", f_r8.email, ")");
  }
}
function OrderDetailComponent_div_10_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "p");
    \u0275\u0275text(2, "No franchise admins found.");
    \u0275\u0275elementEnd()();
  }
}
function OrderDetailComponent_div_10_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "div", 69);
    \u0275\u0275text(2, " Loading...");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function OrderDetailComponent_div_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.franchiseModalOpen.set(false));
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function OrderDetailComponent_div_10_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 47)(3, "h3");
    \u0275\u0275text(4, "Assign to Franchise Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 48);
    \u0275\u0275listener("click", function OrderDetailComponent_div_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.franchiseModalOpen.set(false));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 49)(8, "div", 60)(9, "label");
    \u0275\u0275text(10, "Select Franchise Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function OrderDetailComponent_div_10_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedFranchiseId, $event) || (ctx_r1.selectedFranchiseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 62);
    \u0275\u0275text(13, "-- Select Franchise --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, OrderDetailComponent_div_10_option_14_Template, 2, 3, "option", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, OrderDetailComponent_div_10_div_15_Template, 3, 0, "div", 64)(16, OrderDetailComponent_div_10_div_16_Template, 3, 0, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 52)(18, "button", 53);
    \u0275\u0275listener("click", function OrderDetailComponent_div_10_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.franchiseModalOpen.set(false));
    });
    \u0275\u0275text(19, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 54);
    \u0275\u0275listener("click", function OrderDetailComponent_div_10_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.assignFranchise());
    });
    \u0275\u0275text(21, "Assign");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedFranchiseId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.franchiseAdmins());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.franchiseAdmins().length === 0 && !ctx_r1.franchiseLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.franchiseLoading());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.selectedFranchiseId);
  }
}
var OrderDetailComponent = class _OrderDetailComponent {
  http;
  route;
  router;
  toast;
  order = signal(null);
  loading = signal(true);
  statusModalOpen = signal(false);
  paymentModalOpen = signal(false);
  franchiseModalOpen = signal(false);
  pendingStatus = signal(0);
  franchiseAdmins = signal([]);
  franchiseLoading = signal(false);
  selectedFranchiseId = "";
  statuses = [
    { value: 0, label: "Pending" },
    { value: 1, label: "Accepted" },
    { value: 2, label: "In Progress" },
    { value: 3, label: "Completed" },
    { value: 4, label: "Cancelled" }
  ];
  constructor(http, route, router, toast) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.toast = toast;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.http.get(`${environment.apiUrl}/admin/orders/${id}`).subscribe({
      next: (res) => this.order.set(res.data),
      error: () => {
        this.toast.error("Failed to load order");
        this.router.navigate(["/admin/orders/all-orders"]);
      },
      complete: () => this.loading.set(false)
    });
  }
  statusLabel(status) {
    return this.statuses.find((s) => s.value === status)?.label || "Unknown";
  }
  openStatusModal() {
    this.pendingStatus.set(this.order()?.status || 0);
    this.statusModalOpen.set(true);
  }
  confirmStatusChange() {
    const o = this.order();
    const newStatus = this.pendingStatus();
    this.http.put(`${environment.apiUrl}/admin/orders/${o.id}/status`, { status: newStatus }).subscribe({
      next: () => {
        this.order.set(__spreadProps(__spreadValues({}, o), { status: newStatus }));
        this.toast.success(`Order status changed to ${this.statusLabel(newStatus)}`);
        this.statusModalOpen.set(false);
      },
      error: () => this.toast.error("Failed to update order status")
    });
  }
  openPaymentModal() {
    this.paymentModalOpen.set(true);
  }
  confirmPaymentChange() {
    const o = this.order();
    const newStatus = o.payment_status ? 0 : 1;
    this.http.put(`${environment.apiUrl}/admin/orders/${o.id}/payment-status`, { payment_status: newStatus }).subscribe({
      next: () => {
        this.order.set(__spreadProps(__spreadValues({}, o), { payment_status: newStatus }));
        this.toast.success(newStatus ? "Payment marked as paid" : "Payment marked as unpaid");
        this.paymentModalOpen.set(false);
      },
      error: () => {
        this.toast.error("Failed to update payment status");
        this.paymentModalOpen.set(false);
      }
    });
  }
  openFranchiseModal() {
    this.franchiseModalOpen.set(true);
    this.selectedFranchiseId = this.order()?.franchise_admin_id?.toString() || "";
    this.loadFranchiseAdmins();
  }
  loadFranchiseAdmins() {
    this.franchiseLoading.set(true);
    this.http.get(`${environment.apiUrl}/admin/franchises`).subscribe({
      next: (res) => this.franchiseAdmins.set(res.data || []),
      error: () => this.franchiseAdmins.set([]),
      complete: () => this.franchiseLoading.set(false)
    });
  }
  assignFranchise() {
    if (!this.selectedFranchiseId)
      return;
    const o = this.order();
    this.http.put(`${environment.apiUrl}/admin/orders/${o.id}`, { franchise_admin_id: +this.selectedFranchiseId }).subscribe({
      next: () => {
        const admin = this.franchiseAdmins().find((f) => f.id == this.selectedFranchiseId);
        this.order.set(__spreadProps(__spreadValues({}, o), { franchise_admin_id: +this.selectedFranchiseId, franchiseAdmin: admin }));
        this.toast.success("Franchise admin assigned successfully");
        this.franchiseModalOpen.set(false);
      },
      error: () => this.toast.error("Failed to assign franchise admin")
    });
  }
  static \u0275fac = function OrderDetailComponent_Factory(t) {
    return new (t || _OrderDetailComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailComponent, selectors: [["app-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 9, consts: [[1, "page-header"], ["routerLink", "/admin/orders/all-orders", 1, "back-btn"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], ["class", "loading-center", 4, "ngIf"], [4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [3, "confirmed", "cancelled", "open", "title", "message", "confirmText", "type"], [1, "loading-center"], [1, "spinner"], [1, "order-header"], [1, "order-title"], [1, "order-date"], [1, "order-controls"], [1, "btn-status", 3, "click"], [1, "status-badge", 3, "ngClass"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "6 9 12 15 18 9"], [1, "btn-payment", 3, "click"], [1, "btn-franchise", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 00-3-3.87"], ["d", "M16 3.13a4 4 0 010 7.75"], ["class", "franchise-info", 4, "ngIf"], [1, "detail-grid"], [1, "detail-card"], ["class", "customer-block", 4, "ngIf"], [1, "detail-row"], [1, "label"], ["class", "detail-row", 4, "ngIf"], [1, "detail-row", "total-row"], [1, "total-amount"], ["class", "detail-card", 4, "ngIf"], [1, "franchise-info"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "customer-block"], [1, "text-green"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "item-cell"], [1, "fw-600"], [1, "note-text"], [1, "modal-overlay", 3, "click"], [1, "status-modal", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "status-options"], ["class", "status-option", 3, "active", "current", "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "status-option", 3, "click"], [1, "status-dot", 3, "ngClass"], ["class", "current-label", 4, "ngIf"], [1, "current-label"], [1, "franchise-modal", 3, "click"], [1, "form-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "franchise-empty", 4, "ngIf"], ["class", "loading-small", 4, "ngIf"], [3, "value"], [1, "franchise-empty"], [1, "loading-small"], [1, "spinner-sm"]], template: function OrderDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3)(4, "polyline", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " Back to Orders ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, OrderDetailComponent_div_6_Template, 2, 0, "div", 5)(7, OrderDetailComponent_div_7_Template, 55, 30, "div", 6)(8, OrderDetailComponent_div_8_Template, 17, 2, "div", 7);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "app-confirm-modal", 8);
      \u0275\u0275listener("confirmed", function OrderDetailComponent_Template_app_confirm_modal_confirmed_9_listener() {
        return ctx.confirmPaymentChange();
      })("cancelled", function OrderDetailComponent_Template_app_confirm_modal_cancelled_9_listener() {
        return ctx.paymentModalOpen.set(false);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, OrderDetailComponent_div_10_Template, 22, 5, "div", 7);
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.order() && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.statusModalOpen());
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.paymentModalOpen())("title", ((tmp_4_0 = ctx.order()) == null ? null : tmp_4_0.payment_status) ? "Mark as Unpaid" : "Mark as Paid")("message", ((tmp_5_0 = ctx.order()) == null ? null : tmp_5_0.payment_status) ? "Mark this order as unpaid?" : "Confirm payment received for this order?")("confirmText", ((tmp_6_0 = ctx.order()) == null ? null : tmp_6_0.payment_status) ? "Mark Unpaid" : "Confirm Payment")("type", ((tmp_7_0 = ctx.order()) == null ? null : tmp_7_0.payment_status) ? "warning" : "info");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.franchiseModalOpen());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: #64748b;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.order-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.order-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.order-date[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.order-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.btn-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n}\n.btn-status[_ngcontent-%COMP%]:hover {\n  border-color: #e31b23;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-0[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.status-1[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.status-2[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4f46e5;\n}\n.status-3[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.status-4[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.btn-payment[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border: 2px solid #e31b23;\n  border-radius: 8px;\n  background: transparent;\n  color: #e31b23;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 13px;\n}\n.btn-payment.paid[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  border-color: #16a34a;\n  color: #16a34a;\n}\n.btn-payment[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.btn-franchise[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid #8b5cf6;\n  border-radius: 8px;\n  background: #f5f3ff;\n  color: #7c3aed;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 13px;\n  transition: all 0.2s;\n}\n.btn-franchise[_ngcontent-%COMP%]:hover {\n  background: #ede9fe;\n}\n.franchise-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f5f3ff;\n  border: 1px solid #ddd6fe;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  color: #7c3aed;\n  font-size: 14px;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.detail-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n}\n.detail-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid #f8f9fa;\n}\n.detail-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n}\n.total-row[_ngcontent-%COMP%] {\n  border-top: 2px solid #e5e7eb;\n  margin-top: 8px;\n  padding-top: 12px;\n}\n.total-amount[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #e31b23;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 600;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f8f9fa;\n}\n.item-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.fw-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.note-text[_ngcontent-%COMP%] {\n  color: #334155;\n  line-height: 1.6;\n  margin: 0;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9998;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.status-modal[_ngcontent-%COMP%], .franchise-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  width: 90vw;\n  max-width: 480px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 28px;\n  cursor: pointer;\n  color: #64748b;\n  line-height: 1;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  color: #64748b;\n  font-size: 14px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  background: #e31b23;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.status-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.status-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #334155;\n  transition: all 0.2s;\n  text-align: left;\n}\n.status-option[_ngcontent-%COMP%]:hover {\n  border-color: #e31b23;\n  background: #fff5f5;\n}\n.status-option.active[_ngcontent-%COMP%] {\n  border-color: #e31b23;\n  background: #fff5f5;\n  box-shadow: 0 0 0 2px rgba(227, 27, 35, 0.15);\n}\n.status-option.current[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.current-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  margin-left: auto;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.dot-0[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.dot-1[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.dot-2[_ngcontent-%COMP%] {\n  background: #4f46e5;\n}\n.dot-3[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.dot-4[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #334155;\n  font-size: 14px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n}\n.franchise-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px;\n  color: #94a3b8;\n}\n.loading-small[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px;\n  color: #64748b;\n  font-size: 14px;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@media (max-width: 768px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .order-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailComponent, { className: "OrderDetailComponent", filePath: "src\\app\\features\\admin\\orders\\order-detail.component.ts", lineNumber: 245 });
})();
export {
  OrderDetailComponent
};
