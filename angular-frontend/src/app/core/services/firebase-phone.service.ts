import { Injectable } from '@angular/core';
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
  Auth
} from 'firebase/auth';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebasePhoneService {
  private app: FirebaseApp | null = null;
  private auth: Auth | null = null;
  private confirmationResult: ConfirmationResult | null = null;
  private recaptchaVerifier: RecaptchaVerifier | null = null;

  private initFirebase(): Auth {
    if (!this.auth) {
      if (getApps().length === 0) {
        this.app = initializeApp(environment.firebaseConfig);
      } else {
        this.app = getApps()[0];
      }
      this.auth = getAuth(this.app);
    }
    return this.auth;
  }

  /**
   * Set up invisible reCAPTCHA on a button element
   */
  setupRecaptcha(buttonId: string): void {
    const auth = this.initFirebase();

    // Clear existing verifier
    if (this.recaptchaVerifier) {
      this.recaptchaVerifier.clear();
      this.recaptchaVerifier = null;
    }

    this.recaptchaVerifier = new RecaptchaVerifier(auth, buttonId, {
      size: 'invisible'
    });
  }

  /**
   * Send OTP to phone number
   * @param phone 10-digit Indian phone number
   */
  async sendOtp(phone: string): Promise<void> {
    const auth = this.initFirebase();

    if (!this.recaptchaVerifier) {
      throw new Error('reCAPTCHA not initialized. Call setupRecaptcha first.');
    }

    const fullPhone = '+91' + phone.replace(/\D/g, '');
    this.confirmationResult = await signInWithPhoneNumber(auth, fullPhone, this.recaptchaVerifier);
  }

  /**
   * Verify OTP and get Firebase ID token
   * @returns Firebase ID token string
   */
  async verifyOtp(otp: string): Promise<string> {
    if (!this.confirmationResult) {
      throw new Error('No OTP request pending. Call sendOtp first.');
    }

    const credential = await this.confirmationResult.confirm(otp);
    const idToken = await credential.user.getIdToken();
    return idToken;
  }

  /**
   * Clean up reCAPTCHA
   */
  cleanup(): void {
    if (this.recaptchaVerifier) {
      this.recaptchaVerifier.clear();
      this.recaptchaVerifier = null;
    }
    this.confirmationResult = null;
  }
}
