<!DOCTYPE html>
<html class="no-js" lang="<?php echo e(auth()->user()->languageSlug()); ?>" dir="<?php echo e(auth()->user()->languageDirection()); ?>">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php if(trim($__env->yieldContent('site-title'))): ?>
            <?php echo $__env->yieldContent('site-title'); ?>
        <?php else: ?>
            <?php echo e(get_static_option('site_title')); ?>

        <?php endif; ?>
    </title>
    <!-- favicon -->
    <?php $site_favicon = get_attachment_image_by_id(get_static_option('site_favicon'),"full", false); ?>
    <?php if(!empty($site_favicon)): ?>
        <link rel="icon" href="<?php echo e($site_favicon['img_url']); ?>" sizes="16x16" type="image/x-icon">
    <?php endif; ?>
    <link rel="preconnect" href="<?php echo e('https://fonts.googleapis.com'); ?>">
    <link rel="preconnect" href="<?php echo e('https://fonts.gstatic.com'); ?>" crossorigin>
    <link
        href="<?php echo e('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'); ?>"
        rel="stylesheet">
    <link rel="stylesheet" href="<?php echo e(asset('/assets/frontend/css/plugin.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('/assets/frontend/css/tablar-icon.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('/assets/frontend/css/dashboard-style.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('/assets/frontend/css/dashboard-responsive.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('/assets/frontend/css/space.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('/assets/frontend/css/sidebarsearch.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/common/css/toastr.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/frontend/css/sweetalert.css')); ?>">
    <?php echo $__env->yieldContent('style'); ?>





</head>


<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/user/layout/partial/header.blade.php ENDPATH**/ ?>