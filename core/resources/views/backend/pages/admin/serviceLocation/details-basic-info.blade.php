<div class="product__details__single">
    <div class="editProduct">
        <div class="row g-4">
             <!--step two -->
             <div class="col-xxl-8 col-lg-8">
                <div class="editProduct__contents">
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('Outlet Name:') }}</strong> {{ $outlet?->name }}</span>
                    </div>
                </div>
                  
            </div>
            <div class="col-xxl-8 col-lg-8">
                <div class="editProduct__contents">
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('Address:') }}</strong> {{ $outlet?->address }}</span>
                    </div>
                </div>
                  
            </div>
         
            <div class="col-xxl-8 col-lg-8">
                <div class="editProduct__contents">
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('State:') }}</strong>{{ $outlet?->state?->state }}</span>
                    </div>
                </div>
                
            </div>
            <div class="col-xxl-8 col-lg-8">
                <div class="editProduct__contents">
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('City:') }}</strong>{{ $outlet?->city?->city }}</span>
                    </div>
                </div>
                
            </div>
            <div class="col-xxl-8 col-lg-8">
                <div class="editProduct__contents">
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('Area:') }}</strong>{{ $outlet?->area?->area }}</span>
                    </div>
                </div>
                
            </div>
            <div class="col-xxl-8 col-lg-8">
                <div class="editProduct__contents">
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('Longitude:') }}</strong>{{ $outlet?->longitude }}</span>
                    </div>
                </div>
                
            </div>
            <div class="col-xxl-8 col-lg-8">
                <div class="editProduct__contents">
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('Latitude:') }}</strong>{{ $outlet?->latitude }}</span>
                    </div>
                </div>
                
            </div>
            <div class="col-xxl-8 col-lg-8">
                <div class="editProduct__contents">
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('Zip Code:') }}</strong>{{ $outlet?->post_code }}</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
