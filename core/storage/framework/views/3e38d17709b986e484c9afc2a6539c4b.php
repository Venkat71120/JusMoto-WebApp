<!DOCTYPE html>
<html lang="<?php echo e(get_user_lang()); ?>" dir="<?php echo e(get_user_lang_direction()); ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <title>
        <?php echo e(get_static_option('site_title')); ?>

        <?php if(request()->path() == 'home'): ?>
            <?php echo e(get_static_option('site_tag_line')); ?>

        <?php else: ?>
            <?php echo $__env->yieldContent('site-title'); ?>
        <?php endif; ?>
    </title>
    <!-- favicon -->
    <?php $site_favicon = get_attachment_image_by_id(get_static_option('site_favicon'),"full", false); ?>
    <?php if(!empty($site_favicon)): ?>
        <link rel="icon" href="<?php echo e($site_favicon['img_url']); ?>" sizes="16x16" type="image/x-icon">
    <?php endif; ?>
    <link rel="stylesheet" href="<?php echo e(asset('assets/frontend/css/flatpickr.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/frontend/css/plugin.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/frontend/css/tablar-icon.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/frontend/css/style.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/frontend/css/responseive.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/common/css/toastr.min.css')); ?>">

    <?php
        $page_post = isset($page_post) ? $page_post : [];
        $page_type = isset($page_type) ? $page_post : [];
    ?>
    <?php echo $__env->yieldContent('style'); ?>
    <?php if(request()->routeIs('homepage')): ?>
        <?php echo render_homepage_meta(); ?>

    <?php elseif( request()->routeIs('frontend.dynamic.page') && $page_type === 'page' ): ?>
        <?php echo render_site_title(optional($page_post)->title ); ?>

        <?php echo render_site_meta(); ?>

    <?php else: ?>
        <?php echo $__env->yieldContent('page-meta-data'); ?>
    <?php endif; ?>
</head>
<body>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/layout/partials/header.blade.php ENDPATH**/ ?>