import {
  ConfirmModalComponent
} from "./chunk-M673IPVF.js";
import {
  ToastService
} from "./chunk-CUQ723YT.js";
import {
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
  DatePipe,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/admin/coupons/coupon-list.component.ts
var _c0 = (a0) => ["/admin/coupons/edit", a0];
function CouponListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function CouponListComponent_tr_27_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-red", ctx_r2.isExpired(c_r2.expire_date));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 3, c_r2.expire_date, "mediumDate"));
  }
}
function CouponListComponent_tr_27_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "No expiry");
    \u0275\u0275elementEnd();
  }
}
function CouponListComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, CouponListComponent_tr_27_span_14_Template, 3, 6, "span", 15)(15, CouponListComponent_tr_27_span_15_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "button", 17);
    \u0275\u0275listener("click", function CouponListComponent_tr_27_Template_button_click_17_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.statusCoupon.set(c_r2));
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "div", 18)(21, "a", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 20);
    \u0275\u0275element(23, "path", 21)(24, "path", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "button", 23);
    \u0275\u0275listener("click", function CouponListComponent_tr_27_Template_button_click_25_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteCoupon(c_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 20);
    \u0275\u0275element(27, "polyline", 24)(28, "path", 25);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.title || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r2.code);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-info", c_r2.discount_type === "percentage")("badge-purple", c_r2.discount_type !== "percentage");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.discount_type || "percentage");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.discount_type === "percentage" ? c_r2.discount + "%" : "\u20B9" + c_r2.discount);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", c_r2.expire_date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !c_r2.expire_date);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-active", c_r2.status)("badge-inactive", !c_r2.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r2.status ? "Active" : "Inactive", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, c_r2.id));
  }
}
function CouponListComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2, "No coupons found");
    \u0275\u0275elementEnd()();
  }
}
var CouponListComponent = class _CouponListComponent {
  http;
  toast;
  coupons = signal([]);
  loading = signal(false);
  deletingCoupon = signal(null);
  statusCoupon = signal(null);
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadCoupons();
  }
  loadCoupons() {
    this.loading.set(true);
    this.http.get(`${environment.apiUrl}/admin/coupons`).subscribe({
      next: (res) => this.coupons.set(res.data || []),
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  isExpired(date) {
    return new Date(date) < /* @__PURE__ */ new Date();
  }
  deleteCoupon(c) {
    this.deletingCoupon.set(c);
  }
  confirmDelete() {
    const c = this.deletingCoupon();
    if (!c)
      return;
    this.http.delete(`${environment.apiUrl}/admin/coupons/${c.id}`).subscribe({
      next: () => {
        this.toast.success("Coupon deleted successfully");
        this.deletingCoupon.set(null);
        this.loadCoupons();
      },
      error: () => {
        this.toast.error("Failed to delete coupon");
        this.deletingCoupon.set(null);
      }
    });
  }
  confirmToggleStatus() {
    const c = this.statusCoupon();
    if (!c)
      return;
    const newStatus = c.status ? 0 : 1;
    this.http.put(`${environment.apiUrl}/admin/coupons/${c.id}`, { status: newStatus }).subscribe({
      next: () => {
        c.status = newStatus;
        this.toast.success("Coupon status updated");
        this.statusCoupon.set(null);
      },
      error: () => {
        this.toast.error("Failed to update status");
        this.statusCoupon.set(null);
      }
    });
  }
  static \u0275fac = function CouponListComponent_Factory(t) {
    return new (t || _CouponListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CouponListComponent, selectors: [["app-coupon-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 7, consts: [[1, "page-header"], [1, "page-title"], ["routerLink", "/admin/coupons/new", 1, "btn-primary"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["title", "Delete Coupon", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], ["title", "Change Status", "confirmText", "Change Status", "type", "warning", 3, "confirmed", "cancelled", "open", "message"], [1, "loading-overlay"], [1, "spinner"], [1, "coupon-code"], [1, "badge"], [1, "fw-600"], [3, "text-red", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "badge", "badge-clickable", 3, "click"], [1, "action-btns"], ["title", "Edit", 1, "btn-action", "btn-edit", 3, "routerLink"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Delete", 1, "btn-action", "btn-delete", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], [1, "text-muted"], ["colspan", "8", 1, "empty-state"]], template: function CouponListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Coupons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 2);
      \u0275\u0275text(4, "+ Add Coupon");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275template(6, CouponListComponent_div_6_Template, 2, 0, "div", 4);
      \u0275\u0275elementStart(7, "table", 5)(8, "thead")(9, "tr")(10, "th");
      \u0275\u0275text(11, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th");
      \u0275\u0275text(13, "Title");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "th");
      \u0275\u0275text(15, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "th");
      \u0275\u0275text(17, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Expiry");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "tbody");
      \u0275\u0275template(27, CouponListComponent_tr_27_Template, 29, 19, "tr", 6)(28, CouponListComponent_tr_28_Template, 3, 0, "tr", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "app-confirm-modal", 8);
      \u0275\u0275listener("confirmed", function CouponListComponent_Template_app_confirm_modal_confirmed_29_listener() {
        return ctx.confirmDelete();
      })("cancelled", function CouponListComponent_Template_app_confirm_modal_cancelled_29_listener() {
        return ctx.deletingCoupon.set(null);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "app-confirm-modal", 9);
      \u0275\u0275listener("confirmed", function CouponListComponent_Template_app_confirm_modal_confirmed_30_listener() {
        return ctx.confirmToggleStatus();
      })("cancelled", function CouponListComponent_Template_app_confirm_modal_cancelled_30_listener() {
        return ctx.statusCoupon.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_6_0;
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.coupons());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.coupons().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingCoupon())("message", 'Delete coupon "' + (((tmp_4_0 = ctx.deletingCoupon()) == null ? null : tmp_4_0.code) || "") + '"? This cannot be undone.');
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.statusCoupon())("message", 'Change status of coupon "' + (((tmp_6_0 = ctx.statusCoupon()) == null ? null : tmp_6_0.code) || "") + '" to ' + (((tmp_6_0 = ctx.statusCoupon()) == null ? null : tmp_6_0.status) ? "Inactive" : "Active") + "?");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-top: 1px solid #f1f5f9;\n  font-size: 14px;\n  color: #334155;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.coupon-code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-family: monospace;\n  font-weight: 600;\n  font-size: 13px;\n  letter-spacing: 0.05em;\n}\n.fw-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.text-red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: opacity 0.2s;\n  border: none;\n}\n.badge-clickable[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.badge-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge-info[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.badge-purple[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.2s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  color: #3b82f6;\n  border-color: #3b82f6;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  border-color: #ef4444;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}\n@media (max-width: 768px) {\n  .table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .data-table[_ngcontent-%COMP%] {\n    min-width: 700px;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CouponListComponent, { className: "CouponListComponent", filePath: "src\\app\\features\\admin\\coupons\\coupon-list.component.ts", lineNumber: 120 });
})();
export {
  CouponListComponent
};
