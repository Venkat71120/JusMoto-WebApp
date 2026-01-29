@extends('frontend.layout.master')
@section('site-title')
    {{ __('Product Details') }}
@endsection

@section('style')

@endsection
@section('page-meta-data')
    {!!  render_page_meta_data_for_service($product) !!}
@endsection
@section('content')
    <main>

        @include('frontend.pages.ProductPage.product-details-basic-info')
        @include('frontend.pages.ProductPage.related-product-section')

    </main>

@endsection
@section('scripts')
    <script>
        document.addEventListener("DOMContentLoaded", function() {

            function openTab(targetId) {
                // Remove active class from all tabs and contents
                document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

                let tabBtn = document.querySelector(`.tab[data-target="${targetId}"]`);
                let tabContent = document.getElementById(targetId);

                if (tabBtn && tabContent) {
                    tabBtn.classList.add('active');
                    tabContent.classList.add('active');
                }

                // Update URL
                let url = window.location.origin + window.location.pathname;
                let query = window.location.search;

                if (targetId === 'reviews') {
                    // For reviews tab, use #reviews
                    history.replaceState(null, null, url + query + '#reviews');
                } else {
                    // For other tabs, remove hash & keep URL clean
                    history.replaceState(null, null, url);
                }
            }

            // Determine initial tab on page load
            let initialTab = 'overview';
            if (window.location.hash === '#reviews') {
                initialTab = 'reviews';
            }
            openTab(initialTab);

            document.querySelectorAll('.tab').forEach(tab => {
                tab.addEventListener('click', function() {
                    openTab(this.dataset.target);
                });
            });

            // preserve #reviews
            document.querySelectorAll('.pagination a').forEach(link => {
                if (!link.href.includes('#reviews')) {
                    link.href += '#reviews';
                }
            });

        });
        $(document).ready(function () {

            let mainSlider = $('.global-slick-init');

            let thumbnails = $('.thumbnail-item');

            thumbnails.on('click', function () {
                let index = $(this).parent().index();
                mainSlider.slick('slickGoTo', index);
                thumbnails.removeClass('active');
                $(this).addClass('active');
            });

            mainSlider.on('afterChange', function (event, slick, currentSlide) {
                thumbnails.removeClass('active');
                thumbnails.eq(currentSlide).addClass('active');
            });

        });


    </script>

@endsection
