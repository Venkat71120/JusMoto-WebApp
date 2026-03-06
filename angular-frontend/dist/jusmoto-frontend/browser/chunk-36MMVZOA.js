import {
  ToastService
} from "./chunk-CUQ723YT.js";
import {
  environment
} from "./chunk-YVMT3HBM.js";
import {
  HttpClient
} from "./chunk-NM77QJY5.js";
import {
  CommonModule,
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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/admin/settings/general-settings.component.ts
function GeneralSettingsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "p")(2, "strong");
    \u0275\u0275text(3, "Seed Results:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "li");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "li");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Brands added: ", ctx_r0.seedResult().brands, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Cars added: ", ctx_r0.seedResult().cars, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("States added: ", ctx_r0.seedResult().states, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Cities added: ", ctx_r0.seedResult().cities, "");
  }
}
var GeneralSettingsComponent = class _GeneralSettingsComponent {
  http;
  toast;
  seeding = signal(false);
  seedResult = signal(null);
  apiUrl = environment.apiUrl;
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  seedData() {
    this.seeding.set(true);
    this.seedResult.set(null);
    this.http.post(`${environment.apiUrl}/admin/seed-data`, {}).subscribe({
      next: (res) => {
        this.seedResult.set(res.data);
        this.toast.success(res.message || "Data seeded successfully");
      },
      error: (err) => {
        this.toast.error(err.error?.error || "Seeding failed");
        this.seeding.set(false);
      },
      complete: () => this.seeding.set(false)
    });
  }
  static \u0275fac = function GeneralSettingsComponent_Factory(t) {
    return new (t || _GeneralSettingsComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeneralSettingsComponent, selectors: [["app-general-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 4, consts: [[1, "page-header"], [1, "page-title"], [1, "settings-grid"], [1, "setting-card"], [1, "card-header"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#e31b23", "stroke-width", "2"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"], ["cx", "12", "cy", "10", "r", "3"], [1, "card-desc"], [1, "btn-primary", 3, "click", "disabled"], ["class", "result-box", 4, "ngIf"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0110 0v4"], [1, "info-row"], [1, "info-label"], [1, "info-value"], [1, "result-box"]], template: function GeneralSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "General Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "path", 6)(8, "circle", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "h3");
      \u0275\u0275text(10, "Seed Locations (States & Cities)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 8);
      \u0275\u0275text(12, "Fetch all Indian states and cities from a free public API and insert them into your database. This uses the CountriesNow API.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275listener("click", function GeneralSettingsComponent_Template_button_click_13_listener() {
        return ctx.seedData();
      });
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, GeneralSettingsComponent_div_15_Template, 13, 4, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 3)(17, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 5);
      \u0275\u0275element(19, "rect", 11)(20, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "h3");
      \u0275\u0275text(22, "Application Info");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 13)(24, "span", 14);
      \u0275\u0275text(25, "App Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 15);
      \u0275\u0275text(27, "JusMoto");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 13)(29, "span", 14);
      \u0275\u0275text(30, "API URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 15);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 13)(34, "span", 14);
      \u0275\u0275text(35, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 15);
      \u0275\u0275text(37, "INR (\u20B9)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 13)(39, "span", 14);
      \u0275\u0275text(40, "Timezone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span", 15);
      \u0275\u0275text(42, "IST (+05:30)");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("disabled", ctx.seeding());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.seeding() ? "Seeding... (this may take a few minutes)" : "Seed All Data", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.seedResult());
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate(ctx.apiUrl);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.settings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 20px;\n}\n.setting-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.card-desc[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n  margin: 0 0 16px;\n  line-height: 1.5;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.result-box[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 16px;\n  margin-top: 16px;\n}\n.result-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 14px;\n  color: #166534;\n}\n.result-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n}\n.result-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #166534;\n  margin-bottom: 4px;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #64748b;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #334155;\n  font-weight: 500;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeneralSettingsComponent, { className: "GeneralSettingsComponent", filePath: "src\\app\\features\\admin\\settings\\general-settings.component.ts", lineNumber: 69 });
})();
export {
  GeneralSettingsComponent
};
