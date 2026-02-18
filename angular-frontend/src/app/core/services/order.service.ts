import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface OrderItem {
  service_id: number;
  car_id?: number;
  variant_id?: number;
  quantity?: number;
  addons?: number[];
}

export interface OrderAddress {
  name: string;
  phone: string;
  email?: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  country?: string;
  latitude?: number;
  longitude?: number;
}

export interface CreateOrderData {
  items: OrderItem[];
  coupon_code?: string;
  delivery_mode?: string;
  date?: string;
  schedule?: string;
  order_note?: string;
  address?: OrderAddress;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private api: ApiService) {}

  getOrders(params?: { status?: number; payment_status?: number; page?: number; limit?: number }): Observable<any> {
    return this.api.get<any>('/orders', params);
  }

  getOrder(id: number): Observable<any> {
    return this.api.get<any>(`/orders/${id}`);
  }

  createOrder(data: CreateOrderData): Observable<any> {
    return this.api.post<any>('/orders', data);
  }

  requestCompletion(id: number): Observable<any> {
    return this.api.post<any>(`/orders/${id}/complete-request`, {});
  }

  cancelOrder(id: number, reason?: string): Observable<any> {
    return this.api.post<any>(`/orders/${id}/cancel`, { reason });
  }

  requestRefund(id: number, reason: string): Observable<any> {
    return this.api.post<any>(`/orders/${id}/refund`, { reason });
  }

  submitReview(orderId: number, data: { service_id: number; rating: number; review?: string }): Observable<any> {
    return this.api.post<any>(`/orders/${orderId}/review`, data);
  }

  // Coupon
  validateCoupon(code: string, order_amount: number): Observable<any> {
    return this.api.post<any>('/coupons/validate', { code, order_amount });
  }

  getAvailableCoupons(): Observable<any> {
    return this.api.get<any>('/coupons/available');
  }
}
