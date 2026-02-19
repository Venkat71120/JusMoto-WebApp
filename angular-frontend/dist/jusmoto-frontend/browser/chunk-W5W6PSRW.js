import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-5RHIFAVQ.js";

// src/app/core/services/toast.service.ts
var ToastService = class _ToastService {
  toasts = signal([]);
  counter = 0;
  success(message) {
    this.show(message, "success");
  }
  error(message) {
    this.show(message, "error");
  }
  warning(message) {
    this.show(message, "warning");
  }
  info(message) {
    this.show(message, "info");
  }
  show(message, type) {
    const id = ++this.counter;
    this.toasts.update((t) => [...t, { id, message, type }]);
    setTimeout(() => this.dismiss(id), 4e3);
  }
  dismiss(id) {
    this.toasts.update((t) => t.filter((x) => x.id !== id));
  }
  static \u0275fac = function ToastService_Factory(t) {
    return new (t || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};

export {
  ToastService
};
