@extends('frontend.layout.master')
@section('site-title')
    {{ __('Login') }} - {{ get_static_option('site_title') }}
@endsection
@section('content')
    <main>
        <section class="account-management-page">
            <!-- Wrapper (main content) -->
            <div class="account-management-wrapper">

                <!-- Left Side -->
                <div class="left-card-wrapper">
                    <div class="login-left-card">
                        <h2 class="subtitle-1">{{__('Sign In to Your Account')}}</h2>
                        <div class="accounts d-flex gap-3">
                            <p class="fs-reg">{{__("Don't have an account? ")}}</p>
                            <a class="fs-reg" href="{{route('auth.signup')}}">{{__('Join Here')}}</a>
                        </div>
                        @if(!empty(get_static_option('register_page_social_login_show_hide')))
                            <div class="from-control-login">
                                <a href="{{ route('login.google.redirect') }}" class="btn-login">
                                    <img src="{{ asset('assets/frontend/images/google.png') }}" alt="Google" />
                                    {{ __('Continue with Google') }}
                                </a>
                            </div>
                            <div class="divider">
                                <div class="under-devider"></div>
                                <span class="divider-span fs-reg">{{ __('OR') }}</span>
                            </div>
                            <div class="from-control-login">
                                <a href="{{route('login.facebook.redirect')}}" class="btn-login">
                                    <img src="{{asset('assets/frontend/images/facebook.png')}}" alt="Facebook" />
                                    {{__('Continue with Facebook')}}
                                </a>
                            </div>
                        @endif
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
