<script>
    (function($){
        "use strict";
        $(document).ready(function(){


            // add ticket
            $(document).on('click','.add_ticket',function(e){
                let title = $('#title').val();
                let department = $('#department').val();
                let priority = $('#priority').val();
                let description = $('#description').val();

                if(title == '' || department == '' || priority == '' || description == ''){
                    toastr_warning_js("<?php echo e(__('All fields are required !')); ?>");
                    return false;
                }
            });

        });
    }(jQuery));

</script>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\Modules/SupportTicket\resources/views/Frontend/ticket-js.blade.php ENDPATH**/ ?>