@extends('backend.admin-master')
@section('site-title')
    {{ __('User Car Details') }}
@endsection

@section('style')
    <style>
        .car-card {
            border: 1px solid #e0e0e0;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 20px;
            background: #fff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .car-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 2px solid #006769;
        }
        .car-card-title {
            font-size: 20px;
            font-weight: 600;
            color: #006769;
        }
        .car-detail-row {
            display: flex;
            padding: 10px 0;
            border-bottom: 1px solid #f0f0f0;
        }
        .car-detail-label {
            font-weight: 600;
            width: 200px;
            color: #555;
        }
        .car-detail-value {
            color: #333;
        }
        .no-cars-message {
            text-align: center;
            padding: 40px;
            background: #f8f9fa;
            border-radius: 10px;
        }
    </style>
@endsection

@section('content')
    <div class="row g-4 mt-0">
        <div class="col-xl-12 col-lg-12">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="dashboard__inner__header mb-4">
                    <div class="dashboard__inner__header__flex">
                        <div class="dashboard__inner__header__left">
                            <h4 class="dashboard__inner__header__title">{{ __('User Car Details') }}</h4>
                            <p class="mt-2">
                                <strong>{{ __('User:') }}</strong> {{ $user->fullname }}<br>
                                <strong>{{ __('Email:') }}</strong> {{ $user->email }}<br>
                                <strong>{{ __('Phone:') }}</strong> {{ $user->phone }}
                            </p>
                        </div>
                        <div class="dashboard__inner__header__right">
                            <a href="{{ route('admin.user.all') }}" class="cmnBtn btn_5 btn_bg_secondary radius-5">
                                <i class="las la-arrow-left"></i> {{ __('Back to Users') }}
                            </a>
                        </div>
                    </div>
                </div>

                <x-validation.error />

                @if($user->user_selected_car)
                    <div class="row">
                        <div class="col-xl-12 col-lg-12">
                            <div class="car-card-body">
    <div class="car-detail-row">
        <div class="car-detail-label">{{ __('Brand:') }}</div>
        <div class="car-detail-value">{{ $user->user_selected_car->brand->name ?? __('N/A') }}</div>
    </div>

    <div class="car-detail-row">
        <div class="car-detail-label">{{ __('Car Model:') }}</div>
        <div class="car-detail-value">{{ $user->user_selected_car->car->name ?? __('N/A') }}</div>
    </div>

    <div class="car-detail-row">
        <div class="car-detail-label">{{ __('Engine Type:') }}</div>
        <div class="car-detail-value">{{ $user->user_selected_car->engine->name ?? __('N/A') }}</div>
    </div>

    <div class="car-detail-row">
        <div class="car-detail-label">{{ __('Fuel Type:') }}</div>
        <div class="car-detail-value">{{ $user->user_selected_car->fual->name ?? __('N/A') }}</div>
    </div>

    <div class="car-detail-row">
        <div class="car-detail-label">{{ __('Added On:') }}</div>
        <div class="car-detail-value">{{ $user->user_selected_car->created_at->format('d M Y, h:i A') }}</div>
    </div>
</div>
                        </div>
                    </div>
                @else
                    <div class="no-cars-message">
                        <i class="las la-car" style="font-size: 64px; color: #ccc;"></i>
                        <h4 class="mt-3">{{ __('No Car Selected') }}</h4>
                        <p class="text-muted">{{ __('This user has not selected any car yet.') }}</p>
                    </div>
                @endif
            </div>
        </div>
    </div>
@endsection