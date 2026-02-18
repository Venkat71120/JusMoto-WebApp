import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { AuthService } from '../../../core/services/auth.service';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule
  ],
  template: `
    <mat-toolbar color="primary" class="header">
      <div class="header-content">
        <a routerLink="/" class="logo">
          <img src="assets/images/logo.png" alt="JusMoto" class="logo-img" />
          <span class="logo-text">JusMoto</span>
        </a>

        <nav class="nav-links">
          <a routerLink="/services" routerLinkActive="active">Services</a>
          <a routerLink="/offers" routerLinkActive="active">Offers</a>
          <a routerLink="/challan" routerLinkActive="active">Traffic Challan</a>
        </nav>

        <div class="header-actions">
          <button mat-icon-button routerLink="/cart" class="cart-btn">
            <mat-icon [matBadge]="cartCount" matBadgeColor="warn" [matBadgeHidden]="cartCount === 0">
              shopping_cart
            </mat-icon>
          </button>

          <ng-container *ngIf="isLoggedIn; else loginBtn">
            <button mat-icon-button [matMenuTriggerFor]="userMenu">
              <mat-icon>account_circle</mat-icon>
            </button>
            <mat-menu #userMenu="matMenu">
              <a mat-menu-item routerLink="/dashboard">
                <mat-icon>dashboard</mat-icon>
                <span>Dashboard</span>
              </a>
              <a mat-menu-item routerLink="/orders">
                <mat-icon>receipt</mat-icon>
                <span>My Orders</span>
              </a>
              <a mat-menu-item routerLink="/wallet">
                <mat-icon>account_balance_wallet</mat-icon>
                <span>Wallet</span>
              </a>
              <a mat-menu-item routerLink="/profile">
                <mat-icon>person</mat-icon>
                <span>Profile</span>
              </a>
              <a mat-menu-item routerLink="/support">
                <mat-icon>support_agent</mat-icon>
                <span>Support</span>
              </a>
              <mat-divider></mat-divider>
              <button mat-menu-item (click)="logout()">
                <mat-icon>logout</mat-icon>
                <span>Logout</span>
              </button>
            </mat-menu>
          </ng-container>

          <ng-template #loginBtn>
            <button mat-stroked-button routerLink="/auth/login" class="login-btn">
              Login
            </button>
          </ng-template>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      height: 64px;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
    }

    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: white;
    }

    .logo-img {
      height: 40px;
      margin-right: 8px;
    }

    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .nav-links {
      display: flex;
      gap: 24px;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      padding: 8px 0;
      border-bottom: 2px solid transparent;
      transition: border-color 0.2s;
    }

    .nav-links a:hover,
    .nav-links a.active {
      border-bottom-color: white;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .cart-btn {
      color: white;
    }

    .login-btn {
      color: white;
      border-color: rgba(255, 255, 255, 0.5);
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  cartCount = 0;

  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });

    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
