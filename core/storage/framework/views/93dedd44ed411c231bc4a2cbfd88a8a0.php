<!-- Support Ticket Module -->








<!-- Admin Manage Role Module -->
<?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('admin-role-manage')): ?>
<li class="sidebar-menu-item has-children <?php if(request()->is('admin/manage*')): ?> active open <?php endif; ?>">
    <a href="javascript:void(0)" class="menu-toggle">
        <span class="menu-icon"><i class="las la-user-cog"></i></span>
        <span class="menu-title"><?php echo e(__('Admin Role Manage')); ?></span>
        <span class="menu-arrow"><i class="las la-angle-down"></i></span>
    </a>
    <ul class="submenu">
        <li class="submenu-item <?php if(request()->is('admin/manage/create/new-admin')): ?> selected <?php endif; ?>">
            <a href="<?php echo e(route('admin.create')); ?>">
                <span class="submenu-dot"></span>
                <?php echo e(__('Add New Admin')); ?>

            </a>
        </li>
        <li class="submenu-item <?php if(request()->is('admin/manage/all-admins')): ?> selected <?php endif; ?>">
            <a href="<?php echo e(route('admin.all')); ?>">
                <span class="submenu-dot"></span>
                <?php echo e(__('All Admins')); ?>

            </a>
        </li>
        <li class="submenu-item <?php if(request()->is('admin/manage/permission/role/all')): ?> selected <?php endif; ?>">
            <a href="<?php echo e(route('admin.role.create')); ?>">
                <span class="submenu-dot"></span>
                <?php echo e(__('All Roles')); ?>

            </a>
        </li>
    </ul>
</li>
<?php endif; ?>

<!-- Country Manage Module -->
<?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['state-list', 'state-csv-file-import', 'city-list', 'city-csv-file-import', 'area-list', 'area-csv-file-import'])): ?>
<li class="sidebar-menu-item has-children <?php if(request()->is('admin/location/*')): ?> active open <?php endif; ?>">
    <a href="javascript:void(0)" class="menu-toggle">
        <span class="menu-icon"><i class="las la-globe"></i></span>
        <span class="menu-title"><?php echo e(__('Location Manage')); ?></span>
        <span class="menu-arrow"><i class="las la-angle-down"></i></span>
    </a>
    <ul class="submenu">
        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('state-list')): ?>
        <li class="submenu-item <?php if(request()->is('admin/location/state/all-state')): ?> selected <?php endif; ?>">
            <a href="<?php echo e(route('admin.state.all')); ?>">
                <span class="submenu-dot"></span>
                <?php echo e(__('All States')); ?>

            </a>
        </li>
        <?php endif; ?>
        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('state-csv-file-import')): ?>
        <li class="submenu-item <?php if(request()->is('admin/location/state/csv/import')): ?> selected <?php endif; ?>">
            <a href="<?php echo e(route('admin.state.import.csv.settings')); ?>">
                <span class="submenu-dot"></span>
                <?php echo e(__('Import State')); ?>

            </a>
        </li>
        <?php endif; ?>
        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('city-list')): ?>
        <li class="submenu-item <?php if(request()->is('admin/location/city/all-city')): ?> selected <?php endif; ?>">
            <a href="<?php echo e(route('admin.city.all')); ?>">
                <span class="submenu-dot"></span>
                <?php echo e(__('All Cities')); ?>

            </a>
        </li>
        <?php endif; ?>
        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('city-csv-file-import')): ?>
        <li class="submenu-item <?php if(request()->is('admin/location/city/csv/import')): ?> selected <?php endif; ?>">
            <a href="<?php echo e(route('admin.city.import.csv.settings')); ?>">
                <span class="submenu-dot"></span>
                <?php echo e(__('Import Cities')); ?>

            </a>
        </li>
        <?php endif; ?>
        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('area-list')): ?>
        <li class="submenu-item <?php if(request()->is('admin/location/area/all-area')): ?> selected <?php endif; ?>">
            <a href="<?php echo e(route('admin.area.all')); ?>">
                <span class="submenu-dot"></span>
                <?php echo e(__('All Areas')); ?>

            </a>
        </li>
        <?php endif; ?>
        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('area-csv-file-import')): ?>
        <li class="submenu-item <?php if(request()->is('admin/location/area/csv/import')): ?> selected <?php endif; ?>">
            <a href="<?php echo e(route('admin.area.import.csv.settings')); ?>">
                <span class="submenu-dot"></span>
                <?php echo e(__('Import Areas')); ?>

            </a>
        </li>
        <?php endif; ?>
    </ul>
</li>
<?php endif; ?>


<!-- Integration Module -->




<!-- Support Ticket Module -->
<?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['department-list', 'support-ticket-list'])): ?>
<li class="sidebar-menu-item has-children <?php if(request()->is('admin/support-ticket/*')): ?> active open <?php endif; ?>">
    <a href="javascript:void(0)" class="menu-toggle">
        <span class="menu-icon"><i class="las la-headset"></i></span>
        <span class="menu-title"><?php echo e(__('Service Requests')); ?></span>
        <span class="menu-arrow"><i class="las la-angle-down"></i></span>
    </a>
    <ul class="submenu">
        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('department-list')): ?>
        <li class="submenu-item <?php if(request()->is('admin/support-ticket/department')): ?> selected <?php endif; ?>">
            <a href="<?php echo e(route('admin.department')); ?>">
                <span class="submenu-dot"></span>
                <?php echo e(__('Service Type')); ?>

            </a>
        </li>
        <?php endif; ?>
        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('support-ticket-list')): ?>
            <li class="submenu-item <?php if(request()->is('admin/support-ticket/tickets')): ?> selected <?php endif; ?>">
                <a href="<?php echo e(route('admin.ticket')); ?>">
                    <span class="submenu-dot"></span>
                    <?php echo e(__('Service Requests')); ?>

                </a>
            </li>
        <?php endif; ?>
    </ul>
</li>
<?php endif; ?>

<!-- Pages Module -->


<?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('payment-currency-settings')): ?>
<li class="sidebar-menu-item has-children <?php if(request()->is('admin/payment-settings/*') || request()->is('admin/payment-gateway/currency-settings')): ?> active open <?php endif; ?>">
    <a href="javascript:void(0)" class="menu-toggle">
        <span class="menu-icon"><i class="las la-money-check-alt"></i></span>
        <span class="menu-title"><?php echo e(__('Payment Gateway')); ?></span>
        <span class="menu-arrow"><i class="las la-angle-down"></i></span>
    </a>
    <ul class="submenu">
        <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('payment-currency-settings')): ?>
            <li class="submenu-item <?php if(request()->is('admin/payment-gateway/currency-settings')): ?> selected <?php endif; ?>">
                <a href="<?php echo e(route('admin.payment.gateway.currency.settings')); ?>">
                    <span class="submenu-dot"></span>
                    <?php echo e(__('Currency Settings')); ?>

                </a>
            </li>
        <?php endif; ?>
        <?php
            $payment_gateways = \Modules\PaymentGateways\app\Models\PaymentGateway::pluck('name');
        ?>
        <?php $__currentLoopData = $payment_gateways ?? []; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $gateway): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <li class="submenu-item <?php if(request()->is("admin/payment-settings/payment/{$gateway}")): ?> selected <?php endif; ?>">
                <a class="text-capitalize" href="<?php echo e(route("admin.payment.settings.{$gateway}")); ?>">
                    <span class="submenu-dot"></span>
                    <?php echo e(__($gateway)); ?>

                </a>
            </li>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

        <li class="submenu-item <?php if(request()->is("admin/payment-settings/payment/cash-on-delivery")): ?> selected <?php endif; ?>">
            <a class="text-capitalize" href="<?php echo e(route("admin.payment.settings.cod")); ?>">
                <span class="submenu-dot"></span>
                <?php echo e(__('Cash on Delivery')); ?>

            </a>
        </li>
    </ul>
</li>
<?php endif; ?>



<!-- Render all module route start -->
<?php
    $all_modules_route = (new \App\Helpers\ModuleMetaData())->getAllExternalMenu() ?? [];
?>

<?php $__currentLoopData = $all_modules_route; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $externalMenu): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <?php
        $flag = false;
        $activeRoutes = array_column((array) $externalMenu, 'route');
    ?>

    <?php $__currentLoopData = $externalMenu; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $individual_menu_item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php
            $convert_to_array = (array) $individual_menu_item;
            $convert_to_array['label'] = __($convert_to_array['label']);
            if (array_key_exists('permissions', $convert_to_array) && !is_array($convert_to_array['permissions'])) {
                $convert_to_array['permissions'] = [$convert_to_array['permissions']];
            }
            $routeName = $convert_to_array['route'];
            $icon = array_key_exists('icon', $convert_to_array) ? $convert_to_array['icon'] : '';
        ?>
        
        <?php if(count($externalMenu) > 1): ?>
            <?php if($key === 0): ?>
                <li class="sidebar-menu-item has-children <?php if(in_array(\Request::route()->getName(), $activeRoutes)): ?> active open <?php endif; ?>">
            <?php endif; ?>

            <?php if(empty($convert_to_array['parent']) && !$flag): ?>
                <?php
                    $flag = true;
                ?>
                <a href="javascript:void(0)" class="menu-toggle">
                    <span class="menu-icon"><i class="<?php echo e($icon); ?>"></i></span>
                    <span class="menu-title"><?php echo e($convert_to_array['label']); ?> <span class="plugin-badge"><?php echo e(__('Plugin')); ?></span></span>
                    <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                </a>
                <ul class="submenu">
            <?php endif; ?>
            
            <?php if($key !== 0 && $flag): ?>
                <li class="submenu-item <?php if(request()->routeIs($routeName)): ?> selected <?php endif; ?>">
                    <a href="<?php echo e(route($routeName)); ?>">
                        <span class="submenu-dot"></span>
                        <?php echo e($convert_to_array['label']); ?>

                    </a>
                </li>
            <?php endif; ?>
            
            <?php if($key === count($externalMenu)-1): ?>
                </ul>
                </li>
            <?php endif; ?>
        <?php else: ?>
            <li class="sidebar-menu-item <?php if(request()->routeIs($routeName)): ?> active <?php endif; ?>">
                <a href="<?php echo e(route($routeName)); ?>">
                    <span class="menu-icon"><i class="<?php echo e($icon); ?>"></i></span>
                    <span class="menu-title"><?php echo e($convert_to_array['label']); ?> <span class="plugin-badge"><?php echo e(__('Plugin')); ?></span></span>
                </a>
            </li>
        <?php endif; ?>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<!-- Render all module route end -->

<style>
/* ===== PLUGIN BADGE STYLING ===== */
.plugin-badge {
    display: inline-block;
    background: #fef2f2;
    color: #e31b23;
    font-size: 10px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 40px;
    margin-left: 8px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    border: 1px solid rgba(227, 27, 35, 0.1);
    transition: all 0.2s ease;
}

.sidebar-menu-item.active .plugin-badge,
.sidebar-menu-item:hover .plugin-badge {
    background: white;
    color: #e31b23;
    border-color: white;
}

/* ===== DARK MODE PLUGIN BADGE ===== */
body.dark-mode .plugin-badge {
    background: rgba(227, 27, 35, 0.2);
    color: #fecaca;
    border-color: rgba(227, 27, 35, 0.3);
}

body.dark-mode .sidebar-menu-item.active .plugin-badge,
body.dark-mode .sidebar-menu-item:hover .plugin-badge {
    background: #e31b23;
    color: white;
    border-color: #e31b23;
}

/* ===== COMMENTED ITEMS STYLING ===== */
/* This preserves the styling for commented out items */
.dashboard__bottom__list__item {
    /* Kept for backward compatibility */
}

/* ===== ENSURE PROPER SPACING ===== */
.sidebar-menu-item .menu-title {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
}

/* ===== PRESERVE ORIGINAL CLASSES ===== */
.dashboard__bottom__list__item,
.dashboard__bottom__list__item.has-children,
.dashboard__bottom__list__item.active,
.dashboard__bottom__list__item.open,
.dashboard__bottom__list__item.selected {
    /* Classes preserved for compatibility */
}
</style>

<script>
(function($) {
    "use strict";

    $(document).ready(function() {
        // Handle module menu toggles
        $('.sidebar-menu-item.has-children > .menu-toggle').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            let parent = $(this).closest('.sidebar-menu-item');
            
            // Close other open menus
            if (!parent.hasClass('open')) {
                $('.sidebar-menu-item.open').removeClass('open');
            }
            
            parent.toggleClass('open');
        });

        // Open active menu items by default
        $('.sidebar-menu-item.active').each(function() {
            $(this).addClass('open');
            
            // Open parent if any
            $(this).parents('.sidebar-menu-item').addClass('open');
        });

        // Handle responsive behavior
        if ($(window).width() <= 992) {
            $('.sidebar-menu-item.has-children > a').off('click');
            $('.sidebar-menu-item.has-children > .menu-toggle').on('click', function(e) {
                e.preventDefault();
                let parent = $(this).closest('.sidebar-menu-item');
                parent.toggleClass('open');
            });
        }

        // Initialize tooltips for plugin badges
        $('.plugin-badge').attr('title', '<?php echo e(__("Plugin Module")); ?>');
    });

})(jQuery);
</script><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/partials/module-list.blade.php ENDPATH**/ ?>