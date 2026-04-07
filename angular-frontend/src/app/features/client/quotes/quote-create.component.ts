import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-quote-create',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="create-container">
      <div class="back-link">
        <a routerLink="/client/quotes">&larr; Back to Quote Requests</a>
      </div>

      <div class="form-card">
        <h1>Request a Quote</h1>
        <p class="subtitle">Tell us what you need and we'll get back to you with a price.</p>

        <form [formGroup]="quoteForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="type">Type *</label>
            <select id="type" formControlName="type" class="form-control">
              <option value="">Select type</option>
              <option value="service">Service</option>
              <option value="product">Product</option>
            </select>
            <div class="error" *ngIf="quoteForm.get('type')?.touched && quoteForm.get('type')?.errors?.['required']">
              Type is required
            </div>
          </div>

          <div class="form-group">
            <label for="title">Title *</label>
            <input type="text" id="title" formControlName="title" class="form-control" placeholder="Brief summary of what you need">
            <div class="error" *ngIf="quoteForm.get('title')?.touched && quoteForm.get('title')?.errors?.['required']">
              Title is required
            </div>
          </div>

          <div class="form-group">
            <label for="description">Description *</label>
            <textarea id="description" formControlName="description" class="form-control" rows="6" placeholder="Describe your requirement in detail..."></textarea>
            <div class="error" *ngIf="quoteForm.get('description')?.touched && quoteForm.get('description')?.errors?.['required']">
              Description is required
            </div>
            <div class="error" *ngIf="quoteForm.get('description')?.touched && quoteForm.get('description')?.errors?.['minlength']">
              Description must be at least 20 characters
            </div>
          </div>

          <div class="form-actions">
            <button type="button" routerLink="/client/quotes" class="btn-outline">Cancel</button>
            <button type="submit" class="btn-primary" [disabled]="submitting() || quoteForm.invalid">
              {{ submitting() ? 'Submitting...' : 'Submit Quote Request' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .create-container { max-width: 700px; margin: 0 auto; }

    .back-link { margin-bottom: 20px; }
    .back-link a { color: #e31b23; text-decoration: none; font-size: 14px; }
    .back-link a:hover { text-decoration: underline; }

    .form-card { background: #fff; border-radius: 12px; padding: 32px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .form-card h1 { font-size: 24px; font-weight: 700; color: #1a1a1a; margin: 0 0 8px; }
    .subtitle { color: #666; margin: 0 0 32px; }

    .form-group { margin-bottom: 24px; }
    .form-group label { display: block; font-size: 14px; font-weight: 500; color: #333; margin-bottom: 8px; }

    .form-control { width: 100%; padding: 12px 16px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 15px; transition: border-color 0.2s, box-shadow 0.2s; font-family: inherit; }
    .form-control:focus { outline: none; border-color: #e31b23; box-shadow: 0 0 0 3px rgba(227,27,35,0.1); }

    textarea.form-control { resize: vertical; min-height: 120px; }

    select.form-control {
      appearance: none;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
      background-position: right 12px center;
      background-repeat: no-repeat;
      background-size: 20px;
      padding-right: 40px;
    }

    .error { color: #dc3545; font-size: 13px; margin-top: 6px; }

    .form-actions { display: flex; gap: 16px; justify-content: flex-end; margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb; }
    .btn-outline { padding: 12px 24px; border: 1px solid #e5e7eb; background: #fff; color: #444; border-radius: 6px; font-weight: 500; cursor: pointer; text-decoration: none; }
    .btn-primary { padding: 12px 24px; background: #e31b23; color: #fff; border: none; border-radius: 6px; font-weight: 500; cursor: pointer; }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
  `]
})
export class QuoteCreateComponent {
  quoteForm: FormGroup;
  submitting = signal(false);

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toast: ToastService
  ) {
    this.quoteForm = this.fb.group({
      type: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  onSubmit(): void {
    if (this.quoteForm.invalid) return;
    this.submitting.set(true);

    this.http.post<any>(`${environment.apiUrl}/quotes`, this.quoteForm.value).subscribe({
      next: (res) => {
        this.submitting.set(false);
        this.toast.success('Quote request submitted successfully');
        this.router.navigate(['/client/quotes', res.data?.id || '']);
      },
      error: () => {
        this.submitting.set(false);
        this.toast.error('Failed to submit quote request. Please try again.');
      }
    });
  }
}
