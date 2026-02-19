import {
  ToastService
} from "./chunk-JBYXSY66.js";
import {
  DefaultValueAccessor,
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
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-CMH3GDQY.js";
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
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/admin/tickets/ticket-detail.component.ts
var _c0 = ["messagesArea"];
var _c1 = ["fileInput"];
function TicketDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
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
function TicketDetailComponent_div_6_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    \u0275\u0275property("value", f_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", f_r3.name, " (", f_r3.email, ")");
  }
}
function TicketDetailComponent_div_6_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 33);
    \u0275\u0275element(3, "path", 34)(4, "rect", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Linked Order: ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 36)(10, "span");
    \u0275\u0275text(11, "Total: ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Status: ");
    \u0275\u0275elementStart(16, "span", 37);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Payment: ");
    \u0275\u0275elementStart(20, "span", 14);
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
function TicketDetailComponent_div_6_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 40);
    \u0275\u0275element(3, "rect", 41)(4, "line", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 43)(6, "h4");
    \u0275\u0275text(7, "Ticket Closed - Payment Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "This ticket has been closed. Click to process payment for the service.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 44);
    \u0275\u0275listener("click", function TicketDetailComponent_div_6_div_34_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.processPayment());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 45);
    \u0275\u0275element(12, "rect", 41)(13, "line", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Process Payment ");
    \u0275\u0275elementEnd()()();
  }
}
function TicketDetailComponent_div_6_div_38_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r5.message);
  }
}
function TicketDetailComponent_div_6_div_38_div_4_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 56);
  }
  if (rf & 2) {
    const msg_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getAttachmentUrl(msg_r5.attachment), \u0275\u0275sanitizeUrl);
  }
}
function TicketDetailComponent_div_6_div_38_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 58);
    \u0275\u0275element(2, "path", 59)(3, "polyline", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getFilename(msg_r5.attachment));
  }
}
function TicketDetailComponent_div_6_div_38_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "a", 53);
    \u0275\u0275template(2, TicketDetailComponent_div_6_div_38_div_4_img_2_Template, 1, 1, "img", 54)(3, TicketDetailComponent_div_6_div_38_div_4_div_3_Template, 6, 1, "div", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.getAttachmentUrl(msg_r5.attachment), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImage(msg_r5.attachment));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isImage(msg_r5.attachment));
  }
}
function TicketDetailComponent_div_6_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TicketDetailComponent_div_6_div_38_div_3_Template, 2, 1, "div", 48)(4, TicketDetailComponent_div_6_div_38_div_4_Template, 4, 3, "div", 49);
    \u0275\u0275elementStart(5, "div", 50);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const msg_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("admin-msg", msg_r5.type === "admin")("user-msg", msg_r5.type !== "admin");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r5.type === "admin" ? "Admin" : ((tmp_6_0 = ctx_r1.ticket().user) == null ? null : tmp_6_0.first_name) || "Customer");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r5.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", msg_r5.attachment);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, msg_r5.created_at, "short"));
  }
}
function TicketDetailComponent_div_6_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1, "No messages yet. Start the conversation.");
    \u0275\u0275elementEnd();
  }
}
function TicketDetailComponent_div_6_div_40_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 72);
    \u0275\u0275listener("click", function TicketDetailComponent_div_6_div_40_div_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
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
function TicketDetailComponent_div_6_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "textarea", 64);
    \u0275\u0275twoWayListener("ngModelChange", function TicketDetailComponent_div_6_div_40_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.replyText, $event) || (ctx_r1.replyText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TicketDetailComponent_div_6_div_40_div_3_Template, 5, 1, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 66)(5, "label", 67)(6, "input", 68, 1);
    \u0275\u0275listener("change", function TicketDetailComponent_div_6_div_40_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 58);
    \u0275\u0275element(9, "path", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "button", 70);
    \u0275\u0275listener("click", function TicketDetailComponent_div_6_div_40_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r6);
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
function TicketDetailComponent_div_6_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 74);
    \u0275\u0275element(2, "rect", 75)(3, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "This ticket is closed. Reopen to reply.");
    \u0275\u0275elementEnd()();
  }
}
function TicketDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 10)(2, "div", 11)(3, "h1", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "span")(7, "strong");
    \u0275\u0275text(8, "Customer:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, TicketDetailComponent_div_6_span_10_Template, 4, 1, "span", 7)(11, TicketDetailComponent_div_6_span_11_Template, 4, 1, "span", 7);
    \u0275\u0275elementStart(12, "span")(13, "strong");
    \u0275\u0275text(14, "Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 14);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 15)(18, "div", 16)(19, "label");
    \u0275\u0275text(20, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function TicketDetailComponent_div_6_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedStatus, $event) || (ctx_r1.selectedStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function TicketDetailComponent_div_6_Template_select_change_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeStatus());
    });
    \u0275\u0275elementStart(22, "option", 18);
    \u0275\u0275text(23, "Open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 19);
    \u0275\u0275text(25, "Closed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 16)(27, "label");
    \u0275\u0275text(28, "Assign to:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function TicketDetailComponent_div_6_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedAdminId, $event) || (ctx_r1.selectedAdminId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function TicketDetailComponent_div_6_Template_select_change_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.assignFranchise());
    });
    \u0275\u0275elementStart(30, "option", 20);
    \u0275\u0275text(31, "Unassigned");
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, TicketDetailComponent_div_6_option_32_Template, 2, 3, "option", 21);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(33, TicketDetailComponent_div_6_div_33_Template, 22, 8, "div", 22)(34, TicketDetailComponent_div_6_div_34_Template, 15, 0, "div", 23);
    \u0275\u0275elementStart(35, "div", 24)(36, "div", 25, 0);
    \u0275\u0275template(38, TicketDetailComponent_div_6_div_38_Template, 8, 11, "div", 26)(39, TicketDetailComponent_div_6_div_39_Template, 2, 0, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, TicketDetailComponent_div_6_div_40_Template, 12, 4, "div", 28)(41, TicketDetailComponent_div_6_div_41_Template, 6, 0, "div", 29);
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
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedStatus);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedAdminId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.franchiseAdmins());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ticket().order);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ticket().status === "close" || ctx_r1.ticket().status === "closed");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.messages());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.messages().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ticket().status !== "close" && ctx_r1.ticket().status !== "closed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ticket().status === "close" || ctx_r1.ticket().status === "closed");
  }
}
var TicketDetailComponent = class _TicketDetailComponent {
  http;
  route;
  router;
  toast;
  messagesArea;
  fileInput;
  ticket = signal(null);
  messages = signal([]);
  franchiseAdmins = signal([]);
  loading = signal(false);
  sending = signal(false);
  selectedStatus = "";
  selectedAdminId = "";
  replyText = "";
  attachmentFile = null;
  ticketId = "";
  uploadsBase = environment.apiUrl.replace("/api/v1", "") + "/uploads/";
  constructor(http, route, router, toast) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.toast = toast;
  }
  ngOnInit() {
    this.ticketId = this.route.snapshot.paramMap.get("id") || "";
    this.loadTicket();
    this.loadFranchiseAdmins();
  }
  loadTicket() {
    this.loading.set(true);
    this.http.get(`${environment.apiUrl}/admin/tickets/${this.ticketId}`).subscribe({
      next: (res) => {
        const t = res.data;
        this.ticket.set(t);
        this.selectedStatus = t.status || "open";
        this.selectedAdminId = t.admin_id ? String(t.admin_id) : "";
        this.messages.set(t.messages || []);
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
  changeStatus() {
    this.http.put(`${environment.apiUrl}/admin/tickets/${this.ticketId}/status`, { status: this.selectedStatus }).subscribe({
      next: () => {
        this.toast.success("Status updated");
        this.loadTicket();
      },
      error: () => this.toast.error("Failed to update status")
    });
  }
  assignFranchise() {
    this.http.put(`${environment.apiUrl}/admin/tickets/${this.ticketId}/assign`, {
      admin_id: this.selectedAdminId ? Number(this.selectedAdminId) : null
    }).subscribe({
      next: () => this.toast.success("Ticket assigned"),
      error: () => this.toast.error("Failed to assign ticket")
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
      this.toast.info("No order linked to this ticket. Link an order first.");
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
    return new (t || _TicketDetailComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
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
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 2, consts: [["messagesArea", ""], ["fileInput", ""], ["routerLink", "/admin/support-ticket/tickets", 1, "back-link"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], ["class", "loading-center", 4, "ngIf"], [4, "ngIf"], [1, "loading-center"], [1, "spinner"], [1, "ticket-header"], [1, "header-left"], [1, "page-title"], [1, "ticket-meta"], [1, "badge"], [1, "header-controls"], [1, "control-group"], [3, "ngModelChange", "change", "ngModel"], ["value", "open"], ["value", "close"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "order-card", 4, "ngIf"], ["class", "payment-section", 4, "ngIf"], [1, "chat-container"], [1, "messages-area"], ["class", "message-bubble", 3, "admin-msg", "user-msg", 4, "ngFor", "ngForOf"], ["class", "no-messages", 4, "ngIf"], ["class", "reply-box", 4, "ngIf"], ["class", "closed-notice", 4, "ngIf"], [3, "value"], [1, "order-card"], [1, "order-card-header"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#e31b23", "stroke-width", "2"], ["d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "1"], [1, "order-details"], [1, "badge", "badge-blue"], [1, "payment-section"], [1, "payment-card"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#16a34a", "stroke-width", "2"], ["x", "1", "y", "4", "width", "22", "height", "16", "rx", "2", "ry", "2"], ["x1", "1", "y1", "10", "x2", "23", "y2", "10"], [1, "payment-info"], [1, "btn-payment", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "message-bubble"], [1, "msg-sender"], ["class", "msg-text", 4, "ngIf"], ["class", "msg-attachment", 4, "ngIf"], [1, "msg-time"], [1, "msg-text"], [1, "msg-attachment"], ["target", "_blank", 1, "attachment-link", 3, "href"], ["class", "attachment-img", "alt", "Attachment", 3, "src", 4, "ngIf"], ["class", "attachment-file", 4, "ngIf"], ["alt", "Attachment", 1, "attachment-img", 3, "src"], [1, "attachment-file"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"], ["points", "14 2 14 8 20 8"], [1, "no-messages"], [1, "reply-box"], [1, "reply-input-area"], ["placeholder", "Type your reply...", "rows", "3", 3, "ngModelChange", "ngModel"], ["class", "attachment-preview", 4, "ngIf"], [1, "reply-actions"], ["title", "Attach file", 1, "btn-attach"], ["type", "file", "accept", "image/*,.pdf,.doc,.docx", 2, "display", "none", 3, "change"], ["d", "M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"], [1, "btn-primary", 3, "click", "disabled"], [1, "attachment-preview"], [1, "remove-attachment", 3, "click"], [1, "closed-notice"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#64748b", "stroke-width", "2"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0110 0v4"]], template: function TicketDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 3);
      \u0275\u0275element(2, "path", 4)(3, "polyline", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Back to Tickets ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, TicketDetailComponent_div_5_Template, 2, 0, "div", 6)(6, TicketDetailComponent_div_6_Template, 42, 21, "div", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.ticket());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  color: #64748b;\n  text-decoration: none;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 8px;\n}\n.ticket-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n  gap: 16px;\n  background: #fff;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.ticket-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  font-size: 13px;\n  color: #64748b;\n}\n.ticket-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.header-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.control-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.control-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #334155;\n  font-size: 13px;\n  white-space: nowrap;\n}\n.control-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  min-width: 180px;\n}\n.control-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge-yellow[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.order-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 16px 24px;\n  margin-bottom: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border-left: 4px solid #e31b23;\n}\n.order-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #334155;\n  margin-bottom: 8px;\n}\n.order-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  font-size: 13px;\n  color: #64748b;\n}\n.order-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.payment-section[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.payment-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 12px;\n  padding: 20px 24px;\n}\n.payment-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.payment-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 15px;\n  color: #166534;\n  font-weight: 700;\n}\n.payment-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #16a34a;\n}\n.btn-payment[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #16a34a;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-payment[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.chat-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.messages-area[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-height: 500px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: #f8f9fa;\n}\n.message-bubble[_ngcontent-%COMP%] {\n  max-width: 70%;\n  padding: 12px 16px;\n  border-radius: 12px;\n}\n.user-msg[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  background: #e5e7eb;\n  color: #334155;\n  border-bottom-left-radius: 4px;\n}\n.admin-msg[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  background: #fde8e9;\n  color: #1a1a2e;\n  border-bottom-right-radius: 4px;\n}\n.msg-sender[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  margin-bottom: 4px;\n  color: #64748b;\n}\n.admin-msg[_ngcontent-%COMP%]   .msg-sender[_ngcontent-%COMP%] {\n  color: #e31b23;\n}\n.msg-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.5;\n  white-space: pre-wrap;\n}\n.msg-attachment[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.attachment-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.attachment-img[_ngcontent-%COMP%] {\n  max-width: 280px;\n  max-height: 200px;\n  border-radius: 8px;\n  object-fit: cover;\n  border: 1px solid #e5e7eb;\n  display: block;\n}\n.attachment-file[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #f1f5f9;\n  padding: 8px 14px;\n  border-radius: 8px;\n  color: #3b82f6;\n  font-size: 13px;\n  font-weight: 500;\n}\n.msg-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #94a3b8;\n  margin-top: 6px;\n  text-align: right;\n}\n.no-messages[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n}\n.reply-box[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  gap: 12px;\n  align-items: flex-end;\n}\n.reply-input-area[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.reply-input-area[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  resize: vertical;\n  font-family: inherit;\n  box-sizing: border-box;\n}\n.reply-input-area[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);\n}\n.attachment-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f1f5f9;\n  padding: 6px 12px;\n  border-radius: 6px;\n  margin-top: 8px;\n  font-size: 13px;\n  color: #334155;\n}\n.remove-attachment[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #dc2626;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 1;\n}\n.reply-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.btn-attach[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.2s;\n}\n.btn-attach[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n  border-color: #e31b23;\n  background: #fff5f5;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.closed-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 16px;\n  border-top: 1px solid #e5e7eb;\n  color: #64748b;\n  font-size: 14px;\n}\n/*# sourceMappingURL=ticket-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketDetailComponent, { className: "TicketDetailComponent", filePath: "src\\app\\features\\admin\\tickets\\ticket-detail.component.ts", lineNumber: 200 });
})();
export {
  TicketDetailComponent
};
//# sourceMappingURL=chunk-TA45LCD2.js.map
