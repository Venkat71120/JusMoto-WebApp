import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-ticket',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">Create Support Ticket</h1>

        <div class="bg-white rounded-lg shadow p-6">
          <form [formGroup]="ticketForm" (ngSubmit)="onSubmit()">
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1">Category</label>
                <select formControlName="category" class="w-full p-2 border rounded">
                  <option value="">Select Category</option>
                  <option value="orders">Orders</option>
                  <option value="payments">Payments</option>
                  <option value="services">Services</option>
                  <option value="technical">Technical Issues</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Subject</label>
                <input type="text" formControlName="subject" class="w-full p-2 border rounded" placeholder="Brief description of the issue">
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Description</label>
                <textarea formControlName="description" rows="6" class="w-full p-2 border rounded" placeholder="Please provide detailed information about your issue"></textarea>
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Priority</label>
                <select formControlName="priority" class="w-full p-2 border rounded">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Attachments (Optional)</label>
                <input type="file" class="w-full p-2 border rounded" multiple>
                <p class="text-sm text-gray-500 mt-1">You can attach screenshots or documents</p>
              </div>
            </div>

            <div class="flex gap-4 mt-6">
              <a routerLink="/tickets" class="flex-1 text-center bg-gray-200 py-2 rounded hover:bg-gray-300">Cancel</a>
              <button type="submit" class="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700" [disabled]="isSubmitting()">
                {{ isSubmitting() ? 'Submitting...' : 'Submit Ticket' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `
})
export class CreateTicketComponent {
  ticketForm: FormGroup;
  isSubmitting = signal(false);

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.ticketForm = this.fb.group({
      category: ['', Validators.required],
      subject: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['medium']
    });
  }

  onSubmit(): void {
    if (this.ticketForm.invalid) {
      alert('Please fill all required fields');
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      alert('Ticket created successfully!');
      this.router.navigate(['/tickets']);
    }, 1000);
  }
}
