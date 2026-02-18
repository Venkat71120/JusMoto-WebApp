import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">Support Tickets</h1>
        <a routerLink="/tickets/create" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + New Ticket
        </a>
      </div>

      @if (tickets().length > 0) {
        <div class="space-y-4">
          @for (ticket of tickets(); track ticket.id) {
            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="font-bold text-lg">{{ ticket.subject }}</h3>
                  <p class="text-gray-500 text-sm">Ticket #{{ ticket.id }} | {{ ticket.created_at | date:'medium' }}</p>
                </div>
                <span class="px-3 py-1 rounded-full text-sm" [class]="getStatusClass(ticket.status)">
                  {{ ticket.status }}
                </span>
              </div>
              <p class="text-gray-600 mt-2 line-clamp-2">{{ ticket.description }}</p>
              <div class="flex justify-between items-center mt-4">
                <span class="text-sm text-gray-500">Category: {{ ticket.category }}</span>
                <a [routerLink]="['/tickets', ticket.id]" class="text-blue-600 hover:underline">View Details</a>
              </div>
            </div>
          }
        </div>
      } @else {
        <div class="text-center py-12 bg-white rounded-lg shadow">
          <p class="text-xl text-gray-500 mb-4">No support tickets</p>
          <a routerLink="/tickets/create" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Create Your First Ticket
          </a>
        </div>
      }
    </div>
  `
})
export class TicketListComponent implements OnInit {
  tickets = signal<any[]>([]);

  ngOnInit(): void {
    this.tickets.set([
      { id: 1, subject: 'Order not received', description: 'My order was supposed to be delivered yesterday but I haven\'t received it yet.', status: 'open', category: 'Orders', created_at: new Date() }
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
}
