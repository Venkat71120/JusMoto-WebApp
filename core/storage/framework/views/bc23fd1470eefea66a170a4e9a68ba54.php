<?php if(session()->has('msg')): ?>
    <div class="alert alert-<?php echo e(session('type')); ?>">
        <?php echo purify_html(session('msg')); ?>

    </div>
<?php endif; ?>
<?php /**PATH /Users/venkatesharavamudhan/Claude/JusMoto/main-files/Admin Panel/extracted/gocar-v1.1.0/core/resources/views/components/msg/response-message.blade.php ENDPATH**/ ?>