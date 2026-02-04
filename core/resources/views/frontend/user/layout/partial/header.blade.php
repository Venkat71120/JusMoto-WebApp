<!DOCTYPE html>
<html class="no-js" lang="{{auth()->user()->languageSlug()}}" dir="{{auth()->user()->languageDirection()}}">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        @if(trim($__env->yieldContent('site-title')))
            @yield('site-title')
        @else
            {{ get_static_option('site_title') }}
        @endif
    </title>
    <!-- favicon -->
    @php $site_favicon = get_attachment_image_by_id(get_static_option('site_favicon'),"full", false); @endphp
    @if(!empty($site_favicon))
        <link rel="icon" href="{{$site_favicon['img_url']}}" sizes="16x16" type="image/x-icon">
    @endif
 <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100..900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('/assets/frontend/css/plugin.css') }}">
    <link rel="stylesheet" href="{{ asset('/assets/frontend/css/tablar-icon.css') }}">
    <link rel="stylesheet" href="{{ asset('/assets/frontend/css/dashboard-style.css') }}">
    <link rel="stylesheet" href="{{ asset('/assets/frontend/css/dashboard-responsive.css') }}">
    <link rel="stylesheet" href="{{ asset('/assets/frontend/css/space.css') }}">
    <link rel="stylesheet" href="{{ asset('/assets/frontend/css/sidebarsearch.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/common/css/toastr.min.css') }}">
    <link rel="stylesheet" href="{{asset('assets/frontend/css/sweetalert.css')}}">
    @yield('style')

{{--    @if(auth()->user()->languageDirection() == 'rtl')--}}
{{--        <link rel="stylesheet" href="{{asset('assets/frontend/css/rtl.css')}}">--}}
{{--    @endif--}}

</head>


