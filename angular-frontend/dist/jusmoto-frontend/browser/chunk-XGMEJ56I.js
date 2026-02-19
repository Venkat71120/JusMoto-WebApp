import {
  ConfirmModalComponent
} from "./chunk-GESQI7FA.js";
import {
  ToastService
} from "./chunk-W5W6PSRW.js";
import {
  CheckboxControlValueAccessor,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/admin/locations/city-list.component.ts
function CityListComponent_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1.name);
  }
}
function CityListComponent_div_8_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275property("value", s_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r4.name);
  }
}
function CityListComponent_div_8_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formError);
  }
}
function CityListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function CityListComponent_div_8_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm = false);
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275listener("click", function CityListComponent_div_8_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18)(5, "label");
    \u0275\u0275text(6, "City Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function CityListComponent_div_8_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formName, $event) || (ctx_r2.formName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 18)(9, "label");
    \u0275\u0275text(10, "State *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CityListComponent_div_8_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formStateId, $event) || (ctx_r2.formStateId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 4);
    \u0275\u0275text(13, "Select State");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CityListComponent_div_8_option_14_Template, 2, 2, "option", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 18)(16, "label");
    \u0275\u0275text(17, "Timezone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function CityListComponent_div_8_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formTimezone, $event) || (ctx_r2.formTimezone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 18)(20, "label", 22)(21, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function CityListComponent_div_8_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formStatus, $event) || (ctx_r2.formStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, CityListComponent_div_8_div_23_Template, 2, 1, "div", 24);
    \u0275\u0275elementStart(24, "div", 25)(25, "button", 26);
    \u0275\u0275listener("click", function CityListComponent_div_8_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm = false);
    });
    \u0275\u0275text(26, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 27);
    \u0275\u0275listener("click", function CityListComponent_div_8_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveItem());
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.editItem ? "Edit City" : "Add City");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formStateId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.states());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formTimezone);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formStatus);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.formError);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving() ? "Saving..." : ctx_r2.editItem ? "Update" : "Create", " ");
  }
}
function CityListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "div", 30);
    \u0275\u0275elementEnd();
  }
}
function CityListComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "div", 34)(14, "button", 35);
    \u0275\u0275listener("click", function CityListComponent_tr_30_Template_button_click_14_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.startEdit(item_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 36);
    \u0275\u0275element(16, "path", 37)(17, "path", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "button", 39);
    \u0275\u0275listener("click", function CityListComponent_tr_30_Template_button_click_18_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteItem(item_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 36);
    \u0275\u0275element(20, "polyline", 40)(21, "path", 41);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((item_r6.state == null ? null : item_r6.state.name) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.timezone || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-green", item_r6.status)("badge-red", !item_r6.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r6.status ? "Active" : "Inactive", " ");
  }
}
function CityListComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2, "No cities found");
    \u0275\u0275elementEnd()();
  }
}
var CityListComponent = class _CityListComponent {
  http;
  toast;
  items = signal([]);
  states = signal([]);
  loading = signal(false);
  saving = signal(false);
  deletingItem = signal(null);
  stateFilter = "";
  showForm = false;
  editItem = null;
  formName = "";
  formStateId = "";
  formTimezone = "";
  formStatus = true;
  formError = "";
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadStates();
    this.loadItems();
  }
  loadStates() {
    this.http.get(`${environment.apiUrl}/admin/states`).subscribe({
      next: (res) => this.states.set(res.data || [])
    });
  }
  loadItems() {
    this.loading.set(true);
    const params = {};
    if (this.stateFilter)
      params.state_id = this.stateFilter;
    this.http.get(`${environment.apiUrl}/admin/cities`, { params }).subscribe({
      next: (res) => this.items.set(res.data || []),
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  openAdd() {
    this.editItem = null;
    this.formName = "";
    this.formStateId = "";
    this.formTimezone = "";
    this.formStatus = true;
    this.formError = "";
    this.showForm = true;
  }
  startEdit(item) {
    this.editItem = item;
    this.formName = item.name;
    this.formStateId = item.state_id || "";
    this.formTimezone = item.timezone || "";
    this.formStatus = !!item.status;
    this.formError = "";
    this.showForm = true;
  }
  saveItem() {
    if (!this.formName.trim() || !this.formStateId) {
      this.formError = "Name and State are required";
      return;
    }
    this.saving.set(true);
    this.formError = "";
    const data = { name: this.formName, state_id: this.formStateId, timezone: this.formTimezone, status: this.formStatus ? 1 : 0 };
    const req = this.editItem ? this.http.put(`${environment.apiUrl}/admin/cities/${this.editItem.id}`, data) : this.http.post(`${environment.apiUrl}/admin/cities`, data);
    req.subscribe({
      next: () => {
        this.showForm = false;
        this.toast.success(this.editItem ? "City updated successfully" : "City added successfully");
        this.loadItems();
      },
      error: (err) => {
        this.formError = err.error?.error || "Something went wrong";
        this.toast.error(this.formError);
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
  deleteItem(item) {
    this.deletingItem.set(item);
  }
  confirmDelete() {
    const item = this.deletingItem();
    if (!item)
      return;
    this.http.delete(`${environment.apiUrl}/admin/cities/${item.id}`).subscribe({
      next: () => {
        this.toast.success("City deleted successfully");
        this.deletingItem.set(null);
        this.loadItems();
      },
      error: () => {
        this.toast.error("Failed to delete city");
        this.deletingItem.set(null);
      }
    });
  }
  static \u0275fac = function CityListComponent_Factory(t) {
    return new (t || _CityListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CityListComponent, selectors: [["app-city-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 8, consts: [[1, "page-header"], [1, "page-title"], [1, "filters-bar"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "table-toolbar"], [1, "btn-primary", "btn-sm", 3, "click"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["title", "Delete City", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], [3, "value"], [1, "modal-overlay", 3, "click"], [1, "modal-card", 3, "click"], [1, "form-group"], ["type", "text", "placeholder", "City name", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Asia/Kolkata", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "toggle-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["class", "error-msg", 4, "ngIf"], [1, "modal-actions"], [1, "btn-cancel", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], [1, "error-msg"], [1, "loading-overlay"], [1, "spinner"], [1, "fw-600"], [1, "text-muted"], [1, "badge"], [1, "action-btns"], ["title", "Edit", 1, "action-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Delete", 1, "action-btn", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], ["colspan", "6", 1, "empty-state"]], template: function CityListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Cities");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2)(4, "select", 3);
      \u0275\u0275twoWayListener("ngModelChange", function CityListComponent_Template_select_ngModelChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.stateFilter, $event) || (ctx.stateFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function CityListComponent_Template_select_change_4_listener() {
        return ctx.loadItems();
      });
      \u0275\u0275elementStart(5, "option", 4);
      \u0275\u0275text(6, "All States");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, CityListComponent_option_7_Template, 2, 2, "option", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, CityListComponent_div_8_Template, 29, 9, "div", 6);
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275template(10, CityListComponent_div_10_Template, 2, 0, "div", 8);
      \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
      \u0275\u0275listener("click", function CityListComponent_Template_button_click_12_listener() {
        return ctx.openAdd();
      });
      \u0275\u0275text(13, "+ Add City");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "table", 11)(15, "thead")(16, "tr")(17, "th");
      \u0275\u0275text(18, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "th");
      \u0275\u0275text(20, "City Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th");
      \u0275\u0275text(22, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24, "Timezone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "tbody");
      \u0275\u0275template(30, CityListComponent_tr_30_Template, 22, 9, "tr", 12)(31, CityListComponent_tr_31_Template, 3, 0, "tr", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "app-confirm-modal", 14);
      \u0275\u0275listener("confirmed", function CityListComponent_Template_app_confirm_modal_confirmed_32_listener() {
        return ctx.confirmDelete();
      })("cancelled", function CityListComponent_Template_app_confirm_modal_cancelled_32_listener() {
        return ctx.deletingItem.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_7_0;
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.stateFilter);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.states());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(20);
      \u0275\u0275property("ngForOf", ctx.items());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.items().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingItem())("message", 'Delete "' + (((tmp_7_0 = ctx.deletingItem()) == null ? null : tmp_7_0.name) || "") + '"? This cannot be undone.');
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: #fff;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.table-toolbar[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e5e7eb;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.fw-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  color: #64748b;\n  display: inline-flex;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #e31b23;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  font-size: 13px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 200;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  width: 100%;\n  max-width: 440px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #334155;\n  font-size: 14px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #e31b23;\n  width: 16px;\n  height: 16px;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 8px 12px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CityListComponent, { className: "CityListComponent", filePath: "src\\app\\features\\admin\\locations\\city-list.component.ts", lineNumber: 153 });
})();
export {
  CityListComponent
};
