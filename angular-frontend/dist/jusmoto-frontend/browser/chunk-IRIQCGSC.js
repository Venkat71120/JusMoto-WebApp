import {
  MediaPickerComponent
} from "./chunk-NO237GSF.js";
import {
  ToastService
} from "./chunk-CUQ723YT.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/admin/services/service-form.component.ts
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
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "div", 18);
    \u0275\u0275elementStart(9, "div", 13);
    \u0275\u0275listener("click", function ServiceFormComponent_div_9_Template_div_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToStep(2));
    });
    \u0275\u0275elementStart(10, "div", 14)(11, "span");
    \u0275\u0275text(12, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 17);
    \u0275\u0275text(14, "Attributes");
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
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.isProduct ? "Product" : "Service", " Details");
    \u0275\u0275advance();
    \u0275\u0275classProp("completed", ctx_r1.currentStep() > 1);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.currentStep() === 2)("completed", false);
  }
}
function ServiceFormComponent_form_10_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, "Title is required");
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_1_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
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
function ServiceFormComponent_form_10_div_1_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, "Price is required");
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_1_app_media_picker_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-media-picker", 56);
    \u0275\u0275listener("valueChange", function ServiceFormComponent_form_10_div_1_app_media_picker_65_Template_app_media_picker_valueChange_0_listener($event) {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onGalleryImageChange(i_r7, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r8 = ctx.$implicit;
    \u0275\u0275property("value", g_r8);
  }
}
function ServiceFormComponent_form_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "h2", 26);
    \u0275\u0275text(2);
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
    \u0275\u0275elementStart(18, "select", 33)(19, "option", 34);
    \u0275\u0275text(20, "Select Category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ServiceFormComponent_form_10_div_1_option_21_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 28)(23, "label");
    \u0275\u0275text(24, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 36)(26, "option", 37);
    \u0275\u0275text(27, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 37);
    \u0275\u0275text(29, "Product");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 28)(31, "label");
    \u0275\u0275text(32, "Price ");
    \u0275\u0275elementStart(33, "span", 29);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "input", 38);
    \u0275\u0275template(36, ServiceFormComponent_form_10_div_1_div_36_Template, 2, 0, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 28)(38, "label");
    \u0275\u0275text(39, "Discount Price");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 28)(42, "label");
    \u0275\u0275text(43, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 28)(46, "label");
    \u0275\u0275text(47, "Max Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 28)(50, "label");
    \u0275\u0275text(51, "Video URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 43)(54, "label");
    \u0275\u0275text(55, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "textarea", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 28)(58, "label");
    \u0275\u0275text(59, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "app-media-picker", 45);
    \u0275\u0275listener("valueChange", function ServiceFormComponent_form_10_div_1_Template_app_media_picker_valueChange_60_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImageSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 28)(62, "label");
    \u0275\u0275text(63, "Gallery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 46);
    \u0275\u0275template(65, ServiceFormComponent_form_10_div_1_app_media_picker_65_Template, 1, 1, "app-media-picker", 47);
    \u0275\u0275elementStart(66, "button", 48);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_1_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addGallerySlot());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(67, "svg", 49);
    \u0275\u0275element(68, "line", 50)(69, "line", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(70, "span");
    \u0275\u0275text(71, "Add Image");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(72, "div", 28)(73, "label", 52);
    \u0275\u0275element(74, "input", 53);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 28)(77, "label", 52);
    \u0275\u0275element(78, "input", 54);
    \u0275\u0275text(79, " Active ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.isProduct ? "Product" : "Service", " Details");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.form.get("title")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r1.form.get("title")) == null ? null : tmp_3_0.hasError("required")));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r1.categories());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.form.get("price")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx_r1.form.get("price")) == null ? null : tmp_7_0.hasError("required")));
    \u0275\u0275advance(24);
    \u0275\u0275property("value", ctx_r1.imageValue());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.galleryValues())("ngForTrackBy", ctx_r1.trackByIndex);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" Featured ", ctx_r1.isProduct ? "Product" : "Service", " ");
  }
}
function ServiceFormComponent_form_10_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1, 'No includes added yet. Click "Add" to create one.');
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "div", 28)(3, "label");
    \u0275\u0275text(4, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 67);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_2_div_13_Template_button_click_6_listener() {
      const i_r11 = \u0275\u0275restoreView(_r10).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.includes.removeAt(i_r11));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 60);
    \u0275\u0275element(8, "line", 68)(9, "line", 69);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctrl_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r1.asFormGroup(ctrl_r12));
  }
}
function ServiceFormComponent_form_10_div_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1, 'No FAQs added yet. Click "Add" to create one.');
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 70)(2, "div", 28)(3, "label");
    \u0275\u0275text(4, "Question");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28)(7, "label");
    \u0275\u0275text(8, "Answer");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "textarea", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 67);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_2_div_24_Template_button_click_10_listener() {
      const i_r14 = \u0275\u0275restoreView(_r13).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.faqs.removeAt(i_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 60);
    \u0275\u0275element(12, "line", 68)(13, "line", 69);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctrl_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r1.asFormGroup(ctrl_r15));
  }
}
function ServiceFormComponent_form_10_div_2_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1, 'No additional info added yet. Click "Add" to create one.');
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_2_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 70)(2, "div", 28)(3, "label");
    \u0275\u0275text(4, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28)(7, "label");
    \u0275\u0275text(8, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "textarea", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 67);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_2_div_35_Template_button_click_10_listener() {
      const i_r17 = \u0275\u0275restoreView(_r16).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.additionalInfo.removeAt(i_r17));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 60);
    \u0275\u0275element(12, "line", 68)(13, "line", 69);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctrl_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r1.asFormGroup(ctrl_r18));
  }
}
function ServiceFormComponent_form_10_div_2_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1, 'No specifications added yet. Click "Add" to create one.');
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_2_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 70)(2, "div", 28)(3, "label");
    \u0275\u0275text(4, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28)(7, "label");
    \u0275\u0275text(8, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 67);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_2_div_46_Template_button_click_10_listener() {
      const i_r20 = \u0275\u0275restoreView(_r19).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.specifications.removeAt(i_r20));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 60);
    \u0275\u0275element(12, "line", 68)(13, "line", 69);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctrl_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r1.asFormGroup(ctrl_r21));
  }
}
function ServiceFormComponent_form_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "h2", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 57)(4, "div", 58)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 59);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addInclude());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 60);
    \u0275\u0275element(9, "line", 50)(10, "line", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ServiceFormComponent_form_10_div_2_div_12_Template, 2, 0, "div", 61)(13, ServiceFormComponent_form_10_div_2_div_13_Template, 10, 1, "div", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 57)(15, "div", 58)(16, "h3");
    \u0275\u0275text(17, "FAQs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 59);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_2_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addFaq());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 60);
    \u0275\u0275element(20, "line", 50)(21, "line", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, ServiceFormComponent_form_10_div_2_div_23_Template, 2, 0, "div", 61)(24, ServiceFormComponent_form_10_div_2_div_24_Template, 14, 1, "div", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "div", 57)(26, "div", 58)(27, "h3");
    \u0275\u0275text(28, "Additional Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 59);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_2_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addAdditionalInfo());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 60);
    \u0275\u0275element(31, "line", 50)(32, "line", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, ServiceFormComponent_form_10_div_2_div_34_Template, 2, 0, "div", 61)(35, ServiceFormComponent_form_10_div_2_div_35_Template, 14, 1, "div", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "div", 57)(37, "div", 58)(38, "h3");
    \u0275\u0275text(39, "Specifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 59);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_2_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addSpecification());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 60);
    \u0275\u0275element(42, "line", 50)(43, "line", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(45, ServiceFormComponent_form_10_div_2_div_45_Template, 2, 0, "div", 61)(46, ServiceFormComponent_form_10_div_2_div_46_Template, 14, 1, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.isProduct ? "Product" : "Service", " Attributes");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.isProduct ? "Product" : "Service", " Includes");
    \u0275\u0275advance(6);
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
function ServiceFormComponent_form_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function ServiceFormComponent_form_10_div_4_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_4_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 60);
    \u0275\u0275element(2, "path", 3)(3, "polyline", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Back ");
    \u0275\u0275elementEnd();
  }
}
function ServiceFormComponent_form_10_div_4_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275listener("click", function ServiceFormComponent_form_10_div_4_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(1, " Next ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 60);
    \u0275\u0275element(3, "path", 87)(4, "polyline", 88);
    \u0275\u0275elementEnd()();
  }
}
function ServiceFormComponent_form_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79)(2, "a", 80);
    \u0275\u0275text(3, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 81);
    \u0275\u0275template(5, ServiceFormComponent_form_10_div_4_button_5_Template, 5, 0, "button", 82)(6, ServiceFormComponent_form_10_div_4_button_6_Template, 5, 0, "button", 83);
    \u0275\u0275elementStart(7, "button", 84);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.isProduct ? "/admin/products/all" : "/admin/services/all");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.currentStep() > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep() < 2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Saving..." : ctx_r1.isEdit ? "Update " + (ctx_r1.isProduct ? "Product" : "Service") : "Create " + (ctx_r1.isProduct ? "Product" : "Service"), " ");
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
    \u0275\u0275template(1, ServiceFormComponent_form_10_div_1_Template, 80, 10, "div", 22)(2, ServiceFormComponent_form_10_div_2_Template, 47, 10, "div", 22)(3, ServiceFormComponent_form_10_div_3_Template, 2, 1, "div", 23)(4, ServiceFormComponent_form_10_div_4_Template, 9, 5, "div", 24);
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
  // Signals - Media
  imageValue = signal(null);
  galleryValues = signal([]);
  // Type from route
  isProduct = false;
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
    const routeType = this.route.snapshot.data["type"];
    this.isProduct = routeType === 1;
    this.form = this.fb.group({
      title: ["", Validators.required],
      slug: [""],
      category_id: [""],
      description: [""],
      video_url: [""],
      is_featured: [false],
      price: [0, Validators.required],
      discount_price: [null],
      duration: [""],
      max_qty: [null],
      image: [null],
      type: [routeType ?? 0],
      status: [true],
      // FormArrays for Step 2
      includes: this.fb.array([]),
      faqs: this.fb.array([]),
      additional_info: this.fb.array([]),
      specifications: this.fb.array([])
    });
    this.loadCategories();
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
    if (step < 1 || step > 2)
      return;
    if (this.currentStep() === 1 && step > 1) {
      this.form.get("title")?.markAsTouched();
      this.form.get("price")?.markAsTouched();
      if (this.form.get("title")?.invalid || this.form.get("price")?.invalid) {
        this.toast.error("Please fill in the required fields.");
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
        if (s.image) {
          const imgVal = String(s.image);
          if (imgVal.startsWith("http") || imgVal.startsWith("media/") || imgVal.startsWith("uploads/")) {
            this.imageValue.set(imgVal);
          } else if (/^\d+$/.test(imgVal)) {
            this.http.get(`${environment.apiUrl}/admin/media/${imgVal}`).subscribe({
              next: (mediaRes) => {
                if (mediaRes.data?.path) {
                  const p = mediaRes.data.path;
                  if (p.startsWith("http")) {
                    this.imageValue.set(p);
                  } else {
                    const baseUrl = environment.apiUrl.replace("/api/v1", "");
                    const filename = p.replace("media/", "");
                    this.imageValue.set(`${baseUrl}/uploads/media/${filename}`);
                  }
                } else {
                  this.imageValue.set(imgVal);
                }
              },
              error: () => this.imageValue.set(imgVal)
            });
          } else {
            this.imageValue.set(imgVal);
          }
        }
        const gallery = s.gallery_images || s.gallery;
        if (gallery && Array.isArray(gallery)) {
          this.galleryValues.set(gallery);
        }
        if (s.includes && Array.isArray(s.includes)) {
          s.includes.forEach((item) => {
            this.includes.push(this.fb.group({
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
        this.loadingData.set(false);
      },
      error: () => {
        this.toast.error("Failed to load service data.");
        this.router.navigate([this.isProduct ? "/admin/products/all" : "/admin/services/all"]);
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
    this.includes.push(this.fb.group({ title: [""] }));
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
      // Gallery
      gallery: this.galleryValues().filter((v) => v !== null)
    };
    const req = this.isEdit ? this.http.put(`${environment.apiUrl}/admin/services/${this.serviceId}`, data) : this.http.post(`${environment.apiUrl}/admin/services`, data);
    req.subscribe({
      next: () => {
        const label = this.isProduct ? "Product" : "Service";
        this.toast.success(this.isEdit ? `${label} updated successfully!` : `${label} created successfully!`);
        this.router.navigate([this.isProduct ? "/admin/products/all" : "/admin/services/all"]);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceFormComponent, selectors: [["app-service-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 7, consts: [[1, "page-header"], [1, "back-btn", 3, "routerLink"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], [1, "page-title"], ["class", "loading-center", 4, "ngIf"], ["class", "step-tabs", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "loading-center"], [1, "spinner"], [1, "step-tabs"], [1, "step-track"], [1, "step-item", 3, "click"], [1, "step-circle"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", 4, "ngIf"], [4, "ngIf"], [1, "step-label"], [1, "step-line"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3"], ["points", "20 6 9 17 4 12"], [3, "ngSubmit", "formGroup"], ["class", "form-card", 4, "ngIf"], ["class", "error-msg", 4, "ngIf"], ["class", "form-nav", 4, "ngIf"], [1, "form-card"], [1, "section-title"], [1, "form-grid"], [1, "form-group"], [1, "req"], ["type", "text", "formControlName", "title", "placeholder", "Service title", 3, "input"], ["class", "field-error", 4, "ngIf"], ["type", "text", "formControlName", "slug", "placeholder", "auto-generated-slug"], ["formControlName", "category_id"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "type"], [3, "value"], ["type", "number", "formControlName", "price", "placeholder", "0.00"], ["type", "number", "formControlName", "discount_price", "placeholder", "0.00"], ["type", "text", "formControlName", "duration", "placeholder", "e.g. 30 mins"], ["type", "number", "formControlName", "max_qty", "placeholder", "0"], ["type", "text", "formControlName", "video_url", "placeholder", "https://youtube.com/..."], [1, "form-group", "full-width"], ["formControlName", "description", "rows", "5", "placeholder", "Service description..."], ["label", "Select Image", 3, "valueChange", "value"], [1, "gallery-grid"], ["label", "Gallery Image", 3, "value", "valueChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "gallery-add-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "is_featured"], ["type", "checkbox", "formControlName", "status"], [1, "field-error"], ["label", "Gallery Image", 3, "valueChange", "value"], [1, "repeater-section"], [1, "repeater-header"], ["type", "button", 1, "btn-add", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["class", "repeater-empty", 4, "ngIf"], ["class", "repeater-item", 3, "formGroup", 4, "ngFor", "ngForOf"], [1, "repeater-empty"], [1, "repeater-item", 3, "formGroup"], [1, "repeater-grid", "single-col"], ["type", "text", "formControlName", "title", "placeholder", "Include title"], ["type", "button", "title", "Remove", 1, "btn-remove", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "repeater-grid"], ["type", "text", "formControlName", "question", "placeholder", "FAQ question"], ["formControlName", "answer", "rows", "3", "placeholder", "FAQ answer"], ["type", "text", "formControlName", "title", "placeholder", "Info title"], ["formControlName", "description", "rows", "3", "placeholder", "Info description"], ["type", "text", "formControlName", "title", "placeholder", "Spec title"], ["type", "text", "formControlName", "value", "placeholder", "Spec value"], [1, "error-msg"], [1, "form-nav"], [1, "nav-left"], [1, "btn-cancel", 3, "routerLink"], [1, "nav-right"], ["type", "button", "class", "btn-back", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn-next", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["type", "button", 1, "btn-back", 3, "click"], ["type", "button", 1, "btn-next", 3, "click"], ["d", "M5 12h14"], ["points", "12 5 19 12 12 19"]], template: function ServiceFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3)(4, "polyline", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "h1", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, ServiceFormComponent_div_8_Template, 2, 0, "div", 6)(9, ServiceFormComponent_div_9_Template, 15, 13, "div", 7)(10, ServiceFormComponent_form_10_Template, 5, 5, "form", 8);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.isProduct ? "/admin/products/all" : "/admin/services/all");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" Back to ", ctx.isProduct ? "Products" : "Services", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.isEdit ? "Edit" : "Create", " ", ctx.isProduct ? "Product" : "Service", "");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingData());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, MediaPickerComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: #64748b;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.step-tabs[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.step-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  padding: 24px 32px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.step-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n}\n.step-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 15px;\n  border: 2px solid #d1d5db;\n  background: #fff;\n  color: #94a3b8;\n  transition: all 0.3s ease;\n}\n.step-item.active[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  border-color: #e31b23;\n  background: #e31b23;\n  color: #fff;\n}\n.step-item.completed[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #16a34a;\n  color: #fff;\n}\n.step-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #94a3b8;\n  transition: color 0.3s;\n  white-space: nowrap;\n}\n.step-item.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #e31b23;\n}\n.step-item.completed[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.step-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: #e5e7eb;\n  min-width: 60px;\n  max-width: 160px;\n  transition: background 0.3s;\n}\n.step-line.completed[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 24px 0;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.req[_ngcontent-%COMP%] {\n  color: #e31b23;\n}\n.form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n  background: #fff;\n  font-family: inherit;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled {\n  background: #f3f4f6;\n  cursor: not-allowed;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #dc2626;\n  margin-top: 2px;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding-top: 20px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #e31b23;\n  cursor: pointer;\n}\n.gallery-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: flex-start;\n}\n.gallery-add-btn[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 120px;\n  border: 2px dashed #d1d5db;\n  border-radius: 12px;\n  background: #fafafa;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  cursor: pointer;\n  color: #94a3b8;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.gallery-add-btn[_ngcontent-%COMP%]:hover {\n  border-color: #e31b23;\n  color: #e31b23;\n}\n.repeater-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n  padding: 20px;\n  background: #f8f9fb;\n  border-radius: 12px;\n  border: 1px solid #f1f5f9;\n}\n.repeater-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.repeater-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.btn-add[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid #e31b23;\n  border-radius: 8px;\n  background: #fff;\n  color: #e31b23;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  background: #e31b23;\n  color: #fff;\n}\n.repeater-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: #94a3b8;\n  font-size: 14px;\n  font-style: italic;\n}\n.repeater-item[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 10px;\n  padding: 16px 48px 16px 16px;\n  margin-bottom: 12px;\n  border: 1px solid #e5e7eb;\n  transition: border-color 0.2s;\n}\n.repeater-item[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n}\n.repeater-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.repeater-grid.single-col[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: #fff;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #dc2626;\n  transition: all 0.2s;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #dc2626;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  font-size: 14px;\n}\n.form-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n  padding: 20px 0;\n}\n.nav-left[_ngcontent-%COMP%], .nav-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.2s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n}\n.btn-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 24px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n  background: #f8f9fb;\n}\n.btn-next[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 24px;\n  border: none;\n  border-radius: 8px;\n  background: #1a1a2e;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-next[_ngcontent-%COMP%]:hover {\n  background: #2d2d4e;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 24px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n  transition: background 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .repeater-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .step-track[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n    padding: 16px;\n  }\n  .step-line[_ngcontent-%COMP%] {\n    min-width: 30px;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceFormComponent, { className: "ServiceFormComponent", filePath: "src\\app\\features\\admin\\services\\service-form.component.ts", lineNumber: 444 });
})();
export {
  ServiceFormComponent
};
