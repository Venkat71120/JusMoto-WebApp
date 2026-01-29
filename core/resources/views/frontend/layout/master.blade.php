@include('frontend/layout/partials/header')
<!-- preloader area end -->
@if (Request::is('/') || Request::is('home-page'))
    @include('frontend/layout/partials/navbar')
@else
    @include('frontend/layout/partials/navbar-other')
@endif

@yield('content')

@include('frontend/layout/partials/footer')
