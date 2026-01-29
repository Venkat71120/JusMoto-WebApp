<section class="pat-120">
    <div class="custom-container">
        <div class="row">
            <div class="col-lg-7">
                <div class="row">
                    <!-- Main Image -->
                    <div class="col-lg-11 col-md-12">
                        <div class="sliderContains">
                            <div class="service-position" >
                                <div class="slider-btn-wrapper"></div>
                                <div class=" global-slick-init" data-slidestoshow="1" data-slidestoscroll="1"
                                     data-arrows="true" data-infinite="true" data-appendarrows=".slider-btn-wrapper"
                                     data-prevarrow='<span class="slider-btn style3 position-left-btn"><i class="icon-base ti tabler-arrow-left icon-30px"></i></span>'
                                     data-nextarrow='<span class="slider-btn style3 position-right-btn"><i class="icon-base ti tabler-arrow-right icon-30px"></i></span>'>
                                    @php
                                        $gallery_images = !empty($product->gallery_images) ? explode('|', $product->gallery_images) : [];
                                    @endphp
                                    @if(!empty($gallery_images) && count($gallery_images) > 0)
                                        @foreach($gallery_images as $image_id)
                                            @if(!empty($image_id))
                                                <div class="imgSlides">
                                                    {!! render_image_markup_by_attachment_id($image_id, '', 'full') !!}
                                                </div>
                                            @endif
                                        @endforeach
                                    @else
                                        <div class="imgSlides">
                                            {!! render_image_markup_by_attachment_id($product->image, '', 'full') !!}
                                        </div>
                                    @endif
                                </div>
                                <span class="fvt-icon style2 icon-position favorite-btn {{ auth()->user()?->favoriteItems?->contains('item_id', $product->id) ? 'selected' : '' }}" data-id="{{ $product->id }}">
                                    <i class="icon-base ti tabler-heart-filled"></i>
                                </span>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="product-thumbnail-wrapper">
                                <div class="product-thumbnail d-flex  gap-2">
                                    @php
                                        $gallery_images = !empty($product->gallery_images)
                                            ? explode('|', $product->gallery_images)
                                            : [];
                                          $gallery_count = count($gallery_images);
                                    @endphp
                                    @if($gallery_count > 0)
                                        @for($i = 0; $i < min(3, $gallery_count); $i++)
                                            @php
                                                $image_id = isset($gallery_images[$i]) ? $gallery_images[$i] : null;
                                            @endphp
                                            @if(!empty($image_id))
                                                <div class="thumbnail-container">
                                                    <div class="thumbnail-item {{ $i == 0 ? 'active' : '' }}">
                                                        {!! render_image_markup_by_attachment_id($image_id, '', 'thumb') !!}
                                                    </div>
                                                </div>
                                            @endif
                                        @endfor
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-lg-none d-block mt-4 car-detalis">
                    <h1 class="product-title title-4 fw_semibold">{{$product->title}}</h1>
                    <div class="price-rating-row">
                        @php
                            $new_price=0;
                            if($product->discount_price>0){
                                $new_price=$product->discount_price;
                            }else{
                                $new_price=$product->price;
                            }
                        @endphp
                        <div class="product-price subtitle-1 fw_bold">{{ float_amount_with_currency_symbol($new_price) }}</div>
                        <div class="rating-container">
                            @if($product->rating > 0)
                                <span class="yellow-text"><i class="fas fa-star"></i></span>
                                <span class="black-text fw_semibold">{{$product->rating}}</span>
                            @endif
                            @if($total_reviews>0)
                                <span class="review-count">{{__('(')}}{{$total_reviews}} {{__('Reviews)')}}</span>
                            @endif
                        </div>
                    </div>

                    <div class="category-pera">
                        <p class="product-description fs-reg fw_regular">
                            {{$product->description}}
                        </p>
                    </div>

                    <div class="category-row mt-60">
                        <span class="category-label">{{__('Category:')}}</span>
                        <span class="category-value">{{$product->category->name}}</span>

                        <div class="quantity-cart-row">
                            <div class="add-btn-wraper">
                                <button type="button" class="cmn-btn primary-btn cart-btn" data-id="{{ $product->id }}" data-price="{{$new_price}}" {{ in_array($product->id, $cartItemIds) ? 'disabled' : '' }}>
                                    <i class="icon-base ti tabler-shopping-cart"></i>
                                    {{ in_array($product->id, $cartItemIds) ? __('Added') : __('Add') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tabs">
                    <button class="tab active fw_semibold fs-md" data-target="overview">{{__('Overview')}}</button>
                    <button class="tab fw_semibold fs-md" data-target="reviews">{{__('Reviews')}}</button>
                    <button class="tab fw_semibold fs-md" data-target="faqs">{{__('FAQs')}}</button>
                </div>

                <!-- Overview Content -->
                <div class="tab-content active" id="overview">
                    <div class="overview-item">
                        @if($product->serviceAdditional)
                            @foreach($product->serviceAdditional as $additional)
                                <div class="service-content">
                                    {!! render_image_markup_by_attachment_id_for_additional_info_image($additional->image, '', 'full') !!}
                                    <span>{{ $additional->title }}</span>
                                </div>

                            @endforeach
                        @endif
                    </div>
                    <div class="additional-service">
                        <div class="section-title">
                            <h4 class="subtitle-4 fw_semibold">{{__('Offers')}}</h4>
                        </div>
                        <div class="additional-child">
                            @if($product->includes)
                                @foreach($product->includes as $include)
                                    <div class="additional-item">
                                        <span class="selected-green">
                                          <i class="icon-base ti tabler-circle-check-filled"></i>
                                        </span>
                                        {{$include->title}}
                                    </div>
                                @endforeach
                            @endif

                        </div>

                    </div>

                    <div class="additional-service section-title subtitle-4 fw_semibold">{{__('Steps After Booking')}}</div>
                    <div class="additional-child with-line">
                        @if($afterBookingSteps)
                            @foreach($afterBookingSteps as $steps)
                                <div class="steps-item">
                                    <div class="steps-number"><i class="icon-base ti tabler-carambola-filled selected icon-14px"></i>
                                    </div>
                                    <span>{{$steps->steps}}</span>
                                </div>
                            @endforeach
                        @endif

                    </div>
                </div>

                <!-- Reviews Content -->
                <div class="tab-content content-width" id="reviews">
                    <div class="review-header subtitle-2 fw_semibold">
                        {{ __('Review') }}
                        @if($total_reviews > 0)
                            ({{ $total_reviews }})
                        @endif
                    </div>
                    @if($all_reviews->count() > 0)
                        @foreach($all_reviews as $review)
                            <div class="review-parent">
                                <div class="review-card">
                                    <div class="review-avatar">
                                        {!! render_image_markup_by_attachment_id($review->reviewer?->image, '', 'full') !!}
                                    </div>
                                    <div class="card-text">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="review-name fs-reg fw_medium">
                                                @php
                                                    $fullName = trim(($review->reviewer->first_name ?? '') . ' ' . ($review->reviewer->last_name ?? ''));
                                                @endphp

                                                {{ $fullName !== '' ? $fullName : ($review->reviewer->username ?? '') }}
                                            </div>
                                            <div class="star fs-md d-flex gap-2">
                                                @if($review->rating > 0)
                                                    <span class="yellow-text"><i class="fas fa-star"></i></span>
                                                    <span class="black-text fw_semibold">{{$review->rating}}</span>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="time mt-1">
                                            <span>
                                                 {{ $review->created_at ? \Carbon\Carbon::parse($review->created_at)->format('d F, Y') : '' }}
                                            </span>
                                        </div>
                                        <div class="review-text-details mt-1">
                                            {{$review->message}}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        @endforeach
                        @if ($all_reviews->hasPages())
                            <div class="pagination-container"> {{-- changed wrapper class --}}
                                {{-- Previous Page --}}
                                @if ($all_reviews->onFirstPage())
                                    <a href="#" class="pagination-link disabled">&lt; {{__('Previous')}}</a>
                                @else
                                    <a href="{{ $all_reviews->previousPageUrl() }}#reviews" class="pagination-link">&lt; {{__('Previous')}}</a>
                                @endif

                                <ul class="pagination"> {{-- changed UL class --}}
                                    @foreach ($all_reviews->getUrlRange(1, $all_reviews->lastPage()) as $page => $url)
                                        <li class="pagination-item {{ $page == $all_reviews->currentPage() ? 'active' : '' }}">
                                            <a href="{{ $url }}#reviews" class="pagination-link" data-page="{{ $page }}">{{ $page }}</a>
                                        </li>
                                    @endforeach
                                </ul>

                                {{-- Next Page --}}
                                @if ($all_reviews->hasMorePages())
                                    <a href="{{ $all_reviews->nextPageUrl() }}#reviews" class="pagination-link">{{__('Next')}} &gt;</a>
                                @else
                                    <a href="#" class="pagination-link disabled">{{__('Next')}} ></a>
                                @endif
                            </div>
                        @endif

                    @else
                        <div class="alert alert-warning">
                            {{ __('There are currently no reviews for this service. Check back later for user feedback.') }}
                        </div>
                    @endif

                </div>
                <!-- Faq -->
                <div class="tab-content content-width" id="faqs">
                    <div class="faq-title title-3 fw_bold">{{__('FAQ Questions')}}</div>
                    @if($product->faqs->count()>0)
                        @foreach($product->faqs as $faq)
                            <div class="faq-item">
                                <div class="faq-question">
                                    <span class="subtitle-4 fw_medium">{{$faq->title}}</span>
                                    <span><i class="faq-icon ti tabler-plus icon-30px"></i></span>
                                </div>
                                <div class="faq-answer fs-reg fw_regular">
                                    {{$faq->description}}
                                </div>
                            </div>
                        @endforeach
                    @else
                        <div class="alert alert-warning">
                            {{ __('No frequently asked questions have been added for this service yet. Please check back later for updates.') }}
                        </div>

                    @endif

                </div>

            </div>
            <div class="col-lg-5">
                <div class="stiky is-stuck sticky-top d-none d-lg-block ">
                    <h1 class="product-title title-4 fw_semibold">{{$product->title}}</h1>
                    <div class="price-rating-row">
                        @php
                            $new_price=0;
                            if($product->discount_price>0){
                                $new_price=$product->discount_price;
                            }else{
                                $new_price=$product->price;
                            }
                        @endphp
                        <div class="product-price subtitle-1 fw_bold">{{ float_amount_with_currency_symbol($new_price) }}</div>
                        <div class="rating-container">
                            @if($product->rating > 0)
                                <span class="yellow-text"><i class="fas fa-star"></i></span>
                                <span class="black-text fw_semibold">{{$product->rating}}</span>
                            @endif
                            @if($total_reviews>0)
                                <span class="review-count">{{__('(')}}{{$total_reviews}} {{__('Reviews)')}}</span>
                            @endif
                        </div>
                    </div>
                    <div class="category-pera">
                        <p class="product-description fs-reg fw_regular">
                            {{$product->description}}
                        </p>

                    </div>

                    <div class="category-row mt-60">
                        <span class="category-label">{{__('Category:')}}</span>
                        <span class="category-value">{{$product->category->name}}</span>

                        <div class="quantity-cart-row">
                            @php
                                $userId = auth()->id();
                                $guestToken = session('guest_token');
                                $cartItemIds = \App\Models\UserCartItem::where(function($q) use($userId, $guestToken){
                                    if($userId){
                                        $q->where('user_id', $userId);
                                    } else {
                                        $q->where('guest_token', $guestToken);
                                    }
                                })->pluck('item_id')->toArray();

                            @endphp
                            <div class="add-btn-wraper">
                                <button type="button" class="cmn-btn primary-btn cart-btn" data-id="{{ $product->id }}" data-price="{{$new_price}}" {{ in_array($product->id, $cartItemIds) ? 'disabled' : '' }}>
                                    <i class="icon-base ti tabler-shopping-cart"></i>
                                    {{ in_array($product->id, $cartItemIds) ? __('Added') : __('Add') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
