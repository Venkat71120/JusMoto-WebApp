<!-- MAP MODAL -->
<div class="modal fade" id="mapModal" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">

            <div class="modal-header">
                <h5>{{__('Select Address From Map')}}</h5>
                <button class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">
                <!-- Optional Search Box -->
                <div class="d-flex justify-content-start mb-2 ">
                    <input id="pac-input" class="form-control w-50 ms-5 mt-3" type="text" placeholder="Search places...">
                </div>

                <div id="googleMap" style="height: 400px; width: 100%;"></div>
            </div>

            <div class="modal-footer">
                <button id="confirmMapAddress" class="btn btn-primary">
                    {{__('Use This Address')}}
                </button>
            </div>

        </div>
    </div>
</div>
