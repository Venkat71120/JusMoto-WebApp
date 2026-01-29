<?php

namespace Modules\Wallet\app\Http\Services;

use Kreait\Firebase\Factory;
use Kreait\Firebase\Messaging\CloudMessage;
use Kreait\Firebase\Messaging\Notification;

class WalletDepositNotification
{
    public function depositNotification($transaction)
    {

        // admin for deposit notification
        try {
            $message = __('A new wallet deposit (Transaction #:id) has been made by client #:user.', [
                'id' => $transaction->id,
                'user' => $transaction->user_id
            ]);

            admin_notification(
                $transaction->id,
                $transaction->user_id,
                'transaction',
                $message,
                'unread'
            );
        }catch (\Exception $exception){}

        // Check the main order user's type and create a notification if the user type is 1
        $main_user = $transaction->user;
        if ($main_user) {
            $user_firebase_token = $main_user->firebase_token;

            $user_token = [];
            if (!empty($user_firebase_token)) {
                $user_token = is_array($user_firebase_token)
                    ? $user_firebase_token
                    : [$user_firebase_token];
            }

            $user_title = __('Wallet Deposit Initiated');
            $user_body = __('Your wallet deposit of :amount has been initiated and is pending payment confirmation. Transaction ID: #:id.', [
                'amount' => float_amount_with_currency_symbol($transaction->amount),
                'id' => $transaction->id,
            ]);

            $this->sendUserNotification($transaction->id, $main_user->id, $user_body);

            // Send notifications to all providers in one go
            if (!empty($user_token)) {
                $user_notification_data = [
                    "title" => $user_title,
                    "detailed_title" => "-",
                    "identify" => $transaction->id, // identify
                    "sub_order_id" => 0, // sub order id
                    "user_id" => $main_user->id ?? 0, // client id
                    "body" => $user_body,
                    "description" => "-",
                    "type" => "transaction",
                    "sound" => "default",
                    "screen" => "-"
                ];
                $this->sendFirebaseNotification($user_token, $user_title, $user_body, $user_notification_data);
            }

        }

    }

    public function completeDepositNotification($transaction)
    {

        // admin for deposit notification
        try {
            $message = __('Wallet deposit completed: Transaction #:id by client #:user for amount :amount.', [
                'id' => $transaction->id,
                'user' => $transaction->user_id,
                'amount' => float_amount_with_currency_symbol($transaction->amount)
            ]);


            admin_notification(
                $transaction->id,
                $transaction->user_id,
                'transaction',
                $message,
                'unread'
            );
        }catch (\Exception $exception){}

        // Check the main order user's type and create a notification if the user type is 1
        $main_user = $transaction->user;
        if ($main_user) {
            $user_firebase_token = $main_user->firebase_token;

            $user_token = [];
            if (!empty($user_firebase_token)) {
                $user_token = is_array($user_firebase_token)
                    ? $user_firebase_token
                    : [$user_firebase_token];
            }

            $user_title = __('Wallet Deposit Successful');
            $user_body = __('Your wallet deposit of :amount has been successfully completed. Transaction ID: #:id.', [
                'amount' => float_amount_with_currency_symbol($transaction->amount),
                'id' => $transaction->id,
            ]);

            $this->sendUserNotification($transaction->id, $main_user->id, $user_body);

            // Send notifications to all providers in one go
            if (!empty($user_token)) {
                $user_notification_data = [
                    "title" => $user_title,
                    "detailed_title" => "-",
                    "identify" => $transaction->id, // identify
                    "sub_order_id" => 0, // sub order id
                    "user_id" => $main_user->id ?? 0, // client id
                    "body" => $user_body,
                    "description" => "-",
                    "type" => "transaction",
                    "sound" => "default",
                    "screen" => "-"
                ];
                $this->sendFirebaseNotification($user_token, $user_title, $user_body, $user_notification_data);
            }

        }

    }

    private function sendUserNotification($transaction_id, $user_id, $message)
    {
        user_notification($transaction_id, $user_id, 'transaction', $message, 'unread');
    }

    private function sendAdminNotification($transaction_id, $admin_id, $message)
    {
        admin_notification($transaction_id, $admin_id, 'transaction', $message, 'unread');
    }

    function sendFirebaseNotification(array $firebaseTokens, $title, $body, $data)
    {

        try {
            // Check if the third parameter (image URL) is being passed as an array.
            $imageUrl = isset($data['imageUrl']) && is_string($data['imageUrl']) ? $data['imageUrl'] : null;
            // Path to the Firebase credentials JSON file
            $credentialsPath = storage_path('app/firebase/firebase_credentials.json');
            // Load the credentials from the JSON file
            $jsonCredentials = file_get_contents($credentialsPath);
            $credentials = json_decode($jsonCredentials, true);
            // Convert to JSON
            $jsonCredentials = json_encode($credentials);
            // Initialize Firebase Admin SDK
            $factory = (new Factory)->withServiceAccount($jsonCredentials);
            $messaging = $factory->createMessaging();
            // Create the Notification object
            $notification = Notification::create($title, $body, $imageUrl);
            // Process the data to ensure all values are scalar
            $processedData = [];
            foreach ($data as $key => $value) {
                // Convert array values to JSON, otherwise cast to string
                if (is_array($value)) {
                    // Ensure only top-level arrays are converted to JSON
                    $processedData[$key] = json_encode($value); // Convert array to JSON string
                } else {
                    $processedData[$key] = (string)$value; // Ensure it's a string
                }
            }

            // Prepare the data array without nested arrays
            $dataToSend = array_merge(
                [
                    'click_action' => 'FLUTTER_NOTIFICATION_CLICK',
                    'notification' => json_encode([
                        'title' => $title,
                        'body' => $body,
                    ]),
                ],
                $processedData
            );

            $firebaseTokens =  $firebaseTokens ?? [];

            $firebaseTokens = array_filter($firebaseTokens, fn($token) => !empty($token) && is_string($token));

            if (!empty($firebaseTokens)) {
                $message = CloudMessage::new()->withData($dataToSend);
                $messaging->sendMulticast($message, $firebaseTokens);
            }





        }catch (\Exception $exception){}
    }
}
