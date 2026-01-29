@extends('frontend.layout.master')

@section('page-meta-data')
    {!! render_site_meta_for_general("Product List") !!}
@endsection
@section('site-title')
    {{ __('Product List') }}
@endsection

@section('content')
    <main>
        <x-frontend.breadcrumb-section.breadcrumb
            title="Product"
            :items="[
                ['label' => 'Home', 'url' => '/'],
                ['label' => 'Product','url' => route('frontend.all.products')]
            ]"
        />
        @include('frontend.pages.ProductPage.search-bar')
        @include('frontend.pages.ProductPage.listing-page')

    </main>

@endsection
@section('scripts')
    <script>
        (function ($) {
            "use strict";
            $(document).ready(function() {


                // Main function to fetch services
                function fetchProducts(page = 1) {
                    let search = $('#search-input').val();
                    let category = $('#category').val();
                    let reviews = $('#search-reviews').val();
                    let minPrice = $('#min-price').val();
                    let maxPrice = $('#max-price').val();

                    $.ajax({
                        url: "{{ route('frontend.all.filter.products') }}",
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
                            $('.related-product').html(response.html);
                            // Scroll to top of the service list after fetching
                            // $('html, body').animate({ scrollTop: $('.related-product').offset().top - 100 }, 300);
                        },
                        error: function(xhr) {
                            console.error('Error fetching products', xhr);
                        }
                    });
                }

                // Trigger fetch on input / change
                $('#search-input').on('input', function() { fetchProducts(); });
                $('#category').on('change', function() { fetchProducts(); });
                $('#search-reviews').on('change', function() { fetchProducts(); });

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
                    $('.budget-input').attr('placeholder', '').val(minPrice + " - " + maxPrice);


                    fetchProducts();
                });

                // Reset all filters
                $('#resetAllFilters').on('click', function(e) {
                    e.preventDefault();

                    $('#search-input').val('');
                    $('#category').val('').trigger('change');
                    $('#search-reviews').val('0').trigger('change');
                    $('#min-price').val('');
                    $('#max-price').val('');

                    window.location.href = "{{ route('frontend.all.products') }}";
                });

                // Pagination click
                $(document).on('click', '.pagination-link', function(e) {
                    e.preventDefault();
                    let url = $(this).attr('href');
                    let page = url.split('page=')[1];
                    fetchProducts(page);
                });

            });

        }(jQuery));
    </script>
@endsection
