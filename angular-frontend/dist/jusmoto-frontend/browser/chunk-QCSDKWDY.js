import {
  ApiService
} from "./chunk-7JMAC63R.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-37NMOBDC.js";

// src/app/core/services/challan.service.ts
var ChallanService = class _ChallanService {
  api;
  constructor(api) {
    this.api = api;
  }
  getChallans(params) {
    return this.api.get("/challans", params);
  }
  getChallan(id) {
    return this.api.get(`/challans/${id}`);
  }
  checkChallans(params) {
    const data = typeof params === "string" ? { vehicle_number: params } : params;
    return this.api.post("/challans/check", data);
  }
  addChallan(data) {
    return this.api.post("/challans", data);
  }
  payChallan(id, payment_method) {
    return this.api.post(`/challans/${id}/pay`, { payment_method });
  }
  getChallanStats() {
    return this.api.get("/challans/stats/summary");
  }
  static \u0275fac = function ChallanService_Factory(t) {
    return new (t || _ChallanService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChallanService, factory: _ChallanService.\u0275fac, providedIn: "root" });
};

export {
  ChallanService
};
//# sourceMappingURL=chunk-QCSDKWDY.js.map
