@extends('backend.admin-master')
@section('site-title')
    {{__('Service Details')}}
@endsection
@section('style')
    <x-media.css/>
    <x-summernote.css/>
    
    <!-- Enhanced Theme CSS Integration -->
    <style>
        /* ===== CLEAN RED THEME INTEGRATION ===== */
        :root {
            /* Primary Colors */
            --white: #ffffff;
            --gray-50: #f9fafb;
            --gray-100: #f3f4f6;
            --gray-200: #e5e7eb;
            --gray-300: #d1d5db;
            --gray-400: #9ca3af;
            --gray-500: #6b7280;
            --gray-600: #4b5563;
            --gray-700: #374151;
            --gray-800: #1f2937;
            
            /* Red Theme */
            --red: #e31b23;
            --red-light: #fee2e2;
            --red-dark: #b91c1c;
            
            /* Status Colors */
            --green-light: #d1fae5;
            --green-dark: #047857;
            --yellow-light: #fef3c7;
            --yellow-dark: #b45309;
            --blue-light: #dbeafe;
            --blue-dark: #1e40af;
            --purple-light: #ede9fe;
            --purple-dark: #5b21b6;
            
            /* Spacing & Effects */
            --radius-sm: 4px;
            --radius: 8px;
            --radius-lg: 12px;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            --transition: all 0.2s ease;
        }

        /* Global Styles */
        body {
            background: var(--gray-50);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            color: var(--gray-700);
            line-height: 1.5;
        }

        /* Dashboard Cards Enhancement */
        .dashboard__card {
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
            overflow: hidden;
        }

        .dashboard__card:hover {
            box-shadow: var(--shadow-md);
            border-color: var(--gray-300);
        }

        .dashboard__card.bg__white {
            background: var(--white);
        }

        .dashboard__card__header {
            padding: 16px 20px;
            background: var(--gray-50);
            border-bottom: 1px solid var(--gray-200);
        }

        .dashboard__card__header__title {
            font-size: 18px;
            font-weight: 600;
            color: var(--gray-800);
            margin: 0;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .dashboard__card__header__title::before {
            content: '';
            width: 4px;
            height: 20px;
            background: var(--red);
            border-radius: 4px;
            display: inline-block;
        }

        .header-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--gray-800);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .header-title::after {
            content: '';
            flex: 1;
            height: 2px;
            background: linear-gradient(90deg, var(--red), transparent);
            margin-left: 15px;
        }

        /* Button Styles */
        .cmnBtn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 10px 20px;
            border-radius: 40px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
            border: none;
            text-decoration: none;
            background: var(--white);
            border: 1px solid var(--gray-300);
            color: var(--gray-700);
        }

        .cmnBtn.btn_5.btn_bg_info {
            background: var(--red);
            color: white;
            border: none;
        }

        .cmnBtn.btn_5.btn_bg_info:hover {
            background: var(--red-dark);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
        }

        .cmnBtn i {
            font-size: 16px;
        }

        .radius-5 {
            border-radius: var(--radius);
        }

        /* Gallery Thumbnails */
        .dashboard__rates__card__thumb {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
            gap: 10px;
            padding: 15px;
            background: var(--gray-50);
            border-radius: var(--radius);
            margin-top: 10px;
        }

        .dashboard__rates__card__thumb .gallery-item {
            position: relative;
            border-radius: var(--radius);
            overflow: hidden;
            border: 2px solid var(--gray-200);
            transition: var(--transition);
            aspect-ratio: 1;
            cursor: pointer;
        }

        .dashboard__rates__card__thumb .gallery-item:hover {
            border-color: var(--red);
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
            z-index: 2;
        }

        .dashboard__rates__card__thumb .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition);
        }

        .dashboard__rates__card__thumb .gallery-item:hover img {
            transform: scale(1.1);
        }

        .dashboard__rates__card__thumb .gallery-item::after {
            content: '📷';
            position: absolute;
            bottom: 5px;
            right: 5px;
            background: rgba(0, 0, 0, 0.6);
            color: white;
            font-size: 10px;
            padding: 2px 6px;
            border-radius: 4px;
            opacity: 0;
            transition: var(--transition);
        }

        .dashboard__rates__card__thumb .gallery-item:hover::after {
            opacity: 1;
        }

        /* Effect Border (Checkbox) */
        .effectBorder {
            pointer-events: none;
            cursor: not-allowed;
            width: 18px;
            height: 18px;
            accent-color: var(--red);
        }

        /* Customer Account Details */
        .customer__account__details__item__flex {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 12px;
            background: var(--gray-50);
            border-radius: var(--radius);
            transition: var(--transition);
        }

        .customer__account__details__item__flex:hover {
            background: var(--white);
            box-shadow: var(--shadow-sm);
            transform: translateX(5px);
        }

        .customer__account__details__item__flex strong {
            min-width: 100px;
            color: var(--gray-600);
            font-weight: 600;
            font-size: 14px;
        }

        /* Seller Image */
        .seller-img {
            width: 65px;
            height: 65px;
            border-radius: 50%;
            overflow: hidden;
            border: 3px solid var(--gray-200);
            position: relative;
            transition: var(--transition);
            box-shadow: var(--shadow-sm);
        }

        .seller-img:hover {
            border-color: var(--red);
            transform: scale(1.1);
            box-shadow: 0 8px 20px rgba(227, 27, 35, 0.3);
        }

        .seller-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            display: block;
        }

        .seller-img::before {
            content: '👤';
            position: absolute;
            bottom: 0;
            right: 0;
            background: var(--red);
            color: white;
            font-size: 12px;
            padding: 2px 6px;
            border-radius: 20px;
            transform: translate(20%, 20%);
            opacity: 0;
            transition: var(--transition);
        }

        .seller-img:hover::before {
            opacity: 1;
        }

        /* Table Enhancements */
        .task_assignments__table.custom_table {
            overflow-x: auto;
            border-radius: var(--radius-lg);
            border: 1px solid var(--gray-200);
            background: var(--white);
        }

        .task_assignments__table table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
            min-width: 800px;
        }

        .task_assignments__table thead th {
            text-align: left;
            padding: 16px;
            background: var(--gray-50);
            color: var(--gray-600);
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            border-bottom: 1px solid var(--gray-200);
            white-space: nowrap;
        }

        .task_assignments__table thead th:first-child {
            border-radius: var(--radius-lg) 0 0 0;
        }

        .task_assignments__table thead th:last-child {
            border-radius: 0 var(--radius-lg) 0 0;
        }

        .task_assignments__table tbody td {
            padding: 16px;
            color: var(--gray-700);
            border-bottom: 1px solid var(--gray-100);
            vertical-align: middle;
        }

        .task_assignments__table tbody tr {
            background: var(--white);
            transition: var(--transition);
        }

        .task_assignments__table tbody tr:hover {
            background: var(--gray-50);
        }

        .task_assignments__table tbody tr:last-child td {
            border-bottom: none;
        }

        .task_assignments__table tbody tr:last-child td:first-child {
            border-radius: 0 0 0 var(--radius-lg);
        }

        .task_assignments__table tbody tr:last-child td:last-child {
            border-radius: 0 0 var(--radius-lg) 0;
        }

        /* Table Customer Info */
        .table_customer__flex {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .table_customer__contents {
            flex: 1;
        }

        .table_customer__title {
            font-size: 14px;
            font-weight: 500;
            color: var(--gray-800);
            margin: 0;
            line-height: 1.4;
        }

        .table_customer__title.mt-1 {
            margin-top: 4px;
        }

        /* Table Images */
        .task_assignments__table td img {
            width: 50px;
            height: 50px;
            border-radius: var(--radius);
            object-fit: cover;
            border: 2px solid var(--gray-200);
            transition: var(--transition);
        }

        .task_assignments__table td img:hover {
            border-color: var(--red);
            transform: scale(2) translateY(-5px);
            box-shadow: var(--shadow-lg);
            z-index: 10;
            position: relative;
        }

        /* Badge Styles */
        .status-badge {
            display: inline-flex;
            align-items: center;
            padding: 4px 12px;
            border-radius: 40px;
            font-size: 12px;
            font-weight: 500;
            white-space: nowrap;
        }

        .status-badge.active {
            background: var(--green-light);
            color: var(--green-dark);
        }

        .status-badge.pending {
            background: var(--yellow-light);
            color: var(--yellow-dark);
        }

        .status-badge.inactive {
            background: var(--red-light);
            color: var(--red-dark);
        }

        /* Service Info Display */
        .service-info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px;
        }

        .service-info-item {
            background: var(--gray-50);
            border-radius: var(--radius);
            padding: 15px;
            border: 1px solid var(--gray-200);
            transition: var(--transition);
        }

        .service-info-item:hover {
            border-color: var(--red);
            box-shadow: var(--shadow-md);
            transform: translateY(-2px);
        }

        .service-info-item strong {
            display: block;
            color: var(--gray-600);
            font-size: 12px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }

        .service-info-item span {
            color: var(--gray-800);
            font-weight: 600;
            font-size: 15px;
        }

        /* Price Display */
        .price-display {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--gray-50);
            padding: 4px 12px;
            border-radius: 30px;
        }

        .price-display .original {
            color: var(--gray-400);
            text-decoration: line-through;
            font-size: 12px;
        }

        .price-display .discounted {
            color: var(--red);
            font-weight: 700;
        }

        .price-display .regular {
            color: var(--gray-800);
            font-weight: 600;
        }

        /* Row Spacing */
        .row.g-4 {
            --bs-gutter-y: 1.5rem;
        }

        .mt-0 {
            margin-top: 0 !important;
        }

        .mt-1 {
            margin-top: 0.5rem !important;
        }

        .mt-4 {
            margin-top: 1.5rem !important;
        }

        .padding-20 {
            padding: 20px;
        }

        .radius-10 {
            border-radius: var(--radius-lg);
        }

        /* Header Wrap */
        .header-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 20px;
        }

        /* Validation Error */
        .validation-error {
            margin-bottom: 20px;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
            .dashboard__card__header__title {
                font-size: 16px;
            }
            
            .header-title {
                font-size: 18px;
            }
            
            .task_assignments__table table {
                min-width: 700px;
            }
        }

        @media (max-width: 768px) {
            .dashboard__rates__card__thumb {
                grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
            }
            
            .customer__account__details__item__flex {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .header-wrap {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .cmnBtn {
                width: 100%;
            }
        }

        /* Animation */
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .dashboard__card {
            animation: fadeIn 0.3s ease;
        }

        /* Print Styles */
        @media print {
            .cmnBtn,
            .header-wrap .right-content {
                display: none !important;
            }
            
            .dashboard__card {
                box-shadow: none;
                border: 1px solid #ddd;
            }
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }

        ::-webkit-scrollbar-track {
            background: var(--gray-100);
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
            background: var(--red);
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--red-dark);
        }
    </style>
@endsection

@section('content')
    <!-- Main Service Details Section -->
    <div class="row g-4 mt-0">
        <div class="col-xl-12 col-lg-12 mt-0">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="header-wrap d-flex justify-content-between">
                    <div class="left-content">
                        <h4 class="header-title">
                            <i class="las la-info-circle" style="color: var(--red);"></i>
                            {{__('Service Details')}}
                        </h4>
                    </div>
                    <div class="right-content">
                        <a class="cmnBtn btn_5 btn_bg_info radius-5" href="{{route('admin.all.services')}}">
                            <i class="las la-arrow-left"></i>
                            {{__('Back to All Services')}}
                        </a>
                    </div>
                </div>
                <x-validation.error/>
                @include('backend.pages.services.service-details-basic-info')
            </div>
        </div>
    </div>

    <!-- Service Variant Info Section -->
    <div class="row g-4 mt-1">
        <div class="col-lg-12">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="dashboard__card__header">
                    <div class="dashboard__card__header__flex">
                        <div class="dashboard__card__header__left">
                            <h5 class="dashboard__card__header__title">
                                <i class="las la-car" style="color: var(--red);"></i>
                                {{ __('Service Variant Info') }}
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="task_assignments__table custom_table mt-4">
                    <table>
                        <thead>
                            <tr>
                                <th>{{ __('ID') }}</th>
                                <th>{{ __('Image') }}</th>
                                <th>{{ __('Car Name') }}</th>
                                <th>{{ __('Price') }}</th>
                                <th>{{ __('Discount Price') }}</th>
                                <th>{{ __('Engine Type') }}</th>
                                <th>{{ __('Fuel Type') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($service->serviceCar as $serviceCar)
                                <tr class="table_row">
                                    <td>{{ $loop->iteration }}</td>
                                    <td>
                                        <div class="img-thumb-wrapper">
                                            {!! render_image_markup_by_attachment_id($serviceCar?->image, '', 'thumb') !!}
                                        </div>
                                    </td>
                                    <td>
                                        <div class="table_customer">
                                            <div class="table_customer__flex">
                                                <div class="table_customer__contents">
                                                    <h6 class="table_customer__title">{{ $serviceCar?->varient?->car?->name ?? 'N/A' }}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="price-display">
                                            <span class="regular">{{ float_amount_with_currency_symbol($serviceCar?->price) }}</span>
                                        </div>
                                    </td>
                                    <td>
                                        @if($serviceCar?->discount_price > 0)
                                            <div class="price-display">
                                                <span class="discounted">{{ float_amount_with_currency_symbol($serviceCar?->discount_price) }}</span>
                                                @php
                                                    $discount_percent = round((($serviceCar->price - $serviceCar->discount_price) / $serviceCar->price) * 100);
                                                @endphp
                                                <span class="status-badge active">-{{ $discount_percent }}%</span>
                                            </div>
                                        @else
                                            <span class="text-muted">—</span>
                                        @endif
                                    </td>
                                    <td>
                                        <span class="status-badge info">{{ $serviceCar?->varient?->engineType?->name ?? 'N/A' }}</span>
                                    </td>
                                    <td>
                                        <span class="status-badge warning">{{ $serviceCar?->varient?->fualType?->name ?? 'N/A' }}</span>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="7" class="text-center py-4">
                                        <div class="empty-state">
                                            <i class="las la-frown" style="font-size: 48px; color: var(--gray-400);"></i>
                                            <p>{{ __('No variants found') }}</p>
                                        </div>
                                    </td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Includes Service Section -->
    @if($service->includes && $service->includes->count() > 0)
        <div class="row g-4 mt-1">
            <div class="col-lg-12">
                <div class="dashboard__card bg__white padding-20 radius-10">
                    <div class="dashboard__card__header">
                        <div class="dashboard__card__header__flex">
                            <div class="dashboard__card__header__left">
                                <h5 class="dashboard__card__header__title">
                                    <i class="las la-check-circle" style="color: var(--red);"></i>
                                    {{ __('Included Services') }}
                                    <span class="status-badge active">{{ $service->includes->count() }}</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="task_assignments__table custom_table mt-4">
                        <table>
                            <thead>
                                <tr>
                                    <th>{{ __('ID') }}</th>
                                    <th>{{ __('Title') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($service->includes as $include)
                                    <tr class="table_row">
                                       <td>{{ $loop->iteration }}</td>
                                        <td>
                                            <div class="table_customer">
                                                <div class="table_customer__flex">
                                                    <div class="table_customer__contents">
                                                        <h6 class="table_customer__title">
                                                            <i class="las la-check" style="color: var(--green-dark);"></i>
                                                            {{ $include->title }}
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    @endif    

    <!-- FAQs Section -->
    @if($service->faqs && $service->faqs->count() > 0)
        <div class="row g-4 mt-1">
            <div class="col-lg-12">
                <div class="dashboard__card bg__white padding-20 radius-10">
                    <div class="dashboard__card__header">
                        <div class="dashboard__card__header__flex">
                            <div class="dashboard__card__header__left">
                                <h5 class="dashboard__card__header__title">
                                    <i class="las la-question-circle" style="color: var(--red);"></i>
                                    {{ __('FAQs') }}
                                    <span class="status-badge warning">{{ $service->faqs->count() }}</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="task_assignments__table custom_table mt-4">
                        <table>
                            <thead>
                                <tr>
                                    <th>{{ __('ID') }}</th>
                                    <th>{{ __('Question') }}</th>
                                    <th>{{ __('Answer') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($service->faqs as $faq)
                                    <tr class="table_row">
                                     <td>{{ $loop->iteration }}</td>
                                        <td>
                                            <div class="table_customer">
                                                <div class="table_customer__flex">
                                                    <div class="table_customer__contents">
                                                        <h6 class="table_customer__title">
                                                            <i class="las la-question" style="color: var(--yellow-dark);"></i>
                                                            {{ $faq->title }}
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table_customer">
                                                <div class="table_customer__flex">
                                                    <div class="table_customer__contents">
                                                        <p class="table_customer__title mt-1">
                                                            <i class="las la-reply" style="color: var(--blue-dark);"></i>
                                                            {{ $faq->description }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    @endif    

    <!-- Additional Information Section -->
    @if($service->serviceAdditional && $service->serviceAdditional->count() > 0)
        <!-- Info Type -->
        <div class="row g-4 mt-1">
            <div class="col-lg-12">
                <div class="dashboard__card bg__white padding-20 radius-10">
                    <div class="dashboard__card__header">
                        <div class="dashboard__card__header__flex">
                            <div class="dashboard__card__header__left">
                                <h5 class="dashboard__card__header__title">
                                    <i class="las la-info" style="color: var(--red);"></i>
                                    {{ __('Additional Information') }}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="task_assignments__table custom_table mt-4">
                        <table>
                            <thead>
                                <tr>
                                    <th>{{ __('ID') }}</th>
                                    <th>{{ __('Image') }}</th>
                                    <th>{{ __('Title') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($service->serviceAdditional->where('type', 'info') as $info)
                                    <tr class="table_row">
                                        <td>{{ $loop->iteration }}</td>
                                        <td>
                                            <div class="img-thumb-wrapper">
                                                {!! render_image_markup_by_attachment_id($info->image, '', 'thumb') !!}
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table_customer">
                                                <div class="table_customer__flex">
                                                    <div class="table_customer__contents">
                                                        <h6 class="table_customer__title">{{ $info->title }}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Specification Type -->
        <div class="row g-4 mt-1">
            <div class="col-lg-12">
                <div class="dashboard__card bg__white padding-20 radius-10">
                    <div class="dashboard__card__header">
                        <div class="dashboard__card__header__flex">
                            <div class="dashboard__card__header__left">
                                <h5 class="dashboard__card__header__title">
                                    <i class="las la-cog" style="color: var(--red);"></i>
                                    {{ __('Specifications') }}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="task_assignments__table custom_table mt-4">
                        <table>
                            <thead>
                                <tr>
                                    <th>{{ __('ID') }}</th>
                                    <th>{{ __('Image') }}</th>
                                    <th>{{ __('Title') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($service->serviceAdditional->where('type', 'specification') as $spec)
                                    <tr class="table_row">
                                        <td>{{ $loop->iteration }}</td>
                                        <td>
                                            <div class="img-thumb-wrapper">
                                                {!! render_image_markup_by_attachment_id($spec->image, '', 'thumb') !!}
                                            </div>
                                        </td>
                                        <td>
                                            <div class="table_customer">
                                                <div class="table_customer__flex">
                                                    <div class="table_customer__contents">
                                                        <h6 class="table_customer__title">{{ $spec->title }}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    @endif

    <x-media.markup/>
@endsection

@section('scripts')
    <x-media.js />
    <script src="{{asset('assets/backend/js/fontawesome-iconpicker.min.js')}}"></script>
    <link rel="stylesheet" href="{{asset('assets/backend/css/fontawesome-iconpicker.min.css')}}">
    <x-summernote.js/>
    
    <script>
        <x-icon.icon-picker/>
    </script>
    
    <script>
        (function ($) {
            "use strict";

            $(document).ready(function () {
                // Initialize Select2 for zone settings
                $('.zone_settings').select2();

                // Prevent keyboard events on checkbox
                $(document).on('keydown', '#checkbox', function (e) {
                    if (e.which === 32) {
                        e.preventDefault();
                    }
                });

                // Permalink functionality
                var sl = $('.category_slug').val();
                var url = `{{url('/service-list/category/')}}/` + sl;
                $('#slug_show').text(url).css('color', 'var(--red)');

                function convertToSlug(slug) {
                    return slug
                        .replace(/[^a-zA-Z0-9\s]/g, '')
                        .replace(/\s+/g, '-')
                        .toLowerCase()
                        .replace(/[^\w-]+/g, '');
                }

                // Slug Edit
                $(document).on('click', '.slug_edit_button', function (e) {
                    e.preventDefault();
                    $('.category_slug').show();
                    $(this).hide();
                    $('.slug_update_button').show();
                });

                // Slug Update
                $(document).on('click', '.slug_update_button', function (e) {
                    e.preventDefault();
                    $(this).hide();
                    $('.slug_edit_button').show();
                    var update_input = $('.category_slug').val();
                    var slug = convertToSlug(update_input);
                    var url = `{{url('/service-list/category/')}}/` + slug;
                    $('#slug_show').text(url).css('color', 'var(--red)');
                    $('.category_slug').val(slug).hide();
                });

                // Summernote initialization
                $('.summernote').summernote({
                    height: 400,
                    codemirror: {
                        theme: 'monokai'
                    },
                    callbacks: {
                        onChange: function (contents, $editable) {
                            $(this).prev('input').val(contents);
                        }
                    }
                });

                // Set summernote content if exists
                $('.summernote').each(function () {
                    if ($(this).data('content')) {
                        $(this).summernote('code', $(this).data('content'));
                    }
                });

                // Tooltip initialization
                $('[data-bs-toggle="tooltip"]').tooltip();

                // Add fade-out effect for empty messages
                setTimeout(function() {
                    $('.alert').fadeOut(500);
                }, 5000);
            });
        })(jQuery)
    </script>
@endsection