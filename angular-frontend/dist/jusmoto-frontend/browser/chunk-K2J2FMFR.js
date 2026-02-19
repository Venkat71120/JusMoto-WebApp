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

// src/app/features/admin/sub-categories/sub-category-list.component.ts
var _c0 = (a0) => ["/admin/subcategory/edit-subcategory", a0];
function SubCategoryListComponent_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("value", cat_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r1.name);
  }
}
function SubCategoryListComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275elementEnd();
  }
}
function SubCategoryListComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "button", 25);
    \u0275\u0275listener("click", function SubCategoryListComponent_tr_33_Template_button_click_10_listener() {
      const sub_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.statusItem.set(sub_r3));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "div", 26)(14, "a", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 28);
    \u0275\u0275element(16, "path", 29)(17, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "button", 31);
    \u0275\u0275listener("click", function SubCategoryListComponent_tr_33_Template_button_click_18_listener() {
      const sub_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleStatus(sub_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 28);
    \u0275\u0275element(20, "path", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "button", 33);
    \u0275\u0275listener("click", function SubCategoryListComponent_tr_33_Template_button_click_21_listener() {
      const sub_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteSubCategory(sub_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 28);
    \u0275\u0275element(23, "polyline", 34)(24, "path", 35);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const sub_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r3.pagination().page - 1) * ctx_r3.pagination().limit + i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sub_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((sub_r3.category == null ? null : sub_r3.category.name) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sub_r3.slug);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-green", sub_r3.status)("badge-red", !sub_r3.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sub_r3.status ? "Active" : "Inactive", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, sub_r3.id));
  }
}
function SubCategoryListComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2, "No sub categories found");
    \u0275\u0275elementEnd()();
  }
}
function SubCategoryListComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "button", 38);
    \u0275\u0275listener("click", function SubCategoryListComponent_div_35_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToPage(ctx_r3.pagination().page - 1));
    });
    \u0275\u0275text(2, "\xAB Prev");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 38);
    \u0275\u0275listener("click", function SubCategoryListComponent_div_35_Template_button_click_5_listener() {
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
var SubCategoryListComponent = class _SubCategoryListComponent {
  http;
  toast;
  subCategories = signal([]);
  categories = signal([]);
  loading = signal(false);
  search = "";
  categoryFilter = "";
  pagination = signal({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  deletingItem = signal(null);
  statusItem = signal(null);
  searchTimeout;
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadCategories();
    this.loadSubCategories();
  }
  loadCategories() {
    this.http.get(`${environment.apiUrl}/admin/categories`).subscribe({
      next: (res) => this.categories.set(res.data || [])
    });
  }
  loadSubCategories(page = 1) {
    this.loading.set(true);
    const params = { page, limit: 15 };
    if (this.search)
      params.search = this.search;
    if (this.categoryFilter)
      params.category_id = this.categoryFilter;
    this.http.get(`${environment.apiUrl}/admin/sub-categories`, { params }).subscribe({
      next: (res) => {
        this.subCategories.set(res.data || []);
        this.pagination.set(res.pagination || {});
      },
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadSubCategories(), 400);
  }
  goToPage(page) {
    this.loadSubCategories(page);
  }
  toggleStatus(sub) {
    this.statusItem.set(sub);
  }
  confirmToggleStatus() {
    const sub = this.statusItem();
    if (!sub)
      return;
    this.http.put(`${environment.apiUrl}/admin/sub-categories/${sub.id}`, { status: sub.status ? 0 : 1 }).subscribe({
      next: () => {
        this.toast.success("Status updated successfully");
        this.statusItem.set(null);
        this.loadSubCategories(this.pagination().page);
      },
      error: () => {
        this.toast.error("Failed to update status");
        this.statusItem.set(null);
      }
    });
  }
  deleteSubCategory(sub) {
    this.deletingItem.set(sub);
  }
  confirmDelete() {
    const sub = this.deletingItem();
    if (!sub)
      return;
    this.http.delete(`${environment.apiUrl}/admin/sub-categories/${sub.id}`).subscribe({
      next: () => {
        this.toast.success("Sub category deleted successfully");
        this.deletingItem.set(null);
        this.loadSubCategories(this.pagination().page);
      },
      error: () => {
        this.toast.error("Failed to delete sub category");
        this.deletingItem.set(null);
      }
    });
  }
  static \u0275fac = function SubCategoryListComponent_Factory(t) {
    return new (t || _SubCategoryListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubCategoryListComponent, selectors: [["app-sub-category-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 11, consts: [[1, "page-header"], [1, "page-title"], ["routerLink", "/admin/subcategory/add-new-subcategory", 1, "btn-primary"], [1, "filters-bar"], [1, "search-box-wrap"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#94a3b8", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search sub categories...", 1, "search-box", 3, "ngModelChange", "input", "ngModel"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], ["title", "Delete Sub Category", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], ["title", "Change Status", "confirmText", "Change Status", "type", "warning", 3, "confirmed", "cancelled", "open", "message"], [3, "value"], [1, "loading-overlay"], [1, "spinner"], [1, "fw-600"], [1, "text-muted"], [1, "badge", "badge-clickable", 3, "click"], [1, "action-btns"], ["title", "Edit", 1, "action-btn", 3, "routerLink"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Toggle Status", 1, "action-btn", 3, "click"], ["d", "M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.49 8.49l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.49-8.49l2.83-2.83"], ["title", "Delete", 1, "action-btn", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], ["colspan", "6", 1, "empty-state"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function SubCategoryListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Sub Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 2);
      \u0275\u0275text(4, "+ Add Sub Category");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 5);
      \u0275\u0275element(8, "circle", 6)(9, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function SubCategoryListComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function SubCategoryListComponent_Template_input_input_10_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function SubCategoryListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.categoryFilter, $event) || (ctx.categoryFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SubCategoryListComponent_Template_select_change_11_listener() {
        return ctx.loadSubCategories();
      });
      \u0275\u0275elementStart(12, "option", 10);
      \u0275\u0275text(13, "All Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, SubCategoryListComponent_option_14_Template, 2, 2, "option", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275template(16, SubCategoryListComponent_div_16_Template, 2, 0, "div", 13);
      \u0275\u0275elementStart(17, "table", 14)(18, "thead")(19, "tr")(20, "th");
      \u0275\u0275text(21, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Parent Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Slug");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "tbody");
      \u0275\u0275template(33, SubCategoryListComponent_tr_33_Template, 25, 12, "tr", 15)(34, SubCategoryListComponent_tr_34_Template, 3, 0, "tr", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(35, SubCategoryListComponent_div_35_Template, 7, 4, "div", 17);
      \u0275\u0275elementStart(36, "app-confirm-modal", 18);
      \u0275\u0275listener("confirmed", function SubCategoryListComponent_Template_app_confirm_modal_confirmed_36_listener() {
        return ctx.confirmDelete();
      })("cancelled", function SubCategoryListComponent_Template_app_confirm_modal_cancelled_36_listener() {
        return ctx.deletingItem.set(null);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "app-confirm-modal", 19);
      \u0275\u0275listener("confirmed", function SubCategoryListComponent_Template_app_confirm_modal_confirmed_37_listener() {
        return ctx.confirmToggleStatus();
      })("cancelled", function SubCategoryListComponent_Template_app_confirm_modal_cancelled_37_listener() {
        return ctx.statusItem.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_8_0;
      let tmp_10_0;
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.categoryFilter);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.categories());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", ctx.subCategories());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.subCategories().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pagination().totalPages > 1);
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingItem())("message", 'Delete "' + (((tmp_8_0 = ctx.deletingItem()) == null ? null : tmp_8_0.name) || "") + '"? This cannot be undone.');
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.statusItem())("message", 'Change status of "' + (((tmp_10_0 = ctx.statusItem()) == null ? null : tmp_10_0.name) || "") + '" to ' + (((tmp_10_0 = ctx.statusItem()) == null ? null : tmp_10_0.status) ? "Inactive" : "Active") + "?");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.search-box-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 0 14px;\n  flex: 1;\n  max-width: 400px;\n}\n.search-box[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  width: 100%;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: #fff;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e5e7eb;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.fw-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: opacity 0.2s;\n  border: none;\n}\n.badge-clickable[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  color: #64748b;\n  display: inline-flex;\n  text-decoration: none;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #e31b23;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  align-items: center;\n  margin-top: 24px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 500;\n  color: #334155;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubCategoryListComponent, { className: "SubCategoryListComponent", filePath: "src\\app\\features\\admin\\sub-categories\\sub-category-list.component.ts", lineNumber: 137 });
})();
export {
  SubCategoryListComponent
};
