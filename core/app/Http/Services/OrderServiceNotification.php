<?php

namespace App\Http\Services;

use App\Models\Order;
use App\Models\Service;
use Kreait\Firebase\Factory;
use Kreait\Firebase\Messaging\CloudMessage;
use Kreait\Firebase\Messaging\Notification;
use Illuminate\Support\Facades\Log;



class OrderServiceNotification
{
    public function createOrderNotification($last_order_id, $request)
    {
        // Fetch the order details along with related sub-orders
        $order_details = Order::with('user','OrderLocations', 'staff', 'orderItems')
            ->find($last_order_id);

        if (!$order_details) {
            return; // Order not found, exit the function
        }

        // admin for order notification
        try {
            admin_notification($last_order_id, $order_details->user_id, 'order', __("New Order Created"), 'unread');
        }catch (\Exception $exception){}

        // Check the main order user's type and create a notification if the user type is 1
        $main_user = $order_details->user;
        if ($main_user ) {
            $client_firebase_token = $main_user->firebase_token;

            if (!empty($client_firebase_token) && !is_array($client_firebase_token)) {
                $client_token = [$client_firebase_token];
            }

            $client_title = __("New Order Created.");
            $client_body = __("Your order ID: # :id has been placed successfully.", ['id' => $last_order_id]);
            $this->sendUserNotification($last_order_id, $main_user->id, $client_body);

            // Send notifications to all providers in one go
            if (!empty($client_token)) {
                    $client_notification_data = [
                        "title" => $client_title,
                        "detailed_title" => "-",
                        "identify" => $last_order_id, // identify
                        "sub_order_id" => 0, // sub order id
                        "user_id" => $main_user->id ?? 0, // client id
                        "body" => $client_body,
                        "description" => "-",
                        "type" => "order",
                        "sound" => "default",
                        "screen" => "-"
                    ];
                    $this->sendFirebaseNotification($client_token, $client_title, $client_body, $client_notification_data);
                   
            }

        }

    }
    public function cancelOrderNotification($last_order_id, $request)
    {
        // Fetch the order details along with related sub-orders
        $order_details = Order::with('user','OrderLocations', 'staff', 'orderItems')
            ->find($last_order_id);

        if (!$order_details) {
            return; // Order not found, exit the function
        }

        // admin for order notification
        try {
            admin_notification($last_order_id, $order_details->user_id, 'order', __("Order Canceled"), 'unread');
        }catch (\Exception $exception){}

        // Check the main order user's type and create a notification if the user type is 1
        $main_user = $order_details->user;
        if ($main_user ) {
            $client_firebase_token = $main_user->firebase_token;

            if (!empty($client_firebase_token) && !is_array($client_firebase_token)) {
                $client_token = [$client_firebase_token];
            }

            $client_title = __("Order Canceled.");
            $client_body = __("Your order ID: # :id has been canceled successfully.", ['id' => $last_order_id]);
            $this->sendUserNotification($last_order_id, $main_user->id, $client_body);

            // Send notifications to all providers in one go
            if (!empty($client_token)) {
                    $client_notification_data = [
                        "title" => $client_title,
                        "detailed_title" => "-",
                        "identify" => $last_order_id, // identify
                        "sub_order_id" => 0, // sub order id
                        "user_id" => $main_user->id ?? 0, // client id
                        "body" => $client_body,
                        "description" => "-",
                        "type" => "order",
                        "sound" => "default",
                        "screen" => "-"
                    ];
                    $this->sendFirebaseNotification($client_token, $client_title, $client_body, $client_notification_data);
                   
            }

        }

    }

    private function sendUserNotification($order_id, $user_id, $message)
    {
        user_notification($order_id, $user_id, 'order', $message, 'unread');
    }

    private function sendAdminNotification($order_id, $admin_id, $message)
    {
        admin_notification($order_id, $admin_id, 'order', $message, 'unread');
    }

   

    public function sendFirebaseNotification(array $firebaseTokens, $title, $body, $data)
    {
        try {
            $imageUrl = isset($data['imageUrl']) && is_string($data['imageUrl']) ? $data['imageUrl'] : null;

            $credentialsPath = storage_path('app/firebase/firebase_credentials.json');
            $jsonCredentials = file_get_contents($credentialsPath);
            $credentials = json_decode($jsonCredentials, true);
            $jsonCredentials = json_encode($credentials);

            $factory = (new Factory)->withServiceAccount($jsonCredentials);
            $messaging = $factory->createMessaging();

            // Prepare the data payload (only scalars or JSON strings)
            $processedData = [];
            foreach ($data as $key => $value) {
                $processedData[$key] = is_array($value) ? json_encode($value) : (string)$value;
            }

            $dataToSend = array_merge(
                [
                    'click_action' => 'FLUTTER_NOTIFICATION_CLICK',
                ],
                $processedData
            );

            // Create Notification object
            $notification = Notification::create($title, $body);

            if (!empty($imageUrl)) {
                $notification = $notification->withImageUrl($imageUrl);
            }    

            // Send to multiple tokens
            $message = CloudMessage::new()
                ->withNotification($notification)
                ->withData($dataToSend);

            $messaging->sendMulticast($message, $firebaseTokens);

        } catch (\Throwable $exception) {
            // Consider logging the exception
        }
    }

  

    public function orderStatusChanceNotification($sub_order, $provider = null){
       // Map status codes to title and body messages
       $statusMessages = [
        0 => [
            'title' => __("Order ID #:order_id and SubOrder ID #:suborder_id Pending", ['order_id' => $sub_order->order_id,'suborder_id' => $sub_order->id]),
            'body' => __("Your order has been created successfully.")
        ],
        1 => [
            'title' => __("Order ID #:order_id and SubOrder ID #:suborder_id Active", ['order_id' => $sub_order->order_id,'suborder_id' => $sub_order->id]),
            'body' => __("Your order has been activated successfully.")
        ],
        2 => [
            'title' => __("Order ID #:order_id and SubOrder ID #:suborder_id Completed", ['order_id' => $sub_order->order_id,'suborder_id' => $sub_order->id]),
            'body' => __("Your order has been completed successfully.")
        ],
        3 => [
            'title' => __("Order ID #:order_id and SubOrder ID #:suborder_id Delivered", ['order_id' => $sub_order->order_id,'suborder_id' => $sub_order->id]),
            'body' => __("Your order has been delivered successfully.")
        ],
        4 => [
            'title' => __("Order ID #:order_id and SubOrder ID #:suborder_id Cancelled", ['order_id' => $sub_order->order_id,'suborder_id' => $sub_order->id]),
            'body' => __("Your order has been cancelled.")
        ],
        5 => [
            'title' => __("Order ID #:order_id and SubOrder ID #:suborder_id Declined", ['order_id' => $sub_order->order_id,'suborder_id' => $sub_order->id]),
            'body' => __("Your order has been declined.")
        ]
    ];
    // Check if the status is in the array
    if (isset($statusMessages[$sub_order->status])) {
        $title = $statusMessages[$sub_order->status]['title'];
        $body = $statusMessages[$sub_order->status]['body'];
    } else {
        //in case status is not found
        $title = __("Unknown Status");
        $body = __("The status of your order is unknown.");
    }
     try{
        admin_notification($sub_order->order_id, $sub_order->client?->id, 'order', $title, 'unread');
     }catch(\Exception $e)
     {

     }


    // Get client token
    if (!empty($sub_order->client->firebase_token)) {
        $client_token[] = $sub_order->client?->firebase_token;
        // Prepare the dynamic data for notification
        $client_notification_data = [
            "title" => $title,
            "detailed_title" => "-",
            "identify" => $sub_order->order_id ?? 0, // identify
            "sub_order_id" => $sub_order->id ?? 0, // identify
            "user_id" => $sub_order->client?->id ?? 0, // user id
            "body" => $body,
            "description" => "-",
            "type" => "order",
            "sound" => "default",
            "screen" => "-"
        ];

        // create user notification
        user_notification($sub_order->order_id, $sub_order->client?->id, 'order', $body, 'unread');
        // Check if the array has tokens and send notification
        if (!empty($client_token)) {
            $this->sendFirebaseNotification($client_token, $title, $body, $client_notification_data);
        }
        
    }

    

    }

}
