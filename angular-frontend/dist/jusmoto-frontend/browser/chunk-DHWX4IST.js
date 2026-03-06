import {
  ToastService
} from "./chunk-CUQ723YT.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-5WG63XSG.js";
import {
  environment
} from "./chunk-YVMT3HBM.js";
import {
  HttpClient
} from "./chunk-NM77QJY5.js";
import {
  CommonModule,
  DecimalPipe,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/admin/reports/revenue-report.component.ts
function RevenueReportComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    \u0275\u0275text(3, "Total Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 18)(7, "div", 19);
    \u0275\u0275text(8, "Total Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 20);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 18)(13, "div", 19);
    \u0275\u0275text(14, "Paid Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 20);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalOrders());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(11, 3, ctx_r0.totalRevenue(), "1.0-0"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(17, 6, ctx_r0.paidRevenue(), "1.0-0"), "");
  }
}
function RevenueReportComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275elementEnd();
  }
}
function RevenueReportComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.period);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.order_count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(7, 4, row_r2.total_revenue, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(10, 7, row_r2.paid_revenue, "1.0-0"), "");
  }
}
function RevenueReportComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2, "No data. Select date range and click Generate.");
    \u0275\u0275elementEnd()();
  }
}
var RevenueReportComponent = class _RevenueReportComponent {
  http;
  toast;
  report = signal([]);
  loading = signal(false);
  fromDate = "";
  toDate = "";
  groupBy = "day";
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    const now = /* @__PURE__ */ new Date();
    this.toDate = now.toISOString().split("T")[0];
    const from = new Date(now.getFullYear(), now.getMonth(), 1);
    this.fromDate = from.toISOString().split("T")[0];
    this.loadReport();
  }
  totalOrders() {
    return this.report().reduce((s, r) => s + Number(r.order_count), 0);
  }
  totalRevenue() {
    return this.report().reduce((s, r) => s + Number(r.total_revenue), 0);
  }
  paidRevenue() {
    return this.report().reduce((s, r) => s + Number(r.paid_revenue), 0);
  }
  loadReport() {
    this.loading.set(true);
    const params = { group_by: this.groupBy };
    if (this.fromDate)
      params.from = this.fromDate;
    if (this.toDate)
      params.to = this.toDate;
    this.http.get(`${environment.apiUrl}/admin/reports/revenue`, { params }).subscribe({
      next: (res) => this.report.set(res.data || []),
      error: () => this.toast.error("Failed to load report"),
      complete: () => this.loading.set(false)
    });
  }
  static \u0275fac = function RevenueReportComponent_Factory(t) {
    return new (t || _RevenueReportComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RevenueReportComponent, selectors: [["app-revenue-report"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 7, consts: [[1, "page-header"], [1, "page-title"], [1, "filters-card"], [1, "filter-row"], [1, "filter-group"], ["type", "date", 1, "filter-input", 3, "ngModelChange", "ngModel"], [1, "filter-input", 3, "ngModelChange", "ngModel"], ["value", "day"], ["value", "week"], ["value", "month"], [1, "btn-primary", 3, "click"], ["class", "summary-cards", 4, "ngIf"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "summary-cards"], [1, "stat-card"], [1, "stat-label"], [1, "stat-value"], [1, "loading-overlay"], [1, "spinner"], [1, "fw-600"], ["colspan", "4", 1, "empty-state"]], template: function RevenueReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Revenue Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "label");
      \u0275\u0275text(7, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function RevenueReportComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "label");
      \u0275\u0275text(11, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function RevenueReportComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 4)(14, "label");
      \u0275\u0275text(15, "Group By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function RevenueReportComponent_Template_select_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.groupBy, $event) || (ctx.groupBy = $event);
        return $event;
      });
      \u0275\u0275elementStart(17, "option", 7);
      \u0275\u0275text(18, "Day");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 8);
      \u0275\u0275text(20, "Week");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 9);
      \u0275\u0275text(22, "Month");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "button", 10);
      \u0275\u0275listener("click", function RevenueReportComponent_Template_button_click_23_listener() {
        return ctx.loadReport();
      });
      \u0275\u0275text(24, "Generate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(25, RevenueReportComponent_div_25_Template, 18, 9, "div", 11);
      \u0275\u0275elementStart(26, "div", 12);
      \u0275\u0275template(27, RevenueReportComponent_div_27_Template, 2, 0, "div", 13);
      \u0275\u0275elementStart(28, "table", 14)(29, "thead")(30, "tr")(31, "th");
      \u0275\u0275text(32, "Period");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Total Revenue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38, "Paid Revenue");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "tbody");
      \u0275\u0275template(40, RevenueReportComponent_tr_40_Template, 11, 10, "tr", 15)(41, RevenueReportComponent_tr_41_Template, 3, 0, "tr", 16);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.groupBy);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.report().length > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(13);
      \u0275\u0275property("ngForOf", ctx.report());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.report().length === 0 && !ctx.loading());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.filters-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.filter-input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.filter-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n  height: fit-content;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e5e7eb;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.fw-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RevenueReportComponent, { className: "RevenueReportComponent", filePath: "src\\app\\features\\admin\\reports\\revenue-report.component.ts", lineNumber: 106 });
})();
export {
  RevenueReportComponent
};
