import {
  ToastService
} from "./chunk-CUQ723YT.js";
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
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/admin/services/service-view.component.ts
var _c0 = (a0) => ["/admin/products/edit", a0];
var _c1 = (a0) => ["/admin/services/edit-service", a0];
var _c2 = () => [1, 2, 3, 4, 5];
function ServiceViewComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function ServiceViewComponent_div_7_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "Featured");
    \u0275\u0275elementEnd();
  }
}
function ServiceViewComponent_div_7_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("/ ", ctx_r0.service().slug, "");
  }
}
function ServiceViewComponent_div_7_img_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.service().image, \u0275\u0275sanitizeUrl);
  }
}
function ServiceViewComponent_div_7_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 36);
    \u0275\u0275element(2, "rect", 37)(3, "circle", 38)(4, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "No image");
    \u0275\u0275elementEnd()();
  }
}
function ServiceViewComponent_div_7_div_21_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
  }
  if (rf & 2) {
    const img_r2 = ctx.$implicit;
    \u0275\u0275property("src", img_r2, \u0275\u0275sanitizeUrl);
  }
}
function ServiceViewComponent_div_7_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, ServiceViewComponent_div_7_div_21_img_1_Template, 1, 1, "img", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.gallery());
  }
}
function ServiceViewComponent_div_7_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2, "Discount Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(5, 1, ctx_r0.service().discount_price, "1.0-0"), "");
  }
}
function ServiceViewComponent_div_7_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.service().duration);
  }
}
function ServiceViewComponent_div_7_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2, "Max Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.service().max_qty);
  }
}
function ServiceViewComponent_div_7_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2, "Sold Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.service().sold_count);
  }
}
function ServiceViewComponent_div_7_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2, "Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r0.service().updated_at, "medium"));
  }
}
function ServiceViewComponent_div_7_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h3");
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.service().description);
  }
}
function ServiceViewComponent_div_7_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h3");
    \u0275\u0275text(2, "Video");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 18);
    \u0275\u0275element(5, "polygon", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r0.service().video_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.service().video_url, " ");
  }
}
function ServiceViewComponent_div_7_div_54_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 50);
    \u0275\u0275element(2, "polyline", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r3.title);
  }
}
function ServiceViewComponent_div_7_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h3");
    \u0275\u0275text(2, "Includes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47);
    \u0275\u0275template(4, ServiceViewComponent_div_7_div_54_div_4_Template, 5, 1, "div", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.service().includes);
  }
}
function ServiceViewComponent_div_7_div_55_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const spec_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(spec_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(spec_r4.value);
  }
}
function ServiceViewComponent_div_7_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h3");
    \u0275\u0275text(2, "Specifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52);
    \u0275\u0275template(4, ServiceViewComponent_div_7_div_55_div_4_Template, 5, 2, "div", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.service().specifications);
  }
}
function ServiceViewComponent_div_7_div_56_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const info_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r5.description);
  }
}
function ServiceViewComponent_div_7_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h3");
    \u0275\u0275text(2, "Additional Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 57);
    \u0275\u0275template(4, ServiceViewComponent_div_7_div_56_div_4_Template, 5, 2, "div", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.service().additional_info);
  }
}
function ServiceViewComponent_div_7_div_57_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "span", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const faq_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", i_r7 + 1, ".");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r6.question, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r6.answer);
  }
}
function ServiceViewComponent_div_7_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h3");
    \u0275\u0275text(2, "FAQs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 60);
    \u0275\u0275template(4, ServiceViewComponent_div_7_div_57_div_4_Template, 7, 3, "div", 61);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.service().faqs);
  }
}
function ServiceViewComponent_div_7_div_58_tr_15_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sc_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(2, 1, sc_r8.discount_price, "1.0-0"), "");
  }
}
function ServiceViewComponent_div_7_div_58_tr_15_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ServiceViewComponent_div_7_div_58_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275template(9, ServiceViewComponent_div_7_div_58_tr_15_span_9_Template, 3, 4, "span", 68)(10, ServiceViewComponent_div_7_div_58_tr_15_span_10_Template, 2, 0, "span", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sc_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((sc_r8.car == null ? null : sc_r8.car.name) || (sc_r8.car == null ? null : sc_r8.car.title) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((sc_r8.variant == null ? null : sc_r8.variant.name) || (sc_r8.variant == null ? null : sc_r8.variant.title) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(7, 5, sc_r8.price, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", sc_r8.discount_price);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !sc_r8.discount_price);
  }
}
function ServiceViewComponent_div_7_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h3");
    \u0275\u0275text(2, "Car-Specific Pricing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "table", 66)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Variant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Discount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, ServiceViewComponent_div_7_div_58_tr_15_Template, 11, 8, "tr", 67);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.service().serviceCars);
  }
}
function ServiceViewComponent_div_7_div_59_div_3__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 79);
    \u0275\u0275element(1, "polygon", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("fill", s_r9 <= ctx_r0.service().average_rating ? "#f59e0b" : "none")("stroke", "#f59e0b");
  }
}
function ServiceViewComponent_div_7_div_59_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "span", 75);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 76);
    \u0275\u0275template(5, ServiceViewComponent_div_7_div_59_div_3__svg_svg_5_Template, 2, 2, "svg", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 78);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 3, ctx_r0.service().average_rating, "1.1-1"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(6, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r0.service().review_count || ctx_r0.service().reviews.length, " reviews)");
  }
}
function ServiceViewComponent_div_7_div_59_div_5__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 87);
    \u0275\u0275element(1, "polygon", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    const review_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("fill", s_r10 <= review_r11.rating ? "#f59e0b" : "none")("stroke", "#f59e0b");
  }
}
function ServiceViewComponent_div_7_div_59_div_5_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(review_r11.comment);
  }
}
function ServiceViewComponent_div_7_div_59_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 83);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 84);
    \u0275\u0275template(8, ServiceViewComponent_div_7_div_59_div_5__svg_svg_8_Template, 2, 2, "svg", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ServiceViewComponent_div_7_div_59_div_5_p_9_Template, 2, 1, "p", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((review_r11.reviewer == null ? null : review_r11.reviewer.first_name) || (review_r11.reviewer == null ? null : review_r11.reviewer.name) || "User");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 4, review_r11.created_at, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(7, _c2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", review_r11.comment);
  }
}
function ServiceViewComponent_div_7_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ServiceViewComponent_div_7_div_59_div_3_Template, 8, 7, "div", 71);
    \u0275\u0275elementStart(4, "div", 72);
    \u0275\u0275template(5, ServiceViewComponent_div_7_div_59_div_5_Template, 10, 8, "div", 73);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Reviews (", ctx_r0.service().review_count || ctx_r0.service().reviews.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.service().average_rating);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.service().reviews);
  }
}
function ServiceViewComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 9)(2, "div", 10)(3, "h1", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12)(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ServiceViewComponent_div_7_span_10_Template, 2, 0, "span", 15)(11, ServiceViewComponent_div_7_span_11_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 18);
    \u0275\u0275element(14, "path", 19)(15, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Edit ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 21)(18, "div", 22);
    \u0275\u0275template(19, ServiceViewComponent_div_7_img_19_Template, 1, 1, "img", 23)(20, ServiceViewComponent_div_7_div_20_Template, 7, 0, "div", 24)(21, ServiceViewComponent_div_7_div_21_Template, 2, 1, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 26)(23, "h3");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 27)(26, "span", 28);
    \u0275\u0275text(27, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 27)(31, "span", 28);
    \u0275\u0275text(32, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 27)(36, "span", 28);
    \u0275\u0275text(37, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 29);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, ServiceViewComponent_div_7_div_41_Template, 6, 4, "div", 30)(42, ServiceViewComponent_div_7_div_42_Template, 5, 1, "div", 30)(43, ServiceViewComponent_div_7_div_43_Template, 5, 1, "div", 30)(44, ServiceViewComponent_div_7_div_44_Template, 5, 1, "div", 30);
    \u0275\u0275elementStart(45, "div", 27)(46, "span", 28);
    \u0275\u0275text(47, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, ServiceViewComponent_div_7_div_51_Template, 6, 4, "div", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(52, ServiceViewComponent_div_7_div_52_Template, 5, 1, "div", 31)(53, ServiceViewComponent_div_7_div_53_Template, 7, 2, "div", 31)(54, ServiceViewComponent_div_7_div_54_Template, 5, 1, "div", 31)(55, ServiceViewComponent_div_7_div_55_Template, 5, 1, "div", 31)(56, ServiceViewComponent_div_7_div_56_Template, 5, 1, "div", 31)(57, ServiceViewComponent_div_7_div_57_Template, 5, 1, "div", 31)(58, ServiceViewComponent_div_7_div_58_Template, 16, 1, "div", 31)(59, ServiceViewComponent_div_7_div_59_Template, 6, 3, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_26_0;
    let tmp_27_0;
    let tmp_28_0;
    let tmp_29_0;
    let tmp_30_0;
    let tmp_31_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.service().title);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("type-service", !ctx_r0.isProduct)("type-product", ctx_r0.isProduct);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isProduct ? "Product" : "Service", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-active", ctx_r0.service().status)("badge-inactive", !ctx_r0.service().status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.service().status ? "Active" : "Inactive", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.service().is_featured);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.service().slug);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.isProduct ? \u0275\u0275pureFunction1(41, _c0, ctx_r0.service().id) : \u0275\u0275pureFunction1(43, _c1, ctx_r0.service().id));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.service().image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.service().image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.gallery().length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.isProduct ? "Product" : "Service", " Information");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", ctx_r0.service().id, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_16_0 = ctx_r0.service().category) == null ? null : tmp_16_0.name) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(40, 35, ctx_r0.service().price, "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.service().discount_price);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.service().duration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.service().max_qty);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.service().sold_count);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 38, ctx_r0.service().created_at, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.service().updated_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.service().description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.service().video_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_26_0 = ctx_r0.service().includes) == null ? null : tmp_26_0.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_27_0 = ctx_r0.service().specifications) == null ? null : tmp_27_0.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_28_0 = ctx_r0.service().additional_info) == null ? null : tmp_28_0.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_29_0 = ctx_r0.service().faqs) == null ? null : tmp_29_0.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_30_0 = ctx_r0.service().serviceCars) == null ? null : tmp_30_0.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_31_0 = ctx_r0.service().reviews) == null ? null : tmp_31_0.length);
  }
}
var ServiceViewComponent = class _ServiceViewComponent {
  http;
  route;
  router;
  toast;
  service = signal(null);
  loading = signal(true);
  gallery = signal([]);
  isProduct = false;
  constructor(http, route, router, toast) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.toast = toast;
  }
  ngOnInit() {
    const routeType = this.route.snapshot.data["type"] ?? 0;
    this.isProduct = routeType === 1;
    const id = this.route.snapshot.paramMap.get("id");
    this.http.get(`${environment.apiUrl}/admin/services/${id}`).subscribe({
      next: (res) => {
        const s = res.data;
        this.service.set(s);
        const imgs = s.gallery_images || s.gallery || [];
        if (Array.isArray(imgs)) {
          this.gallery.set(imgs.filter((i) => !!i));
        }
      },
      error: () => {
        this.toast.error("Failed to load details");
        this.router.navigate([this.isProduct ? "/admin/products/all" : "/admin/services/all"]);
      },
      complete: () => this.loading.set(false)
    });
  }
  static \u0275fac = function ServiceViewComponent_Factory(t) {
    return new (t || _ServiceViewComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceViewComponent, selectors: [["app-service-view"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "page-header"], [1, "back-btn", 3, "routerLink"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], ["class", "loading-center", 4, "ngIf"], [4, "ngIf"], [1, "loading-center"], [1, "spinner"], [1, "view-header"], [1, "header-left"], [1, "view-title"], [1, "meta-row"], [1, "type-badge"], [1, "badge"], ["class", "badge badge-featured", 4, "ngIf"], ["class", "slug-text", 4, "ngIf"], [1, "btn-edit-main", 3, "routerLink"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "detail-grid"], [1, "detail-card", "image-card"], ["class", "main-image", "alt", "", 3, "src", 4, "ngIf"], ["class", "no-image", 4, "ngIf"], ["class", "gallery-row", 4, "ngIf"], [1, "detail-card"], [1, "detail-row"], [1, "label"], [1, "price-value"], ["class", "detail-row", 4, "ngIf"], ["class", "detail-card", 4, "ngIf"], [1, "badge", "badge-featured"], [1, "slug-text"], ["alt", "", 1, "main-image", 3, "src"], [1, "no-image"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#cbd5e1", "stroke-width", "1.5"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2"], ["cx", "8.5", "cy", "8.5", "r", "1.5"], ["d", "m21 15-5-5L5 21"], [1, "gallery-row"], ["class", "gallery-thumb", "alt", "", 3, "src", 4, "ngFor", "ngForOf"], ["alt", "", 1, "gallery-thumb", 3, "src"], [1, "text-green"], [1, "description-text"], ["target", "_blank", 1, "video-link", 3, "href"], ["points", "5 3 19 12 5 21 5 3"], [1, "attr-list"], ["class", "attr-item", 4, "ngFor", "ngForOf"], [1, "attr-item"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#16a34a", "stroke-width", "2.5", 1, "attr-check"], ["points", "20 6 9 17 4 12"], [1, "spec-table"], ["class", "spec-row", 4, "ngFor", "ngForOf"], [1, "spec-row"], [1, "spec-title"], [1, "spec-value"], [1, "info-list"], ["class", "info-item", 4, "ngFor", "ngForOf"], [1, "info-item"], [1, "faq-list"], ["class", "faq-item", 4, "ngFor", "ngForOf"], [1, "faq-item"], [1, "faq-q"], [1, "faq-num"], [1, "faq-a"], [1, "data-table"], [4, "ngFor", "ngForOf"], ["class", "text-green", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"], ["class", "avg-rating", 4, "ngIf"], [1, "review-list"], ["class", "review-item", 4, "ngFor", "ngForOf"], [1, "avg-rating"], [1, "rating-num"], [1, "rating-stars"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "stroke-width", "2", 4, "ngFor", "ngForOf"], [1, "rating-count"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "stroke-width", "2"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], [1, "review-item"], [1, "review-header"], [1, "review-date"], [1, "review-stars"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "stroke-width", "2", 4, "ngFor", "ngForOf"], ["class", "review-text", 4, "ngIf"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "stroke-width", "2"], [1, "review-text"]], template: function ServiceViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3)(4, "polyline", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, ServiceViewComponent_div_6_Template, 2, 0, "div", 5)(7, ServiceViewComponent_div_7_Template, 60, 45, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.isProduct ? "/admin/products/all" : "/admin/services/all");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" Back to ", ctx.isProduct ? "Products" : "Services", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.service() && !ctx.loading());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: #64748b;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  color: #e31b23;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.view-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.header-left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.view-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 8px;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.type-service[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.type-product[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge-featured[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.slug-text[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n}\n.btn-edit-main[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: 1px solid #e31b23;\n  border-radius: 8px;\n  background: #fff;\n  color: #e31b23;\n  font-weight: 600;\n  font-size: 14px;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.btn-edit-main[_ngcontent-%COMP%]:hover {\n  background: #e31b23;\n  color: #fff;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.detail-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n}\n.detail-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid #f8f9fa;\n  font-size: 14px;\n}\n.detail-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n}\n.price-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a1a2e;\n  font-size: 16px;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.image-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.main-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 320px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n.no-image[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 40px;\n  color: #cbd5e1;\n  font-size: 14px;\n}\n.gallery-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.gallery-thumb[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 2px solid #f1f5f9;\n  cursor: pointer;\n  transition: border-color 0.2s;\n}\n.gallery-thumb[_ngcontent-%COMP%]:hover {\n  border-color: #e31b23;\n}\n.description-text[_ngcontent-%COMP%] {\n  color: #334155;\n  line-height: 1.7;\n  margin: 0;\n  white-space: pre-wrap;\n  font-size: 14px;\n}\n.video-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #2563eb;\n  text-decoration: none;\n  font-size: 14px;\n  word-break: break-all;\n}\n.video-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.attr-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.attr-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #166534;\n}\n.attr-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.attr-check[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.spec-table[_ngcontent-%COMP%] {\n  border: 1px solid #f1f5f9;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.spec-row[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #f1f5f9;\n}\n.spec-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.spec-title[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 14px;\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #374151;\n  font-size: 14px;\n}\n.spec-value[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 14px;\n  color: #334155;\n  font-size: 14px;\n}\n.info-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.info-item[_ngcontent-%COMP%] {\n  padding: 14px;\n  background: #f8f9fb;\n  border-radius: 8px;\n  border: 1px solid #f1f5f9;\n}\n.info-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #1a1a2e;\n  margin-bottom: 4px;\n  font-size: 14px;\n}\n.info-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.faq-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.faq-item[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: #f8f9fb;\n  border-radius: 10px;\n  border: 1px solid #f1f5f9;\n}\n.faq-q[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a2e;\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.faq-num[_ngcontent-%COMP%] {\n  color: #e31b23;\n  margin-right: 4px;\n}\n.faq-a[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f8f9fa;\n}\n.avg-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.rating-num[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.rating-stars[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 2px;\n}\n.rating-count[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n}\n.review-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.review-item[_ngcontent-%COMP%] {\n  padding: 14px;\n  background: #f8f9fb;\n  border-radius: 8px;\n  border: 1px solid #f1f5f9;\n}\n.review-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.review-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a1a2e;\n  font-size: 14px;\n}\n.review-date[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 12px;\n}\n.review-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  margin-bottom: 6px;\n}\n.review-text[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .view-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceViewComponent, { className: "ServiceViewComponent", filePath: "src\\app\\features\\admin\\services\\service-view.component.ts", lineNumber: 280 });
})();
export {
  ServiceViewComponent
};
