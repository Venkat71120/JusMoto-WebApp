import {
  ConfirmModalComponent
} from "./chunk-M673IPVF.js";
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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵreference,
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
} from "./chunk-RLLOV7VK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-LRITERKE.js";

// src/app/features/client/my-cars/my-cars.component.ts
function MyCarsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
}
function MyCarsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "path", 18)(3, "path", 19)(4, "path", 20)(5, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "No cars added yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Add your vehicle to quickly select it during checkout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 5);
    \u0275\u0275listener("click", function MyCarsComponent_div_13_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275text(11, "Add Your First Car");
    \u0275\u0275elementEnd()();
  }
}
function MyCarsComponent_div_14_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 42);
    \u0275\u0275listener("error", function MyCarsComponent_div_14_div_1_img_3_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.target.style.display = "none");
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const car_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getImageUrl(car_r5.car.image), \u0275\u0275sanitizeUrl)("alt", car_r5.car == null ? null : car_r5.car.name);
  }
}
function MyCarsComponent_div_14_div_1__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 18)(2, "path", 19)(3, "path", 20)(4, "path", 21);
    \u0275\u0275elementEnd();
  }
}
function MyCarsComponent_div_14_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function MyCarsComponent_div_14_div_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const car_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(car_r5.variant.name || ((car_r5.variant.engineType == null ? null : car_r5.variant.engineType.name) || "") + ((car_r5.variant.fuelType == null ? null : car_r5.variant.fuelType.name) ? " - " + car_r5.variant.fuelType.name : ""));
  }
}
function MyCarsComponent_div_14_div_1_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function MyCarsComponent_div_14_div_1_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const car_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setDefault(car_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 36);
    \u0275\u0275element(2, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Default ");
    \u0275\u0275elementEnd();
  }
}
function MyCarsComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "div", 26);
    \u0275\u0275template(3, MyCarsComponent_div_14_div_1_img_3_Template, 1, 2, "img", 27)(4, MyCarsComponent_div_14_div_1__svg_svg_4_Template, 5, 0, "svg", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MyCarsComponent_div_14_div_1_span_5_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 30)(7, "h3", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, MyCarsComponent_div_14_div_1_p_9_Template, 2, 1, "p", 32);
    \u0275\u0275elementStart(10, "div", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 34)(13, "button", 35);
    \u0275\u0275listener("click", function MyCarsComponent_div_14_div_1_Template_button_click_13_listener() {
      const car_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditModal(car_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 36);
    \u0275\u0275element(15, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MyCarsComponent_div_14_div_1_button_17_Template, 4, 0, "button", 38);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "button", 39);
    \u0275\u0275listener("click", function MyCarsComponent_div_14_div_1_Template_button_click_18_listener() {
      const car_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(car_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 36);
    \u0275\u0275element(20, "polyline", 40)(21, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const car_r5 = ctx.$implicit;
    \u0275\u0275classProp("is-default", car_r5.is_default);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", car_r5.car == null ? null : car_r5.car.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(car_r5.car == null ? null : car_r5.car.image));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", car_r5.is_default);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (car_r5.brand == null ? null : car_r5.brand.name) || "", " ", (car_r5.car == null ? null : car_r5.car.name) || "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", car_r5.variant);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(car_r5.registration_number || "-");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !car_r5.is_default);
  }
}
function MyCarsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, MyCarsComponent_div_14_div_1_Template, 23, 10, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cars());
  }
}
function MyCarsComponent_div_15_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "img", 78);
    \u0275\u0275listener("error", function MyCarsComponent_div_15_div_19_Template_img_error_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.image = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.imagePreview() || ctx_r1.getImageUrl(ctx_r1.form.image), \u0275\u0275sanitizeUrl);
  }
}
function MyCarsComponent_div_15_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 80);
    \u0275\u0275element(2, "path", 18)(3, "path", 19)(4, "path", 20)(5, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Upload a car image");
    \u0275\u0275elementEnd()();
  }
}
function MyCarsComponent_div_15_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.imageFile.name);
  }
}
function MyCarsComponent_div_15_ng_container_31_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 90);
    \u0275\u0275listener("click", function MyCarsComponent_div_15_ng_container_31_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fetchBrandsFromApi());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.fetchingBrands());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fetchingBrands() ? "Fetching..." : "Fetch All Brands", " ");
  }
}
function MyCarsComponent_div_15_ng_container_31_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275listener("click", function MyCarsComponent_div_15_ng_container_31_div_8_div_1_Template_div_click_0_listener() {
      const b_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectBrand(b_r13));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r13.name, " ");
  }
}
function MyCarsComponent_div_15_ng_container_31_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275template(1, MyCarsComponent_div_15_ng_container_31_div_8_div_1_Template, 2, 1, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredBrands());
  }
}
function MyCarsComponent_div_15_ng_container_31_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 95);
    \u0275\u0275listener("click", function MyCarsComponent_div_15_ng_container_31_div_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearBrand());
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.form.brand_name);
  }
}
function MyCarsComponent_div_15_ng_container_31_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 90);
    \u0275\u0275listener("click", function MyCarsComponent_div_15_ng_container_31_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fetchModelsFromApi());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.fetchingModels());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fetchingModels() ? "Fetching..." : "Fetch Models", " ");
  }
}
function MyCarsComponent_div_15_ng_container_31_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275listener("click", function MyCarsComponent_div_15_ng_container_31_div_17_div_1_Template_div_click_0_listener() {
      const m_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectModel(m_r17));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r17.name, " ");
  }
}
function MyCarsComponent_div_15_ng_container_31_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275template(1, MyCarsComponent_div_15_ng_container_31_div_17_div_1_Template, 2, 1, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredModels());
  }
}
function MyCarsComponent_div_15_ng_container_31_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 95);
    \u0275\u0275listener("click", function MyCarsComponent_div_15_ng_container_31_div_18_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearModel());
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.form.car_name);
  }
}
function MyCarsComponent_div_15_ng_container_31_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275text(1, "Loading models...");
    \u0275\u0275elementEnd();
  }
}
function MyCarsComponent_div_15_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 69)(2, "div", 82)(3, "label");
    \u0275\u0275text(4, "Brand *");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MyCarsComponent_div_15_ng_container_31_button_5_Template, 2, 2, "button", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 84)(7, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function MyCarsComponent_div_15_ng_container_31_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.brandSearch, $event) || (ctx_r1.brandSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function MyCarsComponent_div_15_ng_container_31_Template_input_input_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filterBrands());
    })("focus", function MyCarsComponent_div_15_ng_container_31_Template_input_focus_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showBrandDropdown.set(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MyCarsComponent_div_15_ng_container_31_div_8_Template, 2, 1, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, MyCarsComponent_div_15_ng_container_31_div_9_Template, 5, 1, "div", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 69)(11, "div", 82)(12, "label");
    \u0275\u0275text(13, "Car Model *");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MyCarsComponent_div_15_ng_container_31_button_14_Template, 2, 2, "button", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 84)(16, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function MyCarsComponent_div_15_ng_container_31_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.modelSearch, $event) || (ctx_r1.modelSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function MyCarsComponent_div_15_ng_container_31_Template_input_input_16_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filterModels());
    })("focus", function MyCarsComponent_div_15_ng_container_31_Template_input_focus_16_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showModelDropdown.set(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MyCarsComponent_div_15_ng_container_31_div_17_Template, 2, 1, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, MyCarsComponent_div_15_ng_container_31_div_18_Template, 5, 1, "div", 87)(19, MyCarsComponent_div_15_ng_container_31_div_19_Template, 2, 0, "div", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.brands().length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.brandSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showBrandDropdown() && ctx_r1.filteredBrands().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.brand_id && ctx_r1.form.brand_name);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.form.brand_id && ctx_r1.models().length === 0 && !ctx_r1.loadingModels());
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", ctx_r1.form.brand_id ? "Search model..." : "Select brand first");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modelSearch);
    \u0275\u0275property("disabled", !ctx_r1.form.brand_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showModelDropdown() && ctx_r1.filteredModels().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.car_id && ctx_r1.form.car_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingModels());
  }
}
function MyCarsComponent_div_15_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 69)(2, "label");
    \u0275\u0275text(3, "Brand Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 97);
    \u0275\u0275twoWayListener("ngModelChange", function MyCarsComponent_div_15_ng_container_32_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.brand_name, $event) || (ctx_r1.form.brand_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 69)(6, "label");
    \u0275\u0275text(7, "Car Model *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function MyCarsComponent_div_15_ng_container_32_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.car_name, $event) || (ctx_r1.form.car_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.brand_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.car_name);
  }
}
function MyCarsComponent_div_15_div_36_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 103);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r21 = ctx.$implicit;
    \u0275\u0275property("value", v_r21.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r21.name || ((v_r21.engineType == null ? null : v_r21.engineType.name) || "") + ((v_r21.fuelType == null ? null : v_r21.fuelType.name) ? " - " + v_r21.fuelType.name : "") || "Variant #" + v_r21.id);
  }
}
function MyCarsComponent_div_15_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "select", 99);
    \u0275\u0275twoWayListener("ngModelChange", function MyCarsComponent_div_15_div_36_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.variant_id, $event) || (ctx_r1.form.variant_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "option", 100);
    \u0275\u0275text(3, "Select variant (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MyCarsComponent_div_15_div_36_option_4_Template, 2, 2, "option", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 102);
    \u0275\u0275text(6, "or type a new one");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.variant_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.variants());
  }
}
function MyCarsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function MyCarsComponent_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 49);
    \u0275\u0275listener("click", function MyCarsComponent_div_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 50)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 51);
    \u0275\u0275listener("click", function MyCarsComponent_div_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 52)(8, "div", 53)(9, "button", 54);
    \u0275\u0275listener("click", function MyCarsComponent_div_15_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manualMode.set(false));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 55);
    \u0275\u0275element(11, "circle", 56)(12, "line", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Search Database ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "button", 54);
    \u0275\u0275listener("click", function MyCarsComponent_div_15_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manualMode.set(true));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 55);
    \u0275\u0275element(16, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Add Manually ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "div", 58);
    \u0275\u0275template(19, MyCarsComponent_div_15_div_19_Template, 2, 1, "div", 59)(20, MyCarsComponent_div_15_div_20_Template, 8, 0, "div", 60);
    \u0275\u0275elementStart(21, "div", 61)(22, "input", 62, 0);
    \u0275\u0275listener("change", function MyCarsComponent_div_15_Template_input_change_22_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 63);
    \u0275\u0275listener("click", function MyCarsComponent_div_15_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r7);
      const carFileInput_r9 = \u0275\u0275reference(23);
      return \u0275\u0275resetView(carFileInput_r9.click());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 6);
    \u0275\u0275element(26, "path", 64)(27, "polyline", 65)(28, "line", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, MyCarsComponent_div_15_span_30_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, MyCarsComponent_div_15_ng_container_31_Template, 20, 11, "ng-container", 68)(32, MyCarsComponent_div_15_ng_container_32_Template, 9, 2, "ng-container", 68);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "div", 69)(34, "label");
    \u0275\u0275text(35, "Variant / Trim");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, MyCarsComponent_div_15_div_36_Template, 7, 2, "div", 68);
    \u0275\u0275elementStart(37, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function MyCarsComponent_div_15_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.variant_name, $event) || (ctx_r1.form.variant_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 69)(39, "label");
    \u0275\u0275text(40, "Registration Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function MyCarsComponent_div_15_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.registration_number, $event) || (ctx_r1.form.registration_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function MyCarsComponent_div_15_Template_input_input_41_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRegInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 69)(43, "label", 72)(44, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function MyCarsComponent_div_15_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.is_default, $event) || (ctx_r1.form.is_default = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " Set as default vehicle ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 74)(47, "button", 75);
    \u0275\u0275listener("click", function MyCarsComponent_div_15_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(48, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 76);
    \u0275\u0275listener("click", function MyCarsComponent_div_15_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCar());
    });
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingId ? "Edit Car" : "Add New Car");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", !ctx_r1.manualMode());
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r1.manualMode());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.form.image || ctx_r1.imagePreview());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.form.image && !ctx_r1.imagePreview());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.imageFile ? "Change Image" : "Upload Image", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.imageFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.manualMode());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.manualMode());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.manualMode() && ctx_r1.variants().length > 0);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.variant_name);
    \u0275\u0275property("disabled", !!ctx_r1.form.variant_id);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.registration_number);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.is_default);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.saving() || !ctx_r1.isFormValid());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Saving..." : ctx_r1.editingId ? "Update Car" : "Add Car", " ");
  }
}
var MyCarsComponent = class _MyCarsComponent {
  http;
  toast;
  cars = signal([]);
  brands = signal([]);
  models = signal([]);
  variants = signal([]);
  filteredBrands = signal([]);
  filteredModels = signal([]);
  loading = signal(true);
  loadingModels = signal(false);
  showModal = signal(false);
  saving = signal(false);
  fetchingBrands = signal(false);
  fetchingModels = signal(false);
  deleteModalOpen = signal(false);
  deletingCar = signal(null);
  showBrandDropdown = signal(false);
  showModelDropdown = signal(false);
  manualMode = signal(false);
  imagePreview = signal("");
  baseUrl = environment.apiUrl.replace("/api/v1", "");
  editingId = null;
  brandSearch = "";
  modelSearch = "";
  imageFile = null;
  form = { brand_id: null, brand_name: "", car_id: null, car_name: "", variant_id: "", variant_name: "", registration_number: "", is_default: false, image: "" };
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  getImageUrl(image) {
    if (!image)
      return "";
    if (image.startsWith("http"))
      return image;
    if (image.startsWith("/uploads/"))
      return `${this.baseUrl}${image}`;
    if (image.startsWith("uploads/"))
      return `${this.baseUrl}/${image}`;
    if (image.startsWith("media/")) {
      const filename = image.replace("media/", "");
      return `${this.baseUrl}/uploads/media/${filename}`;
    }
    return `${this.baseUrl}/uploads/media/${image}`;
  }
  ngOnInit() {
    this.loadCars();
    this.loadBrands();
    document.addEventListener("click", () => {
      this.showBrandDropdown.set(false);
      this.showModelDropdown.set(false);
    });
  }
  loadCars() {
    this.loading.set(true);
    this.http.get(`${environment.apiUrl}/user/cars`).subscribe({
      next: (res) => this.cars.set(res.data || []),
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  loadBrands() {
    this.http.get(`${environment.apiUrl}/brands`).subscribe({
      next: (res) => {
        this.brands.set(res.data || []);
        this.filteredBrands.set(res.data || []);
      }
    });
  }
  filterBrands() {
    const q = this.brandSearch.toLowerCase();
    this.filteredBrands.set(this.brands().filter((b) => b.name.toLowerCase().includes(q)).slice(0, 50));
    this.showBrandDropdown.set(true);
  }
  selectBrand(brand) {
    this.form.brand_id = brand.id;
    this.form.brand_name = brand.name;
    this.brandSearch = "";
    this.showBrandDropdown.set(false);
    this.clearModel();
    this.loadModelsForBrand(brand.id);
  }
  clearBrand() {
    this.form.brand_id = null;
    this.form.brand_name = "";
    this.brandSearch = "";
    this.clearModel();
    this.models.set([]);
    this.filteredModels.set([]);
  }
  loadModelsForBrand(brandId) {
    this.loadingModels.set(true);
    this.http.get(`${environment.apiUrl}/brands/${brandId}/cars`).subscribe({
      next: (res) => {
        const carsList = res.data || [];
        this.models.set(carsList);
        this.filteredModels.set(carsList);
        if (carsList.length === 0) {
          this.fetchModelsFromApi();
        }
      },
      error: () => {
      },
      complete: () => this.loadingModels.set(false)
    });
  }
  filterModels() {
    const q = this.modelSearch.toLowerCase();
    this.filteredModels.set(this.models().filter((m) => m.name.toLowerCase().includes(q)).slice(0, 50));
    this.showModelDropdown.set(true);
  }
  selectModel(model) {
    this.form.car_id = model.id;
    this.form.car_name = model.name;
    this.form.image = model.image || "";
    this.modelSearch = "";
    this.showModelDropdown.set(false);
    this.form.variant_id = "";
    this.form.variant_name = "";
    this.http.get(`${environment.apiUrl}/cars/${model.id}/variants`).subscribe({
      next: (res) => this.variants.set(res.data || [])
    });
  }
  clearModel() {
    this.form.car_id = null;
    this.form.car_name = "";
    this.form.variant_id = "";
    this.form.variant_name = "";
    this.modelSearch = "";
    this.variants.set([]);
  }
  fetchBrandsFromApi() {
    this.fetchingBrands.set(true);
    this.http.post(`${environment.apiUrl}/cars/fetch-brands`, {}).subscribe({
      next: (res) => {
        this.toast.success(res.message || "Brands imported!");
        this.loadBrands();
      },
      error: (err) => this.toast.error(err.error?.error || "Failed to fetch brands"),
      complete: () => this.fetchingBrands.set(false)
    });
  }
  fetchModelsFromApi() {
    if (!this.form.brand_id)
      return;
    this.fetchingModels.set(true);
    this.http.post(`${environment.apiUrl}/cars/fetch-models`, { brand_id: this.form.brand_id }).subscribe({
      next: (res) => {
        this.toast.success(res.message || "Models imported!");
        this.loadModelsForBrand(this.form.brand_id);
      },
      error: (err) => this.toast.error(err.error?.error || "Failed to fetch models"),
      complete: () => this.fetchingModels.set(false)
    });
  }
  onRegInput(event) {
    const input = event.target;
    input.value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    this.form.registration_number = input.value;
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      this.imageFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => this.imagePreview.set(e.target?.result);
      reader.readAsDataURL(this.imageFile);
    }
  }
  isFormValid() {
    if (this.manualMode()) {
      return !!this.form.brand_name?.trim() && !!this.form.car_name?.trim() && !!this.form.registration_number?.trim();
    }
    return this.form.brand_id && this.form.car_id && this.form.registration_number?.trim();
  }
  openAddModal() {
    this.editingId = null;
    this.form = { brand_id: null, brand_name: "", car_id: null, car_name: "", variant_id: "", variant_name: "", registration_number: "", is_default: false, image: "" };
    this.brandSearch = "";
    this.modelSearch = "";
    this.imageFile = null;
    this.imagePreview.set("");
    this.manualMode.set(false);
    this.models.set([]);
    this.filteredModels.set([]);
    this.variants.set([]);
    this.showModal.set(true);
  }
  openEditModal(car) {
    this.editingId = car.id;
    this.form = {
      brand_id: car.brand_id,
      brand_name: car.brand?.name || "",
      car_id: car.car_id,
      car_name: car.car?.name || "",
      variant_id: car.variant_id || "",
      variant_name: "",
      registration_number: car.registration_number || "",
      is_default: !!car.is_default,
      image: car.car?.image || ""
    };
    this.brandSearch = "";
    this.modelSearch = "";
    this.imageFile = null;
    this.imagePreview.set("");
    this.manualMode.set(false);
    if (car.brand_id)
      this.loadModelsForBrand(car.brand_id);
    if (car.car_id) {
      this.http.get(`${environment.apiUrl}/cars/${car.car_id}/variants`).subscribe({
        next: (res) => this.variants.set(res.data || [])
      });
    }
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
    this.editingId = null;
  }
  saveCar() {
    if (!this.isFormValid())
      return;
    this.saving.set(true);
    if (this.imageFile) {
      const formData = new FormData();
      formData.append("file", this.imageFile);
      this.http.post(`${environment.apiUrl}/upload/single`, formData).subscribe({
        next: (res) => {
          this.form.image = res.data?.url || "";
          this.submitCarData();
        },
        error: (err) => {
          this.toast.error("Image upload failed: " + (err.error?.error || "Unknown error"));
          this.saving.set(false);
        }
      });
    } else {
      this.submitCarData();
    }
  }
  submitCarData() {
    const body = {
      registration_number: this.form.registration_number,
      is_default: this.form.is_default
    };
    if (this.manualMode()) {
      body.brand_name = this.form.brand_name?.trim();
      body.car_name = this.form.car_name?.trim();
    } else {
      body.brand_id = this.form.brand_id;
      body.car_id = this.form.car_id;
    }
    if (this.form.image) {
      body.image = this.form.image;
    }
    if (this.form.variant_id) {
      body.variant_id = this.form.variant_id;
    } else if (this.form.variant_name?.trim()) {
      body.variant_name = this.form.variant_name.trim();
    }
    const req = this.editingId ? this.http.put(`${environment.apiUrl}/user/cars/${this.editingId}`, body) : this.http.post(`${environment.apiUrl}/user/cars`, body);
    req.subscribe({
      next: (res) => {
        this.toast.success(res.message || (this.editingId ? "Car updated" : "Car added"));
        this.closeModal();
        this.loadCars();
      },
      error: (err) => this.toast.error(err.error?.error || "Failed to save car"),
      complete: () => this.saving.set(false)
    });
  }
  setDefault(id) {
    this.http.put(`${environment.apiUrl}/user/cars/${id}/default`, {}).subscribe({
      next: () => {
        this.toast.success("Default car updated");
        this.cars.update((items) => items.map((c) => __spreadProps(__spreadValues({}, c), { is_default: c.id === id ? 1 : 0 })));
      },
      error: () => this.toast.error("Failed to update default")
    });
  }
  confirmDelete(car) {
    this.deletingCar.set(car);
    this.deleteModalOpen.set(true);
  }
  doDelete() {
    const car = this.deletingCar();
    if (!car)
      return;
    this.http.delete(`${environment.apiUrl}/user/cars/${car.id}`).subscribe({
      next: () => {
        this.toast.success("Car deleted");
        this.cars.update((items) => items.filter((c) => c.id !== car.id));
        this.deleteModalOpen.set(false);
      },
      error: () => this.toast.error("Failed to delete car")
    });
  }
  static \u0275fac = function MyCarsComponent_Factory(t) {
    return new (t || _MyCarsComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyCarsComponent, selectors: [["app-my-cars"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 6, consts: [["carFileInput", ""], [1, "my-cars-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-primary", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["class", "loading-center", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "cars-grid", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["title", "Delete Car", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], [1, "loading-center"], [1, "spinner"], [1, "empty-state"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#cbd5e1", "stroke-width", "1.2"], ["d", "M7 17m-2 0a2 2 0 104 0 2 2 0 10-4 0"], ["d", "M17 17m-2 0a2 2 0 104 0 2 2 0 10-4 0"], ["d", "M5 17H3v-6l2-5h9l4 5h1a2 2 0 012 2v4h-2"], ["d", "M9 17h6"], [1, "cars-grid"], ["class", "car-card", 3, "is-default", 4, "ngFor", "ngForOf"], [1, "car-card"], [1, "car-card-top"], [1, "car-img-wrap"], ["class", "car-img", 3, "src", "alt", "error", 4, "ngIf"], ["class", "car-placeholder", "width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#cbd5e1", "stroke-width", "1.5", 4, "ngIf"], ["class", "default-badge", 4, "ngIf"], [1, "car-card-body"], [1, "car-name"], ["class", "car-variant", 4, "ngIf"], [1, "car-reg"], [1, "car-card-actions"], ["title", "Edit", 1, "act-btn", 3, "click"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"], ["class", "act-btn", "title", "Set Default", 3, "click", 4, "ngIf"], ["title", "Delete", 1, "act-btn", "danger", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], [1, "car-img", 3, "error", "src", "alt"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#cbd5e1", "stroke-width", "1.5", 1, "car-placeholder"], [1, "default-badge"], [1, "car-variant"], ["title", "Set Default", 1, "act-btn", 3, "click"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-head"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "mode-toggle"], [1, "mode-btn", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], [1, "car-image-section"], ["class", "car-image-preview", 4, "ngIf"], ["class", "car-image-placeholder", 4, "ngIf"], [1, "file-upload-area"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["type", "button", 1, "file-upload-btn", 3, "click"], ["d", "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"], ["points", "17 8 12 3 7 8"], ["x1", "12", "y1", "3", "x2", "12", "y2", "15"], ["class", "file-name", 4, "ngIf"], [4, "ngIf"], [1, "form-group"], ["type", "text", "placeholder", "e.g. VXI, ZXI+, LXI", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "placeholder", "e.g. MH12AB1234", 1, "form-control", "reg-input", 3, "ngModelChange", "input", "ngModel"], [1, "toggle-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "modal-foot"], [1, "btn-cancel", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], [1, "car-image-preview"], ["alt", "Car preview", 3, "error", "src"], [1, "car-image-placeholder"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#cbd5e1", "stroke-width", "1.5"], [1, "file-name"], [1, "label-row"], ["class", "fetch-link", 3, "disabled", "click", 4, "ngIf"], [1, "search-select"], ["type", "text", "placeholder", "Search brand...", 1, "form-control", 3, "ngModelChange", "input", "focus", "ngModel"], ["class", "dropdown-list", 4, "ngIf"], ["class", "selected-tag", 4, "ngIf"], ["type", "text", 1, "form-control", 3, "ngModelChange", "input", "focus", "ngModel", "disabled", "placeholder"], ["class", "fetch-hint", 4, "ngIf"], [1, "fetch-link", 3, "click", "disabled"], [1, "dropdown-list"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "click"], [1, "selected-tag"], [3, "click"], [1, "fetch-hint"], ["type", "text", "placeholder", "e.g. Toyota, Honda, BMW", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Camry, Civic, 3 Series", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "or-divider"], [3, "value"]], template: function MyCarsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1", 3);
      \u0275\u0275text(4, "My Cars");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Manage your registered vehicles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function MyCarsComponent_Template_button_click_7_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 6);
      \u0275\u0275element(9, "line", 7)(10, "line", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Add New Car ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, MyCarsComponent_div_12_Template, 2, 0, "div", 9)(13, MyCarsComponent_div_13_Template, 12, 0, "div", 10)(14, MyCarsComponent_div_14_Template, 2, 1, "div", 11)(15, MyCarsComponent_div_15_Template, 51, 18, "div", 12);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "app-confirm-modal", 13);
      \u0275\u0275listener("confirmed", function MyCarsComponent_Template_app_confirm_modal_confirmed_16_listener() {
        return ctx.doDelete();
      })("cancelled", function MyCarsComponent_Template_app_confirm_modal_cancelled_16_listener() {
        return ctx.deleteModalOpen.set(false);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.cars().length === 0 && !ctx.showModal());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.cars().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal());
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.deleteModalOpen())("message", "Remove " + (((tmp_5_0 = ctx.deletingCar()) == null ? null : tmp_5_0.brand == null ? null : tmp_5_0.brand.name) || "") + " " + (((tmp_5_0 = ctx.deletingCar()) == null ? null : tmp_5_0.car == null ? null : tmp_5_0.car.name) || "") + "?");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: [`

.my-cars-page[_ngcontent-%COMP%] {
  max-width: 1100px;
}
.page-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 16px;
}
.page-title[_ngcontent-%COMP%] {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 4px;
}
.page-subtitle[_ngcontent-%COMP%] {
  color: #64748b;
  margin: 0;
  font-size: 14px;
}
.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #e31b23;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  background: #b11218;
}
.btn-primary[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.loading-center[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  padding: 60px;
}
.spinner[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border: 3px solid #f3f4f6;
  border-top-color: #e31b23;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
.empty-state[_ngcontent-%COMP%] {
  text-align: center;
  padding: 60px 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}
.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 20px;
  color: #1a1a2e;
  margin: 16px 0 8px;
}
.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b;
  margin: 0 0 24px;
}
.cars-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
.car-card[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 14px;
  border: 2px solid #e5e7eb;
  overflow: hidden;
  transition: all 0.2s;
}
.car-card[_ngcontent-%COMP%]:hover {
  border-color: #e31b23;
  box-shadow: 0 4px 16px rgba(227, 27, 35, 0.1);
}
.car-card.is-default[_ngcontent-%COMP%] {
  border-color: #e31b23;
  box-shadow: 0 4px 16px rgba(227, 27, 35, 0.12);
}
.car-card-top[_ngcontent-%COMP%] {
  position: relative;
  background: #f8f9fa;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
}
.car-img[_ngcontent-%COMP%] {
  max-width: 140px;
  max-height: 80px;
  object-fit: contain;
}
.car-placeholder[_ngcontent-%COMP%] {
  opacity: 0.5;
}
.default-badge[_ngcontent-%COMP%] {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #e31b23;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
}
.car-card-body[_ngcontent-%COMP%] {
  padding: 16px 20px;
}
.car-name[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 4px;
}
.car-variant[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #64748b;
  margin: 0 0 8px;
}
.car-reg[_ngcontent-%COMP%] {
  display: inline-block;
  background: #fff5f5;
  color: #e31b23;
  font-weight: 700;
  font-size: 14px;
  padding: 4px 12px;
  border-radius: 6px;
  letter-spacing: 1px;
  border: 1px solid #fecaca;
}
.car-card-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 6px;
  padding: 12px 16px;
  border-top: 1px solid #f1f5f9;
  background: #fafafa;
}
.act-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s;
}
.act-btn[_ngcontent-%COMP%]:hover {
  border-color: #e31b23;
  color: #e31b23;
}
.act-btn.danger[_ngcontent-%COMP%]:hover {
  border-color: #dc2626;
  color: #dc2626;
}
.modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.modal-box[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 16px;
  width: 100%;
  max-width: 520px;
  max-height: 90vh;
  overflow-y: auto;
}
.modal-head[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
}
.modal-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
}
.close-btn[_ngcontent-%COMP%] {
  background: #f1f5f9;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 22px;
  cursor: pointer;
  color: #64748b;
  line-height: 1;
}
.modal-body[_ngcontent-%COMP%] {
  padding: 24px;
}
.modal-foot[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid #e5e7eb;
}
.btn-cancel[_ngcontent-%COMP%] {
  padding: 10px 20px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #fff;
  color: #374151;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
}
.form-group[_ngcontent-%COMP%] {
  margin-bottom: 20px;
}
.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #334155;
  font-size: 14px;
}
.label-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}
.label-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  margin-bottom: 0;
}
.fetch-link[_ngcontent-%COMP%] {
  background: none;
  border: none;
  color: #e31b23;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}
.fetch-link[_ngcontent-%COMP%]:hover:not(:disabled) {
  text-decoration: underline;
}
.fetch-link[_ngcontent-%COMP%]:disabled {
  color: #94a3b8;
  cursor: not-allowed;
}
.fetch-hint[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #94a3b8;
  margin-top: 4px;
}
.form-control[_ngcontent-%COMP%] {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
}
.form-control[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #e31b23;
  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);
}
.form-control[_ngcontent-%COMP%]:disabled {
  background: #f8f9fa;
  color: #94a3b8;
}
select.form-control[_ngcontent-%COMP%] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 20px;
  padding-right: 40px;
  cursor: pointer;
  background-color: #fff;
}
.reg-input[_ngcontent-%COMP%] {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}
.toggle-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 500;
}
.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  accent-color: #e31b23;
  width: 16px;
  height: 16px;
}
.or-divider[_ngcontent-%COMP%] {
  text-align: center;
  color: #94a3b8;
  font-size: 12px;
  margin: 8px 0;
}
.search-select[_ngcontent-%COMP%] {
  position: relative;
}
.dropdown-list[_ngcontent-%COMP%] {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  margin-top: 4px;
}
.dropdown-item[_ngcontent-%COMP%] {
  padding: 10px 14px;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 1px solid #f8f9fa;
}
.dropdown-item[_ngcontent-%COMP%]:hover {
  background: #fff5f5;
  color: #e31b23;
}
.dropdown-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.selected-tag[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  padding: 4px 12px;
  background: #fee2e2;
  color: #e31b23;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}
.selected-tag[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #e31b23;
  line-height: 1;
  padding: 0 2px;
}
.car-image-section[_ngcontent-%COMP%] {
  margin-bottom: 20px;
  text-align: center;
}
.car-image-preview[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}
.car-image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  max-width: 200px;
  max-height: 120px;
  border-radius: 12px;
  object-fit: contain;
  background: #f8f9fa;
  padding: 8px;
  border: 1px solid #e5e7eb;
}
.car-image-placeholder[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px dashed #e5e7eb;
}
.car-image-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #94a3b8;
}
.mode-toggle[_ngcontent-%COMP%] {
  display: flex;
  gap: 0;
  margin-bottom: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
}
.mode-btn[_ngcontent-%COMP%] {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 16px;
  border: none;
  background: #fff;
  color: #64748b;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.mode-btn[_ngcontent-%COMP%]:first-child {
  border-right: 1px solid #e5e7eb;
}
.mode-btn.active[_ngcontent-%COMP%] {
  background: #e31b23;
  color: #fff;
}
.mode-btn[_ngcontent-%COMP%]:hover:not(.active) {
  background: #fff5f5;
  color: #e31b23;
}
.file-upload-area[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
}
.file-upload-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #f8f9fa;
  border: 1px dashed #d1d5db;
  border-radius: 8px;
  color: #475569;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.file-upload-btn[_ngcontent-%COMP%]:hover {
  border-color: #e31b23;
  color: #e31b23;
  background: #fff5f5;
}
.file-name[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #64748b;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyCarsComponent, { className: "MyCarsComponent", filePath: "src\\app\\features\\client\\my-cars\\my-cars.component.ts", lineNumber: 319 });
})();
export {
  MyCarsComponent
};
