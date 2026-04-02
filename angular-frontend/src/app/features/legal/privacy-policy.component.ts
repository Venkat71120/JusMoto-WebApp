import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="legal-page">
      <div class="legal-header">
        <a routerLink="/auth/login" class="logo">JusMoto</a>
      </div>
      <div class="legal-content">
        <h1>Privacy Policy</h1>
        <p class="last-updated">Last updated: April 2, 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>Welcome to JusMoto ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service").</p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect the following personal information:</p>
          <ul>
            <li><strong>Contact Information:</strong> Name, email address, phone number</li>
            <li><strong>Account Information:</strong> Username, password (encrypted)</li>
            <li><strong>Vehicle Information:</strong> Car make, model, variant, registration number</li>
            <li><strong>Location Data:</strong> Address, GPS coordinates (with your consent)</li>
            <li><strong>Payment Information:</strong> Payment method details processed securely through third-party payment providers</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <ul>
            <li>Device information (device type, operating system)</li>
            <li>Usage data (pages visited, features used)</li>
            <li>IP address and browser type</li>
            <li>Firebase Cloud Messaging tokens for push notifications</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To provide and maintain our Service</li>
            <li>To process service bookings and orders</li>
            <li>To verify your identity via phone number (OTP verification)</li>
            <li>To send push notifications about order updates and promotions</li>
            <li>To manage your account and provide customer support</li>
            <li>To improve our Service and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>4. Phone Number Verification</h2>
          <p>We use Firebase Authentication to verify your phone number via SMS OTP (One-Time Password). When you provide your phone number:</p>
          <ul>
            <li>An SMS with a verification code is sent to your number</li>
            <li>Your phone number is stored securely in our database</li>
            <li>We use Google Firebase services to process the verification</li>
            <li>Standard SMS charges from your carrier may apply</li>
          </ul>
        </section>

        <section>
          <h2>5. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your data with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our Service (payment processors, SMS providers, cloud hosting)</li>
            <li><strong>Firebase/Google:</strong> For authentication and push notification services</li>
            <li><strong>Franchise Partners:</strong> To fulfill service requests in your area</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
          </ul>
        </section>

        <section>
          <h2>6. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
          <ul>
            <li>Encrypted data transmission (HTTPS/SSL)</li>
            <li>Encrypted password storage</li>
            <li>JWT-based secure authentication</li>
            <li>Regular security assessments</li>
          </ul>
        </section>

        <section>
          <h2>7. Data Retention</h2>
          <p>We retain your personal information for as long as your account is active or as needed to provide our services. You may request deletion of your account and associated data at any time through the app settings.</p>
        </section>

        <section>
          <h2>8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for data processing</li>
            <li>Export your data</li>
          </ul>
        </section>

        <section>
          <h2>9. Children's Privacy</h2>
          <p>Our Service is not intended for children under 18 years of age. We do not knowingly collect personal information from children.</p>
        </section>

        <section>
          <h2>10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul>
            <li>Email: <a href="mailto:blackitechs&#64;gmail.com">blackitechs&#64;gmail.com</a></li>
            <li>Website: <a href="https://jusmoto.blackitechs.in">https://jusmoto.blackitechs.in</a></li>
          </ul>
        </section>
      </div>
      <div class="legal-footer">
        <p>&copy; 2026 JusMoto. All rights reserved.</p>
        <div class="footer-links">
          <a routerLink="/privacy-policy">Privacy Policy</a>
          <a routerLink="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .legal-page { min-height: 100vh; background: #f8f9fa; }
    .legal-header { background: #0a0c0d; padding: 16px 32px; }
    .logo { color: #e31b23; font-size: 24px; font-weight: 800; text-decoration: none; letter-spacing: -0.5px; }
    .legal-content { max-width: 800px; margin: 0 auto; padding: 40px 24px; }
    h1 { font-size: 32px; font-weight: 700; color: #1a1a1a; margin: 0 0 8px; }
    .last-updated { color: #666; font-size: 14px; margin-bottom: 32px; }
    section { margin-bottom: 28px; }
    h2 { font-size: 20px; font-weight: 600; color: #1a1a1a; margin: 0 0 12px; }
    h3 { font-size: 16px; font-weight: 600; color: #333; margin: 16px 0 8px; }
    p { color: #444; line-height: 1.7; margin: 0 0 12px; }
    ul { color: #444; line-height: 1.8; padding-left: 24px; margin: 0 0 12px; }
    li { margin-bottom: 4px; }
    a { color: #e31b23; }
    .legal-footer { background: #0a0c0d; color: #999; padding: 24px 32px; text-align: center; margin-top: 40px; }
    .legal-footer p { color: #999; margin: 0 0 8px; }
    .footer-links { display: flex; gap: 24px; justify-content: center; }
    .footer-links a { color: #ccc; text-decoration: none; font-size: 14px; }
    .footer-links a:hover { color: #e31b23; }
  `]
})
export class PrivacyPolicyComponent {}
