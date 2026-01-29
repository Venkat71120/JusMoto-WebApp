<?php

namespace App\Http\Controllers\Backend;

use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Http\Services\UpdateDiscountPrice;
use App\Models\Backend\AdminNotification;
use App\Models\Offer;
use App\Models\OfferService;
use App\Models\Service;
use App\Rules\IsExistOfferProductRule;
use App\Rules\IsExistOfferServiceEditRule;
use App\Rules\IsExistOfferProductEditRule;
use App\Rules\IsExistOfferServiceRule;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OfferController extends Controller
{
    public function allOffers()
    {
        $offers = Offer::with('offerService.service')->latest()->paginate(10);

        return view('backend.pages.admin.offer.all_offers', compact('offers'));
    }

    public function offerDelete($id)
    {
        try {
            $offer = Offer::with('offerService')->findOrFail($id);

            if (!empty($offer->metaData())) {

                $offer->metaData()->delete();
            }

            $offer->offerService()->delete();
            $offer->delete();

            return redirect()->back()->with(FlashMsg::item_delete(__('offer Deleted Success')));
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with(FlashMsg::item_delete(__('offer not found.')));
        } catch (\Exception $e) {
            return redirect()->back()->with(FlashMsg::item_delete(__('An error occurred while deleting the offer')));
        }
    }


    // search category
    public function offerSearch(Request $request)
    {
        $offers = Offer::with("offerService")->where('title', 'LIKE', "%" . strip_tags($request->string_search) . "%")->latest()->paginate(10);
        return $offers->total() >= 1 ? view(
            'backend.pages.admin.offer.search-offer',
            compact('offers')
        )->render() : response()->json(['status' => __('nothing')]);
    }

    //  offer pagination
    public function offerPaginate(Request $request)
    {
        if ($request->ajax()) {
            $offers = Offer::with("offerService")->latest()->paginate(10);
            return view('backend.pages.admin.offer.search-offer', compact('offers'))->render();
        }
    }

    public function bulkAction(Request $request)
    {
        try {
            // Fetch offers with the requested IDs and eager load relationships
            $offers = Offer::with("offerService")->whereIn('id', $request->ids)->get();

            // Loop through each offer to delete related records
            foreach ($offers as $offer) {
                // Delete related models
                $offer->metaData()->delete(); // Deletes the related meta data
                $offer->offerService()->delete();
                // Finally, delete the offer itself
                $offer->delete();
            }
        } catch (\Exception $e) {
        }

        return response()->json(['status' => 'ok']);
    }

    public function addOffer(Request $request)
    {

        if ($request->isMethod('post')) {

            // Validate the request data
            $request->validate([
                'title' => 'required|max:191',
                'subtitle' => 'required|max:100',
                'image' => 'nullable|integer',
                'offer_service_id' => 'nullable',
                'offer_service_id.*' => ['distinct',new IsExistOfferServiceRule], // Ensure it's an array and requiredoffer
                'offer_product_id'=>'nullable',
                'offer_product_id.*' => ['distinct',new IsExistOfferProductRule],
                'expaired_at' => 'required|date',
                'percentage'=>'required|integer|between:0,100'

            ], [
                'title.required' => __('The title field is required.'),
                'title.max' => __('The title must not exceed 191 characters.'),
                'subTitle.required' => __('The subtitle field is required.'),
                'subTitle.max' => __('The subtitle must  not be exceed 100 characters.'),
                'image.required' => __('The offer image is required.'),
                'choose.required' => __('Choose either service or product.'),
                'offer_service_id.required_without' => __('Select at least one service.'),
                'offer_product_id.required_without' => __('Select at least one product.'),
                'expaired_at.required' => __('The expaired date is required.'),
                'offer_service_id.distinct' => __('select different services.'),
                'offer_product_id.distinct' => __('select different products.'),
                'percentage.required' => __('The percentage field is required.'),
                'percentage.integer' => __('The percentage must be integer'),
                'percentage.between' => __('The percentage must be between 1 and 100.')

            ]);

            $chooseService=$request->choose1;
            $chooseProduct=$request->choose2;

            if($chooseService !='service_select' && $chooseProduct !='product')
            {
                 return redirect()->back()->with(FlashMsg::item_delete(__('Choose either service or product or both.')));
            }

            $offerProductIds=null;
            $offerServiceIds=null;

            if($request->offer_product_id)
            {
                $offerProductIds = array_filter($request->offer_product_id);
            }
            else
            {
                $offerProductIds = null;
            }

            if($request->offer_service_id)
            {
                $offerServiceIds = array_filter($request->offer_service_id);
            }
            else{
                $offerServiceIds = null;
            }


            if($chooseService=="service_select" && !$offerServiceIds)
            {
                 return redirect()->back()->with(FlashMsg::item_delete(__('Select at least one service.')));
            }
            else if($chooseProduct=="product" && !$offerProductIds)
            {
                 return redirect()->back()->with(FlashMsg::item_delete(__('Select at least one product.')));
            }


            $offer_image = $request->image;
            $percentage=$request->percentage;
            // Create a new offer instance
            $offer = Offer::create([
                'title' => $request->title,
                'subTitle' => $request->subtitle,
                'expires_at' => $request->expaired_at,
                'offerPercentage' => $percentage,
                'image' => $offer_image,
                'status' => $request->status,
                'is_primary' => $request->is_primary,

            ]);


            // Generate meta tags
            $words = explode(' ', $request->input('title'));
            $tags = collect($words)->map(fn($word) => strtolower(trim($word)));
            $tags_name = $tags->implode(', ');

            $Metas = [
                'meta_title' => purify_html($request->title),
                'meta_tags' => purify_html($tags_name),
                'meta_description' => substr(strip_tags(purify_html($request->description)), 0, 100),
                'facebook_meta_tags' => purify_html($tags_name),
                'facebook_meta_description' => substr(strip_tags(purify_html($request->description)), 0, 100),
                'facebook_meta_image' => $request->image,
                'twitter_meta_tags' => purify_html($tags_name),
                'twitter_meta_description' => substr(strip_tags(purify_html($request->description)), 0, 100),
                'twitter_meta_image' => $request->image,
            ];

            $last_offer_id = $offer->id;


            DB::beginTransaction();
            try {
                $offer->metaData()->create($Metas);
                DB::commit();
            } catch (\Throwable $th) {
                DB::rollBack();
            }
            $offer_update = false;

            $this->insertRelatedRecords($request, $last_offer_id, $offer_update,$chooseService,$chooseProduct);


            return redirect()->back()->with(FlashMsg::item_new(__('offer Added Success')));
        }


        $services = Service::all();



        return view('backend.pages.admin.offer.create', compact('services'));
    }

    public function adminEditOffer(Request $request, $id,$serviceId=null)
    {


        if ($request->isMethod('post')) {


            $request->validate([
                'title' => 'required|max:191',
                'subtitle' => 'required|max:100',
                'image' => 'nullable|integer',
                'offer_service_id' => 'nullable',
                'offer_service_id.*' => ['distinct',new IsExistOfferServiceEditRule($id)],
                'offer_product_id'=>'nullable',
                'offer_product_id.*' => ['distinct',new IsExistOfferProductEditRule($id)],
                'expaired_at' => 'required|date',
                'percentage'=>'required|integer|between:0,100'

            ], [
                'title.required' => __('The title field is required.'),
                'title.max' => __('The title must not exceed 191 characters.'),
                'subTitle.required' => __('The subtitle field is required.'),
                'subTitle.max' => __('The subtitle must not  be exceed 100 characters.'),
                'expaired_at.required' => __('The expaired date is required.'),
                'image.required' => __('The offer image is required.'),
                'offer_service_id.distinct' => __('select different services.'),
                'offer_product_id.distinct' => __('select different products.'),
                'percentage.required' => __('The percentage field is required.'),
                'percentage.integer' => __('The percentage must be integer'),
                'percentage.between' => __('The percentage must be between 1 and 100.')

            ]);


            $chooseService=$request->choose1;
            $chooseProduct=$request->choose2;

            if($chooseService !='on' && $chooseProduct !='on')
            {
                 return redirect()->back()->with(FlashMsg::item_delete(__('Choose either service or product or both.')));
            }
            $offerProductIds=null;
            $offerServiceIds=null;

            if($request->offer_product_id)
            {
                $offerProductIds = array_filter($request->offer_product_id);
            }
            else
            {
                $offerProductIds = null;
            }

            if($request->offer_service_id)
            {
                $offerServiceIds = array_filter($request->offer_service_id);
            }
            else{
                $offerServiceIds = null;
            }



            if($chooseService=="on" && !$offerServiceIds)
            {
                 return redirect()->back()->with(FlashMsg::item_delete(__('Select at least one service.')));
            }
            else if($chooseProduct=="on" && !$offerProductIds)
            {
                 return redirect()->back()->with(FlashMsg::item_delete(__('Select at least one product.')));
            }

            $services_ids = array_map('intval',(explode(',', $request->deleted_id)));
            $product_ids = array_map('intval',(explode(',', $request->product_deleted_id)));


            if (!empty($services_ids)) {

               $aa= OfferService::where('offer_id', $id)
                    ->whereIn('service_id', $services_ids)
                    ->delete();


            }
            if(!empty($product_ids))
            {
                OfferService::where('offer_id', $id)
                    ->whereIn('service_id', $product_ids)
                    ->delete();
            }



            $offer = Offer::findOrFail($id);



            $offer_image = $request->image;
            $percentage=$request->percentage;
            if($offer_image!==null)
            {
                $offer->update([
                    'title' => $request->title,
                    'subTitle' => $request->subtitle,
                    'expires_at' => $request->expaired_at,
                    'offerPercentage' => $percentage,
                    'image' => $offer_image,
                    'status' => $request->status,
                    'is_primary' => $request->is_primary,

                ]);
            }
            else
            {
                // Create a new Offer instance
                $offer->update([
                    'title' => $request->title,
                    'subTitle' => $request->subtitle,
                    'expires_at' => $request->expaired_at,
                    'status' => $request->status,
                    'is_primary' => $request->is_primary,
                ]);
            }




            // Generate meta tags
            $words = explode(' ', $request->input('title'));
            $tags = collect($words)->map(fn($word) => strtolower(trim($word)));
            $tags_name = $tags->implode(', ');

            $Metas = [
                'meta_title' => purify_html($request->title),
                'meta_tags' => purify_html($tags_name),
                'meta_description' => substr(strip_tags(purify_html($request->description)), 0, 100),
                'facebook_meta_tags' => purify_html($tags_name),
                'facebook_meta_description' => substr(strip_tags(purify_html($request->description)), 0, 100),
                'facebook_meta_image' => $request->image,
                'twitter_meta_tags' => purify_html($tags_name),
                'twitter_meta_description' => substr(strip_tags(purify_html($request->description)), 0, 100),
                'twitter_meta_image' => $request->image,
            ];

            // Retrieve the last inserted ID
            $last_offer_id = $offer->id;

            DB::beginTransaction();
            try {
                $offer->metaData()->update($Metas);
                DB::commit();

            }catch (\Throwable $th){
                DB::rollBack();
            }

            $offer_update = true;

            // Insert related records
            $this->insertRelatedRecords($request, $last_offer_id, $offer_update,$chooseService,$chooseProduct);

            return redirect()->back()->with(FlashMsg::item_new(__('Offer Updated Success')));
        }
        if($serviceId)
        {

            $offer = Offer::with(['offerService' => function($query) use ($serviceId) {
                $query->where('service_id', '!=', $serviceId);
            }])->findOrFail($id);

        }
        else
        {
            $offer = Offer::with('offerService')->findOrFail($id);
        }
        $type_check=OfferService::where("offer_id",$id)->get();
        $typeService ="false";
        $typeProduct ="false";
        foreach($type_check as $type)
        {
            if($type->type == '0')
            {
                $typeService="true";
                break;
            }
        }
        foreach($type_check as $type)
        {
            if($type->type == '1')
            {
                $typeProduct="true";
                break;
            }
        }
        $services = Service::all();
        return view('backend.pages.admin.offer.edit-offer', [
            'offer' => $offer,
            'services' => $services,
            'typeService' => $typeService,
            'typeProduct' => $typeProduct,



        ]);

    }

    private function insertRelatedRecords(Request $request, $offerId,$offer_update,$chooseService,$chooseProduct)
    {

        $service_ids=[];

        if ($offer_update){
            // Clear existing related records
            OfferService::where('offer_id', $offerId)->delete();
        }
        $includedOfferServices = [];
        if($chooseService=='service_select' || $chooseService=='on' )
        {
            $offerServiceIds = array_filter($request->offer_service_id);
            if($offerServiceIds)
            {
                foreach ($offerServiceIds as $key => $value) {

                    $includedOfferServices[] = [
                        'offer_id' => $offerId,
                        'service_id' => $value,
                        'type' => 0,
                    ];
                    $service_ids[]=$value;
                }
                OfferService::insert($includedOfferServices);

            }
        }
        if($chooseProduct=='product' || $chooseProduct == 'on')
        {
            $includedOfferServices = [];
            $offerProductIds = array_filter($request->offer_product_id);

            if($offerProductIds)
            {
                foreach ($offerProductIds as $key => $value) {

                    $includedOfferServices[] = [
                        'offer_id' => $offerId,
                        'service_id' => $value,
                        'type' => 1,
                    ];
                    $service_ids[]=$value;



                }
                OfferService::insert($includedOfferServices);

            }
        }



    }



    public function offerDetails($id)
    {
        $offer = Offer::with('offerService.service')->find($id);

        if (!$offer) {
            try {
                AdminNotification::where('identity', $id)->update(['is_read' => 'read']);
            } catch (\Exception $exception) {
            }

            abort(404);
        }

        AdminNotification::where('identity', $id)->update(['is_read' => 'read']);

        return view('backend.pages.admin.offer.offer-details', compact('offer'));
    }

    public function adminChangeStatus($id)
    {
        $offer = Offer::select('id', 'status')->where('id', $id)->first();


        if($offer)
        {
            if ($offer->status == 1) {
                $status = 0;
            } else {
                $status = 1;
            }
            Offer::where('id', $id)->update(['status' => $status]);

            return redirect()->back()->with(FlashMsg::item_new(__('Status Change Success')));
        }
        return redirect()->back()->with(FlashMsg::item_new(__('Offer not found')));
    }
    public function adminChangePrimaryOption($id)
    {
        $offer = Offer::select('id','is_primary')->where('id', $id)->first();



        if($offer){

            if ($offer->is_primary == 1) {
                $is_primary = '0';
            } else {
                $is_primary = '1';
                Offer::where('id','!=',$id)->update(['is_primary' => '0']);
            }
            Offer::where('id', $id)->update(['is_primary' => $is_primary]);

            return redirect()->back()->with(FlashMsg::item_new(__('Primary Option Change Success')));

        }
        return redirect()->back()->with(FlashMsg::item_new(__('Offer not found')));




    }
}
