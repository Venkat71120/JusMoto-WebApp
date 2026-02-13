<?php $__env->startSection('site-title'); ?>
    <?php echo e(__('Service Details')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('style'); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('page-meta-data'); ?>
    <?php echo render_page_meta_data_for_service($service); ?>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <main>

        <?php echo $__env->make('frontend.pages.ServicePage.service-details-basic-info', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
        <?php echo $__env->make('frontend.pages.ServicePage.related-service-section', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

    </main>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>

    <script>

        document.addEventListener("DOMContentLoaded", function() {

            function openTab(targetId) {
                // Remove active class from all tabs and contents
                document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

                let tabBtn = document.querySelector(`.tab[data-target="${targetId}"]`);
                let tabContent = document.getElementById(targetId);

                if (tabBtn && tabContent) {
                    tabBtn.classList.add('active');
                    tabContent.classList.add('active');
                }

                // Update URL
                let url = window.location.origin + window.location.pathname;
                let query = window.location.search;

                if (targetId === 'reviews') {
                    // For reviews tab, use #reviews
                    history.replaceState(null, null, url + query + '#reviews');
                } else {
                    // For other tabs, remove hash & keep URL clean
                    history.replaceState(null, null, url);
                }
            }

            // Determine initial tab on page load
            let initialTab = 'overview';
            if (window.location.hash === '#reviews') {
                initialTab = 'reviews';
            }
            openTab(initialTab);

            document.querySelectorAll('.tab').forEach(tab => {
                tab.addEventListener('click', function() {
                    openTab(this.dataset.target);
                });
            });

            // preserve #reviews
            document.querySelectorAll('.pagination a').forEach(link => {
                if (!link.href.includes('#reviews')) {
                    link.href += '#reviews';
                }
            });

        });

        $(document).ready(function () {

            let mainSlider = $('.global-slick-init');

            let thumbnails = $('.thumbnail-item');

            thumbnails.on('click', function () {
                let index = $(this).parent().index();

                mainSlider.slick('slickGoTo', index);
                thumbnails.removeClass('active');
                $(this).addClass('active');
            });

            mainSlider.on('afterChange', function (event, slick, currentSlide) {
                thumbnails.removeClass('active');
                thumbnails.eq(currentSlide).addClass('active');
            });

        });


    </script>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('frontend.layout.master', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/frontend/pages/ServicePage/service-details.blade.php ENDPATH**/ ?>