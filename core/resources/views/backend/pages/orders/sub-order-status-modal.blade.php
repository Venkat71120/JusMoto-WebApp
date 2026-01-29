<!--Status Modal -->
<div class="modal fade" id="OrderStatusChangeModal" tabindex="-1" role="dialog"
     aria-labelledby="editModal"
     aria-hidden="true">
    <form action="{{ route('admin.order.status.change') }}" method="post">
        @csrf
        <input type="hidden" name="id" id="order_id">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editModal">{{ __('Change Order Status') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="status_id">{{ __('Select Status') }}</label>
                        <select name="status_id" id="status_id" class="form-control">
                            <option value="">{{ __('Select Status') }}</option>
                            <option value="0">{{ __('Pending') }}</option>
                            <option value="1">{{ __('Accepted') }}</option>
                            <option value="2">{{ __('Completed') }}</option>
                            <option value="4">{{ __('Cancel') }}</option>
                            <option value="5">{{ __('Declined') }}</option>
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
