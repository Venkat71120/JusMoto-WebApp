import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  constructor(private api: ApiService) {}

  getBalance(): Observable<any> {
    return this.api.get<any>('/wallet');
  }

  getTransactions(params?: { type?: string; page?: number; limit?: number }): Observable<any> {
    return this.api.get<any>('/wallet/transactions', params);
  }

  topUp(amount: number, payment_method: string): Observable<any> {
    return this.api.post<any>('/wallet/topup', { amount, payment_method });
  }
}
