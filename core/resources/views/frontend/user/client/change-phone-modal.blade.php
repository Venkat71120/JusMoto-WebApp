<div class="modal fade" id="changePhoneModal" tabindex="-1" aria-labelledby="changePhoneLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-3">
            <div class="modal-header border-0">
                <h5 class="modal-title" id="changePhoneLabel">{{ __('Change Phone') }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>{{ __('A verification code will be sent to your new phone number.') }}</p>
                <form action="{{ route('settings.update.profile') }}" method="POST">
                    @csrf
                    <div class="mb-3">
                        <label for="new_phone" class="form-label">{{ __('Phone') }}</label>
                        <input type="text" name="phone" id="new_phone" class="form-control" placeholder="{{__('+01911111111')}}" required>
                    </div>
                    <button type="submit" class="btn_primary w-100">{{ __('Send OTP') }}</button>
                </form>
            </div>
        </div>
    </div>
</div>
