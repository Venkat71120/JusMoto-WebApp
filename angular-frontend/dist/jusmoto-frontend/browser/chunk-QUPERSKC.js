import {
  CartService
} from "./chunk-2KIPSOBI.js";
import "./chunk-7JMAC63R.js";
import "./chunk-GUDC7RY7.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-CMH3GDQY.js";
import "./chunk-7QXR32YF.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/cart/cart.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CartComponent_Conditional_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "img", 11);
    \u0275\u0275elementStart(2, "div", 12)(3, "h3", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 16)(10, "button", 17);
    \u0275\u0275listener("click", function CartComponent_Conditional_3_For_3_Template_button_click_10_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateQuantity(item_r2.id, item_r2.quantity - 1));
    });
    \u0275\u0275text(11, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 17);
    \u0275\u0275listener("click", function CartComponent_Conditional_3_For_3_Template_button_click_14_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateQuantity(item_r2.id, item_r2.quantity + 1));
    });
    \u0275\u0275text(15, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 19);
    \u0275\u0275listener("click", function CartComponent_Conditional_3_For_3_Template_button_click_16_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeItem(item_r2.id));
    });
    \u0275\u0275text(17, " Remove ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r2.image || "/assets/placeholder.jpg", \u0275\u0275sanitizeUrl)("alt", item_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", item_r2.price, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r2.quantity);
  }
}
function CartComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275repeaterCreate(2, CartComponent_Conditional_3_For_3_Template, 18, 6, "div", 4, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "h2", 6);
    \u0275\u0275text(6, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "span");
    \u0275\u0275text(10, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 8)(14, "span");
    \u0275\u0275text(15, "Tax (18%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "hr");
    \u0275\u0275elementStart(19, "div", 9)(20, "span");
    \u0275\u0275text(21, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "a", 10);
    \u0275\u0275text(25, " Proceed to Checkout ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.cartItems());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r2.subtotal(), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r2.tax(), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r2.total(), "");
  }
}
function CartComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "p", 21);
    \u0275\u0275text(2, "Your cart is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 22);
    \u0275\u0275text(4, " Browse Services ");
    \u0275\u0275elementEnd()();
  }
}
var CartComponent = class _CartComponent {
  cartService;
  cartItems = signal([]);
  constructor(cartService) {
    this.cartService = cartService;
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
  updateQuantity(itemId, quantity) {
    if (quantity < 1)
      return;
    this.cartService.updateItem(itemId, { quantity }).subscribe({
      next: () => this.loadCart()
    });
  }
  removeItem(itemId) {
    this.cartService.removeItem(itemId).subscribe({
      next: () => this.loadCart()
    });
  }
  static \u0275fac = function CartComponent_Factory(t) {
    return new (t || _CartComponent)(\u0275\u0275directiveInject(CartService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "text-3xl", "font-bold", "mb-6"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-4"], [1, "bg-white", "rounded-lg", "shadow", "p-4", "flex", "items-center", "gap-4"], [1, "bg-white", "rounded-lg", "shadow", "p-6", "h-fit"], [1, "text-xl", "font-bold", "mb-4"], [1, "space-y-2", "mb-4"], [1, "flex", "justify-between"], [1, "flex", "justify-between", "font-bold", "text-lg"], ["routerLink", "/checkout", 1, "block", "w-full", "bg-blue-600", "text-white", "text-center", "py-3", "rounded", "hover:bg-blue-700"], [1, "w-24", "h-24", "object-cover", "rounded", 3, "src", "alt"], [1, "flex-1"], [1, "font-semibold", "text-lg"], [1, "text-gray-500"], [1, "text-blue-600", "font-bold", "text-xl"], [1, "flex", "items-center", "gap-2"], [1, "w-8", "h-8", "bg-gray-200", "rounded", 3, "click"], [1, "w-8", "text-center"], [1, "text-red-500", "hover:text-red-700", 3, "click"], [1, "text-center", "py-12"], [1, "text-xl", "text-gray-500", "mb-4"], ["routerLink", "/services", 1, "bg-blue-600", "text-white", "px-6", "py-2", "rounded", "hover:bg-blue-700"]], template: function CartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Shopping Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, CartComponent_Conditional_3_Template, 26, 3, "div", 2)(4, CartComponent_Conditional_4_Template, 5, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(3, ctx.cartItems().length > 0 ? 3 : 4);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src\\app\\features\\cart\\cart.component.ts", lineNumber: 70 });
})();
export {
  CartComponent
};
//# sourceMappingURL=chunk-QUPERSKC.js.map
