<?php $__env->startSection('content'); ?>
    <main>
        <section class="account-management-page">
            <!-- Wrapper (main content) -->
            <div class="account-management-wrapper">

                <!-- Left Side -->
                <div class="left-card-wrapper">
                    <div class="login-left-card">
                        <!--  Back Button -->
                        <div class="back-btn">
                            <a href="<?php echo e(route('auth.login')); ?>">
                                <span><i class="fa-solid fa-arrow-left"></i></span>
                                <?php echo e(__('Back')); ?>

                            </a>
                        </div>

                        <h2 class="subtitle-1"><?php echo e(__('Forget Password')); ?></h2>
                        <?php if($errors->any()): ?>
                            <div class="alert alert-danger alert-dismissible fade show mt-4 mb-4" role="alert">
                                <ul class="mb-0">
                                    <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <li><?php echo e($error); ?></li>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </ul>
                            </div>
                        <?php elseif(session('msg')): ?>
                            <div class="alert alert-<?php echo e(session('type', 'info')); ?> alert-dismissible fade show mt-4 mb-4" role="alert">
                                <?php echo e(session('msg')); ?>

                            </div>
                        <?php else: ?>
                            <div class="alert alert-warning alert-bs-dismissible fade show mt-4 mb-4" role="alert">
                                <?php echo e(__('Hello there, here you can reset you password.')); ?>

                            </div>
                        <?php endif; ?>


                        <form action="<?php echo e(route('user.forget.password')); ?>" method="POSt" class="login-form">
                            <?php echo csrf_field(); ?>
                            <!-- Email -->
                            <label for="email"><?php echo e(__('Username or Email')); ?></label>
                            <div class="input-group">
                                <input type="text"  id="username" name="username" placeholder="<?php echo e(__('Username or Email')); ?>" class="custom-input" value="<?php echo e(old('username')); ?>" />
                            </div>
                            <button type="submit" class="signin-btn"><?php echo e(__('Send Reset Password Mail')); ?></button>

                        </form>
                    </div>
                </div>

                <!-- Right Side -->
                <div class="login-right-part d-sm-none d-md-block d-lg-block d-none">
                    <?php echo render_image_markup_by_attachment_id(get_static_option('login_page_image'), '', 'full'); ?>

                </div>
            </div>
        </section>


    </main>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('frontend.layout.master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/auth/client/forget-password.blade.php ENDPATH**/ ?>