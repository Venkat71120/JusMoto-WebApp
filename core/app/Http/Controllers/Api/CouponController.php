<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Modules\Coupon\app\Models\Coupon;

class CouponController extends Controller
{
    /**
     * Get all available (active) coupons
     */
    public function availableCoupons()
    {
        if (!Auth::guard('sanctum')->check()) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized access')
            ], 401);
        }

        $currentDate = now()->format('Y-m-d');

        $coupons = Coupon::where('status', 1)
            ->where('expire_date', '>', $currentDate)
            ->get()
            ->map(function ($coupon) {
                return $this->formatCoupon($coupon);
            });

        return response()->json([
            'success' => true,
            'coupons' => $coupons
        ]);
    }

    /**
     * Validate a coupon code
     */
    public function validateCoupon(Request $request)
    {
        if (!Auth::guard('sanctum')->check()) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized access')
            ], 401);
        }

        $request->validate([
            'coupon_code' => 'required|string',
            'subtotal' => 'required|numeric|min:0'
        ]);

        $couponCode = $request->coupon_code;
        $subtotal = $request->subtotal;

        $coupon = Coupon::where('code', $couponCode)->first();

        if (!$coupon) {
            return response()->json([
                'success' => false,
                'valid' => false,
                'message' => __('Invalid coupon code.')
            ], 404);
        }

        // Check if coupon is active
        if ($coupon->status != 1) {
            return response()->json([
                'success' => false,
                'valid' => false,
                'message' => __('This coupon is not active.')
            ], 400);
        }

        // Check if coupon has expired
        $currentDate = now()->format('Y-m-d');
        if ($coupon->expire_date <= $currentDate) {
            return response()->json([
                'success' => false,
                'valid' => false,
                'message' => __('This coupon has expired.')
            ], 400);
        }

        // Calculate discount
        $discountAmount = 0;
        if ($coupon->discount_type == 'percentage') {
            $discountAmount = ($subtotal * $coupon->discount) / 100;
        } else {
            $discountAmount = min($coupon->discount, $subtotal); // Can't discount more than subtotal
        }

        $newTotal = max(0, $subtotal - $discountAmount);

        return response()->json([
            'success' => true,
            'valid' => true,
            'message' => __('Coupon applied successfully.'),
            'coupon' => $this->formatCoupon($coupon),
            'calculation' => [
                'subtotal' => round($subtotal, 2),
                'discount_amount' => round($discountAmount, 2),
                'new_total' => round($newTotal, 2),
            ]
        ]);
    }

    /**
     * Apply coupon and get calculation preview
     * Same as validate but with more detailed breakdown for checkout
     */
    public function applyCoupon(Request $request)
    {
        if (!Auth::guard('sanctum')->check()) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized access')
            ], 401);
        }

        $request->validate([
            'coupon_code' => 'required|string',
            'subtotal' => 'required|numeric|min:0',
            'tax_rate' => 'nullable|numeric|min:0',
            'delivery_charge' => 'nullable|numeric|min:0'
        ]);

        $couponCode = $request->coupon_code;
        $subtotal = $request->subtotal;
        $taxRate = $request->tax_rate ?? 0;
        $deliveryCharge = $request->delivery_charge ?? 0;

        $coupon = Coupon::where('code', $couponCode)->first();

        if (!$coupon) {
            return response()->json([
                'success' => false,
                'valid' => false,
                'message' => __('Invalid coupon code.')
            ], 404);
        }

        // Check if coupon is active
        if ($coupon->status != 1) {
            return response()->json([
                'success' => false,
                'valid' => false,
                'message' => __('This coupon is not active.')
            ], 400);
        }

        // Check if coupon has expired
        $currentDate = now()->format('Y-m-d');
        if ($coupon->expire_date <= $currentDate) {
            return response()->json([
                'success' => false,
                'valid' => false,
                'message' => __('This coupon has expired.')
            ], 400);
        }

        // Calculate discount
        $discountAmount = 0;
        if ($coupon->discount_type == 'percentage') {
            $discountAmount = ($subtotal * $coupon->discount) / 100;
        } else {
            $discountAmount = min($coupon->discount, $subtotal);
        }

        $subtotalAfterDiscount = max(0, $subtotal - $discountAmount);

        // Calculate tax on discounted amount
        $taxAmount = ($subtotalAfterDiscount * $taxRate) / 100;

        // Calculate final total
        $total = $subtotalAfterDiscount + $taxAmount + $deliveryCharge;

        return response()->json([
            'success' => true,
            'valid' => true,
            'message' => __('Coupon applied successfully.'),
            'coupon' => $this->formatCoupon($coupon),
            'order_summary' => [
                'subtotal' => round($subtotal, 2),
                'coupon_code' => $coupon->code,
                'coupon_type' => $coupon->discount_type,
                'coupon_value' => $coupon->discount,
                'discount_amount' => round($discountAmount, 2),
                'subtotal_after_discount' => round($subtotalAfterDiscount, 2),
                'tax_rate' => $taxRate,
                'tax_amount' => round($taxAmount, 2),
                'delivery_charge' => round($deliveryCharge, 2),
                'total' => round($total, 2),
            ]
        ]);
    }

    /**
     * Remove coupon and recalculate
     */
    public function removeCoupon(Request $request)
    {
        if (!Auth::guard('sanctum')->check()) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized access')
            ], 401);
        }

        $request->validate([
            'subtotal' => 'required|numeric|min:0',
            'tax_rate' => 'nullable|numeric|min:0',
            'delivery_charge' => 'nullable|numeric|min:0'
        ]);

        $subtotal = $request->subtotal;
        $taxRate = $request->tax_rate ?? 0;
        $deliveryCharge = $request->delivery_charge ?? 0;

        // Calculate tax on full amount
        $taxAmount = ($subtotal * $taxRate) / 100;

        // Calculate final total
        $total = $subtotal + $taxAmount + $deliveryCharge;

        return response()->json([
            'success' => true,
            'message' => __('Coupon removed.'),
            'order_summary' => [
                'subtotal' => round($subtotal, 2),
                'coupon_code' => null,
                'coupon_type' => null,
                'coupon_value' => null,
                'discount_amount' => 0,
                'subtotal_after_discount' => round($subtotal, 2),
                'tax_rate' => $taxRate,
                'tax_amount' => round($taxAmount, 2),
                'delivery_charge' => round($deliveryCharge, 2),
                'total' => round($total, 2),
            ]
        ]);
    }

    /**
     * Get coupon details by code
     */
    public function couponDetails(Request $request)
    {
        if (!Auth::guard('sanctum')->check()) {
            return response()->json([
                'success' => false,
                'message' => __('Unauthorized access')
            ], 401);
        }

        $request->validate([
            'coupon_code' => 'required|string'
        ]);

        $coupon = Coupon::where('code', $request->coupon_code)->first();

        if (!$coupon) {
            return response()->json([
                'success' => false,
                'message' => __('Coupon not found.')
            ], 404);
        }

        $currentDate = now()->format('Y-m-d');
        $isValid = $coupon->status == 1 && $coupon->expire_date > $currentDate;

        return response()->json([
            'success' => true,
            'coupon' => $this->formatCoupon($coupon),
            'is_valid' => $isValid,
            'validity_reason' => !$isValid
                ? ($coupon->status != 1 ? __('Coupon is inactive') : __('Coupon has expired'))
                : null
        ]);
    }

    /**
     * Format coupon for response
     */
    private function formatCoupon($coupon)
    {
        $currentDate = now()->format('Y-m-d');

        return [
            'id' => $coupon->id,
            'title' => $coupon->title,
            'code' => $coupon->code,
            'discount' => $coupon->discount,
            'discount_type' => $coupon->discount_type,
            'discount_display' => $coupon->discount_type == 'percentage'
                ? $coupon->discount . '%'
                : float_amount_with_currency_symbol($coupon->discount),
            'discount_on' => $coupon->discount_on,
            'expire_date' => $coupon->expire_date,
            'is_expired' => $coupon->expire_date <= $currentDate,
            'days_remaining' => max(0, now()->diffInDays($coupon->expire_date, false)),
            'status' => $coupon->status == 1 ? 'active' : 'inactive',
        ];
    }
}
