<?php

namespace App\Http\Controllers\Frontend\Website;

use App\Http\Controllers\Controller;
use App\Mail\BasicMail;
use App\Models\Backend\FormBuilder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function contactMessageSend(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'your-name' => 'required',
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required',
            'custom_form_id' => 'required',
        ]);

        if ($validator->fails()) {
            toastr_error($validator->errors()->first());
            return back()
                ->withInput();
        }

        $data = $request->only('your-name', 'email','message', 'custom_form_id');

        $fullMessage = "Name: {$data['your-name']}\n";
        $fullMessage .= "Email: {$data['email']}\n";
        $fullMessage .= "Message:\n{$data['message']}";
        $fullMessage = nl2br(e($fullMessage));
        $custom_form_id = $data['custom_form_id'];
        $formBuilder= FormBuilder::find($custom_form_id);

        unset($request['custom_form_id']);
        unset($request['gcaptcha_token']);
        // Decode fields column
        $fields = json_decode($formBuilder->fields, true);

        // Get success message
        $successMessage = $fields['success_message'] ?? '';

        // Get receiving email (if stored inside fields)
        $receivingEmail = $formBuilder->email ?? '';

        try {

            Mail::to($receivingEmail)->send(new BasicMail([
                'subject' =>$request->subject,
                'message' => $fullMessage
            ]));

            toastr_success($successMessage);
            return redirect()->back();
        } catch (\Exception $e) {
            toastr_error(__('Your message has not been sent successfully.'));
            return redirect()->back();
        }

        toastr_error(__('Your message has not been sent successfully.'));
        return redirect()->back();
    }
}
