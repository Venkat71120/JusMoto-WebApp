import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TBAOAUH3.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-DYL6AOBP.js";
import "./chunk-L2KTGN5G.js";
import {
  CommonModule,
  DatePipe,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MEBOPP65.js";

// src/app/features/tickets/ticket-detail/ticket-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TicketDetailComponent_Conditional_4_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const message_r1 = ctx.$implicit;
    \u0275\u0275classMap(message_r1.is_support ? "bg-blue-50 ml-8" : "bg-gray-50 mr-8");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(message_r1.is_support ? "Support Team" : "You");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, message_r1.created_at, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(message_r1.message);
  }
}
function TicketDetailComponent_Conditional_4_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "textarea", 23);
    \u0275\u0275twoWayListener("ngModelChange", function TicketDetailComponent_Conditional_4_Conditional_19_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newMessage, $event) || (ctx_r2.newMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 24);
    \u0275\u0275listener("click", function TicketDetailComponent_Conditional_4_Conditional_19_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.sendReply());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isSending());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isSending() ? "Sending..." : "Send Reply", " ");
  }
}
function TicketDetailComponent_Conditional_4_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function TicketDetailComponent_Conditional_4_Conditional_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeTicket());
    });
    \u0275\u0275text(1, " Close Ticket ");
    \u0275\u0275elementEnd();
  }
}
function TicketDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div")(5, "h1", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 5)(14, "h2", 11);
    \u0275\u0275text(15, "Conversation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 12);
    \u0275\u0275repeaterCreate(17, TicketDetailComponent_Conditional_4_For_18_Template, 9, 8, "div", 13, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, TicketDetailComponent_Conditional_4_Conditional_19_Template, 4, 3, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 15)(21, "div", 5)(22, "h2", 11);
    \u0275\u0275text(23, "Ticket Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 16)(25, "div")(26, "p", 17);
    \u0275\u0275text(27, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 18);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div")(31, "p", 17);
    \u0275\u0275text(32, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 18);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "p", 17);
    \u0275\u0275text(37, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 18);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div")(42, "p", 17);
    \u0275\u0275text(43, "Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 18);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(47, TicketDetailComponent_Conditional_4_Conditional_47_Template, 2, 0, "button", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.ticket().subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ticket #", ctx_r2.ticket().id, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getStatusClass(ctx_r2.ticket().status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.ticket().status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.ticket().description);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.messages());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(19, ctx_r2.ticket().status !== "closed" ? 19 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.ticket().category);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.ticket().priority);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 12, ctx_r2.ticket().created_at, "medium"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 15, ctx_r2.ticket().updated_at, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(47, ctx_r2.ticket().status !== "closed" ? 47 : -1);
  }
}
var TicketDetailComponent = class _TicketDetailComponent {
  route;
  ticket = signal(null);
  messages = signal([]);
  newMessage = "";
  isSending = signal(false);
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.ticket.set({
      id,
      subject: "Order not received",
      description: "My order was supposed to be delivered yesterday but I haven't received it yet. Order ID: #12345",
      status: "open",
      category: "Orders",
      priority: "High",
      created_at: /* @__PURE__ */ new Date(),
      updated_at: /* @__PURE__ */ new Date()
    });
    this.messages.set([
      { id: 1, message: "Hello, I haven't received my order yet. It was supposed to be delivered yesterday.", is_support: false, created_at: /* @__PURE__ */ new Date() },
      { id: 2, message: "We apologize for the delay. We're looking into this and will update you shortly.", is_support: true, created_at: /* @__PURE__ */ new Date() }
    ]);
  }
  getStatusClass(status) {
    const classes = {
      "open": "bg-yellow-100 text-yellow-800",
      "in_progress": "bg-blue-100 text-blue-800",
      "resolved": "bg-green-100 text-green-800",
      "closed": "bg-gray-100 text-gray-800"
    };
    return classes[status?.toLowerCase()] || "bg-gray-100 text-gray-800";
  }
  sendReply() {
    if (!this.newMessage.trim())
      return;
    this.isSending.set(true);
    setTimeout(() => {
      this.messages.update((msgs) => [...msgs, {
        id: msgs.length + 1,
        message: this.newMessage,
        is_support: false,
        created_at: /* @__PURE__ */ new Date()
      }]);
      this.newMessage = "";
      this.isSending.set(false);
    }, 500);
  }
  closeTicket() {
    if (confirm("Are you sure you want to close this ticket?")) {
      this.ticket.update((t) => __spreadProps(__spreadValues({}, t), { status: "closed" }));
    }
  }
  static \u0275fac = function TicketDetailComponent_Factory(t) {
    return new (t || _TicketDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketDetailComponent, selectors: [["app-ticket-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "mb-6"], ["routerLink", "/tickets", 1, "text-blue-600", "hover:underline"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-white", "rounded-lg", "shadow", "p-6"], [1, "flex", "justify-between", "items-start", "mb-4"], [1, "text-2xl", "font-bold"], [1, "text-gray-500"], [1, "px-3", "py-1", "rounded-full"], [1, "text-gray-600"], [1, "text-xl", "font-bold", "mb-4"], [1, "space-y-4"], [1, "p-4", "rounded-lg", 3, "class"], [1, "mt-6"], [1, "space-y-6"], [1, "space-y-3"], [1, "text-sm", "text-gray-500"], [1, "font-medium"], [1, "w-full", "bg-red-100", "text-red-700", "py-2", "rounded", "hover:bg-red-200"], [1, "p-4", "rounded-lg"], [1, "flex", "justify-between", "mb-2"], [1, "font-semibold"], ["rows", "3", "placeholder", "Type your reply...", 1, "w-full", "p-2", "border", "rounded", 3, "ngModelChange", "ngModel"], [1, "mt-2", "bg-blue-600", "text-white", "px-4", "py-2", "rounded", "hover:bg-blue-700", 3, "click", "disabled"], [1, "w-full", "bg-red-100", "text-red-700", "py-2", "rounded", "hover:bg-red-200", 3, "click"]], template: function TicketDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275text(3, "\u2190 Back to Tickets");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, TicketDetailComponent_Conditional_4_Template, 48, 18, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(4, ctx.ticket() ? 4 : -1);
    }
  }, dependencies: [CommonModule, DatePipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketDetailComponent, { className: "TicketDetailComponent", filePath: "src\\app\\features\\tickets\\ticket-detail\\ticket-detail.component.ts", lineNumber: 91 });
})();
export {
  TicketDetailComponent
};
