<?php

namespace Modules\Wallet\app\Http\Services;

use Intervention\Image\Facades\Image;
use Modules\Wallet\app\Models\Transaction;

class WalletDepositService
{
    public function manual_order($request, $client_id,$transaction_id)
    {
        if($request->hasFile('manual_payment_image')){
            $manual_payment_image = $request->manual_payment_image;
            $img_ext = $manual_payment_image->extension();
            $manual_payment_image_name = 'manual_attachment_'.time().'.'.$img_ext;

            if(in_array($img_ext,['jpg','jpeg','png','pdf'])){
                $manual_image_path = 'assets/uploads/manual-payment/deposit/';
                if (!file_exists($manual_image_path)) {
                    mkdir($manual_image_path, 0755, true);
                }
                if (in_array($img_ext,['jpg','jpeg','png'])) {
                    $resize_full_image = Image::make($request->manual_payment_image);
                    $resize_full_image->save($manual_image_path .'/'. $manual_payment_image_name);
                }else{
                    $manual_payment_image->move($manual_image_path,$manual_payment_image_name);
                }


                $transaction=Transaction::find($transaction_id);
                $transaction->payment_gateway = 'manual_payment';
                $transaction->payment_attachment = $manual_payment_image_name;
                $transaction->save();


                toastr_success('Deposit completed successfully.');
                return redirect()->route('client.wallet.deposit.payment.process.success',$transaction_id);
            }else{
                toastr_error('Image type not supported');
                return back();
            }
        }
    }
}
