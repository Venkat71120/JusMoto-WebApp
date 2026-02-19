import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-general-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">General Settings</h1>
    </div>

    <div class="settings-grid">
      <div class="setting-card">
        <div class="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e31b23" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <h3>Seed Locations (States & Cities)</h3>
        </div>
        <p class="card-desc">Fetch all Indian states and cities from a free public API and insert them into your database. This uses the CountriesNow API.</p>
        <button class="btn-primary" (click)="seedData()" [disabled]="seeding()">
          {{ seeding() ? 'Seeding... (this may take a few minutes)' : 'Seed All Data' }}
        </button>
        <div *ngIf="seedResult()" class="result-box">
          <p><strong>Seed Results:</strong></p>
          <ul>
            <li>Brands added: {{ seedResult().brands }}</li>
            <li>Cars added: {{ seedResult().cars }}</li>
            <li>States added: {{ seedResult().states }}</li>
            <li>Cities added: {{ seedResult().cities }}</li>
          </ul>
        </div>
      </div>

      <div class="setting-card">
        <div class="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e31b23" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
          <h3>Application Info</h3>
        </div>
        <div class="info-row"><span class="info-label">App Name</span><span class="info-value">JusMoto</span></div>
        <div class="info-row"><span class="info-label">API URL</span><span class="info-value">{{ apiUrl }}</span></div>
        <div class="info-row"><span class="info-label">Currency</span><span class="info-value">INR (₹)</span></div>
        <div class="info-row"><span class="info-label">Timezone</span><span class="info-value">IST (+05:30)</span></div>
      </div>
    </div>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .settings-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(400px, 1fr)); gap:20px; }
    .setting-card { background:#fff; border-radius:12px; padding:24px; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .card-header { display:flex; align-items:center; gap:12px; margin-bottom:16px; }
    .card-header h3 { font-size:18px; font-weight:700; color:#1a1a2e; margin:0; }
    .card-desc { color:#64748b; font-size:14px; margin:0 0 16px; line-height:1.5; }
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-weight:600; font-size:14px; }
    .btn-primary:hover { background:#b11218; }
    .btn-primary:disabled { opacity:0.6; cursor:not-allowed; }
    .result-box { background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:16px; margin-top:16px; }
    .result-box p { margin:0 0 8px; font-size:14px; color:#166534; }
    .result-box ul { margin:0; padding-left:20px; }
    .result-box li { font-size:13px; color:#166534; margin-bottom:4px; }
    .info-row { display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #f1f5f9; }
    .info-label { font-size:13px; font-weight:600; color:#64748b; }
    .info-value { font-size:13px; color:#334155; font-weight:500; }
  `]
})
export class GeneralSettingsComponent {
  seeding = signal(false);
  seedResult = signal<any>(null);
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private toast: ToastService) {}

  seedData() {
    this.seeding.set(true);
    this.seedResult.set(null);
    this.http.post<any>(`${environment.apiUrl}/admin/seed-data`, {}).subscribe({
      next: (res) => {
        this.seedResult.set(res.data);
        this.toast.success(res.message || 'Data seeded successfully');
      },
      error: (err) => {
        this.toast.error(err.error?.error || 'Seeding failed');
        this.seeding.set(false);
      },
      complete: () => this.seeding.set(false)
    });
  }
}
