import {
  CommonModule,
  EventEmitter,
  NgClass,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RLLOV7VK.js";

// src/app/shared/components/confirm-modal/confirm-modal.component.ts
function ConfirmModalComponent_div_0__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 10);
    \u0275\u0275element(1, "circle", 11)(2, "line", 12)(3, "line", 13);
    \u0275\u0275elementEnd();
  }
}
function ConfirmModalComponent_div_0__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 10);
    \u0275\u0275element(1, "path", 14)(2, "line", 15)(3, "line", 16);
    \u0275\u0275elementEnd();
  }
}
function ConfirmModalComponent_div_0__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 10);
    \u0275\u0275element(1, "circle", 11)(2, "line", 17)(3, "line", 18);
    \u0275\u0275elementEnd();
  }
}
function ConfirmModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ConfirmModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ConfirmModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275template(3, ConfirmModalComponent_div_0__svg_svg_3_Template, 4, 0, "svg", 4)(4, ConfirmModalComponent_div_0__svg_svg_4_Template, 4, 0, "svg", 4)(5, ConfirmModalComponent_div_0__svg_svg_5_Template, 4, 0, "svg", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
    \u0275\u0275listener("click", function ConfirmModalComponent_div_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(12, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 9);
    \u0275\u0275listener("click", function ConfirmModalComponent_div_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.type === "danger");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.type === "warning");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.type === "info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.message);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.type)("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Processing..." : ctx_r1.confirmText, " ");
  }
}
var ConfirmModalComponent = class _ConfirmModalComponent {
  open = false;
  title = "Confirm Action";
  message = "Are you sure you want to proceed?";
  confirmText = "Confirm";
  type = "danger";
  loading = false;
  confirmed = new EventEmitter();
  cancelled = new EventEmitter();
  onConfirm() {
    this.confirmed.emit();
  }
  onCancel() {
    this.cancelled.emit();
  }
  static \u0275fac = function ConfirmModalComponent_Factory(t) {
    return new (t || _ConfirmModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmModalComponent, selectors: [["app-confirm-modal"]], inputs: { open: "open", title: "title", message: "message", confirmText: "confirmText", type: "type", loading: "loading" }, outputs: { confirmed: "confirmed", cancelled: "cancelled" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-card", 3, "click"], [1, "modal-icon", 3, "ngClass"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "modal-title"], [1, "modal-message"], [1, "modal-actions"], [1, "btn-cancel", 3, "click"], [1, "btn-confirm", 3, "click", "ngClass", "disabled"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], ["d", "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"]], template: function ConfirmModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ConfirmModalComponent_div_0_Template, 15, 9, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.open);
    }
  }, dependencies: [CommonModule, NgClass, NgIf], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 32px;\n  width: 90vw;\n  max-width: 420px;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  animation: _ngcontent-%COMP%_slideUp 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.modal-icon.danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.modal-icon.warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.modal-icon.info[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 8px;\n}\n.modal-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0 0 24px;\n  line-height: 1.5;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: none;\n  border-radius: 8px;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.2s;\n}\n.btn-confirm.danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.btn-confirm.danger[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.btn-confirm.warning[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.btn-confirm.warning[_ngcontent-%COMP%]:hover {\n  background: #b45309;\n}\n.btn-confirm.info[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.btn-confirm.info[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-confirm[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmModalComponent, { className: "ConfirmModalComponent", filePath: "src\\app\\shared\\components\\confirm-modal\\confirm-modal.component.ts", lineNumber: 51 });
})();

export {
  ConfirmModalComponent
};
