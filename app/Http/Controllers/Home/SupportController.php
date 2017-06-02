<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SupportController extends Controller
{
    public function donate() {
        return view('support.donate');
    }

    public function volunteer() {
        return view('support.volunteer');
    }

    public function resources() {
        return view('support.resources');
    }
}
