<section class="dynamic-page-content-area section-bg-2 pat-60 pab-120">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <?php if(!auth()->guard('web')->check() && $page_post->visibility === 'all'): ?>
                    <div class="dynamic-page-content-wrap">
                        <?php echo $page_post->page_content; ?>

                    </div>
                <?php elseif(auth()->guard('web')->check()): ?>
                    <div class="dynamic-page-content-wrap">
                        <?php echo $page_post->page_content; ?>

                    </div>
                <?php else: ?>
                    <div class="alert alert-warning">
                        <p><a class="text-primary" href="<?php echo e(route('auth.login')); ?>"><?php echo e(__('Login')); ?></a> <?php echo e(__('to see this page')); ?> </p>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/pages/dynamic/partials/dynamic-content.blade.php ENDPATH**/ ?>