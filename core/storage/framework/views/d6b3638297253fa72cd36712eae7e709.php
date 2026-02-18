<a class="edit-btn" href="<?php echo e($url); ?>">
    <i class="las la-pencil-alt"></i>
</a>

<style>
/* ===== CLEAN EDIT BUTTON ===== */

.edit-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    color: #3b82f6;
    font-size: 18px;
    text-decoration: none;
    transition: all 0.2s ease;
}

.edit-btn:hover {
    background: #3b82f6;
    border-color: #3b82f6;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(59, 130, 246, 0.2);
}

/* Dark mode */
body.dark-mode .edit-btn {
    background: #374151;
    border-color: #4b5563;
    color: #60a5fa;
}

body.dark-mode .edit-btn:hover {
    background: #3b82f6;
    border-color: #3b82f6;
    color: white;
}
</style><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/components/icon/edit-icon.blade.php ENDPATH**/ ?>