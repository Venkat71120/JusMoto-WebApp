<div class="row w-100 gx-4 mt-0">
    <!-- Ticket Conversation Area -->
    <div class="col-xl-8">
        <div class="chatbox-wrapper bordered rounded-xl">
            <!-- Header -->
            <div class="chatbox-wrapper-header dashboard__inner__header support_ticket_header bordered-b p-4 d-flex justify-content-between gap-4">
                <div class="header-left-part">
                    <h3 class="section-heading mb-0"><?php echo e($ticket->title); ?></h3>
                </div>
                <div class="header-right-part text-muted small">
                    <div><?php echo e(__('Last update:')); ?>

                        <?php echo e($ticket?->get_ticket_latest_message?->updated_at->diffForHumans() ?? $ticket->updated_at->diffForHumans()); ?>

                    </div>
                </div>
            </div>

            <!-- Messages -->
            <?php if (isset($component)) { $__componentOriginal4bb59b834d778ff0cb72af5a473e2885 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal4bb59b834d778ff0cb72af5a473e2885 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.validation.error','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('validation.error'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal4bb59b834d778ff0cb72af5a473e2885)): ?>
<?php $attributes = $__attributesOriginal4bb59b834d778ff0cb72af5a473e2885; ?>
<?php unset($__attributesOriginal4bb59b834d778ff0cb72af5a473e2885); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal4bb59b834d778ff0cb72af5a473e2885)): ?>
<?php $component = $__componentOriginal4bb59b834d778ff0cb72af5a473e2885; ?>
<?php unset($__componentOriginal4bb59b834d778ff0cb72af5a473e2885); ?>
<?php endif; ?>
            <div class="chatbox-wrapper-body inbox_wrapper__body">
                <div class="chatbox-wrapper-body-inside">
                    <div class="supportTicket-messages-body p-4">
                        <?php $__currentLoopData = $ticket->message; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $message): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <?php
                                $isUser = $message->type == 'user';
                                $author = $isUser ? auth()->user() : $ticket->admin;
                                $profile_img = $author?->image ? get_attachment_image_by_id($author->image, null, true) : null;
                                $fullname = $isUser ? auth()->user()->first_name . ' ' . auth()->user()->last_name : $ticket->admin?->name;
                            ?>

                            <div class="supportTicket_single__chat">
                                <div class="<?php echo e($isUser ? 'user_message_show' : 'admin_message_show'); ?> d-flex gap-2">
                                    <div class="person_img">
                                        <?php if($profile_img): ?>
                                            <img src="<?php echo e($profile_img['img_url']); ?>" class="rounded-circle" width="40" height="40" alt="profile">
                                        <?php endif; ?>
                                    </div>
                                    <div class="message-content-wrapper">
                                        <div class="message-content ms-auto">
                                            <p><?php echo $message->message; ?></p>
                                            <?php if($message->attachment): ?>
                                                <a href="<?php echo e(asset('assets/uploads/ticket/chat-messages/' . $message->attachment)); ?>"
                                                   download class="text-primary small text-decoration-none">
                                                    <i class="fa-solid fa-paperclip"></i> <?php echo e(__('Download Attachment')); ?>

                                                </a>
                                            <?php endif; ?>
                                        </div>
                                        <div class="text-muted small text-end mt-1"><?php echo e($message->created_at->diffForHumans()); ?></div>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                </div>

                <!-- Reply Form -->
                <div class="chatbox-wrapper-footer supportTicket_single__item bordered-t p-4">
                    <form action="<?php echo e(route('ticket.details',[$ticket->id])); ?>" method="post" enctype="multipart/form-data">
                        <?php echo csrf_field(); ?>
                        <div class="massege-box-wraper custom-input">
                            <textarea name="message" id="message" class="border-0 w-100" rows="4" placeholder="<?php echo e(__('Write your reply...')); ?>"></textarea>
                            <div id="attachmentPreview" class=""></div>
                            <div class="massege-option d-flex justify-content-between gap-4">
                                <div class="dropdown-wrapper align-self-center">
                                    <button type='button' class="dropdown-toggle additional_option_btn" data-bs-toggle="dropdown" data-bs-auto-close="outside"><i class="fa-solid fa-plus"></i>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-start">
                                        <li class="dropdown-item">
                                            <input type="file" class="form-control w-auto d-none" name="attachment" id="attachment">
                                            <label for="attachment" class="small d-flex align-items-center gap-2"><i class="icon-base ti tabler-paperclip icon-16px"></i> <?php echo e(__('Attachment')); ?></label>
                                        </li>
                                        <li class="dropdown-item">
                                            <label class="small d-flex align-items-center gap-2">
                                                <input type="checkbox" class="custom-checkbox" name="email_notify" id="email_notify"> <?php echo e(__('Email Notify')); ?>

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



            <div class="ticket-details-wrapper-inside">
                <?php if($ticket->admin): ?>
                    <div class="admin-details bordered rounded-lg p-3 d-flex gap-3">
                        <div class="admin-img align-self-center flex-shrink-0">
                            <?php if($ticket->admin?->image): ?>
                                <?php $profile_img = get_attachment_image_by_id($ticket->admin->image, null, true); ?>
                                <img src="<?php echo e($profile_img['img_url']); ?>" class="rounded-circle" width="40" height="40" alt="admin">
                            <?php endif; ?>
                        </div>
                        <div class="text">
                            <h5 class="admin-name color_heading mb-1"><?php echo e($ticket->admin?->name); ?></h5>
                            <div class="emai"><?php echo e($ticket->admin?->email); ?></div>
                        </div>
                    </div>
                <?php endif; ?>

                <div class="ticket-details-wraper bordered rounded-lg p-3 mt-4">
                    <h5 class="title color_heading mb-3 pb-3 bordered-b"><?php echo e(__('Ticket Details')); ?></h5>
                    <div class="ticket-details-item-wraper d-flex flex-column gap-3">
                        <div class="ticket-details-item"><div class="ticket-details-attribute"><?php echo e(__('ID')); ?></div><div class="ticket-details-value">: <?php echo e($ticket->id); ?></div></div>
                        <div class="ticket-details-item"><div class="ticket-details-attribute"><?php echo e(__('Title')); ?></div><div class="ticket-details-value">: <?php echo e($ticket->title); ?></div></div>
                        <?php
                            if (in_array(strtolower($ticket->priority), ['high', 'urgent'])) {
                                $priorityClass = 'high';
                            } elseif (strtolower($ticket->priority) === 'normal') {
                                $priorityClass = 'medium';
                            } else {
                                $priorityClass = 'low';
                            }
                        ?>
                        <div class="ticket-details-item"><div class="ticket-details-attribute"><?php echo e(__('Priority')); ?></div><div class="ticket-details-value">
                                : <span class="priority-badge <?php echo e($priorityClass); ?>"><?php echo e(ucfirst(strtolower($ticket->priority))); ?></span>
                            </div></div>
                        <div class="ticket-details-item"><div class="ticket-details-attribute"><?php echo e(__('Description')); ?></div><div class="ticket-details-value">: <?php echo e($ticket->description); ?></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/components/frontend/ticket/ticket-conversation.blade.php ENDPATH**/ ?>