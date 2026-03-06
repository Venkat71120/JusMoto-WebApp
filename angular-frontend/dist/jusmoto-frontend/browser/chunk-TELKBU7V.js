import {
  ConfirmModalComponent
} from "./chunk-M673IPVF.js";
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
  RouterLink,
  RouterModule
} from "./chunk-6VP7BBRC.js";
import {
  environment
} from "./chunk-YVMT3HBM.js";
import {
  HttpClient
} from "./chunk-NM77QJY5.js";
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
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

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
function OrderListComponent_tr_44_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "strong");
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
function OrderListComponent_tr_44_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "N/A");
    \u0275\u0275elementEnd();
  }
}
function OrderListComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, OrderListComponent_tr_44_div_6_Template, 5, 3, "div", 26)(7, OrderListComponent_tr_44_span_7_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 29);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "button", 30);
    \u0275\u0275listener("click", function OrderListComponent_tr_44_Template_button_click_15_listener() {
      const order_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.paymentOrder.set(order_r5));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "select", 31);
    \u0275\u0275listener("ngModelChange", function OrderListComponent_tr_44_Template_select_ngModelChange_18_listener($event) {
      const order_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeStatus(order_r5, $event));
    });
    \u0275\u0275elementStart(19, "option", 32);
    \u0275\u0275text(20, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 32);
    \u0275\u0275text(22, "Accepted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 32);
    \u0275\u0275text(24, "In Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 32);
    \u0275\u0275text(26, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 32);
    \u0275\u0275text(28, "Cancelled");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td")(33, "a", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 34);
    \u0275\u0275element(35, "path", 35)(36, "circle", 36);
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
    \u0275\u0275classProp("badge-service", ctx_r2.getOrderType(order_r5) === "service")("badge-product", ctx_r2.getOrderType(order_r5) === "product");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getOrderType(order_r5) === "service" ? "Service" : "Product", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(13, 24, order_r5.total, "1.2-2"), "");
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 27, order_r5.created_at, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(30, _c0, order_r5.id));
  }
}
function OrderListComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2, "No orders found");
    \u0275\u0275elementEnd()();
  }
}
function OrderListComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "button", 41);
    \u0275\u0275listener("click", function OrderListComponent_div_46_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.pagination().page - 1));
    });
    \u0275\u0275text(2, "\xAB Prev");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 41);
    \u0275\u0275listener("click", function OrderListComponent_div_46_Template_button_click_5_listener() {
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
  getOrderType(order) {
    const items = order.items || [];
    const hasProduct = items.some((i) => i.service?.type === 1);
    return hasProduct ? "product" : "service";
  }
  static \u0275fac = function OrderListComponent_Factory(t) {
    return new (t || _OrderListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderListComponent, selectors: [["app-order-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 10, consts: [[1, "page-header"], [1, "page-title"], [1, "total-badge"], [1, "status-tabs"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "filters-bar"], [1, "search-box"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#94a3b8", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search by invoice, customer...", 3, "ngModelChange", "input", "ngModel"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "1"], ["value", "0"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], ["title", "Change Payment Status", "confirmText", "Confirm", "type", "warning", 3, "confirmed", "cancelled", "open", "message"], [1, "tab-btn", 3, "click"], [1, "loading-overlay"], [1, "spinner"], [1, "invoice-cell"], ["class", "customer-cell", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "badge"], [1, "amount-cell"], [1, "badge", "badge-clickable", 3, "click"], [1, "status-select", 3, "ngModelChange", "ngClass", "ngModel"], [3, "value"], ["title", "View Detail", 1, "btn-action", "btn-view", 3, "routerLink"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "customer-cell"], [1, "text-muted"], ["colspan", "9", 1, "empty-state"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function OrderListComponent_Template(rf, ctx) {
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
      \u0275\u0275text(32, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th");
      \u0275\u0275text(40, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th");
      \u0275\u0275text(42, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "tbody");
      \u0275\u0275template(44, OrderListComponent_tr_44_Template, 37, 32, "tr", 18)(45, OrderListComponent_tr_45_Template, 3, 0, "tr", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(46, OrderListComponent_div_46_Template, 7, 4, "div", 20);
      \u0275\u0275elementStart(47, "app-confirm-modal", 21);
      \u0275\u0275listener("confirmed", function OrderListComponent_Template_app_confirm_modal_confirmed_47_listener() {
        return ctx.confirmTogglePayment();
      })("cancelled", function OrderListComponent_Template_app_confirm_modal_cancelled_47_listener() {
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
      \u0275\u0275advance(23);
      \u0275\u0275property("ngForOf", ctx.orders());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.orders().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pagination().totalPages > 1);
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.paymentOrder())("message", "Mark order " + (((tmp_9_0 = ctx.paymentOrder()) == null ? null : tmp_9_0.invoice_number) || "#" + (((tmp_9_0 = ctx.paymentOrder()) == null ? null : tmp_9_0.id) || "")) + " as " + (((tmp_9_0 = ctx.paymentOrder()) == null ? null : tmp_9_0.payment_status) ? "Pending" : "Paid") + "?");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: [`

.page-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}
.page-title[_ngcontent-%COMP%] {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
}
.total-badge[_ngcontent-%COMP%] {
  background: #fee2e2;
  color: #e31b23;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}
.status-tabs[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.tab-btn[_ngcontent-%COMP%] {
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  background: #fff;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  transition: all 0.2s;
}
.tab-btn.active[_ngcontent-%COMP%] {
  background: #e31b23;
  color: #fff;
  border-color: #e31b23;
}
.tab-btn[_ngcontent-%COMP%]:hover:not(.active) {
  border-color: #e31b23;
  color: #e31b23;
}
.filters-bar[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.search-box[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0 14px;
  flex: 1;
  min-width: 200px;
}
.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  border: none;
  outline: none;
  padding: 10px 0;
  width: 100%;
  font-size: 14px;
}
.filters-bar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  padding: 10px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  font-size: 14px;
  cursor: pointer;
}
.table-container[_ngcontent-%COMP%] {
  position: relative;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}
.loading-overlay[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.spinner[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border: 3px solid #f3f4f6;
  border-top-color: #e31b23;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
.data-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
}
.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  background: #f8f9fa;
  padding: 14px 16px;
  text-align: left;
  font-weight: 600;
  color: #64748b;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  border-bottom: 2px solid #e5e7eb;
}
.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 14px 16px;
  border-top: 1px solid #f1f5f9;
  font-size: 14px;
  color: #334155;
  vertical-align: middle;
}
.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  transition: background 0.15s;
}
.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background: #fff5f5;
}
.invoice-cell[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #1a1a2e;
}
.customer-cell[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.customer-cell[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  color: #94a3b8;
  font-size: 12px;
}
.amount-cell[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #1a1a2e;
}
.text-muted[_ngcontent-%COMP%] {
  color: #94a3b8;
}
.badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  border: none;
  gap: 4px;
}
.badge-clickable[_ngcontent-%COMP%] {
  cursor: pointer;
  transition: all 0.2s;
}
.badge-clickable[_ngcontent-%COMP%]:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}
.badge-active[_ngcontent-%COMP%] {
  background: #dcfce7;
  color: #16a34a;
  border: 1px solid #86efac;
}
.badge-warning[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #d97706;
  border: 1px solid #fcd34d;
}
.badge-service[_ngcontent-%COMP%] {
  background: #dbeafe;
  color: #2563eb;
}
.badge-product[_ngcontent-%COMP%] {
  background: #f3e8ff;
  color: #7c3aed;
}
.status-select[_ngcontent-%COMP%] {
  padding: 6px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  background: #fff;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 28px;
  transition: all 0.2s;
}
.status-select[_ngcontent-%COMP%]:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.status-select.status-0[_ngcontent-%COMP%] {
  color: #92400e;
  background: #fef3c7;
  border-color: #fcd34d;
}
.status-select.status-1[_ngcontent-%COMP%] {
  color: #1e40af;
  background: #dbeafe;
  border-color: #93c5fd;
}
.status-select.status-2[_ngcontent-%COMP%] {
  color: #5b21b6;
  background: #ede9fe;
  border-color: #c4b5fd;
}
.status-select.status-3[_ngcontent-%COMP%] {
  color: #065f46;
  background: #d1fae5;
  border-color: #6ee7b7;
}
.status-select.status-4[_ngcontent-%COMP%] {
  color: #991b1b;
  background: #fee2e2;
  border-color: #fca5a5;
}
.btn-action[_ngcontent-%COMP%] {
  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  color: #64748b;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.btn-view[_ngcontent-%COMP%]:hover {
  color: #e31b23;
  border-color: #e31b23;
  background: #fff5f5;
}
.empty-state[_ngcontent-%COMP%] {
  text-align: center;
  padding: 40px !important;
  color: #94a3b8;
}
.pagination[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
}
.page-btn[_ngcontent-%COMP%] {
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  font-weight: 500;
  color: #334155;
  transition: all 0.2s;
}
.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  border-color: #e31b23;
  color: #e31b23;
}
.page-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.page-info[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #64748b;
}
@media (max-width: 768px) {
  .table-container[_ngcontent-%COMP%] {
    overflow-x: auto;
  }
  .data-table[_ngcontent-%COMP%] {
    min-width: 800px;
  }
}`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderListComponent, { className: "OrderListComponent", filePath: "src\\app\\features\\admin\\orders\\order-list.component.ts", lineNumber: 168 });
})();
export {
  OrderListComponent
};
