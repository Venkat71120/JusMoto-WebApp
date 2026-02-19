import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBAOAUH3.js";
import {
  environment
} from "./chunk-OW254BTU.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
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
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/admin/tickets/ticket-detail.component.ts
function TicketDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementEnd();
  }
}
function TicketDetailComponent_div_6_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const msg_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("admin-msg", msg_r3.sender_type === "admin" || msg_r3.is_admin)("user-msg", msg_r3.sender_type !== "admin" && !msg_r3.is_admin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r3.sender_name || (msg_r3.is_admin ? "Admin" : ((tmp_5_0 = ctx_r1.ticket().user) == null ? null : tmp_5_0.name) || "Customer"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r3.message || msg_r3.content || msg_r3.body);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, msg_r3.created_at, "short"));
  }
}
function TicketDetailComponent_div_6_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, "No messages yet");
    \u0275\u0275elementEnd();
  }
}
function TicketDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 8)(2, "div")(3, "h1", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10)(6, "span")(7, "strong");
    \u0275\u0275text(8, "Customer:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span")(11, "strong");
    \u0275\u0275text(12, "Department:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span")(15, "strong");
    \u0275\u0275text(16, "Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 11);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 12)(20, "label");
    \u0275\u0275text(21, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function TicketDetailComponent_div_6_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedStatus, $event) || (ctx_r1.selectedStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function TicketDetailComponent_div_6_Template_select_change_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeStatus());
    });
    \u0275\u0275elementStart(23, "option", 14);
    \u0275\u0275text(24, "Open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 15);
    \u0275\u0275text(26, "In Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 16);
    \u0275\u0275text(28, "Resolved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 17);
    \u0275\u0275text(30, "Closed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 18)(32, "div", 19);
    \u0275\u0275template(33, TicketDetailComponent_div_6_div_33_Template, 8, 10, "div", 20)(34, TicketDetailComponent_div_6_div_34_Template, 2, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 22)(36, "textarea", 23);
    \u0275\u0275twoWayListener("ngModelChange", function TicketDetailComponent_div_6_Template_textarea_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.replyText, $event) || (ctx_r1.replyText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 24);
    \u0275\u0275listener("click", function TicketDetailComponent_div_6_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendReply());
    });
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.ticket().title || ctx_r1.ticket().subject);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = ctx_r1.ticket().user) == null ? null : tmp_2_0.name) || "-", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r1.ticket().department) == null ? null : tmp_3_0.name) || "-", "");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("badge-red", ctx_r1.ticket().priority === "high" || ctx_r1.ticket().priority === "urgent")("badge-yellow", ctx_r1.ticket().priority === "medium")("badge-green", ctx_r1.ticket().priority === "low");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.ticket().priority, " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedStatus);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r1.messages());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.messages().length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.replyText);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.sending() || !ctx_r1.replyText.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.sending() ? "Sending..." : "Send Reply", " ");
  }
}
var TicketDetailComponent = class _TicketDetailComponent {
  http;
  route;
  router;
  ticket = signal(null);
  messages = signal([]);
  loading = signal(false);
  sending = signal(false);
  selectedStatus = "";
  replyText = "";
  ticketId = "";
  constructor(http, route, router) {
    this.http = http;
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    this.ticketId = this.route.snapshot.paramMap.get("id") || "";
    this.loadTicket();
  }
  loadTicket() {
    this.loading.set(true);
    this.http.get(`${environment.apiUrl}/admin/tickets/${this.ticketId}`).subscribe({
      next: (res) => {
        const t = res.data;
        this.ticket.set(t);
        this.selectedStatus = t.status || "open";
        this.messages.set(t.chat_messages || t.messages || []);
      },
      error: () => this.router.navigate(["/admin/support-ticket/tickets"]),
      complete: () => this.loading.set(false)
    });
  }
  changeStatus() {
    this.http.put(`${environment.apiUrl}/admin/tickets/${this.ticketId}`, { status: this.selectedStatus }).subscribe({
      next: () => {
      },
      error: () => {
      }
    });
  }
  sendReply() {
    if (!this.replyText.trim())
      return;
    this.sending.set(true);
    this.http.post(`${environment.apiUrl}/admin/tickets/${this.ticketId}/reply`, { message: this.replyText }).subscribe({
      next: () => {
        this.replyText = "";
        this.loadTicket();
      },
      error: () => {
      },
      complete: () => this.sending.set(false)
    });
  }
  static \u0275fac = function TicketDetailComponent_Factory(t) {
    return new (t || _TicketDetailComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketDetailComponent, selectors: [["app-ticket-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 2, consts: [["routerLink", "/admin/support-ticket/tickets", 1, "back-link"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], ["class", "loading-center", 4, "ngIf"], [4, "ngIf"], [1, "loading-center"], [1, "spinner"], [1, "ticket-header"], [1, "page-title"], [1, "ticket-meta"], [1, "badge"], [1, "status-control"], [3, "ngModelChange", "change", "ngModel"], ["value", "open"], ["value", "in_progress"], ["value", "resolved"], ["value", "closed"], [1, "chat-container"], [1, "messages-area"], ["class", "message-bubble", 3, "admin-msg", "user-msg", 4, "ngFor", "ngForOf"], ["class", "no-messages", 4, "ngIf"], [1, "reply-box"], ["placeholder", "Type your reply...", "rows", "3", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click", "disabled"], [1, "message-bubble"], [1, "msg-sender"], [1, "msg-text"], [1, "msg-time"], [1, "no-messages"]], template: function TicketDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1);
      \u0275\u0275element(2, "path", 2)(3, "polyline", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Back to Tickets ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, TicketDetailComponent_div_5_Template, 2, 0, "div", 4)(6, TicketDetailComponent_div_6_Template, 39, 16, "div", 5);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.ticket());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  color: #64748b;\n  text-decoration: none;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 8px;\n}\n.ticket-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n  background: #fff;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.ticket-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  font-size: 14px;\n  color: #64748b;\n}\n.ticket-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.status-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.status-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #334155;\n  font-size: 14px;\n}\n.status-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.status-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge-yellow[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.chat-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.messages-area[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-height: 500px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: #f8f9fa;\n}\n.message-bubble[_ngcontent-%COMP%] {\n  max-width: 70%;\n  padding: 12px 16px;\n  border-radius: 12px;\n}\n.user-msg[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  background: #e5e7eb;\n  color: #334155;\n  border-bottom-left-radius: 4px;\n}\n.admin-msg[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  background: #fde8e9;\n  color: #1a1a2e;\n  border-bottom-right-radius: 4px;\n}\n.msg-sender[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  margin-bottom: 4px;\n  color: #64748b;\n}\n.admin-msg[_ngcontent-%COMP%]   .msg-sender[_ngcontent-%COMP%] {\n  color: #e31b23;\n}\n.msg-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.5;\n}\n.msg-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  margin-top: 6px;\n  text-align: right;\n}\n.no-messages[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n}\n.reply-box[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  gap: 12px;\n  align-items: flex-end;\n}\n.reply-box[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  resize: vertical;\n  font-family: inherit;\n}\n.reply-box[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketDetailComponent, { className: "TicketDetailComponent", filePath: "src\\app\\features\\admin\\tickets\\ticket-detail.component.ts", lineNumber: 106 });
})();
export {
  TicketDetailComponent
};
