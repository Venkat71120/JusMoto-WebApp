<!-- Cancel form -->
<div class="modal fade" id="CancelFormModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p_20">
            <div class="d-flex align-items-center justify-content-between">
            </div>
            <form action="{{route('order.cancel',[$order->id])}}" method="Post">
                @csrf
                <div class="text-center">
                    <h5>{{ __('Cancel Order') }}</h5>
                </div>

                <div class="mt_8" id="location_details">
                    <div class="card bg-light border-0 shadow-sm rounded-3">
                        <div class="card-body">
                            <h6 class="card-title mb-3">{{ __('Cancellation Policy') }}</h6>
                            <p class="card-text">
                                {{ $cancellation_policy->description }}
                            </p>
                        </div>
                    </div>

                    @if($order->payment_status == 1)

                        <div class="custom_input_wrapper mt-3">
                            <label for="cancel_reason" class="custom-label mb-10">{{ __('Reason') }}</label>
                            <textarea name="cancel_reason" id="cancel_reason" class="custom_input w-100 h-25" rows="5" placeholder="{{ __('Write your reason here...') }}"></textarea>
                        </div>
                    @endif
                </div>
                <div class="mt_12 d-flex justify-content-end gap-2">
                    <button type="button"  class="btn_gray" data-bs-dismiss="modal">{{ __('Close') }}</button>
                    <button type="submit" id="send_cancel_request" class="btn_primary">{{ __('Confirm') }}</button>
                </div>
            </form>
        </div>
    </div>
</div>
