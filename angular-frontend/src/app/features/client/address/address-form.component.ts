import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="address-form-container">
      <div class="back-link">
        <a routerLink="/client/address">&larr; Back to Addresses</a>
      </div>

      <div class="form-card">
        <h1>{{ isEditing() ? 'Edit Address' : 'Add New Address' }}</h1>

        <form [formGroup]="addressForm" (ngSubmit)="onSubmit()">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input
                type="text"
                id="name"
                formControlName="name"
                class="form-control"
                placeholder="Enter full name">
              <div class="error" *ngIf="addressForm.get('name')?.touched && addressForm.get('name')?.errors?.['required']">
                Name is required
              </div>
            </div>

            <div class="form-group">
              <label for="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                formControlName="phone"
                class="form-control"
                placeholder="10-digit phone number">
              <div class="error" *ngIf="addressForm.get('phone')?.touched && addressForm.get('phone')?.errors?.['required']">
                Phone is required
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="address_line1">Address Line 1 *</label>
            <input
              type="text"
              id="address_line1"
              formControlName="address_line1"
              class="form-control"
              placeholder="House No., Building, Street">
            <div class="error" *ngIf="addressForm.get('address_line1')?.touched && addressForm.get('address_line1')?.errors?.['required']">
              Address is required
            </div>
          </div>

          <div class="form-group">
            <label for="address_line2">Address Line 2</label>
            <input
              type="text"
              id="address_line2"
              formControlName="address_line2"
              class="form-control"
              placeholder="Area, Colony, Landmark (optional)">
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="city">City *</label>
              <input
                type="text"
                id="city"
                formControlName="city"
                class="form-control"
                placeholder="City">
              <div class="error" *ngIf="addressForm.get('city')?.touched && addressForm.get('city')?.errors?.['required']">
                City is required
              </div>
            </div>

            <div class="form-group">
              <label for="state">State *</label>
              <select id="state" formControlName="state" class="form-control">
                <option value="">Select State</option>
                <option *ngFor="let state of states" [value]="state">{{ state }}</option>
              </select>
              <div class="error" *ngIf="addressForm.get('state')?.touched && addressForm.get('state')?.errors?.['required']">
                State is required
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="pincode">Pincode *</label>
              <input
                type="text"
                id="pincode"
                formControlName="pincode"
                class="form-control"
                placeholder="6-digit pincode"
                maxlength="6">
              <div class="error" *ngIf="addressForm.get('pincode')?.touched && addressForm.get('pincode')?.errors?.['required']">
                Pincode is required
              </div>
            </div>

            <div class="form-group">
              <label for="type">Address Type *</label>
              <select id="type" formControlName="type" class="form-control">
                <option value="home">Home</option>
                <option value="work">Work</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div class="form-group checkbox-group">
            <label class="checkbox-label">
              <input type="checkbox" formControlName="is_default">
              <span>Set as default address</span>
            </label>
          </div>

          <div class="form-actions">
            <button type="button" routerLink="/client/address" class="btn-outline">Cancel</button>
            <button type="submit" class="btn-primary" [disabled]="submitting() || addressForm.invalid">
              {{ submitting() ? 'Saving...' : (isEditing() ? 'Update Address' : 'Save Address') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .address-form-container {
      max-width: 700px;
      margin: 0 auto;
    }

    .back-link {
      margin-bottom: 20px;
    }

    .back-link a {
      color: #e31b23;
      text-decoration: none;
      font-size: 14px;
    }

    .form-card {
      background: #fff;
      border-radius: 12px;
      padding: 32px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .form-card h1 {
      font-size: 24px;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 32px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    @media (max-width: 600px) {
      .form-row {
        grid-template-columns: 1fr;
      }
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
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    .form-control:focus {
      outline: none;
      border-color: #e31b23;
      box-shadow: 0 0 0 3px rgba(227, 27, 35, 0.1);
    }

    select.form-control {
      appearance: none;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
      background-position: right 12px center;
      background-repeat: no-repeat;
      background-size: 20px;
      padding-right: 40px;
    }

    .error {
      color: #dc3545;
      font-size: 13px;
      margin-top: 6px;
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
      cursor: pointer;
    }

    .checkbox-label span {
      font-size: 14px;
      color: #444;
    }

    .form-actions {
      display: flex;
      gap: 16px;
      justify-content: flex-end;
      margin-top: 32px;
      padding-top: 24px;
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
      text-decoration: none;
    }

    .btn-primary {
      padding: 12px 24px;
      background: #e31b23;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
    }

    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `]
})
export class AddressFormComponent implements OnInit {
  addressForm: FormGroup;
  isEditing = signal(false);
  submitting = signal(false);
  addressId: number | null = null;

  states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Delhi', 'Chandigarh', 'Puducherry'
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastService
  ) {
    this.addressForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address_line1: ['', Validators.required],
      address_line2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      type: ['home'],
      is_default: [false]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.addressId = +id;
      this.isEditing.set(true);
      this.loadAddress(this.addressId);
    }
  }

  loadAddress(id: number): void {
    this.http.get<any>(`${environment.apiUrl}/user/addresses/${id}`).subscribe({
      next: (response) => {
        const address = response.data || response.address || response;
        this.addressForm.patchValue(address);
      }
    });
  }

  onSubmit(): void {
    if (this.addressForm.invalid) return;

    this.submitting.set(true);

    const data = this.addressForm.value;
    const request = this.isEditing()
      ? this.http.put(`${environment.apiUrl}/user/addresses/${this.addressId}`, data)
      : this.http.post(`${environment.apiUrl}/user/addresses`, data);

    request.subscribe({
      next: () => {
        this.submitting.set(false);
        this.toast.success(this.isEditing() ? 'Address updated successfully' : 'Address added successfully');
        this.router.navigate(['/client/address']);
      },
      error: () => {
        this.submitting.set(false);
        this.toast.error('Failed to save address. Please try again.');
      }
    });
  }
}
