import {
  TicketService
} from "./chunk-23FNANJA.js";
import {
  SocketService
} from "./chunk-7C4WS7N4.js";
import {
  ToastService
} from "./chunk-CUQ723YT.js";
import "./chunk-GMJ7MHWM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5WG63XSG.js";
import {
  AuthService
} from "./chunk-R5YFSE7W.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-6VP7BBRC.js";
import {
  environment
} from "./chunk-YVMT3HBM.js";
import "./chunk-NM77QJY5.js";
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-RLLOV7VK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-LRITERKE.js";

// src/app/features/client/tickets/ticket-detail.component.ts
var _c0 = ["chatBody"];
var _c1 = ["fileInput"];
function ClientTicketDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span", 16);
    \u0275\u0275elementStart(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "span", 16);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titlecase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.ticket().subject);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", ctx_r0.ticket().ticket_number || ctx_r0.ticket().id, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("s-" + ctx_r0.ticket().status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, ctx_r0.ticket().status));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 8, ctx_r0.ticket().priority), " Priority");
  }
}
function ClientTicketDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementEnd();
  }
}
function ClientTicketDetailComponent_div_8_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Attachment ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.getAttachmentUrl(ctx_r0.ticket().attachment), \u0275\u0275sanitizeUrl);
  }
}
function ClientTicketDetailComponent_div_8_ng_container_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, msg_r2.created_at, "MMMM d, yyyy"));
  }
}
function ClientTicketDetailComponent_div_8_ng_container_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((msg_r2.admin == null ? null : msg_r2.admin.name) || "S").charAt(0), " ");
  }
}
function ClientTicketDetailComponent_div_8_ng_container_14_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((msg_r2.admin == null ? null : msg_r2.admin.name) || "Support Team");
  }
}
function ClientTicketDetailComponent_div_8_ng_container_14_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r2.message);
  }
}
function ClientTicketDetailComponent_div_8_ng_container_14_div_7_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 44);
    \u0275\u0275listener("click", function ClientTicketDetailComponent_div_8_ng_container_14_div_7_img_1_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const msg_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openAttachment(msg_r2.attachment));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.getAttachmentUrl(msg_r2.attachment), \u0275\u0275sanitizeUrl);
  }
}
function ClientTicketDetailComponent_div_8_ng_container_14_div_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "path", 47)(3, "polyline", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.getAttachmentUrl(msg_r2.attachment), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getFilename(msg_r2.attachment));
  }
}
function ClientTicketDetailComponent_div_8_ng_container_14_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, ClientTicketDetailComponent_div_8_ng_container_14_div_7_img_1_Template, 1, 1, "img", 42)(2, ClientTicketDetailComponent_div_8_ng_container_14_div_7_a_2_Template, 6, 2, "a", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isImage(msg_r2.attachment));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isImage(msg_r2.attachment));
  }
}
function ClientTicketDetailComponent_div_8_ng_container_14_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getInitials(ctx_r0.currentUser == null ? null : ctx_r0.currentUser.first_name), " ");
  }
}
function ClientTicketDetailComponent_div_8_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClientTicketDetailComponent_div_8_ng_container_14_div_1_Template, 4, 4, "div", 31);
    \u0275\u0275elementStart(2, "div", 32);
    \u0275\u0275template(3, ClientTicketDetailComponent_div_8_ng_container_14_div_3_Template, 2, 1, "div", 33);
    \u0275\u0275elementStart(4, "div", 34);
    \u0275\u0275template(5, ClientTicketDetailComponent_div_8_ng_container_14_span_5_Template, 2, 1, "span", 35)(6, ClientTicketDetailComponent_div_8_ng_container_14_p_6_Template, 2, 1, "p", 36)(7, ClientTicketDetailComponent_div_8_ng_container_14_div_7_Template, 3, 2, "div", 37);
    \u0275\u0275elementStart(8, "span", 25);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ClientTicketDetailComponent_div_8_ng_container_14_div_11_Template, 2, 1, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const msg_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r4 > 0 && ctx_r0.isDifferentDay(ctx_r0.ticket().ticketMessages[i_r4 - 1].created_at, msg_r2.created_at));
    \u0275\u0275advance();
    \u0275\u0275classProp("mine", !msg_r2.admin_id)("theirs", msg_r2.admin_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r2.admin_id);
    \u0275\u0275advance();
    \u0275\u0275classProp("mine-bubble", !msg_r2.admin_id)("their-bubble", msg_r2.admin_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r2.admin_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r2.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r2.attachment);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 15, msg_r2.created_at, "shortTime"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !msg_r2.admin_id);
  }
}
function ClientTicketDetailComponent_div_8_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "circle", 51)(3, "line", 52)(4, "line", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " This service request has been closed. ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "a", 54);
    \u0275\u0275text(7, "Create a new request");
    \u0275\u0275elementEnd()();
  }
}
function ClientTicketDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20, 0)(2, "div", 21)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22)(7, "div", 23)(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ClientTicketDetailComponent_div_8_a_10_Template, 4, 1, "a", 24);
    \u0275\u0275elementStart(11, "span", 25);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, ClientTicketDetailComponent_div_8_ng_container_14_Template, 12, 18, "ng-container", 26)(15, ClientTicketDetailComponent_div_8_div_15_Template, 8, 0, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 6, ctx_r0.ticket().created_at, "MMMM d, yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.ticket().description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ticket().attachment);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 9, ctx_r0.ticket().created_at, "shortTime"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.ticket().ticketMessages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ticket().status === "closed");
  }
}
function ClientTicketDetailComponent_div_9_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 72);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.attachmentPreviewUrl, \u0275\u0275sanitizeUrl);
  }
}
function ClientTicketDetailComponent_div_9_div_1__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 73);
    \u0275\u0275element(1, "path", 47)(2, "polyline", 48);
    \u0275\u0275elementEnd();
  }
}
function ClientTicketDetailComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66);
    \u0275\u0275template(2, ClientTicketDetailComponent_div_9_div_1_img_2_Template, 1, 1, "img", 67)(3, ClientTicketDetailComponent_div_9_div_1__svg_svg_3_Template, 3, 0, "svg", 68);
    \u0275\u0275elementStart(4, "span", 69);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 70);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 71);
    \u0275\u0275listener("click", function ClientTicketDetailComponent_div_9_div_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeAttachment());
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.attachmentPreviewUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.attachmentPreviewUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.attachmentFile.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatFileSize(ctx_r0.attachmentFile.size));
  }
}
function ClientTicketDetailComponent_div_9__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 74);
    \u0275\u0275element(1, "path", 75);
    \u0275\u0275elementEnd();
  }
}
function ClientTicketDetailComponent_div_9_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 76);
  }
}
function ClientTicketDetailComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275template(1, ClientTicketDetailComponent_div_9_div_1_Template, 10, 4, "div", 56);
    \u0275\u0275elementStart(2, "div", 57)(3, "label", 58)(4, "input", 59, 1);
    \u0275\u0275listener("change", function ClientTicketDetailComponent_div_9_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFileSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 60);
    \u0275\u0275element(7, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "textarea", 61, 2);
    \u0275\u0275twoWayListener("ngModelChange", function ClientTicketDetailComponent_div_9_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.replyText, $event) || (ctx_r0.replyText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ClientTicketDetailComponent_div_9_Template_textarea_keydown_enter_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onEnter($event));
    })("input", function ClientTicketDetailComponent_div_9_Template_textarea_input_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.autoResize($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 62);
    \u0275\u0275listener("click", function ClientTicketDetailComponent_div_9_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitReply());
    });
    \u0275\u0275template(11, ClientTicketDetailComponent_div_9__svg_svg_11_Template, 2, 0, "svg", 63)(12, ClientTicketDetailComponent_div_9_div_12_Template, 1, 0, "div", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attachmentFile);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.replyText);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.submitting() || !ctx_r0.replyText.trim() && !ctx_r0.attachmentFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.submitting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.submitting());
  }
}
var ClientTicketDetailComponent = class _ClientTicketDetailComponent {
  route;
  router;
  ticketService;
  authService;
  toast;
  socketService;
  chatBody;
  fileInput;
  ticket = signal(null);
  loading = signal(true);
  submitting = signal(false);
  replyText = "";
  attachmentFile = null;
  attachmentPreviewUrl = null;
  currentUser;
  shouldScroll = false;
  uploadsBase = environment.apiUrl.replace("/api/v1", "") + "/uploads/";
  ticketId = 0;
  socketSubs = [];
  constructor(route, router, ticketService, authService, toast, socketService) {
    this.route = route;
    this.router = router;
    this.ticketService = ticketService;
    this.authService = authService;
    this.toast = toast;
    this.socketService = socketService;
    this.currentUser = this.authService.currentUser;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.ticketId = +id;
      this.loadTicket(this.ticketId);
      this.setupSocket();
    }
  }
  ngOnDestroy() {
    if (this.ticketId)
      this.socketService.leaveTicket(this.ticketId);
    this.socketSubs.forEach((s) => s.unsubscribe());
  }
  ngAfterViewChecked() {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }
  setupSocket() {
    this.socketService.joinTicket(this.ticketId);
    this.socketSubs.push(this.socketService.onNewMessage().subscribe((msg) => {
      const t = this.ticket();
      if (t && t.ticketMessages) {
        const exists = t.ticketMessages.find((m) => m.id === msg.id);
        if (!exists) {
          this.ticket.set(__spreadProps(__spreadValues({}, t), { ticketMessages: [...t.ticketMessages, msg] }));
          this.shouldScroll = true;
        }
      }
    }));
    this.socketSubs.push(this.socketService.onTicketStatusChanged().subscribe((data) => {
      const t = this.ticket();
      if (t) {
        this.ticket.set(__spreadProps(__spreadValues({}, t), { status: data.status }));
      }
    }));
  }
  loadTicket(id) {
    this.loading.set(true);
    this.ticketService.getTicket(id).subscribe({
      next: (response) => {
        this.ticket.set(response.data || response.ticket || response);
        this.loading.set(false);
        this.shouldScroll = true;
      },
      error: () => {
        this.loading.set(false);
        this.router.navigate(["/client/tickets"]);
      }
    });
  }
  getAttachmentUrl(attachment) {
    if (!attachment)
      return "";
    if (attachment.startsWith("http"))
      return attachment;
    return this.uploadsBase + attachment;
  }
  isImage(attachment) {
    if (!attachment)
      return false;
    const ext = attachment.toLowerCase().split(".").pop() || "";
    return ["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(ext);
  }
  getFilename(attachment) {
    return attachment.split("/").pop() || attachment;
  }
  openAttachment(attachment) {
    window.open(this.getAttachmentUrl(attachment), "_blank");
  }
  getInitials(name) {
    if (!name)
      return "U";
    return name.charAt(0).toUpperCase();
  }
  isDifferentDay(a, b) {
    return new Date(a).toDateString() !== new Date(b).toDateString();
  }
  onFileSelect(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    if (file.size > 10 * 1024 * 1024) {
      this.toast.error("File too large. Maximum size is 10MB.");
      return;
    }
    this.attachmentFile = file;
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => this.attachmentPreviewUrl = e.target?.result;
      reader.readAsDataURL(file);
    } else {
      this.attachmentPreviewUrl = null;
    }
  }
  removeAttachment() {
    this.attachmentFile = null;
    this.attachmentPreviewUrl = null;
    if (this.fileInput)
      this.fileInput.nativeElement.value = "";
  }
  formatFileSize(bytes) {
    if (bytes < 1024)
      return bytes + " B";
    if (bytes < 1024 * 1024)
      return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  }
  onEnter(event) {
    const e = event;
    if (!e.shiftKey) {
      e.preventDefault();
      this.submitReply();
    }
  }
  autoResize(event) {
    const el = event.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  }
  submitReply() {
    if (!this.replyText.trim() && !this.attachmentFile || this.submitting())
      return;
    this.submitting.set(true);
    const formData = new FormData();
    formData.append("message", this.replyText.trim());
    if (this.attachmentFile) {
      formData.append("attachment", this.attachmentFile);
    }
    this.ticketService.replyToTicket(this.ticket().id, formData).subscribe({
      next: () => {
        this.submitting.set(false);
        this.replyText = "";
        this.removeAttachment();
        this.loadTicket(this.ticket().id);
      },
      error: () => {
        this.submitting.set(false);
        this.toast.error("Failed to send message");
      }
    });
  }
  scrollToBottom() {
    try {
      if (this.chatBody) {
        this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
      }
    } catch (_) {
    }
  }
  static \u0275fac = function ClientTicketDetailComponent_Factory(t) {
    return new (t || _ClientTicketDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TicketService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(SocketService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientTicketDetailComponent, selectors: [["app-client-ticket-detail"]], viewQuery: function ClientTicketDetailComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chatBody = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 4, consts: [["chatBody", ""], ["fileInput", ""], ["msgInput", ""], [1, "chat-page"], [1, "chat-header"], ["routerLink", "/client/tickets", 1, "back-btn"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["d", "M12 19l-7-7 7-7"], ["class", "header-info", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "chat-body", 4, "ngIf"], ["class", "chat-input-bar", 4, "ngIf"], [1, "header-info"], [1, "header-meta"], [1, "ticket-num"], [1, "dot"], [1, "status-pill"], [1, "loading-state"], [1, "spinner"], [1, "chat-body"], [1, "date-divider"], [1, "bubble-row", "mine"], [1, "bubble", "mine-bubble"], ["target", "_blank", "class", "attach-link", 3, "href", 4, "ngIf"], [1, "bubble-time"], [4, "ngFor", "ngForOf"], ["class", "system-msg", 4, "ngIf"], ["target", "_blank", 1, "attach-link", 3, "href"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"], ["class", "date-divider", 4, "ngIf"], [1, "bubble-row"], ["class", "chat-avatar admin-av", 4, "ngIf"], [1, "bubble"], ["class", "sender-name", 4, "ngIf"], [4, "ngIf"], ["class", "msg-attachment", 4, "ngIf"], ["class", "chat-avatar user-av", 4, "ngIf"], [1, "chat-avatar", "admin-av"], [1, "sender-name"], [1, "msg-attachment"], ["class", "attachment-img", "alt", "Attachment", 3, "src", "click", 4, "ngIf"], ["target", "_blank", "class", "attach-file-link", 3, "href", 4, "ngIf"], ["alt", "Attachment", 1, "attachment-img", 3, "click", "src"], ["target", "_blank", 1, "attach-file-link", 3, "href"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"], ["points", "14 2 14 8 20 8"], [1, "chat-avatar", "user-av"], [1, "system-msg"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], ["routerLink", "/client/tickets/new"], [1, "chat-input-bar"], ["class", "attachment-preview", 4, "ngIf"], [1, "input-wrap"], ["title", "Attach file", 1, "attach-btn"], ["type", "file", "accept", "image/*,.pdf,.doc,.docx", 2, "display", "none", 3, "change"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["placeholder", "Type a message...", "rows", "1", 3, "ngModelChange", "keydown.enter", "input", "ngModel"], [1, "send-btn", 3, "click", "disabled"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "currentColor", 4, "ngIf"], ["class", "send-spinner", 4, "ngIf"], [1, "attachment-preview"], [1, "preview-content"], ["class", "preview-thumb", "alt", "Preview", 3, "src", 4, "ngIf"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#64748b", "stroke-width", "2", 4, "ngIf"], [1, "preview-name"], [1, "preview-size"], [1, "preview-remove", 3, "click"], ["alt", "Preview", 1, "preview-thumb", 3, "src"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#64748b", "stroke-width", "2"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"], [1, "send-spinner"]], template: function ClientTicketDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "a", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 6);
      \u0275\u0275element(4, "path", 7)(5, "path", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, ClientTicketDetailComponent_div_6_Template, 14, 10, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ClientTicketDetailComponent_div_7_Template, 2, 0, "div", 10)(8, ClientTicketDetailComponent_div_8_Template, 16, 12, "div", 11)(9, ClientTicketDetailComponent_div_9_Template, 13, 5, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.ticket());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.ticket());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.ticket() && ctx.ticket().status !== "closed");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe, DatePipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: calc(100vh - 90px);\n}\n.chat-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: #f0f2f5;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  background: #fff;\n  border-bottom: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  color: #444;\n  transition: background 0.2s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 500px;\n}\n.header-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #888;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: #ccc;\n}\n.ticket-num[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #666;\n}\n.status-pill[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.s-open[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.s-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.s-answered[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.s-closed[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.loading-state[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.chat-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.chat-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.chat-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 3px;\n}\n.date-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px 0;\n}\n.date-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  color: #666;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 4px 14px;\n  border-radius: 10px;\n}\n.bubble-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  max-width: 75%;\n}\n.bubble-row.mine[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n.bubble-row.theirs[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.chat-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.admin-av[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n}\n.user-av[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4338ca;\n}\n.bubble[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 18px;\n  position: relative;\n  word-break: break-word;\n}\n.mine-bubble[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border-bottom-right-radius: 4px;\n}\n.their-bubble[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1a1a1a;\n  border-bottom-left-radius: 4px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);\n}\n.sender-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #e31b23;\n  margin-bottom: 4px;\n}\n.bubble[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.5;\n  white-space: pre-wrap;\n}\n.bubble-time[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  margin-top: 4px;\n  text-align: right;\n}\n.mine-bubble[_ngcontent-%COMP%]   .bubble-time[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n.their-bubble[_ngcontent-%COMP%]   .bubble-time[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n.msg-attachment[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.attachment-img[_ngcontent-%COMP%] {\n  max-width: 260px;\n  max-height: 200px;\n  border-radius: 10px;\n  object-fit: cover;\n  cursor: pointer;\n  display: block;\n}\n.mine-bubble[_ngcontent-%COMP%]   .attachment-img[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.their-bubble[_ngcontent-%COMP%]   .attachment-img[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n}\n.attach-file-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  padding: 6px 12px;\n  border-radius: 8px;\n  text-decoration: none;\n}\n.mine-bubble[_ngcontent-%COMP%]   .attach-file-link[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n}\n.their-bubble[_ngcontent-%COMP%]   .attach-file-link[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #3b82f6;\n}\n.attach-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  margin-top: 6px;\n  text-decoration: none;\n}\n.mine-bubble[_ngcontent-%COMP%]   .attach-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n}\n.their-bubble[_ngcontent-%COMP%]   .attach-link[_ngcontent-%COMP%] {\n  color: #e31b23;\n}\n.system-msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 13px;\n  color: #888;\n  margin: 20px 0;\n}\n.system-msg[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e31b23;\n  text-decoration: none;\n  font-weight: 500;\n}\n.attachment-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 14px;\n  background: #f1f5f9;\n  border-top: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.preview-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.preview-thumb[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 6px;\n  object-fit: cover;\n  border: 1px solid #e5e7eb;\n}\n.preview-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #334155;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 200px;\n}\n.preview-size[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  white-space: nowrap;\n}\n.preview-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #dc2626;\n  font-size: 22px;\n  cursor: pointer;\n  line-height: 1;\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.preview-remove[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.chat-input-bar[_ngcontent-%COMP%] {\n  background: #fff;\n  border-top: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  background: #f5f6fa;\n  border-radius: 24px;\n  padding: 6px 6px 6px 6px;\n  margin: 12px 16px;\n}\n.attach-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n  color: #64748b;\n  flex-shrink: 0;\n  transition: all 0.2s;\n}\n.attach-btn[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n  background: rgba(227, 27, 35, 0.08);\n}\n.input-wrap[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 15px;\n  line-height: 1.4;\n  resize: none;\n  outline: none;\n  max-height: 120px;\n  padding: 8px 0;\n  font-family: inherit;\n}\n.send-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: none;\n  background: #e31b23;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s, transform 0.15s;\n}\n.send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #c8171e;\n  transform: scale(1.05);\n}\n.send-btn[_ngcontent-%COMP%]:disabled {\n  background: #ccc;\n  cursor: not-allowed;\n}\n.send-spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@media (max-width: 640px) {\n  .bubble-row[_ngcontent-%COMP%] {\n    max-width: 88%;\n  }\n  .header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    max-width: 200px;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientTicketDetailComponent, { className: "ClientTicketDetailComponent", filePath: "src\\app\\features\\client\\tickets\\ticket-detail.component.ts", lineNumber: 526 });
})();
export {
  ClientTicketDetailComponent
};
