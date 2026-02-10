@extends('frontend.user.layout.master')
@section('title','Traffic Challans')

@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <!-- Page Header -->
            <div class="page_header mb-4">
                <h3 class="page-heading">{{__('Traffic Challans')}}</h3>
                <p>{{__('Check and pay your traffic challans')}}</p>
            </div>

            <!-- Statistics Cards -->
            <div class="row g-4 mb-4">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="dashborad_card bg_light br_8 py_13 px_10">
                        <div class="card_content">
                            <span>{{__('Total Challans')}}</span>
                            <h6>{{ $stats['total_challans'] }}</h6>
                        </div>
                        <div class="card_icon">
                            <div class="card_icon_wrapper">
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                                    <path d="M0 8C0 3.58172 3.58172 0 8 0H44C48.4183 0 52 3.58172 52 8V44C52 48.4183 48.4183 52 44 52H8C3.58172 52 0 48.4183 0 44V8Z" fill="#FF6B2C" fill-opacity="0.1"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3">
                    <div class="dashborad_card bg_light br_8 py_13 px_10">
                        <div class="card_content">
                            <span>{{__('Pending')}}</span>
                            <h6>{{ $stats['pending_challans'] }}</h6>
                        </div>
                        <div class="card_icon">
                            <div class="card_icon_wrapper">
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                                    <path d="M0 8C0 3.58172 3.58172 0 8 0H44C48.4183 0 52 3.58172 52 8V44C52 48.4183 48.4183 52 44 52H8C3.58172 52 0 48.4183 0 44V8Z" fill="#FFB100" fill-opacity="0.1"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3">
                    <div class="dashborad_card bg_light br_8 py_13 px_10">
                        <div class="card_content">
                            <span>{{__('Paid')}}</span>
                            <h6>{{ $stats['paid_challans'] }}</h6>
                        </div>
                        <div class="card_icon">
                            <div class="card_icon_wrapper">
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                                    <path d="M0 8C0 3.58172 3.58172 0 8 0H44C48.4183 0 52 3.58172 52 8V44C52 48.4183 48.4183 52 44 52H8C3.58172 52 0 48.4183 0 44V8Z" fill="#00B289" fill-opacity="0.1"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3">
                    <div class="dashborad_card bg_light br_8 py_13 px_10">
                        <div class="card_content">
                            <span>{{__('Pending Amount')}}</span>
                            <h6>{{ site_currency_symbol() }}{{ number_format($stats['total_pending_amount'], 2) }}</h6>
                        </div>
                        <div class="card_icon">
                            <div class="card_icon_wrapper">
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                                    <path d="M0 8C0 3.58172 3.58172 0 8 0H44C48.4183 0 52 3.58172 52 8V44C52 48.4183 48.4183 52 44 52H8C3.58172 52 0 48.4183 0 44V8Z" fill="#0F64FA" fill-opacity="0.1"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Search Form -->
            <div class="row">
                <div class="col-12 col-lg-8 mx-auto">
                    <div class="bg_light p-4 br_8">
                        <h5 class="mb-3">{{__('Check Traffic Challans')}}</h5>
                        <p class="text-muted mb-4">{{__('Enter your vehicle registration number to check pending challans')}}</p>

                        @if(session('success'))
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                                {{ session('success') }}
                                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            </div>
                        @endif

                        @if(session('error'))
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                {{ session('error') }}
                                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            </div>
                        @endif

                        <form action="{{ route('traffic-challan.fetch') }}" method="POST">
                            @csrf
                            <div class="mb-3">
                                <label for="vehicle_number" class="form-label">{{__('Vehicle Registration Number')}}</label>
                                <input type="text"
                                       class="form-control @error('vehicle_number') is-invalid @enderror"
                                       id="vehicle_number"
                                       name="vehicle_number"
                                       placeholder="e.g., KA01AB1234"
                                       value="{{ old('vehicle_number') }}"
                                       required>
                                @error('vehicle_number')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                                <small class="form-text text-muted">{{__('Enter vehicle number without spaces')}}</small>
                            </div>

                            <button type="submit" class="btn btn-primary">
                                <i class="ti tabler-search"></i> {{__('Search Challans')}}
                            </button>
                            <a href="{{ route('traffic-challan.history') }}" class="btn btn-outline-secondary">
                                <i class="ti tabler-history"></i> {{__('View History')}}
                            </a>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Info Section -->
            <div class="row mt-4">
                <div class="col-12 col-lg-8 mx-auto">
                    <div class="alert alert-info">
                        <h6 class="alert-heading">{{__('How it works')}}</h6>
                        <ul class="mb-0">
                            <li>{{__('Enter your vehicle registration number')}}</li>
                            <li>{{__('System will fetch all pending challans from traffic authorities')}}</li>
                            <li>{{__('Review challan details and pay directly through the app')}}</li>
                            <li>{{__('Receive instant payment confirmation')}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
