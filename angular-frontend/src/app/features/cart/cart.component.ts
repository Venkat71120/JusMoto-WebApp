import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Shopping Cart</h1>

      @if (cartItems().length > 0) {
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 space-y-4">
            @for (item of cartItems(); track item.id) {
              <div class="bg-white rounded-lg shadow p-4 flex items-center gap-4">
                <img [src]="item.image || '/assets/placeholder.jpg'" [alt]="item.name" class="w-24 h-24 object-cover rounded">
                <div class="flex-1">
                  <h3 class="font-semibold text-lg">{{ item.name }}</h3>
                  <p class="text-gray-500">{{ item.category }}</p>
                  <p class="text-blue-600 font-bold text-xl">₹{{ item.price }}</p>
                </div>
                <div class="flex items-center gap-2">
                  <button (click)="updateQuantity(item.id, item.quantity - 1)" class="w-8 h-8 bg-gray-200 rounded">-</button>
                  <span class="w-8 text-center">{{ item.quantity }}</span>
                  <button (click)="updateQuantity(item.id, item.quantity + 1)" class="w-8 h-8 bg-gray-200 rounded">+</button>
                </div>
                <button (click)="removeItem(item.id)" class="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            }
          </div>

          <div class="bg-white rounded-lg shadow p-6 h-fit">
            <h2 class="text-xl font-bold mb-4">Order Summary</h2>
            <div class="space-y-2 mb-4">
              <div class="flex justify-between">
                <span>Subtotal</span>
                <span>₹{{ subtotal() }}</span>
              </div>
              <div class="flex justify-between">
                <span>Tax (18%)</span>
                <span>₹{{ tax() }}</span>
              </div>
              <hr>
              <div class="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{{ total() }}</span>
              </div>
            </div>
            <a routerLink="/checkout" class="block w-full bg-blue-600 text-white text-center py-3 rounded hover:bg-blue-700">
              Proceed to Checkout
            </a>
          </div>
        </div>
      } @else {
        <div class="text-center py-12">
          <p class="text-xl text-gray-500 mb-4">Your cart is empty</p>
          <a routerLink="/services" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Browse Services
          </a>
        </div>
      }
    </div>
  `
})
export class CartComponent implements OnInit {
  cartItems = signal<any[]>([]);

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.loadCart().subscribe({
      next: (response) => {
        this.cartItems.set(response.data?.items || []);
      }
    });
  }

  subtotal(): number {
    return this.cartItems().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  tax(): number {
    return Math.round(this.subtotal() * 0.18);
  }

  total(): number {
    return this.subtotal() + this.tax();
  }

  updateQuantity(itemId: number, quantity: number): void {
    if (quantity < 1) return;
    this.cartService.updateItem(itemId, { quantity }).subscribe({
      next: () => this.loadCart()
    });
  }

  removeItem(itemId: number): void {
    this.cartService.removeItem(itemId).subscribe({
      next: () => this.loadCart()
    });
  }
}
