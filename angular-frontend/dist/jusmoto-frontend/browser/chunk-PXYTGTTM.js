import {
  ServiceService
} from "./chunk-H3DOCU5Q.js";
import "./chunk-RU4JQJ5O.js";
import "./chunk-OW254BTU.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-DYL6AOBP.js";
import "./chunk-L2KTGN5G.js";
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
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/services/category-services/category-services.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/services", a0];
function CategoryServicesComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementEnd();
  }
}
function CategoryServicesComponent_Conditional_4_For_2_Template(rf, ctx) {
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
function CategoryServicesComponent_Conditional_4_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, " No services found in this category. ");
    \u0275\u0275elementEnd();
  }
}
function CategoryServicesComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, CategoryServicesComponent_Conditional_4_For_2_Template, 12, 8, "div", 5, _forTrack0, false, CategoryServicesComponent_Conditional_4_ForEmpty_3_Template, 2, 0, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.services());
  }
}
var CategoryServicesComponent = class _CategoryServicesComponent {
  route;
  serviceService;
  services = signal([]);
  categoryName = signal("");
  isLoading = signal(true);
  constructor(route, serviceService) {
    this.route = route;
    this.serviceService = serviceService;
  }
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get("slug");
    if (slug) {
      this.loadCategoryServices(slug);
    }
  }
  loadCategoryServices(slug) {
    this.serviceService.getCategoryServices(slug).subscribe({
      next: (response) => {
        this.services.set(response.data || []);
        this.categoryName.set(slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()));
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }
  static \u0275fac = function CategoryServicesComponent_Factory(t) {
    return new (t || _CategoryServicesComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ServiceService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryServicesComponent, selectors: [["app-category-services"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "text-3xl", "font-bold", "mb-6"], [1, "flex", "justify-center", "py-12"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-b-2", "border-blue-600"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "bg-white", "rounded-lg", "shadow-md", "overflow-hidden", "hover:shadow-lg", "transition-shadow"], [1, "col-span-full", "text-center", "py-12", "text-gray-500"], [1, "w-full", "h-48", "object-cover", 3, "src", "alt"], [1, "p-4"], [1, "text-xl", "font-semibold", "mb-2"], [1, "text-gray-600", "mb-4", "line-clamp-2"], [1, "flex", "justify-between", "items-center"], [1, "text-2xl", "font-bold", "text-blue-600"], [1, "bg-blue-600", "text-white", "px-4", "py-2", "rounded", "hover:bg-blue-700", 3, "routerLink"]], template: function CategoryServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, CategoryServicesComponent_Conditional_3_Template, 2, 0, "div", 2)(4, CategoryServicesComponent_Conditional_4_Template, 4, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.categoryName(), " Services");
      \u0275\u0275advance();
      \u0275\u0275conditional(3, ctx.isLoading() ? 3 : 4);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryServicesComponent, { className: "CategoryServicesComponent", filePath: "src\\app\\features\\services\\category-services\\category-services.component.ts", lineNumber: 44 });
})();
export {
  CategoryServicesComponent
};
