<div class="modal fade" id="outletMapModal" tabindex="-1">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header mt-2 mb-3">
                <h5>{{__('Select Outlet Location')}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-0" style="height: 500px;">
                <div class="row g-0 h-100">
                    <div class="col-md-4 p-3" style="background:#f8f9fa; overflow-y:auto;">

                        <select id="modalOutletSelect" class="form-controls w-100 mb-2">
                            @foreach($outlet_locations as $outlet)
                                <option value="{{ $outlet->id }}" data-lat="{{ $outlet->latitude }}" data-lng="{{ $outlet->longitude }}">
                                    {{ $outlet->name }}
                                </option>
                            @endforeach
                        </select>
                        <button class="cmn-btn md-btn black-btn w-100" id="focusOutletBtn">{{__('Show on Map')}}</button>
                    </div>

                    <!-- Map -->
                    <div class="col-md-8 h-100">
                        <div id="map" style="width:100%; height:100%;"></div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>
