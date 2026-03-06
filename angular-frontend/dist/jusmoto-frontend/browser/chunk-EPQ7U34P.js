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
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RLLOV7VK.js";
import "./chunk-LRITERKE.js";

// src/app/features/admin/staff/staff-list.component.ts
function StaffListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function StaffListComponent_tr_33_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "path", 34)(3, "circle", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", s_r2.outletLocation.name, " ");
  }
}
function StaffListComponent_tr_33_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function StaffListComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, StaffListComponent_tr_33_span_10_Template, 5, 1, "span", 20)(11, StaffListComponent_tr_33_span_11_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 22);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "button", 23);
    \u0275\u0275listener("click", function StaffListComponent_tr_33_Template_button_click_16_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.statusItem.set(s_r2));
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 24)(20, "button", 25);
    \u0275\u0275listener("click", function StaffListComponent_tr_33_Template_button_click_20_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditModal(s_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 26);
    \u0275\u0275element(22, "path", 27)(23, "path", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "button", 29);
    \u0275\u0275listener("click", function StaffListComponent_tr_33_Template_button_click_24_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteStaff(s_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 26);
    \u0275\u0275element(26, "polyline", 30)(27, "path", 31);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.username || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r2.outletLocation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !s_r2.outletLocation);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r2.role || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-green", s_r2.status)("badge-red", !s_r2.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r2.status ? "Active" : "Inactive", " ");
  }
}
function StaffListComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2, "No franchise admins found");
    \u0275\u0275elementEnd()();
  }
}
function StaffListComponent_div_35_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r6 = ctx.$implicit;
    \u0275\u0275property("value", loc_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", loc_r6.name, " - ", loc_r6.address, "");
  }
}
function StaffListComponent_div_35_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function StaffListComponent_div_35_option_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    \u0275\u0275property("value", r_r7.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r7.name);
  }
}
function StaffListComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function StaffListComponent_div_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275listener("click", function StaffListComponent_div_35_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 40)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 41);
    \u0275\u0275listener("click", function StaffListComponent_div_35_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 42);
    \u0275\u0275element(7, "path", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 44)(9, "div", 45)(10, "div", 46)(11, "label");
    \u0275\u0275text(12, "Name ");
    \u0275\u0275elementStart(13, "span", 47);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function StaffListComponent_div_35_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.name, $event) || (ctx_r2.formData.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 46)(17, "label");
    \u0275\u0275text(18, "Username ");
    \u0275\u0275elementStart(19, "span", 47);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function StaffListComponent_div_35_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.username, $event) || (ctx_r2.formData.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 46)(23, "label");
    \u0275\u0275text(24, "Email ");
    \u0275\u0275elementStart(25, "span", 47);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function StaffListComponent_div_35_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.email, $event) || (ctx_r2.formData.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 46)(29, "label");
    \u0275\u0275text(30, "Franchise Location (Outlet) ");
    \u0275\u0275elementStart(31, "span", 47);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function StaffListComponent_div_35_Template_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.outlet_location_id, $event) || (ctx_r2.formData.outlet_location_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(34, "option", 52);
    \u0275\u0275text(35, "Select Outlet Location");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, StaffListComponent_div_35_option_36_Template, 2, 3, "option", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 46)(38, "label");
    \u0275\u0275text(39);
    \u0275\u0275template(40, StaffListComponent_div_35_span_40_Template, 2, 0, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function StaffListComponent_div_35_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.password, $event) || (ctx_r2.formData.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 45)(43, "div", 46)(44, "label");
    \u0275\u0275text(45, "Role ");
    \u0275\u0275elementStart(46, "span", 47);
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function StaffListComponent_div_35_Template_select_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.role, $event) || (ctx_r2.formData.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(49, "option", 52);
    \u0275\u0275text(50, "Select Role");
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, StaffListComponent_div_35_option_51_Template, 2, 2, "option", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 46)(53, "label");
    \u0275\u0275text(54, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 56)(56, "button", 57);
    \u0275\u0275listener("click", function StaffListComponent_div_35_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formData.status = 1);
    });
    \u0275\u0275text(57, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 57);
    \u0275\u0275listener("click", function StaffListComponent_div_35_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formData.status = 0);
    });
    \u0275\u0275text(59, "Inactive");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(60, "div", 58)(61, "button", 59);
    \u0275\u0275listener("click", function StaffListComponent_div_35_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(62, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 60);
    \u0275\u0275listener("click", function StaffListComponent_div_35_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveStaff());
    });
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.editingStaff() ? "Edit Franchise Admin" : "Add Franchise Admin");
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.username);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.email);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.outlet_location_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.outletLocations());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Password ", ctx_r2.editingStaff() ? "(leave blank to keep)" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.editingStaff());
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.password);
    \u0275\u0275property("placeholder", ctx_r2.editingStaff() ? "Leave blank to keep current" : "Password");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.role);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.roles());
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r2.formData.status === 1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.formData.status === 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving() ? "Saving..." : ctx_r2.editingStaff() ? "Update" : "Create", " ");
  }
}
var StaffListComponent = class _StaffListComponent {
  http;
  toast;
  staff = signal([]);
  roles = signal([]);
  outletLocations = signal([]);
  loading = signal(false);
  saving = signal(false);
  showModal = signal(false);
  editingStaff = signal(null);
  deletingItem = signal(null);
  statusItem = signal(null);
  search = "";
  searchTimeout;
  formData = { name: "", username: "", email: "", password: "", role: "", outlet_location_id: "", status: 1 };
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadStaff();
    this.loadRoles();
    this.loadOutletLocations();
  }
  loadStaff() {
    this.loading.set(true);
    const params = {};
    if (this.search)
      params.search = this.search;
    this.http.get(`${environment.apiUrl}/admin/staff`, { params }).subscribe({
      next: (res) => this.staff.set(res.data || []),
      error: () => {
      },
      complete: () => this.loading.set(false)
    });
  }
  loadRoles() {
    this.http.get(`${environment.apiUrl}/admin/roles`).subscribe({
      next: (res) => this.roles.set(res.data || []),
      error: () => {
      }
    });
  }
  loadOutletLocations() {
    this.http.get(`${environment.apiUrl}/admin/outlet-locations`).subscribe({
      next: (res) => this.outletLocations.set(res.data || []),
      error: () => {
      }
    });
  }
  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadStaff(), 400);
  }
  openAddModal() {
    this.editingStaff.set(null);
    this.formData = { name: "", username: "", email: "", password: "", role: "", outlet_location_id: "", status: 1 };
    this.showModal.set(true);
  }
  openEditModal(s) {
    this.editingStaff.set(s);
    this.formData = {
      name: s.name || "",
      username: s.username || "",
      email: s.email || "",
      password: "",
      role: s.role || "",
      outlet_location_id: s.outlet_location_id ? String(s.outlet_location_id) : "",
      status: s.status ? 1 : 0
    };
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
    this.editingStaff.set(null);
  }
  saveStaff() {
    if (!this.formData.name || !this.formData.username || !this.formData.email || !this.formData.role) {
      this.toast.error("Name, username, email and role are required");
      return;
    }
    if (!this.editingStaff() && !this.formData.password) {
      this.toast.error("Password is required for new franchise admin");
      return;
    }
    this.saving.set(true);
    const payload = {
      name: this.formData.name,
      username: this.formData.username,
      email: this.formData.email,
      role: this.formData.role,
      outlet_location_id: this.formData.outlet_location_id || null,
      status: this.formData.status
    };
    if (this.formData.password)
      payload.password = this.formData.password;
    const editing = this.editingStaff();
    const req = editing ? this.http.put(`${environment.apiUrl}/admin/staff/${editing.id}`, payload) : this.http.post(`${environment.apiUrl}/admin/staff`, payload);
    req.subscribe({
      next: () => {
        this.toast.success(editing ? "Franchise admin updated" : "Franchise admin created");
        this.closeModal();
        this.loadStaff();
        this.saving.set(false);
      },
      error: (err) => {
        this.toast.error(err.error?.error || "Failed to save franchise admin");
        this.saving.set(false);
      }
    });
  }
  deleteStaff(s) {
    this.deletingItem.set(s);
  }
  confirmDelete() {
    const s = this.deletingItem();
    if (!s)
      return;
    this.http.delete(`${environment.apiUrl}/admin/staff/${s.id}`).subscribe({
      next: () => {
        this.toast.success("Franchise admin deleted");
        this.deletingItem.set(null);
        this.loadStaff();
      },
      error: () => {
        this.toast.error("Failed to delete franchise admin");
        this.deletingItem.set(null);
      }
    });
  }
  confirmToggleStatus() {
    const s = this.statusItem();
    if (!s)
      return;
    const newStatus = s.status ? 0 : 1;
    this.http.put(`${environment.apiUrl}/admin/staff/${s.id}`, { status: newStatus }).subscribe({
      next: () => {
        s.status = newStatus;
        this.toast.success("Status updated");
        this.statusItem.set(null);
      },
      error: () => {
        this.toast.error("Failed to update status");
        this.statusItem.set(null);
      }
    });
  }
  static \u0275fac = function StaffListComponent_Factory(t) {
    return new (t || _StaffListComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffListComponent, selectors: [["app-staff-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 9, consts: [[1, "page-header"], [1, "page-title"], [1, "btn-primary", 3, "click"], [1, "filters-bar"], [1, "search-box-wrap"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#94a3b8", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search franchise admins...", 1, "search-box", 3, "ngModelChange", "input", "ngModel"], [1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["title", "Delete Franchise Admin", "confirmText", "Delete", "type", "danger", 3, "confirmed", "cancelled", "open", "message"], ["title", "Change Status", "confirmText", "Change Status", "type", "warning", 3, "confirmed", "cancelled", "open", "message"], [1, "loading-overlay"], [1, "spinner"], [1, "fw-600"], ["class", "location-badge", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "role-badge"], [1, "badge", "badge-clickable", 3, "click"], [1, "action-btns"], ["title", "Edit", 1, "action-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Delete", 1, "action-btn", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"], [1, "location-badge"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"], ["cx", "12", "cy", "10", "r", "3"], [1, "text-muted"], ["colspan", "8", 1, "empty-state"], [1, "modal-backdrop", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M18 6L6 18M6 6l12 12"], [1, "modal-body"], [1, "form-row"], [1, "form-group"], [1, "required"], ["type", "text", "placeholder", "Full name", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Username", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "Email address", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "required", 4, "ngIf"], ["type", "password", 1, "form-input", 3, "ngModelChange", "ngModel", "placeholder"], [1, "status-toggle"], [1, "toggle-btn", 3, "click"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [3, "value"]], template: function StaffListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Franchise Admins");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 2);
      \u0275\u0275listener("click", function StaffListComponent_Template_button_click_3_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275text(4, "+ Add Franchise Admin");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 5);
      \u0275\u0275element(8, "circle", 6)(9, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function StaffListComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function StaffListComponent_Template_input_input_10_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 9);
      \u0275\u0275template(12, StaffListComponent_div_12_Template, 2, 0, "div", 10);
      \u0275\u0275elementStart(13, "table", 11)(14, "thead")(15, "tr")(16, "th");
      \u0275\u0275text(17, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Outlet Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "tbody");
      \u0275\u0275template(33, StaffListComponent_tr_33_Template, 28, 12, "tr", 12)(34, StaffListComponent_tr_34_Template, 3, 0, "tr", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(35, StaffListComponent_div_35_Template, 65, 18, "div", 14);
      \u0275\u0275elementStart(36, "app-confirm-modal", 15);
      \u0275\u0275listener("confirmed", function StaffListComponent_Template_app_confirm_modal_confirmed_36_listener() {
        return ctx.confirmDelete();
      })("cancelled", function StaffListComponent_Template_app_confirm_modal_cancelled_36_listener() {
        return ctx.deletingItem.set(null);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "app-confirm-modal", 16);
      \u0275\u0275listener("confirmed", function StaffListComponent_Template_app_confirm_modal_confirmed_37_listener() {
        return ctx.confirmToggleStatus();
      })("cancelled", function StaffListComponent_Template_app_confirm_modal_cancelled_37_listener() {
        return ctx.statusItem.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_6_0;
      let tmp_8_0;
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.staff());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.staff().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal());
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.deletingItem())("message", 'Delete "' + (((tmp_6_0 = ctx.deletingItem()) == null ? null : tmp_6_0.name) || "") + '"? This cannot be undone.');
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.statusItem())("message", 'Change status of "' + (((tmp_8_0 = ctx.statusItem()) == null ? null : tmp_8_0.name) || "") + '" to ' + (((tmp_8_0 = ctx.statusItem()) == null ? null : tmp_8_0.status) ? "Inactive" : "Active") + "?");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.search-box-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 0 14px;\n  flex: 1;\n  max-width: 400px;\n}\n.search-box[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  width: 100%;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #f3f4f6;\n  border-top-color: #e31b23;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fff5f5;\n}\n.fw-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.role-badge[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n  padding: 3px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.location-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #e0f2fe;\n  color: #0284c7;\n  padding: 3px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: opacity 0.2s;\n  border: none;\n}\n.badge-clickable[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  color: #64748b;\n  display: inline-flex;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #e31b23;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: #94a3b8;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  width: 100%;\n  max-width: 540px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  padding: 4px;\n  border-radius: 6px;\n  display: flex;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #334155;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px;\n  border-top: 1px solid #f1f5f9;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n}\n.required[_ngcontent-%COMP%] {\n  color: #e31b23;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  outline: none;\n  transition: border 0.2s;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #e31b23;\n  box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.08);\n}\nselect.form-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.status-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  color: #64748b;\n  transition: all 0.2s;\n}\n.toggle-btn.active[_ngcontent-%COMP%] {\n  background: #e31b23;\n  color: #fff;\n  border-color: #e31b23;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 600;\n  color: #64748b;\n  font-size: 14px;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: none;\n  border-radius: 8px;\n  background: #e31b23;\n  color: #fff;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #b11218;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 768px) {\n  .table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffListComponent, { className: "StaffListComponent", filePath: "src\\app\\features\\admin\\staff\\staff-list.component.ts", lineNumber: 223 });
})();
export {
  StaffListComponent
};
