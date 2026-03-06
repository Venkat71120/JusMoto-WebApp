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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/admin/media/media-library.component.ts
function MediaLibraryComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Uploading...");
    \u0275\u0275elementEnd()();
  }
}
function MediaLibraryComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function MediaLibraryComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function MediaLibraryComponent_div_14_div_1_Template_div_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectMedia(item_r2));
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275element(2, "img", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 26);
    \u0275\u0275listener("click", function MediaLibraryComponent_div_14_div_1_Template_button_click_8_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteMedia(item_r2, $event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 27);
    \u0275\u0275element(10, "polyline", 28)(11, "path", 29)(12, "path", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.selectedId() === item_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.getThumbUrl(item_r2), \u0275\u0275sanitizeUrl)("alt", item_r2.alt || item_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatSize(item_r2.size));
  }
}
function MediaLibraryComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, MediaLibraryComponent_div_14_div_1_Template, 13, 6, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.media());
  }
}
function MediaLibraryComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "p");
    \u0275\u0275text(2, "No media files found. Upload your first image!");
    \u0275\u0275elementEnd()();
  }
}
function MediaLibraryComponent_div_16_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function MediaLibraryComponent_div_16_button_1_Template_button_click_0_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(p_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r5 === ctx_r2.page());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r5);
  }
}
function MediaLibraryComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, MediaLibraryComponent_div_16_button_1_Template, 2, 3, "button", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pages());
  }
}
var MediaLibraryComponent = class _MediaLibraryComponent {
  http;
  media = signal([]);
  loading = signal(true);
  uploading = signal(false);
  search = "";
  page = signal(1);
  totalPages = signal(1);
  selectedId = signal(null);
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.loadMedia();
  }
  loadMedia() {
    this.loading.set(true);
    const params = { page: this.page(), limit: 30 };
    if (this.search)
      params.search = this.search;
    this.http.get(`${environment.apiUrl}/admin/media`, { params }).subscribe({
      next: (res) => {
        this.media.set(res.data || []);
        this.totalPages.set(res.pagination?.totalPages || 1);
      },
      error: () => this.media.set([]),
      complete: () => this.loading.set(false)
    });
  }
  uploadFile(event) {
    const files = event.target.files;
    if (!files.length)
      return;
    this.uploading.set(true);
    let completed = 0;
    for (let i = 0; i < files.length; i++) {
      const fd = new FormData();
      fd.append("file", files[i]);
      this.http.post(`${environment.apiUrl}/admin/media/upload`, fd).subscribe({
        next: () => {
          completed++;
          if (completed === files.length) {
            this.uploading.set(false);
            this.loadMedia();
          }
        },
        error: () => {
          completed++;
          if (completed === files.length) {
            this.uploading.set(false);
            this.loadMedia();
          }
        }
      });
    }
    event.target.value = "";
  }
  deleteMedia(item, event) {
    event.stopPropagation();
    if (!confirm("Delete this media file?"))
      return;
    this.http.delete(`${environment.apiUrl}/admin/media/${item.id}`).subscribe(() => this.loadMedia());
  }
  selectMedia(item) {
    this.selectedId.set(this.selectedId() === item.id ? null : item.id);
  }
  getThumbUrl(item) {
    if (!item.path)
      return "";
    if (item.path.startsWith("http")) {
      return item.path.replace("/media/", "/media/thumb/");
    }
    const filename = item.path.replace("media/", "");
    return `${environment.apiUrl.replace("/api/v1", "")}/uploads/media/thumb/${filename}`;
  }
  formatSize(size) {
    const bytes = parseInt(size);
    if (!bytes)
      return "";
    if (bytes < 1024)
      return bytes + " B";
    if (bytes < 1048576)
      return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(1) + " MB";
  }
  pages() {
    const arr = [];
    for (let i = 1; i <= this.totalPages(); i++)
      arr.push(i);
    return arr;
  }
  goToPage(p) {
    this.page.set(p);
    this.loadMedia();
  }
  static \u0275fac = function MediaLibraryComponent_Factory(t) {
    return new (t || _MediaLibraryComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaLibraryComponent, selectors: [["app-media-library"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 6, consts: [[1, "page-header"], [1, "page-title"], [1, "header-actions"], ["type", "text", "placeholder", "Search media...", 1, "search-box", 3, "ngModelChange", "input", "ngModel"], [1, "btn-primary", "upload-btn"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"], ["points", "17 8 12 3 7 8"], ["x1", "12", "y1", "3", "x2", "12", "y2", "15"], ["type", "file", "accept", "image/*", "multiple", "", 2, "display", "none", 3, "change"], ["class", "upload-zone", 4, "ngIf"], ["class", "loading-center", 4, "ngIf"], ["class", "media-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "upload-zone"], [1, "spinner"], [1, "loading-center"], [1, "media-grid"], ["class", "media-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "media-card", 3, "click"], [1, "media-thumb"], ["loading", "lazy", 3, "src", "alt"], [1, "media-info"], [1, "media-title"], [1, "media-size"], ["title", "Delete", 1, "delete-btn", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"], ["d", "M10 11v6M14 11v6"], [1, "empty-state"], [1, "pagination"], ["class", "page-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "page-btn", 3, "click"]], template: function MediaLibraryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Media Library");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function MediaLibraryComponent_Template_input_ngModelChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function MediaLibraryComponent_Template_input_input_4_listener() {
        return ctx.loadMedia();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "label", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "path", 6)(8, "polyline", 7)(9, "line", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Upload ");
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "input", 9);
      \u0275\u0275listener("change", function MediaLibraryComponent_Template_input_change_11_listener($event) {
        return ctx.uploadFile($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(12, MediaLibraryComponent_div_12_Template, 4, 0, "div", 10)(13, MediaLibraryComponent_div_13_Template, 2, 0, "div", 11)(14, MediaLibraryComponent_div_14_Template, 2, 1, "div", 12)(15, MediaLibraryComponent_div_15_Template, 3, 0, "div", 13)(16, MediaLibraryComponent_div_16_Template, 2, 1, "div", 14);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.uploading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.media().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages() > 1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.search-box[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  width: 250px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.upload-btn[_ngcontent-%COMP%] {\n  position: relative;\n}\n.upload-zone[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  justify-content: center;\n  padding: 20px;\n  background: #fff;\n  border-radius: 12px;\n  margin-bottom: 20px;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.media-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 16px;\n}\n.media-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  position: relative;\n  transition: all 0.2s;\n}\n.media-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.media-card.selected[_ngcontent-%COMP%] {\n  outline: 3px solid #e31b23;\n}\n.media-thumb[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  overflow: hidden;\n  background: #f8f9fa;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px;\n}\n.media-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.media-info[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n}\n.media-title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #334155;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.media-size[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: rgba(255, 255, 255, 0.9);\n  border: none;\n  border-radius: 6px;\n  padding: 6px;\n  cursor: pointer;\n  color: #dc2626;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.media-card[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px;\n  color: #94a3b8;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  margin-top: 24px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border-color: #e31b23;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaLibraryComponent, { className: "MediaLibraryComponent", filePath: "src\\app\\features\\admin\\media\\media-library.component.ts", lineNumber: 83 });
})();
export {
  MediaLibraryComponent
};
