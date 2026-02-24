import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MediaPickerComponent } from '../../../shared/components/media-picker/media-picker.component';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-service-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, MediaPickerComponent],
  template: `
    <!-- Page Header -->
    <div class="page-header">
      <a [routerLink]="isProduct ? '/admin/products/all' : '/admin/services/all'" class="back-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to {{ isProduct ? 'Products' : 'Services' }}
      </a>
      <h1 class="page-title">{{ isEdit ? 'Edit' : 'Create' }} {{ isProduct ? 'Product' : 'Service' }}</h1>
    </div>

    <!-- Loading -->
    <div class="loading-center" *ngIf="loadingData()"><div class="spinner"></div></div>

    <!-- Step Tabs -->
    <div class="step-tabs" *ngIf="!loadingData()">
      <div class="step-track">
        <!-- Step 1 -->
        <div class="step-item" [class.active]="currentStep() === 1" [class.completed]="currentStep() > 1" (click)="goToStep(1)">
          <div class="step-circle">
            <svg *ngIf="currentStep() > 1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            <span *ngIf="currentStep() <= 1">1</span>
          </div>
          <span class="step-label">Service Details</span>
        </div>
        <div class="step-line" [class.completed]="currentStep() > 1"></div>
        <!-- Step 2 -->
        <div class="step-item" [class.active]="currentStep() === 2" [class.completed]="currentStep() > 2" (click)="goToStep(2)">
          <div class="step-circle">
            <svg *ngIf="currentStep() > 2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            <span *ngIf="currentStep() <= 2">2</span>
          </div>
          <span class="step-label">Attributes</span>
        </div>
        <div class="step-line" [class.completed]="currentStep() > 2"></div>
        <!-- Step 3 -->
        <div class="step-item" [class.active]="currentStep() === 3" [class.completed]="false" (click)="goToStep(3)">
          <div class="step-circle">
            <span>3</span>
          </div>
          <span class="step-label">Select Cars</span>
        </div>
      </div>
    </div>

    <!-- Form -->
    <form *ngIf="!loadingData()" [formGroup]="form" (ngSubmit)="onSubmit()">

      <!-- ============ STEP 1: Service Details ============ -->
      <div class="form-card" *ngIf="currentStep() === 1">
        <h2 class="section-title">Service Details</h2>

        <div class="form-grid">
          <!-- Title -->
          <div class="form-group">
            <label>Title <span class="req">*</span></label>
            <input type="text" formControlName="title" placeholder="Service title" (input)="generateSlug()">
            <div class="field-error" *ngIf="form.get('title')?.touched && form.get('title')?.hasError('required')">Title is required</div>
          </div>

          <!-- Slug -->
          <div class="form-group">
            <label>Slug</label>
            <input type="text" formControlName="slug" placeholder="auto-generated-slug">
          </div>

          <!-- Category -->
          <div class="form-group">
            <label>Category</label>
            <select formControlName="category_id">
              <option value="">Select Category</option>
              <option *ngFor="let cat of categories()" [value]="cat.id">{{ cat.name }}</option>
            </select>
          </div>

          <!-- Type -->
          <div class="form-group">
            <label>Type</label>
            <select formControlName="type">
              <option [value]="0">Service</option>
              <option [value]="1">Product</option>
            </select>
          </div>

          <!-- Price -->
          <div class="form-group">
            <label>Price <span class="req">*</span></label>
            <input type="number" formControlName="price" placeholder="0.00">
            <div class="field-error" *ngIf="form.get('price')?.touched && form.get('price')?.hasError('required')">Price is required</div>
          </div>

          <!-- Discount Price -->
          <div class="form-group">
            <label>Discount Price</label>
            <input type="number" formControlName="discount_price" placeholder="0.00">
          </div>

          <!-- Duration -->
          <div class="form-group">
            <label>Duration</label>
            <input type="text" formControlName="duration" placeholder="e.g. 30 mins">
          </div>

          <!-- Max Quantity -->
          <div class="form-group">
            <label>Max Quantity</label>
            <input type="number" formControlName="max_qty" placeholder="0">
          </div>

          <!-- Video URL -->
          <div class="form-group">
            <label>Video URL</label>
            <input type="text" formControlName="video_url" placeholder="https://youtube.com/...">
          </div>

          <!-- Description -->
          <div class="form-group full-width">
            <label>Description</label>
            <textarea formControlName="description" rows="5" placeholder="Service description..."></textarea>
          </div>

          <!-- Image -->
          <div class="form-group">
            <label>Image</label>
            <app-media-picker
              [value]="imageValue()"
              label="Select Image"
              (valueChange)="onImageSelected($event)">
            </app-media-picker>
          </div>

          <!-- Gallery -->
          <div class="form-group">
            <label>Gallery</label>
            <div class="gallery-grid">
              <app-media-picker
                *ngFor="let g of galleryValues(); let i = index; trackBy: trackByIndex"
                [value]="g"
                label="Gallery Image"
                (valueChange)="onGalleryImageChange(i, $event)">
              </app-media-picker>
              <button type="button" class="gallery-add-btn" (click)="addGallerySlot()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                <span>Add Image</span>
              </button>
            </div>
          </div>

          <!-- Checkboxes -->
          <div class="form-group">
            <label class="checkbox-label">
              <input type="checkbox" formControlName="is_featured">
              Featured Service
            </label>
          </div>

          <div class="form-group">
            <label class="checkbox-label">
              <input type="checkbox" formControlName="status">
              Active
            </label>
          </div>
        </div>
      </div>

      <!-- ============ STEP 2: Service Attributes ============ -->
      <div class="form-card" *ngIf="currentStep() === 2">
        <h2 class="section-title">Service Attributes</h2>

        <!-- Service Includes -->
        <div class="repeater-section">
          <div class="repeater-header">
            <h3>Service Includes</h3>
            <button type="button" class="btn-add" (click)="addInclude()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add
            </button>
          </div>
          <div class="repeater-empty" *ngIf="includes.length === 0">No includes added yet. Click "Add" to create one.</div>
          <div class="repeater-item" *ngFor="let ctrl of includes.controls; let i = index" [formGroup]="asFormGroup(ctrl)">
            <div class="repeater-grid">
              <div class="form-group">
                <label>Icon</label>
                <input type="text" formControlName="icon" placeholder="Icon class or URL">
              </div>
              <div class="form-group">
                <label>Title</label>
                <input type="text" formControlName="title" placeholder="Include title">
              </div>
            </div>
            <button type="button" class="btn-remove" (click)="includes.removeAt(i)" title="Remove">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>

        <!-- FAQs -->
        <div class="repeater-section">
          <div class="repeater-header">
            <h3>FAQs</h3>
            <button type="button" class="btn-add" (click)="addFaq()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add
            </button>
          </div>
          <div class="repeater-empty" *ngIf="faqs.length === 0">No FAQs added yet. Click "Add" to create one.</div>
          <div class="repeater-item" *ngFor="let ctrl of faqs.controls; let i = index" [formGroup]="asFormGroup(ctrl)">
            <div class="repeater-grid">
              <div class="form-group">
                <label>Question</label>
                <input type="text" formControlName="question" placeholder="FAQ question">
              </div>
              <div class="form-group">
                <label>Answer</label>
                <textarea formControlName="answer" rows="3" placeholder="FAQ answer"></textarea>
              </div>
            </div>
            <button type="button" class="btn-remove" (click)="faqs.removeAt(i)" title="Remove">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="repeater-section">
          <div class="repeater-header">
            <h3>Additional Info</h3>
            <button type="button" class="btn-add" (click)="addAdditionalInfo()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add
            </button>
          </div>
          <div class="repeater-empty" *ngIf="additionalInfo.length === 0">No additional info added yet. Click "Add" to create one.</div>
          <div class="repeater-item" *ngFor="let ctrl of additionalInfo.controls; let i = index" [formGroup]="asFormGroup(ctrl)">
            <div class="repeater-grid">
              <div class="form-group">
                <label>Title</label>
                <input type="text" formControlName="title" placeholder="Info title">
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea formControlName="description" rows="3" placeholder="Info description"></textarea>
              </div>
            </div>
            <button type="button" class="btn-remove" (click)="additionalInfo.removeAt(i)" title="Remove">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>

        <!-- Specifications -->
        <div class="repeater-section">
          <div class="repeater-header">
            <h3>Specifications</h3>
            <button type="button" class="btn-add" (click)="addSpecification()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add
            </button>
          </div>
          <div class="repeater-empty" *ngIf="specifications.length === 0">No specifications added yet. Click "Add" to create one.</div>
          <div class="repeater-item" *ngFor="let ctrl of specifications.controls; let i = index" [formGroup]="asFormGroup(ctrl)">
            <div class="repeater-grid">
              <div class="form-group">
                <label>Title</label>
                <input type="text" formControlName="title" placeholder="Spec title">
              </div>
              <div class="form-group">
                <label>Value</label>
                <input type="text" formControlName="value" placeholder="Spec value">
              </div>
            </div>
            <button type="button" class="btn-remove" (click)="specifications.removeAt(i)" title="Remove">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- ============ STEP 3: Select Cars ============ -->
      <div class="form-card" *ngIf="currentStep() === 3">
        <h2 class="section-title">Select Cars</h2>

        <!-- Cascade Selectors -->
        <div class="car-selector">
          <div class="car-selector-row">
            <div class="form-group">
              <label>Brand</label>
              <select [(ngModel)]="selectedBrandId" [ngModelOptions]="{standalone: true}" (change)="onBrandChange()">
                <option value="">Select Brand</option>
                <option *ngFor="let brand of brands()" [value]="brand.id">{{ brand.name }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Car</label>
              <select [(ngModel)]="selectedCarId" [ngModelOptions]="{standalone: true}" (change)="onCarChange()" [disabled]="!selectedBrandId">
                <option value="">Select Car</option>
                <option *ngFor="let car of filteredCars()" [value]="car.id">{{ car.name }}</option>
              </select>
              <span class="field-hint" *ngIf="loadingCars()">Loading...</span>
            </div>
            <div class="form-group">
              <label>Variant</label>
              <select [(ngModel)]="selectedVariantId" [ngModelOptions]="{standalone: true}" [disabled]="!selectedCarId">
                <option value="">Select Variant</option>
                <option *ngFor="let v of filteredVariants()" [value]="v.id">{{ v.name }}</option>
              </select>
              <span class="field-hint" *ngIf="loadingVariants()">Loading...</span>
            </div>
            <div class="form-group">
              <label>Custom Price</label>
              <input type="number" [(ngModel)]="carCustomPrice" [ngModelOptions]="{standalone: true}" placeholder="Price for this car">
            </div>
            <div class="form-group car-add-col">
              <button type="button" class="btn-add-car" (click)="addCarRow()" [disabled]="!selectedCarId">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Add Car
              </button>
            </div>
          </div>
        </div>

        <!-- Selected Cars Table -->
        <div class="cars-table-wrap" *ngIf="selectedCars().length > 0">
          <table class="cars-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Brand</th>
                <th>Car</th>
                <th>Variant</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let row of selectedCars(); let i = index">
                <td>{{ i + 1 }}</td>
                <td>{{ row.brand_name }}</td>
                <td>{{ row.car_name }}</td>
                <td>{{ row.variant_name || '-' }}</td>
                <td>
                  <input type="number" class="table-price-input" [value]="row.price" (input)="updateCarPrice(i, $event)">
                </td>
                <td>
                  <button type="button" class="btn-remove-row" (click)="removeCarRow(i)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="repeater-empty" *ngIf="selectedCars().length === 0">
          No cars selected. Use the dropdowns above to add cars to this service.
        </div>
      </div>

      <!-- Error -->
      <div *ngIf="error()" class="error-msg">{{ error() }}</div>

      <!-- Navigation Buttons -->
      <div class="form-nav" *ngIf="!loadingData()">
        <div class="nav-left">
          <a routerLink="/admin/services/all" class="btn-cancel">Cancel</a>
        </div>
        <div class="nav-right">
          <button type="button" class="btn-back" *ngIf="currentStep() > 1" (click)="prevStep()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
            Back
          </button>
          <button type="button" class="btn-next" *ngIf="currentStep() < 3" (click)="nextStep()">
            Next
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <button type="submit" class="btn-primary" [disabled]="saving()">
            {{ saving() ? 'Saving...' : (isEdit ? 'Update Service' : 'Create Service') }}
          </button>
        </div>
      </div>
    </form>
  `,
  styles: [`
    /* Page Header */
    .page-header { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
    .back-btn { display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: #64748b; font-weight: 500; transition: color 0.2s; }
    .back-btn:hover { color: #e31b23; }
    .page-title { font-size: 24px; font-weight: 700; color: #1a1a2e; margin: 0; }

    /* Loading */
    .loading-center { display: flex; justify-content: center; padding: 60px; }
    .spinner { width: 36px; height: 36px; border: 3px solid #f3f4f6; border-top-color: #e31b23; border-radius: 50%; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* Step Tabs */
    .step-tabs { margin-bottom: 24px; }
    .step-track { display: flex; align-items: center; justify-content: center; gap: 0; padding: 24px 32px; background: #fff; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
    .step-item { display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer; position: relative; z-index: 1; }
    .step-circle {
      width: 40px; height: 40px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 15px;
      border: 2px solid #d1d5db; background: #fff; color: #94a3b8;
      transition: all 0.3s ease;
    }
    .step-item.active .step-circle { border-color: #e31b23; background: #e31b23; color: #fff; }
    .step-item.completed .step-circle { border-color: #16a34a; background: #16a34a; color: #fff; }
    .step-label { font-size: 13px; font-weight: 600; color: #94a3b8; transition: color 0.3s; white-space: nowrap; }
    .step-item.active .step-label { color: #e31b23; }
    .step-item.completed .step-label { color: #16a34a; }
    .step-line { flex: 1; height: 2px; background: #e5e7eb; min-width: 60px; max-width: 160px; transition: background 0.3s; }
    .step-line.completed { background: #16a34a; }

    /* Form Card */
    .form-card { background: #fff; border-radius: 12px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); margin-bottom: 20px; }
    .section-title { font-size: 18px; font-weight: 700; color: #1a1a2e; margin: 0 0 24px 0; padding-bottom: 16px; border-bottom: 1px solid #f1f5f9; }

    /* Form Grid */
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .full-width { grid-column: 1 / -1; }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 13px; font-weight: 600; color: #374151; }
    .req { color: #e31b23; }
    .form-group input[type="text"],
    .form-group input[type="number"],
    .form-group select,
    .form-group textarea {
      padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px;
      font-size: 14px; transition: border-color 0.2s; background: #fff;
      font-family: inherit;
    }
    .form-group input:focus, .form-group select:focus, .form-group textarea:focus { outline: none; border-color: #e31b23; }
    .form-group textarea { resize: vertical; }
    .form-group select:disabled { background: #f3f4f6; cursor: not-allowed; }
    .field-error { font-size: 12px; color: #dc2626; margin-top: 2px; }
    .field-hint { font-size: 12px; color: #94a3b8; }

    /* Checkbox */
    .checkbox-label { display: flex; align-items: center; gap: 8px; cursor: pointer; padding-top: 20px; font-size: 14px; font-weight: 500; color: #374151; }
    .checkbox-label input[type="checkbox"] { width: 18px; height: 18px; accent-color: #e31b23; cursor: pointer; }

    /* Gallery */
    .gallery-grid { display: flex; flex-wrap: wrap; gap: 12px; align-items: flex-start; }
    .gallery-add-btn {
      width: 160px; height: 120px; border: 2px dashed #d1d5db; border-radius: 12px;
      background: #fafafa; display: flex; flex-direction: column; align-items: center;
      justify-content: center; gap: 6px; cursor: pointer; color: #94a3b8;
      font-size: 13px; font-weight: 500; transition: all 0.2s;
    }
    .gallery-add-btn:hover { border-color: #e31b23; color: #e31b23; }

    /* Repeater Sections */
    .repeater-section { margin-bottom: 28px; padding: 20px; background: #f8f9fb; border-radius: 12px; border: 1px solid #f1f5f9; }
    .repeater-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
    .repeater-header h3 { font-size: 15px; font-weight: 700; color: #1a1a2e; margin: 0; }
    .btn-add {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 8px 16px; border: 1px solid #e31b23; border-radius: 8px;
      background: #fff; color: #e31b23; font-size: 13px; font-weight: 600;
      cursor: pointer; transition: all 0.2s;
    }
    .btn-add:hover { background: #e31b23; color: #fff; }
    .repeater-empty { text-align: center; padding: 20px; color: #94a3b8; font-size: 14px; font-style: italic; }
    .repeater-item {
      position: relative; background: #fff; border-radius: 10px; padding: 16px 48px 16px 16px;
      margin-bottom: 12px; border: 1px solid #e5e7eb; transition: border-color 0.2s;
    }
    .repeater-item:hover { border-color: #cbd5e1; }
    .repeater-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .btn-remove {
      position: absolute; top: 12px; right: 12px;
      background: #fff; border: 1px solid #fca5a5; border-radius: 8px;
      width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;
      cursor: pointer; color: #dc2626; transition: all 0.2s;
    }
    .btn-remove:hover { background: #fee2e2; border-color: #dc2626; }

    /* Car Selector */
    .car-selector { background: #f8f9fb; border-radius: 12px; padding: 20px; margin-bottom: 24px; border: 1px solid #f1f5f9; }
    .car-selector-row { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr auto; gap: 16px; align-items: flex-end; }
    .car-add-col { display: flex; align-items: flex-end; padding-bottom: 2px; }
    .btn-add-car {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 10px 20px; border: none; border-radius: 8px;
      background: #e31b23; color: #fff; font-size: 13px; font-weight: 600;
      cursor: pointer; transition: background 0.2s; white-space: nowrap;
    }
    .btn-add-car:hover { background: #b11218; }
    .btn-add-car:disabled { opacity: 0.5; cursor: not-allowed; }

    /* Cars Table */
    .cars-table-wrap { overflow-x: auto; border-radius: 10px; border: 1px solid #e5e7eb; }
    .cars-table { width: 100%; border-collapse: collapse; font-size: 14px; }
    .cars-table th {
      background: #f8f9fb; padding: 12px 16px; text-align: left;
      font-weight: 600; color: #374151; font-size: 13px; border-bottom: 1px solid #e5e7eb;
    }
    .cars-table td { padding: 10px 16px; border-bottom: 1px solid #f3f4f6; color: #374151; }
    .cars-table tbody tr:last-child td { border-bottom: none; }
    .cars-table tbody tr:hover { background: #fafafa; }
    .table-price-input {
      width: 100px; padding: 6px 10px; border: 1px solid #d1d5db; border-radius: 6px;
      font-size: 13px; text-align: right;
    }
    .table-price-input:focus { outline: none; border-color: #e31b23; }
    .btn-remove-row {
      background: none; border: none; cursor: pointer; color: #dc2626; padding: 4px;
      display: flex; align-items: center; justify-content: center; border-radius: 6px; transition: background 0.2s;
    }
    .btn-remove-row:hover { background: #fee2e2; }

    /* Error */
    .error-msg { color: #dc2626; background: #fee2e2; padding: 12px 16px; border-radius: 8px; margin-top: 16px; font-size: 14px; }

    /* Navigation */
    .form-nav {
      display: flex; justify-content: space-between; align-items: center;
      margin-top: 20px; padding: 20px 0;
    }
    .nav-left, .nav-right { display: flex; gap: 12px; align-items: center; }
    .btn-cancel {
      padding: 10px 24px; border: 1px solid #d1d5db; border-radius: 8px;
      background: #fff; color: #374151; font-weight: 600; cursor: pointer;
      text-decoration: none; font-size: 14px; display: inline-flex; align-items: center;
      transition: all 0.2s;
    }
    .btn-cancel:hover { border-color: #94a3b8; }
    .btn-back {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 10px 24px; border: 1px solid #d1d5db; border-radius: 8px;
      background: #fff; color: #374151; font-weight: 600; font-size: 14px;
      cursor: pointer; transition: all 0.2s;
    }
    .btn-back:hover { border-color: #94a3b8; background: #f8f9fb; }
    .btn-next {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 10px 24px; border: none; border-radius: 8px;
      background: #1a1a2e; color: #fff; font-weight: 600; font-size: 14px;
      cursor: pointer; transition: background 0.2s;
    }
    .btn-next:hover { background: #2d2d4e; }
    .btn-primary {
      background: #e31b23; color: #fff; border: none; padding: 10px 24px;
      border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px;
      transition: background 0.2s;
    }
    .btn-primary:hover { background: #b11218; }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

    /* Responsive */
    @media (max-width: 768px) {
      .form-grid { grid-template-columns: 1fr; }
      .repeater-grid { grid-template-columns: 1fr; }
      .car-selector-row { grid-template-columns: 1fr; }
      .step-track { flex-wrap: wrap; gap: 8px; padding: 16px; }
      .step-line { min-width: 30px; }
    }
  `]
})
export class ServiceFormComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  serviceId: string | null = null;

  // Signals - UI state
  currentStep = signal(1);
  loadingData = signal(false);
  saving = signal(false);
  error = signal('');

  // Signals - Dropdowns
  categories = signal<any[]>([]);

  // Signals - Media
  imageValue = signal<any>(null);
  galleryValues = signal<any[]>([]);

  // Signals - Cars (Step 3)
  brands = signal<any[]>([]);
  filteredCars = signal<any[]>([]);
  filteredVariants = signal<any[]>([]);
  loadingCars = signal(false);
  loadingVariants = signal(false);
  selectedCars = signal<any[]>([]);

  // Car selector bound values
  selectedBrandId = '';
  selectedCarId = '';
  selectedVariantId = '';
  carCustomPrice: number | null = null;

  // Type from route
  isProduct = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService
  ) {}

  // ---- FormArray accessors ----
  get includes(): FormArray { return this.form.get('includes') as FormArray; }
  get faqs(): FormArray { return this.form.get('faqs') as FormArray; }
  get additionalInfo(): FormArray { return this.form.get('additional_info') as FormArray; }
  get specifications(): FormArray { return this.form.get('specifications') as FormArray; }

  asFormGroup(ctrl: any): FormGroup { return ctrl as FormGroup; }
  trackByIndex(index: number): number { return index; }

  ngOnInit() {
    this.serviceId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.serviceId;
    const routeType = this.route.snapshot.data['type'];
    this.isProduct = routeType === 1;

    this.form = this.fb.group({
      title: ['', Validators.required],
      slug: [''],
      category_id: [''],
      description: [''],
      video_url: [''],
      is_featured: [false],
      price: [0, Validators.required],
      discount_price: [null],
      duration: [''],
      max_qty: [null],
      image: [null],
      type: [routeType ?? 0],
      status: [true],
      // FormArrays for Step 2
      includes: this.fb.array([]),
      faqs: this.fb.array([]),
      additional_info: this.fb.array([]),
      specifications: this.fb.array([])
    });

    this.loadCategories();
    this.loadBrands();

    if (this.isEdit) {
      this.loadService();
    }
  }

  // ---- Slug generation ----
  generateSlug() {
    const title = this.form.get('title')?.value || '';
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    this.form.patchValue({ slug });
  }

  // ---- Step Navigation ----
  goToStep(step: number) {
    if (step < 1 || step > 3) return;
    // Validate step 1 before leaving
    if (this.currentStep() === 1 && step > 1) {
      this.form.get('title')?.markAsTouched();
      this.form.get('price')?.markAsTouched();
      if (this.form.get('title')?.invalid || this.form.get('price')?.invalid) {
        this.toast.error('Please fill in the required fields in Service Details.');
        return;
      }
    }
    this.currentStep.set(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  nextStep() {
    this.goToStep(this.currentStep() + 1);
  }

  prevStep() {
    this.goToStep(this.currentStep() - 1);
  }

  // ---- Data loading ----
  loadCategories() {
    this.http.get<any>(`${environment.apiUrl}/admin/categories`, { params: { limit: '100' } }).subscribe({
      next: (res) => this.categories.set(res.data || [])
    });
  }

  loadBrands() {
    this.http.get<any>(`${environment.apiUrl}/admin/brands`, { params: { limit: '100' } }).subscribe({
      next: (res) => this.brands.set(res.data || [])
    });
  }

  onBrandChange() {
    this.selectedCarId = '';
    this.selectedVariantId = '';
    this.filteredCars.set([]);
    this.filteredVariants.set([]);
    if (this.selectedBrandId) {
      this.loadingCars.set(true);
      this.http.get<any>(`${environment.apiUrl}/admin/cars`, { params: { brand_id: this.selectedBrandId, limit: '100' } }).subscribe({
        next: (res) => this.filteredCars.set(res.data || []),
        error: () => this.filteredCars.set([]),
        complete: () => this.loadingCars.set(false)
      });
    }
  }

  onCarChange() {
    this.selectedVariantId = '';
    this.filteredVariants.set([]);
    if (this.selectedCarId) {
      this.loadingVariants.set(true);
      this.http.get<any>(`${environment.apiUrl}/admin/variants`, { params: { car_id: this.selectedCarId, limit: '100' } }).subscribe({
        next: (res) => this.filteredVariants.set(res.data || []),
        error: () => this.filteredVariants.set([]),
        complete: () => this.loadingVariants.set(false)
      });
    }
  }

  // ---- Load existing service (edit mode) ----
  loadService() {
    this.loadingData.set(true);
    this.http.get<any>(`${environment.apiUrl}/admin/services/${this.serviceId}`).subscribe({
      next: (res) => {
        const s = res.data;

        // Patch basic fields
        this.form.patchValue({
          title: s.title || '',
          slug: s.slug || '',
          category_id: s.category_id || '',
          description: s.description || '',
          video_url: s.video_url || '',
          is_featured: !!s.is_featured,
          price: s.price || 0,
          discount_price: s.discount_price,
          duration: s.duration || '',
          max_qty: s.max_qty,
          image: s.image || null,
          type: s.type ?? 0,
          status: s.status !== undefined ? !!s.status : true
        });

        // Image
        this.imageValue.set(s.image || null);

        // Gallery
        if (s.gallery && Array.isArray(s.gallery)) {
          this.galleryValues.set(s.gallery);
        }

        // Populate includes
        if (s.includes && Array.isArray(s.includes)) {
          s.includes.forEach((item: any) => {
            this.includes.push(this.fb.group({
              icon: [item.icon || ''],
              title: [item.title || '']
            }));
          });
        }

        // Populate FAQs
        if (s.faqs && Array.isArray(s.faqs)) {
          s.faqs.forEach((item: any) => {
            this.faqs.push(this.fb.group({
              question: [item.question || ''],
              answer: [item.answer || '']
            }));
          });
        }

        // Populate additional info
        if (s.additional_info && Array.isArray(s.additional_info)) {
          s.additional_info.forEach((item: any) => {
            this.additionalInfo.push(this.fb.group({
              title: [item.title || ''],
              description: [item.description || '']
            }));
          });
        }

        // Populate specifications
        if (s.specifications && Array.isArray(s.specifications)) {
          s.specifications.forEach((item: any) => {
            this.specifications.push(this.fb.group({
              title: [item.title || ''],
              value: [item.value || '']
            }));
          });
        }

        // Populate cars
        if (s.cars && Array.isArray(s.cars)) {
          this.selectedCars.set(s.cars.map((c: any) => ({
            car_id: c.car_id || c.id,
            variant_id: c.variant_id || null,
            price: c.price ?? c.pivot?.price ?? 0,
            brand_name: c.brand?.name || c.brand_name || '-',
            car_name: c.name || c.car_name || '-',
            variant_name: c.variant?.name || c.variant_name || '-'
          })));
        }

        this.loadingData.set(false);
      },
      error: () => {
        this.toast.error('Failed to load service data.');
        this.router.navigate([this.isProduct ? '/admin/products/all' : '/admin/services/all']);
      }
    });
  }

  // ---- Media handlers ----
  onImageSelected(mediaId: any) {
    this.imageValue.set(mediaId);
    this.form.patchValue({ image: mediaId });
  }

  addGallerySlot() {
    this.galleryValues.update(arr => [...arr, null]);
  }

  onGalleryImageChange(index: number, mediaId: any) {
    this.galleryValues.update(arr => {
      const copy = [...arr];
      if (mediaId === null) {
        // Remove slot when image removed
        copy.splice(index, 1);
      } else {
        copy[index] = mediaId;
      }
      return copy;
    });
  }

  // ---- Repeater add methods ----
  addInclude() {
    this.includes.push(this.fb.group({ icon: [''], title: [''] }));
  }

  addFaq() {
    this.faqs.push(this.fb.group({ question: [''], answer: [''] }));
  }

  addAdditionalInfo() {
    this.additionalInfo.push(this.fb.group({ title: [''], description: [''] }));
  }

  addSpecification() {
    this.specifications.push(this.fb.group({ title: [''], value: [''] }));
  }

  // ---- Car selection ----
  addCarRow() {
    if (!this.selectedCarId) return;

    const brand = this.brands().find(b => String(b.id) === String(this.selectedBrandId));
    const car = this.filteredCars().find(c => String(c.id) === String(this.selectedCarId));
    const variant = this.filteredVariants().find(v => String(v.id) === String(this.selectedVariantId));

    // Prevent duplicate car+variant
    const exists = this.selectedCars().some(
      r => String(r.car_id) === String(this.selectedCarId) && String(r.variant_id || '') === String(this.selectedVariantId || '')
    );
    if (exists) {
      this.toast.warning('This car/variant combination is already added.');
      return;
    }

    const row = {
      car_id: Number(this.selectedCarId),
      variant_id: this.selectedVariantId ? Number(this.selectedVariantId) : null,
      price: this.carCustomPrice ?? this.form.get('price')?.value ?? 0,
      brand_name: brand?.name || '-',
      car_name: car?.name || '-',
      variant_name: variant?.name || '-'
    };

    this.selectedCars.update(arr => [...arr, row]);

    // Reset selectors
    this.selectedVariantId = '';
    this.carCustomPrice = null;
  }

  removeCarRow(index: number) {
    this.selectedCars.update(arr => arr.filter((_, i) => i !== index));
  }

  updateCarPrice(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    const newPrice = Number(input.value);
    this.selectedCars.update(arr => {
      const copy = [...arr];
      copy[index] = { ...copy[index], price: newPrice };
      return copy;
    });
  }

  // ---- Submit ----
  onSubmit() {
    // Mark required fields as touched for validation display
    this.form.get('title')?.markAsTouched();
    this.form.get('price')?.markAsTouched();

    if (this.form.get('title')?.invalid || this.form.get('price')?.invalid) {
      this.toast.error('Please fill in the required fields (Title & Price).');
      this.currentStep.set(1);
      return;
    }

    this.saving.set(true);
    this.error.set('');

    const formVal = this.form.value;

    const data: any = {
      title: formVal.title,
      slug: formVal.slug || undefined,
      category_id: formVal.category_id || null,
      description: formVal.description || '',
      video_url: formVal.video_url || '',
      is_featured: formVal.is_featured ? 1 : 0,
      price: formVal.price,
      discount_price: formVal.discount_price || null,
      duration: formVal.duration || '',
      max_qty: formVal.max_qty || null,
      image: this.imageValue() || null,
      type: Number(formVal.type),
      status: formVal.status ? 1 : 0,
      // Repeaters
      includes: formVal.includes || [],
      faqs: formVal.faqs || [],
      additional_info: formVal.additional_info || [],
      specifications: formVal.specifications || [],
      // Cars
      cars: this.selectedCars().map(c => ({
        car_id: c.car_id,
        variant_id: c.variant_id,
        price: c.price
      })),
      // Gallery
      gallery: this.galleryValues().filter(v => v !== null)
    };

    const req = this.isEdit
      ? this.http.put<any>(`${environment.apiUrl}/admin/services/${this.serviceId}`, data)
      : this.http.post<any>(`${environment.apiUrl}/admin/services`, data);

    req.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? 'Service updated successfully!' : 'Service created successfully!');
        this.router.navigate([this.isProduct ? '/admin/products/all' : '/admin/services/all']);
      },
      error: (err) => {
        const msg = err.error?.error || err.error?.message || 'Something went wrong';
        this.error.set(msg);
        this.toast.error(msg);
        this.saving.set(false);
      },
      complete: () => this.saving.set(false)
    });
  }
}
