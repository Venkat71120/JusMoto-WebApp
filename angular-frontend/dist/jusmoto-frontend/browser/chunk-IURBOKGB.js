import {
  ServiceService
} from "./chunk-KNNWHMYI.js";
import "./chunk-XSC2IEYW.js";
import "./chunk-GUDC7RY7.js";
import {
  RouterLink,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/services/service-list/service-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/services", a0];
function ServiceListComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementEnd();
  }
}
function ServiceListComponent_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "img", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "h3", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 11)(8, "span", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 13);
    \u0275\u0275text(11, " View Details ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", service_r1.image || "/assets/placeholder-service.jpg", \u0275\u0275sanitizeUrl)("alt", service_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", service_r1.price, "");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, service_r1.id));
  }
}
function ServiceListComponent_Conditional_4_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, " No services available at the moment. ");
    \u0275\u0275elementEnd();
  }
}
function ServiceListComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, ServiceListComponent_Conditional_4_For_2_Template, 12, 8, "div", 5, _forTrack0, false, ServiceListComponent_Conditional_4_ForEmpty_3_Template, 2, 0, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.services());
  }
}
var ServiceListComponent = class _ServiceListComponent {
  serviceService;
  services = signal([]);
  isLoading = signal(true);
  constructor(serviceService) {
    this.serviceService = serviceService;
  }
  ngOnInit() {
    this.loadServices();
  }
  loadServices() {
    this.serviceService.getServices().subscribe({
      next: (response) => {
        this.services.set(response.data || []);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }
  static \u0275fac = function ServiceListComponent_Factory(t) {
    return new (t || _ServiceListComponent)(\u0275\u0275directiveInject(ServiceService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceListComponent, selectors: [["app-service-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "text-3xl", "font-bold", "mb-6"], [1, "flex", "justify-center", "py-12"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-b-2", "border-blue-600"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "bg-white", "rounded-lg", "shadow-md", "overflow-hidden", "hover:shadow-lg", "transition-shadow"], [1, "col-span-full", "text-center", "py-12", "text-gray-500"], [1, "w-full", "h-48", "object-cover", 3, "src", "alt"], [1, "p-4"], [1, "text-xl", "font-semibold", "mb-2"], [1, "text-gray-600", "mb-4"], [1, "flex", "justify-between", "items-center"], [1, "text-2xl", "font-bold", "text-blue-600"], [1, "bg-blue-600", "text-white", "px-4", "py-2", "rounded", "hover:bg-blue-700", 3, "routerLink"]], template: function ServiceListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Our Services");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ServiceListComponent_Conditional_3_Template, 2, 0, "div", 2)(4, ServiceListComponent_Conditional_4_Template, 4, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(3, ctx.isLoading() ? 3 : 4);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceListComponent, { className: "ServiceListComponent", filePath: "src\\app\\features\\services\\service-list\\service-list.component.ts", lineNumber: 44 });
})();
export {
  ServiceListComponent
};
//# sourceMappingURL=chunk-IURBOKGB.js.map
