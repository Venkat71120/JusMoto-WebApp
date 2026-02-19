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

// src/app/features/admin/outlet-locations/outlet-location-form.component.ts
function OutletLocationFormComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function OutletLocationFormComponent_div_8_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("value", s_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3.state || s_r3.name);
  }
}
function OutletLocationFormComponent_div_8_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("value", c_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.city || c_r4.name);
  }
}
function OutletLocationFormComponent_div_8_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    \u0275\u0275property("value", a_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r5.area || a_r5.name);
  }
}
function OutletLocationFormComponent_div_8_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function OutletLocationFormComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "label");
    \u0275\u0275text(3, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "label");
    \u0275\u0275text(7, "Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.address, $event) || (ctx_r1.form.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 13)(10, "div", 10)(11, "label");
    \u0275\u0275text(12, "Post Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.post_code, $event) || (ctx_r1.form.post_code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 10)(15, "label");
    \u0275\u0275text(16, "Latitude");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.latitude, $event) || (ctx_r1.form.latitude = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 10)(19, "label");
    \u0275\u0275text(20, "Longitude");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.longitude, $event) || (ctx_r1.form.longitude = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 13)(23, "div", 10)(24, "label");
    \u0275\u0275text(25, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.state_id, $event) || (ctx_r1.form.state_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function OutletLocationFormComponent_div_8_Template_select_change_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStateChange());
    });
    \u0275\u0275elementStart(27, "option", 18);
    \u0275\u0275text(28, "Select State");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, OutletLocationFormComponent_div_8_option_29_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 10)(31, "label");
    \u0275\u0275text(32, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.city_id, $event) || (ctx_r1.form.city_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function OutletLocationFormComponent_div_8_Template_select_change_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCityChange());
    });
    \u0275\u0275elementStart(34, "option", 18);
    \u0275\u0275text(35, "Select City");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, OutletLocationFormComponent_div_8_option_36_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 10)(38, "label");
    \u0275\u0275text(39, "Area");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_select_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.area_id, $event) || (ctx_r1.form.area_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(41, "option", 18);
    \u0275\u0275text(42, "Select Area");
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, OutletLocationFormComponent_div_8_option_43_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 10)(45, "label", 21)(46, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.status, $event) || (ctx_r1.form.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " Active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, OutletLocationFormComponent_div_8_div_48_Template, 2, 1, "div", 23);
    \u0275\u0275elementStart(49, "div", 24)(50, "a", 25);
    \u0275\u0275text(51, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 26);
    \u0275\u0275listener("click", function OutletLocationFormComponent_div_8_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.address);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.post_code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.latitude);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.longitude);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.state_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.states());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.city_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.cities());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.area_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.areas());
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
var OutletLocationFormComponent = class _OutletLocationFormComponent {
  http;
  route;
  router;
  toast;
  isEdit = false;
  locationId = null;
  states = signal([]);
  cities = signal([]);
  areas = signal([]);
  loadingData = signal(false);
  saving = signal(false);
  error = signal("");
  form = { name: "", address: "", post_code: "", latitude: "", longitude: "", state_id: "", city_id: "", area_id: "", status: true };
  constructor(http, route, router, toast) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.toast = toast;
  }
  ngOnInit() {
    this.locationId = this.route.snapshot.paramMap.get("id");
    this.isEdit = !!this.locationId;
    this.loadStates();
    if (this.isEdit)
      this.loadLocation();
  }
  loadStates() {
    this.http.get(`${environment.apiUrl}/admin/states`).subscribe({
      next: (res) => this.states.set(res.data || [])
    });
  }
  loadCities(stateId) {
    if (!stateId) {
      this.cities.set([]);
      return;
    }
    this.http.get(`${environment.apiUrl}/admin/cities`, { params: { state_id: stateId } }).subscribe({
      next: (res) => this.cities.set(res.data || [])
    });
  }
  loadAreas(cityId) {
    if (!cityId) {
      this.areas.set([]);
      return;
    }
    this.http.get(`${environment.apiUrl}/admin/areas`, { params: { city_id: cityId } }).subscribe({
      next: (res) => this.areas.set(res.data || [])
    });
  }
  onStateChange() {
    this.form.city_id = "";
    this.form.area_id = "";
    this.areas.set([]);
    this.loadCities(this.form.state_id);
  }
  onCityChange() {
    this.form.area_id = "";
    this.loadAreas(this.form.city_id);
  }
  loadLocation() {
    this.loadingData.set(true);
    this.http.get(`${environment.apiUrl}/admin/outlet-locations/${this.locationId}`).subscribe({
      next: (res) => {
        const l = res.data;
        this.form = {
          name: l.name || "",
          address: l.address || "",
          post_code: l.post_code || "",
          latitude: l.latitude || "",
          longitude: l.longitude || "",
          state_id: l.state_id || "",
          city_id: l.city_id || "",
          area_id: l.area_id || "",
          status: !!l.status
        };
        if (l.state_id)
          this.loadCities(String(l.state_id));
        if (l.city_id)
          this.loadAreas(String(l.city_id));
      },
      error: () => this.router.navigate(["/admin/outletAddress/all"]),
      complete: () => this.loadingData.set(false)
    });
  }
  onSubmit() {
    if (!this.form.name.trim()) {
      this.error.set("Name is required");
      return;
    }
    this.saving.set(true);
    this.error.set("");
    const data = __spreadProps(__spreadValues({}, this.form), { status: this.form.status ? 1 : 0 });
    const req = this.isEdit ? this.http.put(`${environment.apiUrl}/admin/outlet-locations/${this.locationId}`, data) : this.http.post(`${environment.apiUrl}/admin/outlet-locations`, data);
    req.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? "Location updated successfully" : "Location created successfully");
        this.router.navigate(["/admin/outletAddress/all"]);
      },
      error: (err) => {
        this.toast.error(err.error?.error || "Something went wrong");
        this.error.set(err.error?.error || "Something went wrong");
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
  static \u0275fac = function OutletLocationFormComponent_Factory(t) {
    return new (t || _OutletLocationFormComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OutletLocationFormComponent, selectors: [["app-outlet-location-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [["routerLink", "/admin/outletAddress/all", 1, "back-link"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], [1, "page-title"], ["class", "loading-center", 4, "ngIf"], ["class", "form-card", 4, "ngIf"], [1, "loading-center"], [1, "spinner"], [1, "form-card"], [1, "form-group"], ["type", "text", "placeholder", "Location name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Full address", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["type", "text", "placeholder", "Post code", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. 28.6139", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. 77.2090", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-control", 3, "ngModelChange", "ngModel"], [1, "toggle-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["class", "error-msg", 4, "ngIf"], [1, "form-actions"], ["routerLink", "/admin/outletAddress/all", 1, "btn-cancel"], [1, "btn-save", 3, "click", "disabled"], [3, "value"], [1, "error-msg"]], template: function OutletLocationFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1);
      \u0275\u0275element(2, "path", 2)(3, "polyline", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Back to Outlet Locations ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, OutletLocationFormComponent_div_7_Template, 2, 0, "div", 5)(8, OutletLocationFormComponent_div_8_Template, 54, 15, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.isEdit ? "Edit Outlet Location" : "Create Outlet Location");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingData());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  color: #64748b;\n  text-decoration: none;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 24px;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  max-width: 700px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  flex: 1;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #334155;\n  font-size: 14px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #e31b23;\n  width: 16px;\n  height: 16px;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 10px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #f1f5f9;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 12px 32px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 15px;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=outlet-location-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OutletLocationFormComponent, { className: "OutletLocationFormComponent", filePath: "src\\app\\features\\admin\\outlet-locations\\outlet-location-form.component.ts", lineNumber: 107 });
})();
export {
  OutletLocationFormComponent
};
//# sourceMappingURL=chunk-JTJ6TTTE.js.map
