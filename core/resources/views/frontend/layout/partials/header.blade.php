<!DOCTYPE html>
<html lang="{{get_user_lang()}}" dir="{{get_user_lang_direction()}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>
        {{ get_static_option('site_title') }}
        @if(request()->path() == 'home')
            {{ get_static_option('site_tag_line') }}
        @else
            @yield('site-title')
        @endif
    </title>
    <!-- favicon -->
    @php $site_favicon = get_attachment_image_by_id(get_static_option('site_favicon'),"full", false); @endphp
    @if(!empty($site_favicon))
        <link rel="icon" href="{{$site_favicon['img_url']}}" sizes="16x16" type="image/x-icon">
    @endif
    <link
        href="{{ 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap' }}"
        rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('assets/frontend/css/flatpickr.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/frontend/css/plugin.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/frontend/css/tablar-icon.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/frontend/css/style.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/frontend/css/responseive.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/common/css/toastr.min.css') }}">

    @php
        $page_post = isset($page_post) ? $page_post : [];
        $page_type = isset($page_type) ? $page_post : [];
    @endphp
    @yield('style')
    @if(request()->routeIs('homepage'))
        {!! render_homepage_meta() !!}
    @elseif( request()->routeIs('frontend.dynamic.page') && $page_type === 'page' )
        {!! render_site_title(optional($page_post)->title ) !!}
        {!! render_site_meta() !!}
    @else
        @yield('page-meta-data')
    @endif
</head>
<body>
