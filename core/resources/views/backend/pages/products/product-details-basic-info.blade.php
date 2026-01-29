<div class="product__details__single">
    <div class="editProduct">
        <div class="row g-4">
            <div class="col-xxl-4 col-lg-4">
                <div class="editProduct__contents__category mb-2">
                    <strong class="editProduct__contents__sku__para">{{ __('Product Image:') }}</strong>
                </div>
                <div class="editProduct__thumb">
                    <div class="editProduct__thumb__main">
                        {!! render_image_markup_by_attachment_id($product->image, '', 'thumb') !!}
                    </div>
                </div>
                <div class="editProduct__contents__category mt-3">
                    <strong class="editProduct__contents__sku__para">{{ __('Gallery Images:') }}</strong>
                </div>
                <div class="dashboard__rates__card__thumb">
                    {!! render_gallery_image_attachment_preview($product->gallery_images ?? '') !!}
                </div>

                <div class="customer__details__author__item__header mt-3">
                    <div class="customer__details__author__item__header__flex">
                        <div class="customer__details__author__item__header__left">
                            <h4 class="customer__details__author__item__title">
                                @if($product->admin_id != null && $product->admin_id != 0)
                                {{ __('Admin Info:') }}
                                @else
                                   
                                @endif
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="customer__details__author__item__inner border_top_1 top_15">
                    <div class="customer__account__details">
                        @if($product->admin_id != null && $product->admin_id != 0)
                           <!-- Admin Info -->
                           <div class="customer__account__details__item">
                            <div class="customer__account__details__item__flex">
                                <strong></strong>
                                <a href="{{optional($product->admin)->username}}" target="_blank">
                                    <div class="customer__details__author__thumb">
                                        {!! render_image_markup_by_attachment_id($product->admin->image, '', 'thumb') !!}
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="customer__account__details__item">
                            <div class="customer__account__details__item__flex">
                                <strong>{{ __('Name') }}</strong>
                                <a href="{{optional($product->admin)->username}}" target="_blank">
                                    <span>{{ optional($product->admin)->name }}</span>
                                </a>
                            </div>
                        </div>
                        <div class="customer__account__details__item">
                            <div class="customer__account__details__item__flex">
                                <strong>{{ __('Email') }}</strong>
                                <span>{{ optional($product->admin)->email }}</span>
                            </div>
                        </div>
                        <div class="customer__account__details__item">
                            <div class="customer__account__details__item__flex">
                                <strong>{{ __('Phone') }}</strong>
                                <span>{{ optional($product->admin)->phone }}</span>
                            </div>
                        </div>
                        @else
                           
                        @endif
                    </div>
                </div>
            </div>

            <!--step two -->
            <div class="col-xxl-8 col-lg-8">
                <div class="editProduct__contents">
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('product Title:') }}</strong> {{ $product->title }}</span>
                    </div>
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para">
                            <strong>{{ __('Price:') }}</strong>
                            @if($product->discount_price > 0)
                                <span class="discount-price">
                                    <del> {{ float_amount_with_currency_symbol($product->price) }} </del>
                               </span>
                            @else
                                {{ float_amount_with_currency_symbol($product->price) }}
                            @endif
                        </span>
                    </div>
                    @if($product->discount_price > 0)
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('Discount Price:') }}</strong>
                            {{ float_amount_with_currency_symbol($product->discount_price) }}
                        </span>
                    </div>
                    @endif
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('Category:') }}</strong> {{ optional($product->category)->name }}</span>
                    </div>
                    <div class="editProduct__contents__brand mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('View Count:') }}</strong> {{ $product->view }}</span>
                    </div>
                    <div class="editProduct__contents__brand mt-3">
                            <span class="editProduct__contents__sku__para"><strong>{{ __('Status:') }}</strong>
                                @if($product->status==1)
                                    <span class="status_btn completed">{{__('Approved')}}</span>
                                @else
                                    <span class="status_btn cancelled">{{__('Pending')}}</span>
                                @endif
                            </span>
                    </div>
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('Is Featured:') }}</strong></span>
                        <input class="effectBorder" type="checkbox" @if(!empty($product->is_featured)) checked @endif>
                        <span class="checkmark"></span>
                    </div>
                    <div class="editProduct__contents__brand mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('State:') }}</strong> {{ optional($product->state)->state }}</span>
                    </div>
                    <div class="editProduct__contents__brand mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('City:') }}</strong> {{ optional($product->city)->city }}</span>
                    </div>
                    <div class="product__details__description mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('Description:') }}</strong></span>
                        <p class="product__details__para">{!! $product->description !!}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
