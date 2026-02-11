<a tabindex="0" class="cmnBtn btn_5 btn_bg_warning btnIcon radius-5 swal_status_change">
    <i class="las la-pen"></i>
</a>
<form method='post' action='<?php echo e($url); ?>' class="d-none">
    <input type='hidden' name='_token' value='<?php echo e(csrf_token()); ?>'>
    <br>
    <button type="submit" class="swal_form_submit_btn d-none"></button>
</form>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/components/status/admin-products-published-change.blade.php ENDPATH**/ ?>