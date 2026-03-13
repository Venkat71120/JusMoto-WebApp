import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-contact-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">Contact Settings</h1>
    </div>

    @if (loading()) {
      <div class="loading-box">
        <div class="spinner"></div>
        <span>Loading settings...</span>
      </div>
    } @else {
      <!-- Privacy Policy -->
      <div class="accordion-card">
        <div class="accordion-header" (click)="toggle('privacy')">
          <div class="accordion-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e31b23" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>Privacy Policy</span>
          </div>
          <svg class="chevron" [class.open]="openSection() === 'privacy'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        @if (openSection() === 'privacy') {
          <div class="accordion-body">
            <label class="field-label">Content (HTML supported)</label>
            <textarea class="editor-area" [(ngModel)]="privacyPolicy" rows="14" placeholder="Enter privacy policy content..."></textarea>
            <div class="action-row">
              <button class="btn-save" (click)="savePrivacy()" [disabled]="savingPrivacy()">
                {{ savingPrivacy() ? 'Saving...' : 'Save Privacy Policy' }}
              </button>
            </div>
          </div>
        }
      </div>

      <!-- Terms and Conditions -->
      <div class="accordion-card">
        <div class="accordion-header" (click)="toggle('terms')">
          <div class="accordion-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e31b23" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            <span>Terms and Conditions</span>
          </div>
          <svg class="chevron" [class.open]="openSection() === 'terms'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        @if (openSection() === 'terms') {
          <div class="accordion-body">
            <label class="field-label">Content (HTML supported)</label>
            <textarea class="editor-area" [(ngModel)]="termsConditions" rows="14" placeholder="Enter terms and conditions content..."></textarea>
            <div class="action-row">
              <button class="btn-save" (click)="saveTerms()" [disabled]="savingTerms()">
                {{ savingTerms() ? 'Saving...' : 'Save Terms & Conditions' }}
              </button>
            </div>
          </div>
        }
      </div>

      <!-- Contact Details -->
      <div class="accordion-card">
        <div class="accordion-header" (click)="toggle('contact')">
          <div class="accordion-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e31b23" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            <span>Contact Details</span>
          </div>
          <svg class="chevron" [class.open]="openSection() === 'contact'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        @if (openSection() === 'contact') {
          <div class="accordion-body">
            <div class="form-grid">
              <div class="form-group">
                <label class="field-label">Email</label>
                <input type="email" class="form-input" [(ngModel)]="contact.email" placeholder="support@jusmoto.com">
              </div>
              <div class="form-group">
                <label class="field-label">Phone</label>
                <input type="text" class="form-input" [(ngModel)]="contact.phone" placeholder="+91 9876543210">
              </div>
              <div class="form-group">
                <label class="field-label">WhatsApp</label>
                <input type="text" class="form-input" [(ngModel)]="contact.whatsapp" placeholder="+91 9876543210">
              </div>
              <div class="form-group full-width">
                <label class="field-label">Address</label>
                <textarea class="form-input" [(ngModel)]="contact.address" rows="3" placeholder="Enter business address..."></textarea>
              </div>
            </div>

            <h4 class="sub-heading">Social Media Links</h4>
            <div class="form-grid">
              <div class="form-group">
                <label class="field-label">Facebook</label>
                <input type="url" class="form-input" [(ngModel)]="contact.facebook" placeholder="https://facebook.com/...">
              </div>
              <div class="form-group">
                <label class="field-label">Instagram</label>
                <input type="url" class="form-input" [(ngModel)]="contact.instagram" placeholder="https://instagram.com/...">
              </div>
              <div class="form-group">
                <label class="field-label">Twitter / X</label>
                <input type="url" class="form-input" [(ngModel)]="contact.twitter" placeholder="https://twitter.com/...">
              </div>
              <div class="form-group">
                <label class="field-label">YouTube</label>
                <input type="url" class="form-input" [(ngModel)]="contact.youtube" placeholder="https://youtube.com/...">
              </div>
            </div>

            <div class="action-row">
              <button class="btn-save" (click)="saveContact()" [disabled]="savingContact()">
                {{ savingContact() ? 'Saving...' : 'Save Contact Details' }}
              </button>
            </div>
          </div>
        }
      </div>
    }
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }

    .loading-box { display:flex; align-items:center; gap:12px; justify-content:center; padding:60px 0; color:#64748b; font-size:15px; }
    .spinner { width:28px; height:28px; border:3px solid #e2e8f0; border-top-color:#e31b23; border-radius:50%; animation:spin .7s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }

    .accordion-card { background:#fff; border-radius:12px; box-shadow:0 1px 3px rgba(0,0,0,0.08); margin-bottom:16px; overflow:hidden; }
    .accordion-header { display:flex; justify-content:space-between; align-items:center; padding:18px 24px; cursor:pointer; user-select:none; transition:background .15s; }
    .accordion-header:hover { background:#fafafa; }
    .accordion-title { display:flex; align-items:center; gap:12px; font-size:16px; font-weight:600; color:#1a1a2e; }
    .chevron { transition:transform .2s; color:#94a3b8; }
    .chevron.open { transform:rotate(180deg); color:#e31b23; }

    .accordion-body { padding:0 24px 24px; border-top:1px solid #f1f5f9; }

    .field-label { display:block; font-size:13px; font-weight:600; color:#475569; margin:16px 0 6px; }
    .editor-area { width:100%; border:1px solid #e2e8f0; border-radius:8px; padding:12px; font-size:14px; font-family:monospace; line-height:1.6; resize:vertical; color:#334155; box-sizing:border-box; }
    .editor-area:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.1); }

    .form-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:8px; }
    .form-group { display:flex; flex-direction:column; }
    .form-group.full-width { grid-column:1/-1; }
    .form-input { border:1px solid #e2e8f0; border-radius:8px; padding:10px 12px; font-size:14px; color:#334155; }
    .form-input:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.1); }
    textarea.form-input { resize:vertical; font-family:inherit; }

    .sub-heading { font-size:14px; font-weight:600; color:#1a1a2e; margin:24px 0 4px; padding-top:16px; border-top:1px solid #f1f5f9; }

    .action-row { display:flex; justify-content:flex-end; margin-top:20px; }
    .btn-save { background:#e31b23; color:#fff; border:none; padding:10px 24px; border-radius:8px; cursor:pointer; font-weight:600; font-size:14px; transition:background .15s; }
    .btn-save:hover { background:#b11218; }
    .btn-save:disabled { opacity:0.6; cursor:not-allowed; }

    @media (max-width:640px) {
      .form-grid { grid-template-columns:1fr; }
      .accordion-header { padding:14px 16px; }
      .accordion-body { padding:0 16px 16px; }
    }
  `]
})
export class ContactSettingsComponent implements OnInit {
  loading = signal(true);
  savingPrivacy = signal(false);
  savingTerms = signal(false);
  savingContact = signal(false);
  openSection = signal<string | null>('privacy');

  privacyPolicy = '';
  termsConditions = '';
  contact = {
    email: '', phone: '', whatsapp: '', address: '',
    facebook: '', instagram: '', twitter: '', youtube: ''
  };

  private loaded = 0;

  constructor(private http: HttpClient, private toast: ToastService) {}

  ngOnInit() {
    this.loadAll();
  }

  toggle(section: string) {
    this.openSection.set(this.openSection() === section ? null : section);
  }

  private loadAll() {
    this.loading.set(true);
    this.loaded = 0;

    // GET /general/privacy-policy
    this.http.get<any>(`${environment.apiUrl}/general/privacy-policy`).subscribe({
      next: (res) => { this.privacyPolicy = res.data?.content || ''; this.checkLoaded(); },
      error: () => this.checkLoaded()
    });

    // GET /general/terms-and-conditions
    this.http.get<any>(`${environment.apiUrl}/general/terms-and-conditions`).subscribe({
      next: (res) => { this.termsConditions = res.data?.content || ''; this.checkLoaded(); },
      error: () => this.checkLoaded()
    });

    // GET /general/contact
    this.http.get<any>(`${environment.apiUrl}/general/contact`).subscribe({
      next: (res) => {
        const d = res.data || {};
        this.contact.email = d.email || '';
        this.contact.phone = d.phone || '';
        this.contact.whatsapp = d.whatsapp || '';
        this.contact.address = d.address || '';
        this.contact.facebook = d.social?.facebook || '';
        this.contact.instagram = d.social?.instagram || '';
        this.contact.twitter = d.social?.twitter || '';
        this.contact.youtube = d.social?.youtube || '';
        this.checkLoaded();
      },
      error: () => this.checkLoaded()
    });
  }

  private checkLoaded() {
    this.loaded++;
    if (this.loaded >= 3) this.loading.set(false);
  }

  savePrivacy() {
    this.savingPrivacy.set(true);
    this.http.put<any>(`${environment.apiUrl}/admin/privacy-policy`, { content: this.privacyPolicy }).subscribe({
      next: (res) => {
        this.toast.success(res.message || 'Privacy policy saved');
        this.savingPrivacy.set(false);
      },
      error: (err) => {
        this.toast.error(err.error?.error || 'Failed to save');
        this.savingPrivacy.set(false);
      }
    });
  }

  saveTerms() {
    this.savingTerms.set(true);
    this.http.put<any>(`${environment.apiUrl}/admin/terms-and-conditions`, { content: this.termsConditions }).subscribe({
      next: (res) => {
        this.toast.success(res.message || 'Terms saved');
        this.savingTerms.set(false);
      },
      error: (err) => {
        this.toast.error(err.error?.error || 'Failed to save');
        this.savingTerms.set(false);
      }
    });
  }

  saveContact() {
    this.savingContact.set(true);
    this.http.put<any>(`${environment.apiUrl}/admin/contact`, {
      email: this.contact.email,
      phone: this.contact.phone,
      whatsapp: this.contact.whatsapp,
      address: this.contact.address,
      facebook: this.contact.facebook,
      instagram: this.contact.instagram,
      twitter: this.contact.twitter,
      youtube: this.contact.youtube
    }).subscribe({
      next: (res) => {
        this.toast.success(res.message || 'Contact details saved');
        this.savingContact.set(false);
      },
      error: (err) => {
        this.toast.error(err.error?.error || 'Failed to save');
        this.savingContact.set(false);
      }
    });
  }
}
