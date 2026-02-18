<a tabindex="0" class="edit-btn swal_status_change">
    <i class="las la-pen"></i>
</a>

<form method='post' action='<?php echo e($url); ?>' class="d-none">
    <input type='hidden' name='_token' value='<?php echo e(csrf_token()); ?>'>
    <br>
    <button type="submit" class="swal_form_submit_btn d-none"></button>
</form>

<style>
/* ===== CLEAN EDIT BUTTON ===== */

:root {
    --yellow: #f59e0b;
    --yellow-light: #fef3c7;
    --yellow-dark: #b45309;
    --gray-100: #f3f4f6;
    --gray-300: #d1d5db;
    --white: #ffffff;
    --radius: 8px;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --transition: all 0.2s ease;
}

.edit-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: var(--yellow-light);
    border: 1px solid var(--yellow);
    border-radius: var(--radius);
    color: var(--yellow-dark);
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
    transition: var(--transition);
}

.edit-btn:hover {
    background: var(--yellow);
    border-color: var(--yellow);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(245, 158, 11, 0.2);
}

/* Dark mode support */
body.dark-mode .edit-btn {
    background: #374151;
    border-color: #4b5563;
    color: #fbbf24;
}

body.dark-mode .edit-btn:hover {
    background: var(--yellow);
    border-color: var(--yellow);
    color: white;
}

/* Remove any transitions from child elements */
.edit-btn * {
    transition: none;
}
</style><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/components/status/status-change.blade.php ENDPATH**/ ?>