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
                            <a href="{{route('auth.login')}}">
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


                        <form action="{{route('user.forget.password')}}" method="POSt" class="login-form">
                            @csrf
                            <!-- Email -->
                            <label for="email">{{ __('Username or Email') }}</label>
                            <div class="input-group">
                                <input type="text"  id="username" name="username" placeholder="{{ __('Username or Email') }}" class="custom-input" value="{{old('username')}}" />
                            </div>
                            <button type="submit" class="signin-btn">{{__('Send Reset Password Mail')}}</button>

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
