import {
  MediaPickerComponent
} from "./chunk-SAEP3RKQ.js";
import {
  ToastService
} from "./chunk-JBYXSY66.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-X7FFWIXK.js";
import {
  environment
} from "./chunk-GUDC7RY7.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-CMH3GDQY.js";
import {
  HttpClient
} from "./chunk-7QXR32YF.js";
import {
  CommonModule,
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
  ɵɵtextInterpolate1
} from "./chunk-37NMOBDC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// src/app/features/admin/categories/category-form.component.ts
function CategoryFormComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function CategoryFormComponent_form_9_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function CategoryFormComponent_form_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 10);
    \u0275\u0275listener("ngSubmit", function CategoryFormComponent_form_9_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "label");
    \u0275\u0275text(4, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12)(7, "label");
    \u0275\u0275text(8, "Icon (CSS class or URL)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 15)(11, "label");
    \u0275\u0275text(12, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "textarea", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 15)(15, "app-media-picker", 17);
    \u0275\u0275listener("valueChange", function CategoryFormComponent_form_9_Template_app_media_picker_valueChange_15_listener($event) {
      let tmp_3_0;
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.imageValue = $event;
      return \u0275\u0275resetView((tmp_3_0 = ctx_r1.form.get("image")) == null ? null : tmp_3_0.setValue($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "label", 18);
    \u0275\u0275element(18, "input", 19);
    \u0275\u0275text(19, " Active ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, CategoryFormComponent_form_9_div_20_Template, 2, 1, "div", 20);
    \u0275\u0275elementStart(21, "div", 21)(22, "a", 22);
    \u0275\u0275text(23, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 23);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(15);
    \u0275\u0275property("value", ctx_r1.imageValue)("label", "Category Image");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Saving..." : ctx_r1.isEdit ? "Update" : "Create", " ");
  }
}
var CategoryFormComponent = class _CategoryFormComponent {
  fb;
  http;
  route;
  router;
  toast;
  form;
  isEdit = false;
  categoryId = null;
  loadingData = signal(false);
  saving = signal(false);
  error = signal("");
  imageValue = "";
  constructor(fb, http, route, router, toast) {
    this.fb = fb;
    this.http = http;
    this.route = route;
    this.router = router;
    this.toast = toast;
  }
  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get("id");
    this.isEdit = !!this.categoryId;
    this.form = this.fb.group({
      name: ["", Validators.required],
      description: [""],
      image: [""],
      icon: [""],
      status: [true]
    });
    if (this.isEdit)
      this.loadCategory();
  }
  loadCategory() {
    this.loadingData.set(true);
    this.http.get(`${environment.apiUrl}/admin/categories/${this.categoryId}`).subscribe({
      next: (res) => {
        const c = res.data;
        this.form.patchValue({ name: c.name, description: c.description, image: c.image, icon: c.icon, status: !!c.status });
        this.imageValue = c.image || "";
      },
      error: () => this.router.navigate(["/admin/category/index"]),
      complete: () => this.loadingData.set(false)
    });
  }
  onSubmit() {
    if (this.form.invalid)
      return;
    this.saving.set(true);
    this.error.set("");
    const data = __spreadProps(__spreadValues({}, this.form.value), { status: this.form.value.status ? 1 : 0 });
    const req = this.isEdit ? this.http.put(`${environment.apiUrl}/admin/categories/${this.categoryId}`, data) : this.http.post(`${environment.apiUrl}/admin/categories`, data);
    req.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? "Category updated successfully" : "Category created successfully");
        this.router.navigate(["/admin/category/index"]);
      },
      error: (err) => {
        this.toast.error(err.error?.error || "Something went wrong");
        this.error.set(err.error?.error || "Something went wrong");
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
  static \u0275fac = function CategoryFormComponent_Factory(t) {
    return new (t || _CategoryFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryFormComponent, selectors: [["app-category-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [[1, "page-header"], ["routerLink", "/admin/category/index", 1, "back-btn"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], [1, "page-title"], ["class", "loading-center", 4, "ngIf"], ["class", "form-card", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "loading-center"], [1, "spinner"], [1, "form-card", 3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "form-group"], ["type", "text", "formControlName", "name", "placeholder", "Category name"], ["type", "text", "formControlName", "icon", "placeholder", "e.g. fa-car"], [1, "form-group", "full-width"], ["formControlName", "description", "rows", "3", "placeholder", "Category description"], [3, "valueChange", "value", "label"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "status"], ["class", "error-msg", 4, "ngIf"], [1, "form-actions"], ["routerLink", "/admin/category/index", 1, "btn-cancel"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "error-msg"]], template: function CategoryFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3)(4, "polyline", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " Back to Categories ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "h1", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, CategoryFormComponent_div_8_Template, 2, 0, "div", 6)(9, CategoryFormComponent_form_9_Template, 26, 6, "form", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.isEdit ? "Edit Category" : "Create Category");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingData());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData());
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MediaPickerComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: #64748b;\n  font-weight: 500;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding-top: 20px;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #e31b23;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 10px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #f1f5f9;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 24px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=category-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryFormComponent, { className: "CategoryFormComponent", filePath: "src\\app\\features\\admin\\categories\\category-form.component.ts", lineNumber: 83 });
})();
export {
  CategoryFormComponent
};
//# sourceMappingURL=chunk-ZN3OQB5U.js.map
