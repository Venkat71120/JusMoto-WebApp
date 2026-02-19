import {
  ChallanService
} from "./chunk-RMH4ZY2G.js";
import "./chunk-RU4JQJ5O.js";
import "./chunk-OW254BTU.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-DYL6AOBP.js";
import "./chunk-L2KTGN5G.js";
import {
  CommonModule,
  DatePipe,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/challans/challan-list/challan-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/challans", a0];
function ChallanListComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading challans...");
    \u0275\u0275elementEnd()();
  }
}
function ChallanListComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Challans Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 3);
    \u0275\u0275text(8, "Check for Challans");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("You don't have any ", ctx_r0.activeFilter() === "all" ? "" : ctx_r0.activeFilter(), " challans.");
  }
}
function ChallanListComponent_Conditional_53_For_20_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ChallanListComponent_Conditional_53_For_20_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const challan_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.payNow(challan_r3));
    });
    \u0275\u0275text(1, "Pay");
    \u0275\u0275elementEnd();
  }
}
function ChallanListComponent_Conditional_53_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 22);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 23);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "a", 24);
    \u0275\u0275text(17, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ChallanListComponent_Conditional_53_For_20_Conditional_18_Template, 2, 0, "button", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const challan_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(challan_r3.challan_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(challan_r3.vehicle_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(challan_r3.offence_type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 10, challan_r3.offence_date, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", challan_r3.fine_amount, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(challan_r3.payment_status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", challan_r3.payment_status === "paid" ? "Paid" : "Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, challan_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(18, challan_r3.payment_status !== "paid" ? 18 : -1);
  }
}
function ChallanListComponent_Conditional_53_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 27);
    \u0275\u0275listener("click", function ChallanListComponent_Conditional_53_Conditional_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.loadPage(ctx_r0.pagination().page - 1));
    });
    \u0275\u0275text(2, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 27);
    \u0275\u0275listener("click", function ChallanListComponent_Conditional_53_Conditional_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.loadPage(ctx_r0.pagination().page + 1));
    });
    \u0275\u0275text(6, " Next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.pagination().page === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r0.pagination().page, " of ", ctx_r0.pagination().totalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.pagination().page === ctx_r0.pagination().totalPages);
  }
}
function ChallanListComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Challan No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Vehicle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Offence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, ChallanListComponent_Conditional_53_For_20_Template, 19, 15, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(21, ChallanListComponent_Conditional_53_Conditional_21_Template, 7, 4, "div", 20);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r0.filteredChallans());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(21, ctx_r0.pagination().totalPages > 1 ? 21 : -1);
  }
}
var ChallanListComponent = class _ChallanListComponent {
  challanService = inject(ChallanService);
  challans = signal([]);
  stats = signal(null);
  isLoading = signal(true);
  activeFilter = signal("all");
  pagination = signal({ page: 1, totalPages: 1, total: 0 });
  ngOnInit() {
    this.loadChallans();
    this.loadStats();
  }
  loadChallans(page = 1) {
    this.isLoading.set(true);
    this.challanService.getChallans({ page }).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        if (response.success) {
          this.challans.set(response.data || []);
          if (response.pagination) {
            this.pagination.set(response.pagination);
          }
        }
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }
  loadStats() {
    this.challanService.getChallanStats().subscribe({
      next: (response) => {
        if (response.success) {
          this.stats.set(response.data);
        }
      }
    });
  }
  setFilter(filter) {
    this.activeFilter.set(filter);
  }
  filteredChallans() {
    const filter = this.activeFilter();
    if (filter === "all")
      return this.challans();
    return this.challans().filter((c) => c.payment_status === filter);
  }
  loadPage(page) {
    this.loadChallans(page);
  }
  payNow(challan) {
  }
  static \u0275fac = function ChallanListComponent_Factory(t) {
    return new (t || _ChallanListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChallanListComponent, selectors: [["app-challan-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 11, consts: [[1, "challan-list-container"], [1, "page-header"], [1, "header-content"], ["routerLink", "/challans/check", 1, "btn-primary"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "total"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", "pending"], [1, "stat-icon", "paid"], [1, "stat-icon", "amount"], [1, "filter-tabs"], [3, "click"], [1, "loading-state"], [1, "spinner"], [1, "empty-state"], [1, "empty-icon"], [1, "challan-table"], [1, "pagination"], [1, "challan-number"], [1, "amount"], [1, "status-badge"], [1, "btn-view", 3, "routerLink"], [1, "btn-pay"], [1, "btn-pay", 3, "click"], [3, "click", "disabled"]], template: function ChallanListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Traffic Challans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "View and manage your traffic violation challans");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 3)(8, "span");
      \u0275\u0275text(9, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Check New Challan ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 4)(12, "div", 5)(13, "div", 6);
      \u0275\u0275text(14, "\u{1F4CB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "span", 8);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 9);
      \u0275\u0275text(19, "Total Challans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 5)(21, "div", 10);
      \u0275\u0275text(22, "\u23F3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 7)(24, "span", 8);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 9);
      \u0275\u0275text(27, "Pending");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 5)(29, "div", 11);
      \u0275\u0275text(30, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 7)(32, "span", 8);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 9);
      \u0275\u0275text(35, "Paid");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 5)(37, "div", 12);
      \u0275\u0275text(38, "\u20B9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 7)(40, "span", 8);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span", 9);
      \u0275\u0275text(43, "Pending Amount");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 13)(45, "button", 14);
      \u0275\u0275listener("click", function ChallanListComponent_Template_button_click_45_listener() {
        return ctx.setFilter("all");
      });
      \u0275\u0275text(46, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 14);
      \u0275\u0275listener("click", function ChallanListComponent_Template_button_click_47_listener() {
        return ctx.setFilter("pending");
      });
      \u0275\u0275text(48, " Pending ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "button", 14);
      \u0275\u0275listener("click", function ChallanListComponent_Template_button_click_49_listener() {
        return ctx.setFilter("paid");
      });
      \u0275\u0275text(50, " Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(51, ChallanListComponent_Conditional_51_Template, 4, 0, "div", 15)(52, ChallanListComponent_Conditional_52_Template, 9, 1)(53, ChallanListComponent_Conditional_53_Template, 22, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate(((tmp_0_0 = ctx.stats()) == null ? null : tmp_0_0.total) || 0);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(((tmp_1_0 = ctx.stats()) == null ? null : tmp_1_0.pending) || 0);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(((tmp_2_0 = ctx.stats()) == null ? null : tmp_2_0.paid) || 0);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("\u20B9", ((tmp_3_0 = ctx.stats()) == null ? null : tmp_3_0.pendingAmount) || 0, "");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeFilter() === "all");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeFilter() === "pending");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeFilter() === "paid");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(51, ctx.isLoading() ? 51 : ctx.filteredChallans().length === 0 ? 52 : 53);
    }
  }, dependencies: [CommonModule, DatePipe, RouterModule, RouterLink], styles: ["\n\n.challan-list-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 30px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-bottom: 5px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: #007bff;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0056b3;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  margin-bottom: 30px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n.stat-icon.total[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n}\n.stat-icon.pending[_ngcontent-%COMP%] {\n  background: #fff3e0;\n}\n.stat-icon.paid[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n}\n.stat-icon.amount[_ngcontent-%COMP%] {\n  background: #fce4ec;\n}\n.stat-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n.stat-label[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n}\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.filter-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 20px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.filter-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n  border-color: #007bff;\n}\n.loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e0e0e0;\n  border-top-color: #007bff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 20px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin-bottom: 20px;\n}\n.challan-table[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n}\n.challan-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.challan-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 15px;\n  text-align: left;\n  font-weight: 600;\n  border-bottom: 1px solid #e0e0e0;\n}\n.challan-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.challan-number[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 600;\n}\n.amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #dc3545;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.status-badge.paid[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.unpaid[_ngcontent-%COMP%], .status-badge.pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.btn-view[_ngcontent-%COMP%], .btn-pay[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 4px;\n  font-size: 13px;\n  cursor: pointer;\n  margin-right: 5px;\n}\n.btn-view[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  color: #495057;\n  text-decoration: none;\n  border: none;\n}\n.btn-pay[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n  border: none;\n}\n.btn-pay[_ngcontent-%COMP%]:hover {\n  background: #218838;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  margin-top: 20px;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .challan-table[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChallanListComponent, { className: "ChallanListComponent", filePath: "src\\app\\features\\challans\\challan-list\\challan-list.component.ts", lineNumber: 395 });
})();
export {
  ChallanListComponent
};
