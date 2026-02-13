<div class="custom_pagination mt-4 d-flex justify-content-between gap-4 flex-wrap" id="tablePagination">

    <div class="entries-wraper">
        <?php echo e($paginator->firstItem()); ?> - <?php echo e($paginator->lastItem()); ?> of <?php echo e($paginator->total()); ?>

    </div>

    <ul class="pagination custom-ul">

        <?php
            $current = $paginator->currentPage();
            $last = $paginator->lastPage();
            $query = request()->except('page');
            $queryString = http_build_query($query);

            function pageUrl($paginator, $page, $queryString) {
                return $paginator->url($page) . ($queryString ? '&' . $queryString : '');
            }

            if ($current >= $last - 2) {
                $start = max($last - 2, 1);
                $end = $last;
            } else {
                $start = $current;
                $end = min($current + 2, $last);
            }
        ?>

        <?php if($paginator->onFirstPage()): ?>
            <li class="page-prev disabled">
                <span class="page-link"><i class="icon-base ti tabler-chevron-left"></i></span>
            </li>
        <?php else: ?>
            <li class="page-prev">
                <a class="page-link" href="<?php echo e(pageUrl($paginator, $current - 1, $queryString)); ?>">
                    <i class="icon-base ti tabler-chevron-left"></i>
                </a>
            </li>
        <?php endif; ?>

        <?php if($start > 2): ?>
            <li class="page-item">
                <a class="page-link" href="<?php echo e(pageUrl($paginator, 1, $queryString)); ?>">1</a>
            </li>
            <li class="page-item disabled"><span class="page-link">...</span></li>
        <?php endif; ?>

        <?php for($i = $start; $i <= $end; $i++): ?>
            <li class="page-item">
                <a class="page-link <?php echo e($i == $current ? 'active' : ''); ?>"
                   href="<?php echo e(pageUrl($paginator, $i, $queryString)); ?>">
                    <?php echo e($i); ?>

                </a>
            </li>
        <?php endfor; ?>

        <?php if($end < $last - 1 && $current < $last - 2): ?>
            <li class="page-item disabled"><span class="page-link">...</span></li>
        <?php endif; ?>

        <?php if($end < $last): ?>
            <li class="page-item">
                <a class="page-link <?php echo e($current == $last ? 'active' : ''); ?>"
                   href="<?php echo e(pageUrl($paginator, $last, $queryString)); ?>">
                    <?php echo e($last); ?>

                </a>
            </li>
        <?php endif; ?>

        <?php if($paginator->hasMorePages()): ?>
            <li class="page-item">
                <a class="page-link" href="<?php echo e(pageUrl($paginator, $current + 1, $queryString)); ?>">
                    <i class="icon-base ti tabler-chevron-right"></i>
                </a>
            </li>
        <?php else: ?>
            <li class="page-item disabled">
                <span class="page-link"><i class="icon-base ti tabler-chevron-right"></i></span>
            </li>
        <?php endif; ?>

    </ul>
</div>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/components/frontend/dashboard-pagination/pagination.blade.php ENDPATH**/ ?>