<script>
    (function ($) {
        "use strict";
        
        $(document).ready(function () {
            
            // Bulk delete button click handler
            $(document).on('click', '#bulk_delete_btn', function (e) {
                e.preventDefault();
                
                var bulkOption = $('#bulk_option').val();
                var allCheckbox = $('.bulk-checkbox:checked');
                var allIds = [];
                
                // Collect all checked IDs
                allCheckbox.each(function (index, value) {
                    allIds.push($(this).val());
                });
                
                // Perform delete if IDs exist and bulk option is delete
                if (allIds.length > 0 && bulkOption == 'delete') {
                    // Show loading state
                    $(this).html('<i class="fas fa-spinner fa-spin mr-1"></i>{{__("Deleting")}}');
                    
                    // Send AJAX request
                    $.ajax({
                        'type': "POST",
                        'url': "{{$url}}",
                        'data': {
                            _token: "{{csrf_token()}}",
                            ids: allIds
                        },
                        success: function (data) {
                            // Reload page on success
                            location.reload();
                        },
                        error: function (xhr) {
                            // Handle error
                            console.log('Bulk delete error:', xhr);
                            alert('{{__("An error occurred. Please try again.")}}');
                            $(this).html('{{__("Delete")}}');
                        }
                    });
                } else if (allIds.length === 0) {
                    alert('{{__("Please select at least one item.")}}');
                }
            });
            
            // Select all checkbox handler
            $(document).on('change', '.all-checkbox', function (e) {
                e.preventDefault();
                
                var isChecked = $(this).is(':checked');
                
                // Find all bulk checkboxes in the same table
                var allCheckboxes = $(this).closest('table').find('.bulk-checkbox');
                
                // Check/uncheck all
                allCheckboxes.prop('checked', isChecked);
            });
            
        });
        
    })(jQuery);
</script>