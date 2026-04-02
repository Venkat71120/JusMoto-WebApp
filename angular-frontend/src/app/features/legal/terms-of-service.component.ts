import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="legal-page">
      <div class="legal-header">
        <a routerLink="/auth/login" class="logo">JusMoto</a>
      </div>
      <div class="legal-content">
        <h1>Terms of Service</h1>
        <p class="last-updated">Last updated: April 2, 2026</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the JusMoto application and website ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.</p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>JusMoto is a vehicle service and maintenance platform that provides:</p>
          <ul>
            <li>Vehicle servicing and maintenance bookings</li>
            <li>Auto parts and accessories marketplace</li>
            <li>Traffic challan verification services</li>
            <li>Vehicle management tools</li>
            <li>Service tracking and order management</li>
          </ul>
        </section>

        <section>
          <h2>3. User Accounts</h2>
          <ul>
            <li>You must provide accurate and complete information when creating an account</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You must be at least 18 years old to use this Service</li>
            <li>You are responsible for all activities that occur under your account</li>
            <li>Phone number verification may be required for certain features</li>
          </ul>
        </section>

        <section>
          <h2>4. Service Bookings and Orders</h2>
          <ul>
            <li>All service bookings are subject to availability and confirmation</li>
            <li>Prices displayed are subject to change without prior notice</li>
            <li>We reserve the right to cancel or refuse any order</li>
            <li>Service timelines are estimates and may vary based on vehicle condition</li>
            <li>You are responsible for providing accurate vehicle information</li>
          </ul>
        </section>

        <section>
          <h2>5. Payments</h2>
          <ul>
            <li>All payments are processed through secure third-party payment gateways</li>
            <li>Prices are listed in Indian Rupees (INR) and include applicable taxes unless stated otherwise</li>
            <li>Refunds are processed according to our refund policy</li>
            <li>Wallet credits are non-transferable and subject to terms of the wallet feature</li>
          </ul>
        </section>

        <section>
          <h2>6. Cancellation and Refund Policy</h2>
          <ul>
            <li>Service cancellations must be made before the service is initiated</li>
            <li>Refund eligibility depends on the type of service and stage of completion</li>
            <li>Refunds will be processed to the original payment method within 7-14 business days</li>
            <li>We reserve the right to charge a cancellation fee for late cancellations</li>
          </ul>
        </section>

        <section>
          <h2>7. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful purpose</li>
            <li>Provide false or misleading information</li>
            <li>Interfere with or disrupt the Service</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Use automated systems to access the Service without permission</li>
            <li>Harass or abuse service providers or other users</li>
          </ul>
        </section>

        <section>
          <h2>8. Intellectual Property</h2>
          <p>All content, trademarks, logos, and intellectual property displayed on the Service are owned by JusMoto or its licensors. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
        </section>

        <section>
          <h2>9. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law:</p>
          <ul>
            <li>JusMoto is not liable for any indirect, incidental, or consequential damages</li>
            <li>Our total liability shall not exceed the amount paid by you for the specific service in question</li>
            <li>We are not responsible for any third-party services or products</li>
            <li>Service quality is subject to the capabilities of our franchise partners</li>
          </ul>
        </section>

        <section>
          <h2>10. Disclaimer of Warranties</h2>
          <p>The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, secure, or error-free.</p>
        </section>

        <section>
          <h2>11. Indemnification</h2>
          <p>You agree to indemnify and hold harmless JusMoto, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.</p>
        </section>

        <section>
          <h2>12. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in India.</p>
        </section>

        <section>
          <h2>13. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Continued use of the Service after any changes constitutes acceptance of the new Terms. We will notify users of significant changes through the app or via email.</p>
        </section>

        <section>
          <h2>14. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
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
export class TermsOfServiceComponent {}
