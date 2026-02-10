@extends('frontend.user.layout.master')
@section('title','Pay Challan')

@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 class="page-heading">{{__('Pay Challan')}}</h3>
                    <p>{{__('Challan No')}}: <strong>{{ $challan->challan_number }}</strong></p>
                </div>
                <a href="{{ route('traffic-challan.details', $challan->id) }}" class="btn btn-outline-secondary">
                    <i class="ti tabler-arrow-left"></i> {{__('Back')}}
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
                    <div class="bg_light br_8 p-4">
                        <h5 class="mb-4">{{__('Payment Details')}}</h5>

                        <form action="{{ route('traffic-challan.process-payment', $challan->id) }}" method="POST" id="payment-form">
                            @csrf

                            <div class="mb-4">
                                <h6>{{__('Challan Information')}}</h6>
                                <div class="row">
                                    <div class="col-sm-6 mb-2">
                                        <strong>{{__('Vehicle')}}:</strong> {{ $challan->vehicle_number }}
                                    </div>
                                    <div class="col-sm-6 mb-2">
                                        <strong>{{__('Offence')}}:</strong> {{ $challan->offence_type }}
                                    </div>
                                    <div class="col-sm-6 mb-2">
                                        <strong>{{__('Location')}}:</strong> {{ $challan->offence_location }}
                                    </div>
                                    <div class="col-sm-6 mb-2">
                                        <strong>{{__('Date')}}:</strong> {{ $challan->offence_date ? $challan->offence_date->format('d M Y') : 'N/A' }}
                                    </div>
                                </div>
                            </div>

                            <hr>

                            <div class="mb-4">
                                <h6 class="mb-3">{{__('Select Payment Method')}}</h6>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-check bg-white p-3 br_8 border">
                                            <input class="form-check-input" type="radio" name="payment_method" id="upi" value="upi" required>
                                            <label class="form-check-label w-100" for="upi">
                                                <strong>{{__('UPI Payment')}}</strong>
                                                <small class="d-block text-muted">Google Pay, PhonePe, Paytm</small>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check bg-white p-3 br_8 border">
                                            <input class="form-check-input" type="radio" name="payment_method" id="card" value="card">
                                            <label class="form-check-label w-100" for="card">
                                                <strong>{{__('Debit/Credit Card')}}</strong>
                                                <small class="d-block text-muted">Visa, Mastercard, RuPay</small>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check bg-white p-3 br_8 border">
                                            <input class="form-check-input" type="radio" name="payment_method" id="netbanking" value="netbanking">
                                            <label class="form-check-label w-100" for="netbanking">
                                                <strong>{{__('Net Banking')}}</strong>
                                                <small class="d-block text-muted">All Indian Banks</small>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check bg-white p-3 br_8 border">
                                            <input class="form-check-input" type="radio" name="payment_method" id="wallet" value="wallet">
                                            <label class="form-check-label w-100" for="wallet">
                                                <strong>{{__('Wallet')}}</strong>
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
                                <i class="ti tabler-info-circle"></i> {{__('Your payment will be processed securely. You will receive a confirmation email and SMS after successful payment.')}}
                            </div>

                            <button type="submit" class="btn btn-primary btn-lg w-100">
                                <i class="ti tabler-lock"></i> {{__('Pay')}} {{ site_currency_symbol() }}{{ number_format($challan->fine_amount, 2) }}
                            </button>
                        </form>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="bg_light br_8 p-4 mb-3">
                        <h5 class="mb-3">{{__('Payment Summary')}}</h5>

                        <div class="d-flex justify-content-between mb-2">
                            <span>{{__('Challan Number')}}:</span>
                            <strong>{{ $challan->challan_number }}</strong>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <span>{{__('Fine Amount')}}:</span>
                            <span>{{ site_currency_symbol() }}{{ number_format($challan->fine_amount, 2) }}</span>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <span>{{__('Processing Fee')}}:</span>
                            <span>{{ site_currency_symbol() }}0.00</span>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-between">
                            <strong>{{__('Total Amount')}}:</strong>
                            <h5 class="text-danger mb-0">{{ site_currency_symbol() }}{{ number_format($challan->fine_amount, 2) }}</h5>
                        </div>
                    </div>

                    <div class="bg_light br_8 p-4">
                        <h6>{{__('Secure Payment')}}</h6>
                        <p class="small text-muted mb-0">{{__('Your payment is 100% secure. We use industry-standard encryption to protect your data.')}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
