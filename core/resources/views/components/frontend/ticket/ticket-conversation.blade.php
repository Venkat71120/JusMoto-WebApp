<div class="row w-100 gx-4 mt-0">
    <!-- Ticket Conversation Area -->
    <div class="col-xl-8">
        <div class="chatbox-wrapper bordered rounded-xl">
            <!-- Header -->
            <div class="chatbox-wrapper-header dashboard__inner__header support_ticket_header bordered-b p-4 d-flex justify-content-between gap-4">
                <div class="header-left-part">
                    <h3 class="section-heading mb-0">{{ $ticket->title }}</h3>
                </div>
                <div class="header-right-part text-muted small">
                    <div>{{ __('Last update:') }}
                        {{ $ticket?->get_ticket_latest_message?->updated_at->diffForHumans() ?? $ticket->updated_at->diffForHumans() }}
                    </div>
                </div>
            </div>

            <!-- Messages -->
            <x-validation.error/>
            <div class="chatbox-wrapper-body inbox_wrapper__body">
                <div class="chatbox-wrapper-body-inside">
                    <div class="supportTicket-messages-body p-4">
                        @foreach($ticket->message as $message)
                            @php
                                $isUser = $message->type == 'user';
                                $author = $isUser ? auth()->user() : $ticket->admin;
                                $profile_img = $author?->image ? get_attachment_image_by_id($author->image, null, true) : null;
                                $fullname = $isUser ? auth()->user()->first_name . ' ' . auth()->user()->last_name : $ticket->admin?->name;
                            @endphp

                            <div class="supportTicket_single__chat">
                                <div class="{{ $isUser ? 'user_message_show' : 'admin_message_show' }} d-flex gap-2">
                                    <div class="person_img">
                                        @if($profile_img)
                                            <img src="{{ $profile_img['img_url'] }}" class="rounded-circle" width="40" height="40" alt="profile">
                                        @endif
                                    </div>
                                    <div class="message-content-wrapper">
                                        <div class="message-content ms-auto">
                                            <p>{!! $message->message !!}</p>
                                            @if($message->attachment)
                                                <a href="{{ asset('assets/uploads/ticket/chat-messages/' . $message->attachment) }}"
                                                   download class="text-primary small text-decoration-none">
                                                    <i class="fa-solid fa-paperclip"></i> {{ __('Download Attachment') }}
                                                </a>
                                            @endif
                                        </div>
                                        <div class="text-muted small text-end mt-1">{{ $message->created_at->diffForHumans() }}</div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>

                <!-- Reply Form -->
                <div class="chatbox-wrapper-footer supportTicket_single__item bordered-t p-4">
                    <form action="{{route('ticket.details',[$ticket->id])}}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="massege-box-wraper custom-input">
                            <textarea name="message" id="message" class="border-0 w-100" rows="4" placeholder="{{ __('Write your reply...') }}"></textarea>
                            <div id="attachmentPreview" class=""></div>
                            <div class="massege-option d-flex justify-content-between gap-4">
                                <div class="dropdown-wrapper align-self-center">
                                    <button type='button' class="dropdown-toggle additional_option_btn" data-bs-toggle="dropdown" data-bs-auto-close="outside"><i class="fa-solid fa-plus"></i>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-start">
                                        <li class="dropdown-item">
                                            <input type="file" class="form-control w-auto d-none" name="attachment" id="attachment">
                                            <label for="attachment" class="small d-flex align-items-center gap-2"><i class="icon-base ti tabler-paperclip icon-16px"></i> {{ __('Attachment') }}</label>
                                        </li>
                                        <li class="dropdown-item">
                                            <label class="small d-flex align-items-center gap-2">
                                                <input type="checkbox" class="custom-checkbox" name="email_notify" id="email_notify"> {{ __('Email Notify') }}
                                            </label>
                                        </li>
                                    </ul>
                                </div>

                                <button type="submit" class="btn btn-primary p-2 py-1"><i class="icon-base ti tabler-send icon-16px"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Ticket Details Sidebar -->
    <div class="col-xl-4">
        <div class="ticket-details-sidebar dashboard__card bordered rounded-xl p-3">
{{--            <div class="close-icon btn_close position-absolute d-flex d-xl-none">--}}
{{--                <i class="icon-base ti tabler-x"></i>--}}
{{--            </div>--}}
            <div class="ticket-details-wrapper-inside">
                @if($ticket->admin)
                    <div class="admin-details bordered rounded-lg p-3 d-flex gap-3">
                        <div class="admin-img align-self-center flex-shrink-0">
                            @if($ticket->admin?->image)
                                @php $profile_img = get_attachment_image_by_id($ticket->admin->image, null, true); @endphp
                                <img src="{{ $profile_img['img_url'] }}" class="rounded-circle" width="40" height="40" alt="admin">
                            @endif
                        </div>
                        <div class="text">
                            <h5 class="admin-name color_heading mb-1">{{ $ticket->admin?->name }}</h5>
                            <div class="emai">{{ $ticket->admin?->email }}</div>
                        </div>
                    </div>
                @endif

                <div class="ticket-details-wraper bordered rounded-lg p-3 mt-4">
                    <h5 class="title color_heading mb-3 pb-3 bordered-b">{{ __('Ticket Details') }}</h5>
                    <div class="ticket-details-item-wraper d-flex flex-column gap-3">
                        <div class="ticket-details-item"><div class="ticket-details-attribute">{{ __('ID') }}</div><div class="ticket-details-value">: {{ $ticket->id }}</div></div>
                        <div class="ticket-details-item"><div class="ticket-details-attribute">{{ __('Title') }}</div><div class="ticket-details-value">: {{ $ticket->title }}</div></div>
                        @php
                            if (in_array(strtolower($ticket->priority), ['high', 'urgent'])) {
                                $priorityClass = 'high';
                            } elseif (strtolower($ticket->priority) === 'normal') {
                                $priorityClass = 'medium';
                            } else {
                                $priorityClass = 'low';
                            }
                        @endphp
                        <div class="ticket-details-item"><div class="ticket-details-attribute">{{ __('Priority') }}</div><div class="ticket-details-value">
                                : <span class="priority-badge {{ $priorityClass }}">{{ ucfirst(strtolower($ticket->priority)) }}</span>
                            </div></div>
                        <div class="ticket-details-item"><div class="ticket-details-attribute">{{ __('Description') }}</div><div class="ticket-details-value">: {{ $ticket->description }}</div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
