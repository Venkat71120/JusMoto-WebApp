import {
  ConfirmModalComponent
} from "./chunk-GQMX7FRF.js";
import {
  ToastService
} from "./chunk-JBYXSY66.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-X7FFWIXK.js";
import {
  environment
} from "./chunk-GUDC7RY7.js";
import {
  HttpClient
} from "./chunk-7QXR32YF.js";
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
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/admin/locations/state-list.component.ts
function StateListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function StateListComponent_tr_36_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.state);
  }
}
function StateListComponent_tr_36_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function StateListComponent_tr_36_input_5_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.editName, $event) || (ctx_r2.editName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editName);
  }
}
function StateListComponent_tr_36_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.state_code || "-");
  }
}
function StateListComponent_tr_36_input_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function StateListComponent_tr_36_input_8_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.editCode, $event) || (ctx_r2.editCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editCode);
  }
}
function StateListComponent_tr_36_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("badge-green", item_r1.status)("badge-red", !item_r1.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.status ? "Active" : "Inactive", " ");
  }
}
function StateListComponent_tr_36_label_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 11)(1, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function StateListComponent_tr_36_label_11_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.editStatus, $event) || (ctx_r2.editStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Active");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editStatus);
  }
}
function StateListComponent_tr_36_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 28);
    \u0275\u0275listener("click", function StateListComponent_tr_36_div_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.startEdit(item_r1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 3);
    \u0275\u0275element(3, "path", 29)(4, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function StateListComponent_tr_36_div_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteItem(item_r1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 3);
    \u0275\u0275element(7, "polyline", 32)(8, "path", 33);
    \u0275\u0275elementEnd()()();
  }
}
function StateListComponent_tr_36_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 13);
    \u0275\u0275listener("click", function StateListComponent_tr_36_div_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveEdit());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 34);
    \u0275\u0275listener("click", function StateListComponent_tr_36_div_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editId = null);
    });
    \u0275\u0275text(4, "Cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.saving());
  }
}
function StateListComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275template(4, StateListComponent_tr_36_span_4_Template, 2, 1, "span", 15)(5, StateListComponent_tr_36_input_5_Template, 1, 1, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275template(7, StateListComponent_tr_36_span_7_Template, 2, 1, "span", 15)(8, StateListComponent_tr_36_input_8_Template, 1, 1, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, StateListComponent_tr_36_span_10_Template, 2, 5, "span", 21)(11, StateListComponent_tr_36_label_11_Template, 3, 1, "label", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, StateListComponent_tr_36_div_13_Template, 9, 0, "div", 23)(14, StateListComponent_tr_36_div_14_Template, 5, 1, "div", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.editId !== item_r1.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editId === item_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.editId !== item_r1.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editId === item_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.editId !== item_r1.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editId === item_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.editId !== item_r1.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editId === item_r1.id);
  }
}
function StateListComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2, "No states found");
    \u0275\u0275elementEnd()();
  }
}
var StateListComponent = class _StateListComponent {
  http;
  toast;
  items = signal([]);
  loading = signal(false);
  saving = signal(false);
  fetching = signal(false);
  deletingItem = signal(null);
  newName = "";
  newCode = "";
  newStatus = true;
  editId = null;
  editName = "";
  editCode = "";
  editStatus = true;
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadItems();
  }
  loadItems() {
    this.loading.set(true);
    this.http.get(`${environment.apiUrl}/admin/states`).subscribe({
      next: (res) => this.items.set(res.data || []),
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  addItem() {
    if (!this.newName.trim())
      return;
    this.saving.set(true);
    this.http.post(`${environment.apiUrl}/admin/states`, { state: this.newName, state_code: this.newCode, status: this.newStatus ? 1 : 0 }).subscribe({
      next: () => {
        this.newName = "";
        this.newCode = "";
        this.newStatus = true;
        this.toast.success("State added successfully");
        this.loadItems();
      },
      error: () => {
        this.toast.error("Failed to add state");
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
  startEdit(item) {
    this.editId = item.id;
    this.editName = item.state;
    this.editCode = item.state_code || "";
    this.editStatus = !!item.status;
  }
  saveEdit() {
    if (!this.editName.trim())
      return;
    this.saving.set(true);
    this.http.put(`${environment.apiUrl}/admin/states/${this.editId}`, { state: this.editName, state_code: this.editCode, status: this.editStatus ? 1 : 0 }).subscribe({
      next: () => {
        this.editId = null;
        this.toast.success("State updated successfully");
        this.loadItems();
      },
      error: () => {
        this.toast.error("Failed to update state");
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
  fetchFromApi() {
    this.fetching.set(true);
    this.http.post(`${environment.apiUrl}/admin/locations/import-states`, {}).subscribe({
      next: (res) => {
        this.toast.success(res.message || "States imported!");
        this.loadItems();
      },
      error: (err) => {
        this.toast.error(err.error?.error || "Failed to fetch states");
      },
      complete: () => this.fetching.set(false)
    });
  }
  deleteItem(item) {
    this.deletingItem.set(item);
  }
  confirmDelete() {
    const item = this.deletingItem();
    if (!item)
      return;
    this.http.delete(`${environment.apiUrl}/admin/states/${item.id}`).subscribe({
      next: () => {
        this.toast.success("State deleted successfully");
        this.deletingItem.set(null);
        this.loadItems();
      },
      error: () => {
        this.toast.error("Failed to delete state");
        this.deletingItem.set(null);
      }
    });
  }
  static \u0275fac = function StateListComponent_Factory(t) {
    return new (t || _StateListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StateListComponent, selectors: [["app-state-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 11, consts: [[1, "page-header"], [1, "page-title"], [1, "btn-fetch", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [1, "add-row"], ["type", "text", "placeholder", "State name", 1, "inline-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Code", 1, "inline-input", "inline-sm", 3, "ngModelChange", "ngModel"], [1, "toggle-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "btn-primary", "btn-sm", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["title", "Delete State", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], [1, "loading-overlay"], [1, "spinner"], ["type", "text", "class", "inline-input", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "class", "inline-input inline-sm", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "badge", 3, "badge-green", "badge-red", 4, "ngIf"], ["class", "toggle-label", 4, "ngIf"], ["class", "action-btns", 4, "ngIf"], ["type", "text", 1, "inline-input", 3, "ngModelChange", "ngModel"], ["type", "text", 1, "inline-input", "inline-sm", 3, "ngModelChange", "ngModel"], [1, "badge"], [1, "action-btns"], ["title", "Edit", 1, "action-btn", 3, "click"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Delete", 1, "action-btn", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], [1, "btn-cancel", "btn-sm", 3, "click"], ["colspan", "5", 1, "empty-state"]], template: function StateListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 2);
      \u0275\u0275listener("click", function StateListComponent_Template_button_click_3_listener() {
        return ctx.fetchFromApi();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 3);
      \u0275\u0275element(5, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275template(8, StateListComponent_div_8_Template, 2, 0, "div", 6);
      \u0275\u0275elementStart(9, "table", 7)(10, "thead")(11, "tr")(12, "th");
      \u0275\u0275text(13, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "th");
      \u0275\u0275text(15, "State Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "th");
      \u0275\u0275text(17, "State Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "tbody")(23, "tr", 8);
      \u0275\u0275element(24, "td");
      \u0275\u0275elementStart(25, "td")(26, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function StateListComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newName, $event) || (ctx.newName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "td")(28, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function StateListComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newCode, $event) || (ctx.newCode = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "td")(30, "label", 11)(31, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function StateListComponent_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newStatus, $event) || (ctx.newStatus = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "td")(34, "button", 13);
      \u0275\u0275listener("click", function StateListComponent_Template_button_click_34_listener() {
        return ctx.addItem();
      });
      \u0275\u0275text(35, "Add");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(36, StateListComponent_tr_36_Template, 15, 9, "tr", 14)(37, StateListComponent_tr_37_Template, 3, 0, "tr", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "app-confirm-modal", 16);
      \u0275\u0275listener("confirmed", function StateListComponent_Template_app_confirm_modal_confirmed_38_listener() {
        return ctx.confirmDelete();
      })("cancelled", function StateListComponent_Template_app_confirm_modal_cancelled_38_listener() {
        return ctx.deletingItem.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_10_0;
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.fetching());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.fetching() ? "Importing..." : "Fetch Indian States from API", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.newName);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.newCode);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.newStatus);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.items());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.items().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingItem())("message", 'Delete "' + (((tmp_10_0 = ctx.deletingItem()) == null ? null : tmp_10_0.state) || "") + '"? This cannot be undone.');
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.btn-fetch[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 600;\n  color: #334155;\n  font-size: 14px;\n}\n.btn-fetch[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.btn-fetch[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e5e7eb;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.add-row[_ngcontent-%COMP%] {\n  background: #fafbfc;\n}\n.inline-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  width: 100%;\n  max-width: 260px;\n}\n.inline-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);\n}\n.inline-sm[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #e31b23;\n  width: 16px;\n  height: 16px;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  color: #64748b;\n  display: inline-flex;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #e31b23;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  font-size: 13px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 13px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}\n/*# sourceMappingURL=state-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StateListComponent, { className: "StateListComponent", filePath: "src\\app\\features\\admin\\locations\\state-list.component.ts", lineNumber: 128 });
})();
export {
  StateListComponent
};
//# sourceMappingURL=chunk-GYJ5KVBR.js.map
