<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('Dashboard')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('style'); ?>
<style>
/* ===== Body ===== */
body {
    background-color: #f5f7fa;
    color: #333;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
}

/* ===== Dashboard Cards ===== */
.dashboard__card {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    padding: 20px;
    height: 100% !important;
}

.dashboard__card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
}

.dashboard__card__header__title {
    color: #1f2a38;
    font-weight: 600;
    font-size: 16px;
}

.dashboard__card__header__title p {
    color: #8f9bb3;
    font-size: 13px;
    margin-top: 4px;
}

/* ===== Promo Cards ===== */
.dashboard_promo__single {
    border-left: 5px solid #00b799;
    border-radius: 10px;
    padding: 20px;
    transition: all 0.3s ease;
    background: #fff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

.dashboard_promo__single:hover {
    border-left-color: #ff4240;
    transform: translateY(-5px);
}

.dashboard_promo__single__subtitle {
    font-size: 13px;
    color: #6c757d;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dashboard_promo__single__price {
    font-size: 22px;
    font-weight: 700;
    color: #1f2a38;
    margin-top: 10px;
}

/* ===== Links & Icons ===== */
a {
    color: #00b799;
    transition: color 0.3s ease;
}

a:hover {
    color: #ff4240;
}

/* ===== Tables ===== */
.custom_table table {
    width: 100%;
    border-collapse: collapse;
}

.custom_table thead th {
    background-color: #edf1f5;
    color: #495057;
    text-align: left;
    font-weight: 600;
    padding: 12px;
}

.table_row:hover {
    background-color: #f1f4f8;
    transition: all 0.3s ease;
}

.table_date {
    color: #ff4240;
    font-weight: 500;
}

/* ===== Buttons ===== */
.btn_bg_info {
    background-color: #00b799;
    border-color: #00b799;
    color: #fff;
    border-radius: 8px;
    padding: 6px 14px;
    font-size: 13px;
    transition: all 0.3s ease;
}

.btn_bg_info:hover {
    background-color: #ff4240;
    border-color: #ff4240;
}

/* ===== User / Product Images ===== */
.table_customer__thumb img,
.order_id img {
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    width: 60px;
    height: 60px;
    object-fit: cover;
    transition: all 0.3s ease;
}

.table_customer__thumb img:hover,
.order_id img:hover {
    transform: scale(1.05);
}

/* ===== Charts ===== */
.chart__item__inner {
    background: #fff;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.03);
}

#sales_pipeline {
    width: 100% !important;
    height: 360px !important;
}

/* ===== Greeting ===== */
.dashboard__inner__header__title strong {
    color: #00b799;
    font-weight: 700;
    font-size: 20px;
}

/* ===== Dropdowns ===== */
.select2-container--default .select2-selection--single {
    border-radius: 8px;
    height: 36px;
    border: 1px solid #d3dcdb;
    padding: 2px 10px;
}

/* ===== Responsive ===== */
@media (max-width: 1200px) {
    .dashboard_promo__single {
        margin-bottom: 20px;
    }
}

@media (max-width: 768px) {
    .dashboard__inner__header__title {
        font-size: 16px;
    }
    .dashboard__card {
        padding: 15px;
    }
}
</style>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="dashboard__body posPadding">
        <div class="dashboard__inner">
            <div class="dashboard__inner__item">
                <div class="dashboard__inner__item__flex">
                    <div class="dashboard__inner__item__left bodyItemPadding">
                        <div class="dashboard__inner__header">
                            <div class="dashboard__inner__header__flex">
                                <div class="dashboard__inner__header__left">
                                    <h4 class="dashboard__inner__header__title"> <strong id="greeting"></strong>, <?php echo e(Auth::guard('admin')->user()->name); ?> </h4>
                                    <p class="dashboard__inner__header__para"><?php echo e(__('Manage your dashboard here')); ?></p>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard_promo">
                            <div class="row g-4 mt-2">
                                <?php $__currentLoopData = $dashboardData; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <div class="col-xxl-2 col-xl-3 col-sm-6">
                                        <div class="dashboard_promo__single style_02 bg__white radius-10 padding-20">
                                            <span class="dashboard_promo__single__subtitle d-flex justify-content-between align-items-center">
                                                <span>
                                                <?php echo e($item['title'] ?? ''); ?>

                                                 </span>
                                                <?php if(isset($item['route'])): ?>
                                                    <a href="<?php echo e(isset($item['params']) ? route($item['route'], $item['params']) : route($item['route'])); ?>">
                                                        <i class="las la-arrow-right fs-3 font-weight-600"></i>
                                                    </a>
                                                <?php endif; ?>
                                            </span>
                                            <h4 class="dashboard_promo__single__price mt-2"><?php echo e($item['value'] ?? 0); ?></h4>
                                        </div>
                                    </div>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </div>
                        </div>

                        <div class="row g-4 mt-1">
                            <div class="col-xl-4 col-lg-4">
                                <div class="dashboard__card bg__white radius-10 p-3">
                                    <div class="dashboard__card__header">
                                        <div class="dashboard__card__header__flex">
                                            <div class="dashboard__card__header__left">
                                                <h5 class="dashboard__card__header__title"><?php echo e(__('Customers')); ?>

                                                    <p><?php echo e(__('Total Users:')); ?> <?php echo e($total_user); ?></p>
                                                </h5>
                                            </div>
                                            <div class="dashboard__card__header__right">
                                                <select id="timeIntervalSelect" class="select2_activation">
                                                    <?php $__currentLoopData = ['This Week','Last Week','This Month','Last Month','This Year','Last Year']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                        <option value="<?php echo e($key); ?>"><?php echo e($option); ?></option>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chart__item__inner mt-4">
                                        <canvas id="lineChartCustomer"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4">
                                <div class="dashboard__card bg__white padding-20 radius-10">
                                    <div class="dashboard__card__header">
                                        <div class="dashboard__card__header__flex">
                                            <div class="dashboard__card__header__left">
                                                <h5 class="dashboard__card__header__title"><?php echo e(__('Services')); ?>

                                                    <p><?php echo e(__('Total Services:')); ?> <?php echo e($total_services); ?></p>
                                                </h5>
                                            </div>
                                            <div class="dashboard__card__header__right">
                                                <select id="serviceTimeIntervalSelect" class="select2_activation">
                                                    <?php $__currentLoopData = ['This Week','Last Week','This Month','Last Month','This Year','Last Year']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                        <option value="<?php echo e($key); ?>"><?php echo e($option); ?></option>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chart__item__inner mt-4">
                                        <canvas id="lineChartListings"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4">
                                <div class="dashboard__card bg__white padding-20 radius-10">
                                    <div class="dashboard__card__header">
                                        <div class="dashboard__card__header__flex">
                                            <div class="dashboard__card__header__left">
                                                <h5 class="dashboard__card__header__title"><?php echo e(__('Products')); ?>

                                                    <p><?php echo e(__('Total Products:')); ?> <?php echo e($total_products); ?></p>
                                                </h5>
                                            </div>
                                            <div class="dashboard__card__header__right">
                                                <select id="productTimeIntervalSelect" class="select2_activation">
                                                    <?php $__currentLoopData = ['This Week','Last Week','This Month','Last Month','This Year','Last Year']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                        <option value="<?php echo e($key); ?>"><?php echo e($option); ?></option>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chart__item__inner mt-4">
                                        <canvas id="lineChartProductListings"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row g-4 mt-1">
                            <div class="col-lg-4">
                                <div class="dashboard__card bg__white radius-10 p-3">
                                    <h5 class="dashboard__card__header__title"><?php echo e(__('Recent Users')); ?></h5>
                                    <div class="dashboard__card__inner border_top_1">
                                        <div class="dashboard__inventory__table custom_table">
                                            <?php if($recent_users->count() > 0): ?>
                                                <table>
                                                    <thead>
                                                    <tr>
                                                        <th><?php echo e(__('ID')); ?></th>
                                                        <th><?php echo e(__('User')); ?></th>
                                                        <th><?php echo e(__('Created On')); ?></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <?php $__currentLoopData = $recent_users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                        <tr class="table_row">
                                                            <td><span class="order_id"><?php echo e($user->id); ?></span></td>
                                                            <td>
                                                                <div class="table_customer">
                                                                    <div class="table_customer__flex">
                                                                        <div class="table_customer__thumb">
                                                                            <?php if(!empty($user->image)): ?>
                                                                                <?php echo render_image_markup_by_attachment_id($user->image); ?>

                                                                            <?php else: ?>
                                                                                <img src="<?php echo e(asset('assets/frontend/img/static/user-no-image.webp')); ?>" alt="No Image">
                                                                            <?php endif; ?>
                                                                        </div>
                                                                        <div class="table_customer__contents">
                                                                            <?php if(trim($user->fullname) !== ""): ?>
                                                                                <h6 class="table_customer__title"><?php echo e($user->fullname); ?></h6>
                                                                            <?php else: ?>
                                                                                <h6 class="table_customer__title"><?php echo e($user->email); ?></h6>
                                                                            <?php endif; ?>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span class="table_date">
    <?php echo e(optional($user->created_at)->format('d M Y') ?? '-'); ?>

</span>
</td>
                                                        </tr>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                    </tbody>
                                                </table>
                                            <?php else: ?>
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <span class="text-center text-danger"><?php echo e(__('No recent users found')); ?></span>
                                                </div>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="dashboard__card bg__white radius-10 p-3">
                                    <h5 class="dashboard__card__header__title"><?php echo e(__('Recent Service')); ?></h5>
                                    <div class="dashboard__card__inner border_top_1">
                                        <div class="dashboard__inventory__table custom_table">
                                            <?php if($recent_services->count() > 0): ?>
                                            <table>
                                                <thead>
                                                <tr>
                                                    <th><?php echo e(__('ID')); ?></th>
                                                    <th><?php echo e(__('Title')); ?></th>
                                                    <th><?php echo e(__('Image')); ?></th>
                                                    <th><?php echo e(__('Details')); ?></th>
                                                    <th><?php echo e(__('Created On')); ?></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <?php $__currentLoopData = $recent_services; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $service): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <tr class="table_row">
                                                        <td><span class="order_id"><?php echo e($service->id); ?></span></td>
                                                        <td>
                                                            <a href="<?php echo e(route('admin.service.details', $service->id)); ?>">
                                                            <span class="order_id"><?php echo e($service->title); ?></span>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <span class="order_id">
                                                                <?php echo render_image_markup_by_attachment_id($service->image); ?>

                                                            </span>
                                                            </td>
                                                        <td>
                                                            <a href="<?php echo e(route('admin.service.details', $service->id)); ?>" class="cmnBtn btn_5 btn_bg_info btnIcon radius-5">
                                                                <i class="las la-eye"></i>
                                                            </a>
                                                        </td>
                                                        <td>
                                                           <span class="table_date">
    <?php echo e(optional($service->created_at)->format('d M Y') ?? '-'); ?>

</span>

                                                        </td>
                                                    </tr>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                </tbody>
                                            </table>
                                            <?php else: ?>
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <span class="text-center text-danger"><?php echo e(__('No recent services found')); ?></span>
                                                </div>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="dashboard__card bg__white radius-10 p-3">
                                    <h5 class="dashboard__card__header__title"><?php echo e(__('Recent Product')); ?></h5>
                                    <div class="dashboard__card__inner border_top_1">
                                        <div class="dashboard__inventory__table custom_table">
                                            <?php if($recent_products->count() > 0): ?>
                                            <table>
                                                <thead>
                                                <tr>
                                                    <th><?php echo e(__('ID')); ?></th>
                                                    <th><?php echo e(__('Title')); ?></th>
                                                    <th><?php echo e(__('Image')); ?></th>
                                                    <th><?php echo e(__('Details')); ?></th>
                                                    <th><?php echo e(__('Created On')); ?></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <?php $__currentLoopData = $recent_products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <tr class="table_row">
                                                        <td><span class="order_id"><?php echo e($product->id); ?></span></td>
                                                        <td>
                                                            <a href="<?php echo e(route('admin.product.details', $product->id)); ?>">
                                                            <span class="order_id"><?php echo e($product->title); ?></span>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <span class="order_id">
                                                                <?php echo render_image_markup_by_attachment_id($product->image); ?>

                                                            </span>
                                                            </td>
                                                        <td>
                                                            <a href="<?php echo e(route('admin.product.details', $product->id)); ?>" class="cmnBtn btn_5 btn_bg_info btnIcon radius-5">
                                                                <i class="las la-eye"></i>
                                                            </a>
                                                        </td>
                                                        <td>
                                                          <span class="table_date">
    <?php echo e(optional($product->created_at)->format('d M Y') ?? '-'); ?>

</span>

                                                        </td>
                                                    </tr>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                </tbody>
                                            </table>
                                            <?php else: ?>
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <span class="text-center text-danger"><?php echo e(__('No recent services found')); ?></span>
                                                </div>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="row g-4 mt-1">
                            
                            
                        </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
    <script>
        $(document).ready(function () {
            let currentTime = new Date().getHours();
            let morningGreeting = "<?php echo e(__('Good Morning')); ?>";
            let afternoonGreeting = "<?php echo e(__('Good Afternoon')); ?>";
            let eveningGreeting = "<?php echo e(__('Good Evening')); ?>";
            if (currentTime >= 0 && currentTime < 12) {
                $('#greeting').text(morningGreeting);
            } else if (currentTime >= 12 && currentTime < 18) {
                $('#greeting').text(afternoonGreeting);
            } else {
                $('#greeting').text(eveningGreeting);
            }
        });
    </script>
    <?php echo $__env->make('backend.pages.dashboard.line-graph-js', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    <?php echo $__env->make('backend.pages.dashboard.total-income-graph-js', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.admin-master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/dashboard/dashboard.blade.php ENDPATH**/ ?>