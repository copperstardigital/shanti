<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AboutController extends Controller
{
     public function mission() {
         return view('about.mission');
     }

     public function history() {
         return view('about.history');
     }

     public function culturalCompetency() {
         return view('about.cultural-competency');
     }

     public function privacyPolicy() {
         return view('about.privacy-policy');
     }
}
