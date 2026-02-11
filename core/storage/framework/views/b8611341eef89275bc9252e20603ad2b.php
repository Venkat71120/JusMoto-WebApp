<?php $__env->startSection('content'); ?>
<style>
/* ===== Modern Red Color Palette ===== */
:root {
    --primary-red: #dc2626;
    --primary-dark: #b91c1c;
    --primary-light: #fef2f2;
    --accent-red: #ef4444;
    --text-dark: #1f2937;
    --text-light: #6b7280;
    --white: #ffffff;
    --light-bg: #f8fafc;
    --shadow: 0 8px 30px rgba(220, 38, 38, 0.1);
}

/* ===== Base Reset ===== */
body {
    background: var(--primary-light);
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    margin: 0;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* ===== Simple Login Card ===== */
.login-card {
    width: 100%;
    max-width: 420px;
    background: var(--white);
    border-radius: 20px;
    padding: 40px 35px;
    box-shadow: var(--shadow);
}

/* ===== Logo ===== */
.login-logo {
    text-align: center;
    margin-bottom: 30px;
}

.login-logo img {
    max-width: 160px;
    height: auto;
    display: block;
    margin: 0 auto;
}

/* ===== Header ===== */
.login-header {
    text-align: center;
    margin-bottom: 30px;
}

.login-title {
    font-size: 28px;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 8px;
    line-height: 1.3;
}

.login-subtitle {
    font-size: 14px;
    color: var(--text-light);
    line-height: 1.5;
}

/* ===== Messages ===== */
.message-container {
    margin-bottom: 24px;
}

.alert {
    padding: 12px 16px;
    border-radius: 12px;
    font-size: 14px;
    margin-bottom: 16px;
}

.alert-danger {
    background: #fee2e2;
    color: #991b1b;
}

.alert-success {
    background: #dcfce7;
    color: #166534;
}

/* ===== Form - Fixed Alignment ===== */
.login-form {
    width: 100%;
}

.input-group {
    margin-bottom: 20px;
    width: 100%;
}

.input-label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-dark);
    margin-bottom: 8px;
}

.input-wrapper {
    position: relative;
    width: 100%;
}

.form-input {
    width: 100%;
    padding: 14px 16px 14px 46px;
    font-size: 15px;
    background: var(--light-bg);
    border-radius: 12px;
    border: none;
    outline: none;
    color: var(--text-dark);
    transition: all 0.2s ease;
    box-sizing: border-box;
}

.form-input:focus {
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    background: var(--white);
}

.input-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-light);
    font-size: 18px;
    line-height: 1;
}

.password-toggle {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--text-light);
    cursor: pointer;
    padding: 0;
    font-size: 18px;
    line-height: 1;
    transition: color 0.2s ease;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.password-toggle:hover {
    color: var(--primary-red);
}

/* ===== Remember & Forgot - Fixed Alignment ===== */
.remember-forgot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    width: 100%;
}

.remember-box {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.checkbox {
    width: 18px;
    height: 18px;
    background: var(--light-bg);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    flex-shrink: 0;
}

.checkbox:hover {
    background: #e5e7eb;
}

.remember-box input:checked + .checkbox {
    background: var(--primary-red);
    color: white;
}

.remember-box input:checked + .checkbox::after {
    content: '✓';
    font-size: 12px;
    line-height: 1;
}

.remember-text {
    font-size: 14px;
    color: var(--text-dark);
    white-space: nowrap;
}

.forgot-link {
    font-size: 14px;
    color: var(--primary-red);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
    white-space: nowrap;
}

.forgot-link:hover {
    color: var(--primary-dark);
}

/* ===== Login Button ===== */
.login-btn {
    width: 100%;
    padding: 15px;
    background: var(--primary-red);
    color: var(--white);
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 24px;
    box-sizing: border-box;
}

.login-btn:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
}

.login-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
}

/* ===== Auto Login - Fixed Alignment ===== */
.auto-login {
    background: var(--light-bg);
    border-radius: 12px;
    padding: 20px;
    margin-top: 24px;
}

.auto-login-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-light);
    text-align: center;
    margin-bottom: 12px;
}

.auto-login-content {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    gap: 10px;
    align-items: center;
    font-size: 13px;
}

.auto-login-item {
    padding: 8px 12px;
    background: var(--white);
    border-radius: 8px;
    color: var(--text-dark);
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.auto-login-btn {
    padding: 8px 16px;
    background: var(--accent-red);
    color: var(--white);
    border: none;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s ease;
    white-space: nowrap;
}

.auto-login-btn:hover {
    background: var(--primary-red);
}

/* ===== Hide default checkbox ===== */
.remember-box input {
    display: none;
}

/* ===== Responsive ===== */
@media (max-width: 480px) {
    .login-card {
        padding: 30px 25px;
        border-radius: 16px;
    }
    
    .login-title {
        font-size: 24px;
    }
    
    .remember-forgot {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
    
    .auto-login-content {
        grid-template-columns: 1fr;
        gap: 8px;
    }
    
    .auto-login-item {
        text-align: left;
        padding: 10px 12px;
    }
    
    .auto-login-btn {
        width: 100%;
        padding: 10px;
    }
}

@media (max-width: 350px) {
    .login-card {
        padding: 25px 20px;
    }
}
</style>

<div class="login-card">
    <!-- Logo -->
    <div class="login-logo">
        <a href="<?php echo e(route('homepage')); ?>">
            <?php echo render_image_markup_by_attachment_id(get_static_option('site_logo')); ?>

        </a>
    </div>

    <!-- Header -->
    <div class="login-header">
        <h1 class="login-title">
            <?php echo e(get_static_option('admin_login_page_title') ?? __('Welcome Back')); ?>

        </h1>
        <p class="login-subtitle">
            <?php echo e(get_static_option('admin_login_page_subtitle') ?? __('Login to your account')); ?>

        </p>
    </div>

    <!-- Messages -->
    <div class="message-container">
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

    <!-- Login Form -->
    <form action="<?php echo e(route('admin.login')); ?>" method="POST" class="login-form" id="loginForm">
        <?php echo csrf_field(); ?>
        
        <!-- Username -->
        <div class="input-group">
            <label class="input-label"><?php echo e(__('Username or Email')); ?></label>
            <div class="input-wrapper">
                <input type="text" 
                       id="username" 
                       name="username" 
                       class="form-input" 
                       placeholder="<?php echo e(__('Enter username or email')); ?>"
                       required>
                <span class="input-icon">
                    <i class="las la-user-alt"></i>
                </span>
            </div>
        </div>

        <!-- Password -->
        <div class="input-group">
            <label class="input-label"><?php echo e(__('Password')); ?></label>
            <div class="input-wrapper">
                <input type="password" 
                       id="password" 
                       name="password" 
                       class="form-input" 
                       placeholder="<?php echo e(__('Enter password')); ?>"
                       required>
                <span class="input-icon">
                    <i class="las la-lock"></i>
                </span>
                <button type="button" class="password-toggle" id="togglePassword">
                    <i class="las la-eye"></i>
                </button>
            </div>
        </div>

        <!-- Remember & Forgot -->
        <div class="remember-forgot">
            <label class="remember-box">
                <input type="checkbox" id="remember" name="remember" value="1">
                <span class="checkbox"></span>
                <span class="remember-text"><?php echo e(__('Remember Me')); ?></span>
            </label>
            <a href="<?php echo e(route('admin.forget.password')); ?>" class="forgot-link">
                <?php echo e(__('Forgot Password?')); ?>

            </a>
        </div>

        <!-- Login Button -->
        <button type="submit" class="login-btn" id="form_submit">
            <?php echo e(__('Login')); ?>

        </button>
    </form>

    <!-- Auto Login -->
    <?php if(preg_match('/(bytesed)/', url('/'))): ?>
    <div class="auto-login">
        <div class="auto-login-title"><?php echo e(__('Quick Login')); ?></div>
        <div class="auto-login-content">
            <div class="auto-login-item" id="td_username">super_admin</div>
            <div class="auto-login-item" id="td_password">12345678</div>
            <button type="button" class="auto-login-btn" id="autoLogin">
                <?php echo e(__('Login')); ?>

            </button>
        </div>
    </div>
    <?php endif; ?>
</div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
<script>
(function($){
"use strict";

// Toggle password visibility
$('#togglePassword').on('click', function () {
    const passwordInput = $('#password');
    const icon = $(this).find('i');
    
    if (passwordInput.attr('type') === 'password') {
        passwordInput.attr('type', 'text');
        icon.removeClass('la-eye').addClass('la-eye-slash');
    } else {
        passwordInput.attr('type', 'password');
        icon.removeClass('la-eye-slash').addClass('la-eye');
    }
});

// Form submission
$('#loginForm').on('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = $('#form_submit');
    const originalText = submitBtn.text();
    const messageContainer = $('.message-container');
    
    // Show loading
    submitBtn.prop('disabled', true).text('<?php echo e(__('Please wait...')); ?>');
    messageContainer.html('');
    
    // Prepare data
    const formData = {
        _token: "<?php echo e(csrf_token()); ?>",
        username: $('#username').val(),
        password: $('#password').val(),
        remember: $('#remember').is(':checked') ? 1 : 0
    };
    
    // AJAX request
    $.ajax({
        url: "<?php echo e(route('admin.login')); ?>",
        type: "POST",
        data: formData,
        dataType: 'json',
        success: function(response) {
            if (response.status === 'ok') {
                submitBtn.text('<?php echo e(__('Redirecting...')); ?>');
                messageContainer.html(
                    '<div class="alert alert-success">'+response.msg+'</div>'
                );
                setTimeout(() => window.location.reload(), 800);
            } else {
                messageContainer.html(
                    '<div class="alert alert-danger">'+response.msg+'</div>'
                );
                submitBtn.prop('disabled', false).text(originalText);
            }
        },
        error: function(xhr) {
            let errorHtml = '<div class="alert alert-danger">';
            
            if (xhr.responseJSON?.errors) {
                $.each(xhr.responseJSON.errors, function(_, messages) {
                    $.each(messages, function(_, message) {
                        errorHtml += '<p>'+message+'</p>';
                    });
                });
            } else if (xhr.responseJSON?.msg) {
                errorHtml += '<p>'+xhr.responseJSON.msg+'</p>';
            } else {
                errorHtml += '<p><?php echo e(__('Something went wrong')); ?></p>';
            }
            
            errorHtml += '</div>';
            messageContainer.html(errorHtml);
            submitBtn.prop('disabled', false).text(originalText);
        }
    });
});

// Auto login
$('#autoLogin').on('click', function() {
    $('#username').val('super_admin');
    $('#password').val('12345678');
    $('#remember').prop('checked', true);
    $('#loginForm').submit();
});

// Enter key support
$('#username, #password').on('keypress', function(e) {
    if (e.which === 13) {
        $('#loginForm').submit();
    }
});
})(jQuery);
</script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.login-screens', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/auth/admin/login.blade.php ENDPATH**/ ?>