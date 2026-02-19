import {
  ConfirmModalComponent
} from "./chunk-GESQI7FA.js";
import {
  ToastService
} from "./chunk-W5W6PSRW.js";
import {
  environment
} from "./chunk-OW254BTU.js";
import {
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/admin/sliders/slider-list.component.ts
var _c0 = (a0) => ["/admin/slider/edit", a0];
function SliderListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementEnd();
  }
}
function SliderListComponent_div_6_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 27);
  }
  if (rf & 2) {
    const slider_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", slider_r2.image, \u0275\u0275sanitizeUrl);
  }
}
function SliderListComponent_div_6_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, "No Image");
    \u0275\u0275elementEnd();
  }
}
function SliderListComponent_div_6_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slider_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(slider_r2.identity);
  }
}
function SliderListComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275template(2, SliderListComponent_div_6_div_1_img_2_Template, 1, 1, "img", 13)(3, SliderListComponent_div_6_div_1_div_3_Template, 2, 0, "div", 14);
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 16)(7, "div", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SliderListComponent_div_6_div_1_div_9_Template, 2, 1, "div", 18);
    \u0275\u0275elementStart(10, "div", 19)(11, "a", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 21);
    \u0275\u0275element(13, "path", 22)(14, "path", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 24);
    \u0275\u0275listener("click", function SliderListComponent_div_6_div_1_Template_button_click_15_listener() {
      const slider_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteSlider(slider_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 21);
    \u0275\u0275element(17, "polyline", 25)(18, "path", 26);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const slider_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", slider_r2.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !slider_r2.image);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-green", slider_r2.status)("badge-red", !slider_r2.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slider_r2.status ? "Active" : "Inactive", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(slider_r2.type || "General");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", slider_r2.identity);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, slider_r2.id));
  }
}
function SliderListComponent_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, "No sliders found");
    \u0275\u0275elementEnd();
  }
}
function SliderListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, SliderListComponent_div_6_div_1_Template, 19, 12, "div", 9)(2, SliderListComponent_div_6_div_2_Template, 2, 0, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.sliders());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.sliders().length === 0);
  }
}
var SliderListComponent = class _SliderListComponent {
  http;
  toast;
  sliders = signal([]);
  loading = signal(false);
  deletingItem = signal(null);
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadSliders();
  }
  loadSliders() {
    this.loading.set(true);
    this.http.get(`${environment.apiUrl}/admin/sliders`).subscribe({
      next: (res) => this.sliders.set(res.data || []),
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  deleteSlider(slider) {
    this.deletingItem.set(slider);
  }
  confirmDelete() {
    const slider = this.deletingItem();
    if (!slider)
      return;
    this.http.delete(`${environment.apiUrl}/admin/sliders/${slider.id}`).subscribe({
      next: () => {
        this.toast.success("Slider deleted successfully");
        this.deletingItem.set(null);
        this.loadSliders();
      },
      error: () => {
        this.toast.error("Failed to delete slider");
        this.deletingItem.set(null);
      }
    });
  }
  static \u0275fac = function SliderListComponent_Factory(t) {
    return new (t || _SliderListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SliderListComponent, selectors: [["app-slider-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "page-header"], [1, "page-title"], ["routerLink", "/admin/slider/add", 1, "btn-primary"], ["class", "loading-center", 4, "ngIf"], ["class", "grid", 4, "ngIf"], ["title", "Delete Slider", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], [1, "loading-center"], [1, "spinner"], [1, "grid"], ["class", "card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "card"], [1, "card-img"], ["alt", "Slider", 3, "src", 4, "ngIf"], ["class", "no-image", 4, "ngIf"], [1, "card-badge"], [1, "card-body"], [1, "card-type"], ["class", "card-identity", 4, "ngIf"], [1, "card-actions"], ["title", "Edit", 1, "action-btn", 3, "routerLink"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Delete", 1, "action-btn", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], ["alt", "Slider", 3, "src"], [1, "no-image"], [1, "card-identity"], [1, "empty-state"]], template: function SliderListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Sliders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 2);
      \u0275\u0275text(4, "+ Add Slider");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, SliderListComponent_div_5_Template, 2, 0, "div", 3)(6, SliderListComponent_div_6_Template, 3, 2, "div", 4);
      \u0275\u0275elementStart(7, "app-confirm-modal", 5);
      \u0275\u0275listener("confirmed", function SliderListComponent_Template_app_confirm_modal_confirmed_7_listener() {
        return ctx.confirmDelete();
      })("cancelled", function SliderListComponent_Template_app_confirm_modal_cancelled_7_listener() {
        return ctx.deletingItem.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingItem())("message", "Delete this slider? This cannot be undone.");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  transition: box-shadow 0.2s;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.card-img[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n  background: #f1f5f9;\n}\n.card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.no-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #94a3b8;\n  font-size: 14px;\n}\n.card-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.card-type[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #334155;\n  font-size: 14px;\n  text-transform: capitalize;\n  margin-bottom: 4px;\n}\n.card-identity[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #e5e7eb;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  color: #64748b;\n  display: inline-flex;\n  text-decoration: none;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #e31b23;\n  border-color: #fca5a5;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px;\n  color: #94a3b8;\n  grid-column: 1/-1;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SliderListComponent, { className: "SliderListComponent", filePath: "src\\app\\features\\admin\\sliders\\slider-list.component.ts", lineNumber: 82 });
})();
export {
  SliderListComponent
};
