<?php $__env->startSection('title', 'Support Ticket'); ?>
<?php $__env->startSection('content'); ?>
    <div class="overlay"></div>
    <div class="main_container">
        <div class="support_ticket p_15">
            <div class="page_header">
                <h3 class="page_title"><?php echo e(__('Good Afternoon')); ?></h3>
                <p><?php echo e(__('Manage your dashboard here')); ?></p>
            </div>
            <?php if(session('success')): ?>
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <?php echo e(session('success')); ?>

                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            <?php endif; ?>
            <div class="tab_wrapper pt_15">
                <!-- Search Form -->
                <div class="card mb-3">
                    <div class="card-body">
                        <form method="GET" action="<?php echo e(route('tickets.index')); ?>" class="row g-3">
                            <div class="col-md-4">
                                <label for="search_id" class="form-label"><?php echo e(__('Ticket ID')); ?></label>
                                <input type="text" class="form-control" id="search_id" name="search_id"
                                       value="<?php echo e(request('search_id')); ?>" placeholder="Enter Ticket ID">
                            </div>

                            <div class="col-md-4 d-flex align-items-end">
                                <button type="submit" class="btn_primary btn-sm py-2 me-2"><?php echo e(__('Search')); ?></button>
                                <a href="<?php echo e(route('tickets.index')); ?>" class="btn btn-secondary"><?php echo e(__('Reset')); ?></a>
                            </div>
                            <!-- Preserve the current status tab -->
                            <input type="hidden" name="status" value="<?php echo e(request('status')); ?>">
                        </form>
                    </div>
                </div>

                <!-- Create New Ticket Button -->
                <div class="d-flex justify-content-end mb-3">
                    <button type="button" class="btn_primary" data-bs-toggle="modal" data-bs-target="#createTicketModal">
                        <i class="icon-base ti tabler-plus me-2"></i><?php echo e(__('Create New Ticket')); ?>

                    </button>
                </div>

                <ul class="nav nav-tabs support_ticket" id="myTab" role="tablist">
                    <li class="nav-item support_item" role="presentation">
                        <a class="nav-link <?php echo e(request('status') == '' ? 'active' : ''); ?>"
                           href="<?php echo e(route('tickets.index')); ?>"
                           role="tab">
                            <?php echo e(__('All Tickets')); ?> (<?php echo e($totalTickets); ?>)
                        </a>
                    </li>
                    <li class="nav-item support_item" role="presentation">
                        <a class="nav-link <?php echo e(request('status') == 'open' ? 'active' : ''); ?>"
                           href="<?php echo e(route('tickets.index', ['status' => 'open'])); ?>"
                           role="tab">
                            <?php echo e(__('Open Tickets')); ?> (<?php echo e($openTickets); ?>)
                        </a>
                    </li>
                    <li class="nav-item support_item" role="presentation">
                        <a class="nav-link <?php echo e(request('status') == 'close' ? 'active' : ''); ?>"
                           href="<?php echo e(route('tickets.index', ['status' => 'close'])); ?>"
                           role="tab">
                            <?php echo e(__('Closed Tickets')); ?> (<?php echo e($closedTickets); ?>)
                        </a>
                    </li>
                </ul>
                <div class="tab-content mt_15" id="myTabContent">
                    <div class="tab-pane fade show active" role="tabpanel">
                        <div class="table_wrapper">
                            <?php if($tickets->count() > 0): ?>
                                <table class="data-table table w-100 br_4 overflow-hidden">
                                    <colgroup>
                                        <col data-dt-column="1" style="width: 274px;">
                                        <col data-dt-column="2" style="width: 267px;">
                                        <col data-dt-column="3" style="width: 199px;">
                                        <col data-dt-column="4" style="width: 263px;">
                                        <col data-dt-column="5" style="width: 168px;">
                                        <col data-dt-column="6" style="width: 165px;">
                                    </colgroup>
                                    <thead class="table_head">
                                    <tr>
                                        <th><?php echo e(__('Date')); ?></th>
                                        <th><?php echo e(__('Ticket Id')); ?></th>
                                        <th><?php echo e(__('Priority')); ?></th>
                                        <th><?php echo e(__('Title')); ?></th>
                                        <th><?php echo e(__('Status')); ?></th>
                                        <th><?php echo e(__('Action')); ?></th>
                                    </tr>
                                    </thead>
                                    <tbody class="table_body">
                                    <?php $__currentLoopData = $tickets; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $ticket): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <tr>
                                            <td>
                                                <i class="icon-base ti tabler-calendar"></i>
                                                <span><?php echo e(\Carbon\Carbon::parse($ticket->created_at)->format('d-m-Y')); ?></span>
                                                <span><?php echo e(\Carbon\Carbon::parse($ticket->created_at)->format('h:iA')); ?></span>
                                            </td>
                                            <td>ID: <?php echo e($ticket->id); ?></td>
                                            <td class="table_payment">
                                                <span class="priority <?php echo e(strtolower($ticket->priority)); ?>"><?php echo e(ucfirst($ticket->priority)); ?></span>
                                            </td>
                                            <td><?php echo e($ticket->title ?? 'N/A'); ?></td>
                                            <td>
                                                <span class="table_status <?php echo e(in_array($ticket->status, ['closed', 'resolved']) ? 'complete' : 'pending'); ?>">
                                                    <?php echo e(ucfirst(str_replace('_', ' ', $ticket->status))); ?>

                                                </span>
                                            </td>
                                            <td class="action_icon">
                                                <div class="three_icons">
                                                    <a href="<?php echo e(route('ticket.details', $ticket->id)); ?>" title="View Ticket">
                                                        <i class="icon-base ti tabler-eye"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    </tbody>
                                </table>
                                <div class="pagination mt-3">
                                    <?php if (isset($component)) { $__componentOriginal5e64ee16cb42f0815c0860d815d8c40e = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal5e64ee16cb42f0815c0860d815d8c40e = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.dashboard-pagination.pagination','data' => ['paginator' => $tickets,'filters' => request()->query()]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('frontend.dashboard-pagination.pagination'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['paginator' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($tickets),'filters' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(request()->query())]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal5e64ee16cb42f0815c0860d815d8c40e)): ?>
<?php $attributes = $__attributesOriginal5e64ee16cb42f0815c0860d815d8c40e; ?>
<?php unset($__attributesOriginal5e64ee16cb42f0815c0860d815d8c40e); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal5e64ee16cb42f0815c0860d815d8c40e)): ?>
<?php $component = $__componentOriginal5e64ee16cb42f0815c0860d815d8c40e; ?>
<?php unset($__componentOriginal5e64ee16cb42f0815c0860d815d8c40e); ?>
<?php endif; ?>

                                </div>
                            <?php else: ?>
                                <div class="alert alert-info text-center p-4">
                                    <i class="fa-solid fa-info-circle fa-3x mb-3"></i>
                                    <?php if(request('status') == 'open'): ?>
                                        <h5><?php echo e(__('No Open Tickets Found')); ?></h5>
                                        <p class="mb-0"><?php echo e(__('You have no open tickets.')); ?></p>
                                    <?php elseif(request('status') == 'close'): ?>
                                        <h5><?php echo e(__('No Closed Tickets Found')); ?></h5>
                                        <p class="mb-0"><?php echo e(__('You have no closed tickets.')); ?></p>
                                    <?php else: ?>
                                        <h5><?php echo e(__('No Tickets Found')); ?></h5>
                                        <p class="mb-0"><?php echo e(__("You haven't created any tickets yet.")); ?></p>
                                    <?php endif; ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Create Ticket Modal -->
    <div class="modal fade" id="createTicketModal" tabindex="-1" aria-labelledby="createTicketModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="createTicketModalLabel"><?php echo e(__('Create New Ticket')); ?></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form method="POST" action="<?php echo e(route('ticket.store')); ?>">
                    <?php echo csrf_field(); ?>
                    <div class="modal-body">
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label for="department_id" class="form-label"><?php echo e(__('Department')); ?></label>
                                <select class="form-select" id="department_id" name="department_id" required>
                                    <option value=""><?php echo e(__('Select Department')); ?></option>
                                    <?php $__currentLoopData = $departments; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $department): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <option value="<?php echo e($department->id); ?>" <?php echo e(old('department_id') == $department->id ? 'selected' : ''); ?>><?php echo e($department->name); ?></option>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </select>
                                <?php $__errorArgs = ['department_id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                <div class="text-danger mt-1"><?php echo e($message); ?></div>
                                <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                            </div>
                            <div class="col-md-6">
                                <label for="priority" class="form-label"><?php echo e(__('Priority')); ?></label>
                                <select class="form-select" id="priority" name="priority" required>
                                    <option value=""><?php echo e(__('Select Priority')); ?></option>
                                    <option value="low" <?php echo e(old('priority') == 'low' ? 'selected' : ''); ?>><?php echo e(__('Low')); ?></option>
                                    <option value="normal" <?php echo e(old('priority') == 'normal' ? 'selected' : ''); ?>><?php echo e(__('Normal')); ?></option>
                                    <option value="high" <?php echo e(old('priority') == 'high' ? 'selected' : ''); ?>><?php echo e(__('High')); ?></option>
                                    <option value="urgent" <?php echo e(old('priority') == 'urgent' ? 'selected' : ''); ?>><?php echo e(__('Urgent')); ?></option>
                                </select>

                                <?php $__errorArgs = ['priority'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                <div class="text-danger mt-1"><?php echo e($message); ?></div>
                                <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="title" class="form-label"><?php echo e(__('Title')); ?></label>
                            <input type="text" class="form-control" id="title" name="title" value="<?php echo e(old('title')); ?>" required>
                            <?php $__errorArgs = ['title'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                            <div class="text-danger mt-1"><?php echo e($message); ?></div>
                            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>

                        <div class="mb-3">
                            <label for="description" class="form-label"><?php echo e(__('Description')); ?></label>
                            <textarea class="form-control" id="description" name="description" rows="5" required><?php echo e(old('description')); ?></textarea>
                            <?php $__errorArgs = ['description'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                            <div class="text-danger mt-1"><?php echo e($message); ?></div>
                            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn_gray" data-bs-dismiss="modal"><?php echo e(__('Cancel')); ?></button>
                        <button type="submit" class="btn_primary"><?php echo e(__('Create Ticket')); ?></button>
                    </div>
                </form>
            </div>
        </div>
    </div>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
    <script>
        $(document).ready(function() {
            <?php if($errors->any()): ?>
            $('#createTicketModal').modal('show');
            <?php endif; ?>
        });
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('frontend.user.layout.master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\Modules/SupportTicket\resources/views/Frontend/support-ticket.blade.php ENDPATH**/ ?>