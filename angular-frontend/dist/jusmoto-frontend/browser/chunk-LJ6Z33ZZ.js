import {
  MediaPickerComponent
} from "./chunk-NO237GSF.js";
import {
  ConfirmModalComponent
} from "./chunk-M673IPVF.js";
import {
  ToastService
} from "./chunk-CUQ723YT.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5WG63XSG.js";
import {
  environment
} from "./chunk-YVMT3HBM.js";
import {
  HttpClient
} from "./chunk-NM77QJY5.js";
import {
  CommonModule,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/admin/brands/brand-list.component.ts
function BrandListComponent_div_5_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function BrandListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function BrandListComponent_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = false);
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275listener("click", function BrandListComponent_div_5_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18)(5, "label");
    \u0275\u0275text(6, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function BrandListComponent_div_5_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formName, $event) || (ctx_r1.formName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 18)(9, "app-media-picker", 20);
    \u0275\u0275listener("valueChange", function BrandListComponent_div_5_Template_app_media_picker_valueChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formImage = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, BrandListComponent_div_5_div_10_Template, 2, 1, "div", 21);
    \u0275\u0275elementStart(11, "div", 22)(12, "button", 23);
    \u0275\u0275listener("click", function BrandListComponent_div_5_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = false);
    });
    \u0275\u0275text(13, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 24);
    \u0275\u0275listener("click", function BrandListComponent_div_5_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveBrand());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editBrand ? "Edit Brand" : "Add Brand");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formName);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.formImage)("label", "Brand Logo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formError);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Saving..." : ctx_r1.editBrand ? "Update" : "Create", " ");
  }
}
function BrandListComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275elementEnd();
  }
}
function BrandListComponent_tr_26_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 39);
  }
  if (rf & 2) {
    const brand_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.getImageUrl(brand_r4.image), \u0275\u0275sanitizeUrl);
  }
}
function BrandListComponent_tr_26_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function BrandListComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275template(4, BrandListComponent_tr_26_img_4_Template, 1, 1, "img", 28)(5, BrandListComponent_tr_26_span_5_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "div", 31)(10, "button", 32);
    \u0275\u0275listener("click", function BrandListComponent_tr_26_Template_button_click_10_listener() {
      const brand_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startEdit(brand_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 33);
    \u0275\u0275element(12, "path", 34)(13, "path", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "button", 36);
    \u0275\u0275listener("click", function BrandListComponent_tr_26_Template_button_click_14_listener() {
      const brand_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteBrand(brand_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 33);
    \u0275\u0275element(16, "polyline", 37)(17, "path", 38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const brand_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getImageUrl(brand_r4.image));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.getImageUrl(brand_r4.image));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(brand_r4.name);
  }
}
function BrandListComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 41);
    \u0275\u0275text(2, "No brands found");
    \u0275\u0275elementEnd()();
  }
}
var BrandListComponent = class _BrandListComponent {
  http;
  toast;
  brands = signal([]);
  loading = signal(false);
  saving = signal(false);
  deletingBrand = signal(null);
  search = "";
  showForm = false;
  editBrand = null;
  formName = "";
  formImage = "";
  formError = "";
  searchTimeout;
  baseUrl = environment.apiUrl.replace("/api/v1", "");
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadBrands();
  }
  getImageUrl(image) {
    if (!image)
      return "";
    const img = String(image);
    if (/^\d+$/.test(img))
      return "";
    if (img.startsWith("http"))
      return img;
    const filename = img.replace("uploads/media/", "").replace("media/", "");
    return `${this.baseUrl}/uploads/media/${filename}`;
  }
  loadBrands() {
    this.loading.set(true);
    const params = {};
    if (this.search)
      params.search = this.search;
    this.http.get(`${environment.apiUrl}/admin/brands`, { params }).subscribe({
      next: (res) => {
        this.brands.set(res.data || []);
        this.loading.set(false);
      },
      error: (err) => {
        this.toast.error("Failed to load brands");
        this.loading.set(false);
      }
    });
  }
  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadBrands(), 400);
  }
  startEdit(brand) {
    this.editBrand = brand;
    this.formName = brand.name;
    this.formImage = brand.image || "";
    this.formError = "";
    this.showForm = true;
  }
  saveBrand() {
    if (!this.formName.trim()) {
      this.formError = "Name is required";
      return;
    }
    this.saving.set(true);
    this.formError = "";
    const data = { name: this.formName, image: this.formImage || null };
    const req = this.editBrand ? this.http.put(`${environment.apiUrl}/admin/brands/${this.editBrand.id}`, data) : this.http.post(`${environment.apiUrl}/admin/brands`, data);
    req.subscribe({
      next: () => {
        this.toast.success("Brand saved successfully");
        this.showForm = false;
        this.loadBrands();
      },
      error: (err) => {
        this.toast.error(err.error?.error || "Something went wrong");
        this.formError = err.error?.error || "Something went wrong";
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
  deleteBrand(brand) {
    this.deletingBrand.set(brand);
  }
  confirmDelete() {
    const brand = this.deletingBrand();
    if (!brand)
      return;
    this.http.delete(`${environment.apiUrl}/admin/brands/${brand.id}`).subscribe({
      next: () => {
        this.toast.success("Brand deleted successfully");
        this.deletingBrand.set(null);
        this.loadBrands();
      },
      error: () => {
        this.toast.error("Failed to delete brand");
        this.deletingBrand.set(null);
      }
    });
  }
  static \u0275fac = function BrandListComponent_Factory(t) {
    return new (t || _BrandListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrandListComponent, selectors: [["app-brand-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 7, consts: [[1, "page-header"], [1, "page-title"], [1, "btn-primary", 3, "click"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "filters-bar"], [1, "search-box"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#94a3b8", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search brands...", 3, "ngModelChange", "input", "ngModel"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["title", "Delete Brand", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], [1, "modal-overlay", 3, "click"], [1, "modal-card", 3, "click"], [1, "form-group"], ["type", "text", "placeholder", "Brand name", 3, "ngModelChange", "ngModel"], [3, "valueChange", "value", "label"], ["class", "error-msg", 4, "ngIf"], [1, "modal-actions"], [1, "btn-cancel", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], [1, "error-msg"], [1, "loading-overlay"], [1, "spinner"], ["class", "thumb", "alt", "", 3, "src", 4, "ngIf"], ["class", "no-img", 4, "ngIf"], [1, "fw-600"], [1, "action-btns"], ["title", "Edit", 1, "btn-action", "btn-edit", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Delete", 1, "btn-action", "btn-delete", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], ["alt", "", 1, "thumb", 3, "src"], [1, "no-img"], ["colspan", "4", 1, "empty-state"]], template: function BrandListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Brands");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 2);
      \u0275\u0275listener("click", function BrandListComponent_Template_button_click_3_listener() {
        ctx.showForm = true;
        ctx.editBrand = null;
        ctx.formName = "";
        return ctx.formImage = "";
      });
      \u0275\u0275text(4, "+ Add Brand");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, BrandListComponent_div_5_Template, 16, 7, "div", 3);
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 6);
      \u0275\u0275element(9, "circle", 7)(10, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function BrandListComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function BrandListComponent_Template_input_input_11_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 10);
      \u0275\u0275template(13, BrandListComponent_div_13_Template, 2, 0, "div", 11);
      \u0275\u0275elementStart(14, "table", 12)(15, "thead")(16, "tr")(17, "th");
      \u0275\u0275text(18, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "th");
      \u0275\u0275text(20, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th");
      \u0275\u0275text(22, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "tbody");
      \u0275\u0275template(26, BrandListComponent_tr_26_Template, 18, 4, "tr", 13)(27, BrandListComponent_tr_27_Template, 3, 0, "tr", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "app-confirm-modal", 15);
      \u0275\u0275listener("confirmed", function BrandListComponent_Template_app_confirm_modal_confirmed_28_listener() {
        return ctx.confirmDelete();
      })("cancelled", function BrandListComponent_Template_app_confirm_modal_cancelled_28_listener() {
        return ctx.deletingBrand.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.showForm);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(13);
      \u0275\u0275property("ngForOf", ctx.brands());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.brands().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingBrand())("message", 'Delete "' + (((tmp_6_0 = ctx.deletingBrand()) == null ? null : tmp_6_0.name) || "") + '"? This cannot be undone.');
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MediaPickerComponent, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 200;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  width: 100%;\n  max-width: 440px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 8px 12px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 0 14px;\n  flex: 1;\n  max-width: 400px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  width: 100%;\n  font-size: 14px;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-top: 1px solid #f1f5f9;\n  font-size: 14px;\n  color: #334155;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.thumb[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 8px;\n  object-fit: contain;\n  background: #f8f9fa;\n  padding: 4px;\n}\n.no-img[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.fw-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.2s;\n  display: inline-flex;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  color: #3b82f6;\n  border-color: #3b82f6;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  border-color: #ef4444;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrandListComponent, { className: "BrandListComponent", filePath: "src\\app\\features\\admin\\brands\\brand-list.component.ts", lineNumber: 130 });
})();
export {
  BrandListComponent
};
