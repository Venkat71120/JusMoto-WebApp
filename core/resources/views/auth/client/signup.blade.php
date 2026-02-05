@extends('frontend.layout.master')
@section('site-title')
    {{ __('Registration') }} - {{ get_static_option('site_title') }}
@endsection
@section('content')
<style>/* Password input wrapper */

.custom-input {
    width: 100%;
}
.relative_wrapper {
    position: relative;
    margin: 0;
    padding: 0;
}

.relative_wrapper input {
    margin: 0;
    display: block;   /* VERY IMPORTANT */
}

.custom-input input {
    width: 100%;
    height: 48px;
    padding: 10px 15px;
    border: 1px solid #d3dcdb;
    border-radius: 6px;
    outline: none;
    box-sizing: border-box;
}
</style>
    <main>
        <section class="account-management-page">
            <!-- Wrapper (main content) -->
            <div class="account-management-wrapper">

                <!-- Left Side -->
                <div class="left-card-wrapper">
                    <div class="login-left-card">
                        @if(!empty(get_static_option('register_page_social_login_show_hide')))
                            <!--  Back Button -->
                            <div class="back-btn">
                                <a href="{{ route('auth.social.login') }}">
                                    <span><i class="fa-solid fa-arrow-left"></i></span>
                                    {{__('Back')}}
                                </a>
                            </div>
                        @endif
                        <h2 class="subtitle-1 mb-2">{{get_static_option('register_page_title')}}</h2>
                        <form action="{{route('auth.signup.submit')}}" method="POSt" class="register-form mt-2">
                            @csrf
                            <!-- Email -->
                            <label class="mt-2" for="email">{{__('Email')}}</label>
                            <div class="input-group">
                                <input type="email" id="email" name="email" class="custom-input" value="{{old('email')}}" placeholder="Enter email" />
                            </div>
                            <div>
                                <span id="email_availability" class="d-none mb-2"></span>
                            </div>


                            <!-- Password -->
                            <label for="password">{{__('Password')}}</label>
                            <div class="input-group custom-input relative_wrapper">
                                <input type="password" id="password" name="password" class="w-100 pss-input" value="{{old('password')}}" placeholder="Enter password" />
                                <div class="pass_eye_btn">
                                    <i class="base-icon ti tabler-eye d-none"></i>
                                    <i class="base-icon ti tabler-eye-off "></i>
                                </div>
                            </div>
                            <div>
                                <span class="length-check d-none mb-2"></span>
                            </div>

                            <!-- confirm Password -->
                            <label for="confirm_password">{{__('Confirm Password')}}</label>
                            <div class="input-group custom-input relative_wrapper">
                                <input type="password" id="confirm_password" name="confirm_password" class="w-100 pss-input" value="{{old('confirm_password')}}" placeholder="Enter password" />
                                <div class="pass_eye_btn">
                                    <i class="base-icon ti tabler-eye d-none"></i>
                                    <i class="base-icon ti tabler-eye-off "></i>
                                </div>
                            </div>
                            <span id="check_password_match" class="d-none"></span>

                            <div class="d-flex flex-wrap gap-4 mb-2 mt-3">
                                @if((!empty(get_static_option('site_google_captcha_enable'))))
                                    <div class="col-md-12 mb-3">
                                        <div class="g-recaptcha" id="recaptcha_element_register" data-sitekey="{{ get_static_option('recaptcha_2_site_key') ?? '' }}"></div>
                                        @if ($errors->has('g-recaptcha-response'))
                                            <span class="text-danger">{{ $errors->first('g-recaptcha-response') }}</span>
                                        @endif
                                    </div>
                                @endif

                            </div>

                            <div>
                                @php
                                    $slug=get_static_option('select_terms_condition_page') ?? '';
                                @endphp

                                <input type="checkbox" name="agree" id="agree" class="custom-checkbox"  {{ old('agree') ? 'checked' : '' }}>
                                <label for="agree" class="custom-label">{{__('I agree to the')}} <a target="_blank" href="{{ url('/') . '/' . $slug }}" class="text-decoration-underline fw-bold">{{__('Terms & Conditions')}}</a></label>
                            </div>

                            <button type="submit" class="signin-btn">{{get_static_option('register_page_button')}}</button>
                            <div class="alredy-account text-center black-text fw_medium mt-3">
                                <p>{{__("Already have an account? ")}}<a href="{{route('auth.login')}}" class="primary-text">{{__('Sign in')}}</a></p>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Right Side -->
                <div class="login-right-part d-sm-none d-md-block d-lg-block d-none">
                    <img src="{{ asset('assets/frontend/images/Signupimg.png') }}" alt="Register Image">

                </div>
            </div>
        </section>
    </main>
@endsection
@section('scripts')
    <script src='https://www.google.com/recaptcha/api.js'></script>
    <script>
        $(document).ready(function () {
            $(document).on('keyup', '#email', function () {
                let email = $(this).val();
                let emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

                if (emailRegex.test(email)) {
                    $.ajax({
                        url: "{{ route('user.email.availability') }}",
                        type: 'post',
                        data: { email: email },
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        success: function (res) {
                            let $msg = $("#email_availability").removeClass("d-none");
                            if (res.status === 'available') {
                                $msg.text(res.msg).css("color", "green");
                            } else {
                                $msg.text(res.msg).css("color", "red");
                            }
                        }
                    });
                } else if (email.length > 0) {
                    $("#email_availability")
                        .removeClass("d-none")
                        .text("{{ __('Enter valid email') }}")
                        .css("color", "red");
                } else {
                    $("#email_availability").addClass("d-none").text("");
                }
            });


            $(document).on('keyup', '#password, #confirm_password', function() {

                let password = $("#password").val();
                let confirm_password = $("#confirm_password").val();

                let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                if (password.length === 0) {
                    // remove message if input is empty
                    $('.length-check').next('span').remove();
                }else if (passwordPattern.test(password)) {
                    $('.length-check')
                        .next('span').remove()
                        .end()
                        .after('<span style="color:green; margin-left:8px;">Password meets all requirements</span>');
                } else {
                    $('.length-check')
                        .next('span').remove()
                        .end()
                        .after('<span style="color:red; margin-left:8px;">Password must be at least 8 chars, include uppercase, lowercase, number & special char</span>');
                }

                if (confirm_password.length > 0) {
                    // remove old span first
                    $("#check_password_match").next("span").remove();

                    if (password === confirm_password) {
                        $("#check_password_match").after(
                            '<span style="color:green; margin-left:8px;">Password match!</span>'
                        );
                    } else {
                        $("#check_password_match").after(
                            '<span style="color:red; margin-left:8px;">Password does not match!</span>'
                        );
                    }
                }else {
                    $("#check_password_match").next("span").remove();
                }
            });
        });
    </script>

@endsection
