@extends('frontend.user.layout.master')
@section('site-title')
    {{__('Ticket Details')}}
@endsection
@section('content')
    <div class="overlay"></div>
    <div class="main_container ">
        <div class="p_15">
            <x-frontend.ticket.ticket-conversation :ticket="$ticket_details" role="client"/>
        </div>

    </div>

@endsection
@section('scripts')
    @include('supportticket::Frontend.ticket-js')
    <script>

        $(".chatbox-wrapper-header .ticket-sidebar-open-btn").on("click", function () {
            $(".ticket-details-sidebar").addClass("show");
        })
        $(".ticket-details-sidebar .close-icon").on("click", function () {
            $(".ticket-details-sidebar").removeClass("show");
        })

        // show the update file
        $("#attachment").on("change", function () {
            let fileName = $(this).val().split("\\").pop();
            let previewBox = $("#attachmentPreview");
            if (fileName) {
                previewBox.html(`<span class="badge bg-light text-dark border"><i class="icon-base ti tabler-paperclip"></i> ${fileName}</span>`);
            } else {
                previewBox.empty();
            }
        });
    </script>
@endsection
