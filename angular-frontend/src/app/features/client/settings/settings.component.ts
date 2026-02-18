import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
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
            (click)="activeTab.set(tab.id)"
            class="sidebar-btn">
            <span class="tab-icon">{{ tab.icon }}</span>
            {{ tab.label }}
          </button>
        </div>

        <div class="settings-content">
          <!-- Profile Tab -->
          <div *ngIf="activeTab() === 'profile'" class="tab-content">
            <h2>Profile Information</h2>
            <form [formGroup]="profileForm" (ngSubmit)="updateProfile()">
              <div class="avatar-section">
                <div class="avatar">
                  <img [src]="currentUser?.image || '/assets/images/avatar.png'" alt="Profile">
                </div>
                <div class="avatar-actions">
                  <input type="file" id="avatar" (change)="onAvatarSelect($event)" accept="image/*" hidden>
                  <label for="avatar" class="btn-outline">Change Photo</label>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="first_name">First Name</label>
                  <input type="text" id="first_name" formControlName="first_name" class="form-control">
                </div>
                <div class="form-group">
                  <label for="last_name">Last Name</label>
                  <input type="text" id="last_name" formControlName="last_name" class="form-control">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" formControlName="email" class="form-control" readonly>
                </div>
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input type="tel" id="phone" formControlName="phone" class="form-control">
                </div>
              </div>

              <button type="submit" class="btn-primary" [disabled]="savingProfile()">
                {{ savingProfile() ? 'Saving...' : 'Save Changes' }}
              </button>
            </form>
          </div>

          <!-- Password Tab -->
          <div *ngIf="activeTab() === 'password'" class="tab-content">
            <h2>Change Password</h2>
            <form [formGroup]="passwordForm" (ngSubmit)="changePassword()">
              <div class="form-group">
                <label for="current_password">Current Password</label>
                <input type="password" id="current_password" formControlName="current_password" class="form-control">
              </div>

              <div class="form-group">
                <label for="new_password">New Password</label>
                <input type="password" id="new_password" formControlName="new_password" class="form-control">
                <small class="help-text">Password must be at least 8 characters</small>
              </div>

              <div class="form-group">
                <label for="confirm_password">Confirm New Password</label>
                <input type="password" id="confirm_password" formControlName="confirm_password" class="form-control">
              </div>

              <button type="submit" class="btn-primary" [disabled]="savingPassword() || passwordForm.invalid">
                {{ savingPassword() ? 'Updating...' : 'Update Password' }}
              </button>
            </form>
          </div>

          <!-- Notifications Tab -->
          <div *ngIf="activeTab() === 'notifications'" class="tab-content">
            <h2>Notification Preferences</h2>
            <form [formGroup]="notificationForm" (ngSubmit)="updateNotifications()">
              <div class="preference-group">
                <h3>Email Notifications</h3>
                <label class="toggle-label">
                  <span>Order Updates</span>
                  <input type="checkbox" formControlName="email_orders">
                  <span class="toggle"></span>
                </label>
                <label class="toggle-label">
                  <span>Promotional Offers</span>
                  <input type="checkbox" formControlName="email_promos">
                  <span class="toggle"></span>
                </label>
                <label class="toggle-label">
                  <span>Challan Alerts</span>
                  <input type="checkbox" formControlName="email_challans">
                  <span class="toggle"></span>
                </label>
              </div>

              <div class="preference-group">
                <h3>Push Notifications</h3>
                <label class="toggle-label">
                  <span>Order Updates</span>
                  <input type="checkbox" formControlName="push_orders">
                  <span class="toggle"></span>
                </label>
                <label class="toggle-label">
                  <span>Promotional Offers</span>
                  <input type="checkbox" formControlName="push_promos">
                  <span class="toggle"></span>
                </label>
              </div>

              <button type="submit" class="btn-primary" [disabled]="savingNotifications()">
                {{ savingNotifications() ? 'Saving...' : 'Save Preferences' }}
              </button>
            </form>
          </div>

          <!-- Security Tab -->
          <div *ngIf="activeTab() === 'security'" class="tab-content">
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
              <button class="btn-danger" (click)="deleteAccount()">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .settings-container {
      max-width: 1000px;
      margin: 0 auto;
    }

    .page-header {
      margin-bottom: 24px;
    }

    .page-header h1 {
      font-size: 28px;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 8px;
    }

    .page-header p {
      color: #666;
      margin: 0;
    }

    .settings-grid {
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 24px;
    }

    @media (max-width: 768px) {
      .settings-grid {
        grid-template-columns: 1fr;
      }
    }

    .settings-sidebar {
      background: #fff;
      border-radius: 12px;
      padding: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      height: fit-content;
    }

    .sidebar-btn {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      padding: 14px 16px;
      border: none;
      background: transparent;
      border-radius: 8px;
      text-align: left;
      cursor: pointer;
      font-size: 15px;
      color: #444;
      transition: all 0.2s;
    }

    .sidebar-btn:hover {
      background: #f5f5f5;
    }

    .sidebar-btn.active {
      background: #0066cc;
      color: #fff;
    }

    .tab-icon {
      font-size: 18px;
    }

    .settings-content {
      background: #fff;
      border-radius: 12px;
      padding: 32px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .tab-content h2 {
      font-size: 20px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 24px;
    }

    .avatar-section {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 32px;
    }

    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid #e5e7eb;
    }

    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    @media (max-width: 600px) {
      .form-row {
        grid-template-columns: 1fr;
      }
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: #333;
      margin-bottom: 8px;
    }

    .form-control {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      font-size: 15px;
    }

    .form-control:focus {
      outline: none;
      border-color: #0066cc;
      box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
    }

    .form-control[readonly] {
      background: #f5f5f5;
    }

    .help-text {
      display: block;
      margin-top: 6px;
      color: #888;
      font-size: 13px;
    }

    .btn-primary {
      padding: 12px 24px;
      background: #0066cc;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
    }

    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-outline {
      padding: 10px 20px;
      border: 1px solid #e5e7eb;
      background: #fff;
      color: #444;
      border-radius: 6px;
      font-size: 14px;
      cursor: pointer;
    }

    .btn-danger {
      padding: 12px 24px;
      background: #dc3545;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
    }

    .preference-group {
      margin-bottom: 32px;
    }

    .preference-group h3 {
      font-size: 16px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 16px;
    }

    .toggle-label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #e5e7eb;
      cursor: pointer;
    }

    .toggle-label input {
      display: none;
    }

    .toggle {
      width: 44px;
      height: 24px;
      background: #e5e7eb;
      border-radius: 12px;
      position: relative;
      transition: background 0.3s;
    }

    .toggle::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      background: #fff;
      border-radius: 50%;
      transition: transform 0.3s;
    }

    .toggle-label input:checked + .toggle {
      background: #0066cc;
    }

    .toggle-label input:checked + .toggle::before {
      transform: translateX(20px);
    }

    .security-section {
      padding: 24px 0;
      border-bottom: 1px solid #e5e7eb;
    }

    .security-section:last-child {
      border-bottom: none;
    }

    .security-section h3 {
      font-size: 16px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 8px;
    }

    .security-section p {
      color: #666;
      font-size: 14px;
      margin: 0 0 16px;
    }

    .session-list {
      margin-top: 12px;
    }

    .session-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      background: #f9fafb;
      border-radius: 8px;
    }

    .session-info strong {
      display: block;
      color: #1a1a1a;
    }

    .session-info span {
      font-size: 13px;
      color: #666;
    }

    .session-status {
      font-size: 12px;
      padding: 4px 10px;
      border-radius: 12px;
    }

    .session-status.active {
      background: #d1fae5;
      color: #065f46;
    }

    .danger-zone {
      margin-top: 24px;
      padding-top: 24px;
      border-top: 2px solid #fee2e2;
    }

    .danger-zone h3 {
      color: #dc3545;
    }
  `]
})
export class SettingsComponent implements OnInit {
  activeTab = signal('profile');
  profileForm: FormGroup;
  passwordForm: FormGroup;
  notificationForm: FormGroup;
  savingProfile = signal(false);
  savingPassword = signal(false);
  savingNotifications = signal(false);
  currentUser: any;

  tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'password', label: 'Password', icon: '🔒' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'security', label: 'Security', icon: '🛡️' }
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private http: HttpClient
  ) {
    this.currentUser = this.authService.currentUser;

    this.profileForm = this.fb.group({
      first_name: [this.currentUser?.first_name || ''],
      last_name: [this.currentUser?.last_name || ''],
      email: [this.currentUser?.email || ''],
      phone: [this.currentUser?.phone || '']
    });

    this.passwordForm = this.fb.group({
      current_password: ['', Validators.required],
      new_password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', Validators.required]
    });

    this.notificationForm = this.fb.group({
      email_orders: [true],
      email_promos: [true],
      email_challans: [true],
      push_orders: [true],
      push_promos: [false]
    });
  }

  ngOnInit(): void {
    // Load user preferences
  }

  onAvatarSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const formData = new FormData();
      formData.append('avatar', input.files[0]);

      this.http.post(`${environment.apiUrl}/profile/avatar`, formData).subscribe({
        next: (response: any) => {
          this.currentUser.image = response.avatar_url;
        }
      });
    }
  }

  updateProfile(): void {
    this.savingProfile.set(true);
    this.http.put(`${environment.apiUrl}/profile`, this.profileForm.value).subscribe({
      next: () => {
        this.savingProfile.set(false);
        alert('Profile updated successfully!');
      },
      error: () => {
        this.savingProfile.set(false);
        alert('Failed to update profile.');
      }
    });
  }

  changePassword(): void {
    if (this.passwordForm.value.new_password !== this.passwordForm.value.confirm_password) {
      alert('Passwords do not match');
      return;
    }

    this.savingPassword.set(true);
    this.http.put(`${environment.apiUrl}/profile/password`, this.passwordForm.value).subscribe({
      next: () => {
        this.savingPassword.set(false);
        this.passwordForm.reset();
        alert('Password changed successfully!');
      },
      error: () => {
        this.savingPassword.set(false);
        alert('Failed to change password.');
      }
    });
  }

  updateNotifications(): void {
    this.savingNotifications.set(true);
    this.http.put(`${environment.apiUrl}/profile/notifications`, this.notificationForm.value).subscribe({
      next: () => {
        this.savingNotifications.set(false);
        alert('Preferences saved!');
      },
      error: () => {
        this.savingNotifications.set(false);
      }
    });
  }

  deleteAccount(): void {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      if (confirm('This will permanently delete all your data. Continue?')) {
        this.http.delete(`${environment.apiUrl}/profile`).subscribe({
          next: () => {
            this.authService.logout();
          }
        });
      }
    }
  }
}
