<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('All Refunded Orders')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>
    <style>
        .custom_table tr td:not(:first-child) {
            min-width: 42px;
        }

        #refunded-order-status
        {
            align-items: center;
        }
    </style>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div class="row g-4 mt-0">
        <div class="col-xl-12 col-lg-12">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="dashboard__inner__header">
                    <div class="dashboard__inner__header__flex">
                        <div class="dashboard__inner__header__left">
                            <h4 class="dashboard__inner__header__title"><?php echo e(__('All Refunded Orders')); ?></h4>
                       </div>
                   </div>
                 </div>
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
                <div class="tableStyle_three mt-4">
                    <div class="table_wrapper custom_Table">
                        <div class="search_result">
                            <?php echo $__env->make('backend.pages.orders.refunded-list.search-refunded-order', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Status Modal -->
    <div class="modal fade" id="RefundedOrderStatusChangeModal" tabindex="-1" role="dialog"
         aria-labelledby="editModal"
         aria-hidden="true">
        <form action="<?php echo e(route('admin.redunded-order.status')); ?>" method="post">
            <?php echo csrf_field(); ?>
            <input type="hidden" name="id" class="order_id">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editModal"><?php echo e(__('Change Refunded Order Status')); ?></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="status_id"><?php echo e(__('Select Status')); ?></label>
                            <select name="status_id" id="status_id" class="form-control">
                                <option value="0"><?php echo e(__('Pending')); ?></option>
                                <option value="1"><?php echo e(__('Completed')); ?></option>
                                <option value="2"><?php echo e(__('Cancel')); ?></option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><?php echo e(__('Close')); ?></button>
                        <button type="submit" class="btn btn-primary"><?php echo e(__('Save changes')); ?></button>
                    </div>
                </div>
            </div>
        </form>
    </div>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
    <script type="text/javascript">
        (function(){
            "use strict";
            $(document).ready(function(){

                //refunded order status change
                $(document).on('click', '.refunded_order_status_change_modal', function () {
                    let el = $(this);
                    let order_id = el.data('order_id');
                    let form = $('#RefundedOrderStatusChangeModal');
                    form.find('.order_id').val(order_id);
                });


               

                // pagination
                $(document).on('click', '.pagination li a', function(e){
                    e.preventDefault();
                    let page = $(this).attr('href').split('page=')[1];
                  
                    admin_orders(page);
                });
                function admin_orders(page){
                    $.ajax({
                        url:"<?php echo e(route('admin.refunded-order.paginate').'?page='); ?>" + page ,
                        success:function(res){
                            $('.search_result').html(res);
                        }
                    });
                }
            });
        })(jQuery);
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/refunded-list/all-list.blade.php ENDPATH**/ ?>