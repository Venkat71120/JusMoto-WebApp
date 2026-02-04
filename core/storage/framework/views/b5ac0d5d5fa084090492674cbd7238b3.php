<?php $__env->startSection('title','Settings'); ?>
<?php $__env->startSection('style'); ?>
    <?php if (isset($component)) { $__componentOriginal2ef35e833688eaf1671feec59eea8f8d = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal2ef35e833688eaf1671feec59eea8f8d = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.media.css','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('frontend.media.css'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal2ef35e833688eaf1671feec59eea8f8d)): ?>
<?php $attributes = $__attributesOriginal2ef35e833688eaf1671feec59eea8f8d; ?>
<?php unset($__attributesOriginal2ef35e833688eaf1671feec59eea8f8d); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal2ef35e833688eaf1671feec59eea8f8d)): ?>
<?php $component = $__componentOriginal2ef35e833688eaf1671feec59eea8f8d; ?>
<?php unset($__componentOriginal2ef35e833688eaf1671feec59eea8f8d); ?>
<?php endif; ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15 d-flex flex-column gap-4">
            <div class="page_header">
                <h3 class="page_title"><?php echo e(__('Settings')); ?></h3>
                <p class="m_0"><?php echo e(__('Manage your dashboard here')); ?></p>
            </div>

            <div class="d-flex gap-4 flex-column flex-xl-row">
                <div class="d-flex flex-column gap-4 flex_1">
                    
                    <div class="setting_card">
                        <div class="card_header">
                            <h4 class="card_title"><?php echo e(__('Profile')); ?></h4>
                            <p class="card_description"><?php echo e(__('Edit your personal profile information.')); ?></p>
                        </div>
                        <div class="card_content d-flex justify-content-between align-items-center">
                            <div class="profile_info">
                                <div class="img_wrapper">
                                    <?php echo render_image_markup_by_attachment_id($user->image,'','thumb'); ?>

                                </div>
                                <div class="profile_name_edit d-flex gap-2">
                                    <div class="name_wrapper">
                                        <?php
                                            $fullName = trim(($user->first_name ?? '') . ' ' . ($user->last_name ?? ''));
                                        ?>
                                        <h3 class="display_name m-0"><?php echo e($fullName); ?></h3>
                                    </div>

                                    <div class="mail_wrapper">
                                        <p class="display_email m-0"><?php echo e($user->email); ?></p>
                                    </div>
                                    <div class="mail_wrapper">
                                        <p class="display_email m-0"><?php echo e($user->phone); ?></p>
                                    </div>
                                </div>
                            </div>
                            <div class="img_cng_btn">
                                <div class="img-upload-part d-flex align-items-center gap-4">
                                    <form id="uploadForm" action="<?php echo e(route('settings.update.profile')); ?>" method="POST" enctype="multipart/form-data">
                                        <?php echo csrf_field(); ?>
                                        <input type="file" name="profile_image" id="profileImageInput" accept="image/*" style="display: none;" onchange="submitForm()">

                                        <button type="button" class="btn_primary" onclick="openFileChooser()">
                                            <?php echo e(__('Change Image')); ?>

                                        </button>
                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>

                    
                    <form action="<?php echo e(route('settings.update.profile')); ?>" method="POST">
                        <?php echo csrf_field(); ?>
                        <div class="setting_card">
                            <div class="card_header">
                                <h4 class="card_title"><?php echo e(__('Personal Information')); ?></h4>
                                <p class="card_description"><?php echo e(__('Edit your personal profile information.')); ?></p>
                            </div>
                            <div class="card_content d-flex justify-content-between align-items-center w_650">
                                <div class="name_input_wrapper w-100">
                                    <div class="custom_input_wrapper">
                                        <label for="first_name" class="form-label"><?php echo e(__('First Name')); ?></label>
                                        <input type="text" name="first_name" id="first_name"
                                               class="custom_input"
                                               value="<?php echo e(old('first_name', $user->first_name)); ?>"
                                               required>
                                    </div>
                                    <div class="custom_input_wrapper">
                                        <label for="last_name" class="form-label"><?php echo e(__('Last Name')); ?></label>
                                        <input type="text" name="last_name" id="last_name"
                                               class="custom_input"
                                               value="<?php echo e(old('last_name', $user->last_name)); ?>"
                                               required>
                                    </div>
                                </div>
                            </div>
                            <div class="card_content d-flex justify-content-between align-items-center w_650 mt_12">
                                <div class="name_input_wrapper w-100">
                                    <div class="custom_input_wrapper">
                                        <label for="user_name" class="form-label"><?php echo e(__('User Name')); ?></label>
                                        <input type="text" name="user_name" id="user_name"
                                               class="custom_input"
                                               value="<?php echo e(old('user_name', $user->username)); ?>"
                                               required>
                                        <span id="user_name_availability" class="d-none"></span>
                                    </div>
                                    <div class="custom_input_wrapper">
                                        <label for="date_of_birth" class="form-label"><?php echo e(__('Date of Birth')); ?></label>
                                        <input type="date" name="date_of_birth" id="date_of_birth"
                                               class="custom_input"
                                               value="<?php echo e(old('date_of_birth', $user->date_of_birth)); ?>">
                                    </div>

                                </div>
                            </div>
                            <div class="mt-3">
                                <button type="submit" class="btn_primary"><?php echo e(__('Save Profile')); ?></button>
                            </div>
                        </div>
                    </form>
                </div>
                
                <div class="d-flex flex-column flex_1">
                    <div class="setting_card">
                        <div class="card_header">
                            <h4 class="card_title"><?php echo e(__('Contact Information')); ?></h4>
                            <p class="card_description"><?php echo e(__('Update your email address and phone number.')); ?></p>
                        </div>

                        <div class="card_content">
                            <div class="d-flex gap-3">
                                
                                <button type="button" class="btn_primary" data-bs-toggle="modal" data-bs-target="#changeEmailModal">
                                    <?php echo e(__('Change Email')); ?>

                                </button>

                                
                                <button type="button" class="btn_primary" data-bs-toggle="modal" data-bs-target="#changePhoneModal">
                                    <?php echo e(__('Change Phone')); ?>

                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="setting_card mt-3">
                        <div class="card_header">
                            <h4 class="card_title"><?php echo e(__('Account Information')); ?></h4>
                            <p class="card_description"><?php echo e(__('Edit your account information.')); ?></p>
                        </div>
                        <div class="card_content">
                            <form action="<?php echo e(route('settings.update.password')); ?>" method="POST" class="w-100">
                                <?php echo csrf_field(); ?>
                                <div class="name_input_wrapper w-100">
                                    <div class="custom_input_wrapper">
                                        <label for="old_password" class="form-label"><?php echo e(__('Current Password')); ?></label>
                                        <div class="relative_wrapper">
                                            <input type="password" name="old_password" id="old_password"
                                                   class="custom_input w-100" value="<?php echo e(old('old_password')); ?>">
                                            <div class="pass_eye_btn">
                                                <i class="base-icon ti tabler-eye d-none"></i>
                                                <i class="base-icon ti tabler-eye-off "></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="custom_input_wrapper">
                                        <label for="new_password" class="form-label"><?php echo e(__('New Password')); ?></label>
                                        <div class="relative_wrapper">
                                            <input type="password" name="new_password" id="new_password"
                                                   class="custom_input w-100" value="<?php echo e(old('new_password')); ?>">
                                            <div class="pass_eye_btn">
                                                <i class="base-icon ti tabler-eye d-none"></i>
                                                <i class="base-icon ti tabler-eye-off "></i>
                                            </div>
                                        </div>
                                        <span class="length-check d-none"></span>
                                    </div>
                                    <div class="custom_input_wrapper">
                                        <label for="new_password_confirmation" class="form-label"><?php echo e(__('Confirm Password')); ?></label>
                                        <div class="relative_wrapper">
                                            <input type="password" name="new_password_confirmation" id="new_password_confirmation"
                                                   class="custom_input w-100" value="<?php echo e(old('new_password_confirmation')); ?>">
                                            <div class="pass_eye_btn">
                                                <i class="base-icon ti tabler-eye d-none"></i>
                                                <i class="base-icon ti tabler-eye-off "></i>
                                            </div>
                                        </div>
                                        <span id="check_password_match" class="d-none"></span>
                                    </div>
                                </div>
                                <div class="custom_select">
                                    <label for="language" class="select_label mb_6"><?php echo e(__('Language')); ?></label>
                                    <select name="language" id="language" class="custom_input">
                                        <?php $__currentLoopData = $all_lang; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $lang): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <option value="<?php echo e($lang->slug); ?>" <?php if($lang->slug  == $user->selected_lang): ?> selected <?php endif; ?>><?php echo e($lang->name); ?></option>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    </select>
                                </div>
                                <div class="mt-3">
                                    <button type="submit" class="btn_primary"><?php echo e(__('Update Password')); ?></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <?php echo $__env->make('frontend.user.client.change-email-modal', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
            <?php echo $__env->make('frontend.user.client.change-phone-modal', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
        </div>
    </div>
    <?php if (isset($component)) { $__componentOriginal80e305c74df3fdc49e64220f2b928bf3 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal80e305c74df3fdc49e64220f2b928bf3 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.msg.flash-msg','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('msg.flash-msg'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal80e305c74df3fdc49e64220f2b928bf3)): ?>
<?php $attributes = $__attributesOriginal80e305c74df3fdc49e64220f2b928bf3; ?>
<?php unset($__attributesOriginal80e305c74df3fdc49e64220f2b928bf3); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal80e305c74df3fdc49e64220f2b928bf3)): ?>
<?php $component = $__componentOriginal80e305c74df3fdc49e64220f2b928bf3; ?>
<?php unset($__componentOriginal80e305c74df3fdc49e64220f2b928bf3); ?>
<?php endif; ?>
    <?php if (isset($component)) { $__componentOriginalc9692a4e4f266b622edf3104a05a2ca4 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalc9692a4e4f266b622edf3104a05a2ca4 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.msg.response-message','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('msg.response-message'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalc9692a4e4f266b622edf3104a05a2ca4)): ?>
<?php $attributes = $__attributesOriginalc9692a4e4f266b622edf3104a05a2ca4; ?>
<?php unset($__attributesOriginalc9692a4e4f266b622edf3104a05a2ca4); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc9692a4e4f266b622edf3104a05a2ca4)): ?>
<?php $component = $__componentOriginalc9692a4e4f266b622edf3104a05a2ca4; ?>
<?php unset($__componentOriginalc9692a4e4f266b622edf3104a05a2ca4); ?>
<?php endif; ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
    <script>
        $(document).ready(function () {

            $(document).on('keyup', '#user_name', function () {
                let username = $(this).val();
                let usernameRegex = /^[a-zA-Z0-9]+$/;

                if (usernameRegex.test(username)) {
                    $.ajax({
                        url: "<?php echo e(route('user.name.availability')); ?>",
                        type: 'post',
                        data: {username: username},
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        success: function (res) {
                            let $msg = $("#user_name_availability").removeClass("d-none");
                            if (res.status === 'available') {
                                $msg.text(res.msg).css("color", "green");
                            } else {
                                $msg.text(res.msg).css("color", "red");
                            }
                        }
                    });
                } else if (username.length > 0) {
                    $("#user_name_availability")
                        .removeClass("d-none")
                        .text("<?php echo e(__('Enter valid username')); ?>")
                        .css("color", "red");
                } else {
                    // hide if input is empty
                    $("#user_name_availability").addClass("d-none").text("");
                }
            });


            $(document).on('keyup', '#email', function () {
                let email = $(this).val();
                let emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

                if (emailRegex.test(email)) {
                    $.ajax({
                        url: "<?php echo e(route('user.email.availability')); ?>",
                        type: 'post',
                        data: {email: email},
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        success: function (res) {
                            let $msg = $("#email_availability").removeClass("d-none");
                            if (res.status === 'available') {
                                $msg.text(res.msg).css("color", "green");
                            } else {
                                $msg.text(res.msg).css("color", "red");
                            }
                        }
                    });
                } else if (email.length > 0) {
                    $("#email_availability")
                        .removeClass("d-none")
                        .text("<?php echo e(__('Enter valid email')); ?>")
                        .css("color", "red");
                } else {
                    $("#email_availability").addClass("d-none").text("");
                }
            });

            $(document).on('keyup', '#phone', function () {
                let phone = $(this).val();
                let phoneRegex = /^\+?[0-9]{7,15}$/;

                if (phoneRegex.test(phone)) {
                    $.ajax({
                        url: "<?php echo e(route('user.phone.number.availability')); ?>",
                        type: 'post',
                        data: {phone: phone},
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        success: function (res) {
                            let $msg = $("#phone_availability").removeClass("d-none");
                            if (res.status === 'available') {
                                $msg.text(res.msg).css("color", "green");
                            } else {
                                $msg.text(res.msg).css("color", "red");
                            }
                        }
                    });
                } else if (phone.length > 0) {
                    $("#phone_availability")
                        .removeClass("d-none")
                        .text("<?php echo e(__('Enter valid number')); ?>")
                        .css("color", "red");
                } else {
                    $("#phone_availability").addClass("d-none").text("");
                }
            });

            $(document).on('keyup', '#new_password, #new_password_confirmation', function () {
                let password = $("#new_password").val();
                let confirm_password = $("#new_password_confirmation").val();

                let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                if (password.length === 0) {
                    // remove message if input is empty
                    $('.length-check').next('span').remove();
                } else if (passwordPattern.test(password)) {
                    $('.length-check')
                        .next('span').remove()
                        .end()
                        .after('<span style="color:green; margin-left:8px;">Password meets all requirements</span>');
                } else {
                    $('.length-check')
                        .next('span').remove()
                        .end()
                        .after('<span style="color:red; margin-left:8px;">Password must be at least 8 chars, include uppercase, lowercase, number & special char</span>');
                }

                if (confirm_password.length > 0) {
                    // remove old span first
                    $("#check_password_match").next("span").remove();

                    if (password === confirm_password) {
                        $("#check_password_match").after(
                            '<span style="color:green; margin-left:8px;">Password match!</span>'
                        );
                    } else {
                        $("#check_password_match").after(
                            '<span style="color:red; margin-left:8px;">Password does not match!</span>'
                        );
                    }
                } else {
                    $("#check_password_match").next("span").remove();
                }
            });
        });
        function openFileChooser() {
            document.getElementById('profileImageInput').click();
        }

        function submitForm() {
            const fileInput = document.getElementById('profileImageInput');
            if (fileInput.files.length > 0) {
                document.getElementById('uploadForm').submit();
            }
        }
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('frontend.user.layout.master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/user/client/settings.blade.php ENDPATH**/ ?>