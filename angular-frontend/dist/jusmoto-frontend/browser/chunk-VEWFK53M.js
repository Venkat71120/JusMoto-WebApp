import {
  RouterLink,
  RouterModule
} from "./chunk-DYL6AOBP.js";
import "./chunk-L2KTGN5G.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/not-found/not-found.component.ts
var NotFoundComponent = class _NotFoundComponent {
  static \u0275fac = function NotFoundComponent_Factory(t) {
    return new (t || _NotFoundComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 0, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-gray-100"], [1, "text-center"], [1, "text-9xl", "font-bold", "text-gray-300"], [1, "text-3xl", "font-bold", "text-gray-800", "mt-4"], [1, "text-gray-600", "mt-2"], ["routerLink", "/", 1, "inline-block", "mt-6", "bg-blue-600", "text-white", "px-6", "py-3", "rounded-lg", "hover:bg-blue-700"]], template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "404");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2", 3);
      \u0275\u0275text(5, "Page Not Found");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "The page you're looking for doesn't exist or has been moved.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, " Go to Home ");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src\\app\\features\\not-found\\not-found.component.ts", lineNumber: 22 });
})();
export {
  NotFoundComponent
};
