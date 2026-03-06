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
  EventEmitter,
  NgForOf,
  NgIf,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵreference,
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

// src/app/shared/components/media-picker/media-picker.component.ts
function MediaPickerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "img", 6);
    \u0275\u0275listener("error", function MediaPickerComponent_div_1_Template_img_error_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageError());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 7);
    \u0275\u0275listener("click", function MediaPickerComponent_div_1_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeImage($event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 8);
    \u0275\u0275element(4, "line", 9)(5, "line", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.previewUrl(), \u0275\u0275sanitizeUrl);
  }
}
function MediaPickerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "rect", 13)(3, "circle", 14)(4, "polyline", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.label || "Select Image");
  }
}
function MediaPickerComponent_div_3_div_12_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Uploading...");
    \u0275\u0275elementEnd()();
  }
}
function MediaPickerComponent_div_3_div_12_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.uploadError());
  }
}
function MediaPickerComponent_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275listener("click", function MediaPickerComponent_div_3_div_12_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const fileInput_r5 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(fileInput_r5.click());
    })("dragover", function MediaPickerComponent_div_3_div_12_Template_div_dragover_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("dragleave", function MediaPickerComponent_div_3_div_12_Template_div_dragleave_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dragging.set(false));
    })("drop", function MediaPickerComponent_div_3_div_12_Template_div_drop_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275elementStart(2, "input", 27, 0);
    \u0275\u0275listener("change", function MediaPickerComponent_div_3_div_12_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleUpload($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 28);
    \u0275\u0275element(5, "path", 29)(6, "polyline", 30)(7, "line", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Click or drag image to upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 32);
    \u0275\u0275text(11, "Max 10MB, JPEG/PNG/WebP");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, MediaPickerComponent_div_3_div_12_div_12_Template, 4, 0, "div", 33)(13, MediaPickerComponent_div_3_div_12_div_13_Template, 2, 1, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("dragging", ctx_r1.dragging());
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.uploading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadError());
  }
}
function MediaPickerComponent_div_3_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementEnd();
  }
}
function MediaPickerComponent_div_3_div_13_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function MediaPickerComponent_div_3_div_13_div_3_div_1_Template_div_click_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectFromLibrary(item_r8));
    });
    \u0275\u0275element(1, "img", 48);
    \u0275\u0275elementStart(2, "span", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ((tmp_5_0 = ctx_r1.selectedLibItem()) == null ? null : tmp_5_0.id) === item_r8.id);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getThumbUrl(item_r8), \u0275\u0275sanitizeUrl)("alt", item_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.title);
  }
}
function MediaPickerComponent_div_3_div_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, MediaPickerComponent_div_3_div_13_div_3_div_1_Template, 4, 5, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.libraryItems());
  }
}
function MediaPickerComponent_div_3_div_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "p");
    \u0275\u0275text(2, "No images found. Upload one first.");
    \u0275\u0275elementEnd()();
  }
}
function MediaPickerComponent_div_3_div_13_div_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function MediaPickerComponent_div_3_div_13_div_5_button_1_Template_button_click_0_listener() {
      const p_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.libPage.set(p_r10);
      return \u0275\u0275resetView(ctx_r1.loadLibrary());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", p_r10 === ctx_r1.libPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r10);
  }
}
function MediaPickerComponent_div_3_div_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, MediaPickerComponent_div_3_div_13_div_5_button_1_Template, 2, 3, "button", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.libPages());
  }
}
function MediaPickerComponent_div_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function MediaPickerComponent_div_3_div_13_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function MediaPickerComponent_div_3_div_13_Template_input_input_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadLibrary());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, MediaPickerComponent_div_3_div_13_div_2_Template, 2, 0, "div", 40)(3, MediaPickerComponent_div_3_div_13_div_3_Template, 2, 1, "div", 41)(4, MediaPickerComponent_div_3_div_13_div_4_Template, 3, 0, "div", 42)(5, MediaPickerComponent_div_3_div_13_div_5_Template, 2, 1, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.libLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.libLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.libLoading() && ctx_r1.libraryItems().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.libTotalPages() > 1);
  }
}
function MediaPickerComponent_div_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "button", 54);
    \u0275\u0275listener("click", function MediaPickerComponent_div_3_div_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(2, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 55);
    \u0275\u0275listener("click", function MediaPickerComponent_div_3_div_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmSelection());
    });
    \u0275\u0275text(4, "Select Image");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.selectedLibItem());
  }
}
function MediaPickerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function MediaPickerComponent_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275listener("click", function MediaPickerComponent_div_3_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 18)(3, "h3");
    \u0275\u0275text(4, "Media Library");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function MediaPickerComponent_div_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 20)(8, "button", 21);
    \u0275\u0275listener("click", function MediaPickerComponent_div_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tab.set("library"));
    });
    \u0275\u0275text(9, "Library");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 21);
    \u0275\u0275listener("click", function MediaPickerComponent_div_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tab.set("upload"));
    });
    \u0275\u0275text(11, "Upload New");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, MediaPickerComponent_div_3_div_12_Template, 14, 4, "div", 22)(13, MediaPickerComponent_div_3_div_13_Template, 6, 5, "div", 23)(14, MediaPickerComponent_div_3_div_14_Template, 5, 1, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classProp("active", ctx_r1.tab() === "library");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.tab() === "upload");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.tab() === "upload");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tab() === "library");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tab() === "library");
  }
}
var MediaPickerComponent = class _MediaPickerComponent {
  http;
  value = null;
  label = "Select Image";
  valueChange = new EventEmitter();
  mediaSelected = new EventEmitter();
  modalOpen = signal(false);
  tab = signal("library");
  previewUrl = signal("");
  uploading = signal(false);
  dragging = signal(false);
  uploadError = signal("");
  libraryItems = signal([]);
  libLoading = signal(false);
  libPage = signal(1);
  libTotalPages = signal(1);
  selectedLibItem = signal(null);
  searchQuery = "";
  apiUrl = environment.apiUrl;
  baseUrl = this.apiUrl.replace("/api/v1", "");
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    if (this.value)
      this.loadPreview();
  }
  ngOnChanges(changes) {
    if (changes["value"] && !changes["value"].firstChange) {
      this.loadPreview();
    }
  }
  loadPreview() {
    if (!this.value) {
      this.previewUrl.set("");
      return;
    }
    const val = String(this.value);
    if (val.startsWith("http")) {
      this.previewUrl.set(val);
    } else if (val.startsWith("media/") || val.startsWith("uploads/")) {
      const filename = val.replace("uploads/media/", "").replace("media/", "");
      this.previewUrl.set(`${this.baseUrl}/uploads/media/${filename}`);
    } else if (/^\d+$/.test(val)) {
      this.http.get(`${this.apiUrl}/admin/media`, { params: { limit: 200 } }).subscribe({
        next: (res) => {
          const items = res.data || [];
          const match = items.find((m) => String(m.id) === val);
          if (match) {
            this.previewUrl.set(this.getFullUrl(match));
          }
        }
      });
    } else {
      this.previewUrl.set(this.resolveImageUrl(val));
    }
  }
  resolveImageUrl(val) {
    if (!val)
      return "";
    if (val.startsWith("http"))
      return val;
    return `${this.baseUrl}/uploads/media/${val}`;
  }
  onImageError() {
    const current = this.previewUrl();
    if (current.includes("/thumb/")) {
      this.previewUrl.set(current.replace("/thumb/", "/"));
    } else if (current.includes("/grid/")) {
      this.previewUrl.set(current.replace("/grid/", "/"));
    }
  }
  openModal() {
    this.modalOpen.set(true);
    this.selectedLibItem.set(null);
    this.loadLibrary();
  }
  closeModal() {
    this.modalOpen.set(false);
  }
  loadLibrary() {
    this.libLoading.set(true);
    const params = { page: this.libPage(), limit: 24 };
    if (this.searchQuery)
      params.search = this.searchQuery;
    this.http.get(`${this.apiUrl}/admin/media`, { params }).subscribe({
      next: (res) => {
        this.libraryItems.set(res.data || []);
        this.libTotalPages.set(res.pagination?.totalPages || 1);
      },
      error: () => this.libraryItems.set([]),
      complete: () => this.libLoading.set(false)
    });
  }
  getThumbUrl(item) {
    if (!item.path)
      return "";
    if (item.path.startsWith("http")) {
      return item.path.replace("/media/", "/media/thumb/");
    }
    const filename = item.path.replace("media/", "");
    return `${this.baseUrl}/uploads/media/thumb/${filename}`;
  }
  getFullUrl(item) {
    if (!item.path)
      return "";
    if (item.path.startsWith("http"))
      return item.path;
    const filename = item.path.replace("media/", "");
    return `${this.baseUrl}/uploads/media/${filename}`;
  }
  selectFromLibrary(item) {
    this.selectedLibItem.set(item);
  }
  confirmSelection() {
    const item = this.selectedLibItem();
    if (!item)
      return;
    const fullUrl = this.getFullUrl(item);
    this.value = fullUrl;
    this.valueChange.emit(fullUrl);
    this.mediaSelected.emit(item);
    this.previewUrl.set(fullUrl);
    this.closeModal();
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.dragging.set(true);
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.dragging.set(false);
    const file = event.dataTransfer?.files?.[0];
    if (file && file.type.startsWith("image/")) {
      this.uploadFile(file);
    }
  }
  handleUpload(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    this.uploadFile(file);
    event.target.value = "";
  }
  uploadFile(file) {
    this.uploading.set(true);
    this.uploadError.set("");
    const fd = new FormData();
    fd.append("file", file);
    this.http.post(`${this.apiUrl}/admin/media/upload`, fd).subscribe({
      next: (res) => {
        const media = res.data;
        const fullUrl = this.getFullUrl(media);
        this.value = fullUrl;
        this.valueChange.emit(fullUrl);
        this.mediaSelected.emit(media);
        this.previewUrl.set(fullUrl);
        this.uploading.set(false);
        this.closeModal();
      },
      error: (err) => {
        this.uploading.set(false);
        const msg = err.error?.error || err.error?.message || err.message || "Upload failed";
        this.uploadError.set(msg);
      }
    });
  }
  removeImage(event) {
    event.stopPropagation();
    this.value = null;
    this.previewUrl.set("");
    this.valueChange.emit(null);
  }
  libPages() {
    const arr = [];
    for (let i = 1; i <= this.libTotalPages(); i++)
      arr.push(i);
    return arr;
  }
  static \u0275fac = function MediaPickerComponent_Factory(t) {
    return new (t || _MediaPickerComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaPickerComponent, selectors: [["app-media-picker"]], inputs: { value: "value", label: "label" }, outputs: { valueChange: "valueChange", mediaSelected: "mediaSelected" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [["fileInput", ""], [1, "picker-trigger", 3, "click"], ["class", "preview", 4, "ngIf"], ["class", "placeholder", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "preview"], ["alt", "Selected image", 3, "error", "src"], ["type", "button", "title", "Remove", 1, "remove-btn", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "placeholder"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2"], ["cx", "8.5", "cy", "8.5", "r", "1.5"], ["points", "21 15 16 10 5 21"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], ["type", "button", 1, "modal-close", 3, "click"], [1, "modal-tabs"], ["type", "button", 3, "click"], ["class", "upload-tab", 4, "ngIf"], ["class", "library-tab", 4, "ngIf"], ["class", "modal-footer", 4, "ngIf"], [1, "upload-tab"], [1, "drop-zone", 3, "click", "dragover", "dragleave", "drop"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"], ["points", "17 8 12 3 7 8"], ["x1", "12", "y1", "3", "x2", "12", "y2", "15"], [1, "hint"], ["class", "upload-progress", 4, "ngIf"], ["class", "upload-error", 4, "ngIf"], [1, "upload-progress"], [1, "spinner-small"], [1, "upload-error"], [1, "library-tab"], ["type", "text", "placeholder", "Search images...", 1, "lib-search", 3, "ngModelChange", "input", "ngModel"], ["class", "lib-loading", 4, "ngIf"], ["class", "lib-grid", 4, "ngIf"], ["class", "lib-empty", 4, "ngIf"], ["class", "lib-pagination", 4, "ngIf"], [1, "lib-loading"], [1, "lib-grid"], ["class", "lib-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "lib-item", 3, "click"], ["loading", "lazy", 3, "src", "alt"], [1, "lib-item-name"], [1, "lib-empty"], [1, "lib-pagination"], ["type", "button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "button", 1, "btn-select", 3, "click", "disabled"]], template: function MediaPickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("click", function MediaPickerComponent_Template_div_click_0_listener() {
        return ctx.openModal();
      });
      \u0275\u0275template(1, MediaPickerComponent_div_1_Template, 6, 1, "div", 2)(2, MediaPickerComponent_div_2_Template, 7, 1, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, MediaPickerComponent_div_3_Template, 15, 7, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.previewUrl());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.previewUrl());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modalOpen());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.picker-trigger[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: 2px dashed #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  transition: all 0.2s;\n  display: inline-block;\n}\n.picker-trigger[_ngcontent-%COMP%]:hover {\n  border-color: #e31b23;\n}\n.preview[_ngcontent-%COMP%] {\n  position: relative;\n  width: 160px;\n  height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8f9fa;\n}\n.preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  margin: auto;\n  display: block;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  background: rgba(255, 255, 255, 0.9);\n  border: none;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #dc2626;\n}\n.placeholder[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 120px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: #94a3b8;\n}\n.placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  width: 90vw;\n  max-width: 800px;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 28px;\n  cursor: pointer;\n  color: #64748b;\n  line-height: 1;\n}\n.modal-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 0 24px;\n}\n.modal-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border: none;\n  background: none;\n  font-weight: 600;\n  color: #64748b;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n}\n.modal-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #e31b23;\n  border-bottom-color: #e31b23;\n}\n.upload-tab[_ngcontent-%COMP%] {\n  padding: 40px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.drop-zone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 40px 60px;\n  border: 2px dashed #d1d5db;\n  border-radius: 12px;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.2s;\n}\n.drop-zone[_ngcontent-%COMP%]:hover, .drop-zone.dragging[_ngcontent-%COMP%] {\n  border-color: #e31b23;\n  background: #fff5f5;\n}\n.drop-zone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.upload-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 16px;\n}\n.upload-error[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  color: #dc2626;\n  font-size: 13px;\n  font-weight: 500;\n  background: #fef2f2;\n  padding: 8px 14px;\n  border-radius: 8px;\n  border: 1px solid #fecaca;\n}\n.library-tab[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  flex: 1;\n  overflow-y: auto;\n  max-height: 50vh;\n}\n.lib-search[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n.lib-search[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e31b23;\n}\n.lib-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: 12px;\n}\n.lib-item[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all 0.2s;\n  background: #f8f9fa;\n}\n.lib-item[_ngcontent-%COMP%]:hover {\n  border-color: #fca5a5;\n}\n.lib-item.selected[_ngcontent-%COMP%] {\n  border-color: #e31b23;\n  box-shadow: 0 0 0 2px rgba(227, 27, 35, 0.2);\n}\n.lib-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90px;\n  object-fit: contain;\n  padding: 4px;\n  background: #f8f9fa;\n}\n.lib-item-name[_ngcontent-%COMP%] {\n  display: block;\n  padding: 4px 8px;\n  font-size: 11px;\n  color: #64748b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lib-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 40px;\n}\n.lib-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n}\n.lib-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n  margin-top: 12px;\n}\n.lib-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 13px;\n}\n.lib-pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border-color: #e31b23;\n}\n.spinner-small[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 2px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 500;\n}\n.btn-select[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  background: #e31b23;\n  color: #fff;\n  cursor: pointer;\n  font-weight: 600;\n}\n.btn-select[_ngcontent-%COMP%]:disabled {\n  background: #fca5a5;\n  cursor: not-allowed;\n}\n.btn-select[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b11218;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaPickerComponent, { className: "MediaPickerComponent", filePath: "src\\app\\shared\\components\\media-picker\\media-picker.component.ts", lineNumber: 134 });
})();

export {
  MediaPickerComponent
};
