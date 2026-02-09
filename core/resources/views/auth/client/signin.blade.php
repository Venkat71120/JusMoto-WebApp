@extends('frontend.layout.master')
@section('site-title')
    {{ __('Login') }} - {{ get_static_option('site_title') }}
@endsection
@section('content')
<style>.custom-input {
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
.btn-login{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    border:1px solid #ddd;
    padding:12px;
    border-radius:6px;
    text-decoration:none;
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

                        <h2 class="subtitle-1">{{get_static_option('login_form_title')}}</h2>


                        <form action="{{route('auth.login.submit')}}" method="POSt" class="login-form">
                            @csrf
                            <!-- Email -->
                            <label for="email">{{__('Email')}}</label>
                            <div class="input-group">
                                <input type="email" id="email" name="email" class="custom-input" value="{{old('email')}}" placeholder="Enter email" />
                            </div>

                            <!-- Password -->
                            <label for="password">{{__('Password')}}</label>
                            <div class="custom-input relative_wrapper">

                                <input type="password" id="password" name="password" class="w-100 pss-input" value="{{old('password')}}" placeholder="Enter password" />
                                <div class="pass_eye_btn">
                                    <i class="base-icon ti tabler-eye d-none"></i>
                                    <i class="base-icon ti tabler-eye-off "></i>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <input class="form-check-input me-2" type="checkbox" id="remember" name="remember">
                                    <label class="form-check-label mb-0" for="remember">{{ __('Remember me') }}</label>
                                </div>
                                <div>
                                    <a href="{{route('user.forget.password')}}">{{ __('Forget password') }}</a>
                                </div>
                            </div>
                            <button type="submit" class="signin-btn">{{get_static_option('login_form_button')}}</button>
                            
                            <div class="alredy-account text-center black-text fw_medium mt-5">
                                <p>{{__("Don't have an account? ")}}<a href="{{route('auth.signup')}}" class="primary-text">{{__('Sign up')}}</a></p>
                            </div>
                            <div>
      <div class="divider text-center mb-3">
        <span>{{ __('OR') }}</span>
    </div>
    <div class="from-control-login mb-3">
        <a href="{{ route('login.google.redirect') }}" class="btn-login w-100">
            <img src="{{ asset('assets/frontend/images/google.png') }}" alt="Google" />
            {{ __('Continue with Google') }}
        </a>
    </div>
</div>
                            @if(preg_match('/(bytesed)/',url('/')))
                                <div class="adminlogin-info mt-3">
                                    <table class="table">
                                        <th>{{__('Username')}}</th>
                                        <th>{{__('Password')}}</th>
                                        <th>{{__('Action')}}</th>
                                        <tbody>
                                        <tr class="border-0">
                                            <td class="border-0" id="td_email">john@gmail.com</td>
                                            <td class="border-0" id="td_password">12345678</td>
                                            <td class="border-0">
                                                <button type="button" class="cmn-btn primary-btn md-btn autoLogin" id="autoLogin">{{__('Login')}}</button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            @endif
                        </form>
                        
                    </div>
                </div>

                <!-- Right Side -->
           <div class="login-right-part d-sm-none d-md-block d-lg-block d-none">
    <img src="{{ asset('assets/frontend/images/app.png') }}" alt="Login Image">
</div>


            </div>
        </section>
        @if(request()->has('redirect_to'))
                <?php session(['redirect_after_login' => request('redirect_to')]); ?>
        @endif

    </main>
    @if(request()->has('redirect_to'))
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                toastr.error("Please login to proceed to checkout.");
            });

        </script>
    @endif


@endsection

@section('scripts')
    <script>
        $(document).on('click','#autoLogin',function(){
            let el = $(this);
            let email = $('#td_email').text();
            let passwrod = $('#td_password').text();
            $('#email').val(email);
            $('#password').val(passwrod);
            $('.signin-btn').trigger('click');
        });
    </script>
@endsection
