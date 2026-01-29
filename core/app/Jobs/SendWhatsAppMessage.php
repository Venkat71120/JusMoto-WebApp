<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Modules\SMSGateway\app\Models\SmsGateway;
use Twilio\Rest\Client;

class SendWhatsAppMessage implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    protected $receiverNumber;
    protected $message;
    public function __construct($receiverNumber,$message)
    {
        $this->receiverNumber = $receiverNumber;
        $this->message = $message;
    }

    /**
     * Execute the job.
     */
    public function handle():void
    {
        $msg="";

       $smsGateway=SmsGateway::where("name","twilio")->first();
       $credential=$smsGateway->credentials;
       $credential=json_decode($credential);

        $accountSid = $credential->twilio_sid;
        $authToken = $credential->twilio_auth_token;
        $senderNumber=$credential->twilio_number;

       

        $twilio = new Client($accountSid, $authToken);
        try{
            $twilio->messages->create
            ("whatsapp:$this->receiverNumber", // to
                [
                    "from" => "whatsapp:$senderNumber",
                    "body" => $this->message,
                ]
            );
          
        }
        catch (\Exception $exception){
          
        }


    }
}
