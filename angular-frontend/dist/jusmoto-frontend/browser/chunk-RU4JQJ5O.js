import {
  environment
} from "./chunk-OW254BTU.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-L2KTGN5G.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-5RHIFAVQ.js";

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  http;
  baseUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  get(endpoint, params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0) {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get(`${this.baseUrl}${endpoint}`, { params: httpParams });
  }
  post(endpoint, body) {
    return this.http.post(`${this.baseUrl}${endpoint}`, body);
  }
  put(endpoint, body) {
    return this.http.put(`${this.baseUrl}${endpoint}`, body);
  }
  patch(endpoint, body) {
    return this.http.patch(`${this.baseUrl}${endpoint}`, body);
  }
  delete(endpoint) {
    return this.http.delete(`${this.baseUrl}${endpoint}`);
  }
  upload(endpoint, formData) {
    return this.http.post(`${this.baseUrl}${endpoint}`, formData);
  }
  static \u0275fac = function ApiService_Factory(t) {
    return new (t || _ApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};

export {
  ApiService
};
