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
  NgModel
} from "./chunk-5WG63XSG.js";
import {
  environment
} from "./chunk-YVMT3HBM.js";
import {
  HttpClient
} from "./chunk-NM77QJY5.js";
import {
  CommonModule,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/admin/engine-types/engine-type-list.component.ts
function EngineTypeListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementEnd();
  }
}
function EngineTypeListComponent_tr_22_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.name);
  }
}
function EngineTypeListComponent_tr_22_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function EngineTypeListComponent_tr_22_input_5_Template_input_ngModelChange_0_listener($event) {
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
function EngineTypeListComponent_tr_22_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 17);
    \u0275\u0275listener("click", function EngineTypeListComponent_tr_22_div_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.startEdit(item_r1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 18);
    \u0275\u0275element(3, "path", 19)(4, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function EngineTypeListComponent_tr_22_div_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteItem(item_r1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 18);
    \u0275\u0275element(7, "polyline", 22)(8, "path", 23);
    \u0275\u0275elementEnd()()();
  }
}
function EngineTypeListComponent_tr_22_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 7);
    \u0275\u0275listener("click", function EngineTypeListComponent_tr_22_div_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveEdit());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 24);
    \u0275\u0275listener("click", function EngineTypeListComponent_tr_22_div_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
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
function EngineTypeListComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275template(4, EngineTypeListComponent_tr_22_span_4_Template, 2, 1, "span", 9)(5, EngineTypeListComponent_tr_22_input_5_Template, 1, 1, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275template(7, EngineTypeListComponent_tr_22_div_7_Template, 9, 0, "div", 14)(8, EngineTypeListComponent_tr_22_div_8_Template, 5, 1, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
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
function EngineTypeListComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2, "No engine types found");
    \u0275\u0275elementEnd()();
  }
}
var EngineTypeListComponent = class _EngineTypeListComponent {
  http;
  toast;
  items = signal([]);
  loading = signal(false);
  saving = signal(false);
  deletingItem = signal(null);
  newName = "";
  editId = null;
  editName = "";
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadItems();
  }
  loadItems() {
    this.loading.set(true);
    this.http.get(`${environment.apiUrl}/admin/engine-types`).subscribe({
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
    this.http.post(`${environment.apiUrl}/admin/engine-types`, { name: this.newName }).subscribe({
      next: () => {
        this.newName = "";
        this.toast.success("Engine type added successfully");
        this.loadItems();
      },
      error: () => {
        this.toast.error("Failed to add engine type");
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
  startEdit(item) {
    this.editId = item.id;
    this.editName = item.name;
  }
  saveEdit() {
    if (!this.editName.trim())
      return;
    this.saving.set(true);
    this.http.put(`${environment.apiUrl}/admin/engine-types/${this.editId}`, { name: this.editName }).subscribe({
      next: () => {
        this.editId = null;
        this.toast.success("Engine type updated successfully");
        this.loadItems();
      },
      error: () => {
        this.toast.error("Failed to update engine type");
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
    this.http.delete(`${environment.apiUrl}/admin/engine-types/${item.id}`).subscribe({
      next: () => {
        this.toast.success("Engine type deleted successfully");
        this.deletingItem.set(null);
        this.loadItems();
      },
      error: () => {
        this.toast.error("Failed to delete engine type");
        this.deletingItem.set(null);
      }
    });
  }
  static \u0275fac = function EngineTypeListComponent_Factory(t) {
    return new (t || _EngineTypeListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EngineTypeListComponent, selectors: [["app-engine-type-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 7, consts: [[1, "page-header"], [1, "page-title"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [1, "add-row"], ["type", "text", "placeholder", "Engine type name", 1, "inline-input", 3, "ngModelChange", "ngModel"], [1, "btn-primary", "btn-sm", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["title", "Delete Engine Type", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], [1, "loading-overlay"], [1, "spinner"], ["type", "text", "class", "inline-input", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "action-btns", 4, "ngIf"], ["type", "text", 1, "inline-input", 3, "ngModelChange", "ngModel"], [1, "action-btns"], ["title", "Edit", 1, "action-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Delete", 1, "action-btn", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], [1, "btn-cancel", "btn-sm", 3, "click"], ["colspan", "3", 1, "empty-state"]], template: function EngineTypeListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Engine Types");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275template(4, EngineTypeListComponent_div_4_Template, 2, 0, "div", 3);
      \u0275\u0275elementStart(5, "table", 4)(6, "thead")(7, "tr")(8, "th");
      \u0275\u0275text(9, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "th");
      \u0275\u0275text(11, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th");
      \u0275\u0275text(13, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "tbody")(15, "tr", 5);
      \u0275\u0275element(16, "td");
      \u0275\u0275elementStart(17, "td")(18, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function EngineTypeListComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newName, $event) || (ctx.newName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "td")(20, "button", 7);
      \u0275\u0275listener("click", function EngineTypeListComponent_Template_button_click_20_listener() {
        return ctx.addItem();
      });
      \u0275\u0275text(21, "Add");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(22, EngineTypeListComponent_tr_22_Template, 9, 5, "tr", 8)(23, EngineTypeListComponent_tr_23_Template, 3, 0, "tr", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "app-confirm-modal", 10);
      \u0275\u0275listener("confirmed", function EngineTypeListComponent_Template_app_confirm_modal_confirmed_24_listener() {
        return ctx.confirmDelete();
      })("cancelled", function EngineTypeListComponent_Template_app_confirm_modal_cancelled_24_listener() {
        return ctx.deletingItem.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.newName);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.items());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.items().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingItem())("message", 'Delete "' + (((tmp_6_0 = ctx.deletingItem()) == null ? null : tmp_6_0.name) || "") + '"? This cannot be undone.');
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e5e7eb;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.add-row[_ngcontent-%COMP%] {\n  background: #fafbfc;\n}\n.inline-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  width: 100%;\n  max-width: 260px;\n}\n.inline-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  color: #64748b;\n  display: inline-flex;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #e31b23;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  font-size: 13px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 13px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EngineTypeListComponent, { className: "EngineTypeListComponent", filePath: "src\\app\\features\\admin\\engine-types\\engine-type-list.component.ts", lineNumber: 99 });
})();
export {
  EngineTypeListComponent
};
