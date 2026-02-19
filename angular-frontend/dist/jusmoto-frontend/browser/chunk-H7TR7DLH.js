import {
  CartService
} from "./chunk-2KIPSOBI.js";
import {
  ServiceService
} from "./chunk-HFAAPDAD.js";
import "./chunk-7JMAC63R.js";
import "./chunk-GUDC7RY7.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-CMH3GDQY.js";
import "./chunk-7QXR32YF.js";
import {
  CommonModule,
  CurrencyPipe,
  NgForOf,
  NgIf,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/client/favourites/favourites.component.ts
var _c0 = (a0) => ["/services", a0];
function FavouritesComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading favourites...");
    \u0275\u0275elementEnd()();
  }
}
function FavouritesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2, "\u2764\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No favourites yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Browse our services and save your favorites for quick access.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 9);
    \u0275\u0275text(8, "Browse Services");
    \u0275\u0275elementEnd()();
  }
}
function FavouritesComponent_div_8_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r2.service == null ? null : item_r2.service.duration, " mins");
  }
}
function FavouritesComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 13);
    \u0275\u0275listener("click", function FavouritesComponent_div_8_div_1_Template_button_click_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeFromFavourites(item_r2.id));
    });
    \u0275\u0275text(2, " \xD7 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275element(4, "img", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 18)(11, "span", 19);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, FavouritesComponent_div_8_div_1_span_14_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 21)(16, "a", 22);
    \u0275\u0275text(17, "View Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 23);
    \u0275\u0275listener("click", function FavouritesComponent_div_8_div_1_Template_button_click_18_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addToCart(item_r2.service));
    });
    \u0275\u0275text(19, "Add to Cart");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("src", (item_r2.service == null ? null : item_r2.service.image) || "/assets/images/service-placeholder.png", \u0275\u0275sanitizeUrl)("alt", item_r2.service == null ? null : item_r2.service.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.service == null ? null : item_r2.service.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.service == null ? null : item_r2.service.short_description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(13, 7, item_r2.service == null ? null : item_r2.service.price, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r2.service == null ? null : item_r2.service.duration);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, item_r2.service == null ? null : item_r2.service.slug));
  }
}
function FavouritesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, FavouritesComponent_div_8_div_1_Template, 20, 14, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.favourites());
  }
}
var FavouritesComponent = class _FavouritesComponent {
  serviceService;
  cartService;
  favourites = signal([]);
  loading = signal(true);
  constructor(serviceService, cartService) {
    this.serviceService = serviceService;
    this.cartService = cartService;
  }
  ngOnInit() {
    this.loadFavourites();
  }
  loadFavourites() {
    this.loading.set(true);
    this.serviceService.getFavourites().subscribe({
      next: (response) => {
        this.favourites.set(response.data || response.favourites || []);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  removeFromFavourites(id) {
    this.serviceService.removeFromFavourites(id).subscribe({
      next: () => {
        this.favourites.update((items) => items.filter((item) => item.id !== id));
      }
    });
  }
  addToCart(service) {
    if (service) {
      this.cartService.addItem({ service_id: service.id, quantity: 1 }).subscribe({
        next: () => {
          alert("Added to cart!");
        }
      });
    }
  }
  static \u0275fac = function FavouritesComponent_Factory(t) {
    return new (t || _FavouritesComponent)(\u0275\u0275directiveInject(ServiceService), \u0275\u0275directiveInject(CartService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FavouritesComponent, selectors: [["app-favourites"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [[1, "favourites-container"], [1, "page-header"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "favourites-grid", 4, "ngIf"], [1, "loading"], [1, "spinner"], [1, "empty-state"], [1, "empty-icon"], ["routerLink", "/services", 1, "btn-primary"], [1, "favourites-grid"], ["class", "favourite-card", 4, "ngFor", "ngForOf"], [1, "favourite-card"], ["title", "Remove from favourites", 1, "remove-btn", 3, "click"], [1, "card-image"], [3, "src", "alt"], [1, "card-body"], [1, "description"], [1, "card-meta"], [1, "price"], ["class", "duration", 4, "ngIf"], [1, "card-footer"], [1, "btn-outline", 3, "routerLink"], [1, "btn-primary", 3, "click"], [1, "duration"]], template: function FavouritesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "My Favourites");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Services you've saved for later");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, FavouritesComponent_div_6_Template, 4, 0, "div", 2)(7, FavouritesComponent_div_7_Template, 9, 0, "div", 3)(8, FavouritesComponent_div_8_Template, 2, 1, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.favourites().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.favourites().length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, CurrencyPipe, RouterModule, RouterLink], styles: ["\n\n.favourites-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #0066cc;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0 0 24px;\n}\n.favourites-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n}\n.favourite-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  position: relative;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.favourite-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n}\n.remove-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 32px;\n  height: 32px;\n  background: #fff;\n  border: none;\n  border-radius: 50%;\n  font-size: 20px;\n  line-height: 1;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  z-index: 10;\n  color: #666;\n  transition: all 0.2s;\n}\n.remove-btn[_ngcontent-%COMP%]:hover {\n  background: #dc3545;\n  color: #fff;\n}\n.card-image[_ngcontent-%COMP%] {\n  height: 180px;\n  overflow: hidden;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 8px;\n  color: #1a1a1a;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0 0 12px;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.price[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0066cc;\n}\n.duration[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n  background: #f5f5f5;\n  padding: 4px 10px;\n  border-radius: 12px;\n}\n.card-footer[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  gap: 12px;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 16px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  color: #444;\n  border-radius: 6px;\n  text-decoration: none;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: #0066cc;\n  color: #0066cc;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 16px;\n  background: #0066cc;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0052a3;\n}\n/*# sourceMappingURL=favourites.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FavouritesComponent, { className: "FavouritesComponent", filePath: "src\\app\\features\\client\\favourites\\favourites.component.ts", lineNumber: 259 });
})();
export {
  FavouritesComponent
};
//# sourceMappingURL=chunk-H7TR7DLH.js.map
