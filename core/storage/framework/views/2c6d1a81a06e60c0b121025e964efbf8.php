<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag;

$__newAttributes = [];
$__propNames = \Illuminate\View\ComponentAttributeBag::extractPropNames(([
    'selector' => '#telephone',
    'submitButtonId' => 'register_button',
    'key' => 1
]));

foreach ($attributes->all() as $__key => $__value) {
    if (in_array($__key, $__propNames)) {
        $$__key = $$__key ?? $__value;
    } else {
        $__newAttributes[$__key] = $__value;
    }
}

$attributes = new \Illuminate\View\ComponentAttributeBag($__newAttributes);

unset($__propNames);
unset($__newAttributes);

foreach (array_filter(([
    'selector' => '#telephone',
    'submitButtonId' => 'register_button',
    'key' => 1
]), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
}

$__defined_vars = get_defined_vars();

foreach ($attributes->all() as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
}

unset($__defined_vars, $__key, $__value); ?>
<link rel="stylesheet" href="<?php echo e(asset('assets/common/css/intlTelInput.min.css')); ?>">
<style>
    #telephone.error{
        border-color: var(--main-color-one);
    }
    #telephone.success{
        border-color: var(--main-color-three);
    }
    .single-input .iti {
        width: 100%;
    }
</style>

<script src="<?php echo e(asset('assets/common/js/intlTelInput.js')); ?>"></script>
<script>
    eval('let input' + `<?php echo e($key); ?>` + '= undefined;');
    eval('let iti' + `<?php echo e($key); ?>` + '= undefined;');

    let input<?php echo e($key); ?> = document.querySelector(`<?php echo e($selector); ?>`);

    let iti<?php echo e($key); ?> = window.intlTelInput(input<?php echo e($key); ?>, {
        autoPlaceholder: "aggressive",
        excludeCountries: ["il"],
        separateDialCode: true,
        utilsScript: `<?php echo e(asset("assets/common/js/utils.js")); ?>`
    });

    // When user select a country and input another country phone number then again select the correct country then auto validate the full number
    $(document).on('keyup', `<?php echo e($selector); ?>`, function () {
        let el = $(this);
        let inputNumbers = el.val();

        let phoneNumbers = inputNumbers.replace(/[^0-9+]/g, '');
        el.val(phoneNumbers);

        $('.error-text').remove();

        let isValid = iti<?php echo e($key); ?>.isValidNumber();
        if (!isValid) {
            el.addClass('error');
            el.parent().after(`<p class="text-end text-danger error-text"><small><?php echo e(__('The number is not valid.')); ?></small></p>`);
            document.getElementById(`<?php echo e($submitButtonId); ?>`).disabled = true;
        } else {
            el.val(iti<?php echo e($key); ?>.getNumber());

            el.removeClass('error');
            el.addClass('success');
            el.parent().after(`<p class="text-end text-success error-text"><small><?php echo e(__('The number is perfect.')); ?></small></p>`);
            setTimeout(function () {
                el.removeClass('success');
                $('.error-text').remove();
            }, 5000);
            document.getElementById(`<?php echo e($submitButtonId); ?>`).disabled = false;
        }
    });
</script>
<?php /**PATH C:\xampp\htdocs\JusMoto-WebApp\core\resources\views/components/custom-js/phone-number-config.blade.php ENDPATH**/ ?>