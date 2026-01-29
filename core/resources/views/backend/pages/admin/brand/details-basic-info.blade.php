<div class="product__details__single">
    <div class="editProduct">
        <div class="row g-4">
             <!--step two -->
             <div class="col-xxl-8 col-lg-8">
                <div class="editProduct__contents">
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('Brand Name:') }}</strong> {{ $brand->name }}</span>
                    </div>
                  
            </div>
            <div class="col-xxl-4 col-lg-4">
                <div class="editProduct__contents__category mb-2 mt-2">
                    <strong class="editProduct__contents__sku__para">{{ __('Brand Image:') }}</strong>
                </div>
                <div class="editProduct__thumb">
                    <div class="editProduct__thumb__main">
                        {!! render_image_markup_by_attachment_id($brand->image, '', 'thumb') !!}
                    </div>
                

           

        </div>
    </div>
</div>
