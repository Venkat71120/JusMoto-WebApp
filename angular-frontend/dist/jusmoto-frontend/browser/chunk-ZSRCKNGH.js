import {
  MediaPickerComponent
} from "./chunk-5NNV4SLO.js";
import {
  ToastService
} from "./chunk-W5W6PSRW.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-TBAOAUH3.js";
import {
  environment
} from "./chunk-OW254BTU.js";
import {
  ActivatedRoute,
  Router,
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
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
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

// src/app/features/admin/services/service-form.component.ts
var _c0 = () => ({ standalone: true });
function ServiceFormComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_div_9__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "polyline", 20);
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_div_9_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_div_9__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "polyline", 20);
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_div_9_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "2");
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13);
    \u0275\u0275listener("click", function ServiceFormComponent_div_9_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToStep(1));
    });
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275template(4, ServiceFormComponent_div_9__svg_svg_4_Template, 2, 0, "svg", 15)(5, ServiceFormComponent_div_9_span_5_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 17);
    \u0275\u0275text(7, "Service Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "div", 18);
    \u0275\u0275elementStart(9, "div", 13);
    \u0275\u0275listener("click", function ServiceFormComponent_div_9_Template_div_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToStep(2));
    });
    \u0275\u0275elementStart(10, "div", 14);
    \u0275\u0275template(11, ServiceFormComponent_div_9__svg_svg_11_Template, 2, 0, "svg", 15)(12, ServiceFormComponent_div_9_span_12_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 17);
    \u0275\u0275text(14, "Attributes");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "div", 18);
    \u0275\u0275elementStart(16, "div", 13);
    \u0275\u0275listener("click", function ServiceFormComponent_div_9_Template_div_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToStep(3));
    });
    \u0275\u0275elementStart(17, "div", 14)(18, "span");
    \u0275\u0275text(19, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "span", 17);
    \u0275\u0275text(21, "Select Cars");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.currentStep() === 1)("completed", ctx_r1.currentStep() > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentStep() > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep() <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("completed", ctx_r1.currentStep() > 1);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.currentStep() === 2)("completed", ctx_r1.currentStep() > 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentStep() > 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep() <= 2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("completed", ctx_r1.currentStep() > 2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.currentStep() === 3)("completed", false);
  }
}
function ServiceFormComponent_form_10_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, "Title is required");
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_1_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    \u0275\u0275property("value", cat_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r5.name);
  }
}
function ServiceFormComponent_form_10_div_1_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sub_r6 = ctx.$implicit;
    \u0275\u0275property("value", sub_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sub_r6.name);
  }
}
function ServiceFormComponent_form_10_div_1_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_1_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, "Price is required");
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_1_app_media_picker_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-media-picker", 59);
    \u0275\u0275listener("valueChange", function ServiceFormComponent_form_10_div_1_app_media_picker_73_Template_app_media_picker_valueChange_0_listener($event) {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onGalleryImageChange(i_r8, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r9 = ctx.$implicit;
    \u0275\u0275property("value", g_r9);
  }
}
function ServiceFormComponent_form_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "h2", 26);
    \u0275\u0275text(2, "Service Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "div", 28)(5, "label");
    \u0275\u0275text(6, "Title ");
    \u0275\u0275elementStart(7, "span", 29);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "input", 30);
    \u0275\u0275listener("input", function ServiceFormComponent_form_10_div_1_Template_input_input_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.generateSlug());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ServiceFormComponent_form_10_div_1_div_10_Template, 2, 0, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 28)(12, "label");
    \u0275\u0275text(13, "Slug");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 28)(16, "label");
    \u0275\u0275text(17, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 33);
    \u0275\u0275listener("change", function ServiceFormComponent_form_10_div_1_Template_select_change_18_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCategoryChange());
    });
    \u0275\u0275elementStart(19, "option", 34);
    \u0275\u0275text(20, "Select Category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ServiceFormComponent_form_10_div_1_option_21_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 28)(23, "label");
    \u0275\u0275text(24, "Sub Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 36)(26, "option", 34);
    \u0275\u0275text(27, "Select Sub Category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, ServiceFormComponent_form_10_div_1_option_28_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, ServiceFormComponent_form_10_div_1_span_29_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 28)(31, "label");
    \u0275\u0275text(32, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 38)(34, "option", 39);
    \u0275\u0275text(35, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 39);
    \u0275\u0275text(37, "Product");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 28)(39, "label");
    \u0275\u0275text(40, "Price ");
    \u0275\u0275elementStart(41, "span", 29);
    \u0275\u0275text(42, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(43, "input", 40);
    \u0275\u0275template(44, ServiceFormComponent_form_10_div_1_div_44_Template, 2, 0, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 28)(46, "label");
    \u0275\u0275text(47, "Discount Price");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 28)(50, "label");
    \u0275\u0275text(51, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 28)(54, "label");
    \u0275\u0275text(55, "Max Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 28)(58, "label");
    \u0275\u0275text(59, "Video URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 45)(62, "label");
    \u0275\u0275text(63, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "textarea", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 28)(66, "label");
    \u0275\u0275text(67, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "app-media-picker", 47);
    \u0275\u0275listener("valueChange", function ServiceFormComponent_form_10_div_1_Template_app_media_picker_valueChange_68_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImageSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 28)(70, "label");
    \u0275\u0275text(71, "Gallery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 48);
    \u0275\u0275template(73, ServiceFormComponent_form_10_div_1_app_media_picker_73_Template, 1, 1, "app-media-picker", 49);
    \u0275\u0275elementStart(74, "button", 50);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_1_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addGallerySlot());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(75, "svg", 51);
    \u0275\u0275element(76, "line", 52)(77, "line", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(78, "span");
    \u0275\u0275text(79, "Add Image");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(80, "div", 28)(81, "label", 54);
    \u0275\u0275element(82, "input", 55);
    \u0275\u0275text(83, " Featured Service ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 28)(85, "label", 54);
    \u0275\u0275element(86, "input", 56);
    \u0275\u0275text(87, " Active ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.form.get("title")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r1.form.get("title")) == null ? null : tmp_2_0.hasError("required")));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r1.categories());
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.subCategories());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingSubCategories());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r1.form.get("price")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx_r1.form.get("price")) == null ? null : tmp_8_0.hasError("required")));
    \u0275\u0275advance(24);
    \u0275\u0275property("value", ctx_r1.imageValue());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.galleryValues())("ngForTrackBy", ctx_r1.trackByIndex);
  }
}
function ServiceFormComponent_form_10_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, 'No includes added yet. Click "Add" to create one.');
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "div", 28)(3, "label");
    \u0275\u0275text(4, "Icon");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28)(7, "label");
    \u0275\u0275text(8, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 71);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_2_div_13_Template_button_click_10_listener() {
      const i_r12 = \u0275\u0275restoreView(_r11).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.includes.removeAt(i_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 63);
    \u0275\u0275element(12, "line", 72)(13, "line", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctrl_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r1.asFormGroup(ctrl_r13));
  }
}
function ServiceFormComponent_form_10_div_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, 'No FAQs added yet. Click "Add" to create one.');
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "div", 28)(3, "label");
    \u0275\u0275text(4, "Question");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28)(7, "label");
    \u0275\u0275text(8, "Answer");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "textarea", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 71);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_2_div_24_Template_button_click_10_listener() {
      const i_r15 = \u0275\u0275restoreView(_r14).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.faqs.removeAt(i_r15));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 63);
    \u0275\u0275element(12, "line", 72)(13, "line", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctrl_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r1.asFormGroup(ctrl_r16));
  }
}
function ServiceFormComponent_form_10_div_2_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, 'No additional info added yet. Click "Add" to create one.');
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_2_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "div", 28)(3, "label");
    \u0275\u0275text(4, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28)(7, "label");
    \u0275\u0275text(8, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "textarea", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 71);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_2_div_35_Template_button_click_10_listener() {
      const i_r18 = \u0275\u0275restoreView(_r17).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.additionalInfo.removeAt(i_r18));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 63);
    \u0275\u0275element(12, "line", 72)(13, "line", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctrl_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r1.asFormGroup(ctrl_r19));
  }
}
function ServiceFormComponent_form_10_div_2_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, 'No specifications added yet. Click "Add" to create one.');
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_2_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "div", 28)(3, "label");
    \u0275\u0275text(4, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28)(7, "label");
    \u0275\u0275text(8, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 71);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_2_div_46_Template_button_click_10_listener() {
      const i_r21 = \u0275\u0275restoreView(_r20).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.specifications.removeAt(i_r21));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 63);
    \u0275\u0275element(12, "line", 72)(13, "line", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctrl_r22 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r1.asFormGroup(ctrl_r22));
  }
}
function ServiceFormComponent_form_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "h2", 26);
    \u0275\u0275text(2, "Service Attributes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 60)(4, "div", 61)(5, "h3");
    \u0275\u0275text(6, "Service Includes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 62);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addInclude());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 63);
    \u0275\u0275element(9, "line", 52)(10, "line", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ServiceFormComponent_form_10_div_2_div_12_Template, 2, 0, "div", 64)(13, ServiceFormComponent_form_10_div_2_div_13_Template, 14, 1, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 60)(15, "div", 61)(16, "h3");
    \u0275\u0275text(17, "FAQs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 62);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_2_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addFaq());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 63);
    \u0275\u0275element(20, "line", 52)(21, "line", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, ServiceFormComponent_form_10_div_2_div_23_Template, 2, 0, "div", 64)(24, ServiceFormComponent_form_10_div_2_div_24_Template, 14, 1, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "div", 60)(26, "div", 61)(27, "h3");
    \u0275\u0275text(28, "Additional Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 62);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_2_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addAdditionalInfo());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 63);
    \u0275\u0275element(31, "line", 52)(32, "line", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, ServiceFormComponent_form_10_div_2_div_34_Template, 2, 0, "div", 64)(35, ServiceFormComponent_form_10_div_2_div_35_Template, 14, 1, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "div", 60)(37, "div", 61)(38, "h3");
    \u0275\u0275text(39, "Specifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 62);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_2_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addSpecification());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 63);
    \u0275\u0275element(42, "line", 52)(43, "line", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(45, ServiceFormComponent_form_10_div_2_div_45_Template, 2, 0, "div", 64)(46, ServiceFormComponent_form_10_div_2_div_46_Template, 14, 1, "div", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.includes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.includes.controls);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.faqs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.faqs.controls);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.additionalInfo.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.additionalInfo.controls);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.specifications.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.specifications.controls);
  }
}
function ServiceFormComponent_form_10_div_3_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const brand_r24 = ctx.$implicit;
    \u0275\u0275property("value", brand_r24.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(brand_r24.name);
  }
}
function ServiceFormComponent_form_10_div_3_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const car_r25 = ctx.$implicit;
    \u0275\u0275property("value", car_r25.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(car_r25.name);
  }
}
function ServiceFormComponent_form_10_div_3_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_3_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r26 = ctx.$implicit;
    \u0275\u0275property("value", v_r26.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r26.name);
  }
}
function ServiceFormComponent_form_10_div_3_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_3_div_38_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "input", 92);
    \u0275\u0275listener("input", function ServiceFormComponent_form_10_div_3_div_38_tr_17_Template_input_input_10_listener($event) {
      const i_r28 = \u0275\u0275restoreView(_r27).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateCarPrice(i_r28, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "button", 93);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_3_div_38_tr_17_Template_button_click_12_listener() {
      const i_r28 = \u0275\u0275restoreView(_r27).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeCarRow(i_r28));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 63);
    \u0275\u0275element(14, "polyline", 94)(15, "path", 95)(16, "path", 96)(17, "path", 97);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r29 = ctx.$implicit;
    const i_r28 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r28 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r29.brand_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r29.car_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r29.variant_name || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r29.price);
  }
}
function ServiceFormComponent_form_10_div_3_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "table", 90)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Variant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, ServiceFormComponent_form_10_div_3_div_38_tr_17_Template, 18, 5, "tr", 91);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.selectedCars());
  }
}
function ServiceFormComponent_form_10_div_3_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, " No cars selected. Use the dropdowns above to add cars to this service. ");
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "h2", 26);
    \u0275\u0275text(2, "Select Cars");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 80)(4, "div", 81)(5, "div", 28)(6, "label");
    \u0275\u0275text(7, "Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 82);
    \u0275\u0275twoWayListener("ngModelChange", function ServiceFormComponent_form_10_div_3_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedBrandId, $event) || (ctx_r1.selectedBrandId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ServiceFormComponent_form_10_div_3_Template_select_change_8_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBrandChange());
    });
    \u0275\u0275elementStart(9, "option", 34);
    \u0275\u0275text(10, "Select Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ServiceFormComponent_form_10_div_3_option_11_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 28)(13, "label");
    \u0275\u0275text(14, "Car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function ServiceFormComponent_form_10_div_3_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedCarId, $event) || (ctx_r1.selectedCarId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ServiceFormComponent_form_10_div_3_Template_select_change_15_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCarChange());
    });
    \u0275\u0275elementStart(16, "option", 34);
    \u0275\u0275text(17, "Select Car");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ServiceFormComponent_form_10_div_3_option_18_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, ServiceFormComponent_form_10_div_3_span_19_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 28)(21, "label");
    \u0275\u0275text(22, "Variant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 84);
    \u0275\u0275twoWayListener("ngModelChange", function ServiceFormComponent_form_10_div_3_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedVariantId, $event) || (ctx_r1.selectedVariantId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "option", 34);
    \u0275\u0275text(25, "Select Variant");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, ServiceFormComponent_form_10_div_3_option_26_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, ServiceFormComponent_form_10_div_3_span_27_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 28)(29, "label");
    \u0275\u0275text(30, "Custom Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function ServiceFormComponent_form_10_div_3_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.carCustomPrice, $event) || (ctx_r1.carCustomPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 86)(33, "button", 87);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_3_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addCarRow());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 63);
    \u0275\u0275element(35, "line", 52)(36, "line", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " Add Car ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(38, ServiceFormComponent_form_10_div_3_div_38_Template, 18, 1, "div", 88)(39, ServiceFormComponent_form_10_div_3_div_39_Template, 2, 0, "div", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedBrandId);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(18, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.brands());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedCarId);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(19, _c0))("disabled", !ctx_r1.selectedBrandId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.filteredCars());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingCars());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedVariantId);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(20, _c0))("disabled", !ctx_r1.selectedCarId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.filteredVariants());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingVariants());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.carCustomPrice);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(21, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.selectedCarId);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.selectedCars().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCars().length === 0);
  }
}
function ServiceFormComponent_form_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function ServiceFormComponent_form_10_div_5_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 106);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_5_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 63);
    \u0275\u0275element(2, "path", 3)(3, "polyline", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Back ");
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_5_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 107);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_5_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(1, " Next ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 63);
    \u0275\u0275element(3, "path", 108)(4, "polyline", 109);
    \u0275\u0275elementEnd()();
  }
}
function ServiceFormComponent_form_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "div", 100)(2, "a", 101);
    \u0275\u0275text(3, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 102);
    \u0275\u0275template(5, ServiceFormComponent_form_10_div_5_button_5_Template, 5, 0, "button", 103)(6, ServiceFormComponent_form_10_div_5_button_6_Template, 5, 0, "button", 104);
    \u0275\u0275elementStart(7, "button", 105);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.currentStep() > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep() < 3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Saving..." : ctx_r1.isEdit ? "Update Service" : "Create Service", " ");
  }
}
function ServiceFormComponent_form_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 21);
    \u0275\u0275listener("ngSubmit", function ServiceFormComponent_form_10_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275template(1, ServiceFormComponent_form_10_div_1_Template, 88, 10, "div", 22)(2, ServiceFormComponent_form_10_div_2_Template, 47, 8, "div", 22)(3, ServiceFormComponent_form_10_div_3_Template, 40, 22, "div", 22)(4, ServiceFormComponent_form_10_div_4_Template, 2, 1, "div", 23)(5, ServiceFormComponent_form_10_div_5_Template, 9, 4, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep() === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep() === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep() === 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingData());
  }
}
var ServiceFormComponent = class _ServiceFormComponent {
  fb;
  http;
  route;
  router;
  toast;
  form;
  isEdit = false;
  serviceId = null;
  // Signals - UI state
  currentStep = signal(1);
  loadingData = signal(false);
  saving = signal(false);
  error = signal("");
  // Signals - Dropdowns
  categories = signal([]);
  subCategories = signal([]);
  loadingSubCategories = signal(false);
  // Signals - Media
  imageValue = signal(null);
  galleryValues = signal([]);
  // Signals - Cars (Step 3)
  brands = signal([]);
  filteredCars = signal([]);
  filteredVariants = signal([]);
  loadingCars = signal(false);
  loadingVariants = signal(false);
  selectedCars = signal([]);
  // Car selector bound values
  selectedBrandId = "";
  selectedCarId = "";
  selectedVariantId = "";
  carCustomPrice = null;
  constructor(fb, http, route, router, toast) {
    this.fb = fb;
    this.http = http;
    this.route = route;
    this.router = router;
    this.toast = toast;
  }
  // ---- FormArray accessors ----
  get includes() {
    return this.form.get("includes");
  }
  get faqs() {
    return this.form.get("faqs");
  }
  get additionalInfo() {
    return this.form.get("additional_info");
  }
  get specifications() {
    return this.form.get("specifications");
  }
  asFormGroup(ctrl) {
    return ctrl;
  }
  trackByIndex(index) {
    return index;
  }
  ngOnInit() {
    this.serviceId = this.route.snapshot.paramMap.get("id");
    this.isEdit = !!this.serviceId;
    this.form = this.fb.group({
      title: ["", Validators.required],
      slug: [""],
      category_id: [""],
      sub_category_id: [""],
      description: [""],
      video_url: [""],
      is_featured: [false],
      price: [0, Validators.required],
      discount_price: [null],
      duration: [""],
      max_qty: [null],
      image: [null],
      type: [0],
      status: [true],
      // FormArrays for Step 2
      includes: this.fb.array([]),
      faqs: this.fb.array([]),
      additional_info: this.fb.array([]),
      specifications: this.fb.array([])
    });
    this.loadCategories();
    this.loadBrands();
    if (this.isEdit) {
      this.loadService();
    }
  }
  // ---- Slug generation ----
  generateSlug() {
    const title = this.form.get("title")?.value || "";
    const slug = title.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
    this.form.patchValue({ slug });
  }
  // ---- Step Navigation ----
  goToStep(step) {
    if (step < 1 || step > 3)
      return;
    if (this.currentStep() === 1 && step > 1) {
      this.form.get("title")?.markAsTouched();
      this.form.get("price")?.markAsTouched();
      if (this.form.get("title")?.invalid || this.form.get("price")?.invalid) {
        this.toast.error("Please fill in the required fields in Service Details.");
        return;
      }
    }
    this.currentStep.set(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  nextStep() {
    this.goToStep(this.currentStep() + 1);
  }
  prevStep() {
    this.goToStep(this.currentStep() - 1);
  }
  // ---- Data loading ----
  loadCategories() {
    this.http.get(`${environment.apiUrl}/admin/categories`, { params: { limit: "100" } }).subscribe({
      next: (res) => this.categories.set(res.data || [])
    });
  }
  onCategoryChange() {
    const catId = this.form.get("category_id")?.value;
    this.form.patchValue({ sub_category_id: "" });
    this.subCategories.set([]);
    if (catId) {
      this.loadSubCategories(catId);
    }
  }
  loadSubCategories(categoryId) {
    this.loadingSubCategories.set(true);
    this.http.get(`${environment.apiUrl}/admin/sub-categories`, { params: { category_id: String(categoryId), limit: "100" } }).subscribe({
      next: (res) => this.subCategories.set(res.data || []),
      error: () => this.subCategories.set([]),
      complete: () => this.loadingSubCategories.set(false)
    });
  }
  loadBrands() {
    this.http.get(`${environment.apiUrl}/admin/brands`, { params: { limit: "100" } }).subscribe({
      next: (res) => this.brands.set(res.data || [])
    });
  }
  onBrandChange() {
    this.selectedCarId = "";
    this.selectedVariantId = "";
    this.filteredCars.set([]);
    this.filteredVariants.set([]);
    if (this.selectedBrandId) {
      this.loadingCars.set(true);
      this.http.get(`${environment.apiUrl}/admin/cars`, { params: { brand_id: this.selectedBrandId, limit: "100" } }).subscribe({
        next: (res) => this.filteredCars.set(res.data || []),
        error: () => this.filteredCars.set([]),
        complete: () => this.loadingCars.set(false)
      });
    }
  }
  onCarChange() {
    this.selectedVariantId = "";
    this.filteredVariants.set([]);
    if (this.selectedCarId) {
      this.loadingVariants.set(true);
      this.http.get(`${environment.apiUrl}/admin/variants`, { params: { car_id: this.selectedCarId, limit: "100" } }).subscribe({
        next: (res) => this.filteredVariants.set(res.data || []),
        error: () => this.filteredVariants.set([]),
        complete: () => this.loadingVariants.set(false)
      });
    }
  }
  // ---- Load existing service (edit mode) ----
  loadService() {
    this.loadingData.set(true);
    this.http.get(`${environment.apiUrl}/admin/services/${this.serviceId}`).subscribe({
      next: (res) => {
        const s = res.data;
        this.form.patchValue({
          title: s.title || "",
          slug: s.slug || "",
          category_id: s.category_id || "",
          sub_category_id: s.sub_category_id || "",
          description: s.description || "",
          video_url: s.video_url || "",
          is_featured: !!s.is_featured,
          price: s.price || 0,
          discount_price: s.discount_price,
          duration: s.duration || "",
          max_qty: s.max_qty,
          image: s.image || null,
          type: s.type ?? 0,
          status: s.status !== void 0 ? !!s.status : true
        });
        this.imageValue.set(s.image || null);
        if (s.gallery && Array.isArray(s.gallery)) {
          this.galleryValues.set(s.gallery);
        }
        if (s.category_id) {
          this.loadSubCategories(s.category_id);
        }
        if (s.includes && Array.isArray(s.includes)) {
          s.includes.forEach((item) => {
            this.includes.push(this.fb.group({
              icon: [item.icon || ""],
              title: [item.title || ""]
            }));
          });
        }
        if (s.faqs && Array.isArray(s.faqs)) {
          s.faqs.forEach((item) => {
            this.faqs.push(this.fb.group({
              question: [item.question || ""],
              answer: [item.answer || ""]
            }));
          });
        }
        if (s.additional_info && Array.isArray(s.additional_info)) {
          s.additional_info.forEach((item) => {
            this.additionalInfo.push(this.fb.group({
              title: [item.title || ""],
              description: [item.description || ""]
            }));
          });
        }
        if (s.specifications && Array.isArray(s.specifications)) {
          s.specifications.forEach((item) => {
            this.specifications.push(this.fb.group({
              title: [item.title || ""],
              value: [item.value || ""]
            }));
          });
        }
        if (s.cars && Array.isArray(s.cars)) {
          this.selectedCars.set(s.cars.map((c) => ({
            car_id: c.car_id || c.id,
            variant_id: c.variant_id || null,
            price: c.price ?? c.pivot?.price ?? 0,
            brand_name: c.brand?.name || c.brand_name || "-",
            car_name: c.name || c.car_name || "-",
            variant_name: c.variant?.name || c.variant_name || "-"
          })));
        }
        this.loadingData.set(false);
      },
      error: () => {
        this.toast.error("Failed to load service data.");
        this.router.navigate(["/admin/services/all"]);
      }
    });
  }
  // ---- Media handlers ----
  onImageSelected(mediaId) {
    this.imageValue.set(mediaId);
    this.form.patchValue({ image: mediaId });
  }
  addGallerySlot() {
    this.galleryValues.update((arr) => [...arr, null]);
  }
  onGalleryImageChange(index, mediaId) {
    this.galleryValues.update((arr) => {
      const copy = [...arr];
      if (mediaId === null) {
        copy.splice(index, 1);
      } else {
        copy[index] = mediaId;
      }
      return copy;
    });
  }
  // ---- Repeater add methods ----
  addInclude() {
    this.includes.push(this.fb.group({ icon: [""], title: [""] }));
  }
  addFaq() {
    this.faqs.push(this.fb.group({ question: [""], answer: [""] }));
  }
  addAdditionalInfo() {
    this.additionalInfo.push(this.fb.group({ title: [""], description: [""] }));
  }
  addSpecification() {
    this.specifications.push(this.fb.group({ title: [""], value: [""] }));
  }
  // ---- Car selection ----
  addCarRow() {
    if (!this.selectedCarId)
      return;
    const brand = this.brands().find((b) => String(b.id) === String(this.selectedBrandId));
    const car = this.filteredCars().find((c) => String(c.id) === String(this.selectedCarId));
    const variant = this.filteredVariants().find((v) => String(v.id) === String(this.selectedVariantId));
    const exists = this.selectedCars().some((r) => String(r.car_id) === String(this.selectedCarId) && String(r.variant_id || "") === String(this.selectedVariantId || ""));
    if (exists) {
      this.toast.warning("This car/variant combination is already added.");
      return;
    }
    const row = {
      car_id: Number(this.selectedCarId),
      variant_id: this.selectedVariantId ? Number(this.selectedVariantId) : null,
      price: this.carCustomPrice ?? this.form.get("price")?.value ?? 0,
      brand_name: brand?.name || "-",
      car_name: car?.name || "-",
      variant_name: variant?.name || "-"
    };
    this.selectedCars.update((arr) => [...arr, row]);
    this.selectedVariantId = "";
    this.carCustomPrice = null;
  }
  removeCarRow(index) {
    this.selectedCars.update((arr) => arr.filter((_, i) => i !== index));
  }
  updateCarPrice(index, event) {
    const input = event.target;
    const newPrice = Number(input.value);
    this.selectedCars.update((arr) => {
      const copy = [...arr];
      copy[index] = __spreadProps(__spreadValues({}, copy[index]), { price: newPrice });
      return copy;
    });
  }
  // ---- Submit ----
  onSubmit() {
    this.form.get("title")?.markAsTouched();
    this.form.get("price")?.markAsTouched();
    if (this.form.get("title")?.invalid || this.form.get("price")?.invalid) {
      this.toast.error("Please fill in the required fields (Title & Price).");
      this.currentStep.set(1);
      return;
    }
    this.saving.set(true);
    this.error.set("");
    const formVal = this.form.value;
    const data = {
      title: formVal.title,
      slug: formVal.slug || void 0,
      category_id: formVal.category_id || null,
      sub_category_id: formVal.sub_category_id || null,
      description: formVal.description || "",
      video_url: formVal.video_url || "",
      is_featured: formVal.is_featured ? 1 : 0,
      price: formVal.price,
      discount_price: formVal.discount_price || null,
      duration: formVal.duration || "",
      max_qty: formVal.max_qty || null,
      image: this.imageValue() || null,
      type: Number(formVal.type),
      status: formVal.status ? 1 : 0,
      // Repeaters
      includes: formVal.includes || [],
      faqs: formVal.faqs || [],
      additional_info: formVal.additional_info || [],
      specifications: formVal.specifications || [],
      // Cars
      cars: this.selectedCars().map((c) => ({
        car_id: c.car_id,
        variant_id: c.variant_id,
        price: c.price
      })),
      // Gallery
      gallery: this.galleryValues().filter((v) => v !== null)
    };
    const req = this.isEdit ? this.http.put(`${environment.apiUrl}/admin/services/${this.serviceId}`, data) : this.http.post(`${environment.apiUrl}/admin/services`, data);
    req.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? "Service updated successfully!" : "Service created successfully!");
        this.router.navigate(["/admin/services/all"]);
      },
      error: (err) => {
        const msg = err.error?.error || err.error?.message || "Something went wrong";
        this.error.set(msg);
        this.toast.error(msg);
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
  static \u0275fac = function ServiceFormComponent_Factory(t) {
    return new (t || _ServiceFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceFormComponent, selectors: [["app-service-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 4, consts: [[1, "page-header"], ["routerLink", "/admin/services/all", 1, "back-btn"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], [1, "page-title"], ["class", "loading-center", 4, "ngIf"], ["class", "step-tabs", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "loading-center"], [1, "spinner"], [1, "step-tabs"], [1, "step-track"], [1, "step-item", 3, "click"], [1, "step-circle"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", 4, "ngIf"], [4, "ngIf"], [1, "step-label"], [1, "step-line"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3"], ["points", "20 6 9 17 4 12"], [3, "ngSubmit", "formGroup"], ["class", "form-card", 4, "ngIf"], ["class", "error-msg", 4, "ngIf"], ["class", "form-nav", 4, "ngIf"], [1, "form-card"], [1, "section-title"], [1, "form-grid"], [1, "form-group"], [1, "req"], ["type", "text", "formControlName", "title", "placeholder", "Service title", 3, "input"], ["class", "field-error", 4, "ngIf"], ["type", "text", "formControlName", "slug", "placeholder", "auto-generated-slug"], ["formControlName", "category_id", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "sub_category_id"], ["class", "field-hint", 4, "ngIf"], ["formControlName", "type"], [3, "value"], ["type", "number", "formControlName", "price", "placeholder", "0.00"], ["type", "number", "formControlName", "discount_price", "placeholder", "0.00"], ["type", "text", "formControlName", "duration", "placeholder", "e.g. 30 mins"], ["type", "number", "formControlName", "max_qty", "placeholder", "0"], ["type", "text", "formControlName", "video_url", "placeholder", "https://youtube.com/..."], [1, "form-group", "full-width"], ["formControlName", "description", "rows", "5", "placeholder", "Service description..."], ["label", "Select Image", 3, "valueChange", "value"], [1, "gallery-grid"], ["label", "Gallery Image", 3, "value", "valueChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "gallery-add-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "is_featured"], ["type", "checkbox", "formControlName", "status"], [1, "field-error"], [1, "field-hint"], ["label", "Gallery Image", 3, "valueChange", "value"], [1, "repeater-section"], [1, "repeater-header"], ["type", "button", 1, "btn-add", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["class", "repeater-empty", 4, "ngIf"], ["class", "repeater-item", 3, "formGroup", 4, "ngFor", "ngForOf"], [1, "repeater-empty"], [1, "repeater-item", 3, "formGroup"], [1, "repeater-grid"], ["type", "text", "formControlName", "icon", "placeholder", "Icon class or URL"], ["type", "text", "formControlName", "title", "placeholder", "Include title"], ["type", "button", "title", "Remove", 1, "btn-remove", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["type", "text", "formControlName", "question", "placeholder", "FAQ question"], ["formControlName", "answer", "rows", "3", "placeholder", "FAQ answer"], ["type", "text", "formControlName", "title", "placeholder", "Info title"], ["formControlName", "description", "rows", "3", "placeholder", "Info description"], ["type", "text", "formControlName", "title", "placeholder", "Spec title"], ["type", "text", "formControlName", "value", "placeholder", "Spec value"], [1, "car-selector"], [1, "car-selector-row"], [3, "ngModelChange", "change", "ngModel", "ngModelOptions"], [3, "ngModelChange", "change", "ngModel", "ngModelOptions", "disabled"], [3, "ngModelChange", "ngModel", "ngModelOptions", "disabled"], ["type", "number", "placeholder", "Price for this car", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "form-group", "car-add-col"], ["type", "button", 1, "btn-add-car", 3, "click", "disabled"], ["class", "cars-table-wrap", 4, "ngIf"], [1, "cars-table-wrap"], [1, "cars-table"], [4, "ngFor", "ngForOf"], ["type", "number", 1, "table-price-input", 3, "input", "value"], ["type", "button", 1, "btn-remove-row", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"], ["d", "M10 11v6"], ["d", "M14 11v6"], [1, "error-msg"], [1, "form-nav"], [1, "nav-left"], ["routerLink", "/admin/services/all", 1, "btn-cancel"], [1, "nav-right"], ["type", "button", "class", "btn-back", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn-next", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["type", "button", 1, "btn-back", 3, "click"], ["type", "button", 1, "btn-next", 3, "click"], ["d", "M5 12h14"], ["points", "12 5 19 12 12 19"]], template: function ServiceFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3)(4, "polyline", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " Back to Services ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "h1", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, ServiceFormComponent_div_8_Template, 2, 0, "div", 6)(9, ServiceFormComponent_div_9_Template, 22, 20, "div", 7)(10, ServiceFormComponent_form_10_Template, 6, 6, "form", 8);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.isEdit ? "Edit Service" : "Create Service");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingData());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, MediaPickerComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: #64748b;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.step-tabs[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.step-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  padding: 24px 32px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.step-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n}\n.step-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 15px;\n  border: 2px solid #d1d5db;\n  background: #fff;\n  color: #94a3b8;\n  transition: all 0.3s ease;\n}\n.step-item.active[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  border-color: #e31b23;\n  background: #e31b23;\n  color: #fff;\n}\n.step-item.completed[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #16a34a;\n  color: #fff;\n}\n.step-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #94a3b8;\n  transition: color 0.3s;\n  white-space: nowrap;\n}\n.step-item.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #e31b23;\n}\n.step-item.completed[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.step-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: #e5e7eb;\n  min-width: 60px;\n  max-width: 160px;\n  transition: background 0.3s;\n}\n.step-line.completed[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 24px 0;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.req[_ngcontent-%COMP%] {\n  color: #e31b23;\n}\n.form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n  background: #fff;\n  font-family: inherit;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled {\n  background: #f3f4f6;\n  cursor: not-allowed;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #dc2626;\n  margin-top: 2px;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding-top: 20px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #e31b23;\n  cursor: pointer;\n}\n.gallery-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: flex-start;\n}\n.gallery-add-btn[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 120px;\n  border: 2px dashed #d1d5db;\n  border-radius: 12px;\n  background: #fafafa;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  cursor: pointer;\n  color: #94a3b8;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.gallery-add-btn[_ngcontent-%COMP%]:hover {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.repeater-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n  padding: 20px;\n  background: #f8f9fb;\n  border-radius: 12px;\n  border: 1px solid #f1f5f9;\n}\n.repeater-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.repeater-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.btn-add[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid #e31b23;\n  border-radius: 8px;\n  background: #fff;\n  color: #e31b23;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  background: #e31b23;\n  color: #fff;\n}\n.repeater-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: #94a3b8;\n  font-size: 14px;\n  font-style: italic;\n}\n.repeater-item[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 10px;\n  padding: 16px 48px 16px 16px;\n  margin-bottom: 12px;\n  border: 1px solid #e5e7eb;\n  transition: border-color 0.2s;\n}\n.repeater-item[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n}\n.repeater-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: #fff;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #dc2626;\n  transition: all 0.2s;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #dc2626;\n}\n.car-selector[_ngcontent-%COMP%] {\n  background: #f8f9fb;\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 24px;\n  border: 1px solid #f1f5f9;\n}\n.car-selector-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr auto;\n  gap: 16px;\n  align-items: flex-end;\n}\n.car-add-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  padding-bottom: 2px;\n}\n.btn-add-car[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  background: #e31b23;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n  white-space: nowrap;\n}\n.btn-add-car[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-add-car[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cars-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n}\n.cars-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.cars-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fb;\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #374151;\n  font-size: 13px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.cars-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #374151;\n}\n.cars-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.cars-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.table-price-input[_ngcontent-%COMP%] {\n  width: 100px;\n  padding: 6px 10px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 13px;\n  text-align: right;\n}\n.table-price-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n}\n.btn-remove-row[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #dc2626;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  transition: background 0.2s;\n}\n.btn-remove-row[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  font-size: 14px;\n}\n.form-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n  padding: 20px 0;\n}\n.nav-left[_ngcontent-%COMP%], .nav-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.2s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n}\n.btn-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 24px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n  background: #f8f9fb;\n}\n.btn-next[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 24px;\n  border: none;\n  border-radius: 8px;\n  background: #1a1a2e;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-next[_ngcontent-%COMP%]:hover {\n  background: #2d2d4e;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 24px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n  transition: background 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .repeater-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .car-selector-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .step-track[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n    padding: 16px;\n  }\n  .step-line[_ngcontent-%COMP%] {\n    min-width: 30px;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceFormComponent, { className: "ServiceFormComponent", filePath: "src\\app\\features\\admin\\services\\service-form.component.ts", lineNumber: 581 });
})();
export {
  ServiceFormComponent
};
