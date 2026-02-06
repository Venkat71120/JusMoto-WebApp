<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('Ticket Details')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div class="overlay"></div>
    <div class="main_container ">
        <div class="p_15">
            <?php if (isset($component)) { $__componentOriginal85501326d981d50caa3a3ec09eb87808 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal85501326d981d50caa3a3ec09eb87808 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.ticket.ticket-conversation','data' => ['ticket' => $ticket_details,'role' => 'client']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('frontend.ticket.ticket-conversation'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['ticket' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($ticket_details),'role' => 'client']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal85501326d981d50caa3a3ec09eb87808)): ?>
<?php $attributes = $__attributesOriginal85501326d981d50caa3a3ec09eb87808; ?>
<?php unset($__attributesOriginal85501326d981d50caa3a3ec09eb87808); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal85501326d981d50caa3a3ec09eb87808)): ?>
<?php $component = $__componentOriginal85501326d981d50caa3a3ec09eb87808; ?>
<?php unset($__componentOriginal85501326d981d50caa3a3ec09eb87808); ?>
<?php endif; ?>
        </div>

    </div>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
    <?php echo $__env->make('supportticket::Frontend.ticket-js', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    <script>

        $(".chatbox-wrapper-header .ticket-sidebar-open-btn").on("click", function () {
            $(".ticket-details-sidebar").addClass("show");
        })
        $(".ticket-details-sidebar .close-icon").on("click", function () {
            $(".ticket-details-sidebar").removeClass("show");
        })

        // show the update file
        $("#attachment").on("change", function () {
            let fileName = $(this).val().split("\\").pop();
            let previewBox = $("#attachmentPreview");
            if (fileName) {
                previewBox.html(`<span class="badge bg-light text-dark border"><i class="icon-base ti tabler-paperclip"></i> ${fileName}</span>`);
            } else {
                previewBox.empty();
            }
        });
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('frontend.user.layout.master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\Modules/SupportTicket\resources/views/Frontend/details.blade.php ENDPATH**/ ?>