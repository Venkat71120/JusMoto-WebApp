import {
  RouterLink,
  RouterModule
} from "./chunk-CMH3GDQY.js";
import "./chunk-TT3LTPCS.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/tickets/ticket-list/ticket-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/tickets", a0];
function TicketListComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div")(3, "h3", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 11)(13, "span", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 13);
    \u0275\u0275text(16, "View Details");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ticket_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ticket_r1.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Ticket #", ticket_r1.id, " | ", \u0275\u0275pipeBind2(7, 9, ticket_r1.created_at, "medium"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass(ticket_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ticket_r1.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ticket_r1.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Category: ", ticket_r1.category, "");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, ticket_r1.id));
  }
}
function TicketListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, TicketListComponent_Conditional_6_For_2_Template, 17, 14, "div", 5, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.tickets());
  }
}
function TicketListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p", 15);
    \u0275\u0275text(2, "No support tickets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 16);
    \u0275\u0275text(4, " Create Your First Ticket ");
    \u0275\u0275elementEnd()();
  }
}
var TicketListComponent = class _TicketListComponent {
  tickets = signal([]);
  ngOnInit() {
    this.tickets.set([
      { id: 1, subject: "Order not received", description: "My order was supposed to be delivered yesterday but I haven't received it yet.", status: "open", category: "Orders", created_at: /* @__PURE__ */ new Date() }
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
  static \u0275fac = function TicketListComponent_Factory(t) {
    return new (t || _TicketListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketListComponent, selectors: [["app-ticket-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-3xl", "font-bold"], ["routerLink", "/tickets/create", 1, "bg-blue-600", "text-white", "px-4", "py-2", "rounded", "hover:bg-blue-700"], [1, "space-y-4"], [1, "bg-white", "rounded-lg", "shadow", "p-6"], [1, "flex", "justify-between", "items-start"], [1, "font-bold", "text-lg"], [1, "text-gray-500", "text-sm"], [1, "px-3", "py-1", "rounded-full", "text-sm"], [1, "text-gray-600", "mt-2", "line-clamp-2"], [1, "flex", "justify-between", "items-center", "mt-4"], [1, "text-sm", "text-gray-500"], [1, "text-blue-600", "hover:underline", 3, "routerLink"], [1, "text-center", "py-12", "bg-white", "rounded-lg", "shadow"], [1, "text-xl", "text-gray-500", "mb-4"], ["routerLink", "/tickets/create", 1, "bg-blue-600", "text-white", "px-6", "py-2", "rounded", "hover:bg-blue-700"]], template: function TicketListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Support Tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 3);
      \u0275\u0275text(5, " + New Ticket ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, TicketListComponent_Conditional_6_Template, 3, 0, "div", 4)(7, TicketListComponent_Conditional_7_Template, 5, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(6, ctx.tickets().length > 0 ? 6 : 7);
    }
  }, dependencies: [CommonModule, DatePipe, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketListComponent, { className: "TicketListComponent", filePath: "src\\app\\features\\tickets\\ticket-list\\ticket-list.component.ts", lineNumber: 50 });
})();
export {
  TicketListComponent
};
//# sourceMappingURL=chunk-SG567HIE.js.map
