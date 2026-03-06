import {
  FormBuilder,
  FormGroupDirective,
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
  RouterLink,
  RouterModule
} from "./chunk-6VP7BBRC.js";
import "./chunk-YVMT3HBM.js";
import "./chunk-NM77QJY5.js";
import {
  CommonModule,
  NgIf,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/auth/verify-email/verify-email.component.ts
function VerifyEmailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 3);
    \u0275\u0275element(2, "path", 4)(3, "circle", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Email Verified!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 6);
    \u0275\u0275text(7, "Your email has been successfully verified.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 7);
    \u0275\u0275text(9, "Go to Login");
    \u0275\u0275elementEnd();
  }
}
function VerifyEmailComponent_Conditional_3_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 23);
    \u0275\u0275listener("input", function VerifyEmailComponent_Conditional_3_For_13_Template_input_input_0_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpInput($event, i_r4));
    })("keydown", function VerifyEmailComponent_Conditional_3_For_13_Template_input_keydown_0_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpKeydown($event, i_r4));
    })("paste", function VerifyEmailComponent_Conditional_3_For_13_Template_input_paste_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpPaste($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("filled", ctx_r1.otpValues[i_r4]);
    \u0275\u0275attribute("data-index", i_r4);
  }
}
function VerifyEmailComponent_Conditional_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 25);
    \u0275\u0275element(2, "circle", 5)(3, "line", 26)(4, "line", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage(), " ");
  }
}
function VerifyEmailComponent_Conditional_3_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Verify Email");
    \u0275\u0275elementEnd();
  }
}
function VerifyEmailComponent_Conditional_3_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275element(1, "span", 29);
    \u0275\u0275text(2, " Verifying... ");
    \u0275\u0275elementEnd();
  }
}
function VerifyEmailComponent_Conditional_3_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sending... ");
  }
}
function VerifyEmailComponent_Conditional_3_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Resend in ", ctx_r1.resendCooldown(), "s ");
  }
}
function VerifyEmailComponent_Conditional_3_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Resend Code ");
  }
}
function VerifyEmailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 9);
    \u0275\u0275element(2, "rect", 10)(3, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Verify Your Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 6);
    \u0275\u0275text(7, "We've sent a 6-digit verification code to ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 12);
    \u0275\u0275listener("ngSubmit", function VerifyEmailComponent_Conditional_3_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275repeaterCreate(12, VerifyEmailComponent_Conditional_3_For_13_Template, 1, 3, "input", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, VerifyEmailComponent_Conditional_3_div_14_Template, 6, 1, "div", 15);
    \u0275\u0275elementStart(15, "button", 16);
    \u0275\u0275template(16, VerifyEmailComponent_Conditional_3_span_16_Template, 2, 0, "span", 17)(17, VerifyEmailComponent_Conditional_3_span_17_Template, 3, 0, "span", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 19)(19, "p");
    \u0275\u0275text(20, "Didn't receive the code?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 20);
    \u0275\u0275listener("click", function VerifyEmailComponent_Conditional_3_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resendOtp());
    });
    \u0275\u0275template(22, VerifyEmailComponent_Conditional_3_Conditional_22_Template, 1, 0)(23, VerifyEmailComponent_Conditional_3_Conditional_23_Template, 1, 1)(24, VerifyEmailComponent_Conditional_3_Conditional_24_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 21)(26, "a", 22);
    \u0275\u0275text(27, "Back to Login");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.email);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.otpForm);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.otpIndexes);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.resendLoading() || ctx_r1.resendCooldown() > 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(22, ctx_r1.resendLoading() ? 22 : ctx_r1.resendCooldown() > 0 ? 23 : 24);
  }
}
var VerifyEmailComponent = class _VerifyEmailComponent {
  route;
  router;
  authService;
  fb;
  isVerified = signal(false);
  errorMessage = signal("");
  loading = signal(false);
  resendLoading = signal(false);
  resendCooldown = signal(0);
  email = "";
  otpForm;
  otpIndexes = [0, 1, 2, 3, 4, 5];
  otpValues = ["", "", "", "", "", ""];
  constructor(route, router, authService, fb) {
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.fb = fb;
    this.otpForm = this.fb.group({
      otp: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit() {
    this.email = this.route.snapshot.queryParamMap.get("email") || "";
    if (!this.email) {
      const user = this.authService.currentUser;
      if (user?.email) {
        this.email = user.email;
      } else {
        this.router.navigate(["/auth/login"]);
      }
    }
    this.startCooldown();
  }
  onOtpInput(event, index) {
    const input = event.target;
    const value = input.value.replace(/[^0-9]/g, "");
    input.value = value;
    this.otpValues[index] = value;
    if (value && index < 5) {
      const next = document.querySelector(`input[data-index="${index + 1}"]`);
      next?.focus();
    }
    this.updateOtpFormValue();
  }
  onOtpKeydown(event, index) {
    if (event.key === "Backspace" && !this.otpValues[index] && index > 0) {
      const prev = document.querySelector(`input[data-index="${index - 1}"]`);
      if (prev) {
        prev.focus();
        prev.value = "";
        this.otpValues[index - 1] = "";
        this.updateOtpFormValue();
      }
    }
  }
  onOtpPaste(event) {
    event.preventDefault();
    const pasted = (event.clipboardData?.getData("text") || "").replace(/[^0-9]/g, "").slice(0, 6);
    for (let i = 0; i < 6; i++) {
      this.otpValues[i] = pasted[i] || "";
      const input = document.querySelector(`input[data-index="${i}"]`);
      if (input)
        input.value = this.otpValues[i];
    }
    this.updateOtpFormValue();
    const lastFilled = Math.min(pasted.length, 5);
    const focusInput = document.querySelector(`input[data-index="${lastFilled}"]`);
    focusInput?.focus();
  }
  updateOtpFormValue() {
    const otp = this.otpValues.join("");
    this.otpForm.patchValue({ otp });
  }
  onSubmit() {
    const otp = this.otpValues.join("");
    if (otp.length !== 6) {
      this.errorMessage.set("Please enter the complete 6-digit code");
      return;
    }
    this.loading.set(true);
    this.errorMessage.set("");
    this.authService.verifyEmail(this.email, otp).subscribe({
      next: (response) => {
        if (response.success) {
          this.isVerified.set(true);
          this.authService.updateCurrentUser({ email_verified: 1 });
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(err.error?.error || "Invalid OTP. Please try again.");
      },
      complete: () => {
        this.loading.set(false);
      }
    });
  }
  resendOtp() {
    this.resendLoading.set(true);
    this.errorMessage.set("");
    this.authService.resendOtp(this.email).subscribe({
      next: () => {
        this.resendLoading.set(false);
        this.startCooldown();
      },
      error: (err) => {
        this.resendLoading.set(false);
        this.errorMessage.set(err.error?.error || "Failed to resend OTP.");
      }
    });
  }
  startCooldown() {
    this.resendCooldown.set(60);
    const interval = setInterval(() => {
      const current = this.resendCooldown();
      if (current <= 1) {
        this.resendCooldown.set(0);
        clearInterval(interval);
      } else {
        this.resendCooldown.set(current - 1);
      }
    }, 1e3);
  }
  static \u0275fac = function VerifyEmailComponent_Factory(t) {
    return new (t || _VerifyEmailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerifyEmailComponent, selectors: [["app-verify-email"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "verify-wrapper"], [1, "verify-card"], [1, "status-icon", "success"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#16a34a", "stroke-width", "2"], ["d", "M9 12l2 2 4-4"], ["cx", "12", "cy", "12", "r", "10"], [1, "subtitle"], ["routerLink", "/auth/login", 1, "btn-primary"], [1, "logo-wrap"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#e31b23", "stroke-width", "2"], ["x", "2", "y", "4", "width", "20", "height", "16", "rx", "2"], ["d", "M22 4l-10 8L2 4"], [3, "ngSubmit", "formGroup"], [1, "otp-inputs"], ["type", "text", "maxlength", "1", "inputmode", "numeric", "pattern", "[0-9]", "autocomplete", "one-time-code", 1, "otp-box", 3, "filled"], ["class", "error-alert", 4, "ngIf"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [4, "ngIf"], ["class", "btn-loading", 4, "ngIf"], [1, "resend-section"], ["type", "button", 1, "btn-link", 3, "click", "disabled"], [1, "back-link"], ["routerLink", "/auth/login"], ["type", "text", "maxlength", "1", "inputmode", "numeric", "pattern", "[0-9]", "autocomplete", "one-time-code", 1, "otp-box", 3, "input", "keydown", "paste"], [1, "error-alert"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#dc2626", "stroke-width", "2"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "btn-loading"], [1, "spinner"]], template: function VerifyEmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, VerifyEmailComponent_Conditional_2_Template, 10, 0)(3, VerifyEmailComponent_Conditional_3_Template, 28, 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(2, ctx.isVerified() ? 2 : 3);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective], styles: ["\n\n.verify-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0a0c0d 0%,\n      #1a1a2e 50%,\n      #e31b23 150%);\n  padding: 24px;\n}\n.verify-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 48px 40px;\n  max-width: 440px;\n  width: 100%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.logo-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.status-icon[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0 0 8px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n  margin: 0 0 28px;\n  line-height: 1.5;\n}\n.subtitle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a1a2e;\n}\n.otp-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.otp-box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 56px;\n  text-align: center;\n  font-size: 22px;\n  font-weight: 700;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  outline: none;\n  color: #1a1a2e;\n  transition: all 0.2s;\n  background: #f8f9fa;\n}\n.otp-box[_ngcontent-%COMP%]:focus {\n  border-color: #e31b23;\n  box-shadow: 0 0 0 4px rgba(227, 27, 35, 0.1);\n  background: #fff;\n}\n.otp-box.filled[_ngcontent-%COMP%] {\n  border-color: #e31b23;\n  background: #fff;\n}\n.error-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: center;\n  padding: 10px 16px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 10px;\n  color: #dc2626;\n  font-size: 13px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #c41219;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.resend-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.resend-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n  margin: 0 0 6px;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #e31b23;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 0;\n}\n.btn-link[_ngcontent-%COMP%]:hover:not(:disabled) {\n  text-decoration: underline;\n}\n.btn-link[_ngcontent-%COMP%]:disabled {\n  color: #94a3b8;\n  cursor: not-allowed;\n}\n.back-link[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 13px;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n@media (max-width: 480px) {\n  .verify-card[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n  .otp-box[_ngcontent-%COMP%] {\n    width: 42px;\n    height: 50px;\n    font-size: 20px;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerifyEmailComponent, { className: "VerifyEmailComponent", filePath: "src\\app\\features\\auth\\verify-email\\verify-email.component.ts", lineNumber: 161 });
})();
export {
  VerifyEmailComponent
};
