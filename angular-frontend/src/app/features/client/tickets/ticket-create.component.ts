import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../../../core/services/ticket.service';
import { OrderService } from '../../../core/services/order.service';

@Component({
  selector: 'app-ticket-create',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="create-ticket-container">
      <div class="back-link">
        <a routerLink="/client/tickets">&larr; Back to Tickets</a>
      </div>

      <div class="form-card">
        <h1>Create Support Ticket</h1>
        <p class="subtitle">Describe your issue and we'll get back to you as soon as possible.</p>

        <form [formGroup]="ticketForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="category">Category *</label>
            <select id="category" formControlName="category" class="form-control">
              <option value="">Select a category</option>
              <option *ngFor="let cat of categories" [value]="cat.value">{{ cat.label }}</option>
            </select>
            <div class="error" *ngIf="ticketForm.get('category')?.touched && ticketForm.get('category')?.errors?.['required']">
              Category is required
            </div>
          </div>

          <div class="form-group" *ngIf="orders().length > 0">
            <label for="order_id">Related Order (Optional)</label>
            <select id="order_id" formControlName="order_id" class="form-control">
              <option value="">Select an order</option>
              <option *ngFor="let order of orders()" [value]="order.id">
                #{{ order.order_number || order.id }} - {{ order.created_at | date:'mediumDate' }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              formControlName="subject"
              class="form-control"
              placeholder="Brief summary of your issue">
            <div class="error" *ngIf="ticketForm.get('subject')?.touched && ticketForm.get('subject')?.errors?.['required']">
              Subject is required
            </div>
          </div>

          <div class="form-group">
            <label for="priority">Priority *</label>
            <select id="priority" formControlName="priority" class="form-control">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Message *</label>
            <textarea
              id="message"
              formControlName="message"
              class="form-control"
              rows="6"
              placeholder="Please describe your issue in detail..."></textarea>
            <div class="error" *ngIf="ticketForm.get('message')?.touched && ticketForm.get('message')?.errors?.['required']">
              Message is required
            </div>
            <div class="error" *ngIf="ticketForm.get('message')?.touched && ticketForm.get('message')?.errors?.['minlength']">
              Message must be at least 20 characters
            </div>
          </div>

          <div class="form-group">
            <label for="attachment">Attachment (Optional)</label>
            <input
              type="file"
              id="attachment"
              (change)="onFileSelect($event)"
              class="form-control file-input"
              accept="image/*,.pdf,.doc,.docx">
            <small class="help-text">Max file size: 5MB. Supported: images, PDF, DOC</small>
          </div>

          <div class="form-actions">
            <button type="button" routerLink="/client/tickets" class="btn-outline">Cancel</button>
            <button type="submit" class="btn-primary" [disabled]="submitting() || ticketForm.invalid">
              {{ submitting() ? 'Submitting...' : 'Submit Ticket' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .create-ticket-container {
      max-width: 700px;
      margin: 0 auto;
    }

    .back-link {
      margin-bottom: 20px;
    }

    .back-link a {
      color: #0066cc;
      text-decoration: none;
      font-size: 14px;
    }

    .back-link a:hover {
      text-decoration: underline;
    }

    .form-card {
      background: #fff;
      border-radius: 12px;
      padding: 32px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .form-card h1 {
      font-size: 24px;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 8px;
    }

    .subtitle {
      color: #666;
      margin: 0 0 32px;
    }

    .form-group {
      margin-bottom: 24px;
    }

    .form-group label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: #333;
      margin-bottom: 8px;
    }

    .form-control {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      font-size: 15px;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    .form-control:focus {
      outline: none;
      border-color: #0066cc;
      box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
    }

    textarea.form-control {
      resize: vertical;
      min-height: 120px;
    }

    select.form-control {
      appearance: none;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
      background-position: right 12px center;
      background-repeat: no-repeat;
      background-size: 20px;
      padding-right: 40px;
    }

    .file-input {
      padding: 10px;
    }

    .help-text {
      display: block;
      margin-top: 6px;
      color: #888;
      font-size: 13px;
    }

    .error {
      color: #dc3545;
      font-size: 13px;
      margin-top: 6px;
    }

    .form-actions {
      display: flex;
      gap: 16px;
      justify-content: flex-end;
      margin-top: 32px;
      padding-top: 24px;
      border-top: 1px solid #e5e7eb;
    }

    .btn-outline {
      padding: 12px 24px;
      border: 1px solid #e5e7eb;
      background: #fff;
      color: #444;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
    }

    .btn-primary {
      padding: 12px 24px;
      background: #0066cc;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
    }

    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `]
})
export class TicketCreateComponent implements OnInit {
  ticketForm: FormGroup;
  orders = signal<any[]>([]);
  submitting = signal(false);
  selectedFile: File | null = null;

  categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'order', label: 'Order Issue' },
    { value: 'payment', label: 'Payment Problem' },
    { value: 'service', label: 'Service Quality' },
    { value: 'refund', label: 'Refund Request' },
    { value: 'other', label: 'Other' }
  ];

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.ticketForm = this.fb.group({
      category: ['', Validators.required],
      order_id: [''],
      subject: ['', Validators.required],
      priority: ['medium'],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  ngOnInit(): void {
    // Load recent orders for the dropdown
    this.orderService.getOrders({ limit: 10 }).subscribe({
      next: (response) => {
        this.orders.set(response.data || response.orders || []);
      }
    });

    // Pre-fill order_id if passed via query params
    const orderId = this.route.snapshot.queryParamMap.get('order_id');
    if (orderId) {
      this.ticketForm.patchValue({ order_id: orderId, category: 'order' });
    }
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.ticketForm.invalid) return;

    this.submitting.set(true);

    const formData = new FormData();
    Object.keys(this.ticketForm.value).forEach(key => {
      if (this.ticketForm.value[key]) {
        formData.append(key, this.ticketForm.value[key]);
      }
    });

    if (this.selectedFile) {
      formData.append('attachment', this.selectedFile);
    }

    this.ticketService.createTicket(formData).subscribe({
      next: (response) => {
        this.submitting.set(false);
        const ticketId = response.data?.id || response.ticket?.id || response.id;
        this.router.navigate(['/client/tickets', ticketId]);
      },
      error: () => {
        this.submitting.set(false);
        alert('Failed to create ticket. Please try again.');
      }
    });
  }
}
