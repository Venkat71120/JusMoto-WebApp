<!-- SAVED ADDRESS MODAL -->
<div class="modal fade" id="savedAddressModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <div class="modal-header">
                <h5>{{__('Select Address')}}</h5>
                <button class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <ul class="list-group">
                    @foreach($user_location as $loc)
                        <li class="list-group-item d-flex align-items-center choose-saved-address"
                            data-id="{{ $loc->id }}"
                            data-lat="{{ $loc->latitude }}"
                            data-lng="{{ $loc->longitude }}"
                            data-address="{{ $loc->address }}"
                            style="cursor:pointer; border:none; padding:10px 15px;">

                            <div class="me-3">
                                @if($loc->type === 0)
                                    <i class="icon-base ti tabler-home fs-4"></i>
                                @else
                                    <i class="icon-base ti tabler-building-skyscraper fs-4"></i>
                                @endif
                            </div>
                            <span>{{ $loc->address }}</span>
                        </li>
                    @endforeach
                    <li class="list-group-item d-flex align-items-center"
                        style="cursor:pointer; border:none; padding:10px 15px;"
                        id="addAddressBtn">

                        <div class="me-3">
                            <i class="icon-base ti tabler-plus fs-4 text-primary"></i>
                        </div>
                        <span class="text-primary">{{ __('Add Address') }}</span>
                    </li>


                </ul>

            </div>


        </div>
    </div>
</div>
