<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ServicesController extends Controller
{
    public function housing() {
        return view('services.housing');
    }

    public function services() {
        return view('services.services');
    }
}
