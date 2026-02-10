@extends('frontend.user.layout.master')
@section('title','Challan Details')

@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 class="page-heading">{{__('Challan Details')}}</h3>
                    <p>{{__('Challan No')}}: <strong>{{ $challan->challan_number }}</strong></p>
                </div>
                <a href="{{ route('traffic-challan.history') }}" class="btn btn-outline-secondary">
                    <i class="ti tabler-arrow-left"></i> {{__('Back to List')}}
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
                    <div class="bg_light br_8 p-4">
                        <h5 class="mb-4">{{__('Challan Information')}}</h5>

                        <div class="row mb-3">
                            <div class="col-sm-4"><strong>{{__('Status')}}:</strong></div>
                            <div class="col-sm-8">
                                @if($challan->status == 'pending')
                                    <span class="badge bg-warning">{{__('Pending')}}</span>
                                @elseif($challan->status == 'paid')
                                    <span class="badge bg-success">{{__('Paid')}}</span>
                                @else
                                    <span class="badge bg-secondary">{{ ucfirst($challan->status) }}</span>
                                @endif
                            </div>
                        </div>

                        <hr>

                        <div class="row mb-3">
                            <div class="col-sm-4"><strong>{{__('Challan Number')}}:</strong></div>
                            <div class="col-sm-8">{{ $challan->challan_number }}</div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-sm-4"><strong>{{__('Vehicle Number')}}:</strong></div>
                            <div class="col-sm-8"><strong>{{ $challan->vehicle_number }}</strong></div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-sm-4"><strong>{{__('Offence Type')}}:</strong></div>
                            <div class="col-sm-8">{{ $challan->offence_type }}</div>
                        </div>

                        @if($challan->offence_description)
                            <div class="row mb-3">
                                <div class="col-sm-4"><strong>{{__('Description')}}:</strong></div>
                                <div class="col-sm-8">{{ $challan->offence_description }}</div>
                            </div>
                        @endif

                        <div class="row mb-3">
                            <div class="col-sm-4"><strong>{{__('Fine Amount')}}:</strong></div>
                            <div class="col-sm-8"><h5 class="text-danger mb-0">{{ site_currency_symbol() }}{{ number_format($challan->fine_amount, 2) }}</h5></div>
                        </div>

                        @if($challan->offence_location)
                            <div class="row mb-3">
                                <div class="col-sm-4"><strong>{{__('Location')}}:</strong></div>
                                <div class="col-sm-8">{{ $challan->offence_location }}</div>
                            </div>
                        @endif

                        <div class="row mb-3">
                            <div class="col-sm-4"><strong>{{__('Offence Date')}}:</strong></div>
                            <div class="col-sm-8">{{ $challan->offence_date ? $challan->offence_date->format('d M Y, h:i A') : 'N/A' }}</div>
                        </div>

                        @if($challan->due_date)
                            <div class="row mb-3">
                                <div class="col-sm-4"><strong>{{__('Due Date')}}:</strong></div>
                                <div class="col-sm-8">
                                    {{ $challan->due_date->format('d M Y') }}
                                    @if($challan->isOverdue())
                                        <span class="badge bg-danger ms-2">{{__('Overdue')}}</span>
                                    @endif
                                </div>
                            </div>
                        @endif

                        @if($challan->issuing_authority)
                            <div class="row mb-3">
                                <div class="col-sm-4"><strong>{{__('Issued By')}}:</strong></div>
                                <div class="col-sm-8">{{ $challan->issuing_authority }}</div>
                            </div>
                        @endif

                        @if($challan->status == 'paid')
                            <hr>
                            <h6 class="mb-3">{{__('Payment Information')}}</h6>

                            <div class="row mb-3">
                                <div class="col-sm-4"><strong>{{__('Payment Method')}}:</strong></div>
                                <div class="col-sm-8">{{ ucfirst($challan->payment_method) }}</div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-sm-4"><strong>{{__('Payment Reference')}}:</strong></div>
                                <div class="col-sm-8">{{ $challan->payment_reference }}</div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-sm-4"><strong>{{__('Paid Amount')}}:</strong></div>
                                <div class="col-sm-8">{{ site_currency_symbol() }}{{ number_format($challan->paid_amount, 2) }}</div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-sm-4"><strong>{{__('Payment Date')}}:</strong></div>
                                <div class="col-sm-8">{{ $challan->paid_at ? $challan->paid_at->format('d M Y, h:i A') : 'N/A' }}</div>
                            </div>
                        @endif
                    </div>
                </div>

                <div class="col-lg-4">
                    @if($challan->status == 'pending')
                        <div class="bg_light br_8 p-4">
                            <div class="alert alert-warning mb-3">
                                <h6 class="alert-heading">{{__('Action Required')}}</h6>
                                <p class="mb-0">{{__('This challan is pending payment.')}}</p>
                            </div>
                            <h4 class="text-danger mb-3">{{ site_currency_symbol() }}{{ number_format($challan->fine_amount, 2) }}</h4>
                            <a href="{{ route('traffic-challan.payment', $challan->id) }}" class="btn btn-primary w-100">
                                <i class="ti tabler-credit-card"></i> {{__('Pay Now')}}
                            </a>
                        </div>
                    @else
                        <div class="bg_light br_8 p-4">
                            <div class="alert alert-success mb-0">
                                <h6 class="alert-heading">{{__('Paid')}}</h6>
                                <p class="mb-0"><i class="ti tabler-check-circle"></i> {{__('Payment Successful')}}</p>
                            </div>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection
