import {
  TicketService
} from "./chunk-NMNKT4XS.js";
import {
  OrderService
} from "./chunk-T324PFDX.js";
import "./chunk-XSC2IEYW.js";
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
import "./chunk-GUDC7RY7.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-CMH3GDQY.js";
import "./chunk-TT3LTPCS.js";
import {
  CommonModule,
  DatePipe,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-37NMOBDC.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/client/tickets/ticket-create.component.ts
function TicketCreateComponent_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("value", cat_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r1.label);
  }
}
function TicketCreateComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Category is required ");
    \u0275\u0275elementEnd();
  }
}
function TicketCreateComponent_div_18_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    \u0275\u0275property("value", order_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" #", order_r2.order_number || order_r2.id, " - ", \u0275\u0275pipeBind2(2, 3, order_r2.created_at, "mediumDate"), " ");
  }
}
function TicketCreateComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 30);
    \u0275\u0275text(2, "Related Order (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 31)(4, "option", 9);
    \u0275\u0275text(5, "Select an order");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TicketCreateComponent_div_18_option_6_Template, 3, 6, "option", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.orders());
  }
}
function TicketCreateComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Subject is required ");
    \u0275\u0275elementEnd();
  }
}
function TicketCreateComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Message is required ");
    \u0275\u0275elementEnd();
  }
}
function TicketCreateComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Message must be at least 20 characters ");
    \u0275\u0275elementEnd();
  }
}
var TicketCreateComponent = class _TicketCreateComponent {
  fb;
  ticketService;
  orderService;
  router;
  route;
  ticketForm;
  orders = signal([]);
  submitting = signal(false);
  selectedFile = null;
  categories = [
    { value: "general", label: "General Inquiry" },
    { value: "order", label: "Order Issue" },
    { value: "payment", label: "Payment Problem" },
    { value: "service", label: "Service Quality" },
    { value: "refund", label: "Refund Request" },
    { value: "other", label: "Other" }
  ];
  constructor(fb, ticketService, orderService, router, route) {
    this.fb = fb;
    this.ticketService = ticketService;
    this.orderService = orderService;
    this.router = router;
    this.route = route;
    this.ticketForm = this.fb.group({
      category: ["", Validators.required],
      order_id: [""],
      subject: ["", Validators.required],
      priority: ["medium"],
      message: ["", [Validators.required, Validators.minLength(20)]]
    });
  }
  ngOnInit() {
    this.orderService.getOrders({ limit: 10 }).subscribe({
      next: (response) => {
        this.orders.set(response.data || response.orders || []);
      }
    });
    const orderId = this.route.snapshot.queryParamMap.get("order_id");
    if (orderId) {
      this.ticketForm.patchValue({ order_id: orderId, category: "order" });
    }
  }
  onFileSelect(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
  onSubmit() {
    if (this.ticketForm.invalid)
      return;
    this.submitting.set(true);
    const formData = new FormData();
    Object.keys(this.ticketForm.value).forEach((key) => {
      if (this.ticketForm.value[key]) {
        formData.append(key, this.ticketForm.value[key]);
      }
    });
    if (this.selectedFile) {
      formData.append("attachment", this.selectedFile);
    }
    this.ticketService.createTicket(formData).subscribe({
      next: (response) => {
        this.submitting.set(false);
        const ticketId = response.data?.id || response.ticket?.id || response.id;
        this.router.navigate(["/client/tickets", ticketId]);
      },
      error: () => {
        this.submitting.set(false);
        alert("Failed to create ticket. Please try again.");
      }
    });
  }
  static \u0275fac = function TicketCreateComponent_Factory(t) {
    return new (t || _TicketCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TicketService), \u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketCreateComponent, selectors: [["app-ticket-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 51, vars: 9, consts: [[1, "create-ticket-container"], [1, "back-link"], ["routerLink", "/client/tickets"], [1, "form-card"], [1, "subtitle"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "category"], ["id", "category", "formControlName", "category", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "error", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["for", "subject"], ["type", "text", "id", "subject", "formControlName", "subject", "placeholder", "Brief summary of your issue", 1, "form-control"], ["for", "priority"], ["id", "priority", "formControlName", "priority", 1, "form-control"], ["value", "low"], ["value", "medium"], ["value", "high"], ["for", "message"], ["id", "message", "formControlName", "message", "rows", "6", "placeholder", "Please describe your issue in detail...", 1, "form-control"], ["for", "attachment"], ["type", "file", "id", "attachment", "accept", "image/*,.pdf,.doc,.docx", 1, "form-control", "file-input", 3, "change"], [1, "help-text"], [1, "form-actions"], ["type", "button", "routerLink", "/client/tickets", 1, "btn-outline"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [3, "value"], [1, "error"], ["for", "order_id"], ["id", "order_id", "formControlName", "order_id", 1, "form-control"]], template: function TicketCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275text(3, "\u2190 Back to Tickets");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "h1");
      \u0275\u0275text(6, "Create Support Ticket");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, "Describe your issue and we'll get back to you as soon as possible.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "form", 5);
      \u0275\u0275listener("ngSubmit", function TicketCreateComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
      \u0275\u0275text(12, "Category *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 8)(14, "option", 9);
      \u0275\u0275text(15, "Select a category");
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, TicketCreateComponent_option_16_Template, 2, 2, "option", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, TicketCreateComponent_div_17_Template, 2, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, TicketCreateComponent_div_18_Template, 7, 1, "div", 12);
      \u0275\u0275elementStart(19, "div", 6)(20, "label", 13);
      \u0275\u0275text(21, "Subject *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 14);
      \u0275\u0275template(23, TicketCreateComponent_div_23_Template, 2, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 6)(25, "label", 15);
      \u0275\u0275text(26, "Priority *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "select", 16)(28, "option", 17);
      \u0275\u0275text(29, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 18);
      \u0275\u0275text(31, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 19);
      \u0275\u0275text(33, "High");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 6)(35, "label", 20);
      \u0275\u0275text(36, "Message *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "textarea", 21);
      \u0275\u0275template(38, TicketCreateComponent_div_38_Template, 2, 0, "div", 11)(39, TicketCreateComponent_div_39_Template, 2, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 6)(41, "label", 22);
      \u0275\u0275text(42, "Attachment (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "input", 23);
      \u0275\u0275listener("change", function TicketCreateComponent_Template_input_change_43_listener($event) {
        return ctx.onFileSelect($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "small", 24);
      \u0275\u0275text(45, "Max file size: 5MB. Supported: images, PDF, DOC");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 25)(47, "button", 26);
      \u0275\u0275text(48, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "button", 27);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      \u0275\u0275advance(9);
      \u0275\u0275property("formGroup", ctx.ticketForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.ticketForm.get("category")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.ticketForm.get("category")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.orders().length > 0);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.ticketForm.get("subject")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.ticketForm.get("subject")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]));
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.ticketForm.get("message")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.ticketForm.get("message")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.ticketForm.get("message")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.ticketForm.get("message")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["minlength"]));
      \u0275\u0275advance(10);
      \u0275\u0275property("disabled", ctx.submitting() || ctx.ticketForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.submitting() ? "Submitting..." : "Submit Ticket", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: [`

.create-ticket-container[_ngcontent-%COMP%] {
  max-width: 700px;
  margin: 0 auto;
}
.back-link[_ngcontent-%COMP%] {
  margin-bottom: 20px;
}
.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #0066cc;
  text-decoration: none;
  font-size: 14px;
}
.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
.form-card[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
.form-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px;
}
.subtitle[_ngcontent-%COMP%] {
  color: #666;
  margin: 0 0 32px;
}
.form-group[_ngcontent-%COMP%] {
  margin-bottom: 24px;
}
.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}
.form-control[_ngcontent-%COMP%] {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 15px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.form-control[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}
textarea.form-control[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 120px;
}
select.form-control[_ngcontent-%COMP%] {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 20px;
  padding-right: 40px;
}
.file-input[_ngcontent-%COMP%] {
  padding: 10px;
}
.help-text[_ngcontent-%COMP%] {
  display: block;
  margin-top: 6px;
  color: #888;
  font-size: 13px;
}
.error[_ngcontent-%COMP%] {
  color: #dc3545;
  font-size: 13px;
  margin-top: 6px;
}
.form-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
}
.btn-outline[_ngcontent-%COMP%] {
  padding: 12px 24px;
  border: 1px solid #e5e7eb;
  background: #fff;
  color: #444;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
}
.btn-primary[_ngcontent-%COMP%] {
  padding: 12px 24px;
  background: #0066cc;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
}
.btn-primary[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
/*# sourceMappingURL=ticket-create.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketCreateComponent, { className: "TicketCreateComponent", filePath: "src\\app\\features\\client\\tickets\\ticket-create.component.ts", lineNumber: 236 });
})();
export {
  TicketCreateComponent
};
//# sourceMappingURL=chunk-3D3A6UXV.js.map
