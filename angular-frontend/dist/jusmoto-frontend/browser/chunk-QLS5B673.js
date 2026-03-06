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
import {
  environment
} from "./chunk-YVMT3HBM.js";
import "./chunk-NM77QJY5.js";
import {
  CommonModule,
  NgIf,
  NgZone,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/auth/login/login.component.ts
var _c0 = ["googleBtn"];
function LoginComponent_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent__svg_svg_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 43)(2, "circle", 44);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent__svg_svg_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 45)(2, "line", 46);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275element(2, "circle", 10)(3, "line", 49)(4, "line", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function LoginComponent_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275element(1, "span", 52);
    \u0275\u0275text(2, " Signing in... ");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  authService;
  router;
  route;
  ngZone;
  googleBtn;
  loginForm;
  hidePassword = true;
  loading = false;
  error = "";
  returnUrl = "";
  constructor(fb, authService, router, route, ngZone) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.ngZone = ngZone;
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/client/dashboard";
  }
  ngAfterViewInit() {
    this.renderGoogleButton();
  }
  renderGoogleButton() {
    const clientId = environment.googleClientId;
    if (!clientId)
      return;
    const google = window.google;
    if (!google?.accounts?.id) {
      setTimeout(() => this.renderGoogleButton(), 300);
      return;
    }
    google.accounts.id.initialize({
      client_id: clientId,
      callback: (response) => this.ngZone.run(() => this.handleGoogleCredential(response))
    });
    google.accounts.id.renderButton(this.googleBtn.nativeElement, {
      type: "standard",
      theme: "outline",
      size: "large",
      text: "continue_with",
      width: 380
    });
  }
  handleGoogleCredential(response) {
    const token = response.credential;
    const payload = JSON.parse(atob(token.split(".")[1]));
    this.loading = true;
    this.error = "";
    this.authService.socialLogin({
      provider: "google",
      email: payload.email,
      firstName: payload.given_name,
      lastName: payload.family_name,
      socialId: payload.sub,
      image: payload.picture
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.router.navigateByUrl(this.returnUrl);
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error || "Google login failed. Please try again.";
      },
      complete: () => {
        this.loading = false;
      }
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
    this.authService.login(email, password).subscribe({
      next: (response) => {
        if (response.success) {
          this.router.navigateByUrl(this.returnUrl);
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
  static \u0275fac = function LoginComponent_Factory(t) {
    return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.googleBtn = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 79, vars: 14, consts: [["googleBtn", ""], [1, "login-wrapper"], [1, "login-left"], [1, "brand-content"], [1, "brand-logo"], ["src", "assets/images/logo_redefening.png", "alt", "JusMoto - Redefining Vehicle Care", 1, "brand-logo-img"], [1, "brand-features"], [1, "feature-item"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "rgba(255,255,255,0.7)", "stroke-width", "2"], ["d", "M9 12l2 2 4-4"], ["cx", "12", "cy", "12", "r", "10"], [1, "brand-footer"], [1, "login-right"], [1, "login-card"], [1, "login-header"], [3, "ngSubmit", "formGroup"], [1, "input-group"], ["for", "email"], [1, "input-wrap"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#94a3b8", "stroke-width", "2"], ["x", "2", "y", "4", "width", "20", "height", "16", "rx", "2"], ["d", "M22 4l-10 8L2 4"], ["id", "email", "type", "text", "formControlName", "email", "placeholder", "Enter your email", "autocomplete", "username"], ["class", "field-error", 4, "ngIf"], ["for", "password"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0110 0v4"], ["id", "password", "formControlName", "password", "placeholder", "Enter your password", "autocomplete", "current-password", 3, "type"], ["type", "button", "tabindex", "-1", 1, "toggle-pw", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#94a3b8", "stroke-width", "2", 4, "ngIf"], [1, "forgot-password"], ["routerLink", "/auth/forgot-password"], ["class", "error-alert", 4, "ngIf"], ["type", "submit", 1, "btn-login", 3, "disabled"], [4, "ngIf"], ["class", "btn-loading", 4, "ngIf"], [1, "divider"], [1, "google-btn-wrap"], [1, "register-link"], ["routerLink", "/auth/register"], [1, "admin-link"], ["routerLink", "/auth/admin-login"], [1, "field-error"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], [1, "error-alert"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#dc2626", "stroke-width", "2"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "btn-loading"], [1, "spinner-btn"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275element(4, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 6)(6, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 8);
      \u0275\u0275element(8, "path", 9)(9, "circle", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, "Book car services online");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 8);
      \u0275\u0275element(14, "path", 9)(15, "circle", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "Track traffic challans");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 8);
      \u0275\u0275element(20, "path", 9)(21, "circle", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "24/7 support");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 11)(25, "span");
      \u0275\u0275text(26, "\xA9 2026 JusMoto. All rights reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 12)(28, "div", 13)(29, "div", 14)(30, "h2");
      \u0275\u0275text(31, "Welcome Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p");
      \u0275\u0275text(33, "Sign in to your account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "form", 15);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_34_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(35, "div", 16)(36, "label", 17);
      \u0275\u0275text(37, "Email or Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(39, "svg", 19);
      \u0275\u0275element(40, "rect", 20)(41, "path", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(42, "input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, LoginComponent_span_43_Template, 2, 0, "span", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 16)(45, "label", 24);
      \u0275\u0275text(46, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 19);
      \u0275\u0275element(49, "rect", 25)(50, "path", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(51, "input", 27);
      \u0275\u0275elementStart(52, "button", 28);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_52_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.hidePassword = !ctx.hidePassword);
      });
      \u0275\u0275template(53, LoginComponent__svg_svg_53_Template, 3, 0, "svg", 29)(54, LoginComponent__svg_svg_54_Template, 3, 0, "svg", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(55, LoginComponent_span_55_Template, 2, 0, "span", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 30)(57, "a", 31);
      \u0275\u0275text(58, "Forgot Password?");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(59, LoginComponent_div_59_Template, 6, 1, "div", 32);
      \u0275\u0275elementStart(60, "button", 33);
      \u0275\u0275template(61, LoginComponent_span_61_Template, 2, 0, "span", 34)(62, LoginComponent_span_62_Template, 3, 0, "span", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 36)(64, "span");
      \u0275\u0275text(65, "or");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 37);
      \u0275\u0275element(67, "div", null, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 38)(70, "p");
      \u0275\u0275text(71, "Don't have an account? ");
      \u0275\u0275elementStart(72, "a", 39);
      \u0275\u0275text(73, "Register");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "div", 40)(75, "p");
      \u0275\u0275text(76, "Are you an admin? ");
      \u0275\u0275elementStart(77, "a", 41);
      \u0275\u0275text(78, "Login as Admin");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_8_0;
      \u0275\u0275advance(34);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("input-error", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("required")));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.hasError("required")));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("input-error", ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.hasError("required")));
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hidePassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hidePassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.loginForm.get("password")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx.loginForm.get("password")) == null ? null : tmp_8_0.hasError("required")));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['\n\n.login-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.login-left[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0a0c0d 0%,\n      #1a1a2e 50%,\n      #e31b23 150%);\n  padding: 60px;\n  position: relative;\n  overflow: hidden;\n}\n.login-left[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(227, 27, 35, 0.15) 0%,\n      transparent 60%);\n}\n.brand-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 48px;\n}\n.brand-logo-img[_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: auto;\n  filter: brightness(0) invert(1);\n}\n.brand-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 15px;\n}\n.brand-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 32px;\n  left: 60px;\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 13px;\n}\n.login-right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8f9fa;\n  padding: 40px;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n}\n.login-header[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.login-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0 0 8px;\n}\n.login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 15px;\n  margin: 0;\n}\n.input-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: #334155;\n  font-size: 14px;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  background: #fff;\n  transition: all 0.2s;\n}\n.input-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: #e31b23;\n  box-shadow: 0 0 0 4px rgba(227, 27, 35, 0.08);\n}\n.input-wrap.input-error[_ngcontent-%COMP%] {\n  border-color: #fca5a5;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 15px;\n  color: #1a1a2e;\n  background: transparent;\n  padding: 0;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #cbd5e1;\n}\n.toggle-pw[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 2px;\n  display: flex;\n}\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  font-size: 12px;\n  color: #dc2626;\n}\n.forgot-password[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 24px;\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e31b23;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #c41219;\n  text-decoration: underline;\n}\n.error-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 10px;\n  color: #dc2626;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 24px;\n}\n.btn-login[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-login[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #c41219;\n  transform: translateY(-1px);\n  box-shadow: 0 8px 24px rgba(227, 27, 35, 0.3);\n}\n.btn-login[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-login[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.spinner-btn[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 24px 0;\n}\n.divider[_ngcontent-%COMP%]::before, .divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: #e5e7eb;\n}\n.divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0 14px;\n  color: #94a3b8;\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.google-btn-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.register-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n}\n.register-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n  margin: 0;\n}\n.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e31b23;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.2s;\n}\n.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #c41219;\n  text-decoration: underline;\n}\n.admin-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 12px;\n}\n.admin-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n  margin: 0;\n}\n.admin-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #64748b;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.admin-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n  text-decoration: underline;\n}\n@media (max-width: 900px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .login-left[_ngcontent-%COMP%] {\n    padding: 40px 32px;\n    min-height: auto;\n  }\n  .brand-tagline[_ngcontent-%COMP%], .brand-features[_ngcontent-%COMP%], .brand-footer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .brand-logo[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .login-right[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login\\login.component.ts", lineNumber: 208 });
})();
export {
  LoginComponent
};
