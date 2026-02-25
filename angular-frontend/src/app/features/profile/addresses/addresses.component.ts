import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addresses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    select { appearance:none; -webkit-appearance:none; -moz-appearance:none; background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e"); background-position:right 12px center; background-repeat:no-repeat; background-size:20px; padding-right:40px !important; cursor:pointer; background-color:#fff; }
    select:focus { outline:none; border-color:#e31b23; box-shadow:0 0 0 3px rgba(227,27,35,0.1); }
  `],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">My Addresses</h1>
        <button (click)="showAddModal = true" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add Address
        </button>
      </div>

      @if (addresses().length > 0) {
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          @for (address of addresses(); track address.id) {
            <div class="bg-white rounded-lg shadow p-6" [class.border-2]="address.is_default" [class.border-blue-500]="address.is_default">
              @if (address.is_default) {
                <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-2">Default</span>
              }
              <h3 class="font-bold text-lg">{{ address.label }}</h3>
              <p class="text-gray-600 mt-2">{{ address.address }}</p>
              <p class="text-gray-600">{{ address.city }}, {{ address.state }} - {{ address.pincode }}</p>
              <p class="text-gray-500 mt-2">Phone: {{ address.phone }}</p>
              <div class="flex gap-2 mt-4">
                <button class="flex-1 bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200">Edit</button>
                @if (!address.is_default) {
                  <button (click)="setDefault(address.id)" class="flex-1 bg-blue-100 text-blue-700 py-2 rounded hover:bg-blue-200">Set Default</button>
                }
                <button (click)="deleteAddress(address.id)" class="flex-1 bg-red-100 text-red-700 py-2 rounded hover:bg-red-200">Delete</button>
              </div>
            </div>
          }
        </div>
      } @else {
        <div class="text-center py-12 bg-white rounded-lg shadow">
          <p class="text-xl text-gray-500 mb-4">No addresses added yet</p>
          <button (click)="showAddModal = true" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Add Your First Address
          </button>
        </div>
      }

      @if (showAddModal) {
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div class="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 class="text-xl font-bold mb-4">Add New Address</h2>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1">Label</label>
                <select [(ngModel)]="newAddress.label" class="w-full p-2 border rounded">
                  <option value="Home">Home</option>
                  <option value="Office">Office</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Full Address</label>
                <textarea [(ngModel)]="newAddress.address" rows="3" class="w-full p-2 border rounded"></textarea>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-1">City</label>
                  <input type="text" [(ngModel)]="newAddress.city" class="w-full p-2 border rounded">
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Pincode</label>
                  <input type="text" [(ngModel)]="newAddress.pincode" class="w-full p-2 border rounded">
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Phone</label>
                <input type="tel" [(ngModel)]="newAddress.phone" class="w-full p-2 border rounded" maxlength="10" placeholder="10-digit phone number" pattern="\\d{10}" #addrPhone="ngModel">
                <span class="text-red-500 text-xs mt-1 block" *ngIf="addrPhone.touched && addrPhone.invalid">Phone number must be exactly 10 digits</span>
              </div>
              <label class="flex items-center gap-2">
                <input type="checkbox" [(ngModel)]="newAddress.is_default">
                <span>Set as default address</span>
              </label>
            </div>
            <div class="flex gap-4 mt-6">
              <button (click)="showAddModal = false" class="flex-1 bg-gray-200 py-2 rounded hover:bg-gray-300">Cancel</button>
              <button (click)="addAddress()" class="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Address</button>
            </div>
          </div>
        </div>
      }
    </div>
  `
})
export class AddressesComponent implements OnInit {
  addresses = signal<any[]>([]);
  showAddModal = false;
  newAddress = {
    label: 'Home',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    is_default: false
  };

  ngOnInit(): void {
    this.addresses.set([
      { id: 1, label: 'Home', address: '123, Main Street, Sector 5', city: 'Mumbai', state: 'Maharashtra', pincode: '400001', phone: '9876543210', is_default: true }
    ]);
  }

  addAddress(): void {
    if (!this.newAddress.address || !this.newAddress.city || !this.newAddress.pincode) {
      alert('Please fill all required fields');
      return;
    }
    this.showAddModal = false;
    this.newAddress = { label: 'Home', address: '', city: '', state: '', pincode: '', phone: '', is_default: false };
    alert('Address added successfully!');
  }

  setDefault(id: number): void {
    this.addresses.update(addresses =>
      addresses.map(a => ({ ...a, is_default: a.id === id }))
    );
  }

  deleteAddress(id: number): void {
    if (confirm('Are you sure you want to delete this address?')) {
      this.addresses.update(addresses => addresses.filter(a => a.id !== id));
    }
  }
}
