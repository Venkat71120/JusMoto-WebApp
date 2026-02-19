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
import "./chunk-J4B6MK7R.js";

// src/app/features/admin/staff/staff-form.component.ts
function StaffFormComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function StaffFormComponent_div_8_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275property("value", r_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.name);
  }
}
function StaffFormComponent_div_8_div_24_Template(rf, ctx) {
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
function StaffFormComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "label");
    \u0275\u0275text(3, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function StaffFormComponent_div_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "label");
    \u0275\u0275text(7, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function StaffFormComponent_div_8_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 10)(10, "label");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function StaffFormComponent_div_8_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.password, $event) || (ctx_r1.form.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10)(14, "label");
    \u0275\u0275text(15, "Role *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function StaffFormComponent_div_8_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.role_id, $event) || (ctx_r1.form.role_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "option", 15);
    \u0275\u0275text(18, "Select Role");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, StaffFormComponent_div_8_option_19_Template, 2, 2, "option", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 10)(21, "label", 17)(22, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function StaffFormComponent_div_8_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.status, $event) || (ctx_r1.form.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, StaffFormComponent_div_8_div_24_Template, 2, 1, "div", 19);
    \u0275\u0275elementStart(25, "div", 20)(26, "a", 21);
    \u0275\u0275text(27, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 22);
    \u0275\u0275listener("click", function StaffFormComponent_div_8_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Password ", ctx_r1.isEdit ? "(leave blank to keep current)" : "*", "");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.role_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.roles());
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
var StaffFormComponent = class _StaffFormComponent {
  http;
  route;
  router;
  toast;
  isEdit = false;
  staffId = null;
  roles = signal([]);
  loadingData = signal(false);
  saving = signal(false);
  error = signal("");
  form = { name: "", email: "", password: "", role_id: "", status: true };
  constructor(http, route, router, toast) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.toast = toast;
  }
  ngOnInit() {
    this.staffId = this.route.snapshot.paramMap.get("id");
    this.isEdit = !!this.staffId;
    this.loadRoles();
    if (this.isEdit)
      this.loadStaff();
  }
  loadRoles() {
    this.http.get(`${environment.apiUrl}/admin/roles`).subscribe({
      next: (res) => this.roles.set(res.data || [])
    });
  }
  loadStaff() {
    this.loadingData.set(true);
    this.http.get(`${environment.apiUrl}/admin/staff/${this.staffId}`).subscribe({
      next: (res) => {
        const s = res.data;
        this.form = { name: s.name || "", email: s.email || "", password: "", role_id: s.role_id || "", status: !!s.status };
      },
      error: () => this.router.navigate(["/admin/staff/all-staff"]),
      complete: () => this.loadingData.set(false)
    });
  }
  onSubmit() {
    if (!this.form.name.trim() || !this.form.email.trim()) {
      this.error.set("Name and Email are required");
      return;
    }
    if (!this.isEdit && !this.form.password) {
      this.error.set("Password is required");
      return;
    }
    if (!this.form.role_id) {
      this.error.set("Role is required");
      return;
    }
    this.saving.set(true);
    this.error.set("");
    const data = { name: this.form.name, email: this.form.email, role_id: this.form.role_id, status: this.form.status ? 1 : 0 };
    if (this.form.password)
      data.password = this.form.password;
    const req = this.isEdit ? this.http.put(`${environment.apiUrl}/admin/staff/${this.staffId}`, data) : this.http.post(`${environment.apiUrl}/admin/staff`, data);
    req.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? "Staff updated successfully" : "Staff created successfully");
        this.router.navigate(["/admin/staff/all-staff"]);
      },
      error: (err) => {
        this.toast.error(err.error?.error || "Something went wrong");
        this.error.set(err.error?.error || "Something went wrong");
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
  static \u0275fac = function StaffFormComponent_Factory(t) {
    return new (t || _StaffFormComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffFormComponent, selectors: [["app-staff-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [["routerLink", "/admin/staff/all-staff", 1, "back-link"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], [1, "page-title"], ["class", "loading-center", 4, "ngIf"], ["class", "form-card", 4, "ngIf"], [1, "loading-center"], [1, "spinner"], [1, "form-card"], [1, "form-group"], ["type", "text", "placeholder", "Full name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "email@example.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "toggle-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["class", "error-msg", 4, "ngIf"], [1, "form-actions"], ["routerLink", "/admin/staff/all-staff", 1, "btn-cancel"], [1, "btn-save", 3, "click", "disabled"], [3, "value"], [1, "error-msg"]], template: function StaffFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1);
      \u0275\u0275element(2, "path", 2)(3, "polyline", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Back to Staff ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, StaffFormComponent_div_7_Template, 2, 0, "div", 5)(8, StaffFormComponent_div_8_Template, 30, 10, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.isEdit ? "Edit Staff" : "Add Staff");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingData());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  color: #64748b;\n  text-decoration: none;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 24px;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  max-width: 700px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #334155;\n  font-size: 14px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #e31b23;\n  width: 16px;\n  height: 16px;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 10px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #f1f5f9;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 12px 32px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 15px;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=staff-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffFormComponent, { className: "StaffFormComponent", filePath: "src\\app\\features\\admin\\staff\\staff-form.component.ts", lineNumber: 80 });
})();
export {
  StaffFormComponent
};
//# sourceMappingURL=chunk-H6PZQUAI.js.map
