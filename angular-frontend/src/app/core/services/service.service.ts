import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  discount_price?: number;
  final_price?: number;
  category?: any;
  subCategory?: any;
  includes?: any[];
  excludes?: any[];
  addons?: any[];
  reviews?: any[];
  average_rating?: number;
  review_count?: number;
  type: number;
  is_featured: number;
  status: number;
}

export interface ServiceListParams {
  category_id?: number;
  sub_category_id?: number;
  type?: number;
  is_featured?: number;
  min_price?: number;
  max_price?: number;
  search?: string;
  sort_by?: string;
  sort_order?: string;
  page?: number;
  limit?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private api: ApiService) {}

  getServices(params?: ServiceListParams): Observable<any> {
    return this.api.get<any>('/services', params);
  }

  getFeaturedServices(limit?: number): Observable<any> {
    return this.api.get<any>('/services/featured', { limit });
  }

  getService(idOrSlug: string | number): Observable<any> {
    return this.api.get<any>(`/services/${idOrSlug}`);
  }

  getServicePrice(id: number, car_id?: number, variant_id?: number): Observable<any> {
    return this.api.get<any>(`/services/${id}/price`, { car_id, variant_id });
  }

  getServiceReviews(id: number, page?: number, limit?: number): Observable<any> {
    return this.api.get<any>(`/services/${id}/reviews`, { page, limit });
  }

  // Categories
  getCategories(): Observable<any> {
    return this.api.get<any>('/categories');
  }

  getCategory(idOrSlug: string | number): Observable<any> {
    return this.api.get<any>(`/categories/${idOrSlug}`);
  }

  getCategoryServices(idOrSlug: string | number, params?: any): Observable<any> {
    return this.api.get<any>(`/categories/${idOrSlug}/services`, params);
  }

  // Brands & Cars
  getBrands(): Observable<any> {
    return this.api.get<any>('/brands');
  }

  getBrand(id: number): Observable<any> {
    return this.api.get<any>(`/brands/${id}`);
  }

  getCars(brand_id?: number): Observable<any> {
    return this.api.get<any>('/cars', { brand_id });
  }

  getCar(id: number): Observable<any> {
    return this.api.get<any>(`/cars/${id}`);
  }

  getVariants(car_id: number): Observable<any> {
    return this.api.get<any>(`/cars/${car_id}/variants`);
  }
}
