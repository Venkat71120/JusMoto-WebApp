import {
  OrderService
} from "./chunk-T324PFDX.js";
import "./chunk-XSC2IEYW.js";
import "./chunk-GUDC7RY7.js";
import {
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
  TitleCasePipe,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/client/refunds/refund-list.component.ts
var _c0 = (a0) => ["/client/orders", a0];
function RefundListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading refunds...");
    \u0275\u0275elementEnd()();
  }
}
function RefundListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No refunds found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "You don't have any refund requests yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 9);
    \u0275\u0275text(8, "View Orders");
    \u0275\u0275elementEnd()();
  }
}
function RefundListComponent_div_8_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, " Order: ");
    \u0275\u0275elementStart(2, "a", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const refund_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, refund_r1.order.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", refund_r1.order.order_number, "");
  }
}
function RefundListComponent_div_8_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span");
    \u0275\u0275text(2, "Processed On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const refund_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, refund_r1.processed_at, "mediumDate"));
  }
}
function RefundListComponent_div_8_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span");
    \u0275\u0275text(2, "Refund Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const refund_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, refund_r1.refund_method));
  }
}
function RefundListComponent_div_8_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "strong");
    \u0275\u0275text(2, "Admin Remarks:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const refund_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(refund_r1.admin_remarks);
  }
}
function RefundListComponent_div_8_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275element(2, "div", 31);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Request Submitted");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275element(6, "div", 31);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Under Review");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 30);
    \u0275\u0275element(10, "div", 31);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Approved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 30);
    \u0275\u0275element(14, "div", 31);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Refund Processed");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const refund_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("completed", true);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("completed", refund_r1.status !== "pending");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("completed", refund_r1.status === "approved" || refund_r1.status === "completed");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("completed", refund_r1.status === "completed");
  }
}
function RefundListComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, RefundListComponent_div_8_div_1_span_5_Template, 4, 4, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 17);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 18)(10, "div", 19)(11, "span", 20);
    \u0275\u0275text(12, "Refund Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 21)(17, "div", 22)(18, "span");
    \u0275\u0275text(19, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 22)(23, "span");
    \u0275\u0275text(24, "Requested On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, RefundListComponent_div_8_div_1_div_28_Template, 6, 4, "div", 23)(29, RefundListComponent_div_8_div_1_div_29_Template, 6, 3, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, RefundListComponent_div_8_div_1_div_30_Template, 5, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, RefundListComponent_div_8_div_1_div_31_Template, 17, 8, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const refund_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", refund_r1.refund_number || refund_r1.id, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", refund_r1.order);
    \u0275\u0275advance();
    \u0275\u0275classMap("status-" + refund_r1.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 12, refund_r1.status), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(15, 14, refund_r1.amount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(refund_r1.reason);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 19, refund_r1.created_at, "mediumDate"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", refund_r1.processed_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", refund_r1.refund_method);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", refund_r1.admin_remarks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", refund_r1.status === "approved" || refund_r1.status === "processing");
  }
}
function RefundListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, RefundListComponent_div_8_div_1_Template, 32, 22, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.refunds());
  }
}
var RefundListComponent = class _RefundListComponent {
  orderService;
  refunds = signal([]);
  loading = signal(true);
  constructor(orderService) {
    this.orderService = orderService;
  }
  ngOnInit() {
    this.loadRefunds();
  }
  loadRefunds() {
    this.loading.set(true);
    this.orderService.getRefunds().subscribe({
      next: (response) => {
        this.refunds.set(response.data || response.refunds || []);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function RefundListComponent_Factory(t) {
    return new (t || _RefundListComponent)(\u0275\u0275directiveInject(OrderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RefundListComponent, selectors: [["app-refund-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [[1, "refunds-container"], [1, "page-header"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "refunds-list", 4, "ngIf"], [1, "loading"], [1, "spinner"], [1, "empty-state"], [1, "empty-icon"], ["routerLink", "/client/orders", 1, "btn-primary"], [1, "refunds-list"], ["class", "refund-card", 4, "ngFor", "ngForOf"], [1, "refund-card"], [1, "refund-header"], [1, "refund-info"], [1, "refund-id"], ["class", "order-link", 4, "ngIf"], [1, "status-badge"], [1, "refund-body"], [1, "refund-amount"], [1, "label"], [1, "refund-details"], [1, "detail-row"], ["class", "detail-row", 4, "ngIf"], ["class", "admin-remarks", 4, "ngIf"], ["class", "refund-timeline", 4, "ngIf"], [1, "order-link"], [3, "routerLink"], [1, "admin-remarks"], [1, "refund-timeline"], [1, "timeline-step"], [1, "step-dot"]], template: function RefundListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "My Refunds");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Track the status of your refund requests");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, RefundListComponent_div_6_Template, 4, 0, "div", 2)(7, RefundListComponent_div_7_Template, 9, 0, "div", 3)(8, RefundListComponent_div_8_Template, 2, 1, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.refunds().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.refunds().length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe, CurrencyPipe, DatePipe, RouterModule, RouterLink], styles: ['\n\n.refunds-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #0066cc;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0 0 24px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #0066cc;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  text-decoration: none;\n  font-weight: 500;\n}\n.refunds-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.refund-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.refund-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.refund-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.refund-id[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.order-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n.order-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0066cc;\n  text-decoration: none;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-processing[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.status-approved[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-rejected[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.refund-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.refund-amount[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.refund-amount[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n}\n.refund-amount[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #065f46;\n}\n.refund-details[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #666;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #1a1a1a;\n}\n.admin-remarks[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px;\n  background: #f9fafb;\n  border-radius: 8px;\n}\n.admin-remarks[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #444;\n}\n.admin-remarks[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-size: 14px;\n  color: #666;\n}\n.refund-timeline[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.timeline-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  position: relative;\n}\n.timeline-step[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 8px;\n  left: 50%;\n  width: 100%;\n  height: 2px;\n  background: #e5e7eb;\n}\n.timeline-step[_ngcontent-%COMP%]:last-child::before {\n  display: none;\n}\n.timeline-step.completed[_ngcontent-%COMP%]::before {\n  background: #0066cc;\n}\n.step-dot[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #e5e7eb;\n  position: relative;\n  z-index: 1;\n}\n.timeline-step.completed[_ngcontent-%COMP%]   .step-dot[_ngcontent-%COMP%] {\n  background: #0066cc;\n}\n.timeline-step[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  text-align: center;\n}\n.timeline-step.completed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0066cc;\n}\n/*# sourceMappingURL=refund-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RefundListComponent, { className: "RefundListComponent", filePath: "src\\app\\features\\client\\refunds\\refund-list.component.ts", lineNumber: 346 });
})();
export {
  RefundListComponent
};
//# sourceMappingURL=chunk-2RZ6XGIQ.js.map
