import {
  ToastService
} from "./chunk-W5W6PSRW.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBAOAUH3.js";
import {
  environment
} from "./chunk-OW254BTU.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-DYL6AOBP.js";
import {
  HttpClient
} from "./chunk-L2KTGN5G.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/admin/variants/variant-form.component.ts
function VariantFormComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function VariantFormComponent_div_8_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r3 = ctx.$implicit;
    \u0275\u0275property("value", b_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r3.name);
  }
}
function VariantFormComponent_div_8_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("value", c_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.name);
  }
}
function VariantFormComponent_div_8_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r5 = ctx.$implicit;
    \u0275\u0275property("value", e_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r5.name);
  }
}
function VariantFormComponent_div_8_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r6 = ctx.$implicit;
    \u0275\u0275property("value", f_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r6.name);
  }
}
function VariantFormComponent_div_8_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function VariantFormComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "label");
    \u0275\u0275text(3, "Brand *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function VariantFormComponent_div_8_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedBrandId, $event) || (ctx_r1.selectedBrandId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function VariantFormComponent_div_8_Template_select_change_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBrandChange());
    });
    \u0275\u0275elementStart(5, "option", 12);
    \u0275\u0275text(6, "Select Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, VariantFormComponent_div_8_option_7_Template, 2, 2, "option", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10)(9, "label");
    \u0275\u0275text(10, "Car *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function VariantFormComponent_div_8_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.car_id, $event) || (ctx_r1.form.car_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 12);
    \u0275\u0275text(13, "Select Car");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, VariantFormComponent_div_8_option_14_Template, 2, 2, "option", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 10)(16, "label");
    \u0275\u0275text(17, "Engine Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function VariantFormComponent_div_8_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.engine_type_id, $event) || (ctx_r1.form.engine_type_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 12);
    \u0275\u0275text(20, "Select Engine Type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, VariantFormComponent_div_8_option_21_Template, 2, 2, "option", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 10)(23, "label");
    \u0275\u0275text(24, "Fuel Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function VariantFormComponent_div_8_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.fuel_type_id, $event) || (ctx_r1.form.fuel_type_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(26, "option", 12);
    \u0275\u0275text(27, "Select Fuel Type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, VariantFormComponent_div_8_option_28_Template, 2, 2, "option", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, VariantFormComponent_div_8_div_29_Template, 2, 1, "div", 15);
    \u0275\u0275elementStart(30, "div", 16)(31, "a", 17);
    \u0275\u0275text(32, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 18);
    \u0275\u0275listener("click", function VariantFormComponent_div_8_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedBrandId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.brands());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.car_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.filteredCars());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.engine_type_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.engineTypes());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.fuel_type_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.fuelTypes());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Saving..." : ctx_r1.isEdit ? "Update" : "Create", " ");
  }
}
var VariantFormComponent = class _VariantFormComponent {
  http;
  route;
  router;
  toast;
  isEdit = false;
  variantId = null;
  brands = signal([]);
  allCars = signal([]);
  filteredCars = signal([]);
  engineTypes = signal([]);
  fuelTypes = signal([]);
  loadingData = signal(false);
  saving = signal(false);
  error = signal("");
  selectedBrandId = "";
  form = { car_id: "", engine_type_id: "", fuel_type_id: "" };
  constructor(http, route, router, toast) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.toast = toast;
  }
  ngOnInit() {
    this.variantId = this.route.snapshot.paramMap.get("id");
    this.isEdit = !!this.variantId;
    this.loadDropdowns();
    if (this.isEdit)
      this.loadVariant();
  }
  loadDropdowns() {
    this.http.get(`${environment.apiUrl}/admin/brands`).subscribe({
      next: (res) => this.brands.set(res.data || [])
    });
    this.http.get(`${environment.apiUrl}/admin/cars`).subscribe({
      next: (res) => {
        this.allCars.set(res.data || []);
        this.filterCars();
      }
    });
    this.http.get(`${environment.apiUrl}/admin/engine-types`).subscribe({
      next: (res) => this.engineTypes.set(res.data || [])
    });
    this.http.get(`${environment.apiUrl}/admin/fuel-types`).subscribe({
      next: (res) => this.fuelTypes.set(res.data || [])
    });
  }
  loadVariant() {
    this.loadingData.set(true);
    this.http.get(`${environment.apiUrl}/admin/variants/${this.variantId}`).subscribe({
      next: (res) => {
        const v = res.data;
        this.form = { car_id: v.car_id || "", engine_type_id: v.engine_type_id || "", fuel_type_id: v.fuel_type_id || "" };
        this.selectedBrandId = v.car?.brand_id || "";
        this.filterCars();
      },
      error: () => this.router.navigate(["/admin/variant/list"]),
      complete: () => this.loadingData.set(false)
    });
  }
  onBrandChange() {
    this.form.car_id = "";
    this.filterCars();
  }
  filterCars() {
    if (this.selectedBrandId) {
      this.filteredCars.set(this.allCars().filter((c) => String(c.brand_id) === String(this.selectedBrandId)));
    } else {
      this.filteredCars.set(this.allCars());
    }
  }
  onSubmit() {
    if (!this.form.car_id || !this.form.engine_type_id || !this.form.fuel_type_id) {
      this.error.set("All fields are required");
      return;
    }
    this.saving.set(true);
    this.error.set("");
    const req = this.isEdit ? this.http.put(`${environment.apiUrl}/admin/variants/${this.variantId}`, this.form) : this.http.post(`${environment.apiUrl}/admin/variants`, this.form);
    req.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? "Variant updated successfully" : "Variant created successfully");
        this.router.navigate(["/admin/variant/list"]);
      },
      error: (err) => {
        this.toast.error(err.error?.error || "Something went wrong");
        this.error.set(err.error?.error || "Something went wrong");
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
  static \u0275fac = function VariantFormComponent_Factory(t) {
    return new (t || _VariantFormComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VariantFormComponent, selectors: [["app-variant-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [["routerLink", "/admin/variant/list", 1, "back-link"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], [1, "page-title"], ["class", "loading-center", 4, "ngIf"], ["class", "form-card", 4, "ngIf"], [1, "loading-center"], [1, "spinner"], [1, "form-card"], [1, "form-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "error-msg", 4, "ngIf"], [1, "form-actions"], ["routerLink", "/admin/variant/list", 1, "btn-cancel"], [1, "btn-save", 3, "click", "disabled"], [3, "value"], [1, "error-msg"]], template: function VariantFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1);
      \u0275\u0275element(2, "path", 2)(3, "polyline", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Back to Variants ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, VariantFormComponent_div_7_Template, 2, 0, "div", 5)(8, VariantFormComponent_div_8_Template, 35, 11, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.isEdit ? "Edit Variant" : "Create Variant");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingData());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  color: #64748b;\n  text-decoration: none;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 24px;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  max-width: 700px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #334155;\n  font-size: 14px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 10px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #f1f5f9;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 12px 32px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 15px;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VariantFormComponent, { className: "VariantFormComponent", filePath: "src\\app\\features\\admin\\variants\\variant-form.component.ts", lineNumber: 82 });
})();
export {
  VariantFormComponent
};
