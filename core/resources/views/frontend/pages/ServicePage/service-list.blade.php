@extends('frontend.layout.master')

@section('page-meta-data')
    {!! render_site_meta_for_general("Service List") !!}
@endsection
@section('site-title')
    {{ __('Service List') }}
@endsection
@section('content')
    <main>
        <x-frontend.breadcrumb-section.breadcrumb
            title="Service"
            :items="[
                ['label' => 'Home', 'url' => '/'],
                ['label' => 'Service','url' => route('frontend.all.services')]
            ]"
        />
        <section class="explore-servies pat-120 pab-60">
            <div class="custom-container">
                <div class="title-wraper-part d-lg-flex flex-wrap gap-3 justify-between items-center mb-60">
                    @include('frontend.pages.ServicePage.search-bar')
                </div>
                @include('frontend.pages.ServicePage.listing-page')

            </div>
        </section>
    </main>

@endsection
@section('scripts')
    <script>
        (function ($) {
            "use strict";
            $(document).ready(function() {

                // Initialize Select2

                // Main function to fetch services
                function fetchServices(page = 1) {
                    let search = $('#search-input').val();
                    let category = $('#category').val();
                    let reviews = $('#search-reviews').val();
                    let minPrice = $('#min-price').val();
                    let maxPrice = $('#max-price').val();

                    $.ajax({
                        url: "{{ route('frontend.all.filter.services') }}",
                        type: 'GET',
                        data: {
                            search: search,
                            category: category,
                            reviews: reviews,
                            min_price: minPrice,
                            max_price: maxPrice,
                            page: page
                        },
                        success: function(response) {
                            $('.service-list-wraper').html(response.html);
                            // Scroll to top of the service list after fetching
                            // $('html, body').animate({ scrollTop: $('.service-list-wraper').offset().top - 100 }, 300);
                        },
                        error: function(xhr) {
                            console.error('Error fetching services', xhr);
                        }
                    });
                }

                // Trigger fetch on input / change
                $('#search-input').on('input', function() { fetchServices(); });
                $('#category').on('change', function() { fetchServices(); });
                $('#search-reviews').on('change', function() { fetchServices(); });

                // Apply price filter button
                $('#price-filter').on('click', function(e) {
                    e.preventDefault();
                    let minPrice = $('#min-price').val();
                    let maxPrice = $('#max-price').val();

                    if(minPrice === '' || maxPrice === '') {
                        toastr.error('Please enter both Min and Max price to apply filter!');
                        return;
                    }
                    if(parseFloat(minPrice) > parseFloat(maxPrice)) {
                        toastr.error('Min price should not be greater than Max price!');
                        return;
                    }

                    fetchServices();
                });

                // Reset all filters
                $('#resetAllFilters').on('click', function(e) {
                    e.preventDefault();

                    $('#search-input').val('');
                    $('#category').val('').trigger('change');
                    $('#search-reviews').val('0').trigger('change');
                    $('#min-price').val('');
                    $('#max-price').val('');

                    window.location.href = "{{ route('frontend.all.services') }}";
                });

                // Pagination click
                $(document).on('click', '.pagination-link', function(e) {
                    e.preventDefault();
                    let url = $(this).attr('href');
                    let page = url.split('page=')[1];
                    fetchServices(page);
                });

            });

        }(jQuery));
    </script>
@endsection
