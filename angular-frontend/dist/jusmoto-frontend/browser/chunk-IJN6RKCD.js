import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/profile/profile.component.ts
function ProfileComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Phone number must be exactly 10 digits");
    \u0275\u0275elementEnd();
  }
}
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
      phone: ["", [Validators.pattern(/^\d{10}$/)]]
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 4, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "text-3xl", "font-bold", "mb-6"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2"], [1, "bg-white", "rounded-lg", "shadow", "p-6"], [1, "text-xl", "font-bold", "mb-4"], [3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["type", "text", "formControlName", "name", 1, "w-full", "p-2", "border", "rounded", "focus:ring-2", "focus:ring-blue-500"], ["type", "email", "formControlName", "email", "readonly", "", 1, "w-full", "p-2", "border", "rounded", "bg-gray-100"], ["type", "tel", "formControlName", "phone", "maxlength", "10", "placeholder", "10-digit phone number", 1, "w-full", "p-2", "border", "rounded", "focus:ring-2", "focus:ring-blue-500"], ["class", "text-red-500 text-xs mt-1 block", 4, "ngIf"], ["type", "submit", 1, "mt-4", "bg-blue-600", "text-white", "px-6", "py-2", "rounded", "hover:bg-blue-700", 3, "disabled"], [1, "space-y-6"], [1, "space-y-2"], ["routerLink", "/profile/my-cars", 1, "flex", "items-center", "p-3", "hover:bg-gray-50", "rounded"], [1, "mr-3"], ["routerLink", "/profile/addresses", 1, "flex", "items-center", "p-3", "hover:bg-gray-50", "rounded"], ["routerLink", "/orders", 1, "flex", "items-center", "p-3", "hover:bg-gray-50", "rounded"], ["routerLink", "/wallet", 1, "flex", "items-center", "p-3", "hover:bg-gray-50", "rounded"], [1, "text-red-500", "text-xs", "mt-1", "block"]], template: function ProfileComponent_Template(rf, ctx) {
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
      \u0275\u0275template(22, ProfileComponent_span_22_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 13);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "div", 14)(26, "div", 4)(27, "h2", 5);
      \u0275\u0275text(28, "Quick Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 15)(30, "a", 16)(31, "span", 17);
      \u0275\u0275text(32, "\u{1F697}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(33, " My Cars ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "a", 18)(35, "span", 17);
      \u0275\u0275text(36, "\u{1F4CD}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(37, " Addresses ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "a", 19)(39, "span", 17);
      \u0275\u0275text(40, "\u{1F4E6}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(41, " My Orders ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 20)(43, "span", 17);
      \u0275\u0275text(44, "\u{1F4B0}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, " Wallet ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.profileForm);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.profileForm.get("phone")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.profileForm.get("phone")) == null ? null : tmp_1_0.hasError("pattern")));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSaving());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSaving() ? "Saving..." : "Save Changes", " ");
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, ReactiveFormsModule, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src\\app\\features\\profile\\profile.component.ts", lineNumber: 65 });
})();
export {
  ProfileComponent
};
