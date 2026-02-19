import {
  ConfirmModalComponent
} from "./chunk-GESQI7FA.js";
import {
  ToastService
} from "./chunk-W5W6PSRW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBAOAUH3.js";
import {
  environment
} from "./chunk-OW254BTU.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-DYL6AOBP.js";
import {
  HttpClient
} from "./chunk-L2KTGN5G.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
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
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/admin/orders/order-list.component.ts
var _c0 = (a0) => ["/admin/orders/details", a0];
function OrderListComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function OrderListComponent_button_6_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.statusFilter = tab_r2.value;
      return \u0275\u0275resetView(ctx_r2.loadOrders());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.statusFilter === tab_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.label, " ");
  }
}
function OrderListComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementEnd();
  }
}
function OrderListComponent_tr_42_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", order_r5.user.first_name || "", " ", order_r5.user.last_name || "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.user.email);
  }
}
function OrderListComponent_tr_42_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "N/A");
    \u0275\u0275elementEnd();
  }
}
function OrderListComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, OrderListComponent_tr_42_div_6_Template, 5, 3, "div", 26)(7, OrderListComponent_tr_42_span_7_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 28);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "button", 29);
    \u0275\u0275listener("click", function OrderListComponent_tr_42_Template_button_click_12_listener() {
      const order_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.paymentOrder.set(order_r5));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "select", 30);
    \u0275\u0275listener("ngModelChange", function OrderListComponent_tr_42_Template_select_ngModelChange_15_listener($event) {
      const order_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeStatus(order_r5, $event));
    });
    \u0275\u0275elementStart(16, "option", 31);
    \u0275\u0275text(17, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 31);
    \u0275\u0275text(19, "Accepted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 31);
    \u0275\u0275text(21, "In Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 31);
    \u0275\u0275text(23, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 31);
    \u0275\u0275text(25, "Cancelled");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td")(30, "a", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 33);
    \u0275\u0275element(32, "path", 34)(33, "circle", 35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.pagination().page - 1) * ctx_r2.pagination().limit + i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.invoice_number || "#" + order_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", order_r5.user);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !order_r5.user);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(10, 19, order_r5.total, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-active", order_r5.payment_status)("badge-warning", !order_r5.payment_status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r5.payment_status ? "Paid" : "Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getStatusClass(order_r5.status))("ngModel", order_r5.status);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 22, order_r5.created_at, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(25, _c0, order_r5.id));
  }
}
function OrderListComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2, "No orders found");
    \u0275\u0275elementEnd()();
  }
}
function OrderListComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 40);
    \u0275\u0275listener("click", function OrderListComponent_div_44_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.pagination().page - 1));
    });
    \u0275\u0275text(2, "\xAB Prev");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40);
    \u0275\u0275listener("click", function OrderListComponent_div_44_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
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
var OrderListComponent = class _OrderListComponent {
  http;
  toast;
  orders = signal([]);
  loading = signal(false);
  search = "";
  statusFilter = "";
  paymentFilter = "";
  pagination = signal({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  paymentOrder = signal(null);
  searchTimeout;
  statusTabs = [
    { label: "All", value: "" },
    { label: "Pending", value: "0" },
    { label: "Accepted", value: "1" },
    { label: "In Progress", value: "2" },
    { label: "Completed", value: "3" },
    { label: "Cancelled", value: "4" }
  ];
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadOrders();
  }
  loadOrders(page = 1) {
    this.loading.set(true);
    const params = { page, limit: 15 };
    if (this.search)
      params.search = this.search;
    if (this.statusFilter)
      params.status = this.statusFilter;
    if (this.paymentFilter)
      params.payment_status = this.paymentFilter;
    this.http.get(`${environment.apiUrl}/admin/orders`, { params }).subscribe({
      next: (res) => {
        this.orders.set(res.data || []);
        this.pagination.set(res.pagination || {});
      },
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadOrders(), 400);
  }
  goToPage(page) {
    this.loadOrders(page);
  }
  changeStatus(order, newStatus) {
    this.http.put(`${environment.apiUrl}/admin/orders/${order.id}/status`, { status: +newStatus }).subscribe({
      next: () => {
        order.status = +newStatus;
        this.toast.success("Order status updated");
      },
      error: () => this.toast.error("Something went wrong")
    });
  }
  confirmTogglePayment() {
    const order = this.paymentOrder();
    if (!order)
      return;
    const newStatus = order.payment_status ? 0 : 1;
    this.http.put(`${environment.apiUrl}/admin/orders/${order.id}/payment-status`, { payment_status: newStatus }).subscribe({
      next: () => {
        order.payment_status = newStatus;
        this.toast.success("Payment status updated");
        this.paymentOrder.set(null);
      },
      error: () => {
        this.toast.error("Failed to update payment status");
        this.paymentOrder.set(null);
      }
    });
  }
  getStatusClass(status) {
    return "status-" + status;
  }
  static \u0275fac = function OrderListComponent_Factory(t) {
    return new (t || _OrderListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderListComponent, selectors: [["app-order-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 10, consts: [[1, "page-header"], [1, "page-title"], [1, "total-badge"], [1, "status-tabs"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "filters-bar"], [1, "search-box"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#94a3b8", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search by invoice, customer...", 3, "ngModelChange", "input", "ngModel"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "1"], ["value", "0"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], ["title", "Change Payment Status", "confirmText", "Confirm", "type", "warning", 3, "confirmed", "cancelled", "open", "message"], [1, "tab-btn", 3, "click"], [1, "loading-overlay"], [1, "spinner"], [1, "invoice-cell"], ["class", "customer-cell", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "amount-cell"], [1, "badge", "badge-clickable", 3, "click"], [1, "status-select", 3, "ngModelChange", "ngClass", "ngModel"], [3, "value"], ["title", "View Detail", 1, "btn-action", "btn-view", 3, "routerLink"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "customer-cell"], [1, "text-muted"], ["colspan", "8", 1, "empty-state"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function OrderListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Orders Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "span", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275template(6, OrderListComponent_button_6_Template, 2, 3, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 7);
      \u0275\u0275element(10, "circle", 8)(11, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function OrderListComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function OrderListComponent_Template_input_input_12_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function OrderListComponent_Template_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.paymentFilter, $event) || (ctx.paymentFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function OrderListComponent_Template_select_change_13_listener() {
        return ctx.loadOrders();
      });
      \u0275\u0275elementStart(14, "option", 12);
      \u0275\u0275text(15, "All Payments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 13);
      \u0275\u0275text(17, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 14);
      \u0275\u0275text(19, "Pending");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 15);
      \u0275\u0275template(21, OrderListComponent_div_21_Template, 2, 0, "div", 16);
      \u0275\u0275elementStart(22, "table", 17)(23, "thead")(24, "tr")(25, "th");
      \u0275\u0275text(26, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th");
      \u0275\u0275text(40, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "tbody");
      \u0275\u0275template(42, OrderListComponent_tr_42_Template, 34, 27, "tr", 18)(43, OrderListComponent_tr_43_Template, 3, 0, "tr", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(44, OrderListComponent_div_44_Template, 7, 4, "div", 20);
      \u0275\u0275elementStart(45, "app-confirm-modal", 21);
      \u0275\u0275listener("confirmed", function OrderListComponent_Template_app_confirm_modal_confirmed_45_listener() {
        return ctx.confirmTogglePayment();
      })("cancelled", function OrderListComponent_Template_app_confirm_modal_cancelled_45_listener() {
        return ctx.paymentOrder.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_9_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.pagination().total, " total");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.statusTabs);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.paymentFilter);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.orders());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.orders().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pagination().totalPages > 1);
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.paymentOrder())("message", "Mark order " + (((tmp_9_0 = ctx.paymentOrder()) == null ? null : tmp_9_0.invoice_number) || "#" + (((tmp_9_0 = ctx.paymentOrder()) == null ? null : tmp_9_0.id) || "")) + " as " + (((tmp_9_0 = ctx.paymentOrder()) == null ? null : tmp_9_0.payment_status) ? "Pending" : "Paid") + "?");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.total-badge[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #e31b23;\n  padding: 4px 14px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.status-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  color: #64748b;\n  transition: all 0.2s;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border-color: #e31b23;\n}\n.tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 0 14px;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  width: 100%;\n  font-size: 14px;\n}\n.filters-bar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 14px;\n  cursor: pointer;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-top: 1px solid #f1f5f9;\n  font-size: 14px;\n  color: #334155;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.invoice-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.customer-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.customer-cell[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 12px;\n}\n.amount-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  border: none;\n}\n.badge-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.badge-clickable[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.badge-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.status-select[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  background: #fff;\n}\n.status-select.status-0[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.status-select.status-1[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.status-select.status-2[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.status-select.status-3[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.status-select.status-4[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.2s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n}\n.btn-view[_ngcontent-%COMP%]:hover {\n  color: #3b82f6;\n  border-color: #3b82f6;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 20px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 500;\n  color: #334155;\n  transition: all 0.2s;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n}\n@media (max-width: 768px) {\n  .table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .data-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderListComponent, { className: "OrderListComponent", filePath: "src\\app\\features\\admin\\orders\\order-list.component.ts", lineNumber: 158 });
})();
export {
  OrderListComponent
};
