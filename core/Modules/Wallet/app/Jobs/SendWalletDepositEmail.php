<?php

namespace Modules\Wallet\app\Jobs;

use App\Mail\BasicMail;
use App\Mail\OrderMail;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendWalletDepositEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $transaction_details;

    public function __construct($transaction_details)
    {
        $this->transaction_details = $transaction_details;
    }

    public function handle(): void
    {
        $transaction =  $this->transaction_details;
        $client=$transaction->user;
        // Email details
        $mail_subject = __('Wallet Deposit Successful');
        $message_for_admin = __('Wallet deposit completed: Transaction #:id by client #:user for amount :amount.', [
            'id' => $transaction->id,
            'user' => $transaction->user_id,
            'amount' => float_amount_with_currency_symbol($transaction->amount)
        ]);
        $message_for_client = __('Your wallet deposit of :amount has been successfully completed. Transaction ID: #:id.', [
            'amount' => float_amount_with_currency_symbol($transaction->amount),
            'id' => $transaction->id,
        ]);
        $global_email = get_static_option('site_global_email');

        // Send admin global email
        try {
            Mail::to($global_email)->send(new BasicMail([
                'subject' => $mail_subject,
                'message' => $message_for_admin,
            ]));
        } catch (\Exception $e) {
        }

        // Send order email to client
        if ($client) {
            try {
                Mail::to($client->email)->send(new BasicMail([
                    'subject' => $mail_subject,
                    'message' => $message_for_client,
                ]));
            } catch (\Exception $e) {
            }
        }
    }
}
