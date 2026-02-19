import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-TBAOAUH3.js";
import {
  AuthService
} from "./chunk-5AKWGKTS.js";
import {
  environment
} from "./chunk-OW254BTU.js";
import {
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5RHIFAVQ.js";
import "./chunk-MEBOPP65.js";

// src/app/features/client/settings/settings.component.ts
function SettingsComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function SettingsComponent_button_8_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeTab.set(tab_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === tab_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.label, " ");
  }
}
function SettingsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "h2");
    \u0275\u0275text(2, "Profile Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 10);
    \u0275\u0275listener("ngSubmit", function SettingsComponent_div_10_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateProfile());
    });
    \u0275\u0275elementStart(4, "div", 11)(5, "div", 12);
    \u0275\u0275element(6, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "input", 15);
    \u0275\u0275listener("change", function SettingsComponent_div_10_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAvatarSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 16);
    \u0275\u0275text(10, "Change Photo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 17)(12, "div", 18)(13, "label", 19);
    \u0275\u0275text(14, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18)(17, "label", 21);
    \u0275\u0275text(18, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 17)(21, "div", 18)(22, "label", 23);
    \u0275\u0275text(23, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 18)(26, "label", 25);
    \u0275\u0275text(27, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 27);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.profileForm);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", (ctx_r2.currentUser == null ? null : ctx_r2.currentUser.image) || "/assets/images/avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(23);
    \u0275\u0275property("disabled", ctx_r2.savingProfile());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.savingProfile() ? "Saving..." : "Save Changes", " ");
  }
}
function SettingsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "h2");
    \u0275\u0275text(2, "Change Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 10);
    \u0275\u0275listener("ngSubmit", function SettingsComponent_div_11_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changePassword());
    });
    \u0275\u0275elementStart(4, "div", 18)(5, "label", 28);
    \u0275\u0275text(6, "Current Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 18)(9, "label", 30);
    \u0275\u0275text(10, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 31);
    \u0275\u0275elementStart(12, "small", 32);
    \u0275\u0275text(13, "Password must be at least 8 characters");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 18)(15, "label", 33);
    \u0275\u0275text(16, "Confirm New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 27);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.passwordForm);
    \u0275\u0275advance(15);
    \u0275\u0275property("disabled", ctx_r2.savingPassword() || ctx_r2.passwordForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.savingPassword() ? "Updating..." : "Update Password", " ");
  }
}
function SettingsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "h2");
    \u0275\u0275text(2, "Notification Preferences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 10);
    \u0275\u0275listener("ngSubmit", function SettingsComponent_div_12_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNotifications());
    });
    \u0275\u0275elementStart(4, "div", 35)(5, "h3");
    \u0275\u0275text(6, "Email Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 36)(8, "span");
    \u0275\u0275text(9, "Order Updates");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 37)(11, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label", 36)(13, "span");
    \u0275\u0275text(14, "Promotional Offers");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 39)(16, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "label", 36)(18, "span");
    \u0275\u0275text(19, "Challan Alerts");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 40)(21, "span", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 35)(23, "h3");
    \u0275\u0275text(24, "Push Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label", 36)(26, "span");
    \u0275\u0275text(27, "Order Updates");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 41)(29, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "label", 36)(31, "span");
    \u0275\u0275text(32, "Promotional Offers");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 42)(34, "span", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 27);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.notificationForm);
    \u0275\u0275advance(32);
    \u0275\u0275property("disabled", ctx_r2.savingNotifications());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.savingNotifications() ? "Saving..." : "Save Preferences", " ");
  }
}
function SettingsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "h2");
    \u0275\u0275text(2, "Security Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "h3");
    \u0275\u0275text(5, "Two-Factor Authentication");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Add an extra layer of security to your account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 44);
    \u0275\u0275text(9, "Enable 2FA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 43)(11, "h3");
    \u0275\u0275text(12, "Active Sessions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14, "Manage devices where you're logged in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 45)(16, "div", 46)(17, "div", 47)(18, "strong");
    \u0275\u0275text(19, "Current Device");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Windows - Chrome");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "span", 48);
    \u0275\u0275text(23, "Active");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 49)(25, "h3");
    \u0275\u0275text(26, "Danger Zone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28, "Permanent actions that cannot be undone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 50);
    \u0275\u0275listener("click", function SettingsComponent_div_13_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteAccount());
    });
    \u0275\u0275text(30, "Delete Account");
    \u0275\u0275elementEnd()()();
  }
}
var SettingsComponent = class _SettingsComponent {
  fb;
  authService;
  http;
  activeTab = signal("profile");
  profileForm;
  passwordForm;
  notificationForm;
  savingProfile = signal(false);
  savingPassword = signal(false);
  savingNotifications = signal(false);
  currentUser;
  tabs = [
    { id: "profile", label: "Profile", icon: "\u{1F464}" },
    { id: "password", label: "Password", icon: "\u{1F512}" },
    { id: "notifications", label: "Notifications", icon: "\u{1F514}" },
    { id: "security", label: "Security", icon: "\u{1F6E1}\uFE0F" }
  ];
  constructor(fb, authService, http) {
    this.fb = fb;
    this.authService = authService;
    this.http = http;
    this.currentUser = this.authService.currentUser;
    this.profileForm = this.fb.group({
      first_name: [this.currentUser?.first_name || ""],
      last_name: [this.currentUser?.last_name || ""],
      email: [this.currentUser?.email || ""],
      phone: [this.currentUser?.phone || ""]
    });
    this.passwordForm = this.fb.group({
      current_password: ["", Validators.required],
      new_password: ["", [Validators.required, Validators.minLength(8)]],
      confirm_password: ["", Validators.required]
    });
    this.notificationForm = this.fb.group({
      email_orders: [true],
      email_promos: [true],
      email_challans: [true],
      push_orders: [true],
      push_promos: [false]
    });
  }
  ngOnInit() {
  }
  onAvatarSelect(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const formData = new FormData();
      formData.append("avatar", input.files[0]);
      this.http.post(`${environment.apiUrl}/profile/avatar`, formData).subscribe({
        next: (response) => {
          this.currentUser.image = response.avatar_url;
        }
      });
    }
  }
  updateProfile() {
    this.savingProfile.set(true);
    this.http.put(`${environment.apiUrl}/profile`, this.profileForm.value).subscribe({
      next: () => {
        this.savingProfile.set(false);
        alert("Profile updated successfully!");
      },
      error: () => {
        this.savingProfile.set(false);
        alert("Failed to update profile.");
      }
    });
  }
  changePassword() {
    if (this.passwordForm.value.new_password !== this.passwordForm.value.confirm_password) {
      alert("Passwords do not match");
      return;
    }
    this.savingPassword.set(true);
    this.http.put(`${environment.apiUrl}/profile/password`, this.passwordForm.value).subscribe({
      next: () => {
        this.savingPassword.set(false);
        this.passwordForm.reset();
        alert("Password changed successfully!");
      },
      error: () => {
        this.savingPassword.set(false);
        alert("Failed to change password.");
      }
    });
  }
  updateNotifications() {
    this.savingNotifications.set(true);
    this.http.put(`${environment.apiUrl}/profile/notifications`, this.notificationForm.value).subscribe({
      next: () => {
        this.savingNotifications.set(false);
        alert("Preferences saved!");
      },
      error: () => {
        this.savingNotifications.set(false);
      }
    });
  }
  deleteAccount() {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      if (confirm("This will permanently delete all your data. Continue?")) {
        this.http.delete(`${environment.apiUrl}/profile`).subscribe({
          next: () => {
            this.authService.logout();
          }
        });
      }
    }
  }
  static \u0275fac = function SettingsComponent_Factory(t) {
    return new (t || _SettingsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 5, consts: [[1, "settings-container"], [1, "page-header"], [1, "settings-grid"], [1, "settings-sidebar"], ["class", "sidebar-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "settings-content"], ["class", "tab-content", 4, "ngIf"], [1, "sidebar-btn", 3, "click"], [1, "tab-icon"], [1, "tab-content"], [3, "ngSubmit", "formGroup"], [1, "avatar-section"], [1, "avatar"], ["alt", "Profile", 3, "src"], [1, "avatar-actions"], ["type", "file", "id", "avatar", "accept", "image/*", "hidden", "", 3, "change"], ["for", "avatar", 1, "btn-outline"], [1, "form-row"], [1, "form-group"], ["for", "first_name"], ["type", "text", "id", "first_name", "formControlName", "first_name", 1, "form-control"], ["for", "last_name"], ["type", "text", "id", "last_name", "formControlName", "last_name", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "readonly", "", 1, "form-control"], ["for", "phone"], ["type", "tel", "id", "phone", "formControlName", "phone", 1, "form-control"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["for", "current_password"], ["type", "password", "id", "current_password", "formControlName", "current_password", 1, "form-control"], ["for", "new_password"], ["type", "password", "id", "new_password", "formControlName", "new_password", 1, "form-control"], [1, "help-text"], ["for", "confirm_password"], ["type", "password", "id", "confirm_password", "formControlName", "confirm_password", 1, "form-control"], [1, "preference-group"], [1, "toggle-label"], ["type", "checkbox", "formControlName", "email_orders"], [1, "toggle"], ["type", "checkbox", "formControlName", "email_promos"], ["type", "checkbox", "formControlName", "email_challans"], ["type", "checkbox", "formControlName", "push_orders"], ["type", "checkbox", "formControlName", "push_promos"], [1, "security-section"], [1, "btn-outline"], [1, "session-list"], [1, "session-item"], [1, "session-info"], [1, "session-status", "active"], [1, "security-section", "danger-zone"], [1, "btn-danger", 3, "click"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Manage your account settings and preferences");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2)(7, "div", 3);
      \u0275\u0275template(8, SettingsComponent_button_8_Template, 4, 4, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 5);
      \u0275\u0275template(10, SettingsComponent_div_10_Template, 31, 4, "div", 6)(11, SettingsComponent_div_11_Template, 20, 3, "div", 6)(12, SettingsComponent_div_12_Template, 37, 3, "div", 6)(13, SettingsComponent_div_13_Template, 31, 0, "div", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.tabs);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.activeTab() === "profile");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab() === "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab() === "notifications");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab() === "security");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n\n.settings-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.settings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  gap: 24px;\n}\n@media (max-width: 768px) {\n  .settings-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.settings-sidebar[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  height: fit-content;\n}\n.sidebar-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 14px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  text-align: left;\n  cursor: pointer;\n  font-size: 15px;\n  color: #444;\n  transition: all 0.2s;\n}\n.sidebar-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.sidebar-btn.active[_ngcontent-%COMP%] {\n  background: #0066cc;\n  color: #fff;\n}\n.tab-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.settings-content[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 24px;\n}\n.avatar-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 32px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 4px solid #e5e7eb;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 600px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 8px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 15px;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066cc;\n  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);\n}\n.form-control[readonly][_ngcontent-%COMP%] {\n  background: #f5f5f5;\n}\n.help-text[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  color: #888;\n  font-size: 13px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #0066cc;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  color: #444;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #dc3545;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.preference-group[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.preference-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 16px;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #e5e7eb;\n  cursor: pointer;\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.toggle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 24px;\n  background: #e5e7eb;\n  border-radius: 12px;\n  position: relative;\n  transition: background 0.3s;\n}\n.toggle[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  border-radius: 50%;\n  transition: transform 0.3s;\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle[_ngcontent-%COMP%] {\n  background: #0066cc;\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle[_ngcontent-%COMP%]::before {\n  transform: translateX(20px);\n}\n.security-section[_ngcontent-%COMP%] {\n  padding: 24px 0;\n  border-bottom: 1px solid #e5e7eb;\n}\n.security-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.security-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px;\n}\n.security-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  margin: 0 0 16px;\n}\n.session-list[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.session-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  background: #f9fafb;\n  border-radius: 8px;\n}\n.session-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #1a1a1a;\n}\n.session-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n}\n.session-status[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 12px;\n}\n.session-status.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.danger-zone[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 24px;\n  border-top: 2px solid #fee2e2;\n}\n.danger-zone[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #dc3545;\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src\\app\\features\\client\\settings\\settings.component.ts", lineNumber: 488 });
})();
export {
  SettingsComponent
};
