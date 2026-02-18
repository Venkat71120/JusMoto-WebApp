import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface Ticket {
  id: number;
  ticket_number: string;
  subject: string;
  message: string;
  category: string;
  priority: string;
  status: 'open' | 'pending' | 'answered' | 'closed';
  order_id?: number;
  attachment?: string;
  created_at: string;
  updated_at: string;
  replies?: TicketReply[];
}

export interface TicketReply {
  id: number;
  message: string;
  is_admin: boolean;
  attachment?: string;
  user?: any;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private api: ApiService) {}

  getTickets(params?: { status?: string; page?: number; limit?: number }): Observable<any> {
    return this.api.get<any>('/tickets', params);
  }

  getTicket(id: number): Observable<any> {
    return this.api.get<any>(`/tickets/${id}`);
  }

  createTicket(data: FormData | Partial<Ticket>): Observable<any> {
    return this.api.post<any>('/tickets', data);
  }

  replyToTicket(id: number, data: FormData | { message: string; attachment?: File }): Observable<any> {
    return this.api.post<any>(`/tickets/${id}/reply`, data);
  }

  closeTicket(id: number): Observable<any> {
    return this.api.post<any>(`/tickets/${id}/close`, {});
  }

  reopenTicket(id: number): Observable<any> {
    return this.api.post<any>(`/tickets/${id}/reopen`, {});
  }
}
