import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="mb-6">
        <a routerLink="/tickets" class="text-blue-600 hover:underline">&larr; Back to Tickets</a>
      </div>

      @if (ticket()) {
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 space-y-6">
            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h1 class="text-2xl font-bold">{{ ticket().subject }}</h1>
                  <p class="text-gray-500">Ticket #{{ ticket().id }}</p>
                </div>
                <span class="px-3 py-1 rounded-full" [class]="getStatusClass(ticket().status)">
                  {{ ticket().status }}
                </span>
              </div>
              <p class="text-gray-600">{{ ticket().description }}</p>
            </div>

            <div class="bg-white rounded-lg shadow p-6">
              <h2 class="text-xl font-bold mb-4">Conversation</h2>
              <div class="space-y-4">
                @for (message of messages(); track message.id) {
                  <div class="p-4 rounded-lg" [class]="message.is_support ? 'bg-blue-50 ml-8' : 'bg-gray-50 mr-8'">
                    <div class="flex justify-between mb-2">
                      <span class="font-semibold">{{ message.is_support ? 'Support Team' : 'You' }}</span>
                      <span class="text-sm text-gray-500">{{ message.created_at | date:'short' }}</span>
                    </div>
                    <p>{{ message.message }}</p>
                  </div>
                }
              </div>

              @if (ticket().status !== 'closed') {
                <div class="mt-6">
                  <textarea [(ngModel)]="newMessage" rows="3" class="w-full p-2 border rounded" placeholder="Type your reply..."></textarea>
                  <button (click)="sendReply()" class="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" [disabled]="isSending()">
                    {{ isSending() ? 'Sending...' : 'Send Reply' }}
                  </button>
                </div>
              }
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-white rounded-lg shadow p-6">
              <h2 class="text-xl font-bold mb-4">Ticket Details</h2>
              <div class="space-y-3">
                <div>
                  <p class="text-sm text-gray-500">Category</p>
                  <p class="font-medium">{{ ticket().category }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Priority</p>
                  <p class="font-medium">{{ ticket().priority }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Created</p>
                  <p class="font-medium">{{ ticket().created_at | date:'medium' }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Last Updated</p>
                  <p class="font-medium">{{ ticket().updated_at | date:'medium' }}</p>
                </div>
              </div>
            </div>

            @if (ticket().status !== 'closed') {
              <button (click)="closeTicket()" class="w-full bg-red-100 text-red-700 py-2 rounded hover:bg-red-200">
                Close Ticket
              </button>
            }
          </div>
        </div>
      }
    </div>
  `
})
export class TicketDetailComponent implements OnInit {
  ticket = signal<any>(null);
  messages = signal<any[]>([]);
  newMessage = '';
  isSending = signal(false);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ticket.set({
      id: id,
      subject: 'Order not received',
      description: 'My order was supposed to be delivered yesterday but I haven\'t received it yet. Order ID: #12345',
      status: 'open',
      category: 'Orders',
      priority: 'High',
      created_at: new Date(),
      updated_at: new Date()
    });

    this.messages.set([
      { id: 1, message: 'Hello, I haven\'t received my order yet. It was supposed to be delivered yesterday.', is_support: false, created_at: new Date() },
      { id: 2, message: 'We apologize for the delay. We\'re looking into this and will update you shortly.', is_support: true, created_at: new Date() }
    ]);
  }

  getStatusClass(status: string): string {
    const classes: Record<string, string> = {
      'open': 'bg-yellow-100 text-yellow-800',
      'in_progress': 'bg-blue-100 text-blue-800',
      'resolved': 'bg-green-100 text-green-800',
      'closed': 'bg-gray-100 text-gray-800'
    };
    return classes[status?.toLowerCase()] || 'bg-gray-100 text-gray-800';
  }

  sendReply(): void {
    if (!this.newMessage.trim()) return;

    this.isSending.set(true);
    setTimeout(() => {
      this.messages.update(msgs => [...msgs, {
        id: msgs.length + 1,
        message: this.newMessage,
        is_support: false,
        created_at: new Date()
      }]);
      this.newMessage = '';
      this.isSending.set(false);
    }, 500);
  }

  closeTicket(): void {
    if (confirm('Are you sure you want to close this ticket?')) {
      this.ticket.update(t => ({ ...t, status: 'closed' }));
    }
  }
}
