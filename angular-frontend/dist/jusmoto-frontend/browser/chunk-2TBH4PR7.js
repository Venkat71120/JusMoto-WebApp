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
  NgModel
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/admin/staff/staff-list.component.ts
var _c0 = (a0) => ["/admin/staff/edit-user-info", a0];
function StaffListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function StaffListComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "button", 20);
    \u0275\u0275listener("click", function StaffListComponent_tr_29_Template_button_click_11_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.statusItem.set(s_r2));
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 21)(15, "a", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 23);
    \u0275\u0275element(17, "path", 24)(18, "path", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "button", 26);
    \u0275\u0275listener("click", function StaffListComponent_tr_29_Template_button_click_19_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteStaff(s_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 23);
    \u0275\u0275element(21, "polyline", 27)(22, "path", 28);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((s_r2.role == null ? null : s_r2.role.name) || s_r2.role || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-green", s_r2.status)("badge-red", !s_r2.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r2.status ? "Active" : "Inactive", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, s_r2.id));
  }
}
function StaffListComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2, "No staff members found");
    \u0275\u0275elementEnd()();
  }
}
var StaffListComponent = class _StaffListComponent {
  http;
  toast;
  staff = signal([]);
  loading = signal(false);
  deletingItem = signal(null);
  statusItem = signal(null);
  search = "";
  searchTimeout;
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadStaff();
  }
  loadStaff() {
    this.loading.set(true);
    const params = {};
    if (this.search)
      params.search = this.search;
    this.http.get(`${environment.apiUrl}/admin/staff`, { params }).subscribe({
      next: (res) => this.staff.set(res.data || []),
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadStaff(), 400);
  }
  deleteStaff(s) {
    this.deletingItem.set(s);
  }
  confirmDelete() {
    const s = this.deletingItem();
    if (!s)
      return;
    this.http.delete(`${environment.apiUrl}/admin/staff/${s.id}`).subscribe({
      next: () => {
        this.toast.success("Staff member deleted successfully");
        this.deletingItem.set(null);
        this.loadStaff();
      },
      error: () => {
        this.toast.error("Failed to delete staff member");
        this.deletingItem.set(null);
      }
    });
  }
  confirmToggleStatus() {
    const s = this.statusItem();
    if (!s)
      return;
    const newStatus = s.status ? 0 : 1;
    this.http.put(`${environment.apiUrl}/admin/staff/${s.id}`, { status: newStatus }).subscribe({
      next: () => {
        s.status = newStatus;
        this.toast.success("Staff status updated");
        this.statusItem.set(null);
      },
      error: () => {
        this.toast.error("Failed to update status");
        this.statusItem.set(null);
      }
    });
  }
  static \u0275fac = function StaffListComponent_Factory(t) {
    return new (t || _StaffListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffListComponent, selectors: [["app-staff-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 8, consts: [[1, "page-header"], [1, "page-title"], ["routerLink", "/admin/staff/add-staff", 1, "btn-primary"], [1, "filters-bar"], [1, "search-box-wrap"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#94a3b8", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search staff...", 1, "search-box", 3, "ngModelChange", "input", "ngModel"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["title", "Delete Staff Member", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], ["title", "Change Status", "confirmText", "Change Status", "type", "warning", 3, "confirmed", "cancelled", "open", "message"], [1, "loading-overlay"], [1, "spinner"], [1, "fw-600"], [1, "role-badge"], [1, "badge", "badge-clickable", 3, "click"], [1, "action-btns"], ["title", "Edit", 1, "action-btn", 3, "routerLink"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Delete", 1, "action-btn", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], ["colspan", "6", 1, "empty-state"]], template: function StaffListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Staff Members");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 2);
      \u0275\u0275text(4, "+ Add Staff");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 5);
      \u0275\u0275element(8, "circle", 6)(9, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function StaffListComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function StaffListComponent_Template_input_input_10_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 9);
      \u0275\u0275template(12, StaffListComponent_div_12_Template, 2, 0, "div", 10);
      \u0275\u0275elementStart(13, "table", 11)(14, "thead")(15, "tr")(16, "th");
      \u0275\u0275text(17, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "tbody");
      \u0275\u0275template(29, StaffListComponent_tr_29_Template, 23, 12, "tr", 12)(30, StaffListComponent_tr_30_Template, 3, 0, "tr", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "app-confirm-modal", 14);
      \u0275\u0275listener("confirmed", function StaffListComponent_Template_app_confirm_modal_confirmed_31_listener() {
        return ctx.confirmDelete();
      })("cancelled", function StaffListComponent_Template_app_confirm_modal_cancelled_31_listener() {
        return ctx.deletingItem.set(null);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "app-confirm-modal", 15);
      \u0275\u0275listener("confirmed", function StaffListComponent_Template_app_confirm_modal_confirmed_32_listener() {
        return ctx.confirmToggleStatus();
      })("cancelled", function StaffListComponent_Template_app_confirm_modal_cancelled_32_listener() {
        return ctx.statusItem.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_7_0;
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", ctx.staff());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.staff().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingItem())("message", 'Delete "' + (((tmp_5_0 = ctx.deletingItem()) == null ? null : tmp_5_0.name) || "") + '"? This cannot be undone.');
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.statusItem())("message", 'Change status of "' + (((tmp_7_0 = ctx.statusItem()) == null ? null : tmp_7_0.name) || "") + '" to ' + (((tmp_7_0 = ctx.statusItem()) == null ? null : tmp_7_0.status) ? "Inactive" : "Active") + "?");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.search-box-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 0 14px;\n  flex: 1;\n  max-width: 400px;\n}\n.search-box[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  width: 100%;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e5e7eb;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.fw-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.role-badge[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n  padding: 3px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: opacity 0.2s;\n  border: none;\n}\n.badge-clickable[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  color: #64748b;\n  display: inline-flex;\n  text-decoration: none;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #e31b23;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}\n/*# sourceMappingURL=staff-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffListComponent, { className: "StaffListComponent", filePath: "src\\app\\features\\admin\\staff\\staff-list.component.ts", lineNumber: 118 });
})();
export {
  StaffListComponent
};
//# sourceMappingURL=chunk-2TBH4PR7.js.map
