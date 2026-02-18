<a class="view-btn" href="<?php echo e($url); ?>">
    <i class="las la-eye"></i>
</a>

<style>
/* ===== VIEW BUTTON WITH RED THEME ===== */

.view-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: #fee2e2;  /* red light */
    border: 1px solid #e31b23;  /* red */
    border-radius: 8px;
    color: #e31b23;  /* red */
    font-size: 18px;
    text-decoration: none;
    transition: all 0.2s ease;
}

.view-btn:hover {
    background: #e31b23;  /* red */
    border-color: #e31b23;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(227, 27, 35, 0.2);
}
</style><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/components/icon/view-icon.blade.php ENDPATH**/ ?>