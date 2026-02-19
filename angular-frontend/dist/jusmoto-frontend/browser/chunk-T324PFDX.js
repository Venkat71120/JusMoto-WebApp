import {
  ApiService
} from "./chunk-XSC2IEYW.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-37NMOBDC.js";

// src/app/core/services/order.service.ts
var OrderService = class _OrderService {
  api;
  constructor(api) {
    this.api = api;
  }
  getOrders(params) {
    return this.api.get("/orders", params);
  }
  getOrder(id) {
    return this.api.get(`/orders/${id}`);
  }
  createOrder(data) {
    return this.api.post("/orders", data);
  }
  requestCompletion(id) {
    return this.api.post(`/orders/${id}/complete-request`, {});
  }
  cancelOrder(id, reason) {
    return this.api.post(`/orders/${id}/cancel`, { reason });
  }
  requestRefund(id, reason) {
    return this.api.post(`/orders/${id}/refund`, { reason });
  }
  submitReview(orderId, data) {
    return this.api.post(`/orders/${orderId}/review`, data);
  }
  // Coupon
  validateCoupon(code, order_amount) {
    return this.api.post("/coupons/validate", { code, order_amount });
  }
  getAvailableCoupons() {
    return this.api.get("/coupons/available");
  }
  // Refunds
  getRefunds(params) {
    return this.api.get("/refunds", params);
  }
  getRefund(id) {
    return this.api.get(`/refunds/${id}`);
  }
  static \u0275fac = function OrderService_Factory(t) {
    return new (t || _OrderService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
};

export {
  OrderService
};
//# sourceMappingURL=chunk-T324PFDX.js.map
