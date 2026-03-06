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
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-6VP7BBRC.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
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

// src/app/features/admin/roles/role-form.component.ts
function RoleFormComponent_div_19_label_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 8)(1, "input", 9);
    \u0275\u0275listener("change", function RoleFormComponent_div_19_label_4_Template_input_change_1_listener() {
      const perm_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.togglePermission(perm_r2.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const perm_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.selectedPermissions.has(perm_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perm_r2.name);
  }
}
function RoleFormComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h4", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275template(4, RoleFormComponent_div_19_label_4_Template, 4, 2, "label", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r4.menu);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", group_r4.permissions);
  }
}
function RoleFormComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formError);
  }
}
var RoleFormComponent = class _RoleFormComponent {
  http;
  route;
  router;
  toast;
  isEdit = false;
  roleId = null;
  roleName = "";
  permissionGroups = signal([]);
  selectedPermissions = /* @__PURE__ */ new Set();
  saving = signal(false);
  formError = "";
  constructor(http, route, router, toast) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.toast = toast;
  }
  ngOnInit() {
    this.roleId = this.route.snapshot.paramMap.get("id");
    this.isEdit = !!this.roleId;
    this.loadPermissions();
    if (this.isEdit)
      this.loadRole();
  }
  loadPermissions() {
    this.http.get(`${environment.apiUrl}/admin/permissions`).subscribe({
      next: (res) => {
        const perms = res.data || [];
        const groups = {};
        perms.forEach((p) => {
          const menu = p.menu_name || "General";
          if (!groups[menu])
            groups[menu] = [];
          groups[menu].push(p);
        });
        this.permissionGroups.set(Object.entries(groups).map(([menu, permissions]) => ({ menu, permissions })));
      }
    });
  }
  loadRole() {
    this.http.get(`${environment.apiUrl}/admin/roles/${this.roleId}`).subscribe({
      next: (res) => {
        this.roleName = res.data.name;
        (res.data.permissions || []).forEach((p) => this.selectedPermissions.add(p.id));
      }
    });
  }
  allSelected() {
    const all = this.permissionGroups().flatMap((g) => g.permissions);
    return all.length > 0 && all.every((p) => this.selectedPermissions.has(p.id));
  }
  toggleAll(event) {
    const all = this.permissionGroups().flatMap((g) => g.permissions);
    if (event.target.checked) {
      all.forEach((p) => this.selectedPermissions.add(p.id));
    } else {
      this.selectedPermissions.clear();
    }
  }
  togglePermission(id) {
    if (this.selectedPermissions.has(id)) {
      this.selectedPermissions.delete(id);
    } else {
      this.selectedPermissions.add(id);
    }
  }
  save() {
    if (!this.roleName.trim()) {
      this.formError = "Role name is required";
      return;
    }
    this.saving.set(true);
    this.formError = "";
    const data = { name: this.roleName, permission_ids: Array.from(this.selectedPermissions) };
    const req = this.isEdit ? this.http.put(`${environment.apiUrl}/admin/roles/${this.roleId}`, data) : this.http.post(`${environment.apiUrl}/admin/roles`, data);
    req.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? "Role updated successfully" : "Role created successfully");
        this.router.navigate(["/admin/manage/permission/role/all"]);
      },
      error: (err) => {
        this.formError = err.error?.error || "Something went wrong";
        this.toast.error(this.formError);
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
  static \u0275fac = function RoleFormComponent_Factory(t) {
    return new (t || _RoleFormComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoleFormComponent, selectors: [["app-role-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 7, consts: [[1, "page-header"], [1, "page-title"], ["routerLink", "/admin/manage/permission/role/all", 1, "btn-back"], [1, "form-card"], [1, "form-group"], ["type", "text", "placeholder", "e.g. Manager, Editor...", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "permissions-section"], [1, "select-all-row"], [1, "checkbox-label"], ["type", "checkbox", 3, "change", "checked"], [1, "perm-groups"], ["class", "perm-group", 4, "ngFor", "ngForOf"], ["class", "error-msg", 4, "ngIf"], [1, "form-actions"], ["routerLink", "/admin/manage/permission/role/all", 1, "btn-cancel"], [1, "btn-primary", 3, "click", "disabled"], [1, "perm-group"], [1, "group-title"], [1, "perm-items"], ["class", "checkbox-label", 4, "ngFor", "ngForOf"], [1, "error-msg"]], template: function RoleFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 2);
      \u0275\u0275text(4, "Back to Roles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "label");
      \u0275\u0275text(8, "Role Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function RoleFormComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.roleName, $event) || (ctx.roleName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "h3");
      \u0275\u0275text(12, "Permissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "label", 8)(15, "input", 9);
      \u0275\u0275listener("change", function RoleFormComponent_Template_input_change_15_listener($event) {
        return ctx.toggleAll($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "Select All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 10);
      \u0275\u0275template(19, RoleFormComponent_div_19_Template, 5, 2, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(20, RoleFormComponent_div_20_Template, 2, 1, "div", 12);
      \u0275\u0275elementStart(21, "div", 13)(22, "a", 14);
      \u0275\u0275text(23, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 15);
      \u0275\u0275listener("click", function RoleFormComponent_Template_button_click_24_listener() {
        return ctx.save();
      });
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEdit ? "Edit Role" : "Create Role");
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.roleName);
      \u0275\u0275advance(6);
      \u0275\u0275property("checked", ctx.allSelected());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.permissionGroups());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.formError);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Saving..." : ctx.isEdit ? "Update Role" : "Create Role", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.btn-back[_ngcontent-%COMP%] {\n  color: #e31b23;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 14px;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);\n}\n.permissions-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.permissions-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 16px;\n}\n.select-all-row[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 16px;\n}\n.perm-groups[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.perm-group[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 10px;\n  padding: 16px;\n}\n.group-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #374151;\n  margin: 0 0 12px;\n  text-transform: capitalize;\n}\n.perm-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  color: #475569;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: #e31b23;\n  cursor: pointer;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 10px 14px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding-top: 16px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 24px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleFormComponent, { className: "RoleFormComponent", filePath: "src\\app\\features\\admin\\roles\\role-form.component.ts", lineNumber: 83 });
})();
export {
  RoleFormComponent
};
