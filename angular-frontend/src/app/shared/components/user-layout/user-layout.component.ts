import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="panel-container">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <a routerLink="/" class="logo">
            <img src="/assets/images/logo.png" alt="JusMoto" onerror="this.style.display='none'">
            <span>JusMoto</span>
          </a>
        </div>

        <nav class="sidebar-nav">
          <ul class="nav-list">
            <li>
              <a routerLink="/client/dashboard" routerLinkActive="active" class="nav-item">
                <i class="icon-dashboard"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a routerLink="/client/orders" routerLinkActive="active" class="nav-item">
                <i class="icon-orders"></i>
                <span>Order List</span>
              </a>
            </li>
            <li>
              <a routerLink="/client/favourites" routerLinkActive="active" class="nav-item">
                <i class="icon-heart"></i>
                <span>Favourite Items</span>
              </a>
            </li>
            <li>
              <a routerLink="/client/tickets" routerLinkActive="active" class="nav-item">
                <i class="icon-ticket"></i>
                <span>Service Requests</span>
              </a>
            </li>
            <li>
              <a routerLink="/client/refunds" routerLinkActive="active" class="nav-item">
                <i class="icon-refund"></i>
                <span>Refunds</span>
              </a>
            </li>
            <li>
              <a routerLink="/client/traffic-challan" routerLinkActive="active" class="nav-item">
                <i class="icon-challan"></i>
                <span>Traffic Challans</span>
              </a>
            </li>
            <li>
              <a routerLink="/client/notifications" routerLinkActive="active" class="nav-item">
                <i class="icon-bell"></i>
                <span>Notifications</span>
              </a>
            </li>
            <li>
              <a routerLink="/client/address" routerLinkActive="active" class="nav-item">
                <i class="icon-address"></i>
                <span>Address</span>
              </a>
            </li>
            <li>
              <a routerLink="/client/settings" routerLinkActive="active" class="nav-item">
                <i class="icon-settings"></i>
                <span>Settings</span>
              </a>
            </li>
          </ul>

          <ul class="nav-list nav-bottom">
            <li>
              <a (click)="logout()" class="nav-item text-danger" style="cursor: pointer">
                <i class="icon-logout"></i>
                <span>Log Out</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <!-- Header -->
        <header class="main-header">
          <div class="header-left">
            <button class="menu-toggle" (click)="toggleSidebar()">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div class="header-right">
            <a routerLink="/cart" class="header-icon">
              <i class="icon-cart"></i>
              <span class="badge" *ngIf="cartCount > 0">{{ cartCount }}</span>
            </a>
            <a routerLink="/client/notifications" class="header-icon">
              <i class="icon-bell"></i>
            </a>
            <div class="user-dropdown">
              <button class="user-btn" (click)="toggleDropdown()">
                <img [src]="currentUser?.image || '/assets/images/avatar.png'" alt="User" class="user-avatar">
                <span class="user-name">{{ currentUser?.first_name || 'User' }}</span>
              </button>
              <div class="dropdown-menu" *ngIf="showDropdown">
                <a routerLink="/client/settings" class="dropdown-item">Profile</a>
                <a (click)="logout()" class="dropdown-item">Logout</a>
              </div>
            </div>
          </div>
        </header>

        <!-- Page Content -->
        <div class="page-content">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .panel-container {
      display: flex;
      min-height: 100vh;
      background: #f5f6fa;
    }

    /* Sidebar */
    .sidebar {
      width: 260px;
      background: #fff;
      border-right: 1px solid #e5e7eb;
      display: flex;
      flex-direction: column;
      position: fixed;
      height: 100vh;
      z-index: 100;
    }

    .sidebar-header {
      padding: 20px;
      border-bottom: 1px solid #e5e7eb;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: #1a1a1a;
      font-weight: 700;
      font-size: 20px;
    }

    .logo img {
      height: 40px;
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
      border-top: 1px solid #e5e7eb;
      padding-top: 15px;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 15px;
      color: #4a5568;
      text-decoration: none;
      border-radius: 8px;
      margin-bottom: 4px;
      transition: all 0.2s;
    }

    .nav-item:hover {
      background: #f0f9ff;
      color: #0066cc;
    }

    .nav-item.active {
      background: #0066cc;
      color: #fff;
    }

    .nav-item i {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .text-danger {
      color: #dc3545 !important;
    }

    .text-danger:hover {
      background: #fef2f2 !important;
    }

    /* Main Content */
    .main-content {
      flex: 1;
      margin-left: 260px;
      display: flex;
      flex-direction: column;
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
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .header-icon {
      position: relative;
      color: #4a5568;
      font-size: 20px;
    }

    .badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background: #dc3545;
      color: #fff;
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 10px;
    }

    .user-dropdown {
      position: relative;
    }

    .user-btn {
      display: flex;
      align-items: center;
      gap: 10px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px;
    }

    .user-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      object-fit: cover;
    }

    .user-name {
      font-weight: 500;
    }

    .dropdown-menu {
      position: absolute;
      top: 100%;
      right: 0;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      min-width: 150px;
      padding: 8px 0;
      z-index: 100;
    }

    .dropdown-item {
      display: block;
      padding: 10px 15px;
      color: #333;
      text-decoration: none;
      cursor: pointer;
    }

    .dropdown-item:hover {
      background: #f5f5f5;
    }

    .page-content {
      padding: 25px;
      flex: 1;
    }

    /* Icons (simple CSS-based) */
    .icon-dashboard::before { content: '\\f0e4'; font-family: 'Font Awesome 6 Free'; font-weight: 900; }
    .icon-orders::before { content: '\\f03a'; font-family: 'Font Awesome 6 Free'; font-weight: 900; }
    .icon-heart::before { content: '\\f004'; font-family: 'Font Awesome 6 Free'; font-weight: 900; }
    .icon-ticket::before { content: '\\f3ff'; font-family: 'Font Awesome 6 Free'; font-weight: 900; }
    .icon-refund::before { content: '\\f021'; font-family: 'Font Awesome 6 Free'; font-weight: 900; }
    .icon-challan::before { content: '\\f0f6'; font-family: 'Font Awesome 6 Free'; font-weight: 900; }
    .icon-bell::before { content: '\\f0f3'; font-family: 'Font Awesome 6 Free'; font-weight: 900; }
    .icon-address::before { content: '\\f015'; font-family: 'Font Awesome 6 Free'; font-weight: 900; }
    .icon-settings::before { content: '\\f013'; font-family: 'Font Awesome 6 Free'; font-weight: 900; }
    .icon-logout::before { content: '\\f2f5'; font-family: 'Font Awesome 6 Free'; font-weight: 900; }
    .icon-cart::before { content: '\\f07a'; font-family: 'Font Awesome 6 Free'; font-weight: 900; }

    /* Responsive */
    @media (max-width: 991px) {
      .sidebar {
        transform: translateX(-100%);
        transition: transform 0.3s;
      }

      .sidebar.open {
        transform: translateX(0);
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
export class UserLayoutComponent implements OnInit {
  currentUser: any = null;
  cartCount = 0;
  showDropdown = false;
  sidebarOpen = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.currentUser;
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout(): void {
    this.authService.logout();
  }
}
