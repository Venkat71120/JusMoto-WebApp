<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('Dashboard')); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('style'); ?>
    <style>
        /* ===== MODERN RED DASHBOARD - CLEAN & BOLD ===== */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
    --primary: #00b799;
    --danger: #ff4240;
    --dark: #252726;
    --border: #d3dcdb;
    --border-color: #d3dcdb;
    --chart-fill: rgba(0,183,153,0.08);
    --blue: #00b799;
    --white: #ffffff;
}
        :root {
            --red-primary: #e31b23;
            --red-deep: #b11218;
            --red-light: #fff5f5;
            --red-soft: #ffe3e3;
            --red-gradient: linear-gradient(135deg, #e31b23 0%, #c41e24 100%);
            --dark: #0a0c0d;
            --gray-900: #17191a;
            --gray-700: #404546;
            --gray-400: #a0a6a8;
            --gray-100: #f3f5f6;
            --white: #ffffff;
            --shadow-sm: 0 4px 12px rgba(227, 27, 35, 0.04);
            --shadow-md: 0 8px 24px rgba(227, 27, 35, 0.08);
            --shadow-lg: 0 20px 32px rgba(227, 27, 35, 0.12);
            --radius-md: 16px;
            --radius-lg: 24px;
            --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: var(--red-light);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            color: var(--gray-900);
            line-height: 1.5;
        }

        .dashboard-body {
            padding: 32px;
            max-width: 1600px;
            margin: 0 auto;
        }

        /* ===== GREETING SECTION ===== */
        .greeting-section {
            margin-bottom: 40px;
        }

        .greeting-title {
            font-size: 32px;
            font-weight: 700;
            letter-spacing: -0.02em;
            color: var(--gray-900);
            margin-bottom: 6px;
        }

        .greeting-title span {
            background: var(--red-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .greeting-subtitle {
            font-size: 15px;
            color: var(--gray-700);
            font-weight: 400;
        }

        /* ===== STATS GRID ===== */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 20px;
            margin-bottom: 40px;
        }

.stat-card {
    background: rgba(255,255,255,0.75);
    backdrop-filter: blur(12px);
    border-radius: 14px;
    padding: 18px 18px;
    transition: all .25s ease;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(0,0,0,0.04);
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}


      .stat-card::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(90deg,#e31b23,#ff6b6b);
    opacity: 0.6;
}


       .stat-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0,0,0,0.08);
}


        .stat-card:hover::after {
            opacity: 1;
        }

        .stat-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

      .stat-title {
    font-size: 12px;
    font-weight: 600;
    color: var(--gray-400);
    text-transform: uppercase;
    letter-spacing: .08em;
}


        .stat-link {
            color: var(--gray-400);
            font-size: 20px;
            transition: var(--transition);
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
        }

        .stat-link:hover {
            background: var(--red-soft);
            color: var(--red-primary);
        }

        .stat-value {
            font-size: 18px;
            font-weight: 600;
            color: var(--gray-900);
            line-height: 1;
            margin-bottom: 4px;
            letter-spacing: -0.02em;
        }

        .stat-trend {
            font-size: 12px;
            color: var(--gray-400);
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .trend-up { color: #10b981; }
        .trend-down { color: var(--red-primary); }

        /* ===== CHARTS SECTION ===== */
        .charts-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-bottom: 40px;
        }

.chart-card {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(10px);
    border-radius: 18px;
    padding: 20px;
    transition: all .25s ease;
    border: 1px solid rgba(0,0,0,0.04);
}

        .chart-card:hover {
            box-shadow: var(--shadow-md);
        }

        .chart-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 20px;
        }

        .chart-title {
            font-size: 18px;
            font-weight: 700;
            color: var(--gray-900);
            margin-bottom: 4px;
        }

        .chart-subtitle {
            font-size: 13px;
            color: var(--gray-700);
            font-weight: 400;
        }

        .chart-subtitle strong {
            color: var(--red-primary);
            font-weight: 700;
        }

        .chart-select {
            padding: 10px 16px;
            background: var(--gray-100);
            border: none;
            border-radius: 40px;
            font-size: 13px;
            font-weight: 500;
            color: var(--gray-900);
            outline: none;
            cursor: pointer;
            transition: var(--transition);
        }

        .chart-select:hover {
            background: var(--red-soft);
        }

        .chart-container {
            height: 200px;
            width: 100%;
            position: relative;
        }

        /* ===== RECENT ACTIVITY GRID ===== */
        .activity-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }

.activity-card {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(10px);
    border-radius: 18px;
    padding: 20px;
    transition: all .25s ease;
    border: 1px solid rgba(0,0,0,0.04);
}
.stat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

/* Modern icon container */
.stat-link {
    color: var(--red-primary);
    font-size: 16px;
    width: 34px;
    height: 34px;
    background: rgba(227,27,35,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: all .25s ease;
}

.stat-link:hover {
    background: var(--red-primary);
    color: #fff;
    transform: scale(1.08);
}


        .activity-card:hover {
            box-shadow: var(--shadow-md);
        }

        .activity-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
        }

        .activity-title {
            font-size: 18px;
            font-weight: 700;
            color: var(--gray-900);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .activity-title i {
            color: var(--red-primary);
            font-size: 20px;
        }

        .activity-badge {
            background: var(--red-soft);
            color: var(--red-primary);
            padding: 6px 12px;
            border-radius: 40px;
            font-size: 12px;
            font-weight: 600;
        }

        /* ===== MODERN TABLE ===== */
        .table-modern {
            width: 100%;
            border-collapse: collapse;
        }

        .table-modern th {
            text-align: left;
            padding: 12px 0;
            font-size: 12px;
            font-weight: 600;
            color: var(--gray-400);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-bottom: 1px solid var(--gray-100);
        }

        .table-modern td {
            padding: 16px 0;
            border-bottom: 1px solid var(--gray-100);
        }

        .table-row {
            transition: var(--transition);
        }

        .table-row:hover td {
            background: var(--red-light);
        }

        /* ===== USER AVATAR ===== */
        .user-cell {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .user-avatar {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            overflow: hidden;
            background: var(--gray-100);
            flex-shrink: 0;
        }

        .user-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .user-info {
            line-height: 1.4;
        }

        .user-name {
            font-size: 15px;
            font-weight: 600;
            color: var(--gray-900);
            margin-bottom: 2px;
        }

        .user-email {
            font-size: 12px;
            color: var(--gray-700);
        }

        /* ===== ITEM THUMBNAIL ===== */
        .item-cell {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .item-thumb {
            width: 44px;
            height: 44px;
            border-radius: 10px;
            overflow: hidden;
            background: var(--gray-100);
            flex-shrink: 0;
        }

        .item-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .item-title {
            font-size: 15px;
            font-weight: 600;
            color: var(--gray-900);
            text-decoration: none;
            transition: var(--transition);
        }

        .item-title:hover {
            color: var(--red-primary);
        }

        /* ===== DATE BADGE ===== */
        .date-badge {
            display: inline-flex;
            align-items: center;
            padding: 6px 12px;
            background: var(--gray-100);
            border-radius: 40px;
            font-size: 12px;
            font-weight: 500;
            color: var(--gray-700);
            white-space: nowrap;
        }

        .date-badge i {
            margin-right: 6px;
            color: var(--red-primary);
            font-size: 12px;
        }

        /* ===== ACTION BUTTON ===== */
        .btn-view {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            background: var(--red-light);
            color: var(--red-primary);
            border-radius: 40px;
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
            transition: var(--transition);
            border: none;
            cursor: pointer;
        }

        .btn-view:hover {
            background: var(--red-primary);
            color: var(--white);
            transform: scale(1.05);
        }

        .btn-view i {
            font-size: 14px;
        }

        /* ===== EMPTY STATE ===== */
        .empty-state {
            padding: 48px 24px;
            text-align: center;
            color: var(--gray-400);
            font-size: 14px;
            background: var(--gray-100);
            border-radius: var(--radius-md);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1400px) {
            .stats-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 1200px) {
            .charts-grid { grid-template-columns: repeat(2, 1fr); }
            .activity-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 992px) {
            .dashboard-body { padding: 24px; }
            .greeting-title { font-size: 28px; }
        }

        @media (max-width: 768px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr); }
            .charts-grid { grid-template-columns: 1fr; }
            .activity-grid { grid-template-columns: 1fr; }
            .dashboard-body { padding: 20px; }
        }

        @media (max-width: 480px) {
            .stats-grid { grid-template-columns: 1fr; }
            .greeting-title { font-size: 24px; }
            .stat-value { font-size: 32px; }
        }

        /* ===== SCROLLBAR ===== */
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: var(--gray-100); }
        ::-webkit-scrollbar-thumb { background: var(--red-soft); border-radius: 8px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--red-primary); }
    </style>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="dashboard-body">
        <!-- GREETING SECTION -->
        <div class="greeting-section">
            <h1 class="greeting-title">
                <span id="greeting"></span>, <?php echo e(Auth::guard('admin')->user()->name); ?>

            </h1>
            <p class="greeting-subtitle"><?php echo e(__('Here\'s your performance overview for today')); ?></p>
        </div>

        <!-- STATS CARDS -->
        <div class="stats-grid">
            <?php $__currentLoopData = $dashboardData; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="stat-card">
                    <div class="stat-header">
                        <span class="stat-title"><?php echo e($item['title'] ?? ''); ?></span>
                        <?php if(isset($item['route'])): ?>
                            <a href="<?php echo e(isset($item['params']) ? route($item['route'], $item['params']) : route($item['route'])); ?>" class="stat-link">
                                <i class="las la-arrow-right"></i>
                            </a>
                        <?php endif; ?>
                    </div>
                    <div class="stat-value"><?php echo e($item['value'] ?? 0); ?></div>
                    <div class="stat-trend">
                        <i class="las la-arrow-up trend-up"></i>
                        <span><?php echo e(__('vs last month')); ?></span>
                    </div>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>

        <!-- CHARTS SECTION -->
        <div class="charts-grid">
            <!-- Customers Chart -->
            <div class="chart-card">
                <div class="chart-header">
                    <div>
                        <h5 class="chart-title"><?php echo e(__('Customers')); ?></h5>
                        <p class="chart-subtitle">
                            <?php echo e(__('Total')); ?> <strong><?php echo e($total_user); ?></strong> <?php echo e(__('users')); ?>

                        </p>
                    </div>
                    <select id="timeIntervalSelect" class="chart-select">
                        <?php $__currentLoopData = ['This Week','This Month','This Year']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo e($key); ?>"><?php echo e($option); ?></option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </select>
                </div>
                <div class="chart-container">
                    <canvas id="lineChartCustomer"></canvas>
                </div>
            </div>

            <!-- Services Chart -->
            <div class="chart-card">
                <div class="chart-header">
                    <div>
                        <h5 class="chart-title"><?php echo e(__('Services')); ?></h5>
                        <p class="chart-subtitle">
                            <?php echo e(__('Total')); ?> <strong><?php echo e($total_services); ?></strong> <?php echo e(__('services')); ?>

                        </p>
                    </div>
                    <select id="serviceTimeIntervalSelect" class="chart-select">
                        <?php $__currentLoopData = ['This Week','This Month','This Year']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo e($key); ?>"><?php echo e($option); ?></option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </select>
                </div>
                <div class="chart-container">
                    <canvas id="lineChartListings"></canvas>
                </div>
            </div>

            <!-- Products Chart -->
            <div class="chart-card">
                <div class="chart-header">
                    <div>
                        <h5 class="chart-title"><?php echo e(__('Products')); ?></h5>
                        <p class="chart-subtitle">
                            <?php echo e(__('Total')); ?> <strong><?php echo e($total_products); ?></strong> <?php echo e(__('products')); ?>

                        </p>
                    </div>
                    <select id="productTimeIntervalSelect" class="chart-select">
                        <?php $__currentLoopData = ['This Week','This Month','This Year']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo e($key); ?>"><?php echo e($option); ?></option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </select>
                </div>
                <div class="chart-container">
                    <canvas id="lineChartProductListings"></canvas>
                </div>
            </div>
        </div>

        <!-- RECENT ACTIVITY -->
        <div class="activity-grid">
            <!-- Recent Users -->
            <div class="activity-card">
                <div class="activity-header">
                    <div class="activity-title">
                        <i class="las la-users"></i>
                        <?php echo e(__('Recent Users')); ?>

                    </div>
                    <span class="activity-badge"><?php echo e($recent_users->count()); ?> new</span>
                </div>

                <?php if($recent_users->count() > 0): ?>
                    <table class="table-modern">
                        <thead>
                            <tr>
                                <th><?php echo e(__('No.')); ?></th>
                                <th><?php echo e(__('User')); ?></th>
                                <th><?php echo e(__('Joined')); ?></th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $__currentLoopData = $recent_users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr class="table-row">
                                    <td style="width: 15%;">
                                        <span style="font-weight: 600; color: var(--red-primary);"><?php echo e($loop->iteration); ?></span>
                                    </td>
                                    <td style="width: 60%;">
                                        <div class="user-cell">
                                            <div class="user-avatar">
                                                <?php if(!empty($user->image)): ?>
                                                    <?php echo render_image_markup_by_attachment_id($user->image); ?>

                                                <?php else: ?>
                                                    <img src="<?php echo e(asset('assets/frontend/img/static/user-no-image.webp')); ?>" alt="No Image">
                                                <?php endif; ?>
                                            </div>
                                            <div class="user-info">
                                                <div class="user-name"><?php echo e($user->fullname ?: $user->email); ?></div>
                                                <div class="user-email"><?php echo e($user->email); ?></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="width: 25%;">
                                        <span class="date-badge">
                                            <i class="las la-calendar"></i>
                                            <?php echo e(optional($user->created_at)->format('d M Y') ?? '-'); ?>

                                        </span>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </tbody>
                    </table>
                <?php else: ?>
                    <div class="empty-state">
                        <i class="las la-user-slash" style="font-size: 32px; margin-bottom: 12px; color: var(--red-primary);"></i>
                        <p><?php echo e(__('No recent users found')); ?></p>
                    </div>
                <?php endif; ?>
            </div>

            <!-- Recent Services -->
            <div class="activity-card">
                <div class="activity-header">
                    <div class="activity-title">
                        <i class="las la-cog"></i>
                        <?php echo e(__('Recent Services')); ?>

                    </div>
                    <span class="activity-badge"><?php echo e($recent_services->count()); ?> new</span>
                </div>

                <?php if($recent_services->count() > 0): ?>
                    <table class="table-modern">
                        <thead>
                            <tr>
                              <th><?php echo e(__('No.')); ?></th>
                                <th><?php echo e(__('Service')); ?></th>
                                <th><?php echo e(''); ?></th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $__currentLoopData = $recent_services; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $service): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr class="table-row">
                                    <td style="width: 15%;">
                                        <span style="font-weight: 600; color: var(--red-primary);"><?php echo e($loop->iteration); ?></span>
                                    </td>
                                    <td style="width: 60%;">
                                        <div class="item-cell">
                                            <div class="item-thumb">
                                                <?php echo render_image_markup_by_attachment_id($service->image); ?>

                                            </div>
                                            <div>
                                                <a href="<?php echo e(route('admin.service.details', $service->id)); ?>" class="item-title">
                                                    <?php echo e($service->title); ?>

                                                </a>
                                                <div style="margin-top: 6px;">
                                                    <span class="date-badge">
                                                        <i class="las la-clock"></i>
                                                        <?php echo e(optional($service->created_at)->format('d M Y') ?? '-'); ?>

                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="width: 25%;">
                                        <a href="<?php echo e(route('admin.service.details', $service->id)); ?>" class="btn-view">
                                            <i class="las la-eye"></i>
                                            <?php echo e(__('View')); ?>

                                        </a>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </tbody>
                    </table>
                <?php else: ?>
                    <div class="empty-state">
                        <i class="las la-cog" style="font-size: 32px; margin-bottom: 12px; color: var(--red-primary);"></i>
                        <p><?php echo e(__('No recent services found')); ?></p>
                    </div>
                <?php endif; ?>
            </div>

            <!-- Recent Products -->
            <div class="activity-card">
                <div class="activity-header">
                    <div class="activity-title">
                        <i class="las la-box"></i>
                        <?php echo e(__('Recent Products')); ?>

                    </div>
                    <span class="activity-badge"><?php echo e($recent_products->count()); ?> new</span>
                </div>

                <?php if($recent_products->count() > 0): ?>
                    <table class="table-modern">
                        <thead>
                            <tr>
                               <th><?php echo e(__('No.')); ?></th>
                                <th><?php echo e(__('Product')); ?></th>
                                <th><?php echo e(''); ?></th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $__currentLoopData = $recent_products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr class="table-row">
                                    <td style="width: 15%;">
                                        <span style="font-weight: 600; color: var(--red-primary);"><?php echo e($loop->iteration); ?></span>
                                    </td>
                                    <td style="width: 60%;">
                                        <div class="item-cell">
                                            <div class="item-thumb">
                                                <?php echo render_image_markup_by_attachment_id($product->image); ?>

                                            </div>
                                            <div>
                                                <a href="<?php echo e(route('admin.product.details', $product->id)); ?>" class="item-title">
                                                    <?php echo e($product->title); ?>

                                                </a>
                                                <div style="margin-top: 6px;">
                                                    <span class="date-badge">
                                                        <i class="las la-clock"></i>
                                                        <?php echo e(optional($product->created_at)->format('d M Y') ?? '-'); ?>

                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="width: 25%;">
                                        <a href="<?php echo e(route('admin.product.details', $product->id)); ?>" class="btn-view">
                                            <i class="las la-eye"></i>
                                            <?php echo e(__('View')); ?>

                                        </a>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </tbody>
                    </table>
                <?php else: ?>
                    <div class="empty-state">
                        <i class="las la-box-open" style="font-size: 32px; margin-bottom: 12px; color: var(--red-primary);"></i>
                        <p><?php echo e(__('No recent products found')); ?></p>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php $__env->startSection('scripts'); ?>

    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
    <script>
        (function($) {
            "use strict";

            // Dynamic greeting with red gradient
            $(document).ready(function () {
                const hour = new Date().getHours();
                let greeting = '';
                
                if (hour < 12) greeting = '<?php echo e(__("Good Morning")); ?>';
                else if (hour < 18) greeting = '<?php echo e(__("Good Afternoon")); ?>';
                else greeting = '<?php echo e(__("Good Evening")); ?>';
                
                $('#greeting').text(greeting);
            });

            // Initialize all charts with red theme
            function initCharts() {
                // Common chart options with red theme
                const chartOptions = {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: '#fff',
                            titleColor: '#0a0c0d',
                            bodyColor: '#404546',
                            borderColor: '#ffe3e3',
                            borderWidth: 1,
                            padding: 12,
                            displayColors: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: '#f3f5f6', drawBorder: false },
                            ticks: { color: '#a0a6a8', stepSize: 5 }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: '#a0a6a8' }
                        }
                    },
                    elements: {
                        line: { tension: 0.4 },
                        point: { radius: 0, hoverRadius: 6 }
                    }
                };

                <?php if(isset($user_chart_data)): ?>
                    new Chart(document.getElementById('lineChartCustomer'), {
                        type: 'line',
                        data: {
                            labels: <?php echo json_encode($user_chart_data['labels'] ?? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']); ?>,
                            datasets: [{
                                data: <?php echo json_encode($user_chart_data['data'] ?? [5, 8, 12, 7, 15, 10, 18]); ?>,
                                borderColor: '#e31b23',
                                backgroundColor: 'rgba(227, 27, 35, 0.02)',
                                borderWidth: 3,
                                pointBackgroundColor: '#e31b23',
                                pointBorderColor: '#fff',
                                pointBorderWidth: 2,
                                pointHoverRadius: 8,
                                pointHoverBackgroundColor: '#b11218',
                                fill: true
                            }]
                        },
                        options: chartOptions
                    });
                <?php endif; ?>

                <?php if(isset($service_chart_data)): ?>
                    new Chart(document.getElementById('lineChartListings'), {
                        type: 'line',
                        data: {
                            labels: <?php echo json_encode($service_chart_data['labels'] ?? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']); ?>,
                            datasets: [{
                                data: <?php echo json_encode($service_chart_data['data'] ?? [3, 7, 9, 5, 12, 8, 14]); ?>,
                                borderColor: '#e31b23',
                                backgroundColor: 'rgba(227, 27, 35, 0.02)',
                                borderWidth: 3,
                                pointBackgroundColor: '#e31b23',
                                pointBorderColor: '#fff',
                                pointBorderWidth: 2,
                                pointHoverRadius: 8,
                                pointHoverBackgroundColor: '#b11218',
                                fill: true
                            }]
                        },
                        options: chartOptions
                    });
                <?php endif; ?>

                <?php if(isset($product_chart_data)): ?>
                    new Chart(document.getElementById('lineChartProductListings'), {
                        type: 'line',
                        data: {
                            labels: <?php echo json_encode($product_chart_data['labels'] ?? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']); ?>,
                            datasets: [{
                                data: <?php echo json_encode($product_chart_data['data'] ?? [4, 6, 10, 8, 13, 9, 16]); ?>,
                                borderColor: '#e31b23',
                                backgroundColor: 'rgba(227, 27, 35, 0.02)',
                                borderWidth: 3,
                                pointBackgroundColor: '#e31b23',
                                pointBorderColor: '#fff',
                                pointBorderWidth: 2,
                                pointHoverRadius: 8,
                                pointHoverBackgroundColor: '#b11218',
                                fill: true
                            }]
                        },
                        options: chartOptions
                    });
                <?php endif; ?>
            }

           // Initialize charts safely
$(window).on('load', function () {
    setTimeout(function () {
        initCharts();
    }, 300);
});

            // Chart period change handlers
            $('#timeIntervalSelect, #serviceTimeIntervalSelect, #productTimeIntervalSelect').on('change', function() {
                // Add your AJAX logic here to fetch new chart data
                console.log('Period changed:', $(this).val());
            });

        })(jQuery);
    </script>
     <?php echo $__env->make('backend.pages.dashboard.line-graph-js', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    <?php echo $__env->make('backend.pages.dashboard.total-income-graph-js', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/dashboard/dashboard.blade.php ENDPATH**/ ?>