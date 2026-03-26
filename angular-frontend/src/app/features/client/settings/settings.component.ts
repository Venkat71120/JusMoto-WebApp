import { Component, OnInit, AfterViewChecked, signal, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';
import * as L from 'leaflet';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ConfirmModalComponent],
  template: `
    <div class="settings-container">
      <div class="page-header">
        <h1>Settings</h1>
        <p>Manage your account settings and preferences</p>
      </div>

      <div class="settings-grid">
        <div class="settings-sidebar">
          <button
            *ngFor="let tab of tabs"
            [class.active]="activeTab() === tab.id"
            (click)="switchTab(tab.id)"
            class="sidebar-btn">
            <span class="tab-icon" [innerHTML]="tab.icon"></span>
            {{ tab.label }}
          </button>
        </div>

        <div class="settings-content">
          <!-- Profile Tab -->
          <div class="tab-content" [hidden]="activeTab() !== 'profile'">
            <h2>Profile Information</h2>
            <div class="avatar-section">
              <div class="avatar" *ngIf="avatarUrl() && !avatarError()">
                <img [src]="avatarUrl()" alt="Profile" (error)="avatarError.set(true)">
              </div>
              <div class="avatar-initials" *ngIf="!avatarUrl() || avatarError()">
                {{ userInitials() }}
              </div>
              <div class="avatar-actions">
                <input type="file" id="avatar-upload" (change)="onAvatarSelect($event)" accept="image/*" hidden>
                <label for="avatar-upload" class="btn-outline">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  Change Photo
                </label>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="first_name">First Name</label>
                <input type="text" id="first_name" [(ngModel)]="profile.first_name" class="form-control" placeholder="Enter first name">
              </div>
              <div class="form-group">
                <label for="last_name">Last Name</label>
                <input type="text" id="last_name" [(ngModel)]="profile.last_name" class="form-control" placeholder="Enter last name">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" [(ngModel)]="profile.phone" class="form-control" placeholder="Enter 10-digit phone number" maxlength="10" pattern="\\d{10}" #phoneInput="ngModel">
                <span class="field-error" *ngIf="phoneInput.touched && phoneInput.invalid">Phone number must be exactly 10 digits</span>
              </div>
              <div class="form-group">
                <label for="date_of_birth">Date of Birth</label>
                <input type="date" id="date_of_birth" [(ngModel)]="profile.date_of_birth" class="form-control">
              </div>
            </div>

            <button class="btn-primary" (click)="updateProfile()" [disabled]="savingProfile()">
              {{ savingProfile() ? 'Saving...' : 'Save Changes' }}
            </button>
          </div>

          <!-- Password Tab -->
          <div class="tab-content" [hidden]="activeTab() !== 'password'">
            <h2>Change Password</h2>
            <div class="form-group">
              <label for="current_password">Current Password</label>
              <div class="password-wrapper">
                <input [type]="showCurrentPw() ? 'text' : 'password'" id="current_password" [(ngModel)]="passwords.current_password" class="form-control" placeholder="Enter current password">
                <button type="button" class="pw-toggle" (click)="showCurrentPw.set(!showCurrentPw())" tabindex="-1">
                  <svg *ngIf="!showCurrentPw()" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  <svg *ngIf="showCurrentPw()" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                </button>
              </div>
            </div>

            <div class="form-group">
              <label for="new_password">New Password</label>
              <div class="password-wrapper">
                <input [type]="showNewPw() ? 'text' : 'password'" id="new_password" [(ngModel)]="passwords.new_password" class="form-control" placeholder="Enter new password">
                <button type="button" class="pw-toggle" (click)="showNewPw.set(!showNewPw())" tabindex="-1">
                  <svg *ngIf="!showNewPw()" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  <svg *ngIf="showNewPw()" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                </button>
              </div>
              <small class="help-text">Password must be at least 8 characters</small>
            </div>

            <div class="form-group">
              <label for="confirm_password">Confirm New Password</label>
              <div class="password-wrapper">
                <input [type]="showConfirmPw() ? 'text' : 'password'" id="confirm_password" [(ngModel)]="passwords.confirm_password" class="form-control" placeholder="Re-enter new password">
                <button type="button" class="pw-toggle" (click)="showConfirmPw.set(!showConfirmPw())" tabindex="-1">
                  <svg *ngIf="!showConfirmPw()" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  <svg *ngIf="showConfirmPw()" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                </button>
              </div>
            </div>

            <button class="btn-primary" (click)="changePassword()" [disabled]="savingPassword()">
              {{ savingPassword() ? 'Updating...' : 'Update Password' }}
            </button>
          </div>

          <!-- Addresses Tab -->
          <div class="tab-content" [hidden]="activeTab() !== 'addresses'">
            <div class="addr-header">
              <h2>My Addresses</h2>
              <button class="btn-primary btn-sm" (click)="showAddressForm()" *ngIf="!addrFormVisible()">+ Add Address</button>
            </div>

            <!-- Address Form -->
            <div class="addr-form-section" *ngIf="addrFormVisible()">
              <h3>{{ editingAddrId ? 'Edit Address' : 'Add New Address' }}</h3>
              <div class="addr-form-grid">
                <div class="addr-form-fields">
                  <div class="form-row">
                    <div class="form-group">
                      <label>Full Name *</label>
                      <input type="text" [(ngModel)]="addrForm.name" class="form-control" placeholder="Full name">
                    </div>
                    <div class="form-group">
                      <label>Phone *</label>
                      <input type="tel" [(ngModel)]="addrForm.phone" class="form-control" placeholder="10-digit phone" maxlength="10">
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Street / Locality *</label>
                    <input type="text" [(ngModel)]="addrForm.street" class="form-control" placeholder="Street name, locality, landmark">
                  </div>
                  <div class="form-group">
                    <label>Full Address *</label>
                    <input type="text" [(ngModel)]="addrForm.address" class="form-control" placeholder="House No., Building, Area">
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>City *</label>
                      <input type="text" [(ngModel)]="addrForm.city" class="form-control" placeholder="City">
                    </div>
                    <div class="form-group">
                      <label>State *</label>
                      <select [(ngModel)]="addrForm.state" class="form-control">
                        <option value="">Select State</option>
                        <option *ngFor="let s of indianStates" [value]="s">{{ s }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>Pincode *</label>
                      <input type="text" [(ngModel)]="addrForm.zip_code" class="form-control" placeholder="6-digit pincode" maxlength="6">
                    </div>
                    <div class="form-group chk-group">
                      <label class="checkbox-label">
                        <input type="checkbox" [(ngModel)]="addrForm.is_default">
                        <span>Set as default</span>
                      </label>
                    </div>
                  </div>
                  <div class="form-row" *ngIf="addrForm.latitude">
                    <div class="form-group">
                      <label>Latitude</label>
                      <input type="text" [value]="addrForm.latitude" class="form-control" readonly>
                    </div>
                    <div class="form-group">
                      <label>Longitude</label>
                      <input type="text" [value]="addrForm.longitude" class="form-control" readonly>
                    </div>
                  </div>
                  <div class="form-actions">
                    <button class="btn-outline" (click)="cancelAddressForm()">Cancel</button>
                    <button class="btn-primary" (click)="saveAddress()" [disabled]="savingAddr()">
                      {{ savingAddr() ? 'Saving...' : (editingAddrId ? 'Update' : 'Save Address') }}
                    </button>
                  </div>
                </div>
                <div class="addr-map-wrapper">
                  <div class="map-search-bar">
                    <input type="text" [(ngModel)]="mapSearchQuery" class="form-control map-search-input"
                      placeholder="Search location..." (keydown.enter)="searchMapLocation()">
                    <button class="btn-search" (click)="searchMapLocation()" [disabled]="searchingMap()">
                      <svg *ngIf="!searchingMap()" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                      <span *ngIf="searchingMap()" class="search-spinner"></span>
                    </button>
                  </div>
                  <div class="search-results" *ngIf="mapSearchResults().length > 0">
                    <div *ngFor="let result of mapSearchResults()" class="search-result-item" (click)="selectSearchResult(result)">
                      {{ result.display_name }}
                    </div>
                  </div>
                  <div #mapContainer class="addr-map"></div>
                </div>
              </div>
            </div>

            <!-- Address List -->
            <div class="addr-list" *ngIf="!addrFormVisible()">
              <div *ngIf="loadingAddresses()" class="loading-text">Loading addresses...</div>
              <div *ngIf="!loadingAddresses() && addresses().length === 0" class="empty-text">
                No saved addresses. Add one to get started.
              </div>
              <div *ngFor="let addr of addresses()" class="addr-card" [class.default]="addr.is_default">
                <div class="addr-info">
                  <div class="addr-name">
                    {{ addr.name || 'Address' }}
                    <span class="addr-badge" *ngIf="addr.is_default">Default</span>
                  </div>
                  <p class="addr-text">{{ addr.address || addr.address_line1 }}<span *ngIf="addr.address_line2">, {{ addr.address_line2 }}</span></p>
                  <p class="addr-text">{{ addr.city }}, {{ addr.state }} - {{ addr.zip_code || addr.pincode }}</p>
                  <p class="addr-phone" *ngIf="addr.phone">{{ addr.phone }}</p>
                </div>
                <div class="addr-actions">
                  <button class="action-link" (click)="editAddress(addr)">Edit</button>
                  <button class="action-link" (click)="setDefault(addr)" *ngIf="!addr.is_default">Set Default</button>
                  <button class="action-link danger" (click)="deleteAddress(addr.id)">Delete</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Notifications Tab -->
          <div class="tab-content" [hidden]="activeTab() !== 'notifications'">
            <h2>Notification Preferences</h2>

            <div class="preference-group">
              <h3>Email Notifications</h3>
              <label class="toggle-label">
                <span>Order Updates</span>
                <input type="checkbox" [(ngModel)]="notifications.email_orders">
                <span class="toggle"></span>
              </label>
              <label class="toggle-label">
                <span>Promotional Offers</span>
                <input type="checkbox" [(ngModel)]="notifications.email_promos">
                <span class="toggle"></span>
              </label>
              <label class="toggle-label">
                <span>Challan Alerts</span>
                <input type="checkbox" [(ngModel)]="notifications.email_challans">
                <span class="toggle"></span>
              </label>
            </div>

            <div class="preference-group">
              <h3>Push Notifications</h3>
              <label class="toggle-label">
                <span>Order Updates</span>
                <input type="checkbox" [(ngModel)]="notifications.push_orders">
                <span class="toggle"></span>
              </label>
              <label class="toggle-label">
                <span>Promotional Offers</span>
                <input type="checkbox" [(ngModel)]="notifications.push_promos">
                <span class="toggle"></span>
              </label>
            </div>

            <button class="btn-primary" (click)="updateNotifications()" [disabled]="savingNotifications()">
              {{ savingNotifications() ? 'Saving...' : 'Save Preferences' }}
            </button>
          </div>

          <!-- Security Tab -->
          <div  class="tab-content" [hidden]="activeTab() !== 'security'">
            <h2>Security Settings</h2>

            <div class="security-section">
              <h3>Two-Factor Authentication</h3>
              <p>Add an extra layer of security to your account</p>
              <button class="btn-outline">Enable 2FA</button>
            </div>

            <div class="security-section">
              <h3>Active Sessions</h3>
              <p>Manage devices where you're logged in</p>
              <div class="session-list">
                <div class="session-item">
                  <div class="session-info">
                    <strong>Current Device</strong>
                    <span>Windows - Chrome</span>
                  </div>
                  <span class="session-status active">Active</span>
                </div>
              </div>
            </div>

            <div class="security-section danger-zone">
              <h3>Danger Zone</h3>
              <p>Permanent actions that cannot be undone</p>
              <button class="btn-danger" (click)="showDeleteModal.set(true)">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <app-confirm-modal
      [open]="showDeleteModal()"
      title="Delete Account"
      message="Are you sure you want to delete your account? This will permanently remove all your data and cannot be undone."
      confirmText="Delete My Account"
      type="danger"
      [loading]="deletingAccount()"
      (confirmed)="deleteAccount()"
      (cancelled)="showDeleteModal.set(false)">
    </app-confirm-modal>

    <app-confirm-modal
      [open]="showAddrDeleteModal()"
      title="Delete Address"
      message="Are you sure you want to delete this address?"
      confirmText="Delete"
      type="danger"
      (confirmed)="confirmDeleteAddress()"
      (cancelled)="showAddrDeleteModal.set(false)">
    </app-confirm-modal>
  `,
  styles: [`
    .settings-container { max-width: 1000px; margin: 0 auto; }
    .page-header { margin-bottom: 24px; }
    .page-header h1 { font-size: 28px; font-weight: 700; color: #1a1a1a; margin: 0 0 8px; }
    .page-header p { color: #666; margin: 0; }

    .settings-grid { display: grid; grid-template-columns: 240px 1fr; gap: 24px; }
    @media (max-width: 768px) { .settings-grid { grid-template-columns: 1fr; } }

    .settings-sidebar { background: #fff; border-radius: 12px; padding: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); height: fit-content; }
    .sidebar-btn { display: flex; align-items: center; gap: 12px; width: 100%; padding: 14px 16px; border: none; background: transparent; border-radius: 8px; text-align: left; cursor: pointer; font-size: 15px; color: #444; transition: all 0.2s; }
    .sidebar-btn:hover { background: #fff5f5; color: #e31b23; }
    .sidebar-btn.active { background: #e31b23; color: #fff; }
    .sidebar-btn.active .tab-icon :is(svg) { stroke: #fff; }
    .tab-icon { display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; }

    .settings-content { background: #fff; border-radius: 12px; padding: 32px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .tab-content h2 { font-size: 20px; font-weight: 600; color: #1a1a1a; margin: 0 0 24px; }

    .avatar-section { display: flex; align-items: center; gap: 20px; margin-bottom: 32px; }
    .avatar { width: 100px; height: 100px; border-radius: 50%; overflow: hidden; border: 4px solid #fecdd3; }
    .avatar img { width: 100%; height: 100%; object-fit: cover; }
    .avatar-initials { width: 100px; height: 100px; border-radius: 50%; background: #e31b23; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 36px; font-weight: 700; text-transform: uppercase; border: 4px solid #fecdd3; }
    .avatar-actions .btn-outline { display: inline-flex; align-items: center; gap: 8px; }

    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    @media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }
    .form-group { margin-bottom: 20px; }
    .form-group label { display: block; font-size: 14px; font-weight: 500; color: #333; margin-bottom: 8px; }
    .form-control { width: 100%; padding: 12px 16px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 15px; transition: border-color 0.2s, box-shadow 0.2s; box-sizing: border-box; }
    .form-control:focus { outline: none; border-color: #e31b23; box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1); }
    .form-control[readonly] { background: #f5f5f5; }
    .form-control.ng-invalid.ng-touched { border-color: #dc2626; }
    select.form-control { appearance: none; background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e"); background-position: right 12px center; background-repeat: no-repeat; background-size: 20px; padding-right: 40px; }
    .field-error { display: block; margin-top: 4px; color: #dc2626; font-size: 12px; font-weight: 500; }
    .help-text { display: block; margin-top: 6px; color: #888; font-size: 13px; }
    .password-wrapper { position: relative; }
    .password-wrapper .form-control { padding-right: 44px; }
    .pw-toggle { position: absolute; right: 8px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; padding: 4px; display: flex; align-items: center; justify-content: center; border-radius: 4px; }
    .pw-toggle:hover svg { stroke: #e31b23; }

    .btn-primary { padding: 12px 24px; background: #e31b23; color: #fff; border: none; border-radius: 8px; font-size: 15px; font-weight: 500; cursor: pointer; transition: background 0.2s; }
    .btn-primary:hover { background: #c8171e; }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
    .btn-primary.btn-sm { padding: 8px 18px; font-size: 14px; }
    .btn-outline { padding: 10px 20px; border: 1px solid #e5e7eb; background: #fff; color: #444; border-radius: 8px; font-size: 14px; cursor: pointer; transition: all 0.2s; }
    .btn-outline:hover { border-color: #e31b23; color: #e31b23; }
    .btn-danger { padding: 12px 24px; background: #dc3545; color: #fff; border: none; border-radius: 8px; font-size: 15px; font-weight: 500; cursor: pointer; transition: background 0.2s; }
    .btn-danger:hover { background: #b91c1c; }

    .preference-group { margin-bottom: 32px; }
    .preference-group h3 { font-size: 16px; font-weight: 600; color: #1a1a1a; margin: 0 0 16px; }
    .toggle-label { display: flex; justify-content: space-between; align-items: center; padding: 14px 0; border-bottom: 1px solid #f0f0f0; cursor: pointer; }
    .toggle-label span:first-child { font-size: 15px; color: #333; }
    .toggle-label input { display: none; }
    .toggle { width: 44px; height: 24px; background: #e5e7eb; border-radius: 12px; position: relative; transition: background 0.3s; flex-shrink: 0; }
    .toggle::before { content: ''; position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: #fff; border-radius: 50%; transition: transform 0.3s; box-shadow: 0 1px 3px rgba(0,0,0,0.15); }
    .toggle-label input:checked + .toggle { background: #e31b23; }
    .toggle-label input:checked + .toggle::before { transform: translateX(20px); }

    .security-section { padding: 24px 0; border-bottom: 1px solid #f0f0f0; }
    .security-section:last-child { border-bottom: none; }
    .security-section h3 { font-size: 16px; font-weight: 600; color: #1a1a1a; margin: 0 0 8px; }
    .security-section p { color: #666; font-size: 14px; margin: 0 0 16px; }
    .session-list { margin-top: 12px; }
    .session-item { display: flex; justify-content: space-between; align-items: center; padding: 14px 16px; background: #f9fafb; border-radius: 10px; }
    .session-info strong { display: block; color: #1a1a1a; font-size: 14px; }
    .session-info span { font-size: 13px; color: #666; }
    .session-status { font-size: 12px; font-weight: 500; padding: 4px 12px; border-radius: 12px; }
    .session-status.active { background: #d1fae5; color: #065f46; }
    .danger-zone { margin-top: 24px; padding-top: 24px; border-top: 2px solid #fee2e2; border-bottom: none; }
    .danger-zone h3 { color: #dc3545; }

    /* --- Addresses Tab --- */
    .addr-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0; }
    .addr-header h2 { margin-bottom: 0; }

    .addr-form-section { margin-top: 20px; padding: 24px; background: #f8f9fa; border-radius: 12px; }
    .addr-form-section h3 { font-size: 17px; font-weight: 600; color: #1a1a1a; margin: 0 0 20px; }
    .addr-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    @media (max-width: 768px) { .addr-form-grid { grid-template-columns: 1fr; } }
    .addr-form-fields { min-width: 0; }
    .addr-form-fields .form-group { margin-bottom: 16px; }
    .addr-form-fields .form-row { gap: 16px; }
    .chk-group { display: flex; align-items: flex-end; padding-bottom: 12px; }
    .checkbox-label { display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 14px; color: #444; }
    .checkbox-label input { width: 18px; height: 18px; cursor: pointer; accent-color: #e31b23; }
    .form-actions { display: flex; gap: 12px; justify-content: flex-end; margin-top: 8px; }

    .addr-map-wrapper { display: flex; flex-direction: column; min-height: 300px; }
    .map-search-bar { display: flex; gap: 8px; margin-bottom: 8px; }
    .map-search-input { flex: 1; padding: 10px 14px !important; font-size: 14px !important; }
    .btn-search { width: 42px; height: 42px; border: 1px solid #e5e7eb; background: #fff; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; flex-shrink: 0; }
    .btn-search:hover { border-color: #e31b23; color: #e31b23; }
    .btn-search:disabled { opacity: 0.5; cursor: not-allowed; }
    .search-spinner { width: 16px; height: 16px; border: 2px solid #e5e7eb; border-top-color: #e31b23; border-radius: 50%; animation: spin 0.6s linear infinite; display: inline-block; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .search-results { max-height: 180px; overflow-y: auto; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .search-result-item { padding: 10px 14px; font-size: 13px; color: #333; cursor: pointer; border-bottom: 1px solid #f0f0f0; line-height: 1.4; }
    .search-result-item:last-child { border-bottom: none; }
    .search-result-item:hover { background: #fff5f5; color: #e31b23; }
    .addr-map { flex: 1; min-height: 300px; border-radius: 10px; border: 1px solid #e5e7eb; z-index: 0; }

    .addr-list { margin-top: 20px; display: flex; flex-direction: column; gap: 12px; }
    .loading-text, .empty-text { text-align: center; color: #666; padding: 40px 0; }
    .addr-card { display: flex; justify-content: space-between; align-items: flex-start; padding: 20px; background: #f8f9fa; border-radius: 10px; border: 1px solid #e5e7eb; transition: all 0.2s; }
    .addr-card.default { border-color: #e31b23; background: #fff5f5; }
    .addr-card:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .addr-name { font-weight: 600; color: #1a1a1a; font-size: 15px; margin-bottom: 6px; }
    .addr-badge { display: inline-block; background: #e31b23; color: #fff; font-size: 11px; padding: 2px 8px; border-radius: 10px; margin-left: 8px; font-weight: 500; vertical-align: middle; }
    .addr-text { font-size: 14px; color: #555; margin: 0 0 2px; line-height: 1.5; }
    .addr-phone { font-size: 13px; color: #888; margin: 4px 0 0; }
    .addr-actions { display: flex; flex-direction: column; gap: 6px; flex-shrink: 0; margin-left: 16px; }
    .action-link { background: none; border: none; color: #e31b23; font-size: 13px; font-weight: 500; cursor: pointer; text-align: right; padding: 2px 0; }
    .action-link:hover { text-decoration: underline; }
    .action-link.danger { color: #dc3545; }
  `]
})
export class SettingsComponent implements OnInit, AfterViewChecked {
  @ViewChild('mapContainer') mapContainer!: ElementRef;

  activeTab = signal<string>('profile');
  savingProfile = signal(false);
  savingPassword = signal(false);
  savingNotifications = signal(false);
  showDeleteModal = signal(false);
  deletingAccount = signal(false);
  avatarUrl = signal<string>('');
  avatarError = signal(false);
  userInitials = signal('U');
  showCurrentPw = signal(false);
  showNewPw = signal(false);
  showConfirmPw = signal(false);

  // Address signals
  addresses = signal<any[]>([]);
  loadingAddresses = signal(false);
  addrFormVisible = signal(false);
  savingAddr = signal(false);
  showAddrDeleteModal = signal(false);
  searchingMap = signal(false);
  mapSearchResults = signal<any[]>([]);
  mapSearchQuery = '';
  editingAddrId: number | null = null;
  deletingAddrId: number | null = null;
  private map: L.Map | null = null;
  private marker: L.Marker | null = null;
  private mapInitialized = false;
  private needsMapInit = false;

  addrForm = {
    name: '', phone: '', street: '', address: '', city: '', state: '', zip_code: '',
    latitude: 0, longitude: 0, is_default: false
  };

  indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Delhi', 'Chandigarh', 'Puducherry'
  ];

  tabs = [
    { id: 'profile', label: 'Profile', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' },
    { id: 'password', label: 'Password', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>' },
    { id: 'addresses', label: 'Addresses', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>' },
    // { id: 'notifications', label: 'Notifications', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>' },
    // { id: 'security', label: 'Security', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' }
  ];

  profile = { first_name: '', last_name: '', phone: '', date_of_birth: '' };
  passwords = { current_password: '', new_password: '', confirm_password: '' };
  notifications = { email_orders: true, email_promos: true, email_challans: true, push_orders: true, push_promos: false };

  private baseUrl = environment.apiUrl.replace('/api/v1', '');

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadProfile();
    this.loadAddresses();
  }

  ngAfterViewChecked(): void {
    if (this.needsMapInit && this.mapContainer && !this.mapInitialized) {
      this.initMap();
      this.needsMapInit = false;
    }
  }

  switchTab(tab: string): void {
    this.activeTab.set(tab);
  }

  // ─── Profile Methods ───
  private loadProfile(): void {
    const user = this.authService.currentUser;
    if (user) {
      this.profile.first_name = user.first_name || '';
      this.profile.last_name = user.last_name || '';
      this.profile.phone = user.phone || '';
      this.avatarUrl.set(this.resolveImageUrl(user.image));
      this.avatarError.set(false);
      this.updateInitials(user.first_name, user.last_name);
    }

    this.http.get<any>(`${environment.apiUrl}/user/profile`).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          const u = res.data.user || res.data;
          this.profile.first_name = u.first_name || '';
          this.profile.last_name = u.last_name || '';
          this.profile.phone = u.phone || '';
          this.profile.date_of_birth = u.date_of_birth || '';
          this.updateInitials(u.first_name, u.last_name);
          if (u.image) {
            this.avatarUrl.set(this.resolveImageUrl(u.image));
            this.avatarError.set(false);
          }
        }
      },
      error: () => {}
    });
  }

  private updateInitials(firstName: string, lastName: string): void {
    const f = (firstName || '').charAt(0);
    const l = (lastName || '').charAt(0);
    this.userInitials.set((f + l).toUpperCase() || 'U');
  }

  private resolveImageUrl(image: string | undefined | null): string {
    if (!image) return '';
    if (image.startsWith('http') || image.startsWith('data:')) return image;
    return this.baseUrl + image;
  }

  onAvatarSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => { this.avatarUrl.set(e.target?.result as string); this.avatarError.set(false); };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('avatar', file);
      this.http.post<any>(`${environment.apiUrl}/upload/avatar`, formData).subscribe({
        next: (res) => {
          if (res.avatar_url) {
            this.avatarUrl.set(this.resolveImageUrl(res.avatar_url));
            this.avatarError.set(false);
            this.authService.updateCurrentUser({ image: res.avatar_url } as any);
          }
          this.toast.success('Avatar updated successfully');
        },
        error: () => { this.toast.error('Failed to upload avatar'); }
      });
    }
  }

  updateProfile(): void {

    // check required fields
    if (!this.profile.first_name || !this.profile.phone) {
      alert('Please fill all required fields');
      return;
    }

    const payload: any = {
      first_name: this.profile.first_name,
      last_name: this.profile.last_name || null,
      phone: this.profile.phone,
      date_of_birth: this.profile.date_of_birth || null
    };

    this.savingProfile.set(true);

    this.http.put<any>(`${environment.apiUrl}/user/profile`, payload).subscribe({
      next: () => {
        this.savingProfile.set(false);
        this.toast.success('Profile updated successfully');
      },
      error: () => {
        this.savingProfile.set(false);
        this.toast.error('Failed to update profile');
      }
    });

  }

  // ─── Password Methods ───
  changePassword(): void {

    if (!this.passwords.current_password || !this.passwords.new_password || !this.passwords.confirm_password) {
      this.toast.warning('Please fill in all password fields');
      return;
    }

    if (this.passwords.new_password.length < 8) {
      this.toast.warning('New password must be at least 8 characters');
      return;
    }

    if (this.passwords.new_password !== this.passwords.confirm_password) {
      this.toast.error('Passwords do not match');
      return;
    }

    this.savingPassword.set(true);

    this.http.put<any>(`${environment.apiUrl}/user/change-password`, {
      current_password: this.passwords.current_password,
      new_password: this.passwords.new_password,
      confirm_password: this.passwords.confirm_password
    }).subscribe({

      next: () => {
        this.savingPassword.set(false);
        this.passwords = { current_password: '', new_password: '', confirm_password: '' };
        this.toast.success('Password changed successfully');
      },

      error: (err) => {

        this.savingPassword.set(false);

        // ✅ Custom message for wrong current password
        if (err.error?.message === 'Current password is incorrect') {
          this.toast.error('Current password is not matching');
        } else {
          this.toast.error(err.error?.message || 'Failed to change password');
        }

      }

    });

  }

  // ─── Notification Prefs ───
  updateNotifications(): void {
    this.savingNotifications.set(true);
    this.http.put<any>(`${environment.apiUrl}/user/profile`, { notifications: this.notifications }).subscribe({
      next: () => { this.savingNotifications.set(false); this.toast.success('Notification preferences saved'); },
      error: () => { this.savingNotifications.set(false); this.toast.error('Failed to save preferences'); }
    });
  }

  // ─── Address Methods ───
  loadAddresses(): void {
    this.loadingAddresses.set(true);
    this.http.get<any>(`${environment.apiUrl}/user/addresses`).subscribe({
      next: (res) => {
        this.addresses.set(res.data || res.addresses || []);
        this.loadingAddresses.set(false);
      },
      error: () => { this.loadingAddresses.set(false); }
    });
  }

  showAddressForm(): void {
    this.editingAddrId = null;
    this.addrForm = { name: '', phone: '', street: '', address: '', city: '', state: '', zip_code: '', latitude: 0, longitude: 0, is_default: false };
    this.mapSearchQuery = '';
    this.mapSearchResults.set([]);
    this.addrFormVisible.set(true);
    this.mapInitialized = false;
    this.needsMapInit = true;
  }

  editAddress(addr: any): void {
    this.editingAddrId = addr.id;
    this.addrForm = {
      name: addr.name || addr.title || '',
      phone: addr.phone || '',
      street: '',
      address: addr.address || addr.address_line1 || '',
      city: addr.city || '',
      state: addr.state || '',
      zip_code: addr.zip_code || addr.post_code || addr.pincode || '',
      latitude: parseFloat(addr.latitude) || 0,
      longitude: parseFloat(addr.longitude) || 0,
      is_default: !!addr.is_default
    };
    this.mapSearchQuery = '';
    this.mapSearchResults.set([]);
    this.addrFormVisible.set(true);
    this.mapInitialized = false;
    this.needsMapInit = true;
  }

  cancelAddressForm(): void {
    this.addrFormVisible.set(false);
    this.mapSearchResults.set([]);
    this.destroyMap();
  }

  saveAddress(): void {
    if (!this.addrForm.name || !this.addrForm.phone || !this.addrForm.address || !this.addrForm.city || !this.addrForm.state || !this.addrForm.zip_code) {
      this.toast.error('Please fill in all required fields');
      return;
    }
    this.savingAddr.set(true);

    // Combine street into address if provided
    let fullAddress = this.addrForm.address;
    if (this.addrForm.street && !fullAddress.includes(this.addrForm.street)) {
      fullAddress = this.addrForm.street + ', ' + fullAddress;
    }

    const data = {
      name: this.addrForm.name,
      phone: this.addrForm.phone,
      address: fullAddress,
      city: this.addrForm.city,
      state: this.addrForm.state,
      zip_code: this.addrForm.zip_code,
      latitude: this.addrForm.latitude || null,
      longitude: this.addrForm.longitude || null,
      is_default: this.addrForm.is_default ? 1 : 0
    };

    const req = this.editingAddrId
      ? this.http.put(`${environment.apiUrl}/user/addresses/${this.editingAddrId}`, data)
      : this.http.post(`${environment.apiUrl}/user/addresses`, data);

    req.subscribe({
      next: () => {
        this.savingAddr.set(false);
        this.addrFormVisible.set(false);
        this.mapSearchResults.set([]);
        this.destroyMap();
        this.toast.success(this.editingAddrId ? 'Address updated' : 'Address added');
        this.loadAddresses();
      },
      error: (err) => { this.savingAddr.set(false); this.toast.error(err.error?.error || 'Failed to save address'); }
    });
  }

  // ─── Map Search Methods ───
  searchMapLocation(): void {
    if (!this.mapSearchQuery.trim()) return;
    this.searchingMap.set(true);
    this.mapSearchResults.set([]);

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(this.mapSearchQuery)}&countrycodes=in&limit=5&addressdetails=1`)
      .then(r => r.json())
      .then(results => {
        this.searchingMap.set(false);
        this.mapSearchResults.set(results || []);
      })
      .catch(() => {
        this.searchingMap.set(false);
        this.toast.error('Search failed. Try again.');
      });
  }

  selectSearchResult(result: any): void {
    const lat = parseFloat(result.lat);
    const lng = parseFloat(result.lon);
    this.addrForm.latitude = lat;
    this.addrForm.longitude = lng;
    this.mapSearchResults.set([]);

    // Fill address fields from result
    const a = result.address || {};
    const road = [a.road, a.neighbourhood, a.suburb].filter(Boolean).join(', ');
    if (road) this.addrForm.street = road;
    if (a.city || a.town || a.village || a.city_district) this.addrForm.city = a.city || a.town || a.village || a.city_district || '';
    if (a.state) this.addrForm.state = a.state;
    if (a.postcode) this.addrForm.zip_code = a.postcode;

    // Update map
    if (this.map) {
      this.map.setView([lat, lng], 16);
      if (this.marker) {
        this.marker.setLatLng([lat, lng]);
      } else {
        this.marker = L.marker([lat, lng]).addTo(this.map);
      }
    }
  }

  setDefault(addr: any): void {
    this.http.put(`${environment.apiUrl}/user/addresses/${addr.id}`, {
      name: addr.name || addr.title,
      address: addr.address,
      city: addr.city,
      state: addr.state,
      zip_code: addr.zip_code || addr.post_code,
      phone: addr.phone,
      latitude: addr.latitude,
      longitude: addr.longitude,
      is_default: 1
    }).subscribe({
      next: () => { this.toast.success('Default address updated'); this.loadAddresses(); },
      error: () => { this.toast.error('Failed to update default'); }
    });
  }

  deleteAddress(id: number): void {
    this.deletingAddrId = id;
    this.showAddrDeleteModal.set(true);
  }

  confirmDeleteAddress(): void {
    if (!this.deletingAddrId) return;
    this.http.delete(`${environment.apiUrl}/user/addresses/${this.deletingAddrId}`).subscribe({
      next: () => {
        this.showAddrDeleteModal.set(false);
        this.toast.success('Address deleted');
        this.loadAddresses();
      },
      error: () => { this.showAddrDeleteModal.set(false); this.toast.error('Failed to delete address'); }
    });
  }

  // ─── Map Methods ───
  private initMap(): void {
    if (!this.mapContainer?.nativeElement) return;
    this.mapInitialized = true;

    // Fix leaflet default icon paths
    const iconDefault = L.icon({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41]
    });
    L.Marker.prototype.options.icon = iconDefault;

    const lat = this.addrForm.latitude || 20.5937;
    const lng = this.addrForm.longitude || 78.9629;
    const zoom = this.addrForm.latitude ? 15 : 5;

    this.map = L.map(this.mapContainer.nativeElement).setView([lat, lng], zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap'
    }).addTo(this.map);

    if (this.addrForm.latitude && this.addrForm.longitude) {
      this.marker = L.marker([this.addrForm.latitude, this.addrForm.longitude]).addTo(this.map);
    }

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      this.addrForm.latitude = lat;
      this.addrForm.longitude = lng;

      if (this.marker) {
        this.marker.setLatLng([lat, lng]);
      } else if (this.map) {
        this.marker = L.marker([lat, lng]).addTo(this.map);
      }

      // Reverse geocode
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`)
        .then(r => r.json())
        .then(data => {
          if (data.address) {
            const a = data.address;
            const road = [a.road, a.neighbourhood, a.suburb].filter(Boolean).join(', ');
            if (road) this.addrForm.street = road;
            const area = [a.county, a.state_district].filter(Boolean).join(', ');
            if (area && !this.addrForm.address) this.addrForm.address = area;
            if (a.city || a.town || a.village || a.city_district) this.addrForm.city = a.city || a.town || a.village || a.city_district || '';
            if (a.state) this.addrForm.state = a.state;
            if (a.postcode) this.addrForm.zip_code = a.postcode;
          }
        })
        .catch(() => {});
    });

    setTimeout(() => this.map?.invalidateSize(), 200);
  }

  private destroyMap(): void {
    if (this.map) {
      this.map.remove();
      this.map = null;
      this.marker = null;
      this.mapInitialized = false;
    }
  }

  // ─── Account Deletion ───
  deleteAccount(): void {
    this.deletingAccount.set(true);
    this.http.delete<any>(`${environment.apiUrl}/user/profile`).subscribe({
      next: () => {
        this.deletingAccount.set(false);
        this.showDeleteModal.set(false);
        this.toast.success('Account deleted');
        this.authService.logout();
      },
      error: () => { this.deletingAccount.set(false); this.toast.error('Failed to delete account'); }
    });
  }
}
