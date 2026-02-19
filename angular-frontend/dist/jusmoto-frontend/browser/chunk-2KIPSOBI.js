import {
  ApiService
} from "./chunk-7JMAC63R.js";
import {
  BehaviorSubject,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-37NMOBDC.js";

// src/app/core/services/cart.service.ts
var CartService = class _CartService {
  api;
  cartSubject = new BehaviorSubject({ items: [], sub_total: 0, item_count: 0 });
  cart$ = this.cartSubject.asObservable();
  constructor(api) {
    this.api = api;
  }
  loadCart() {
    return this.api.get("/cart").pipe(tap((response) => {
      if (response.success) {
        this.cartSubject.next(response.data);
      }
    }));
  }
  addItem(data) {
    return this.api.post("/cart", data).pipe(tap(() => this.loadCart().subscribe()));
  }
  updateItem(id, data) {
    return this.api.put(`/cart/${id}`, data).pipe(tap(() => this.loadCart().subscribe()));
  }
  removeItem(id) {
    return this.api.delete(`/cart/${id}`).pipe(tap(() => this.loadCart().subscribe()));
  }
  clearCart() {
    return this.api.delete("/cart").pipe(tap(() => this.cartSubject.next({ items: [], sub_total: 0, item_count: 0 })));
  }
  getCartCount() {
    return this.api.get("/cart/count");
  }
  get currentCart() {
    return this.cartSubject.value;
  }
  get itemCount() {
    return this.cartSubject.value.item_count;
  }
  static \u0275fac = function CartService_Factory(t) {
    return new (t || _CartService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
};

export {
  CartService
};
//# sourceMappingURL=chunk-2KIPSOBI.js.map
