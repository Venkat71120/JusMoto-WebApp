import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface Challan {
  id: number;
  vehicle_number: string;
  challan_number: string;
  offence_type: string;
  offence_description?: string;
  fine_amount: number;
  paid_amount: number;
  offence_location?: string;
  offence_date: string;
  due_date: string;
  status: 'pending' | 'paid' | 'disputed';
  payment_status: 'pending' | 'paid' | 'failed';
  issuing_authority?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChallanService {
  constructor(private api: ApiService) {}

  getChallans(params?: { status?: string; vehicle_number?: string; page?: number; limit?: number }): Observable<any> {
    return this.api.get<any>('/challans', params);
  }

  getChallan(id: number): Observable<any> {
    return this.api.get<any>(`/challans/${id}`);
  }

  checkChallans(params: { vehicle_number?: string; license_number?: string } | string): Observable<any> {
    const data = typeof params === 'string' ? { vehicle_number: params } : params;
    return this.api.post<any>('/challans/check', data);
  }

  addChallan(data: Partial<Challan>): Observable<any> {
    return this.api.post<any>('/challans', data);
  }

  payChallan(id: number, payment_method: string): Observable<any> {
    return this.api.post<any>(`/challans/${id}/pay`, { payment_method });
  }

  getChallanStats(): Observable<any> {
    return this.api.get<any>('/challans/stats/summary');
  }
}
