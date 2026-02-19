import {
  environment
} from "./chunk-OW254BTU.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-DYL6AOBP.js";
import {
  HttpClient
} from "./chunk-L2KTGN5G.js";
import {
  CommonModule,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-5RHIFAVQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MEBOPP65.js";

// src/app/features/client/address/address-list.component.ts
var _c0 = (a0) => ["/client/address/edit", a0];
function AddressListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading addresses...");
    \u0275\u0275elementEnd()();
  }
}
function AddressListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No addresses saved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Add your first address for a faster checkout experience.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 3);
    \u0275\u0275text(8, "Add Address");
    \u0275\u0275elementEnd()();
  }
}
function AddressListComponent_div_11_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function AddressListComponent_div_11_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const address_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(address_r2.address_line2);
  }
}
function AddressListComponent_div_11_div_1_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26)(1, "strong");
    \u0275\u0275text(2, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const address_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", address_r2.phone, " ");
  }
}
function AddressListComponent_div_11_div_1_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function AddressListComponent_div_11_div_1_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const address_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setDefault(address_r2.id));
    });
    \u0275\u0275text(1, "Set as Default");
    \u0275\u0275elementEnd();
  }
}
function AddressListComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AddressListComponent_div_11_div_1_span_5_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 18);
    \u0275\u0275text(10);
    \u0275\u0275element(11, "br");
    \u0275\u0275template(12, AddressListComponent_div_11_div_1_span_12_Template, 3, 1, "span", 19);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, AddressListComponent_div_11_div_1_p_14_Template, 4, 1, "p", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 21)(16, "a", 22);
    \u0275\u0275text(17, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AddressListComponent_div_11_div_1_button_18_Template, 2, 0, "button", 23);
    \u0275\u0275elementStart(19, "button", 24);
    \u0275\u0275listener("click", function AddressListComponent_div_11_div_1_Template_button_click_19_listener() {
      const address_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteAddress(address_r2.id));
    });
    \u0275\u0275text(20, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const address_r2 = ctx.$implicit;
    \u0275\u0275classProp("default", address_r2.is_default);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("type-" + address_r2.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 15, address_r2.type));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", address_r2.is_default);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(address_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", address_r2.address_line1, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", address_r2.address_line2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", address_r2.city, ", ", address_r2.state, " - ", address_r2.pincode, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", address_r2.phone);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, address_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !address_r2.is_default);
  }
}
function AddressListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, AddressListComponent_div_11_div_1_Template, 21, 19, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.addresses());
  }
}
var AddressListComponent = class _AddressListComponent {
  http;
  addresses = signal([]);
  loading = signal(true);
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.loadAddresses();
  }
  loadAddresses() {
    this.loading.set(true);
    this.http.get(`${environment.apiUrl}/addresses`).subscribe({
      next: (response) => {
        this.addresses.set(response.data || response.addresses || []);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  setDefault(id) {
    this.http.put(`${environment.apiUrl}/addresses/${id}/default`, {}).subscribe({
      next: () => {
        this.addresses.update((items) => items.map((addr) => __spreadProps(__spreadValues({}, addr), { is_default: addr.id === id })));
      }
    });
  }
  deleteAddress(id) {
    if (confirm("Are you sure you want to delete this address?")) {
      this.http.delete(`${environment.apiUrl}/addresses/${id}`).subscribe({
        next: () => {
          this.addresses.update((items) => items.filter((addr) => addr.id !== id));
        }
      });
    }
  }
  static \u0275fac = function AddressListComponent_Factory(t) {
    return new (t || _AddressListComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddressListComponent, selectors: [["app-address-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 3, consts: [[1, "address-container"], [1, "page-header"], [1, "header-content"], ["routerLink", "/client/address/create", 1, "btn-primary"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "address-grid", 4, "ngIf"], [1, "loading"], [1, "spinner"], [1, "empty-state"], [1, "empty-icon"], [1, "address-grid"], ["class", "address-card", 3, "default", 4, "ngFor", "ngForOf"], [1, "address-card"], [1, "card-header"], [1, "address-type"], ["class", "default-badge", 4, "ngIf"], [1, "card-body"], [1, "address-text"], [4, "ngIf"], ["class", "phone", 4, "ngIf"], [1, "card-actions"], [1, "action-btn", 3, "routerLink"], ["class", "action-btn", 3, "click", 4, "ngIf"], [1, "action-btn", "danger", 3, "click"], [1, "default-badge"], [1, "phone"], [1, "action-btn", 3, "click"]], template: function AddressListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "My Addresses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Manage your saved addresses for quick checkout");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 3);
      \u0275\u0275text(8, " + Add New Address ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, AddressListComponent_div_9_Template, 4, 0, "div", 4)(10, AddressListComponent_div_10_Template, 9, 0, "div", 5)(11, AddressListComponent_div_11_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.addresses().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.addresses().length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe, RouterModule, RouterLink], styles: ["\n\n.address-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #0066cc;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  text-decoration: none;\n  font-weight: 500;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #0066cc;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0 0 24px;\n}\n.address-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n}\n.address-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 2px solid #e5e7eb;\n  overflow: hidden;\n  transition: all 0.2s;\n}\n.address-card[_ngcontent-%COMP%]:hover {\n  border-color: #0066cc;\n}\n.address-card.default[_ngcontent-%COMP%] {\n  border-color: #0066cc;\n  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.15);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.address-type[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 12px;\n  text-transform: uppercase;\n}\n.type-home[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.type-work[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.type-other[_ngcontent-%COMP%] {\n  background: #e5e7eb;\n  color: #4b5563;\n}\n.default-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  background: #0066cc;\n  color: #fff;\n  padding: 3px 8px;\n  border-radius: 10px;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 12px;\n}\n.address-text[_ngcontent-%COMP%] {\n  color: #444;\n  line-height: 1.6;\n  margin: 0 0 12px;\n}\n.phone[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px 16px;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.action-btn[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  font-size: 13px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  color: #444;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #0066cc;\n  color: #0066cc;\n}\n.action-btn.danger[_ngcontent-%COMP%]:hover {\n  border-color: #dc3545;\n  color: #dc3545;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddressListComponent, { className: "AddressListComponent", filePath: "src\\app\\features\\client\\address\\address-list.component.ts", lineNumber: 247 });
})();
export {
  AddressListComponent
};
