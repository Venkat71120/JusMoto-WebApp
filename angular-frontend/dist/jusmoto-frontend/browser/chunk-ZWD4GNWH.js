import {
  ToastService
} from "./chunk-JBYXSY66.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-X7FFWIXK.js";
import {
  environment
} from "./chunk-GUDC7RY7.js";
import {
  HttpClient
} from "./chunk-7QXR32YF.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/admin/wallet/wallet-management.component.ts
function WalletManagementComponent_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    \u0275\u0275property("value", user_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", user_r1.first_name, " ", user_r1.last_name, " (", user_r1.email, ")");
  }
}
function WalletManagementComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
var WalletManagementComponent = class _WalletManagementComponent {
  http;
  toast;
  users = signal([]);
  selectedUserId = "";
  amount = null;
  reason = "";
  processing = signal(false);
  formError = "";
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.http.get(`${environment.apiUrl}/admin/users?limit=500`).subscribe({
      next: (res) => this.users.set(res.data || [])
    });
  }
  validate() {
    if (!this.selectedUserId) {
      this.formError = "Please select a user";
      return false;
    }
    if (!this.amount || this.amount <= 0) {
      this.formError = "Please enter a valid amount";
      return false;
    }
    this.formError = "";
    return true;
  }
  addBalance() {
    if (!this.validate())
      return;
    this.processing.set(true);
    this.http.post(`${environment.apiUrl}/wallet/admin/add`, {
      user_id: this.selectedUserId,
      amount: this.amount,
      reason: this.reason
    }).subscribe({
      next: () => {
        this.toast.success("Balance added successfully");
        this.resetForm();
      },
      error: (err) => {
        this.toast.error(err.error?.error || "Failed to add balance");
        this.processing.set(false);
      },
      complete: () => this.processing.set(false)
    });
  }
  deductBalance() {
    if (!this.validate())
      return;
    this.processing.set(true);
    this.http.post(`${environment.apiUrl}/wallet/admin/deduct`, {
      user_id: this.selectedUserId,
      amount: this.amount,
      reason: this.reason
    }).subscribe({
      next: () => {
        this.toast.success("Balance deducted successfully");
        this.resetForm();
      },
      error: (err) => {
        this.toast.error(err.error?.error || "Failed to deduct balance");
        this.processing.set(false);
      },
      complete: () => this.processing.set(false)
    });
  }
  resetForm() {
    this.selectedUserId = "";
    this.amount = null;
    this.reason = "";
  }
  static \u0275fac = function WalletManagementComponent_Factory(t) {
    return new (t || _WalletManagementComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WalletManagementComponent, selectors: [["app-wallet-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 9, consts: [[1, "page-header"], [1, "page-title"], [1, "form-card"], [1, "form-row"], [1, "form-group"], [1, "form-input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "placeholder", "Enter amount", "min", "1", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-group", 2, "margin-bottom", "20px"], ["type", "text", "placeholder", "Reason for transaction", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "error-msg", 4, "ngIf"], [1, "btn-row"], [1, "btn-primary", "btn-add", 3, "click", "disabled"], [1, "btn-primary", "btn-deduct", 3, "click", "disabled"], [3, "value"], [1, "error-msg"]], template: function WalletManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Wallet Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2)(4, "h3");
      \u0275\u0275text(5, "Add / Deduct Wallet Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "label");
      \u0275\u0275text(9, "User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function WalletManagementComponent_Template_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedUserId, $event) || (ctx.selectedUserId = $event);
        return $event;
      });
      \u0275\u0275elementStart(11, "option", 6);
      \u0275\u0275text(12, "Select user...");
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, WalletManagementComponent_option_13_Template, 2, 4, "option", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 4)(15, "label");
      \u0275\u0275text(16, "Amount (\u20B9)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function WalletManagementComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.amount, $event) || (ctx.amount = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 9)(19, "label");
      \u0275\u0275text(20, "Reason");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function WalletManagementComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.reason, $event) || (ctx.reason = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(22, WalletManagementComponent_div_22_Template, 2, 1, "div", 11);
      \u0275\u0275elementStart(23, "div", 12)(24, "button", 13);
      \u0275\u0275listener("click", function WalletManagementComponent_Template_button_click_24_listener() {
        return ctx.addBalance();
      });
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 14);
      \u0275\u0275listener("click", function WalletManagementComponent_Template_button_click_26_listener() {
        return ctx.deductBalance();
      });
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedUserId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.users());
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.amount);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.reason);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.formError);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.processing());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.processing() ? "Processing..." : "+ Add Balance", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.processing());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.processing() ? "Processing..." : "- Deduct Balance", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.form-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 20px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 10px 14px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n}\n.btn-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  border: none;\n  padding: 10px 24px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-add[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.btn-deduct[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.btn-deduct[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=wallet-management.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WalletManagementComponent, { className: "WalletManagementComponent", filePath: "src\\app\\features\\admin\\wallet\\wallet-management.component.ts", lineNumber: 68 });
})();
export {
  WalletManagementComponent
};
//# sourceMappingURL=chunk-ZWD4GNWH.js.map
