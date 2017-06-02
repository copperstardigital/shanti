<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContactController extends Controller
{
    public function index() {
        return view('contact.index');
    }

    public function staff() {
        return view('contact.staff');
    }

    public function board() {
        return view('contact.board');
    }
}
