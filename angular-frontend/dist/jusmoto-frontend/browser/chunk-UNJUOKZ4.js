import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-TBAOAUH3.js";
import {
  environment
} from "./chunk-OW254BTU.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-DYL6AOBP.js";
import {
  HttpClient
} from "./chunk-L2KTGN5G.js";
import {
  CommonModule,
  NgForOf,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/client/address/address-form.component.ts
function AddressFormComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Name is required ");
    \u0275\u0275elementEnd();
  }
}
function AddressFormComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Phone is required ");
    \u0275\u0275elementEnd();
  }
}
function AddressFormComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Address is required ");
    \u0275\u0275elementEnd();
  }
}
function AddressFormComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " City is required ");
    \u0275\u0275elementEnd();
  }
}
function AddressFormComponent_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const state_r1 = ctx.$implicit;
    \u0275\u0275property("value", state_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(state_r1);
  }
}
function AddressFormComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " State is required ");
    \u0275\u0275elementEnd();
  }
}
function AddressFormComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Pincode is required ");
    \u0275\u0275elementEnd();
  }
}
var AddressFormComponent = class _AddressFormComponent {
  fb;
  http;
  router;
  route;
  addressForm;
  isEditing = signal(false);
  submitting = signal(false);
  addressId = null;
  states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi",
    "Chandigarh",
    "Puducherry"
  ];
  constructor(fb, http, router, route) {
    this.fb = fb;
    this.http = http;
    this.router = router;
    this.route = route;
    this.addressForm = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      address_line1: ["", Validators.required],
      address_line2: [""],
      city: ["", Validators.required],
      state: ["", Validators.required],
      pincode: ["", Validators.required],
      type: ["home"],
      is_default: [false]
    });
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.addressId = +id;
      this.isEditing.set(true);
      this.loadAddress(this.addressId);
    }
  }
  loadAddress(id) {
    this.http.get(`${environment.apiUrl}/addresses/${id}`).subscribe({
      next: (response) => {
        const address = response.data || response.address || response;
        this.addressForm.patchValue(address);
      }
    });
  }
  onSubmit() {
    if (this.addressForm.invalid)
      return;
    this.submitting.set(true);
    const data = this.addressForm.value;
    const request = this.isEditing() ? this.http.put(`${environment.apiUrl}/addresses/${this.addressId}`, data) : this.http.post(`${environment.apiUrl}/addresses`, data);
    request.subscribe({
      next: () => {
        this.submitting.set(false);
        this.router.navigate(["/client/address"]);
      },
      error: () => {
        this.submitting.set(false);
        alert("Failed to save address. Please try again.");
      }
    });
  }
  static \u0275fac = function AddressFormComponent_Factory(t) {
    return new (t || _AddressFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddressFormComponent, selectors: [["app-address-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 68, vars: 11, consts: [[1, "address-form-container"], [1, "back-link"], ["routerLink", "/client/address"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter full name", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "phone"], ["type", "tel", "id", "phone", "formControlName", "phone", "placeholder", "10-digit phone number", 1, "form-control"], ["for", "address_line1"], ["type", "text", "id", "address_line1", "formControlName", "address_line1", "placeholder", "House No., Building, Street", 1, "form-control"], ["for", "address_line2"], ["type", "text", "id", "address_line2", "formControlName", "address_line2", "placeholder", "Area, Colony, Landmark (optional)", 1, "form-control"], ["for", "city"], ["type", "text", "id", "city", "formControlName", "city", "placeholder", "City", 1, "form-control"], ["for", "state"], ["id", "state", "formControlName", "state", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "pincode"], ["type", "text", "id", "pincode", "formControlName", "pincode", "placeholder", "6-digit pincode", "maxlength", "6", 1, "form-control"], ["for", "type"], ["id", "type", "formControlName", "type", 1, "form-control"], ["value", "home"], ["value", "work"], ["value", "other"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "is_default"], [1, "form-actions"], ["type", "button", "routerLink", "/client/address", 1, "btn-outline"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "error"], [3, "value"]], template: function AddressFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275text(3, "\u2190 Back to Addresses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "h1");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "form", 4);
      \u0275\u0275listener("ngSubmit", function AddressFormComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "label", 7);
      \u0275\u0275text(11, "Full Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 8);
      \u0275\u0275template(13, AddressFormComponent_div_13_Template, 2, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 6)(15, "label", 10);
      \u0275\u0275text(16, "Phone Number *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 11);
      \u0275\u0275template(18, AddressFormComponent_div_18_Template, 2, 0, "div", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 6)(20, "label", 12);
      \u0275\u0275text(21, "Address Line 1 *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 13);
      \u0275\u0275template(23, AddressFormComponent_div_23_Template, 2, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 6)(25, "label", 14);
      \u0275\u0275text(26, "Address Line 2");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 5)(29, "div", 6)(30, "label", 16);
      \u0275\u0275text(31, "City *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "input", 17);
      \u0275\u0275template(33, AddressFormComponent_div_33_Template, 2, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 6)(35, "label", 18);
      \u0275\u0275text(36, "State *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "select", 19)(38, "option", 20);
      \u0275\u0275text(39, "Select State");
      \u0275\u0275elementEnd();
      \u0275\u0275template(40, AddressFormComponent_option_40_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, AddressFormComponent_div_41_Template, 2, 0, "div", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 5)(43, "div", 6)(44, "label", 22);
      \u0275\u0275text(45, "Pincode *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "input", 23);
      \u0275\u0275template(47, AddressFormComponent_div_47_Template, 2, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 6)(49, "label", 24);
      \u0275\u0275text(50, "Address Type *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "select", 25)(52, "option", 26);
      \u0275\u0275text(53, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "option", 27);
      \u0275\u0275text(55, "Work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "option", 28);
      \u0275\u0275text(57, "Other");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "div", 29)(59, "label", 30);
      \u0275\u0275element(60, "input", 31);
      \u0275\u0275elementStart(61, "span");
      \u0275\u0275text(62, "Set as default address");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 32)(64, "button", 33);
      \u0275\u0275text(65, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "button", 34);
      \u0275\u0275text(67);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_7_0;
      let tmp_8_0;
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.isEditing() ? "Edit Address" : "Add New Address");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.addressForm);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.addressForm.get("name")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.addressForm.get("name")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.addressForm.get("phone")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.addressForm.get("phone")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.addressForm.get("address_line1")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.addressForm.get("address_line1")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]));
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.addressForm.get("city")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.addressForm.get("city")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]));
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.states);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.addressForm.get("state")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.addressForm.get("state")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.addressForm.get("pincode")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx.addressForm.get("pincode")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["required"]));
      \u0275\u0275advance(19);
      \u0275\u0275property("disabled", ctx.submitting() || ctx.addressForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.submitting() ? "Saving..." : ctx.isEditing() ? "Update Address" : "Save Address", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: [`

.address-form-container[_ngcontent-%COMP%] {
  max-width: 700px;
  margin: 0 auto;
}
.back-link[_ngcontent-%COMP%] {
  margin-bottom: 20px;
}
.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #0066cc;
  text-decoration: none;
  font-size: 14px;
}
.form-card[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
.form-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 32px;
}
.form-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@media (max-width: 600px) {
  .form-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.form-group[_ngcontent-%COMP%] {
  margin-bottom: 20px;
}
.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}
.form-control[_ngcontent-%COMP%] {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 15px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.form-control[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}
select.form-control[_ngcontent-%COMP%] {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 20px;
  padding-right: 40px;
}
.error[_ngcontent-%COMP%] {
  color: #dc3545;
  font-size: 13px;
  margin-top: 6px;
}
.checkbox-group[_ngcontent-%COMP%] {
  margin-top: 8px;
}
.checkbox-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}
.checkbox-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #444;
}
.form-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
}
.btn-outline[_ngcontent-%COMP%] {
  padding: 12px 24px;
  border: 1px solid #e5e7eb;
  background: #fff;
  color: #444;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
}
.btn-primary[_ngcontent-%COMP%] {
  padding: 12px 24px;
  background: #0066cc;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
}
.btn-primary[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddressFormComponent, { className: "AddressFormComponent", filePath: "src\\app\\features\\client\\address\\address-form.component.ts", lineNumber: 283 });
})();
export {
  AddressFormComponent
};
