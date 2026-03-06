import {
  ConfirmModalComponent
} from "./chunk-M673IPVF.js";
import {
  ToastService
} from "./chunk-CUQ723YT.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-5WG63XSG.js";
import {
  AuthService
} from "./chunk-R5YFSE7W.js";
import {
  ActivatedRoute,
  Router,
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
} from "./chunk-RLLOV7VK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-LRITERKE.js";

// src/app/features/admin/orders/order-detail.component.ts
function OrderDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_7_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function OrderDetailComponent_div_7_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openFranchiseModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 26);
    \u0275\u0275element(2, "path", 42)(3, "circle", 43)(4, "path", 44)(5, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.order().franchise_admin_id ? "Reassign Franchise" : "Assign Franchise", " ");
  }
}
function OrderDetailComponent_div_7_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 47);
    \u0275\u0275element(2, "path", 42)(3, "circle", 43);
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
function OrderDetailComponent_div_7_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34)(7, "span", 35);
    \u0275\u0275text(8, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 34)(12, "span", 35);
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
function OrderDetailComponent_div_7_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 49);
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
function OrderDetailComponent_div_7_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
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
function OrderDetailComponent_div_7_div_55_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 52)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 53);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((item_r4.service == null ? null : item_r4.service.title) || "Service #" + item_r4.service_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(7, 4, item_r4.price, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(12, 7, item_r4.price * item_r4.qty, "1.2-2"), "");
  }
}
function OrderDetailComponent_div_7_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "h3");
    \u0275\u0275text(2, "Order Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "table", 50)(4, "thead")(5, "tr")(6, "th");
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
    \u0275\u0275template(15, OrderDetailComponent_div_7_div_55_tr_15_Template, 13, 10, "tr", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.order().items);
  }
}
function OrderDetailComponent_div_7_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "h3");
    \u0275\u0275text(2, "Delivery Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "span", 35);
    \u0275\u0275text(5, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 34)(9, "span", 35);
    \u0275\u0275text(10, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 34)(14, "span", 35);
    \u0275\u0275text(15, "Post Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 34)(19, "span", 35);
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
function OrderDetailComponent_div_7_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "h3");
    \u0275\u0275text(2, "Order Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.order().order_note);
  }
}
function OrderDetailComponent_div_7_div_58_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.order().refund.cancel_reason);
  }
}
function OrderDetailComponent_div_7_div_58_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "button", 64);
    \u0275\u0275listener("click", function OrderDetailComponent_div_7_div_58_div_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateRefundStatus(1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "polyline", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Approve Refund ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 66);
    \u0275\u0275listener("click", function OrderDetailComponent_div_7_div_58_div_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateRefundStatus(2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 26);
    \u0275\u0275element(7, "line", 67)(8, "line", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Reject Refund ");
    \u0275\u0275elementEnd()();
  }
}
function OrderDetailComponent_div_7_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 2);
    \u0275\u0275element(4, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Refund Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 59);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 60);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 61);
    \u0275\u0275template(13, OrderDetailComponent_div_7_div_58_div_13_Template, 5, 1, "div", 36);
    \u0275\u0275elementStart(14, "div", 34)(15, "span", 35);
    \u0275\u0275text(16, "Order Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 53);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, OrderDetailComponent_div_7_div_58_div_20_Template, 10, 0, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", "refund-" + ctx_r1.refundStatusLabel(ctx_r1.order().refund.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.refundStatusLabel(ctx_r1.order().refund.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 6, ctx_r1.order().refund.created_at, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.order().refund.cancel_reason);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(19, 9, ctx_r1.order().total, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order().refund.status === 0);
  }
}
function OrderDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 13)(2, "div")(3, "h1", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15)(6, "span", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 17);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 18)(12, "button", 19);
    \u0275\u0275listener("click", function OrderDetailComponent_div_7_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openStatusModal());
    });
    \u0275\u0275elementStart(13, "span", 20);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 21);
    \u0275\u0275element(16, "polyline", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "button", 23);
    \u0275\u0275listener("click", function OrderDetailComponent_div_7_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPaymentModal());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, OrderDetailComponent_div_7_button_19_Template, 7, 1, "button", 24);
    \u0275\u0275elementStart(20, "button", 25);
    \u0275\u0275listener("click", function OrderDetailComponent_div_7_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadInvoice());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 26);
    \u0275\u0275element(22, "path", 27)(23, "polyline", 28)(24, "line", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Download Invoice ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, OrderDetailComponent_div_7_div_26_Template, 8, 1, "div", 30);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "div", 31)(28, "div", 32)(29, "h3");
    \u0275\u0275text(30, "Customer Information");
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, OrderDetailComponent_div_7_div_31_Template, 16, 4, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 32)(33, "h3");
    \u0275\u0275text(34, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 34)(36, "span", 35);
    \u0275\u0275text(37, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 34)(42, "span", 35);
    \u0275\u0275text(43, "Tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, OrderDetailComponent_div_7_div_47_Template, 6, 5, "div", 36)(48, OrderDetailComponent_div_7_div_48_Template, 6, 4, "div", 36);
    \u0275\u0275elementStart(49, "div", 37)(50, "span", 35);
    \u0275\u0275text(51, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 38);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(55, OrderDetailComponent_div_7_div_55_Template, 16, 1, "div", 39)(56, OrderDetailComponent_div_7_div_56_Template, 23, 4, "div", 39)(57, OrderDetailComponent_div_7_div_57_Template, 5, 1, "div", 39)(58, OrderDetailComponent_div_7_div_58_Template, 21, 12, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_18_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Order ", ctx_r1.order().invoice_number || "#" + ctx_r1.order().id, "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("type-service", ctx_r1.getOrderType() === "service")("type-product", ctx_r1.getOrderType() === "product");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getOrderType() === "service" ? "Service Order" : "Product Order", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 24, ctx_r1.order().created_at, "medium"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", "status-" + ctx_r1.order().status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(ctx_r1.order().status));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("paid", ctx_r1.order().payment_status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.order().payment_status ? "Paid" : "Mark as Paid", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSuperAdmin);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.order().franchise_admin_id);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.order().user);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(40, 27, ctx_r1.order().sub_total, "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(46, 30, ctx_r1.order().tax, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order().coupon_amount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().delivery_charge > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(54, 33, ctx_r1.order().total, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_18_0 = ctx_r1.order().items) == null ? null : tmp_18_0.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().order_note);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().refund);
  }
}
function OrderDetailComponent_div_8_button_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275text(1, "(Current)");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_8_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function OrderDetailComponent_div_8_button_11_Template_button_click_0_listener() {
      const s_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pendingStatus.set(s_r8.value));
    });
    \u0275\u0275element(1, "span", 80);
    \u0275\u0275text(2);
    \u0275\u0275template(3, OrderDetailComponent_div_8_button_11_span_3_Template, 2, 0, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_7_0;
    const s_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.pendingStatus() === s_r8.value)("current", ((tmp_4_0 = ctx_r1.order()) == null ? null : tmp_4_0.status) === s_r8.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "dot-" + s_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r8.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.order()) == null ? null : tmp_7_0.status) === s_r8.value);
  }
}
function OrderDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function OrderDetailComponent_div_8_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.statusModalOpen.set(false));
    });
    \u0275\u0275elementStart(1, "div", 70);
    \u0275\u0275listener("click", function OrderDetailComponent_div_8_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 71)(3, "h3");
    \u0275\u0275text(4, "Change Order Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 72);
    \u0275\u0275listener("click", function OrderDetailComponent_div_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.statusModalOpen.set(false));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 73)(8, "p");
    \u0275\u0275text(9, "Select new status for this order:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 74);
    \u0275\u0275template(11, OrderDetailComponent_div_8_button_11_Template, 4, 7, "button", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 76)(13, "button", 77);
    \u0275\u0275listener("click", function OrderDetailComponent_div_8_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.statusModalOpen.set(false));
    });
    \u0275\u0275text(14, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 78);
    \u0275\u0275listener("click", function OrderDetailComponent_div_8_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showStatusConfirm());
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
function OrderDetailComponent_div_11_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r10 = ctx.$implicit;
    \u0275\u0275property("value", f_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", f_r10.name, " (", f_r10.email, ")");
  }
}
function OrderDetailComponent_div_11_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "p");
    \u0275\u0275text(2, "No franchise admins found.");
    \u0275\u0275elementEnd()();
  }
}
function OrderDetailComponent_div_11_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275element(1, "div", 96);
    \u0275\u0275text(2, " Loading...");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function OrderDetailComponent_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.franchiseModalOpen.set(false));
    });
    \u0275\u0275elementStart(1, "div", 83);
    \u0275\u0275listener("click", function OrderDetailComponent_div_11_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 71)(3, "h3");
    \u0275\u0275text(4, "Assign to Franchise Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 72);
    \u0275\u0275listener("click", function OrderDetailComponent_div_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.franchiseModalOpen.set(false));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 73)(8, "div", 84)(9, "label");
    \u0275\u0275text(10, "Select Franchise Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 85)(12, "select", 86);
    \u0275\u0275twoWayListener("ngModelChange", function OrderDetailComponent_div_11_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedFranchiseId, $event) || (ctx_r1.selectedFranchiseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 87);
    \u0275\u0275text(14, "-- Select Franchise Admin --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, OrderDetailComponent_div_11_option_15_Template, 2, 3, "option", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 89);
    \u0275\u0275element(17, "path", 90);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, OrderDetailComponent_div_11_div_18_Template, 3, 0, "div", 91)(19, OrderDetailComponent_div_11_div_19_Template, 3, 0, "div", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 76)(21, "button", 77);
    \u0275\u0275listener("click", function OrderDetailComponent_div_11_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.franchiseModalOpen.set(false));
    });
    \u0275\u0275text(22, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 78);
    \u0275\u0275listener("click", function OrderDetailComponent_div_11_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAssignConfirm());
    });
    \u0275\u0275text(24, "Assign");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedFranchiseId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.franchiseAdmins());
    \u0275\u0275advance(3);
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
  authService;
  order = signal(null);
  loading = signal(true);
  statusModalOpen = signal(false);
  statusConfirmOpen = signal(false);
  statusUpdating = signal(false);
  paymentModalOpen = signal(false);
  franchiseModalOpen = signal(false);
  assignConfirmOpen = signal(false);
  assignUpdating = signal(false);
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
  isSuperAdmin = false;
  constructor(http, route, router, toast, authService) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.toast = toast;
    this.authService = authService;
    const admin = this.authService.currentAdmin;
    this.isSuperAdmin = admin ? !admin.is_franchise : false;
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
  showStatusConfirm() {
    this.statusModalOpen.set(false);
    this.statusConfirmOpen.set(true);
  }
  confirmStatusChange() {
    const o = this.order();
    const newStatus = this.pendingStatus();
    this.statusUpdating.set(true);
    this.http.put(`${environment.apiUrl}/admin/orders/${o.id}/status`, { status: newStatus }).subscribe({
      next: () => {
        this.order.set(__spreadProps(__spreadValues({}, o), { status: newStatus }));
        this.toast.success(`Order status changed to ${this.statusLabel(newStatus)}`);
        this.statusConfirmOpen.set(false);
        this.statusUpdating.set(false);
      },
      error: () => {
        this.toast.error("Failed to update order status");
        this.statusUpdating.set(false);
      }
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
  showAssignConfirm() {
    this.franchiseModalOpen.set(false);
    this.assignConfirmOpen.set(true);
  }
  getSelectedFranchiseName() {
    const admin = this.franchiseAdmins().find((f) => f.id == this.selectedFranchiseId);
    return admin?.name || "Selected Admin";
  }
  confirmAssignFranchise() {
    if (!this.selectedFranchiseId)
      return;
    const o = this.order();
    this.assignUpdating.set(true);
    this.http.put(`${environment.apiUrl}/admin/orders/${o.id}`, { franchise_admin_id: +this.selectedFranchiseId }).subscribe({
      next: () => {
        const admin = this.franchiseAdmins().find((f) => f.id == this.selectedFranchiseId);
        this.order.set(__spreadProps(__spreadValues({}, o), { franchise_admin_id: +this.selectedFranchiseId, franchiseAdmin: admin }));
        const msg = this.getOrderType() === "service" ? "Franchise admin assigned & service request created" : "Franchise admin assigned";
        this.toast.success(msg);
        this.assignConfirmOpen.set(false);
        this.assignUpdating.set(false);
      },
      error: () => {
        this.toast.error("Failed to assign franchise admin");
        this.assignUpdating.set(false);
      }
    });
  }
  getOrderType() {
    const items = this.order()?.items || [];
    const hasProduct = items.some((i) => i.service?.type === 1);
    return hasProduct ? "product" : "service";
  }
  refundStatusLabel(status) {
    const map = { 0: "pending", 1: "approved", 2: "rejected" };
    return map[status] || "pending";
  }
  updateRefundStatus(status) {
    const o = this.order();
    if (!o?.refund)
      return;
    const label = status === 1 ? "approve" : "reject";
    if (!confirm(`Are you sure you want to ${label} this refund request?`))
      return;
    this.http.put(`${environment.apiUrl}/admin/refunded-orders/${o.refund.id}/status`, { status }).subscribe({
      next: () => {
        this.order.set(__spreadProps(__spreadValues({}, o), { refund: __spreadProps(__spreadValues({}, o.refund), { status }) }));
        this.toast.success(`Refund ${label === "approve" ? "approved" : "rejected"} successfully`);
      },
      error: () => this.toast.error(`Failed to ${label} refund`)
    });
  }
  downloadInvoice() {
    const o = this.order();
    if (!o)
      return;
    this.http.get(`${environment.apiUrl}/admin/orders/${o.id}/invoice`, { responseType: "text" }).subscribe({
      next: (html) => {
        const printWindow = window.open("", "_blank");
        if (!printWindow) {
          this.toast.error("Pop-up blocked. Please allow pop-ups.");
          return;
        }
        const printHtml = html.replace("</body>", `
          <script>
            window.onload = function() {
              setTimeout(function() { window.print(); }, 300);
              window.onafterprint = function() { window.close(); };
            };
          <\/script></body>`);
        printWindow.document.write(printHtml);
        printWindow.document.close();
      },
      error: () => this.toast.error("Failed to generate invoice")
    });
  }
  static \u0275fac = function OrderDetailComponent_Factory(t) {
    return new (t || _OrderDetailComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailComponent, selectors: [["app-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 15, consts: [[1, "page-header"], ["routerLink", "/admin/orders/all-orders", 1, "back-btn"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], ["class", "loading-center", 4, "ngIf"], [4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["title", "Confirm Status Change", "confirmText", "Yes, Update", "type", "warning", 3, "confirmed", "cancelled", "open", "message", "loading"], [3, "confirmed", "cancelled", "open", "title", "message", "confirmText", "type"], ["title", "Confirm Assignment", "confirmText", "Yes, Assign", "type", "info", 3, "confirmed", "cancelled", "open", "message", "loading"], [1, "loading-center"], [1, "spinner"], [1, "order-header"], [1, "order-title"], [1, "order-meta-row"], [1, "type-badge"], [1, "order-date"], [1, "order-controls"], [1, "btn-status", 3, "click"], [1, "status-badge", 3, "ngClass"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "6 9 12 15 18 9"], [1, "btn-payment", 3, "click"], ["class", "btn-franchise", 3, "click", 4, "ngIf"], [1, "btn-invoice", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], ["class", "franchise-info", 4, "ngIf"], [1, "detail-grid"], [1, "detail-card"], ["class", "customer-block", 4, "ngIf"], [1, "detail-row"], [1, "label"], ["class", "detail-row", 4, "ngIf"], [1, "detail-row", "total-row"], [1, "total-amount"], ["class", "detail-card", 4, "ngIf"], ["class", "refund-card", 4, "ngIf"], [1, "btn-franchise", 3, "click"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 00-3-3.87"], ["d", "M16 3.13a4 4 0 010 7.75"], [1, "franchise-info"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "customer-block"], [1, "text-green"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "item-cell"], [1, "fw-600"], [1, "note-text"], [1, "refund-card"], [1, "refund-header"], [1, "refund-title-row"], ["d", "M3 10h10a8 8 0 018 8v2M3 10l6 6M3 10l6-6"], [1, "refund-status-badge", 3, "ngClass"], [1, "refund-date"], [1, "refund-body"], ["class", "refund-actions", 4, "ngIf"], [1, "refund-actions"], [1, "btn-refund-approve", 3, "click"], ["points", "20 6 9 17 4 12"], [1, "btn-refund-reject", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-overlay", 3, "click"], [1, "status-modal", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "status-options"], ["class", "status-option", 3, "active", "current", "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "status-option", 3, "click"], [1, "status-dot", 3, "ngClass"], ["class", "current-label", 4, "ngIf"], [1, "current-label"], [1, "franchise-modal", 3, "click"], [1, "form-group"], [1, "custom-select-wrap"], [1, "custom-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#64748b", "stroke-width", "2", 1, "select-arrow"], ["d", "M6 9l6 6 6-6"], ["class", "franchise-empty", 4, "ngIf"], ["class", "loading-small", 4, "ngIf"], [3, "value"], [1, "franchise-empty"], [1, "loading-small"], [1, "spinner-sm"]], template: function OrderDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3)(4, "polyline", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " Back to Orders ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, OrderDetailComponent_div_6_Template, 2, 0, "div", 5)(7, OrderDetailComponent_div_7_Template, 59, 36, "div", 6)(8, OrderDetailComponent_div_8_Template, 17, 2, "div", 7);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "app-confirm-modal", 8);
      \u0275\u0275listener("confirmed", function OrderDetailComponent_Template_app_confirm_modal_confirmed_9_listener() {
        return ctx.confirmStatusChange();
      })("cancelled", function OrderDetailComponent_Template_app_confirm_modal_cancelled_9_listener() {
        return ctx.statusConfirmOpen.set(false);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "app-confirm-modal", 9);
      \u0275\u0275listener("confirmed", function OrderDetailComponent_Template_app_confirm_modal_confirmed_10_listener() {
        return ctx.confirmPaymentChange();
      })("cancelled", function OrderDetailComponent_Template_app_confirm_modal_cancelled_10_listener() {
        return ctx.paymentModalOpen.set(false);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, OrderDetailComponent_div_11_Template, 25, 5, "div", 7);
      \u0275\u0275elementStart(12, "app-confirm-modal", 10);
      \u0275\u0275listener("confirmed", function OrderDetailComponent_Template_app_confirm_modal_confirmed_12_listener() {
        return ctx.confirmAssignFranchise();
      })("cancelled", function OrderDetailComponent_Template_app_confirm_modal_cancelled_12_listener() {
        return ctx.assignConfirmOpen.set(false);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.order() && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.statusModalOpen());
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.statusConfirmOpen())("message", 'Change order status from "' + ctx.statusLabel((tmp_4_0 = ctx.order()) == null ? null : tmp_4_0.status) + '" to "' + ctx.statusLabel(ctx.pendingStatus()) + '"?')("loading", ctx.statusUpdating());
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.paymentModalOpen())("title", ((tmp_7_0 = ctx.order()) == null ? null : tmp_7_0.payment_status) ? "Mark as Unpaid" : "Mark as Paid")("message", ((tmp_8_0 = ctx.order()) == null ? null : tmp_8_0.payment_status) ? "Mark this order as unpaid?" : "Confirm payment received for this order?")("confirmText", ((tmp_9_0 = ctx.order()) == null ? null : tmp_9_0.payment_status) ? "Mark Unpaid" : "Confirm Payment")("type", ((tmp_10_0 = ctx.order()) == null ? null : tmp_10_0.payment_status) ? "warning" : "info");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.franchiseModalOpen());
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.assignConfirmOpen())("message", 'Assign this order to "' + ctx.getSelectedFranchiseName() + '"?' + (ctx.getOrderType() === "service" ? " A service request will be created automatically." : ""))("loading", ctx.assignUpdating());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: #64748b;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.order-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.order-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.order-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 6px;\n}\n.order-date[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.type-service[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.type-product[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.order-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.btn-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n}\n.btn-status[_ngcontent-%COMP%]:hover {\n  border-color: #e31b23;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-0[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.status-1[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.status-2[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4f46e5;\n}\n.status-3[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.status-4[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.btn-payment[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border: 2px solid #e31b23;\n  border-radius: 8px;\n  background: transparent;\n  color: #e31b23;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 13px;\n}\n.btn-payment.paid[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  border-color: #16a34a;\n  color: #16a34a;\n}\n.btn-payment[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.btn-franchise[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid #8b5cf6;\n  border-radius: 8px;\n  background: #f5f3ff;\n  color: #7c3aed;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 13px;\n  transition: all 0.2s;\n}\n.btn-franchise[_ngcontent-%COMP%]:hover {\n  background: #ede9fe;\n}\n.btn-invoice[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid #e31b23;\n  border-radius: 8px;\n  background: #fff;\n  color: #e31b23;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 13px;\n  transition: all 0.2s;\n}\n.btn-invoice[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.franchise-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f5f3ff;\n  border: 1px solid #ddd6fe;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  color: #7c3aed;\n  font-size: 14px;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.detail-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n}\n.detail-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid #f8f9fa;\n}\n.detail-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n}\n.total-row[_ngcontent-%COMP%] {\n  border-top: 2px solid #e5e7eb;\n  margin-top: 8px;\n  padding-top: 12px;\n}\n.total-amount[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #e31b23;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 600;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f8f9fa;\n}\n.item-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.fw-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.note-text[_ngcontent-%COMP%] {\n  color: #334155;\n  line-height: 1.6;\n  margin: 0;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9998;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.status-modal[_ngcontent-%COMP%], .franchise-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  width: 90vw;\n  max-width: 480px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 28px;\n  cursor: pointer;\n  color: #64748b;\n  line-height: 1;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  color: #64748b;\n  font-size: 14px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  background: #e31b23;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.status-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.status-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #334155;\n  transition: all 0.2s;\n  text-align: left;\n}\n.status-option[_ngcontent-%COMP%]:hover {\n  border-color: #e31b23;\n  background: #fff5f5;\n}\n.status-option.active[_ngcontent-%COMP%] {\n  border-color: #e31b23;\n  background: #fff5f5;\n  box-shadow: 0 0 0 2px rgba(227, 27, 35, 0.15);\n}\n.status-option.current[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.current-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  margin-left: auto;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.dot-0[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.dot-1[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.dot-2[_ngcontent-%COMP%] {\n  background: #4f46e5;\n}\n.dot-3[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.dot-4[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #334155;\n  font-size: 14px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n}\n.custom-select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.custom-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 40px 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #334155;\n  background: #fff;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\n.custom-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);\n}\n.select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n.franchise-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px;\n  color: #94a3b8;\n}\n.loading-small[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px;\n  color: #64748b;\n  font-size: 14px;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.refund-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n  border-left: 4px solid #f59e0b;\n}\n.refund-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.refund-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.refund-title-row[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.refund-date[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n}\n.refund-status-badge[_ngcontent-%COMP%] {\n  padding: 3px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.refund-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.refund-approved[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.refund-rejected[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.refund-body[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.refund-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding-top: 16px;\n  border-top: 1px solid #f1f5f9;\n}\n.btn-refund-approve[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  background: #16a34a;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.2s;\n}\n.btn-refund-approve[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.btn-refund-reject[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  background: #dc2626;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.2s;\n}\n.btn-refund-reject[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n@media (max-width: 768px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .order-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailComponent, { className: "OrderDetailComponent", filePath: "src\\app\\features\\admin\\orders\\order-detail.component.ts", lineNumber: 340 });
})();
export {
  OrderDetailComponent
};
