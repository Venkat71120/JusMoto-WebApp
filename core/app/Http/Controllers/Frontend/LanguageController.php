<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Language;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LanguageController extends Controller
{
    public function makeDefault(Request $request)
    {
        $request->validate([
            'selected_lang'=>'required'

        ]);
        $client_id=Auth::user()->id;
        $client=User::where("id",$client_id)->first();
        $selected_lang=$request->selected_lang;
        $client->selected_lang=$selected_lang;
        $client->save();
        toastr_success('Language Change Successfully');
        return back();

    }
}
