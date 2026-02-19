import {
  ServiceService
} from "./chunk-KNNWHMYI.js";
import "./chunk-XSC2IEYW.js";
import "./chunk-GUDC7RY7.js";
import {
  ActivatedRoute,
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
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/services/service-detail/service-detail.component.ts
function ServiceDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementEnd();
  }
}
function ServiceDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275elementStart(2, "div", 5)(3, "h1", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8)(8, "span", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 10);
    \u0275\u0275text(11, " Add to Cart ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.service().image || "/assets/placeholder-service.jpg", \u0275\u0275sanitizeUrl)("alt", ctx_r0.service().name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.service().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.service().description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r0.service().price, "");
  }
}
function ServiceDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, " Service not found. ");
    \u0275\u0275elementEnd();
  }
}
var ServiceDetailComponent = class _ServiceDetailComponent {
  route;
  serviceService;
  service = signal(null);
  isLoading = signal(true);
  constructor(route, serviceService) {
    this.route = route;
    this.serviceService = serviceService;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.loadService(id);
    }
  }
  loadService(id) {
    this.serviceService.getService(id).subscribe({
      next: (response) => {
        this.service.set(response.data);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }
  static \u0275fac = function ServiceDetailComponent_Factory(t) {
    return new (t || _ServiceDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ServiceService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceDetailComponent, selectors: [["app-service-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "flex", "justify-center", "py-12"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-b-2", "border-blue-600"], [1, "bg-white", "rounded-lg", "shadow-lg", "overflow-hidden"], [1, "w-full", "h-64", "object-cover", 3, "src", "alt"], [1, "p-6"], [1, "text-3xl", "font-bold", "mb-4"], [1, "text-gray-600", "mb-6"], [1, "flex", "justify-between", "items-center"], [1, "text-3xl", "font-bold", "text-blue-600"], [1, "bg-blue-600", "text-white", "px-6", "py-3", "rounded-lg", "hover:bg-blue-700", "text-lg"], [1, "text-center", "py-12", "text-gray-500"]], template: function ServiceDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ServiceDetailComponent_Conditional_1_Template, 2, 0, "div", 1)(2, ServiceDetailComponent_Conditional_2_Template, 12, 5)(3, ServiceDetailComponent_Conditional_3_Template, 2, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(1, ctx.isLoading() ? 1 : ctx.service() ? 2 : 3);
    }
  }, dependencies: [CommonModule, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceDetailComponent, { className: "ServiceDetailComponent", filePath: "src\\app\\features\\services\\service-detail\\service-detail.component.ts", lineNumber: 38 });
})();
export {
  ServiceDetailComponent
};
//# sourceMappingURL=chunk-266IBCM3.js.map
