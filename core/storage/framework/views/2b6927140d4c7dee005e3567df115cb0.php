<script>
    (function($){
        "use strict";
        $(document).ready(function(){
            $(document).on('click','.edit_role_modal',function(){
                let id = $(this).data('role-id');
                let name = $(this).data('role-name');
                $('#role_id').val(id);
                $('#role_name').val(name);
            });
        });
    }(jQuery));
</script>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\Modules/RolePermission\resources/views/roles/role-js.blade.php ENDPATH**/ ?>