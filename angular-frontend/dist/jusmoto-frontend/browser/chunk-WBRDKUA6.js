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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/auth/admin-login/admin-login.component.ts
function AdminLoginComponent_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent__svg_svg_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 36)(2, "circle", 37);
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent__svg_svg_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 38)(2, "line", 39);
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 41);
    \u0275\u0275element(2, "circle", 9)(3, "line", 42)(4, "line", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function AdminLoginComponent_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_span_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275element(1, "span", 45);
    \u0275\u0275text(2, " Signing in... ");
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
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLoginComponent, selectors: [["app-admin-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 65, vars: 14, consts: [[1, "login-wrapper"], [1, "login-left"], [1, "brand-content"], [1, "brand-logo"], ["src", "assets/images/logo_redefening.png", "alt", "JusMoto - Admin Control Panel", 1, "brand-logo-img"], [1, "brand-features"], [1, "feature-item"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "rgba(255,255,255,0.7)", "stroke-width", "2"], ["d", "M9 12l2 2 4-4"], ["cx", "12", "cy", "12", "r", "10"], [1, "brand-footer"], [1, "login-right"], [1, "login-card"], [1, "login-header"], [3, "ngSubmit", "formGroup"], [1, "input-group"], ["for", "email"], [1, "input-wrap"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#94a3b8", "stroke-width", "2"], ["d", "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["id", "email", "type", "text", "formControlName", "email", "placeholder", "Enter your email", "autocomplete", "username"], ["class", "field-error", 4, "ngIf"], ["for", "password"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0110 0v4"], ["id", "password", "formControlName", "password", "placeholder", "Enter your password", "autocomplete", "current-password", 3, "type"], ["type", "button", "tabindex", "-1", 1, "toggle-pw", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#94a3b8", "stroke-width", "2", 4, "ngIf"], ["class", "error-alert", 4, "ngIf"], ["type", "submit", 1, "btn-login", 3, "disabled"], [4, "ngIf"], ["class", "btn-loading", 4, "ngIf"], [1, "user-link"], ["routerLink", "/auth/login"], [1, "field-error"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], [1, "error-alert"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#dc2626", "stroke-width", "2"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "btn-loading"], [1, "spinner-btn"]], template: function AdminLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 7);
      \u0275\u0275element(8, "path", 8)(9, "circle", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, "Manage orders & services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 7);
      \u0275\u0275element(14, "path", 8)(15, "circle", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "Track franchise operations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 7);
      \u0275\u0275element(20, "path", 8)(21, "circle", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "Revenue reports & analytics");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 10)(25, "span");
      \u0275\u0275text(26, "\xA9 2026 JusMoto. All rights reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 11)(28, "div", 12)(29, "div", 13)(30, "h2");
      \u0275\u0275text(31, "Welcome Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p");
      \u0275\u0275text(33, "Sign in to your admin account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "form", 14);
      \u0275\u0275listener("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_34_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(35, "div", 15)(36, "label", 16);
      \u0275\u0275text(37, "Email or Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(39, "svg", 18);
      \u0275\u0275element(40, "path", 19)(41, "circle", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(42, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, AdminLoginComponent_span_43_Template, 2, 0, "span", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 15)(45, "label", 23);
      \u0275\u0275text(46, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 18);
      \u0275\u0275element(49, "rect", 24)(50, "path", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(51, "input", 26);
      \u0275\u0275elementStart(52, "button", 27);
      \u0275\u0275listener("click", function AdminLoginComponent_Template_button_click_52_listener() {
        return ctx.hidePassword = !ctx.hidePassword;
      });
      \u0275\u0275template(53, AdminLoginComponent__svg_svg_53_Template, 3, 0, "svg", 28)(54, AdminLoginComponent__svg_svg_54_Template, 3, 0, "svg", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(55, AdminLoginComponent_span_55_Template, 2, 0, "span", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(56, AdminLoginComponent_div_56_Template, 6, 1, "div", 29);
      \u0275\u0275elementStart(57, "button", 30);
      \u0275\u0275template(58, AdminLoginComponent_span_58_Template, 2, 0, "span", 31)(59, AdminLoginComponent_span_59_Template, 3, 0, "span", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 33)(61, "p");
      \u0275\u0275text(62, "Not an admin? ");
      \u0275\u0275elementStart(63, "a", 34);
      \u0275\u0275text(64, "Login as User");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_7_0;
      \u0275\u0275advance(34);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("input-error", ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.hasError("required")));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("required")));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("input-error", ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.hasError("required")));
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hidePassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hidePassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.loginForm.get("password")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.loginForm.get("password")) == null ? null : tmp_7_0.hasError("required")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['\n\n.login-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.login-left[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0a0c0d 0%,\n      #1a1a2e 50%,\n      #e31b23 150%);\n  padding: 60px;\n  position: relative;\n  overflow: hidden;\n}\n.login-left[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(227, 27, 35, 0.15) 0%,\n      transparent 60%);\n}\n.brand-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 48px;\n}\n.brand-logo-img[_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: auto;\n  filter: brightness(0) invert(1);\n}\n.brand-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 15px;\n}\n.brand-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 32px;\n  left: 60px;\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 13px;\n}\n.login-right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8f9fa;\n  padding: 40px;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n}\n.login-header[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.login-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0 0 8px;\n}\n.login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 15px;\n  margin: 0;\n}\n.input-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: #334155;\n  font-size: 14px;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  background: #fff;\n  transition: all 0.2s;\n}\n.input-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: #e31b23;\n  box-shadow: 0 0 0 4px rgba(227, 27, 35, 0.08);\n}\n.input-wrap.input-error[_ngcontent-%COMP%] {\n  border-color: #fca5a5;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 15px;\n  color: #1a1a2e;\n  background: transparent;\n  padding: 0;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #cbd5e1;\n}\n.toggle-pw[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 2px;\n  display: flex;\n}\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  font-size: 12px;\n  color: #dc2626;\n}\n.error-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 10px;\n  color: #dc2626;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 24px;\n}\n.btn-login[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-login[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #c41219;\n  transform: translateY(-1px);\n  box-shadow: 0 8px 24px rgba(227, 27, 35, 0.3);\n}\n.btn-login[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-login[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.spinner-btn[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.user-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 28px;\n}\n.user-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n  margin: 0;\n}\n.user-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e31b23;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.user-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #c41219;\n  text-decoration: underline;\n}\n@media (max-width: 900px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .login-left[_ngcontent-%COMP%] {\n    padding: 40px 32px;\n    min-height: auto;\n  }\n  .brand-features[_ngcontent-%COMP%], .brand-footer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .brand-logo[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .login-right[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "src\\app\\features\\auth\\admin-login\\admin-login.component.ts", lineNumber: 169 });
})();
export {
  AdminLoginComponent
};
