import {
  ToastService
} from "./chunk-CUQ723YT.js";
import {
  ChallanService
} from "./chunk-72IJ32L7.js";
import "./chunk-GMJ7MHWM.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-6VP7BBRC.js";
import "./chunk-YVMT3HBM.js";
import "./chunk-NM77QJY5.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  NgForOf,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/client/traffic-challan/challan-list.component.ts
var _c0 = (a0) => ["/client/traffic-challan", a0];
function ClientChallanListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
    \u0275\u0275text(3, "\u23F3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11)(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8, "Pending");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 9)(10, "div", 14);
    \u0275\u0275text(11, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 11)(13, "span", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 13);
    \u0275\u0275text(16, "Paid");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 9)(18, "div", 15);
    \u0275\u0275text(19, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 11)(21, "span", 12);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 13);
    \u0275\u0275text(25, "Total Pending");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.stats().pending || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.stats().paid || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(23, 3, ctx_r0.stats().total_pending_amount, "INR", "symbol", "1.0-0"));
  }
}
function ClientChallanListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading challans...");
    \u0275\u0275elementEnd()();
  }
}
function ClientChallanListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275text(2, "\u{1F697}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No challans found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "You haven't checked for any challans yet or you don't have any pending challans.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 3);
    \u0275\u0275text(8, "Check for Challans");
    \u0275\u0275elementEnd()();
  }
}
function ClientChallanListComponent_div_12_div_1_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function ClientChallanListComponent_div_12_div_1_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const challan_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.payChallan(challan_r3));
    });
    \u0275\u0275text(1, " Pay Now ");
    \u0275\u0275elementEnd();
  }
}
function ClientChallanListComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 27);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 28)(11, "div", 29)(12, "h4");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 30)(17, "div", 31)(18, "span", 32);
    \u0275\u0275text(19, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 33);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 31)(24, "span", 32);
    \u0275\u0275text(25, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 33);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 31)(29, "span", 32);
    \u0275\u0275text(30, "Fine Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 34);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "currency");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 35)(35, "a", 36);
    \u0275\u0275text(36, "View Details");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, ClientChallanListComponent_div_12_div_1_button_37_Template, 2, 0, "button", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const challan_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(challan_r3.challan_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(challan_r3.vehicle_number);
    \u0275\u0275advance();
    \u0275\u0275classMap("status-" + challan_r3.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 12, challan_r3.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(challan_r3.violation_type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(challan_r3.violation_description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 14, challan_r3.violation_date, "mediumDate"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(challan_r3.location);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(33, 17, challan_r3.fine_amount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c0, challan_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", challan_r3.status === "pending");
  }
}
function ClientChallanListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, ClientChallanListComponent_div_12_div_1_Template, 38, 24, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.challans());
  }
}
var ClientChallanListComponent = class _ClientChallanListComponent {
  challanService;
  toast;
  challans = signal([]);
  stats = signal(null);
  loading = signal(true);
  constructor(challanService, toast) {
    this.challanService = challanService;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadChallans();
    this.loadStats();
  }
  loadChallans() {
    this.loading.set(true);
    this.challanService.getChallans().subscribe({
      next: (response) => {
        this.challans.set(response.data || response.challans || []);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  loadStats() {
    this.challanService.getChallanStats().subscribe({
      next: (response) => {
        this.stats.set(response.data || response.stats || response);
      }
    });
  }
  payChallan(challan) {
    this.toast.info("Payment flow coming soon!");
  }
  static \u0275fac = function ClientChallanListComponent_Factory(t) {
    return new (t || _ClientChallanListComponent)(\u0275\u0275directiveInject(ChallanService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientChallanListComponent, selectors: [["app-client-challan-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 4, consts: [[1, "challans-container"], [1, "page-header"], [1, "header-content"], ["routerLink", "/client/traffic-challan/check", 1, "btn-primary"], ["class", "stats-grid", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "challans-list", 4, "ngIf"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "pending-icon"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", "paid-icon"], [1, "stat-icon", "amount-icon"], [1, "loading"], [1, "spinner"], [1, "empty-state"], [1, "empty-icon"], [1, "challans-list"], ["class", "challan-card", 4, "ngFor", "ngForOf"], [1, "challan-card"], [1, "challan-header"], [1, "challan-info"], [1, "challan-number"], [1, "vehicle-number"], [1, "status-badge"], [1, "challan-body"], [1, "violation-info"], [1, "challan-details"], [1, "detail-item"], [1, "label"], [1, "value"], [1, "value", "amount"], [1, "challan-footer"], [1, "btn-outline", 3, "routerLink"], ["class", "btn-primary", 3, "click", 4, "ngIf"], [1, "btn-primary", 3, "click"]], template: function ClientChallanListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Traffic Challans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "View and pay your pending traffic challans");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 3);
      \u0275\u0275text(8, " Check Challans ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ClientChallanListComponent_div_9_Template, 26, 8, "div", 4)(10, ClientChallanListComponent_div_10_Template, 4, 0, "div", 5)(11, ClientChallanListComponent_div_11_Template, 9, 0, "div", 6)(12, ClientChallanListComponent_div_12_Template, 2, 1, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.stats());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.challans().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.challans().length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe, CurrencyPipe, DatePipe, RouterModule, RouterLink], styles: ["\n\n.challans-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  text-decoration: none;\n  font-weight: 500;\n  cursor: pointer;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 640px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n.pending-icon[_ngcontent-%COMP%] {\n  background: #fef3c7;\n}\n.paid-icon[_ngcontent-%COMP%] {\n  background: #d1fae5;\n}\n.amount-icon[_ngcontent-%COMP%] {\n  background: #dbeafe;\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0 0 24px;\n}\n.challans-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.challan-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.challan-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.challan-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.challan-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.vehicle-number[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  background: #e5e7eb;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-paid[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-disputed[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.challan-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.violation-info[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.violation-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 4px;\n}\n.violation-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n}\n.challan-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n@media (max-width: 640px) {\n  .challan-details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n.detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1a1a1a;\n}\n.detail-item[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #dc3545;\n}\n.challan-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 16px 20px;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  color: #444;\n  border-radius: 6px;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientChallanListComponent, { className: "ClientChallanListComponent", filePath: "src\\app\\features\\client\\traffic-challan\\challan-list.component.ts", lineNumber: 362 });
})();
export {
  ClientChallanListComponent
};
