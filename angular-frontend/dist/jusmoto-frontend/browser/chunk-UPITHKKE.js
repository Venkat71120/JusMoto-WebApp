import {
  AuthService
} from "./chunk-BZ2LTEHJ.js";
import "./chunk-GUDC7RY7.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-CMH3GDQY.js";
import "./chunk-TT3LTPCS.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/auth/verify-email/verify-email.component.ts
function VerifyEmailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
    \u0275\u0275elementStart(1, "h2", 3);
    \u0275\u0275text(2, "Verifying your email...");
    \u0275\u0275elementEnd();
  }
}
function VerifyEmailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "path", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h2", 7);
    \u0275\u0275text(4, "Email Verified!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6, "Your email has been successfully verified.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 9);
    \u0275\u0275text(8, " Go to Login ");
    \u0275\u0275elementEnd();
  }
}
function VerifyEmailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h2", 7);
    \u0275\u0275text(4, "Verification Failed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 9);
    \u0275\u0275text(8, " Go to Login ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
var VerifyEmailComponent = class _VerifyEmailComponent {
  route;
  router;
  authService;
  isVerifying = signal(true);
  isVerified = signal(false);
  errorMessage = signal("The verification link is invalid or has expired.");
  constructor(route, router, authService) {
    this.route = route;
    this.router = router;
    this.authService = authService;
  }
  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get("token");
    if (token) {
      this.verifyEmail(token);
    } else {
      this.isVerifying.set(false);
    }
  }
  verifyEmail(token) {
    setTimeout(() => {
      this.isVerifying.set(false);
      this.isVerified.set(true);
    }, 1500);
  }
  static \u0275fac = function VerifyEmailComponent_Factory(t) {
    return new (t || _VerifyEmailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerifyEmailComponent, selectors: [["app-verify-email"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-gray-100"], [1, "bg-white", "p-8", "rounded-lg", "shadow-md", "max-w-md", "w-full", "text-center"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-b-2", "border-blue-600", "mx-auto", "mb-4"], [1, "text-xl", "font-semibold"], [1, "text-green-500", "mb-4"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-16", "h-16", "mx-auto"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "clip-rule", "evenodd"], [1, "text-2xl", "font-bold", "mb-2"], [1, "text-gray-600", "mb-6"], ["routerLink", "/login", 1, "bg-blue-600", "text-white", "px-6", "py-2", "rounded", "hover:bg-blue-700"], [1, "text-red-500", "mb-4"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", "clip-rule", "evenodd"]], template: function VerifyEmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, VerifyEmailComponent_Conditional_2_Template, 3, 0)(3, VerifyEmailComponent_Conditional_3_Template, 9, 0)(4, VerifyEmailComponent_Conditional_4_Template, 9, 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(2, ctx.isVerifying() ? 2 : ctx.isVerified() ? 3 : 4);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerifyEmailComponent, { className: "VerifyEmailComponent", filePath: "src\\app\\features\\auth\\verify-email\\verify-email.component.ts", lineNumber: 43 });
})();
export {
  VerifyEmailComponent
};
//# sourceMappingURL=chunk-UPITHKKE.js.map
