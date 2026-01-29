@extends('frontend.layout.master')
@section('content')
    <main>
        <section class="account-management-page">
            <!-- Wrapper (main content) -->
            <div class="account-management-wrapper">

                <!-- Left Side -->
                <div class="left-card-wrapper">
                    <div class="login-left-card">
                        <!--  Back Button -->
                        <div class="back-btn">
                            <a href="{{route('user.forget.password')}}">
                                <span><i class="fa-solid fa-arrow-left"></i></span>
                                {{__('Back')}}
                            </a>
                        </div>

                        <h2 class="subtitle-1">{{ __('Forget Password') }}</h2>
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
                                {{ __('Hello there, here you can reset you password.') }}
                            </div>
                        @endif


                        <form action="{{route('user.reset.password.change')}}" method="POSt" class="login-form">
                            @csrf
                            <input type="hidden" name="token" value="{{$token}}">
                            <!-- Email -->
                            <label for="email">{{ __('Username or Email') }}</label>
                            <div class="input-group">
                                <input type="text"  id="username" name="username" placeholder="{{ __('Username or Email') }}" class="custom-input" value="{{old('username')}}" />
                            </div>

                            <!-- Password -->
                            <label for="new_password">{{__('New Password')}}</label>
                            <div class="input-group custom-input relative_wrapper">
                                <input type="password" id="new_password" name="new_password" class="w-100 pss-input" value="{{old('new_password')}}" placeholder="Enter new password" />
                                <div class="pass_eye_btn">
                                    <i class="base-icon ti tabler-eye d-none"></i>
                                    <i class="base-icon ti tabler-eye-off "></i>
                                </div>
                            </div>
                            <span class="length-check d-none"></span>
                            <!-- confirm Password -->
                            <label for="new_password_confirmation">{{__('Confirm Password')}}</label>
                            <div class="input-group custom-input relative_wrapper">
                                <input type="password" id="new_password_confirmation" name="new_password_confirmation" class="w-100 pss-input" value="{{old('new_password_confirmation')}}" placeholder="Enter password" />
                                <div class="pass_eye_btn">
                                    <i class="base-icon ti tabler-eye d-none"></i>
                                    <i class="base-icon ti tabler-eye-off "></i>
                                </div>
                            </div>
                            <span id="check_password_match" class="d-none"></span>
                            <button type="submit" class="signin-btn">{{__('Reset Password')}}</button>

                        </form>
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

@section('scripts')
    <script>
        $(document).ready(function () {
            $(document).on('keyup', '#new_password, #new_password_confirmation', function () {
                let password = $("#new_password").val();
                let confirm_password = $("#new_password_confirmation").val();

                let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                if (password.length === 0) {
                    // remove message if input is empty
                    $('.length-check').next('span').remove();
                } else if (passwordPattern.test(password)) {
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
                } else {
                    $("#check_password_match").next("span").remove();
                }
            });
        });

    </script>
@endsection
