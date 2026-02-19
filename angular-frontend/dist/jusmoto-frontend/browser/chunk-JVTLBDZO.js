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
  DatePipe,
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

// src/app/features/admin/cars/car-list.component.ts
var _c0 = (a0) => ["/admin/car/edit-car", a0];
function CarListComponent_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r1 = ctx.$implicit;
    \u0275\u0275property("value", b_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r1.name);
  }
}
function CarListComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementEnd();
  }
}
function CarListComponent_tr_35_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 39);
  }
  if (rf & 2) {
    const car_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", car_r3.image, \u0275\u0275sanitizeUrl);
  }
}
function CarListComponent_tr_35_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function CarListComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275template(4, CarListComponent_tr_35_img_4_Template, 1, 1, "img", 24)(5, CarListComponent_tr_35_span_5_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "button", 27);
    \u0275\u0275listener("click", function CarListComponent_tr_35_Template_button_click_13_listener() {
      const car_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openStatusModal(car_r3));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "div", 28)(17, "button", 29);
    \u0275\u0275listener("click", function CarListComponent_tr_35_Template_button_click_17_listener() {
      const car_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openViewModal(car_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 30);
    \u0275\u0275element(19, "path", 31)(20, "circle", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "a", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 30);
    \u0275\u0275element(23, "path", 34)(24, "path", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "button", 36);
    \u0275\u0275listener("click", function CarListComponent_tr_35_Template_button_click_25_listener() {
      const car_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openDeleteModal(car_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 30);
    \u0275\u0275element(27, "polyline", 37)(28, "path", 38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const car_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r3.pagination().page - 1) * ctx_r3.pagination().limit + i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", car_r3.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !car_r3.image);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((car_r3.brand == null ? null : car_r3.brand.name) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(car_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(car_r3.Year || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-active", car_r3.status)("badge-inactive", !car_r3.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", car_r3.status ? "Active" : "Inactive", " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, car_r3.id));
  }
}
function CarListComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 41);
    \u0275\u0275text(2, "No cars found");
    \u0275\u0275elementEnd()();
  }
}
function CarListComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "button", 43);
    \u0275\u0275listener("click", function CarListComponent_div_37_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToPage(ctx_r3.pagination().page - 1));
    });
    \u0275\u0275text(2, "\xAB Prev");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 43);
    \u0275\u0275listener("click", function CarListComponent_div_37_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToPage(ctx_r3.pagination().page + 1));
    });
    \u0275\u0275text(6, "Next \xBB");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r3.pagination().hasPrevPage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r3.pagination().page, " of ", ctx_r3.pagination().totalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r3.pagination().hasNextPage);
  }
}
function CarListComponent_div_38_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "img", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", (tmp_2_0 = ctx_r3.viewCar()) == null ? null : tmp_2_0.image, \u0275\u0275sanitizeUrl);
  }
}
function CarListComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function CarListComponent_div_38_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewCar.set(null));
    });
    \u0275\u0275elementStart(1, "div", 46);
    \u0275\u0275listener("click", function CarListComponent_div_38_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 47)(3, "h3");
    \u0275\u0275text(4, "Car Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 48);
    \u0275\u0275listener("click", function CarListComponent_div_38_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewCar.set(null));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 49);
    \u0275\u0275template(8, CarListComponent_div_38_div_8_Template, 2, 1, "div", 50);
    \u0275\u0275elementStart(9, "div", 51)(10, "div", 52)(11, "label");
    \u0275\u0275text(12, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 52)(16, "label");
    \u0275\u0275text(17, "Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 52)(21, "label");
    \u0275\u0275text(22, "Car Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 26);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 52)(26, "label");
    \u0275\u0275text(27, "Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 52)(31, "label");
    \u0275\u0275text(32, "Slug");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 52)(36, "label");
    \u0275\u0275text(37, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 53);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 52)(41, "label");
    \u0275\u0275text(42, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 52)(47, "label");
    \u0275\u0275text(48, "Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "date");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r3.viewCar()) == null ? null : tmp_1_0.image);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r3.viewCar()) == null ? null : tmp_2_0.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_3_0 = ctx_r3.viewCar()) == null ? null : tmp_3_0.brand == null ? null : tmp_3_0.brand.name) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r3.viewCar()) == null ? null : tmp_4_0.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_5_0 = ctx_r3.viewCar()) == null ? null : tmp_5_0.Year) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_6_0 = ctx_r3.viewCar()) == null ? null : tmp_6_0.slug) || "-");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("badge-active", (tmp_7_0 = ctx_r3.viewCar()) == null ? null : tmp_7_0.status)("badge-inactive", !((tmp_8_0 = ctx_r3.viewCar()) == null ? null : tmp_8_0.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_9_0 = ctx_r3.viewCar()) == null ? null : tmp_9_0.status) ? "Active" : "Inactive", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 13, (tmp_10_0 = ctx_r3.viewCar()) == null ? null : tmp_10_0.created_at, "medium"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 16, (tmp_11_0 = ctx_r3.viewCar()) == null ? null : tmp_11_0.updated_at, "medium"));
  }
}
var CarListComponent = class _CarListComponent {
  http;
  toast;
  cars = signal([]);
  brands = signal([]);
  loading = signal(false);
  search = "";
  brandFilter = "";
  pagination = signal({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  viewCar = signal(null);
  statusCar = signal(null);
  deletingCar = signal(null);
  searchTimeout;
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadBrands();
    this.loadCars();
  }
  loadBrands() {
    this.http.get(`${environment.apiUrl}/admin/brands`).subscribe({
      next: (res) => this.brands.set(res.data || [])
    });
  }
  loadCars(page = 1) {
    this.loading.set(true);
    const params = { page, limit: 15 };
    if (this.search)
      params.search = this.search;
    if (this.brandFilter)
      params.brand_id = this.brandFilter;
    this.http.get(`${environment.apiUrl}/admin/cars`, { params }).subscribe({
      next: (res) => {
        this.cars.set(res.data || []);
        this.pagination.set(res.pagination || {});
      },
      error: () => this.toast.error("Failed to load cars"),
      complete: () => this.loading.set(false)
    });
  }
  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadCars(), 400);
  }
  goToPage(page) {
    this.loadCars(page);
  }
  openViewModal(car) {
    this.viewCar.set(car);
  }
  openStatusModal(car) {
    this.statusCar.set(car);
  }
  confirmStatusChange() {
    const car = this.statusCar();
    if (!car)
      return;
    const newStatus = car.status ? 0 : 1;
    this.http.put(`${environment.apiUrl}/admin/cars/${car.id}`, { status: newStatus }).subscribe({
      next: () => {
        car.status = newStatus;
        this.toast.success(`Car ${newStatus ? "activated" : "deactivated"} successfully`);
        this.statusCar.set(null);
      },
      error: () => {
        this.toast.error("Failed to update status");
        this.statusCar.set(null);
      }
    });
  }
  openDeleteModal(car) {
    this.deletingCar.set(car);
  }
  confirmDelete() {
    const car = this.deletingCar();
    if (!car)
      return;
    this.http.delete(`${environment.apiUrl}/admin/cars/${car.id}`).subscribe({
      next: () => {
        this.toast.success("Car deleted successfully");
        this.deletingCar.set(null);
        this.loadCars(this.pagination().page);
      },
      error: () => {
        this.toast.error("Failed to delete car");
        this.deletingCar.set(null);
      }
    });
  }
  static \u0275fac = function CarListComponent_Factory(t) {
    return new (t || _CarListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CarListComponent, selectors: [["app-car-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 15, consts: [[1, "page-header"], [1, "page-title"], ["routerLink", "/admin/car/add", 1, "btn-primary"], [1, "filters-bar"], [1, "search-box"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#94a3b8", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search cars...", 3, "ngModelChange", "input", "ngModel"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [3, "confirmed", "cancelled", "open", "title", "message", "confirmText", "type"], ["title", "Delete Car", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], [3, "value"], [1, "loading-overlay"], [1, "spinner"], ["class", "thumb", "alt", "", 3, "src", 4, "ngIf"], ["class", "no-img", 4, "ngIf"], [1, "fw-600"], [1, "badge", "badge-clickable", 3, "click"], [1, "action-btns"], ["title", "View", 1, "btn-action", "btn-view", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["title", "Edit", 1, "btn-action", "btn-edit", 3, "routerLink"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Delete", 1, "btn-action", "btn-delete", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], ["alt", "", 1, "thumb", 3, "src"], [1, "no-img"], ["colspan", "7", 1, "empty-state"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"], [1, "modal-overlay", 3, "click"], [1, "view-modal", 3, "click"], [1, "view-header"], [1, "modal-close", 3, "click"], [1, "view-body"], ["class", "view-image", 4, "ngIf"], [1, "view-grid"], [1, "view-item"], [1, "badge"], [1, "view-image"], ["alt", "Car image", 3, "src"]], template: function CarListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Cars");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 2);
      \u0275\u0275text(4, "+ Add Car");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 5);
      \u0275\u0275element(8, "circle", 6)(9, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function CarListComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function CarListComponent_Template_input_input_10_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function CarListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.brandFilter, $event) || (ctx.brandFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function CarListComponent_Template_select_change_11_listener() {
        return ctx.loadCars();
      });
      \u0275\u0275elementStart(12, "option", 10);
      \u0275\u0275text(13, "All Brands");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, CarListComponent_option_14_Template, 2, 2, "option", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275template(16, CarListComponent_div_16_Template, 2, 0, "div", 13);
      \u0275\u0275elementStart(17, "table", 14)(18, "thead")(19, "tr")(20, "th");
      \u0275\u0275text(21, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Car Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Year");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "tbody");
      \u0275\u0275template(35, CarListComponent_tr_35_Template, 29, 14, "tr", 15)(36, CarListComponent_tr_36_Template, 3, 0, "tr", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(37, CarListComponent_div_37_Template, 7, 4, "div", 17)(38, CarListComponent_div_38_Template, 52, 19, "div", 18);
      \u0275\u0275elementStart(39, "app-confirm-modal", 19);
      \u0275\u0275listener("confirmed", function CarListComponent_Template_app_confirm_modal_confirmed_39_listener() {
        return ctx.confirmStatusChange();
      })("cancelled", function CarListComponent_Template_app_confirm_modal_cancelled_39_listener() {
        return ctx.statusCar.set(null);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "app-confirm-modal", 20);
      \u0275\u0275listener("confirmed", function CarListComponent_Template_app_confirm_modal_confirmed_40_listener() {
        return ctx.confirmDelete();
      })("cancelled", function CarListComponent_Template_app_confirm_modal_cancelled_40_listener() {
        return ctx.deletingCar.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_14_0;
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.brandFilter);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.brands());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.cars());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cars().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pagination().totalPages > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewCar());
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.statusCar())("title", ((tmp_9_0 = ctx.statusCar()) == null ? null : tmp_9_0.status) ? "Deactivate Car" : "Activate Car")("message", "Are you sure you want to " + (((tmp_10_0 = ctx.statusCar()) == null ? null : tmp_10_0.status) ? "deactivate" : "activate") + ' "' + (((tmp_10_0 = ctx.statusCar()) == null ? null : tmp_10_0.name) || "") + '"?')("confirmText", ((tmp_11_0 = ctx.statusCar()) == null ? null : tmp_11_0.status) ? "Deactivate" : "Activate")("type", ((tmp_12_0 = ctx.statusCar()) == null ? null : tmp_12_0.status) ? "warning" : "info");
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingCar())("message", 'Are you sure you want to delete "' + (((tmp_14_0 = ctx.deletingCar()) == null ? null : tmp_14_0.name) || "") + '"? This action cannot be undone.');
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 0 14px;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  width: 100%;\n  font-size: 14px;\n}\n.filters-bar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 14px;\n  cursor: pointer;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-top: 1px solid #f1f5f9;\n  font-size: 14px;\n  color: #334155;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.thumb[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  object-fit: cover;\n}\n.no-img[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.fw-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  border: none;\n}\n.badge-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.badge-clickable[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.badge-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.2s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n}\n.btn-view[_ngcontent-%COMP%]:hover {\n  color: #8b5cf6;\n  border-color: #8b5cf6;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  color: #3b82f6;\n  border-color: #3b82f6;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  border-color: #ef4444;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 20px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 500;\n  color: #334155;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9998;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.view-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  width: 90vw;\n  max-width: 560px;\n  max-height: 85vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.view-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.view-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 28px;\n  cursor: pointer;\n  color: #64748b;\n  line-height: 1;\n}\n.view-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.view-image[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n}\n.view-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 200px;\n  border-radius: 12px;\n  object-fit: cover;\n}\n.view-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.view-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.view-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.view-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #334155;\n}\n@media (max-width: 768px) {\n  .table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .view-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=car-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CarListComponent, { className: "CarListComponent", filePath: "src\\app\\features\\admin\\cars\\car-list.component.ts", lineNumber: 188 });
})();
export {
  CarListComponent
};
//# sourceMappingURL=chunk-JVTLBDZO.js.map
