import {
  ConfirmModalComponent
} from "./chunk-M673IPVF.js";
import {
  ToastService
} from "./chunk-CUQ723YT.js";
import {
  FormsModule
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
  ɵɵtextInterpolate2
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/admin/outlet-locations/outlet-location-list.component.ts
var _c0 = (a0) => ["/admin/outletAddress/edit-outlet", a0];
function OutletLocationListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function OutletLocationListComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "button", 14);
    \u0275\u0275listener("click", function OutletLocationListComponent_tr_25_Template_button_click_12_listener() {
      const loc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.statusItem.set(loc_r2));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "div", 15)(16, "a", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 17);
    \u0275\u0275element(18, "path", 18)(19, "path", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "button", 20);
    \u0275\u0275listener("click", function OutletLocationListComponent_tr_25_Template_button_click_20_listener() {
      const loc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteLocation(loc_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 17);
    \u0275\u0275element(22, "polyline", 21)(23, "path", 22);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const loc_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r2.address || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r2.post_code || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", loc_r2.latitude || "-", ", ", loc_r2.longitude || "-", "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-green", loc_r2.status)("badge-red", !loc_r2.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", loc_r2.status ? "Active" : "Inactive", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, loc_r2.id));
  }
}
function OutletLocationListComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, "No outlet locations found");
    \u0275\u0275elementEnd()();
  }
}
var OutletLocationListComponent = class _OutletLocationListComponent {
  http;
  toast;
  locations = signal([]);
  loading = signal(false);
  deletingItem = signal(null);
  statusItem = signal(null);
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadLocations();
  }
  loadLocations() {
    this.loading.set(true);
    this.http.get(`${environment.apiUrl}/admin/outlet-locations`).subscribe({
      next: (res) => this.locations.set(res.data || []),
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  deleteLocation(loc) {
    this.deletingItem.set(loc);
  }
  confirmDelete() {
    const loc = this.deletingItem();
    if (!loc)
      return;
    this.http.delete(`${environment.apiUrl}/admin/outlet-locations/${loc.id}`).subscribe({
      next: () => {
        this.toast.success("Location deleted successfully");
        this.deletingItem.set(null);
        this.loadLocations();
      },
      error: () => {
        this.toast.error("Failed to delete location");
        this.deletingItem.set(null);
      }
    });
  }
  confirmToggleStatus() {
    const loc = this.statusItem();
    if (!loc)
      return;
    const newStatus = loc.status ? 0 : 1;
    this.http.put(`${environment.apiUrl}/admin/outlet-locations/${loc.id}`, { status: newStatus }).subscribe({
      next: () => {
        loc.status = newStatus;
        this.toast.success("Location status updated");
        this.statusItem.set(null);
      },
      error: () => {
        this.toast.error("Failed to update status");
        this.statusItem.set(null);
      }
    });
  }
  static \u0275fac = function OutletLocationListComponent_Factory(t) {
    return new (t || _OutletLocationListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OutletLocationListComponent, selectors: [["app-outlet-location-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 7, consts: [[1, "page-header"], [1, "page-title"], ["routerLink", "/admin/outletAddress/add", 1, "btn-primary"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["title", "Delete Outlet Location", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], ["title", "Change Status", "confirmText", "Change Status", "type", "warning", 3, "confirmed", "cancelled", "open", "message"], [1, "loading-overlay"], [1, "spinner"], [1, "fw-600"], [1, "text-muted"], [1, "badge", "badge-clickable", 3, "click"], [1, "action-btns"], ["title", "Edit", 1, "action-btn", 3, "routerLink"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Delete", 1, "action-btn", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], ["colspan", "7", 1, "empty-state"]], template: function OutletLocationListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Outlet Locations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 2);
      \u0275\u0275text(4, "+ Add Location");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275template(6, OutletLocationListComponent_div_6_Template, 2, 0, "div", 4);
      \u0275\u0275elementStart(7, "table", 5)(8, "thead")(9, "tr")(10, "th");
      \u0275\u0275text(11, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th");
      \u0275\u0275text(13, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "th");
      \u0275\u0275text(15, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "th");
      \u0275\u0275text(17, "Post Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "Lat / Lng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "tbody");
      \u0275\u0275template(25, OutletLocationListComponent_tr_25_Template, 24, 14, "tr", 6)(26, OutletLocationListComponent_tr_26_Template, 3, 0, "tr", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "app-confirm-modal", 8);
      \u0275\u0275listener("confirmed", function OutletLocationListComponent_Template_app_confirm_modal_confirmed_27_listener() {
        return ctx.confirmDelete();
      })("cancelled", function OutletLocationListComponent_Template_app_confirm_modal_cancelled_27_listener() {
        return ctx.deletingItem.set(null);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "app-confirm-modal", 9);
      \u0275\u0275listener("confirmed", function OutletLocationListComponent_Template_app_confirm_modal_confirmed_28_listener() {
        return ctx.confirmToggleStatus();
      })("cancelled", function OutletLocationListComponent_Template_app_confirm_modal_cancelled_28_listener() {
        return ctx.statusItem.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_6_0;
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.locations());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.locations().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingItem())("message", 'Delete "' + (((tmp_4_0 = ctx.deletingItem()) == null ? null : tmp_4_0.name) || "") + '"? This cannot be undone.');
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.statusItem())("message", 'Change status of "' + (((tmp_6_0 = ctx.statusItem()) == null ? null : tmp_6_0.name) || "") + '" to ' + (((tmp_6_0 = ctx.statusItem()) == null ? null : tmp_6_0.status) ? "Inactive" : "Active") + "?");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e5e7eb;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.fw-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: opacity 0.2s;\n  border: none;\n}\n.badge-clickable[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  color: #64748b;\n  display: inline-flex;\n  text-decoration: none;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #e31b23;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OutletLocationListComponent, { className: "OutletLocationListComponent", filePath: "src\\app\\features\\admin\\outlet-locations\\outlet-location-list.component.ts", lineNumber: 110 });
})();
export {
  OutletLocationListComponent
};
