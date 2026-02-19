import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix
} from "./chunk-VNLUDGCF.js";
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
} from "./chunk-77LM5CPK.js";
import "./chunk-56NVGAWC.js";
import {
  AuthService
} from "./chunk-BZ2LTEHJ.js";
import {
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatIcon,
  MatIconModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-3M3SIH3K.js";
import "./chunk-GUDC7RY7.js";
import {
  Router,
  RouterLink
} from "./chunk-CMH3GDQY.js";
import "./chunk-TT3LTPCS.js";
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_form_8_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email is required ");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_form_8_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid email ");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_form_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function ForgotPasswordComponent_form_8_mat_spinner_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 13);
  }
}
function ForgotPasswordComponent_form_8_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Send Reset Link");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 5);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_form_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "mat-form-field", 6)(2, "mat-label");
    \u0275\u0275text(3, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 7);
    \u0275\u0275elementStart(5, "mat-icon", 8);
    \u0275\u0275text(6, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ForgotPasswordComponent_form_8_mat_error_7_Template, 2, 0, "mat-error", 4)(8, ForgotPasswordComponent_form_8_mat_error_8_Template, 2, 0, "mat-error", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ForgotPasswordComponent_form_8_div_9_Template, 2, 1, "div", 9);
    \u0275\u0275elementStart(10, "button", 10);
    \u0275\u0275template(11, ForgotPasswordComponent_form_8_mat_spinner_11_Template, 1, 0, "mat-spinner", 11)(12, ForgotPasswordComponent_form_8_span_12_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.forgotForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.forgotForm.get("email")) == null ? null : tmp_2_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.forgotForm.get("email")) == null ? null : tmp_3_0.hasError("email"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
  }
}
function ForgotPasswordComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "mat-icon", 15);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Check your email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "We've sent a password reset link to your email address. Please check your inbox and follow the instructions.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 16);
    \u0275\u0275text(8, " Back to Login ");
    \u0275\u0275elementEnd()();
  }
}
function ForgotPasswordComponent_mat_card_actions_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card-actions")(1, "p", 17);
    \u0275\u0275text(2, " Remember your password? ");
    \u0275\u0275elementStart(3, "a", 18);
    \u0275\u0275text(4, "Login");
    \u0275\u0275elementEnd()()();
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  fb;
  authService;
  router;
  forgotForm;
  loading = false;
  error = "";
  emailSent = false;
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.forgotForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.error = "";
    this.authService.forgotPassword(this.forgotForm.value.email).subscribe({
      next: (response) => {
        if (response.success) {
          this.emailSent = true;
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error || "Failed to send reset link. Please try again.";
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(t) {
    return new (t || _ForgotPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 3, consts: [[1, "auth-container"], [1, "auth-card"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], [4, "ngIf"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "email", "formControlName", "email"], ["matSuffix", ""], ["class", "error-message", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "full-width", "mt-2", 3, "disabled"], ["diameter", "20", 4, "ngIf"], [1, "error-message"], ["diameter", "20"], [1, "success-message"], [1, "success-icon"], ["mat-raised-button", "", "color", "primary", "routerLink", "/auth/login", 1, "full-width", "mt-2"], [1, "text-center"], ["routerLink", "/auth/login"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Forgot Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, "Enter your email to reset your password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content");
      \u0275\u0275template(8, ForgotPasswordComponent_form_8_Template, 13, 7, "form", 2)(9, ForgotPasswordComponent_div_9_Template, 9, 0, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, ForgotPasswordComponent_mat_card_actions_10_Template, 5, 0, "mat-card-actions", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", !ctx.emailSent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.emailSent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.emailSent);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    RouterLink,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatError,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], styles: ["\n\n.auth-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 24px;\n}\n.auth-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  padding: 24px;\n}\nmat-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #f44336;\n  margin: 16px 0;\n  padding: 8px;\n  background: #ffebee;\n  border-radius: 4px;\n}\n.success-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px 0;\n}\n.success-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #4caf50;\n}\n.success-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 16px 0 8px;\n}\n.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  padding: 16px 0 0;\n}\nmat-card-actions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\nmat-card-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src\\app\\features\\auth\\forgot-password\\forgot-password.component.ts", lineNumber: 148 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-ATPQY6Q7.js.map
