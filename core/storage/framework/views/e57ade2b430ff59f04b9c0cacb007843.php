

<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('User Car Details')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('style'); ?>
<style>
    .car-card {
        border: 1px solid #e0e0e0;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 20px;
        background: #fff;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .car-card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 2px solid #006769;
    }

    .car-card-title {
        font-size: 20px;
        font-weight: 600;
        color: #006769;
    }

    .no-cars-message {
        text-align: center;
        padding: 40px;
        background: #f8f9fa;
        border-radius: 10px;
    }

    .car-image img {
        max-width: 180px;
        border-radius: 8px;
    }
</style>
<?php $__env->stopSection(); ?>


<?php $__env->startSection('content'); ?>

<div class="row g-4 mt-0">
<div class="col-xl-12 col-lg-12">

<div class="dashboard__card bg__white padding-20 radius-10">

<div class="dashboard__inner__header mb-4">

<div class="dashboard__inner__header__flex">

<div class="dashboard__inner__header__left">

<h4 class="dashboard__inner__header__title">
<?php echo e(__('User Car Details')); ?>

</h4>

<p class="mt-2">
<strong><?php echo e(__('User:')); ?></strong> <?php echo e($user->fullname); ?> <br>
<strong><?php echo e(__('Email:')); ?></strong> <?php echo e($user->email); ?> <br>
<strong><?php echo e(__('Phone:')); ?></strong> <?php echo e($user->phone); ?>

</p>

</div>

<div class="dashboard__inner__header__right">

<a href="<?php echo e(route('admin.user.all')); ?>" class="cmnBtn btn_5 btn_bg_secondary radius-5">
<i class="las la-arrow-left"></i> <?php echo e(__('Back to Users')); ?>

</a>

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



<?php if($user->user_selected_cars->count()): ?>

<?php $__currentLoopData = $user->user_selected_cars; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $car): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

<div class="car-card">

<div class="car-card-header">

<div class="car-card-title">

Car <?php echo e($index+1); ?> :

<span class="badge bg-primary">

<?php echo e($car->registration_number ?? 'N/A'); ?>


</span>

</div>

</div>

<div class="row align-items-center">

<div class="col-md-3 text-center">

<?php if($car->car && $car->car->image): ?>
<?php echo render_image_markup_by_attachment_id($car->car->image,'','medium'); ?>

<?php endif; ?>

</div>

<div class="col-md-9">

<table class="table table-bordered">

<tr>
<th>Brand</th>
<td><?php echo e($car->brand->name ?? 'N/A'); ?></td>
</tr>

<tr>
<th>Model</th>
<td><?php echo e($car->car->name ?? 'N/A'); ?></td>
</tr>

<tr>
<th>Engine</th>
<td><?php echo e($car->engine->name ?? 'N/A'); ?></td>
</tr>

<tr>
<th>Fuel</th>
<td><?php echo e($car->fual->name ?? 'N/A'); ?></td>
</tr>

<tr>
<th>Added On</th>
<td><?php echo e(optional($car->created_at)->format('d M Y, h:i A')); ?></td>
</tr>

</table>

</div>

</div>

</div>

<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

<?php endif; ?>


</div>
</div>
</div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/user/users/user-car-details.blade.php ENDPATH**/ ?>