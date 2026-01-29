<?php
    $userId = auth()->id();
    $guestToken = Cookie::get('guest_token');

    $selectedCar = null;

    if ($userId) {
        // Logged-in user
        $selectedCar = \App\Models\UserSelectedCar::with(['brand','car','engine','fual'])
            ->where('user_id', $userId)
            ->first();
    } elseif ($guestToken) {
        // Guest user
        $selectedCar = \App\Models\UserSelectedCar::with(['brand','car','engine','fual'])
            ->where('guest_token', $guestToken)
            ->first();
    }
?>

<script>
    let selectedCar = <?php echo json_encode($selectedCar); ?>;
</script>

<script>
    $(document).ready(function() {

        $(document).on('click', '.cart-btn', function (e) {
            e.preventDefault();
            if (!selectedCar) {
                toastr.error("Please select a car first!");
                e.preventDefault();
                $('.openPop').trigger('click');

                return;
            }
            let btn = $(this);
            let itemId = btn.data('id');
            let price = btn.data('price');

            $.ajax({
                url: "<?php echo e(route('client.cart.item.add')); ?>",
                type: "POST",
                data: {
                    item_id: itemId,
                    price: price,
                    _token: "<?php echo e(csrf_token()); ?>"
                },
                success: function (response) {
                    if (response.status === 'added') {
                        toastr.success("Item added to your cart!");
                        btn.text('Added');
                        btn.prop('disabled', true);
                        btn.addClass('added'); // optional styling class
                        location.reload()
                    }
                }
            });
        });
    });
</script>
<?php /**PATH /Users/venkatesharavamudhan/Claude/JusMoto/main-files/Admin Panel/extracted/gocar-v1.1.0/core/resources/views/components/frontend/js/toggle-cart-item-js.blade.php ENDPATH**/ ?>