import {
  ConfirmModalComponent
} from "./chunk-M673IPVF.js";
import {
  ToastService
} from "./chunk-CUQ723YT.js";
import {
  CheckboxControlValueAccessor,
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
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/admin/departments/department-list.component.ts
function DepartmentListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementEnd();
  }
}
function DepartmentListComponent_tr_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dept_r1.name);
  }
}
function DepartmentListComponent_tr_28_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function DepartmentListComponent_tr_28_input_5_Template_input_ngModelChange_0_listener($event) {
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
function DepartmentListComponent_tr_28_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("badge-green", dept_r1.status)("badge-red", !dept_r1.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dept_r1.status ? "Active" : "Inactive", " ");
  }
}
function DepartmentListComponent_tr_28_label_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 7)(1, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function DepartmentListComponent_tr_28_label_8_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
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
function DepartmentListComponent_tr_28_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "button", 22);
    \u0275\u0275listener("click", function DepartmentListComponent_tr_28_div_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const dept_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.startEdit(dept_r1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 23);
    \u0275\u0275element(3, "path", 24)(4, "path", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275listener("click", function DepartmentListComponent_tr_28_div_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const dept_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteDepartment(dept_r1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 23);
    \u0275\u0275element(7, "polyline", 27)(8, "path", 28);
    \u0275\u0275elementEnd()()();
  }
}
function DepartmentListComponent_tr_28_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "button", 9);
    \u0275\u0275listener("click", function DepartmentListComponent_tr_28_div_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveEdit());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 29);
    \u0275\u0275listener("click", function DepartmentListComponent_tr_28_div_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
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
function DepartmentListComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275template(4, DepartmentListComponent_tr_28_span_4_Template, 2, 1, "span", 11)(5, DepartmentListComponent_tr_28_input_5_Template, 1, 1, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275template(7, DepartmentListComponent_tr_28_span_7_Template, 2, 5, "span", 16)(8, DepartmentListComponent_tr_28_label_8_Template, 3, 1, "label", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, DepartmentListComponent_tr_28_div_10_Template, 9, 0, "div", 18)(11, DepartmentListComponent_tr_28_div_11_Template, 5, 1, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dept_r1 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.editId !== dept_r1.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editId === dept_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.editId !== dept_r1.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editId === dept_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.editId !== dept_r1.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editId === dept_r1.id);
  }
}
function DepartmentListComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2, "No departments found");
    \u0275\u0275elementEnd()();
  }
}
var DepartmentListComponent = class _DepartmentListComponent {
  http;
  toast;
  departments = signal([]);
  loading = signal(false);
  saving = signal(false);
  deletingItem = signal(null);
  newName = "";
  newStatus = true;
  editId = null;
  editName = "";
  editStatus = true;
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadDepartments();
  }
  loadDepartments() {
    this.loading.set(true);
    this.http.get(`${environment.apiUrl}/admin/departments`).subscribe({
      next: (res) => this.departments.set(res.data || []),
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  addDepartment() {
    if (!this.newName.trim())
      return;
    this.saving.set(true);
    this.http.post(`${environment.apiUrl}/admin/departments`, { name: this.newName, status: this.newStatus ? 1 : 0 }).subscribe({
      next: () => {
        this.newName = "";
        this.newStatus = true;
        this.toast.success("Department added successfully");
        this.loadDepartments();
      },
      error: () => {
        this.toast.error("Failed to add department");
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
  startEdit(dept) {
    this.editId = dept.id;
    this.editName = dept.name;
    this.editStatus = !!dept.status;
  }
  saveEdit() {
    if (!this.editName.trim())
      return;
    this.saving.set(true);
    this.http.put(`${environment.apiUrl}/admin/departments/${this.editId}`, { name: this.editName, status: this.editStatus ? 1 : 0 }).subscribe({
      next: () => {
        this.editId = null;
        this.toast.success("Department updated successfully");
        this.loadDepartments();
      },
      error: () => {
        this.toast.error("Failed to update department");
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
  deleteDepartment(dept) {
    this.deletingItem.set(dept);
  }
  confirmDelete() {
    const dept = this.deletingItem();
    if (!dept)
      return;
    this.http.delete(`${environment.apiUrl}/admin/departments/${dept.id}`).subscribe({
      next: () => {
        this.toast.success("Department deleted successfully");
        this.deletingItem.set(null);
        this.loadDepartments();
      },
      error: () => {
        this.toast.error("Failed to delete department");
        this.deletingItem.set(null);
      }
    });
  }
  static \u0275fac = function DepartmentListComponent_Factory(t) {
    return new (t || _DepartmentListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentListComponent, selectors: [["app-department-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 8, consts: [[1, "page-header"], [1, "page-title"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [1, "add-row"], ["type", "text", "placeholder", "Department name", 1, "inline-input", 3, "ngModelChange", "ngModel"], [1, "toggle-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "btn-primary", "btn-sm", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["title", "Delete Department", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], [1, "loading-overlay"], [1, "spinner"], ["type", "text", "class", "inline-input", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "badge", 3, "badge-green", "badge-red", 4, "ngIf"], ["class", "toggle-label", 4, "ngIf"], ["class", "action-btns", 4, "ngIf"], ["type", "text", 1, "inline-input", 3, "ngModelChange", "ngModel"], [1, "badge"], [1, "action-btns"], ["title", "Edit", 1, "action-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Delete", 1, "action-btn", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], [1, "btn-cancel", "btn-sm", 3, "click"], ["colspan", "4", 1, "empty-state"]], template: function DepartmentListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Departments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275template(4, DepartmentListComponent_div_4_Template, 2, 0, "div", 3);
      \u0275\u0275elementStart(5, "table", 4)(6, "thead")(7, "tr")(8, "th");
      \u0275\u0275text(9, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "th");
      \u0275\u0275text(11, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th");
      \u0275\u0275text(13, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "th");
      \u0275\u0275text(15, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "tbody")(17, "tr", 5);
      \u0275\u0275element(18, "td");
      \u0275\u0275elementStart(19, "td")(20, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function DepartmentListComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newName, $event) || (ctx.newName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "td")(22, "label", 7)(23, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function DepartmentListComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newStatus, $event) || (ctx.newStatus = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "td")(26, "button", 9);
      \u0275\u0275listener("click", function DepartmentListComponent_Template_button_click_26_listener() {
        return ctx.addDepartment();
      });
      \u0275\u0275text(27, "Add");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(28, DepartmentListComponent_tr_28_Template, 12, 7, "tr", 10)(29, DepartmentListComponent_tr_29_Template, 3, 0, "tr", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "app-confirm-modal", 12);
      \u0275\u0275listener("confirmed", function DepartmentListComponent_Template_app_confirm_modal_confirmed_30_listener() {
        return ctx.confirmDelete();
      })("cancelled", function DepartmentListComponent_Template_app_confirm_modal_cancelled_30_listener() {
        return ctx.deletingItem.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_7_0;
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.newName);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.newStatus);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.departments());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.departments().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingItem())("message", 'Delete "' + (((tmp_7_0 = ctx.deletingItem()) == null ? null : tmp_7_0.name) || "") + '"? This cannot be undone.');
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e5e7eb;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.add-row[_ngcontent-%COMP%] {\n  background: #fafbfc;\n}\n.inline-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  width: 100%;\n  max-width: 260px;\n}\n.inline-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #e31b23;\n  width: 16px;\n  height: 16px;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  color: #64748b;\n  display: inline-flex;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #e31b23;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  font-size: 13px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 13px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentListComponent, { className: "DepartmentListComponent", filePath: "src\\app\\features\\admin\\departments\\department-list.component.ts", lineNumber: 115 });
})();
export {
  DepartmentListComponent
};
