<?php

namespace App\Http\Controllers\Vue;

use App\Mail\ContactEmail;
use App\Mail\ThirtiethAnniversary;
use App\Mail\ThirtiethConfirmation;
use App\Mail\VolunteerEmail;
use App\Models\User;
use function bcrypt;
use Carbon\Carbon;
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

    public function volunteer(Request $request) {
        $data = [
            'name' => request('name'),
            'email' => request('email'),
            'phone' => request('phone'),
            'position' => request('position'),
            'comments' => request('comments'),
        ];

        return Mail::to('info@shantiaz.org')->send(new VolunteerEmail($data));
    }

    public function thirtiethAnniversary(Request $request) {
        $data = [
            'name' => request('first_name') . ' ' . request('last_name'),
            'email' => request('email'),
            'phone' => request('phone'),
            'comments' => request('comments'),
        ];

        $user = User::where('email', request('email'))->first();
        if (empty($user)) {
            $user = User::create([
                'first_name' => request('first_name'),
                'last_name' => request('last_name'),
                'email' => request('email'),
                'phone_number' => request('phone'),
                'password' => bcrypt(request('email')),
            ]);
        }

        $user->rsvps()->create([
            'event_id' => 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        Mail::to('info@shantiaz.org')->send(new ThirtiethAnniversary($data));
        return Mail::to(request('email'))->send(new ThirtiethConfirmation($data));
    }
}
