import {
  ConfirmModalComponent
} from "./chunk-M673IPVF.js";
import {
  SocketService
} from "./chunk-7C4WS7N4.js";
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
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-RLLOV7VK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-LRITERKE.js";

// src/app/features/admin/tickets/ticket-detail.component.ts
var _c0 = ["messagesArea"];
var _c1 = ["fileInput"];
function TicketDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function TicketDetailComponent_div_6_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "strong");
    \u0275\u0275text(2, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.ticket().user.email, "");
  }
}
function TicketDetailComponent_div_6_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "strong");
    \u0275\u0275text(2, "Dept:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.ticket().department.name, "");
  }
}
function TicketDetailComponent_div_6_div_31_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    \u0275\u0275property("value", f_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", f_r4.name, " (", f_r4.email, ")");
  }
}
function TicketDetailComponent_div_6_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label");
    \u0275\u0275text(2, "Assign to:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function TicketDetailComponent_div_6_div_31_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pendingAdminId, $event) || (ctx_r1.pendingAdminId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 36);
    \u0275\u0275text(6, "Unassigned");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TicketDetailComponent_div_6_div_31_option_7_Template, 2, 3, "option", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 23);
    \u0275\u0275element(9, "path", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "button", 25);
    \u0275\u0275listener("click", function TicketDetailComponent_div_6_div_31_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.assignConfirmOpen.set(true));
    });
    \u0275\u0275text(11, "Assign");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pendingAdminId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.franchiseAdmins());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pendingAdminId === ctx_r1.selectedAdminId);
  }
}
function TicketDetailComponent_div_6_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 41);
    \u0275\u0275element(3, "path", 42)(4, "rect", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Linked Order: ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 44)(10, "span");
    \u0275\u0275text(11, "Total: ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Status: ");
    \u0275\u0275elementStart(16, "span", 45);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Payment: ");
    \u0275\u0275elementStart(20, "span", 16);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("#", ctx_r1.ticket().order.invoice_number || ctx_r1.ticket().order.id, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r1.ticket().order.total, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getOrderStatus(ctx_r1.ticket().order.status));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-green", ctx_r1.ticket().order.payment_status == 1)("badge-yellow", ctx_r1.ticket().order.payment_status != 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.ticket().order.payment_status == 1 ? "Paid" : "Unpaid");
  }
}
function TicketDetailComponent_div_6_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 48);
    \u0275\u0275element(3, "rect", 49)(4, "line", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 51)(6, "h4");
    \u0275\u0275text(7, "Service Request Closed - Payment Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "This service request has been closed. Click to process payment for the service.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 52);
    \u0275\u0275listener("click", function TicketDetailComponent_div_6_div_33_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.processPayment());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 53);
    \u0275\u0275element(12, "rect", 49)(13, "line", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Process Payment ");
    \u0275\u0275elementEnd()()();
  }
}
function TicketDetailComponent_div_6_div_37_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r6.message);
  }
}
function TicketDetailComponent_div_6_div_37_div_4_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 64);
  }
  if (rf & 2) {
    const msg_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getAttachmentUrl(msg_r6.attachment), \u0275\u0275sanitizeUrl);
  }
}
function TicketDetailComponent_div_6_div_37_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 66);
    \u0275\u0275element(2, "path", 67)(3, "polyline", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getFilename(msg_r6.attachment));
  }
}
function TicketDetailComponent_div_6_div_37_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "a", 61);
    \u0275\u0275template(2, TicketDetailComponent_div_6_div_37_div_4_img_2_Template, 1, 1, "img", 62)(3, TicketDetailComponent_div_6_div_37_div_4_div_3_Template, 6, 1, "div", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.getAttachmentUrl(msg_r6.attachment), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImage(msg_r6.attachment));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isImage(msg_r6.attachment));
  }
}
function TicketDetailComponent_div_6_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TicketDetailComponent_div_6_div_37_div_3_Template, 2, 1, "div", 56)(4, TicketDetailComponent_div_6_div_37_div_4_Template, 4, 3, "div", 57);
    \u0275\u0275elementStart(5, "div", 58);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const msg_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("admin-msg", msg_r6.admin_id)("user-msg", !msg_r6.admin_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r6.admin_id ? (msg_r6.admin == null ? null : msg_r6.admin.name) || "Admin" : (msg_r6.user == null ? null : msg_r6.user.first_name) || ((tmp_6_0 = ctx_r1.ticket().user) == null ? null : tmp_6_0.first_name) || "Customer");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r6.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r6.attachment);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, msg_r6.created_at, "short"));
  }
}
function TicketDetailComponent_div_6_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1, "No messages yet. Start the conversation.");
    \u0275\u0275elementEnd();
  }
}
function TicketDetailComponent_div_6_div_39_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 80);
    \u0275\u0275listener("click", function TicketDetailComponent_div_6_div_39_div_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeAttachment());
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.attachmentFile.name);
  }
}
function TicketDetailComponent_div_6_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "textarea", 72);
    \u0275\u0275twoWayListener("ngModelChange", function TicketDetailComponent_div_6_div_39_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.replyText, $event) || (ctx_r1.replyText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TicketDetailComponent_div_6_div_39_div_3_Template, 5, 1, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 74)(5, "label", 75)(6, "input", 76, 1);
    \u0275\u0275listener("change", function TicketDetailComponent_div_6_div_39_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 66);
    \u0275\u0275element(9, "path", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "button", 78);
    \u0275\u0275listener("click", function TicketDetailComponent_div_6_div_39_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendReply());
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.replyText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.attachmentFile);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.sending() || !ctx_r1.replyText.trim() && !ctx_r1.attachmentFile);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.sending() ? "Sending..." : "Send", " ");
  }
}
function TicketDetailComponent_div_6_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 82);
    \u0275\u0275element(2, "rect", 83)(3, "path", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "This service request is closed. Reopen to reply.");
    \u0275\u0275elementEnd()();
  }
}
function TicketDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 12)(2, "div", 13)(3, "h1", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15)(6, "span")(7, "strong");
    \u0275\u0275text(8, "Customer:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, TicketDetailComponent_div_6_span_10_Template, 4, 1, "span", 7)(11, TicketDetailComponent_div_6_span_11_Template, 4, 1, "span", 7);
    \u0275\u0275elementStart(12, "span")(13, "strong");
    \u0275\u0275text(14, "Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 16);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 17)(18, "div", 18)(19, "label");
    \u0275\u0275text(20, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 19)(22, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function TicketDetailComponent_div_6_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pendingStatus, $event) || (ctx_r1.pendingStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 21);
    \u0275\u0275text(24, "Open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 22);
    \u0275\u0275text(26, "Closed");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 23);
    \u0275\u0275element(28, "path", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "button", 25);
    \u0275\u0275listener("click", function TicketDetailComponent_div_6_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.statusConfirmOpen.set(true));
    });
    \u0275\u0275text(30, "Update");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, TicketDetailComponent_div_6_div_31_Template, 12, 3, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, TicketDetailComponent_div_6_div_32_Template, 22, 8, "div", 27)(33, TicketDetailComponent_div_6_div_33_Template, 15, 0, "div", 28);
    \u0275\u0275elementStart(34, "div", 29)(35, "div", 30, 0);
    \u0275\u0275template(37, TicketDetailComponent_div_6_div_37_Template, 8, 11, "div", 31)(38, TicketDetailComponent_div_6_div_38_Template, 2, 0, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, TicketDetailComponent_div_6_div_39_Template, 12, 4, "div", 33)(40, TicketDetailComponent_div_6_div_40_Template, 6, 0, "div", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.ticket().title || ctx_r1.ticket().subject);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", (tmp_3_0 = ctx_r1.ticket().user) == null ? null : tmp_3_0.first_name, " ", ((tmp_3_0 = ctx_r1.ticket().user) == null ? null : tmp_3_0.last_name) || "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.ticket().user) == null ? null : tmp_4_0.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ticket().department);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("badge-red", ctx_r1.ticket().priority === "high" || ctx_r1.ticket().priority === "urgent")("badge-yellow", ctx_r1.ticket().priority === "medium" || ctx_r1.ticket().priority === "normal")("badge-green", ctx_r1.ticket().priority === "low");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.ticket().priority, " ");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pendingStatus);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.pendingStatus === ctx_r1.selectedStatus);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isSuperAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ticket().order);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ticket().status === "closed");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.messages());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.messages().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ticket().status !== "closed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ticket().status === "closed");
  }
}
var TicketDetailComponent = class _TicketDetailComponent {
  http;
  route;
  router;
  toast;
  authService;
  socketService;
  messagesArea;
  fileInput;
  ticket = signal(null);
  messages = signal([]);
  franchiseAdmins = signal([]);
  loading = signal(false);
  sending = signal(false);
  statusConfirmOpen = signal(false);
  statusUpdating = signal(false);
  assignConfirmOpen = signal(false);
  assignUpdating = signal(false);
  selectedStatus = "";
  selectedAdminId = "";
  pendingStatus = "";
  pendingAdminId = "";
  replyText = "";
  attachmentFile = null;
  ticketId = "";
  uploadsBase = environment.apiUrl.replace("/api/v1", "") + "/uploads/";
  socketSubs = [];
  isSuperAdmin = false;
  constructor(http, route, router, toast, authService, socketService) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.toast = toast;
    this.authService = authService;
    this.socketService = socketService;
    const admin = this.authService.currentAdmin;
    this.isSuperAdmin = admin ? !admin.is_franchise : false;
  }
  ngOnInit() {
    this.ticketId = this.route.snapshot.paramMap.get("id") || "";
    this.loadTicket();
    this.loadFranchiseAdmins();
    this.setupSocket();
  }
  ngOnDestroy() {
    this.socketService.leaveTicket(this.ticketId);
    this.socketSubs.forEach((s) => s.unsubscribe());
  }
  setupSocket() {
    this.socketService.joinTicket(this.ticketId);
    this.socketSubs.push(this.socketService.onNewMessage().subscribe((msg) => {
      const existing = this.messages();
      if (!existing.find((m) => m.id === msg.id)) {
        this.messages.set([...existing, msg]);
        setTimeout(() => this.scrollToBottom(), 50);
      }
    }));
    this.socketSubs.push(this.socketService.onTicketStatusChanged().subscribe((data) => {
      const t = this.ticket();
      if (t) {
        this.ticket.set(__spreadProps(__spreadValues({}, t), { status: data.status }));
        this.selectedStatus = data.status;
        this.pendingStatus = data.status;
      }
    }));
  }
  loadTicket() {
    this.loading.set(true);
    this.http.get(`${environment.apiUrl}/admin/tickets/${this.ticketId}`).subscribe({
      next: (res) => {
        const t = res.data;
        this.ticket.set(t);
        this.selectedStatus = t.status || "open";
        this.pendingStatus = t.status || "open";
        this.selectedAdminId = t.admin_id ? String(t.admin_id) : "";
        this.pendingAdminId = t.admin_id ? String(t.admin_id) : "";
        this.messages.set(t.ticketMessages || t.messages || []);
        setTimeout(() => this.scrollToBottom(), 100);
      },
      error: () => this.router.navigate(["/admin/support-ticket/tickets"]),
      complete: () => this.loading.set(false)
    });
  }
  loadFranchiseAdmins() {
    this.http.get(`${environment.apiUrl}/admin/franchises`).subscribe({
      next: (res) => this.franchiseAdmins.set(res.data || [])
    });
    this.http.get(`${environment.apiUrl}/admin/staff?limit=100`).subscribe({
      next: (res) => {
        const staff = res.data || [];
        const existing = this.franchiseAdmins();
        const existingIds = new Set(existing.map((f) => f.id));
        const merged = [...existing, ...staff.filter((s) => !existingIds.has(s.id))];
        this.franchiseAdmins.set(merged);
      }
    });
  }
  confirmStatusChange() {
    this.statusUpdating.set(true);
    this.http.put(`${environment.apiUrl}/admin/tickets/${this.ticketId}/status`, { status: this.pendingStatus }).subscribe({
      next: () => {
        this.selectedStatus = this.pendingStatus;
        this.toast.success("Status updated to " + (this.pendingStatus === "closed" ? "Closed" : "Open"));
        this.statusConfirmOpen.set(false);
        this.statusUpdating.set(false);
        this.loadTicket();
      },
      error: () => {
        this.toast.error("Failed to update status");
        this.statusUpdating.set(false);
      }
    });
  }
  getPendingAdminName() {
    if (!this.pendingAdminId)
      return "Unassigned";
    const admin = this.franchiseAdmins().find((f) => f.id == this.pendingAdminId);
    return admin?.name || "Selected Admin";
  }
  confirmAssign() {
    this.assignUpdating.set(true);
    this.http.put(`${environment.apiUrl}/admin/tickets/${this.ticketId}/assign`, {
      admin_id: this.pendingAdminId ? Number(this.pendingAdminId) : null
    }).subscribe({
      next: () => {
        this.selectedAdminId = this.pendingAdminId;
        this.toast.success("Service request assigned to " + this.getPendingAdminName());
        this.assignConfirmOpen.set(false);
        this.assignUpdating.set(false);
      },
      error: () => {
        this.toast.error("Failed to assign service request");
        this.assignUpdating.set(false);
      }
    });
  }
  onFileSelect(event) {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        this.toast.error("File too large. Max 10MB.");
        return;
      }
      this.attachmentFile = file;
    }
  }
  removeAttachment() {
    this.attachmentFile = null;
    if (this.fileInput)
      this.fileInput.nativeElement.value = "";
  }
  sendReply() {
    if (!this.replyText.trim() && !this.attachmentFile)
      return;
    this.sending.set(true);
    const formData = new FormData();
    formData.append("message", this.replyText);
    if (this.attachmentFile)
      formData.append("attachment", this.attachmentFile);
    this.http.post(`${environment.apiUrl}/admin/tickets/${this.ticketId}/reply`, formData).subscribe({
      next: () => {
        this.replyText = "";
        this.attachmentFile = null;
        if (this.fileInput)
          this.fileInput.nativeElement.value = "";
        this.loadTicket();
      },
      error: () => {
        this.toast.error("Failed to send reply");
        this.sending.set(false);
      },
      complete: () => this.sending.set(false)
    });
  }
  processPayment() {
    if (this.ticket()?.order) {
      this.router.navigate(["/admin/orders/details", this.ticket().order.id]);
    } else {
      this.toast.info("No order linked to this service request. Link an order first.");
    }
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
  getOrderStatus(status) {
    const labels = { 0: "Pending", 1: "Confirmed", 2: "In Progress", 3: "Completed", 4: "Cancelled" };
    return labels[status] || "Unknown";
  }
  scrollToBottom() {
    if (this.messagesArea?.nativeElement) {
      this.messagesArea.nativeElement.scrollTop = this.messagesArea.nativeElement.scrollHeight;
    }
  }
  static \u0275fac = function TicketDetailComponent_Factory(t) {
    return new (t || _TicketDetailComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SocketService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketDetailComponent, selectors: [["app-ticket-detail"]], viewQuery: function TicketDetailComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messagesArea = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 8, consts: [["messagesArea", ""], ["fileInput", ""], ["routerLink", "/admin/support-ticket/tickets", 1, "back-link"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], ["class", "loading-center", 4, "ngIf"], [4, "ngIf"], ["title", "Confirm Status Change", "confirmText", "Yes, Change", "type", "warning", 3, "confirmed", "cancelled", "open", "message", "loading"], ["title", "Confirm Assignment", "confirmText", "Yes, Assign", "type", "info", 3, "confirmed", "cancelled", "open", "message", "loading"], [1, "loading-center"], [1, "spinner"], [1, "ticket-header"], [1, "header-left"], [1, "page-title"], [1, "ticket-meta"], [1, "badge"], [1, "header-controls"], [1, "control-group"], [1, "custom-select-wrap"], [1, "custom-select", 3, "ngModelChange", "ngModel"], ["value", "open"], ["value", "closed"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#64748b", "stroke-width", "2", 1, "select-arrow"], ["d", "M6 9l6 6 6-6"], [1, "btn-action", 3, "click", "disabled"], ["class", "control-group", 4, "ngIf"], ["class", "order-card", 4, "ngIf"], ["class", "payment-section", 4, "ngIf"], [1, "chat-container"], [1, "messages-area"], ["class", "message-bubble", 3, "admin-msg", "user-msg", 4, "ngFor", "ngForOf"], ["class", "no-messages", 4, "ngIf"], ["class", "reply-box", 4, "ngIf"], ["class", "closed-notice", 4, "ngIf"], [1, "custom-select-wrap", "wide"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "order-card"], [1, "order-card-header"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#e31b23", "stroke-width", "2"], ["d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "1"], [1, "order-details"], [1, "badge", "badge-blue"], [1, "payment-section"], [1, "payment-card"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#16a34a", "stroke-width", "2"], ["x", "1", "y", "4", "width", "22", "height", "16", "rx", "2", "ry", "2"], ["x1", "1", "y1", "10", "x2", "23", "y2", "10"], [1, "payment-info"], [1, "btn-payment", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "message-bubble"], [1, "msg-sender"], ["class", "msg-text", 4, "ngIf"], ["class", "msg-attachment", 4, "ngIf"], [1, "msg-time"], [1, "msg-text"], [1, "msg-attachment"], ["target", "_blank", 1, "attachment-link", 3, "href"], ["class", "attachment-img", "alt", "Attachment", 3, "src", 4, "ngIf"], ["class", "attachment-file", 4, "ngIf"], ["alt", "Attachment", 1, "attachment-img", 3, "src"], [1, "attachment-file"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"], ["points", "14 2 14 8 20 8"], [1, "no-messages"], [1, "reply-box"], [1, "reply-input-area"], ["placeholder", "Type your reply...", "rows", "3", 3, "ngModelChange", "ngModel"], ["class", "attachment-preview", 4, "ngIf"], [1, "reply-actions"], ["title", "Attach file", 1, "btn-attach"], ["type", "file", "accept", "image/*,.pdf,.doc,.docx", 2, "display", "none", 3, "change"], ["d", "M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"], [1, "btn-primary", 3, "click", "disabled"], [1, "attachment-preview"], [1, "remove-attachment", 3, "click"], [1, "closed-notice"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#64748b", "stroke-width", "2"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0110 0v4"]], template: function TicketDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 3);
      \u0275\u0275element(2, "path", 4)(3, "polyline", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Back to Service Requests ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, TicketDetailComponent_div_5_Template, 2, 0, "div", 6)(6, TicketDetailComponent_div_6_Template, 41, 21, "div", 7);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "app-confirm-modal", 8);
      \u0275\u0275listener("confirmed", function TicketDetailComponent_Template_app_confirm_modal_confirmed_7_listener() {
        return ctx.confirmStatusChange();
      })("cancelled", function TicketDetailComponent_Template_app_confirm_modal_cancelled_7_listener() {
        return ctx.statusConfirmOpen.set(false);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "app-confirm-modal", 9);
      \u0275\u0275listener("confirmed", function TicketDetailComponent_Template_app_confirm_modal_confirmed_8_listener() {
        return ctx.confirmAssign();
      })("cancelled", function TicketDetailComponent_Template_app_confirm_modal_cancelled_8_listener() {
        return ctx.assignConfirmOpen.set(false);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.ticket());
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.statusConfirmOpen())("message", 'Are you sure you want to change status to "' + (ctx.pendingStatus === "closed" ? "Closed" : "Open") + '"?')("loading", ctx.statusUpdating());
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.assignConfirmOpen())("message", 'Are you sure you want to assign this service request to "' + ctx.getPendingAdminName() + '"?')("loading", ctx.assignUpdating());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  color: #64748b;\n  text-decoration: none;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 8px;\n}\n.ticket-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n  gap: 16px;\n  background: #fff;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.ticket-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  font-size: 13px;\n  color: #64748b;\n}\n.ticket-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.header-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.control-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.control-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #334155;\n  font-size: 13px;\n  white-space: nowrap;\n}\n.custom-select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 150px;\n}\n.custom-select-wrap.wide[_ngcontent-%COMP%] {\n  min-width: 240px;\n}\n.custom-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 36px 9px 14px;\n  border: 1.5px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #1e293b;\n  background:\n    linear-gradient(\n      to bottom,\n      #fff 0%,\n      #f9fafb 100%);\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.custom-select[_ngcontent-%COMP%]:hover {\n  border-color: #a1a1aa;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.custom-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.12);\n}\n.select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 11px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  opacity: 0.5;\n  transition: opacity 0.2s;\n}\n.custom-select-wrap[_ngcontent-%COMP%]:hover   .select-arrow[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  border: none;\n  border-radius: 10px;\n  background: #e31b23;\n  color: #fff;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s;\n  box-shadow: 0 1px 3px rgba(227, 27, 35, 0.3);\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: #c8151c;\n  box-shadow: 0 2px 6px rgba(227, 27, 35, 0.35);\n  transform: translateY(-1px);\n}\n.btn-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  background: #94a3b8;\n  box-shadow: none;\n  transform: none;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge-yellow[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.order-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 16px 24px;\n  margin-bottom: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border-left: 4px solid #e31b23;\n}\n.order-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #334155;\n  margin-bottom: 8px;\n}\n.order-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  font-size: 13px;\n  color: #64748b;\n}\n.order-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.payment-section[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.payment-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 12px;\n  padding: 20px 24px;\n}\n.payment-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.payment-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 15px;\n  color: #166534;\n  font-weight: 700;\n}\n.payment-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #16a34a;\n}\n.btn-payment[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #16a34a;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-payment[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.chat-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.messages-area[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-height: 500px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: #f8f9fa;\n}\n.message-bubble[_ngcontent-%COMP%] {\n  max-width: 70%;\n  padding: 12px 16px;\n  border-radius: 12px;\n}\n.user-msg[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  background: #e5e7eb;\n  color: #334155;\n  border-bottom-left-radius: 4px;\n}\n.admin-msg[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  background: #fde8e9;\n  color: #1a1a2e;\n  border-bottom-right-radius: 4px;\n}\n.msg-sender[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  margin-bottom: 4px;\n  color: #64748b;\n}\n.admin-msg[_ngcontent-%COMP%]   .msg-sender[_ngcontent-%COMP%] {\n  color: #e31b23;\n}\n.msg-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.5;\n  white-space: pre-wrap;\n}\n.msg-attachment[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.attachment-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.attachment-img[_ngcontent-%COMP%] {\n  max-width: 280px;\n  max-height: 200px;\n  border-radius: 8px;\n  object-fit: cover;\n  border: 1px solid #e5e7eb;\n  display: block;\n}\n.attachment-file[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #f1f5f9;\n  padding: 8px 14px;\n  border-radius: 8px;\n  color: #3b82f6;\n  font-size: 13px;\n  font-weight: 500;\n}\n.msg-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #94a3b8;\n  margin-top: 6px;\n  text-align: right;\n}\n.no-messages[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n}\n.reply-box[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  gap: 12px;\n  align-items: flex-end;\n}\n.reply-input-area[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.reply-input-area[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  resize: vertical;\n  font-family: inherit;\n  box-sizing: border-box;\n}\n.reply-input-area[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);\n}\n.attachment-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f1f5f9;\n  padding: 6px 12px;\n  border-radius: 6px;\n  margin-top: 8px;\n  font-size: 13px;\n  color: #334155;\n}\n.remove-attachment[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #dc2626;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 1;\n}\n.reply-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.btn-attach[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.2s;\n}\n.btn-attach[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n  border-color: #e31b23;\n  background: #fff5f5;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.closed-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 16px;\n  border-top: 1px solid #e5e7eb;\n  color: #64748b;\n  font-size: 14px;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketDetailComponent, { className: "TicketDetailComponent", filePath: "src\\app\\features\\admin\\tickets\\ticket-detail.component.ts", lineNumber: 244 });
})();
export {
  TicketDetailComponent
};
