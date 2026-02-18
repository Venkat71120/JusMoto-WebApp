<a tabindex="0" class="delete-btn swal_delete_button">
    <i class="las la-trash-alt"></i>
</a>

<form method='post' action='{{$url}}' class="d-none">
    <input type='hidden' name='_token' value='{{csrf_token()}}'>
    <br>
    <button type="submit" class="swal_form_submit_btn d-none"></button>
</form>

<style>
/* ===== CLEAN DELETE BUTTON ===== */

.delete-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    color: #e31b23;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
}

.delete-btn:hover {
    background: #e31b23;
    border-color: #e31b23;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(227, 27, 35, 0.2);
}
</style>