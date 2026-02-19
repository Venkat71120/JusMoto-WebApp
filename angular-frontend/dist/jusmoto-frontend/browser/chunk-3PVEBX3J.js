import {
  ConfirmModalComponent
} from "./chunk-GQMX7FRF.js";
import {
  ToastService
} from "./chunk-JBYXSY66.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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
  SlicePipe,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/admin/reviews/review-list.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
function ReviewListComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function ReviewListComponent_tr_35_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const review_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("star-filled", s_r2 <= review_r3.rating)("star-empty", s_r2 > review_r3.rating);
  }
}
function ReviewListComponent_tr_35_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function ReviewListComponent_tr_35_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const review_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.changeStatus(review_r3, "approved"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 26);
    \u0275\u0275element(2, "polyline", 30);
    \u0275\u0275elementEnd()();
  }
}
function ReviewListComponent_tr_35_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function ReviewListComponent_tr_35_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const review_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.changeStatus(review_r3, "rejected"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 26);
    \u0275\u0275element(2, "line", 32)(3, "line", 33);
    \u0275\u0275elementEnd()();
  }
}
function ReviewListComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 18);
    \u0275\u0275template(9, ReviewListComponent_tr_35_span_9_Template, 2, 4, "span", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 20);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 21);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "div", 22);
    \u0275\u0275template(21, ReviewListComponent_tr_35_button_21_Template, 3, 0, "button", 23)(22, ReviewListComponent_tr_35_button_22_Template, 4, 0, "button", 24);
    \u0275\u0275elementStart(23, "button", 25);
    \u0275\u0275listener("click", function ReviewListComponent_tr_35_Template_button_click_23_listener() {
      const review_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.deleteReview(review_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 26);
    \u0275\u0275element(25, "polyline", 27)(26, "path", 28);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const review_r3 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r4.pagination().page - 1) * ctx_r4.pagination().limit + i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((review_r3.user == null ? null : review_r3.user.name) || review_r3.reviewer_name || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((review_r3.service == null ? null : review_r3.service.name) || review_r3.service_name || "-");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(22, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((review_r3.message == null ? null : review_r3.message.length) > 60 ? \u0275\u0275pipeBind3(12, 15, review_r3.message, 0, 60) + "..." : review_r3.message);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-yellow", review_r3.status === "pending")("badge-green", review_r3.status === "approved")("badge-red", review_r3.status === "rejected");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", review_r3.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 19, review_r3.created_at, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", review_r3.status !== "approved");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", review_r3.status !== "rejected");
  }
}
function ReviewListComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275text(2, "No reviews found");
    \u0275\u0275elementEnd()();
  }
}
function ReviewListComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "button", 36);
    \u0275\u0275listener("click", function ReviewListComponent_div_37_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goToPage(ctx_r4.pagination().page - 1));
    });
    \u0275\u0275text(2, "\xAB Prev");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 36);
    \u0275\u0275listener("click", function ReviewListComponent_div_37_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goToPage(ctx_r4.pagination().page + 1));
    });
    \u0275\u0275text(6, "Next \xBB");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r4.pagination().hasPrevPage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r4.pagination().page, " of ", ctx_r4.pagination().totalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r4.pagination().hasNextPage);
  }
}
var ReviewListComponent = class _ReviewListComponent {
  http;
  toast;
  reviews = signal([]);
  loading = signal(false);
  deletingItem = signal(null);
  statusFilter = "";
  pagination = signal({ page: 1, limit: 15, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false });
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadReviews();
  }
  loadReviews(page = 1) {
    this.loading.set(true);
    const params = { page, limit: 15 };
    if (this.statusFilter)
      params.status = this.statusFilter;
    this.http.get(`${environment.apiUrl}/admin/reviews`, { params }).subscribe({
      next: (res) => {
        this.reviews.set(res.data || []);
        this.pagination.set(res.pagination || {});
      },
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  goToPage(page) {
    this.loadReviews(page);
  }
  changeStatus(review, status) {
    this.http.put(`${environment.apiUrl}/admin/reviews/${review.id}`, { status }).subscribe({
      next: () => {
        this.toast.success("Review status updated");
        this.loadReviews(this.pagination().page);
      },
      error: () => this.toast.error("Failed to update review status")
    });
  }
  deleteReview(review) {
    this.deletingItem.set(review);
  }
  confirmDelete() {
    const review = this.deletingItem();
    if (!review)
      return;
    this.http.delete(`${environment.apiUrl}/admin/reviews/${review.id}`).subscribe({
      next: () => {
        this.toast.success("Review deleted successfully");
        this.deletingItem.set(null);
        this.loadReviews(this.pagination().page);
      },
      error: () => {
        this.toast.error("Failed to delete review");
        this.deletingItem.set(null);
      }
    });
  }
  static \u0275fac = function ReviewListComponent_Factory(t) {
    return new (t || _ReviewListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewListComponent, selectors: [["app-review-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 7, consts: [[1, "page-header"], [1, "page-title"], [1, "filters-bar"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "pending"], ["value", "approved"], ["value", "rejected"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], ["title", "Delete Review", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], [1, "loading-overlay"], [1, "spinner"], [1, "fw-600"], [1, "stars"], [3, "star-filled", "star-empty", 4, "ngFor", "ngForOf"], [1, "msg-cell"], [1, "badge"], [1, "action-btns"], ["class", "action-btn btn-approve", "title", "Approve", 3, "click", 4, "ngIf"], ["class", "action-btn btn-reject", "title", "Reject", 3, "click", 4, "ngIf"], ["title", "Delete", 1, "action-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], ["title", "Approve", 1, "action-btn", "btn-approve", 3, "click"], ["points", "20 6 9 17 4 12"], ["title", "Reject", 1, "action-btn", "btn-reject", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["colspan", "8", 1, "empty-state"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function ReviewListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Reviews");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2)(4, "select", 3);
      \u0275\u0275twoWayListener("ngModelChange", function ReviewListComponent_Template_select_ngModelChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ReviewListComponent_Template_select_change_4_listener() {
        return ctx.loadReviews();
      });
      \u0275\u0275elementStart(5, "option", 4);
      \u0275\u0275text(6, "All Statuses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "option", 5);
      \u0275\u0275text(8, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "option", 6);
      \u0275\u0275text(10, "Approved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "Rejected");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 8);
      \u0275\u0275template(14, ReviewListComponent_div_14_Template, 2, 0, "div", 9);
      \u0275\u0275elementStart(15, "table", 10)(16, "thead")(17, "tr")(18, "th");
      \u0275\u0275text(19, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Reviewer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Rating");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Message");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "tbody");
      \u0275\u0275template(35, ReviewListComponent_tr_35_Template, 27, 23, "tr", 11)(36, ReviewListComponent_tr_36_Template, 3, 0, "tr", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(37, ReviewListComponent_div_37_Template, 7, 4, "div", 13);
      \u0275\u0275elementStart(38, "app-confirm-modal", 14);
      \u0275\u0275listener("confirmed", function ReviewListComponent_Template_app_confirm_modal_confirmed_38_listener() {
        return ctx.confirmDelete();
      })("cancelled", function ReviewListComponent_Template_app_confirm_modal_cancelled_38_listener() {
        return ctx.deletingItem.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.reviews());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reviews().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pagination().totalPages > 1);
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingItem())("message", "Delete this review? This cannot be undone.");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: #fff;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e5e7eb;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.fw-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.msg-cell[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.stars[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.star-filled[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.star-empty[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge-yellow[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  color: #64748b;\n  display: inline-flex;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #e31b23;\n}\n.btn-approve[_ngcontent-%COMP%]:hover {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.btn-reject[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  align-items: center;\n  margin-top: 24px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 500;\n  color: #334155;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n}\n/*# sourceMappingURL=review-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewListComponent, { className: "ReviewListComponent", filePath: "src\\app\\features\\admin\\reviews\\review-list.component.ts", lineNumber: 134 });
})();
export {
  ReviewListComponent
};
//# sourceMappingURL=chunk-3PVEBX3J.js.map
