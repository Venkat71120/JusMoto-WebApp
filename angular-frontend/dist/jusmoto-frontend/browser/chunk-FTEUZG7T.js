import {
  ToastService
} from "./chunk-JBYXSY66.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
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
  CurrencyPipe,
  DatePipe,
  NgForOf,
  NgIf,
  SlicePipe,
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
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/admin/refunded-orders/refund-list.component.ts
function RefundListComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
}
function RefundListComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 16);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 17);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 18);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "select", 19);
    \u0275\u0275listener("ngModelChange", function RefundListComponent_tr_35_Template_select_ngModelChange_20_listener($event) {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeStatus(r_r2, $event));
    });
    \u0275\u0275elementStart(21, "option", 20);
    \u0275\u0275text(22, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 20);
    \u0275\u0275text(24, "Approved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 20);
    \u0275\u0275text(26, "Rejected");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.pagination().page - 1) * ctx_r2.pagination().limit + i_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((r_r2.order == null ? null : r_r2.order.order_number) || r_r2.order_id || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((r_r2.user == null ? null : r_r2.user.name) || r_r2.customer_name || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(9, 17, r_r2.amount, "INR", "symbol", "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((r_r2.reason == null ? null : r_r2.reason.length) > 50 ? \u0275\u0275pipeBind3(12, 22, r_r2.reason, 0, 50) + "..." : r_r2.reason);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-yellow", r_r2.status === 0 || r_r2.status === "pending")("badge-green", r_r2.status === 1 || r_r2.status === "approved")("badge-red", r_r2.status === 2 || r_r2.status === "rejected");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(r_r2.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 26, r_r2.created_at, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", r_r2.status);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 2);
  }
}
function RefundListComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2, "No refunded orders found");
    \u0275\u0275elementEnd()();
  }
}
function RefundListComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23);
    \u0275\u0275listener("click", function RefundListComponent_div_37_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.pagination().page - 1));
    });
    \u0275\u0275text(2, "\xAB Prev");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function RefundListComponent_div_37_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.pagination().page + 1));
    });
    \u0275\u0275text(6, "Next \xBB");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.pagination().hasPrevPage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r2.pagination().page, " of ", ctx_r2.pagination().totalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.pagination().hasNextPage);
  }
}
var RefundListComponent = class _RefundListComponent {
  http;
  toast;
  refunds = signal([]);
  loading = signal(false);
  statusFilter = "";
  pagination = signal({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadRefunds();
  }
  loadRefunds(page = 1) {
    this.loading.set(true);
    const params = { page, limit: 15 };
    if (this.statusFilter !== "")
      params.status = this.statusFilter;
    this.http.get(`${environment.apiUrl}/admin/refunded-orders`, { params }).subscribe({
      next: (res) => {
        this.refunds.set(res.data || []);
        this.pagination.set(res.pagination || {});
      },
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  goToPage(page) {
    this.loadRefunds(page);
  }
  getStatusLabel(status) {
    const map = { 0: "Pending", 1: "Approved", 2: "Rejected", pending: "Pending", approved: "Approved", rejected: "Rejected" };
    return map[status] || "Unknown";
  }
  changeStatus(refund, newStatus) {
    this.http.put(`${environment.apiUrl}/admin/refunded-orders/${refund.id}`, { status: Number(newStatus) }).subscribe({
      next: () => {
        this.toast.success("Refund status updated");
        this.loadRefunds(this.pagination().page);
      },
      error: () => this.toast.error("Failed to update refund status")
    });
  }
  static \u0275fac = function RefundListComponent_Factory(t) {
    return new (t || _RefundListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RefundListComponent, selectors: [["app-refund-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 5, consts: [[1, "page-header"], [1, "page-title"], [1, "filters-bar"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "0"], ["value", "1"], ["value", "2"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "loading-overlay"], [1, "spinner"], [1, "fw-600"], [1, "reason-cell"], [1, "badge"], [1, "status-select", 3, "ngModelChange", "ngModel"], [3, "value"], ["colspan", "8", 1, "empty-state"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function RefundListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Refunded Orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2)(4, "select", 3);
      \u0275\u0275twoWayListener("ngModelChange", function RefundListComponent_Template_select_ngModelChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function RefundListComponent_Template_select_change_4_listener() {
        return ctx.loadRefunds();
      });
      \u0275\u0275elementStart(5, "option", 4);
      \u0275\u0275text(6, "All Statuses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "option", 5);
      \u0275\u0275text(8, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "option", 6);
      \u0275\u0275text(10, "Approved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "Rejected");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 8);
      \u0275\u0275template(14, RefundListComponent_div_14_Template, 2, 0, "div", 9);
      \u0275\u0275elementStart(15, "table", 10)(16, "thead")(17, "tr")(18, "th");
      \u0275\u0275text(19, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Order #");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Reason");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "tbody");
      \u0275\u0275template(35, RefundListComponent_tr_35_Template, 27, 29, "tr", 11)(36, RefundListComponent_tr_36_Template, 3, 0, "tr", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(37, RefundListComponent_div_37_Template, 7, 4, "div", 13);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.refunds());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.refunds().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pagination().totalPages > 1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, CurrencyPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: #fff;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e5e7eb;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.fw-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.reason-cell[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge-yellow[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.status-select[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 13px;\n  background: #fff;\n  cursor: pointer;\n}\n.status-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  align-items: center;\n  margin-top: 24px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 500;\n  color: #334155;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n}\n/*# sourceMappingURL=refund-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RefundListComponent, { className: "RefundListComponent", filePath: "src\\app\\features\\admin\\refunded-orders\\refund-list.component.ts", lineNumber: 107 });
})();
export {
  RefundListComponent
};
//# sourceMappingURL=chunk-FTEUZG7T.js.map
