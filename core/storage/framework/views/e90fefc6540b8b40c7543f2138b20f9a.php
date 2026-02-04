
<div class="modal fade w-100" id="paymentGatewayModal" tabindex="-1" aria-labelledby="paymentGatewayModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <form id="depositForm" action="<?php echo e(route('client.wallet.deposit')); ?>" method="post" enctype="multipart/form-data">
            <?php echo csrf_field(); ?>
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="paymentGatewayModalLabel"><?php echo e(__('Add Money to Your Wallet')); ?></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card p_6 br_8 border-0 shadow-sm bg-light">
                        <!-- Amount Input Section -->
                        <div class="card border-0 shadow-sm p-4 d-flex flex-md-row flex-column align-items-center justify-content-between">
                            <div class="form-group w-100">
                                <label for="amount" class="fw-bold"><?php echo e(__('Amount to Deposit')); ?></label>
                                <input type="number" name="amount" id="amount"
                                       class="form-control mt-2"
                                       placeholder="<?php echo e(__('Enter amount')); ?>"
                                       required step="0.01" min="0"
                                       value="<?php echo e(old('amount')); ?>">

                            </div>
                        </div>
                        <div class="card border-0 shadow-sm p-4 mt-2">
                            <div class="confirm-payment payment-border mt-1">
                                <div class="single-checkbox">
                                    <div class="checkbox-inlines ms-0">
                                        <label class="checkbox-label" for="check2">
                                            <?php echo \App\Helpers\PaymentGatewayRenderHelper::renderPaymentGatewayForForm(['cash_on_delivery']); ?>

                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="amount_details p-2">
                                <div class="customer__account__details">
                                    <div class="customer__account__details__item">
                                        <div class="customer__account__details__item__flex d-flex justify-content-between gap-2">
                                            <strong><?php echo e(__('Total Amount:')); ?></strong>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <div class="btn-wrapper d-flex align-items-center gap-2">
                        <button type="button" class="btn_gray" data-bs-dismiss="modal"><?php echo e(__('Close')); ?></button>
                        <button type="submit" class="btn_primary">
                            <i class="fas fa-wallet me-1"></i> <?php echo e(__('Deposit')); ?>

                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\Modules/Wallet\resources/views/frontend/transactions/Deposit/deposit-modal.blade.php ENDPATH**/ ?>