<?php $__env->startSection('site-title'); ?>
    <?php echo e(__(' Coupon')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>
    <?php if (isset($component)) { $__componentOriginale3fe6bb2f0f61d925063cbbce78cba4d = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginale3fe6bb2f0f61d925063cbbce78cba4d = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.datatable.css','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('datatable.css'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginale3fe6bb2f0f61d925063cbbce78cba4d)): ?>
<?php $attributes = $__attributesOriginale3fe6bb2f0f61d925063cbbce78cba4d; ?>
<?php unset($__attributesOriginale3fe6bb2f0f61d925063cbbce78cba4d); ?>
<?php endif; ?>
<?php if (isset($__componentOriginale3fe6bb2f0f61d925063cbbce78cba4d)): ?>
<?php $component = $__componentOriginale3fe6bb2f0f61d925063cbbce78cba4d; ?>
<?php unset($__componentOriginale3fe6bb2f0f61d925063cbbce78cba4d); ?>
<?php endif; ?>
    <link rel="stylesheet" href="<?php echo e(asset('assets/tenant/frontend/css/nice-select.css')); ?>">
    <style>
        #status_text{
            display: none;
        }
    </style>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
 <div class="row g-4 mt-0">
        <div class="col-xl-12 col-lg-12">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="row g-4">
                    <div class="col-xl-7 col-lg-12">
                        <div class="dashboard__card p-3">
                            <div class="dashboard__card__header">
                                <h4 class="dashboard__card__title"><?php echo e(__('All  Coupon')); ?></h4>
                                <?php if (isset($component)) { $__componentOriginal41fc2efab414de3fc9c6739ba1ffcc6e = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal41fc2efab414de3fc9c6739ba1ffcc6e = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.bulk-action.bulk-action','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('bulk-action.bulk-action'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal41fc2efab414de3fc9c6739ba1ffcc6e)): ?>
<?php $attributes = $__attributesOriginal41fc2efab414de3fc9c6739ba1ffcc6e; ?>
<?php unset($__attributesOriginal41fc2efab414de3fc9c6739ba1ffcc6e); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal41fc2efab414de3fc9c6739ba1ffcc6e)): ?>
<?php $component = $__componentOriginal41fc2efab414de3fc9c6739ba1ffcc6e; ?>
<?php unset($__componentOriginal41fc2efab414de3fc9c6739ba1ffcc6e); ?>
<?php endif; ?>
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
                            <div class="dashboard__card__body mt-4 p-3">
                                <div class="table-wrap table-responsive custom_table">
                                    <table class="table table-default">
                                        <thead>
                                            <th><?php echo e(__('ID')); ?></th>
                                            <th><?php echo e(__('Code')); ?></th>
                                            <th><?php echo e(__('Discount')); ?></th>
                                            <th><?php echo e(__('Expire Date')); ?></th>
                                            <th><?php echo e(__('Status')); ?></th>
                                            <th><?php echo e(__('Action')); ?></th>
                                        </thead>
                                        <tbody>
                                            <?php $__currentLoopData = $all_coupons; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <tr>
                                                    <td><?php echo e($data->id); ?></td>
                                                    <td><?php echo e($data->code); ?></td>
                                                    <td>
                                                        <?php if($data->discount_type == 'percentage'): ?>
                                                            <?php echo e($data->discount); ?>%
                                                        <?php else: ?>
                                                            <?php echo e(amount_with_currency_symbol($data->discount)); ?>

                                                        <?php endif; ?>
                                                    </td>
                                                    <td><?php echo e(date('d M Y', strtotime($data->expire_date))); ?></td>
                                                    <td><?php if (isset($component)) { $__componentOriginal03379f522cfceba10901e2e1e89a2bd7 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal03379f522cfceba10901e2e1e89a2bd7 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.status.table.active-inactive','data' => ['status' => $data->status]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('status.table.active-inactive'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['status' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($data->status)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal03379f522cfceba10901e2e1e89a2bd7)): ?>
<?php $attributes = $__attributesOriginal03379f522cfceba10901e2e1e89a2bd7; ?>
<?php unset($__attributesOriginal03379f522cfceba10901e2e1e89a2bd7); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal03379f522cfceba10901e2e1e89a2bd7)): ?>
<?php $component = $__componentOriginal03379f522cfceba10901e2e1e89a2bd7; ?>
<?php unset($__componentOriginal03379f522cfceba10901e2e1e89a2bd7); ?>
<?php endif; ?></td>
                                                    <td>
                                                        <?php if (isset($component)) { $__componentOriginal7973b0ce98592c79f9209abd6e46a09b = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal7973b0ce98592c79f9209abd6e46a09b = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.popup.delete-popup','data' => ['title' => '','url' => route('admin.coupon.delete',$data->id)]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('popup.delete-popup'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['title' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(''),'url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(route('admin.coupon.delete',$data->id))]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal7973b0ce98592c79f9209abd6e46a09b)): ?>
<?php $attributes = $__attributesOriginal7973b0ce98592c79f9209abd6e46a09b; ?>
<?php unset($__attributesOriginal7973b0ce98592c79f9209abd6e46a09b); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal7973b0ce98592c79f9209abd6e46a09b)): ?>
<?php $component = $__componentOriginal7973b0ce98592c79f9209abd6e46a09b; ?>
<?php unset($__componentOriginal7973b0ce98592c79f9209abd6e46a09b); ?>
<?php endif; ?>
                                                        <a href="#1" data-bs-toggle="modal"
                                                            data-bs-target="#category_edit_modal"
                                                            class="btn btn-sm btn-warning btn-xs category_edit_btn"
                                                            data-id="<?php echo e($data->id); ?>" data-title="<?php echo e($data->title); ?>"
                                                            data-code="<?php echo e($data->code); ?>"
                                                            data-discount="<?php echo e($data->discount); ?>"
                                                            data-discount_type="<?php echo e($data->discount_type); ?>"
                                                            data-expire_date="<?php echo e($data->expire_date); ?>"
                                                            data-status="<?php echo e($data->status); ?>">
                                                            <i class="las la-pen-alt"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-5 col-lg-12">
                        <div class="dashboard__card p-4">
                            <div class="dashboard__card__header">
                                <h4 class="dashboard__card__title"><?php echo e(__('Add New Coupon')); ?></h4>
                            </div>
                            <div class="dashboard__card__body custom__form mt-4 mb-3">
                                <form action="<?php echo e(route('admin.coupon.new')); ?>" method="post"
                                    enctype="multipart/form-data">
                                    <?php echo csrf_field(); ?>
                                    <div class="form-group">
                                        <label for="title"><?php echo e(__('Coupon Title')); ?></label>
                                        <input type="text" class="form-control" id="title" name="title"
                                            placeholder="<?php echo e(__('Title')); ?>" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="code"><?php echo e(__('Coupon Code')); ?></label>
                                        <input type="text" class="form-control" id="code" name="code"
                                            placeholder="<?php echo e(__('Code')); ?>" required>
                                        <span id="status_text" class="text-danger"></span>
                                    </div>
                                    <div class="form-group">
                                        <label for="discount"><?php echo e(__('Discount')); ?></label>
                                        <input type="number" class="form-control" id="discount" name="discount"
                                            placeholder="<?php echo e(__('Discount')); ?>" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="discount_type"><?php echo e(__('Coupon Type')); ?></label>
                                        <select name="discount_type" class="form-control" id="discount_type" required>
                                            <option value="percentage"><?php echo e(__('Percentage')); ?></option>
                                            <option value="amount"><?php echo e(__('Amount')); ?></option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="expire_date"><?php echo e(__('Expire Date')); ?></label>
                                        <input type="date" class="form-control flatpickr" id="expire_date" name="expire_date"
                                            placeholder="<?php echo e(__('Expire Date')); ?>" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="status"><?php echo e(__('Status')); ?></label>
                                        <select name="status" class="form-control" id="status" required>
                                            <option value="1"><?php echo e(__('Active')); ?></option>
                                            <option value="0"><?php echo e(__('Inactive')); ?></option>
                                        </select>
                                    </div>
                                    <button type="submit" id="coupon_create_btn"
                                        class="cmnBtn btn_5 radius-5  btn_bg_blue   mt-3"><?php echo e(__('Add New Coupon')); ?></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 </div>

        <div class="modal fade" id="category_edit_modal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content custom__form p-3">
                    <div class="modal-header">
                        <h5 class="modal-title"><?php echo e(__('Update Coupon')); ?></h5>
                        <button type="button" class="close" data-bs-dismiss="modal"><span>×</span></button>
                    </div>
                    <form action="<?php echo e(route('admin.coupon.update')); ?>" method="post">
                        <input type="hidden" name="id" id="coupon_id">
                        <div class="modal-body">
                            <?php echo csrf_field(); ?>
                            <div class="form-group">
                                <label for="title"><?php echo e(__('Coupon Title')); ?></label>
                                <input type="text" class="form-control" id="edit_title" name="title"
                                    placeholder="<?php echo e(__('Title')); ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="edit_code"><?php echo e(__('Coupon Code')); ?></label>
                                <input type="text" class="form-control" id="edit_code" name="code"
                                    placeholder="<?php echo e(__('Code')); ?>">
                                <span id="status_text" class="text-danger"></span>
                            </div>
                            <div class="form-group">
                                <label for="edit_discount"><?php echo e(__('Discount')); ?></label>
                                <input type="number" class="form-control" id="edit_discount" name="discount"
                                    placeholder="<?php echo e(__('Discount')); ?>">
                            </div>
                            <div class="form-group">
                                <label for="edit_discount_type"><?php echo e(__('Coupon Type')); ?></label>
                                <select name="discount_type" class="form-control" id="edit_discount_type">
                                    <option value="percentage"><?php echo e(__('Percentage')); ?></option>
                                    <option value="amount"><?php echo e(__('Amount')); ?></option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="edit_expire_date"><?php echo e(__('Expire Date')); ?></label>
                                <input type="date" class="form-control flatpickr" id="edit_expire_date"
                                    name="expire_date" placeholder="<?php echo e(__('Expire Date')); ?>">
                            </div>
                            <div class="form-group">
                                <label for="edit_status"><?php echo e(__('Status')); ?></label>
                                <select name="status" class="form-control" id="edit_status">
                                    <option value="1"><?php echo e(__('Active')); ?></option>
                                    <option value="0"><?php echo e(__('Inactive')); ?></option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer mt-3">
                            <button type="button" class="btn btn-secondary"
                                data-bs-dismiss="modal"><?php echo e(__('Close')); ?></button>
                            <button type="submit" class="cmnBtn btn_5 radius-5  btn_bg_blue"><?php echo e(__('Save Change')); ?></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>

    <script>
        $(document).ready(function() {

            flatpickr(".flatpickr", {
                altInput: true,
                altFormat: "F j, Y",
                dateFormat: "Y-m-d",
            });

            $(document).on('click', '.category_edit_btn', function() {
                let el = $(this);
                let id = el.data('id');
                let status = el.data('status');
                let modal = $('#category_edit_modal');
                let discount_on = el.data('discount_on');
                let discount_on_details = el.data('discount_on_details');

                modal.find('#coupon_id').val(id);
                modal.find('#edit_status option[value="' + status + '"]').attr('selected', true);
                modal.find('#edit_code').val(el.data('code'));
                modal.find('#edit_discount').val(el.data('discount'));
                modal.find('#edit_discount_type').val(el.data('discount_type'));
                modal.find('#edit_expire_date').val(el.data('expire_date'));
                modal.find('#edit_discount_type[value="' + el.data('discount_type') + '"]').attr('selected',
                    true);
                modal.find('#edit_title').val(el.data('title'));
                modal.find('#edit_discount_on').val(el.data('discount_on'));


                $('#edit_form_' + discount_on + ' option[value=' + discount_on_details + ']').attr(
                    'selected', true);
                $('#edit_form_' + discount_on).fadeIn();

            });

            $(document).on('keyup', '#code', function() {
                validateCoupon(this);
            });

            $(document).on('keyup', '#edit_code', function() {
                validateCoupon(this);
            });
        });


        function validateCoupon(context) {
            let code = $(context).val();
            let submit_btn = $(context).closest('form').find('button[type=submit]');
            let status_text = $(context).siblings('#status_text');
            status_text.hide();

            if (code.length) {
                submit_btn.prop("disabled", true);

                $.get("<?php echo e(route('admin.coupon.check')); ?>", {
                    code: code
                }).then(function(data) {
                    if (data > 0) {
                        let msg = "<?php echo e(__('This coupon is already taken')); ?>";
                        status_text.removeClass('text-success').addClass('text-danger').text(msg).show();
                        submit_btn.prop("disabled", true);
                    } else {
                        let msg = "<?php echo e(__('This coupon is available')); ?>";
                        status_text.removeClass('text-danger').addClass('text-success').text(msg).show();
                        submit_btn.prop("disabled", false);
                    }
                });
            }
        }
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\Modules/Coupon\resources/views/all-coupon.blade.php ENDPATH**/ ?>