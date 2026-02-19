import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix
} from "./chunk-YKLO5UMO.js";
import {
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
import "./chunk-56NVGAWC.js";
import {
  AuthService
} from "./chunk-42K6S4RX.js";
import {
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WE7D4ZPG.js";
import "./chunk-GUDC7RY7.js";
import {
  Router
} from "./chunk-CMH3GDQY.js";
import "./chunk-7QXR32YF.js";
import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/auth/admin-login/admin-login.component.ts
function AdminLoginComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email or username is required ");
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function AdminLoginComponent_mat_spinner_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 13);
  }
}
function AdminLoginComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Login");
    \u0275\u0275elementEnd();
  }
}
var AdminLoginComponent = class _AdminLoginComponent {
  fb;
  authService;
  router;
  loginForm;
  hidePassword = true;
  loading = false;
  error = "";
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid)
      return;
    this.loading = true;
    this.error = "";
    const { email, password } = this.loginForm.value;
    this.authService.adminLogin(email, password).subscribe({
      next: (response) => {
        if (response.success) {
          this.router.navigate(["/admin"]);
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error || "Login failed. Please try again.";
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  static \u0275fac = function AdminLoginComponent_Factory(t) {
    return new (t || _AdminLoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLoginComponent, selectors: [["app-admin-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 9, consts: [[1, "auth-container"], [1, "auth-card"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "email", "placeholder", "Enter email or username"], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["class", "error-message", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "full-width", 3, "disabled"], ["diameter", "20", 4, "ngIf"], [1, "error-message"], ["diameter", "20"]], template: function AdminLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Admin Panel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, "Login to admin panel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content")(8, "form", 2);
      \u0275\u0275listener("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(9, "mat-form-field", 3)(10, "mat-label");
      \u0275\u0275text(11, "Email or Username");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 4);
      \u0275\u0275elementStart(13, "mat-icon", 5);
      \u0275\u0275text(14, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, AdminLoginComponent_mat_error_15_Template, 2, 0, "mat-error", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "mat-form-field", 3)(17, "mat-label");
      \u0275\u0275text(18, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 7);
      \u0275\u0275elementStart(20, "button", 8);
      \u0275\u0275listener("click", function AdminLoginComponent_Template_button_click_20_listener() {
        return ctx.hidePassword = !ctx.hidePassword;
      });
      \u0275\u0275elementStart(21, "mat-icon");
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(23, AdminLoginComponent_mat_error_23_Template, 2, 0, "mat-error", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, AdminLoginComponent_div_24_Template, 2, 1, "div", 9);
      \u0275\u0275elementStart(25, "button", 10);
      \u0275\u0275template(26, AdminLoginComponent_mat_spinner_26_Template, 1, 0, "mat-spinner", 11)(27, AdminLoginComponent_span_27_Template, 2, 0, "span", 6);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_4_0;
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", (tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.hasError("required"));
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatFormFieldModule, MatFormField, MatLabel, MatError, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.auth-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0a0c0d 0%,\n      #17191a 100%);\n  padding: 24px;\n}\n.auth-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  padding: 24px;\n}\nmat-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #f44336;\n  margin-bottom: 16px;\n  padding: 8px;\n  background: #ffebee;\n  border-radius: 4px;\n}\nbutton[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=admin-login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "src\\app\\features\\auth\\admin-login\\admin-login.component.ts", lineNumber: 106 });
})();
export {
  AdminLoginComponent
};
//# sourceMappingURL=chunk-Y6AR35XY.js.map
