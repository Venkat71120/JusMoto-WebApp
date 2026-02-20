import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';

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
            (click)="activeTab.set(tab.id)"
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
                <input type="tel" id="phone" [(ngModel)]="profile.phone" class="form-control" placeholder="Enter phone number">
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
              <input type="password" id="current_password" [(ngModel)]="passwords.current_password" class="form-control" placeholder="Enter current password">
            </div>

            <div class="form-group">
              <label for="new_password">New Password</label>
              <input type="password" id="new_password" [(ngModel)]="passwords.new_password" class="form-control" placeholder="Enter new password">
              <small class="help-text">Password must be at least 8 characters</small>
            </div>

            <div class="form-group">
              <label for="confirm_password">Confirm New Password</label>
              <input type="password" id="confirm_password" [(ngModel)]="passwords.confirm_password" class="form-control" placeholder="Re-enter new password">
            </div>

            <button class="btn-primary" (click)="changePassword()" [disabled]="savingPassword()">
              {{ savingPassword() ? 'Updating...' : 'Update Password' }}
            </button>
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
          <div class="tab-content" [hidden]="activeTab() !== 'security'">
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
      background: #fff5f5;
      color: #e31b23;
    }

    .sidebar-btn.active {
      background: #e31b23;
      color: #fff;
    }

    .sidebar-btn.active .tab-icon :is(svg) {
      stroke: #fff;
    }

    .tab-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
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
      border: 4px solid #fecdd3;
    }

    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .avatar-initials {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #e31b23;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      font-weight: 700;
      text-transform: uppercase;
      border: 4px solid #fecdd3;
    }

    .avatar-actions .btn-outline {
      display: inline-flex;
      align-items: center;
      gap: 8px;
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
      transition: border-color 0.2s, box-shadow 0.2s;
      box-sizing: border-box;
    }

    .form-control:focus {
      outline: none;
      border-color: #e31b23;
      box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);
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
      background: #e31b23;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
    }

    .btn-primary:hover {
      background: #c8171e;
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
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-outline:hover {
      border-color: #e31b23;
      color: #e31b23;
    }

    .btn-danger {
      padding: 12px 24px;
      background: #dc3545;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
    }

    .btn-danger:hover {
      background: #b91c1c;
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
      padding: 14px 0;
      border-bottom: 1px solid #f0f0f0;
      cursor: pointer;
    }

    .toggle-label span:first-child {
      font-size: 15px;
      color: #333;
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
      flex-shrink: 0;
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
      box-shadow: 0 1px 3px rgba(0,0,0,0.15);
    }

    .toggle-label input:checked + .toggle {
      background: #e31b23;
    }

    .toggle-label input:checked + .toggle::before {
      transform: translateX(20px);
    }

    .security-section {
      padding: 24px 0;
      border-bottom: 1px solid #f0f0f0;
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
      padding: 14px 16px;
      background: #f9fafb;
      border-radius: 10px;
    }

    .session-info strong {
      display: block;
      color: #1a1a1a;
      font-size: 14px;
    }

    .session-info span {
      font-size: 13px;
      color: #666;
    }

    .session-status {
      font-size: 12px;
      font-weight: 500;
      padding: 4px 12px;
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
      border-bottom: none;
    }

    .danger-zone h3 {
      color: #dc3545;
    }
  `]
})
export class SettingsComponent implements OnInit {
  activeTab = signal<string>('profile');
  savingProfile = signal(false);
  savingPassword = signal(false);
  savingNotifications = signal(false);
  showDeleteModal = signal(false);
  deletingAccount = signal(false);
  avatarUrl = signal<string>('');
  avatarError = signal(false);
  userInitials = signal('U');

  tabs = [
    { id: 'profile', label: 'Profile', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' },
    { id: 'password', label: 'Password', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>' },
    { id: 'notifications', label: 'Notifications', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>' },
    { id: 'security', label: 'Security', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' }
  ];

  profile = {
    first_name: '',
    last_name: '',
    phone: '',
    date_of_birth: ''
  };

  passwords = {
    current_password: '',
    new_password: '',
    confirm_password: ''
  };

  notifications = {
    email_orders: true,
    email_promos: true,
    email_challans: true,
    push_orders: true,
    push_promos: false
  };

  private baseUrl = environment.apiUrl.replace('/api/v1', '');

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadProfile();
  }

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

      // Preview immediately
      const reader = new FileReader();
      reader.onload = (e) => {
        this.avatarUrl.set(e.target?.result as string);
        this.avatarError.set(false);
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('avatar', file);

      this.http.post<any>(`${environment.apiUrl}/upload/avatar`, formData).subscribe({
        next: (res) => {
          if (res.avatar_url) {
            const fullUrl = this.resolveImageUrl(res.avatar_url);
            this.avatarUrl.set(fullUrl);
            this.avatarError.set(false);
            this.authService.updateCurrentUser({ image: res.avatar_url } as any);
          }
          this.toast.success('Avatar updated successfully');
        },
        error: () => {
          this.toast.error('Failed to upload avatar');
        }
      });
    }
  }

  updateProfile(): void {
    this.savingProfile.set(true);
    this.http.put<any>(`${environment.apiUrl}/user/profile`, this.profile).subscribe({
      next: () => {
        this.savingProfile.set(false);
        this.authService.updateCurrentUser({
          first_name: this.profile.first_name,
          last_name: this.profile.last_name,
          phone: this.profile.phone
        } as any);
        this.toast.success('Profile updated successfully');
      },
      error: () => {
        this.savingProfile.set(false);
        this.toast.error('Failed to update profile');
      }
    });
  }

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
        this.toast.error(err.error?.message || 'Failed to change password');
      }
    });
  }

  updateNotifications(): void {
    this.savingNotifications.set(true);
    this.http.put<any>(`${environment.apiUrl}/user/profile`, { notifications: this.notifications }).subscribe({
      next: () => {
        this.savingNotifications.set(false);
        this.toast.success('Notification preferences saved');
      },
      error: () => {
        this.savingNotifications.set(false);
        this.toast.error('Failed to save preferences');
      }
    });
  }

  deleteAccount(): void {
    this.deletingAccount.set(true);
    this.http.delete<any>(`${environment.apiUrl}/user/profile`).subscribe({
      next: () => {
        this.deletingAccount.set(false);
        this.showDeleteModal.set(false);
        this.toast.success('Account deleted');
        this.authService.logout();
      },
      error: () => {
        this.deletingAccount.set(false);
        this.toast.error('Failed to delete account');
      }
    });
  }
}
