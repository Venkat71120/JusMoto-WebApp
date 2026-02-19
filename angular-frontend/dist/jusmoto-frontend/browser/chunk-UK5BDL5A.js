import {
  OrderService
} from "./chunk-BGJRSWIH.js";
import "./chunk-7JMAC63R.js";
import "./chunk-GUDC7RY7.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-CMH3GDQY.js";
import "./chunk-7QXR32YF.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/client/orders/order-list.component.ts
var _c0 = (a0) => ["/client/orders", a0];
function ClientOrderListComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ClientOrderListComponent_button_8_Template_button_click_0_listener() {
      const status_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByStatus(status_r2.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeStatus() === status_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", status_r2.label, " ");
  }
}
function ClientOrderListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading orders...");
    \u0275\u0275elementEnd()();
  }
}
function ClientOrderListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No orders found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "You haven't placed any orders yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 14);
    \u0275\u0275text(8, "Browse Services");
    \u0275\u0275elementEnd()();
  }
}
function ClientOrderListComponent_div_11_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "img", 33);
    \u0275\u0275elementStart(2, "div", 34)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", (item_r4.service == null ? null : item_r4.service.image) || "/assets/images/service-placeholder.png", \u0275\u0275sanitizeUrl)("alt", item_r4.service == null ? null : item_r4.service.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((item_r4.service == null ? null : item_r4.service.name) || "Service");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Qty: ", item_r4.quantity, "");
  }
}
function ClientOrderListComponent_div_11_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", order_r5.items.length - 2, " more items ");
  }
}
function ClientOrderListComponent_div_11_div_1_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_11_div_1_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const order_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelOrder(order_r5.id));
    });
    \u0275\u0275text(1, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function ClientOrderListComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 23)(12, "div", 24);
    \u0275\u0275template(13, ClientOrderListComponent_div_11_div_1_div_13_Template, 7, 4, "div", 25)(14, ClientOrderListComponent_div_11_div_1_div_14_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 27)(16, "div", 28)(17, "span");
    \u0275\u0275text(18, "Total Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 28)(23, "span");
    \u0275\u0275text(24, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "titlecase");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 29)(29, "a", 30);
    \u0275\u0275text(30, "View Details");
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, ClientOrderListComponent_div_11_div_1_button_31_Template, 2, 0, "button", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", order_r5.order_number || order_r5.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 13, order_r5.created_at, "mediumDate"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + order_r5.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 16, order_r5.status), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", order_r5.items == null ? null : order_r5.items.slice(0, 2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (order_r5.items == null ? null : order_r5.items.length) > 2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(21, 18, order_r5.total, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275classMap("payment-" + order_r5.payment_status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 23, order_r5.payment_status));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(25, _c0, order_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", order_r5.status === "pending");
  }
}
function ClientOrderListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, ClientOrderListComponent_div_11_div_1_Template, 32, 27, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.orders());
  }
}
function ClientOrderListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "button", 38);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() - 1));
    });
    \u0275\u0275text(2, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 38);
    \u0275\u0275listener("click", function ClientOrderListComponent_div_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() + 1));
    });
    \u0275\u0275text(6, " Next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r2.currentPage(), " of ", ctx_r2.totalPages(), "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage() === ctx_r2.totalPages());
  }
}
var ClientOrderListComponent = class _ClientOrderListComponent {
  orderService;
  orders = signal([]);
  loading = signal(true);
  activeStatus = signal("all");
  currentPage = signal(1);
  totalPages = signal(1);
  statuses = [
    { label: "All Orders", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Processing", value: "processing" },
    { label: "Completed", value: "completed" },
    { label: "Cancelled", value: "cancelled" }
  ];
  constructor(orderService) {
    this.orderService = orderService;
  }
  ngOnInit() {
    this.loadOrders();
  }
  loadOrders() {
    this.loading.set(true);
    this.orderService.getOrders({
      status: this.activeStatus() === "all" ? void 0 : this.activeStatus(),
      page: this.currentPage()
    }).subscribe({
      next: (response) => {
        this.orders.set(response.data || response.orders || []);
        this.totalPages.set(response.meta?.last_page || response.totalPages || 1);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  filterByStatus(status) {
    this.activeStatus.set(status);
    this.currentPage.set(1);
    this.loadOrders();
  }
  goToPage(page) {
    this.currentPage.set(page);
    this.loadOrders();
  }
  cancelOrder(orderId) {
    if (confirm("Are you sure you want to cancel this order?")) {
      this.orderService.cancelOrder(orderId).subscribe({
        next: () => {
          this.loadOrders();
        }
      });
    }
  }
  static \u0275fac = function ClientOrderListComponent_Factory(t) {
    return new (t || _ClientOrderListComponent)(\u0275\u0275directiveInject(OrderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientOrderListComponent, selectors: [["app-client-order-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 5, consts: [[1, "orders-container"], [1, "page-header"], [1, "filters-bar"], [1, "filter-tabs"], ["class", "filter-tab", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "orders-list", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "filter-tab", 3, "click"], [1, "loading"], [1, "spinner"], [1, "empty-state"], [1, "empty-icon"], ["routerLink", "/services", 1, "btn-primary"], [1, "orders-list"], ["class", "order-card", 4, "ngFor", "ngForOf"], [1, "order-card"], [1, "order-header"], [1, "order-info"], [1, "order-id"], [1, "order-date"], [1, "status-badge"], [1, "order-body"], [1, "order-items"], ["class", "item", 4, "ngFor", "ngForOf"], ["class", "more-items", 4, "ngIf"], [1, "order-summary"], [1, "summary-row"], [1, "order-footer"], [1, "btn-outline", 3, "routerLink"], ["class", "btn-danger", 3, "click", 4, "ngIf"], [1, "item"], [3, "src", "alt"], [1, "item-details"], [1, "more-items"], [1, "btn-danger", 3, "click"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function ClientOrderListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "My Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "View and track all your orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2)(7, "div", 3);
      \u0275\u0275template(8, ClientOrderListComponent_button_8_Template, 2, 3, "button", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ClientOrderListComponent_div_9_Template, 4, 0, "div", 5)(10, ClientOrderListComponent_div_10_Template, 9, 0, "div", 6)(11, ClientOrderListComponent_div_11_Template, 2, 1, "div", 7)(12, ClientOrderListComponent_div_12_Template, 7, 4, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.statuses);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.orders().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.orders().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages() > 1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe, CurrencyPipe, DatePipe, RouterModule, RouterLink], styles: ["\n\n.orders-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.filter-tab[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  border-radius: 20px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n.filter-tab[_ngcontent-%COMP%]:hover {\n  border-color: #0066cc;\n  color: #0066cc;\n}\n.filter-tab.active[_ngcontent-%COMP%] {\n  background: #0066cc;\n  border-color: #0066cc;\n  color: #fff;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #0066cc;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0 0 24px;\n}\n.orders-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.order-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.order-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.order-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.order-id[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.order-date[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-confirmed[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.status-processing[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #3730a3;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.order-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.order-items[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 8px;\n  object-fit: cover;\n}\n.item-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0 0 4px;\n  color: #1a1a1a;\n}\n.item-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  margin: 0;\n}\n.more-items[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #666;\n  font-size: 14px;\n}\n.order-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  padding-top: 16px;\n  border-top: 1px solid #e5e7eb;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.summary-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n}\n.summary-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #1a1a1a;\n}\n.payment-paid[_ngcontent-%COMP%] {\n  color: #065f46;\n}\n.payment-pending[_ngcontent-%COMP%] {\n  color: #92400e;\n}\n.payment-failed[_ngcontent-%COMP%] {\n  color: #991b1b;\n}\n.order-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 16px 20px;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border: 1px solid #0066cc;\n  color: #0066cc;\n  background: #fff;\n  border-radius: 6px;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #0066cc;\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #0066cc;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  text-decoration: none;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  background: #dc3545;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  margin-top: 24px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n}\n/*# sourceMappingURL=order-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientOrderListComponent, { className: "ClientOrderListComponent", filePath: "src\\app\\features\\client\\orders\\order-list.component.ts", lineNumber: 395 });
})();
export {
  ClientOrderListComponent
};
//# sourceMappingURL=chunk-UK5BDL5A.js.map
