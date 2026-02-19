import {
  ConfirmModalComponent
} from "./chunk-GQMX7FRF.js";
import {
  ToastService
} from "./chunk-JBYXSY66.js";
import {
  DefaultValueAccessor,
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
  RouterLink,
  RouterModule
} from "./chunk-CMH3GDQY.js";
import {
  HttpClient
} from "./chunk-7QXR32YF.js";
import {
  CommonModule,
  DecimalPipe,
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
  ɵɵsanitizeUrl,
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

// src/app/features/admin/services/service-list.component.ts
var _c0 = (a0) => ["/admin/services/edit-service", a0];
function ServiceListComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementEnd();
  }
}
function ServiceListComponent_tr_48_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 37);
  }
  if (rf & 2) {
    const svc_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", svc_r2.image, \u0275\u0275sanitizeUrl);
  }
}
function ServiceListComponent_tr_48_small_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const svc_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(svc_r2.duration);
  }
}
function ServiceListComponent_tr_48_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const svc_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(2, 1, svc_r2.discount_price, "1.0-0"), "");
  }
}
function ServiceListComponent_tr_48_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ServiceListComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 24);
    \u0275\u0275template(5, ServiceListComponent_tr_48_img_5_Template, 1, 1, "img", 25);
    \u0275\u0275elementStart(6, "div")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ServiceListComponent_tr_48_small_9_Template, 2, 1, "small", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275template(16, ServiceListComponent_tr_48_span_16_Template, 3, 4, "span", 26)(17, ServiceListComponent_tr_48_span_17_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "button", 28);
    \u0275\u0275listener("click", function ServiceListComponent_tr_48_Template_button_click_19_listener() {
      const svc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.statusService.set(svc_r2));
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "button", 28);
    \u0275\u0275listener("click", function ServiceListComponent_tr_48_Template_button_click_22_listener() {
      const svc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.featuredService.set(svc_r2));
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "div", 29)(26, "a", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 31);
    \u0275\u0275element(28, "path", 32)(29, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "button", 34);
    \u0275\u0275listener("click", function ServiceListComponent_tr_48_Template_button_click_30_listener() {
      const svc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteService(svc_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 31);
    \u0275\u0275element(32, "polyline", 35)(33, "path", 36);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const svc_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.pagination().page - 1) * ctx_r2.pagination().limit + i_r4 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", svc_r2.image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(svc_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", svc_r2.duration);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((svc_r2.category == null ? null : svc_r2.category.name) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(14, 19, svc_r2.price, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", svc_r2.discount_price);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !svc_r2.discount_price);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-active", svc_r2.status)("badge-inactive", !svc_r2.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", svc_r2.status ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-featured", svc_r2.is_featured)("badge-dim", !svc_r2.is_featured);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", svc_r2.is_featured ? "Yes" : "No", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c0, svc_r2.id));
  }
}
function ServiceListComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2, "No services found");
    \u0275\u0275elementEnd()();
  }
}
function ServiceListComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "button", 42);
    \u0275\u0275listener("click", function ServiceListComponent_div_50_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.pagination().page - 1));
    });
    \u0275\u0275text(2, "\xAB Prev");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 42);
    \u0275\u0275listener("click", function ServiceListComponent_div_50_Template_button_click_5_listener() {
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
var ServiceListComponent = class _ServiceListComponent {
  http;
  toast;
  services = signal([]);
  loading = signal(false);
  search = "";
  statusFilter = "";
  featuredFilter = "";
  pagination = signal({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  deletingService = signal(null);
  statusService = signal(null);
  featuredService = signal(null);
  searchTimeout;
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadServices();
  }
  loadServices(page = 1) {
    this.loading.set(true);
    const params = { page, limit: 15 };
    if (this.search)
      params.search = this.search;
    if (this.statusFilter)
      params.status = this.statusFilter;
    if (this.featuredFilter)
      params.is_featured = this.featuredFilter;
    this.http.get(`${environment.apiUrl}/admin/services`, { params }).subscribe({
      next: (res) => {
        this.services.set(res.data || []);
        this.pagination.set(res.pagination || {});
      },
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadServices(), 400);
  }
  goToPage(page) {
    this.loadServices(page);
  }
  confirmToggleStatus() {
    const svc = this.statusService();
    if (!svc)
      return;
    this.http.put(`${environment.apiUrl}/admin/services/${svc.id}/status`, {}).subscribe({
      next: () => {
        svc.status = svc.status ? 0 : 1;
        this.toast.success("Service status updated");
        this.statusService.set(null);
      },
      error: () => {
        this.toast.error("Failed to update status");
        this.statusService.set(null);
      }
    });
  }
  confirmToggleFeatured() {
    const svc = this.featuredService();
    if (!svc)
      return;
    this.http.put(`${environment.apiUrl}/admin/services/${svc.id}/featured`, {}).subscribe({
      next: () => {
        svc.is_featured = svc.is_featured ? 0 : 1;
        this.toast.success("Featured status updated");
        this.featuredService.set(null);
      },
      error: () => {
        this.toast.error("Failed to update featured status");
        this.featuredService.set(null);
      }
    });
  }
  deleteService(svc) {
    this.deletingService.set(svc);
  }
  confirmDelete() {
    const svc = this.deletingService();
    if (!svc)
      return;
    this.http.delete(`${environment.apiUrl}/admin/services/${svc.id}`).subscribe({
      next: () => {
        this.toast.success("Service deleted successfully");
        this.deletingService.set(null);
        this.loadServices(this.pagination().page);
      },
      error: () => {
        this.toast.error("Failed to delete service");
        this.deletingService.set(null);
      }
    });
  }
  static \u0275fac = function ServiceListComponent_Factory(t) {
    return new (t || _ServiceListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceListComponent, selectors: [["app-service-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 13, consts: [[1, "page-header"], [1, "page-title"], ["routerLink", "/admin/services/add", 1, "btn-primary"], [1, "filters-bar"], [1, "search-box"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#94a3b8", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search services...", 3, "ngModelChange", "input", "ngModel"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "1"], ["value", "0"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], ["title", "Delete Service", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], ["title", "Change Status", "confirmText", "Change Status", "type", "warning", 3, "confirmed", "cancelled", "open", "message"], ["title", "Change Featured Status", "confirmText", "Confirm", "type", "info", 3, "confirmed", "cancelled", "open", "message"], [1, "loading-overlay"], [1, "spinner"], [1, "service-cell"], ["class", "thumb", "alt", "", 3, "src", 4, "ngIf"], ["class", "text-green", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "badge", "badge-clickable", 3, "click"], [1, "action-btns"], ["title", "Edit", 1, "btn-action", "btn-edit", 3, "routerLink"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Delete", 1, "btn-action", "btn-delete", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], ["alt", "", 1, "thumb", 3, "src"], [1, "text-green"], [1, "text-muted"], ["colspan", "8", 1, "empty-state"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function ServiceListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Services Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "a", 2);
      \u0275\u0275text(5, "+ Add Service");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 5);
      \u0275\u0275element(9, "circle", 6)(10, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function ServiceListComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function ServiceListComponent_Template_input_input_11_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ServiceListComponent_Template_select_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ServiceListComponent_Template_select_change_12_listener() {
        return ctx.loadServices();
      });
      \u0275\u0275elementStart(13, "option", 10);
      \u0275\u0275text(14, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 11);
      \u0275\u0275text(16, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 12);
      \u0275\u0275text(18, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ServiceListComponent_Template_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.featuredFilter, $event) || (ctx.featuredFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ServiceListComponent_Template_select_change_19_listener() {
        return ctx.loadServices();
      });
      \u0275\u0275elementStart(20, "option", 10);
      \u0275\u0275text(21, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 11);
      \u0275\u0275text(23, "Featured");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 12);
      \u0275\u0275text(25, "Not Featured");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 13);
      \u0275\u0275template(27, ServiceListComponent_div_27_Template, 2, 0, "div", 14);
      \u0275\u0275elementStart(28, "table", 15)(29, "thead")(30, "tr")(31, "th");
      \u0275\u0275text(32, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th");
      \u0275\u0275text(40, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th");
      \u0275\u0275text(42, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th");
      \u0275\u0275text(44, "Featured");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "th");
      \u0275\u0275text(46, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "tbody");
      \u0275\u0275template(48, ServiceListComponent_tr_48_Template, 34, 24, "tr", 16)(49, ServiceListComponent_tr_49_Template, 3, 0, "tr", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(50, ServiceListComponent_div_50_Template, 7, 4, "div", 18);
      \u0275\u0275elementStart(51, "app-confirm-modal", 19);
      \u0275\u0275listener("confirmed", function ServiceListComponent_Template_app_confirm_modal_confirmed_51_listener() {
        return ctx.confirmDelete();
      })("cancelled", function ServiceListComponent_Template_app_confirm_modal_cancelled_51_listener() {
        return ctx.deletingService.set(null);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "app-confirm-modal", 20);
      \u0275\u0275listener("confirmed", function ServiceListComponent_Template_app_confirm_modal_confirmed_52_listener() {
        return ctx.confirmToggleStatus();
      })("cancelled", function ServiceListComponent_Template_app_confirm_modal_cancelled_52_listener() {
        return ctx.statusService.set(null);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "app-confirm-modal", 21);
      \u0275\u0275listener("confirmed", function ServiceListComponent_Template_app_confirm_modal_confirmed_53_listener() {
        return ctx.confirmToggleFeatured();
      })("cancelled", function ServiceListComponent_Template_app_confirm_modal_cancelled_53_listener() {
        return ctx.featuredService.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_8_0;
      let tmp_10_0;
      let tmp_12_0;
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.featuredFilter);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.services());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.services().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pagination().totalPages > 1);
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingService())("message", 'Delete "' + (((tmp_8_0 = ctx.deletingService()) == null ? null : tmp_8_0.title) || "") + '"? This cannot be undone.');
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.statusService())("message", 'Change status of "' + (((tmp_10_0 = ctx.statusService()) == null ? null : tmp_10_0.title) || "") + '" to ' + (((tmp_10_0 = ctx.statusService()) == null ? null : tmp_10_0.status) ? "Inactive" : "Active") + "?");
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.featuredService())("message", 'Mark "' + (((tmp_12_0 = ctx.featuredService()) == null ? null : tmp_12_0.title) || "") + '" as ' + (((tmp_12_0 = ctx.featuredService()) == null ? null : tmp_12_0.is_featured) ? "Not Featured" : "Featured") + "?");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n  transition: background 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 0 14px;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  width: 100%;\n  font-size: 14px;\n}\n.filters-bar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 14px;\n  cursor: pointer;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-top: 1px solid #f1f5f9;\n  font-size: 14px;\n  color: #334155;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.service-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.service-cell[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: #94a3b8;\n  font-size: 12px;\n}\n.thumb[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  object-fit: cover;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  border: none;\n}\n.badge-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.badge-clickable[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.badge-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge-featured[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge-dim[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #94a3b8;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.2s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  color: #3b82f6;\n  border-color: #3b82f6;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  border-color: #ef4444;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 20px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 500;\n  color: #334155;\n  transition: all 0.2s;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n}\n@media (max-width: 768px) {\n  .table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .data-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n}\n/*# sourceMappingURL=service-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceListComponent, { className: "ServiceListComponent", filePath: "src\\app\\features\\admin\\services\\service-list.component.ts", lineNumber: 178 });
})();
export {
  ServiceListComponent
};
//# sourceMappingURL=chunk-MDBW6XJJ.js.map
