import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-77LM5CPK.js";
import {
  RouterModule
} from "./chunk-CMH3GDQY.js";
import "./chunk-TT3LTPCS.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
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
  ɵɵtwoWayProperty
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/profile/my-cars/my-cars.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MyCarsComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "img", 8);
    \u0275\u0275elementStart(3, "div")(4, "h3", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 11)(9, "p")(10, "span", 12);
    \u0275\u0275text(11, "Registration:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "span", 12);
    \u0275\u0275text(15, "Fuel Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p")(18, "span", 12);
    \u0275\u0275text(19, "Year:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 13)(22, "button", 14);
    \u0275\u0275text(23, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 15);
    \u0275\u0275listener("click", function MyCarsComponent_Conditional_6_For_2_Template_button_click_24_listener() {
      const car_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteCar(car_r2.id));
    });
    \u0275\u0275text(25, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const car_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", car_r2.image || "/assets/car-placeholder.png", \u0275\u0275sanitizeUrl)("alt", car_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", car_r2.brand, " ", car_r2.model, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(car_r2.variant);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", car_r2.registration_number, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", car_r2.fuel_type, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", car_r2.year, "");
  }
}
function MyCarsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, MyCarsComponent_Conditional_6_For_2_Template, 26, 8, "div", 6, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.cars());
  }
}
function MyCarsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "p", 17);
    \u0275\u0275text(2, "No cars added yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 18);
    \u0275\u0275listener("click", function MyCarsComponent_Conditional_7_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddModal = true);
    });
    \u0275\u0275text(4, " Add Your First Car ");
    \u0275\u0275elementEnd()();
  }
}
function MyCarsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 19)(2, "h2", 20);
    \u0275\u0275text(3, "Add New Car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21)(5, "div")(6, "label", 22);
    \u0275\u0275text(7, "Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function MyCarsComponent_Conditional_8_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newCar.brand, $event) || (ctx_r2.newCar.brand = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 24);
    \u0275\u0275text(10, "Select Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 25);
    \u0275\u0275text(12, "Maruti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 26);
    \u0275\u0275text(14, "Honda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 27);
    \u0275\u0275text(16, "Toyota");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 28);
    \u0275\u0275text(18, "Hyundai");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 29);
    \u0275\u0275text(20, "Tata");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div")(22, "label", 22);
    \u0275\u0275text(23, "Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function MyCarsComponent_Conditional_8_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newCar.model, $event) || (ctx_r2.newCar.model = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "label", 22);
    \u0275\u0275text(27, "Registration Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function MyCarsComponent_Conditional_8_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newCar.registration_number, $event) || (ctx_r2.newCar.registration_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "label", 22);
    \u0275\u0275text(31, "Fuel Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function MyCarsComponent_Conditional_8_Template_select_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newCar.fuel_type, $event) || (ctx_r2.newCar.fuel_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(33, "option", 32);
    \u0275\u0275text(34, "Petrol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 33);
    \u0275\u0275text(36, "Diesel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 34);
    \u0275\u0275text(38, "CNG");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 35);
    \u0275\u0275text(40, "Electric");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 36)(42, "button", 37);
    \u0275\u0275listener("click", function MyCarsComponent_Conditional_8_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddModal = false);
    });
    \u0275\u0275text(43, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 38);
    \u0275\u0275listener("click", function MyCarsComponent_Conditional_8_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addCar());
    });
    \u0275\u0275text(45, "Add Car");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCar.brand);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCar.model);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCar.registration_number);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCar.fuel_type);
  }
}
var MyCarsComponent = class _MyCarsComponent {
  cars = signal([]);
  showAddModal = false;
  newCar = {
    brand: "",
    model: "",
    registration_number: "",
    fuel_type: "petrol"
  };
  ngOnInit() {
    this.cars.set([
      { id: 1, brand: "Maruti", model: "Swift", variant: "VXI", registration_number: "MH01AB1234", fuel_type: "Petrol", year: 2020 }
    ]);
  }
  addCar() {
    if (!this.newCar.brand || !this.newCar.model || !this.newCar.registration_number) {
      alert("Please fill all required fields");
      return;
    }
    this.showAddModal = false;
    this.newCar = { brand: "", model: "", registration_number: "", fuel_type: "petrol" };
    alert("Car added successfully!");
  }
  deleteCar(id) {
    if (confirm("Are you sure you want to delete this car?")) {
      this.cars.update((cars) => cars.filter((c) => c.id !== id));
    }
  }
  static \u0275fac = function MyCarsComponent_Factory(t) {
    return new (t || _MyCarsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyCarsComponent, selectors: [["app-my-cars"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-3xl", "font-bold"], [1, "bg-blue-600", "text-white", "px-4", "py-2", "rounded", "hover:bg-blue-700", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-50", "flex", "items-center", "justify-center", "z-50"], [1, "bg-white", "rounded-lg", "shadow", "p-6"], [1, "flex", "items-center", "gap-4", "mb-4"], [1, "w-16", "h-16", "object-contain", 3, "src", "alt"], [1, "font-bold", "text-lg"], [1, "text-gray-500"], [1, "space-y-2", "text-sm", "text-gray-600"], [1, "font-medium"], [1, "flex", "gap-2", "mt-4"], [1, "flex-1", "bg-gray-100", "text-gray-700", "py-2", "rounded", "hover:bg-gray-200"], [1, "flex-1", "bg-red-100", "text-red-700", "py-2", "rounded", "hover:bg-red-200", 3, "click"], [1, "text-center", "py-12", "bg-white", "rounded-lg", "shadow"], [1, "text-xl", "text-gray-500", "mb-4"], [1, "bg-blue-600", "text-white", "px-6", "py-2", "rounded", "hover:bg-blue-700", 3, "click"], [1, "bg-white", "rounded-lg", "p-6", "w-full", "max-w-md"], [1, "text-xl", "font-bold", "mb-4"], [1, "space-y-4"], [1, "block", "text-sm", "font-medium", "mb-1"], [1, "w-full", "p-2", "border", "rounded", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Maruti"], ["value", "Honda"], ["value", "Toyota"], ["value", "Hyundai"], ["value", "Tata"], ["type", "text", 1, "w-full", "p-2", "border", "rounded", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "MH01AB1234", 1, "w-full", "p-2", "border", "rounded", 3, "ngModelChange", "ngModel"], ["value", "petrol"], ["value", "diesel"], ["value", "cng"], ["value", "electric"], [1, "flex", "gap-4", "mt-6"], [1, "flex-1", "bg-gray-200", "py-2", "rounded", "hover:bg-gray-300", 3, "click"], [1, "flex-1", "bg-blue-600", "text-white", "py-2", "rounded", "hover:bg-blue-700", 3, "click"]], template: function MyCarsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "My Cars");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function MyCarsComponent_Template_button_click_4_listener() {
        return ctx.showAddModal = true;
      });
      \u0275\u0275text(5, " + Add Car ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, MyCarsComponent_Conditional_6_Template, 3, 0, "div", 4)(7, MyCarsComponent_Conditional_7_Template, 5, 0)(8, MyCarsComponent_Conditional_8_Template, 46, 4, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(6, ctx.cars().length > 0 ? 6 : 7);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(8, ctx.showAddModal ? 8 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyCarsComponent, { className: "MyCarsComponent", filePath: "src\\app\\features\\profile\\my-cars\\my-cars.component.ts", lineNumber: 95 });
})();
export {
  MyCarsComponent
};
//# sourceMappingURL=chunk-FTAFN4SW.js.map
