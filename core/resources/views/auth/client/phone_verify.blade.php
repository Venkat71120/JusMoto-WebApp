@extends('frontend.layout.master')
@section('site-title')
    {{ __('Phone Verify') }} - {{ get_static_option('site_title') }}
@endsection

@section('content')
    <main>
        <section class="account-management-page">
            <div class="account-management-wrapper">
                <!-- Left Side -->
                <div class="left-card-wrapper">
                    <div class="login-left-card">

                        <h2 class="subtitle-1">{{ __('Verify Your Phone Number') }}</h2>

                        @if($errors->any())
                            <div class="alert alert-danger alert-dismissible fade show mt-4 mb-4" role="alert">
                                <ul class="mb-0">
                                    @foreach($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @elseif(session('msg'))
                            <div class="alert alert-{{ session('type', 'info') }} alert-dismissible fade show mt-4 mb-4" role="alert">
                                {{ session('msg') }}
                            </div>
                        @else
                            <div class="alert alert-warning alert-bs-dismissible fade show mt-4 mb-4" role="alert">
                                {{ __('Please check your number for verification code') }}
                            </div>
                        @endif

                        <form action="{{ route('phone.verify') }}" method="POST" class="login-form">
                            @csrf
                            <!-- Phone Verification Code -->
                            <label for="phone_verify_token">{{ __('Enter verification code*') }}</label>
                            <div class="input-group">
                                <input type="text" id="phone_verify_token" name="otp" placeholder="{{ __('Enter code') }}" class="custom-input" value="{{ old('phone_verify_token') }}" />
                            </div>

                            <button type="submit" class="signin-btn">{{ __('Verify Number') }}</button>
                        </form>

                        <div class="resend-verify-code-wrap mt-3 d-flex justify-content-center">
                            <a class="text-center" href="{{ route('resend.phone.verify.code') }}">
                                <strong>{{ __('Resend Code') }}</strong>
                            </a>
                        </div>

                    </div>
                </div>

                <!-- Right Side -->
                <div class="login-right-part d-sm-none d-md-block d-lg-block d-none">
                    {!! render_image_markup_by_attachment_id(get_static_option('login_page_image'), '', 'full') !!}
                </div>
            </div>
        </section>
    </main>
@endsection
