<a tabindex="0" 
   class="cmnBtn btn_5 btn_bg_warning btnIcon radius-5 swal_status_change edit-btn">
    <i class="las la-pen"></i>
</a>

<form method='post' action='<?php echo e($url); ?>' class="d-none">
    <input type='hidden' name='_token' value='<?php echo e(csrf_token()); ?>'>
    <br>
    <button type="submit" class="swal_form_submit_btn d-none"></button>
</form>

<style>
/* ===== SIMPLE EDIT BUTTON - NO HOVER EFFECTS ===== */

:root {
    --blue: #3b82f6;
    --blue-light: #eff6ff;
    --blue-dark: #1d4ed8;
    --gray-200: #e5e7eb;
    --gray-700: #374151;
    --white: #ffffff;
}

/* Base button style - completely static */
.edit-btn {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    min-width: 36px !important;
    height: 36px !important;
    padding: 0 !important;
    background: var(--white) !important;
    border: 1px solid var(--gray-200) !important;
    border-radius: 8px !important;
    color: var(--blue) !important;
    font-size: 18px !important;
    cursor: pointer !important;
    text-decoration: none !important;
}

/* NO HOVER EFFECTS - Button looks exactly the same on hover */
.edit-btn:hover {
    background: var(--white) !important;
    border-color: var(--gray-200) !important;
    color: var(--blue) !important;
}

/* Dark mode */
body.dark-mode .edit-btn {
    background: #1f2937 !important;
    border-color: #374151 !important;
    color: #60a5fa !important;
}

body.dark-mode .edit-btn:hover {
    background: #1f2937 !important;
    border-color: #374151 !important;
    color: #60a5fa !important;
}

/* Preserve original classes */
.cmnBtn.btn_5.btn_bg_warning.btnIcon.radius-5 {
    /* Original styles preserved */
}

.swal_status_change {
    cursor: pointer;
}
</style><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/components/status/admin-services-published-change.blade.php ENDPATH**/ ?>