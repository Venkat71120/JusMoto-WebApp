<script>
    $(document).ready(function() {

        const isLoggedIn = @json(Auth::check());


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
                url: "{{ route('client.favourite.services.toggle') }}",
                type: "POST",
                data: {
                    item_id: serviceId,
                    _token: "{{ csrf_token() }}"
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
