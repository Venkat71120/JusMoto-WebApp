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
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-5WG63XSG.js";
import {
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/admin/users/user-list.component.ts
var _c0 = (a0) => ["/admin/user/details", a0];
function UserListComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 24)(5, "div", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "button", 26);
    \u0275\u0275listener("click", function UserListComponent_tr_41_Template_button_click_14_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.statusUser.set(user_r2));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "span", 27);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "div", 28)(24, "a", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 30);
    \u0275\u0275element(26, "path", 31)(27, "circle", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "button", 33);
    \u0275\u0275listener("click", function UserListComponent_tr_41_Template_button_click_28_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleStatus(user_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 30);
    \u0275\u0275element(30, "path", 34)(31, "polyline", 35)(32, "line", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "button", 37);
    \u0275\u0275listener("click", function UserListComponent_tr_41_Template_button_click_33_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteUser(user_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 30);
    \u0275\u0275element(35, "polyline", 38)(36, "path", 39);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.pagination().page - 1) * ctx_r2.pagination().limit + i_r4 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r2.getAvatarColor(user_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getInitials(user_r2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", user_r2.first_name || "", " ", user_r2.last_name || "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.phone || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-active", user_r2.status)("badge-inactive", !user_r2.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r2.status ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-active", user_r2.email_verified)("badge-warning", !user_r2.email_verified);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r2.email_verified ? "Yes" : "No", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 20, user_r2.created_at, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(23, _c0, user_r2.id));
  }
}
function UserListComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2, "No users found");
    \u0275\u0275elementEnd()();
  }
}
function UserListComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "button", 42);
    \u0275\u0275listener("click", function UserListComponent_div_43_Template_button_click_1_listener() {
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
    \u0275\u0275listener("click", function UserListComponent_div_43_Template_button_click_5_listener() {
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
var UserListComponent = class _UserListComponent {
  http;
  toast;
  users = signal([]);
  loading = signal(false);
  search = "";
  statusFilter = "";
  pagination = signal({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  deletingUser = signal(null);
  statusUser = signal(null);
  searchTimeout;
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers(page = 1) {
    this.loading.set(true);
    const params = { page, limit: 15 };
    if (this.search)
      params.search = this.search;
    if (this.statusFilter)
      params.status = this.statusFilter;
    this.http.get(`${environment.apiUrl}/admin/users`, { params }).subscribe({
      next: (res) => {
        this.users.set(res.data || []);
        this.pagination.set(res.pagination || {});
      },
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadUsers(), 400);
  }
  goToPage(page) {
    this.loadUsers(page);
  }
  toggleStatus(user) {
    this.statusUser.set(user);
  }
  confirmToggleStatus() {
    const user = this.statusUser();
    if (!user)
      return;
    const newStatus = user.status ? 0 : 1;
    this.http.put(`${environment.apiUrl}/admin/users/${user.id}/status`, { status: newStatus }).subscribe({
      next: () => {
        user.status = newStatus;
        this.toast.success("User status updated");
        this.statusUser.set(null);
      },
      error: () => {
        this.toast.error("Failed to update status");
        this.statusUser.set(null);
      }
    });
  }
  deleteUser(user) {
    this.deletingUser.set(user);
  }
  confirmDelete() {
    const user = this.deletingUser();
    if (!user)
      return;
    this.http.delete(`${environment.apiUrl}/admin/users/${user.id}`).subscribe({
      next: () => {
        this.toast.success("User deleted successfully");
        this.deletingUser.set(null);
        this.loadUsers(this.pagination().page);
      },
      error: () => {
        this.toast.error("Failed to delete user");
        this.deletingUser.set(null);
      }
    });
  }
  getInitials(user) {
    const f = (user.first_name || "")[0] || "";
    const l = (user.last_name || "")[0] || "";
    return (f + l).toUpperCase() || user.email?.[0]?.toUpperCase() || "?";
  }
  getAvatarColor(id) {
    const colors = ["#e31b23", "#3b82f6", "#8b5cf6", "#06b6d4", "#f59e0b", "#10b981"];
    return colors[id % colors.length];
  }
  static \u0275fac = function UserListComponent_Factory(t) {
    return new (t || _UserListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserListComponent, selectors: [["app-user-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 11, consts: [[1, "page-header"], [1, "page-title"], [1, "total-badge"], [1, "filters-bar"], [1, "search-box"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#94a3b8", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search users...", 3, "ngModelChange", "input", "ngModel"], [1, "filter-group"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "1"], ["value", "0"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], ["title", "Delete User", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], ["title", "Change User Status", "confirmText", "Change Status", "type", "warning", 3, "confirmed", "cancelled", "open", "message"], [1, "loading-overlay"], [1, "spinner"], [1, "user-cell"], [1, "avatar"], [1, "badge", "badge-clickable", 3, "click"], [1, "badge"], [1, "action-btns"], ["title", "View", 1, "btn-action", "btn-view", 3, "routerLink"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["title", "Toggle Status", 1, "btn-action", "btn-toggle", 3, "click"], ["d", "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], ["title", "Delete", 1, "btn-action", "btn-delete", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], ["colspan", "8", 1, "empty-state"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function UserListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Users Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "span", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 5);
      \u0275\u0275element(8, "circle", 6)(9, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function UserListComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function UserListComponent_Template_input_input_10_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 9)(12, "select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function UserListComponent_Template_select_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UserListComponent_Template_select_change_12_listener() {
        return ctx.loadUsers();
      });
      \u0275\u0275elementStart(13, "option", 11);
      \u0275\u0275text(14, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 12);
      \u0275\u0275text(16, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 13);
      \u0275\u0275text(18, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 14);
      \u0275\u0275template(20, UserListComponent_div_20_Template, 2, 0, "div", 15);
      \u0275\u0275elementStart(21, "table", 16)(22, "thead")(23, "tr")(24, "th");
      \u0275\u0275text(25, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "Verified");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37, "Joined");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th");
      \u0275\u0275text(39, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "tbody");
      \u0275\u0275template(41, UserListComponent_tr_41_Template, 37, 25, "tr", 17)(42, UserListComponent_tr_42_Template, 3, 0, "tr", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(43, UserListComponent_div_43_Template, 7, 4, "div", 19);
      \u0275\u0275elementStart(44, "app-confirm-modal", 20);
      \u0275\u0275listener("confirmed", function UserListComponent_Template_app_confirm_modal_confirmed_44_listener() {
        return ctx.confirmDelete();
      })("cancelled", function UserListComponent_Template_app_confirm_modal_cancelled_44_listener() {
        return ctx.deletingUser.set(null);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "app-confirm-modal", 21);
      \u0275\u0275listener("confirmed", function UserListComponent_Template_app_confirm_modal_confirmed_45_listener() {
        return ctx.confirmToggleStatus();
      })("cancelled", function UserListComponent_Template_app_confirm_modal_cancelled_45_listener() {
        return ctx.statusUser.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_8_0;
      let tmp_10_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.pagination().total, " total");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.users());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.users().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pagination().totalPages > 1);
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingUser())("message", 'Delete user "' + (((tmp_8_0 = ctx.deletingUser()) == null ? null : tmp_8_0.first_name) || ((tmp_8_0 = ctx.deletingUser()) == null ? null : tmp_8_0.email) || "") + '"? This cannot be undone.');
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.statusUser())("message", 'Change status of "' + (((tmp_10_0 = ctx.statusUser()) == null ? null : tmp_10_0.first_name) || ((tmp_10_0 = ctx.statusUser()) == null ? null : tmp_10_0.email) || "") + '" to ' + (((tmp_10_0 = ctx.statusUser()) == null ? null : tmp_10_0.status) ? "Inactive" : "Active") + "?");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.total-badge[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #e31b23;\n  padding: 4px 14px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 0 14px;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  width: 100%;\n  font-size: 14px;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 14px;\n  cursor: pointer;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-top: 1px solid #f1f5f9;\n  font-size: 14px;\n  color: #334155;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: opacity 0.2s;\n  border: none;\n}\n.badge-clickable[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.badge-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n}\n.btn-view[_ngcontent-%COMP%]:hover {\n  color: #3b82f6;\n  border-color: #3b82f6;\n}\n.btn-toggle[_ngcontent-%COMP%]:hover {\n  color: #f59e0b;\n  border-color: #f59e0b;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  border-color: #ef4444;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 20px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 500;\n  color: #334155;\n  transition: all 0.2s;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n}\n@media (max-width: 768px) {\n  .table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .data-table[_ngcontent-%COMP%] {\n    min-width: 700px;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListComponent, { className: "UserListComponent", filePath: "src\\app\\features\\admin\\users\\user-list.component.ts", lineNumber: 160 });
})();
export {
  UserListComponent
};
