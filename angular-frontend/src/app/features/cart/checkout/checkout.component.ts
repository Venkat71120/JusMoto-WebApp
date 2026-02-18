import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../../core/services/cart.service';
import { OrderService } from '../../../core/services/order.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Checkout</h1>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 space-y-6">
          <div class="bg-white rounded-lg shadow p-6">
            <h2 class="text-xl font-bold mb-4">Delivery Address</h2>
            <form [formGroup]="addressForm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="md:col-span-2">
                  <label class="block text-sm font-medium mb-1">Full Address</label>
                  <textarea formControlName="address" rows="3" class="w-full p-2 border rounded"></textarea>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">City</label>
                  <input type="text" formControlName="city" class="w-full p-2 border rounded">
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Pincode</label>
                  <input type="text" formControlName="pincode" class="w-full p-2 border rounded">
                </div>
              </div>
            </form>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h2 class="text-xl font-bold mb-4">Payment Method</h2>
            <div class="space-y-3">
              @for (method of paymentMethods; track method.id) {
                <label class="flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50" [class.border-blue-500]="selectedPayment() === method.id">
                  <input type="radio" [value]="method.id" (change)="selectedPayment.set(method.id)" [checked]="selectedPayment() === method.id" class="mr-3">
                  <span>{{ method.name }}</span>
                </label>
              }
            </div>
          </div>
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
          <button (click)="placeOrder()" class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700" [disabled]="isProcessing()">
            {{ isProcessing() ? 'Processing...' : 'Place Order' }}
          </button>
        </div>
      </div>
    </div>
  `
})
export class CheckoutComponent implements OnInit {
  addressForm: FormGroup;
  selectedPayment = signal('cod');
  isProcessing = signal(false);
  cartItems = signal<any[]>([]);

  paymentMethods = [
    { id: 'cod', name: 'Cash on Delivery' },
    { id: 'razorpay', name: 'Razorpay' },
    { id: 'stripe', name: 'Credit/Debit Card' }
  ];

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.addressForm = this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required]
    });
  }

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

  placeOrder(): void {
    if (this.addressForm.invalid) {
      alert('Please fill in all address fields');
      return;
    }

    this.isProcessing.set(true);
    const orderData = {
      ...this.addressForm.value,
      payment_method: this.selectedPayment(),
      items: this.cartItems()
    };

    this.orderService.createOrder(orderData).subscribe({
      next: (response) => {
        this.isProcessing.set(false);
        alert('Order placed successfully!');
        this.router.navigate(['/orders', response.data?.id]);
      },
      error: () => {
        this.isProcessing.set(false);
        alert('Failed to place order. Please try again.');
      }
    });
  }
}
