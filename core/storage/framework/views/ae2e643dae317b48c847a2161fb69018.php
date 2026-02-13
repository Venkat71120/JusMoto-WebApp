<?php $__env->startSection('scripts'); ?>
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
<script>
(function($) {
    "use strict";

    // CSS Variable getter
    function cssvar(name) {
        return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    }

    // Chart instances
    let lineChartCustomer;
    let lineChartListings;
    let lineChartProductListings;

    $(document).ready(function () {
        // Dynamic greeting
        const hour = new Date().getHours();
        let greeting = '';
        if (hour < 12) greeting = '<?php echo e(__("Good Morning")); ?>';
        else if (hour < 18) greeting = '<?php echo e(__("Good Afternoon")); ?>';
        else greeting = '<?php echo e(__("Good Evening")); ?>';
        $('#greeting').text(greeting);

        // Initialize charts with default data
        setTimeout(function() {
            fetchDataCustomer('0');
            fetchDataServices('0');
            fetchDataProducts('0');
        }, 300);
    });

    // ===== CUSTOMER CHART =====
    function createChartCustomer(data) {
        const ctx = document.getElementById('lineChartCustomer')?.getContext('2d');
        if (!ctx) return;
        
        if (lineChartCustomer) {
            lineChartCustomer.destroy();
        }

        lineChartCustomer = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: '<?php echo e(__("New Users")); ?>',
                    data: data.data,
                    borderColor: '#e31b23',
                    backgroundColor: 'rgba(227, 27, 35, 0.04)',
                    borderWidth: 3,
                    pointBorderColor: '#ffffff',
                    pointBackgroundColor: '#e31b23',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 7,
                    pointHoverBackgroundColor: '#b11218',
                    pointHoverBorderColor: '#ffffff',
                    pointHoverBorderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#ffffff',
                        titleColor: '#17191a',
                        bodyColor: '#404546',
                        borderColor: '#ffe3e3',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: false,
                        callbacks: {
                            title: function(tooltipItems) {
                                return tooltipItems[0].label;
                            },
                            label: function(context) {
                                return `<?php echo e(__("Users")); ?>: ${context.raw}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#f0f2f4',
                            drawBorder: false,
                            lineWidth: 1
                        },
                        ticks: {
                            color: '#6b7280',
                            stepSize: 5,
                            font: { size: 11 }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#6b7280',
                            font: { size: 11 }
                        }
                    }
                },
                elements: {
                    line: {
                        tension: 0.4
                    }
                }
            }
        });
    }

    // ===== SERVICES CHART =====
    function createChartServices(data) {
        const ctx = document.getElementById('lineChartListings')?.getContext('2d');
        if (!ctx) return;
        
        if (lineChartListings) {
            lineChartListings.destroy();
        }

        lineChartListings = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: '<?php echo e(__("New Services")); ?>',
                    data: data.data,
                    borderColor: '#e31b23',
                    backgroundColor: 'rgba(227, 27, 35, 0.04)',
                    borderWidth: 3,
                    pointBorderColor: '#ffffff',
                    pointBackgroundColor: '#e31b23',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 7,
                    pointHoverBackgroundColor: '#b11218',
                    pointHoverBorderColor: '#ffffff',
                    pointHoverBorderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#ffffff',
                        titleColor: '#17191a',
                        bodyColor: '#404546',
                        borderColor: '#ffe3e3',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: false,
                        callbacks: {
                            title: function(tooltipItems) {
                                return tooltipItems[0].label;
                            },
                            label: function(context) {
                                return `<?php echo e(__("Services")); ?>: ${context.raw}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#f0f2f4',
                            drawBorder: false,
                            lineWidth: 1
                        },
                        ticks: {
                            color: '#6b7280',
                            stepSize: 5,
                            font: { size: 11 }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#6b7280',
                            font: { size: 11 }
                        }
                    }
                },
                elements: {
                    line: {
                        tension: 0.4
                    }
                }
            }
        });
    }

    // ===== PRODUCTS CHART =====
    function createChartProducts(data) {
        const ctx = document.getElementById('lineChartProductListings')?.getContext('2d');
        if (!ctx) return;
        
        if (lineChartProductListings) {
            lineChartProductListings.destroy();
        }

        lineChartProductListings = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: '<?php echo e(__("New Products")); ?>',
                    data: data.data,
                    borderColor: '#e31b23',
                    backgroundColor: 'rgba(227, 27, 35, 0.04)',
                    borderWidth: 3,
                    pointBorderColor: '#ffffff',
                    pointBackgroundColor: '#e31b23',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 7,
                    pointHoverBackgroundColor: '#b11218',
                    pointHoverBorderColor: '#ffffff',
                    pointHoverBorderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#ffffff',
                        titleColor: '#17191a',
                        bodyColor: '#404546',
                        borderColor: '#ffe3e3',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: false,
                        callbacks: {
                            title: function(tooltipItems) {
                                return tooltipItems[0].label;
                            },
                            label: function(context) {
                                return `<?php echo e(__("Products")); ?>: ${context.raw}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#f0f2f4',
                            drawBorder: false,
                            lineWidth: 1
                        },
                        ticks: {
                            color: '#6b7280',
                            stepSize: 5,
                            font: { size: 11 }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#6b7280',
                            font: { size: 11 }
                        }
                    }
                },
                elements: {
                    line: {
                        tension: 0.4
                    }
                }
            }
        });
    }

    // ===== FETCH FUNCTIONS =====
    function fetchDataCustomer(interval) {
        $.ajax({
            url: "<?php echo e(route('admin.get.user.graph.data')); ?>",
            method: 'GET',
            data: { interval: interval },
            success: function(response) {
                let labels = [];
                let data = [];
                
                if (response && typeof response === 'object') {
                    for (const [key, value] of Object.entries(response)) {
                        labels.push(key);
                        data.push(value);
                    }
                }
                
                if (labels.length === 0) {
                    labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                    data = [4, 7, 5, 9, 12, 8, 15];
                }
                
                createChartCustomer({ labels: labels, data: data });
            },
            error: function(error) {
                console.error('Error fetching customer data:', error);
                // Fallback data
                const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                const data = [4, 7, 5, 9, 12, 8, 15];
                createChartCustomer({ labels: labels, data: data });
            }
        });
    }

    function fetchDataServices(interval) {
        $.ajax({
            url: "<?php echo e(route('admin.get.service.graph.data')); ?>",
            method: 'GET',
            data: { interval: interval },
            success: function(response) {
                let labels = [];
                let data = [];
                
                if (response && typeof response === 'object') {
                    for (const [key, value] of Object.entries(response)) {
                        labels.push(key);
                        data.push(value);
                    }
                }
                
                if (labels.length === 0) {
                    labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                    data = [3, 5, 7, 6, 10, 8, 12];
                }
                
                createChartServices({ labels: labels, data: data });
            },
            error: function(error) {
                console.error('Error fetching services data:', error);
                // Fallback data
                const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                const data = [3, 5, 7, 6, 10, 8, 12];
                createChartServices({ labels: labels, data: data });
            }
        });
    }

    function fetchDataProducts(interval) {
        $.ajax({
            url: "<?php echo e(route('admin.get.product.graph.data')); ?>",
            method: 'GET',
            data: { interval: interval },
            success: function(response) {
                let labels = [];
                let data = [];
                
                if (response && typeof response === 'object') {
                    for (const [key, value] of Object.entries(response)) {
                        labels.push(key);
                        data.push(value);
                    }
                }
                
                if (labels.length === 0) {
                    labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                    data = [2, 4, 6, 5, 9, 7, 11];
                }
                
                createChartProducts({ labels: labels, data: data });
            },
            error: function(error) {
                console.error('Error fetching products data:', error);
                // Fallback data
                const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                const data = [2, 4, 6, 5, 9, 7, 11];
                createChartProducts({ labels: labels, data: data });
            }
        });
    }

    // ===== EVENT HANDLERS =====
    $(document).on('change', '#timeIntervalSelect', function() {
        let interval = $(this).val();
        fetchDataCustomer(interval);
    });

    $(document).on('change', '#serviceTimeIntervalSelect', function() {
        let interval = $(this).val();
        fetchDataServices(interval);
    });

    $(document).on('change', '#productTimeIntervalSelect', function() {
        let interval = $(this).val();
        fetchDataProducts(interval);
    });

    // ===== WINDOW RESIZE HANDLER =====
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Redraw charts on resize
            if (lineChartCustomer) lineChartCustomer.update();
            if (lineChartListings) lineChartListings.update();
            if (lineChartProductListings) lineChartProductListings.update();
        }, 250);
    });

})(jQuery);
</script>
<?php $__env->stopSection(); ?><?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/backend/pages/dashboard/line-graph-js.blade.php ENDPATH**/ ?>