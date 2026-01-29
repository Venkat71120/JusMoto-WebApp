<div class="product__details__single">
    <div class="editProduct">
        <div class="row g-4">
             <!--step two -->
             <div class="col-xxl-8 col-lg-8">
                <div class="editProduct__contents">
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('Car Name:') }}</strong> {{ $car->name }}</span>
                    </div>
                </div>
                <div class="col-xxl-4 col-lg-2">
                    <div class="editProduct__contents__category mb-2 mt-2">
                        <strong class="editProduct__contents__sku__para">{{ __('Car Image:') }}</strong>
                    </div>
                    <div class="editProduct__thumb">
                        <div class="editProduct__thumb__main">
                            {!! render_image_markup_by_attachment_id($car->image, '', 'thumb') !!}
                        </div>
                    </div>
                </div>
                  
            </div>
            <div class="col-xxl-8 col-lg-8">
                <div class="editProduct__contents">
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('Brand:') }}</strong> {{ $car->brand?->name }}</span>
                    </div>
                </div>
                  
            </div>
        </div>    
          
            <div class="col-xxl-8 col-lg-8">
                <div class="editProduct__contents">
                    <div class="editProduct__contents__category mt-3">
                        <span class="editProduct__contents__sku__para"><strong>{{ __('Variants:') }}</strong></span>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>{{ __('Engine Name') }}</th>
                                        <th>{{ __('Fuel Name') }}</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($car->varient as $varient)
                                        <tr>
                                            <td>{{ $varient->engineType?->name }}</td>
                                            <td>{{ $varient->fualType?->name }}</td>

                                        </tr>
                                    
                                    @endforeach
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
