<?php

namespace App\Http\Controllers\Vue;

use App\Mail\ContactEmail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function contact(Request $request) {
        $data = [
            'name' => request('name'),
            'email' => request('email'),
            'phone' => request('phone'),
            'subject' => request('subject'),
            'message' => request('message'),
        ];

        return Mail::to('info@shantiaz.org')->send(new ContactEmail($data));
    }
}
