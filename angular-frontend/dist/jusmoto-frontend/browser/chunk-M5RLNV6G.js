import {
  ChallanService
} from "./chunk-RMH4ZY2G.js";
import "./chunk-RU4JQJ5O.js";
import "./chunk-OW254BTU.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-DYL6AOBP.js";
import "./chunk-L2KTGN5G.js";
import {
  CommonModule,
  DatePipe,
  TitleCasePipe,
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
  ɵɵpipeBind1,
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
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/challans/challan-detail/challan-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ChallanDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading challan details...");
    \u0275\u0275elementEnd()();
  }
}
function ChallanDetailComponent_Conditional_5_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Overdue");
    \u0275\u0275elementEnd();
  }
}
function ChallanDetailComponent_Conditional_5_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3");
    \u0275\u0275text(2, "Payment Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 14)(5, "span", 15);
    \u0275\u0275text(6, "Amount Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 14)(10, "span", 15);
    \u0275\u0275text(11, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 16);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 14)(16, "span", 15);
    \u0275\u0275text(17, "Transaction ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 16);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 14)(21, "span", 15);
    \u0275\u0275text(22, "Payment Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 16);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r0.challan().paid_amount, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 4, ctx_r0.challan().payment_method));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.challan().payment_reference);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 6, ctx_r0.challan().paid_at, "medium"));
  }
}
function ChallanDetailComponent_Conditional_5_Conditional_54_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function ChallanDetailComponent_Conditional_5_Conditional_54_For_5_Template_button_click_0_listener() {
      const method_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectMethod(method_r4.id));
    });
    \u0275\u0275elementStart(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const method_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r0.selectedMethod() === method_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r4.name);
  }
}
function ChallanDetailComponent_Conditional_5_Conditional_54_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
    \u0275\u0275text(1, " Processing... ");
  }
}
function ChallanDetailComponent_Conditional_5_Conditional_54_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" Pay \u20B9", ctx_r0.challan().fine_amount, " ");
  }
}
function ChallanDetailComponent_Conditional_5_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "h4");
    \u0275\u0275text(2, "Select Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275repeaterCreate(4, ChallanDetailComponent_Conditional_5_Conditional_54_For_5_Template, 5, 4, "button", 25, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 26);
    \u0275\u0275listener("click", function ChallanDetailComponent_Conditional_5_Conditional_54_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.processPayment());
    });
    \u0275\u0275template(7, ChallanDetailComponent_Conditional_5_Conditional_54_Conditional_7_Template, 2, 0)(8, ChallanDetailComponent_Conditional_5_Conditional_54_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.paymentMethods);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.selectedMethod() || ctx_r0.isPaying());
    \u0275\u0275advance();
    \u0275\u0275conditional(7, ctx_r0.isPaying() ? 7 : 8);
  }
}
function ChallanDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "span", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 11)(10, "div", 12)(11, "h3");
    \u0275\u0275text(12, "Offence Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14)(15, "span", 15);
    \u0275\u0275text(16, "Offence Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 16);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 14)(20, "span", 15);
    \u0275\u0275text(21, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 16);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 14)(25, "span", 15);
    \u0275\u0275text(26, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 16);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 14)(30, "span", 15);
    \u0275\u0275text(31, "Offence Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 16);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 14)(36, "span", 15);
    \u0275\u0275text(37, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 16);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "date");
    \u0275\u0275template(41, ChallanDetailComponent_Conditional_5_Conditional_41_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 14)(43, "span", 15);
    \u0275\u0275text(44, "Issuing Authority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 16);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(47, ChallanDetailComponent_Conditional_5_Conditional_47_Template, 26, 9, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 19)(49, "div", 20)(50, "span", 21);
    \u0275\u0275text(51, "Fine Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 22);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(54, ChallanDetailComponent_Conditional_5_Conditional_54_Template, 9, 2, "div", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.challan().challan_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.challan().vehicle_number);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.challan().payment_status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.challan().payment_status === "paid" ? "Paid" : "Pending", " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.challan().offence_type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.challan().offence_description || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.challan().offence_location);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 17, ctx_r0.challan().offence_date, "medium"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("overdue", ctx_r0.isOverdue());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(40, 20, ctx_r0.challan().due_date, "mediumDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(41, ctx_r0.isOverdue() ? 41 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.challan().issuing_authority || "Traffic Police");
    \u0275\u0275advance();
    \u0275\u0275conditional(47, ctx_r0.challan().payment_status === "paid" ? 47 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r0.challan().fine_amount, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(54, ctx_r0.challan().payment_status !== "paid" ? 54 : -1);
  }
}
function ChallanDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "h3");
    \u0275\u0275text(2, "Challan Not Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "The challan you're looking for doesn't exist or has been removed.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 31);
    \u0275\u0275text(6, "Back to Challans");
    \u0275\u0275elementEnd()();
  }
}
var ChallanDetailComponent = class _ChallanDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  challanService = inject(ChallanService);
  challan = signal(null);
  isLoading = signal(true);
  isPaying = signal(false);
  selectedMethod = signal("");
  paymentMethods = [
    { id: "stripe", name: "Card", icon: "\u{1F4B3}" },
    { id: "razorpay", name: "Razorpay", icon: "\u{1F3E6}" },
    { id: "upi", name: "UPI", icon: "\u{1F4F1}" }
  ];
  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state?.["challan"]) {
      this.challan.set(state["challan"]);
      this.isLoading.set(false);
    } else {
      this.loadChallan(id);
    }
  }
  loadChallan(id) {
    this.challanService.getChallan(+id).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        if (response.success) {
          this.challan.set(response.data);
        }
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }
  isOverdue() {
    if (!this.challan()?.due_date)
      return false;
    return new Date(this.challan().due_date) < /* @__PURE__ */ new Date();
  }
  selectMethod(methodId) {
    this.selectedMethod.set(methodId);
  }
  processPayment() {
    if (!this.selectedMethod() || !this.challan())
      return;
    this.isPaying.set(true);
    this.challanService.payChallan(this.challan().id, this.selectedMethod()).subscribe({
      next: (response) => {
        this.isPaying.set(false);
        if (response.success) {
          this.challan.set(response.data.challan);
          alert("Payment successful!");
        }
      },
      error: (error) => {
        this.isPaying.set(false);
        alert(error.error?.message || "Payment failed. Please try again.");
      }
    });
  }
  static \u0275fac = function ChallanDetailComponent_Factory(t) {
    return new (t || _ChallanDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChallanDetailComponent, selectors: [["app-challan-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "challan-detail-container"], [1, "back-nav"], ["routerLink", "/challans"], [1, "loading-state"], [1, "spinner"], [1, "challan-detail-card"], [1, "card-header"], [1, "challan-info"], [1, "challan-number"], [1, "vehicle-number"], [1, "status-badge"], [1, "card-body"], [1, "detail-section"], [1, "detail-grid"], [1, "detail-item"], [1, "label"], [1, "value"], [1, "overdue-tag"], [1, "detail-section", "payment-info"], [1, "card-footer"], [1, "amount-section"], [1, "amount-label"], [1, "amount-value"], [1, "payment-actions"], [1, "payment-methods"], [1, "payment-method", 3, "selected"], [1, "btn-pay", 3, "click", "disabled"], [1, "payment-method", 3, "click"], [1, "method-icon"], [1, "method-name"], [1, "error-state"], ["routerLink", "/challans", 1, "btn-primary"]], template: function ChallanDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275text(3, "\u2190 Back to Challans");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, ChallanDetailComponent_Conditional_4_Template, 4, 0, "div", 3)(5, ChallanDetailComponent_Conditional_5_Template, 55, 23)(6, ChallanDetailComponent_Conditional_6_Template, 7, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(4, ctx.isLoading() ? 4 : ctx.challan() ? 5 : 6);
    }
  }, dependencies: [CommonModule, TitleCasePipe, DatePipe, RouterModule, RouterLink], styles: ["\n\n.challan-detail-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.back-nav[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.back-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  font-weight: 500;\n}\n.loading-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e0e0e0;\n  border-top-color: #007bff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 20px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.challan-detail-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 25px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a237e 0%,\n      #3949ab 100%);\n  color: white;\n}\n.challan-number[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  font-weight: 600;\n  font-family: monospace;\n}\n.vehicle-number[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  font-size: 14px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 25px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.status-badge.paid[_ngcontent-%COMP%] {\n  background: #4caf50;\n  color: white;\n}\n.status-badge.unpaid[_ngcontent-%COMP%], .status-badge.pending[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: white;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n.detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.detail-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin-bottom: 15px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999;\n  margin-bottom: 5px;\n}\n.detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n}\n.detail-item[_ngcontent-%COMP%]   .value.overdue[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.overdue-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 8px;\n  padding: 2px 8px;\n  background: #dc3545;\n  color: white;\n  border-radius: 10px;\n  font-size: 10px;\n}\n.payment-info[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 20px;\n  border-radius: 10px;\n}\n.card-footer[_ngcontent-%COMP%] {\n  padding: 25px;\n  border-top: 1px solid #e0e0e0;\n}\n.amount-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 25px;\n}\n.amount-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #666;\n  margin-bottom: 5px;\n}\n.amount-value[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: #dc3545;\n}\n.payment-actions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 15px;\n  color: #666;\n}\n.payment-methods[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.payment-method[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 15px;\n  background: #f8f9fa;\n  border: 2px solid transparent;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.payment-method[_ngcontent-%COMP%]:hover {\n  border-color: #007bff;\n}\n.payment-method.selected[_ngcontent-%COMP%] {\n  border-color: #007bff;\n  background: #e3f2fd;\n}\n.method-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 8px;\n}\n.method-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n.btn-pay[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  background: #28a745;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 18px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.btn-pay[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #218838;\n}\n.btn-pay[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-pay[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-width: 2px;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 24px;\n  background: #007bff;\n  color: white;\n  text-decoration: none;\n  border-radius: 8px;\n  margin-top: 15px;\n}\n@media (max-width: 600px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .payment-methods[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChallanDetailComponent, { className: "ChallanDetailComponent", filePath: "src\\app\\features\\challans\\challan-detail\\challan-detail.component.ts", lineNumber: 400 });
})();
export {
  ChallanDetailComponent
};
