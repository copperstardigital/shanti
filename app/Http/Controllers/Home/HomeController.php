<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index() {
        return view('home.index');
    }

    public function about() {
        return view('home.about');
    }

    public function gettingStarted() {
        return view('home.getting-started');
    }
}
