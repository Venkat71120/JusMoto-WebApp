<!--Status Modal -->
<div class="modal fade" id="OrderStaffAddModal" tabindex="-1" role="dialog"
     aria-labelledby="editModal"
     aria-hidden="true">
    <form action="{{ route('admin.order.add-staff') }}" method="post">
        @csrf
        <input type="hidden" name="id" id="order_id">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editModal">{{ __('Change Order Staff') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="staff_id">{{ __('Select Staff') }}</label>
                        <input type="hidden" name="order_id" id="order_id1" value="{{ $order->id }}" />
                        <select name="staff_id" id="staff_id">
                            <option value="">{{__('Select Staff')}}</option>
                            @foreach($staffs as $staff)
                                <option value="{{ $staff->id }}">{{ $staff->first_name." ".$staff->second_name }}</option>
                            @endforeach
                        </select>
                       
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ __('Close') }}</button>
                    <button type="submit" class="btn btn-primary">{{ __('Save changes') }}</button>
                </div>
            </div>
        </div>
    </form>
</div>
