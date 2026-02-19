import {
  CartService
} from "./chunk-2KIPSOBI.js";
import {
  OrderService
} from "./chunk-BGJRSWIH.js";
import "./chunk-7JMAC63R.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-X7FFWIXK.js";
import "./chunk-GUDC7RY7.js";
import {
  Router,
  RouterModule
} from "./chunk-CMH3GDQY.js";
import "./chunk-7QXR32YF.js";
import {
  CommonModule,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-37NMOBDC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// src/app/features/cart/checkout/checkout.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CheckoutComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 20)(1, "input", 21);
    \u0275\u0275listener("change", function CheckoutComponent_For_27_Template_input_change_1_listener() {
      const method_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedPayment.set(method_r2.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const method_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-blue-500", ctx_r2.selectedPayment() === method_r2.id);
    \u0275\u0275advance();
    \u0275\u0275property("value", method_r2.id)("checked", ctx_r2.selectedPayment() === method_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r2.name);
  }
}
var CheckoutComponent = class _CheckoutComponent {
  fb;
  cartService;
  orderService;
  router;
  addressForm;
  selectedPayment = signal("cod");
  isProcessing = signal(false);
  cartItems = signal([]);
  paymentMethods = [
    { id: "cod", name: "Cash on Delivery" },
    { id: "razorpay", name: "Razorpay" },
    { id: "stripe", name: "Credit/Debit Card" }
  ];
  constructor(fb, cartService, orderService, router) {
    this.fb = fb;
    this.cartService = cartService;
    this.orderService = orderService;
    this.router = router;
    this.addressForm = this.fb.group({
      address: ["", Validators.required],
      city: ["", Validators.required],
      pincode: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.loadCart();
  }
  loadCart() {
    this.cartService.loadCart().subscribe({
      next: (response) => {
        this.cartItems.set(response.data?.items || []);
      }
    });
  }
  subtotal() {
    return this.cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
  tax() {
    return Math.round(this.subtotal() * 0.18);
  }
  total() {
    return this.subtotal() + this.tax();
  }
  placeOrder() {
    if (this.addressForm.invalid) {
      alert("Please fill in all address fields");
      return;
    }
    this.isProcessing.set(true);
    const orderData = __spreadProps(__spreadValues({}, this.addressForm.value), {
      payment_method: this.selectedPayment(),
      items: this.cartItems()
    });
    this.orderService.createOrder(orderData).subscribe({
      next: (response) => {
        this.isProcessing.set(false);
        alert("Order placed successfully!");
        this.router.navigate(["/orders", response.data?.id]);
      },
      error: () => {
        this.isProcessing.set(false);
        alert("Failed to place order. Please try again.");
      }
    });
  }
  static \u0275fac = function CheckoutComponent_Factory(t) {
    return new (t || _CheckoutComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 50, vars: 6, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "text-3xl", "font-bold", "mb-6"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-white", "rounded-lg", "shadow", "p-6"], [1, "text-xl", "font-bold", "mb-4"], [3, "formGroup"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "md:col-span-2"], [1, "block", "text-sm", "font-medium", "mb-1"], ["formControlName", "address", "rows", "3", 1, "w-full", "p-2", "border", "rounded"], ["type", "text", "formControlName", "city", 1, "w-full", "p-2", "border", "rounded"], ["type", "text", "formControlName", "pincode", 1, "w-full", "p-2", "border", "rounded"], [1, "space-y-3"], [1, "flex", "items-center", "p-3", "border", "rounded", "cursor-pointer", "hover:bg-gray-50", 3, "border-blue-500"], [1, "bg-white", "rounded-lg", "shadow", "p-6", "h-fit"], [1, "space-y-2", "mb-4"], [1, "flex", "justify-between"], [1, "flex", "justify-between", "font-bold", "text-lg"], [1, "w-full", "bg-blue-600", "text-white", "py-3", "rounded", "hover:bg-blue-700", 3, "click", "disabled"], [1, "flex", "items-center", "p-3", "border", "rounded", "cursor-pointer", "hover:bg-gray-50"], ["type", "radio", 1, "mr-3", 3, "change", "value", "checked"]], template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Checkout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h2", 5);
      \u0275\u0275text(7, "Delivery Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "form", 6)(9, "div", 7)(10, "div", 8)(11, "label", 9);
      \u0275\u0275text(12, "Full Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "textarea", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div")(15, "label", 9);
      \u0275\u0275text(16, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div")(19, "label", 9);
      \u0275\u0275text(20, "Pincode");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(22, "div", 4)(23, "h2", 5);
      \u0275\u0275text(24, "Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 13);
      \u0275\u0275repeaterCreate(26, CheckoutComponent_For_27_Template, 4, 5, "label", 14, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 15)(29, "h2", 5);
      \u0275\u0275text(30, "Order Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 16)(32, "div", 17)(33, "span");
      \u0275\u0275text(34, "Subtotal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 17)(38, "span");
      \u0275\u0275text(39, "Tax (18%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span");
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(42, "hr");
      \u0275\u0275elementStart(43, "div", 18)(44, "span");
      \u0275\u0275text(45, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span");
      \u0275\u0275text(47);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "button", 19);
      \u0275\u0275listener("click", function CheckoutComponent_Template_button_click_48_listener() {
        return ctx.placeOrder();
      });
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.addressForm);
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.paymentMethods);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("\u20B9", ctx.subtotal(), "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("\u20B9", ctx.tax(), "");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("\u20B9", ctx.total(), "");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isProcessing());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isProcessing() ? "Processing..." : "Place Order", " ");
    }
  }, dependencies: [CommonModule, RouterModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src\\app\\features\\cart\\checkout\\checkout.component.ts", lineNumber: 76 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=chunk-LCUWX5LT.js.map
