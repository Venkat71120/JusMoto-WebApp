import {
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSuffix
} from "./chunk-F6ZSTABR.js";
import "./chunk-EIXOYGR7.js";
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
} from "./chunk-5WG63XSG.js";
import {
  AuthService
} from "./chunk-R5YFSE7W.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-6VP7BBRC.js";
import "./chunk-YVMT3HBM.js";
import "./chunk-NM77QJY5.js";
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/auth/reset-password/reset-password.component.ts
function ResetPasswordComponent_form_8_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_8_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password must be at least 6 characters ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_8_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Confirm password is required ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_8_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, " Passwords do not match ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_8_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function ResetPasswordComponent_form_8_mat_spinner_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 14);
  }
}
function ResetPasswordComponent_form_8_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Reset Password");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 4);
    \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_form_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "mat-form-field", 5)(2, "mat-label");
    \u0275\u0275text(3, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 6);
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275listener("click", function ResetPasswordComponent_form_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hidePassword = !ctx_r1.hidePassword);
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ResetPasswordComponent_form_8_mat_error_8_Template, 2, 0, "mat-error", 8)(9, ResetPasswordComponent_form_8_mat_error_9_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 5)(11, "mat-label");
    \u0275\u0275text(12, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 9);
    \u0275\u0275elementStart(14, "button", 7);
    \u0275\u0275listener("click", function ResetPasswordComponent_form_8_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideConfirmPassword = !ctx_r1.hideConfirmPassword);
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, ResetPasswordComponent_form_8_mat_error_17_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ResetPasswordComponent_form_8_div_18_Template, 2, 0, "div", 10)(19, ResetPasswordComponent_form_8_div_19_Template, 2, 1, "div", 10);
    \u0275\u0275elementStart(20, "button", 11);
    \u0275\u0275template(21, ResetPasswordComponent_form_8_mat_spinner_21_Template, 1, 0, "mat-spinner", 12)(22, ResetPasswordComponent_form_8_span_22_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.resetForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.hidePassword ? "password" : "text");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.hidePassword ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.resetForm.get("password")) == null ? null : tmp_4_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.resetForm.get("password")) == null ? null : tmp_5_0.hasError("minlength"));
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.hideConfirmPassword ? "password" : "text");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.hideConfirmPassword ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_8_0 = ctx_r1.resetForm.get("password_confirmation")) == null ? null : tmp_8_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resetForm.errors == null ? null : ctx_r1.resetForm.errors["passwordMismatch"]);
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
function ResetPasswordComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "mat-icon", 16);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Password Reset Successfully");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your password has been reset. You can now login with your new password.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275text(8, " Go to Login ");
    \u0275\u0275elementEnd()();
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  fb;
  authService;
  router;
  route;
  resetForm;
  hidePassword = true;
  hideConfirmPassword = true;
  loading = false;
  error = "";
  resetSuccess = false;
  token = "";
  constructor(fb, authService, router, route) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.resetForm = this.fb.group({
      password: ["", [Validators.required, Validators.minLength(6)]],
      password_confirmation: ["", [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }
  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get("token") || "";
    if (!this.token) {
      this.router.navigate(["/auth/login"]);
    }
  }
  passwordMatchValidator(form) {
    const password = form.get("password");
    const confirmPassword = form.get("password_confirmation");
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  }
  onSubmit() {
    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.error = "";
    const data = {
      token: this.token,
      password: this.resetForm.value.password,
      password_confirmation: this.resetForm.value.password_confirmation
    };
    this.authService.resetPassword(data).subscribe({
      next: (response) => {
        if (response.success) {
          this.resetSuccess = true;
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error || "Failed to reset password. Please try again.";
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  static \u0275fac = function ResetPasswordComponent_Factory(t) {
    return new (t || _ResetPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 2, consts: [[1, "auth-container"], [1, "auth-card"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [4, "ngIf"], ["matInput", "", "formControlName", "password_confirmation", 3, "type"], ["class", "error-message", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "full-width", "mt-2", 3, "disabled"], ["diameter", "20", 4, "ngIf"], [1, "error-message"], ["diameter", "20"], [1, "success-message"], [1, "success-icon"], ["mat-raised-button", "", "color", "primary", "routerLink", "/auth/login", 1, "full-width", "mt-2"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Reset Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, "Enter your new password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content");
      \u0275\u0275template(8, ResetPasswordComponent_form_8_Template, 23, 13, "form", 2)(9, ResetPasswordComponent_div_9_Template, 9, 0, "div", 3);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", !ctx.resetSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.resetSuccess);
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
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], styles: ["\n\n.auth-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 24px;\n}\n.auth-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  padding: 24px;\n}\nmat-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #f44336;\n  margin: 16px 0;\n  padding: 8px;\n  background: #ffebee;\n  border-radius: 4px;\n}\n.success-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px 0;\n}\n.success-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #4caf50;\n}\n.success-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 16px 0 8px;\n}\n.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src\\app\\features\\auth\\reset-password\\reset-password.component.ts", lineNumber: 145 });
})();
export {
  ResetPasswordComponent
};
