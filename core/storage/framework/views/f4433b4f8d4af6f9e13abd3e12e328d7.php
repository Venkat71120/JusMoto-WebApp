<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('All Transactions')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <div class="col-lg-12 col-ml-12 padding-bottom-30">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="margin-top-40"></div>
                        <?php if (isset($component)) { $__componentOriginalae73592a9186217aa45553528a0de34b = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalae73592a9186217aa45553528a0de34b = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.msg.error','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('msg.error'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalae73592a9186217aa45553528a0de34b)): ?>
<?php $attributes = $__attributesOriginalae73592a9186217aa45553528a0de34b; ?>
<?php unset($__attributesOriginalae73592a9186217aa45553528a0de34b); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalae73592a9186217aa45553528a0de34b)): ?>
<?php $component = $__componentOriginalae73592a9186217aa45553528a0de34b; ?>
<?php unset($__componentOriginalae73592a9186217aa45553528a0de34b); ?>
<?php endif; ?>
                        <?php if (isset($component)) { $__componentOriginal80e305c74df3fdc49e64220f2b928bf3 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal80e305c74df3fdc49e64220f2b928bf3 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.msg.flash-msg','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('msg.flash-msg'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal80e305c74df3fdc49e64220f2b928bf3)): ?>
<?php $attributes = $__attributesOriginal80e305c74df3fdc49e64220f2b928bf3; ?>
<?php unset($__attributesOriginal80e305c74df3fdc49e64220f2b928bf3); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal80e305c74df3fdc49e64220f2b928bf3)): ?>
<?php $component = $__componentOriginal80e305c74df3fdc49e64220f2b928bf3; ?>
<?php unset($__componentOriginal80e305c74df3fdc49e64220f2b928bf3); ?>
<?php endif; ?>
                        <?php if (isset($component)) { $__componentOriginalc9692a4e4f266b622edf3104a05a2ca4 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalc9692a4e4f266b622edf3104a05a2ca4 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.msg.response-message','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('msg.response-message'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalc9692a4e4f266b622edf3104a05a2ca4)): ?>
<?php $attributes = $__attributesOriginalc9692a4e4f266b622edf3104a05a2ca4; ?>
<?php unset($__attributesOriginalc9692a4e4f266b622edf3104a05a2ca4); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc9692a4e4f266b622edf3104a05a2ca4)): ?>
<?php $component = $__componentOriginalc9692a4e4f266b622edf3104a05a2ca4; ?>
<?php unset($__componentOriginalc9692a4e4f266b622edf3104a05a2ca4); ?>
<?php endif; ?>
                    </div>
                    <!-- Wallet Balance Card-->
                    <div class="col-lg-12 mb-4">
                        <div class="card border-0 shadow-sm p-4 d-flex flex-md-row flex-column align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <div class="me-3">
                                    <div class="bg-light d-flex align-items-center justify-content-center rounded-circle" style="width: 56px; height: 56px;">
                                        <!-- Wallet SVG (56x56) -->
                                        <svg width="36" height="36" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                            <title>Wallet</title>
                                            <rect x="0" y="0" width="52" height="52" rx="8" fill="#FF6B2C" fill-opacity="0.08"/>
                                            <path d="M12 18C12 16.8954 12.8954 16 14 16H36C37.1046 16 38 16.8954 38 18V20H14C12.8954 20 12 20.8954 12 22V34C12 35.1046 12.8954 36 14 36H38V38C38 39.1046 37.1046 40 36 40H14C11.7909 40 10 38.2091 10 36V18Z"
                                                  stroke="#FF6B2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                            <path d="M38 22H42C43.1046 22 44 22.8954 44 24V32C44 33.1046 43.1046 34 42 34H38V22Z"
                                                  stroke="#FF6B2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                            <circle cx="40" cy="28" r="1.5" fill="#FF6B2C"/>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h6 class="text-muted mb-1"><?php echo e(__('Wallet Balance')); ?></h6>
                                    <h4 class="fw-semibold mb-0"><?php echo e(float_amount_with_currency_symbol($totals['wallet_balance'])); ?></h4>
                                </div>
                            </div>
                            <div class="mt-3 mt-md-0">
                                <a href="javascript:void(0)"
                                   class="btn_primary text-decoration-none"
                                   data-bs-toggle="modal"
                                   data-bs-target="#paymentGatewayModal">
                                    <?php echo e(__('Deposit Now')); ?>

                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 mt-2">
                        <!-- Order List Section -->
                        <h4 class="section-header "><?php echo e(__('Transactions')); ?></h4>
                        <!-- Filters -->
                        <form method="GET" class="row mb-4">
                            <div class="col-md-3">
                                <select name="transaction_type" class="form-select">
                                    <option value=""><?php echo e(__('All Types')); ?></option>
                                    <?php $__currentLoopData = $transactionTypes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $type): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <option value="<?php echo e($type); ?>" <?php echo e(request('transaction_type') == $type ? 'selected' : ''); ?>>
                                            <?php echo e(ucfirst($type)); ?>

                                        </option>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <select name="status" class="form-select">
                                    <option value=""><?php echo e(__('All Status')); ?></option>
                                    <?php $__currentLoopData = $statuses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $status): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <option value="<?php echo e($status); ?>" <?php echo e(request('status') == $status ? 'selected' : ''); ?>>
                                            <?php echo e(ucfirst($status)); ?>

                                        </option>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <input type="date" name="date" class="form-control" value="<?php echo e(request('date')); ?>" placeholder="<?php echo e(__('Date')); ?>">
                            </div>
                            <div class="col-md-1 d-flex justify-content-between gap-1">
                                <button type="submit" class="btn_primary btn-sm py-1 px-3"><?php echo e(__('Filter')); ?></button>
                                <a href="<?php echo e(route('client.wallet.transactions')); ?>" class="btn btn-secondary">Reset</a>
                            </div>
                        </form>
                        <div class="table_wrapper ">
                            <?php if($transactions->count() > 0): ?>
                                <table class="data-table table w-100 br_4 overflow-hidden">
                                    <colgroup>
                                        <col data-dt-column="1" style="width: 235px;">
                                        <col data-dt-column="2" style="width: 371px;">
                                        <col data-dt-column="3" style="width: 179px;">
                                        <col data-dt-column="4" style="width: 259px;">
                                        <col data-dt-column="5" style="width: 177px;">
                                        <col data-dt-column="6" style="width: 115px;">
                                    </colgroup>
                                    <thead class="table_head">
                                    <tr>
                                        <th><?php echo e(__('ID')); ?></th>
                                        <th><?php echo e(__('Type')); ?></th>
                                        <th><?php echo e(__('Amount')); ?></th>
                                        <th><?php echo e(__('Status')); ?></th>
                                        <th><?php echo e(__('Reference')); ?></th>
                                        <th><?php echo e(__('Date')); ?></th>
                                        <th><?php echo e(__('Actions')); ?></th>
                                    </tr>
                                    </thead>
                                    <tbody class="table_body">
                                    <?php $__currentLoopData = $transactions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $transaction): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <tr>
                                            <td>#<?php echo e($transaction->id); ?></td>
                                            <td>
                                                <span class="text-success"><?php echo e(ucfirst($transaction->transaction_type)); ?></span>
                                            </td>
                                            <td>
                                                <?php echo e(float_amount_with_currency_symbol($transaction->amount)); ?>

                                            </td>
                                            <?php if($transaction->status === 'completed'): ?>
                                                <td class="table_payment <?php echo e('complete'); ?>">
                                                    <?php echo e(ucfirst($transaction->status)); ?>

                                                </td>
                                            <?php elseif($transaction->status === 'pending'): ?>
                                                <td class="table_payment <?php echo e('pending'); ?>">
                                                    <?php echo e(ucfirst($transaction->status)); ?>

                                                </td>
                                            <?php else: ?>
                                                <td class="table_payment <?php echo e('failed'); ?>">
                                                    <?php echo e(ucfirst($transaction->status)); ?>

                                                </td>
                                            <?php endif; ?>
                                            <td><?php echo e($transaction->reference_type ? ucwords(str_replace('_', ' ', $transaction->reference_type)) : 'N/A'); ?></td>
                                            <td><?php echo e($transaction->created_at->format('Y-m-d H:i')); ?></td>
                                            <td class="action_icon">
                                                <a href="<?php echo e(route('client.wallet.transactions.show', $transaction->id)); ?>" title="View Details">
                                                    <i class="icon-base ti tabler-eye"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    </tbody>
                                </table>
                                <!-- Pagination -->
                                <div class="pagination mt-3" id="tablePagination">
                                    <?php if (isset($component)) { $__componentOriginal5e64ee16cb42f0815c0860d815d8c40e = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal5e64ee16cb42f0815c0860d815d8c40e = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.dashboard-pagination.pagination','data' => ['paginator' => $transactions,'filters' => request()->query()]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('frontend.dashboard-pagination.pagination'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['paginator' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($transactions),'filters' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(request()->query())]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal5e64ee16cb42f0815c0860d815d8c40e)): ?>
<?php $attributes = $__attributesOriginal5e64ee16cb42f0815c0860d815d8c40e; ?>
<?php unset($__attributesOriginal5e64ee16cb42f0815c0860d815d8c40e); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal5e64ee16cb42f0815c0860d815d8c40e)): ?>
<?php $component = $__componentOriginal5e64ee16cb42f0815c0860d815d8c40e; ?>
<?php unset($__componentOriginal5e64ee16cb42f0815c0860d815d8c40e); ?>
<?php endif; ?>
                                </div>
                            <?php else: ?>
                                <div class="alert alert-info text-center p-4">
                                    <i class="fa-solid fa-info-circle fa-2x mb-3"></i>
                                    <p class="mb-0"><?php echo e(__('No Transactions found.')); ?></p>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php echo $__env->make('wallet::frontend.transactions.Deposit.deposit-modal', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
    <?php echo $__env->make('wallet::frontend.transactions.Deposit.payment-gateway-js', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    <script>
        $(document).ready(function () {
            // Listen for input change on amount field
            $('#amount').on('input', function () {
                let amount = parseFloat($(this).val());
                // Fallback to 0 if invalid or empty
                if (isNaN(amount) || amount < 0) {
                    amount = 0;
                }
                let symbol = "<?php echo e(site_currency_symbol('')); ?>";
                amount = symbol + amount.toFixed(2);
                // Update Total Amount section
                $('.customer__account__details__item__flex span').text(amount);
            });

            <?php if($errors->any()): ?>
                $('#paymentGatewayModal').modal('show');
            <?php endif; ?>
        });
    </script>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('frontend.user.layout.master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\Modules/Wallet\resources/views/frontend/transactions/index.blade.php ENDPATH**/ ?>