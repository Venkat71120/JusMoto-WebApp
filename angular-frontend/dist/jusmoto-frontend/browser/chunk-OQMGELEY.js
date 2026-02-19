import {
  ToastService
} from "./chunk-JBYXSY66.js";
import {
  environment
} from "./chunk-GUDC7RY7.js";
import {
  HttpClient
} from "./chunk-7QXR32YF.js";
import {
  CommonModule,
  DecimalPipe,
  NgClass,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/admin/reports/order-report.component.ts
function OrderReportComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function OrderReportComponent_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "status-" + row_r1.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusLabel(row_r1.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(8, 4, row_r1.total_amount, "1.0-0"), "");
  }
}
function OrderReportComponent_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 12);
    \u0275\u0275text(2, "No data available");
    \u0275\u0275elementEnd()();
  }
}
function OrderReportComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
    \u0275\u0275text(3, "Total Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "div", 15);
    \u0275\u0275text(8, "Total Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.totalCount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(11, 2, ctx_r1.totalAmount(), "1.0-0"), "");
  }
}
var OrderReportComponent = class _OrderReportComponent {
  http;
  toast;
  report = signal([]);
  loading = signal(false);
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadReport();
  }
  totalCount() {
    return this.report().reduce((s, r) => s + Number(r.count), 0);
  }
  totalAmount() {
    return this.report().reduce((s, r) => s + Number(r.total_amount), 0);
  }
  getStatusLabel(status) {
    const labels = { 0: "Pending", 1: "Confirmed", 2: "In Progress", 3: "Completed", 4: "Cancelled" };
    return labels[status] || "Unknown";
  }
  loadReport() {
    this.loading.set(true);
    this.http.get(`${environment.apiUrl}/admin/reports/orders`).subscribe({
      next: (res) => this.report.set(res.data || []),
      error: () => this.toast.error("Failed to load report"),
      complete: () => this.loading.set(false)
    });
  }
  static \u0275fac = function OrderReportComponent_Factory(t) {
    return new (t || _OrderReportComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderReportComponent, selectors: [["app-order-report"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 4, consts: [[1, "page-header"], [1, "page-title"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "summary-cards", 4, "ngIf"], [1, "loading-overlay"], [1, "spinner"], [1, "status-badge", 3, "ngClass"], [1, "fw-600"], ["colspan", "3", 1, "empty-state"], [1, "summary-cards"], [1, "stat-card"], [1, "stat-label"], [1, "stat-value"]], template: function OrderReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Order Status Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275template(4, OrderReportComponent_div_4_Template, 2, 0, "div", 3);
      \u0275\u0275elementStart(5, "table", 4)(6, "thead")(7, "tr")(8, "th");
      \u0275\u0275text(9, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "th");
      \u0275\u0275text(11, "Count");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th");
      \u0275\u0275text(13, "Total Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "tbody");
      \u0275\u0275template(15, OrderReportComponent_tr_15_Template, 9, 7, "tr", 5)(16, OrderReportComponent_tr_16_Template, 3, 0, "tr", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(17, OrderReportComponent_div_17_Template, 12, 5, "div", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.report());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.report().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.report().length > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e5e7eb;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.fw-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-0[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-1[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.status-2[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-3[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.status-4[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}\n/*# sourceMappingURL=order-report.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderReportComponent, { className: "OrderReportComponent", filePath: "src\\app\\features\\admin\\reports\\order-report.component.ts", lineNumber: 75 });
})();
export {
  OrderReportComponent
};
//# sourceMappingURL=chunk-OQMGELEY.js.map
