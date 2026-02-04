@extends('layouts.login-screens')
@section('content')
    <style>
            .password-toggle {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            color: #777;
        }
    </style>
    <section class="loginForm">
        <div class="loginForm__flex">
            <div class="loginForm__left">
                <div class="loginForm__left__inner desktop-center">
                    <div class="loginForm__right__logo">
                        <div class="loginForm__logo">
                            <a href="{{ route('homepage') }}" class="logo">
                                {!! render_image_markup_by_attachment_id(get_static_option('site_logo')) !!}
                            </a>
                        </div>
                    </div>
                    <div class="loginForm__header">
                        <h2 class="loginForm__header__title text-start">
                            {{ get_static_option('admin_login_page_title') ?? __('Welcome Back') }}
                        </h2>
                        <p class="loginForm__header__para text-start">
                            {{  get_static_option('admin_login_page_subtitle') ?? __('Login with your data that you entered during registration.') }}
                        </p>
                    </div>
                    <div class="error-message text-start">
                        <x-msg.response-message />
                    </div>
                    <div class="loginForm__wrapper">
                        <form action="{{ route('admin.login') }}" class="custom_form" method="POST">
                            @csrf
                            <div class="single_input">
                                <label class="label_title">{{ __('Username or Email') }}</label>
                                <div class="include_icon">
                                    <input class="form--control radius-5" type="text" id="username" name="username"
                                        placeholder="{{ __('Username or Email') }}" autocomplete="username" required>
                                    <div class="icon"><span><i class="las la-user-alt"></i></span></div>
                                </div>
                            </div>

                            <div class="single_input mt-3">
                                <label class="label_title">{{ __('Password') }}</label>
                                <div class="include_icon position-relative">
                                    <input class="form--control radius-5" type="password" id="password" name="password"
                                        placeholder="{{ __('Password') }}" autocomplete="current-password" required>

                                    <div class="icon"><span><i class="las la-lock"></i></span></div>

                                  <span class="password-toggle" id="togglePassword">

                                        <i class="las la-eye"></i>
                                    </span>
                                </div>

                            </div>

                            <div class="loginForm__wrapper__remember single_input mt-3">
                                <div class="dashboard_checkBox">
                                    <input class="dashboard_checkBox__input" id="remember" name="remember" type="checkbox"
                                        value="1">
                                    <label class="dashboard_checkBox__label" for="remember">{{ __('Remember Me') }}</label>
                                </div>
                                <!-- forgetPassword -->
                                <div class="forgotPassword">
                                    <a href="{{ route('admin.forget.password') }}"
                                        class="forgotPass">{{ __('Forgot passwords?') }}</a>
                                </div>
                            </div>
                            <div class="btn_wrapper single_input mt-3">
                                <button type="submit" id="form_submit" class="cmnBtn btn_5 btn_bg_blue radius-5 w-100">
                                    {{ __('Login') }}
                                </button>

                            </div>
                            @if(preg_match('/(bytesed)/', url('/')))
                                <div class="adminlogin-info mt-3">
                                    <table class="table">
                                        <th>{{__('Username')}}</th>
                                        <th>{{__('Password')}}</th>
                                        <th>{{__('Action')}}</th>
                                        <tbody>
                                            <tr class="border-0">
                                                <td class="border-0" id="td_username">super_admin</td>
                                                <td class="border-0" id="td_password">12345678</td>
                                                <td class="border-0">
                                                    <button type="button"
                                                        class="cmnBtn btn_5 btn_bg_success btnIcon radius-5 autoLogin"
                                                        id="autoLogin">{{__('Login')}}</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            @endif
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@section('scripts')
   <script>
(function($){
"use strict";

function togglePassword(){
    const input = document.getElementById('password');
    input.type = input.type === 'password' ? 'text' : 'password';
}
$(document).on('click', '#togglePassword', function () {
    const input = $('#password');
    const icon = $(this).find('i');

    if (input.attr('type') === 'password') {
        input.attr('type', 'text');
        icon.removeClass('la-eye').addClass('la-eye-slash');
    } else {
        input.attr('type', 'password');
        icon.removeClass('la-eye-slash').addClass('la-eye');
    }
});

$(document).ready(function (){

    $(document).on('click','#form_submit',function (e){
        e.preventDefault();

        let el = $(this);
        let erContainer = $(".error-message");

        erContainer.html('');
        el.prop('disabled', true).text('{{__('Please Wait...')}}');

        $.ajax({
            url: "{{route('admin.login')}}",
            type: "POST",
            data: {
                _token : "{{csrf_token()}}",
                username : $('#username').val(),
                password : $('#password').val(),
                remember : $('#remember').is(':checked') ? 1 : 0,
            },
            error:function(xhr){
                let errors = xhr.responseJSON;

                erContainer.html('<div class="alert alert-danger"></div>');

                if(errors?.errors){
                    $.each(errors.errors, function(_, value){
                        erContainer.find('.alert').append('<p>'+value+'</p>');
                    });
                }else if(errors?.msg){
                    erContainer.find('.alert').append('<p>'+errors.msg+'</p>');
                }else{
                    erContainer.find('.alert').append('<p>{{__('Something went wrong.')}}</p>');
                }

                el.prop('disabled', false).text('{{__('Login')}}');
            },
            success:function (data){
                if (data.status === 'ok'){
                    el.text('{{__('Redirecting...')}}');
                    erContainer.html('<div class="alert alert-success">'+data.msg+'</div>');
                    setTimeout(()=>location.reload(),800);
                }else{
                    erContainer.html('<div class="alert alert-'+data.type+'">'+data.msg+'</div>');
                    el.prop('disabled', false).text('{{__('Login')}}');
                }
            }
        });
    });

});
})(jQuery);
</script>

@endsection