<?php

namespace App\Http\Controllers\Admin;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Shanti\Notifications\NotificationInterface;

class CronController extends Controller
{

//    public function birthdays()
//    {
//        $users = User::whereRaw('MONTH(anniversary) =' . date('m'))
//            ->whereRaw('DAY(anniversary) =' . date('d'))
//            ->where('membership_expires', '>=', date('Y-m-d'))->get();
//
//        $data = array();
//        foreach ($users as $user) {
//            $data[] = array('recipient' => $user->email, 'first_name' => $user->first_name);
//        }
//
//        $this->cron->sendBirthdayCards($data);
//
//        return view('cron.birthdays', array(
//            'users' => $users
//        ));
//    }
//
//    public function bellyButton()
//    {
//        $users = User::whereRaw('MONTH(birthday) =' . date('m'))
//            ->whereRaw('DAY(birthday) =' . date('d'))
//            ->where('membership_expires', '>=', date('Y-m-d'))->get();
//
//
//        $data = array();
//        foreach ($users as $user) {
//            $data[] = array('recipient' => $user->email, 'first_name' => $user->first_name);
//        }
//
//        $this->cron->sendBellyButtonBirthdayCards($data);
//
//        return view('cron.belly-button-birthdays', array(
//            'users' => $users
//        ));
//    }

    public function news(NotificationInterface $notifier)
    {
        $articles = Post::latest()->get();
        $body = view('emails.cron.weekly-news', [
            'articles' => $articles,
            'headline' => 'News From the Phoenix Shanti Group'
        ])->render();
        // echo $body; die();

        $notifier->notify('Weekly News from the Phoenix Shanti Group', $body);
    }

}
