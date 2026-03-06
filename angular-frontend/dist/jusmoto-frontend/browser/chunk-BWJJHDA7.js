import {
  ConfirmModalComponent
} from "./chunk-M673IPVF.js";
import {
  ToastService
} from "./chunk-CUQ723YT.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-5WG63XSG.js";
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/admin/variants/variant-list.component.ts
var _c0 = (a0) => ["/admin/variant/edit", a0];
function VariantListComponent_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const car_r1 = ctx.$implicit;
    \u0275\u0275property("value", car_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", (car_r1.brand == null ? null : car_r1.brand.name) || "", " ", car_r1.name, "");
  }
}
function VariantListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function VariantListComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 18)(11, "a", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 20);
    \u0275\u0275element(13, "path", 21)(14, "path", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 23);
    \u0275\u0275listener("click", function VariantListComponent_tr_26_Template_button_click_15_listener() {
      const v_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteVariant(v_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 20);
    \u0275\u0275element(17, "polyline", 24)(18, "path", 25);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const v_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r3.pagination().page - 1) * ctx_r3.pagination().limit + i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (v_r3.car == null ? null : v_r3.car.brand == null ? null : v_r3.car.brand.name) || "", " ", (v_r3.car == null ? null : v_r3.car.name) || "-", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((v_r3.engine_type == null ? null : v_r3.engine_type.name) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((v_r3.fuel_type == null ? null : v_r3.fuel_type.name) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, v_r3.id));
  }
}
function VariantListComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2, "No variants found");
    \u0275\u0275elementEnd()();
  }
}
function VariantListComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 28);
    \u0275\u0275listener("click", function VariantListComponent_div_29_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToPage(ctx_r3.pagination().page - 1));
    });
    \u0275\u0275text(2, "\xAB Prev");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function VariantListComponent_div_29_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToPage(ctx_r3.pagination().page + 1));
    });
    \u0275\u0275text(6, "Next \xBB");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r3.pagination().hasPrevPage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r3.pagination().page, " of ", ctx_r3.pagination().totalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r3.pagination().hasNextPage);
  }
}
var VariantListComponent = class _VariantListComponent {
  http;
  toast;
  variants = signal([]);
  cars = signal([]);
  loading = signal(false);
  deletingItem = signal(null);
  carFilter = "";
  pagination = signal({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadCars();
    this.loadVariants();
  }
  loadCars() {
    this.http.get(`${environment.apiUrl}/admin/cars`).subscribe({
      next: (res) => this.cars.set(res.data || [])
    });
  }
  loadVariants(page = 1) {
    this.loading.set(true);
    const params = { page, limit: 15 };
    if (this.carFilter)
      params.car_id = this.carFilter;
    this.http.get(`${environment.apiUrl}/admin/variants`, { params }).subscribe({
      next: (res) => {
        this.variants.set(res.data || []);
        this.pagination.set(res.pagination || {});
      },
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  goToPage(page) {
    this.loadVariants(page);
  }
  deleteVariant(v) {
    this.deletingItem.set(v);
  }
  confirmDelete() {
    const v = this.deletingItem();
    if (!v)
      return;
    this.http.delete(`${environment.apiUrl}/admin/variants/${v.id}`).subscribe({
      next: () => {
        this.toast.success("Variant deleted successfully");
        this.deletingItem.set(null);
        this.loadVariants(this.pagination().page);
      },
      error: () => {
        this.toast.error("Failed to delete variant");
        this.deletingItem.set(null);
      }
    });
  }
  static \u0275fac = function VariantListComponent_Factory(t) {
    return new (t || _VariantListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VariantListComponent, selectors: [["app-variant-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 8, consts: [[1, "page-header"], [1, "page-title"], ["routerLink", "/admin/variant/add", 1, "btn-primary"], [1, "filters-bar"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["title", "Delete Variant", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], ["class", "pagination", 4, "ngIf"], [3, "value"], [1, "loading-overlay"], [1, "spinner"], [1, "fw-600"], [1, "action-btns"], ["title", "Edit", 1, "action-btn", 3, "routerLink"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Delete", 1, "action-btn", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], ["colspan", "5", 1, "empty-state"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function VariantListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Variants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 2);
      \u0275\u0275text(4, "+ Add Variant");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "select", 4);
      \u0275\u0275twoWayListener("ngModelChange", function VariantListComponent_Template_select_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.carFilter, $event) || (ctx.carFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function VariantListComponent_Template_select_change_6_listener() {
        return ctx.loadVariants();
      });
      \u0275\u0275elementStart(7, "option", 5);
      \u0275\u0275text(8, "All Cars");
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, VariantListComponent_option_9_Template, 2, 3, "option", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275template(11, VariantListComponent_div_11_Template, 2, 0, "div", 8);
      \u0275\u0275elementStart(12, "table", 9)(13, "thead")(14, "tr")(15, "th");
      \u0275\u0275text(16, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "th");
      \u0275\u0275text(18, "Car");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "th");
      \u0275\u0275text(20, "Engine Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th");
      \u0275\u0275text(22, "Fuel Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "tbody");
      \u0275\u0275template(26, VariantListComponent_tr_26_Template, 19, 8, "tr", 10)(27, VariantListComponent_tr_27_Template, 3, 0, "tr", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "app-confirm-modal", 12);
      \u0275\u0275listener("confirmed", function VariantListComponent_Template_app_confirm_modal_confirmed_28_listener() {
        return ctx.confirmDelete();
      })("cancelled", function VariantListComponent_Template_app_confirm_modal_cancelled_28_listener() {
        return ctx.deletingItem.set(null);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, VariantListComponent_div_29_Template, 7, 4, "div", 13);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.carFilter);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.cars());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(15);
      \u0275\u0275property("ngForOf", ctx.variants());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.variants().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingItem())("message", "Delete this variant? This cannot be undone.");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pagination().totalPages > 1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: #fff;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e5e7eb;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.fw-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  color: #64748b;\n  display: inline-flex;\n  text-decoration: none;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #e31b23;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  align-items: center;\n  margin-top: 24px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 500;\n  color: #334155;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VariantListComponent, { className: "VariantListComponent", filePath: "src\\app\\features\\admin\\variants\\variant-list.component.ts", lineNumber: 106 });
})();
export {
  VariantListComponent
};
