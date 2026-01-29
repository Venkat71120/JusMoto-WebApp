<?php

namespace App\Jobs;

use App\Mail\OrderMail;
use App\Models\Backend\Admin;
use App\Models\Service;
use App\Models\SubOrder;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendOrderCancelEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $order_details;

    public function __construct($order_details)
    {
        $this->order_details = $order_details;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $order_details = $this->order_details;

        // Get unique admin IDs
        $service_admin_ids = $order_details->admin_id;

        $service_admin_ids=json_decode($service_admin_ids);
        $service_admin_ids = array_unique($service_admin_ids);

        // Get unique provider emails
        $admins = Admin::whereIn('id', $service_admin_ids)->get();
       

        // Get unique client email
        $client = User::select('id', 'email')->where('id', $order_details->user_id)->first();

        // Email details
        $mail_subject = get_static_option('order_cancel_email_subject') ?? __('Order Cancel #');
        $message_for_admin = get_static_option('order_cancel_admin_message') ?? __('One Order Cancel #');
        $message_for_client = get_static_option('order_cancel_client_message') ?? __('You have successfully canceled an order #');

        // Send order email to admin
        if ($admins->isNotEmpty()) {
            foreach ($admins as $admin) {
                try {
                    Mail::to($admin->email)->send(new OrderMail(strip_tags($mail_subject) . $order_details->id, $order_details,strip_tags($message_for_admin) . $order_details->id, 0));// 0 for admin type
                } catch (\Exception $e) {
                   
                }
            }
        }

        // Send order email to client
        if ($client) {
            try {
                Mail::to($client->email)->send(new OrderMail(strip_tags($mail_subject) . $order_details->id, $order_details, $message_for_client, 1));//1 for client type
            } catch (\Exception $e) {
                 
            }
        }
    }
}
