import {
  ToastService
} from "./chunk-CUQ723YT.js";
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
  ActivatedRoute,
  Router,
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
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/client/orders/order-detail.component.ts
function ClientOrderDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading order details...");
    \u0275\u0275elementEnd()();
  }
}
function ClientOrderDetailComponent_div_5_div_10_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2022 ", ctx_r1.order().refund.cancel_reason, "");
  }
}
function ClientOrderDetailComponent_div_5_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 40);
    \u0275\u0275element(2, "circle", 41)(3, "path", 42)(4, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ClientOrderDetailComponent_div_5_div_10_span_11_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Refund ", ctx_r1.getRefundStatusLabel(ctx_r1.order().refund.status), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u2014 ", \u0275\u0275pipeBind4(10, 3, ctx_r1.order().refund.amount, "INR", "symbol", "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order().refund.cancel_reason);
  }
}
function ClientOrderDetailComponent_div_5_div_17_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 53);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(2, 1, item_r4.service == null ? null : item_r4.service.description, 0, 100));
  }
}
function ClientOrderDetailComponent_div_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "img", 48);
    \u0275\u0275listener("error", function ClientOrderDetailComponent_div_5_div_17_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImgError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 49)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ClientOrderDetailComponent_div_5_div_17_p_6_Template, 3, 5, "p", 50);
    \u0275\u0275elementStart(7, "div", 51)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 52);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getServiceImage(item_r4.service), \u0275\u0275sanitizeUrl)("alt", item_r4.service == null ? null : item_r4.service.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((item_r4.service == null ? null : item_r4.service.title) || "Service");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r4.service == null ? null : item_r4.service.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Qty: ", item_r4.qty || item_r4.quantity || 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind4(12, 7, item_r4.price, "INR", "symbol", "1.0-0"), " each");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(15, 12, (item_r4.qty || item_r4.quantity || 1) * item_r4.price, "INR", "symbol", "1.0-0"), " ");
  }
}
function ClientOrderDetailComponent_div_5_div_25_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.order().coupon_code, ")");
  }
}
function ClientOrderDetailComponent_div_5_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span");
    \u0275\u0275text(2, "Discount ");
    \u0275\u0275template(3, ClientOrderDetailComponent_div_5_div_25_span_3_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 55);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.order().coupon_code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind4(6, 2, ctx_r1.order().coupon_amount, "INR", "symbol", "1.0-0"), "");
  }
}
function ClientOrderDetailComponent_div_5_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span");
    \u0275\u0275text(2, "Delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 1, ctx_r1.order().delivery_charge, "INR", "symbol", "1.0-0"));
  }
}
function ClientOrderDetailComponent_div_5_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span");
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
function ClientOrderDetailComponent_div_5_div_34_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span");
    \u0275\u0275text(2, "Scheduled Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r1.order().date, "dd MMM yyyy"));
  }
}
function ClientOrderDetailComponent_div_5_div_34_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span");
    \u0275\u0275text(2, "Time Slot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.order().schedule);
  }
}
function ClientOrderDetailComponent_div_5_div_34_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span");
    \u0275\u0275text(2, "Delivery Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.order().delivery_mode);
  }
}
function ClientOrderDetailComponent_div_5_div_34_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span");
    \u0275\u0275text(2, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.order().order_note);
  }
}
function ClientOrderDetailComponent_div_5_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "h2");
    \u0275\u0275text(2, "Order Info");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ClientOrderDetailComponent_div_5_div_34_div_3_Template, 6, 4, "div", 28)(4, ClientOrderDetailComponent_div_5_div_34_div_4_Template, 5, 1, "div", 28)(5, ClientOrderDetailComponent_div_5_div_34_div_5_Template, 5, 1, "div", 28)(6, ClientOrderDetailComponent_div_5_div_34_div_6_Template, 5, 1, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.order().date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().schedule);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().delivery_mode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().order_note);
  }
}
function ClientOrderDetailComponent_div_5_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span");
    \u0275\u0275text(2, "Transaction ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.order().transaction_id);
  }
}
function ClientOrderDetailComponent_div_5_div_56_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.order().location.title);
  }
}
function ClientOrderDetailComponent_div_5_div_56_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "br");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("PIN: ", ctx_r1.order().location.post_code, "");
  }
}
function ClientOrderDetailComponent_div_5_div_56_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "br");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Phone: ", ctx_r1.order().location.phone, "");
  }
}
function ClientOrderDetailComponent_div_5_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "h3");
    \u0275\u0275text(2, "Service Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 57);
    \u0275\u0275template(4, ClientOrderDetailComponent_div_5_div_56_span_4_Template, 4, 1, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275template(6, ClientOrderDetailComponent_div_5_div_56_span_6_Template, 3, 1, "span", 54)(7, ClientOrderDetailComponent_div_5_div_56_span_7_Template, 3, 1, "span", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.order().location.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.order().location.address, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().location.post_code);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().location.phone);
  }
}
function ClientOrderDetailComponent_div_5_button_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ClientOrderDetailComponent_div_5_button_64_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelOrder());
    });
    \u0275\u0275text(1, " Cancel Order ");
    \u0275\u0275elementEnd();
  }
}
function ClientOrderDetailComponent_div_5_button_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function ClientOrderDetailComponent_div_5_button_65_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refundModalOpen.set(true));
    });
    \u0275\u0275text(1, " Request Refund ");
    \u0275\u0275elementEnd();
  }
}
function ClientOrderDetailComponent_div_5_button_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function ClientOrderDetailComponent_div_5_button_66_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reorder());
    });
    \u0275\u0275text(1, " Reorder ");
    \u0275\u0275elementEnd();
  }
}
function ClientOrderDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 13);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, ClientOrderDetailComponent_div_5_div_10_Template, 12, 8, "div", 14);
    \u0275\u0275elementStart(11, "div", 15)(12, "div", 16)(13, "div", 17)(14, "h2");
    \u0275\u0275text(15, "Order Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18);
    \u0275\u0275template(17, ClientOrderDetailComponent_div_5_div_17_Template, 16, 17, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 20)(19, "div", 21)(20, "span");
    \u0275\u0275text(21, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, ClientOrderDetailComponent_div_5_div_25_Template, 7, 7, "div", 22)(26, ClientOrderDetailComponent_div_5_div_26_Template, 6, 6, "div", 22)(27, ClientOrderDetailComponent_div_5_div_27_Template, 6, 6, "div", 22);
    \u0275\u0275elementStart(28, "div", 23)(29, "span");
    \u0275\u0275text(30, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "strong");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "currency");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(34, ClientOrderDetailComponent_div_5_div_34_Template, 7, 4, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 25)(36, "div", 17)(37, "h3");
    \u0275\u0275text(38, "Payment Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 26)(40, "span");
    \u0275\u0275text(41, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 27);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 26)(45, "span");
    \u0275\u0275text(46, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(49, ClientOrderDetailComponent_div_5_div_49_Template, 5, 1, "div", 28);
    \u0275\u0275elementStart(50, "div", 26)(51, "span");
    \u0275\u0275text(52, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "strong");
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(56, ClientOrderDetailComponent_div_5_div_56_Template, 8, 4, "div", 24);
    \u0275\u0275elementStart(57, "div", 29)(58, "button", 30);
    \u0275\u0275listener("click", function ClientOrderDetailComponent_div_5_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadInvoice());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(59, "svg", 31);
    \u0275\u0275element(60, "path", 32)(61, "polyline", 33)(62, "line", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " Download Invoice ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(64, ClientOrderDetailComponent_div_5_button_64_Template, 2, 0, "button", 35)(65, ClientOrderDetailComponent_div_5_button_65_Template, 2, 0, "button", 36)(66, ClientOrderDetailComponent_div_5_button_66_Template, 2, 0, "button", 37);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(67, "a", 38);
    \u0275\u0275text(68, " Back to Orders ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Order #", ctx_r1.order().invoice_number || ctx_r1.order().id, "");
    \u0275\u0275advance();
    \u0275\u0275classMap("status-" + ctx_r1.getStatusKey(ctx_r1.order().status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(ctx_r1.order().status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Placed on ", \u0275\u0275pipeBind2(9, 23, ctx_r1.order().created_at, "fullDate"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order().refund);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.order().items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(24, 26, ctx_r1.order().sub_total, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order().coupon_amount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().delivery_charge > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().tax > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(33, 31, ctx_r1.order().total, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order().order_note || ctx_r1.order().date || ctx_r1.order().schedule);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.getPaymentMethodLabel(ctx_r1.order().payment_gateway));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.order().payment_status == 1 ? "payment-paid" : "payment-pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.order().payment_status == 1 ? "Paid" : "Unpaid", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().transaction_id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(55, 36, ctx_r1.order().total, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order().location);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.order().status < 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canRequestRefund());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order().status == 3);
  }
}
function ClientOrderDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "p");
    \u0275\u0275text(2, "Order not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 62);
    \u0275\u0275text(4, "Back to Orders");
    \u0275\u0275elementEnd()();
  }
}
function ClientOrderDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function ClientOrderDetailComponent_div_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelModalOpen.set(false));
    });
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275listener("click", function ClientOrderDetailComponent_div_7_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 65)(3, "h3");
    \u0275\u0275text(4, "Cancel Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 66);
    \u0275\u0275listener("click", function ClientOrderDetailComponent_div_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelModalOpen.set(false));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 67)(8, "p");
    \u0275\u0275text(9, "Please provide a reason for cancelling this order. This action cannot be undone.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ClientOrderDetailComponent_div_7_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.cancelReason, $event) || (ctx_r1.cancelReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 69)(12, "button", 70);
    \u0275\u0275listener("click", function ClientOrderDetailComponent_div_7_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelModalOpen.set(false));
    });
    \u0275\u0275text(13, "Go Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 71);
    \u0275\u0275listener("click", function ClientOrderDetailComponent_div_7_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doCancel());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cancelReason);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.cancelReason.trim() || ctx_r1.cancellingOrder());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cancellingOrder() ? "Cancelling..." : "Yes, Cancel Order", " ");
  }
}
function ClientOrderDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function ClientOrderDetailComponent_div_8_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refundModalOpen.set(false));
    });
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275listener("click", function ClientOrderDetailComponent_div_8_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 65)(3, "h3");
    \u0275\u0275text(4, "Request Refund");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 66);
    \u0275\u0275listener("click", function ClientOrderDetailComponent_div_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refundModalOpen.set(false));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 67)(8, "p");
    \u0275\u0275text(9, "Please provide a reason for requesting a refund for this order.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ClientOrderDetailComponent_div_8_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.refundReason, $event) || (ctx_r1.refundReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 69)(12, "button", 70);
    \u0275\u0275listener("click", function ClientOrderDetailComponent_div_8_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refundModalOpen.set(false));
    });
    \u0275\u0275text(13, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 73);
    \u0275\u0275listener("click", function ClientOrderDetailComponent_div_8_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitRefund());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.refundReason);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.refundReason.trim() || ctx_r1.submittingRefund());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submittingRefund() ? "Submitting..." : "Submit Refund Request", " ");
  }
}
var ClientOrderDetailComponent = class _ClientOrderDetailComponent {
  route;
  router;
  orderService;
  toast;
  order = signal(null);
  loading = signal(true);
  cancelModalOpen = signal(false);
  refundModalOpen = signal(false);
  submittingRefund = signal(false);
  cancellingOrder = signal(false);
  refundReason = "";
  cancelReason = "";
  baseUrl = environment.apiUrl.replace("/api/v1", "");
  constructor(route, router, orderService, toast) {
    this.route = route;
    this.router = router;
    this.orderService = orderService;
    this.toast = toast;
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
      }
    });
  }
  getServiceImage(service) {
    if (!service?.image)
      return "/assets/images/placeholder.png";
    const img = String(service.image);
    if (img.startsWith("http"))
      return img;
    if (img.startsWith("media/") || img.startsWith("uploads/")) {
      const filename = img.replace("uploads/media/", "").replace("media/", "");
      return `${this.baseUrl}/uploads/media/${filename}`;
    }
    return `${this.baseUrl}/uploads/media/${img}`;
  }
  onImgError(event) {
    event.target.src = "/assets/images/placeholder.png";
  }
  getStatusLabel(status) {
    const map = { 0: "Pending", 1: "Accepted", 2: "In Progress", 3: "Completed", 4: "Cancelled", 5: "Refunded" };
    return map[status] || "Unknown";
  }
  getStatusKey(status) {
    const map = { 0: "pending", 1: "accepted", 2: "in_progress", 3: "completed", 4: "cancelled", 5: "refunded" };
    return map[status] || "pending";
  }
  getPaymentMethodLabel(gateway) {
    if (!gateway)
      return "Not set";
    const map = { cod: "Cash on Delivery", wallet: "Wallet", stripe: "Credit/Debit Card", razorpay: "Razorpay", cashfree: "Cashfree", payzapp: "PayZapp" };
    return map[gateway] || gateway;
  }
  getRefundStatusLabel(status) {
    const map = { 0: "Requested", 1: "Approved", 2: "Rejected" };
    return map[status] || "Pending";
  }
  canRequestRefund() {
    const o = this.order();
    if (!o)
      return false;
    if (o.refund)
      return false;
    if (o.payment_status != 1)
      return false;
    return o.status == 3 || o.status == 4;
  }
  cancelOrder() {
    this.cancelModalOpen.set(true);
  }
  doCancel() {
    if (!this.cancelReason.trim())
      return;
    this.cancellingOrder.set(true);
    this.orderService.cancelOrder(this.order().id, this.cancelReason).subscribe({
      next: (res) => {
        if (res.data?.refund) {
          this.toast.success("Order cancelled. Refund request has been automatically created.");
        } else {
          this.toast.success("Order cancelled successfully");
        }
        this.cancelModalOpen.set(false);
        this.cancelReason = "";
        this.cancellingOrder.set(false);
        this.loadOrder(this.order().id);
      },
      error: (err) => {
        this.toast.error(err.error?.error || "Failed to cancel order. Please try again.");
        this.cancellingOrder.set(false);
      }
    });
  }
  submitRefund() {
    if (!this.refundReason.trim())
      return;
    this.submittingRefund.set(true);
    this.orderService.requestRefund(this.order().id, this.refundReason).subscribe({
      next: () => {
        this.toast.success("Refund request submitted successfully");
        this.refundModalOpen.set(false);
        this.refundReason = "";
        this.submittingRefund.set(false);
        this.loadOrder(this.order().id);
      },
      error: (err) => {
        this.toast.error(err.error?.error || "Failed to submit refund request");
        this.submittingRefund.set(false);
      }
    });
  }
  downloadInvoice() {
    const o = this.order();
    if (!o)
      return;
    this.orderService.getInvoice(o.id).subscribe({
      next: (html) => {
        const blob = new Blob([html], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      },
      error: () => this.toast.error("Failed to generate invoice")
    });
  }
  isServiceOrder() {
    const items = this.order()?.items || [];
    return items.every((i) => !i.service?.type || i.service?.type === 0);
  }
  reorder() {
    this.toast.info("Reorder functionality coming soon!");
  }
  static \u0275fac = function ClientOrderDetailComponent_Factory(t) {
    return new (t || _ClientOrderDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientOrderDetailComponent, selectors: [["app-client-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 5, consts: [[1, "order-detail-container"], [1, "back-link"], ["routerLink", "/client/orders"], ["class", "loading", 4, "ngIf"], ["class", "order-content", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "loading"], [1, "spinner"], [1, "order-content"], [1, "order-header-card"], [1, "order-title"], [1, "status-badge"], [1, "order-date"], ["class", "refund-banner", 4, "ngIf"], [1, "order-grid"], [1, "main-section"], [1, "card"], [1, "items-list"], ["class", "item-row", 4, "ngFor", "ngForOf"], [1, "order-totals"], [1, "total-row"], ["class", "total-row", 4, "ngIf"], [1, "total-row", "total-final"], ["class", "card", 4, "ngIf"], [1, "sidebar-section"], [1, "info-row"], [1, "payment-method"], ["class", "info-row", 4, "ngIf"], [1, "card", "actions-card"], [1, "btn-invoice", "full-width", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], ["class", "btn-danger full-width", 3, "click", 4, "ngIf"], ["class", "btn-refund full-width", 3, "click", 4, "ngIf"], ["class", "btn-primary full-width", 3, "click", 4, "ngIf"], ["routerLink", "/client/orders", 1, "btn-outline", "full-width"], [1, "refund-banner"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 8v4"], ["d", "M12 16h.01"], ["class", "refund-reason", 4, "ngIf"], [1, "refund-reason"], [1, "item-row"], [1, "item-image"], [3, "error", "src", "alt"], [1, "item-details"], ["class", "item-desc", 4, "ngIf"], [1, "item-meta"], [1, "item-total"], [1, "item-desc"], [4, "ngIf"], [1, "text-success"], [1, "txn-id"], [1, "address-text"], [1, "btn-danger", "full-width", 3, "click"], [1, "btn-refund", "full-width", 3, "click"], [1, "btn-primary", "full-width", 3, "click"], [1, "empty-state"], ["routerLink", "/client/orders", 1, "btn-primary"], [1, "modal-overlay", 3, "click"], [1, "refund-modal", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], ["placeholder", "Why are you cancelling this order?", "rows", "4", 1, "refund-textarea", "cancel-textarea", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-cancel-modal", 3, "click"], [1, "btn-submit-cancel", 3, "click", "disabled"], ["placeholder", "Describe why you are requesting a refund...", "rows", "4", 1, "refund-textarea", 3, "ngModelChange", "ngModel"], [1, "btn-submit-refund", 3, "click", "disabled"]], template: function ClientOrderDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275text(3, "\u2190 Back to Orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, ClientOrderDetailComponent_div_4_Template, 4, 0, "div", 3)(5, ClientOrderDetailComponent_div_5_Template, 69, 41, "div", 4)(6, ClientOrderDetailComponent_div_6_Template, 5, 0, "div", 5)(7, ClientOrderDetailComponent_div_7_Template, 16, 3, "div", 6)(8, ClientOrderDetailComponent_div_8_Template, 16, 3, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.order());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.order());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cancelModalOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.refundModalOpen());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, CurrencyPipe, DatePipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.order-detail-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.back-link[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e31b23;\n  text-decoration: none;\n  font-size: 14px;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.order-header-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.order-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.order-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0;\n  color: #1a1a1a;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-accepted[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.status-in_progress[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #3730a3;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.status-refunded[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #6b21a8;\n}\n.order-date[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n  font-size: 14px;\n}\n.refund-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 14px 18px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  color: #7c3aed;\n  background: #f5f3ff;\n  border: 1px solid #ddd6fe;\n}\n.refund-banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.refund-reason[_ngcontent-%COMP%] {\n  color: #9333ea;\n  font-style: italic;\n}\n.order-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 350px;\n  gap: 24px;\n}\n@media (max-width: 900px) {\n  .order-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 24px;\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 20px;\n}\n.items-list[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 20px;\n}\n.item-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 16px 0;\n  border-top: 1px solid #e5e7eb;\n  align-items: flex-start;\n}\n.item-image[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  object-fit: cover;\n  background: #f8f9fa;\n}\n.item-details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.item-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 4px;\n  color: #1a1a1a;\n}\n.item-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n  margin: 0 0 8px;\n}\n.item-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 13px;\n  color: #888;\n}\n.item-total[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a1a;\n  white-space: nowrap;\n}\n.order-totals[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  font-size: 14px;\n  color: #666;\n}\n.total-row.total-final[_ngcontent-%COMP%] {\n  border-top: 2px solid #e5e7eb;\n  margin-top: 8px;\n  padding-top: 16px;\n  font-size: 18px;\n  color: #1a1a1a;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #065f46;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #f0f0f0;\n  font-size: 14px;\n  gap: 12px;\n}\n.info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #666;\n  white-space: nowrap;\n}\n.payment-method[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.payment-paid[_ngcontent-%COMP%] {\n  color: #065f46;\n  font-weight: 600;\n}\n.payment-pending[_ngcontent-%COMP%] {\n  color: #92400e;\n  font-weight: 600;\n}\n.txn-id[_ngcontent-%COMP%] {\n  font-size: 12px;\n  word-break: break-all;\n  font-family: monospace;\n}\n.address-text[_ngcontent-%COMP%] {\n  color: #444;\n  line-height: 1.6;\n  margin: 0;\n  font-size: 14px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #666;\n}\n.empty-state[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 16px;\n  text-decoration: none;\n}\n.actions-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b91620;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #dc3545;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #b02a37;\n}\n.btn-refund[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #7c3aed;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-refund[_ngcontent-%COMP%]:hover {\n  background: #6d28d9;\n}\n.btn-invoice[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border: 1px solid #e31b23;\n  color: #e31b23;\n  background: #fff;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-invoice[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: 1px solid #e5e7eb;\n  color: #444;\n  background: #fff;\n  border-radius: 8px;\n  text-decoration: none;\n  font-weight: 500;\n  text-align: center;\n  font-size: 14px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9998;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.refund-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  width: 90vw;\n  max-width: 480px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 28px;\n  cursor: pointer;\n  color: #64748b;\n  line-height: 1;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #64748b;\n  font-size: 14px;\n}\n.refund-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  resize: vertical;\n  box-sizing: border-box;\n  font-family: inherit;\n}\n.refund-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #7c3aed;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn-cancel-modal[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-submit-refund[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  background: #7c3aed;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-submit-refund[_ngcontent-%COMP%]:hover {\n  background: #6d28d9;\n}\n.btn-submit-refund[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-submit-cancel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  background: #dc3545;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-submit-cancel[_ngcontent-%COMP%]:hover {\n  background: #b02a37;\n}\n.btn-submit-cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cancel-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #dc3545;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientOrderDetailComponent, { className: "ClientOrderDetailComponent", filePath: "src\\app\\features\\client\\orders\\order-detail.component.ts", lineNumber: 308 });
})();
export {
  ClientOrderDetailComponent
};
