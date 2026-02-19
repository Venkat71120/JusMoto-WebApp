import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="panel-container">
      <!-- Mobile Overlay -->
      <div class="sidebar-overlay" (click)="closeSidebar()" *ngIf="sidebarOpen()"></div>

      <!-- Sidebar -->
      <aside class="sidebar" [class.open]="sidebarOpen()">
        <div class="sidebar-header">
          <a routerLink="/admin" class="logo">
            <span class="logo-text">Admin Panel</span>
          </a>
          <button class="close-btn" (click)="closeSidebar()">&#10005;</button>
        </div>

        <nav class="sidebar-nav">
          <ul class="nav-list">
            <li>
              <a routerLink="/admin" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-item" (click)="closeSidebar()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                </svg>
                <span>Dashboard</span>
              </a>
            </li>

            <li class="nav-section">MANAGEMENT</li>

            <li>
              <a routerLink="/admin/users" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
                <span>Users</span>
              </a>
            </li>
            <li>
              <a routerLink="/admin/orders" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
                  <rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h6"/>
                </svg>
                <span>Orders</span>
              </a>
            </li>

            <li class="nav-section">CATALOG</li>

            <li>
              <a routerLink="/admin/services" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                </svg>
                <span>Services</span>
              </a>
            </li>
            <li>
              <a routerLink="/admin/categories" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>
                </svg>
                <span>Categories</span>
              </a>
            </li>
            <li>
              <a routerLink="/admin/brands" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
                <span>Brands</span>
              </a>
            </li>
            <li>
              <a routerLink="/admin/cars" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 17h2m10 0h2M2 9l2-4h16l2 4M2 9h20M2 9v8a1 1 0 001 1h1m16 0h1a1 1 0 001-1V9"/>
                  <circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
                </svg>
                <span>Cars</span>
              </a>
            </li>

            <li class="nav-section">MARKETING</li>

            <li>
              <a routerLink="/admin/coupons" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 8v4M12 16h.01"/>
                  <path d="M3.27 11l7.97-7.97a1 1 0 011.32-.08l8.16 6.54a1 1 0 01.27 1.24l-4.15 8.3a1 1 0 01-1.15.52L3.4 16.08a1 1 0 01-.7-.86L2.6 12a1 1 0 01.67-1z"/>
                </svg>
                <span>Coupons</span>
              </a>
            </li>
          </ul>

          <ul class="nav-list nav-bottom">
            <li>
              <a (click)="logout()" class="nav-item logout-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                <span>Log Out</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <header class="main-header">
          <div class="header-left">
            <button class="menu-toggle" (click)="toggleSidebar()">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div class="header-right">
            <span class="admin-name">{{ adminName() }}</span>
          </div>
        </header>

        <div class="page-content">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styles: [`
    * { box-sizing: border-box; }

    .panel-container {
      display: flex;
      min-height: 100vh;
      background: #fff5f5;
    }

    .sidebar-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
      z-index: 99;
    }

    .sidebar {
      width: 260px;
      background: #0a0c0d;
      display: flex;
      flex-direction: column;
      position: fixed;
      height: 100vh;
      z-index: 100;
      transition: transform 0.3s ease;
    }

    .sidebar-header {
      padding: 20px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .close-btn {
      display: none;
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: #94a3b8;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: #fff;
      font-weight: 700;
      font-size: 20px;
    }

    .sidebar-nav {
      flex: 1;
      overflow-y: auto;
      padding: 15px 0;
      display: flex;
      flex-direction: column;
    }

    .nav-list {
      list-style: none;
      padding: 0 10px;
      margin: 0;
    }

    .nav-bottom {
      margin-top: auto;
      border-top: 1px solid rgba(255,255,255,0.08);
      padding-top: 15px;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 15px;
      color: #94a3b8;
      text-decoration: none;
      border-radius: 8px;
      margin-bottom: 4px;
      transition: all 0.2s;
      cursor: pointer;
    }

    .nav-item:hover {
      background: rgba(227, 27, 35, 0.1);
      color: #ff6b6b;
    }

    .nav-item.active {
      background: #e31b23;
      color: #fff;
    }

    .nav-item svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    .nav-section {
      font-size: 11px;
      font-weight: 600;
      color: #64748b;
      letter-spacing: 0.05em;
      padding: 20px 15px 8px;
      text-transform: uppercase;
    }

    .logout-btn {
      color: #f87171 !important;
    }

    .logout-btn:hover {
      background: rgba(248, 113, 113, 0.1) !important;
    }

    .main-content {
      flex: 1;
      margin-left: 260px;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .main-header {
      background: #fff;
      padding: 15px 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e5e7eb;
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .header-left {
      display: flex;
      align-items: center;
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px;
    }

    .menu-toggle span {
      width: 25px;
      height: 2px;
      background: #333;
      border-radius: 2px;
      transition: 0.3s;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .admin-name {
      font-weight: 500;
      color: #333;
    }

    .page-content {
      padding: 25px;
      flex: 1;
    }

    @media (max-width: 991px) {
      .sidebar {
        transform: translateX(-100%);
      }

      .sidebar.open {
        transform: translateX(0);
      }

      .sidebar-overlay {
        display: block;
      }

      .close-btn {
        display: block;
      }

      .main-content {
        margin-left: 0;
      }

      .menu-toggle {
        display: flex;
      }
    }
  `]
})
export class AdminLayoutComponent implements OnInit {
  adminName = signal('Admin');
  sidebarOpen = signal(false);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const admin = this.authService.currentAdmin;
    if (admin) {
      this.adminName.set(admin.name);
    }
  }

  toggleSidebar(): void {
    this.sidebarOpen.update(v => !v);
  }

  closeSidebar(): void {
    this.sidebarOpen.set(false);
  }

  logout(): void {
    this.authService.adminLogout();
  }
}
