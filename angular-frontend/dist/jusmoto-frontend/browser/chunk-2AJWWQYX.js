import {
  environment
} from "./chunk-OW254BTU.js";
import {
  RouterModule
} from "./chunk-DYL6AOBP.js";
import {
  HttpClient
} from "./chunk-L2KTGN5G.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵtextInterpolate2
} from "./chunk-5RHIFAVQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MEBOPP65.js";

// src/app/features/client/notifications/notifications.component.ts
function NotificationsComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function NotificationsComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markAllAsRead());
    });
    \u0275\u0275text(1, " Mark All as Read ");
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading notifications...");
    \u0275\u0275elementEnd()();
  }
}
function NotificationsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2, "\u{1F514}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "You're all caught up! Check back later for updates.");
    \u0275\u0275elementEnd()();
  }
}
function NotificationsComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("click", function NotificationsComponent_div_10_div_1_Template_div_click_0_listener() {
      const notification_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleNotificationClick(notification_r4));
    });
    \u0275\u0275elementStart(1, "div", 16)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 17)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 18);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 19);
    \u0275\u0275listener("click", function NotificationsComponent_div_10_div_1_Template_button_click_12_listener($event) {
      const notification_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteNotification($event, notification_r4.id));
    });
    \u0275\u0275text(13, " \xD7 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notification_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("unread", !notification_r4.read_at);
    \u0275\u0275advance();
    \u0275\u0275classMap("type-" + notification_r4.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getIcon(notification_r4.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notification_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r4.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 8, notification_r4.created_at, "medium"));
  }
}
function NotificationsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, NotificationsComponent_div_10_div_1_Template, 14, 11, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.notifications());
  }
}
function NotificationsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275listener("click", function NotificationsComponent_div_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275text(2, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function NotificationsComponent_div_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275text(6, " Next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.currentPage(), " of ", ctx_r1.totalPages(), "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage() === ctx_r1.totalPages());
  }
}
var NotificationsComponent = class _NotificationsComponent {
  http;
  notifications = signal([]);
  loading = signal(true);
  currentPage = signal(1);
  totalPages = signal(1);
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.loadNotifications();
  }
  loadNotifications() {
    this.loading.set(true);
    this.http.get(`${environment.apiUrl}/notifications`, {
      params: { page: this.currentPage().toString() }
    }).subscribe({
      next: (response) => {
        this.notifications.set(response.data || response.notifications || []);
        this.totalPages.set(response.meta?.last_page || response.totalPages || 1);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  getIcon(type) {
    const icons = {
      order: "\u{1F4E6}",
      payment: "\u{1F4B3}",
      challan: "\u{1F697}",
      ticket: "\u{1F3AB}",
      promo: "\u{1F389}",
      system: "\u2699\uFE0F"
    };
    return icons[type] || "\u{1F514}";
  }
  handleNotificationClick(notification) {
    if (!notification.read_at) {
      this.markAsRead(notification.id);
    }
    if (notification.data?.url) {
      window.location.href = notification.data.url;
    }
  }
  markAsRead(id) {
    this.http.post(`${environment.apiUrl}/notifications/${id}/read`, {}).subscribe({
      next: () => {
        this.notifications.update((items) => items.map((n) => n.id === id ? __spreadProps(__spreadValues({}, n), { read_at: (/* @__PURE__ */ new Date()).toISOString() }) : n));
      }
    });
  }
  markAllAsRead() {
    this.http.post(`${environment.apiUrl}/notifications/read-all`, {}).subscribe({
      next: () => {
        this.notifications.update((items) => items.map((n) => __spreadProps(__spreadValues({}, n), { read_at: (/* @__PURE__ */ new Date()).toISOString() })));
      }
    });
  }
  deleteNotification(event, id) {
    event.stopPropagation();
    this.http.delete(`${environment.apiUrl}/notifications/${id}`).subscribe({
      next: () => {
        this.notifications.update((items) => items.filter((n) => n.id !== id));
      }
    });
  }
  goToPage(page) {
    this.currentPage.set(page);
    this.loadNotifications();
  }
  static \u0275fac = function NotificationsComponent_Factory(t) {
    return new (t || _NotificationsComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsComponent, selectors: [["app-notifications"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 5, consts: [[1, "notifications-container"], [1, "page-header"], [1, "header-content"], ["class", "btn-outline", 3, "click", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "notifications-list", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "btn-outline", 3, "click"], [1, "loading"], [1, "spinner"], [1, "empty-state"], [1, "empty-icon"], [1, "notifications-list"], ["class", "notification-card", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "notification-card", 3, "click"], [1, "notification-icon"], [1, "notification-content"], [1, "notification-time"], ["title", "Delete", 1, "delete-btn", 3, "click"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function NotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Stay updated with your orders and account activity");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, NotificationsComponent_button_7_Template, 2, 0, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, NotificationsComponent_div_8_Template, 4, 0, "div", 4)(9, NotificationsComponent_div_9_Template, 7, 0, "div", 5)(10, NotificationsComponent_div_10_Template, 2, 1, "div", 6)(11, NotificationsComponent_div_11_Template, 7, 4, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.notifications().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.notifications().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.notifications().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages() > 1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule], styles: ["\n\n.notifications-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  color: #444;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: #0066cc;\n  color: #0066cc;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #0066cc;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.notifications-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.notification-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 20px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n}\n.notification-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.notification-card.unread[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  border-left: 4px solid #0066cc;\n}\n.notification-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.type-order[_ngcontent-%COMP%] {\n  background: #dbeafe;\n}\n.type-payment[_ngcontent-%COMP%] {\n  background: #d1fae5;\n}\n.type-challan[_ngcontent-%COMP%] {\n  background: #fef3c7;\n}\n.type-ticket[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n}\n.type-promo[_ngcontent-%COMP%] {\n  background: #fce7f3;\n}\n.type-system[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}\n.notification-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notification-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 6px;\n}\n.notification-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0 0 8px;\n  line-height: 1.5;\n}\n.notification-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: #888;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  transition: all 0.2s;\n}\n.notification-card[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #dc3545;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  margin-top: 24px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "src\\app\\features\\client\\notifications\\notifications.component.ts", lineNumber: 279 });
})();
export {
  NotificationsComponent
};
