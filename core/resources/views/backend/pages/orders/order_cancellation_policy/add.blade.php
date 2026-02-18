@extends('backend.admin-master')
@section('title', __('Order Cancellation Policy'))
@section('style')
    <style>
        /* Red Theme Integration */
        :root {
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
            --red: #e31b23;
            --red-light: #fee2e2;
            --red-dark: #b91c1c;
            --blue: #1e40af;
            --blue-light: #dbeafe;
            --radius-sm: 4px;
            --radius: 8px;
            --radius-lg: 12px;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            --transition: all 0.2s ease;
        }

        /* Dashboard Body */
        .dashboard__body {
            padding: 30px;
            background: var(--gray-50);
            min-height: 100vh;
        }

        /* Card Styles */
        .customMarkup__single {
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            transition: var(--transition);
            animation: slideIn 0.3s ease;
        }

        .customMarkup__single:hover {
            box-shadow: var(--shadow-md);
            border-color: var(--gray-300);
        }

        .customMarkup__single__item {
            padding: 0;
        }

        .customMarkup__single__item__flex {
            padding: 20px 25px;
            background: var(--gray-50);
            border-bottom: 2px solid var(--gray-200);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .customMarkup__single__title {
            font-size: 20px;
            font-weight: 600;
            color: var(--gray-800);
            margin: 0;
            display: flex;
            align-items: center;
            gap: 10px;
            position: relative;
            padding-left: 15px;
        }

        .customMarkup__single__title::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 24px;
            background: var(--red);
            border-radius: 4px;
        }

        .customMarkup__single__title::after {
            content: '⚖️';
            font-size: 20px;
            margin-left: 8px;
            opacity: 0.7;
        }

        .customMarkup__single__inner {
            padding: 25px;
        }

        /* Form Styles */
        .form__input__single {
            margin-bottom: 25px;
        }

        .form__input__single__label {
            display: block;
            font-size: 14px;
            font-weight: 600;
            color: var(--gray-700);
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.3px;
        }

        .form__input__single__label .text-danger {
            color: var(--red) !important;
            margin-left: 4px;
        }

        /* Form Controls */
        .form-control,
        .form__control {
            width: 100%;
            padding: 12px 16px;
            background: var(--white);
            border: 1px solid var(--gray-300);
            border-radius: var(--radius);
            font-size: 14px;
            color: var(--gray-800);
            transition: var(--transition);
            box-shadow: var(--shadow-sm);
        }

        .form-control:focus,
        .form__control:focus {
            outline: none;
            border-color: var(--red);
            box-shadow: 0 0 0 3px var(--red-light);
        }

        .form-control:hover,
        .form__control:hover {
            border-color: var(--gray-400);
        }

        /* Select Input */
        select.form-control {
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 12px center;
            background-size: 16px;
            padding-right: 40px;
            cursor: pointer;
        }

        /* Textarea */
        .textarea--form {
            width: 100%;
            padding: 12px 16px;
            background: var(--white);
            border: 1px solid var(--gray-300);
            border-radius: var(--radius);
            font-size: 14px;
            color: var(--gray-800);
            transition: var(--transition);
            resize: vertical;
            min-height: 150px;
            font-family: inherit;
        }

        .textarea--form:focus {
            outline: none;
            border-color: var(--red);
            box-shadow: 0 0 0 3px var(--red-light);
        }

        .textarea--form:hover {
            border-color: var(--gray-400);
        }

        /* Time Input Field */
        #div_time_in_min {
            transition: var(--transition);
            animation: slideDown 0.3s ease;
        }

        #div_time_in_min.d-none {
            display: none;
        }

        /* Button Styles */
        .btn_wrapper {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid var(--gray-200);
        }

        .cmnBtn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 12px 28px;
            border-radius: 40px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            border: none;
            text-decoration: none;
            letter-spacing: 0.3px;
        }

        .cmnBtn.btn_5.btn_bg_blue {
            background: var(--red);
            color: white;
            box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
        }

        .cmnBtn.btn_5.btn_bg_blue:hover {
            background: var(--red-dark);
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(227, 27, 35, 0.3);
        }

        .cmnBtn.btn_5.btn_bg_blue:active {
            transform: translateY(-1px);
        }

        .cmnBtn i {
            font-size: 18px;
            transition: var(--transition);
        }

        .cmnBtn:hover i {
            transform: translateX(3px);
        }

        .radius-5 {
            border-radius: var(--radius);
        }

        /* Helper Text */
        .text-danger {
            color: var(--red) !important;
        }

        /* Info Message */
        .form-info {
            margin-top: 8px;
            font-size: 12px;
            color: var(--gray-500);
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .form-info i {
            color: var(--red);
            font-size: 14px;
        }

        /* Validation Error */
        .alert-danger {
            background: var(--red-light);
            color: var(--red-dark);
            padding: 12px 16px;
            border-radius: var(--radius);
            border-left: 3px solid var(--red-dark);
            margin-bottom: 20px;
            font-size: 14px;
        }

        /* Animations */
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Loading State */
        .cmnBtn.loading {
            position: relative;
            pointer-events: none;
            opacity: 0.7;
        }

        .cmnBtn.loading::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            border: 2px solid transparent;
            border-top-color: currentColor;
            border-right-color: currentColor;
            border-radius: 50%;
            animation: button-loading 0.6s linear infinite;
        }

        @keyframes button-loading {
            to { transform: translateY(-50%) rotate(360deg); }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .dashboard__body {
                padding: 15px;
            }
            
            .customMarkup__single__item__flex {
                padding: 15px 20px;
            }
            
            .customMarkup__single__inner {
                padding: 20px;
            }
            
            .customMarkup__single__title {
                font-size: 18px;
            }
            
            .btn_wrapper {
                flex-direction: column;
            }
            
            .cmnBtn {
                width: 100%;
            }
        }

        /* Print Styles */
        @media print {
            .cmnBtn {
                display: none !important;
            }
            
            .dashboard__body {
                background: white;
                padding: 0;
            }
            
            .customMarkup__single {
                box-shadow: none;
                border: 1px solid #ddd;
            }
        }

        /* Custom Select2 Styling */
        .select2-container--default .select2-selection--single {
            height: 45px;
            border: 1px solid var(--gray-300);
            border-radius: var(--radius);
            padding: 8px 12px;
        }

        .select2-container--default .select2-selection--single .select2-selection__rendered {
            line-height: 28px;
            color: var(--gray-800);
        }

        .select2-container--default .select2-selection--single .select2-selection__arrow {
            height: 43px;
            right: 10px;
        }

        .select2-dropdown {
            border: 1px solid var(--gray-300);
            border-radius: var(--radius);
            box-shadow: var(--shadow-md);
        }

        /* Focus State for all inputs */
        *:focus-visible {
            outline: 2px solid var(--red);
            outline-offset: 2px;
        }

        /* Placeholder Styling */
        ::placeholder {
            color: var(--gray-400);
            font-size: 13px;
            opacity: 1;
        }

        /* Number Input Arrows */
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
            opacity: 0.5;
            height: 24px;
        }

        input[type=number]:hover::-webkit-inner-spin-button,
        input[type=number]:hover::-webkit-outer-spin-button {
            opacity: 1;
        }
    </style>
@endsection

@section('content')
    <div class="dashboard__body">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="customMarkup__single">
                    <div class="customMarkup__single__item">
                        <div class="customMarkup__single__item__flex">
                            <h4 class="customMarkup__single__title">
                                <i class="las la-gavel" style="color: var(--red);"></i>
                                {{ __('Order Cancellation Policy') }}
                            </h4>
                            <div class="policy-badge">
                                <span class="status-badge active">
                                    <i class="las la-shield-alt"></i>
                                    {{ __('Active Policy') }}
                                </span>
                            </div>
                        </div>
                        
                        <x-validation.error />
                        
                        <div class="customMarkup__single__inner mt-4">
                            <form action="{{route('admin.order.cancellation-policy')}}" method="POST" id="cancellationPolicyForm">
                                @csrf
                                
                                <!-- Fine Type Selection -->
                                <div class="form__input__single">
                                    <label class="form__input__single__label">
                                        <i class="las la-tag" style="color: var(--red); margin-right: 6px;"></i>
                                        {{ __('Fine Type') }}
                                        <span class="text-danger">*</span>
                                    </label>
                                    <select id="fine_type" name="fine_type" class="form-control">
                                        <option {{ $cancellationPolicy?->fine_type == 'flat' ? 'selected' : '' }} value="flat">
                                            {{ __('Flat Amount') }}
                                        </option>
                                        <option {{ $cancellationPolicy?->fine_type == 'percentage' ? 'selected' : '' }} value="percentage">
                                            {{ __('Percentage (%)') }}
                                        </option>
                                    </select>
                                    <div class="form-info">
                                        <i class="las la-info-circle"></i>
                                        {{ __('Select how the fine should be calculated') }}
                                    </div>
                                </div>

                                <!-- Amount Input -->
                                <div class="form__input__single">
                                    <label class="form__input__single__label">
                                        <i class="las la-coins" style="color: var(--red); margin-right: 6px;"></i>
                                        {{ __('Amount') }}
                                        <span class="text-danger">*</span>
                                    </label>
                                    <div class="input-with-icon">
                                        <input type="number" 
                                               class="form__control radius-5" 
                                               name="amount" 
                                               id="amount" 
                                               value="{{ $cancellationPolicy?->amount }}"
                                               placeholder="{{ __('Enter amount') }}" 
                                               step="0.01"
                                               min="0">
                                        <span class="input-symbol" id="amountSymbol">
                                            {{ $cancellationPolicy?->fine_type == 'percentage' ? '%' : '' }}
                                        </span>
                                    </div>
                                    <div class="form-info">
                                        <i class="las la-calculator"></i>
                                        {{ __('Enter the fine amount or percentage') }}
                                    </div>
                                </div>

                                <!-- Available Type Selection -->
                                <div class="form__input__single">
                                    <label class="form__input__single__label">
                                        <i class="las la-clock" style="color: var(--red); margin-right: 6px;"></i>
                                        {{ __('Availability Type') }}
                                        <span class="text-danger">*</span>
                                    </label>
                                    <select id="available_type" name="available_type" class="form-control">
                                        <option {{ $cancellationPolicy?->available_type == 'always' ? 'selected' : '' }} value="always">
                                            {{ __('Always Available') }}
                                        </option>
                                        <option {{ $cancellationPolicy?->available_type == 'certain_time' ? 'selected' : '' }} value="certain_time">
                                            {{ __('Certain Time Period') }}
                                        </option>
                                    </select>
                                    <div class="form-info">
                                        <i class="las la-calendar-alt"></i>
                                        {{ __('Choose when this policy applies') }}
                                    </div>
                                </div>

                                <!-- Time Input (Conditional) -->
                                <div class="form__input__single {{ $cancellationPolicy?->available_type == 'certain_time' ? '' : 'd-none' }}" 
                                     id="div_time_in_min">
                                    <label class="form__input__single__label">
                                        <i class="las la-hourglass-half" style="color: var(--red); margin-right: 6px;"></i>
                                        {{ __('Time (in minutes)') }}
                                        <span class="text-danger">*</span>
                                    </label>
                                    <input type="number" 
                                           class="form__control radius-5" 
                                           name="time_in_min" 
                                           id="time_in_min" 
                                           value="{{ $cancellationPolicy?->time_in_min }}"
                                           placeholder="{{ __('Enter time in minutes') }}" 
                                           step="1"
                                           min="0">
                                    <div class="form-info">
                                        <i class="las la-clock"></i>
                                        {{ __('Cancellation allowed within this time period') }}
                                    </div>
                                </div>

                                <!-- Description -->
                                <div class="form__input__single mt-3">
                                    <label class="form__input__single__label">
                                        <i class="las la-align-left" style="color: var(--red); margin-right: 6px;"></i>
                                        {{ __('Policy Description') }}
                                    </label>
                                    <div class="input-form input-form2">
                                        <textarea class="textarea--form" 
                                                  name="description" 
                                                  placeholder="{{ __('Describe the cancellation policy details...') }}" 
                                                  rows="6">{{ $cancellationPolicy?->description }}</textarea>
                                    </div>
                                    <div class="form-info">
                                        <i class="las la-file-alt"></i>
                                        {{ __('Provide detailed information about the cancellation policy') }}
                                    </div>
                                </div>

                                <!-- Submit Button -->
                                <div class="btn_wrapper mt-4">
                                    <button type="submit" id="update" class="cmnBtn btn_5 btn_bg_blue radius-5 update_info">
                                        <i class="las la-save"></i>
                                        {{ __('Update Cancellation Policy') }}
                                    </button>
                                    <button type="reset" class="cmnBtn btn_5 btn_bg_secondary radius-5" onclick="resetForm()">
                                        <i class="las la-undo-alt"></i>
                                        {{ __('Reset Changes') }}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Success Message Template (optional) -->
    @if(session('success'))
        <div class="alert alert-success alert-dismissible fade show fixed-top m-3" style="right: 20px; left: auto; max-width: 400px;" role="alert">
            <i class="las la-check-circle"></i>
            {{ session('success') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    @endif
@endsection

@section('scripts')
    <script src="{{asset('assets/backend/js/select2.min.js')}}"></script>
    <script>
        (function($) {
            "use strict";

            $(document).ready(function() {
                // Initialize Select2 for better dropdown experience
                $('#fine_type, #available_type').select2({
                    minimumResultsForSearch: Infinity,
                    width: '100%'
                });

                // Handle availability type change
                function toggleTimeField(availableType) {
                    if (availableType === 'certain_time') {
                        $('#div_time_in_min').removeClass('d-none').hide().fadeIn(300);
                        $('#time_in_min').prop('required', true);
                    } else {
                        $('#div_time_in_min').fadeOut(300, function() {
                            $(this).addClass('d-none');
                        });
                        $('#time_in_min').prop('required', false);
                    }
                }

                // Initial check
                let availableType = $('#available_type').val();
                toggleTimeField(availableType);

                // On change event
                $('#available_type').on('change', function() {
                    let value = $(this).val();
                    toggleTimeField(value);
                });

                // Update amount symbol based on fine type
                function updateAmountSymbol(fineType) {
                    let symbol = fineType === 'percentage' ? '%' : '';
                    $('#amountSymbol').text(symbol);
                }

                // Initial symbol
                let fineType = $('#fine_type').val();
                updateAmountSymbol(fineType);

                // On fine type change
                $('#fine_type').on('change', function() {
                    updateAmountSymbol($(this).val());
                });

                // Form submission with loading state
                $('#cancellationPolicyForm').on('submit', function() {
                    let btn = $('#update');
                    btn.addClass('loading').prop('disabled', true);
                    btn.html('<i class="las la-spinner la-spin"></i> {{ __("Updating...") }}');
                });

                // Input validation for amount
                $('#amount, #time_in_min').on('input', function() {
                    let value = $(this).val();
                    if (value < 0) {
                        $(this).val(0);
                    }
                });

                // Auto-dismiss alerts
                setTimeout(function() {
                    $('.alert').fadeOut(500);
                }, 5000);

                // Add animation to form inputs
                $('.form-control, .form__control, .textarea--form').on('focus', function() {
                    $(this).parent().addClass('focused');
                }).on('blur', function() {
                    $(this).parent().removeClass('focused');
                });
            });

        })(jQuery);

        // Reset form function
        function resetForm() {
            if (confirm('{{ __("Are you sure you want to reset all changes?") }}')) {
                $('#cancellationPolicyForm')[0].reset();
                // Trigger change events to update UI
                $('#fine_type').trigger('change');
                $('#available_type').trigger('change');
            }
        }
    </script>

    <style>
        /* Additional dynamic styles */
        .input-with-icon {
            position: relative;
        }

        .input-symbol {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--red);
            font-weight: 600;
            font-size: 16px;
            background: var(--red-light);
            padding: 2px 10px;
            border-radius: 20px;
            pointer-events: none;
        }

        .policy-badge .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 16px;
            background: var(--green-light);
            color: var(--green-dark);
            border-radius: 30px;
            font-size: 13px;
            font-weight: 500;
        }

        .focused .form-control,
        .focused .form__control,
        .focused .textarea--form {
            border-color: var(--red);
            box-shadow: 0 0 0 3px var(--red-light);
        }

        /* Alert styling */
        .alert-success {
            background: var(--green-light);
            color: var(--green-dark);
            border: none;
            border-left: 4px solid var(--green-dark);
            border-radius: var(--radius);
            box-shadow: var(--shadow-lg);
        }

        .alert-success i {
            font-size: 20px;
            margin-right: 8px;
        }

        .btn_bg_secondary {
            background: var(--white);
            border: 1px solid var(--gray-300);
            color: var(--gray-700);
        }

        .btn_bg_secondary:hover {
            background: var(--gray-100);
            border-color: var(--gray-400);
            transform: translateY(-2px);
        }
    </style>
@endsection