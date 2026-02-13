<main>
    <div class="panel_container d-flex">
        <div class="sidebar bg_light border_right">
            <div class="sidebar_list_wrapper">
                <ol class="sidebar_list pr_8 pl_0 pt_8">
                    <li>
                        <a href="<?php echo e(route('user.dashboard')); ?>" class="sidebar_list_item <?php echo e(request()->routeIs('user.dashboard') ? 'active' : ''); ?>">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_10511_2806)">
                                    <path
                                        d="M8.30469 2.25H3.80469C3.60578 2.25 3.41501 2.32902 3.27436 2.46967C3.13371 2.61032 3.05469 2.80109 3.05469 3V7.5C3.05469 7.69891 3.13371 7.88968 3.27436 8.03033C3.41501 8.17098 3.60578 8.25 3.80469 8.25H8.30469C8.5036 8.25 8.69437 8.17098 8.83502 8.03033C8.97567 7.88968 9.05469 7.69891 9.05469 7.5V3C9.05469 2.80109 8.97567 2.61032 8.83502 2.46967C8.69437 2.32902 8.5036 2.25 8.30469 2.25Z"
                                        fill="currentColor" />
                                    <path
                                        d="M15.8047 2.25H11.3047C11.1058 2.25 10.915 2.32902 10.7744 2.46967C10.6337 2.61032 10.5547 2.80109 10.5547 3V7.5C10.5547 7.69891 10.6337 7.88968 10.7744 8.03033C10.915 8.17098 11.1058 8.25 11.3047 8.25H15.8047C16.0036 8.25 16.1944 8.17098 16.335 8.03033C16.4757 7.88968 16.5547 7.69891 16.5547 7.5V3C16.5547 2.80109 16.4757 2.61032 16.335 2.46967C16.1944 2.32902 16.0036 2.25 15.8047 2.25Z"
                                        fill="currentColor" />
                                    <path
                                        d="M8.30469 9.75H3.80469C3.60578 9.75 3.41501 9.82902 3.27436 9.96967C3.13371 10.1103 3.05469 10.3011 3.05469 10.5V15C3.05469 15.1989 3.13371 15.3897 3.27436 15.5303C3.41501 15.671 3.60578 15.75 3.80469 15.75H8.30469C8.5036 15.75 8.69437 15.671 8.83502 15.5303C8.97567 15.3897 9.05469 15.1989 9.05469 15V10.5C9.05469 10.3011 8.97567 10.1103 8.83502 9.96967C8.69437 9.82902 8.5036 9.75 8.30469 9.75Z"
                                        fill="currentColor" />
                                    <path
                                        d="M13.5547 9.75C14.1416 9.75 14.7157 9.92218 15.2058 10.2452C15.6958 10.5683 16.0804 11.028 16.3118 11.5674C16.5431 12.1068 16.6112 12.7023 16.5075 13.28C16.4038 13.8577 16.1329 14.3923 15.7284 14.8176C15.3239 15.2429 14.8035 15.5402 14.2316 15.6726C13.6598 15.8051 13.0617 15.7669 12.5114 15.5627C11.9611 15.3586 11.4827 14.9976 11.1356 14.5243C10.7885 14.051 10.5878 13.4862 10.5584 12.9L10.5547 12.75L10.5584 12.6C10.5969 11.8313 10.9294 11.1068 11.4871 10.5763C12.0448 10.0458 12.785 9.75 13.5547 9.75Z"
                                        fill="currentColor" />
                                </g>
                            </svg>
                            <?php echo e(__('Dashboard')); ?>

                        </a>
                    </li>
                    <li>
                        <a href="<?php echo e(route('orders.index')); ?>" class="sidebar_list_item <?php echo e(request()->routeIs('orders.index') ? 'active' : ''); ?>">
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_10511_2814)">
                                <path d="M7.55469 4.5H15.8047" stroke="currentColor" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.55469 9H15.8047" stroke="currentColor" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.55469 13.5H15.8047" stroke="currentColor" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.55469 4.5V4.5075" stroke="currentColor" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.55469 9V9.0075" stroke="currentColor" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.55469 13.5V13.5075" stroke="currentColor" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>
                        <?php echo e(__('Order List')); ?>

                        </a>
                    </li>
                    
                    <li>
                        <a href="<?php echo e(route('client.favourite.services.all')); ?>" class="sidebar_list_item">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke-width="1.8"
                                 stroke="currentColor"
                                 width="20"
                                 height="20"
                                 class="favorite-icon">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M21 8.25c0-2.485-2.014-4.5-4.5-4.5-1.74 0-3.222.993-4
                                 2.475A4.502 4.502 0 008.5 3.75C6.014 3.75 4
                                 5.765 4 8.25c0 6.42 8 10.5 8 10.5s8-4.08
                                 8-10.5z" />
                            </svg>
                            <?php echo e(__('Favourite Items')); ?>

                        </a>
                    </li>
                    <li>
                        <a href="<?php echo e(route('tickets.index')); ?>" class="sidebar_list_item <?php echo e(request()->routeIs('tickets.index') ? 'active' : ''); ?>">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_10511_2831)">
                                    <path d="M12.0547 3.75V5.25" stroke="currentColor" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.0547 8.25V9.75" stroke="currentColor" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.0547 12.75V14.25" stroke="currentColor" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M4.55469 3.75H15.0547C15.4525 3.75 15.834 3.90804 16.1153 4.18934C16.3967 4.47064 16.5547 4.85218 16.5547 5.25V7.5C16.1569 7.5 15.7753 7.65804 15.494 7.93934C15.2127 8.22064 15.0547 8.60218 15.0547 9C15.0547 9.39782 15.2127 9.77936 15.494 10.0607C15.7753 10.342 16.1569 10.5 16.5547 10.5V12.75C16.5547 13.1478 16.3967 13.5294 16.1153 13.8107C15.834 14.092 15.4525 14.25 15.0547 14.25H4.55469C4.15686 14.25 3.77533 14.092 3.49403 13.8107C3.21272 13.5294 3.05469 13.1478 3.05469 12.75V10.5C3.45251 10.5 3.83404 10.342 4.11535 10.0607C4.39665 9.77936 4.55469 9.39782 4.55469 9C4.55469 8.60218 4.39665 8.22064 4.11535 7.93934C3.83404 7.65804 3.45251 7.5 3.05469 7.5V5.25C3.05469 4.85218 3.21272 4.47064 3.49403 4.18934C3.77533 3.90804 4.15686 3.75 4.55469 3.75Z"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                            </svg>
                            <?php echo e(__('Service Requests')); ?>

                        </a>
                    </li>
                    <li>
                        <a href="<?php echo e(route('refunds.index')); ?>" class="sidebar_list_item <?php echo e(request()->routeIs('refunds.index') ? 'active' : ''); ?>">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_10511_2839)">
                                    <path
                                        d="M15.8047 8.25051C15.6213 6.93068 15.009 5.70776 14.0622 4.77013C13.1153 3.83251 11.8865 3.2322 10.5649 3.06168C9.24338 2.89115 7.9024 3.15987 6.74859 3.82645C5.59477 4.49302 4.69212 5.52046 4.17969 6.75051M3.80469 3.75051V6.75051H6.80469"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M3.80469 9.75C3.98811 11.0698 4.60039 12.2928 5.54721 13.2304C6.49403 14.168 7.72287 14.7683 9.04443 14.9388C10.366 15.1094 11.707 14.8406 12.8608 14.1741C14.0146 13.5075 14.9173 12.48 15.4297 11.25M15.8047 14.25V11.25H12.8047"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M9.05469 9C9.05469 9.19891 9.13371 9.38968 9.27436 9.53033C9.41501 9.67098 9.60578 9.75 9.80469 9.75C10.0036 9.75 10.1944 9.67098 10.335 9.53033C10.4757 9.38968 10.5547 9.19891 10.5547 9C10.5547 8.80109 10.4757 8.61032 10.335 8.46967C10.1944 8.32902 10.0036 8.25 9.80469 8.25C9.60578 8.25 9.41501 8.32902 9.27436 8.46967C9.13371 8.61032 9.05469 8.80109 9.05469 9Z"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                            </svg>
                            <?php echo e(__('Refunds')); ?>

                        </a>
                    </li>
                    <li>
                        <a href="<?php echo e(route('client.notification.all')); ?>" class="sidebar_list_item <?php echo e(request()->routeIs('client.notification.all') ? 'active' : ''); ?>">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_10511_2846)">
                                    <path
                                        d="M8.30469 3.75C8.30469 3.35218 8.46272 2.97064 8.74403 2.68934C9.02533 2.40804 9.40686 2.25 9.80469 2.25C10.2025 2.25 10.584 2.40804 10.8653 2.68934C11.1467 2.97064 11.3047 3.35218 11.3047 3.75C12.166 4.15727 12.9002 4.79124 13.4287 5.58397C13.9572 6.3767 14.26 7.29831 14.3047 8.25V10.5C14.3611 10.9663 14.5263 11.4128 14.7868 11.8036C15.0473 12.1944 15.396 12.5186 15.8047 12.75H3.80469C4.21339 12.5186 4.56204 12.1944 4.82258 11.8036C5.08311 11.4128 5.24825 10.9663 5.30469 10.5V8.25C5.34936 7.29831 5.65216 6.3767 6.18065 5.58397C6.70914 4.79124 7.44338 4.15727 8.30469 3.75Z"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M7.55469 12.75V13.5C7.55469 14.0967 7.79174 14.669 8.2137 15.091C8.63565 15.5129 9.20795 15.75 9.80469 15.75C10.4014 15.75 10.9737 15.5129 11.3957 15.091C11.8176 14.669 12.0547 14.0967 12.0547 13.5V12.75"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                            </svg>
                            <?php echo e(__('Notifications')); ?>

                        </a>
                    </li>
                    <li>
                        <a href="<?php echo e(route('client.all.address')); ?>" class="sidebar_list_item <?php echo e(request()->routeIs('client.all.address') ? 'active' : ''); ?>">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_10511_2852)">
                                    <path d="M4.55469 9H3.05469L9.80469 2.25L16.5547 9H15.0547"
                                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                    <path
                                        d="M4.55469 9V14.25C4.55469 14.6478 4.71272 15.0294 4.99403 15.3107C5.27533 15.592 5.65686 15.75 6.05469 15.75H13.5547C13.9525 15.75 14.334 15.592 14.6153 15.3107C14.8967 15.0294 15.0547 14.6478 15.0547 14.25V9"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M7.55469 15.75V11.25C7.55469 10.8522 7.71272 10.4706 7.99403 10.1893C8.27533 9.90804 8.65686 9.75 9.05469 9.75H10.5547C10.9525 9.75 11.334 9.90804 11.6153 10.1893C11.8967 10.4706 12.0547 10.8522 12.0547 11.25V15.75"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                            </svg>
                            <?php echo e(__('Address')); ?>

                        </a>
                    </li>
                    <li>
                        <a href="<?php echo e(route('settings.index')); ?>" class="sidebar_list_item">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.16647 1.5H8.83647C8.43864 1.5 8.05711 1.65804 7.77581 1.93934C7.4945 2.22064 7.33647 2.60218 7.33647 3V3.135C7.3362 3.39804 7.26676 3.65639 7.13512 3.88413C7.00348 4.11186 6.81427 4.30098 6.58647 4.4325L6.26397 4.62C6.03594 4.75165 5.77727 4.82096 5.51397 4.82096C5.25066 4.82096 4.992 4.75165 4.76397 4.62L4.65147 4.56C4.30726 4.36145 3.89834 4.30758 3.51447 4.41023C3.13059 4.51288 2.80313 4.76365 2.60397 5.1075L2.43897 5.3925C2.24041 5.7367 2.18655 6.14562 2.2892 6.5295C2.39185 6.91338 2.64262 7.24084 2.98647 7.44L3.09897 7.515C3.32567 7.64588 3.51418 7.83382 3.64575 8.06012C3.77733 8.28643 3.84739 8.54323 3.84897 8.805V9.1875C3.85002 9.45182 3.7812 9.71171 3.6495 9.94088C3.51779 10.17 3.32787 10.3603 3.09897 10.4925L2.98647 10.56C2.64262 10.7592 2.39185 11.0866 2.2892 11.4705C2.18655 11.8544 2.24041 12.2633 2.43897 12.6075L2.60397 12.8925C2.80313 13.2363 3.13059 13.4871 3.51447 13.5898C3.89834 13.6924 4.30726 13.6386 4.65147 13.44L4.76397 13.38C4.992 13.2483 5.25066 13.179 5.51397 13.179C5.77727 13.179 6.03594 13.2483 6.26397 13.38L6.58647 13.5675C6.81427 13.699 7.00348 13.8881 7.13512 14.1159C7.26676 14.3436 7.3362 14.602 7.33647 14.865V15C7.33647 15.3978 7.4945 15.7794 7.77581 16.0607C8.05711 16.342 8.43864 16.5 8.83647 16.5H9.16647C9.56429 16.5 9.94582 16.342 10.2271 16.0607C10.5084 15.7794 10.6665 15.3978 10.6665 15V14.865C10.6667 14.602 10.7362 14.3436 10.8678 14.1159C10.9995 13.8881 11.1887 13.699 11.4165 13.5675L11.739 13.38C11.967 13.2483 12.2257 13.179 12.489 13.179C12.7523 13.179 13.0109 13.2483 13.239 13.38L13.3515 13.44C13.6957 13.6386 14.1046 13.6924 14.4885 13.5898C14.8723 13.4871 15.1998 13.2363 15.399 12.8925L15.564 12.6C15.7625 12.2558 15.8164 11.8469 15.7137 11.463C15.6111 11.0791 15.3603 10.7517 15.0165 10.5525L14.904 10.4925C14.6751 10.3603 14.4851 10.17 14.3534 9.94088C14.2217 9.71171 14.1529 9.45182 14.154 9.1875V8.8125C14.1529 8.54818 14.2217 8.28829 14.3534 8.05912C14.4851 7.82995 14.6751 7.63966 14.904 7.5075L15.0165 7.44C15.3603 7.24084 15.6111 6.91338 15.7137 6.5295C15.8164 6.14562 15.7625 5.7367 15.564 5.3925L15.399 5.1075C15.1998 4.76365 14.8723 4.51288 14.4885 4.41023C14.1046 4.30758 13.6957 4.36145 13.3515 4.56L13.239 4.62C13.0109 4.75165 12.7523 4.82096 12.489 4.82096C12.2257 4.82096 11.967 4.75165 11.739 4.62L11.4165 4.4325C11.1887 4.30098 10.9995 4.11186 10.8678 3.88413C10.7362 3.65639 10.6667 3.39804 10.6665 3.135V3C10.6665 2.60218 10.5084 2.22064 10.2271 1.93934C9.94582 1.65804 9.56429 1.5 9.16647 1.5Z"
                                    stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
                                    stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <?php echo e(__('Settings')); ?>

                        </a>
                    </li>
                    <li>
                        <a href="<?php echo e(route('user.dashboard', ['openModal' => 'delete'])); ?>"
                           class="sidebar_list_item text_red">
                    <span class="sidebar_list_icon">
                        <i class="ti icone-base tabler-trash"></i>
                    </span>
                            <?php echo e(__('Delete Account')); ?>

                        </a>
                    </li>
                </ol>
                <ol class="sidebar_list border_top pr_8 pl_0 pt_8 pb_8">
                    <li>
                        <a href="<?php echo e(route('auth.logout')); ?>" class="sidebar_list_item">
                            <span class="sidebar_list_icon">
                               <i class="ti icone-base tabler-logout"></i>
                            </span>
                            <?php echo e(__('Log Out')); ?>

                        </a>
                    </li>
                </ol>
            </div>
        </div>

<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/user/layout/partial/sidebar.blade.php ENDPATH**/ ?>