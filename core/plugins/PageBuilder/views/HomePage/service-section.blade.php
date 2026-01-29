<section class="explore-servies pat-120 pab-120">
    <div class="custom-container">
        <div class="title-wraper-part d-flex flex-wrap gap-3 justify-between mb-60">
            <h2 class="title-2 fw_semibold">
               {{$title}}
            </h2>
            <div class="btn-wraper">
                <a href="{{$button_link_one}}" class="cmn-btn primary-btn">{{$button_title_one}}</a>
            </div>
        </div>
        <div class="service-list-wraper">
            <div class="row g-4">
                @if($popular_services->count()>0)
                    @foreach($popular_services as $service)
                         <div class="col-12 col-sm-6 col-lg-4 col-lg-4">
                    <div class="service-card">
                        <div class="top-part">
                            <div class="img-wraper">
                                <a href="{{ route('frontend.service.details', $service->slug) }}">
                                    {!! render_image_markup_by_attachment_id($service->image,'','thumb') !!}
                                </a>

                                <span class="fvt-icon style2 favorite-btn {{ auth()->user()?->favoriteItems?->contains('item_id', $service->id) ? 'selected' : '' }}" data-id="{{ $service->id }}">
                                    <i class="icon-base ti tabler-heart-filled"></i>
                                </span>
                            </div>
                        </div>
                        <div class="bottom-part">
                            <div class="title-wraper">
                                <a href="{{ route('frontend.service.details', $service->slug) }}">
                                    <h6 class="fw_semibold subtitle-4 twoline">
                                        {{$service->title}}
                                    </h6>
                                </a>
                                <div class="star fs-md d-flex gap-2">
                                    @if($service->rating > 0)
                                        <span class="yellow-text"><i class="fas fa-star"></i></span>
                                        <span class="black-text fw_semibold">{{$service->rating}}</span>
                                    @endif

                                </div>
                            </div>
                            <div class="footer-part">
                                <div class="price-wraper">
                                    @php
                                        $new_price=0;
                                        if($service->discount_price>0){
                                            $new_price=$service->discount_price;
                                        }else{
                                            $new_price=$service->price;
                                        }
                                    @endphp
                                    <span class="price fs-lg fw_semibold subtitle-1 red-text">{{ float_amount_with_currency_symbol($new_price) }}</span>
                                    <span class="old-price fw_medium fs-md">{{ float_amount_with_currency_symbol($service->price) }}</span>
                                </div>
                                <div class="add-btn-wraper">
                                      <button type="button" class="cmn-btn sm-btn black-btn cart-btn {{ in_array($service->id, $cartItemIds) ? 'added' : '' }}" data-id="{{ $service->id }}" data-price="{{$new_price}}" {{ in_array($service->id, $cartItemIds) ? 'disabled' : '' }}>
                                        <i class="icon-base ti tabler-shopping-cart"></i>
                                          {{ in_array($service->id, $cartItemIds) ? __('Added') : __('Add') }}
                                      </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    @endforeach
                @endif
            </div>
        </div>
    </div>
</section>
