@include('frontend.user.layout.partial.header')
@include('frontend.user.layout.partial.navbar')
@include('frontend.user.layout.partial.sidebar')


@yield('content')



<meta name="csrf-token" content="{{ csrf_token() }}">

@include('frontend.user.layout.partial.footer')
