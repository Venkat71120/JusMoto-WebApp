import {
  ChallanService
} from "./chunk-72IJ32L7.js";
import "./chunk-GMJ7MHWM.js";
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
} from "./chunk-5WG63XSG.js";
import {
  Router,
  RouterModule
} from "./chunk-6VP7BBRC.js";
import "./chunk-YVMT3HBM.js";
import "./chunk-NM77QJY5.js";
import {
  CommonModule,
  DatePipe,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/challans/challan-check/challan-check.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ChallanCheckComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Please enter a valid vehicle number");
    \u0275\u0275elementEnd();
  }
}
function ChallanCheckComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
    \u0275\u0275text(1, " Checking... ");
  }
}
function ChallanCheckComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Check Challans ");
  }
}
function ChallanCheckComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function ChallanCheckComponent_Conditional_17_For_5_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function ChallanCheckComponent_Conditional_17_For_5_Conditional_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const challan_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.payNow(challan_r3));
    });
    \u0275\u0275text(1, "Pay Now");
    \u0275\u0275elementEnd();
  }
}
function ChallanCheckComponent_Conditional_17_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 18)(7, "div", 19)(8, "span", 20);
    \u0275\u0275text(9, "Offence:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 19)(13, "span", 20);
    \u0275\u0275text(14, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 21);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 19)(18, "span", 20);
    \u0275\u0275text(19, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 21);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 19)(24, "span", 20);
    \u0275\u0275text(25, "Due Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 21);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 22)(30, "span", 23);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, ChallanCheckComponent_Conditional_17_For_5_Conditional_32_Template, 2, 0, "button", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const challan_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(challan_r3.challan_number);
    \u0275\u0275advance();
    \u0275\u0275classMap(challan_r3.payment_status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", challan_r3.payment_status === "paid" ? "Paid" : "Pending", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(challan_r3.offence_type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(challan_r3.offence_location);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 12, challan_r3.offence_date, "mediumDate"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("overdue", ctx_r0.isOverdue(challan_r3.due_date));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 15, challan_r3.due_date, "mediumDate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u20B9", challan_r3.fine_amount, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(32, challan_r3.payment_status !== "paid" ? 32 : -1);
  }
}
function ChallanCheckComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275repeaterCreate(4, ChallanCheckComponent_Conditional_17_For_5_Template, 33, 18, "div", 14, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Found ", ctx_r0.challans().length, " Challan(s)");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.challans());
  }
}
function ChallanCheckComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 26);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Pending Challans");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Great! No traffic challans found for this vehicle.");
    \u0275\u0275elementEnd()();
  }
}
var ChallanCheckComponent = class _ChallanCheckComponent {
  fb = inject(FormBuilder);
  challanService = inject(ChallanService);
  router = inject(Router);
  searchForm;
  isLoading = signal(false);
  challans = signal([]);
  errorMessage = signal("");
  searched = signal(false);
  constructor() {
    this.searchForm = this.fb.group({
      vehicleNumber: ["", [Validators.required, Validators.pattern(/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{1,4}$/i)]]
    });
  }
  onSearch() {
    if (this.searchForm.invalid)
      return;
    this.isLoading.set(true);
    this.errorMessage.set("");
    this.challans.set([]);
    const vehicleNumber = this.searchForm.get("vehicleNumber")?.value.toUpperCase();
    this.challanService.checkChallans(vehicleNumber).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        this.searched.set(true);
        if (response.success) {
          this.challans.set(response.data || []);
        }
      },
      error: (error) => {
        this.isLoading.set(false);
        this.searched.set(true);
        this.errorMessage.set(error.error?.message || "Failed to fetch challans. Please try again.");
      }
    });
  }
  isOverdue(dueDate) {
    return new Date(dueDate) < /* @__PURE__ */ new Date();
  }
  payNow(challan) {
    this.router.navigate(["/challans", challan.id], { state: { challan } });
  }
  static \u0275fac = function ChallanCheckComponent_Factory(t) {
    return new (t || _ChallanCheckComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChallanCheckComponent, selectors: [["app-challan-check"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 9, consts: [[1, "challan-check-container"], [1, "page-header"], [1, "search-card"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "vehicleNumber"], ["type", "text", "id", "vehicleNumber", "formControlName", "vehicleNumber", "placeholder", "e.g., DL01AB1234"], [1, "error-message"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "error-alert"], [1, "results-section"], [1, "no-results"], [1, "spinner"], [1, "challan-list"], [1, "challan-card"], [1, "challan-header"], [1, "challan-number"], [1, "status"], [1, "challan-body"], [1, "info-row"], [1, "label"], [1, "value"], [1, "challan-footer"], [1, "amount"], [1, "btn-pay"], [1, "btn-pay", 3, "click"], [1, "icon"]], template: function ChallanCheckComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Check Traffic Challans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Enter your vehicle number to check for any pending challans");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2)(7, "form", 3);
      \u0275\u0275listener("ngSubmit", function ChallanCheckComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementStart(8, "div", 4)(9, "label", 5);
      \u0275\u0275text(10, "Vehicle Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "input", 6);
      \u0275\u0275template(12, ChallanCheckComponent_Conditional_12_Template, 2, 0, "span", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 8);
      \u0275\u0275template(14, ChallanCheckComponent_Conditional_14_Template, 2, 0)(15, ChallanCheckComponent_Conditional_15_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(16, ChallanCheckComponent_Conditional_16_Template, 2, 1, "div", 9)(17, ChallanCheckComponent_Conditional_17_Template, 6, 1, "div", 10)(18, ChallanCheckComponent_Conditional_18_Template, 7, 0, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.searchForm);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("error", ((tmp_1_0 = ctx.searchForm.get("vehicleNumber")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.searchForm.get("vehicleNumber")) == null ? null : tmp_1_0.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional(12, ((tmp_2_0 = ctx.searchForm.get("vehicleNumber")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.searchForm.get("vehicleNumber")) == null ? null : tmp_2_0.touched) ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.searchForm.invalid || ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(14, ctx.isLoading() ? 14 : 15);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(16, ctx.errorMessage() ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(17, ctx.challans().length > 0 ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(18, ctx.searched() && ctx.challans().length === 0 && !ctx.isLoading() && !ctx.errorMessage() ? 18 : -1);
    }
  }, dependencies: [CommonModule, DatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterModule], styles: ["\n\n.challan-check-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.page-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-bottom: 10px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n}\n.search-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  padding: 30px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 30px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 15px;\n  border: 2px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n}\n.form-group[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 14px;\n  margin-top: 5px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background: #007bff;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0056b3;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(255, 255, 255, 0.3137254902);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-alert[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n  padding: 15px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.results-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.challan-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.challan-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.challan-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n}\n.challan-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-family: monospace;\n}\n.status[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.status.paid[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status.unpaid[_ngcontent-%COMP%], .status.pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.challan-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 10px;\n}\n.info-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  width: 120px;\n  color: #666;\n}\n.info-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n}\n.info-row[_ngcontent-%COMP%]   .value.overdue[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.challan-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  background: #f8f9fa;\n  border-top: 1px solid #e0e0e0;\n}\n.amount[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #dc3545;\n}\n.btn-pay[_ngcontent-%COMP%] {\n  padding: 10px 25px;\n  background: #28a745;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-pay[_ngcontent-%COMP%]:hover {\n  background: #218838;\n}\n.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.no-results[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: #d4edda;\n  color: #28a745;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  margin: 0 auto 20px;\n}\n.no-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #28a745;\n}\n.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChallanCheckComponent, { className: "ChallanCheckComponent", filePath: "src\\app\\features\\challans\\challan-check\\challan-check.component.ts", lineNumber: 347 });
})();
export {
  ChallanCheckComponent
};
