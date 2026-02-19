import {
  ConfirmModalComponent
} from "./chunk-GESQI7FA.js";
import {
  ToastService
} from "./chunk-W5W6PSRW.js";
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/admin/roles/role-list.component.ts
var _c0 = () => [];
function RoleListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementEnd();
  }
}
function RoleListComponent_tr_19_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r2.name || p_r2);
  }
}
function RoleListComponent_tr_19_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", role_r3.permissions.length - 5, " more");
  }
}
function RoleListComponent_tr_19_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "No permissions");
    \u0275\u0275elementEnd();
  }
}
function RoleListComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 12);
    \u0275\u0275template(7, RoleListComponent_tr_19_span_7_Template, 2, 1, "span", 13)(8, RoleListComponent_tr_19_span_8_Template, 2, 1, "span", 14)(9, RoleListComponent_tr_19_span_9_Template, 2, 0, "span", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "div", 16)(12, "a", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 18);
    \u0275\u0275element(14, "path", 19)(15, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "button", 21);
    \u0275\u0275listener("click", function RoleListComponent_tr_19_Template_button_click_16_listener() {
      const role_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteRole(role_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 18);
    \u0275\u0275element(18, "polyline", 22)(19, "path", 23);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", (role_r3.permissions || \u0275\u0275pureFunction0(6, _c0)).slice(0, 5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (role_r3.permissions || \u0275\u0275pureFunction0(7, _c0)).length > 5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !role_r3.permissions || role_r3.permissions.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/admin/manage/permission/role/edit/" + role_r3.id);
  }
}
function RoleListComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2, "No roles found");
    \u0275\u0275elementEnd()();
  }
}
var RoleListComponent = class _RoleListComponent {
  http;
  toast;
  roles = signal([]);
  loading = signal(false);
  deletingRole = signal(null);
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadRoles();
  }
  loadRoles() {
    this.loading.set(true);
    this.http.get(`${environment.apiUrl}/admin/roles`).subscribe({
      next: (res) => this.roles.set(res.data || []),
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  deleteRole(role) {
    this.deletingRole.set(role);
  }
  confirmDelete() {
    const role = this.deletingRole();
    if (!role)
      return;
    this.http.delete(`${environment.apiUrl}/admin/roles/${role.id}`).subscribe({
      next: () => {
        this.toast.success("Role deleted");
        this.deletingRole.set(null);
        this.loadRoles();
      },
      error: () => {
        this.toast.error("Failed to delete role");
        this.deletingRole.set(null);
      }
    });
  }
  static \u0275fac = function RoleListComponent_Factory(t) {
    return new (t || _RoleListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoleListComponent, selectors: [["app-role-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 5, consts: [[1, "page-header"], [1, "page-title"], ["routerLink", "/admin/manage/permission/role/add", 1, "btn-primary"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["title", "Delete Role", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], [1, "loading-overlay"], [1, "spinner"], [1, "fw-600"], [1, "perm-list"], ["class", "perm-badge", 4, "ngFor", "ngForOf"], ["class", "perm-badge perm-more", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "action-btns"], ["title", "Edit", 1, "btn-action", "btn-edit", 3, "routerLink"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Delete", 1, "btn-action", "btn-delete", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], [1, "perm-badge"], [1, "perm-badge", "perm-more"], [1, "text-muted"], ["colspan", "4", 1, "empty-state"]], template: function RoleListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Roles & Permissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 2);
      \u0275\u0275text(4, "+ Add Role");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275template(6, RoleListComponent_div_6_Template, 2, 0, "div", 4);
      \u0275\u0275elementStart(7, "table", 5)(8, "thead")(9, "tr")(10, "th");
      \u0275\u0275text(11, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th");
      \u0275\u0275text(13, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "th");
      \u0275\u0275text(15, "Permissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "th");
      \u0275\u0275text(17, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "tbody");
      \u0275\u0275template(19, RoleListComponent_tr_19_Template, 20, 8, "tr", 6)(20, RoleListComponent_tr_20_Template, 3, 0, "tr", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "app-confirm-modal", 8);
      \u0275\u0275listener("confirmed", function RoleListComponent_Template_app_confirm_modal_confirmed_21_listener() {
        return ctx.confirmDelete();
      })("cancelled", function RoleListComponent_Template_app_confirm_modal_cancelled_21_listener() {
        return ctx.deletingRole.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(13);
      \u0275\u0275property("ngForOf", ctx.roles());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.roles().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingRole())("message", 'Delete role "' + (((tmp_4_0 = ctx.deletingRole()) == null ? null : tmp_4_0.name) || "") + '"? This will remove all permission assignments.');
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e5e7eb;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.fw-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.perm-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.perm-badge[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  padding: 3px 10px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.perm-more[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #3730a3;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.2s;\n  display: inline-flex;\n  text-decoration: none;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  color: #3b82f6;\n  border-color: #3b82f6;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  border-color: #ef4444;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleListComponent, { className: "RoleListComponent", filePath: "src\\app\\features\\admin\\roles\\role-list.component.ts", lineNumber: 94 });
})();
export {
  RoleListComponent
};
