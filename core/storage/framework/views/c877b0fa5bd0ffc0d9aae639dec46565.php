<a tabindex="0" class="cmnBtn btn_5 btn_bg_light btnIcon radius-5 swal_status_change m-0"
   title="<?php echo e(__('Make Featured')); ?>"
   data-bs-toggle="tooltip"
   data-bs-placement="left"
>
    <i class="las la-star"></i>
</a>
<form method='post' action='<?php echo e($url); ?>' class="d-none">
<input type='hidden' name='_token' value='<?php echo e(csrf_token()); ?>'>
<br>
<button type="submit" class="swal_form_submit_btn d-none"></button>
 </form>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/components/status/make-features.blade.php ENDPATH**/ ?>