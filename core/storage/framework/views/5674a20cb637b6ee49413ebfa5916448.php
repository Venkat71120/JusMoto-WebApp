<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('Currency Settings')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div class="row g-4 mt-0">
        <div class="col-xl-12 col-lg-12 mt-0">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <h2 class="dashboard__card__header__title mb-3"><?php echo e(__('Currency Settings')); ?></h2>
                <?php if (isset($component)) { $__componentOriginal4bb59b834d778ff0cb72af5a473e2885 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal4bb59b834d778ff0cb72af5a473e2885 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.validation.error','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('validation.error'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal4bb59b834d778ff0cb72af5a473e2885)): ?>
<?php $attributes = $__attributesOriginal4bb59b834d778ff0cb72af5a473e2885; ?>
<?php unset($__attributesOriginal4bb59b834d778ff0cb72af5a473e2885); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal4bb59b834d778ff0cb72af5a473e2885)): ?>
<?php $component = $__componentOriginal4bb59b834d778ff0cb72af5a473e2885; ?>
<?php unset($__componentOriginal4bb59b834d778ff0cb72af5a473e2885); ?>
<?php endif; ?>
                <form action="<?php echo e(route('admin.payment.gateway.currency.settings')); ?>" method="POST">
                    <?php echo csrf_field(); ?>
                    <div class="form__input__flex">

                        <div class="form__input__single">
                            <label class="form__input__single__label" for="site_canonical_url_type" class="form__input__single__label"><?php echo e(__('Site Global Currency')); ?></label>
                            <select class="form__control radius-5" name="site_global_currency" id="site_global_currency">
                                <?php $__currentLoopData = Xgenious\Paymentgateway\Facades\XgPaymentGateway::script_currency_list(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cur => $symbol): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <option value="<?php echo e($cur); ?>" <?php if(get_static_option('site_global_currency') == $cur): ?> selected <?php endif; ?> ><?php echo e($cur.' ( '.$symbol.')'); ?> </option>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </select>
                        </div>

                        <div class="form__input__single">
                            <label class="form__input__single__label" for="site_title" class="form__input__single__label"><?php echo e(__('Site Title')); ?></label>
                            <input type="text"  name="site_title" id="site_title" value="<?php echo e(get_static_option('site_title')); ?>"  class="form__control radius-5">
                        </div>

                        <div class="form__input__single">
                            <label class="form__input__single__label" for="site_global_currency"><?php echo e(__('Enable/Disable Decimal Point')); ?></label>
                            <select name="enable_disable_decimal_point" class="form__control radius-5" id="enable_disable_decimal_point">
                                <option value="yes" <?php echo e(get_static_option('enable_disable_decimal_point') == 'yes' ? 'selected' : ''); ?>><?php echo e(__('Yes')); ?></option>
                                <option value="no" <?php echo e(get_static_option('enable_disable_decimal_point') == 'no' ? 'selected' : ''); ?>><?php echo e(__('No')); ?></option>
                            </select>
                        </div>
                        <div class="form__input__single">
                            <label class="form__input__single__label" for="site_global_currency"><?php echo e(__('Add/Remove Space Between Currency Symbol and Amount')); ?></label>
                            <select name="add_remove_sapce_between_amount_and_symbol" class="form__control radius-5">
                                <option value="yes" <?php echo e(get_static_option('add_remove_sapce_between_amount_and_symbol') == 'yes' ? 'selected' : ''); ?>><?php echo e(__('Yes')); ?></option>
                                <option value="no" <?php echo e(get_static_option('add_remove_sapce_between_amount_and_symbol') == 'no' ? 'selected' : ''); ?>><?php echo e(__('No')); ?></option>
                            </select>
                        </div>

                        <div class="form__input__single">
                            <label class="form__input__single__label" for="add_remove_comman_form_amount"><?php echo e(__('Add/Remove comma (,) from amount')); ?></label>
                            <select name="add_remove_comman_form_amount" class="form__control radius-5">
                                <option value="yes" <?php echo e(get_static_option('add_remove_comman_form_amount') == 'yes' ? 'selected' : ''); ?>><?php echo e(__('Yes')); ?></option>
                                <option value="no" <?php echo e(get_static_option('add_remove_comman_form_amount') == 'no' ? 'selected' : ''); ?>><?php echo e(__('No')); ?></option>
                            </select>
                        </div>

                        <div class="form__input__single">
                            <label class="form__input__single__label" for="site_currency_symbol_position"><?php echo e(__('Currency Symbol Position')); ?></label>
                            <?php $all_currency_position = ['left','right']; ?>
                            <select name="site_currency_symbol_position" class="form__control radius-5"
                                    id="site_currency_symbol_position">
                                <?php $__currentLoopData = $all_currency_position; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cur): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <option value="<?php echo e($cur); ?>"
                                            <?php if(get_static_option('site_currency_symbol_position') == $cur): ?> selected <?php endif; ?>><?php echo e(ucwords($cur)); ?></option>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </select>
                        </div>
                        <div class="form__input__single">
                            <?php
                                $all_gateways = \App\Helpers\PaymentGatewayRenderHelper::listOfPaymentGateways();
                            ?>

                            <label class="form__input__single__label" for="site_default_payment_gateway"><?php echo e(__('Default Payment Gateway')); ?></label>
                            <select name="site_default_payment_gateway" class="form__control radius-5" >
                                <?php $__currentLoopData = $all_gateways; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $gateway): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <option value="<?php echo e($gateway['name']); ?>" <?php if(get_static_option('site_default_payment_gateway') == $gateway['name']): ?> selected <?php endif; ?>><?php echo e(ucwords(str_replace('_',' ',$gateway['name']))); ?></option>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </select>
                        </div>
                        <?php $global_currency = get_static_option('site_global_currency');?>

                        <?php if($global_currency != 'USD'): ?>
                            <div class="form__input__single">
                                <label class="form__input__single__label" for="site_<?php echo e(strtolower($global_currency)); ?>_to_usd_exchange_rate"><?php echo e(__($global_currency.' to USD Exchange Rate')); ?></label>
                                <input type="text" class="form__control radius-5"
                                       name="site_<?php echo e(strtolower($global_currency)); ?>_to_usd_exchange_rate"
                                       value="<?php echo e(get_static_option('site_'.$global_currency.'_to_usd_exchange_rate')); ?>">
                                <span class="info-text"><?php echo e(sprintf(__('enter %s to USD exchange rate. eg: 1 %s = ? USD'),$global_currency,$global_currency)); ?></span>
                            </div>
                        <?php endif; ?>

                        <?php if($global_currency != 'IDR'): ?>
                            <div class="form__input__single">
                                <label class="form__input__single__label" for="site_<?php echo e(strtolower($global_currency)); ?>_to_idr_exchange_rate"><?php echo e(__($global_currency.' to IDR Exchange Rate')); ?></label>
                                <input type="text" class="form__control radius-5"
                                       name="site_<?php echo e(strtolower($global_currency)); ?>_to_idr_exchange_rate"
                                       value="<?php echo e(get_static_option('site_'.$global_currency.'_to_idr_exchange_rate')); ?>">
                                <span class="info-text"><?php echo e(sprintf(__('enter %s to USD exchange rate. eg: 1 %s = ? IDR'),$global_currency,$global_currency)); ?></span>
                            </div>
                        <?php endif; ?>

                        <?php if($global_currency != 'INR' && !empty(get_static_option('paytm_gateway') || !empty(get_static_option('razorpay_gateway')))): ?>
                            <div class="form__input__single">
                                <label class="form__input__single__label" for="site_<?php echo e(strtolower($global_currency)); ?>_to_inr_exchange_rate"><?php echo e(__($global_currency.' to INR Exchange Rate')); ?></label>
                                <input type="text" class="form__control radius-5"
                                       name="site_<?php echo e(strtolower($global_currency)); ?>_to_inr_exchange_rate"
                                       value="<?php echo e(get_static_option('site_'.$global_currency.'_to_inr_exchange_rate')); ?>">
                                <span class="info-text"><?php echo e(__('enter '.$global_currency.' to INR exchange rate. eg: 1'.$global_currency.' = ? INR')); ?></span>
                            </div>
                        <?php endif; ?>

                        <?php if($global_currency != 'NGN' && !empty(get_static_option('paystack_gateway') )): ?>
                            <div class="form__input__single">
                                <label class="form__input__single__label" for="site_<?php echo e(strtolower($global_currency)); ?>_to_ngn_exchange_rate"><?php echo e(__($global_currency.' to NGN Exchange Rate')); ?></label>
                                <input type="text" class="form__control radius-5"
                                       name="site_<?php echo e(strtolower($global_currency)); ?>_to_ngn_exchange_rate"
                                       value="<?php echo e(get_static_option('site_'.$global_currency.'_to_ngn_exchange_rate')); ?>">
                                <span class="info-text"><?php echo e(__('enter '.$global_currency.' to NGN exchange rate. eg: 1'.$global_currency.' = ? NGN')); ?></span>
                            </div>
                        <?php endif; ?>

                        <?php if($global_currency != 'ZAR'): ?>
                            <div class="form__input__single">
                                <label class="form__input__single__label" for="site_<?php echo e(strtolower($global_currency)); ?>_to_zar_exchange_rate"><?php echo e(__($global_currency.' to ZAR Exchange Rate')); ?></label>
                                <input type="text" class="form__control radius-5"  name="site_<?php echo e(strtolower($global_currency)); ?>_to_zar_exchange_rate"  value="<?php echo e(get_static_option('site_'.$global_currency.'_to_zar_exchange_rate')); ?>">
                                <span class="info-text"><?php echo e(sprintf(__('enter %s to USD exchange rate. eg: 1 %s = ? ZAR'),$global_currency,$global_currency)); ?></span>
                            </div>
                        <?php endif; ?>

                        <?php if($global_currency != 'BRL'): ?>
                            <div class="form__input__single">
                                <label class="form__input__single__label" for="site_<?php echo e(strtolower($global_currency)); ?>_to_brl_exchange_rate"><?php echo e(__($global_currency.' to BRL Exchange Rate')); ?></label>
                                <input type="text" class="form__control radius-5"
                                       name="site_<?php echo e(strtolower($global_currency)); ?>_to_brl_exchange_rate"
                                       value="<?php echo e(get_static_option('site_'.$global_currency.'_to_brl_exchange_rate')); ?>">
                                <span class="info-text"><?php echo e(__('enter '.$global_currency.' to BRL exchange rate. eg: 1'.$global_currency.' = ? BRL')); ?></span>
                            </div>
                        <?php endif; ?>
                        <?php if($global_currency != 'MYR'): ?>
                            <div class="form__input__single">
                                <label class="form__input__single__label" for="site_<?php echo e(strtolower($global_currency)); ?>_to_myr_exchange_rate"><?php echo e(__($global_currency.' to MYR Exchange Rate')); ?></label>
                                <input type="text" class="form__control radius-5"
                                       name="site_<?php echo e(strtolower($global_currency)); ?>_to_myr_exchange_rate"
                                       value="<?php echo e(get_static_option('site_'.$global_currency.'_to_myr_exchange_rate')); ?>">
                                <span class="info-text"><?php echo e(__('enter '.$global_currency.' to MYR exchange rate. eg: 1'.$global_currency.' = ? MYR')); ?></span>
                            </div>
                        <?php endif; ?>
                    </div>
                    <div class="btn_wrapper mt-4">
                        <button type="submit" id="update" class="cmnBtn btn_5 btn_bg_blue radius-5"><?php echo e(__('Update Changes')); ?></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\Modules/PaymentGateways\resources/views/backend/currency-settings.blade.php ENDPATH**/ ?>