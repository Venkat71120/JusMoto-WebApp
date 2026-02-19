import {
  TicketService
} from "./chunk-NMNKT4XS.js";
import "./chunk-XSC2IEYW.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-77LM5CPK.js";
import {
  AuthService
} from "./chunk-BZ2LTEHJ.js";
import "./chunk-GUDC7RY7.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-CMH3GDQY.js";
import "./chunk-TT3LTPCS.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  TitleCasePipe,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/client/tickets/ticket-detail.component.ts
function ClientTicketDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading ticket...");
    \u0275\u0275elementEnd()();
  }
}
function ClientTicketDetailComponent_div_5_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "a", 29);
    \u0275\u0275text(2, " \u{1F4CE} View Attachment ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.ticket().attachment, \u0275\u0275sanitizeUrl);
  }
}
function ClientTicketDetailComponent_div_5_div_37_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "a", 29);
    \u0275\u0275text(2, " \u{1F4CE} View Attachment ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reply_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", reply_r2.attachment, \u0275\u0275sanitizeUrl);
  }
}
function ClientTicketDetailComponent_div_5_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 23)(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ClientTicketDetailComponent_div_5_div_37_div_14_Template, 3, 1, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reply_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("admin-reply", reply_r2.is_admin);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("admin-avatar", reply_r2.is_admin);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reply_r2.is_admin ? "S" : ctx_r0.getInitials(reply_r2.user == null ? null : reply_r2.user.first_name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", reply_r2.is_admin ? "Support Team" : (reply_r2.user == null ? null : reply_r2.user.first_name) + " " + (reply_r2.user == null ? null : reply_r2.user.last_name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 9, reply_r2.created_at, "medium"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(reply_r2.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reply_r2.attachment);
  }
}
function ClientTicketDetailComponent_div_5_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "h3");
    \u0275\u0275text(2, "Add Reply");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 32);
    \u0275\u0275listener("ngSubmit", function ClientTicketDetailComponent_div_5_div_38_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submitReply());
    });
    \u0275\u0275element(4, "textarea", 33);
    \u0275\u0275elementStart(5, "div", 34)(6, "input", 35);
    \u0275\u0275listener("change", function ClientTicketDetailComponent_div_5_div_38_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onFileSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.replyForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.submitting() || ctx_r0.replyForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitting() ? "Sending..." : "Send Reply", " ");
  }
}
function ClientTicketDetailComponent_div_5_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "p");
    \u0275\u0275text(2, "This ticket has been closed. If you need further assistance, please create a new ticket.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 38);
    \u0275\u0275text(4, "Create New Ticket");
    \u0275\u0275elementEnd()();
  }
}
function ClientTicketDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 11)(9, "span", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 13);
    \u0275\u0275text(12, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 14);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 13);
    \u0275\u0275text(17, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 15);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 16)(22, "div", 17)(23, "div", 18)(24, "div", 19)(25, "div", 20);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div")(28, "span", 21);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 22);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 23)(34, "p");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, ClientTicketDetailComponent_div_5_div_36_Template, 3, 1, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, ClientTicketDetailComponent_div_5_div_37_Template, 15, 12, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, ClientTicketDetailComponent_div_5_div_38_Template, 9, 3, "div", 26)(39, ClientTicketDetailComponent_div_5_div_39_Template, 5, 0, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.ticket().subject);
    \u0275\u0275advance();
    \u0275\u0275classMap("status-" + ctx_r0.ticket().status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 16, ctx_r0.ticket().status), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", ctx_r0.ticket().ticket_number || ctx_r0.ticket().id, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 18, ctx_r0.ticket().category));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Created ", \u0275\u0275pipeBind2(20, 20, ctx_r0.ticket().created_at, "mediumDate"), "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getInitials(ctx_r0.currentUser == null ? null : ctx_r0.currentUser.first_name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.currentUser == null ? null : ctx_r0.currentUser.first_name, " ", ctx_r0.currentUser == null ? null : ctx_r0.currentUser.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 23, ctx_r0.ticket().created_at, "medium"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.ticket().message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ticket().attachment);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.ticket().replies);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ticket().status !== "closed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ticket().status === "closed");
  }
}
var ClientTicketDetailComponent = class _ClientTicketDetailComponent {
  route;
  router;
  fb;
  ticketService;
  authService;
  ticket = signal(null);
  loading = signal(true);
  submitting = signal(false);
  replyForm;
  selectedFile = null;
  currentUser;
  constructor(route, router, fb, ticketService, authService) {
    this.route = route;
    this.router = router;
    this.fb = fb;
    this.ticketService = ticketService;
    this.authService = authService;
    this.replyForm = this.fb.group({
      message: ["", Validators.required]
    });
    this.currentUser = this.authService.currentUser;
  }
  ngOnInit() {
    const ticketId = this.route.snapshot.paramMap.get("id");
    if (ticketId) {
      this.loadTicket(+ticketId);
    }
  }
  loadTicket(id) {
    this.loading.set(true);
    this.ticketService.getTicket(id).subscribe({
      next: (response) => {
        this.ticket.set(response.data || response.ticket || response);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.router.navigate(["/client/tickets"]);
      }
    });
  }
  getInitials(name) {
    if (!name)
      return "U";
    return name.charAt(0).toUpperCase();
  }
  onFileSelect(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
  submitReply() {
    if (this.replyForm.invalid)
      return;
    this.submitting.set(true);
    const formData = new FormData();
    formData.append("message", this.replyForm.value.message);
    if (this.selectedFile) {
      formData.append("attachment", this.selectedFile);
    }
    this.ticketService.replyToTicket(this.ticket().id, formData).subscribe({
      next: () => {
        this.submitting.set(false);
        this.replyForm.reset();
        this.selectedFile = null;
        this.loadTicket(this.ticket().id);
      },
      error: () => {
        this.submitting.set(false);
        alert("Failed to send reply. Please try again.");
      }
    });
  }
  static \u0275fac = function ClientTicketDetailComponent_Factory(t) {
    return new (t || _ClientTicketDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TicketService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientTicketDetailComponent, selectors: [["app-client-ticket-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 2, consts: [[1, "ticket-detail-container"], [1, "back-link"], ["routerLink", "/client/tickets"], ["class", "loading", 4, "ngIf"], ["class", "ticket-content", 4, "ngIf"], [1, "loading"], [1, "spinner"], [1, "ticket-content"], [1, "ticket-header-card"], [1, "ticket-title"], [1, "status-badge"], [1, "ticket-meta"], [1, "ticket-id"], [1, "separator"], [1, "category"], [1, "date"], [1, "messages-section"], [1, "message-card", "original"], [1, "message-header"], [1, "user-info"], [1, "avatar"], [1, "user-name"], [1, "message-time"], [1, "message-body"], ["class", "attachment", 4, "ngIf"], ["class", "message-card", 3, "admin-reply", 4, "ngFor", "ngForOf"], ["class", "reply-section", 4, "ngIf"], ["class", "closed-notice", 4, "ngIf"], [1, "attachment"], ["target", "_blank", 1, "attachment-link", 3, "href"], [1, "message-card"], [1, "reply-section"], [3, "ngSubmit", "formGroup"], ["formControlName", "message", "rows", "4", "placeholder", "Type your reply here...", 1, "form-control"], [1, "reply-actions"], ["type", "file", "accept", "image/*,.pdf,.doc,.docx", 1, "file-input", 3, "change"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "closed-notice"], ["routerLink", "/client/tickets/new", 1, "btn-primary"]], template: function ClientTicketDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275text(3, "\u2190 Back to Tickets");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, ClientTicketDetailComponent_div_4_Template, 4, 0, "div", 3)(5, ClientTicketDetailComponent_div_5_Template, 40, 26, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.ticket());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe, DatePipe, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.ticket-detail-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.back-link[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0066cc;\n  text-decoration: none;\n  font-size: 14px;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #0066cc;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ticket-header-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.ticket-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.ticket-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0;\n  flex: 1;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n  margin-left: 16px;\n}\n.status-open[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-answered[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-closed[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ticket-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #666;\n}\n.separator[_ngcontent-%COMP%] {\n  color: #ddd;\n}\n.messages-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.message-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.message-card.admin-reply[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  border-left: 4px solid #0066cc;\n}\n.message-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  color: #666;\n}\n.admin-avatar[_ngcontent-%COMP%] {\n  background: #0066cc;\n  color: #fff;\n}\n.user-name[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  color: #1a1a1a;\n}\n.message-time[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n}\n.message-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.6;\n  color: #444;\n  white-space: pre-wrap;\n}\n.attachment[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.attachment-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #0066cc;\n  text-decoration: none;\n  font-size: 14px;\n}\n.attachment-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.reply-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.reply-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 16px;\n  color: #1a1a1a;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 15px;\n  resize: vertical;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066cc;\n  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);\n}\n.reply-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n}\n.file-input[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #0066cc;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.closed-notice[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  border-radius: 12px;\n  padding: 24px;\n  text-align: center;\n}\n.closed-notice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0 0 16px;\n}\n/*# sourceMappingURL=ticket-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientTicketDetailComponent, { className: "ClientTicketDetailComponent", filePath: "src\\app\\features\\client\\tickets\\ticket-detail.component.ts", lineNumber: 349 });
})();
export {
  ClientTicketDetailComponent
};
//# sourceMappingURL=chunk-EVNQ2XOO.js.map
