import {
  ConfirmModalComponent
} from "./chunk-M673IPVF.js";
import {
  ToastService
} from "./chunk-CUQ723YT.js";
import {
  CartService
} from "./chunk-PHE3SKXG.js";
import "./chunk-GMJ7MHWM.js";
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
  NgForOf,
  NgIf,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/client/cart/cart.component.ts
function CartComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading cart...");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "circle", 14)(3, "circle", 15)(4, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Your cart is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Browse services and products to add items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 17);
    \u0275\u0275listener("click", function CartComponent_div_13_Template_a_click_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.goToServices());
    });
    \u0275\u0275text(10, "Browse Services");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_div_14_div_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 43);
    \u0275\u0275listener("error", function CartComponent_div_14_div_2_img_2_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onImgError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getImageUrl(item_r6.service.image), \u0275\u0275sanitizeUrl)("alt", item_r6.service == null ? null : item_r6.service.title);
  }
}
function CartComponent_div_14_div_2__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 44);
    \u0275\u0275element(1, "path", 45);
    \u0275\u0275elementEnd();
  }
}
function CartComponent_div_14_div_2_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+ Add-ons: ", \u0275\u0275pipeBind4(2, 1, item_r6.addon_total, "INR", "symbol", "1.0-0"), "");
  }
}
function CartComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275template(2, CartComponent_div_14_div_2_img_2_Template, 1, 2, "img", 30)(3, CartComponent_div_14_div_2__svg_svg_3_Template, 2, 0, "svg", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 33);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CartComponent_div_14_div_2_p_10_Template, 3, 6, "p", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 35)(12, "button", 36);
    \u0275\u0275listener("click", function CartComponent_div_14_div_2_Template_button_click_12_listener() {
      const item_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateQty(item_r6, -1));
    });
    \u0275\u0275text(13, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 37);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 38);
    \u0275\u0275listener("click", function CartComponent_div_14_div_2_Template_button_click_16_listener() {
      const item_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateQty(item_r6, 1));
    });
    \u0275\u0275text(17, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 39);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 40);
    \u0275\u0275listener("click", function CartComponent_div_14_div_2_Template_button_click_21_listener() {
      const item_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeItem(item_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 3);
    \u0275\u0275element(23, "polyline", 41)(24, "path", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r6.service == null ? null : item_r6.service.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(item_r6.service == null ? null : item_r6.service.image));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((item_r6.service == null ? null : item_r6.service.title) || "Service");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(9, 8, item_r6.price, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r6.addon_total > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", item_r6.quantity <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(20, 13, item_r6.item_total || (item_r6.price + item_r6.addon_total) * item_r6.quantity, "INR", "symbol", "1.0-0"), " ");
  }
}
function CartComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275template(2, CartComponent_div_14_div_2_Template, 25, 18, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21)(4, "h3");
    \u0275\u0275text(5, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 22)(7, "span");
    \u0275\u0275text(8, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 23)(13, "span");
    \u0275\u0275text(14, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "a", 24);
    \u0275\u0275text(19, " Proceed to Checkout ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 3);
    \u0275\u0275element(21, "line", 25)(22, "polyline", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "button", 27);
    \u0275\u0275listener("click", function CartComponent_div_14_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmClear());
    });
    \u0275\u0275text(24, "Clear Cart");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.cart().items);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 3, ctx_r1.cart().sub_total, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(17, 8, ctx_r1.cart().sub_total, "INR", "symbol", "1.0-0"));
  }
}
var CartComponent = class _CartComponent {
  cartService;
  toast;
  cart = signal({ items: [], sub_total: 0, item_count: 0 });
  loading = signal(true);
  showClearConfirm = signal(false);
  baseUrl = environment.apiUrl.replace("/api/v1", "");
  constructor(cartService, toast) {
    this.cartService = cartService;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadCart();
  }
  loadCart() {
    this.loading.set(true);
    this.cartService.loadCart().subscribe({
      next: (res) => {
        this.cart.set(res.data || { items: [], sub_total: 0, item_count: 0 });
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  getImageUrl(image) {
    if (!image)
      return "";
    if (image.startsWith("http"))
      return image;
    const filename = image.replace("uploads/media/", "").replace("media/", "");
    return `${this.baseUrl}/uploads/media/${filename}`;
  }
  onImgError(event) {
    event.target.style.display = "none";
  }
  updateQty(item, delta) {
    const newQty = item.quantity + delta;
    if (newQty < 1)
      return;
    this.cartService.updateItem(item.id, { quantity: newQty }).subscribe({
      next: () => this.loadCart(),
      error: () => this.toast.error("Failed to update quantity")
    });
  }
  removeItem(item) {
    this.cartService.removeItem(item.id).subscribe({
      next: () => {
        this.toast.success("Item removed");
        this.loadCart();
      },
      error: () => this.toast.error("Failed to remove item")
    });
  }
  confirmClear() {
    this.showClearConfirm.set(true);
  }
  doClear() {
    this.cartService.clearCart().subscribe({
      next: () => {
        this.toast.success("Cart cleared");
        this.cart.set({ items: [], sub_total: 0, item_count: 0 });
        this.showClearConfirm.set(false);
      },
      error: () => this.toast.error("Failed to clear cart")
    });
  }
  goToServices() {
    window.location.href = "/client/orders";
  }
  static \u0275fac = function CartComponent_Factory(t) {
    return new (t || _CartComponent)(\u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 6, consts: [[1, "cart-page"], [1, "page-header"], ["routerLink", "/client/orders", 1, "btn-back"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "cart-layout", 4, "ngIf"], ["title", "Clear Cart", "message", "Remove all items from your cart?", "confirmText", "Clear All", "type", "danger", 3, "confirmed", "cancelled", "open"], [1, "loading"], [1, "spinner"], [1, "empty-state"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#cbd5e1", "stroke-width", "1.2"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"], ["routerLink", "/client/orders", 1, "btn-primary", 3, "click"], [1, "cart-layout"], [1, "cart-items"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [1, "cart-summary"], [1, "summary-line"], [1, "summary-line", "total"], ["routerLink", "/client/checkout", 1, "btn-checkout"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], [1, "btn-clear", 3, "click"], [1, "cart-item"], [1, "item-img-wrap"], [3, "src", "alt", "error", 4, "ngIf"], ["class", "img-fallback", "width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#cbd5e1", "stroke-width", "1.5", 4, "ngIf"], [1, "item-details"], [1, "item-price"], ["class", "item-addon-total", 4, "ngIf"], [1, "item-qty"], [1, "qty-btn", 3, "click", "disabled"], [1, "qty-value"], [1, "qty-btn", 3, "click"], [1, "item-total"], ["title", "Remove", 1, "btn-remove", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], [3, "error", "src", "alt"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#cbd5e1", "stroke-width", "1.5", 1, "img-fallback"], ["d", "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"], [1, "item-addon-total"]], template: function CartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4, "Shopping Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 3);
      \u0275\u0275element(9, "line", 4)(10, "polyline", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Back to Orders ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, CartComponent_div_12_Template, 4, 0, "div", 6)(13, CartComponent_div_13_Template, 11, 0, "div", 7)(14, CartComponent_div_14_Template, 25, 13, "div", 8);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "app-confirm-modal", 9);
      \u0275\u0275listener("confirmed", function CartComponent_Template_app_confirm_modal_confirmed_15_listener() {
        return ctx.doClear();
      })("cancelled", function CartComponent_Template_app_confirm_modal_cancelled_15_listener() {
        return ctx.showClearConfirm.set(false);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.cart().items.length, " item", ctx.cart().items.length !== 1 ? "s" : "", " in your cart");
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.cart().items.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.cart().items.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.showClearConfirm());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, CurrencyPipe, RouterModule, RouterLink, ConfirmModalComponent], styles: ["\n\n.cart-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n  font-size: 14px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  color: #475569;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.2s;\n  background: #fff;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 24px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1a1a2e;\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 24px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 12px 24px;\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  text-decoration: none;\n}\n.cart-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 24px;\n  align-items: flex-start;\n}\n@media (max-width: 768px) {\n  .cart-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cart-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border-radius: 12px;\n  padding: 16px 20px;\n  border: 1px solid #e5e7eb;\n  transition: all 0.2s;\n}\n.cart-item[_ngcontent-%COMP%]:hover {\n  border-color: #fca5a5;\n}\n.item-img-wrap[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background: #f8f9fa;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.item-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  padding: 4px;\n}\n.img-fallback[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.item-details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.item-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.item-price[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #e31b23;\n  font-weight: 600;\n  margin: 0;\n}\n.item-addon-total[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin: 2px 0 0;\n}\n.item-qty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.qty-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: #f8f9fa;\n  color: #1a1a2e;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.qty-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fee2e2;\n  color: #e31b23;\n}\n.qty-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.qty-value[_ngcontent-%COMP%] {\n  width: 36px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 14px;\n  background: #fff;\n}\n.item-total[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  min-width: 80px;\n  text-align: right;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  padding: 8px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  color: #94a3b8;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  border-color: #ef4444;\n  color: #ef4444;\n  background: #fef2f2;\n}\n.cart-summary[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e5e7eb;\n  padding: 24px;\n  position: sticky;\n  top: 20px;\n}\n.cart-summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 20px;\n}\n.summary-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  font-size: 14px;\n  color: #64748b;\n  border-bottom: 1px solid #f1f5f9;\n}\n.summary-line.total[_ngcontent-%COMP%] {\n  border-bottom: none;\n  padding-top: 16px;\n  margin-top: 4px;\n  border-top: 2px solid #e5e7eb;\n}\n.summary-line.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #1a1a2e;\n  font-weight: 600;\n}\n.summary-line.total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #e31b23;\n}\n.btn-checkout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 14px 24px;\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 15px;\n  cursor: pointer;\n  text-decoration: none;\n  margin-top: 20px;\n  transition: all 0.2s;\n}\n.btn-checkout[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-clear[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 10px;\n  background: none;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  color: #64748b;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 10px;\n  transition: all 0.2s;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  border-color: #ef4444;\n  color: #ef4444;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src\\app\\features\\client\\cart\\cart.component.ts", lineNumber: 150 });
})();
export {
  CartComponent
};
