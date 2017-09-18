<?php

Route::get('/', 'Home\HomeController@main');

//Route::get('/', 'Home\HomeController@index');
//Route::get('/mission', 'Home\AboutController@mission');
//Route::get('/history', 'Home\AboutController@history');
//Route::get('/cultural-competency', 'Home\AboutController@culturalCompetency');
//Route::get('/privacy-policy', 'Home\AboutController@privacyPolicy');
//Route::get('/hiv-housing', 'Home\ServicesController@housing');
//Route::get('/hiv-services', 'Home\ServicesController@services');
//Route::get('/getting-started', 'Home\HomeController@gettingStarted');
//Route::get('/donate', 'Home\SupportController@donate');
//Route::get('/volunteer', 'Home\SupportController@volunteer');
//Route::get('/resources', 'Home\SupportController@resources');
//Route::get('/contact', 'Home\ContactController@index');
//Route::get('/staff', 'Home\ContactController@staff');
//Route::get('/board', 'Home\ContactController@board');
//
//Auth::routes();
//
//Route::get('/dashboard', 'Auth\DashboardController@index')->name('dashboard');

Route::resource('posts', 'Vue\PostController');
Route::post('mailchimp', 'Vue\MailChimpController@store');
Route::post('contact', 'Vue\EmailController@contact');
