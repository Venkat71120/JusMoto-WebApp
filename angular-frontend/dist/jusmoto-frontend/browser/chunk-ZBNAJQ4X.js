import {
  ChallanService
} from "./chunk-E5RYTF3V.js";
import "./chunk-XSC2IEYW.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-77LM5CPK.js";
import "./chunk-GUDC7RY7.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-CMH3GDQY.js";
import "./chunk-TT3LTPCS.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  NgForOf,
  NgIf,
  signal,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/client/traffic-challan/challan-check.component.ts
function ClientChallanCheckComponent_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, " Vehicle number is required ");
    \u0275\u0275elementEnd();
  }
}
function ClientChallanCheckComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 14);
    \u0275\u0275text(2, "Vehicle Registration Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 15);
    \u0275\u0275listener("input", function ClientChallanCheckComponent_div_15_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formatVehicleNumber($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ClientChallanCheckComponent_div_15_div_4_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx_r1.searchForm.get("vehicle_number")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx_r1.searchForm.get("vehicle_number")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]));
  }
}
function ClientChallanCheckComponent_div_16_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, " License number is required ");
    \u0275\u0275elementEnd();
  }
}
function ClientChallanCheckComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 18);
    \u0275\u0275text(2, "Driving License Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 19);
    \u0275\u0275template(4, ClientChallanCheckComponent_div_16_div_4_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx_r1.searchForm.get("license_number")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx_r1.searchForm.get("license_number")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]));
  }
}
function ClientChallanCheckComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error(), " ");
  }
}
function ClientChallanCheckComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Challans Found!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Great news! There are no pending challans for this ", ctx_r1.searchType() === "vehicle" ? "vehicle" : "license", ".");
  }
}
function ClientChallanCheckComponent_div_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 31)(8, "div", 32)(9, "span");
    \u0275\u0275text(10, "Violation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 32)(14, "span");
    \u0275\u0275text(15, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 32)(20, "span");
    \u0275\u0275text(21, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 33)(25, "button", 34);
    \u0275\u0275listener("click", function ClientChallanCheckComponent_div_21_div_3_Template_button_click_25_listener() {
      const challan_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.payChallan(challan_r5));
    });
    \u0275\u0275text(26, "Pay Now");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const challan_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(challan_r5.challan_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(6, 5, challan_r5.fine_amount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(challan_r5.violation_type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 10, challan_r5.violation_date, "mediumDate"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(challan_r5.location);
  }
}
function ClientChallanCheckComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ClientChallanCheckComponent_div_21_div_3_Template, 27, 13, "div", 24);
    \u0275\u0275elementStart(4, "div", 25)(5, "span");
    \u0275\u0275text(6, "Total Amount to Pay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 26);
    \u0275\u0275listener("click", function ClientChallanCheckComponent_div_21_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.payAll());
    });
    \u0275\u0275text(11, "Pay All Challans");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Found ", ctx_r1.results().length, " Challan(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.results());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(9, 3, ctx_r1.getTotalAmount(), "INR", "symbol", "1.0-0"));
  }
}
var ClientChallanCheckComponent = class _ClientChallanCheckComponent {
  fb;
  challanService;
  router;
  searchForm;
  searchType = signal("vehicle");
  searching = signal(false);
  searched = signal(false);
  results = signal([]);
  error = signal("");
  constructor(fb, challanService, router) {
    this.fb = fb;
    this.challanService = challanService;
    this.router = router;
    this.searchForm = this.fb.group({
      vehicle_number: [""],
      license_number: [""]
    });
  }
  formatVehicleNumber(event) {
    const input = event.target;
    input.value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
  }
  onSearch() {
    const searchValue = this.searchType() === "vehicle" ? this.searchForm.value.vehicle_number : this.searchForm.value.license_number;
    if (!searchValue) {
      return;
    }
    this.searching.set(true);
    this.error.set("");
    this.results.set([]);
    const params = this.searchType() === "vehicle" ? { vehicle_number: searchValue } : { license_number: searchValue };
    this.challanService.checkChallans(params).subscribe({
      next: (response) => {
        this.searching.set(false);
        this.searched.set(true);
        this.results.set(response.data || response.challans || []);
      },
      error: (err) => {
        this.searching.set(false);
        this.searched.set(true);
        this.error.set(err.error?.message || "Failed to check challans. Please try again.");
      }
    });
  }
  getTotalAmount() {
    return this.results().reduce((sum, challan) => sum + (challan.fine_amount || 0), 0);
  }
  payChallan(challan) {
    alert("Payment flow coming soon!");
  }
  payAll() {
    alert("Pay all challans - Coming soon!");
  }
  static \u0275fac = function ClientChallanCheckComponent_Factory(t) {
    return new (t || _ClientChallanCheckComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ChallanService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientChallanCheckComponent, selectors: [["app-client-challan-check"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 12, consts: [[1, "check-challan-container"], [1, "back-link"], ["routerLink", "/client/traffic-challan"], [1, "check-card"], [1, "subtitle"], [1, "search-tabs"], [1, "tab-btn", 3, "click"], [3, "ngSubmit", "formGroup"], ["class", "form-group", 4, "ngIf"], ["type", "submit", 1, "btn-primary", "full-width", 3, "disabled"], ["class", "error-message", 4, "ngIf"], ["class", "no-results", 4, "ngIf"], ["class", "results-section", 4, "ngIf"], [1, "form-group"], ["for", "vehicle_number"], ["type", "text", "id", "vehicle_number", "formControlName", "vehicle_number", "placeholder", "e.g., MH12AB1234", 1, "form-control", 3, "input"], ["class", "error", 4, "ngIf"], [1, "error"], ["for", "license_number"], ["type", "text", "id", "license_number", "formControlName", "license_number", "placeholder", "e.g., MH1234567890123", 1, "form-control"], [1, "error-message"], [1, "no-results"], [1, "success-icon"], [1, "results-section"], ["class", "result-card", 4, "ngFor", "ngForOf"], [1, "total-section"], [1, "btn-primary", "full-width", 3, "click"], [1, "result-card"], [1, "result-header"], [1, "challan-number"], [1, "fine-amount"], [1, "result-body"], [1, "detail-row"], [1, "result-footer"], [1, "btn-primary", 3, "click"]], template: function ClientChallanCheckComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275text(3, "\u2190 Back to Challans");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "h1");
      \u0275\u0275text(6, "Check Traffic Challans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, "Enter your vehicle number or driving license to check for pending challans.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
      \u0275\u0275listener("click", function ClientChallanCheckComponent_Template_button_click_10_listener() {
        return ctx.searchType.set("vehicle");
      });
      \u0275\u0275text(11, " By Vehicle Number ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 6);
      \u0275\u0275listener("click", function ClientChallanCheckComponent_Template_button_click_12_listener() {
        return ctx.searchType.set("license");
      });
      \u0275\u0275text(13, " By Driving License ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "form", 7);
      \u0275\u0275listener("ngSubmit", function ClientChallanCheckComponent_Template_form_ngSubmit_14_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275template(15, ClientChallanCheckComponent_div_15_Template, 5, 1, "div", 8)(16, ClientChallanCheckComponent_div_16_Template, 5, 1, "div", 8);
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(19, ClientChallanCheckComponent_div_19_Template, 2, 1, "div", 10)(20, ClientChallanCheckComponent_div_20_Template, 7, 1, "div", 11)(21, ClientChallanCheckComponent_div_21_Template, 12, 8, "div", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275classProp("active", ctx.searchType() === "vehicle");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.searchType() === "license");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.searchForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchType() === "vehicle");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchType() === "license");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.searching());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.searching() ? "Searching..." : "Check Challans", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searched() && ctx.results().length === 0 && !ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.results().length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, CurrencyPipe, DatePipe, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.check-challan-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.back-link[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0066cc;\n  text-decoration: none;\n  font-size: 14px;\n}\n.check-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.check-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0 0 24px;\n}\n.search-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 24px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  border-color: #0066cc;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: #0066cc;\n  border-color: #0066cc;\n  color: #fff;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 8px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066cc;\n  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);\n}\n.error[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 13px;\n  margin-top: 6px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n  background: #0066cc;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 16px;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.error-message[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 16px;\n  background: #fee2e2;\n  border-radius: 8px;\n  color: #991b1b;\n  text-align: center;\n}\n.no-results[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  text-align: center;\n  padding: 32px 20px;\n  background: #d1fae5;\n  border-radius: 12px;\n}\n.success-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: #065f46;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.no-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #065f46;\n  margin: 0 0 8px;\n}\n.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #047857;\n  margin: 0;\n}\n.results-section[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.results-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 16px;\n}\n.result-card[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  margin-bottom: 12px;\n  overflow: hidden;\n}\n.result-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.challan-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.fine-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #dc3545;\n}\n.result-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  padding: 6px 0;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #666;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #1a1a1a;\n}\n.result-footer[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-top: 1px solid #e5e7eb;\n  text-align: right;\n}\n.result-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  font-size: 14px;\n}\n.total-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  background: #f9fafb;\n  border-radius: 10px;\n  margin: 20px 0;\n}\n.total-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n}\n.total-section[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #1a1a1a;\n}\n/*# sourceMappingURL=challan-check.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientChallanCheckComponent, { className: "ClientChallanCheckComponent", filePath: "src\\app\\features\\client\\traffic-challan\\challan-check.component.ts", lineNumber: 362 });
})();
export {
  ClientChallanCheckComponent
};
//# sourceMappingURL=chunk-ZBNAJQ4X.js.map
