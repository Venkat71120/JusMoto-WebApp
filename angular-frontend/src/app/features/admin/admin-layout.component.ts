import { Component, OnInit, OnDestroy, signal, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { SocketService } from '../../core/services/socket.service';
import { ToastComponent } from '../../shared/components/toast/toast.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, ToastComponent],
  template: `
    <div class="panel-container">
      <div class="sidebar-overlay" (click)="closeSidebar()" *ngIf="sidebarOpen()"></div>

      <aside class="sidebar" [class.open]="sidebarOpen()">
        <div class="sidebar-header">
          <a routerLink="/admin/dashboard" class="logo">
            <img src="assets/images/logo_redefening.png" alt="JusMoto" class="logo-img">
          </a>
          <button class="close-btn" (click)="closeSidebar()">&#10005;</button>
        </div>

        <nav class="sidebar-nav">
          <ul class="nav-list">
            <!-- Dashboard - visible to all -->
            <li>
              <a routerLink="/admin/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-item" (click)="closeSidebar()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                <span>Dashboard</span>
              </a>
            </li>

            <!-- ORDERS - visible to all -->
            <li class="nav-section">ORDERS</li>
            <li>
              <a routerLink="/admin/orders/all-orders" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h6"/></svg>
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a routerLink="/admin/orders/refunded-order-list" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 105.64-12.36L1 10"/></svg>
                <span>Refunded Orders</span>
              </a>
            </li>

            <!-- USERS - permission based -->
            @if (hasPermission('users.view')) {
              <li class="nav-section">USERS</li>
              <li>
                <a routerLink="/admin/user/all-users" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                  <span>Users</span>
                </a>
              </li>
              <li>
                <a routerLink="/admin/staff/all-staff" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
                  <span>Franchise Admins</span>
                </a>
              </li>
            }

            <!-- CATALOG - permission based -->
            @if (hasPermission('catalog.view')) {
              <li class="nav-section">CATALOG</li>
              <li>
                <a routerLink="/admin/services/all" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a routerLink="/admin/products/all" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                  <span>Products</span>
                </a>
              </li>
              <li>
                <a routerLink="/admin/category/index" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></svg>
                  <span>Categories</span>
                </a>
              </li>
              <li>
                <a routerLink="/admin/brand/list" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                  <span>Brands</span>
                </a>
              </li>
              <li>
                <a routerLink="/admin/car/list" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 17h2m10 0h2M2 9l2-4h16l2 4M2 9h20M2 9v8a1 1 0 001 1h1m16 0h1a1 1 0 001-1V9"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
                  <span>Cars</span>
                </a>
              </li>
            }

            <!-- VEHICLE - permission based -->
            @if (hasPermission('vehicle.view')) {
              <li class="nav-section">VEHICLE</li>
              <li>
                <a routerLink="/admin/variant/list" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
                  <span>Variants</span>
                </a>
              </li>
              <li>
                <a routerLink="/admin/engine/list" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>
                  <span>Engine Types</span>
                </a>
              </li>
              <li>
                <a routerLink="/admin/fual/list" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 22h12V6L9 2 3 6v16z"/><path d="M15 22h3a2 2 0 002-2v-6l-3-3"/><path d="M6 12h6M6 16h6"/></svg>
                  <span>Fuel Types</span>
                </a>
              </li>
            }

            <!-- MARKETING - permission based -->
            @if (hasPermission('marketing.view')) {
              <li class="nav-section">MARKETING</li>
              <li>
                <a routerLink="/admin/coupons/all" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 00-2 2c0 1.1.9 2 2 2h4v-4h-4z"/></svg>
                  <span>Coupons</span>
                </a>
              </li>
              <li>
                <a routerLink="/admin/offer/list" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="9" r="2"/><circle cx="15" cy="15" r="2"/><line x1="7" y1="17" x2="17" y2="7"/></svg>
                  <span>Offers</span>
                </a>
              </li>
              <li>
                <a routerLink="/admin/slider/all" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                  <span>Sliders</span>
                </a>
              </li>
            }

            <!-- SUPPORT - tickets visible to all, departments permission based -->
            <li class="nav-section">SUPPORT</li>
            <li>
              <a routerLink="/admin/support-ticket/tickets" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                <span>Service Requests</span>
              </a>
            </li>
            <li>
              <a routerLink="/admin/support-ticket/department" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
                <span>Departments</span>
              </a>
            </li>
            <li>
              <a routerLink="/admin/review/all" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>Reviews</span>
              </a>
            </li>

            <!-- LOCATIONS - permission based -->
            @if (hasPermission('locations.view')) {
              <li class="nav-section">LOCATIONS</li>
              <li>
                <a routerLink="/admin/outletAddress/all" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 10-16 0c0 3 2.7 7 8 11.7z"/></svg>
                  <span>Outlet Locations</span>
                </a>
              </li>
            }

            <!-- REPORTS - permission based -->
            @if (hasPermission('reports.view')) {
              <li class="nav-section">REPORTS</li>
              <li>
                <a routerLink="/admin/reports/revenue" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
                  <span>Revenue Report</span>
                </a>
              </li>
              <li>
                <a routerLink="/admin/reports/orders" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.21 15.89A10 10 0 118 2.83"/><path d="M22 12A10 10 0 0012 2v10z"/></svg>
                  <span>Order Report</span>
                </a>
              </li>
            }

            <!-- CONTENT - permission based -->
            @if (hasPermission('content.view')) {
              <li class="nav-section">CONTENT</li>
              <li>
                <a routerLink="/admin/notification/all" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
                  <span>Notifications</span>
                </a>
              </li>
              <li>
                <a routerLink="/admin/media/all" routerLinkActive="active" class="nav-item" (click)="closeSidebar()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span>Media Library</span>
                </a>
              </li>
            }

          </ul>

          <ul class="nav-list nav-bottom">
            <li>
              <a (click)="logout()" class="nav-item logout-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                <span>Log Out</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main class="main-content">
        <header class="main-header">
          <div class="header-left">
            <button class="menu-toggle" (click)="toggleSidebar()">
              <span></span><span></span><span></span>
            </button>
            <div class="breadcrumb-area">
              <span class="breadcrumb-label">Admin Panel</span>
            </div>
          </div>
          <div class="header-right">
            <!-- Notification bell -->
            <a routerLink="/admin/notification/all" class="header-icon-btn notification-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
              @if (unreadCount() > 0) {
                <span class="notification-badge">{{ unreadCount() > 99 ? '99+' : unreadCount() }}</span>
              }
            </a>

            <!-- Profile section -->
            <div class="profile-section" (click)="toggleProfileDropdown($event)">
              <div class="profile-trigger">
                @if (adminImage() && !imageError()) {
                  <img [src]="adminImage()" alt="Admin avatar" class="profile-avatar" (error)="imageError.set(true)" />
                } @else {
                  <div class="profile-avatar-initials">{{ adminInitials() }}</div>
                }
                <div class="profile-info">
                  <span class="profile-name">{{ adminName() }}</span>
                  <span class="profile-role">{{ adminRoleDisplay() }}</span>
                </div>
                <svg class="profile-chevron" [class.open]="profileDropdownOpen()" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>

              @if (profileDropdownOpen()) {
                <div class="profile-dropdown">
                  <a routerLink="/admin/profile" class="dropdown-item" (click)="closeProfileDropdown()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <span>Profile</span>
                  </a>
                  <div class="dropdown-separator"></div>
                  <a (click)="logout()" class="dropdown-item dropdown-logout">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    <span>Logout</span>
                  </a>
                </div>
              }
            </div>
          </div>
        </header>
        <div class="page-content">
          <router-outlet></router-outlet>
        </div>
      </main>
      <app-toast></app-toast>
    </div>
  `,
  styles: [`
    * { box-sizing: border-box; }
    .panel-container { display: flex; min-height: 100vh; background: #fff5f5; }
    .sidebar-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 99; }
    .sidebar { width: 260px; background: #0a0c0d; display: flex; flex-direction: column; position: fixed; height: 100vh; z-index: 100; transition: transform 0.3s ease; }
    .sidebar-header { padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; align-items: center; }
    .close-btn { display: none; background: none; border: none; font-size: 20px; cursor: pointer; color: #94a3b8; }
    .logo { display: flex; align-items: center; text-decoration: none; }
    .logo-img { height: 32px; width: auto; object-fit: contain; filter: brightness(0) invert(1); }
    .sidebar-nav { flex: 1; overflow-y: auto; padding: 15px 0; display: flex; flex-direction: column; }
    .sidebar-nav::-webkit-scrollbar { width: 4px; }
    .sidebar-nav::-webkit-scrollbar-track { background: transparent; }
    .sidebar-nav::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }
    .nav-list { list-style: none; padding: 0 10px; margin: 0; }
    .nav-bottom { margin-top: auto; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 15px; }
    .nav-item { display: flex; align-items: center; gap: 12px; padding: 10px 15px; color: #94a3b8; text-decoration: none; border-radius: 8px; margin-bottom: 2px; transition: all 0.2s; cursor: pointer; font-size: 14px; }
    .nav-item:hover { background: rgba(227, 27, 35, 0.1); color: #ff6b6b; }
    .nav-item.active { background: #e31b23; color: #fff; }
    .nav-item svg { width: 18px; height: 18px; flex-shrink: 0; }
    .nav-section { font-size: 10px; font-weight: 600; color: #64748b; letter-spacing: 0.08em; padding: 16px 15px 6px; text-transform: uppercase; }
    .logout-btn { color: #f87171 !important; }
    .logout-btn:hover { background: rgba(248, 113, 113, 0.1) !important; }
    .main-content { flex: 1; margin-left: 260px; display: flex; flex-direction: column; min-height: 100vh; }

    /* Header */
    .main-header { background: #fff; padding: 0 25px; height: 64px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e5e7eb; position: sticky; top: 0; z-index: 50; }
    .header-left { display: flex; align-items: center; gap: 16px; }
    .menu-toggle { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 5px; }
    .menu-toggle span { width: 25px; height: 2px; background: #333; border-radius: 2px; transition: 0.3s; }
    .breadcrumb-area { display: flex; align-items: center; }
    .breadcrumb-label { font-size: 15px; font-weight: 600; color: #1e293b; }

    .header-right { display: flex; align-items: center; gap: 8px; }

    /* Notification bell */
    .header-icon-btn { position: relative; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: none; border: 1px solid #e5e7eb; border-radius: 10px; cursor: pointer; color: #64748b; transition: all 0.2s; }
    .header-icon-btn:hover { background: #f8fafc; color: #1e293b; border-color: #cbd5e1; }
    .notification-badge { position: absolute; top: -4px; right: -4px; min-width: 18px; height: 18px; background: #e31b23; color: #fff; font-size: 10px; font-weight: 600; border-radius: 9px; display: flex; align-items: center; justify-content: center; padding: 0 4px; border: 2px solid #fff; line-height: 1; }
    .notification-btn { text-decoration: none; }

    /* Profile section */
    .profile-section { position: relative; }
    .profile-trigger { display: flex; align-items: center; gap: 10px; padding: 6px 10px; border-radius: 10px; cursor: pointer; transition: background 0.2s; border: 1px solid transparent; }
    .profile-trigger:hover { background: #f8fafc; border-color: #e5e7eb; }
    .profile-avatar { width: 36px; height: 36px; border-radius: 10px; object-fit: cover; }
    .profile-avatar-initials { width: 36px; height: 36px; border-radius: 10px; background: #e31b23; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px; text-transform: uppercase; flex-shrink: 0; }
    .profile-info { display: flex; flex-direction: column; line-height: 1.3; }
    .profile-name { font-size: 13px; font-weight: 600; color: #1e293b; white-space: nowrap; }
    .profile-role { font-size: 11px; color: #94a3b8; text-transform: capitalize; white-space: nowrap; }
    .profile-chevron { color: #94a3b8; transition: transform 0.2s; flex-shrink: 0; }
    .profile-chevron.open { transform: rotate(180deg); }

    /* Profile dropdown */
    .profile-dropdown { position: absolute; top: calc(100% + 8px); right: 0; width: 200px; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.12); padding: 6px; z-index: 200; animation: dropdownIn 0.15s ease-out; }
    @keyframes dropdownIn {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .dropdown-item { display: flex; align-items: center; gap: 10px; padding: 9px 12px; color: #334155; font-size: 13px; font-weight: 500; text-decoration: none; border-radius: 8px; cursor: pointer; transition: background 0.15s; }
    .dropdown-item:hover { background: #f1f5f9; }
    .dropdown-item svg { color: #64748b; flex-shrink: 0; }
    .dropdown-separator { height: 1px; background: #e5e7eb; margin: 4px 6px; }
    .dropdown-logout { color: #ef4444 !important; }
    .dropdown-logout:hover { background: #fef2f2 !important; }
    .dropdown-logout svg { color: #ef4444; }

    .page-content { padding: 25px; flex: 1; }

    /* Global select styling */
    :host ::ng-deep select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-color: #fff;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
      padding: 9px 36px 9px 14px;
      border: 1.5px solid #d1d5db;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 500;
      color: #1e293b;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      font-family: inherit;
    }
    :host ::ng-deep select:hover {
      border-color: #a1a1aa;
      box-shadow: 0 1px 4px rgba(0,0,0,0.08);
    }
    :host ::ng-deep select:focus {
      border-color: #e31b23;
      box-shadow: 0 0 0 3px rgba(227,27,35,0.1);
      outline: none;
    }
    :host ::ng-deep select option {
      padding: 10px 14px;
      font-size: 13px;
      font-weight: 500;
      color: #1e293b;
      background: #fff;
    }
    :host ::ng-deep select option:checked {
      background: #fee2e2;
      color: #e31b23;
    }
    :host ::ng-deep select option:hover {
      background: #f1f5f9;
    }

    @media (max-width: 991px) {
      .sidebar { transform: translateX(-100%); }
      .sidebar.open { transform: translateX(0); }
      .sidebar-overlay { display: block; }
      .close-btn { display: block; }
      .main-content { margin-left: 0; }
      .menu-toggle { display: flex; }
      .profile-info { display: none; }
      .profile-chevron { display: none; }
    }
  `]
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  adminName = signal('Admin');
  adminImage = signal<string | null>(null);
  imageError = signal(false);
  adminInitials = signal('A');
  adminRoleDisplay = signal('Admin');
  isSuperAdmin = signal(false);
  permissions = signal<string[]>([]);
  sidebarOpen = signal(false);
  profileDropdownOpen = signal(false);
  unreadCount = signal(0);
  private notifSub?: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    const admin = this.authService.currentAdmin;
    if (admin) {
      this.adminName.set(admin.name);
      this.adminImage.set(admin.image || null);
      this.adminInitials.set(this.getInitials(admin.name));
      this.adminRoleDisplay.set(this.formatRole(admin.role));
      this.isSuperAdmin.set(!admin.is_franchise);
      this.permissions.set(admin.permissions || []);

      // Fetch initial unread count
      this.http.get<any>(`${environment.apiUrl}/notifications/unread-count`).subscribe({
        next: (res) => this.unreadCount.set(res.unread_count || 0),
        error: () => {}
      });

      // Join socket room for real-time notifications
      this.socketService.joinNotifications('Admin', admin.id);
      this.notifSub = this.socketService.onNewNotification().subscribe(() => {
        this.unreadCount.update(c => c + 1);
      });
    }
  }

  ngOnDestroy(): void {
    this.notifSub?.unsubscribe();
  }

  hasPermission(permissionName: string): boolean {
    // Non-franchise admins (super admins) always see all menus
    if (this.isSuperAdmin()) return true;
    // Franchise admins see menus based on their role permissions
    return this.permissions().includes(permissionName);
  }

  toggleSidebar(): void { this.sidebarOpen.update(v => !v); }
  closeSidebar(): void { this.sidebarOpen.set(false); }

  toggleProfileDropdown(event: Event): void {
    event.stopPropagation();
    this.profileDropdownOpen.update(v => !v);
  }

  closeProfileDropdown(): void {
    this.profileDropdownOpen.set(false);
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.profileDropdownOpen.set(false);
  }

  logout(): void {
    this.closeProfileDropdown();
    this.authService.adminLogout();
  }

  private getInitials(name: string): string {
    if (!name) return 'A';
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0].substring(0, 2).toUpperCase();
  }

  private formatRole(role: string): string {
    if (!role) return 'Admin';
    return role.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }
}
