import {
  MediaPickerComponent
} from "./chunk-SAEP3RKQ.js";
import {
  ToastService
} from "./chunk-JBYXSY66.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-37NMOBDC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// src/app/features/admin/sliders/slider-form.component.ts
function SliderFormComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function SliderFormComponent_div_8_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function SliderFormComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "app-media-picker", 11);
    \u0275\u0275listener("valueChange", function SliderFormComponent_div_8_Template_app_media_picker_valueChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.image = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 10)(4, "label");
    \u0275\u0275text(5, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function SliderFormComponent_div_8_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.type, $event) || (ctx_r1.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(7, "option", 13);
    \u0275\u0275text(8, "Select Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 14);
    \u0275\u0275text(10, "Banner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 15);
    \u0275\u0275text(12, "Hero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 16);
    \u0275\u0275text(14, "Promo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 17);
    \u0275\u0275text(16, "General");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 10)(18, "label");
    \u0275\u0275text(19, "Identity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function SliderFormComponent_div_8_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.identity, $event) || (ctx_r1.form.identity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 10)(22, "label", 19)(23, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function SliderFormComponent_div_8_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.status, $event) || (ctx_r1.form.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, SliderFormComponent_div_8_div_25_Template, 2, 1, "div", 21);
    \u0275\u0275elementStart(26, "div", 22)(27, "a", 23);
    \u0275\u0275text(28, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 24);
    \u0275\u0275listener("click", function SliderFormComponent_div_8_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.form.image)("label", "Slider Image");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.type);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.identity);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Saving..." : ctx_r1.isEdit ? "Update" : "Create", " ");
  }
}
var SliderFormComponent = class _SliderFormComponent {
  http;
  route;
  router;
  toast;
  isEdit = false;
  sliderId = null;
  loadingData = signal(false);
  saving = signal(false);
  error = signal("");
  form = { image: "", type: "", identity: "", status: true };
  constructor(http, route, router, toast) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.toast = toast;
  }
  ngOnInit() {
    this.sliderId = this.route.snapshot.paramMap.get("id");
    this.isEdit = !!this.sliderId;
    if (this.isEdit)
      this.loadSlider();
  }
  loadSlider() {
    this.loadingData.set(true);
    this.http.get(`${environment.apiUrl}/admin/sliders/${this.sliderId}`).subscribe({
      next: (res) => {
        const s = res.data;
        this.form = { image: s.image || "", type: s.type || "", identity: s.identity || "", status: !!s.status };
      },
      error: () => this.router.navigate(["/admin/slider/all"]),
      complete: () => this.loadingData.set(false)
    });
  }
  onSubmit() {
    if (!this.form.image.trim()) {
      this.error.set("Image is required");
      return;
    }
    this.saving.set(true);
    this.error.set("");
    const data = __spreadProps(__spreadValues({}, this.form), { status: this.form.status ? 1 : 0 });
    const req = this.isEdit ? this.http.put(`${environment.apiUrl}/admin/sliders/${this.sliderId}`, data) : this.http.post(`${environment.apiUrl}/admin/sliders`, data);
    req.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? "Slider updated successfully" : "Slider created successfully");
        this.router.navigate(["/admin/slider/all"]);
      },
      error: (err) => {
        this.toast.error(err.error?.error || "Something went wrong");
        this.error.set(err.error?.error || "Something went wrong");
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
  static \u0275fac = function SliderFormComponent_Factory(t) {
    return new (t || _SliderFormComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SliderFormComponent, selectors: [["app-slider-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [["routerLink", "/admin/slider/all", 1, "back-link"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], [1, "page-title"], ["class", "loading-center", 4, "ngIf"], ["class", "form-card", 4, "ngIf"], [1, "loading-center"], [1, "spinner"], [1, "form-card"], [1, "form-group"], [3, "valueChange", "value", "label"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "banner"], ["value", "hero"], ["value", "promo"], ["value", "general"], ["type", "text", "placeholder", "Identifier or label", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "toggle-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["class", "error-msg", 4, "ngIf"], [1, "form-actions"], ["routerLink", "/admin/slider/all", 1, "btn-cancel"], [1, "btn-save", 3, "click", "disabled"], [1, "error-msg"]], template: function SliderFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1);
      \u0275\u0275element(2, "path", 2)(3, "polyline", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Back to Sliders ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, SliderFormComponent_div_7_Template, 2, 0, "div", 5)(8, SliderFormComponent_div_8_Template, 31, 8, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.isEdit ? "Edit Slider" : "Create Slider");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingData());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData());
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MediaPickerComponent], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  color: #64748b;\n  text-decoration: none;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 24px;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  max-width: 700px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #334155;\n  font-size: 14px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);\n}\n.image-preview[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 200px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #e31b23;\n  width: 16px;\n  height: 16px;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 10px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #f1f5f9;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 12px 32px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 15px;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=slider-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SliderFormComponent, { className: "SliderFormComponent", filePath: "src\\app\\features\\admin\\sliders\\slider-form.component.ts", lineNumber: 81 });
})();
export {
  SliderFormComponent
};
//# sourceMappingURL=chunk-RWNHSD5F.js.map
