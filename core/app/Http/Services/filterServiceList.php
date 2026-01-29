<?php

namespace App\Http\Services;

class filterServiceList
{
    public static function filterList($services,$minPrice, $maxPrice, $rating)
    {

        // Convert to collection if paginator not passed
        $services = collect($services);

        // Price
        if ($minPrice > 0 || ($maxPrice < PHP_INT_MAX && $maxPrice > 0)) {
            $services = self::filterByPrice($services, $minPrice, $maxPrice);
        }
        // Rating
        if (!empty($rating)) {
            $services = self::filterByRating($services, $rating);
        }


        return $services;
    }

    private static function filterByPrice($services, $minPrice, $maxPrice)
    {
        return $services->filter(function ($service) use ($minPrice, $maxPrice) {
            if (!$service->final_price) return false;

            return $service->final_price >= $minPrice &&
                $service->final_price <= $maxPrice;
        });
    }

    private static function filterByRating($services, $rating)
    {
        if ($rating == 5.00) {
            return $services->filter(fn($service) => $service->rating == 5);
        }

        return $services->filter(function ($service) use ($rating) {
            return $service->rating >= $rating && $service->rating < ($rating + 1);
        });
    }


}
