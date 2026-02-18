import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-cars',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">My Cars</h1>
        <button (click)="showAddModal = true" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add Car
        </button>
      </div>

      @if (cars().length > 0) {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (car of cars(); track car.id) {
            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center gap-4 mb-4">
                <img [src]="car.image || '/assets/car-placeholder.png'" [alt]="car.name" class="w-16 h-16 object-contain">
                <div>
                  <h3 class="font-bold text-lg">{{ car.brand }} {{ car.model }}</h3>
                  <p class="text-gray-500">{{ car.variant }}</p>
                </div>
              </div>
              <div class="space-y-2 text-sm text-gray-600">
                <p><span class="font-medium">Registration:</span> {{ car.registration_number }}</p>
                <p><span class="font-medium">Fuel Type:</span> {{ car.fuel_type }}</p>
                <p><span class="font-medium">Year:</span> {{ car.year }}</p>
              </div>
              <div class="flex gap-2 mt-4">
                <button class="flex-1 bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200">Edit</button>
                <button (click)="deleteCar(car.id)" class="flex-1 bg-red-100 text-red-700 py-2 rounded hover:bg-red-200">Delete</button>
              </div>
            </div>
          }
        </div>
      } @else {
        <div class="text-center py-12 bg-white rounded-lg shadow">
          <p class="text-xl text-gray-500 mb-4">No cars added yet</p>
          <button (click)="showAddModal = true" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Add Your First Car
          </button>
        </div>
      }

      @if (showAddModal) {
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div class="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 class="text-xl font-bold mb-4">Add New Car</h2>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1">Brand</label>
                <select [(ngModel)]="newCar.brand" class="w-full p-2 border rounded">
                  <option value="">Select Brand</option>
                  <option value="Maruti">Maruti</option>
                  <option value="Honda">Honda</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Tata">Tata</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Model</label>
                <input type="text" [(ngModel)]="newCar.model" class="w-full p-2 border rounded">
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Registration Number</label>
                <input type="text" [(ngModel)]="newCar.registration_number" class="w-full p-2 border rounded" placeholder="MH01AB1234">
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Fuel Type</label>
                <select [(ngModel)]="newCar.fuel_type" class="w-full p-2 border rounded">
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="cng">CNG</option>
                  <option value="electric">Electric</option>
                </select>
              </div>
            </div>
            <div class="flex gap-4 mt-6">
              <button (click)="showAddModal = false" class="flex-1 bg-gray-200 py-2 rounded hover:bg-gray-300">Cancel</button>
              <button (click)="addCar()" class="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Car</button>
            </div>
          </div>
        </div>
      }
    </div>
  `
})
export class MyCarsComponent implements OnInit {
  cars = signal<any[]>([]);
  showAddModal = false;
  newCar = {
    brand: '',
    model: '',
    registration_number: '',
    fuel_type: 'petrol'
  };

  ngOnInit(): void {
    // Load cars from API
    this.cars.set([
      { id: 1, brand: 'Maruti', model: 'Swift', variant: 'VXI', registration_number: 'MH01AB1234', fuel_type: 'Petrol', year: 2020 }
    ]);
  }

  addCar(): void {
    if (!this.newCar.brand || !this.newCar.model || !this.newCar.registration_number) {
      alert('Please fill all required fields');
      return;
    }
    // Add car via API
    this.showAddModal = false;
    this.newCar = { brand: '', model: '', registration_number: '', fuel_type: 'petrol' };
    alert('Car added successfully!');
  }

  deleteCar(id: number): void {
    if (confirm('Are you sure you want to delete this car?')) {
      this.cars.update(cars => cars.filter(c => c.id !== id));
    }
  }
}
