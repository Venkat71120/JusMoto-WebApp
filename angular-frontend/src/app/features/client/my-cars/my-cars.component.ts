import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-my-cars',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="my-cars-container">
      <div class="page-header">
        <div class="header-content">
          <h1>My Cars</h1>
          <p>Manage your registered vehicles</p>
        </div>
        <button class="btn-primary" (click)="showAddForm.set(true)">
          + Add New Car
        </button>
      </div>

      <div *ngIf="loading()" class="loading">
        <div class="spinner"></div>
        <p>Loading your vehicles...</p>
      </div>

      <div *ngIf="!loading() && cars().length === 0 && !showAddForm()" class="empty-state">
        <div class="empty-icon">🚗</div>
        <h3>No cars added yet</h3>
        <p>Add your vehicles to quickly select them during checkout.</p>
        <button class="btn-primary" (click)="showAddForm.set(true)">Add Your First Car</button>
      </div>

      <!-- Add/Edit Form Modal -->
      <div class="modal-overlay" *ngIf="showAddForm()" (click)="closeForm()">
        <div class="modal-content" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h2>{{ editingCar() ? 'Edit Car' : 'Add New Car' }}</h2>
            <button class="close-btn" (click)="closeForm()">&times;</button>
          </div>

          <form [formGroup]="carForm" (ngSubmit)="saveCar()">
            <div class="form-row">
              <div class="form-group">
                <label for="make">Make *</label>
                <select id="make" formControlName="make" class="form-control" (change)="onMakeChange()">
                  <option value="">Select Make</option>
                  <option *ngFor="let make of carMakes" [value]="make">{{ make }}</option>
                </select>
              </div>
              <div class="form-group">
                <label for="model">Model *</label>
                <input type="text" id="model" formControlName="model" class="form-control" placeholder="e.g., Swift, City">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="year">Year *</label>
                <select id="year" formControlName="year" class="form-control">
                  <option value="">Select Year</option>
                  <option *ngFor="let year of years" [value]="year">{{ year }}</option>
                </select>
              </div>
              <div class="form-group">
                <label for="color">Color</label>
                <input type="text" id="color" formControlName="color" class="form-control" placeholder="e.g., White, Black">
              </div>
            </div>

            <div class="form-group">
              <label for="registration_number">Registration Number *</label>
              <input
                type="text"
                id="registration_number"
                formControlName="registration_number"
                class="form-control"
                placeholder="e.g., MH12AB1234"
                (input)="formatRegistration($event)">
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="fuel_type">Fuel Type</label>
                <select id="fuel_type" formControlName="fuel_type" class="form-control">
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="cng">CNG</option>
                  <option value="electric">Electric</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
              <div class="form-group">
                <label for="transmission">Transmission</label>
                <select id="transmission" formControlName="transmission" class="form-control">
                  <option value="manual">Manual</option>
                  <option value="automatic">Automatic</option>
                </select>
              </div>
            </div>

            <div class="form-group checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" formControlName="is_default">
                <span>Set as default vehicle</span>
              </label>
            </div>

            <div class="form-actions">
              <button type="button" class="btn-outline" (click)="closeForm()">Cancel</button>
              <button type="submit" class="btn-primary" [disabled]="submitting() || carForm.invalid">
                {{ submitting() ? 'Saving...' : (editingCar() ? 'Update Car' : 'Add Car') }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Cars List -->
      <div class="cars-grid" *ngIf="!loading() && cars().length > 0">
        <div class="car-card" *ngFor="let car of cars()" [class.default]="car.is_default">
          <div class="car-header">
            <div class="car-icon">🚗</div>
            <span *ngIf="car.is_default" class="default-badge">Default</span>
          </div>

          <div class="car-body">
            <h3>{{ car.make }} {{ car.model }}</h3>
            <p class="registration">{{ car.registration_number }}</p>

            <div class="car-details">
              <span>{{ car.year }}</span>
              <span *ngIf="car.color">{{ car.color }}</span>
              <span *ngIf="car.fuel_type">{{ car.fuel_type | titlecase }}</span>
            </div>
          </div>

          <div class="car-actions">
            <button class="action-btn" (click)="editCar(car)">Edit</button>
            <button *ngIf="!car.is_default" class="action-btn" (click)="setDefault(car.id)">Set Default</button>
            <button class="action-btn danger" (click)="deleteCar(car.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .my-cars-container {
      max-width: 1000px;
      margin: 0 auto;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 24px;
    }

    .header-content h1 {
      font-size: 28px;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 8px;
    }

    .header-content p {
      color: #666;
      margin: 0;
    }

    .btn-primary {
      padding: 12px 24px;
      background: #0066cc;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
    }

    .loading {
      text-align: center;
      padding: 60px 20px;
    }

    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid #e5e7eb;
      border-top-color: #0066cc;
      border-radius: 50%;
      margin: 0 auto 16px;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .empty-state {
      text-align: center;
      padding: 60px 20px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .empty-icon {
      font-size: 64px;
      margin-bottom: 16px;
    }

    .empty-state h3 {
      font-size: 20px;
      color: #1a1a1a;
      margin: 0 0 8px;
    }

    .empty-state p {
      color: #666;
      margin: 0 0 24px;
    }

    /* Modal */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 20px;
    }

    .modal-content {
      background: #fff;
      border-radius: 12px;
      max-width: 500px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;
      border-bottom: 1px solid #e5e7eb;
    }

    .modal-header h2 {
      font-size: 20px;
      font-weight: 600;
      margin: 0;
    }

    .close-btn {
      width: 32px;
      height: 32px;
      border: none;
      background: #f5f5f5;
      border-radius: 50%;
      font-size: 24px;
      line-height: 1;
      cursor: pointer;
      color: #666;
    }

    form {
      padding: 24px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: #333;
      margin-bottom: 8px;
    }

    .form-control {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      font-size: 15px;
    }

    .form-control:focus {
      outline: none;
      border-color: #0066cc;
      box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
    }

    select.form-control {
      appearance: none;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
      background-position: right 12px center;
      background-repeat: no-repeat;
      background-size: 20px;
      padding-right: 40px;
    }

    .checkbox-group {
      margin-top: 8px;
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
    }

    .checkbox-label input {
      width: 18px;
      height: 18px;
    }

    .form-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
    }

    .btn-outline {
      padding: 12px 24px;
      border: 1px solid #e5e7eb;
      background: #fff;
      color: #444;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
    }

    /* Cars Grid */
    .cars-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }

    .car-card {
      background: #fff;
      border-radius: 12px;
      border: 2px solid #e5e7eb;
      overflow: hidden;
      transition: all 0.2s;
    }

    .car-card:hover {
      border-color: #0066cc;
    }

    .car-card.default {
      border-color: #0066cc;
      box-shadow: 0 4px 12px rgba(0, 102, 204, 0.15);
    }

    .car-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      background: #f9fafb;
      border-bottom: 1px solid #e5e7eb;
    }

    .car-icon {
      font-size: 32px;
    }

    .default-badge {
      font-size: 11px;
      background: #0066cc;
      color: #fff;
      padding: 3px 10px;
      border-radius: 10px;
    }

    .car-body {
      padding: 20px;
    }

    .car-body h3 {
      font-size: 20px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 8px;
    }

    .registration {
      font-size: 16px;
      color: #0066cc;
      font-weight: 600;
      margin: 0 0 12px;
      letter-spacing: 1px;
    }

    .car-details {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .car-details span {
      font-size: 13px;
      background: #f5f5f5;
      padding: 4px 10px;
      border-radius: 12px;
      color: #666;
    }

    .car-actions {
      display: flex;
      gap: 8px;
      padding: 12px 20px;
      border-top: 1px solid #e5e7eb;
      background: #f9fafb;
    }

    .action-btn {
      padding: 6px 14px;
      font-size: 13px;
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      color: #444;
      cursor: pointer;
    }

    .action-btn:hover {
      border-color: #0066cc;
      color: #0066cc;
    }

    .action-btn.danger:hover {
      border-color: #dc3545;
      color: #dc3545;
    }
  `]
})
export class MyCarsComponent implements OnInit {
  cars = signal<any[]>([]);
  loading = signal(true);
  showAddForm = signal(false);
  editingCar = signal<any>(null);
  submitting = signal(false);
  carForm: FormGroup;

  carMakes = [
    'Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Kia', 'Toyota',
    'Honda', 'Ford', 'Volkswagen', 'Skoda', 'Renault', 'Nissan',
    'MG', 'Jeep', 'BMW', 'Mercedes-Benz', 'Audi', 'Other'
  ];

  years: number[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1990; i--) {
      this.years.push(i);
    }

    this.carForm = this.fb.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      color: [''],
      registration_number: ['', Validators.required],
      fuel_type: ['petrol'],
      transmission: ['manual'],
      is_default: [false]
    });
  }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.loading.set(true);
    this.http.get<any>(`${environment.apiUrl}/cars`).subscribe({
      next: (response) => {
        this.cars.set(response.data || response.cars || []);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  formatRegistration(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
  }

  onMakeChange(): void {
    // Could be used to load models based on make
  }

  editCar(car: any): void {
    this.editingCar.set(car);
    this.carForm.patchValue(car);
    this.showAddForm.set(true);
  }

  closeForm(): void {
    this.showAddForm.set(false);
    this.editingCar.set(null);
    this.carForm.reset({
      fuel_type: 'petrol',
      transmission: 'manual',
      is_default: false
    });
  }

  saveCar(): void {
    if (this.carForm.invalid) return;

    this.submitting.set(true);
    const data = this.carForm.value;

    const request = this.editingCar()
      ? this.http.put(`${environment.apiUrl}/cars/${this.editingCar().id}`, data)
      : this.http.post(`${environment.apiUrl}/cars`, data);

    request.subscribe({
      next: () => {
        this.submitting.set(false);
        this.closeForm();
        this.loadCars();
      },
      error: () => {
        this.submitting.set(false);
        alert('Failed to save car. Please try again.');
      }
    });
  }

  setDefault(id: number): void {
    this.http.put(`${environment.apiUrl}/cars/${id}/default`, {}).subscribe({
      next: () => {
        this.cars.update(items =>
          items.map(car => ({ ...car, is_default: car.id === id }))
        );
      }
    });
  }

  deleteCar(id: number): void {
    if (confirm('Are you sure you want to delete this car?')) {
      this.http.delete(`${environment.apiUrl}/cars/${id}`).subscribe({
        next: () => {
          this.cars.update(items => items.filter(car => car.id !== id));
        }
      });
    }
  }
}
