import {
  SocketService
} from "./chunk-7C4WS7N4.js";
import {
  ToastService
} from "./chunk-CUQ723YT.js";
import {
  AuthService
} from "./chunk-R5YFSE7W.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-6VP7BBRC.js";
import {
  environment
} from "./chunk-YVMT3HBM.js";
import {
  HttpClient
} from "./chunk-NM77QJY5.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/shared/components/toast/toast.component.ts
function ToastComponent_div_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 5);
    \u0275\u0275element(1, "path", 6)(2, "polyline", 7);
    \u0275\u0275elementEnd();
  }
}
function ToastComponent_div_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 5);
    \u0275\u0275element(1, "circle", 8)(2, "line", 9)(3, "line", 10);
    \u0275\u0275elementEnd();
  }
}
function ToastComponent_div_1__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 5);
    \u0275\u0275element(1, "path", 11)(2, "line", 12)(3, "line", 13);
    \u0275\u0275elementEnd();
  }
}
function ToastComponent_div_1__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 5);
    \u0275\u0275element(1, "circle", 8)(2, "line", 14)(3, "line", 15);
    \u0275\u0275elementEnd();
  }
}
function ToastComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function ToastComponent_div_1_Template_div_click_0_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toastService.dismiss(toast_r2.id));
    });
    \u0275\u0275template(1, ToastComponent_div_1__svg_svg_1_Template, 3, 0, "svg", 3)(2, ToastComponent_div_1__svg_svg_2_Template, 4, 0, "svg", 3)(3, ToastComponent_div_1__svg_svg_3_Template, 4, 0, "svg", 3)(4, ToastComponent_div_1__svg_svg_4_Template, 4, 0, "svg", 3);
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", "toast-" + toast_r2.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", toast_r2.type === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", toast_r2.type === "error");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", toast_r2.type === "warning");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", toast_r2.type === "info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.message);
  }
}
var ToastComponent = class _ToastComponent {
  toastService;
  constructor(toastService) {
    this.toastService = toastService;
  }
  static \u0275fac = function ToastComponent_Factory(t) {
    return new (t || _ToastComponent)(\u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "toast-container"], ["class", "toast", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "toast", 3, "click", "ngClass"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "toast-msg"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 11.08V12a10 10 0 11-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], ["d", "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ToastComponent_div_1_Template, 7, 6, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toastService.toasts());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ["\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 10000;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 400px;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 20px;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.toast-success[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.toast-error[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.toast-warning[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.toast-info[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.toast-msg[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "src\\app\\shared\\components\\toast\\toast.component.ts", lineNumber: 31 });
})();

// src/app/features/admin/admin-layout.component.ts
var _c0 = () => ({ exact: true });
function AdminLayoutComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function AdminLayoutComponent_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15);
    \u0275\u0275text(1, "USERS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "li")(3, "a", 54);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_36_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 10);
    \u0275\u0275element(5, "path", 55)(6, "circle", 56)(7, "path", 57)(8, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Users");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "li")(12, "a", 59);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_36_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 10);
    \u0275\u0275element(14, "path", 60)(15, "circle", 61)(16, "line", 62)(17, "line", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Franchise Admins");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "li")(21, "a", 64);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_36_Template_a_click_21_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 10);
    \u0275\u0275element(23, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "Roles");
    \u0275\u0275elementEnd()()();
  }
}
function AdminLayoutComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15);
    \u0275\u0275text(1, "CATALOG");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "li")(3, "a", 66);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_37_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 10);
    \u0275\u0275element(5, "path", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Services");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "li")(9, "a", 68);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_37_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 10);
    \u0275\u0275element(11, "path", 69)(12, "polyline", 70)(13, "line", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Products");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "li")(17, "a", 72);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_37_Template_a_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 10);
    \u0275\u0275element(19, "path", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Categories");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "li")(23, "a", 74);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_37_Template_a_click_23_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 10);
    \u0275\u0275element(25, "path", 75)(26, "line", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Brands");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "li")(30, "a", 77);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_37_Template_a_click_30_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 10);
    \u0275\u0275element(32, "path", 78)(33, "circle", 79)(34, "circle", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "Cars");
    \u0275\u0275elementEnd()()();
  }
}
function AdminLayoutComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15);
    \u0275\u0275text(1, "VEHICLE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "li")(3, "a", 81);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_38_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 10);
    \u0275\u0275element(5, "circle", 82)(6, "path", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Variants");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "li")(10, "a", 84);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_38_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 10);
    \u0275\u0275element(12, "rect", 85)(13, "path", 86)(14, "path", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Engine Types");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "li")(18, "a", 88);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_38_Template_a_click_18_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 10);
    \u0275\u0275element(20, "path", 89)(21, "path", 90)(22, "path", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Fuel Types");
    \u0275\u0275elementEnd()()();
  }
}
function AdminLayoutComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15);
    \u0275\u0275text(1, "MARKETING");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "li")(3, "a", 92);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_39_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 10);
    \u0275\u0275element(5, "path", 93)(6, "path", 94)(7, "path", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Coupons");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "li")(11, "a", 96);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_39_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 10);
    \u0275\u0275element(13, "circle", 97)(14, "circle", 98)(15, "line", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Offers");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "li")(19, "a", 100);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_39_Template_a_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 10);
    \u0275\u0275element(21, "rect", 101)(22, "path", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Sliders");
    \u0275\u0275elementEnd()()();
  }
}
function AdminLayoutComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15);
    \u0275\u0275text(1, "LOCATIONS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "li")(3, "a", 103);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_54_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 10);
    \u0275\u0275element(5, "circle", 104)(6, "path", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Outlet Locations");
    \u0275\u0275elementEnd()()();
  }
}
function AdminLayoutComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15);
    \u0275\u0275text(1, "REPORTS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "li")(3, "a", 106);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_55_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 10);
    \u0275\u0275element(5, "line", 107)(6, "line", 108)(7, "line", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Revenue Report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "li")(11, "a", 110);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_55_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 10);
    \u0275\u0275element(13, "path", 111)(14, "path", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Order Report");
    \u0275\u0275elementEnd()()();
  }
}
function AdminLayoutComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15);
    \u0275\u0275text(1, "CONTENT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "li")(3, "a", 113);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_56_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 10);
    \u0275\u0275element(5, "path", 40)(6, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Notifications");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "li")(10, "a", 114);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_56_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 10);
    \u0275\u0275element(12, "rect", 115)(13, "circle", 116)(14, "polyline", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Media Library");
    \u0275\u0275elementEnd()()();
  }
}
function AdminLayoutComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.unreadCount() > 99 ? "99+" : ctx_r1.unreadCount());
  }
}
function AdminLayoutComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 118);
    \u0275\u0275listener("error", function AdminLayoutComponent_Conditional_84_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.imageError.set(true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.adminImage(), \u0275\u0275sanitizeUrl);
  }
}
function AdminLayoutComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.adminInitials());
  }
}
function AdminLayoutComponent_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "a", 120);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_93_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeProfileDropdown());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 121);
    \u0275\u0275element(3, "path", 122)(4, "circle", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Profile");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 124);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_93_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeProfileDropdown());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 121);
    \u0275\u0275element(9, "circle", 82)(10, "path", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "div", 126);
    \u0275\u0275elementStart(14, "a", 127);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_93_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 121);
    \u0275\u0275element(16, "path", 29)(17, "polyline", 30)(18, "line", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Logout");
    \u0275\u0275elementEnd()()();
  }
}
var AdminLayoutComponent = class _AdminLayoutComponent {
  authService;
  router;
  http;
  socketService;
  adminName = signal("Admin");
  adminImage = signal(null);
  imageError = signal(false);
  adminInitials = signal("A");
  adminRoleDisplay = signal("Admin");
  isSuperAdmin = signal(false);
  permissions = signal([]);
  sidebarOpen = signal(false);
  profileDropdownOpen = signal(false);
  unreadCount = signal(0);
  notifSub;
  constructor(authService, router, http, socketService) {
    this.authService = authService;
    this.router = router;
    this.http = http;
    this.socketService = socketService;
  }
  ngOnInit() {
    const admin = this.authService.currentAdmin;
    if (admin) {
      this.adminName.set(admin.name);
      this.adminImage.set(admin.image || null);
      this.adminInitials.set(this.getInitials(admin.name));
      this.adminRoleDisplay.set(this.formatRole(admin.role));
      this.isSuperAdmin.set(!admin.is_franchise);
      this.permissions.set(admin.permissions || []);
      this.http.get(`${environment.apiUrl}/notifications/unread-count`).subscribe({
        next: (res) => this.unreadCount.set(res.unread_count || 0),
        error: () => {
        }
      });
      this.socketService.joinNotifications("Admin", admin.id);
      this.notifSub = this.socketService.onNewNotification().subscribe(() => {
        this.unreadCount.update((c) => c + 1);
      });
    }
  }
  ngOnDestroy() {
    this.notifSub?.unsubscribe();
  }
  hasPermission(permissionName) {
    if (this.isSuperAdmin())
      return true;
    return this.permissions().includes(permissionName);
  }
  toggleSidebar() {
    this.sidebarOpen.update((v) => !v);
  }
  closeSidebar() {
    this.sidebarOpen.set(false);
  }
  toggleProfileDropdown(event) {
    event.stopPropagation();
    this.profileDropdownOpen.update((v) => !v);
  }
  closeProfileDropdown() {
    this.profileDropdownOpen.set(false);
  }
  onDocumentClick() {
    this.profileDropdownOpen.set(false);
  }
  logout() {
    this.closeProfileDropdown();
    this.authService.adminLogout();
  }
  getInitials(name) {
    if (!name)
      return "A";
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0].substring(0, 2).toUpperCase();
  }
  formatRole(role) {
    if (!role)
      return "Admin";
    return role.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }
  static \u0275fac = function AdminLayoutComponent_Factory(t) {
    return new (t || _AdminLayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(SocketService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function AdminLayoutComponent_click_HostBindingHandler() {
        return ctx.onDocumentClick();
      }, false, \u0275\u0275resolveDocument);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 97, vars: 19, consts: [[1, "panel-container"], ["class", "sidebar-overlay", 3, "click", 4, "ngIf"], [1, "sidebar"], [1, "sidebar-header"], ["routerLink", "/admin/dashboard", 1, "logo"], ["src", "assets/images/logo_redefening.png", "alt", "JusMoto", 1, "logo-img"], [1, "close-btn", 3, "click"], [1, "sidebar-nav"], [1, "nav-list"], ["routerLink", "/admin/dashboard", "routerLinkActive", "active", 1, "nav-item", 3, "click", "routerLinkActiveOptions"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], [1, "nav-section"], ["routerLink", "/admin/orders/all-orders", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "1"], ["d", "M9 12h6M9 16h6"], ["routerLink", "/admin/orders/refunded-order-list", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["points", "1 4 1 10 7 10"], ["d", "M3.51 15a9 9 0 105.64-12.36L1 10"], ["routerLink", "/admin/support-ticket/tickets", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"], ["routerLink", "/admin/review/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], [1, "nav-list", "nav-bottom"], [1, "nav-item", "logout-btn", 3, "click"], ["d", "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "main-content"], [1, "main-header"], [1, "header-left"], [1, "menu-toggle", 3, "click"], [1, "breadcrumb-area"], [1, "breadcrumb-label"], [1, "header-right"], ["routerLink", "/admin/notification/all", 1, "header-icon-btn", "notification-btn"], ["d", "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 01-3.46 0"], [1, "notification-badge"], [1, "profile-section", 3, "click"], [1, "profile-trigger"], ["alt", "Admin avatar", 1, "profile-avatar", 3, "src"], [1, "profile-info"], [1, "profile-name"], [1, "profile-role"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "profile-chevron"], ["d", "M6 9l6 6 6-6"], [1, "profile-dropdown"], [1, "page-content"], [1, "sidebar-overlay", 3, "click"], ["routerLink", "/admin/user/all-users", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 00-3-3.87"], ["d", "M16 3.13a4 4 0 010 7.75"], ["routerLink", "/admin/staff/all-staff", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "8.5", "cy", "7", "r", "4"], ["x1", "20", "y1", "8", "x2", "20", "y2", "14"], ["x1", "23", "y1", "11", "x2", "17", "y2", "11"], ["routerLink", "/admin/manage/permission/role/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["routerLink", "/admin/services/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"], ["routerLink", "/admin/products/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"], ["points", "3.27 6.96 12 12.01 20.73 6.96"], ["x1", "12", "y1", "22.08", "x2", "12", "y2", "12"], ["routerLink", "/admin/category/index", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"], ["routerLink", "/admin/brand/list", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"], ["x1", "7", "y1", "7", "x2", "7.01", "y2", "7"], ["routerLink", "/admin/car/list", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M5 17h2m10 0h2M2 9l2-4h16l2 4M2 9h20M2 9v8a1 1 0 001 1h1m16 0h1a1 1 0 001-1V9"], ["cx", "7", "cy", "17", "r", "2"], ["cx", "17", "cy", "17", "r", "2"], ["routerLink", "/admin/variant/list", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"], ["routerLink", "/admin/engine/list", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["x", "4", "y", "4", "width", "16", "height", "16", "rx", "2"], ["d", "M9 9h6v6H9z"], ["d", "M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"], ["routerLink", "/admin/fual/list", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M3 22h12V6L9 2 3 6v16z"], ["d", "M15 22h3a2 2 0 002-2v-6l-3-3"], ["d", "M6 12h6M6 16h6"], ["routerLink", "/admin/coupons/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4"], ["d", "M4 6v12c0 1.1.9 2 2 2h14v-4"], ["d", "M18 12a2 2 0 00-2 2c0 1.1.9 2 2 2h4v-4h-4z"], ["routerLink", "/admin/offer/list", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["cx", "9", "cy", "9", "r", "2"], ["cx", "15", "cy", "15", "r", "2"], ["x1", "7", "y1", "17", "x2", "17", "y2", "7"], ["routerLink", "/admin/slider/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["x", "2", "y", "3", "width", "20", "height", "14", "rx", "2"], ["d", "M8 21h8M12 17v4"], ["routerLink", "/admin/outletAddress/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["cx", "12", "cy", "10", "r", "3"], ["d", "M12 21.7C17.3 17 20 13 20 10a8 8 0 10-16 0c0 3 2.7 7 8 11.7z"], ["routerLink", "/admin/reports/revenue", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["x1", "12", "y1", "20", "x2", "12", "y2", "10"], ["x1", "18", "y1", "20", "x2", "18", "y2", "4"], ["x1", "6", "y1", "20", "x2", "6", "y2", "16"], ["routerLink", "/admin/reports/orders", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M21.21 15.89A10 10 0 118 2.83"], ["d", "M22 12A10 10 0 0012 2v10z"], ["routerLink", "/admin/notification/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["routerLink", "/admin/media/all", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2"], ["cx", "8.5", "cy", "8.5", "r", "1.5"], ["points", "21 15 16 10 5 21"], ["alt", "Admin avatar", 1, "profile-avatar", 3, "error", "src"], [1, "profile-avatar-initials"], ["routerLink", "/admin/profile", 1, "dropdown-item", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["routerLink", "/admin/settings/general", 1, "dropdown-item", 3, "click"], ["d", "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"], [1, "dropdown-separator"], [1, "dropdown-item", "dropdown-logout", 3, "click"]], template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, AdminLayoutComponent_div_1_Template, 1, 0, "div", 1);
      \u0275\u0275elementStart(2, "aside", 2)(3, "div", 3)(4, "a", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 6);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_6_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275text(7, "\u2715");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "nav", 7)(9, "ul", 8)(10, "li")(11, "a", 9);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_11_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 10);
      \u0275\u0275element(13, "rect", 11)(14, "rect", 12)(15, "rect", 13)(16, "rect", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18, "Dashboard");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "li", 15);
      \u0275\u0275text(20, "ORDERS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "li")(22, "a", 16);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_22_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(23, "svg", 10);
      \u0275\u0275element(24, "path", 17)(25, "rect", 18)(26, "path", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Orders");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "li")(30, "a", 20);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_30_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(31, "svg", 10);
      \u0275\u0275element(32, "polyline", 21)(33, "path", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35, "Refunded Orders");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(36, AdminLayoutComponent_Conditional_36_Template, 26, 0)(37, AdminLayoutComponent_Conditional_37_Template, 37, 0)(38, AdminLayoutComponent_Conditional_38_Template, 25, 0)(39, AdminLayoutComponent_Conditional_39_Template, 25, 0);
      \u0275\u0275elementStart(40, "li", 15);
      \u0275\u0275text(41, "SUPPORT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "li")(43, "a", 23);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_43_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(44, "svg", 10);
      \u0275\u0275element(45, "path", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(46, "span");
      \u0275\u0275text(47, "Service Requests");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "li")(49, "a", 25);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_49_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(50, "svg", 10);
      \u0275\u0275element(51, "polygon", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(52, "span");
      \u0275\u0275text(53, "Reviews");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(54, AdminLayoutComponent_Conditional_54_Template, 9, 0)(55, AdminLayoutComponent_Conditional_55_Template, 17, 0)(56, AdminLayoutComponent_Conditional_56_Template, 17, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "ul", 27)(58, "li")(59, "a", 28);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_59_listener() {
        return ctx.logout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(60, "svg", 10);
      \u0275\u0275element(61, "path", 29)(62, "polyline", 30)(63, "line", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(64, "span");
      \u0275\u0275text(65, "Log Out");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(66, "main", 32)(67, "header", 33)(68, "div", 34)(69, "button", 35);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_69_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(70, "span")(71, "span")(72, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 36)(74, "span", 37);
      \u0275\u0275text(75, "Admin Panel");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 38)(77, "a", 39);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(78, "svg", 10);
      \u0275\u0275element(79, "path", 40)(80, "path", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275template(81, AdminLayoutComponent_Conditional_81_Template, 2, 1, "span", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(82, "div", 43);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_div_click_82_listener($event) {
        return ctx.toggleProfileDropdown($event);
      });
      \u0275\u0275elementStart(83, "div", 44);
      \u0275\u0275template(84, AdminLayoutComponent_Conditional_84_Template, 1, 1, "img", 45)(85, AdminLayoutComponent_Conditional_85_Template, 2, 1);
      \u0275\u0275elementStart(86, "div", 46)(87, "span", 47);
      \u0275\u0275text(88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "span", 48);
      \u0275\u0275text(90);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(91, "svg", 49);
      \u0275\u0275element(92, "path", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(93, AdminLayoutComponent_Conditional_93_Template, 21, 0, "div", 51);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(94, "div", 52);
      \u0275\u0275element(95, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(96, "app-toast");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sidebarOpen());
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.sidebarOpen());
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(18, _c0));
      \u0275\u0275advance(25);
      \u0275\u0275conditional(36, ctx.hasPermission("users.view") ? 36 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(37, ctx.hasPermission("catalog.view") ? 37 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(38, ctx.hasPermission("vehicle.view") ? 38 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(39, ctx.hasPermission("marketing.view") ? 39 : -1);
      \u0275\u0275advance(15);
      \u0275\u0275conditional(54, ctx.hasPermission("locations.view") ? 54 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(55, ctx.hasPermission("reports.view") ? 55 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(56, ctx.hasPermission("content.view") ? 56 : -1);
      \u0275\u0275advance(25);
      \u0275\u0275conditional(81, ctx.unreadCount() > 0 ? 81 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(84, ctx.adminImage() && !ctx.imageError() ? 84 : 85);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.adminName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.adminRoleDisplay());
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.profileDropdownOpen());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(93, ctx.profileDropdownOpen() ? 93 : -1);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterOutlet, RouterLink, RouterLinkActive, ToastComponent], styles: [`

*[_ngcontent-%COMP%] {
  box-sizing: border-box;
}
.panel-container[_ngcontent-%COMP%] {
  display: flex;
  min-height: 100vh;
  background: #fff5f5;
}
.sidebar-overlay[_ngcontent-%COMP%] {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
}
.sidebar[_ngcontent-%COMP%] {
  width: 260px;
  background: #0a0c0d;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  z-index: 100;
  transition: transform 0.3s ease;
}
.sidebar-header[_ngcontent-%COMP%] {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.close-btn[_ngcontent-%COMP%] {
  display: none;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #94a3b8;
}
.logo[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.logo-img[_ngcontent-%COMP%] {
  height: 32px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
}
.sidebar-nav[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
}
.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 4px;
}
.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: transparent;
}
.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
}
.nav-list[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0 10px;
  margin: 0;
}
.nav-bottom[_ngcontent-%COMP%] {
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 15px;
}
.nav-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 15px;
  color: #94a3b8;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 2px;
  transition: all 0.2s;
  cursor: pointer;
  font-size: 14px;
}
.nav-item[_ngcontent-%COMP%]:hover {
  background: rgba(227, 27, 35, 0.1);
  color: #ff6b6b;
}
.nav-item.active[_ngcontent-%COMP%] {
  background: #e31b23;
  color: #fff;
}
.nav-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
.nav-section[_ngcontent-%COMP%] {
  font-size: 10px;
  font-weight: 600;
  color: #64748b;
  letter-spacing: 0.08em;
  padding: 16px 15px 6px;
  text-transform: uppercase;
}
.logout-btn[_ngcontent-%COMP%] {
  color: #f87171 !important;
}
.logout-btn[_ngcontent-%COMP%]:hover {
  background: rgba(248, 113, 113, 0.1) !important;
}
.main-content[_ngcontent-%COMP%] {
  flex: 1;
  margin-left: 260px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-header[_ngcontent-%COMP%] {
  background: #fff;
  padding: 0 25px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 50;
}
.header-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
}
.menu-toggle[_ngcontent-%COMP%] {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}
.menu-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  width: 25px;
  height: 2px;
  background: #333;
  border-radius: 2px;
  transition: 0.3s;
}
.breadcrumb-area[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}
.breadcrumb-label[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  color: #1e293b;
}
.header-right[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.header-icon-btn[_ngcontent-%COMP%] {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  cursor: pointer;
  color: #64748b;
  transition: all 0.2s;
}
.header-icon-btn[_ngcontent-%COMP%]:hover {
  background: #f8fafc;
  color: #1e293b;
  border-color: #cbd5e1;
}
.notification-badge[_ngcontent-%COMP%] {
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 18px;
  height: 18px;
  background: #e31b23;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border: 2px solid #fff;
  line-height: 1;
}
.notification-btn[_ngcontent-%COMP%] {
  text-decoration: none;
}
.profile-section[_ngcontent-%COMP%] {
  position: relative;
}
.profile-trigger[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s;
  border: 1px solid transparent;
}
.profile-trigger[_ngcontent-%COMP%]:hover {
  background: #f8fafc;
  border-color: #e5e7eb;
}
.profile-avatar[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  object-fit: cover;
}
.profile-avatar-initials[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #e31b23;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  flex-shrink: 0;
}
.profile-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}
.profile-name[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 600;
  color: #1e293b;
  white-space: nowrap;
}
.profile-role[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #94a3b8;
  text-transform: capitalize;
  white-space: nowrap;
}
.profile-chevron[_ngcontent-%COMP%] {
  color: #94a3b8;
  transition: transform 0.2s;
  flex-shrink: 0;
}
.profile-chevron.open[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.profile-dropdown[_ngcontent-%COMP%] {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 200px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
  padding: 6px;
  z-index: 200;
  animation: _ngcontent-%COMP%_dropdownIn 0.15s ease-out;
}
@keyframes _ngcontent-%COMP%_dropdownIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.dropdown-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  color: #334155;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s;
}
.dropdown-item[_ngcontent-%COMP%]:hover {
  background: #f1f5f9;
}
.dropdown-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: #64748b;
  flex-shrink: 0;
}
.dropdown-separator[_ngcontent-%COMP%] {
  height: 1px;
  background: #e5e7eb;
  margin: 4px 6px;
}
.dropdown-logout[_ngcontent-%COMP%] {
  color: #ef4444 !important;
}
.dropdown-logout[_ngcontent-%COMP%]:hover {
  background: #fef2f2 !important;
}
.dropdown-logout[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: #ef4444;
}
.page-content[_ngcontent-%COMP%] {
  padding: 25px;
  flex: 1;
}
[_nghost-%COMP%]     select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding: 9px 36px 9px 14px;
  border: 1.5px solid #d1d5db;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
  color: #1e293b;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-family: inherit;
}
[_nghost-%COMP%]     select:hover {
  border-color: #a1a1aa;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}
[_nghost-%COMP%]     select:focus {
  border-color: #e31b23;
  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);
  outline: none;
}
[_nghost-%COMP%]     select option {
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 500;
  color: #1e293b;
  background: #fff;
}
[_nghost-%COMP%]     select option:checked {
  background: #fee2e2;
  color: #e31b23;
}
[_nghost-%COMP%]     select option:hover {
  background: #f1f5f9;
}
@media (max-width: 991px) {
  .sidebar[_ngcontent-%COMP%] {
    transform: translateX(-100%);
  }
  .sidebar.open[_ngcontent-%COMP%] {
    transform: translateX(0);
  }
  .sidebar-overlay[_ngcontent-%COMP%] {
    display: block;
  }
  .close-btn[_ngcontent-%COMP%] {
    display: block;
  }
  .main-content[_ngcontent-%COMP%] {
    margin-left: 0;
  }
  .menu-toggle[_ngcontent-%COMP%] {
    display: flex;
  }
  .profile-info[_ngcontent-%COMP%] {
    display: none;
  }
  .profile-chevron[_ngcontent-%COMP%] {
    display: none;
  }
}`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src\\app\\features\\admin\\admin-layout.component.ts", lineNumber: 414 });
})();

// src/app/features/admin/admin.routes.ts
var adminRoutes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      // Dashboard
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-HZRWPO53.js").then((m) => m.AdminDashboardComponent)
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      // Users
      { path: "user/all-users", loadComponent: () => import("./chunk-HQTEIAT3.js").then((m) => m.UserListComponent) },
      { path: "user/details/:id", loadComponent: () => import("./chunk-XFQHUEHF.js").then((m) => m.UserDetailComponent) },
      // Orders
      { path: "orders/all-orders", loadComponent: () => import("./chunk-TELKBU7V.js").then((m) => m.OrderListComponent) },
      { path: "orders/details/:id", loadComponent: () => import("./chunk-YX3HHGO2.js").then((m) => m.OrderDetailComponent) },
      { path: "orders/refunded-order-list", loadComponent: () => import("./chunk-V3ABID7L.js").then((m) => m.RefundListComponent) },
      // Services (type=0)
      { path: "services/all", loadComponent: () => import("./chunk-SI4TNOK5.js").then((m) => m.ServiceListComponent), data: { type: 0 } },
      { path: "services/add", loadComponent: () => import("./chunk-IRIQCGSC.js").then((m) => m.ServiceFormComponent), data: { type: 0 } },
      { path: "services/edit-service/:id", loadComponent: () => import("./chunk-IRIQCGSC.js").then((m) => m.ServiceFormComponent), data: { type: 0 } },
      { path: "services/view/:id", loadComponent: () => import("./chunk-A4EMU7XM.js").then((m) => m.ServiceViewComponent), data: { type: 0 } },
      // Products (type=1)
      { path: "products/all", loadComponent: () => import("./chunk-SI4TNOK5.js").then((m) => m.ServiceListComponent), data: { type: 1 } },
      { path: "products/add", loadComponent: () => import("./chunk-IRIQCGSC.js").then((m) => m.ServiceFormComponent), data: { type: 1 } },
      { path: "products/edit/:id", loadComponent: () => import("./chunk-IRIQCGSC.js").then((m) => m.ServiceFormComponent), data: { type: 1 } },
      { path: "products/view/:id", loadComponent: () => import("./chunk-A4EMU7XM.js").then((m) => m.ServiceViewComponent), data: { type: 1 } },
      // Categories
      { path: "category/index", loadComponent: () => import("./chunk-4BW53JGK.js").then((m) => m.CategoryListComponent) },
      { path: "category/add-new-category", loadComponent: () => import("./chunk-LW74POZ5.js").then((m) => m.CategoryFormComponent) },
      { path: "category/edit-category/:id", loadComponent: () => import("./chunk-LW74POZ5.js").then((m) => m.CategoryFormComponent) },
      // Brands
      { path: "brand/list", loadComponent: () => import("./chunk-LJ6Z33ZZ.js").then((m) => m.BrandListComponent) },
      // Cars
      { path: "car/list", loadComponent: () => import("./chunk-ETCGAWBX.js").then((m) => m.CarListComponent) },
      { path: "car/add", loadComponent: () => import("./chunk-777VZC7P.js").then((m) => m.CarFormComponent) },
      { path: "car/edit-car/:id", loadComponent: () => import("./chunk-777VZC7P.js").then((m) => m.CarFormComponent) },
      // Variants
      { path: "variant/list", loadComponent: () => import("./chunk-BWJJHDA7.js").then((m) => m.VariantListComponent) },
      { path: "variant/add", loadComponent: () => import("./chunk-Z6ST6SCP.js").then((m) => m.VariantFormComponent) },
      { path: "variant/edit/:id", loadComponent: () => import("./chunk-Z6ST6SCP.js").then((m) => m.VariantFormComponent) },
      // Engine Types
      { path: "engine/list", loadComponent: () => import("./chunk-PZYJNPX7.js").then((m) => m.EngineTypeListComponent) },
      // Fuel Types
      { path: "fual/list", loadComponent: () => import("./chunk-L6CBXET3.js").then((m) => m.FuelTypeListComponent) },
      // Coupons
      { path: "coupons/all", loadComponent: () => import("./chunk-IDGJWCHM.js").then((m) => m.CouponListComponent) },
      { path: "coupons/new", loadComponent: () => import("./chunk-F7JZ2LM4.js").then((m) => m.CouponFormComponent) },
      { path: "coupons/edit/:id", loadComponent: () => import("./chunk-F7JZ2LM4.js").then((m) => m.CouponFormComponent) },
      // Offers
      { path: "offer/list", loadComponent: () => import("./chunk-CMWTTZXI.js").then((m) => m.OfferListComponent) },
      { path: "offer/add", loadComponent: () => import("./chunk-WGZHIWCE.js").then((m) => m.OfferFormComponent) },
      { path: "offer/edit-offer/:id", loadComponent: () => import("./chunk-WGZHIWCE.js").then((m) => m.OfferFormComponent) },
      // Sliders
      { path: "slider/all", loadComponent: () => import("./chunk-6UYH6EJM.js").then((m) => m.SliderListComponent) },
      { path: "slider/add", loadComponent: () => import("./chunk-GJXHMCNP.js").then((m) => m.SliderFormComponent) },
      { path: "slider/edit/:id", loadComponent: () => import("./chunk-GJXHMCNP.js").then((m) => m.SliderFormComponent) },
      // Support Tickets
      { path: "support-ticket/tickets", loadComponent: () => import("./chunk-W67G2J52.js").then((m) => m.TicketListComponent) },
      { path: "support-ticket/details/:id", loadComponent: () => import("./chunk-VJM5Z4IG.js").then((m) => m.TicketDetailComponent) },
      { path: "support-ticket/department", loadComponent: () => import("./chunk-B4EDMX66.js").then((m) => m.DepartmentListComponent) },
      // Staff / Admins
      { path: "staff/all-staff", loadComponent: () => import("./chunk-EPQ7U34P.js").then((m) => m.StaffListComponent) },
      { path: "staff/add-staff", loadComponent: () => import("./chunk-CF2UBHOH.js").then((m) => m.StaffFormComponent) },
      { path: "staff/edit-user-info/:id", loadComponent: () => import("./chunk-CF2UBHOH.js").then((m) => m.StaffFormComponent) },
      // Roles & Permissions
      { path: "manage/permission/role/all", loadComponent: () => import("./chunk-VJ4EGRRQ.js").then((m) => m.RoleListComponent) },
      { path: "manage/permission/role/add", loadComponent: () => import("./chunk-TGUYYQKM.js").then((m) => m.RoleFormComponent) },
      { path: "manage/permission/role/edit/:id", loadComponent: () => import("./chunk-TGUYYQKM.js").then((m) => m.RoleFormComponent) },
      // Reports
      { path: "reports/revenue", loadComponent: () => import("./chunk-DHWX4IST.js").then((m) => m.RevenueReportComponent) },
      { path: "reports/orders", loadComponent: () => import("./chunk-EHW3YGBJ.js").then((m) => m.OrderReportComponent) },
      // Profile (redirect to settings)
      { path: "profile", redirectTo: "settings/general", pathMatch: "full" },
      // Settings
      { path: "settings/general", loadComponent: () => import("./chunk-36MMVZOA.js").then((m) => m.GeneralSettingsComponent) },
      // Outlet Locations
      { path: "outletAddress/all", loadComponent: () => import("./chunk-7YNNU6EI.js").then((m) => m.OutletLocationListComponent) },
      { path: "outletAddress/add", loadComponent: () => import("./chunk-BLYM3HPV.js").then((m) => m.OutletLocationFormComponent) },
      { path: "outletAddress/edit-outlet/:id", loadComponent: () => import("./chunk-BLYM3HPV.js").then((m) => m.OutletLocationFormComponent) },
      // Reviews
      { path: "review/all", loadComponent: () => import("./chunk-IKCI7435.js").then((m) => m.ReviewListComponent) },
      // Notifications
      { path: "notification/all", loadComponent: () => import("./chunk-323KB2AW.js").then((m) => m.NotificationListComponent) },
      // Wallet
      { path: "wallet/manage", loadComponent: () => import("./chunk-OXP3ZG2Z.js").then((m) => m.WalletManagementComponent) },
      // Media Library
      { path: "media/all", loadComponent: () => import("./chunk-SKD5KCP4.js").then((m) => m.MediaLibraryComponent) },
      // Catch-all: redirect unknown admin routes to dashboard
      { path: "**", redirectTo: "dashboard" }
    ]
  }
];
export {
  adminRoutes
};
