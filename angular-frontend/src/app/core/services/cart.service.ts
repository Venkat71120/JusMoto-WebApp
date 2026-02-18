import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';

export interface CartItem {
  id: number;
  item_id: number;
  item_type: string;
  car_id?: number;
  variant_id?: number;
  quantity: number;
  price: number;
  addons: number[];
  addon_total: number;
  service?: any;
  item_total?: number;
}

export interface Cart {
  items: CartItem[];
  sub_total: number;
  item_count: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<Cart>({ items: [], sub_total: 0, item_count: 0 });
  cart$ = this.cartSubject.asObservable();

  constructor(private api: ApiService) {}

  loadCart(): Observable<any> {
    return this.api.get<any>('/cart').pipe(
      tap(response => {
        if (response.success) {
          this.cartSubject.next(response.data);
        }
      })
    );
  }

  addItem(data: {
    service_id: number;
    car_id?: number;
    variant_id?: number;
    quantity?: number;
    addons?: number[];
  }): Observable<any> {
    return this.api.post<any>('/cart', data).pipe(
      tap(() => this.loadCart().subscribe())
    );
  }

  updateItem(id: number, data: { quantity?: number; addons?: number[] }): Observable<any> {
    return this.api.put<any>(`/cart/${id}`, data).pipe(
      tap(() => this.loadCart().subscribe())
    );
  }

  removeItem(id: number): Observable<any> {
    return this.api.delete<any>(`/cart/${id}`).pipe(
      tap(() => this.loadCart().subscribe())
    );
  }

  clearCart(): Observable<any> {
    return this.api.delete<any>('/cart').pipe(
      tap(() => this.cartSubject.next({ items: [], sub_total: 0, item_count: 0 }))
    );
  }

  getCartCount(): Observable<any> {
    return this.api.get<any>('/cart/count');
  }

  get currentCart(): Cart {
    return this.cartSubject.value;
  }

  get itemCount(): number {
    return this.cartSubject.value.item_count;
  }
}
