@php
    $img_tag = render_image_markup_by_attachment_id($background_image,'','thumb');
    //extract src only
    preg_match('/src="([^"]+)"/', $img_tag, $matches);
   $background_image_url = $matches[1];
@endphp
<section class="related-product pat-120 pab-120 bg-image-use"
         style="background-image: url('{{$background_image_url}}');">
    <div class="custom-container">
        <div class="title-wraper-part d-flex flex-wrap gap-3 justify-between mb-60">
            <h2 class="title-2 fw_semibold">
                {{$title}}
            </h2>
        </div>
        <div class="related-product-list-wraper">
            <div class="row g-4">
                @if($popular_products->count()>0)
                    @foreach($popular_products as $product)
                        <div class="col-lg-3 col-sm-6 col-md-6 col-12">
                    <div class="products-card">
                        <div class="top-part">
                            <div class="img-wraper">
                                <a href="{{ route('frontend.product.details', $product->slug) }}">
                                    {!! render_image_markup_by_attachment_id($product->image,'','thumb') !!}
                                </a>
                                <span class="fvt-icon style2 favorite-btn {{ auth()->user()?->favoriteItems?->contains('item_id', $product->id) ? 'selected' : '' }}" data-id="{{ $product->id }}">
                                    <i class="icon-base ti tabler-heart-filled"></i>
                                </span>
                            </div>
                        </div>
                        <div class="bottom-part">
                            <div class="title-wraper">
                                <a href="{{ route('frontend.product.details', $product->slug) }}">
                                    <h6 class="fw_semibold subtitle-4 twoline">
                                        {{$product->title}}
                                    </h6>
                                </a>
                                <div class="star fs-md d-flex gap-2">
                                    @if($product->rating > 0)
                                        <span class="yellow-text"><i class="fas fa-star"></i></span>
                                        <span class="black-text fw_semibold">{{$product->rating}}</span>
                                    @else
                                        <div class="pb-4"></div>
                                    @endif
                                </div>
                            </div>
                            <div class="footer-part">
                                <div class="price-wraper">
                                    @php
                                        $new_price=0;
                                        if($product->discount_price>0){
                                            $new_price=$product->discount_price;
                                        }else{
                                            $new_price=$product->price;
                                        }
                                    @endphp
                                    <span class="price fs-lg fw_semibold subtitle-1 red-text">{{ float_amount_with_currency_symbol($new_price) }}</span>
                                    <span class="old-price fw_medium fs-md">{{ float_amount_with_currency_symbol($product->price) }}</span>
                                </div>
                                <div class="add-btn-wraper">
                                    <button type="button" class="cmn-btn sm-btn black-btn cart-btn {{ in_array($product->id, $cartItemIds) ? 'added' : '' }}" data-id="{{ $product->id }}" data-price="{{$new_price}}" {{ in_array($product->id, $cartItemIds) ? 'disabled' : '' }}>
                                        <i class="icon-base ti tabler-shopping-cart"></i>
                                        {{ in_array($product->id, $cartItemIds) ? __('Added') : __('Add') }}
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
