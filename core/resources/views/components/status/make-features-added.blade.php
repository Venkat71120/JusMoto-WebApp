<a tabindex="0" 
   class="cmnBtn btn_5 btn_bg_warning btnIcon radius-5 swal_status_change m-0 featured-btn"
   title="{{ __('Remove Featured') }}"
   data-bs-toggle="tooltip"
   data-bs-placement="left">
    <i class="las la-star"></i>
</a>

<form method='post' action='{{$url}}' class="d-none">
    <input type='hidden' name='_token' value='{{csrf_token()}}'>
    <br>
    <button type="submit" class="swal_form_submit_btn d-none"></button>
</form>

<style>
/* ===== FEATURED BUTTON - ABSOLUTELY NO HOVER EFFECTS ===== */

.featured-btn {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    min-width: 36px !important;
    height: 36px !important;
    padding: 0 !important;
    background: #ffffff !important;
    border: 1px solid #e5e7eb !important;
    border-radius: 8px !important;
    color: #f59e0b !important;
    font-size: 18px !important;
    cursor: pointer !important;
    text-decoration: none !important;
}

/* Explicitly remove any hover effects */
.featured-btn:hover,
.featured-btn:focus,
.featured-btn:active {
    background: #ffffff !important;
    border-color: #e5e7eb !important;
    color: #f59e0b !important;
    transform: none !important;
    box-shadow: none !important;
    outline: none !important;
}

/* Tooltip still works but button itself doesn't change */
[data-bs-toggle="tooltip"]:hover::after {
    content: attr(title);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 6px;
    padding: 4px 8px;
    background: #374151;
    color: white;
    font-size: 12px;
    border-radius: 4px;
    white-space: nowrap;
    z-index: 1000;
    pointer-events: none;
}

[data-bs-toggle="tooltip"]:hover::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 2px;
    border-width: 4px;
    border-style: solid;
    border-color: #374151 transparent transparent transparent;
    pointer-events: none;
}

/* Remove any potential transitions */
.featured-btn * {
    transition: none !important;
}

/* Preserve original classes */
.cmnBtn.btn_5.btn_bg_warning.btnIcon.radius-5 {
    /* Original styles preserved */
}

.swal_status_change {
    cursor: pointer;
}
</style>