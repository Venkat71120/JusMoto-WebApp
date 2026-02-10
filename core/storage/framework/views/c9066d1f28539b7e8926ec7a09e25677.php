<style>
    .alert-success {
        border-color: #f2f2f2;
        border-left: 5px solid #319a31;
        background-color: #f2f2f2;
        color: #333;
        border-radius: 0;
    }
    .alert-danger {
        border-color: #f2f2f2;
        border-left: 5px solid darkred;
        background-color: #f2f2f2;
        color: #333;
        border-radius: 0;
    }
</style>

<?php if($status == 'default'): ?>
    <span class="alert alert-success"><?php echo e(__('Default Menu')); ?></span>
<?php else: ?>
    <form action="<?php echo e(route('admin.menu.default',$menuID)); ?>" method="post">
        <?php echo csrf_field(); ?>
        <button type="submit" class="alert alert-danger set_default_menu"><?php echo e(__('Set Default')); ?></button>
    </form>
<?php endif; ?>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/components/status/table/menu.blade.php ENDPATH**/ ?>