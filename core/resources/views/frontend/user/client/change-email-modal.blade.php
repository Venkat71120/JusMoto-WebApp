<div class="modal fade" id="changeEmailModal" tabindex="-1" aria-labelledby="changeEmailLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-3">
            <div class="modal-header border-0">
                <h5 class="modal-title" id="changeEmailLabel">{{ __('Change Email') }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>{{ __('A verification will be sent to your new email.') }}</p>
                <form action="{{ route('settings.update.profile') }}" method="POST">
                    @csrf
                    <div class="mb-3">
                        <label for="new_email" class="form-label">{{ __('Email') }}</label>
                        <input type="email" name="email" id="new_email" class="form-control" required>
                    </div>
                    <button type="submit" class="btn_primary w-100">{{ __('Send Verification Code') }}</button>
                </form>
            </div>
        </div>
    </div>
</div>
