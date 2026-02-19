import {
  ApiService
} from "./chunk-RU4JQJ5O.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-TBAOAUH3.js";
import "./chunk-OW254BTU.js";
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
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/core/services/wallet.service.ts
var WalletService = class _WalletService {
  api;
  constructor(api) {
    this.api = api;
  }
  getBalance() {
    return this.api.get("/wallet");
  }
  getTransactions(params) {
    return this.api.get("/wallet/transactions", params);
  }
  topUp(amount, payment_method) {
    return this.api.post("/wallet/topup", { amount, payment_method });
  }
  static \u0275fac = function WalletService_Factory(t) {
    return new (t || _WalletService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WalletService, factory: _WalletService.\u0275fac, providedIn: "root" });
};

// src/app/features/wallet/wallet.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function WalletComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function WalletComponent_For_19_Template_button_click_0_listener() {
      const amount_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addAmount = amount_r2);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const amount_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +\u20B9", amount_r2, " ");
  }
}
function WalletComponent_Conditional_23_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div")(2, "p", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 18);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const txn_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(txn_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 6, txn_r4.created_at, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(txn_r4.type === "credit" ? "text-green-600" : "text-red-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", txn_r4.type === "credit" ? "+" : "-", "\u20B9", txn_r4.amount, " ");
  }
}
function WalletComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, WalletComponent_Conditional_23_For_2_Template, 9, 9, "div", 22, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.transactions());
  }
}
function WalletComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, "No transactions yet");
    \u0275\u0275elementEnd();
  }
}
var WalletComponent = class _WalletComponent {
  walletService;
  balance = signal(0);
  transactions = signal([]);
  stats = signal({ totalAdded: 0, totalSpent: 0, cashbackEarned: 0 });
  addAmount = 0;
  isProcessing = signal(false);
  quickAmounts = [100, 500, 1e3, 2e3];
  constructor(walletService) {
    this.walletService = walletService;
  }
  ngOnInit() {
    this.loadWallet();
    this.loadTransactions();
  }
  loadWallet() {
    this.walletService.getBalance().subscribe({
      next: (response) => {
        this.balance.set(response.data?.balance || 0);
      }
    });
  }
  loadTransactions() {
    this.walletService.getTransactions().subscribe({
      next: (response) => {
        this.transactions.set(response.data || []);
      }
    });
  }
  addMoney() {
    if (this.addAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    this.isProcessing.set(true);
    this.walletService.topUp(this.addAmount, "razorpay").subscribe({
      next: () => {
        this.isProcessing.set(false);
        this.addAmount = 0;
        this.loadWallet();
        this.loadTransactions();
        alert("Money added successfully!");
      },
      error: () => {
        this.isProcessing.set(false);
        alert("Failed to add money. Please try again.");
      }
    });
  }
  static \u0275fac = function WalletComponent_Factory(t) {
    return new (t || _WalletComponent)(\u0275\u0275directiveInject(WalletService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WalletComponent, selectors: [["app-wallet"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 44, vars: 8, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "text-3xl", "font-bold", "mb-6"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2"], [1, "bg-gradient-to-r", "from-blue-600", "to-blue-800", "rounded-lg", "shadow", "p-6", "text-white", "mb-6"], [1, "text-sm", "opacity-80"], [1, "text-4xl", "font-bold"], [1, "bg-white", "rounded-lg", "shadow", "p-6", "mb-6"], [1, "text-xl", "font-bold", "mb-4"], [1, "flex", "gap-4"], ["type", "number", "placeholder", "Enter amount", 1, "flex-1", "p-3", "border", "rounded", 3, "ngModelChange", "ngModel"], [1, "bg-blue-600", "text-white", "px-6", "py-3", "rounded", "hover:bg-blue-700", 3, "click", "disabled"], [1, "flex", "gap-2", "mt-4"], [1, "px-4", "py-2", "border", "rounded", "hover:bg-gray-50"], [1, "bg-white", "rounded-lg", "shadow", "p-6"], [1, "space-y-4"], [1, "bg-white", "rounded-lg", "shadow", "p-6", "h-fit"], [1, "p-3", "bg-gray-50", "rounded"], [1, "text-sm", "text-gray-500"], [1, "font-bold", "text-lg"], [1, "font-bold", "text-lg", "text-green-600"], [1, "px-4", "py-2", "border", "rounded", "hover:bg-gray-50", 3, "click"], [1, "flex", "justify-between", "items-center", "border-b", "pb-4"], [1, "font-semibold"], [1, "font-bold"], [1, "text-gray-500", "text-center", "py-4"]], template: function WalletComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "My Wallet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "p", 5);
      \u0275\u0275text(7, "Available Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7)(11, "h2", 8);
      \u0275\u0275text(12, "Add Money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function WalletComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.addAmount, $event) || (ctx.addAmount = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 11);
      \u0275\u0275listener("click", function WalletComponent_Template_button_click_15_listener() {
        return ctx.addMoney();
      });
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12);
      \u0275\u0275repeaterCreate(18, WalletComponent_For_19_Template, 2, 1, "button", 13, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 14)(21, "h2", 8);
      \u0275\u0275text(22, "Transaction History");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, WalletComponent_Conditional_23_Template, 3, 0, "div", 15)(24, WalletComponent_Conditional_24_Template, 2, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 16)(26, "h2", 8);
      \u0275\u0275text(27, "Quick Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 15)(29, "div", 17)(30, "p", 18);
      \u0275\u0275text(31, "Total Added");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p", 19);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 17)(35, "p", 18);
      \u0275\u0275text(36, "Total Spent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p", 19);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 17)(40, "p", 18);
      \u0275\u0275text(41, "Cashback Earned");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p", 20);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("\u20B9", ctx.balance(), "");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.addAmount);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isProcessing());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isProcessing() ? "Processing..." : "Add Money", " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.quickAmounts);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(23, ctx.transactions().length > 0 ? 23 : 24);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("\u20B9", ctx.stats().totalAdded, "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("\u20B9", ctx.stats().totalSpent, "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("\u20B9", ctx.stats().cashbackEarned, "");
    }
  }, dependencies: [CommonModule, DatePipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WalletComponent, { className: "WalletComponent", filePath: "src\\app\\features\\wallet\\wallet.component.ts", lineNumber: 81 });
})();
export {
  WalletComponent
};
