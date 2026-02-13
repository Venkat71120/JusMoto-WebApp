<!-- Support Ticket Module -->
{{-- @canany(['coupon-settings', 'coupons-new', 'coupon-list', 'coupon-edit-add', 'coupon-delete-add'])
    <li class="dashboard__bottom__list__item @if (request()->is(['admin/coupons', 'admin/coupons/*'])) active @endif">
        <a href="{{ route('admin.coupon.all') }}">
            <i class="las la-percentage"></i>
            <span>{{ __('Coupon Manage') }}</span>
        </a>
    </li>
@endcanany --}}


{{-- @canany(['delivery-charge-settings', 'delivery-charge-list', 'delivery-charge-new', 'delivery-charge-edit-add'])
<li class="dashboard__bottom__list__item has-children @if(request()->is('admin/delivery-charge/*')) active open @endif">
    <a href="javascript:void(0)"><i class="las la-file-invoice-dollar"></i>
        <span class="icon_title">{{ __('Delivery Charge Settings') }}</span>
    </a>
    <ul class="submenu @if(request()->is('admin/delivery-charge/*')) d-block @endif">
        <li class="dashboard__bottom__list__item @if(request()->is('admin/delivery-charge/settings')) selected @endif">
            <a href="{{ route('admin.delivery-charge.settings') }}">{{ __('Delivery Charge Manage') }}</a>
        </li>
        
        <li class="dashboard__bottom__list__item @if(request()->is('admin/delivery-charge/state')) selected @endif">
            <a href="{{ route('admin.delivery-charge.state.all') }}">{{ __('State Delivery Charge') }}</a>
        </li> 
        <li class="dashboard__bottom__list__item @if(request()->is('admin/delivery-charge/city')) selected @endif">
            <a href="{{ route('admin.delivery-charge.city.all') }}">{{ __('City Delivery Charge') }}</a>
        </li>
    </ul>
</li>
@endcanany --}}


{{-- @canany(['tax-settings', 'tax-list', 'tax-new', 'tax-edit-add'])
<li class="dashboard__bottom__list__item has-children @if(request()->is('admin/tax/*')) active open @endif">
    <a href="javascript:void(0)"><i class="las la-file-invoice-dollar"></i>
        <span class="icon_title">{{ __('Tax Settings') }}</span>
    </a>
    <ul class="submenu @if(request()->is('admin/tax/*')) d-block @endif">
        <li class="dashboard__bottom__list__item @if(request()->is('admin/tax/settings')) selected @endif">
            <a href="{{ route('admin.tax.settings') }}">{{ __('Tax Manage Settings') }}</a>
        </li>

            @if (get_static_option('tax_system') == 'advance_tax_system')
                <li class="dashboard__bottom__list__item @if(request()->is('admin/tax/settings')) selected @endif">
                    <a href="{{ route('admin.tax.tax-class') }}">{{ __('Tax Class') }}</a>
                </li>
            @endif

         @if (get_static_option('tax_system') == 'zone_wise_tax_system')
                <li class="dashboard__bottom__list__item @if(request()->is('admin/tax/state')) selected @endif">
                    <a href="{{ route('admin.tax.state.all') }}">{{ __('State Tax') }}</a>
                </li>
                <li class="dashboard__bottom__list__item @if(request()->is('admin/tax/city')) selected @endif">
                    <a href="{{ route('admin.tax.city.all') }}">{{ __('City Tax') }}</a>
                </li>
            @endif

    </ul>
</li>
@endcanany --}}

<!-- Admin Manage Role Module -->
@can('admin-role-manage')
<li class="sidebar-menu-item has-children @if (request()->is('admin/manage*')) active open @endif">
    <a href="javascript:void(0)" class="menu-toggle">
        <span class="menu-icon"><i class="las la-user-cog"></i></span>
        <span class="menu-title">{{ __('Admin Role Manage') }}</span>
        <span class="menu-arrow"><i class="las la-angle-down"></i></span>
    </a>
    <ul class="submenu">
        <li class="submenu-item @if (request()->is('admin/manage/create/new-admin')) selected @endif">
            <a href="{{ route('admin.create') }}">
                <span class="submenu-dot"></span>
                {{ __('Add New Admin') }}
            </a>
        </li>
        <li class="submenu-item @if (request()->is('admin/manage/all-admins')) selected @endif">
            <a href="{{ route('admin.all') }}">
                <span class="submenu-dot"></span>
                {{ __('All Admins') }}
            </a>
        </li>
        <li class="submenu-item @if (request()->is('admin/manage/permission/role/all')) selected @endif">
            <a href="{{ route('admin.role.create') }}">
                <span class="submenu-dot"></span>
                {{ __('All Roles') }}
            </a>
        </li>
    </ul>
</li>
@endcan

<!-- Country Manage Module -->
@canany(['state-list', 'state-csv-file-import', 'city-list', 'city-csv-file-import', 'area-list', 'area-csv-file-import'])
<li class="sidebar-menu-item has-children @if(request()->is('admin/location/*')) active open @endif">
    <a href="javascript:void(0)" class="menu-toggle">
        <span class="menu-icon"><i class="las la-globe"></i></span>
        <span class="menu-title">{{ __('Location Manage') }}</span>
        <span class="menu-arrow"><i class="las la-angle-down"></i></span>
    </a>
    <ul class="submenu">
        @can('state-list')
        <li class="submenu-item @if(request()->is('admin/location/state/all-state')) selected @endif">
            <a href="{{ route('admin.state.all') }}">
                <span class="submenu-dot"></span>
                {{ __('All States') }}
            </a>
        </li>
        @endcan
        @can('state-csv-file-import')
        <li class="submenu-item @if(request()->is('admin/location/state/csv/import')) selected @endif">
            <a href="{{ route('admin.state.import.csv.settings') }}">
                <span class="submenu-dot"></span>
                {{ __('Import State') }}
            </a>
        </li>
        @endcan
        @can('city-list')
        <li class="submenu-item @if(request()->is('admin/location/city/all-city')) selected @endif">
            <a href="{{ route('admin.city.all') }}">
                <span class="submenu-dot"></span>
                {{ __('All Cities') }}
            </a>
        </li>
        @endcan
        @can('city-csv-file-import')
        <li class="submenu-item @if(request()->is('admin/location/city/csv/import')) selected @endif">
            <a href="{{ route('admin.city.import.csv.settings') }}">
                <span class="submenu-dot"></span>
                {{ __('Import Cities') }}
            </a>
        </li>
        @endcan
        @can('area-list')
        <li class="submenu-item @if(request()->is('admin/location/area/all-area')) selected @endif">
            <a href="{{ route('admin.area.all') }}">
                <span class="submenu-dot"></span>
                {{ __('All Areas') }}
            </a>
        </li>
        @endcan
        @can('area-csv-file-import')
        <li class="submenu-item @if(request()->is('admin/location/area/csv/import')) selected @endif">
            <a href="{{ route('admin.area.import.csv.settings') }}">
                <span class="submenu-dot"></span>
                {{ __('Import Areas') }}
            </a>
        </li>
        @endcan
    </ul>
</li>
@endcanany


<!-- Integration Module -->
{{-- @can('integration-list')
<li class="dashboard__bottom__list__item @if(request()->is('admin/integrations-manage*')) active @endif">
    <a href="{{route('admin.integration')}}"><i class="las la-puzzle-piece"></i>
        <span class="icon_title">{{ __('Integration') }}</span>
    </a>
</li>
@endcan --}}



<!-- Support Ticket Module -->
@canany(['department-list', 'support-ticket-list'])
<li class="sidebar-menu-item has-children @if(request()->is('admin/support-ticket/*')) active open @endif">
    <a href="javascript:void(0)" class="menu-toggle">
        <span class="menu-icon"><i class="las la-headset"></i></span>
        <span class="menu-title">{{ __('Service Requests') }}</span>
        <span class="menu-arrow"><i class="las la-angle-down"></i></span>
    </a>
    <ul class="submenu">
        @can('department-list')
        <li class="submenu-item @if(request()->is('admin/support-ticket/department')) selected @endif">
            <a href="{{ route('admin.department') }}">
                <span class="submenu-dot"></span>
                {{ __('Service Type') }}
            </a>
        </li>
        @endcan
        @can('support-ticket-list')
            <li class="submenu-item @if(request()->is('admin/support-ticket/tickets')) selected @endif">
                <a href="{{ route('admin.ticket') }}">
                    <span class="submenu-dot"></span>
                    {{ __('Service Requests') }}
                </a>
            </li>
        @endcan
    </ul>
</li>
@endcanany

<!-- Pages Module -->
{{-- <li class="dashboard__bottom__list__item has-children @if(request()->is('admin/plugin-manage/*')) active open @endif">
    <a href="javascript:void(0)"><i class="las la-plug"></i>
        <span class="icon_title">{{ __('Plugins Manage') }}</span>
    </a>
    <ul class="submenu @if(request()->is('admin/plugin-manage/*')) d-block @endif">
        @can('plugins-list')
            <li class="dashboard__bottom__list__item @if(request()->is('admin/plugin-manage/all')) selected @endif">
                <a href="{{ route('admin.plugin.manage.all') }}">{{ __('All Plugins') }}</a>
            </li>
        @endcan
        @can('plugins-add')
            <li class="dashboard__bottom__list__item @if(request()->is('admin/plugin-manage/new')) selected @endif">
                <a href="{{ route('admin.plugin.manage.new') }}">{{ __('Add New Plugin') }}</a>
            </li>
        @endcan
    </ul>
</li> --}}

@can('payment-currency-settings')
<li class="sidebar-menu-item has-children @if(request()->is('admin/payment-settings/*') || request()->is('admin/payment-gateway/currency-settings')) active open @endif">
    <a href="javascript:void(0)" class="menu-toggle">
        <span class="menu-icon"><i class="las la-money-check-alt"></i></span>
        <span class="menu-title">{{ __('Payment Gateway') }}</span>
        <span class="menu-arrow"><i class="las la-angle-down"></i></span>
    </a>
    <ul class="submenu">
        @can('payment-currency-settings')
            <li class="submenu-item @if(request()->is('admin/payment-gateway/currency-settings')) selected @endif">
                <a href="{{ route('admin.payment.gateway.currency.settings') }}">
                    <span class="submenu-dot"></span>
                    {{ __('Currency Settings') }}
                </a>
            </li>
        @endcan
        @php
            $payment_gateways = \Modules\PaymentGateways\app\Models\PaymentGateway::pluck('name');
        @endphp
        @foreach($payment_gateways ?? [] as $gateway)
            <li class="submenu-item @if(request()->is("admin/payment-settings/payment/{$gateway}")) selected @endif">
                <a class="text-capitalize" href="{{ route("admin.payment.settings.{$gateway}") }}">
                    <span class="submenu-dot"></span>
                    {{ __($gateway) }}
                </a>
            </li>
        @endforeach

        <li class="submenu-item @if(request()->is("admin/payment-settings/payment/cash-on-delivery")) selected @endif">
            <a class="text-capitalize" href="{{ route("admin.payment.settings.cod") }}">
                <span class="submenu-dot"></span>
                {{ __('Cash on Delivery') }}
            </a>
        </li>
    </ul>
</li>
@endcan

{{-- 
@can('sms-gateway-settings')
    <li class="dashboard__bottom__list__item @if(request()->routeIs('admin.sms.gateway.settings') || request()->is('admin/sms-gateway-settings/view')) active @endif">
        <a href="{{route('admin.sms.gateway.settings')}}"><i class="las la-sms"></i>
            <span class="icon_title">{{ __('SMS Gateway') }}</span>
            <span class="badge bg-danger">{{ __('Plugin') }}</span>
        </a>
    </li>
@endcan --}}

<!-- Render all module route start -->
@php
    $all_modules_route = (new \App\Helpers\ModuleMetaData())->getAllExternalMenu() ?? [];
@endphp

@foreach($all_modules_route as $index => $externalMenu)
    @php
        $flag = false;
        $activeRoutes = array_column((array) $externalMenu, 'route');
    @endphp

    @foreach ($externalMenu as $key => $individual_menu_item)
        @php
            $convert_to_array = (array) $individual_menu_item;
            $convert_to_array['label'] = __($convert_to_array['label']);
            if (array_key_exists('permissions', $convert_to_array) && !is_array($convert_to_array['permissions'])) {
                $convert_to_array['permissions'] = [$convert_to_array['permissions']];
            }
            $routeName = $convert_to_array['route'];
            $icon = array_key_exists('icon', $convert_to_array) ? $convert_to_array['icon'] : '';
        @endphp
        
        @if(count($externalMenu) > 1)
            @if($key === 0)
                <li class="sidebar-menu-item has-children @if(in_array(\Request::route()->getName(), $activeRoutes)) active open @endif">
            @endif

            @if(empty($convert_to_array['parent']) && !$flag)
                @php
                    $flag = true;
                @endphp
                <a href="javascript:void(0)" class="menu-toggle">
                    <span class="menu-icon"><i class="{{$icon}}"></i></span>
                    <span class="menu-title">{{ $convert_to_array['label'] }} <span class="plugin-badge">{{ __('Plugin') }}</span></span>
                    <span class="menu-arrow"><i class="las la-angle-down"></i></span>
                </a>
                <ul class="submenu">
            @endif
            
            @if($key !== 0 && $flag)
                <li class="submenu-item @if(request()->routeIs($routeName)) selected @endif">
                    <a href="{{ route($routeName) }}">
                        <span class="submenu-dot"></span>
                        {{ $convert_to_array['label'] }}
                    </a>
                </li>
            @endif
            
            @if($key === count($externalMenu)-1)
                </ul>
                </li>
            @endif
        @else
            <li class="sidebar-menu-item @if(request()->routeIs($routeName)) active @endif">
                <a href="{{ route($routeName) }}">
                    <span class="menu-icon"><i class="{{$icon}}"></i></span>
                    <span class="menu-title">{{ $convert_to_array['label'] }} <span class="plugin-badge">{{ __('Plugin') }}</span></span>
                </a>
            </li>
        @endif
    @endforeach
@endforeach
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
        $('.plugin-badge').attr('title', '{{ __("Plugin Module") }}');
    });

})(jQuery);
</script>