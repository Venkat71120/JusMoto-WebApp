<div class="outlet-zone-wrapper">
    <div class="row g-4">
        <div class="col-12">
            
            <!-- Map Section -->
            <div class="zone-card">
                <div class="zone-header">
                    <h6 class="zone-title">
                        <i class="las la-map-marker"></i>
                        <?php echo e(__('Outlet Zone Settings')); ?>

                    </h6>
                </div>
                
                <div class="notice-board">
                    <p class="notice-text">
                        <i class="las la-info-circle"></i>
                        <?php echo e(__('Search your service location, pick a location, and submit.')); ?>

                        <a href="https://drive.google.com/file/d/1BwDAjSLAeb4LaxzOkrdsgGO_Io2jM6S6/view?usp=sharing" target="_blank" class="video-link">
                            <i class="las la-video"></i>
                            <strong><?php echo e(__('Video link')); ?></strong>
                        </a>
                    </p>
                </div>
                
                <div class="row">
                    <!-- Google Map -->
                    <div class="col-lg-8 mt-4">
                        <div class="map-card">
                            <div class="map-container">
                                <input id="pac-input" class="map-search" type="text" placeholder="<?php echo e(__('Search your Outlet Zone')); ?>"/>
                                <div id="map_canvas" class="map-canvas"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Form Section -->
                    <div class="col-lg-4">
                        <form action="<?php echo e(route('admin.outletAddress.add')); ?>" enctype="multipart/form-data" method="POST">
                            <?php echo csrf_field(); ?>
                            
                            <div class="form-group">
                                <label class="form-label"><?php echo e(__('Outlet Name')); ?> <span class="required">*</span></label>
                                <input type="text" name="name" id="outlet_name" class="form-control" placeholder="<?php echo e(__('Outlet Name')); ?>" value="<?php echo e(old('name')); ?>">
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label"><?php echo e(__('Outlet Location')); ?> <span class="required">*</span></label>
                                <input type="text" name="outlet_address" id="outlet_address" class="form-control" placeholder="<?php echo e(__('Outlet Location')); ?>" value="<?php echo e(old('outlet_address')); ?>">
                            </div>

                            <div class="coordinates-row">
                                <div class="form-group">
                                    <label class="form-label"><?php echo e(__('Latitude')); ?> <span class="required">*</span></label>
                                    <input type="text" name="latitude" id="latitude" class="form-control" placeholder="<?php echo e(__('Latitude')); ?>" value="<?php echo e(old('latitude')); ?>">
                                </div>
                                
                                <div class="form-group">
                                    <label class="form-label"><?php echo e(__('Longitude')); ?> <span class="required">*</span></label>
                                    <input type="text" name="longitude" id="longitude" class="form-control" placeholder="<?php echo e(__('Longitude')); ?>" value="<?php echo e(old('longitude')); ?>">
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label"><?php echo e(__('State')); ?> <span class="required">*</span></label>
                                <select name="state_id" id="state" class="form-select">
                                    <option value=""><?php echo e(__('Select State')); ?></option>
                                    <?php $__currentLoopData = $states; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $state): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <option value="<?php echo e($state->id); ?>" <?php if(old('state_id') == $state->id): ?> selected <?php endif; ?>><?php echo e($state->state); ?></option>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label"><?php echo e(__('City')); ?> <span class="required">*</span></label>
                                <select name="city_id" id="city" class="form-select">
                                    <option value=""><?php echo e(__('Select City')); ?></option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label"><?php echo e(__('Area')); ?> <span class="required">*</span></label>
                                <select name="area_id" id="area" class="form-select">
                                    <option value=""><?php echo e(__('Select Area')); ?></option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label"><?php echo e(__('Zip Code')); ?> <span class="required">*</span></label>
                                <input type="text" name="zipcode" id="zipcode" class="form-control" placeholder="<?php echo e(__('Zip Code')); ?>" value="<?php echo e(old('zipcode')); ?>">
                            </div>

                            <div class="action-buttons">
                                <button type="submit" class="btn-submit" id="outlet_submit">
                                    <i class="las la-check-circle"></i>
                                    <?php echo e(__('Submit')); ?>

                                </button>
                                <button type="reset" class="btn-clear clear_all_value">
                                    <i class="las la-undo"></i>
                                    <?php echo e(__('Clear')); ?>

                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
/* ===== CLEAN OUTLET ZONE SETTINGS ===== */

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
    --blue: #3b82f6;
    --blue-light: #eff6ff;
    --radius: 8px;
    --radius-lg: 12px;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --transition: all 0.2s ease;
}

.outlet-zone-wrapper {
    padding: 24px;
    background: var(--gray-50);
}

/* Zone Card */
.zone-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-lg);
    padding: 24px;
    box-shadow: var(--shadow-sm);
}

/* Zone Header */
.zone-header {
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--gray-200);
}

.zone-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--gray-800);
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

.zone-title i {
    color: var(--red);
    font-size: 20px;
}

/* Notice Board */
.notice-board {
    background: var(--blue-light);
    border: 1px solid var(--blue);
    border-radius: var(--radius);
    padding: 12px 16px;
    margin-bottom: 16px;
}

.notice-text {
    font-size: 14px;
    color: var(--gray-700);
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
}

.notice-text i {
    color: var(--blue);
    font-size: 16px;
}

.video-link {
    color: var(--blue);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    transition: var(--transition);
}

.video-link:hover {
    color: var(--red);
}

.video-link i {
    color: var(--red);
}

/* Map Card */
.map-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-lg);
    overflow: hidden;
    height: 100%;
}

.map-container {
    position: relative;
    height: 400px;
}

.map-canvas {
    width: 100%;
    height: 100%;
    background: var(--gray-100);
}

.map-search {
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 400px;
    height: 42px;
    padding: 8px 16px;
    border: 1px solid var(--gray-300);
    border-radius: 40px;
    font-size: 14px;
    background: var(--white);
    box-shadow: var(--shadow-md);
    z-index: 10;
}

.map-search:focus {
    outline: none;
    border-color: var(--red);
    box-shadow: 0 0 0 3px var(--red-light);
}

/* Form Elements */
.form-group {
    margin-bottom: 16px;
}

.form-label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: var(--gray-700);
    margin-bottom: 6px;
}

.required {
    color: var(--red);
    margin-left: 2px;
}

.form-control,
.form-select {
    width: 100%;
    padding: 10px 14px;
    background: var(--white);
    border: 1px solid var(--gray-300);
    border-radius: var(--radius);
    font-size: 14px;
    color: var(--gray-800);
    transition: var(--transition);
}

.form-control:focus,
.form-select:focus {
    outline: none;
    border-color: var(--red);
    box-shadow: 0 0 0 3px var(--red-light);
}

.form-control::placeholder {
    color: var(--gray-400);
    font-size: 13px;
}

/* Coordinates Row */
.coordinates-row {
    display: flex;
    gap: 12px;
}

.coordinates-row .form-group {
    flex: 1;
}

/* Action Buttons */
.action-buttons {
    display: flex;
    gap: 12px;
    margin-top: 24px;
}

.btn-submit {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 24px;
    background: var(--red);
    border: none;
    border-radius: 40px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
}

.btn-submit:hover {
    background: var(--red-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(227, 27, 35, 0.2);
}

.btn-clear {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 24px;
    background: var(--white);
    border: 1px solid var(--gray-300);
    border-radius: 40px;
    color: var(--gray-700);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
}

.btn-clear:hover {
    background: var(--gray-100);
    border-color: var(--gray-400);
}

/* Responsive */
@media (max-width: 992px) {
    .outlet-zone-wrapper {
        padding: 16px;
    }
    
    .coordinates-row {
        flex-direction: column;
        gap: 0;
    }
    
    .action-buttons {
        flex-direction: column;
    }
    
    .map-container {
        height: 350px;
    }
}

@media (max-width: 768px) {
    .zone-card {
        padding: 16px;
    }
    
    .notice-text {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .map-container {
        height: 300px;
    }
}

/* Preserve original classes */
.dashboard_table__wrapper {
    /* Original styles preserved */
}

.dashboard_table__title {
    /* Original styles preserved */
}

.dashboard_table__title__btn {
    /* Original styles preserved */
}

.btn-bg-1 {
    /* Original styles preserved */
}

.mx-3 {
    margin-left: 12px;
    margin-right: 12px;
}

.mt-5 {
    margin-top: 28px;
}

.mb-30 {
    margin-bottom: 30px;
}
</style><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/admin/serviceLocation/location-general-info.blade.php ENDPATH**/ ?>