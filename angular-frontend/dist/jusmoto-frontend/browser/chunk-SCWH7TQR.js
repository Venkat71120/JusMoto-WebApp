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
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-5WG63XSG.js";
import {
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
  CurrencyPipe,
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
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/client/checkout/checkout.component.ts
function CheckoutComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "circle", 13)(3, "circle", 14)(4, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Your cart is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Add items to your cart before checkout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 16);
    \u0275\u0275text(10, "Browse Services");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_div_14_div_8_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const addr_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(addr_r3.phone);
  }
}
function CheckoutComponent_div_14_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275listener("click", function CheckoutComponent_div_14_div_8_div_1_Template_div_click_0_listener() {
      const addr_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.selectAddress(addr_r3));
    });
    \u0275\u0275element(1, "div", 87);
    \u0275\u0275elementStart(2, "div", 88)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CheckoutComponent_div_14_div_8_div_1_span_7_Template, 2, 1, "span", 89);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const addr_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r3.selectedAddressId === addr_r3.id);
    \u0275\u0275advance();
    \u0275\u0275classProp("checked", ctx_r3.selectedAddressId === addr_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(addr_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", addr_r3.address || addr_r3.address_line1, ", ", addr_r3.city, ", ", addr_r3.state, " - ", addr_r3.zip_code || addr_r3.pincode, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", addr_r3.phone);
  }
}
function CheckoutComponent_div_14_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, CheckoutComponent_div_14_div_8_div_1_Template, 8, 10, "div", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.addresses());
  }
}
function CheckoutComponent_div_14_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1, "or enter a new address");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_14_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 94);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 95);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((item_r5.service == null ? null : item_r5.service.title) || "Service");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("x", item_r5.quantity, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(8, 3, item_r5.item_total || (item_r5.price + item_r5.addon_total) * item_r5.quantity, "INR", "symbol", "1.0-0"));
  }
}
function CheckoutComponent_div_14_button_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 96);
    \u0275\u0275listener("click", function CheckoutComponent_div_14_button_103_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.applyCoupon());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r3.couponCode.trim() || ctx_r3.applyingCoupon());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.applyingCoupon() ? "..." : "Apply", " ");
  }
}
function CheckoutComponent_div_14_button_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function CheckoutComponent_div_14_button_104_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeCoupon());
    });
    \u0275\u0275text(1, "Remove");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_14_p_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 98);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Coupon applied! You save ", \u0275\u0275pipeBind4(2, 1, ctx_r3.couponDiscount(), "INR", "symbol", "1.0-0"), "");
  }
}
function CheckoutComponent_div_14_p_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.couponError());
  }
}
function CheckoutComponent_div_14_div_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "span");
    \u0275\u0275text(2, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 100);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind4(5, 1, ctx_r3.couponDiscount(), "INR", "symbol", "1.0-0"), "");
  }
}
function CheckoutComponent_div_14_div_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "span", 102);
    \u0275\u0275text(2, "Paying via:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.getPaymentLabel(ctx_r3.selectedPayment));
  }
}
function CheckoutComponent_div_14__svg_svg_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "path", 103)(2, "polyline", 104);
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "h3", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 21);
    \u0275\u0275element(5, "path", 22)(6, "circle", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Delivery Address ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CheckoutComponent_div_14_div_8_Template, 2, 1, "div", 24)(9, CheckoutComponent_div_14_div_9_Template, 2, 0, "div", 25);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 26)(11, "div", 27)(12, "div", 28)(13, "label");
    \u0275\u0275text(14, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_14_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.addressForm.name, $event) || (ctx_r3.addressForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 28)(17, "label");
    \u0275\u0275text(18, "Phone *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_14_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.addressForm.phone, $event) || (ctx_r3.addressForm.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 28)(21, "label");
    \u0275\u0275text(22, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_14_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.addressForm.email, $event) || (ctx_r3.addressForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 28)(25, "label");
    \u0275\u0275text(26, "Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_14_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.addressForm.address, $event) || (ctx_r3.addressForm.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 27)(29, "div", 28)(30, "label");
    \u0275\u0275text(31, "City *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_14_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.addressForm.city, $event) || (ctx_r3.addressForm.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 28)(34, "label");
    \u0275\u0275text(35, "State *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_14_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.addressForm.state, $event) || (ctx_r3.addressForm.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 28)(38, "label");
    \u0275\u0275text(39, "PIN Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_14_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.addressForm.zip_code, $event) || (ctx_r3.addressForm.zip_code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(41, "div", 19)(42, "h3", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 21);
    \u0275\u0275element(44, "rect", 36)(45, "line", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " Payment Method ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "div", 38)(48, "div", 39);
    \u0275\u0275element(49, "div", 40);
    \u0275\u0275elementStart(50, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(51, "svg", 42);
    \u0275\u0275element(52, "path", 43)(53, "path", 44)(54, "path", 45)(55, "path", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(56, "div", 47)(57, "strong");
    \u0275\u0275text(58, "PayZapp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60, "UPI, Cards, Net Banking & Wallets");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(61, "div", 19)(62, "h3", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(63, "svg", 21);
    \u0275\u0275element(64, "rect", 48)(65, "line", 49)(66, "line", 50)(67, "line", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, " Schedule ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(69, "div", 27)(70, "div", 28)(71, "label");
    \u0275\u0275text(72, "Preferred Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_14_Template_input_ngModelChange_73_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.scheduleDate, $event) || (ctx_r3.scheduleDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 28)(75, "label");
    \u0275\u0275text(76, "Time Slot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "select", 53);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_14_Template_select_ngModelChange_77_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.scheduleTime, $event) || (ctx_r3.scheduleTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(78, "option", 54);
    \u0275\u0275text(79, "Select time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "option", 55);
    \u0275\u0275text(81, "Morning (9 AM - 12 PM)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "option", 56);
    \u0275\u0275text(83, "Afternoon (12 PM - 4 PM)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "option", 57);
    \u0275\u0275text(85, "Evening (4 PM - 8 PM)");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(86, "div", 19)(87, "h3", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(88, "svg", 21);
    \u0275\u0275element(89, "path", 58)(90, "polyline", 59)(91, "line", 60)(92, "line", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, " Order Note (Optional) ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(94, "textarea", 62);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_14_Template_textarea_ngModelChange_94_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.orderNote, $event) || (ctx_r3.orderNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(95, "div", 63)(96, "h3");
    \u0275\u0275text(97, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "div", 64);
    \u0275\u0275template(99, CheckoutComponent_div_14_div_99_Template, 9, 8, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 66)(101, "div", 67)(102, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_14_Template_input_ngModelChange_102_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.couponCode, $event) || (ctx_r3.couponCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(103, CheckoutComponent_div_14_button_103_Template, 2, 2, "button", 69)(104, CheckoutComponent_div_14_button_104_Template, 2, 0, "button", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275template(105, CheckoutComponent_div_14_p_105_Template, 3, 6, "p", 71)(106, CheckoutComponent_div_14_p_106_Template, 2, 1, "p", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 73)(108, "div", 74)(109, "span");
    \u0275\u0275text(110, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "span");
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(114, CheckoutComponent_div_14_div_114_Template, 6, 6, "div", 75);
    \u0275\u0275elementStart(115, "div", 76)(116, "span");
    \u0275\u0275text(117, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "strong");
    \u0275\u0275text(119);
    \u0275\u0275pipe(120, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(121, CheckoutComponent_div_14_div_121_Template, 5, 1, "div", 77);
    \u0275\u0275elementStart(122, "button", 78);
    \u0275\u0275listener("click", function CheckoutComponent_div_14_Template_button_click_122_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.placeOrder());
    });
    \u0275\u0275template(123, CheckoutComponent_div_14__svg_svg_123_Template, 3, 0, "svg", 79);
    \u0275\u0275text(124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "p", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(126, "svg", 81);
    \u0275\u0275element(127, "rect", 82)(128, "path", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275text(129, " Secure checkout ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r3.addresses().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.addresses().length > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("collapsed", ctx_r3.selectedAddressId && ctx_r3.addresses().length > 0);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.addressForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.addressForm.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.addressForm.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.addressForm.address);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.addressForm.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.addressForm.state);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.addressForm.zip_code);
    \u0275\u0275advance(33);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.scheduleDate);
    \u0275\u0275property("min", ctx_r3.todayDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.scheduleTime);
    \u0275\u0275advance(17);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.orderNote);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r3.cart().items);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.couponCode);
    \u0275\u0275property("disabled", ctx_r3.couponApplied());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.couponApplied());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.couponApplied());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.couponApplied());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.couponError());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(113, 29, ctx_r3.cart().sub_total, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.couponApplied());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(120, 34, ctx_r3.finalTotal(), "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.selectedPayment);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.placingOrder() || !ctx_r3.isFormValid());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.placingOrder());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.placingOrder() ? "Placing Order..." : "Place Order & Pay", " ");
  }
}
var CheckoutComponent = class _CheckoutComponent {
  cartService;
  orderService;
  toast;
  http;
  router;
  cart = signal({ items: [], sub_total: 0, item_count: 0 });
  addresses = signal([]);
  loading = signal(true);
  placingOrder = signal(false);
  applyingCoupon = signal(false);
  couponApplied = signal(false);
  couponDiscount = signal(0);
  couponError = signal("");
  finalTotal = signal(0);
  selectedAddressId = null;
  selectedPayment = "payzapp";
  couponCode = "";
  scheduleDate = "";
  scheduleTime = "";
  orderNote = "";
  todayDate = "";
  addressForm = {
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip_code: ""
  };
  constructor(cartService, orderService, toast, http, router) {
    this.cartService = cartService;
    this.orderService = orderService;
    this.toast = toast;
    this.http = http;
    this.router = router;
    const d = /* @__PURE__ */ new Date();
    this.todayDate = d.toISOString().split("T")[0];
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.loading.set(true);
    this.cartService.loadCart().subscribe({
      next: (res) => {
        const cartData = res.data || { items: [], sub_total: 0, item_count: 0 };
        this.cart.set(cartData);
        this.finalTotal.set(cartData.sub_total || 0);
      }
    });
    this.http.get(`${environment.apiUrl}/user/profile`).subscribe({
      next: (res) => {
        const user = res.data || res.user || res;
        if (user) {
          const fullName = [user.first_name, user.last_name].filter(Boolean).join(" ");
          this.addressForm.name = fullName || this.addressForm.name;
          this.addressForm.phone = user.phone || this.addressForm.phone;
          this.addressForm.email = user.email || this.addressForm.email;
        }
      }
    });
    this.http.get(`${environment.apiUrl}/user/addresses`).subscribe({
      next: (res) => {
        this.addresses.set(res.data || []);
        const defaultAddr = (res.data || []).find((a) => a.is_default);
        if (defaultAddr) {
          this.selectAddress(defaultAddr);
        }
      },
      complete: () => this.loading.set(false),
      error: () => this.loading.set(false)
    });
  }
  selectAddress(addr) {
    this.selectedAddressId = addr.id;
    this.addressForm = {
      name: addr.name || "",
      phone: addr.phone || "",
      email: addr.email || "",
      address: addr.address || addr.address_line1 || "",
      city: addr.city || "",
      state: addr.state || "",
      zip_code: addr.zip_code || addr.pincode || ""
    };
  }
  selectPayment(method) {
    this.selectedPayment = method;
  }
  getPaymentLabel(method) {
    const labels = {
      payzapp: "PayZapp"
    };
    return labels[method] || method;
  }
  applyCoupon() {
    if (!this.couponCode.trim())
      return;
    this.applyingCoupon.set(true);
    this.couponError.set("");
    this.orderService.validateCoupon(this.couponCode, this.cart().sub_total).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.couponApplied.set(true);
          this.couponDiscount.set(res.data.discount || 0);
          this.finalTotal.set(this.cart().sub_total - (res.data.discount || 0));
        } else {
          this.couponError.set(res.error || "Invalid coupon");
        }
      },
      error: (err) => this.couponError.set(err.error?.error || "Invalid coupon code"),
      complete: () => this.applyingCoupon.set(false)
    });
  }
  removeCoupon() {
    this.couponApplied.set(false);
    this.couponDiscount.set(0);
    this.couponCode = "";
    this.couponError.set("");
    this.finalTotal.set(this.cart().sub_total);
  }
  isFormValid() {
    const f = this.addressForm;
    return !!(f.name?.trim() && f.phone?.trim() && f.address?.trim() && f.city?.trim() && f.state?.trim() && f.zip_code?.trim() && this.selectedPayment);
  }
  placeOrder() {
    if (!this.isFormValid()) {
      this.toast.error("Please fill in all required fields and select a payment method");
      return;
    }
    this.placingOrder.set(true);
    const orderData = {
      items: this.cart().items.map((item) => ({
        service_id: item.item_id || item.service?.id,
        car_id: item.car_id || void 0,
        variant_id: item.variant_id || void 0,
        quantity: item.quantity,
        addons: item.addons || []
      })),
      address: {
        name: this.addressForm.name,
        phone: this.addressForm.phone,
        email: this.addressForm.email,
        address: this.addressForm.address,
        city: this.addressForm.city,
        state: this.addressForm.state,
        zip_code: this.addressForm.zip_code,
        country: "India"
      },
      delivery_mode: "home"
    };
    if (this.couponApplied() && this.couponCode) {
      orderData.coupon_code = this.couponCode;
    }
    if (this.scheduleDate)
      orderData.date = this.scheduleDate;
    if (this.scheduleTime)
      orderData.schedule = this.scheduleTime;
    if (this.orderNote.trim())
      orderData.order_note = this.orderNote.trim();
    this.orderService.createOrder(orderData).subscribe({
      next: (res) => {
        const orderId = res.data?.id;
        this.http.post(`${environment.apiUrl}/payments/initiate`, {
          order_id: orderId,
          payment_method: this.selectedPayment
        }).subscribe({
          next: (payRes) => {
            this.cartService.loadCart().subscribe();
            this.toast.success("Order placed successfully via PayZapp!");
            this.router.navigate(["/client/orders", orderId]);
          },
          error: (payErr) => {
            this.toast.error(payErr.error?.error || "Payment failed. Your order has been saved.");
            this.cartService.loadCart().subscribe();
            this.router.navigate(["/client/orders", orderId]);
          }
        });
      },
      error: (err) => {
        this.toast.error(err.error?.error || "Failed to place order");
        this.placingOrder.set(false);
      }
    });
  }
  static \u0275fac = function CheckoutComponent_Factory(t) {
    return new (t || _CheckoutComponent)(\u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 3, consts: [[1, "checkout-page"], [1, "page-header"], ["routerLink", "/client/cart", 1, "btn-back"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "checkout-layout", 4, "ngIf"], [1, "loading"], [1, "spinner"], [1, "empty-state"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#cbd5e1", "stroke-width", "1.2"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"], ["routerLink", "/client/orders", 1, "btn-primary"], [1, "checkout-layout"], [1, "checkout-form"], [1, "section-card"], [1, "section-title"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"], ["cx", "12", "cy", "10", "r", "3"], ["class", "address-list", 4, "ngIf"], ["class", "divider-text", 4, "ngIf"], [1, "address-form"], [1, "form-row"], [1, "form-group"], ["type", "text", "placeholder", "John Doe", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "9876543210", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "john@example.com", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "House/Flat No., Street, Area", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "City", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "State", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "110001", 3, "ngModelChange", "ngModel"], ["x", "1", "y", "4", "width", "22", "height", "16", "rx", "2", "ry", "2"], ["x1", "1", "y1", "10", "x2", "23", "y2", "10"], [1, "payment-methods"], [1, "payment-option", "selected"], [1, "radio-dot", "checked"], [1, "pm-icon", "payzapp-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 5H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2z"], ["d", "M3 10h18"], ["d", "M7 15h2"], ["d", "M12 15h5"], [1, "pm-details"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], ["type", "date", 3, "ngModelChange", "ngModel", "min"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "morning"], ["value", "afternoon"], ["value", "evening"], ["d", "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["rows", "3", "placeholder", "Any special instructions...", 3, "ngModelChange", "ngModel"], [1, "order-summary"], [1, "summary-items"], ["class", "summary-item", 4, "ngFor", "ngForOf"], [1, "coupon-section"], [1, "coupon-input-row"], ["type", "text", "placeholder", "Coupon code", 3, "ngModelChange", "ngModel", "disabled"], ["class", "btn-apply", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-remove-coupon", 3, "click", 4, "ngIf"], ["class", "coupon-msg success", 4, "ngIf"], ["class", "coupon-msg error", 4, "ngIf"], [1, "summary-totals"], [1, "summary-line"], ["class", "summary-line", 4, "ngIf"], [1, "summary-line", "total"], ["class", "selected-payment-info", 4, "ngIf"], [1, "btn-place-order", 3, "click", "disabled"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "secure-note"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#64748b", "stroke-width", "2"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0110 0v4"], [1, "address-list"], ["class", "address-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "address-option", 3, "click"], [1, "radio-dot"], [1, "address-info"], ["class", "addr-phone", 4, "ngIf"], [1, "addr-phone"], [1, "divider-text"], [1, "summary-item"], [1, "si-name"], [1, "si-qty"], [1, "si-price"], [1, "btn-apply", 3, "click", "disabled"], [1, "btn-remove-coupon", 3, "click"], [1, "coupon-msg", "success"], [1, "coupon-msg", "error"], [1, "discount"], [1, "selected-payment-info"], [1, "spi-label"], ["d", "M22 11.08V12a10 10 0 11-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"]], template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4, "Checkout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Review your order and complete payment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 3);
      \u0275\u0275element(9, "line", 4)(10, "polyline", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Back to Cart ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, CheckoutComponent_div_12_Template, 4, 0, "div", 6)(13, CheckoutComponent_div_13_Template, 11, 0, "div", 7)(14, CheckoutComponent_div_14_Template, 130, 39, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.cart().items.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.cart().items.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, CurrencyPipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: [`

.checkout-page[_ngcontent-%COMP%] {
  max-width: 1100px;
  margin: 0 auto;
}
.page-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 16px;
}
.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 4px;
}
.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b;
  margin: 0;
  font-size: 14px;
}
.btn-back[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  color: #475569;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  background: #fff;
}
.btn-back[_ngcontent-%COMP%]:hover {
  border-color: #e31b23;
  color: #e31b23;
}
.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  padding: 12px 24px;
  background: #e31b23;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
}
.loading[_ngcontent-%COMP%] {
  text-align: center;
  padding: 60px 20px;
}
.spinner[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border: 3px solid #f3f4f6;
  border-top-color: #e31b23;
  border-radius: 50%;
  margin: 0 auto 16px;
  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
.empty-state[_ngcontent-%COMP%] {
  text-align: center;
  padding: 60px 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}
.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  margin-bottom: 16px;
}
.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 20px;
  color: #1a1a2e;
  margin: 0 0 8px;
}
.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b;
  margin: 0 0 24px;
}
.checkout-layout[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 24px;
  align-items: flex-start;
}
@media (max-width: 768px) {
  .checkout-layout[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.section-card[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  padding: 24px;
  margin-bottom: 20px;
}
.section-title[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 20px;
}
.form-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;
  flex: 1;
}
.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 600;
  color: #374151;
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
  font-family: inherit;
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #e31b23;
  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);
}
.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 20px;
  padding-right: 40px;
  cursor: pointer;
  background-color: #fff;
}
textarea[_ngcontent-%COMP%] {
  resize: vertical;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
}
.form-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 14px;
}
@media (max-width: 480px) {
  .form-row[_ngcontent-%COMP%] {
    flex-direction: column;
  }
}
.address-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}
.address-option[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
}
.address-option[_ngcontent-%COMP%]:hover {
  border-color: #fca5a5;
}
.address-option.selected[_ngcontent-%COMP%] {
  border-color: #e31b23;
  background: #fff5f5;
}
.radio-dot[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
  border: 2px solid #d1d5db;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 2px;
  transition: all 0.2s;
  position: relative;
}
.radio-dot.checked[_ngcontent-%COMP%] {
  border-color: #e31b23;
}
.radio-dot.checked[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  inset: 3px;
  background: #e31b23;
  border-radius: 50%;
}
.address-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.address-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #1a1a2e;
}
.address-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #64748b;
}
.addr-phone[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #94a3b8;
}
.divider-text[_ngcontent-%COMP%] {
  text-align: center;
  color: #94a3b8;
  font-size: 12px;
  margin: 16px 0;
  position: relative;
}
.divider-text[_ngcontent-%COMP%]::before, .divider-text[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: 50%;
  width: calc(50% - 60px);
  height: 1px;
  background: #e5e7eb;
}
.divider-text[_ngcontent-%COMP%]::before {
  left: 0;
}
.divider-text[_ngcontent-%COMP%]::after {
  right: 0;
}
.address-form.collapsed[_ngcontent-%COMP%] {
  display: none;
}
.payment-methods[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.payment-option[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
}
.payment-option[_ngcontent-%COMP%]:hover:not(.disabled) {
  border-color: #fca5a5;
}
.payment-option.selected[_ngcontent-%COMP%] {
  border-color: #e31b23;
  background: #fff5f5;
}
.payment-option.disabled[_ngcontent-%COMP%] {
  opacity: 0.55;
  cursor: not-allowed;
  background: #f9fafb;
}
.pm-icon[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.payzapp-icon[_ngcontent-%COMP%] {
  background: #fff1f2;
  color: #e31b23;
}
.payzapp-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  stroke: #e31b23;
}
.pm-details[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.pm-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #1a1a2e;
}
.pm-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #64748b;
}
.order-summary[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  padding: 24px;
  position: sticky;
  top: 20px;
}
.order-summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 16px;
}
.summary-items[_ngcontent-%COMP%] {
  max-height: 240px;
  overflow-y: auto;
  margin-bottom: 16px;
}
.summary-item[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f8f9fa;
}
.si-name[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #374151;
  flex: 1;
  min-width: 0;
}
.si-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.si-qty[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #94a3b8;
  flex-shrink: 0;
}
.si-price[_ngcontent-%COMP%] {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a2e;
  flex-shrink: 0;
  margin-left: 12px;
}
.coupon-section[_ngcontent-%COMP%] {
  padding: 12px 0;
  border-top: 1px solid #f1f5f9;
}
.coupon-input-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
}
.coupon-input-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 13px;
}
.coupon-input-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #e31b23;
}
.btn-apply[_ngcontent-%COMP%] {
  padding: 8px 16px;
  background: #1a1a2e;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}
.btn-apply[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.btn-remove-coupon[_ngcontent-%COMP%] {
  padding: 8px 12px;
  background: none;
  border: 1px solid #ef4444;
  color: #ef4444;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}
.coupon-msg[_ngcontent-%COMP%] {
  font-size: 12px;
  margin: 6px 0 0;
}
.coupon-msg.success[_ngcontent-%COMP%] {
  color: #059669;
}
.coupon-msg.error[_ngcontent-%COMP%] {
  color: #ef4444;
}
.summary-totals[_ngcontent-%COMP%] {
  border-top: 1px solid #f1f5f9;
  padding-top: 12px;
}
.summary-line[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  font-size: 14px;
  color: #64748b;
}
.summary-line[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%] {
  color: #059669;
}
.summary-line.total[_ngcontent-%COMP%] {
  padding-top: 12px;
  margin-top: 4px;
  border-top: 2px solid #e5e7eb;
}
.summary-line.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 16px;
  color: #1a1a2e;
  font-weight: 600;
}
.summary-line.total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  font-size: 22px;
  color: #e31b23;
}
.selected-payment-info[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  margin-top: 12px;
}
.spi-label[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #64748b;
}
.selected-payment-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #059669;
}
.btn-place-order[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 16px 24px;
  background: #e31b23;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.2s;
}
.btn-place-order[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: #b11218;
}
.btn-place-order[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.secure-note[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #94a3b8;
  font-size: 12px;
  margin: 12px 0 0;
}`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src\\app\\features\\client\\checkout\\checkout.component.ts", lineNumber: 322 });
})();
export {
  CheckoutComponent
};
