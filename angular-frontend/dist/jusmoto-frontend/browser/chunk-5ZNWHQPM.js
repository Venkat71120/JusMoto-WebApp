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
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
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
} from "./chunk-37NMOBDC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// src/app/features/admin/offers/offer-form.component.ts
function OfferFormComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function OfferFormComponent_div_8_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "label", 27)(2, "input", 28);
    \u0275\u0275listener("change", function OfferFormComponent_div_8_div_28_Template_input_change_2_listener() {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleService(s_r4.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isServiceSelected(s_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r4.name, " ");
  }
}
function OfferFormComponent_div_8_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, "No services available");
    \u0275\u0275elementEnd();
  }
}
function OfferFormComponent_div_8_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function OfferFormComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "label");
    \u0275\u0275text(3, "Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function OfferFormComponent_div_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.title, $event) || (ctx_r1.form.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "label");
    \u0275\u0275text(7, "Subtitle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "textarea", 12);
    \u0275\u0275twoWayListener("ngModelChange", function OfferFormComponent_div_8_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.subTitle, $event) || (ctx_r1.form.subTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 10)(10, "app-media-picker", 13);
    \u0275\u0275listener("valueChange", function OfferFormComponent_div_8_Template_app_media_picker_valueChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.image = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 14)(12, "div", 10)(13, "label");
    \u0275\u0275text(14, "Offer Percentage *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function OfferFormComponent_div_8_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.offerPercentage, $event) || (ctx_r1.form.offerPercentage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 10)(17, "label");
    \u0275\u0275text(18, "Expires At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function OfferFormComponent_div_8_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.expires_at, $event) || (ctx_r1.form.expires_at = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 10)(21, "label", 17)(22, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function OfferFormComponent_div_8_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.is_primary, $event) || (ctx_r1.form.is_primary = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Primary Offer ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 10)(25, "label");
    \u0275\u0275text(26, "Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 19);
    \u0275\u0275template(28, OfferFormComponent_div_8_div_28_Template, 4, 2, "div", 20)(29, OfferFormComponent_div_8_div_29_Template, 2, 0, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 10)(31, "label", 17)(32, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function OfferFormComponent_div_8_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.status, $event) || (ctx_r1.form.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " Active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, OfferFormComponent_div_8_div_34_Template, 2, 1, "div", 22);
    \u0275\u0275elementStart(35, "div", 23)(36, "a", 24);
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 25);
    \u0275\u0275listener("click", function OfferFormComponent_div_8_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.subTitle);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.form.image)("label", "Offer Image");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.offerPercentage);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.expires_at);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.is_primary);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.services());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.services().length === 0);
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
var OfferFormComponent = class _OfferFormComponent {
  http;
  route;
  router;
  toast;
  isEdit = false;
  offerId = null;
  services = signal([]);
  loadingData = signal(false);
  saving = signal(false);
  error = signal("");
  form = { title: "", subTitle: "", image: "", offerPercentage: "", expires_at: "", is_primary: false, status: true };
  selectedServiceIds = /* @__PURE__ */ new Set();
  constructor(http, route, router, toast) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.toast = toast;
  }
  ngOnInit() {
    this.offerId = this.route.snapshot.paramMap.get("id");
    this.isEdit = !!this.offerId;
    this.loadServices();
    if (this.isEdit)
      this.loadOffer();
  }
  loadServices() {
    this.http.get(`${environment.apiUrl}/admin/services`).subscribe({
      next: (res) => this.services.set(res.data || [])
    });
  }
  loadOffer() {
    this.loadingData.set(true);
    this.http.get(`${environment.apiUrl}/admin/offers/${this.offerId}`).subscribe({
      next: (res) => {
        const o = res.data;
        this.form = {
          title: o.title || "",
          subTitle: o.subTitle || o.sub_title || "",
          image: o.image || "",
          offerPercentage: o.offerPercentage || o.offer_percentage || "",
          expires_at: o.expires_at ? o.expires_at.substring(0, 10) : "",
          is_primary: !!o.is_primary,
          status: !!o.status
        };
        const sIds = o.service_ids || (o.services || []).map((s) => s.id);
        this.selectedServiceIds = new Set(sIds);
      },
      error: () => this.router.navigate(["/admin/offer/list"]),
      complete: () => this.loadingData.set(false)
    });
  }
  isServiceSelected(id) {
    return this.selectedServiceIds.has(id);
  }
  toggleService(id) {
    if (this.selectedServiceIds.has(id)) {
      this.selectedServiceIds.delete(id);
    } else {
      this.selectedServiceIds.add(id);
    }
  }
  onSubmit() {
    if (!this.form.title.trim()) {
      this.error.set("Title is required");
      return;
    }
    if (!this.form.offerPercentage) {
      this.error.set("Offer percentage is required");
      return;
    }
    this.saving.set(true);
    this.error.set("");
    const data = __spreadProps(__spreadValues({}, this.form), {
      offerPercentage: Number(this.form.offerPercentage),
      is_primary: this.form.is_primary ? 1 : 0,
      status: this.form.status ? 1 : 0,
      service_ids: Array.from(this.selectedServiceIds)
    });
    const req = this.isEdit ? this.http.put(`${environment.apiUrl}/admin/offers/${this.offerId}`, data) : this.http.post(`${environment.apiUrl}/admin/offers`, data);
    req.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? "Offer updated successfully" : "Offer created successfully");
        this.router.navigate(["/admin/offer/list"]);
      },
      error: (err) => {
        this.toast.error(err.error?.error || "Something went wrong");
        this.error.set(err.error?.error || "Something went wrong");
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
  static \u0275fac = function OfferFormComponent_Factory(t) {
    return new (t || _OfferFormComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OfferFormComponent, selectors: [["app-offer-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [["routerLink", "/admin/offer/list", 1, "back-link"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], [1, "page-title"], ["class", "loading-center", 4, "ngIf"], ["class", "form-card", 4, "ngIf"], [1, "loading-center"], [1, "spinner"], [1, "form-card"], [1, "form-group"], ["type", "text", "placeholder", "Offer title", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Short description", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "valueChange", "value", "label"], [1, "form-row"], ["type", "number", "placeholder", "e.g. 15", "min", "0", "max", "100", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "toggle-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "multi-select"], ["class", "ms-option", 4, "ngFor", "ngForOf"], ["class", "text-muted", 4, "ngIf"], ["class", "error-msg", 4, "ngIf"], [1, "form-actions"], ["routerLink", "/admin/offer/list", 1, "btn-cancel"], [1, "btn-save", 3, "click", "disabled"], [1, "ms-option"], [1, "ms-label"], ["type", "checkbox", 3, "change", "checked"], [1, "text-muted"], [1, "error-msg"]], template: function OfferFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1);
      \u0275\u0275element(2, "path", 2)(3, "polyline", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Back to Offers ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, OfferFormComponent_div_7_Template, 2, 0, "div", 5)(8, OfferFormComponent_div_8_Template, 40, 13, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.isEdit ? "Edit Offer" : "Create Offer");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingData());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, MediaPickerComponent], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  color: #64748b;\n  text-decoration: none;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 24px;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  max-width: 700px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  flex: 1;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #334155;\n  font-size: 14px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.image-preview[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 200px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #e31b23;\n  width: 16px;\n  height: 16px;\n}\n.multi-select[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 8px;\n}\n.ms-option[_ngcontent-%COMP%] {\n  padding: 4px 0;\n}\n.ms-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  color: #334155;\n}\n.ms-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #e31b23;\n  width: 16px;\n  height: 16px;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n  padding: 8px;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 10px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #f1f5f9;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 12px 32px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 15px;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=offer-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OfferFormComponent, { className: "OfferFormComponent", filePath: "src\\app\\features\\admin\\offers\\offer-form.component.ts", lineNumber: 108 });
})();
export {
  OfferFormComponent
};
//# sourceMappingURL=chunk-5ZNWHQPM.js.map
