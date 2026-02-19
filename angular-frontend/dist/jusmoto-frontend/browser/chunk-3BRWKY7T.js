import {
  TicketService
} from "./chunk-NMNKT4XS.js";
import "./chunk-XSC2IEYW.js";
import "./chunk-GUDC7RY7.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-CMH3GDQY.js";
import "./chunk-TT3LTPCS.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  SlicePipe,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/client/tickets/ticket-list.component.ts
var _c0 = (a0) => ["/client/tickets", a0];
function ClientTicketListComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ClientTicketListComponent_button_11_Template_button_click_0_listener() {
      const status_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByStatus(status_r2.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeStatus() === status_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", status_r2.label, " ");
  }
}
function ClientTicketListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading tickets...");
    \u0275\u0275elementEnd()();
  }
}
function ClientTicketListComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275text(2, "\u{1F3AB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No tickets found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "You haven't created any support tickets yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 3);
    \u0275\u0275text(8, "Create a Ticket");
    \u0275\u0275elementEnd()();
  }
}
function ClientTicketListComponent_div_14_a_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ticket_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ticket_r4.category);
  }
}
function ClientTicketListComponent_div_14_a_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ticket_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ticket_r4.replies_count, " ", ticket_r4.replies_count === 1 ? "reply" : "replies", " ");
  }
}
function ClientTicketListComponent_div_14_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 18)(1, "div", 19)(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h3", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 23);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 24);
    \u0275\u0275template(13, ClientTicketListComponent_div_14_a_1_span_13_Template, 2, 1, "span", 25);
    \u0275\u0275elementStart(14, "span", 26);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ClientTicketListComponent_div_14_a_1_span_17_Template, 2, 2, "span", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ticket_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c0, ticket_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", ticket_r4.ticket_number || ticket_r4.id, "");
    \u0275\u0275advance();
    \u0275\u0275classMap("status-" + ticket_r4.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 10, ticket_r4.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ticket_r4.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(11, 12, ticket_r4.message, 0, 100), "...");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ticket_r4.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 16, ticket_r4.created_at, "mediumDate"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ticket_r4.replies_count);
  }
}
function ClientTicketListComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, ClientTicketListComponent_div_14_a_1_Template, 18, 21, "a", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.tickets());
  }
}
function ClientTicketListComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 31);
    \u0275\u0275listener("click", function ClientTicketListComponent_div_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() - 1));
    });
    \u0275\u0275text(2, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function ClientTicketListComponent_div_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() + 1));
    });
    \u0275\u0275text(6, " Next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r2.currentPage(), " of ", ctx_r2.totalPages(), "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage() === ctx_r2.totalPages());
  }
}
var ClientTicketListComponent = class _ClientTicketListComponent {
  ticketService;
  tickets = signal([]);
  loading = signal(true);
  activeStatus = signal("all");
  currentPage = signal(1);
  totalPages = signal(1);
  statuses = [
    { label: "All", value: "all" },
    { label: "Open", value: "open" },
    { label: "Pending", value: "pending" },
    { label: "Answered", value: "answered" },
    { label: "Closed", value: "closed" }
  ];
  constructor(ticketService) {
    this.ticketService = ticketService;
  }
  ngOnInit() {
    this.loadTickets();
  }
  loadTickets() {
    this.loading.set(true);
    this.ticketService.getTickets({
      status: this.activeStatus() === "all" ? void 0 : this.activeStatus(),
      page: this.currentPage()
    }).subscribe({
      next: (response) => {
        this.tickets.set(response.data || response.tickets || []);
        this.totalPages.set(response.meta?.last_page || response.totalPages || 1);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  filterByStatus(status) {
    this.activeStatus.set(status);
    this.currentPage.set(1);
    this.loadTickets();
  }
  goToPage(page) {
    this.currentPage.set(page);
    this.loadTickets();
  }
  static \u0275fac = function ClientTicketListComponent_Factory(t) {
    return new (t || _ClientTicketListComponent)(\u0275\u0275directiveInject(TicketService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientTicketListComponent, selectors: [["app-client-ticket-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 5, consts: [[1, "tickets-container"], [1, "page-header"], [1, "header-content"], ["routerLink", "/client/tickets/new", 1, "btn-primary"], [1, "filters-bar"], [1, "filter-tabs"], ["class", "filter-tab", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "tickets-list", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "filter-tab", 3, "click"], [1, "loading"], [1, "spinner"], [1, "empty-state"], [1, "empty-icon"], [1, "tickets-list"], ["class", "ticket-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "ticket-card", 3, "routerLink"], [1, "ticket-header"], [1, "ticket-id"], [1, "status-badge"], [1, "ticket-subject"], [1, "ticket-preview"], [1, "ticket-meta"], ["class", "category", 4, "ngIf"], [1, "date"], ["class", "replies", 4, "ngIf"], [1, "category"], [1, "replies"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function ClientTicketListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Service Requests");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "View and manage your support tickets");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 3);
      \u0275\u0275text(8, " + New Ticket ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "div", 5);
      \u0275\u0275template(11, ClientTicketListComponent_button_11_Template, 2, 3, "button", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, ClientTicketListComponent_div_12_Template, 4, 0, "div", 7)(13, ClientTicketListComponent_div_13_Template, 9, 0, "div", 8)(14, ClientTicketListComponent_div_14_Template, 2, 1, "div", 9)(15, ClientTicketListComponent_div_15_Template, 7, 4, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.statuses);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.tickets().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.tickets().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages() > 1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, TitleCasePipe, DatePipe, RouterModule, RouterLink], styles: ["\n\n.tickets-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #0066cc;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  text-decoration: none;\n  font-weight: 500;\n  cursor: pointer;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.filter-tab[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  border-radius: 20px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n.filter-tab[_ngcontent-%COMP%]:hover {\n  border-color: #0066cc;\n  color: #0066cc;\n}\n.filter-tab.active[_ngcontent-%COMP%] {\n  background: #0066cc;\n  border-color: #0066cc;\n  color: #fff;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #0066cc;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0 0 24px;\n}\n.tickets-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.ticket-card[_ngcontent-%COMP%] {\n  display: block;\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  text-decoration: none;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.ticket-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.ticket-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.ticket-id[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n  font-weight: 500;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.status-open[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-answered[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-closed[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ticket-subject[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.ticket-preview[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0 0 16px;\n  line-height: 1.5;\n}\n.ticket-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 13px;\n  color: #888;\n}\n.category[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  margin-top: 24px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n}\n/*# sourceMappingURL=ticket-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientTicketListComponent, { className: "ClientTicketListComponent", filePath: "src\\app\\features\\client\\tickets\\ticket-list.component.ts", lineNumber: 293 });
})();
export {
  ClientTicketListComponent
};
//# sourceMappingURL=chunk-3BRWKY7T.js.map
