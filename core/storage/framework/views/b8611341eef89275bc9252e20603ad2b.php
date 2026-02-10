<?php $__env->startSection('content'); ?>
    <style>
            .password-toggle {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            color: #777;
        }
    </style>
    <section class="loginForm">
        <div class="loginForm__flex">
            <div class="loginForm__left">
                <div class="loginForm__left__inner desktop-center">
                    <div class="loginForm__right__logo">
                        <div class="loginForm__logo">
                            <a href="<?php echo e(route('homepage')); ?>" class="logo">
                                <?php echo render_image_markup_by_attachment_id(get_static_option('site_logo')); ?>

                            </a>
                        </div>
                    </div>
                    <div class="loginForm__header">
                        <h2 class="loginForm__header__title text-start">
                            <?php echo e(get_static_option('admin_login_page_title') ?? __('Welcome Back')); ?>

                        </h2>
                        <p class="loginForm__header__para text-start">
                            <?php echo e(get_static_option('admin_login_page_subtitle') ?? __('Login with your data that you entered during registration.')); ?>

                        </p>
                    </div>
                    <div class="error-message text-start">
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
                    </div>
                    <div class="loginForm__wrapper">
                        <form action="<?php echo e(route('admin.login')); ?>" class="custom_form" method="POST">
                            <?php echo csrf_field(); ?>
                            <div class="single_input">
                                <label class="label_title"><?php echo e(__('Username or Email')); ?></label>
                                <div class="include_icon">
                                    <input class="form--control radius-5" type="text" id="username" name="username"
                                        placeholder="<?php echo e(__('Username or Email')); ?>" autocomplete="username" required>
                                    <div class="icon"><span><i class="las la-user-alt"></i></span></div>
                                </div>
                            </div>

                            <div class="single_input mt-3">
                                <label class="label_title"><?php echo e(__('Password')); ?></label>
                                <div class="include_icon position-relative">
                                    <input class="form--control radius-5" type="password" id="password" name="password"
                                        placeholder="<?php echo e(__('Password')); ?>" autocomplete="current-password" required>

                                    <div class="icon"><span><i class="las la-lock"></i></span></div>

                                  <span class="password-toggle" id="togglePassword">

                                        <i class="las la-eye"></i>
                                    </span>
                                </div>

                            </div>

                            <div class="loginForm__wrapper__remember single_input mt-3">
                                <div class="dashboard_checkBox">
                                    <input class="dashboard_checkBox__input" id="remember" name="remember" type="checkbox"
                                        value="1">
                                    <label class="dashboard_checkBox__label" for="remember"><?php echo e(__('Remember Me')); ?></label>
                                </div>
                                <!-- forgetPassword -->
                                <div class="forgotPassword">
                                    <a href="<?php echo e(route('admin.forget.password')); ?>"
                                        class="forgotPass"><?php echo e(__('Forgot passwords?')); ?></a>
                                </div>
                            </div>
                            <div class="btn_wrapper single_input mt-3">
                                <button type="submit" id="form_submit" class="cmnBtn btn_5 btn_bg_blue radius-5 w-100">
                                    <?php echo e(__('Login')); ?>

                                </button>

                            </div>
                            <?php if(preg_match('/(bytesed)/', url('/'))): ?>
                                <div class="adminlogin-info mt-3">
                                    <table class="table">
                                        <th><?php echo e(__('Username')); ?></th>
                                        <th><?php echo e(__('Password')); ?></th>
                                        <th><?php echo e(__('Action')); ?></th>
                                        <tbody>
                                            <tr class="border-0">
                                                <td class="border-0" id="td_username">super_admin</td>
                                                <td class="border-0" id="td_password">12345678</td>
                                                <td class="border-0">
                                                    <button type="button"
                                                        class="cmnBtn btn_5 btn_bg_success btnIcon radius-5 autoLogin"
                                                        id="autoLogin"><?php echo e(__('Login')); ?></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            <?php endif; ?>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
   <script>
(function($){
"use strict";

function togglePassword(){
    const input = document.getElementById('password');
    input.type = input.type === 'password' ? 'text' : 'password';
}
$(document).on('click', '#togglePassword', function () {
    const input = $('#password');
    const icon = $(this).find('i');

    if (input.attr('type') === 'password') {
        input.attr('type', 'text');
        icon.removeClass('la-eye').addClass('la-eye-slash');
    } else {
        input.attr('type', 'password');
        icon.removeClass('la-eye-slash').addClass('la-eye');
    }
});

$(document).ready(function (){

    $(document).on('click','#form_submit',function (e){
        e.preventDefault();

        let el = $(this);
        let erContainer = $(".error-message");

        erContainer.html('');
        el.prop('disabled', true).text('<?php echo e(__('Please Wait...')); ?>');

        $.ajax({
            url: "<?php echo e(route('admin.login')); ?>",
            type: "POST",
            data: {
                _token : "<?php echo e(csrf_token()); ?>",
                username : $('#username').val(),
                password : $('#password').val(),
                remember : $('#remember').is(':checked') ? 1 : 0,
            },
            error:function(xhr){
                let errors = xhr.responseJSON;

                erContainer.html('<div class="alert alert-danger"></div>');

                if(errors?.errors){
                    $.each(errors.errors, function(_, value){
                        erContainer.find('.alert').append('<p>'+value+'</p>');
                    });
                }else if(errors?.msg){
                    erContainer.find('.alert').append('<p>'+errors.msg+'</p>');
                }else{
                    erContainer.find('.alert').append('<p><?php echo e(__('Something went wrong.')); ?></p>');
                }

                el.prop('disabled', false).text('<?php echo e(__('Login')); ?>');
            },
            success:function (data){
                if (data.status === 'ok'){
                    el.text('<?php echo e(__('Redirecting...')); ?>');
                    erContainer.html('<div class="alert alert-success">'+data.msg+'</div>');
                    setTimeout(()=>location.reload(),800);
                }else{
                    erContainer.html('<div class="alert alert-'+data.type+'">'+data.msg+'</div>');
                    el.prop('disabled', false).text('<?php echo e(__('Login')); ?>');
                }
            }
        });
    });

});
})(jQuery);
</script>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.login-screens', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/auth/admin/login.blade.php ENDPATH**/ ?>