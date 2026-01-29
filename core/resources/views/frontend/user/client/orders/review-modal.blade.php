<!-- Review Form Modal -->
<div class="modal fade" id="ReviewFormModal" tabindex="-1" aria-labelledby="ReviewFormLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p_20">
            <form id="review_form">
                @csrf
                <div class="text-center">
                    <h5 id="ReviewFormLabel">{{ __('Review Form') }}</h5>
                </div>

                <div class="mt_8" id="review_details">
                    <div class="card bg-light border-0 shadow-sm rounded-3">
                        <div class="card-body">
                            <input type="hidden" name="order_id" id="order_id_for_review">
                            <input type="hidden" name="service_id" id="service_id" >

                            <div class="star-rating mb-3">
                                <h6 class="mb-2">{{ __('Give Rating') }}</h6>
                                <div>
                                    @for ($i = 1; $i <= 5; $i++)
                                        <i class="fas fa-star star mt-2" data-value="{{ $i }}"></i>
                                    @endfor
                                </div>
                                <input type="hidden" name="rating" id="ratingInput" value="">
                            </div>

                            <div class="custom_input_wrapper mt-3">
                                <label for="review" class="custom-label mb-10">{{ __('Review') }}</label>
                                <textarea name="review" id="review" class="custom_input w-100 h-25" rows="5"
                                          placeholder="{{ __('Write your review here...') }}"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt_12 d-flex justify-content-end gap-2">
                    <button type="button" class="btn_gray" data-bs-dismiss="modal">{{ __('Close') }}</button>
                    <button type="button" id="send_review" class="btn_primary">{{ __('Submit') }}</button>
                </div>
            </form>
        </div>
    </div>
</div>
