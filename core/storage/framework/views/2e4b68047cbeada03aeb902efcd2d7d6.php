<body>
<header class="bg_active bg_active_Header">
    <?php
        $all_lang = App\Models\Backend\Language::all();
        $client=auth()->user();
    ?>
    <nav class="panel_container py_8 d-flex align-items-center">
        <div class="flex-grow-1 site_icon_container">
            <a href="<?php echo e(route('user.dashboard')); ?>" class="site_logo"><?php echo render_image_markup_by_attachment_id(get_static_option('site_logo')); ?></a>
            <div class="menu_toggle"><i class="icon-base ti tabler-menu-2"></i></div>
        </div>
        <div class="main_container flex-grow-1 ms-auto pl_15">
            <div class="sm_justify_unset d-flex justify-content-between">
                <div class="d-flex align-items-center">

                </div>
                <div class="d-flex gap-2">
                    <div class="page_language_select">
                        <div class="translate_logo">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_10511_2781)">
                                    <path d="M2.33203 2.91797H6.41536" stroke="currentColor" stroke-width="1.2"
                                          stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.2487 1.75V2.91667C5.2487 5.49383 3.94261 7.58333 2.33203 7.58333"
                                          stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                    <path d="M2.91797 5.25C2.91797 6.50067 4.63997 7.52967 6.8263 7.58333"
                                          stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                    <path d="M7 11.668L9.33333 6.41797L11.6667 11.668" stroke="currentColor"
                                          stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.1401 10.5H7.52344" stroke="currentColor" stroke-width="1.2"
                                          stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </div>
                        <form action="<?php echo e(route('client.change.language')); ?>" method="POST" id="language_form">
                            <?php echo csrf_field(); ?>
                            <select name="selected_lang" id="language_changer" class="page_language_changer" onchange="document.getElementById('language_form').submit();">
                                <?php $__currentLoopData = $all_lang; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $lang): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <option value="<?php echo e($lang->slug); ?>" <?php if($lang->slug  == $client->selected_lang): ?> selected <?php endif; ?>><?php echo e($lang->name); ?></option>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </select>
                        </form>
                    </div>
                    <?php echo $__env->make('frontend.user.layout.partial.notifications', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
                    <div class="profile_wrapper bg_light d-flex gap-2 align-items-center profile_dropdown_wrapper">
                        <div class="profile_image">
                            <?php echo render_image_markup_by_attachment_id($client->image,'','thumb'); ?>

                        </div>
                        <?php
                            if (!empty($client->first_name) && !empty($client->last_name)) {
                                $fullName = $client->first_name . " " . $client->last_name;
                            } else {
                                $fullName = $client->username;
                            }

                        ?>
                        
                        <div class="profile_icon">
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>

                        <!-- Dropdown Menu -->
                        <ul class="profile_dropdown_menu">
                            <li><a href="<?php echo e(url('/')); ?>"><?php echo e(__('Home')); ?></a></li>
                            <li><a href="<?php echo e(route('settings.index')); ?>"><?php echo e(__('Settings')); ?></a></li>
                            <li><a href="<?php echo e(route('auth.logout')); ?>"><?php echo e(__('LogOut')); ?></a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/user/layout/partial/navbar.blade.php ENDPATH**/ ?>