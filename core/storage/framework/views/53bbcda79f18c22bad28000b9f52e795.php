<?php echo $__env->make('frontend/layout/partials/header', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<!-- preloader area end -->
<?php if(Request::is('/') || Request::is('home-page')): ?>
    <?php echo $__env->make('frontend/layout/partials/navbar', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php else: ?>
    <?php echo $__env->make('frontend/layout/partials/navbar-other', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php endif; ?>

<?php echo $__env->yieldContent('content'); ?>

<?php echo $__env->make('frontend/layout/partials/footer', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php /**PATH /Users/venkatesharavamudhan/Claude/JusMoto/main-files/Admin Panel/extracted/gocar-v1.1.0/core/resources/views/frontend/layout/master.blade.php ENDPATH**/ ?>