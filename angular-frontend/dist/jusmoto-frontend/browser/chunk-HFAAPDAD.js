import {
  ApiService
} from "./chunk-7JMAC63R.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-37NMOBDC.js";

// src/app/core/services/service.service.ts
var ServiceService = class _ServiceService {
  api;
  constructor(api) {
    this.api = api;
  }
  getServices(params) {
    return this.api.get("/services", params);
  }
  getFeaturedServices(limit) {
    return this.api.get("/services/featured", { limit });
  }
  getService(idOrSlug) {
    return this.api.get(`/services/${idOrSlug}`);
  }
  getServicePrice(id, car_id, variant_id) {
    return this.api.get(`/services/${id}/price`, { car_id, variant_id });
  }
  getServiceReviews(id, page, limit) {
    return this.api.get(`/services/${id}/reviews`, { page, limit });
  }
  // Categories
  getCategories() {
    return this.api.get("/categories");
  }
  getCategory(idOrSlug) {
    return this.api.get(`/categories/${idOrSlug}`);
  }
  getCategoryServices(idOrSlug, params) {
    return this.api.get(`/categories/${idOrSlug}/services`, params);
  }
  // Brands & Cars
  getBrands() {
    return this.api.get("/brands");
  }
  getBrand(id) {
    return this.api.get(`/brands/${id}`);
  }
  getCars(brand_id) {
    return this.api.get("/cars", { brand_id });
  }
  getCar(id) {
    return this.api.get(`/cars/${id}`);
  }
  getVariants(car_id) {
    return this.api.get(`/cars/${car_id}/variants`);
  }
  // Favourites
  getFavourites() {
    return this.api.get("/favourites");
  }
  addToFavourites(serviceId) {
    return this.api.post("/favourites", { service_id: serviceId });
  }
  removeFromFavourites(id) {
    return this.api.delete(`/favourites/${id}`);
  }
  isFavourite(serviceId) {
    return this.api.get(`/favourites/check/${serviceId}`);
  }
  static \u0275fac = function ServiceService_Factory(t) {
    return new (t || _ServiceService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServiceService, factory: _ServiceService.\u0275fac, providedIn: "root" });
};

export {
  ServiceService
};
//# sourceMappingURL=chunk-HFAAPDAD.js.map
