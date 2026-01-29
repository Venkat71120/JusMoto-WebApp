$(document).ready(function () {

    let currentPath = window.location.pathname;

    $(".sidebar_list_item").each(function () {
        let linkPath = $(this).attr("href");

        if (currentPath === linkPath || currentPath.includes(linkPath)) {
            $(this).addClass("active");
        }
    });
    $('#edit_profile_name').on('click', function () {
        const container = $(this).closest('.profile_name_edit');
        container.find('.display_name').addClass('d-none');
        container.find('.edit_input').removeClass('d-none').focus();
        container.find('.edit_input').val(container.find('.display_name').text().trim());
        $(this).addClass('d-none');
        container.find('.save_profile_name').removeClass('d-none');
        container.find('#cancel_profile_name').removeClass('d-none');
    });
    $('#cancel_profile_name').on('click', function () {
        const container = $(this).closest('.profile_name_edit');
        container.find('.display_name').removeClass('d-none');
        container.find('.edit_input').addClass('d-none');
        container.find('.edit_input').val('');
        $(this).addClass('d-none');
        container.find('.save_profile_name').addClass('d-none');
        container.find('.edit_input').val(container.find('.display_name').text().trim());
        container.find('.edit_input').blur();
        container.find('#edit_profile_name').removeClass('d-none');
    });
    $('#save_profile_name').on('click', function () {
        const container = $(this).closest('.profile_name_edit');
        const newValue = container.find('.edit_input').val().trim();

        container.find('.display_name').text(newValue).removeClass('d-none');
        container.find('.edit_input').addClass('d-none');

        $(this).addClass('d-none');
        container.find('#cancel_profile_name').addClass('d-none');
        container.find('#edit_profile_name').removeClass('d-none');
    });
    // $('.img_cng_btn').on('click', function () {
    //     alert("You can't change the image right now.");
    //     // Here you can implement the logic to change the profile image
    // });
    $('.select_address_btn').on('click', function () {
        $('.select_address_btn').removeClass('active');
        $(this).addClass('active');
    });
// area_select
    $('#map_switcher').on('click',function(){
        $('.area_select').toggleClass('d-none');
    })
    $('.pass_eye_btn').on('click', function () {
        const input = $(this).siblings('input');
        const eye = $(this).find('.tabler-eye');
        const eyeOff = $(this).find('.tabler-eye-off');

        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
            eyeOff.addClass('d-none');
            eye.removeClass('d-none');
        } else {
            input.attr('type', 'password');
            eyeOff.removeClass('d-none');
            eye.addClass('d-none');
        }
    });

    $('.profile_dropdown_wrapper').on('click', function () {
        console.log('Profile dropdown clicked');
        $('.profile_dropdown_menu').toggleClass('visibled');
        if (!$(e.target).closest('.notification_wrapper, .notification_dropdown_menu').length) {
            $('.notification_dropdown_menu').removeClass('visibled');
        }
    });
// Open/close dropdown
    $('.notification_wrapper').on('click', function (e) {
        e.stopPropagation();
        console.log('Notification dropdown clicked');
        $('.notification_dropdown_menu').toggleClass('visibled');
        if (!$(e.target).closest('.profile_dropdown_wrapper, .profile_dropdown_menu').length) {
            $('.profile_dropdown_menu').removeClass('visibled');
        }
    });

// Close when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.notification_wrapper, .notification_dropdown_menu').length) {
            $('.notification_dropdown_menu').removeClass('visibled');
        }
        if (!$(e.target).closest('.profile_dropdown_wrapper, .profile_dropdown_menu').length) {
            $('.profile_dropdown_menu').removeClass('visibled');
        }
    });

    $('.menu_toggle , .overlay').on('click', function () {
        $('.sidebar').toggleClass('visible');
        $('.overlay').toggleClass('open');
    });
    $('#language').select2();
    $('#city').select2();
    $('#state').select2();
    $('#area').select2();
    $('#payment_method').select2();
    $('#input_5').select2();
    $('#language_changer').select2();


});
// (function ($) {
//     $.fn.tablePagination = function (tableSelector, options) {
//         var settings = $.extend({
//             rowsPerPage: 10,
//             maxVisiblePages: 5,
//             showPageInfo: true,
//             onPageChange: function (page, totalPages) {
//                 console.log('Page changed to:', page, 'of', totalPages);
//             }
//         }, options);
//
//         var $paginationContainer = this;
//         var $table = $(tableSelector);
//         var $tableRows = $table.find('tbody tr');
//         var currentPage = 1;
//         var totalRows = $tableRows.length;
//         var totalPages = Math.ceil(totalRows / settings.rowsPerPage);
//         function calculateVisiblePages() {
//             var maxVisible = settings.maxVisiblePages;
//             var current = currentPage;
//             var total = totalPages;
//
//             if (total <= maxVisible) {
//                 return Array.from({ length: total }, (_, i) => i + 1);
//             }
//
//             var pages = [];
//             var halfVisible = Math.floor(maxVisible / 2);
//             pages.push(1);
//             var start = Math.max(2, current - halfVisible);
//             var end = Math.min(total - 1, current + halfVisible);
//             if (current <= halfVisible + 1) {
//                 start = 2;
//                 end = Math.min(total - 1, maxVisible - 1);
//             } else if (current >= total - halfVisible) {
//                 start = Math.max(2, total - maxVisible + 2);
//                 end = total - 1;
//             }
//             if (start > 2) {
//                 pages.push('...');
//             }
//             for (var i = start; i <= end; i++) {
//                 pages.push(i);
//             }
//             if (end < total - 1) {
//                 pages.push('...');
//             }
//             if (total > 1) {
//                 pages.push(total);
//             }
//
//             return pages;
//         }
//         function showTableRows() {
//             var startIndex = (currentPage - 1) * settings.rowsPerPage;
//             var endIndex = startIndex + settings.rowsPerPage;
//             $tableRows.hide();
//             $tableRows.slice(startIndex, endIndex).show();
//         }
//         function renderPagination() {
//             if (totalPages <= 1) {
//                 $paginationContainer.empty();
//                 return;
//             }
//
//             var visiblePages = calculateVisiblePages();
//             var html = '';
//
//             if (settings.showPageInfo) {
//                 var pageNum = currentPage.toString().padStart(2, '0');
//                 html += '<div class="page-info">' + pageNum + ' Page of ' + totalPages + '</div>';
//             }
//
//             html += '<div class="page-buttons-wrapper">';
//
//             html += '<button class="nav-button" data-action="prev" ' +
//                 (currentPage === 1 ? 'disabled' : '') + ' title="Previous page">' +
//                 '<i class="icon-base ti tabler-chevron-left"></i></button>';
//
//             $.each(visiblePages, function (index, page) {
//                 if (page === '...') {
//                     html += '<span class="page-ellipsis">...</span>';
//                 } else {
//                     var isActive = page === currentPage;
//                     var pageStr = page.toString().padStart(2, '0');
//                     html += '<button class="page-button ' + (isActive ? 'active' : '') +
//                         '" data-page="' + page + '" title="Go to page ' + page + '">' +
//                         pageStr + '</button>';
//                 }
//             });
//
//             html += '<button class="nav-button" data-action="next" ' +
//                 (currentPage === totalPages ? 'disabled' : '') + ' title="Next page">' +
//                 '<i class="icon-base ti tabler-chevron-right"></i></button>';
//
//             html += '</div>';
//
//             $paginationContainer.html(html);
//         }
//
//
//         function goToPage(page) {
//             if (page < 1 || page > totalPages || page === currentPage) {
//                 return;
//             }
//
//             currentPage = page;
//             showTableRows();
//             renderPagination();
//             if (typeof settings.onPageChange === 'function') {
//                 settings.onPageChange(currentPage, totalPages);
//             }
//         }
//         function handleNavigation(action) {
//             switch (action) {
//                 case 'first':
//                     goToPage(1);
//                     break;
//                 case 'prev':
//                     goToPage(currentPage - 1);
//                     break;
//                 case 'next':
//                     goToPage(currentPage + 1);
//                     break;
//                 case 'last':
//                     goToPage(totalPages);
//                     break;
//             }
//         }
//         $paginationContainer.on('click', 'button', function () {
//             var $button = $(this);
//             if ($button.is(':disabled')) return;
//
//             var action = $button.data('action');
//             var page = $button.data('page');
//
//             if (action) {
//                 handleNavigation(action);
//             } else if (page) {
//                 goToPage(parseInt(page));
//             }
//         });
//         var api = {
//             goToPage: goToPage,
//             getCurrentPage: function () {
//                 return currentPage;
//             },
//             getTotalPages: function () {
//                 return totalPages;
//             },
//             refresh: function () {
//                 $tableRows = $table.find('tbody tr');
//                 totalRows = $tableRows.length;
//                 totalPages = Math.ceil(totalRows / settings.rowsPerPage);
//                 currentPage = 1;
//                 showTableRows();
//                 renderPagination();
//             },
//             destroy: function () {
//                 $paginationContainer.empty();
//                 $tableRows.show();
//             }
//         };
//         showTableRows();
//         renderPagination();
//         $paginationContainer.data('tablePagination', api);
//
//         return this;
//     };
//
// })(jQuery);
// $(document).ready(function () {
//     $('#tablePagination').tablePagination('.data-table', {
//         rowsPerPage: 10,
//     });
// });
// $(document).ready(function () {
//     $('#tablePagination2').tablePagination('.data-table2', {
//         rowsPerPage: 10,
//     });
// });
// $(document).ready(function () {
//     $('#tablePagination3').tablePagination('.data-table3', {
//         rowsPerPage: 10,
//     });
// });
// $(document).ready(function () {
//     $('#tablePaginationRefund').tablePagination('.data-table-refund', {
//         rowsPerPage: 14,
//     });
// });
