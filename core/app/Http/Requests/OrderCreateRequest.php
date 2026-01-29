<?php

namespace App\Http\Requests;

use App\Rules\CheckDeliveryModeForOutletIdRule;
use App\Rules\CheckDeliveryModeRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class OrderCreateRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'items' => 'required|array',
            'items.*.id' => 'required|integer|exists:services,id',
            'items.*.qty' => 'required|integer|min:1',
            'staff_id' => 'nullable|integer|exists:staff,id',
            'car_variant' => 'required|integer|exists:varients,id',
            'date' => 'required|date_format:Y-m-d',
            'time' => 'required|string',
            'order_note' => 'nullable|string',

            'location.address' => ['string',new CheckDeliveryModeRule],
            'selected_payment_gateway' => 'required|string',
            'image' => 'nullable|file|mimes:jpg,jpeg,png,webp|max:2048',
            'coupon_code'=>'nullable|string',
            'delivery_mode'=>['in:pickup,walkin',new CheckDeliveryModeForOutletIdRule],
        ];
    }

    public function withValidator(Validator $validator)
    {
        $validator->sometimes('image', 'required|mimes:jpg,jpeg,png,webp', function ($input) {
            return $input->selected_payment_gateway == 'manual_payment';
        });
    }

    public function messages(): array
    {
        return [
            'items.required' => __('The all services field is required.'),
            'items.array' => __('The all services must be an array.'),

            'items.*.id.required' => __('The service ID is required for each service.'),
            'items.*.id.integer' => __('The service ID must be an integer.'),
            'items.*.id.exists' => __('The selected service ID is invalid.'),

            'items.*.qty.required' => __('The quantity is required for each service.'),
            'items.*.qty.integer' => __('The quantity must be an integer.'),
            'items.*.qty.min' => __('The quantity must be at least 1.'),

            'staff_id.integer' => __('The staff ID must be an integer.'),
            'staff_id.exists' => __('The selected staff ID is invalid.'),


            'date.required' => __('The date is required for each service.'),
            'date.date_format' => __('The date format is invalid. Use YYYY-MM-DD.'),

            'schedule.required' => __('The schedule is required for each service.'),
            'schedule.string' => __('The schedule must be a string.'),

            'order_note.string' => __('The order note must be a string.'),


            'selected_payment_gateway.required' => __('The selected payment gateway is required.'),
            'selected_payment_gateway.string' => __('The selected payment gateway must be a string.'),


            'image.required' => __('The manual payment image is required when using manual payment.'),
            'manual_payment_image.mimes' => __('The manual payment image must be a file of type: jpg, jpeg, png, webp'),
            'manual_payment_image.max' => __('The manual payment image may not be greater than 2048 kilobytes.'),
            'coupon_code.string' => __('The coupon code must be a string.'),
            'delivery_mode.in' => __('The delivery mode must be either pickup or walkin.'),
        ];
    }

}
