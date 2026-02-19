import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-X7FFWIXK.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-37NMOBDC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// src/app/features/profile/addresses/addresses.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AddressesComponent_Conditional_6_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function AddressesComponent_Conditional_6_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function AddressesComponent_Conditional_6_For_2_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const address_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setDefault(address_r3.id));
    });
    \u0275\u0275text(1, "Set Default");
    \u0275\u0275elementEnd();
  }
}
function AddressesComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, AddressesComponent_Conditional_6_For_2_Conditional_1_Template, 2, 0, "span", 8);
    \u0275\u0275elementStart(2, "h3", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 13)(11, "button", 14);
    \u0275\u0275text(12, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AddressesComponent_Conditional_6_For_2_Conditional_13_Template, 2, 0, "button", 15);
    \u0275\u0275elementStart(14, "button", 16);
    \u0275\u0275listener("click", function AddressesComponent_Conditional_6_For_2_Template_button_click_14_listener() {
      const address_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteAddress(address_r3.id));
    });
    \u0275\u0275text(15, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const address_r3 = ctx.$implicit;
    \u0275\u0275classProp("border-2", address_r3.is_default)("border-blue-500", address_r3.is_default);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, address_r3.is_default ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(address_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(address_r3.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", address_r3.city, ", ", address_r3.state, " - ", address_r3.pincode, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Phone: ", address_r3.phone, "");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(13, !address_r3.is_default ? 13 : -1);
  }
}
function AddressesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, AddressesComponent_Conditional_6_For_2_Template, 16, 12, "div", 6, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.addresses());
  }
}
function AddressesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "p", 19);
    \u0275\u0275text(2, "No addresses added yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 20);
    \u0275\u0275listener("click", function AddressesComponent_Conditional_7_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showAddModal = true);
    });
    \u0275\u0275text(4, " Add Your First Address ");
    \u0275\u0275elementEnd()();
  }
}
function AddressesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 21)(2, "h2", 22);
    \u0275\u0275text(3, "Add New Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23)(5, "div")(6, "label", 24);
    \u0275\u0275text(7, "Label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AddressesComponent_Conditional_8_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newAddress.label, $event) || (ctx_r3.newAddress.label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 26);
    \u0275\u0275text(10, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 27);
    \u0275\u0275text(12, "Office");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 28);
    \u0275\u0275text(14, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div")(16, "label", 24);
    \u0275\u0275text(17, "Full Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "textarea", 29);
    \u0275\u0275twoWayListener("ngModelChange", function AddressesComponent_Conditional_8_Template_textarea_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newAddress.address, $event) || (ctx_r3.newAddress.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 30)(20, "div")(21, "label", 24);
    \u0275\u0275text(22, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function AddressesComponent_Conditional_8_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newAddress.city, $event) || (ctx_r3.newAddress.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "label", 24);
    \u0275\u0275text(26, "Pincode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function AddressesComponent_Conditional_8_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newAddress.pincode, $event) || (ctx_r3.newAddress.pincode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div")(29, "label", 24);
    \u0275\u0275text(30, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function AddressesComponent_Conditional_8_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newAddress.phone, $event) || (ctx_r3.newAddress.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "label", 33)(33, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function AddressesComponent_Conditional_8_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newAddress.is_default, $event) || (ctx_r3.newAddress.is_default = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, "Set as default address");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 35)(37, "button", 36);
    \u0275\u0275listener("click", function AddressesComponent_Conditional_8_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showAddModal = false);
    });
    \u0275\u0275text(38, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 37);
    \u0275\u0275listener("click", function AddressesComponent_Conditional_8_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addAddress());
    });
    \u0275\u0275text(40, "Add Address");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newAddress.label);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newAddress.address);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newAddress.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newAddress.pincode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newAddress.phone);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newAddress.is_default);
  }
}
var AddressesComponent = class _AddressesComponent {
  addresses = signal([]);
  showAddModal = false;
  newAddress = {
    label: "Home",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    is_default: false
  };
  ngOnInit() {
    this.addresses.set([
      { id: 1, label: "Home", address: "123, Main Street, Sector 5", city: "Mumbai", state: "Maharashtra", pincode: "400001", phone: "9876543210", is_default: true }
    ]);
  }
  addAddress() {
    if (!this.newAddress.address || !this.newAddress.city || !this.newAddress.pincode) {
      alert("Please fill all required fields");
      return;
    }
    this.showAddModal = false;
    this.newAddress = { label: "Home", address: "", city: "", state: "", pincode: "", phone: "", is_default: false };
    alert("Address added successfully!");
  }
  setDefault(id) {
    this.addresses.update((addresses) => addresses.map((a) => __spreadProps(__spreadValues({}, a), { is_default: a.id === id })));
  }
  deleteAddress(id) {
    if (confirm("Are you sure you want to delete this address?")) {
      this.addresses.update((addresses) => addresses.filter((a) => a.id !== id));
    }
  }
  static \u0275fac = function AddressesComponent_Factory(t) {
    return new (t || _AddressesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddressesComponent, selectors: [["app-addresses"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-3xl", "font-bold"], [1, "bg-blue-600", "text-white", "px-4", "py-2", "rounded", "hover:bg-blue-700", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-50", "flex", "items-center", "justify-center", "z-50"], [1, "bg-white", "rounded-lg", "shadow", "p-6", 3, "border-2", "border-blue-500"], [1, "bg-white", "rounded-lg", "shadow", "p-6"], [1, "inline-block", "bg-blue-100", "text-blue-800", "text-xs", "px-2", "py-1", "rounded", "mb-2"], [1, "font-bold", "text-lg"], [1, "text-gray-600", "mt-2"], [1, "text-gray-600"], [1, "text-gray-500", "mt-2"], [1, "flex", "gap-2", "mt-4"], [1, "flex-1", "bg-gray-100", "text-gray-700", "py-2", "rounded", "hover:bg-gray-200"], [1, "flex-1", "bg-blue-100", "text-blue-700", "py-2", "rounded", "hover:bg-blue-200"], [1, "flex-1", "bg-red-100", "text-red-700", "py-2", "rounded", "hover:bg-red-200", 3, "click"], [1, "flex-1", "bg-blue-100", "text-blue-700", "py-2", "rounded", "hover:bg-blue-200", 3, "click"], [1, "text-center", "py-12", "bg-white", "rounded-lg", "shadow"], [1, "text-xl", "text-gray-500", "mb-4"], [1, "bg-blue-600", "text-white", "px-6", "py-2", "rounded", "hover:bg-blue-700", 3, "click"], [1, "bg-white", "rounded-lg", "p-6", "w-full", "max-w-md"], [1, "text-xl", "font-bold", "mb-4"], [1, "space-y-4"], [1, "block", "text-sm", "font-medium", "mb-1"], [1, "w-full", "p-2", "border", "rounded", 3, "ngModelChange", "ngModel"], ["value", "Home"], ["value", "Office"], ["value", "Other"], ["rows", "3", 1, "w-full", "p-2", "border", "rounded", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-4"], ["type", "text", 1, "w-full", "p-2", "border", "rounded", 3, "ngModelChange", "ngModel"], ["type", "tel", 1, "w-full", "p-2", "border", "rounded", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-2"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-4", "mt-6"], [1, "flex-1", "bg-gray-200", "py-2", "rounded", "hover:bg-gray-300", 3, "click"], [1, "flex-1", "bg-blue-600", "text-white", "py-2", "rounded", "hover:bg-blue-700", 3, "click"]], template: function AddressesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "My Addresses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function AddressesComponent_Template_button_click_4_listener() {
        return ctx.showAddModal = true;
      });
      \u0275\u0275text(5, " + Add Address ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, AddressesComponent_Conditional_6_Template, 3, 0, "div", 4)(7, AddressesComponent_Conditional_7_Template, 5, 0)(8, AddressesComponent_Conditional_8_Template, 41, 6, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(6, ctx.addresses().length > 0 ? 6 : 7);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(8, ctx.showAddModal ? 8 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddressesComponent, { className: "AddressesComponent", filePath: "src\\app\\features\\profile\\addresses\\addresses.component.ts", lineNumber: 94 });
})();
export {
  AddressesComponent
};
//# sourceMappingURL=chunk-XAEUNVTA.js.map
