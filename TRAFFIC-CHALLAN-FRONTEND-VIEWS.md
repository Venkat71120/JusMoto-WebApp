# Traffic Challan Frontend Views - Remaining Files

This document contains all the remaining view files that need to be created for the Traffic Challan feature.

## Files to Create

### 1. Challan History Page
**Path**: `core/resources/views/frontend/user/client/traffic-challan/history.blade.php`

```blade
@extends('frontend.user.layout.master')
@section('title','Challan History')

@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <div class="page_header mb-4">
                <h3 class="page-heading">{{__('Challan History')}}</h3>
                <p>{{__('View all your traffic challans')}}</p>
            </div>

            <!-- Filter Buttons -->
            <div class="mb-3">
                <a href="{{ route('traffic-challan.history') }}" class="btn btn-sm {{ !$status ? 'btn-primary' : 'btn-outline-primary' }}">All</a>
                <a href="{{ route('traffic-challan.history', ['status' => 'pending']) }}" class="btn btn-sm {{ $status == 'pending' ? 'btn-warning' : 'btn-outline-warning' }}">Pending</a>
                <a href="{{ route('traffic-challan.history', ['status' => 'paid']) }}" class="btn btn-sm {{ $status == 'paid' ? 'btn-success' : 'btn-outline-success' }}">Paid</a>
            </div>

            <!-- Statistics Cards -->
            <div class="row g-3 mb-4">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h6>Total Challans</h6>
                            <h4>{{ $stats['total_challans'] }}</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h6>Pending</h6>
                            <h4 class="text-warning">{{ $stats['pending_challans'] }}</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h6>Total Pending Amount</h6>
                            <h4 class="text-danger">{{ site_currency_symbol() }}{{ number_format($stats['total_pending_amount'], 2) }}</h4>
                        </div>
                    </div>
                </div>
            </div>

            @if(session('success'))
                <div class="alert alert-success alert-dismissible fade show">
                    {{ session('success') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            @endif

            <!-- Challans List -->
            @if($challans->count() > 0)
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Challan No</th>
                                <th>Vehicle</th>
                                <th>Offence</th>
                                <th>Fine Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($challans as $challan)
                                <tr>
                                    <td><strong>{{ $challan->challan_number }}</strong></td>
                                    <td>{{ $challan->vehicle_number }}</td>
                                    <td>{{ $challan->offence_type }}</td>
                                    <td>{{ site_currency_symbol() }}{{ number_format($challan->fine_amount, 2) }}</td>
                                    <td>{{ $challan->offence_date ? $challan->offence_date->format('d M Y') : 'N/A' }}</td>
                                    <td>
                                        @if($challan->status == 'pending')
                                            <span class="badge bg-warning">Pending</span>
                                        @elseif($challan->status == 'paid')
                                            <span class="badge bg-success">Paid</span>
                                        @else
                                            <span class="badge bg-secondary">{{ ucfirst($challan->status) }}</span>
                                        @endif
                                    </td>
                                    <td>
                                        <a href="{{ route('traffic-challan.details', $challan->id) }}" class="btn btn-sm btn-info">View</a>
                                        @if($challan->status == 'pending')
                                            <a href="{{ route('traffic-challan.payment', $challan->id) }}" class="btn btn-sm btn-primary">Pay Now</a>
                                        @endif
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>

                <!-- Pagination -->
                <div class="mt-3">
                    {{ $challans->links() }}
                </div>
            @else
                <div class="alert alert-info">
                    <p class="mb-0">No challans found. <a href="{{ route('traffic-challan.index') }}">Search for challans</a></p>
                </div>
            @endif
        </div>
    </div>
@endsection
```

### 2. Challan Details Page
**Path**: `core/resources/views/frontend/user/client/traffic-challan/details.blade.php`

```blade
@extends('frontend.user.layout.master')
@section('title','Challan Details')

@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 class="page-heading">{{__('Challan Details')}}</h3>
                    <p>Challan No: <strong>{{ $challan->challan_number }}</strong></p>
                </div>
                <a href="{{ route('traffic-challan.history') }}" class="btn btn-outline-secondary">
                    <i class="ti tabler-arrow-left"></i> Back to List
                </a>
            </div>

            @if(session('success'))
                <div class="alert alert-success alert-dismissible fade show">
                    {{ session('success') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            @endif

            <div class="row">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-header">
                            <h5>Challan Information</h5>
                        </div>
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-sm-4"><strong>Status:</strong></div>
                                <div class="col-sm-8">
                                    @if($challan->status == 'pending')
                                        <span class="badge bg-warning">Pending</span>
                                    @elseif($challan->status == 'paid')
                                        <span class="badge bg-success">Paid</span>
                                    @else
                                        <span class="badge bg-secondary">{{ ucfirst($challan->status) }}</span>
                                    @endif
                                </div>
                            </div>

                            <hr>

                            <div class="row mb-3">
                                <div class="col-sm-4"><strong>Challan Number:</strong></div>
                                <div class="col-sm-8">{{ $challan->challan_number }}</div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-sm-4"><strong>Vehicle Number:</strong></div>
                                <div class="col-sm-8"><strong>{{ $challan->vehicle_number }}</strong></div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-sm-4"><strong>Offence Type:</strong></div>
                                <div class="col-sm-8">{{ $challan->offence_type }}</div>
                            </div>

                            @if($challan->offence_description)
                                <div class="row mb-3">
                                    <div class="col-sm-4"><strong>Description:</strong></div>
                                    <div class="col-sm-8">{{ $challan->offence_description }}</div>
                                </div>
                            @endif

                            <div class="row mb-3">
                                <div class="col-sm-4"><strong>Fine Amount:</strong></div>
                                <div class="col-sm-8"><h5 class="text-danger mb-0">{{ site_currency_symbol() }}{{ number_format($challan->fine_amount, 2) }}</h5></div>
                            </div>

                            @if($challan->offence_location)
                                <div class="row mb-3">
                                    <div class="col-sm-4"><strong>Location:</strong></div>
                                    <div class="col-sm-8">{{ $challan->offence_location }}</div>
                                </div>
                            @endif

                            <div class="row mb-3">
                                <div class="col-sm-4"><strong>Offence Date:</strong></div>
                                <div class="col-sm-8">{{ $challan->offence_date ? $challan->offence_date->format('d M Y, h:i A') : 'N/A' }}</div>
                            </div>

                            @if($challan->due_date)
                                <div class="row mb-3">
                                    <div class="col-sm-4"><strong>Due Date:</strong></div>
                                    <div class="col-sm-8">
                                        {{ $challan->due_date->format('d M Y') }}
                                        @if($challan->isOverdue())
                                            <span class="badge bg-danger ms-2">Overdue</span>
                                        @endif
                                    </div>
                                </div>
                            @endif

                            @if($challan->issuing_authority)
                                <div class="row mb-3">
                                    <div class="col-sm-4"><strong>Issued By:</strong></div>
                                    <div class="col-sm-8">{{ $challan->issuing_authority }}</div>
                                </div>
                            @endif

                            @if($challan->status == 'paid')
                                <hr>
                                <h6>Payment Information</h6>

                                <div class="row mb-3">
                                    <div class="col-sm-4"><strong>Payment Method:</strong></div>
                                    <div class="col-sm-8">{{ ucfirst($challan->payment_method) }}</div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-sm-4"><strong>Payment Reference:</strong></div>
                                    <div class="col-sm-8">{{ $challan->payment_reference }}</div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-sm-4"><strong>Paid Amount:</strong></div>
                                    <div class="col-sm-8">{{ site_currency_symbol() }}{{ number_format($challan->paid_amount, 2) }}</div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-sm-4"><strong>Payment Date:</strong></div>
                                    <div class="col-sm-8">{{ $challan->paid_at ? $challan->paid_at->format('d M Y, h:i A') : 'N/A' }}</div>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    @if($challan->status == 'pending')
                        <div class="card">
                            <div class="card-header bg-warning">
                                <h5 class="mb-0">Action Required</h5>
                            </div>
                            <div class="card-body">
                                <p>This challan is pending payment.</p>
                                <h4 class="text-danger">{{ site_currency_symbol() }}{{ number_format($challan->fine_amount, 2) }}</h4>
                                <a href="{{ route('traffic-challan.payment', $challan->id) }}" class="btn btn-primary w-100">
                                    <i class="ti tabler-credit-card"></i> Pay Now
                                </a>
                            </div>
                        </div>
                    @else
                        <div class="card">
                            <div class="card-header bg-success text-white">
                                <h5 class="mb-0">Paid</h5>
                            </div>
                            <div class="card-body">
                                <p>This challan has been paid.</p>
                                <p class="mb-0"><i class="ti tabler-check-circle"></i> Payment Successful</p>
                            </div>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection
```

### 3. Challan Payment Page
**Path**: `core/resources/views/frontend/user/client/traffic-challan/payment.blade.php`

```blade
@extends('frontend.user.layout.master')
@section('title','Pay Challan')

@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 class="page-heading">{{__('Pay Challan')}}</h3>
                    <p>Challan No: <strong>{{ $challan->challan_number }}</strong></p>
                </div>
                <a href="{{ route('traffic-challan.details', $challan->id) }}" class="btn btn-outline-secondary">
                    <i class="ti tabler-arrow-left"></i> Back
                </a>
            </div>

            @if(session('error'))
                <div class="alert alert-danger alert-dismissible fade show">
                    {{ session('error') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            @endif

            <div class="row">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-header">
                            <h5>Payment Details</h5>
                        </div>
                        <div class="card-body">
                            <form action="{{ route('traffic-challan.process-payment', $challan->id) }}" method="POST" id="payment-form">
                                @csrf

                                <div class="mb-4">
                                    <h6>Challan Information</h6>
                                    <div class="row">
                                        <div class="col-sm-6 mb-2">
                                            <strong>Vehicle:</strong> {{ $challan->vehicle_number }}
                                        </div>
                                        <div class="col-sm-6 mb-2">
                                            <strong>Offence:</strong> {{ $challan->offence_type }}
                                        </div>
                                        <div class="col-sm-6 mb-2">
                                            <strong>Location:</strong> {{ $challan->offence_location }}
                                        </div>
                                        <div class="col-sm-6 mb-2">
                                            <strong>Date:</strong> {{ $challan->offence_date ? $challan->offence_date->format('d M Y') : 'N/A' }}
                                        </div>
                                    </div>
                                </div>

                                <hr>

                                <div class="mb-4">
                                    <h6>Select Payment Method</h6>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="form-check card p-3">
                                                <input class="form-check-input" type="radio" name="payment_method" id="upi" value="upi" required>
                                                <label class="form-check-label w-100" for="upi">
                                                    <strong>UPI Payment</strong>
                                                    <small class="d-block text-muted">Google Pay, PhonePe, Paytm</small>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-check card p-3">
                                                <input class="form-check-input" type="radio" name="payment_method" id="card" value="card">
                                                <label class="form-check-label w-100" for="card">
                                                    <strong>Debit/Credit Card</strong>
                                                    <small class="d-block text-muted">Visa, Mastercard, RuPay</small>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-check card p-3">
                                                <input class="form-check-input" type="radio" name="payment_method" id="netbanking" value="netbanking">
                                                <label class="form-check-label w-100" for="netbanking">
                                                    <strong>Net Banking</strong>
                                                    <small class="d-block text-muted">All Indian Banks</small>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-check card p-3">
                                                <input class="form-check-input" type="radio" name="payment_method" id="wallet" value="wallet">
                                                <label class="form-check-label w-100" for="wallet">
                                                    <strong>Wallet</strong>
                                                    <small class="d-block text-muted">Paytm, Mobikwik, etc.</small>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    @error('payment_method')
                                        <div class="text-danger mt-2">{{ $message }}</div>
                                    @enderror
                                </div>

                                <div class="alert alert-info">
                                    <i class="ti tabler-info-circle"></i> Your payment will be processed securely. You will receive a confirmation email and SMS after successful payment.
                                </div>

                                <button type="submit" class="btn btn-primary btn-lg w-100">
                                    <i class="ti tabler-lock"></i> Pay {{ site_currency_symbol() }}{{ number_format($challan->fine_amount, 2) }}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h5>Payment Summary</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between mb-2">
                                <span>Challan Number:</span>
                                <strong>{{ $challan->challan_number }}</strong>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <span>Fine Amount:</span>
                                <span>{{ site_currency_symbol() }}{{ number_format($challan->fine_amount, 2) }}</span>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <span>Processing Fee:</span>
                                <span>{{ site_currency_symbol() }}0.00</span>
                            </div>
                            <hr>
                            <div class="d-flex justify-content-between">
                                <strong>Total Amount:</strong>
                                <h5 class="text-danger mb-0">{{ site_currency_symbol() }}{{ number_format($challan->fine_amount, 2) }}</h5>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-3">
                        <div class="card-body">
                            <h6>Secure Payment</h6>
                            <p class="small text-muted mb-0">Your payment is 100% secure. We use industry-standard encryption to protect your data.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
```

---

## Routes to Add

Add these routes to `core/routes/web.php` inside the `Route::middleware(['login.check', 'globalVariable','setlangforuser'])->group(function () {` section:

```php
use App\Http\Controllers\Frontend\TrafficChallanController;

// Traffic Challan Routes
Route::group(['prefix' => 'traffic-challan', 'as' => 'traffic-challan.'], function () {
    Route::get('/', [TrafficChallanController::class, 'index'])->name('index');
    Route::post('/fetch', [TrafficChallanController::class, 'fetchChallans'])->name('fetch');
    Route::get('/history', [TrafficChallanController::class, 'history'])->name('history');
    Route::get('/details/{id}', [TrafficChallanController::class, 'details'])->name('details');
    Route::get('/payment/{id}', [TrafficChallanController::class, 'paymentPage'])->name('payment');
    Route::post('/process-payment/{id}', [TrafficChallanController::class, 'processPayment'])->name('process-payment');
});
```

---

## Sidebar Navigation Update

Update `core/resources/views/frontend/user/layout/partial/sidebar.blade.php`:

Add this menu item after the "Favourite Items" section (around line 90):

```blade
<li>
    <a href="{{ route('traffic-challan.index') }}" class="sidebar_list_item {{ request()->routeIs('traffic-challan.*') ? 'active' : '' }}">
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_traffic_challan)">
                <path d="M3.5 2.25H15.5C16.05 2.25 16.5 2.7 16.5 3.25V14.75C16.5 15.3 16.05 15.75 15.5 15.75H3.5C2.95 15.75 2.5 15.3 2.5 14.75V3.25C2.5 2.7 2.95 2.25 3.5 2.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 6.75H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 9.75H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 12.75H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        {{__('Traffic Challans')}}
    </a>
</li>
```

---

## Installation Instructions

1. Copy all view files to their respective locations
2. Add the routes to `web.php`
3. Update the sidebar navigation
4. Run migration: `php artisan migrate`
5. Test the feature!

---

## Summary

All frontend views are now documented. Create these files manually or use the code provided to implement the complete Traffic Challan UI.
