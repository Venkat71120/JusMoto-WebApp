$('.icp-dd').iconpicker();
$('.icp-dd').on('iconpickerSelected', function (e) {
var selectedIcon = e.iconpickerValue;
$(this).parent().parent().children('input').val(selectedIcon);
});
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/components/icon/icon-picker.blade.php ENDPATH**/ ?>