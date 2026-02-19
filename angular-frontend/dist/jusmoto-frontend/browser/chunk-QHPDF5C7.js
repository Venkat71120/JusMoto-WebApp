import {
  CheckboxControlValueAccessor,
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
} from "./chunk-X7FFWIXK.js";
import {
  environment
} from "./chunk-GUDC7RY7.js";
import {
  RouterModule
} from "./chunk-CMH3GDQY.js";
import {
  HttpClient
} from "./chunk-7QXR32YF.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  TitleCasePipe,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-37NMOBDC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// src/app/features/client/my-cars/my-cars.component.ts
function MyCarsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading your vehicles...");
    \u0275\u0275elementEnd()();
  }
}
function MyCarsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275text(2, "\u{1F697}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No cars added yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Add your vehicles to quickly select them during checkout.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 3);
    \u0275\u0275listener("click", function MyCarsComponent_div_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddForm.set(true));
    });
    \u0275\u0275text(8, "Add Your First Car");
    \u0275\u0275elementEnd()();
  }
}
function MyCarsComponent_div_11_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const make_r4 = ctx.$implicit;
    \u0275\u0275property("value", make_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(make_r4);
  }
}
function MyCarsComponent_div_11_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r5 = ctx.$implicit;
    \u0275\u0275property("value", year_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r5);
  }
}
function MyCarsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function MyCarsComponent_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275listener("click", function MyCarsComponent_div_11_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 14)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275listener("click", function MyCarsComponent_div_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 16);
    \u0275\u0275listener("ngSubmit", function MyCarsComponent_div_11_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCar());
    });
    \u0275\u0275elementStart(8, "div", 17)(9, "div", 18)(10, "label", 19);
    \u0275\u0275text(11, "Make *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 20);
    \u0275\u0275listener("change", function MyCarsComponent_div_11_Template_select_change_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMakeChange());
    });
    \u0275\u0275elementStart(13, "option", 21);
    \u0275\u0275text(14, "Select Make");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, MyCarsComponent_div_11_option_15_Template, 2, 2, "option", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 18)(17, "label", 23);
    \u0275\u0275text(18, "Model *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 17)(21, "div", 18)(22, "label", 25);
    \u0275\u0275text(23, "Year *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 26)(25, "option", 21);
    \u0275\u0275text(26, "Select Year");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, MyCarsComponent_div_11_option_27_Template, 2, 2, "option", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 18)(29, "label", 27);
    \u0275\u0275text(30, "Color");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 18)(33, "label", 29);
    \u0275\u0275text(34, "Registration Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 30);
    \u0275\u0275listener("input", function MyCarsComponent_div_11_Template_input_input_35_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formatRegistration($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 17)(37, "div", 18)(38, "label", 31);
    \u0275\u0275text(39, "Fuel Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 32)(41, "option", 33);
    \u0275\u0275text(42, "Petrol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 34);
    \u0275\u0275text(44, "Diesel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 35);
    \u0275\u0275text(46, "CNG");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 36);
    \u0275\u0275text(48, "Electric");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 37);
    \u0275\u0275text(50, "Hybrid");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 18)(52, "label", 38);
    \u0275\u0275text(53, "Transmission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "select", 39)(55, "option", 40);
    \u0275\u0275text(56, "Manual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "option", 41);
    \u0275\u0275text(58, "Automatic");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(59, "div", 42)(60, "label", 43);
    \u0275\u0275element(61, "input", 44);
    \u0275\u0275elementStart(62, "span");
    \u0275\u0275text(63, "Set as default vehicle");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 45)(65, "button", 46);
    \u0275\u0275listener("click", function MyCarsComponent_div_11_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275text(66, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 47);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingCar() ? "Edit Car" : "Add New Car");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.carForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.carMakes);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.years);
    \u0275\u0275advance(40);
    \u0275\u0275property("disabled", ctx_r1.submitting() || ctx_r1.carForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Saving..." : ctx_r1.editingCar() ? "Update Car" : "Add Car", " ");
  }
}
function MyCarsComponent_div_12_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function MyCarsComponent_div_12_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const car_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(car_r7.color);
  }
}
function MyCarsComponent_div_12_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const car_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, car_r7.fuel_type));
  }
}
function MyCarsComponent_div_12_div_1_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function MyCarsComponent_div_12_div_1_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const car_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setDefault(car_r7.id));
    });
    \u0275\u0275text(1, "Set Default");
    \u0275\u0275elementEnd();
  }
}
function MyCarsComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "div", 53);
    \u0275\u0275text(3, "\u{1F697}");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MyCarsComponent_div_12_div_1_span_4_Template, 2, 0, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 55)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 56);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 57)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, MyCarsComponent_div_12_div_1_span_13_Template, 2, 1, "span", 58)(14, MyCarsComponent_div_12_div_1_span_14_Template, 3, 3, "span", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 59)(16, "button", 60);
    \u0275\u0275listener("click", function MyCarsComponent_div_12_div_1_Template_button_click_16_listener() {
      const car_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editCar(car_r7));
    });
    \u0275\u0275text(17, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, MyCarsComponent_div_12_div_1_button_18_Template, 2, 0, "button", 61);
    \u0275\u0275elementStart(19, "button", 62);
    \u0275\u0275listener("click", function MyCarsComponent_div_12_div_1_Template_button_click_19_listener() {
      const car_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCar(car_r7.id));
    });
    \u0275\u0275text(20, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const car_r7 = ctx.$implicit;
    \u0275\u0275classProp("default", car_r7.is_default);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", car_r7.is_default);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", car_r7.make, " ", car_r7.model, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(car_r7.registration_number);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(car_r7.year);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", car_r7.color);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", car_r7.fuel_type);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !car_r7.is_default);
  }
}
function MyCarsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, MyCarsComponent_div_12_div_1_Template, 21, 10, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cars());
  }
}
var MyCarsComponent = class _MyCarsComponent {
  fb;
  http;
  cars = signal([]);
  loading = signal(true);
  showAddForm = signal(false);
  editingCar = signal(null);
  submitting = signal(false);
  carForm;
  carMakes = [
    "Maruti Suzuki",
    "Hyundai",
    "Tata",
    "Mahindra",
    "Kia",
    "Toyota",
    "Honda",
    "Ford",
    "Volkswagen",
    "Skoda",
    "Renault",
    "Nissan",
    "MG",
    "Jeep",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Other"
  ];
  years = [];
  constructor(fb, http) {
    this.fb = fb;
    this.http = http;
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    for (let i = currentYear; i >= 1990; i--) {
      this.years.push(i);
    }
    this.carForm = this.fb.group({
      make: ["", Validators.required],
      model: ["", Validators.required],
      year: ["", Validators.required],
      color: [""],
      registration_number: ["", Validators.required],
      fuel_type: ["petrol"],
      transmission: ["manual"],
      is_default: [false]
    });
  }
  ngOnInit() {
    this.loadCars();
  }
  loadCars() {
    this.loading.set(true);
    this.http.get(`${environment.apiUrl}/cars`).subscribe({
      next: (response) => {
        this.cars.set(response.data || response.cars || []);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  formatRegistration(event) {
    const input = event.target;
    input.value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
  }
  onMakeChange() {
  }
  editCar(car) {
    this.editingCar.set(car);
    this.carForm.patchValue(car);
    this.showAddForm.set(true);
  }
  closeForm() {
    this.showAddForm.set(false);
    this.editingCar.set(null);
    this.carForm.reset({
      fuel_type: "petrol",
      transmission: "manual",
      is_default: false
    });
  }
  saveCar() {
    if (this.carForm.invalid)
      return;
    this.submitting.set(true);
    const data = this.carForm.value;
    const request = this.editingCar() ? this.http.put(`${environment.apiUrl}/cars/${this.editingCar().id}`, data) : this.http.post(`${environment.apiUrl}/cars`, data);
    request.subscribe({
      next: () => {
        this.submitting.set(false);
        this.closeForm();
        this.loadCars();
      },
      error: () => {
        this.submitting.set(false);
        alert("Failed to save car. Please try again.");
      }
    });
  }
  setDefault(id) {
    this.http.put(`${environment.apiUrl}/cars/${id}/default`, {}).subscribe({
      next: () => {
        this.cars.update((items) => items.map((car) => __spreadProps(__spreadValues({}, car), { is_default: car.id === id })));
      }
    });
  }
  deleteCar(id) {
    if (confirm("Are you sure you want to delete this car?")) {
      this.http.delete(`${environment.apiUrl}/cars/${id}`).subscribe({
        next: () => {
          this.cars.update((items) => items.filter((car) => car.id !== id));
        }
      });
    }
  }
  static \u0275fac = function MyCarsComponent_Factory(t) {
    return new (t || _MyCarsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyCarsComponent, selectors: [["app-my-cars"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 4, consts: [[1, "my-cars-container"], [1, "page-header"], [1, "header-content"], [1, "btn-primary", 3, "click"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["class", "cars-grid", 4, "ngIf"], [1, "loading"], [1, "spinner"], [1, "empty-state"], [1, "empty-icon"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "make"], ["id", "make", "formControlName", "make", 1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "model"], ["type", "text", "id", "model", "formControlName", "model", "placeholder", "e.g., Swift, City", 1, "form-control"], ["for", "year"], ["id", "year", "formControlName", "year", 1, "form-control"], ["for", "color"], ["type", "text", "id", "color", "formControlName", "color", "placeholder", "e.g., White, Black", 1, "form-control"], ["for", "registration_number"], ["type", "text", "id", "registration_number", "formControlName", "registration_number", "placeholder", "e.g., MH12AB1234", 1, "form-control", 3, "input"], ["for", "fuel_type"], ["id", "fuel_type", "formControlName", "fuel_type", 1, "form-control"], ["value", "petrol"], ["value", "diesel"], ["value", "cng"], ["value", "electric"], ["value", "hybrid"], ["for", "transmission"], ["id", "transmission", "formControlName", "transmission", 1, "form-control"], ["value", "manual"], ["value", "automatic"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "is_default"], [1, "form-actions"], ["type", "button", 1, "btn-outline", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [3, "value"], [1, "cars-grid"], ["class", "car-card", 3, "default", 4, "ngFor", "ngForOf"], [1, "car-card"], [1, "car-header"], [1, "car-icon"], ["class", "default-badge", 4, "ngIf"], [1, "car-body"], [1, "registration"], [1, "car-details"], [4, "ngIf"], [1, "car-actions"], [1, "action-btn", 3, "click"], ["class", "action-btn", 3, "click", 4, "ngIf"], [1, "action-btn", "danger", 3, "click"], [1, "default-badge"]], template: function MyCarsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "My Cars");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Manage your registered vehicles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 3);
      \u0275\u0275listener("click", function MyCarsComponent_Template_button_click_7_listener() {
        return ctx.showAddForm.set(true);
      });
      \u0275\u0275text(8, " + Add New Car ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, MyCarsComponent_div_9_Template, 4, 0, "div", 4)(10, MyCarsComponent_div_10_Template, 9, 0, "div", 5)(11, MyCarsComponent_div_11_Template, 69, 6, "div", 6)(12, MyCarsComponent_div_12_Template, 2, 1, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.cars().length === 0 && !ctx.showAddForm());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddForm());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.cars().length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe, RouterModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: [`

.my-cars-container[_ngcontent-%COMP%] {
  max-width: 1000px;
  margin: 0 auto;
}
.page-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}
.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px;
}
.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #666;
  margin: 0;
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
.loading[_ngcontent-%COMP%] {
  text-align: center;
  padding: 60px 20px;
}
.spinner[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border: 3px solid #e5e7eb;
  border-top-color: #0066cc;
  border-radius: 50%;
  margin: 0 auto 16px;
  animation: _ngcontent-%COMP%_spin 1s linear infinite;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
.empty-state[_ngcontent-%COMP%] {
  text-align: center;
  padding: 60px 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
.empty-icon[_ngcontent-%COMP%] {
  font-size: 64px;
  margin-bottom: 16px;
}
.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 20px;
  color: #1a1a1a;
  margin: 0 0 8px;
}
.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #666;
  margin: 0 0 24px;
}
.modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}
.modal-content[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}
.modal-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
}
.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}
.close-btn[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  border: none;
  background: #f5f5f5;
  border-radius: 50%;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  color: #666;
}
form[_ngcontent-%COMP%] {
  padding: 24px;
}
.form-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.form-group[_ngcontent-%COMP%] {
  margin-bottom: 20px;
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
}
.form-control[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}
select.form-control[_ngcontent-%COMP%] {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 20px;
  padding-right: 40px;
}
.checkbox-group[_ngcontent-%COMP%] {
  margin-top: 8px;
}
.checkbox-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
}
.form-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 20px;
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
}
.cars-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
.car-card[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
  overflow: hidden;
  transition: all 0.2s;
}
.car-card[_ngcontent-%COMP%]:hover {
  border-color: #0066cc;
}
.car-card.default[_ngcontent-%COMP%] {
  border-color: #0066cc;
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.15);
}
.car-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}
.car-icon[_ngcontent-%COMP%] {
  font-size: 32px;
}
.default-badge[_ngcontent-%COMP%] {
  font-size: 11px;
  background: #0066cc;
  color: #fff;
  padding: 3px 10px;
  border-radius: 10px;
}
.car-body[_ngcontent-%COMP%] {
  padding: 20px;
}
.car-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 8px;
}
.registration[_ngcontent-%COMP%] {
  font-size: 16px;
  color: #0066cc;
  font-weight: 600;
  margin: 0 0 12px;
  letter-spacing: 1px;
}
.car-details[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.car-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 13px;
  background: #f5f5f5;
  padding: 4px 10px;
  border-radius: 12px;
  color: #666;
}
.car-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  padding: 12px 20px;
  border-top: 1px solid #e5e7eb;
  background: #f9fafb;
}
.action-btn[_ngcontent-%COMP%] {
  padding: 6px 14px;
  font-size: 13px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  color: #444;
  cursor: pointer;
}
.action-btn[_ngcontent-%COMP%]:hover {
  border-color: #0066cc;
  color: #0066cc;
}
.action-btn.danger[_ngcontent-%COMP%]:hover {
  border-color: #dc3545;
  color: #dc3545;
}
/*# sourceMappingURL=my-cars.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyCarsComponent, { className: "MyCarsComponent", filePath: "src\\app\\features\\client\\my-cars\\my-cars.component.ts", lineNumber: 464 });
})();
export {
  MyCarsComponent
};
//# sourceMappingURL=chunk-QHPDF5C7.js.map
