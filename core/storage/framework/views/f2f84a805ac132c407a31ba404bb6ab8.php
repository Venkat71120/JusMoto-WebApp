<footer class="footerWraper dark-bg white-text">
    <div class="footer-area-top">
        <div class="custom-container">
            <?php echo render_frontend_sidebar('footer_one'); ?>

        </div>
    </div>
    <?php echo render_frontend_sidebar('copyright'); ?>


</footer>

<script src="<?php echo e(asset('assets/frontend/js/popper.min.js')); ?>"></script>
<script src="<?php echo e(asset('assets/frontend/js/plugin.js')); ?>"></script>
<script src=<?php echo e(asset('assets/frontend/js/cartdrawer.js')); ?>></script>
<script src="<?php echo e(asset('assets/frontend/js/popup.js')); ?>"></script>
<script src="<?php echo e(asset('assets/frontend/js/about_sticky.js')); ?>"></script>
<script src="<?php echo e(asset('assets/frontend/js/sticky.js')); ?>"></script>
<script src="<?php echo e(asset('assets/frontend/js/flatpickr.js')); ?>"></script>
<script src="<?php echo e(asset('assets/frontend/js/main.js')); ?>"></script>
<script src="<?php echo e(asset('assets/common/js/toastr.min.js')); ?>"></script>
<?php if (isset($component)) { $__componentOriginalbfb958ec0aec679b32a00a655c1f5cd6 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalbfb958ec0aec679b32a00a655c1f5cd6 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.js.togglle-favourite-item-js','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('frontend.js.togglle-favourite-item-js'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalbfb958ec0aec679b32a00a655c1f5cd6)): ?>
<?php $attributes = $__attributesOriginalbfb958ec0aec679b32a00a655c1f5cd6; ?>
<?php unset($__attributesOriginalbfb958ec0aec679b32a00a655c1f5cd6); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalbfb958ec0aec679b32a00a655c1f5cd6)): ?>
<?php $component = $__componentOriginalbfb958ec0aec679b32a00a655c1f5cd6; ?>
<?php unset($__componentOriginalbfb958ec0aec679b32a00a655c1f5cd6); ?>
<?php endif; ?>
<?php if (isset($component)) { $__componentOriginald56fb07ee22c0feeff06454607375a27 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginald56fb07ee22c0feeff06454607375a27 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.js.toggle-cart-item-js','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('frontend.js.toggle-cart-item-js'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginald56fb07ee22c0feeff06454607375a27)): ?>
<?php $attributes = $__attributesOriginald56fb07ee22c0feeff06454607375a27; ?>
<?php unset($__attributesOriginald56fb07ee22c0feeff06454607375a27); ?>
<?php endif; ?>
<?php if (isset($__componentOriginald56fb07ee22c0feeff06454607375a27)): ?>
<?php $component = $__componentOriginald56fb07ee22c0feeff06454607375a27; ?>
<?php unset($__componentOriginald56fb07ee22c0feeff06454607375a27); ?>
<?php endif; ?>

<?php echo $__env->yieldContent('scripts'); ?>
<?php echo Toastr::message(); ?>

<?php if (isset($component)) { $__componentOriginal9cf0f030cf2491f76cc8ff253ab02f1e = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal9cf0f030cf2491f76cc8ff253ab02f1e = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.popup.default-js-popup','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('popup.default-js-popup'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal9cf0f030cf2491f76cc8ff253ab02f1e)): ?>
<?php $attributes = $__attributesOriginal9cf0f030cf2491f76cc8ff253ab02f1e; ?>
<?php unset($__attributesOriginal9cf0f030cf2491f76cc8ff253ab02f1e); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal9cf0f030cf2491f76cc8ff253ab02f1e)): ?>
<?php $component = $__componentOriginal9cf0f030cf2491f76cc8ff253ab02f1e; ?>
<?php unset($__componentOriginal9cf0f030cf2491f76cc8ff253ab02f1e); ?>
<?php endif; ?>

<?php
    $userId = auth()->id();
    $guestToken = Cookie::get('guest_token');

    $selectedCar = null;

    if ($userId) {
        $selectedCar = \App\Models\UserSelectedCar::with(['brand','car','engine','fual'])
            ->where('user_id', $userId)
            ->first();
    } elseif ($guestToken) {
        $selectedCar = \App\Models\UserSelectedCar::with(['brand','car','engine','fual'])
            ->where('guest_token', $guestToken)
            ->first();
    }
?>

<?php if(!$selectedCar): ?>
    <script>
        $(document).ready(function() {
            if (!localStorage.getItem('hasVisitedHomepage')) {
                setTimeout(function() {
                    if ($('.openPop')[0]) {
                        $('.openPop')[0].click();
                    }
                }, 500);
                localStorage.setItem('hasVisitedHomepage', 'true');
            }
        });
    </script>
<?php endif; ?>
</body>
</html>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/layout/partials/footer.blade.php ENDPATH**/ ?>