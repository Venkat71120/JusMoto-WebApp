import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>JusMoto</h3>
          <p>Your trusted partner for car services, maintenance, and more. We provide quality services at affordable prices.</p>
          <div class="social-links">
            <a href="#" target="_blank"><mat-icon>facebook</mat-icon></a>
            <a href="#" target="_blank"><mat-icon>chat</mat-icon></a>
            <a href="#" target="_blank"><mat-icon>photo_camera</mat-icon></a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a routerLink="/services">Services</a></li>
            <li><a routerLink="/offers">Offers</a></li>
            <li><a routerLink="/challan">Traffic Challan</a></li>
            <li><a routerLink="/about">About Us</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a routerLink="/faq">FAQ</a></li>
            <li><a routerLink="/support">Contact Us</a></li>
            <li><a routerLink="/terms">Terms & Conditions</a></li>
            <li><a routerLink="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact</h4>
          <ul class="contact-info">
            <li>
              <mat-icon>location_on</mat-icon>
              <span>123 Main Street, City, State</span>
            </li>
            <li>
              <mat-icon>phone</mat-icon>
              <span>+91 1234567890</span>
            </li>
            <li>
              <mat-icon>email</mat-icon>
              <span>support&#64;jusmoto.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} JusMoto. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #1a1a2e;
      color: #fff;
      padding: 48px 0 0;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .footer-section h3 {
      font-size: 1.5rem;
      margin-bottom: 16px;
      color: #667eea;
    }

    .footer-section h4 {
      font-size: 1.1rem;
      margin-bottom: 16px;
      color: #fff;
    }

    .footer-section p {
      color: #aaa;
      line-height: 1.6;
    }

    .social-links {
      display: flex;
      gap: 12px;
      margin-top: 16px;
    }

    .social-links a {
      color: #fff;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      transition: background 0.3s;
    }

    .social-links a:hover {
      background: #667eea;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-section ul li {
      margin-bottom: 8px;
    }

    .footer-section ul a {
      color: #aaa;
      text-decoration: none;
      transition: color 0.3s;
    }

    .footer-section ul a:hover {
      color: #667eea;
    }

    .contact-info li {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #aaa;
    }

    .contact-info mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      color: #667eea;
    }

    .footer-bottom {
      margin-top: 48px;
      padding: 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
    }

    .footer-bottom p {
      margin: 0;
      color: #aaa;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .footer-content {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
