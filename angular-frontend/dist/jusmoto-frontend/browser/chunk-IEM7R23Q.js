import {
  ChallanService
} from "./chunk-QCSDKWDY.js";
import "./chunk-7JMAC63R.js";
import "./chunk-GUDC7RY7.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-CMH3GDQY.js";
import "./chunk-7QXR32YF.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  NgIf,
  TitleCasePipe,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/client/traffic-challan/challan-detail.component.ts
var _c0 = (a0) => ({ category: "challan", challan_id: a0 });
function ClientChallanDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading challan details...");
    \u0275\u0275elementEnd()();
  }
}
function ClientChallanDetailComponent_div_5_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 13);
    \u0275\u0275text(2, "Owner Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.challan().owner_name);
  }
}
function ClientChallanDetailComponent_div_5_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 13);
    \u0275\u0275text(2, "Chassis Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.challan().chassis_number);
  }
}
function ClientChallanDetailComponent_div_5_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h2");
    \u0275\u0275text(2, "Evidence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275element(4, "img", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.challan().image, \u0275\u0275sanitizeUrl);
  }
}
function ClientChallanDetailComponent_div_5_div_61_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span");
    \u0275\u0275text(2, "Late Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 1, ctx_r0.challan().late_fee, "INR", "symbol", "1.0-0"));
  }
}
function ClientChallanDetailComponent_div_5_div_61_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Due by ", \u0275\u0275pipeBind2(2, 1, ctx_r0.challan().due_date, "mediumDate"), " ");
  }
}
function ClientChallanDetailComponent_div_5_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "h3");
    \u0275\u0275text(2, "Payment Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "div", 32)(5, "span");
    \u0275\u0275text(6, "Fine Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, ClientChallanDetailComponent_div_5_div_61_div_10_Template, 6, 6, "div", 33);
    \u0275\u0275elementStart(11, "div", 34)(12, "span");
    \u0275\u0275text(13, "Total Payable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 35);
    \u0275\u0275listener("click", function ClientChallanDetailComponent_div_5_div_61_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.payChallan());
    });
    \u0275\u0275text(18, "Pay Now");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, ClientChallanDetailComponent_div_5_div_61_p_19_Template, 3, 4, "p", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(9, 4, ctx_r0.challan().fine_amount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.challan().late_fee > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(16, 9, ctx_r0.challan().fine_amount + (ctx_r0.challan().late_fee || 0), "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.challan().due_date);
  }
}
function ClientChallanDetailComponent_div_5_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "h3");
    \u0275\u0275text(2, "Payment Receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "div", 32)(5, "span");
    \u0275\u0275text(6, "Amount Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 32)(11, "span");
    \u0275\u0275text(12, "Payment Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 32)(17, "span");
    \u0275\u0275text(18, "Transaction ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "button", 38);
    \u0275\u0275listener("click", function ClientChallanDetailComponent_div_5_div_62_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadReceipt());
    });
    \u0275\u0275text(22, " Download Receipt ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(9, 3, ctx_r0.challan().amount_paid, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 8, ctx_r0.challan().payment_date, "mediumDate"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.challan().transaction_id);
  }
}
function ClientChallanDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "span", 13);
    \u0275\u0275text(11, "Fine Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "h2");
    \u0275\u0275text(19, "Violation Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 17)(21, "h3");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 18)(26, "div", 19)(27, "span", 13);
    \u0275\u0275text(28, "Violation Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 20);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 19)(33, "span", 13);
    \u0275\u0275text(34, "Violation Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 20);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 21)(38, "span", 13);
    \u0275\u0275text(39, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 20);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 16)(43, "h2");
    \u0275\u0275text(44, "Vehicle Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 18)(46, "div", 19)(47, "span", 13);
    \u0275\u0275text(48, "Vehicle Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 20);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 19)(52, "span", 13);
    \u0275\u0275text(53, "Vehicle Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 20);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(57, ClientChallanDetailComponent_div_5_div_57_Template, 5, 1, "div", 22)(58, ClientChallanDetailComponent_div_5_div_58_Template, 5, 1, "div", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(59, ClientChallanDetailComponent_div_5_div_59_Template, 5, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 24);
    \u0275\u0275template(61, ClientChallanDetailComponent_div_5_div_61_Template, 20, 14, "div", 25)(62, ClientChallanDetailComponent_div_5_div_62_Template, 23, 11, "div", 23);
    \u0275\u0275elementStart(63, "div", 16)(64, "h3");
    \u0275\u0275text(65, "Need Help?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p", 26);
    \u0275\u0275text(67, "If you believe this challan is incorrect, you can raise a dispute.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "a", 27);
    \u0275\u0275text(69, " Raise Dispute ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.challan().challan_number);
    \u0275\u0275advance();
    \u0275\u0275classMap("status-" + ctx_r0.challan().status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 18, ctx_r0.challan().status), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(14, 20, ctx_r0.challan().fine_amount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.challan().violation_type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.challan().violation_description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 25, ctx_r0.challan().violation_date, "fullDate"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.challan().violation_time);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.challan().location);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.challan().vehicle_number);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 28, ctx_r0.challan().vehicle_type));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.challan().owner_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.challan().chassis_number);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.challan().image);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.challan().status === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.challan().status === "paid");
    \u0275\u0275advance(6);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(30, _c0, ctx_r0.challan().id));
  }
}
var ClientChallanDetailComponent = class _ClientChallanDetailComponent {
  route;
  router;
  challanService;
  challan = signal(null);
  loading = signal(true);
  constructor(route, router, challanService) {
    this.route = route;
    this.router = router;
    this.challanService = challanService;
  }
  ngOnInit() {
    const challanId = this.route.snapshot.paramMap.get("id");
    if (challanId) {
      this.loadChallan(+challanId);
    }
  }
  loadChallan(id) {
    this.loading.set(true);
    this.challanService.getChallan(id).subscribe({
      next: (response) => {
        this.challan.set(response.data || response.challan || response);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.router.navigate(["/client/traffic-challan"]);
      }
    });
  }
  payChallan() {
    alert("Payment flow coming soon!");
  }
  downloadReceipt() {
    alert("Download receipt - Coming soon!");
  }
  static \u0275fac = function ClientChallanDetailComponent_Factory(t) {
    return new (t || _ClientChallanDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChallanService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientChallanDetailComponent, selectors: [["app-client-challan-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 2, consts: [[1, "challan-detail-container"], [1, "back-link"], ["routerLink", "/client/traffic-challan"], ["class", "loading", 4, "ngIf"], ["class", "challan-content", 4, "ngIf"], [1, "loading"], [1, "spinner"], [1, "challan-content"], [1, "challan-header-card"], [1, "header-top"], [1, "challan-title"], [1, "status-badge"], [1, "fine-amount"], [1, "label"], [1, "content-grid"], [1, "main-section"], [1, "card"], [1, "violation-info"], [1, "details-grid"], [1, "detail-item"], [1, "value"], [1, "detail-item", "full-width"], ["class", "detail-item", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "sidebar-section"], ["class", "card payment-card", 4, "ngIf"], [1, "help-text"], ["routerLink", "/client/tickets/new", 1, "btn-outline", "full-width", 3, "queryParams"], [1, "evidence-image"], ["alt", "Violation Evidence", 3, "src"], [1, "card", "payment-card"], [1, "payment-details"], [1, "payment-row"], ["class", "payment-row", 4, "ngIf"], [1, "payment-row", "total"], [1, "btn-primary", "full-width", 3, "click"], ["class", "due-date", 4, "ngIf"], [1, "due-date"], [1, "btn-outline", "full-width", 3, "click"]], template: function ClientChallanDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275text(3, "\u2190 Back to Challans");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, ClientChallanDetailComponent_div_4_Template, 4, 0, "div", 3)(5, ClientChallanDetailComponent_div_5_Template, 70, 32, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.challan());
    }
  }, dependencies: [CommonModule, NgIf, TitleCasePipe, CurrencyPipe, DatePipe, RouterModule, RouterLink], styles: ["\n\n.challan-detail-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.back-link[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0066cc;\n  text-decoration: none;\n  font-size: 14px;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #0066cc;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.challan-header-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.challan-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.challan-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0;\n  color: #1a1a1a;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-paid[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-disputed[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.fine-amount[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.fine-amount[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  color: #666;\n  margin-bottom: 4px;\n}\n.fine-amount[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #dc3545;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 350px;\n  gap: 24px;\n}\n@media (max-width: 900px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 24px;\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 20px;\n}\n.violation-info[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.violation-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #dc3545;\n  margin-bottom: 8px;\n}\n.violation-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n  line-height: 1.6;\n}\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  text-transform: uppercase;\n}\n.detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #1a1a1a;\n}\n.evidence-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n}\n.payment-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n}\n.payment-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.payment-details[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.payment-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n.payment-row.total[_ngcontent-%COMP%] {\n  border-bottom: none;\n  padding-top: 16px;\n  margin-top: 8px;\n  border-top: 2px solid rgba(255, 255, 255, 0.3);\n}\n.payment-row.total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n  background: #fff;\n  color: #764ba2;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n}\n.due-date[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 12px 0 0;\n  font-size: 13px;\n  opacity: 0.9;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 24px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  color: #444;\n  border-radius: 6px;\n  text-decoration: none;\n  font-weight: 500;\n  text-align: center;\n  cursor: pointer;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.help-text[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  margin: 0 0 16px;\n}\n/*# sourceMappingURL=challan-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientChallanDetailComponent, { className: "ClientChallanDetailComponent", filePath: "src\\app\\features\\client\\traffic-challan\\challan-detail.component.ts", lineNumber: 387 });
})();
export {
  ClientChallanDetailComponent
};
//# sourceMappingURL=chunk-IEM7R23Q.js.map
