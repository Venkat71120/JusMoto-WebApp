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

    .no-cars-message {
        text-align: center;
        padding: 40px;
        background: #f8f9fa;
        border-radius: 10px;
    }

    .car-image img {
        max-width: 180px;
        border-radius: 8px;
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

<h4 class="dashboard__inner__header__title">
{{ __('User Car Details') }}
</h4>

<p class="mt-2">
<strong>{{ __('User:') }}</strong> {{ $user->fullname }} <br>
<strong>{{ __('Email:') }}</strong> {{ $user->email }} <br>
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

{{-- ================= CAR DETAILS ================= --}}

@if($user->user_selected_cars->count())

@foreach($user->user_selected_cars as $index => $car)

<div class="car-card">

<div class="car-card-header">

<div class="car-card-title">

Car {{ $index+1 }} :

<span class="badge bg-primary">

{{ $car->registration_number ?? 'N/A' }}

</span>

</div>

</div>

<div class="row align-items-center">

<div class="col-md-3 text-center">

@if($car->car && $car->car->image)
{!! render_image_markup_by_attachment_id($car->car->image,'','medium') !!}
@endif

</div>

<div class="col-md-9">

<table class="table table-bordered">

<tr>
<th>Brand</th>
<td>{{ $car->brand->name ?? 'N/A' }}</td>
</tr>

<tr>
<th>Model</th>
<td>{{ $car->car->name ?? 'N/A' }}</td>
</tr>

<tr>
<th>Engine</th>
<td>{{ $car->engine->name ?? 'N/A' }}</td>
</tr>

<tr>
<th>Fuel</th>
<td>{{ $car->fual->name ?? 'N/A' }}</td>
</tr>

<tr>
<th>Added On</th>
<td>{{ optional($car->created_at)->format('d M Y, h:i A') }}</td>
</tr>

</table>

</div>

</div>

</div>

@endforeach

@endif


</div>
</div>
</div>

@endsection
