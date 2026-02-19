import {
  FormsModule
} from "./chunk-X7FFWIXK.js";
import {
  environment
} from "./chunk-GUDC7RY7.js";
import {
  HttpClient
} from "./chunk-7QXR32YF.js";
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/admin/notifications/notification-list.component.ts
function NotificationListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function NotificationListComponent_tr_21_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function NotificationListComponent_tr_21_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const notif_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.markAsRead(notif_r2));
    });
    \u0275\u0275text(1, " Mark as Read ");
    \u0275\u0275elementEnd();
  }
}
function NotificationListComponent_tr_21_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "--");
    \u0275\u0275elementEnd();
  }
}
function NotificationListComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, NotificationListComponent_tr_21_button_15_Template, 2, 0, "button", 13)(16, NotificationListComponent_tr_21_span_16_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notif_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("unread-row", !notif_r2.read_at && notif_r2.status !== "read");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.pagination().page - 1) * ctx_r2.pagination().limit + i_r4 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notif_r2.type || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r2.message || (notif_r2.data == null ? null : notif_r2.data.message) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-blue", !notif_r2.read_at && notif_r2.status !== "read")("badge-gray", notif_r2.read_at || notif_r2.status === "read");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", notif_r2.read_at || notif_r2.status === "read" ? "Read" : "Unread", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 13, notif_r2.created_at, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !notif_r2.read_at && notif_r2.status !== "read");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notif_r2.read_at || notif_r2.status === "read");
  }
}
function NotificationListComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 17);
    \u0275\u0275text(2, "No notifications found");
    \u0275\u0275elementEnd()();
  }
}
function NotificationListComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275listener("click", function NotificationListComponent_div_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.pagination().page - 1));
    });
    \u0275\u0275text(2, "\xAB Prev");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function NotificationListComponent_div_23_Template_button_click_5_listener() {
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
var NotificationListComponent = class _NotificationListComponent {
  http;
  notifications = signal([]);
  loading = signal(false);
  pagination = signal({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.loadNotifications();
  }
  loadNotifications(page = 1) {
    this.loading.set(true);
    const params = { page, limit: 15 };
    this.http.get(`${environment.apiUrl}/admin/notifications`, { params }).subscribe({
      next: (res) => {
        this.notifications.set(res.data || []);
        this.pagination.set(res.pagination || {});
      },
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  goToPage(page) {
    this.loadNotifications(page);
  }
  markAsRead(notif) {
    this.http.put(`${environment.apiUrl}/admin/notifications/${notif.id}/read`, {}).subscribe({
      next: () => this.loadNotifications(this.pagination().page)
    });
  }
  static \u0275fac = function NotificationListComponent_Factory(t) {
    return new (t || _NotificationListComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationListComponent, selectors: [["app-notification-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 4, consts: [[1, "page-header"], [1, "page-title"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [3, "unread-row", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "loading-overlay"], [1, "spinner"], [1, "type-badge"], [1, "msg-cell"], [1, "badge"], ["class", "btn-mark", 3, "click", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "btn-mark", 3, "click"], [1, "text-muted"], ["colspan", "6", 1, "empty-state"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function NotificationListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275template(4, NotificationListComponent_div_4_Template, 2, 0, "div", 3);
      \u0275\u0275elementStart(5, "table", 4)(6, "thead")(7, "tr")(8, "th");
      \u0275\u0275text(9, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "th");
      \u0275\u0275text(11, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th");
      \u0275\u0275text(13, "Message");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "th");
      \u0275\u0275text(15, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "th");
      \u0275\u0275text(17, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "tbody");
      \u0275\u0275template(21, NotificationListComponent_tr_21_Template, 17, 16, "tr", 5)(22, NotificationListComponent_tr_22_Template, 3, 0, "tr", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(23, NotificationListComponent_div_23_Template, 7, 4, "div", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", ctx.notifications());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.notifications().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pagination().totalPages > 1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e5e7eb;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.unread-row[_ngcontent-%COMP%] {\n  background: #fef5f5;\n}\n.type-badge[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  padding: 3px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.msg-cell[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.badge-gray[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.btn-mark[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #e31b23;\n  color: #e31b23;\n  padding: 5px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-mark[_ngcontent-%COMP%]:hover {\n  background: #e31b23;\n  color: #fff;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  align-items: center;\n  margin-top: 24px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 500;\n  color: #334155;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n}\n/*# sourceMappingURL=notification-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationListComponent, { className: "NotificationListComponent", filePath: "src\\app\\features\\admin\\notifications\\notification-list.component.ts", lineNumber: 88 });
})();
export {
  NotificationListComponent
};
//# sourceMappingURL=chunk-7JA5R44N.js.map
