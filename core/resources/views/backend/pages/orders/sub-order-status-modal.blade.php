<!-- Status Modal -->
<div class="modal fade" id="OrderStatusChangeModal" tabindex="-1" role="dialog" aria-labelledby="editModal" aria-hidden="true">
    <form action="{{ route('admin.order.status.change') }}" method="post">
        @csrf
        <input type="hidden" name="id" id="order_id">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="las la-exchange-alt"></i>
                        {{ __('Change Order Status') }}
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="las la-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="status_id" class="form-label">{{ __('Select Status') }}</label>
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
                    <button type="button" class="btn-secondary" data-bs-dismiss="modal">{{ __('Close') }}</button>
                    <button type="submit" class="btn-primary">{{ __('Save changes') }}</button>
                </div>
            </div>
        </div>
    </form>
</div>

<style>
/* ===== CLEAN ORDER STATUS MODAL ===== */

:root {
    --white: #ffffff;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --red: #e31b23;
    --red-light: #fee2e2;
    --red-dark: #b91c1c;
    --radius: 8px;
    --radius-lg: 12px;
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --transition: all 0.2s ease;
}

/* Modal Content */
.modal-content {
    border: none;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    overflow: hidden;
}

/* Modal Header */
.modal-header {
    padding: 16px 20px;
    background: var(--gray-50);
    border-bottom: 1px solid var(--gray-200);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.modal-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--gray-800);
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

.modal-title i {
    color: var(--red);
    font-size: 20px;
}

/* Close Button */
.btn-close {
    background: transparent;
    border: none;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    color: var(--gray-500);
    cursor: pointer;
    transition: var(--transition);
    font-size: 18px;
}

.btn-close:hover {
    background: var(--gray-200);
    color: var(--gray-700);
}

/* Modal Body */
.modal-body {
    padding: 24px;
}

/* Form Group */
.form-group {
    margin-bottom: 0;
}

.form-label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: var(--gray-700);
    margin-bottom: 8px;
}

.form-control {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid var(--gray-300);
    border-radius: var(--radius);
    font-size: 14px;
    color: var(--gray-800);
    background: var(--white);
    transition: var(--transition);
    cursor: pointer;
}

.form-control:focus {
    outline: none;
    border-color: var(--red);
    box-shadow: 0 0 0 3px var(--red-light);
}

/* Modal Footer */
.modal-footer {
    padding: 16px 20px;
    border-top: 1px solid var(--gray-200);
    background: var(--gray-50);
    display: flex;
    justify-content: flex-end;
    gap: 12px;
}

/* Buttons */
.btn-secondary {
    background: var(--white);
    border: 1px solid var(--gray-300);
    padding: 10px 24px;
    border-radius: 40px;
    color: var(--gray-700);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
}

.btn-secondary:hover {
    background: var(--gray-100);
    border-color: var(--gray-400);
}

.btn-primary {
    background: var(--red);
    border: none;
    padding: 10px 24px;
    border-radius: 40px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
}

.btn-primary:hover {
    background: var(--red-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

/* Responsive */
@media (max-width: 768px) {
    .modal-dialog {
        margin: 16px;
    }
    
    .modal-body {
        padding: 20px;
    }
    
    .modal-footer {
        flex-direction: column;
    }
    
    .btn-secondary,
    .btn-primary {
        width: 100%;
    }
}

/* Animation */
.modal.fade .modal-dialog {
    transition: transform 0.3s ease-out;
    transform: scale(0.95);
}

.modal.show .modal-dialog {
    transform: scale(1);
}
</style>