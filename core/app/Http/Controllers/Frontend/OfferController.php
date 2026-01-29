<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Offer;
use Illuminate\Http\Request;
use App\Models\UserNotification;
use App\Http\Controllers\Controller;

class OfferController extends Controller
{

    public function details($offer_id, $notificationId = null)
    {
        $offer = Offer::findOrFail($offer_id);

        // Paginate offer services with their related services
        $offerServices = $offer->offerService()
            ->with('service')
            ->paginate(10);

        foreach ($offerServices as $offerService) {
            $service = $offerService->service;
            if ($service) {
                $service->discount_price = round(
                    $service->price - ($service->price * ($offer->offerPercentage / 100)),
                    2
                );
            }
        }
        UserNotification::where('id', $notificationId)->update(['is_read' => 'read']);

        return view('frontend.user.client.offer.offer-service-product-list', compact('offer', 'offerServices'));
    }



}
