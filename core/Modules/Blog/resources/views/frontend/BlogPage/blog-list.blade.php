@extends('frontend.layout.master')
@section('site-title')
    {{ __('Blog List') }}
@endsection
@section('page-meta-data')
    {!! render_site_meta_for_general("Blog List") !!}
@endsection
@section('content')
    <main>
        <x-frontend.breadcrumb-section.breadcrumb
            title="Blog Standard"
            :items="[
                ['label' => 'Home', 'url' => '/'],
                ['label' => 'Blog']
            ]"
        />
        <section class="pat-120 pab-60">
            <div class="custom-container">
                <div class="row">
                    <div class="col-lg-8 blog-list-wrapper" id="blog-list-wrapper">
                        @include('blog::frontend.BlogPage.listing-page')
                    </div>
                    <div class="col-lg-4">
                        @include('blog::frontend.BlogPage.search-bar')
                        @include('blog::frontend.BlogPage.sidebar-container')
                        <!-- Tags -->
                        @include('blog::frontend.BlogPage.tags')
{{--                        <!-- Reacent blogs -->--}}
{{--                        @include('blog::frontend.BlogPage.recent-blog')--}}
                    </div>
                </div>
        </section>
    </main>

@endsection
@section('scripts')
    <script src="{{asset('assets/backend/js/select2.min.js')}}"></script>
    <script>
        const searchInput = document.getElementById('search-input');
        let timer;

        searchInput.addEventListener('keyup', function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
                const query = searchInput.value.trim();
                const url = new URL("{{ route('frontend.blog.list') }}", window.location.origin);
                if(query) url.searchParams.set('search', query);
                else url.searchParams.delete('search');
                window.location.href = url.toString();
            }, 300); // 300ms delay for debounce
        });
    </script>
@endsection
