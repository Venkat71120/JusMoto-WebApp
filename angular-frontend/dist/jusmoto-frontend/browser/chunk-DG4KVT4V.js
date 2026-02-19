import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-77LM5CPK.js";
import {
  AuthService
} from "./chunk-BZ2LTEHJ.js";
import "./chunk-GUDC7RY7.js";
import {
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/profile/profile.component.ts
var ProfileComponent = class _ProfileComponent {
  fb;
  authService;
  profileForm;
  isSaving = signal(false);
  constructor(fb, authService) {
    this.fb = fb;
    this.authService = authService;
    this.profileForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: [""]
    });
  }
  ngOnInit() {
    const user = this.authService.currentUser;
    if (user) {
      this.profileForm.patchValue({
        name: `${user.first_name || ""} ${user.last_name || ""}`.trim(),
        email: user.email || "",
        phone: user.phone || ""
      });
    }
  }
  onSubmit() {
    if (this.profileForm.valid) {
      this.isSaving.set(true);
      setTimeout(() => {
        this.isSaving.set(false);
        alert("Profile updated successfully!");
      }, 1e3);
    }
  }
  static \u0275fac = function ProfileComponent_Factory(t) {
    return new (t || _ProfileComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 3, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "text-3xl", "font-bold", "mb-6"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2"], [1, "bg-white", "rounded-lg", "shadow", "p-6"], [1, "text-xl", "font-bold", "mb-4"], [3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["type", "text", "formControlName", "name", 1, "w-full", "p-2", "border", "rounded", "focus:ring-2", "focus:ring-blue-500"], ["type", "email", "formControlName", "email", "readonly", "", 1, "w-full", "p-2", "border", "rounded", "bg-gray-100"], ["type", "tel", "formControlName", "phone", 1, "w-full", "p-2", "border", "rounded", "focus:ring-2", "focus:ring-blue-500"], ["type", "submit", 1, "mt-4", "bg-blue-600", "text-white", "px-6", "py-2", "rounded", "hover:bg-blue-700", 3, "disabled"], [1, "space-y-6"], [1, "space-y-2"], ["routerLink", "/profile/my-cars", 1, "flex", "items-center", "p-3", "hover:bg-gray-50", "rounded"], [1, "mr-3"], ["routerLink", "/profile/addresses", 1, "flex", "items-center", "p-3", "hover:bg-gray-50", "rounded"], ["routerLink", "/orders", 1, "flex", "items-center", "p-3", "hover:bg-gray-50", "rounded"], ["routerLink", "/wallet", 1, "flex", "items-center", "p-3", "hover:bg-gray-50", "rounded"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "My Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h2", 5);
      \u0275\u0275text(7, "Personal Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "form", 6);
      \u0275\u0275listener("ngSubmit", function ProfileComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(9, "div", 7)(10, "div")(11, "label", 8);
      \u0275\u0275text(12, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div")(15, "label", 8);
      \u0275\u0275text(16, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div")(19, "label", 8);
      \u0275\u0275text(20, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "button", 12);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 13)(25, "div", 4)(26, "h2", 5);
      \u0275\u0275text(27, "Quick Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 14)(29, "a", 15)(30, "span", 16);
      \u0275\u0275text(31, "\u{1F697}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " My Cars ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "a", 17)(34, "span", 16);
      \u0275\u0275text(35, "\u{1F4CD}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " Addresses ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "a", 18)(38, "span", 16);
      \u0275\u0275text(39, "\u{1F4E6}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " My Orders ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 19)(42, "span", 16);
      \u0275\u0275text(43, "\u{1F4B0}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, " Wallet ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.profileForm);
      \u0275\u0275advance(14);
      \u0275\u0275property("disabled", ctx.isSaving());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSaving() ? "Saving..." : "Save Changes", " ");
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src\\app\\features\\profile\\profile.component.ts", lineNumber: 64 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-DG4KVT4V.js.map
