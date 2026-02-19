import {
  ToastService
} from "./chunk-JBYXSY66.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-X7FFWIXK.js";
import {
  environment
} from "./chunk-GUDC7RY7.js";
import {
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/admin/franchises/franchise-form.component.ts
function FranchiseFormComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formError);
  }
}
var FranchiseFormComponent = class _FranchiseFormComponent {
  http;
  router;
  toast;
  form = { name: "", email: "", password: "", phone: "" };
  saving = signal(false);
  formError = "";
  constructor(http, router, toast) {
    this.http = http;
    this.router = router;
    this.toast = toast;
  }
  save() {
    if (!this.form.name.trim() || !this.form.email.trim() || !this.form.password.trim()) {
      this.formError = "Name, email and password are required";
      return;
    }
    this.saving.set(true);
    this.formError = "";
    this.http.post(`${environment.apiUrl}/admin/franchises`, this.form).subscribe({
      next: () => {
        this.toast.success("Franchise partner created");
        this.router.navigate(["/admin/franchise/list"]);
      },
      error: (err) => {
        this.formError = err.error?.error || "Something went wrong";
        this.toast.error(this.formError);
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
  static \u0275fac = function FranchiseFormComponent_Factory(t) {
    return new (t || _FranchiseFormComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FranchiseFormComponent, selectors: [["app-franchise-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 7, consts: [[1, "page-header"], [1, "page-title"], ["routerLink", "/admin/franchise/list", 1, "btn-back"], [1, "form-card"], [1, "form-row"], [1, "form-group"], ["type", "text", "placeholder", "Franchise name", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "Email address", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Password", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Phone number", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "error-msg", 4, "ngIf"], [1, "form-actions"], ["routerLink", "/admin/franchise/list", 1, "btn-cancel"], [1, "btn-primary", 3, "click", "disabled"], [1, "error-msg"]], template: function FranchiseFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Add Franchise Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 2);
      \u0275\u0275text(4, "Back to Franchises");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "label");
      \u0275\u0275text(9, "Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function FranchiseFormComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.name, $event) || (ctx.form.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 5)(12, "label");
      \u0275\u0275text(13, "Email *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function FranchiseFormComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 4)(16, "div", 5)(17, "label");
      \u0275\u0275text(18, "Password *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function FranchiseFormComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.password, $event) || (ctx.form.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 5)(21, "label");
      \u0275\u0275text(22, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function FranchiseFormComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.phone, $event) || (ctx.form.phone = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(24, FranchiseFormComponent_div_24_Template, 2, 1, "div", 10);
      \u0275\u0275elementStart(25, "div", 11)(26, "a", 12);
      \u0275\u0275text(27, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 13);
      \u0275\u0275listener("click", function FranchiseFormComponent_Template_button_click_28_listener() {
        return ctx.save();
      });
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.password);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.phone);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.formError);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Saving..." : "Create Franchise", " ");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.btn-back[_ngcontent-%COMP%] {\n  color: #e31b23;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 14px;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 10px 14px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding-top: 16px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 24px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=franchise-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FranchiseFormComponent, { className: "FranchiseFormComponent", filePath: "src\\app\\features\\admin\\franchises\\franchise-form.component.ts", lineNumber: 70 });
})();
export {
  FranchiseFormComponent
};
//# sourceMappingURL=chunk-43QBILRK.js.map
