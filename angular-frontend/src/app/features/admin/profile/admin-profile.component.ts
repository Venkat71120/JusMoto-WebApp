import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">My Profile</h1>
    </div>

    <div class="profile-card">
      <div class="profile-top">
        <div class="avatar-section">
          @if (adminImage() && !imageError()) {
            <img [src]="adminImage()" alt="Profile" class="avatar" (error)="imageError.set(true)" />
          } @else {
            <div class="avatar-initials">{{ initials() }}</div>
          }
        </div>
        <div class="info-section">
          <h2 class="admin-name">{{ name() }}</h2>
          <span class="admin-role">{{ role() }}</span>
        </div>
      </div>

      <div class="details">
        <div class="detail-row">
          <span class="detail-label">Name</span>
          <span class="detail-value">{{ name() }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Email</span>
          <span class="detail-value">{{ email() }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Username</span>
          <span class="detail-value">{{ username() || '-' }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Role</span>
          <span class="detail-value">{{ role() }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-header { margin-bottom:24px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .profile-card { background:#fff; border-radius:12px; box-shadow:0 1px 3px rgba(0,0,0,0.08); max-width:600px; overflow:hidden; }
    .profile-top { display:flex; align-items:center; gap:20px; padding:32px; background:linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%); }
    .avatar { width:80px; height:80px; border-radius:50%; object-fit:cover; border:3px solid #fff; }
    .avatar-initials { width:80px; height:80px; border-radius:50%; background:#e31b23; color:#fff; display:flex; align-items:center; justify-content:center; font-size:28px; font-weight:700; border:3px solid #fff; }
    .admin-name { margin:0; font-size:22px; font-weight:700; color:#fff; }
    .admin-role { font-size:14px; color:rgba(255,255,255,0.7); font-weight:500; margin-top:4px; display:block; }
    .details { padding:24px 32px; }
    .detail-row { display:flex; justify-content:space-between; align-items:center; padding:14px 0; border-bottom:1px solid #f1f5f9; }
    .detail-row:last-child { border-bottom:none; }
    .detail-label { font-size:14px; font-weight:600; color:#64748b; }
    .detail-value { font-size:14px; color:#1a1a2e; font-weight:500; }
  `]
})
export class AdminProfileComponent implements OnInit {
  name = signal('');
  email = signal('');
  username = signal('');
  role = signal('');
  adminImage = signal<string | null>(null);
  imageError = signal(false);
  initials = signal('A');

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const admin = this.authService.currentAdmin;
    if (admin) {
      this.name.set(admin.name || '');
      this.email.set(admin.email || '');
      this.username.set(admin.username || '');
      this.role.set(this.formatRole(admin.role));
      this.adminImage.set(admin.image || null);
      this.initials.set(this.getInitials(admin.name));
    }
  }

  private getInitials(name: string): string {
    if (!name) return 'A';
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return parts[0].substring(0, 2).toUpperCase();
  }

  private formatRole(role: string): string {
    if (!role) return 'Admin';
    return role.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }
}
