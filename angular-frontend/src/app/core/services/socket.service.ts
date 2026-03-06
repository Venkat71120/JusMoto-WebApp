import { Injectable, OnDestroy } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SocketService implements OnDestroy {
  private socket: Socket | null = null;

  connect(): void {
    if (this.socket?.connected) return;
    this.socket = io(environment.socketUrl, {
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 2000
    });
  }

  joinTicket(ticketId: string | number): void {
    this.connect();
    this.socket?.emit('join-ticket', ticketId);
  }

  leaveTicket(ticketId: string | number): void {
    this.socket?.emit('leave-ticket', ticketId);
  }

  onNewMessage(): Observable<any> {
    return new Observable(observer => {
      this.socket?.on('new-ticket-message', (data: any) => {
        observer.next(data);
      });
      return () => this.socket?.off('new-ticket-message');
    });
  }

  onTicketStatusChanged(): Observable<any> {
    return new Observable(observer => {
      this.socket?.on('ticket-status-changed', (data: any) => {
        observer.next(data);
      });
      return () => this.socket?.off('ticket-status-changed');
    });
  }

  joinNotifications(type: string, id: string | number): void {
    this.connect();
    this.socket?.emit('join-notifications', { type, id });
  }

  onNewNotification(): Observable<any> {
    return new Observable(observer => {
      this.socket?.on('new-notification', (data: any) => {
        observer.next(data);
      });
      return () => this.socket?.off('new-notification');
    });
  }

  disconnect(): void {
    this.socket?.disconnect();
    this.socket = null;
  }

  ngOnDestroy(): void {
    this.disconnect();
  }
}
