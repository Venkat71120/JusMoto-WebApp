@extends('frontend.layout.master')
@section('site-title')
    {{ __('Blog Details') }}
@endsection
@section('page-meta-data')
    {!!  render_page_meta_data($blog) !!}
@endsection

@section('content')
    <main>
        @include('blog::frontend.BlogPage.blog-details-basic-info')
    </main>

@endsection
@section('scripts')
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
