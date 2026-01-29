@extends('frontend.user.layout.master')

@section('title','Offers')
@section('style')
    <style>
        .offer-image img{
            max-height: 140px;
        }
    </style>
@endsection

@section('content')
    <div class="overlay"></div>
    <div class="main_container p_15">

        {{-- Offer Title --}}
        <div class="page_header mb_20">
            <h3 class="page_title">{{ $offer->title }}</h3>
        </div>

        {{-- Offer Details Card --}}
        <div class="info-card mb_30 shadow-sm border rounded-3 overflow-hidden">
            <div class="card-body d-flex flex-wrap align-items-center gap-3 p-3">

                {{-- Left: Offer Image --}}
                <div class="offer-image flex-shrink-0">
                    {!! render_image_markup_by_attachment_id($offer->image, 'rounded', 'thumb') !!}
                </div>

                {{-- Right: Offer Info --}}
                <div class="offer-info flex-grow-1">
                    <div class="info_card_wrapper">

                        <div class="info-row">
                            <span class="info-label">{{ __('Title') }}</span>
                            <span class="info-value fw-bold">{{ $offer->title ?: 'N/A' }}</span>
                        </div>

                        <div class="info-row">
                            <span class="info-label">{{ __('Description') }}</span>
                            <span class="info-value">{{ $offer->subTitle ?: 'N/A' }}</span>
                        </div>

                        <div class="info-row">
                            <span class="info-label">{{ __('Offer Percentage') }}</span>
                            <span class="info-value text-success fw-bold">{{ $offer->offerPercentage ?: 0 }}%</span>
                        </div>

                        <div class="info-row">
                            <span class="info-label">{{ __('Expire Date') }}</span>
                            @php
                                $expired = \Carbon\Carbon::parse($offer->expires_at)->isPast();
                            @endphp

                            @if($expired)
                                <span class="text-danger">Expired {{ \Carbon\Carbon::parse($offer->expires_at)->diffForHumans() }}</span>
                            @else
                                <span class="text-success">Expires {{ \Carbon\Carbon::parse($offer->expires_at)->diffForHumans() }}</span>
                            @endif

                        </div>
                    </div>
                </div>
            </div>
        </div>

        {{-- Service/Product List --}}
        <div class="table_wrapper mt-4">
            <table class="data-table-refund table table-striped table-hover align-middle w-100 br_4 overflow-hidden">
                <thead class="table_head bg-light">
                <tr>
                    <th>{{ __('Offer ID') }}</th>
                    <th>{{ __('Service/Product Title') }}</th>
                    <th>{{ __('Original Price') }}</th>
                    <th>{{ __('Discount Price') }}</th>
                </tr>
                </thead>
                <tbody class="table_body">
                @forelse($offerServices as $offerService)
                    @php $service = $offerService->service; @endphp
                    @if($service)
                        <tr>
                            <td>#{{ $offer->id }}</td>
                            <td>{{ $service->title }}</td>
                            <td>{{ float_amount_with_currency_symbol($service->price) }}</td>
                            <td class="text-success fw-bold">{{ float_amount_with_currency_symbol($service->discount_price) }}</td>
                        </tr>
                    @endif
                @empty
                    <tr>
                        <td colspan="4" class="text-center text-muted py-3">
                            {{ __('No service/product records found') }}
                        </td>
                    </tr>
                @endforelse
                </tbody>
            </table>
        </div>

        {{-- Pagination --}}
        @if($offerServices->hasPages())
            <div class="pagination mt-3 d-flex justify-content-center" id="tablePaginationRefund">
                <x-frontend.dashboard-pagination.pagination :paginator="$offerServices" />
            </div>
        @endif

    </div>
@endsection
