import {
  ToastService
} from "./chunk-CUQ723YT.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-5WG63XSG.js";
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
  NgForOf,
  NgIf,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/admin/outlet-locations/outlet-location-form.component.ts
var _c0 = ["mapContainer"];
function OutletLocationFormComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function OutletLocationFormComponent_div_8_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function OutletLocationFormComponent_div_8_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.fetchStatesFromApi());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.fetchingStates());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fetchingStates() ? "Fetching..." : "Fetch from API", " ");
  }
}
function OutletLocationFormComponent_div_8_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275property("value", s_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r4.state);
  }
}
function OutletLocationFormComponent_div_8_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function OutletLocationFormComponent_div_8_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.fetchCitiesFromApi());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.fetchingCities());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fetchingCities() ? "Fetching..." : "Fetch from API", " ");
  }
}
function OutletLocationFormComponent_div_8_option_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275property("value", c_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.city);
  }
}
function OutletLocationFormComponent_div_8_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1, "Loading cities...");
    \u0275\u0275elementEnd();
  }
}
function OutletLocationFormComponent_div_8_select_46_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    \u0275\u0275property("value", a_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r8.area);
  }
}
function OutletLocationFormComponent_div_8_select_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 48);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_select_46_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.area_id, $event) || (ctx_r1.form.area_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 22);
    \u0275\u0275text(2, "Select Area");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, OutletLocationFormComponent_div_8_select_46_option_3_Template, 2, 2, "option", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.area_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.areas());
  }
}
function OutletLocationFormComponent_div_8_input_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_input_47_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.area_name, $event) || (ctx_r1.form.area_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.area_name);
  }
}
function OutletLocationFormComponent_div_8_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function OutletLocationFormComponent_div_8__svg_svg_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 51);
    \u0275\u0275element(1, "circle", 52)(2, "path", 53);
    \u0275\u0275elementEnd();
  }
}
function OutletLocationFormComponent_div_8_span_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 54);
  }
}
function OutletLocationFormComponent_div_8_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Lat: ", ctx_r1.form.latitude, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Lng: ", ctx_r1.form.longitude, "");
  }
}
function OutletLocationFormComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "label");
    \u0275\u0275text(4, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12)(7, "label");
    \u0275\u0275text(8, "Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.address, $event) || (ctx_r1.form.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 15)(11, "div", 12)(12, "label");
    \u0275\u0275text(13, "Post Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.post_code, $event) || (ctx_r1.form.post_code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12)(16, "label");
    \u0275\u0275text(17, "Latitude");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.latitude, $event) || (ctx_r1.form.latitude = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function OutletLocationFormComponent_div_8_Template_input_change_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCoordsManualChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 12)(20, "label");
    \u0275\u0275text(21, "Longitude");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.longitude, $event) || (ctx_r1.form.longitude = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function OutletLocationFormComponent_div_8_Template_input_change_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCoordsManualChange());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 15)(24, "div", 12)(25, "div", 19)(26, "label");
    \u0275\u0275text(27, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, OutletLocationFormComponent_div_8_button_28_Template, 2, 2, "button", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.state_id, $event) || (ctx_r1.form.state_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function OutletLocationFormComponent_div_8_Template_select_change_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStateChange());
    });
    \u0275\u0275elementStart(30, "option", 22);
    \u0275\u0275text(31, "Select State");
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, OutletLocationFormComponent_div_8_option_32_Template, 2, 2, "option", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 12)(34, "div", 19)(35, "label");
    \u0275\u0275text(36, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, OutletLocationFormComponent_div_8_button_37_Template, 2, 2, "button", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_select_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.city_id, $event) || (ctx_r1.form.city_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function OutletLocationFormComponent_div_8_Template_select_change_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCityChange());
    });
    \u0275\u0275elementStart(39, "option", 22);
    \u0275\u0275text(40, "Select City");
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, OutletLocationFormComponent_div_8_option_41_Template, 2, 2, "option", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, OutletLocationFormComponent_div_8_div_42_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 12)(44, "label");
    \u0275\u0275text(45, "Area");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, OutletLocationFormComponent_div_8_select_46_Template, 4, 2, "select", 25)(47, OutletLocationFormComponent_div_8_input_47_Template, 1, 1, "input", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 12)(49, "label", 27)(50, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.status, $event) || (ctx_r1.form.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " Active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(52, OutletLocationFormComponent_div_8_div_52_Template, 2, 1, "div", 29);
    \u0275\u0275elementStart(53, "div", 30)(54, "a", 31);
    \u0275\u0275text(55, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 32);
    \u0275\u0275listener("click", function OutletLocationFormComponent_div_8_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 33)(59, "div", 34)(60, "h3");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(61, "svg", 2);
    \u0275\u0275element(62, "path", 35)(63, "circle", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " Pick Location on Map ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(65, "span", 37);
    \u0275\u0275text(66, "Click on the map to set coordinates & address");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 38)(68, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function OutletLocationFormComponent_div_8_Template_input_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mapSearchQuery, $event) || (ctx_r1.mapSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function OutletLocationFormComponent_div_8_Template_input_keydown_enter_68_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchLocation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "button", 40);
    \u0275\u0275listener("click", function OutletLocationFormComponent_div_8_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchLocation());
    });
    \u0275\u0275template(70, OutletLocationFormComponent_div_8__svg_svg_70_Template, 3, 0, "svg", 41)(71, OutletLocationFormComponent_div_8_span_71_Template, 1, 0, "span", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(72, "div", 43, 0);
    \u0275\u0275template(74, OutletLocationFormComponent_div_8_div_74_Template, 5, 2, "div", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.address);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.post_code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.latitude);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.longitude);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.states().length === 0);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.state_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.states());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.form.state_id && ctx_r1.cities().length === 0 && !ctx_r1.citiesLoading());
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.city_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.cities());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.citiesLoading());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.areas().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.areas().length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Saving..." : ctx_r1.isEdit ? "Update" : "Create", " ");
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mapSearchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.mapSearching());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.mapSearching());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mapSearching());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.form.latitude && ctx_r1.form.longitude);
  }
}
var OutletLocationFormComponent = class _OutletLocationFormComponent {
  http;
  route;
  router;
  toast;
  mapContainer;
  isEdit = false;
  locationId = null;
  states = signal([]);
  cities = signal([]);
  areas = signal([]);
  citiesLoading = signal(false);
  loadingData = signal(false);
  saving = signal(false);
  fetchingStates = signal(false);
  fetchingCities = signal(false);
  mapSearching = signal(false);
  error = signal("");
  mapSearchQuery = "";
  form = { name: "", address: "", post_code: "", latitude: "", longitude: "", state_id: "", city_id: "", area_id: "", area_name: "", status: true };
  map;
  marker;
  constructor(http, route, router, toast) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.toast = toast;
  }
  ngOnInit() {
    this.locationId = this.route.snapshot.paramMap.get("id");
    this.isEdit = !!this.locationId;
    this.loadStates();
    if (this.isEdit)
      this.loadLocation();
  }
  ngAfterViewInit() {
    setTimeout(() => this.initMap(), 100);
  }
  initMap() {
    if (typeof L === "undefined")
      return;
    const lat = parseFloat(this.form.latitude) || 20.5937;
    const lng = parseFloat(this.form.longitude) || 78.9629;
    const zoom = this.form.latitude ? 14 : 5;
    this.map = L.map("outlet-map").setView([lat, lng], zoom);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(this.map);
    if (this.form.latitude && this.form.longitude) {
      this.marker = L.marker([lat, lng], { draggable: true }).addTo(this.map);
      this.marker.on("dragend", () => {
        const pos = this.marker.getLatLng();
        this.updateFromCoords(pos.lat, pos.lng);
      });
    }
    this.map.on("click", (e) => {
      this.updateFromCoords(e.latlng.lat, e.latlng.lng);
    });
  }
  updateFromCoords(lat, lng) {
    this.form.latitude = lat.toFixed(6);
    this.form.longitude = lng.toFixed(6);
    if (this.marker) {
      this.marker.setLatLng([lat, lng]);
    } else {
      this.marker = L.marker([lat, lng], { draggable: true }).addTo(this.map);
      this.marker.on("dragend", () => {
        const pos = this.marker.getLatLng();
        this.updateFromCoords(pos.lat, pos.lng);
      });
    }
    this.http.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`).subscribe({
      next: (res) => {
        if (res?.display_name) {
          this.form.address = res.display_name;
        }
        if (res?.address) {
          if (res.address.postcode)
            this.form.post_code = res.address.postcode;
          if (!this.form.name && (res.address.neighbourhood || res.address.suburb || res.address.city)) {
            this.form.name = res.address.neighbourhood || res.address.suburb || res.address.city || "";
          }
        }
        this.marker.bindPopup(`<b>${this.form.name || "Selected Location"}</b><br>${res.display_name || ""}`).openPopup();
      }
    });
  }
  onCoordsManualChange() {
    const lat = parseFloat(this.form.latitude);
    const lng = parseFloat(this.form.longitude);
    if (!isNaN(lat) && !isNaN(lng) && this.map) {
      this.map.setView([lat, lng], 14);
      if (this.marker) {
        this.marker.setLatLng([lat, lng]);
      } else {
        this.marker = L.marker([lat, lng], { draggable: true }).addTo(this.map);
        this.marker.on("dragend", () => {
          const pos = this.marker.getLatLng();
          this.updateFromCoords(pos.lat, pos.lng);
        });
      }
    }
  }
  searchLocation() {
    if (!this.mapSearchQuery.trim())
      return;
    this.mapSearching.set(true);
    this.http.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(this.mapSearchQuery)}&countrycodes=in&limit=1`).subscribe({
      next: (results) => {
        if (results?.length > 0) {
          const r = results[0];
          const lat = parseFloat(r.lat);
          const lng = parseFloat(r.lon);
          this.map.setView([lat, lng], 14);
          this.updateFromCoords(lat, lng);
        } else {
          this.toast.error("Location not found");
        }
      },
      error: () => this.toast.error("Search failed"),
      complete: () => this.mapSearching.set(false)
    });
  }
  loadStates() {
    this.http.get(`${environment.apiUrl}/admin/states`).subscribe({
      next: (res) => this.states.set(res.data || [])
    });
  }
  loadCities(stateId) {
    if (!stateId) {
      this.cities.set([]);
      return;
    }
    this.citiesLoading.set(true);
    this.http.get(`${environment.apiUrl}/admin/cities`, { params: { state_id: stateId } }).subscribe({
      next: (res) => {
        const cities = res.data || [];
        this.cities.set(cities);
        if (cities.length === 0 && stateId) {
          this.fetchCitiesFromApi();
        }
      },
      complete: () => this.citiesLoading.set(false)
    });
  }
  loadAreas(cityId) {
    if (!cityId) {
      this.areas.set([]);
      return;
    }
    this.http.get(`${environment.apiUrl}/admin/areas`, { params: { city_id: cityId } }).subscribe({
      next: (res) => this.areas.set(res.data || [])
    });
  }
  onStateChange() {
    this.form.city_id = "";
    this.form.area_id = "";
    this.form.area_name = "";
    this.areas.set([]);
    this.loadCities(this.form.state_id);
  }
  onCityChange() {
    this.form.area_id = "";
    this.form.area_name = "";
    this.loadAreas(this.form.city_id);
  }
  fetchStatesFromApi() {
    this.fetchingStates.set(true);
    this.http.post(`${environment.apiUrl}/admin/locations/import-states`, {}).subscribe({
      next: (res) => {
        this.toast.success(res.message || "States imported!");
        this.loadStates();
      },
      error: (err) => this.toast.error(err.error?.error || "Failed to fetch states"),
      complete: () => this.fetchingStates.set(false)
    });
  }
  fetchCitiesFromApi() {
    if (!this.form.state_id)
      return;
    this.fetchingCities.set(true);
    this.http.post(`${environment.apiUrl}/admin/locations/import-cities`, { state_id: this.form.state_id }).subscribe({
      next: (res) => {
        this.toast.success(res.message || "Cities imported!");
        this.loadCities(this.form.state_id);
      },
      error: (err) => this.toast.error(err.error?.error || "Failed to fetch cities"),
      complete: () => this.fetchingCities.set(false)
    });
  }
  loadLocation() {
    this.loadingData.set(true);
    this.http.get(`${environment.apiUrl}/admin/outlet-locations/${this.locationId}`).subscribe({
      next: (res) => {
        const l = res.data;
        this.form = {
          name: l.name || "",
          address: l.address || "",
          post_code: l.post_code || "",
          latitude: l.latitude || "",
          longitude: l.longitude || "",
          state_id: l.state_id || "",
          city_id: l.city_id || "",
          area_id: l.area_id || "",
          area_name: "",
          status: !!l.status
        };
        if (l.state_id)
          this.loadCities(String(l.state_id));
        if (l.city_id)
          this.loadAreas(String(l.city_id));
        setTimeout(() => {
          if (this.map && l.latitude && l.longitude) {
            const lat = parseFloat(l.latitude);
            const lng = parseFloat(l.longitude);
            this.map.setView([lat, lng], 14);
            this.marker = L.marker([lat, lng], { draggable: true }).addTo(this.map);
            this.marker.on("dragend", () => {
              const pos = this.marker.getLatLng();
              this.updateFromCoords(pos.lat, pos.lng);
            });
          }
        }, 200);
      },
      error: () => this.router.navigate(["/admin/outletAddress/all"]),
      complete: () => this.loadingData.set(false)
    });
  }
  onSubmit() {
    if (!this.form.name.trim()) {
      this.error.set("Name is required");
      return;
    }
    this.saving.set(true);
    this.error.set("");
    const submitData = () => {
      const data = {
        name: this.form.name,
        address: this.form.address,
        post_code: this.form.post_code,
        latitude: this.form.latitude,
        longitude: this.form.longitude,
        state_id: this.form.state_id || null,
        city_id: this.form.city_id || null,
        area_id: this.form.area_id || null,
        status: this.form.status ? 1 : 0
      };
      const req = this.isEdit ? this.http.put(`${environment.apiUrl}/admin/outlet-locations/${this.locationId}`, data) : this.http.post(`${environment.apiUrl}/admin/outlet-locations`, data);
      req.subscribe({
        next: () => {
          this.toast.success(this.isEdit ? "Location updated" : "Location created");
          this.router.navigate(["/admin/outletAddress/all"]);
        },
        error: (err) => {
          this.toast.error(err.error?.error || "Something went wrong");
          this.error.set(err.error?.error || "Something went wrong");
          this.saving.set(false);
        },
        complete: () => this.saving.set(false)
      });
    };
    if (this.form.area_name?.trim() && !this.form.area_id && this.form.city_id) {
      this.http.post(`${environment.apiUrl}/admin/areas`, { area: this.form.area_name, city_id: this.form.city_id, status: 1 }).subscribe({
        next: (res) => {
          this.form.area_id = res.data?.id;
          submitData();
        },
        error: () => submitData()
      });
    } else {
      submitData();
    }
  }
  static \u0275fac = function OutletLocationFormComponent_Factory(t) {
    return new (t || _OutletLocationFormComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OutletLocationFormComponent, selectors: [["app-outlet-location-form"]], viewQuery: function OutletLocationFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mapContainer = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [["mapContainer", ""], ["routerLink", "/admin/outletAddress/all", 1, "back-link"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], [1, "page-title"], ["class", "loading-center", 4, "ngIf"], ["class", "form-layout", 4, "ngIf"], [1, "loading-center"], [1, "spinner"], [1, "form-layout"], [1, "form-card"], [1, "form-group"], ["type", "text", "placeholder", "Location name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Full address", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["type", "text", "placeholder", "Post code", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. 28.6139", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["type", "text", "placeholder", "e.g. 77.2090", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], [1, "label-row"], ["class", "fetch-link", 3, "disabled", "click", 4, "ngIf"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "fetch-hint", 4, "ngIf"], ["class", "form-control", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "class", "form-control", "placeholder", "Type area name", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "toggle-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["class", "error-msg", 4, "ngIf"], [1, "form-actions"], ["routerLink", "/admin/outletAddress/all", 1, "btn-cancel"], [1, "btn-save", 3, "click", "disabled"], [1, "map-card"], [1, "map-header"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"], ["cx", "12", "cy", "10", "r", "3"], [1, "map-hint"], [1, "map-search-bar"], ["type", "text", "placeholder", "Search location...", 1, "form-control", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "map-search-btn", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["class", "spinner-xs", 4, "ngIf"], ["id", "outlet-map", 1, "map-container"], ["class", "map-coords", 4, "ngIf"], [1, "fetch-link", 3, "click", "disabled"], [3, "value"], [1, "fetch-hint"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Type area name", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "error-msg"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], [1, "spinner-xs"], [1, "map-coords"]], template: function OutletLocationFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 2);
      \u0275\u0275element(2, "path", 3)(3, "polyline", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Back to Outlet Locations ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h1", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, OutletLocationFormComponent_div_7_Template, 2, 0, "div", 6)(8, OutletLocationFormComponent_div_8_Template, 75, 23, "div", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.isEdit ? "Edit Outlet Location" : "Create Outlet Location");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingData());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  color: #64748b;\n  text-decoration: none;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 24px;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 1024px) {\n  .form-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  flex: 1;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #334155;\n  font-size: 14px;\n}\n.label-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.label-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.fetch-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #e31b23;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n}\n.fetch-link[_ngcontent-%COMP%]:hover:not(:disabled) {\n  text-decoration: underline;\n}\n.fetch-link[_ngcontent-%COMP%]:disabled {\n  color: #94a3b8;\n  cursor: not-allowed;\n}\n.fetch-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #e31b23;\n  width: 16px;\n  height: 16px;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 10px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #f1f5f9;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 12px 32px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 15px;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.map-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  position: sticky;\n  top: 20px;\n}\n.map-header[_ngcontent-%COMP%] {\n  padding: 20px 24px 0;\n}\n.map-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.map-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.map-search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px 24px;\n}\n.map-search-bar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.map-search-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  flex-shrink: 0;\n}\n.map-search-btn[_ngcontent-%COMP%]:hover {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.spinner-xs[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  display: inline-block;\n}\n.map-container[_ngcontent-%COMP%] {\n  height: 420px;\n  width: 100%;\n}\n.map-coords[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 10px 24px;\n  background: #f8f9fa;\n  font-size: 13px;\n  color: #64748b;\n  font-family: monospace;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OutletLocationFormComponent, { className: "OutletLocationFormComponent", filePath: "src\\app\\features\\admin\\outlet-locations\\outlet-location-form.component.ts", lineNumber: 173 });
})();
export {
  OutletLocationFormComponent
};
