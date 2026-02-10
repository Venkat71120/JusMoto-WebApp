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
                    <div class="dashborad_card bg_light br_8 py_13 px_10">
                        <div class="card_content">
                            <span>{{__('Total Challans')}}</span>
                            <h6>{{ $stats['total_challans'] }}</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="dashborad_card bg_light br_8 py_13 px_10">
                        <div class="card_content">
                            <span>{{__('Pending')}}</span>
                            <h6 class="text-warning">{{ $stats['pending_challans'] }}</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="dashborad_card bg_light br_8 py_13 px_10">
                        <div class="card_content">
                            <span>{{__('Pending Amount')}}</span>
                            <h6 class="text-danger">{{ site_currency_symbol() }}{{ number_format($stats['total_pending_amount'], 2) }}</h6>
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
                    <table class="table table-hover bg_light br_8">
                        <thead>
                            <tr>
                                <th>{{__('Challan No')}}</th>
                                <th>{{__('Vehicle')}}</th>
                                <th>{{__('Offence')}}</th>
                                <th>{{__('Fine Amount')}}</th>
                                <th>{{__('Date')}}</th>
                                <th>{{__('Status')}}</th>
                                <th>{{__('Actions')}}</th>
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
                                            <span class="badge bg-warning">{{__('Pending')}}</span>
                                        @elseif($challan->status == 'paid')
                                            <span class="badge bg-success">{{__('Paid')}}</span>
                                        @else
                                            <span class="badge bg-secondary">{{ ucfirst($challan->status) }}</span>
                                        @endif
                                    </td>
                                    <td>
                                        <a href="{{ route('traffic-challan.details', $challan->id) }}" class="btn btn-sm btn-info">{{__('View')}}</a>
                                        @if($challan->status == 'pending')
                                            <a href="{{ route('traffic-challan.payment', $challan->id) }}" class="btn btn-sm btn-primary">{{__('Pay Now')}}</a>
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
                    <p class="mb-0">{{__('No challans found.')}} <a href="{{ route('traffic-challan.index') }}">{{__('Search for challans')}}</a></p>
                </div>
            @endif
        </div>
    </div>
@endsection
