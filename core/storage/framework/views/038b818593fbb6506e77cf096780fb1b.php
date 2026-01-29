<script>
    $(document).ready(function() {

        const isLoggedIn = <?php echo json_encode(Auth::check(), 15, 512) ?>;


        $(document).on('click', '.favorite-btn', function (e) {
            e.preventDefault();

            let $btn = $(this);
            let serviceId = $btn.data('id');
            if (!isLoggedIn) {
                $btn.removeClass('selected');
                toastr.error("Please login first!");
                return;
            }
            $.ajax({
                url: "<?php echo e(route('client.favourite.services.toggle')); ?>",
                type: "POST",
                data: {
                    item_id: serviceId,
                    _token: "<?php echo e(csrf_token()); ?>"
                },
                success: function (response) {
                    if (response.status === 'added') {
                        $btn.addClass('selected');
                        toastr.success("Service added to favorites!");
                    } else {
                        $btn.removeClass('selected');
                        toastr.error("Service removed from favorites!");
                        location.reload();
                    }
                }
            });
        });
    });
</script>
<?php /**PATH /Users/venkatesharavamudhan/Claude/JusMoto/main-files/Admin Panel/extracted/gocar-v1.1.0/core/resources/views/components/frontend/js/togglle-favourite-item-js.blade.php ENDPATH**/ ?>