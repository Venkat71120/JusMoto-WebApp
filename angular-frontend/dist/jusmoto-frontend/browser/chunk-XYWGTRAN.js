import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-77LM5CPK.js";
import {
  Router,
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/tickets/create-ticket/create-ticket.component.ts
var CreateTicketComponent = class _CreateTicketComponent {
  fb;
  router;
  ticketForm;
  isSubmitting = signal(false);
  constructor(fb, router) {
    this.fb = fb;
    this.router = router;
    this.ticketForm = this.fb.group({
      category: ["", Validators.required],
      subject: ["", Validators.required],
      description: ["", Validators.required],
      priority: ["medium"]
    });
  }
  onSubmit() {
    if (this.ticketForm.invalid) {
      alert("Please fill all required fields");
      return;
    }
    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      alert("Ticket created successfully!");
      this.router.navigate(["/tickets"]);
    }, 1e3);
  }
  static \u0275fac = function CreateTicketComponent_Factory(t) {
    return new (t || _CreateTicketComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateTicketComponent, selectors: [["app-create-ticket"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 3, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "max-w-2xl", "mx-auto"], [1, "text-3xl", "font-bold", "mb-6"], [1, "bg-white", "rounded-lg", "shadow", "p-6"], [3, "ngSubmit", "formGroup"], [1, "space-y-4"], [1, "block", "text-sm", "font-medium", "mb-1"], ["formControlName", "category", 1, "w-full", "p-2", "border", "rounded"], ["value", ""], ["value", "orders"], ["value", "payments"], ["value", "services"], ["value", "technical"], ["value", "other"], ["type", "text", "formControlName", "subject", "placeholder", "Brief description of the issue", 1, "w-full", "p-2", "border", "rounded"], ["formControlName", "description", "rows", "6", "placeholder", "Please provide detailed information about your issue", 1, "w-full", "p-2", "border", "rounded"], ["formControlName", "priority", 1, "w-full", "p-2", "border", "rounded"], ["value", "low"], ["value", "medium"], ["value", "high"], ["type", "file", "multiple", "", 1, "w-full", "p-2", "border", "rounded"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "gap-4", "mt-6"], ["routerLink", "/tickets", 1, "flex-1", "text-center", "bg-gray-200", "py-2", "rounded", "hover:bg-gray-300"], ["type", "submit", 1, "flex-1", "bg-blue-600", "text-white", "py-2", "rounded", "hover:bg-blue-700", 3, "disabled"]], template: function CreateTicketComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Create Support Ticket");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "form", 4);
      \u0275\u0275listener("ngSubmit", function CreateTicketComponent_Template_form_ngSubmit_5_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(6, "div", 5)(7, "div")(8, "label", 6);
      \u0275\u0275text(9, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 7)(11, "option", 8);
      \u0275\u0275text(12, "Select Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 9);
      \u0275\u0275text(14, "Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 10);
      \u0275\u0275text(16, "Payments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 11);
      \u0275\u0275text(18, "Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 12);
      \u0275\u0275text(20, "Technical Issues");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 13);
      \u0275\u0275text(22, "Other");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div")(24, "label", 6);
      \u0275\u0275text(25, "Subject");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div")(28, "label", 6);
      \u0275\u0275text(29, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "textarea", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div")(32, "label", 6);
      \u0275\u0275text(33, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "select", 16)(35, "option", 17);
      \u0275\u0275text(36, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "option", 18);
      \u0275\u0275text(38, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "option", 19);
      \u0275\u0275text(40, "High");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div")(42, "label", 6);
      \u0275\u0275text(43, "Attachments (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(44, "input", 20);
      \u0275\u0275elementStart(45, "p", 21);
      \u0275\u0275text(46, "You can attach screenshots or documents");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 22)(48, "a", 23);
      \u0275\u0275text(49, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "button", 24);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.ticketForm);
      \u0275\u0275advance(45);
      \u0275\u0275property("disabled", ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSubmitting() ? "Submitting..." : "Submit Ticket", " ");
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateTicketComponent, { className: "CreateTicketComponent", filePath: "src\\app\\features\\tickets\\create-ticket\\create-ticket.component.ts", lineNumber: 68 });
})();
export {
  CreateTicketComponent
};
//# sourceMappingURL=chunk-XYWGTRAN.js.map
