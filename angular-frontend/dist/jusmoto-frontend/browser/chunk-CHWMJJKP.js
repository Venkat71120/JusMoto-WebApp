import {
  ServiceService
} from "./chunk-H3DOCU5Q.js";
import "./chunk-RU4JQJ5O.js";
import {
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardImage,
  MatCardModule,
  MatIcon,
  MatIconModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-RGWL25OH.js";
import "./chunk-OW254BTU.js";
import {
  RouterLink
} from "./chunk-DYL6AOBP.js";
import "./chunk-L2KTGN5G.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/home/home.component.ts
var _c0 = () => ["/services"];
var _c1 = (a0) => ({ category: a0 });
var _c2 = (a0) => ["/services", a0];
function HomeComponent_div_18_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 21);
    \u0275\u0275element(1, "img", 22);
    \u0275\u0275elementStart(2, "mat-card-content")(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c0))("queryParams", \u0275\u0275pureFunction1(7, _c1, category_r1.id));
    \u0275\u0275advance();
    \u0275\u0275property("src", category_r1.image || "assets/images/default-category.jpg", \u0275\u0275sanitizeUrl)("alt", category_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r1.description || "Explore our services");
  }
}
function HomeComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, HomeComponent_div_18_mat_card_1_Template, 7, 9, "mat-card", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.categories);
  }
}
function HomeComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_section_54_mat_card_5_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u20B9", service_r3.original_price, " ");
  }
}
function HomeComponent_section_54_mat_card_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 30);
    \u0275\u0275element(1, "img", 31);
    \u0275\u0275elementStart(2, "mat-card-content")(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33)(8, "span", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, HomeComponent_section_54_mat_card_5_span_10_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-card-actions")(12, "button", 36);
    \u0275\u0275text(13, "View Details");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c2, service_r3.slug || service_r3.id));
    \u0275\u0275advance();
    \u0275\u0275property("src", service_r3.image || "assets/images/default-service.jpg", \u0275\u0275sanitizeUrl)("alt", service_r3.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r3.short_description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", service_r3.price, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", service_r3.original_price && service_r3.original_price > service_r3.price);
  }
}
function HomeComponent_section_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 25)(1, "div", 8)(2, "h2", 9);
    \u0275\u0275text(3, "Popular Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26);
    \u0275\u0275template(5, HomeComponent_section_54_mat_card_5_Template, 14, 9, "mat-card", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28)(7, "button", 29);
    \u0275\u0275text(8, "View All Services");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.popularServices);
  }
}
var HomeComponent = class _HomeComponent {
  serviceService;
  categories = [];
  popularServices = [];
  loading = true;
  constructor(serviceService) {
    this.serviceService = serviceService;
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.serviceService.getCategories().subscribe({
      next: (response) => {
        if (response.success) {
          this.categories = response.data.slice(0, 6);
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    this.serviceService.getFeaturedServices(8).subscribe({
      next: (response) => {
        if (response.success) {
          this.popularServices = response.data;
        }
      }
    });
  }
  static \u0275fac = function HomeComponent_Factory(t) {
    return new (t || _HomeComponent)(\u0275\u0275directiveInject(ServiceService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 63, vars: 3, consts: [["loadingTemplate", ""], [1, "home-page"], [1, "hero"], [1, "hero-content"], [1, "hero-actions"], ["mat-raised-button", "", "color", "primary", "routerLink", "/services", 1, "hero-btn"], ["mat-stroked-button", "", "routerLink", "/challan", 1, "hero-btn-outline"], [1, "section", "categories-section"], [1, "container"], [1, "section-title"], [1, "section-subtitle"], ["class", "categories-grid", 4, "ngIf", "ngIfElse"], [1, "section", "features-section"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon"], ["class", "section services-section", 4, "ngIf"], [1, "cta-section"], ["mat-raised-button", "", "color", "accent", "routerLink", "/services", 1, "cta-btn"], [1, "categories-grid"], ["class", "category-card", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [1, "category-card", 3, "routerLink", "queryParams"], [1, "category-image", 3, "src", "alt"], [1, "loading-container"], ["diameter", "40"], [1, "section", "services-section"], [1, "services-grid"], ["class", "service-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "view-all-container"], ["mat-raised-button", "", "color", "primary", "routerLink", "/services"], [1, "service-card", 3, "routerLink"], ["mat-card-image", "", 3, "src", "alt"], [1, "service-description"], [1, "service-price"], [1, "price"], ["class", "original-price", 4, "ngIf"], ["mat-button", "", "color", "primary"], [1, "original-price"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "section", 2)(2, "div", 3)(3, "h1");
      \u0275\u0275text(4, "Premium Car Services at Your Doorstep");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Book car maintenance, repairs, and more with India's trusted car service platform");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275text(9, " Explore Services ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 6);
      \u0275\u0275text(11, " Check Traffic Challan ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "section", 7)(13, "div", 8)(14, "h2", 9);
      \u0275\u0275text(15, "Our Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 10);
      \u0275\u0275text(17, "Choose from a wide range of car services");
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, HomeComponent_div_18_Template, 2, 1, "div", 11)(19, HomeComponent_ng_template_19_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "section", 12)(22, "div", 8)(23, "h2", 9);
      \u0275\u0275text(24, "Why Choose Us?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 13)(26, "div", 14)(27, "mat-icon", 15);
      \u0275\u0275text(28, "verified");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "h3");
      \u0275\u0275text(30, "Certified Technicians");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p");
      \u0275\u0275text(32, "All our technicians are certified and experienced professionals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 14)(34, "mat-icon", 15);
      \u0275\u0275text(35, "location_on");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "h3");
      \u0275\u0275text(37, "Doorstep Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p");
      \u0275\u0275text(39, "We come to your location for convenient car servicing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 14)(41, "mat-icon", 15);
      \u0275\u0275text(42, "security");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "h3");
      \u0275\u0275text(44, "Genuine Parts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p");
      \u0275\u0275text(46, "We use only genuine OEM parts for all repairs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 14)(48, "mat-icon", 15);
      \u0275\u0275text(49, "support_agent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "h3");
      \u0275\u0275text(51, "24/7 Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p");
      \u0275\u0275text(53, "Round-the-clock customer support for all your queries");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(54, HomeComponent_section_54_Template, 9, 1, "section", 16);
      \u0275\u0275elementStart(55, "section", 17)(56, "div", 8)(57, "h2");
      \u0275\u0275text(58, "Ready to get started?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p");
      \u0275\u0275text(60, "Book your car service today and experience the difference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "button", 18);
      \u0275\u0275text(62, " Book Now ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const loadingTemplate_r4 = \u0275\u0275reference(20);
      \u0275\u0275advance(18);
      \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", loadingTemplate_r4);
      \u0275\u0275advance(36);
      \u0275\u0275property("ngIf", ctx.popularServices.length > 0);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    RouterLink,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardImage,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 120px 24px 80px;\n  text-align: center;\n}\n.hero-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  margin-bottom: 16px;\n}\n.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  opacity: 0.9;\n  margin-bottom: 32px;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.hero-btn[_ngcontent-%COMP%] {\n  padding: 12px 32px;\n  font-size: 1rem;\n}\n.hero-btn-outline[_ngcontent-%COMP%] {\n  padding: 12px 32px;\n  font-size: 1rem;\n  color: white;\n  border-color: white;\n}\n.section[_ngcontent-%COMP%] {\n  padding: 64px 24px;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.section-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2rem;\n  margin-bottom: 8px;\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #666;\n  margin-bottom: 40px;\n}\n.categories-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n}\n.category-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.category-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n}\n.category-image[_ngcontent-%COMP%] {\n  height: 160px;\n  object-fit: cover;\n}\n.category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin: 0 0 8px;\n}\n.category-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n  font-size: 0.9rem;\n}\n.features-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 32px;\n}\n.feature-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #667eea;\n  margin-bottom: 16px;\n}\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n}\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n}\n.service-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n}\n.service-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 180px;\n  object-fit: cover;\n}\n.service-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 0 0 8px;\n}\n.service-description[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9rem;\n  margin: 0 0 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.service-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.price[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #667eea;\n}\n.original-price[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #999;\n  font-size: 0.9rem;\n}\n.view-all-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 32px;\n}\n.cta-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  text-align: center;\n  padding: 64px 24px;\n}\n.cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 8px;\n}\n.cta-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  opacity: 0.9;\n  margin-bottom: 24px;\n}\n.cta-btn[_ngcontent-%COMP%] {\n  padding: 12px 40px;\n  font-size: 1rem;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 40px;\n}\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\features\\home\\home.component.ts", lineNumber: 367 });
})();
export {
  HomeComponent
};
