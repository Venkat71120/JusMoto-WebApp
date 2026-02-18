<div class="order-filter-section">
    <div class="filter-header">
        <div class="filter-left">
            <div class="order-tabs">
                <ul class="tab-list">
                    <li class="<?php echo e($current_status === 'all' ? 'active' : ''); ?>">
                        <a href="<?php echo e(route('admin.service.all.orders')); ?>">
                            <?php echo e(__('All Orders')); ?>

                            <span class="badge"><?php echo e($total_orders); ?></span>
                        </a>
                    </li>
                    <li class="<?php echo e($current_status === '0' ? 'active' : ''); ?>">
                        <a href="<?php echo e(route('admin.service.all.orders', ['status' => '0'])); ?>">
                            <?php echo e(__('Pending')); ?>

                            <span class="badge"><?php echo e($total_pending_order); ?></span>
                        </a>
                    </li>
                    <li class="<?php echo e($current_status === '2' ? 'active' : ''); ?>">
                        <a href="<?php echo e(route('admin.service.all.orders', ['status' => '2'])); ?>">
                            <?php echo e(__('Completed')); ?>

                            <span class="badge"><?php echo e($total_completed_order); ?></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="filter-right">
            <div class="search-box">
                <input type="text" class="search-input string_search" id="string_search" placeholder="<?php echo e(__('Search orders...')); ?>">
                <button type="submit" class="search-btn">
                    <i class="las la-search"></i>
                </button>
            </div>
        </div>
    </div>
</div>

<style>
/* ===== CLEAN ORDER FILTER SECTION ===== */

:root {
    --white: #ffffff;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --red: #e31b23;
    --red-light: #fee2e2;
    --red-dark: #b91c1c;
    --yellow: #f59e0b;
    --yellow-light: #fef3c7;
    --green: #10b981;
    --green-light: #d1fae5;
    --radius: 8px;
    --radius-lg: 12px;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --transition: all 0.2s ease;
}

.order-filter-section {
    background: var(--white);
    border-bottom: 1px solid var(--gray-200);
    padding: 16px 24px;
}

.filter-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
}

/* Left Side - Tabs */
.filter-left {
    flex: 1;
}

.order-tabs {
    width: 100%;
}

.tab-list {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
}

.tab-list li {
    margin: 0;
}

.tab-list li a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: 40px;
    color: var(--gray-600);
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: var(--transition);
}

.tab-list li.active a {
    background: var(--red);
    border-color: var(--red);
    color: white;
}

.tab-list li:not(.active) a:hover {
    background: var(--gray-100);
    border-color: var(--gray-300);
}

/* Badge */
.badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 22px;
    height: 22px;
    padding: 0 6px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 40px;
    font-size: 11px;
    font-weight: 600;
}

.tab-list li.active .badge {
    background: rgba(255, 255, 255, 0.2);
    color: white;
}

.tab-list li:not(.active) .badge {
    background: var(--gray-200);
    color: var(--gray-600);
}

/* Right Side - Search */
.filter-right {
    min-width: 280px;
}

.search-box {
    position: relative;
    width: 100%;
}

.search-input {
    width: 100%;
    height: 42px;
    padding: 8px 16px 8px 44px;
    background: var(--white);
    border: 1px solid var(--gray-300);
    border-radius: 40px;
    font-size: 14px;
    color: var(--gray-800);
    transition: var(--transition);
}

.search-input:focus {
    outline: none;
    border-color: var(--red);
    box-shadow: 0 0 0 3px var(--red-light);
}

.search-input::placeholder {
    color: var(--gray-400);
    font-size: 14px;
}

.search-btn {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--gray-400);
    font-size: 18px;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.search-btn:hover {
    color: var(--red);
}

.search-btn i {
    font-size: 18px;
}

/* Responsive */
@media (max-width: 992px) {
    .order-filter-section {
        padding: 16px;
    }
    
    .filter-header {
        flex-direction: column;
        align-items: stretch;
    }
    
    .filter-right {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .tab-list {
        flex-direction: column;
        width: 100%;
    }
    
    .tab-list li {
        width: 100%;
    }
    
    .tab-list li a {
        width: 100%;
        justify-content: center;
    }
}

/* Preserve original classes */
.d-flex {
    display: flex;
}

.flex-wrap {
    flex-wrap: wrap;
}

.gap-3 {
    gap: 16px;
}

.badge_notification {
    /* Preserved but using new badge styling */
}
</style><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/orders/order-filter.blade.php ENDPATH**/ ?>