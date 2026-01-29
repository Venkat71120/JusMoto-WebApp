<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('Login')); ?> - <?php echo e(get_static_option('site_title')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <main>
        <section class="account-management-page">
            <!-- Wrapper (main content) -->
            <div class="account-management-wrapper">

                <!-- Left Side -->
                <div class="left-card-wrapper">
                    <div class="login-left-card">
                        <?php if(!empty(get_static_option('register_page_social_login_show_hide'))): ?>
                           <!--  Back Button -->
                            <div class="back-btn">
                                <a href="<?php echo e(route('auth.social.login')); ?>">
                                    <span><i class="fa-solid fa-arrow-left"></i></span>
                                    <?php echo e(__('Back')); ?>

                                </a>
                            </div>
                        <?php endif; ?>

                        <h2 class="subtitle-1"><?php echo e(get_static_option('login_form_title')); ?></h2>

                        <form action="<?php echo e(route('auth.login.submit')); ?>" method="POSt" class="login-form">
                            <?php echo csrf_field(); ?>
                            <!-- Email -->
                            <label for="email"><?php echo e(__('Email')); ?></label>
                            <div class="input-group">
                                <input type="email" id="email" name="email" class="custom-input" value="<?php echo e(old('email')); ?>" placeholder="Enter email" />
                            </div>

                            <!-- Password -->
                            <label for="password"><?php echo e(__('Password')); ?></label>
                            <div class="input-group custom-input relative_wrapper">
                                <input type="password" id="password" name="password" class="w-100 pss-input" value="<?php echo e(old('password')); ?>" placeholder="Enter password" />
                                <div class="pass_eye_btn">
                                    <i class="base-icon ti tabler-eye d-none"></i>
                                    <i class="base-icon ti tabler-eye-off "></i>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <input class="form-check-input me-2" type="checkbox" id="remember" name="remember">
                                    <label class="form-check-label mb-0" for="remember"><?php echo e(__('Remember me')); ?></label>
                                </div>
                                <div>
                                    <a href="<?php echo e(route('user.forget.password')); ?>"><?php echo e(__('Forget password')); ?></a>
                                </div>
                            </div>
                            <button type="submit" class="signin-btn"><?php echo e(get_static_option('login_form_button')); ?></button>
                            <div class="alredy-account text-center black-text fw_medium mt-5">
                                <p><?php echo e(__("Don't have an account? ")); ?><a href="<?php echo e(route('auth.signup')); ?>" class="primary-text"><?php echo e(__('Sign up')); ?></a></p>
                            </div>
                            <?php if(preg_match('/(bytesed)/',url('/'))): ?>
                                <div class="adminlogin-info mt-3">
                                    <table class="table">
                                        <th><?php echo e(__('Username')); ?></th>
                                        <th><?php echo e(__('Password')); ?></th>
                                        <th><?php echo e(__('Action')); ?></th>
                                        <tbody>
                                        <tr class="border-0">
                                            <td class="border-0" id="td_email">john@gmail.com</td>
                                            <td class="border-0" id="td_password">12345678</td>
                                            <td class="border-0">
                                                <button type="button" class="cmn-btn primary-btn md-btn autoLogin" id="autoLogin"><?php echo e(__('Login')); ?></button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            <?php endif; ?>
                        </form>
                    </div>
                </div>

                <!-- Right Side -->
                <div class="login-right-part d-sm-none d-md-block d-lg-block d-none">
                    <?php echo render_image_markup_by_attachment_id(get_static_option('login_page_image'), '', 'full'); ?>

                </div>
            </div>
        </section>
        <?php if(request()->has('redirect_to')): ?>
                <?php session(['redirect_after_login' => request('redirect_to')]); ?>
        <?php endif; ?>

    </main>
    <?php if(request()->has('redirect_to')): ?>
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                toastr.error("Please login to proceed to checkout.");
            });

        </script>
    <?php endif; ?>


<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
    <script>
        $(document).on('click','#autoLogin',function(){
            let el = $(this);
            let email = $('#td_email').text();
            let passwrod = $('#td_password').text();
            $('#email').val(email);
            $('#password').val(passwrod);
            $('.signin-btn').trigger('click');
        });
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('frontend.layout.master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/venkatesharavamudhan/Claude/JusMoto/main-files/Admin Panel/extracted/gocar-v1.1.0/core/resources/views/auth/client/signin.blade.php ENDPATH**/ ?>